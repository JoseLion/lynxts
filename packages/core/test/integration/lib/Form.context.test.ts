import { expect } from "@assertive-ts/core";
import { renderHook } from "@testing-library/react";

import { useForm, useFormSelector } from "../../../src/lib/Form.context";

describe("[Integration] Form.context.test.ts", () => {
  describe(".useForm", () => {
    context("when the hook is rendered", () => {
      it("returns the complete Form context", () => {
        const { result } = renderHook(() => useForm());
        const { current } = result;

        expect(current.setTouched).toExist();
        expect(current.setValues).toExist();
        expect(current.setViolations).toExist();
        expect(current.submit).toExist();
        expect(current.submitted).toBeFalse();
        expect(current.touched).toBeEqual(new Map());
        expect(current.validation).toExist();
        expect(current.values).toBeEqual({ });
        expect(current.violations).toBeEqual(new Map());
      });
    });
  });

  describe(".useFormSelector", () => {
    context("when the hook is rendered", () => {
      it("returns only the selected value from the Form context", () => {
        const { result } = renderHook(() => useFormSelector(ctxt => ctxt.values));

        expect(result.current).toBeEqual({ });
      });
    });
  });
});
