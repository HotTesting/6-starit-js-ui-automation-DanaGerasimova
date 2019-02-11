import { assert } from "chai";

describe.skip('Buy a duck', function () {

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

    it('Fill the input fields', function(){
        $('button[name="add_cart_product"]').click();

        browser.waitUntil(() => {
            return $('.featherlight.active').isVisible()
        }, 5000, 'Element is not visible');
    })
})

