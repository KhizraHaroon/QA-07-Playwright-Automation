import { Page, Locator } from '@playwright/test';
import { safeClick, safeFill } from '../utils/actions';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTestId('login-email-input');
        this.passwordInput = page.getByTestId('login-password-input');
        this.loginButton = page.getByTestId('login-submit-btn');
        this.errorMessage = page.getByTestId('login-error-message');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(email: string, password: string) {
        await safeFill(this.emailInput, email);
        await safeFill(this.passwordInput, password);
        await safeClick(this.loginButton);
    }
}