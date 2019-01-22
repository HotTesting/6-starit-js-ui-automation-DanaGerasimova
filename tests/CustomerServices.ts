import { expect } from "chai";

describe('Customer Service', function () {
    it('Open the homepage', function () {
        browser.url('/')
        const title = browser.getTitle();
        expect(title).to.be.equal('My Store | Online Store');
        console.log('--Test passed! 1')
        browser.pause(1000)
    });

    it('Open the Customer Service page', function(){
        const mainMenu = $('#default-menu');
        const pageLink = mainMenu.$('a[href*="http://ip-5236.sunline.net.ua:38015/customer-service-s-0"]');
        pageLink.click();
        browser.pause(2000)
        expect($('#box-contact-us').isVisible()).to.be.true;
        console.log('--Test passed! 2')
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

