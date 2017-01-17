console.log('Dash Factory');
app.factory('dashboardFactory', ['$http', "$location", function($http, $location){
  var factory = {};
  //
  //
  // factory.getCountries = function(callback){
  //   $http({
  //     method:'get',
  //     url: '/getCountries',
  //   }).then(function(returned_data){
  //     callback(returned_data.data);
  //   })
  // },
  //
  //
  // factory.saveMap = function(countriesData, callback){
  //   console.log("made it through to factory function");
  //   console.log(countriesData);
  //   $http({
  //     method: "POST",
  //     url: "/saveUsersMap",
  //     data: countriesData
  //   }).then(function(res){
  //     console.log("response from backend:", res);
  //     callback();
  //   })
  // }
  //
  //
  //
  //
  //






  return factory;
}])
