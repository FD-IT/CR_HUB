const mongoose = require("mongoose");

//nova kolekcija partnerstva
const SaradnjaSchema = new mongoose.Schema({
  naziv: {
    type: String,
    required: true,
  },
  tip_saradnje: {
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

//Eksportovanje modela
module.exports = mongoose.model("Saradnja", SaradnjaSchema);