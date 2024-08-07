import { defineConfig } from "cypress";
import axe from 'axe-core';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message: string): null {
          console.log(message);
          return null;
        },

        table(message: axe.Result[]): null {
          console.table(message);
          return null;
        }
      })
    },
  },
});
