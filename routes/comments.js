const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Comment = require("../models/Comment");
const Kiosk = require("../models/Kiosk");

router.get("/", ensureLoggedIn("/auth/login"), (req, res, next) => {
  Comment.find()
    .populate("author")
    .populate("kiosk")
    .then(comment => {
      console.log(comment);
      res.render("comments", { comment });
    })
    .catch(err => next(err));
});

router.get("/:id", ensureLoggedIn("/auth/login"), (req, res, next) => {
  Comment.find({ kiosk: req.params.id })
    .populate("author")
    .populate("kiosk")
    .then(comment => {
      console.log(comment);

      if(comment.length == 0) {
        Kiosk.findById(req.params.id)
        .then(kiosk => res.render('commentsForm', {kiosk}))
      }else{
        res.render("commentsForm", { comment });
      }
    })
    .catch(err => next(err));
});

router.post("/", ensureLoggedIn("/auth/login"), (req, res, next) => {
  const rate = req.body.estrellas;
  const comments = req.body.commentsKiosk;
  const author = req.user._id;
  const kiosk = req.body.kiosk;

  const newComment = new Comment({
    rate,
    comments,
    author,
    kiosk
  });

  newComment
    .save()
    .then(comment => {
      res.redirect("/comments");
    })
    .catch(err => {
      next(err)
    });
});

module.exports = router;
