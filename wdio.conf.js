exports.config = {

    runner: 'local',

    specs: [
        './test/specs/main.spec.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    capabilities: [{

        maxInstances: 1,

        browserName: 'chrome',

        acceptInsecureCerts: true

    }],

    logLevel: 'info',

    bail: 0,

   // baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'mocha',

    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],



    mochaOpts: {

        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000
    },


    before: function (capabilities, specs, browser) {
    },

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot();
        }
    }



    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    //     if (!passed) {
    //         browser.takeScreenshot();
    //     }
    // },


}
