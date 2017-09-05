// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services','ion-floating-menu','angular-thumbnails','ion-gallery'])

.run(function($ionicPlatform) {



  $ionicPlatform.ready(function($rootScope) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    //   cordova.plugins.diagnostic.requestRuntimePermissions(function(statuses){
    //     for (var permission in statuses){
    //         switch(statuses[permission]){
    //             case cordova.plugins.diagnostic.permissionStatus.GRANTED:
    //                 // alert("Permission granted to use "+permission);
    //                 break;
    //             case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
    //                 // alert("Permission to use "+permission+" has not been requested yet");
    //                 break;
    //             case cordova.plugins.diagnostic.permissionStatus.DENIED:
    //                 // alert("Permission denied to use "+permission+" - ask again?");
    //                 break;
    //             case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
    //                 // alert("Permission permanently denied to use "+permission+" - guess we won't be using it then!");
    //                 break;
    //         }
    //     }
    // }, function(error){
    //     alert("The following error occurred: "+error);
    // },[
    //     cordova.plugins.diagnostic.permission.READ_EXTERNAL_STORAGE
    // ]);

    // cordova.plugins.diagnostic.requestCameraAuthorization(
    // function(status){
       
    // }, function(error){
       
    // });   


    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.show();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.register', {
    url: '/register',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })

    .state('app.home', {
      url: '/home',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.invoices', {
    url: '/invoices',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/invoices.html',
        controller: 'InvoiceCtrl'
      }
    }
  })
  .state('app.classifieds', {
    url: '/classifieds',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/classifieds.html',
        controller: 'ClassifiedsCtrl'
      }
    }
  })
   .state('app.classified', {
    url: '/classified/:Id',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/classified.html',
        controller: 'ClassifiedsCtrl'
      }
    }
  })
   .state('app.addclassified', {
    url: '/addclassified',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/add-classified.html',
        controller: 'ClassifiedsCtrl'
      }
    }
  })
   .state('app.inbox', {
    url: '/inbox',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/inbox.html',
        controller: 'InboxCtrl'
      }
    }
  })
   .state('app.viewmessage', {
    url: '/viewmessage/:Id',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/view-message.html',
        controller: 'InboxCtrl'
      }
    }
  })
   .state('app.events', {
    url: '/events',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'
      }
    }
  })
  .state('app.viewevent', {
    url: '/viewevent/:Id',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/viewevent.html',
        controller: 'EventsCtrl'
      }
    }
  })
   .state('app.add-event', {
    url: '/add-event',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/add-event.html',
        controller: 'EventsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
