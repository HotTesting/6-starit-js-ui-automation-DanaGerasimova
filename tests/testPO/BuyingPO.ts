import {homePage, signIn, productBox, setOptions, addToCart, checkout, confirmation} from "../../PageObjects";


describe('Buy a duck', function () {

    let quantity;

    beforeEach(function(){
        homePage.openingHomePage();
        quantity = $('#cart span.quantity').getText();
    }); 

    afterEach(function(){   
        browser.deleteCookie();
    })

    it("Buying yellow duck be logged in", function() {
        signIn.openSignInBlock();
        signIn.typeEmail('testDana@ukr.net');
        signIn.typePassword('123456');
        signIn.login();

        productBox.openingProductBox();
        setOptions.selectItemSize('Small');
        addToCart.addItemToCart();
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()== String(+quantity + +"1"))
        }, 5000, 'Item is not added');

        addToCart.checkItemInCart();     

        if(checkout.checkAddress1()==null) checkout.typeAddress1('address1');
        if(checkout.checkAddress2()==null) checkout.typeAddress2('address2');
        if(checkout.checkPostCode()==null) checkout.typePostCode('11603');
        if(checkout.checkCity()==null) checkout.typeCity("CityM");
        checkout.typeCountry('UA');
        if(checkout.checkPhone()==null) checkout.typePhone('+380935407958');      

        checkout.saveChanges();
        checkout.confirmOrder();
    });

    it("Sign In", function() {
        signIn.openSignInBlock();
        signIn.typeEmail('daniela.gerasimowa@ukr.net');
        signIn.typePassword('123456');
        signIn.login();
    });

    it("Buying N yellow ducks", function() {
        productBox.openingProductBox();

        const q = '3';

        setOptions.selectItemSize('Small');
        setOptions.setItemQuantity(q);
        addToCart.addItemToCart();       
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()== String(+quantity + +q))
        }, 5000, 'Item is not added');

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
    });

    it("Buying yellow duck", function() {
        productBox.openingProductBox();
        setOptions.selectItemSize('Small');
        addToCart.addItemToCart();
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()== String(+quantity + +"1"))
        }, 5000, 'Item is not added');

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
    }); 
      
    it("Buying yellow duck without options", function() {
        productBox.openingProductBox();
        addToCart.addItemToCart();
        addToCart.waitForPopUp();  
    });  

    it("Buying yellow duck with Different Shipping Address checked", function() {
        productBox.openingProductBox();
        setOptions.selectItemSize('Small');
        addToCart.addItemToCart();
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()== String(+quantity + +"1"))
        }, 5000, 'Item is not added');

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
    });

    it("Buying yellow duck with Create Account checked", function() {
        productBox.openingProductBox();
        setOptions.selectItemSize('Small');
        addToCart.addItemToCart();
        productBox.closeProductBox();

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()== String(+quantity + +"1"))
        }, 5000, 'Item is not added');

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
    });
})

