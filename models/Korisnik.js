const mongoose = require("mongoose");

//atribut "UNIQUE" znaci da vrednost tog polja mora da bude jedinstvena
const KorisnikSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "string",
  },
});

module.exports = mongoose.model("Korisnik", KorisnikSchema);
