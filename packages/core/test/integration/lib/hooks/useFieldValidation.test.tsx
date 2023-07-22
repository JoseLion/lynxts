import { expect } from "@stackbuilders/assertive-ts";
import { RenderHookResult, renderHook } from "@testing-library/react";
import Sinon from "sinon";
import { ObjectSchema, number, object, string } from "yup";

import { Path } from "../../../../src/lib/Form.context";
import { FormProvider } from "../../../../src/lib/Form.provider";
import { UseFieldValidation, useFieldValidation } from "../../../../src/lib/hooks/useFieldValidation";

interface User {
  age?: number;
  name: string;
}

const schema: ObjectSchema<User> = object({
  age: number().optional(),
  name: string().required(),
});

function renderWith(path: Path<User>): RenderHookResult<UseFieldValidation, never> {
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

describe("[Integration] useFieldValidation.test.tsx", () => {
  context("when the hook is rendered", () => {
    it("returns the error and required states", () => {
      const { result } = renderWith("name");
      const { current } = result;

      expect(current.error).toBeUndefined();
      expect(current.required).toBePresent();
    });
  });

  context("when the field is required", () => {
    it("sets the required state to true", () => {
      const { result } = renderWith("name");

      expect(result.current.required).toBeTrue();
    });
  });

  context("when the field is not required", () => {
    it("sets the required state to false", () => {
      const { result } = renderWith("age");

      expect(result.current.required).toBeFalse();
    });
  });
});
