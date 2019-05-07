const router = require("express").Router();
const passport = require("passport");
const Places = require("../../models/Places");
const User = require("../../models/User");

// Route for adding places
router.post("/add/place", function (req, res) {
  Places.create(req.body).then(function (data) {
    res.send(data);
  });
});
// route for updating if a person has been to the location
router.put("/data/:id", async function (req, res) {
  console.log(req.body);
  console.log(req.params);

  const r = await User.findOneAndUpdate(
    { googleId: req.user.googleId },
    {
      $push:
      {
        placesVisited: {
          place: req.params.id
        }
      }
    },
    { new: true }
  );
  res.json({ result: r });
  // res.json({ message: 'ok' })
});

// returns all places
router.get("/data", function (req, res) {
  Places.find()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// router.get("/user/placesvisited", function (req, res) {
//   User.findOne({ googleId: req.user.googleid })
//     .then(result => res.json({ placesvisited: result.placesVisited }))
//     .catch(err => res.status(422).json(err));
// });

router.get("/user/placesvisited/:googleid", function (req, res) {
  console.log("get /user/placesvisited/:googleid")
  User.findOne({ googleId: req.params.googleid })
    .then(result => {
      console.log(result)
      res.json({ placesvisited: result.placesVisited })
    })
    .catch(err => res.status(422).json(err));
});



router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"), //, {failureRedirect: "/", session: false }
  (req, res) => {
    console.log("Inside api/places /auth/google/callback", req.user);
    res.redirect("http://localhost:3000/");
  }
);

router.get("/whoami", async function (req, res) {
  console.log("Inside api/places whoami", req.user)
  // console.log("Inside api/places whoami", req.session)
  res.json({ googleId: req.user.googleId, displayName: req.user.displayName });
});

router.use("/",express.static("../../../client/build"))
module.exports = router;
