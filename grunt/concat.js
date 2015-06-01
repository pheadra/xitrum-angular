module.exports = {
  angular:{
    src:[
      'bower_components/jquery/dist/jquery.min.js',

      'bower_components/angular/angular.js',
      
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',

      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/angular-ui-utils/ui-utils.js',

      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
     
      'bower_components/oclazyload/dist/ocLazyLoad.js',
     
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
      'bower_components/moment/moment.js',
      'bower_components/flot/jquery.flot.js',

      'public_src/js/*.js',
      'public_src/js/directives/*.js',
      'public_src/js/services/*.js',
      'public_src/js/filters/*.js',
      'public_src/js/controllers/bootstrap.js'
    ],
    dest:'public/js/app.src.js'
  }
}
