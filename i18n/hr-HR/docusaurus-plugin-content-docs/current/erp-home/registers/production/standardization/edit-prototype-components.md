---
title: Modifikacija komponenata
sidebar_position: 4
---

Ovaj obrazac omogućuje masovnu izmjenu prethodno stvorenih prototipova, koristeći tri različite procedure ovisno o vrsti željene promjene: zamjena/izmjena, dodavanje i poništenje.

### Zamjena i izmjena 

Odabirom opcije **Zamjena/Izmjena** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti komponentu u područje filtra, odabirom je pomoću odgovarajućeg gumba l'apposito *Pomoć stavke* smještenog pored polja **Komponenta**.

Filtrirajte po jednom članku; nije moguće unijeti samo klasu članka ili samo dio koda ili opisa kao kriterij pretraživanja. Nakon postavljanja kriterija pretraživanja, klikom na gumb za **Pretraživanje** smješten na vrpci, postupak prikazuje sve osnovne distinkcije unutar kojih je prisutan komponent unesen u područje filtra, izvršavajući tako *Sažimanje komponente*.

U rešetki rezultata prikazane su klasa, kod, opis i varijanta skupa, verzija osnovne distinkcije, početak i završetak valjanosti kako roditeljskog članka tako i komponente, također, prikazana je količina komponente i njena jedinica mjere, uvijek u kontekstu veze skup/komponenta.

Odaberite jednu od prikazanih distinkcija, ili, odaberite kombinacijom *CTRL + klik * mišem, popis osnovnih distinkcija na kojima želite izvršiti postupak **Zamjena/Izmjena**.

Odaberite, u donjem dijelu prozora, novu komponentu koja će zamijeniti onu odabrane u odjeljku filtra. 
Za odabir ove nove komponente možete koristiti karticu *Pomoć stavke*, unoseći polja *klase, koda, opisa* i, prema potrebi *varijante* nove komponente, za koju obavezno treba unijeti i količinu (i je li količina *fiksna* ili *varijabilna*), *količinu otpada*, početak i završetak valjanosti, oznake *prioriteta* i *bilješke* nove komponente.

Pomoću oznaka *Alternativa* moguće je odlučiti hoće li se u novu vezu uključiti i alternative povezane s novom komponentom.

Moguće je također aktivirati, po potrebi, oznaku *Pomično* i oznaku *Fiktivno* (za detaljan opis različitih polja za popunjavanje upućujemo na članak [Upravljanje strukturama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Pomoću ovog postupka moguće je unijeti istu komponentu unesenu u odjeljak filtra: u ovom će se slučaju jednostavno izvršiti izmjena već prisutnih informacija za tu komponentu unutar odabranih distinkcija u rešetki.

Nakon što unesete informacije, izvršite postupak **Zamjena/Izmjena** pomoću gumba *Izvrši*.

### Unos

Odabirom opcije **Unos** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti skup u područje filtra, odabirom ga pomoću odgovarajućeg gumba za *Pomoć stavke* smještenog pored polja **Skup**, unutar kojeg želite unijeti komponentu.

U ovom slučaju nije potrebno filtrirati samo jedan članak, pa je stoga moguće unijeti i klasu članka ili samo dio koda ili opisa kao kriterij pretraživanja (polja filtra ista su kao i u postupku *Zamjena/Izmjena*). Zatim, klikom na gumb za **Pretraživanje** smješten na vrpci, postupak prikazuje sve osnovne distinkcije koje odgovaraju postavljenom kriteriju pretraživanja. U rešetki rezultata prikazane su klasa, kod, opis i varijanta skupa i svih njegovih komponenata.

Odaberite jednu od prikazanih distinkcija ili odaberite kombinacijom *CTRL + klik* mišem popis osnovnih distinkcija na kojima želite izvršiti postupak Unos.

U donjem dijelu prozora odaberite novu komponentu koju želite unijeti unutar odabrane distinkcije u odjeljku filtra. Za odabir ove nove komponente možete koristiti karticu *Pomoć stavke*, unoseći polja *klase, koda, opisa* i, prema potrebi, *varijante* nove komponente, za koju obavezno treba unijeti i *količinu* (i je li količina *fiksna* ili *varijabilna*), početak i završetak valjanosti, prioritet i bilješke nove komponente.

Pomoću oznaka *Alternativa* moguće je odlučiti hoće li se u novu vezu uključiti i alternative povezane s novom komponentom.

Moguće je također aktivirati, po potrebi, oznaku *Pomično* i oznaku *Fiktivno* (za detaljan opis različitih polja za popunjavanje upućujemo na članak [Upravljanje strukturama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Nakon što unesete informacije, izvršite postupak **Unos** pomoću gumba *Izvrši*.

### Poništavanje

Odabirom opcije **Poništavanje** iz padajućeg izbornika **Vrsta upravljanja**,potrebno je unijeti komponentu koju želite ukloniti iz osnovnih distinkcija, odabirom je pomoću odgovarajućeg gumba za *Pomoć stavke* smještenog pored polja **Komponenta**, te po želji i **Skup** (ili njegovu klasu ili dio koda ili opisa) iz kojeg želite ukloniti komponentu.

Zatim, klikom na gumb **Pretraživanje**, smješten na vrpci, postupak prikazuje sve osnovne distinkcije koje odgovaraju postavljenom kriteriju pretraživanja. U rešetki rezultata prikazane su klasa, kod, opis i varijanta skupa, početak i završetak valjanosti veze između odabrane komponente u području filtra i skupa prikazanog u rešetki, količina komponente i njena jedinica mjere korištenja, uvijek u kontekstu veze skup/komponenta.

Odaberite jednu od prikazanih distinkcija ili odaberite kombinacijom *CTRL + klik* mišem popis osnovnih distinkcija na kojima želite izvršiti postupak Poništavanje.

Donji dio prozora bit će deaktiviran u slučaju **Poništavanja**.

Nakon odabira komponente za uklanjanje moguće je, pomoću gumba *Izvrši*, izvršiti postupak **Poništavanje**.

*Poseban gumb*:

> **Izvrši**: gumb koji omogućuje pokretanje odabrane procedure u početnom padajućem izborniku prozora (tj. postupka *Zamjena/Izmjena*, postupka *Unos* ili postupka *Poništavanje*).

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeću poveznicu [Zajedničke značajke, gumbe i polja](/docs/guide/common).