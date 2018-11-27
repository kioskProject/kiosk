const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Comment = require("../models/Comment");


router.get("/" , ensureLoggedIn("/auth/login"), (req, res, next) => {
  Comment.find()
  .populate('author')  //podemos añadir aquí tb password
  .populate('kiosk')
  .then(comment => {
    console.log(comment)
    res.render("comments", {comment})  // confirmar comment y de donde viene
  }).catch(err => next(err))
})
module.exports = router;
