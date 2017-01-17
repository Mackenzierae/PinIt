var app = angular.module('app', ['ngRoute']);
// var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

console.log(app);
//necessary to kick me back out to login page if not logged in
app.factory('loginInterceptor',['$q','$location',function($q, $location){
 return{
  'responseError': function(rejection){
   if (rejection.status == 401){
         $location.url('/login');
   }
   return $q.reject(rejection);
  }
 }
}])

app.config(function ($routeProvider, $httpProvider){
  console.log("really?");
  $httpProvider.interceptors.push('loginInterceptor');
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/home',{
    templateUrl: 'partials/home.html'
  })
  // .when('/modalTest',{
  //   templateUrl: 'partials/modalTest.html',
  //   controller: 'ModalDemoCtrl'
  // })
  .otherwise({
    redirectTo: '/'
  })
})
