const express = require("express");

const router = express.Router();

// GET /partneri
router.get("/", (req, res) => {
    res.send("Prikazi sve partnere");
    console.log("Zahtev za prikazivanje svih partnera je primljen!");
  });

module.exports = router;