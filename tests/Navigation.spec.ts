import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ShopPage } from '../pages/ShopPage';
import { validUser } from '../testdata/users';

test('navigates a category, adds a product to cart, and reaches checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const shopPage = new ShopPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);

    await shopPage.shopNow('womens-wear');
    await expect(page).toHaveURL(/womens-wear\.php/);

    await shopPage.addToCartById(2);
    await shopPage.goToCart();

    await page.getByTestId('proceed-to-checkout-btn').click();
    await page.getByTestId('continue-btn').click();

    await expect(page).toHaveURL(/checkout/i);
});