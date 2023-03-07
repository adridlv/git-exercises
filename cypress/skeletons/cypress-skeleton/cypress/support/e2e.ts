/* */
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands
import './commands';

// import 'emergya-cypress';

// // Adds cypress-xpath to get elements by xpath
import 'cypress-xpath';

// // Add cypress-wait-until to wait for everything not expected by Cypress wait.
import 'cypress-wait-until';

import 'cypress-iframe';

// Adds verifyDownload command to wait and verify that file is downloaded
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('cy-verify-downloads').addCustomCommand();

// Prevents that cypress fails in this type of events
Cypress.on('uncaught:exception', () => false);
