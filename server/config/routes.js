console.log("in ROUTES ON BACKENDDDDD")
var mongoose = require('mongoose')
var users = require('./../controllers/users.js')
var countrys = require('./../controllers/countrys.js')
var moments = require('./../controllers/moments.js')

module.exports = function(app){
  console.log("server routes");

  app.post('/users', users.register);
  app.post('/login', users.login);
  //middleware is declared to be used here
  app.use(userAuth);
  //all the routes that use the middleware before invoking their functions:
  app.get('/getCurrentUser', users.getCurrentUser);

  app.post('/saveUsersCountries', users.saveUsersFirstCountries);
  app.get('/getCountries', users.getCountries);
  // app.get('/getCountries', countrys.getCountries);

  app.post('/logout', users.logout);
}
//userAuth middleware
function userAuth(req,res,next){
  if(req.session.user){
    console.log('user has been authorized');
    next();
  }else{
    res.sendStatus(401);
  }
}
