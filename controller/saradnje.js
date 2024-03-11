const Saradnja = require("../models/Saradnje");
const Partner = require("../models/Partner");

//kreiraj novu saradnju
const dodajNovuSaradnju = (req, res) => {
    const saradnja = new Saradnja({
      naziv: req.body.naziv,
      tip_saradnje: req.body.tip_saradnje,
      status: 'CEKANJE',
      partner: req.body.partner
    });
  
    saradnja.save()
      .then(result => {
        res.redirect('/');
      })
      .catch(err => {
        console.error(err);
      });
  };

// Prikazuje stranicu za dodavanje saradnje i vraća sve partnere
const prikaziDodajSaradnju = async (req, res) => {
  try {
      res.render("dodajSaradnju");
      const partneri = await Partner.find({});
      res.send(partneri);
  } catch (error) {
      console.error("Greška", error);
      res.status(500).send("Došlo je do greške prilikom prikazivanja stranice za dodavanje saradnje.");
  }
};

module.exports = {
    dodajNovuSaradnju,
    prikaziDodajSaradnju
}