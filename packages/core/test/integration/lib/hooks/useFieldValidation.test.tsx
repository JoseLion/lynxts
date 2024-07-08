import { expect } from "@assertive-ts/core";
import { type RenderHookResult, renderHook, waitFor } from "@testing-library/react";
import Sinon from "sinon";
import { describe, it, suite } from "vitest";
import { type ObjectSchema, isSchema, number, object, string } from "yup";
import { z } from "zod";

import { FormProvider, type FormProviderProps } from "../../../../src/lib/Form.provider";
import { type UseFieldValidation, useFieldValidation } from "../../../../src/lib/hooks/useFieldValidation";

import type { Path } from "../../../../src/lib/Form.context";

interface User {
  age?: number;
  name: string;
}

interface RenderOptions {
  path: Path<User>;
  schema: FormProviderProps<User>["validation"];
}

const yupSchema: ObjectSchema<User> = object({
  age: number().optional(),
  name: string().required(),
});

const zodSchema = z.object({
  age: z.number().optional(),
  name: z.string(),
});

function renderWith(options: RenderOptions): RenderHookResult<UseFieldValidation, never> {
  const { path, schema } = options;

  return renderHook(() => useFieldValidation(path), {
    wrapper(props) {
      return (
        <FormProvider<User> onSubmit={Sinon.fake} validation={schema}>
          {props.children}
        </FormProvider>
      );
    },
  });
}

suite("[Integration] useFieldValidation.test.tsx", () => {
  [yupSchema, zodSchema].forEach(schema => {
    const schemaName = isSchema(schema) ? "Yup" : "Zod";

    describe(`[${schemaName}] when the validation is a schema`, () => {
      describe("and the hook is rendered", () => {
        it("returns the error and required states", async () => {
          const { result } = renderWith({ path: "name", schema });
          const { current } = result;

          await waitFor(() => {
            expect(current.error).toBeUndefined();
            expect(current.required).toBePresent();
          });
        });
      });

      describe("and the field is required", () => {
        it("sets the required state to true", async () => {
          const { result } = renderWith({ path: "name", schema });

          await waitFor(() => {
            expect(result.current.required).toBeTrue();
          });
        });
      });

      describe("and the field is not required", () => {
        it("sets the required state to false", async () => {
          const { result } = renderWith({ path: "age", schema });

          await waitFor(() => {
            expect(result.current.required).toBeFalse();
          });
        });
      });
    });
  });
});
