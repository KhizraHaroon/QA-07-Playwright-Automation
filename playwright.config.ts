import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,
  use: {
    browserName: 'chromium',
    baseURL: 'https://shop.qaautomationlabs.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});

