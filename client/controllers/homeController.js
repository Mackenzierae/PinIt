console.log('Home Controller');
app.controller('homeController', ["$scope", "loginFactory", "homeFactory", "$location", "$routeParams", function($scope, loginFactory, homeFactory, $location, $routeParams){
  //library of country objects = countryLibrary
  // $scope.test="Am I working...?";
  // $scope.mySavedCountries = [];
  // $scope.currentlySelectedCountries = [];
  // console.log("restting...");
  //
  // $scope.comparableSavedCountries = [];
  //
  // $scope.newSelectedCountries = [];
  // $scope.deleteTheseCountries = [];
  // // $scope.doYouWantToDeleteThese = [];
  // // $scope.newCountriesToSave = [];

  //
  // $scope.poopSavedCountries = [];
   var map;

  loginFactory.getLoggedUser(function(logged_user_data){
    console.log("one");
    $scope.logged_user = logged_user_data;
  })

  $scope.logout = function(){
    homeFactory.clearCachedData(function(){
    })
    console.log("two");
    // console.log('in logout function')
    loginFactory.logout(function(){
      $location.url('/');
  })}


  // $scope.randomColor = function(){
  //   var colors = ["#B1FA51", "#D6195B", "#FDC92E"];
  //   var random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  //   console.log(colors[random]);
  //   console.log("**************");
  //   return colors[random];
  // }
  ////Fixture:
  // var areaArray =
  // [
  //   {
  //     "id": "RU",
  //     "showAsSelected": true
  //   },
  //   {
  //     "id": "CA",
  //     "showAsSelected": true
  //   },
  //   {
  //     "id": "CN",
  //     "showAsSelected": true
  //   }
  // ]

  var getAllCountriesForMap = function(callback){
    console.log("three");
    homeFactory.getCountries(function(returned_data){
      console.log("returned_data........", returned_data);
      var gotEm = [];
      //set data before it goes fucking nuts.
      homeFactory.setUsersSavedCountries(returned_data.countries, function(data){
        console.log("back in get countries function");
        console.log(data);
      })
      homeFactory.setCurrentlySelected(returned_data.countries, function(data){
        console.log("back in the home controller");
        console.log(data);
      })
      //now make it available for the map API
      for (var i = 0; i < returned_data.countries.length; i++){
        gotEm.push({
          "id": returned_data.countries[i],
          "showAsSelected": true
        });
      }
      $scope.mySavedCountries = gotEm;
      callback();
    })
  }
  /////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  /////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  // var getAllCountriesForSaveFunction = function(){
  //   console.log("four");
  //   // console.log("1111111111_TheSecondThough_111111111111");
  //   homeFactory.getCountries(function(returned_data_dude){
  //     // console.log("returned........", returned_data_dude);
  //     // console.log(returned_data_dude);
  //     var gotThisShit = [];
  //     // console.log(gotThisShit.length);
  //     for (var i = 0; i < returned_data_dude.length; i++){
  //       gotThisShit.push({
  //         "id": returned_data_dude[i],
  //         "showAsSelected": true
  //       });
  //       $scope.comparableSavedCountries.push(i);
  //       //assuming the data is coming back just like an array of country ID strings. Which is wont be...
  //     }
  //     $scope.poopSavedCountries = gotEm;
  //     return gotThisShit;
  //   })
  // }
  /////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  /////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


  function createMap(){
    console.log("five");
    // console.log("running createMap function");
    map = AmCharts.makeChart("chartdiv", {
      "type": "map",
      "theme": "light",
      "projection": "eckert3",
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true,
        "areas": $scope.mySavedCountries
      },
      "areasSettings": {
        // "selectedColor": JSON.stringify($scope.randomColor()),
        "selectedColor": "#821048",
        "selectable": true
      },
     //Add click event to track country selection/unselection
      "listeners": [{
        "event": "clickMapObject",
        "method": function(e) {
          // Ignore any click not on area
          if (e.mapObject.objectType !== "MapArea")
            return;
          var area = e.mapObject;
          // Toggle showAsSelected
          area.showAsSelected = !area.showAsSelected;
          e.chart.returnInitialColor(area);
          // console.log("creating the map")
          // Update the list
          document.getElementById("selected").innerHTML = JSON.stringify($scope.getSelectedCountries(function(data){
            console.log("------------> " + data);
            console.log("------------> " + $scope.currentlySelectedCountries);
          }));
          //The reason this was so hard to figure out was because var map is calling the
            //"getSelectedCountries" function which requires a map length.
            //All I had to do was initialize map as empty so it would move past it and grab the info I wanted.
        }
     }]
    });
// end createMap
}


// Function which extracts currently selected country list.
// Returns array consisting of country ISO2 codes
  $scope.getSelectedCountries = function(callback) {
    console.log("six");
    var selected = [];
    for(var i = 0; i < map.dataProvider.areas.length; i++) {
      if(map.dataProvider.areas[i].showAsSelected)
        selected.push(map.dataProvider.areas[i].id);
      }
    $scope.currentlySelectedCountries = selected;
    console.log(selected);
    //have to set these in the home Factory:
    homeFactory.setCurrentlySelected(selected, function(data){
      console.log("back in the home controller");
      console.log(data);
    })
    console.log($scope.currentlySelectedCountries);
    callback(selected);
    return selected;
  }

  // $scope.popupMessage = "Hey, did you mean to unselect ____? If so, select 'continue' and they will be deleted from your map along with their moments."
  // $scope.popupMessage = "All these countries are already saved!"

  $scope.ok = function(){
    console.log("seven");
    //just gets rid of popup
    // console.log("'Yep' function initiated by popup shit");
    $scope.showPopup = false;
  }

  $scope.yes = function(){
    console.log("eight");
    //"DELETE" the unselected countries. really just saving the new array.
    homeFactory.saveMyFirstCountries($scope.currentlySelectedCountries, function(res){
      console.log("in VERY MOTHA FUCKIN LAST function's callback... response is:", res);
      // getAllCountries();
    })
    $scope.popupMessage = "Your map has been saved!"
    $scope.buttonOne = "Sounds good";
    $scope.hideButtOne = false;
    $scope.showPopup = true;
    //do whatever.
    $scope.showPopup = false;
  }

  $scope.no = function(){
    console.log("nine");
    //don't do whatever.
    $scope.showPopup = false;
  }

  // $scope.comparableSavedCountries = [];
  // $scope.newSelectedCountries = [];
  // $scope.deleteTheseCountries = [];


  $scope.buttonOne = "will go to OK function";
  $scope.buttonTwo = "will go to YES function";
  $scope.buttonThree = "will go to NO function";

  $scope.popupMessage = "";
  $scope.showPopup = false;
  $scope.hideButtOne = true;
  $scope.hideButtTwo = true;
  $scope.hideButtThree = true;

////////////////////////////////////////////////////
////////SAVE MAP BUTTON/////////////////////////////
$scope.saveMap = function(){
        console.log("ten");
  $scope.popupMessage = "";
  $scope.showPopup = false;
  $scope.hideButtOne = true;
  $scope.hideButtTwo = true;
  $scope.hideButtThree = true;
    $scope.doYouWantToDeleteThese = [];
    $scope.currentlySelectedCountries = [];
    $scope.poopSavedCountries = [];
    $scope.matchingCountries = [];
    $scope.newCountriesToSave = [];
    $scope.doYouWantToDeleteThese = [];

  console.log("****************************************************************************");
  console.log("****************************************************************************");
  console.log($scope.currentlySelectedCountries);
  console.log($scope.poopSavedCountries);
  console.log($scope.matchingCountries);
  console.log($scope.newCountriesToSave);
  console.log($scope.doYouWantToDeleteThese);
  console.log("****************************************************************************");
  console.log("****************************************************************************");

      console.log("going to the home factory");
      //getting data I had to cache from the home factory.
      homeFactory.getCurrentlySelected(function(data){
        console.log(data);
        $scope.currentlySelectedCountries = data;
      })
      console.log($scope.currentlySelectedCountries);

      homeFactory.getUsersSavedCountries(function(data){
        console.log(data);
        $scope.poopSavedCountries = data;
      })
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$")
      console.log($scope.poopSavedCountries);
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$")

    if ($scope.currentlySelectedCountries.length == 0){
    // if ($scope.poopSavedCountries.length == 0 && $scope.currentlySelectedCountries.length == 0){
      console.log("eleven");
      // message is displayed
        $scope.popupMessage = "You should probably try selecting at least one country before you save your map ;)";
        $scope.buttonOne = "You're probably right.";
        $scope.hideButtOne = false;
        $scope.showPopup = true;
    }
    else if ($scope.poopSavedCountries.length == 0 && $scope.currentlySelectedCountries.length > 0){
      console.log("twelve");
        // SAVE THA MOTHA FACKAN COUNTRIES IN THE DB YO!
          homeFactory.saveMyFirstCountries($scope.currentlySelectedCountries, function(res){
            console.log("in 'twelve'... response is:", res);
            // getAllCountries();
          })
          $scope.popupMessage = "Your map has been saved!"
          $scope.buttonOne = "Sounds good";
          $scope.hideButtOne = false;
          $scope.showPopup = true;
        }

    else if ($scope.poopSavedCountries.length > 0 && $scope.currentlySelectedCountries.length > 0){
      console.log("thirteen");
//       // OK. we have stuff in both mySavedCountries and currentlySelectedCountries
//       // 1) loop through selected countries. if if also in database, move to matched countries.
      var matchingCountries = [];
      var newCountriesToSave = [];
      for (var a = 0; a < $scope.currentlySelectedCountries.length; a++){
        for (var b = 0; b < $scope.poopSavedCountries.length; b++){
          if (a == b){
            matchingCountries.push(a);

          }
          else{
            newCountriesToSave.push(a);
          }
        }
      }
      //SETTING THESE VARIABLES IN THE FACTORY....maybe unnecessary
      homeFactory.setMatchingCountries(matchingCountries, function(data){
        console.log("set matching countries callback:");
        // console.log(data);
        $scope.matchingCountries = data;
      })
      console.log($scope.matchingCountries);

      homeFactory.setNewCountries(newCountriesToSave, function(data){
        console.log("set new countries to save callback");
        $scope.newCountriesToSave = data;
        // ^^ THIS SHIT HAS THE WEIRD B STUFF IN IT BUT IT MIGHT BE OK.... AND GET OVERWRITTEN THE SECOND WE SELECT A NEW ONE.... lets find out.
      })
      console.log($scope.newCountriesToSave);
//----------------------------------------------------------------------------------------
      // this would be to get them. DID NOT CHANGE VARIABLE NAMES YET!!!!

      //
      // homeFactory.getMatchingCountries(function(data){
      //   console.log(data);
      //   $scope.getMatchingCountries = data;
      // })
      //
      // homeFactory.getNewCountries(function(data){
      //   console.log(data);
      //   $scope.getNewCountries = data;
      // })
//----------------------------------------------------------------------------------------
      var text;

        //SOOO:
//       //there are countries in the database that are not selected:
//       // accidentally unselected countries that are already in the database case:
      // ONE  ===========================================================
      if($scope.matchingCountries.length < $scope.poopSavedCountries.length) {
        //then there are countries in the database that are NOT currently selected!!!!
        var doYouWantToDeleteThese = "";
        for (var c = 0; c < $scope.poopSavedCountries; c++){
          for (var d = 0; d < $scope.matchingCountries; d++){
            if (c !== d){
              doYouWantToDeleteThese.push(c);
              //break and FLASH MESSAGE "$scope.doYouWantToDeleteThese"
            }
          }
        }

        //  MIGHT BE THE FUNCTION ACTUALLY....
        var text = $scope.doYouWantToDeleteThese;
        console.log(doYouWantToDeleteThese);

        // $scope.popupMessage = "You seem to have unselected some shit! If you want to delete them and only save what is currently selected, select 'DELETE!!'. Otherwise, select 'Try Again' ro re-select them.";
        $scope.popupMessage = "You seem to have unselected the following countries: "+$scope.doYouWantToDeleteThese+" If you want to delete them and only save what is currently selected, select 'DELETE!!'. Otherwise, select 'Try Again' ro re-select them.";
        $scope.buttonTwo = "DELETE";
        $scope.buttonThree = "Try Again";
        $scope.hideButtTwo = false;
        $scope.hideButtThree = false;
        $scope.showPopup = true;
      }
// // **********CHECK AGAIN IN AM, BUT IM PRETTY POSOTIVE THAT SAVED COUNTRIES CAN ONLY EVER BE == OR > MATCHING COUNTRIES.
//   // everything in the database is accounted for in the "matched countries"
      else if($scope.poopSavedCountries.length == $scope.matchingCountries.length){
        // ONE: new is either equal to
        if($scope.matchingCountries.length == $scope.currentlySelectedCountries.length){
          //flash message $scope.messageForNoNewSelectedCountries . Boring option. break.
          $scope.popupMessage = "You haven't selected any new Countries!!";
          $scope.buttonOne = "Whoops, My Bad";
          $scope.hideButtOne = false;
          $scope.showPopup = true;
        }
        else if($scope.currentlySelectedCountries.length > $scope.matchingCountries.length){
          //then save all the countries in $scope.newCountriesToSave !!!!!!
          // SAVE THA MOTHA FACKAN COUNTRIES IN THE DB YO!
            homeFactory.saveMyFirstCountries($scope.currentlySelectedCountries, function(res){
              console.log("in VERY MOTHA FUCKIN LAST function's callback... response is:", res);
              // getAllCountries();
            })
            $scope.popupMessage = "Your map has been saved!"
            $scope.buttonOne = "Sounds good";
            $scope.hideButtOne = false;
            $scope.showPopup = true;
          }

        }
      }
//end crazy function
}


    getAllCountriesForMap(createMap);
}])
