import { expect } from "chai";
/*import {homePage} from "./HomePage";
import {productBox} from "./ProductBox";
import {setOptions} from './SetOptions';
import {addToCart} from './AddToCart';
import {checkout} from './Checkout';
import {confirmation} from './Confirmation';*/
import {homePage, productBox, setOptions, addToCart, checkout, confirmation} from "../pageObjects";


describe('Buy a duck', function () {

    beforeEach(function(){
        homePage.openingHomePage();
        productBox.openingProductBox();
}); 

    afterEach(function(){   
        browser.deleteCookie();
    })

    it("Buying N yellow ducks", function() {
        const quantity = '3';

        setOptions.selectItemSize('Small');
        setOptions.setItemQuantity(quantity);
        addToCart.addItemToCart();       
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()==quantity)
        }, 500, 'Item is not added');

        addToCart.checkItemInCart();     

        checkout.typeFirstName("Test1");
        checkout.typeLastName("Test2");
        checkout.typeAddress1("address1");
        checkout.typeAddress2("address2");
        checkout.typePostCode('11603');
        checkout.typeCity("City");
        checkout.typeCountry('UA');
        checkout.typeEmail(Math.random()+'@ukr.net');
        checkout.typePhone('+380935407959');
        
        checkout.saveChanges();
        checkout.confirmOrder();
        /*expect(confirmation.isLoaded()).to.equal(
            true,
            "Expected that confirmation page appears"
          );
          expect(confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );*/
    });

    it("Buying yellow duck", function() {
        setOptions.selectItemSize('Small');
        addToCart.addItemToCart();
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()=='1')
        }, 500, 'Item is not added');

        addToCart.checkItemInCart();     

        checkout.typeFirstName("Test15");
        checkout.typeLastName("Test25");
        checkout.typeAddress1("address15");
        checkout.typeAddress2("address25");
        checkout.typePostCode('11603');
        checkout.typeCity("CityM");
        checkout.typeCountry('UA');
        checkout.typeEmail(Math.random()+'@ukr.net');
        checkout.typePhone('+380935407958');
        
        checkout.saveChanges();
        checkout.confirmOrder();
        /*expect(confirmation.isLoaded()).to.equal(
            true,
            "Expected that confirmation page appears"
          );
          expect(confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );*/
    }); 
      
    it("Buying yellow duck without options", function() {
        addToCart.addItemToCart();
        addToCart.waitForPopUp();  
    });  

    it("Buying yellow duck with Different Shipping Address checked", function() {
        setOptions.selectItemSize('Small');
        addToCart.addItemToCart();
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()=='1')
        }, 500, 'Item is not added');

        addToCart.checkItemInCart();     

        checkout.typeFirstName("Test15");
        checkout.typeLastName("Test25");
        checkout.typeAddress1("address15");
        checkout.typeAddress2("address25");
        checkout.typePostCode('11603');
        checkout.typeCity("CityM");
        checkout.typeCountry('UA');
        checkout.typeEmail(Math.random()+'@ukr.net');
        checkout.typePhone('+380935407958');

        checkout.addDifferentShippingAddress();
        checkout.typeShippingFisrtName('Анна');
        checkout.typeShippingLastName('Анна');
        checkout.typeShippingAdress1('глушкова');
        checkout.typeShippingPostalCode('11603');
        checkout.typeShippingCity('Киев');  
        checkout.typeShippingCountry('UA');
        
        checkout.saveChanges();
        checkout.confirmOrder();
        /*expect(confirmation.isLoaded()).to.equal(
            true,
            "Expected that confirmation page appears"
          );
          expect(confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );*/
    });

    it("Buying yellow duck with Create Account checked", function() {
        setOptions.selectItemSize('Small');
        addToCart.addItemToCart();
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()=='1')
        }, 500, 'Item is not added');

        addToCart.checkItemInCart();     

        checkout.typeFirstName("Test15");
        checkout.typeLastName("Test25");
        checkout.typeAddress1("address15");
        checkout.typeAddress2("address25");
        checkout.typePostCode('11603');
        checkout.typeCity("CityM");
        checkout.typeCountry('UA');
        checkout.typeEmail(Math.random()+'@ukr.net');
        checkout.typePhone('+380935407958');

        checkout.addCreateAccount();
        checkout.typeDesiredPassword('111111');
        checkout.typeConfirmPassword('111111');
        
        checkout.saveChanges();
        checkout.confirmOrder();
        /*expect(confirmation.isLoaded()).to.equal(
            true,
            "Expected that confirmation page appears"
          );
          expect(confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );*/
    });
})

