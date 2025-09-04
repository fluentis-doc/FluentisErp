---
title: Povrat podataka
sidebar_position: 3
---

:::important Čemu služi
Obrada za automatsko generiranje podataka o prodaji i, ako je potrebno, Prognoza prodaje na temelju povijesnih podataka iz dokumenata iz područja Prodaje; posebno iz dokumenata: Narudžbe kupaca, otpremnice i računi od prodaje.
:::

Možemo pokrenuti Dohvat podataka iz izbornika područja Kontroling > Mjesečne prognoze prodaje.

Upravljanje se sastoji od obrasca filtera za pretraživanje prethodno izvršenih Dohvata podataka te, putem gumba **Novo**, stvaranja novih. Također uključuje obrazac **Upravljanje dohvata podataka** u kojem je moguće odrediti iz kojih tipova prodajnih dokumenata i za koje razdoblje će se dohvatiti podaci, koji zatim postaju početna osnova za izradu Prognoza prodaje za unaprijed definiranu [Verziju prognoze prodaje](/docs/configurations/tables/controlling/forecast/pv-versions).

U nastavku navodimo detaljno svaku pojedinu informaciju koja je prisutna:

- **Verzija**: obvezan podatak koji služi za pohranu dohvaćenih podataka u toj specifičnoj verziji;
- **Grupiraj po varijanti**: omogućuje ili onemogućuje uzimanje u obzir detalja po varijanti artikla;
- **Datum posljednjeg snimanja**: predlaže se današnji datum i ažurira se pritiskom na gumb **Dohvat podataka** s datumom obrade;
- **Uzmite u obzir predviđeni datum isporuke**: ako je označeno, pri dohvaćanju samo Narudžbi kupaca mjesec obračuna bit će mjesec Predviđenog datuma isporuke, a ne onaj iz Datuma spremnosti robe;
- **Generiranje prognoza**: ako je označeno, **Dohvat podataka** će generirati i Prognoze prodaje po artiklu, varijanti i verziji;
- **Izlazni računi**: u prvom popisu možemo navesti iz kojih tipova računa dohvatiti informacije i za koje razdoblje (*Od datuma*, *Do datuma*); odabrani tip računa automatski će predložiti radi li se o tipu računa za povrat ili ne;
- **Otpremnica**: u drugom popisu možemo navesti iz kojih tipova otpremnica dohvatiti informacije i za koje razdoblje (*Od datuma*, *Do datuma*); odabrani tip otpremnice automatski će predložiti radi li se o tipu povrata ili ne;
- **Narudžbe kupaca**: u trećem popisu možemo navesti iz kojih tipova narudžbi dohvatiti informacije i za koje razdoblje (*Od datuma*, *Do datuma*).

Za razdoblja tipova računa i prodajnih otpremnica, pri unosu novog tipa dokumenta predlaže se: *Od datuma* = 1. siječnja tekuće godine, *Do datuma* = današnji datum; dok se za razdoblja tipova narudžbi kupaca predlaže: *Od datuma* = 1. siječnja tekuće godine, *Do datuma* = 31. prosinca tekuće godine. Sve vrijednosti operater može izmijeniti.

Dostupni gumbi su:

- **Spremi**: pohranjuje informacije unesene u obrazac za dohvat podataka;
- **Unesi novu vrstu računa**, **Izbriši označene tipove računa**, **Unesi novu vrstu otpremnice/primke**, **Izbriši označene tipove otpremnica/primki**, **Unesi novu vrstu naloga**, **Izbriši označene tipove naloga**: svi ovi gumbi služe za pozicioniranje na redak unosa novog tipa dokumenta ili za brisanje odabranih tipova dokumenata;
- **Povrat podataka**: ovom obradom sve stavke dokumenata koje odgovaraju odabranim tipovima dokumenata i zadanim razdobljima (datum računa za račune, datum otpremnice za otpremnice i datum spremnosti robe ili predviđeni datum isporuke za narudžbe) postaju osnova za generiranje prognoza za traženu verziju.
