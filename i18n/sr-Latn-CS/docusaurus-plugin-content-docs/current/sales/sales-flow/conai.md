---
title: Upravljanje CONAI
sidebar_position: 2
---

Upravljanje **CONAI** (Consorzio Nazionale Imballaggi) u Fluentisu modul je koji omogućuje automatizaciju obračuna naknade za okoliš CONAI na dokumentima kupnje i prodaje. Ovaj alat je ključan za tvrtke koje upravljaju ambalažom i moraju poštovati talijanske propise o zbrinjavanju i reciklaži ambalažnih materijala. Automatska primjena naknade CONAI u Fluentisu temelji se na parametrima koje postavi korisnik i odmah se odražava na računovodstvene dokumente, osiguravajući precizan i zakonit obračun.

## Aktivacija upravljanja CONAI

Za aktivaciju upravljanja CONAI u Fluentisu potrebno je konfigurirati određena polja u tablici [Tvrtka](/docs/configurations/tables/general-settings/company), u sekciji Ostale postavke:        

**CONAI Partner Kod**: Ovaj kod dodjeljuje se tvrtki prilikom registracije u CONAI. To je jedinstveni identifikator koji služi za praćenje izjava i obveza prema ambalažnoj naknadi na temelju ambalaže plasirane na tržište.    

**CONAI Tip Partnera**: Definira ulogu tvrtke u lancu ambalaže u Italiji. Dostupni tipovi partnera su:   
- A – Autoprodavatelj: Tvrtka koja proizvodi ambalažu za vlastitu upotrebu bez prodaje trećima.   
- U1 – Trgovac/Distributer: Tvrtka koja kupuje ambalažu radi preprodaje bez vlastite upotrebe.  
- U2 – Ostali korisnici: Tvrtke koje kupuju ambalažu za pakiranje proizvoda namijenjenih prodaji, a ne proizvode ambalažu same.  
- P – Proizvođač: Tvrtka koja proizvodi ambalažu i prodaje je drugim korisnicima ili distributerima.  

**Datum početka/kraja partnerstva CONAI**: Mogućnost definiranja razdoblja važenja partnerstva, ako je primjenjivo.

## Tablica Tipova Materijala

Upravljanje vrstama ambalažnih materijala vrši se u logističkoj tablici [Tipovi materijala](/docs/configurations/tables/logistics/material-types). U ovoj tablici se kodiraju različiti materijali (poput čelika, aluminija, papira, drva, plastike itd.) koji se koriste za pakiranje. Za svaku vrstu materijala potrebno je postaviti:

**Kod materijala CONAI**: Određuje vrstu materijala u skladu s klasifikacijom CONAI.  
**Kod fiktivnog artikla**: Koristi se za kreiranje stavke troška vezane uz CONAI doprinos u otpremnicama ili fakturama. Ako se ne navede kod artikla, taj materijal neće biti valjan za CONAI konfiguraciju.

Moguće je koristiti jedan jedini kod artikla za sve materijale ili specificirati jedan za svaku vrstu, ovisno o razini detalja koja se želi u fiskalnim dokumentima.

**Tarife i Jedinice Mjere**: Mreža ispod omogućuje definiranje tarifa koje se primjenjuju na svaki materijal na temelju različitih vremenskih intervala. Jedinica mjere, obično u tonama, mora biti usklađena s onom koja se koristi u prodajnim artiklima i u fiktivnim artiklima CONAI.

## Definicije u kartici Artikala

U kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) u evidenciji artikala moguće je definirati karakteristike ambalaže za upravljanje CONAI naknadama. U ovoj sekciji moguće je postaviti sljedeće:  

**Koristi u kupnji/prodaji**: Određuje hoće li se artikl obračunavati za CONAI naknadu u dokumentima kupnje ili prodaje.       
**Tip ambalaže**: Navodi je li ambalaža primarna, sekundarna ili tercijarna.    
**Prazno ili puno**: Označava je li ambalaža prazna (bez oznake) ili puna (s oznakom).      
**Materijali ambalaže**: Popis materijala koji čine ambalažu, s pripadajućom težinom u definiranoj jedinici mjere.         

## Postavke u kartici Klijent/Dobavljač

Za ispravno obračunavanje CONAI naknada u dokumentima kupnje ili prodaje, potrebno je pravilno konfigurirati karticu klijenta ili dobavljača u kartici [Postavke CONAI](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

**Tip Partnera CONAI**: Za obračun u prodaji, klijent mora biti autoprodavatelj (A), trgovac/distributer (U1) ili ostali korisnici (U2). Za obračun u kupnji, dobavljač mora biti proizvođač (P).    
**Postotci Oslobađanja**: U mreži je moguće definirati eventualne postotke oslobađanja po tipu materijala, s pripadajućim datumima važenja.  

## Tipovi otpremnica i tipovi faktura  

U [tipovima otpremnica](/docs/configurations/tables/sales/delivery-notes-type) i [tipovima faktura](/docs/configurations/tables/sales/invoices-type) postoji opcija **Upravljanje CONAI**. Ova opcija aktivira automatski obračun CONAI naknade za taj specifični tip dokumenta.

## Primjer primjene u prodajnoj fakturi

Ako je upravljanje CONAI aktivirano za tvrtku, u kartici *Artikli* prodajne fakture bit će dostupna podkartica  **CONAI materijali po artiklu**. Ova sekcija uključuje materijale ambalaže koji čine artikl, s sljedećim informacijama:         

**Jedinica mjere**: Navodi jedinicu mjere koja se koristi za materijal.   
**Težina po jedinici**: Težina svakog materijala, eventualno umanjena za postotak oslobađanja definiran u kartici klijenta.   
**Ukupna težina**: Izračunava se množenjem broja prodanih artikala s težinom po jedinici.  

Kada se dokument spremi ili se pritisne gumb *Ponovno izračunaj CONAI* na traci izbornika, Fluentis će automatski unijeti jedan ili više redaka troškova, dohvaćajući artikal materijala s količinom i cijenom koja odgovara CONAI trošku za taj materijal. U datoteci elektroničke fakture za SDI (Sustav razmjene), Fluentis će automatski dodati oznake u odjeljak "Ostali upravljački podaci" kako bi prikazao materijale i jedinične težine artikala.

## Ispisi za kontrolu i ukupni obračun

U modulima faktura za kupnju i prodaju dostupna su dva formata ispisa koja omogućuju izvlačenje periodičnih ukupnih iznosa za razne materijale, kako za internu kontrolu, tako i za obradu podataka koji se prijavljuju CONAI-u. Za prodaje je također dostupan izvještaj koji odražava internetske stranice CONAI-a za učitavanje podataka iz izjava, filtrirajući materijale prema početnim slovima CONAI koda unesenog u tablicu materijala.