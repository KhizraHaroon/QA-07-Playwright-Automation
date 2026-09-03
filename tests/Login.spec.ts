import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { invalidUser, validUser } from '../testdata/users';

test.describe('Login', () => {
    test('shows an error message on invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(invalidUser.email, invalidUser.password);

        await expect(loginPage.errorMessage).toBeVisible();
    });

    test('logs in successfully and lands on shop page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(validUser.email, validUser.password);

        await expect(page).toHaveURL(/shop\.php/);
        await expect(page.getByTestId('header-cart-link')).toBeVisible();
    });
});