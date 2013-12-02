module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

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
