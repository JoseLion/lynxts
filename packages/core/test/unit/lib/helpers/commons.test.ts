import { expect } from "@assertive-ts/core";

import { isFunctionAction, noop } from "../../../../src/lib/helpers/commons";

describe("[Unit] commons.test.ts", () => {
  describe(".isFunctionAction", () => {
    context("when the action is a function", () => {
      it("returns true", () => {
        const isFunc = isFunctionAction(() => undefined);

        expect(isFunc).toBeTrue();
      });
    });

    context("when the action is not a function", () => {
      it("returns false", () => {
        const isFunc = isFunctionAction("foo");

        expect(isFunc).toBeFalse();
      });
    });
  });

  describe(".noop", () => {
    it("does nothing", () => {
      expect(noop).not.toThrow();
    });
  });
});
