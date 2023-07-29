import { expect } from "@stackbuilders/assertive-ts";

describe("[Integration] main.test.tsx", () => {
  it("re-exports the library exports", async () => {
    const core = await expect(import("../../src/main")).toBeResolved();

    expect(core).toHaveKeys(
      "ArrayField",
      "Field",
      "FormProvider",
      "arrayFieldOf",
      "fieldOf",
      "useArrayField",
      "useField",
      "useFieldValidation",
      "useForm",
      "useFormSelector",
    );
  });
});
