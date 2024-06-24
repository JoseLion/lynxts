/* eslint-disable no-var */
import type { Global } from "@jest/types";

declare global {
  export var context: Global.Describe;
  export var describe: Global.Describe;
  export var it: Global.ItConcurrent;
}
