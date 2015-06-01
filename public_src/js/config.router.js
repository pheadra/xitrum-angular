'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/app/review/moncast');

          $stateProvider
              // contents
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app/layout.html'
              })
              .state('app.review', {
                  url: '/review/{review}',
                  templateUrl: 'tpl/review/review.list.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load([
                                  'js/app/review/review.css',
                                  'js/app/review/review.js',
                                  'js/app/review/review-service.js'
                              ]);
                          }]
                  }
              })
      }
    ]
  );
