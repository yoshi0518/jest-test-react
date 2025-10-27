const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  // testEnvironment: "node",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    ...tsJestTransformCfg,
    "^.+.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },
  setupFilesAfterEnv: ["/jest.setup.ts"],
};
