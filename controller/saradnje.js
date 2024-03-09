const Saradnja = require("../models/Saradnje");

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



module.exports = {
    dodajNovuSaradnju
}