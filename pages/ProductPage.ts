import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    productName(id: string | number): Locator {
        return this.page.getByTestId(`product-name-${id}`); 
    }

    productPrice(id: string | number): Locator {
        return this.page.getByTestId(`product-price-${id}`);
    }

    addToCartButton(id: string | number): Locator {
        return this.page.getByTestId(`add-to-cart-${id}`);
    }
}
