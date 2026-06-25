---
title: Uredi komponente prototipa
sidebar_position: 4
---

Ovaj obrazac omogućuje masovnu izmjenu prethodno stvorenih prototipova, koristeći tri različite procedure ovisno o vrsti željene promjene: zamjena/uređivanje, umetanje (dodavanje) i otkazivanje.

### Zamjena i izmjena 

Odabirom opcije **Zamjeni/uredi** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti komponentu u područje filtra.

Filtri: pretraživanje je moguće izvršiti samo za jedan artikl. Kao kriterij pretraživanja nije moguće koristiti samo klasu artikla niti samo dio šifre ili opisa artikla.
Nakon definiranja kriterija pretraživanja, klikom na gumb Traži na alatnoj vrpci, procedura u tablici prikazuje sve sastavnice u kojima se nalazi komponenta unesena u području filtra, odnosno izvršava sažimanje komponente (sastavnice).

U tablici rezultata prikazane su klasa, šifra, opis i varijanta skupa, verzija sastavnice, početak i završetak valjanosti kako *roditeljskog* artikla tako i komponente, također, prikazana je količina komponente i njena jedinica mjere, uvijek u kontekstu veze skup/komponenta.

Odaberite jednu od prikazanih sastavnica, ili, odaberite kombinacijom *CTRL + klik * mišem, popis osnovnih sastavnica na kojima želite izvršiti postupak **Zamjena/Izmjena**.

Odaberite, u donjem dijelu prozora, novu komponentu koja će zamijeniti onu odabrane u odjeljku filtra. 
Za odabir ove nove komponente možete koristiti karticu *Pomoć stavke*, unoseći polja *klase, koda, opisa* i, prema potrebi *varijante* nove komponente, za koju obavezno treba unijeti i količinu (i je li količina *fiksna* ili *varijabilna*), *količinu otpada*, početak i završetak valjanosti, oznake *prioriteta* i *bilješke* nove komponente.

Pomoću oznaka *Alternativa* moguće je odlučiti hoće li se u novu vezu uključiti i alternative povezane s novom komponentom.

Moguće je također aktivirati, po potrebi, oznaku *Dopušteno kretanje* i oznaku *Fiktivna razina* (za detaljan opis različitih polja za popunjavanje upućujemo na članak [Upravljanje strukturama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Pomoću ovog postupka moguće je unijeti istu komponentu unesenu u odjeljak filtra: u ovom će se slučaju jednostavno izvršiti izmjena već prisutnih informacija za tu komponentu unutar odabranih distinkcija u rešetki.

Nakon što unesete informacije, izvršite postupak **Zamjena/Izmjena** pomoću gumba *Izvrši*.

### Umetanje

Odabirom opcije **Umetanje** u padajućem izborniku Vrsta upravljanja, potrebno je u području filtra unijeti prototip u koji se želi dodati komponenta.
U ovom slučaju nije potrebno pretraživanje ograničiti na jedan artikl, pa je kao kriterij pretraživanja moguće koristiti i samo klasu artikla ili dio njegove šifre odnosno opisa (polja filtra jednaka su onima u proceduri Izmjena/Zamjena).

Nakon definiranja kriterija pretraživanja, klikom na gumb Traži na alatnoj vrpci, procedura u tablici prikazuje sve sastavnice koje odgovaraju zadanim kriterijima pretraživanja.

U mreži rezultata prikazuju se klasa, šifra, opis i varijanta prototipa te svih njegovih komponenti.

Odaberite jednu od prikazanih sastavnica ili odaberite kombinacijom *CTRL + klik* mišem popis osnovnih sastavnica na kojima želite izvršiti postupak Unos.

U donjem dijelu prozora odaberite novu komponentu koju želite unijeti unutar odabrane sastavnica u odjeljku filtra. Za odabir ove nove komponente možete koristiti karticu *Pomoć stavke*, unoseći polja *klase, koda, opisa* i, prema potrebi, *varijante* nove komponente, za koju obavezno treba unijeti i *količinu* (i je li količina *fiksna* ili *varijabilna*), početak i završetak valjanosti, prioritet i bilješke nove komponente.

Pomoću oznaka *Alternative* moguće je odlučiti hoće li se u novu vezu uključiti i alternative povezane s novom komponentom.

Moguće je također aktivirati, po potrebi, oznaku *Dopušteno kretanje* i oznaku *Fiktivna razina* (za detaljan opis različitih polja za popunjavanje upućujemo na članak [Upravljanje strukturama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Nakon što unesete informacije, izvršite postupak **Umetanje** pomoću gumba *Izvrši*.

### Otkaži

Odabirom opcije **Otkaži** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti komponentu koju želite ukloniti iz osnovnih sastavnica.

Zatim, klikom na gumb **Traži**, smješten na vrpci, postupak prikazuje sve osnovne sastavnice koje odgovaraju postavljenom kriteriju pretraživanja. U tablici rezultata prikazane su klasa, kod, opis i varijanta skupa, početak i završetak valjanosti veze između odabrane komponente u području filtra i skupa prikazanog u tablici, količina komponente i njena jedinica mjere korištenja, uvijek u kontekstu veze skup/komponenta.

Odaberite jednu od prikazanih sastavnica ili odaberite kombinacijom *CTRL + klik* mišem popis osnovnih sastavnica na kojima želite izvršiti postupak Poništavanje.

Donji dio prozora bit će deaktiviran u slučaju poništavanja.

Nakon odabira komponente za uklanjanje moguće je, pomoću gumba *Izvrši*, izvršiti postupak **Otkaži**.

*Poseban gumb*:

> **Izvrši**: gumb koji omogućuje pokretanje odabrane procedure u početnom padajućem izborniku prozora (tj. postupka *Zamjena/uredi*, postupka *Umetanje* ili postupka *Otkaži*).

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeću poveznicu [Zajedničke značajke, gumbe i polja](/docs/guide/common).