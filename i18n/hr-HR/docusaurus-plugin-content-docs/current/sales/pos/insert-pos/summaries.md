---
title: Sažetak dokumenta
sidebar_position: 3
---

### Konačni popusti artikala 

Mogu se unijeti samo popusti izraženi u postocima, koji će se primijeniti na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji se izračunavaju i prikazuju za svaki artikl u dokumentu, u kartici *Artikli > kartici Popusti/Listini*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definiranih u **Vrstama popusta**), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući je li popust izračunat na osnovu osnovice ili kaskadno u odnosu na prethodno primijenjene popuste.  
**Prioritet**: označava prioritet primjene popusta; sortiranje se provodi uzlazno.  
**Kaskada/Iznos**: definira koristi li se osnovica za izračun popusta kao (cijena x količina) - (već izračunati popusti) ili (cijena x količina).  
**Vrijednost**: numerička vrijednost konačnog popusta koji se primjenjuje.  


### Naknade/Rabati

Ponuđeni su troškovi uneseni u kontaktima, u kartici *Naknade/Rabati*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrsta troškova (unaprijed definiranih u **Vrstama troškova**), dodjeljujući svakoj vrsti postotak troška koji se primjenjuje.

**Postotak/Vrijednost**: polje koje označava je li troškove potrebno izračunati kao postotak ili kao unaprijed određenu novčanu vrijednost.

**Postotak**: numerička vrijednost postotka troška.


### Sažeci PDV-a

Prikazuje se pregled PDV-a dokumenta za svaku PDV stopu.

### Pregled dospjeća plaćanja

Prikazuje se pregled rokova dospijeća dokumenta za svaki tip i način plaćanja.

**Broj**: progresivna vrijednost retka.  

**Plaćanje**: označava alfanumerički kod *Tipa plaćanja* preuzetog iz *Zaglavlja dokumenta > kartice Plaćanja*.

**Iznos**: iznos obračunatog dospijeća. Može se ručno izmijeniti, u kojem slučaju se automatski aktivira sljedeća opcija *Ručna izmjena*. (Automatski se izvršavaju kontrole i upozorenja o usklađenosti između iznosa dospijeća i ukupnog iznosa računa)

**Datum dospijeća**: datum obračunatog dospijeća. Može se ručno izmijeniti, u kojem slučaju se automatski aktivira sljedeća opcija *Ručna izmjena*.

**Troškovi naplate**: polje za unos obračunatih troškova naplate.

**PDV**: koji se primjenjuje na troškove naplate (može se postaviti i ručno)

**Opis plaćanja**: omogućuje izravni unos knjiženja plaćanja / naplate. Važno je obratiti pažnju na predložak opisa plaćanja jer će koristiti račune čak i bez podračuna, zbog čega postoji sljedeće polje.

**Kontni podračun kupca/dobavljača**: račun koji koristi za naplatu/plaćanje (na primjer, blagajna ili banka) dospijeće, pri čemu se prebrisuje račun naveden u knjiženju plaćanja (ili naplate)

**Primka broj**: eventualni broj primitka za primljene novce

**Jed.**: aktivira knjiženje zatvaranja dospijeća u automatskom zapisu

**Vrsta popusta**: vrsta financijskog popusta

**Dospjela vrijednost**: vrijednost financijskog popusta po primitku

**Detaljne deklaracije**: Odnosi se na izjavu namjere. PDV primijenjen na troškove naplate može biti previsok, pa je stoga potrebno unijeti odgovarajuću izjavu o namjeri (kao i za redove artikla i troškove)


**ULAZNI RAČUNI**

**Znak**: samo dospijeća koja imaju ovu oznaku zatim se upravljaju plaćanjem s knjiženjem i postavljenim računom

**Modeli referentnih plaćanja**: model izrade koda plaćanja. U nekim stranim lokalizacijama svako dospijeće na računu ima kod dodijeljen od strane onoga tko fakturira: ovaj kod strukturiran je prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), kako bi se kod mogao izgraditi algoritmom.

**Kodovi modela plaćanja**: ovo je kod (strukturiran kao prethodni model) koji se mora navesti u stavci, a zatim u plaćanjima koje banka šalje, kako bi obavijestila primatelja koji je rok dospijeća plaćen (i time automatizirati uvoz iz bankovnih transakcija s zatvaranjem stavke). Odatle se popunjava unutar stavke i u SEPA datoteci.

**Rok za prethodnu uplatu**: ovo je polje predviđeno u obrascu računa Sdi, rok za primjenu financijskog popusta.
