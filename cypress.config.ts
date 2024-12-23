import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      codeCoverageTask(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
