import { expect } from "@stackbuilders/assertive-ts";
import { RenderHookResult, renderHook } from "@testing-library/react";
import Sinon from "sinon";
import { ObjectSchema, number, object, string } from "yup";

import { Path, ValueByPath } from "../../../../src/lib/Form.context";
import { FormProvider } from "../../../../src/lib/Form.provider";
import { UseField, useField } from "../../../../src/lib/hooks/useField";

interface User {
  age: number;
  name: string;
}

interface RenderOptions<K extends Path<User>, D extends Optional<ValueByPath<User, K>>> {
  fallback?: D;
  path: K;
  values?: Partial<User>;
}

const schema: ObjectSchema<User> = object({
  age: number().required(),
  name: string().required(),
});

function renderWith<
  K extends Path<User>,
  D extends Optional<ValueByPath<User, K>>,
>({ path, fallback, values }: RenderOptions<K, D>): RenderHookResult<UseField<ValueByPath<User, K>, D>, never> {
  return renderHook(() => useField(path, fallback), {
    wrapper(props) {
      return (
        <FormProvider<User> onSubmit={Sinon.fake} validation={schema} values={values}>
          {props.children}
        </FormProvider>
      );
    },
  });
}

describe("[Integration] useField.test.tsx", () => {
  context("when the hook is rendered", () => {
    it("returns the field value and state setters", () => {
      const { result } = renderWith({ path: "name", values: { name: "Alice" } });
      const { current } = result;

      expect(current.value).toBeEqual("Alice");
      expect(current.setTouched).toExist();
      expect(current.setValue).toExist();
    });
  });

  describe("fallback", () => {
    context("when the fallback is not provided", () => {
      it("starts the value as undefined and can change it back to undefined", () => {
        const { result, rerender } = renderWith({ path: "name" });

        expect(result.current.value).toBeUndefined();

        result.current.setValue("Alice");

        rerender();

        expect(result.current.value).toBeEqual("Alice");

        result.current.setValue(undefined);

        rerender();

        expect(result.current.value).toBeUndefined();
      });
    });

    context("when the fallback is defined", () => {
      it("starts the value with a default and falls back if changed to undefined", () => {
        const { result, rerender } = renderWith({ fallback: 0, path: "age" });

        expect(result.current.value).toBeZero();

        result.current.setValue(18);

        rerender();

        expect(result.current.value).toBeEqual(18);

        // TS won't allow, but checking for a runtime edge case
        result.current.setValue(undefined as unknown as number);

        rerender();

        expect(result.current.value).toBeZero();
      });
    });
  });

  describe(".setValue", () => {
    it("changes the field value", () => {
      const { result, rerender } = renderWith({ path: "name" });

      expect(result.current.value).toBeUndefined();

      result.current.setValue("Alice");

      rerender();

      expect(result.current.value).toBeEqual("Alice");
    });
  });
});
