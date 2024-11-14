import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
