---
title: Tipovi narudžbi kupaca
sidebar_position: 23
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju namjeravate izvršiti ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Tablica se otvara putem izbornika **Tablice > Prodaja > Tipovi narudžbi kupaca**.

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

Za unos novih zapisa potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

**Tip/Opis:** polja u koja se unose šifra i opis vrste narudžbe kupca. Važno: šifra mora biti jedinstvena za poduzeće i organizacijsku jedinicu.

**Numeracija:** u ovo polje potrebno je unijeti odgovarajuću šifru numeracije. Za više informacija o numeraciji dokumenata pogledajte članak [Fluentis numeracije](/docs/configurations/tables/fluentis-numerations).

**Automatska izrada projekta i Vrsta projekta:** ako je ova opcija uključena, sustav će prilikom unosa narudžbe kupca kreirati projekt vrste navedene u stupcu Vrsta projekta, koji se nalazi u postavkama vrste narudžbe. Projekt će imati isti broj kao narudžba kupca i automatski će biti unesen u zaglavlje narudžbe radi uspostavljanja veze. Kreirani projekt služi kao spremnik za prikupljanje dokumenata povezanih s projektom i njegovim stavkama. Projekt kreiran iz narudžbe kupca ažurira se u skladu s izmjenama narudžbe, pri čemu se održava veza između svake stavke projekta i odgovarajuće stavke narudžbe.

**Automatska potvrda narudžbe:** ako je ova opcija uključena, prilikom unosa nove narudžbe datum potvrde automatski se postavlja na datum unosa narudžbe.

**Isključi zaključavanje:** odnosi se na blokadu zbog prekoračenja kreditnog limita, koja se konfigurira u postupku Lock Manager u području Riznica, unutar postupaka za upravljanje korištenjem kreditnih limita. Ako je ova opcija uključena, sustav za ovu vrstu narudžbe neće uzeti u obzir blokadu dokumenta zbog prekoračenja kreditnog limita, već će korisniku omogućiti unos i ispis dokumenta. Ako opcija nije uključena, vrsta narudžbe bit će blokirana u slučaju prekoračenja kreditnog limita, a korisniku će biti onemogućen ispis dokumenta.

**Razduživanje (izvršenje) vrstom otpremnice:** sadrži vrstu otpremnice koja će se generirati pokretanjem automatskog postupka razduživanja otpremnicama, dostupnog na vrpci s alatima u prozoru za pretraživanje narudžbi kupaca.

**Razduživanje (izvršenje) vrstom računa:** sadrži vrstu računa koja će se generirati pokretanjem automatskog postupka razduživanja računima, dostupnog na vrpci s alatima u prozoru za pretraživanje narudžbi kupaca.

**Razduživanje (izvršenje) vrstom Picking dokumenta:** sadrži vrstu Picking dokumenta koja će se generirati pokretanjem postupka kreiranja Picking dokumenta iz [otprema](/docs/logistics/shipping/shippings).

**Blokiraj ispisani dokument:** ako je ova opcija uključena, nije dopuštena izmjena narudžbe kupca čija je opcija „Ispisano” uključena u zaglavlju.

**Kredi (limit):** ako je ova opcija uključena, narudžbe ove vrste uzimaju se u obzir pri izračunu prekoračenja kreditnog limita.

**Novčani tijek:** ako je ova opcija uključena, ova vrsta narudžbe uzima se u obzir pri izračunu [novčanog toka](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Skladište/Opis skladišta:** u ova polja unosi se [skladište](/docs/configurations/tables/logistics/warehouses) u kojem će se rezervirati artikli sadržani u narudžbama ove vrste. Ovdje navedeno skladište automatski se prenosi u sve retke artikala unesene u narudžbu ove vrste.

**Predložak skladišnog kretanja/Opis predloška skladišnog kretanja:** u ova polja unosi se *predložak skladišnog kretanja* za rezervirane artikle sadržane u narudžbama ove vrste. Ovdje navedeni predložak automatski se prenosi u sve retke artikala unesene u narudžbu ove vrste.

**Nezbrajena količina artikla narudžbe:** ako je ova opcija uključena, prilikom razduživanja istog retka narudžbe u različitim trenucima, unutar istog dokumenta razduživanja (otpremnica, račun itd.), pojedinačni retci artikala prenose se u dokument razduživanja bez zbrajanja količina. Primjer: ako narudžba sadrži redak s 10 komada, a prvo razduživanje otpremnicom obuhvaća 2 komada, nakon čega se u drugom razduživanju istog retka prenose još 2 komada, u otpremnici će se prikazati dva retka artikala s količinom od po 2 komada. Ako ova opcija nije uključena, drugo razduživanje povećalo bi količinu u postojećem retku otpremnice na 4 komada.

**Kontroliraj raspoloživost:** ako je ova opcija uključena, narudžbe ove vrste uzimaju se u obzir pri [izračunu raspoloživosti](/docs/erp-home/registers/items/calculate-availability).

**Poljoprivredni PDV (prodajnog ugovora):** ako je ova opcija uključena, prilikom kreiranja narudžbe sustav provjerava postoji li za odabrani artikl šifra poljoprivrednog PDV-a. Ako ne postoji, upotrebljava se šifra PDV-a iz [šifarnika artikala](/docs/erp-home/registers/items/create-new-item).

**Cijena s PDV-om:** upravljanje cijenama s uključenim PDV-om aktivira se ovim parametrom, koji je dostupan u svim dokumentima prodajnog područja, počevši od prodajnih cjenika. Prilikom dohvaćanja cijena u dokumentu za koji je uključena opcija Cijena s PDV-om, sustav pretražuje cjenike u kojima je također uključena ista opcija, a popusti se izračunavaju polazeći od cijene s PDV-om. Na temelju cijene s PDV-om izračunava se cijena bez PDV-a, primjenom stope PDV-a iz šifarnika kupca ili šifarnika artikala.

U dokumentima su vidljivi stupci Cijena i Cijena s PDV-om.

**Važno!** Ako ne postoji važeći cjenik s uključenom opcijom Cijena s PDV-om, a u šifarniku artikala postoji prodajna cijena, ta će se prodajna cijena predložiti kao cijena s PDV-om.

**Važno!** Narudžbu s uključenom opcijom Cijena s PDV-om moguće je razdužiti otpremnicom čija vrsta nema uključenu tu opciju. Ukupni iznosi redaka izračunavaju se različito u dokumentima s uključenom i isključenom opcijom Cijena s PDV-om.

**Važno!** Narudžbu s uključenom opcijom Cijena s PDV-om moguće je duplicirati u narudžbu čija vrsta nema uključenu tu opciju. Ukupni iznosi redaka izračunavaju se različito u dokumentima s uključenom i isključenom opcijom Cijena s PDV-om.

Za razumijevanje načina rada dohvaćanja cijena te cijena s PDV-om i bez PDV-a pogledajte članak *Dohvaćanje cijena i popusta u prodajnim dokumentima*.

**Vrsta radnog naloga proizvodnje:** u ovo polje moguće je unijeti vrstu proizvodnog naloga koji će se generirati iz ove vrste narudžbe unutar postupka *Definicija MPS-a*, prilikom generiranja proizvodnih naloga iz narudžbi kupaca. Ako je uključena i sljedeća opcija *Generiranje proizvodnog naloga*, proizvodni nalog generirat će se automatski prilikom potvrde narudžbe.

**Tip narudžbe dobavljača/Opis tip narudžbe dobavljača:** unosi se šifra vrste narudžbe dobavljača koja će se generirati ako se odabere kreiranje narudžbe dobavljača na temelju narudžbe kupca putem odgovarajućeg postupka.

**Kontrola kupca:** ako je ova opcija uključena, prilikom unosa kupca u narudžbu sustav provjerava šifarnike kako bi utvrdio odgovara li unesena šifra obvezno šifri iz šifarnika kupaca. Ako to nije slučaj, sustav će upozoriti korisnika. Ako ova opcija nije uključena, moguće je kreirati narudžbe i za vrste konta Dobavljač.

**Upravljanje matricama ExtraData:** ako je ova opcija uključena, pri upravljanju artiklima s matricom prikazuje se dodatna kartica za unos količina u pojedinačne ćelije matrice. Ako opcija nije uključena, ova kartica i pripadajuća matrica neće se prikazivati. Za više informacija o upravljanju matricama pogledajte članak *Upravljanje matricama ExtraData*.

**Konfiguriranje:** u ovo polje unosi se šifra za automatsko postavljanje dodatnih podataka (ExtraData) u zaglavlju narudžbe kupca.

**Izvještaji:** u ovo polje moguće je postaviti zadani ispis koji će se upotrebljavati za ovu vrstu dokumenta. Napominjemo da je prilikom ispisa dokumenta potrebno odabrati izvještaj „Višestruki ispisi” kako bi se automatski upotrijebio zadani ispis.

**Broj kopija:** u ovo polje unosi se broj kopija dokumenta za ispis.

**Generiranje proizvodnog naloga:** ako je ova opcija uključena, proizvodni nalog vrste navedene u stupcu *Vrsta proizvodnog naloga* automatski će se kreirati nakon potvrde narudžbe.

:::note
Kada se doda novi redak u narudžbu kupca za koju se proizvodni nalozi generiraju automatski, novi redak u proizvodnom nalogu dobiva status *Nije pregledano*.
:::

**Osnovna sredstva:** ako je ova opcija uključena, na kartici Artikli u narudžbi aktivira se kartica Osnovna sredstva, koja omogućuje povezivanje narudžbe s prodajom osnovnog sredstva.

**Vrsta operacije:** uvijek je povezana s upravljanjem osnovnim sredstvima. Ako je unesena, automatski se predlaže u widgetu Vrsta operacije, koji se nalazi na kartici Osnovna sredstva unutar kartice Artikli narudžbe.

**Vrsta popusta/Opis:** u ovom stupcu moguće je povezati vrstu popusta koja će se predložiti prilikom izravnog unosa popusta u stupac *Popusti artikla* u tablici artikala dokumenta. Za više pojedinosti pogledajte članak [Upravljanje pojednostavnjenim widgetom za popuste](/docs/sales/sales-flow/discount-widget).

**Upravljanje WEEE-om:** ova opcija omogućuje upravljanje [WEEE-om](/docs/sales/sales-flow/raee) za ovu vrstu dokumenta.