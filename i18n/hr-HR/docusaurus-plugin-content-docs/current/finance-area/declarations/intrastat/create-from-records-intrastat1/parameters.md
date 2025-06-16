---
title: Parametri
sidebar_position: 3
---

Unutar odjeljka 'Parametri' procedura prikazuje sve redove unesenih transakcija. Konkretno:

**Status i šifra PDV-a** se preuzimaju  iz registra nositelja;

moguća **Vrijednost u valuti** prema unesenom prilikom registracije (polje je prisutno samo za intra2);

**Iznos transakcija u eurima** u eurima uzima iznos u valuti firme;

**Broj dokumenta**, la **Datum zapisa** i **Šifra usluge** preuzeti su iz šifarnika klijenta.

Nakon što su podaci popunjeni, moguće je nastaviti s kreiranjem, operacija koja će unijeti detalje u odjeljke bis - ter - quater.

Ispravan unos, automatski, u odgovarajući odjeljak obrasca ovisi o upravljanju unosa knjigovodstvenog zapisa, poljem **Tip PDV-a** u PDV prikazu. Ako je postavljen na *Generički* transakcija će biti unesena u odjeljak Bis, ako je postavljen na *Usluga*, , bit će unesena u odjeljak quater.   
Taj podatak će, zauzvrat, pravilno popuniti polje ***BisTer*** (koje se smatra odjeljkom modela) prisutno u *Intrastat* kartici zapisa, a to je zapravo podatak koji se prenosi u fazi izrade modela.

Odjeljak Ter se popunjava također putem  *Intrastat* kartice, kada se bilježi odobrenje, a u PDV priakzu zapisa aktivira se flag ***Odobrenje za prethodne godine*** (koja u svakom slučaju identificira izmjenu koja se ne odnosi na mjesec ili tromjesečje registracije i koja zahtijeva popunjavanje odjeljka ter). Pored te zastavice moguće je unijeti referentni datum računa koji se ispravlja.





