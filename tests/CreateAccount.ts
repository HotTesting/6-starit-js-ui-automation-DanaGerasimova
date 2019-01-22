import { expect } from "chai";

describe('Create Account', function () {
    it('Open the homepage', function () {
        browser.url('/')
        const title = browser.getTitle();
        expect(title).to.be.equal('My Store | Online Store');
        console.log('--Test passed! 1')
    });

    /*it('Open Sign In block', function(){
        const mainMenu = $('#default-menu');
        const signIn = mainMenu.$('a[data-toggle="dropdown"]');
        signIn.click();
        const dropdowMenu = signIn.$('ul[class="dropdown-menu"]');
        expect(dropdowMenu.isVisible()).to.be.true;

        const newCustomer = dropdowMenu.$('a[href*="http://ip-5236.sunline.net.ua:38015/create_account"]');
        newCustomer.click();
        expect($('#box-create-account').isVisible()).to.be.true;
        console.log('--Test passed! 2')
    })*/

    it('Open Sign In block', function(){
        $('li.account a').click();
        browser.pause(1000)
        $('.dropdown-menu a[href*="create_account"]').click()
        browser.pause(1000)
        expect($('#box-create-account').isVisible()).to.be.true;
        console.log('--Test passed! 2')
    })

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }

    it('Fill the input fields', function(){
        const form = $('form[name="customer_form"]');

        const company = form.$('input[name="company"]');
        company.addValue('test');

        const taxID = form.$('input[name="tax_id"]');
        taxID.addValue('123456');

        const firstname = form.$('input[name="firstname"]');
        firstname.addValue('test');

        const lastname = form.$('input[name="lastname"]');
        lastname.addValue('test');

        const address1 = form.$('input[name="address1"]');
        address1.addValue('test 123456');

        const address2 = form.$('input[name="address2"]');
        address2.addValue('test 123456');

        const postcode = form.$('input[name="postcode"]');
        postcode.addValue('789789');

        const city = form.$('input[name="city"]');
        city.addValue('testov');

        const country = form.$('select[name="country_code"]');
        country.addValue('3');

        /*const zone = form.$('select[name="zone_code"]');
        zone.addValue('3');*/
        
        const email = form.$('input[name="email"]');
        email.addValue(makeid()+'@ukr.net');

        const phone = form.$('input[name="phone"]');
        phone.addValue('0634545455');

        const password = form.$('input[name="password"]');
        password.addValue('123456');

        const confirmed_password = form.$('input[name="confirmed_password"]');
        confirmed_password.addValue('123456');
        
        const newsletter = form.$('input[name="newsletter"]');
        newsletter.addValue('1');

        const submit = form.$('button[name="create_account"]');
        submit.click();
        expect($('.alert-success').isVisible()).to.be.true;
        console.log('--Test passed! 3')
    })
})

