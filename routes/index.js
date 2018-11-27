const express = require("express");
const router = express.Router();
const mapsRoutes = require("./maps");
const kioskPlacesRoutes = require("./kioskPlaces");
const commentsRoutes= require("./comments");
const editProfileRoutes = require("./editProfile");
const Comment = require("../models/Comment");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("/maps", mapsRoutes);
router.use("/kioskPlaces", kioskPlacesRoutes);
router.use("/comments", commentsRoutes);
router.use("/editProfile", editProfileRoutes);



router.get("/comments" , (req, res) => {
  Comment.find()
  .populate("author")  //podemos añadir aquí tb password
  .then(comment => {
    res.render("comments", {comment})  // confirmar comment y de donde viene
  })
})

module.exports = router;
