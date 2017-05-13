var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

app.use(bodyParser.json());
app.use(session({
    secret: 'Demo or Die',
    resave: true,
    saveUninitialized: true
}));


var FACEBOOK_APP_ID = '362089030859415',
    FACEBOOK_APP_SECRET ='a0ea6fb3d03d7db5368cd33bd8ace04d';

var fbOptions = {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
    profileFields: ['emails']
};

var fbCallback = function(accessToken, refreshToken, profile, cb){
    console.log(accessToken, refreshToken, profile);
};

passport.use(new FacebookStrategy(fbOptions, fbCallback));

app.route('/')
.get(passport.authenticate('facebook', { scope: ['email']}));


app.route('/auth/facebook/callback')
.get(passport.authenticate('facebook', function(err, user, info){
    //database safe mongodb
}));

/*app.route('/auth/facebook/callback')
.get(function(req, res){
    res.send('this checks the status');
});*/
app.listen(8080);

