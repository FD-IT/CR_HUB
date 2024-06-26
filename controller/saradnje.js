const Saradnja = require("../models/Saradnje");
const Partner = require("../models/Partner");

//kreiraj novu saradnju
const dodajNovuSaradnju = (req, res) => {
  const saradnja = new Saradnja({
    naziv: req.body.naziv,
    tip_saradnje: req.body.tip_saradnje,
    status: "CEKANJE",
    partner: req.body.partner,
  });

  saradnja
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
    });
};

// Funkcija koja dodaje novi komentar u datu saradnju
const dodajKomentar = async (req, res) => {
  const { id } = req.params; // ID saradnje
  const { tekst } = req.body; // Tekst komentara

  try {
    // Pronalazak saradnje po ID-u
    const saradnja = await Saradnja.findById(id);

    // Dodavanje novog komentara u listu komentara
    saradnja.komentari.push(tekst);

    // Čuvanje izmene u bazi podataka
    await saradnja.save();

    // Slanje uspešnog odgovora
    res
      .status(200)
      .json({ message: "Komentar uspešno dodat.", saradnja: saradnja });
  } catch (error) {
    console.error("Greška pri dodavanju komentara:", error);
    res
      .status(500)
      .json({ error: "Došlo je do greške prilikom dodavanja komentara." });
  }
};

// Funkcija koja menja status saradnje
const promeniStatus = async (req, res) => {
  try {
    const { id } = req.params; // ID saradnje
    const { noviStatus } = req.body; // Novi status saradnje koji dolazi iz zahteva

    // Pronalazak saradnje po ID-u
    const saradnja = await Saradnja.findById(id);

    // Promena statusa
    saradnja.status = noviStatus;

    // Čuvanje izmena u bazi podataka
    await saradnja.save();

    // Slanje uspešnog odgovora
    res.status(200).json({
      message: "Status saradnje uspešno promenjen.",
      saradnja: saradnja,
    });
  } catch (error) {
    console.error("Greška pri promeni statusa saradnje:", error);
    res
      .status(500)
      .json({ error: "Došlo je do greške prilikom promene statusa saradnje." });
  }
};

const getDodajNovuSaradnju = (req, res) => {
  Partner.find({})
    .sort({ createdAt: -1 })
    .then((partneri) => {
      res.render("dodajSaradnju", {
        title: "Svi partneri",
        partneri: partneri,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Funkcija koja vraca sve saradnje
const getSaradnje = (req, res) => {
  Saradnje.find({})
    .sort({ createdAt: -1 })
    .then((saradnje) => {
      res.render("saradnje", { title: "Sve saradnje", saradnje: saradnje });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Došlo je do greške prilikom obrade zahteva");
    });
};

module.exports = {
  dodajNovuSaradnju,
  dodajKomentar,
  promeniStatus,
  getDodajNovuSaradnju,
  getSaradnje,
};
