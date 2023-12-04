import { Config } from "jest";

const jestConfig: Config = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  testRegex: "test/.*\\.test\\.(tsx?)$",
  testTimeout: 30000, // https://github.com/jestjs/jest/issues/11234
};

export default jestConfig;
