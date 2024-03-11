const express = require('express');
const router = express.Router();
const saradnjaController = require('../controllers/saradnje');

// Dodaj rutu za dodavanje komentara u saradnju
router.post('/saradnje/:id/dodajKomentar', saradnjaController.dodajKomentar);

module.exports = router;