const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const mongoose = require('mongoose');
const keys = require("../config/keys");
const User = require("../models/User");

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.
passport.serializeUser(function(user, done) {
  console.log("serializeUser user", user);
  console.log("serializeUser user", user.googleId);
  done(null, user.googleId);
});

passport.deserializeUser(async function(id, done) {
  console.log("deserializeUser user", id);
  const user = await User.findOne({ googleId: id });
  done(null, user);  
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // const userData = {
      //   email: profile.emails[0].value,
      //   name: profile.displayName,
      //   token: accessToken
      // };

      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // the user passed in both done function will become
        // the same user being passed into passport.serializeUser
        console.log("existing User", existingUser )
        done(null, existingUser);
      } else {
        const user = await User({
          googleId: profile.id,
          displayName: profile.displayName
        }).save();

        done(null, user);
      }
      // done(null, userData);
    }
  )
);
