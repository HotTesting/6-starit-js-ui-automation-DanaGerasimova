process.env.TS_NODE_FILES = true
require('ts-node').register()

exports.config = {
    specs: [
        './PageObjects/**/BuyingPO.ts'
    ],
    port: '9515',
    path: '/',
    services: ['chromedriver'],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    baseUrl: 'http://ip-5236.sunline.net.ua:38015',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 240000 // 2 mins
    }

    /*beforeTest: function(){
        console.log('global before test');
    }*/
}
