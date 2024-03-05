const Partner = require("../models/Partner");

// vrati sve partnere
const vratiSvePartnere = (req, res) => {
  Partner.find({})
    .sort({ createdAt: -1 })
    .then((partneri) => {
      res.render("pocetna", { title: "Svi partneri", partneri: partneri });
    })
    .catch((err) => {
      console.log(err);
    });
};

// brisanje partnera po ID-u
const obrisiPartnera = async (req, res) => {
  const partnerId = req.params.id;

  try {
    // Provera da li partner sa datim ID-em postoji
    const partner = await Partner.findById(partnerId);

    if (!partner) {
      return res.status(404).json({ error: "Partner nije pronađen." });
    }

    // Brisanje partnera iz baze
    await Partner.findByIdAndDelete(partnerId);

    res.json({
      success: true,
      message: `Partner sa ID-jem ${partnerId} je uspešno obrisan.`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Došlo je do greške prilikom brisanja partnera." });
  }
};

// vrati partnera sa datim ID
const vratiPartneraSaID = async (req, res, next) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).send("Partner nije pronadjen!");
    }
    res.render("partner", { partner: partner });
  } catch (error) {
    console.error("Greska prilikom pronalazenja partnera: ", error);
    res.status(500).send("Doslo je do greske prilikom obrade zahteva");
  }
};

// kreiraj novog partnera
const kreirajNovogPartnera = (req, res) => {

  console.log(req.body);
  const partner = new Partner(req.body);
  partner.save()
  .then(result => {
    res.redirect('/');
  })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  vratiSvePartnere, obrisiPartnera, vratiPartneraSaID, kreirajNovogPartnera,
};