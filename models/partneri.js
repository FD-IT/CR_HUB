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
//Funkcija za azuriranje partnera
//Funkcija je testirana, nije moguce uneti prazno polje i podatak tipa string
function UpdatePartnerInfo(partner) {
  //Provera da li je unet ID i da li je on tipa broj
  if (!partner.ID || typeof partner.ID !== "number") {
    console.log("Morate uneti ispravan ID!");
    return;
  }
  let trazeniPartner = partneri.find((p) => p.ID === partner.ID);

  if (trazeniPartner) {
    trazeniPartner.nazivKompanije = partner.nazivKompanije;
    trazeniPartner.kontaktOsoba = partner.kontaktOsoba;
    trazeniPartner.adresa = partner.adresa;
    console.log("Informacije su uspesno ažurirane!");
  } else {
    console.log("Ne postoji takav partner");
  }
}
