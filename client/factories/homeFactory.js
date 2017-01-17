console.log('HOME Factory');
app.factory('homeFactory', ['$http', "$location", function($http, $location){
  var factory = {};

  var currentlySelected = [];
  var databaseCountries = [];
  var matchingCountries = [];
  var newCountries = [];


  factory.getCountries = function(callback){
    $http({
      method:'get',
      url: '/getCountries',
    }).then(function(returned_data){
      callback(returned_data.data);
    })
  },


  factory.saveMyFirstCountries = function(countriesData, callback){
    console.log("made it through to factory function");
    console.log(countriesData);
    $http({
      method: "POST",
      url: "/saveUsersCountries",
      data: countriesData
    }).then(function(res){
      console.log("response from backend:", res);
      callback();
    })
  }

  /////////////////////////////////////
  //caching currently selected stuff
  factory.setCurrentlySelected = function(data, callback){
    currentlySelected = data;
    callback(currentlySelected);
  }

  factory.getCurrentlySelected = function(callback){
    callback(currentlySelected);
  }

  /////////////////////////////////////
  //caching User's countries in the DB
  factory.setUsersSavedCountries = function(data, callback){
    databaseCountries = data
    callback(databaseCountries);
  }

  factory.getUsersSavedCountries = function(callback){
    callback(databaseCountries);
  }

  /////////////////////////////////////
  //caching Mathcing Countries!!!
  factory.setMatchingCountries = function(data, callback){
    matchingCountries = data
    callback(matchingCountries);
  }

  factory.getMatchingCountries = function(callback){
    callback(matchingCountries);
  }


  /////////////////////////////////////
  //caching Mathcing Countries!!!
  factory.setNewCountries = function(data, callback){
    newCountries = data
    callback(newCountries);
  }

  factory.getNewCountries = function(callback){
    callback(newCountries);
  }

  ////////////////////////////////////////
  //clearing cached variables upon logout
  factory.clearCachedData = function(){
    currentlySelected = [];
    databaseCountries = [];
    matchingCountries = [];
    newCountries = [];
    console.log("clearCachedData has been cleared I think!");
  }




  return factory;
}])
