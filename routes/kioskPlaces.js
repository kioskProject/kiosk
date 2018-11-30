const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Kiosk = require("../models/Kiosk");
const uploadCloud = require("../config/cloudinary");

router.get('/', ensureLoggedIn("/auth/login"),(req, res, next) => {
  Kiosk.find({})
  .then(function (kiosks){
   /*  kiosks.map(function(_id){
      _id = _id.toString()
    });
 */
    res.render('kioskPlaces', {kiosks, kiosksString: JSON.stringify(kiosks)})
 }); 
});


router.post('/new', uploadCloud.single("photo"), (req, res, next) => {

  const picPath = req.file.url;
  const picName = req.file.originalname;

  let wifi = req.body.wifi == 'on' ? true : false;
  let drinks = req.body.drinks == 'on' ? true : false;
  let souvenirs = req.body.souvenirs == 'on' ? true : false;
  let cigarettes = req.body.cigarettes == 'on' ? true : false;

  let newKiosk = {
    kioskName: req.body.newKioskName,
    description: req.body.newKioskDesc,
    wifi,
    drinks,
    souvenirs,
    cigarettes,
    picPath,
    picName,

    location: {
      latitude: Number(req.body.newKioskLatitude), 
      longitude: Number(req.body.newKioskLongitude)  
    }
  }
  Kiosk.create(newKiosk).then( kiosk => {
    res.redirect('/kioskPlaces');
  }).catch(e=> next(e));
});



module.exports = router;
