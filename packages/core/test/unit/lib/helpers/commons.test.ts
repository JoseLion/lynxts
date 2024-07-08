import { expect } from "@assertive-ts/core";
import { describe, it, suite } from "vitest";

import { noop } from "../../../../src/lib/helpers/commons";

suite("[Unit] commons.test.ts", () => {
  describe(".noop", () => {
    it("does nothing", () => {
      expect(noop).not.toThrow();
    });
  });
});
