import { expect } from "@assertive-ts/core";

// eslint-disable-next-line import/no-namespace
import * as native from "../../src/main";

describe("[Integration] main.test.ts", () => {
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
