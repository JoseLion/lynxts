import { expect } from "@stackbuilders/assertive-ts";

describe("[Unit] main.test.tsx", () => {
  it("re-exports the library exports", () => {
    return expect(import("../../src/main"))
      .toBeResolved()
      .then(lynxtsCore => {
        expect(lynxtsCore).toContainAllKeys([
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
        ]);
      });
  });
});
