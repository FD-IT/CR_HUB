let partneri = [
  {
    ID: 1,
    nazivKompanije: "Zlatiborac",
    kontaktOsoba: "Stefan Ilic",
    adresa: "Adresa kompanije 1",
  },
  {
    ID: 2,
    nazivKompanije: "SoccerBet",
    kontaktOsoba: "Marko Markovic",
    adresa: "Adresa kompanije 2",
  },
  {
    ID: 3,
    nazivKompanije: "Samsung",
    kontaktOsoba: "Srdjan Ilic",
    adresa: "Adresa kompanije 3",
  },
  {
    ID: 4,
    nazivKompanije: "Apple",
    kontaktOsoba: "Jovana Filipovic",
    adresa: "Adresa kompanije 4",
  },
  {
    ID: 5,
    nazivKompanije: "Nokia",
    kontaktOsoba: "Marko Tasic",
    adresa: "Adresa kompanije 5",
  },
];


function GetPartnerByName(nazivKompanije) {
  // Provera da li je uneto ime kompanije
  if (!nazivKompanije || typeof nazivKompanije !== "string") {
    console.log("Morate uneti ispravno ime kompanije!");
    return null;
  }

  let trazeniPartner = partneri.find((p) => p.nazivKompanije === nazivKompanije);

  if (trazeniPartner) {
    return trazeniPartner;
  } else {
    console.log("Ne postoji partner sa unetim imenom kompanije.");
    return null;
  }
}

// Testiranje funkcije
//let partner = GetPartnerByName("Samsung");
//console.log(partner);


