import { Page, Locator } from '@playwright/test';

export class ShopPage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly breadcrumbHome: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.getByTestId('header-cart-link');
        this.breadcrumbHome = page.getByTestId('breadcrumb-home');
    }

    async goto() {
        await this.page.goto('/shop.php');
    }

    async shopNow(category: 'mens-wear' | 'womens-wear' | 'kids-wear' | 'electronics') {
        await this.page.getByTestId(`shop-now-${category}`).click();
    }

    async addToCartById(productId: string | number) {
        await this.page.getByTestId(`add-to-cart-${productId}`).click();
    }

    async goToCart() {
        await this.cartLink.click();
    }
}