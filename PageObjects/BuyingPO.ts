import { assert } from "chai";
import {homePage} from "./HomePage";
import {productBox} from "./ProductBox";
import {setOptions} from './SetOptions';
import {addToCart} from './AddToCart';
import {checkout} from './Checkout';


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
        checkout.typePostCode('116035');
        checkout.typeCity("City");
        checkout.typeEmail(Math.random()+'@ukr.net');
        checkout.typePhone('+380935407959');
        
        checkout.saveChanges();
        checkout.confirmOrder();
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
        checkout.typePostCode('116035');
        checkout.typeCity("CityM");
        checkout.typeEmail(Math.random()+'@ukr.net');
        checkout.typePhone('+380935407958');
        
        checkout.saveChanges();
        checkout.confirmOrder();
    }); 
      
    it("Buying yellow duck without options", function() {
        addToCart.addItemToCart();
        addToCart.waitForPopUp();  
    });  
})

