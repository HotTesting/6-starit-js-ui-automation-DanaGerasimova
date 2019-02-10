import {assert} from 'chai'

export interface ICustomerDetails {
    firstName: string
    lastName: string
    address1: string
    address2: string
    postalCode: string
    city: string
    email: string
    phone: string
    company?: string
    taxID?: string
    country?: string
    state?: string
}

export interface IDifferentShippingAddress {
    firstName: string
    lastName: string
    address1: string
    postalCode: string
    city: string    
    phone?: string
    address2?: string
    country?: string
    company?: string
}

export class Checkout{

    proceedOrderWith(customerDetails: ICustomerDetails): any {
        this.typeFirstName(customerDetails.firstName);
        this.typeLastName(customerDetails.lastName);
        this.typeAddress1(customerDetails.address1);
        this.typeAddress2(customerDetails.address2);
        this.typePostCode(customerDetails.postalCode);
        this.typeCity(customerDetails.city);
        this.typeEmail(customerDetails.email);
        this.typePhone(customerDetails.phone);
        // If optional fields needs to be filled
        // if(customerDetails.country) {
        //   this.typeCountry(customerDetails.country)
        // }
    
        // if (customerDetails.differentShippingAddress) {
        //   this.enterDifferentShippingAddress(customerDetails.differentShippingAddress)
        // }
        this.saveChanges();
        this.confirmOrder();
    }

    shippingAdress(shippingAddressDetails: IDifferentShippingAddress): any {
        browser.waitUntil(() => {
                return (browser.getAttribute('h3 input[name = "different_shipping_address"]', 'checked')!=null);
            }, 3000, "Different Shipping Address checkbox is not checked"
        );
        
        this.typeShippingPostalCode(shippingAddressDetails.postalCode);
        this.typeShippingCity(shippingAddressDetails.city);
        this.typeShippingAdress1(shippingAddressDetails.address1);
        this.typeShippingFisrtName(shippingAddressDetails.firstName);
        this.typeShippingLastName(shippingAddressDetails.lastName);
        this.saveChanges();
        this.confirmOrder();
    }

    typePhone(phone: string): any {
        const phoneInput = 'input[name="phone"]'
        browser.waitForVisible(phoneInput, 5000);
        $(phoneInput).setValue(phone);
    }

    typeEmail(email: string): any {
        const emailInput = 'input[name="email"]'
        browser.waitForVisible(emailInput, 5000);
        $(emailInput).setValue(email);
    }

    typeCity(city: string): any {
        const cityInput = 'input[name="city"]'
        browser.waitForVisible(cityInput, 5000);
        $(cityInput).setValue(city);
    }

    typePostCode(postCode: string): any {
        const postCodeInput = 'input[name="postcode"]'
        browser.waitForVisible(postCodeInput, 5000);
        $(postCodeInput).setValue(postCode);
    }

    typeAddress2(address2: string): any {
        const address2Input = 'input[name="address2"]'
        browser.waitForVisible(address2Input, 5000);
        $(address2Input).setValue(address2);
    }

    typeAddress1(address1: string): any {
        const address1Input = 'input[name="address1"]'
        browser.waitForVisible(address1Input, 5000);
        $(address1Input).setValue(address1);
    }

    typeLastName(lastName: string): any {
        const lastNameInput = 'input[name="lastname"]'
        browser.waitForVisible(lastNameInput, 5000);
        $(lastNameInput).setValue(lastName);
    }

    typeFirstName(firstName: string): any {
        const firstNameInput = 'input[name="firstname"]';
        browser.waitForVisible(firstNameInput, 5000);
        $(firstNameInput).setValue(firstName);
    }

    typeShippingPostalCode(shippingPostalCode: string): any {
        const shippingPostalCodeInput = 'input[name="shipping_address[postcode]"]';
        browser.waitForVisible(shippingPostalCodeInput, 5000);
        $(shippingPostalCodeInput).setValue(shippingPostalCode);        
    }

    typeShippingCity(shippingCity: string): any {
        const shippingCityInput = 'input[name="shipping_address[city]"]';
        browser.waitForVisible(shippingCityInput, 5000);
        $(shippingCityInput).setValue(shippingCity);
    }

    typeShippingAdress1(shippingAddress1: string): any {
        const shippingAddress1Input = 'input[name="shipping_address[address1]"]';
        browser.waitForVisible(shippingAddress1Input, 5000);
        $(shippingAddress1Input).setValue(shippingAddress1);
    }

    typeShippingFisrtName(shippingfirstName: string): any {
        const shippingFirstNameInput = 'input[name="shipping_address[firstname]"]';
        browser.waitForVisible(shippingFirstNameInput, 5000);
        $(shippingFirstNameInput).setValue(shippingfirstName);
    }

    typeShippingLastName(shippingLastName: string): any {
        const shippingLastNameInput = 'input[name="shipping_address[lastname]"]';
        browser.waitForVisible(shippingLastNameInput, 5000);
        $(shippingLastNameInput).setValue(shippingLastName);
    }

    saveChanges(): any{
        $('button[name="save_customer_details"]').click();
        browser.pause(1000); //TODO: rewrite to some wait
    }
    
    confirmOrder(): any{
        $('button[name="confirm_order"]').click();

        browser.waitUntil(() => {
            return (browser.getTitle() == 'Order Success | My Store')
        }, 2000, 'Button is not active');
    }
}

export const checkout = new Checkout();