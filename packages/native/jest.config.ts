import { Config } from "jest";

const jestConfig: Config = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  testRegex: "test/.*\\.test\\.(tsx?)$",
};

export default jestConfig;
