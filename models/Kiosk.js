const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const kioskSchema = new Schema({
  kioskName: String,
  description: String,
  location: { latitude: Number, longitude: Number },
  // service: {type: String, enum : ['WiFi','Bebidas','Prensa internacional', 'Colecciones cromos','Souvenirs','Colecciones infantiles','Tabaco']},
  wifi: Boolean,
  drinks: Boolean,
  souvenirs: Boolean,
  cigarettes: Boolean,
  rate: Number,
  picPath: String,
  picName: String

});

const Kiosk = mongoose.model('Kiosk', kioskSchema);
module.exports = Kiosk;
