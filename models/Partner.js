const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  //Dodavanje polja
  naziv: String,
  kontaktOsoba: String,
  kontaktMejl: String,
  kontaktTelefon: Number,
});

//nova kolekcija partnerstva
const PartnerstvoSchema = new mongoose.Schema({
  naziv: {
    type: String,
    required: true,
  },
  tip_partnerstva: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  komentari: {
    type: [String],
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
  },
});

const Partnerstvo = mongoose.model("Partnerstvo", PartnerstvoSchema);
//Eksportovanje modela
module.exports = mongoose.model("Partner", partnerSchema);
module.exports = Partnerstvo;
