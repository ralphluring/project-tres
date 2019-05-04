const router = require("express").Router();
const passport = require('passport');
const Places = require("../../models/Places");

// Route for adding places
router.post("/add/place",function(req,res){
    Places.create(req.body).then(function(data){
        res.send(data);
    })
})
// route for updating if a person has been to the location
router.put('/data/:id', async function (req, res) {
    console.log(req.body);
    console.log(req.params);
    const r = await Places.findOneAndUpdate(
        {_id:req.params.id},
        {$set:{place_visited: req.body.place_visited}},
        {new: true}
        )
    res.json({result: r})
  })

// returns all places
router.get("/data",function(req,res){
    Places
   .find()
   .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
 })


router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: "/login", session: true }), //, {failureRedirect: "/", session: false }
  (req,res) => {
    const token = req.user.token
    console.log('token',token)
    res.redirect('/');
  }
);

router.get('/whoAmI', async (req, res) => {
    console.log(req.user);
    // const users = await db.User.find();
    res.json(req.user)
  })


module.exports = router;


