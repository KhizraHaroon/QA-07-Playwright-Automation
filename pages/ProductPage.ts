import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    productName(id: string | number): Locator {
        return this.page.getByTestId(`product-name-${id}`); // TODO: confirm exact pattern
    }

    productPrice(id: string | number): Locator {
        return this.page.getByTestId(`product-price-${id}`); // TODO: confirm
    }

    addToCartButton(id: string | number): Locator {
        return this.page.getByTestId(`add-to-cart-${id}`);
    }
}