---
title: Upravljanje CONAI-jem
sidebar_position: 2
---

Upravljanje **CONAI-jem** (*Consorzio Nazionale Imballaggi*) u Fluentisu modul je koji omogućuje automatsku primjenu troškova povezanih s CONAI ekološkim doprinosom na dokumentima nabave i prodaje. Ovaj je alat namijenjen tvrtkama koje posluju s ambalažom i moraju poštovati talijanske propise o zbrinjavanju i recikliranju ambalažnih materijala. Automatska primjena CONAI troškova u Fluentisu temelji se na parametrima koje definira korisnik te se izravno odražava na knjigovodstvene dokumente, osiguravajući točan i usklađen obračun.

## Aktivacija upravljanja CONAI-jem

Za aktivaciju upravljanja CONAI-jem u Fluentisu potrebno je konfigurirati određena polja u tablici [Društva](/docs/configurations/tables/general-settings/company), u odjeljku **Ostale postavke**:

- **Šifra CONAI partnera**: šifra koju tvrtka dobiva prilikom registracije u CONAI. Predstavlja jedinstveni identifikator koji služi za praćenje prijava i ekoloških doprinosa koje tvrtka duguje na temelju ambalaže stavljene na tržište.

- **Vrsta CONAI partnera**: definira ulogu tvrtke u talijanskom lancu ambalaže. Dostupne su sljedeće vrste partnera:
  - **A – Samostalni proizvođač**: tvrtka koja proizvodi ambalažu za vlastite potrebe, bez prodaje trećim stranama. Ambalažu koristi za pakiranje vlastitih proizvoda.
  - **U1 – Trgovac/Distributer**: tvrtka koja kupuje ambalažu radi daljnje prodaje, bez vlastite uporabe. U ovu skupinu spadaju veletrgovci i distributeri.
  - **U2 – Ostali korisnici**: tvrtke koje kupuju ambalažu za pakiranje proizvoda namijenjenih prodaji, ali je same ne proizvode. Ne pripadaju kategorijama **Samostalni proizvođač** ni **Trgovac/Distributer**.
  - **P – Proizvođač**: tvrtka koja proizvodi ambalažu i prodaje je drugim korisnicima ili distributerima.

- **Datum početka/završetka CONAI partnerstva**: omogućuje definiranje razdoblja valjanosti partnerstva s CONAI-jem, ako je primjenjivo.

## Vrste materijala

Upravljanje vrstama ambalažnih materijala provodi se u logističkoj tablici [Vrste materijala](/docs/configurations/tables/logistics/material-types). U ovoj se tablici definiraju različiti materijali (poput čelika, aluminija, papira, drva, plastike i dr.) koji se koriste za ambalažu. Za svaku vrstu materijala potrebno je postaviti:

- **CONAI šifra materijala**: određuje vrstu materijala prema CONAI klasifikaciji.
- **Šifra fiktivnog artikla**: koristi se za kreiranje retka troška CONAI doprinosa na primkama ili računima. Ako šifra artikla nije navedena, taj se materijal neće moći koristiti u CONAI konfiguraciji.

Moguće je koristiti jednu šifru artikla za sve materijale ili definirati zasebnu šifru za svaki materijal, ovisno o željenoj razini detalja na poreznim dokumentima.

- **Tarife i mjerne jedinice**: donja tablica omogućuje definiranje tarifa za svaki materijal prema različitim vremenskim razdobljima. Mjerna jedinica, koja je najčešće tona, mora odgovarati mjernoj jedinici definiranoj na prodajnim artiklima i fiktivnim CONAI artiklima.

## Definicije u šifarniku artikala

Na kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala moguće je definirati karakteristike ambalaže potrebne za upravljanje CONAI-jem. U ovom se odjeljku mogu postaviti:

- **Koristi u nabavi/prodaji**: određuje primjenjuje li se CONAI doprinos na artikl u dokumentima nabave ili prodaje.
- **Vrsta ambalaže**: određuje je li ambalaža primarna, sekundarna ili tercijarna.
- **Prazna ili puna**: određuje je li ambalaža prazna (oznaka nije uključena) ili puna (oznaka je uključena).
- **Ambalažni materijali**: popis materijala od kojih se ambalaža sastoji, zajedno s njihovom težinom u definiranoj mjernoj jedinici.

## Postavke u šifarniku kupaca/dobavljača

Kako bi se CONAI troškovi ispravno primjenjivali na dokumentima nabave ili prodaje, potrebno je pravilno konfigurirati šifarnik kupca ili dobavljača na kartici [CONAI postavke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

- **Vrsta CONAI partnera**: za obračun u prodaji kupac mora biti **Samostalni proizvođač (A)**, **Trgovac/Distributer (U1)** ili **Ostali korisnici (U2)**. Za obračun u nabavi dobavljač mora biti **Proizvođač (P)**.
- **Postotci oslobođenja**: u tablici je moguće definirati postotke oslobođenja za pojedine vrste materijala, zajedno s pripadajućim razdobljima valjanosti.

## Vrste primki i vrste računa

U [vrstama primki](/docs/configurations/tables/sales/delivery-notes-type) i [vrstama računa](/docs/configurations/tables/sales/invoices-type) nalazi se oznaka **Upravljanje CONAI-jem**. Uključivanjem ove oznake aktivira se automatski obračun CONAI doprinosa za odabranu vrstu dokumenta.

## Primjer primjene na izlaznom računu

Ako je upravljanje CONAI-jem aktivirano za društvo, na kartici **Artikli** izlaznog računa bit će dostupan pododjeljak **CONAI materijali za artikl**. Ovaj odjeljak sadrži ambalažne materijale od kojih se artikl sastoji, zajedno sa sljedećim podacima:

- **Mjerna jedinica**: određuje mjernu jedinicu koja se koristi za materijal.
- **Jedinična težina**: težina pojedinog materijala, umanjena za eventualni postotak oslobođenja definiran u šifarniku kupca.
- **Ukupna težina**: izračunava se množenjem prodane količine artikala s jediničnom težinom.

Prilikom spremanja dokumenta ili pritiskom na gumb **Preračun CONAI-ja** na alatnoj traci, Fluentis će automatski dodati jedan ili više redaka troška, koristeći odgovarajući artikl materijala s količinom i cijenom koje odgovaraju CONAI doprinosu za taj materijal.

U XML datoteci elektroničkog računa za SDI (*Sistema di Interscambio*), Fluentis će automatski dodati oznake u odjeljak **Altri Dati Gestionali** kako bi prikazao ambalažne materijale i njihove jedinične težine.

## Kontrolni i zbirni ispisi

U modulima ulaznih i izlaznih računa dostupna su dva formata ispisa koji omogućuju pregled periodičnih ukupnih vrijednosti po vrstama materijala, kako za internu kontrolu, tako i za pripremu podataka koji se prijavljuju CONAI-ju.

Za izlazne račune dostupan je i izvještaj koji odgovara obrascima dostupnima na internetskim stranicama CONAI-ja za učitavanje podataka prijava, pri čemu se materijali filtriraju prema početnim slovima CONAI šifre definirane u tablici materijala.