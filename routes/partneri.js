const express = require("express");

const router = express.Router();

// GET /partneri
router.get("/", (req, res) => {
    res.send("Prikazi sve partnere");
    console.log("Zahtev za prikazivanje svih partnera je primljen!");
  });

// POST /partneri
router.post("/", (req, res) => {
    res.send("Kreiraj novog partnera")
});

// PATCH /partneri/:id
router.patch("/:id", (req, res) => {
  const partnerId = req.params.id;
  res.send(`Izmeni partnera sa datim ID: ${partnerId}`);
  console.log(`Zahtev za izmenu partnera ${partnerId} je primljen!`);
});

// DELETE /partneri
router.delete("/:id", (req, res) => {
  res.send("Obrisi partnera sa ID-jem ${req.params.id}");
});

module.exports = router;

