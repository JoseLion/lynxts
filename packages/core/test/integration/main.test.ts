import { expect } from "@assertive-ts/core";

describe("[Integration] main.test.tsx", () => {
  it("re-exports the library exports", async () => {
    const core = await expect(import("../../src/main")).toBeResolved();

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
