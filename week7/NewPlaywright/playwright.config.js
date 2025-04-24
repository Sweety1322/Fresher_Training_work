// @ts-check
const {  devices } = require('@playwright/test')
const config = {
  testDir: './tests',
  retries :0,
  workers :2,


  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',

  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'off',
    trace : 'off',
  }
} 

module.exports = config;

