module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    autoWatch: true,
    sauceLabs: {
      username: 'pubnub-angular-js',
      accessKey: '82349adf-b53d-455c-b514-9a455f027d5b',
      startConnect: true,
      testName: 'pubnub-angular-js'
    },

    // define SL browsers
    customLaunchers: {
      sl_chrome_linux: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'linux'
      }
    },
    browsers: ['sl_chrome_linux'],

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      //3rd Party Code
      'app/components/angular/angular.js',
      //'app/components/angular-route/angular-route.js',
      'app/components/angularjs-scope.safeapply/src/Scope.SafeApply.js',
      //'app/scripts/lib/router.js',
      'app/scripts/pubnub-angular.coffee',

      //App-specific Code
      //'app/scripts/config/config.js',
      //'app/scripts/services/**/*.js',
      //'app/scripts/directives/**/*.js',
      //'app/scripts/controllers/**/*.coffee',
      //'app/scripts/filters/**/*.js',
      //'app/scripts/config/routes.js',
      'app/scripts/app.coffee',

      //Test-Specific Code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ]
  };
};
