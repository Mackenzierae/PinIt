console.log('dash Controller');
app.controller('dashboardController', ["$scope", "loginFactory", "homeFactory", "dashboardFactory", "$location", "$routeParams", function($scope, loginFactory, homeFactory, dashboardFactory, $location, $routeParams){
  $scope.test="Am I working...?";
//   $scope.myCountries = [];
//   // $scope.saveSelected;
//    var map;
//
  // loginFactory.getLoggedUser(function(logged_user_data){
  //   $scope.logged_user = logged_user_data;
  // })
  //
  // $scope.logout = function(){
  //   console.log('in logout function')
  //   loginFactory.logout(function(){
  //     $location.url('/');
  // })}
//
//   $scope.saveMap = function(){
//     console.log("in save map function! and here are my countries...", $scope.saveSelected);
//     homeFactory.saveMap($scope.saveSelected, function(res){
//       console.log("in saveMap function's callback... response is:", res);
//       // getAllCountries();
//     })
//   }
//
//   // $scope.randomColor = function(){
//   //   var colors = ["#B1FA51", "#D6195B", "#FDC92E"];
//   //   var random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
//   //   console.log(colors[random]);
//   //   console.log("**************");
//   //   return colors[random];
//   // }
//   ////Fixture:
//   // var areaArray =
//   // [
//   //   {
//   //     "id": "RU",
//   //     "showAsSelected": true
//   //   },
//   //   {
//   //     "id": "CA",
//   //     "showAsSelected": true
//   //   },
//   //   {
//   //     "id": "CN",
//   //     "showAsSelected": true
//   //   }
//   // ]
//   var getAllCountries = function(callback){
//     console.log("1111111111111111111111");
//     homeFactory.getCountries(function(data){
//       console.log("returned_data!");
//       var gotEm = [];
//       for (var i = 0; i < data.length; i++){
//         gotEm.push({
//           "id": data[i],
//           "showAsSelected": true
//         });
//       }
//       $scope.myCountries = gotEm;
//       console.log("********************");
//       console.log($scope.myCountries);
//       callback();
//       return gotEm;
//     })
//   }
//
//   function createMap(){
//     map = AmCharts.makeChart("chartdiv", {
//       "type": "map",
//       "theme": "light",
//       "projection": "eckert3",
//       "dataProvider": {
//         "map": "worldLow",
//         "getAreasFromMap": true,
//         "areas": $scope.myCountries
//       },
//       "areasSettings": {
//         // "selectedColor": JSON.stringify($scope.randomColor()),
//         "selectedColor": "#821048",
//         "selectable": true
//       },
//      //Add click event to track country selection/unselection
//       "listeners": [{
//         "event": "clickMapObject",
//         "method": function(e) {
//           // Ignore any click not on area
//           if (e.mapObject.objectType !== "MapArea")
//             return;
//           var area = e.mapObject;
//           // Toggle showAsSelected
//           area.showAsSelected = !area.showAsSelected;
//           e.chart.returnInitialColor(area);
//           console.log("creating the map")
//           // Update the list
//           document.getElementById("selected").innerHTML = JSON.stringify(getSelectedCountries());
//           //The reason this was so hard to figure out was because var map is calling the
//             //"getSelectedCountries" function which requires a map length.
//             //All I had to do was initialize map as empty so it would move past it and grab the info I wanted.
//         }
//       }]
//     });
// //end createMap
// }
//
// // Function which extracts currently selected country list.
// // Returns array consisting of country ISO2 codes
//   function getSelectedCountries() {
//     var selected = [];
//     for(var i = 0; i < map.dataProvider.areas.length; i++) {
//       if(map.dataProvider.areas[i].showAsSelected)
//         selected.push(map.dataProvider.areas[i].id);
//     }
//     $scope.saveSelected = selected;
//     console.log(selected);
//     return selected;
//   }
//
//
//     getAllCountries(createMap);
}])
