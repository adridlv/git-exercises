import { defineConfig } from 'cypress';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { isFileExist, findFiles } = require('cy-verify-downloads');

export default defineConfig({
  experimentalWebKitSupport: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, emergya-qaseio/dist/cypress/modules/reporter.js',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
  },
  e2e: {
    setupNodeEvents(on) {
      on('task', { isFileExist, findFiles });
    },
    baseUrl: 'https://www.emergya.com/es',
    testIsolation: false,
    specPattern: ['cypress/e2e/**/*.ts'],
    fileServerFolder: './',
    chromeWebSecurity: false,
    env: {
      browserPermissions: {
        notifications: 'allow',
        geolocation: 'allow',
        location: 'allow',
        images: 'allow',
        javascript: 'allow',
        popups: 'allow',
        plugins: 'allow',
        cookies: 'allow',
      },
    },
  },
});
