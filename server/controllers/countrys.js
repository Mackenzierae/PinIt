console.log("in country.js backend controllerrrr");
var mongoose = require('mongoose');
var Country = mongoose.model("Country");
var User = mongoose.model("User");

module.exports = {


    // getCountries:function(req,res){
    //   console.log("in backend get Countries function!");
    //   Country.find({_user: req.session.user._id}).populate({path:'_user', model:"User"}).exec(function(err, countriesArr){
    //     if(err){
    //       console.log("error getting the User's saved countries, or user doesn't have any");
    //       res.sendStatus(404);
    //     }else{
    //       console.log("got em! -", countriesArr.countries);
    //       res.json(countriesArr.countries);
    //     }
    //   })
    // },



    //on USERS.js

    // saveUsersFirstCountries:function(req,res){
    //   console.log("in saveCountries function!");
    //   console.log(req);
    //   User.findOne({_id: req.session.user._id}).exec(function(err,user){
    //     if(err){
    //       res.sendStatus(400);
    //       console.log('could not find user');
    //     }else{
    //       console.log(req.body);
    //       user.countries = req.body;
    //       user.save(function(err, result){
    //         if(err){
    //           console.log("error saving updated user's countries array");
    //         }else{
    //           res.json(result);
    //         }
    //       })
    //     }
    //   })
    // }








//fin
}





          // for (var i = 0; i < req.body.length; i++){
          //   console.log(req.body.length);
          //   console.log(req.body[i])
          //   var newCountry = new Country();
          //   newCountry.countryID = req.body[i];
          //   newCountry._user = req.session.user._id;
          //   console.log(newCountry);
          //   newCountry.save(function(err, res){
          //     console.log(newCountry + "****");
          //     console.log("trying to saaavvveeeee");
          //     if(err){
          //       console.log("error saving");
          //       res.json(err);
          //       //in future do that append to errors and send back errors thang like for login
          //     }else{
          //       user.countries.push(req.body);
          //       user.save(function(err, userresult){
          //         console.log("trying to save countries array inuser");
          //       })
          //     }
          //   })
          //
          // }

    // }
    //FIRST ATTEMPT AT FIRST COUNTRIES SAVE. TRYING TO JUST DO COUNTRIES FIRST THEN USER NOW^^
    //OK. can't FOR LOOP ON THE BACK END. HAS TO DO WITH THE RESPONSE. DAMNNNNN
    // saveUsersFirstCountries:function(req,res){
    //   console.log("in saveCountries function!");
    //   console.log("****** countries: ******");
    //   console.log(req.body);
    //
    //   User.findOne({_user: req.session.user._id}, function(err, user){
    //     if(err){
    //       console.log("error finding user");
    //       res.json(err);
    //     }else{
    //       for (var i = 0; i < req.body.length; i++){
    //         console.log(req.body.length);
    //         console.log(req.body[i])
    //         var newCountry = new Country();
    //         newCountry.countryID = req.body[i];
    //         newCountry._user = req.session.user._id;
    //         newCountry.save(function(err, result){
    //           console.log("trying to saaavvveeeee");
    //           if(err){
    //             console.log("error saving");
    //             res.json(err);
    //             //in future do that append to errors and send back errors thang like for login
    //           }else{
    //             user.countries.push(req.body);
    //             user.save(function(err, userresult){
    //               console.log("trying to save countries array inuser");
    //             })
    //           }
    //         })
    //
    //       }
    //     }
    //   })
    // }


      //already checked to see if there is anything in the database, and in this case there isn't,




    //
    //   Map.findOne({_user: req.session.user._id}, (function(err, map){
    //     if(!map){
    //       //create new map!! ...can I do this this way...
    //       console.log("a map does not exist... so we're trying to Create one with:", req.body);
    //       var newMap = new Map();
    //       newMap._user = req.session.user._id;
    //       newMap.countries = req.body;
    //       //check req object structure
    //       newMap.save(function(err, response){
    //         console.log('trying to save a new map......', newMap);
    //         if(err){
    //           console.log("ERROR saving new map:", err);
    //         }else{
    //           console.log("successfully saved a NEW map, apparently!");
    //           res.json(response);
    //         }
    //       })
    //     }else{
    //       //update current map Schema!
    //       console.log("attempting to overwrite the current listed countries and UPDATE with the new ones here:", req.body);
    //       map.countries = req.body;
    //       map.save(function(err, res){
    //         if (err){
    //           console.log("I fucked up!", err)
    //           res.json(err);
    //         }else{
    //           console.log("********I think it worked?****** check it:");
    //           // res.send(res);
    //         }
    //       })
    //     }
    //   })
    // )}
    //
    //
    //


  //fin




















    //
    // getCountries:function(req,res){
    //   console.log("in backend get Countries function!");
    //   Map.findOne({_user: req.session.user._id}).populate({path:'_user', model:"User"}).exec(function(err, countriesArr){
    //
    //     if(err){
    //       console.log("error getting the User's saved countries");
    //       res.sendStatus(404);
    //     }else{
    //       console.log("got em! -", countriesArr.countries);
    //       res.json(countriesArr.countries);
    //     }
    //   })
    // },
    //
    //
    // saveMap:function(req,res){
    //   console.log("in saveMap function!");
    //   Map.findOne({_user: req.session.user._id}, (function(err, map){
    //     if(!map){
    //       //create new map!! ...can I do this this way...
    //       console.log("a map does not exist... so we're trying to Create one with:", req.body);
    //       var newMap = new Map();
    //       newMap._user = req.session.user._id;
    //       newMap.countries = req.body;
    //       //check req object structure
    //       newMap.save(function(err, response){
    //         console.log('trying to save a new map......', newMap);
    //         if(err){
    //           console.log("ERROR saving new map:", err);
    //         }else{
    //           console.log("successfully saved a NEW map, apparently!");
    //           res.json(response);
    //         }
    //       })
    //     }else{
    //       //update current map Schema!
    //       console.log("attempting to overwrite the current listed countries and UPDATE with the new ones here:", req.body);
    //       map.countries = req.body;
    //       map.save(function(err, res){
    //         if (err){
    //           console.log("I fucked up!", err)
    //           res.json(err);
    //         }else{
    //           console.log("********I think it worked?****** check it:");
    //           // res.send(res);
    //         }
    //       })
    //     }
    //   })
    // )}
    //
    //
