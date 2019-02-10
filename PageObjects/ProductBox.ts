import {assert} from 'chai'

export class ProductBox{
    
    openingProductBox(): any{
        $('a[title="Yellow Duck"]').click();
    
        browser.waitUntil(() => {
            return $('#box-product').isVisible()
        }, 1000, 'Element is not visible');
    
        assert.equal($('#box-product').isVisible(), true);           
        assert.equal($('h1.title').getText(), 'Yellow Duck');
    }

    closeProductBox(): any{
        $('div[aria-label="Close"]').click();
        assert.isFalse($('#box-product').isVisible());
    }
}

export const productBox = new ProductBox();