const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Kiosk = require("../models/Kiosk");

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





router.post('/new', (req, res, next) => {

  let newKiosk = {
    name: req.body.newKioskName,
    description: req.body.newKioskDesc,
    
    location: {
      
      latitude: Number(req.body.newKioskLatitude), 
      longitude: Number(req.body.newKioskLongitude)  // cómo rel las coordenadas newKioskLoc
    }
  }
  console.log(newKiosk);
  Kiosk.create(newKiosk).then( kiosk => {
    res.redirect('/kioskPlaces');
  }).catch(e=> next(e));
});



module.exports = router;
