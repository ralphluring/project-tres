const router = require("express").Router();
const Places = require("../../models/Places");
// Route for adding places

router.post("/add/place",function(req,res){
    Places.create(req.body).then(function(data){
        res.send(data);
    })
})

router.put('/data/:id', async function (req, res) {
    console.log(req.body);
    console.log(req.params);
    
    const r = await Places.findOneAndUpdate({_id:req.params.id},{$set:{place_visited: req.body.place_visited}},{new: true})

    res.json({result: r})
  })

// returns all places
router.get("/data",function(req,res){
    Places
   .find()
   .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
 })


module.exports = router;
