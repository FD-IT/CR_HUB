const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  //Dodavanje polja
  naziv: String,
  kontaktOsoba: String,
  kontaktMejl: String,
  kontaktTelefon: Number,
});
//Exportovanje modela
module.exports = mongoose.model("Partner", partnerSchema);
