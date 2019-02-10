export class SetOptions{
    
    selectItemSize(size: string): any{
        $('select[name="options[Size]"]').click();
        browser.pause(500);
        
        browser.waitUntil(() => {
            return $('option[value="' + size + '"]').isVisible()
        }, 500, 'Option is not visible');

        $('option[value="' + size + '"]').click();

        browser.waitUntil(() => {
            return ($('select[name="options[Size]"]').getValue()==size)
        }, 500, 'Option is not selected');
    }

    setItemQuantity(quantity: string): any{
        $('input[name="quantity"]').setValue(quantity);

        browser.waitUntil(() => {
            return ($('input[name="quantity"]').getValue()==quantity)
        }, 500, 'Number of items is not changed');
    }
}

export const setOptions = new SetOptions();