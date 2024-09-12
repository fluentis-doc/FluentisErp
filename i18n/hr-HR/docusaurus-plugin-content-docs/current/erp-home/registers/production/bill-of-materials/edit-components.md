---
title: Uredi kompnente
sidebar_position: 6
---

Ovaj obrazac omogućuje masovne izmjene sklopova koji su prethodno stvoreni, koristeći tri različite procedure ovisno o vrsti izmjene koju želite izvršiti: zamjena/izmjena, dodavanje i poništavanje.

### Zamjena i izmjena 

Odabiranjem opcije **Zamjena/Izmjena** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti komponentu u područje filtriranja, odabirom *Pomoć stavke* pored polja **Komponenta**.

Filtrirajte samo jedan artikl; nije moguće unijeti kao filter pretraživanja samo klasu artikla ili samo dio koda ili opisa. Nakon postavljanja kriterija pretraživanja, pritiskom na gumb **Pretraživanje** na vrpci rezultirat će prikazivanjem u rešetki svih osnovnih razrada unutar kojih se nalazi komponenta unesena u područje filtra, izvršavajući time *Sažimanje komponente*.

U rešetki rezultata prikazuju se klasa, kod, opis i varijanta sklopa, početak i završetak valjanosti veze između komponente odabrane u području filtra i sklopa prikazanog u rešetki, količina komponente i njegova jedinica mjere, uvijek u kontekstu veze sklop/komponenta.

Odaberite jedan od prikazanih sklopova ili, odabirom kombinacije *CTRL+klik* mišem, odaberite popis osnovnih razrada na kojima želite izvršiti postupak 'Zamjena/Izmjena'.

Odaberite u donjem dijelu prozora novu komponentu koja će zamijeniti onu odabrane u odjeljku filtra.  
Za odabir ove nove komponente moguće je koristiti *Pomoć stavke*, unoseći podatke o *klasi, kodu, opisu* i po potrebi *varijanti* nove komponente, za koju je obavezno unijeti i količinu (i je li količina *fiksna* ili *varijabilna*) te opcionalno l'*jedinicu mjere korištenja*, *količinu otpada*, *% pozitivnog i negativnog odstupanja*, početak i kraj valjanosti, *prioritet*, i *bilješke* nove komponente.

Pomoću zastava *Alternative* e *Faze* moguće je odlučiti hoće li se u novu vezu uključiti i alternative i faze obrade povezane s novom komponentom.

Ako je potrebno, moguće je aktivirati zastavice *Prenosivo* i *Fiktivno* (za detalje o popunjavanju različitih polja, pogledajte članak [Upravljanje strukturama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Ovim postupkom moguće je unijeti istu komponentu u donji odjeljak koji je unesen u odjeljak filtra: u ovom slučaju bit će jednostavno izvršena izmjena već prisutnih informacija za tu komponentu unutar odabranih razrada u rešetki.

Kada unesete informacije, izvršite postupak **Zamjena/Izmjena** pritiskom na gumb za obradu ![](/img/neutral/common/execute.png).


### Umetanje

Odabirom opcije **Umetanje** iz padajućeg izbornika **Tip upravljanja**, potrebno je unijeti u područje filtra sklop, odabirom *Pomoć* stavke pored polja **Sklop**, unutar kojeg želite dodati komponentu.

U ovom slučaju nije potrebno filtrirati samo jedan artikl, pa je moguće unijeti kao filter pretraživanja samo klasu artikla ili samo dio koda ili opisa, (polja za filtar su ista kao i u postupku *Zamjena/Izmjena*). Zatim, pritiskom na gumb **Pretraživanje** na vrpci, postupak će prikazati u rešetki sve osnovne razrade koje odgovaraju postavljenom kriteriju pretraživanja. U rešetki rezultata prikazuju se klasa, kod, opis i varijanta sklopa.

Izaberite jednu od prikazanih struktura ili, držeći tipku *CTRL + klik* mišem, odaberite listu osnovnih struktura na kojima želite izvršiti postupak Umetanja.

U donjem dijelu prozora odaberite novu komponentu koju želite umetnuti unutar odabranih osnovnih struktura izdvojenih u odjeljku filtra. Za odabir nove komponente možete koristiti *Pomoć stavke*, unoseći podatke o *klasi, kodu, opisu* , i eventualno *varijanti* nove komponente, za koju je obavezno unijeti i *količinu* (i da li je količina *fiksna* ili *varijabilna*) te opcionalno jedinicu mjere korištenja, količinu otpada, postotak odstupanja pozitivan i negativan, početni i završni datum valjanosti, prioritet, i napomene o novoj komponenti.

Korištenjem oznaka *Alternative* i *Faze* možete odlučiti želite li uključiti i alternative i faze proizvodnje povezane s novom komponentom.

Ako je potrebno, možete aktivirati oznake *Prijenosno* i *Fiktivno* (za detalje o poljima koja treba popuniti, pogledajte članak o [Upravljanju strukturama](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Nakon unosa informacija, izvršite postupak **Umetanja** pritiskom na gumb za obradu ![](/img/neutral/common/execute.png).

### Otkazivanje

Odabirom opcije **Otkazivanje** iz padajućeg izbornika **Vrsta upravljanja**, potrebno je unijeti komponentu koju želite ukloniti iz osnovnih struktura, odabirom *Pomoć stavke* pored polja **Komponenta**, i opcionalno i **Sklop** (ili njegovu klasu ili dio koda ili opisa) iz kojeg želite ukloniti komponentu.

Zatim, pritiskom na gumb **Pretraži**, smješten na traci s opcijama, postupak prikazuje u mreži sve osnovne strukture koje odgovaraju postavljenom filtru pretraživanja. U rezultatima se prikazuju klasa, kod, opis i varijanta sklopa, početak i kraj valjanosti veze između odabrane komponente u filtru i sklopa prikazanog u mreži, količina komponente i njegova jedinica mjere korištenja, uvijek u vezi s vezom sklop-komponenta.

Odaberite jedan od prikazanih sklopova ili, držeći tipku *CTRL + klik* mmišem, odaberite listu osnovnih struktura na kojima želite izvršiti postupak Otkazivanja.

Donji dio prozora bit će onemogućen u slučaju postupka **Otkazivanja**.

Nakon odabira komponente koju želite ukloniti, možete, korištenjem gumba za Obradu ![](/img/neutral/common/execute.png), izvršiti postupak **Otkazivanja**.

*Posebni gumbi*:

> **Obrada**: gumb koji omogućuje pokretanje odabrane procedure u početnom padajućem izborniku prozora (tj. postupka Zamjene/Modifikacije, postupka Umetanja ili postupka Otkazivanja).

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu oblika, obratite se sljedećoj poveznici [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).