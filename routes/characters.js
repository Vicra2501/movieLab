// for requesting single character info

const { findById } = require("../models/Character");
const Character = require("../models/Character");

const router = require("express").Router();

/* GET home page */
// router.get("/characters", (req, res, next) => {
//   res.render("characters");
// });

router.get('/characters', (req, res, next) => {
  Character.find()
  .then(charactersFromDB => {
      console.log(charactersFromDB)
      // rendering a view ON INDEX
      res.render('characters', { charactersFromDB: charactersFromDB })
    })
    .catch(err => next(err)
    )
  })
  
// adding a new character  
  router.get('/characters/new', (req, res, next) => {
    res.render('characters/new')
    })
    
    router.post('/characters', (req, res, next) => {
      console.log(req.body);
      const {name, rank, group } = req.body;
   Character.create({name, rank, group})
    .then(() => res.redirect('/characters'))
    .catch(err => next(err))
  })
  
  // route to the display of info from a single character 
  router.get('/characters/:id', (req, res, next) => {
    Character.findById(req.params.id)
    .then(singleCharacterFromDB => {
      res.render('characters/show', { character: singleCharacterFromDB })
    })
    .catch(err => next(err)
    )
  })
  
// router.post('/' (req,res,next) => {
//   const { name, rank,             }
// })



module.exports = router;