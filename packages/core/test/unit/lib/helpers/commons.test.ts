import { expect } from "@assertive-ts/core";

import { noop } from "../../../../src/lib/helpers/commons";

describe("[Unit] commons.test.ts", () => {
  describe(".noop", () => {
    it("does nothing", () => {
      expect(noop).not.toThrow();
    });
  });
});
