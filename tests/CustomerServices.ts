import { expect } from "chai";

describe('Customer Service', function () {
    before(function() {
        browser.url('/');
        browser.click('.customer-service');
    });

    it('Filling the input fields', function(){
        const form = $('form[name="contact_form"]');

        const name = form.$('input[name="name"]');
        name.addValue('test');

        const email = form.$('input[name="email"]');
        email.addValue('fgh@ukr.net');

        const subject = form.$('input[name="subject"]');
        subject.addValue('test');

        const message = form.$('textarea[name="message"]');
        message.addValue('test');

        const send = form.$('button[name="send"]');
        send.click();
        expect($('.alert-success').isVisible()).to.be.true;
        console.log('--Test passed! 3')
    })
})

