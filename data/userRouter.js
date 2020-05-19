const express = require('express');
const db = require("./userDb")
const router = express.Router();


router.get("/", (req, res) => {
    db.get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error:"cannot get users"}))
})

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then((users) => res.status(204).send())
    .catch((err) => res.status(500).json({ error: "cannot delete user" }));
});

function protect(req, res, next) {
    console.log("called")
    if (req.session && req.session.username) {
      next();
    } else {
      res.status(401).json({ message: 'you shall not pass!!' });
    }
}



module.exports = router