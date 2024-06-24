import { expect } from "@assertive-ts/core";

describe("[Integration] main.test.ts", () => {
  it("re-exports the library exports", async () => {
    const web = await expect(import("../../src/main")).toBeResolved();

    expect(web).toHaveKeys(
      "Form",
      "Input",
      "Select",
      "Textarea",
      "inputOf",
      "selectOf",
      "textareaOf",
    );
  });
});
