import {assert} from 'chai'

export class AddToCart{
  
    addItemToCart(): any{
        $('button[name="add_cart_product"]').click();
        browser.pause(500);
    }

    waitForPopUp(): any{     
        browser.waitUntil(() => {
            return $('.featherlight.active').isVisible()
        }, 5000, 'Element is not visible');
    }

    checkItemInCart(): any{
        browser.url('/checkout');
        browser.waitUntil(() => {
            return $('.item').isVisible()
        }, 1000, 'Element is not visible');
    }
}

export const addToCart = new AddToCart();