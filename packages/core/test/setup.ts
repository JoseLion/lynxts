import { usePlugin } from "@assertive-ts/core";
import { SinonPlugin } from "@assertive-ts/sinon";
import { cleanup } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Sinon from "sinon";
import { afterEach, beforeEach } from "vitest";

process.env.RNTL_SKIP_AUTO_DETECT_FAKE_TIMERS = "true";

const newUserEvent = userEvent.setup({
  advanceTimers: delay => Sinon.clock.tickAsync(delay).then(),
  delay: 0,
});

Object.assign(userEvent, newUserEvent);

usePlugin(SinonPlugin);

beforeEach(() => {
  Sinon.useFakeTimers({
    advanceTimeDelta: 0,
    shouldAdvanceTime: true,
  });
});

afterEach(() => {
  cleanup();
  Sinon.restore();
});
