'use strict';

angular.module('ngSocial.facebook', ['ngRoute', 'ngFacebook'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/facebook', {
      templateUrl: 'facebook/facebook.html',
      controller: 'FacebookCtrl'
    })
  }])

  .config( function( $facebookProvider ) {
    $facebookProvider.setAppId('950965211616463');
    $facebookProvider.setPermissions("email","public_profile","user_posts","publish_actions", "user_photos")
  })

  .run( function( $rootScope ) {
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })

  .controller('FacebookCtrl', ['$scope', '$facebook', function($scope, $facebook) {
    $scope.isLoggedIn = false;

    $scope.login = function(){
      $facebook.login().then(function(){
        $scope.welcomeMessage = true;
        refresh();
      })
    };

    $scope.logout = function(){
      $facebook.logout().then(function(){
        $scope.welcomeMessage = false;
        refresh();
      })
    };

    function refresh(){
      $facebook.api("/me").then(function(res){
        $scope.user = res;
        $scope.welcomeMessage = "Welcome " + res.name;
        $scope.isLoggedIn = true;
      },
      function(err){
        $scope.welcomeMessage = "Please login"
      })
    }

    refresh();
  }]);