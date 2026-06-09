---
title: Upravljanje CONAI
sidebar_position: 2
---

Upravljanje **CONAI** (*Consorzio Nazionale Imballaggi*) u Fluentisu predstavlja modul koji omogućava automatski obračun ekološke naknade CONAI na dokumentima nabavke i prodaje.

Ovaj alat je namenjen kompanijama koje upravljaju ambalažom i moraju da poštuju italijanske propise o zbrinjavanju i reciklaži ambalažnih materijala.

Automatska primena CONAI naknade u Fluentisu zasniva se na parametrima koje definiše korisnik i automatski se prenosi na poslovne i računovodstvene dokumente, čime se obezbeđuje tačan i zakonski usklađen obračun.

## Aktiviranje CONAI upravljanja

Da bi se omogućilo upravljanje CONAI naknadama, potrebno je podesiti određena polja u tabeli [Kompanija](/docs/configurations/tables/general-settings/company), u sekciji **Ostala podešavanja**.

### CONAI šifra partnera

Šifru kompaniji dodeljuje CONAI prilikom registracije.

Predstavlja jedinstveni identifikator koji se koristi za praćenje prijava i obaveza vezanih za ekološku naknadu na ambalažu plasiranu na tržište.

### CONAI tip partnera

Definiše ulogu kompanije u lancu upravljanja ambalažom u Italiji.

Dostupni tipovi partnera su:

- **A – Samostalni korisnik ambalaže**: kompanija proizvodi ambalažu za sopstvenu upotrebu i ne prodaje je trećim licima.
- **U1 – Trgovac/Distributer**: kompanija kupuje ambalažu radi preprodaje bez sopstvene upotrebe.
- **U2 – Ostali korisnici**: kompanije koje kupuju ambalažu za pakovanje proizvoda namenjenih prodaji, a ne proizvode je same.
- **P – Proizvođač**: kompanija proizvodi ambalažu i prodaje je drugim korisnicima ili distributerima.

### Datum početka i završetka CONAI članstva

Omogućava definisanje perioda važenja članstva u CONAI sistemu, ukoliko je primenljivo.

## Tabela tipova materijala

Upravljanje vrstama ambalažnih materijala vrši se kroz logističku tabelu [Tipovi materijala](/docs/configurations/tables/logistics/material-types).

U ovoj tabeli definišu se različiti materijali koji se koriste za ambalažu, kao što su:

- čelik
- aluminijum
- papir
- drvo
- plastika
- ostali materijali

Za svaki tip materijala potrebno je definisati sledeće podatke.

### CONAI šifra materijala

Određuje vrstu materijala prema CONAI klasifikaciji.

### Šifra fiktivnog artikla

Koristi se za kreiranje stavke troška CONAI naknade na otpremnicama i fakturama.

Ako šifra artikla nije definisana, materijal neće biti validan za CONAI obračun.

Moguće je:

- koristiti jedan zajednički artikl za sve materijale;
- koristiti poseban artikl za svaki materijal.

Izbor zavisi od željenog nivoa detalja na poslovnim dokumentima.

### Tarife i jedinice mere

U donjoj tabeli definišu se tarife koje se primenjuju za određeni materijal tokom određenog vremenskog perioda.

Jedinica mere (najčešće tona) mora biti usklađena sa:

- jedinicom mere na prodajnim artiklima;
- jedinicom mere na CONAI artiklima.

## Podešavanja na kartici artikla

Na kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) moguće je definisati karakteristike ambalaže koje se koriste za CONAI obračun.

Dostupna su sledeća podešavanja:

### Koristi u nabavci/prodaji

Definiše da li se artikl uključuje u obračun CONAI naknade na dokumentima nabavke ili prodaje.

### Tip ambalaže

Određuje da li je ambalaža:

- primarna
- sekundarna
- tercijarna

### Prazna ili puna ambalaža

Definiše da li je ambalaža:

- prazna
- puna

### Materijali ambalaže

Prikazuje listu materijala od kojih je ambalaža sastavljena zajedno sa pripadajućim težinama.

## Podešavanja na kartici kupca/dobavljača

Za ispravan obračun CONAI naknada potrebno je pravilno podesiti karticu kupca ili dobavljača, u sekciji [CONAI podešavanja](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai).

### CONAI tip partnera

Kod prodaje kupac mora imati jedan od sledećih tipova:

- A – Samostalni korisnik
- U1 – Trgovac/Distributer
- U2 – Ostali korisnici

Kod nabavke dobavljač mora imati tip:

- P – Proizvođač

### Procenti oslobađanja

U tabeli je moguće definisati procente oslobađanja za pojedine vrste materijala zajedno sa periodom važenja.

## Tipovi otpremnica i tipovi faktura

U tabelama:

- [Tipovi otpremnica](/docs/configurations/tables/sales/delivery-notes-type)
- [Tipovi faktura](/docs/configurations/tables/sales/invoices-type)

dostupna je opcija:

**Upravljanje CONAI**

Aktiviranjem ove opcije omogućava se automatski obračun CONAI naknade za odgovarajući tip dokumenta.

## Primer primene na prodajnoj fakturi

Ako je CONAI upravljanje aktivirano za kompaniju, na kartici **Artikli** prodajne fakture biće dostupna kartica:

**CONAI materijali po artiklu**

Ova kartica prikazuje materijale ambalaže koji čine artikl, zajedno sa sledećim podacima:

### Jedinica mere

Prikazuje jedinicu mere definisanu za materijal.

### Težina po jedinici

Prikazuje težinu pojedinačnog materijala, eventualno umanjenu za procenat oslobađanja definisan na kartici kupca.

### Ukupna težina

Izračunava se kao:

`Broj prodatih artikala × Težina po jedinici`

Kada se dokument sačuva ili kada se pokrene funkcija **Ponovo izračunaj CONAI**, Fluentis automatski kreira jednu ili više stavki troška.

Tom prilikom sistem preuzima:

- CONAI artikl definisan za materijal,
- količinu,
- cenu koja odgovara obračunatoj CONAI naknadi.

U elektronskoj fakturi za SDI sistem Fluentis automatski dodaje informacije u sekciju **Ostali upravljački podaci**, prikazujući:

- materijale ambalaže,
- jedinične težine artikala.

## Izveštaji za kontrolu i zbirni obračun

U modulima ulaznih i izlaznih faktura dostupna su dva standardna izveštaja za pregled obračunatih CONAI naknada.

Ovi izveštaji omogućavaju:

- internu kontrolu obračuna,
- pripremu podataka za prijavu CONAI organizaciji.

Za prodajne dokumente dostupan je i poseban izveštaj koji prati strukturu obrazaca dostupnih na CONAI portalu.

Izveštaj omogućava filtriranje materijala prema početnim slovima CONAI šifre definisane u tabeli tipova materijala, čime se olakšava priprema i slanje zvaničnih CONAI prijava.