import { expect } from "@stackbuilders/assertive-ts";

describe("[Integration] main.ts", () => {
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
