const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Comment = require("../models/Comment");


router.get("/" , ensureLoggedIn("/auth/login"), (req, res, next) => {
  Comment.find()
  .populate('author')  
  .populate('kiosk')
  .then(comment => {
    console.log(comment)
    res.render("comments", {comment})  
  }).catch(err => next(err))
})

router.get("/:id" , ensureLoggedIn("/auth/login"), (req, res, next) => {
  Comment.find({kiosk:req.params.id})
  .populate('author')  
  .populate('kiosk')
  .then(comment => {
    console.log(comment)
    res.render("comments", {comment})  
  }).catch(err => next(err))
})


module.exports = router;
