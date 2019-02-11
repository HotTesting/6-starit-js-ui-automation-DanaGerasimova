import { Checkout } from './Checkout';


class SignIn{

    openSignInBlock() {
        $('.account.dropdown').click();
        browser.waitForVisible('.account.dropdown', 5000);
    }

    typeEmail(email: string): any{
        const typeEmailInput = '.form-control[name="email"]';
        browser.waitForVisible(typeEmailInput, 5000);
        $(typeEmailInput).setValue(email);
    }

    typePassword(password: string): any{
        const typePasswordInput = '.form-control[name="password"]';
        browser.waitForVisible(typePasswordInput, 5000);
        $(typePasswordInput).setValue(password);
    }
    
    login() {
        $('button[name="login"]').click();

        browser.waitUntil(() => {
            return $('.alert-success').isVisible()
        }, 1000, 'You are not logged in!')
    }
}

export const signIn = new SignIn();

