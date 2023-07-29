import { afterEach, describe, it } from "@jest/globals";
import Sinon from "sinon";

global.context = describe;
global.describe = describe;
global.it = it;

afterEach(() => {
  Sinon.restore();
});
