import { assert } from "chai";

describe('Buy a duck', function () {

    before(function() {
        browser.url('/');
        $('a[href="#campaign-products"]').click();
    });

    it("Open a product box", function() {
        $('a[title="Yellow Duck"]').click();
    
        browser.waitUntil(() => {
            return $('#box-product').isVisible()
        }, 1000, 'Element is not visible');
    
        assert.equal($('#box-product').isVisible(), true);           
        assert.equal($('h1.title').getText(), 'Yellow Duck');
    });

    it('Select an item size', function(){
        $('select[name="options[Size]"]').click();
        
        browser.waitUntil(() => {
            return $('option[value="Small"]').isVisible()
        }, 500, 'Option is not visible');

        $('option[value="Small"]').click();

        browser.waitUntil(() => {
            return ($('select[name="options[Size]"]').getValue()=='Small')
        }, 500, 'Option is not selected');
    })

    it('Add an item to cart', function(){
        $('button[name="add_cart_product"]').click();
        browser.pause(500);

        $('div[aria-label="Close"]').click();
        assert.isFalse($('#box-product').isVisible());

        browser.waitUntil(() => {
            return ($('#cart span.quantity').getText()=='1')
        }, 500, 'Item is not added');
    })

    it('Check an item in cart', function(){
        browser.url('/checkout');
        browser.waitUntil(() => {
            return $('.item').isVisible()
        }, 1000, 'Element is not visible');
    })

    it('Sign In', function(){
        const form = $('form[name="checkout_form"]');

        form
            .$('input[name="firstname"]').addValue('test')
            .$('input[name="lastname"]').addValue('test')
            .$('input[name="address1"]').addValue('test 123456')
            .$('input[name="postcode"]').addValue('789789')
            .$('input[name="city"]').addValue('testov')
            .$('select[name="country_code"]').addValue('3')
            .$('input[name="email"]').addValue(Math.random()+'@ukr.net')
            .$('input[name="phone"]').addValue('+380935407959')

        $('button[name="save_customer_details"]').click();
        browser.pause(1000); //TODO: rewrite to some wait

        //$('button[name="save_customer_details"]').waitForEnabled(3000, true); // WTF
   
        $('button[name="confirm_order"]').click();

        browser.waitUntil(() => {
            return (browser.getTitle() == 'Order Success | My Store')
        }, 2000, 'Button is not active');
    })
    
})

