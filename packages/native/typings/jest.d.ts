/* eslint-disable no-var */
import { Global } from "@jest/types";

declare global {
  var context: Global.Describe;
  var describe: Global.Describe;
  var it: Global.ItConcurrent;
}
