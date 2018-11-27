const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Kiosk = require("../models/Kiosk");

router.get('/', ensureLoggedIn("/auth/login"),(req, res, next) => {
  Kiosk.find()
  .then(kiosks => res.render('kioskPlaces', {kiosks}))
  
});

module.exports = router;
