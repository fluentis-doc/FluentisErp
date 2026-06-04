---
title: Upravljanje CONAI-jem  
sidebar_position: 2
---

Upravljanje **CONAI** (Talijanski nacionalni konzorcij za ambalažu) u Fluentisu modul je koji omogućuje automatiziranu primjenu troškova vezanih uz okolišnu naknadu CONAI na dokumente nabave i prodaje. Ovaj je alat iznimno važan za poduzeća koja upravljaju ambalažom i moraju poštovati talijanske propise o zbrinjavanju i recikliranju ambalažnog materijala. Automatska primjena troškova CONAI u Fluentisu odvija se na temelju parametara koje postavi korisnik te se odražava izravno na računovodstvene dokumente, osiguravajući precizan i usklađen izračun.  

## Aktivacija upravljanja CONAI-jem  

Za aktiviranje upravljanja CONAI-jem u Fluentisu potrebno je konfigurirati određena polja u tablici [Tvrtka](/docs/configurations/tables/general-settings/company), u odjeljku Ostale postavke:

- **CONAI partnerski kod**: Kod koji se dodjeljuje poduzeću prilikom učlanjenja u CONAI. Riječ je o jedinstvenom identifikatoru za praćenje prijava i okolišnih naknada koje poduzeće mora platiti na temelju ambalaže koju stavlja na tržište.  

- **Vrsta CONAI partnera**: Definira ulogu poduzeća unutar talijanskog sustava ambalaže. Dostupne su sljedeće kategorije:  
  - **A – Autoproizvođač**: Poduzeće koje proizvodi ambalažu za vlastite potrebe i ne prodaje je trećim stranama.  
  - **U1 – Trgovac/Distributer**: Poduzeće koje kupuje ambalažu radi njezine daljnje prodaje, bez vlastite uporabe.  
  - **U2 – Ostali korisnici ambalaže**: Poduzeća koja kupuju ambalažu za pakiranje proizvoda namijenjenih prodaji, ali je sama ne proizvode.  
  - **P – Proizvođač**: Poduzeće koje proizvodi ambalažu i prodaje je drugim korisnicima ili distributerima.  

- **Početni/Završni datum partnerstva**: Po želji se može definirati razdoblje važenja članstva u CONAI-ju.  

## Tipovi materijala  

Upravljanje vrstama ambalažnih materijala odvija se u logističkoj tablici [Tipovi materijala](/docs/configurations/tables/logistics/material-types). U njoj se definiraju različiti materijali (čelik, aluminij, papir, drvo, plastika itd.). Za svaki materijal potrebno je postaviti:  

- **CONAI kod materijala**: Kod koji identificira vrstu materijala prema CONAI klasifikaciji.  
- **Fiktivni šifarnik artikla**: Koristi se za kreiranje retka troška CONAI naknade u otpremnicama ili računima. Ako nije definiran, materijal se ne može koristiti u konfiguraciji CONAI-ja.  

Moguće je koristiti jedan isti fiktivni artikl za sve materijale ili različit za svaki, ovisno o željenoj razini detalja u fiskalnim dokumentima.

- **Tarife i mjerne jedinice**: U donjoj tablici definiraju se važeće tarife za pojedine materijale prema datumskom razdoblju. Mjerna jedinica (obično tona) mora biti usklađena s onom definiranom na artiklima i fiktivnim CONAI artiklima.  

## Definicije u šifrarniku artikala

U kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) artikla mogu se definirati svojstva ambalaže za potrebe CONAI-ja:  

- **Koristi u nabavi/prodaji**: Određuje primjenjuje li se izračun CONAI naknade na dokumente nabave ili prodaje.  
- **Vrsta ambalaže**: Primarna, sekundarna ili tercijarna.  
- **Prazna ili puna ambalaža**: Označava je li ambalaža prazna (neoznačeno) ili puna (označeno).  
- **Ambalažni materijali**: Popis materijala od kojih je sastavljena ambalaža, s pripadajućom težinom.  

## Postavke u šifrarniku kupaca/dobavljača  

Kako bi se troškovi CONAI-ja ispravno primjenjivali na dokumente, potrebno je konfigurirati karticu [CONAI postavke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

- **Vrsta CONAI partnera**: za izračun u prodaji, kupac mora biti samoproizvođač (A), trgovac/distributer (U1) ili drugi korisnici (U2). Za izračun u nabavci, dobavljač mora biti proizvođač (P).
- **Postotci izuzeća**: Mogu se definirati eventualni postotci izuzeća po vrsti materijala, uz razdoblje važenja.   

## Tipovi otpremnica i tipovi računa  

U [tipovima otpremnica](/docs/configurations/tables/sales/delivery-notes-type) i nei [tipovima računa](/docs/configurations/tables/sales/invoices-type)nalazi se oznaka **Upravljanje CONAI-jem**. Aktiviranjem ove opcije omogućuje se automatski izračun CONAI naknade na tom tipu dokumenta.

## Primjer primjene u računu za prodaju

Ako je CONAI upravljanje aktivno za tvrtku, u kartici *Artikli* unutar računa za prodaju prikazuje se podkartica **CONAI materijali za artikl**. Ova sekcija uključuje materijale za pakiranje koji čine artikal, s sljedećim informacijama:

- **Jedinica mjere**: Određuje mjernu jedinicu koja se koristi za materijal.  
- **Jedinična težina**: Težina pojedinog materijala, eventualno umanjena za postotak izuzeća definiran u šifrarniku kupca.  
- **Ukupna težina**: Izračunava se množenjem broja prodanih artikala s jediničnom težinom.  

Prilikom spremanja dokumenta ili pritiskom na tipku *Ponovni izračun CONAI* na  traci izbornika, Fluentis će automatski umetnuti jedan ili više redaka troška, koristeći artikl materijala s odgovarajućom količinom i cijenom prema CONAI trošku za taj materijal. U datoteci elektroničkog računa za SDI, Fluentis će automatski dodati oznake u sekciji „Ostali upravljački podaci“ kako bi se prikazali materijali i jedinične težine artikala.

## Kontrolni i zbirni ispisi

U modulima faktura za kupnju i prodaju dostupna su dva formata ispisa koja omogućuju izvlačenje periodičnih ukupnih iznosa za razne materijale, kako za internu kontrolu tako i za obradu podataka koji se prijavljuju CONAI-u. Za prodaje je također dostupan izvještaj koji odražava internetske stranice CONAI-a za učitavanje podataka iz izjava, filtrirajući materijale prema početnim slovima CONAI koda unesenog u tablicu materijala.