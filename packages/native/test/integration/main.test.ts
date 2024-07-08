import { expect } from "@assertive-ts/core";
import { it, suite } from "vitest";

// eslint-disable-next-line import/no-namespace
import * as native from "../../src/main";

suite("[Integration] main.test.ts", () => {
  it("re-exports the library exports", () => {
    expect(native).toHaveKeys(
      "SubmitButton",
      "SubmitHighlight",
      "SubmitNativeFeedback",
      "SubmitOpacity",
      "SubmitWithoutFeedback",
      "TextField",
      "textFieldOf",
    );
  });
});
