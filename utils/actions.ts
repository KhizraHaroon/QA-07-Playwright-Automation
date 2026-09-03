import { Page, Locator, expect } from '@playwright/test';

export async function safeClick(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
}

export async function safeFill(locator: Locator, value: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
}

export async function waitForUrlContains(page: Page, part: string) {
    await page.waitForURL(url => url.toString().includes(part));
}

export async function assertVisible(locator: Locator) {
    await expect(locator).toBeVisible();
}