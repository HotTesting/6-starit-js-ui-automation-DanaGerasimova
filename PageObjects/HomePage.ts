export class HomePage{
    
    openingHomePage(): any{
        browser.url('/');
        $('a[href="#campaign-products"]').click();
    }
}

export const homePage = new HomePage();