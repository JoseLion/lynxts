import { expect } from "@assertive-ts/core";
import { it, suite } from "vitest";

suite("[Integration] main.test.tsx", () => {
  it("re-exports the library exports", async () => {
    const core = await import("../../src/main");

    expect(core).toHaveKeys(
      "ArrayField",
      "Field",
      "FormProvider",
      "arrayFieldOf",
      "fieldOf",
      "noValidate",
      "useArrayField",
      "useField",
      "useFieldValidation",
      "useForm",
      "useFormSelector",
    );
  });
});
