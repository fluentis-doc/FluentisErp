---
title: Upravljanje CONAI  
sidebar_position: 2
---

Modul **CONAI** u sustavu Fluentis omogućuje automatizirano obračunavanje troškova vezanih uz ekološki doprinos CONAI na dokumentima kupnje i prodaje.  
Ovaj je alat ključan za tvrtke koje upravljaju ambalažom i moraju poštivati talijanske propise o zbrinjavanju i recikliranju ambalažnih materijala.  
Automatska primjena CONAI troškova u Fluentisu odvija se prema parametrima koje postavi korisnik te se izravno odražava na računovodstvene dokumente, čime se osigurava točan i usklađen izračun.

## Aktivacija upravljanja CONAI  

Za aktivaciju upravljanja CONAI modulom u Fluentisu potrebno je postaviti određena polja u tablici [Tvrtka](/docs/configurations/tables/general-settings/company), u odjeljku **Ostale postavke**:          

**CONAI šifra partnera** – ovaj se kod dodjeljuje tvrtki prilikom registracije u CONAI sustav. To je jedinstveni identifikator koji služi za praćenje prijava i obračuna ekološkog doprinosa ovisno o količini ambalaže koju tvrtka stavlja na tržište.  

**Vrsta CONAI partnera** – definira ulogu tvrtke u lancu ambalaže u Italiji. Dostupne su sljedeće vrste partnera:  
- A – Samoproizvođač: tvrtka koja proizvodi ambalažu za vlastitu upotrebu i ne prodaje je trećima.  
- U1 – Trgovac/Distributer: tvrtka koja kupuje ambalažu radi daljnje prodaje, bez vlastite upotrebe.  
- U2 – Ostali korisnici: tvrtke koje kupuju ambalažu za pakiranje svojih proizvoda, ali je ne proizvode same.  
- P – Proizvođač: tvrtka koja proizvodi ambalažu i prodaje je drugim korisnicima ili distributerima.

**Datum početka/završetka partnerstva CONAI** – ako je primjenjivo, moguće je unijeti razdoblje valjanosti partnerstva s CONAI-em.  

## Tablica vrsta materijala  

Upravljanje vrstama ambalažnih materijala provodi se u tablici logistike [Vrste materijala](/docs/configurations/tables/logistics/material-types). U ovoj se tablici evidentiraju različiti materijali koji se koriste za ambalažu (npr. čelik, aluminij, papir, drvo, plastika itd.).  
Za svaki materijal potrebno je definirati:

**CONAI kod materijala** – označava vrstu materijala u skladu s CONAI klasifikacijom.         
**Fiktivni kod artikla** – koristi se za kreiranje stavke troška koja predstavlja CONAI doprinos na otpremnicama ili računima. Ako nije naveden kod artikla, taj materijal neće biti valjan za CONAI konfiguraciju.  

Moguće je koristiti jedan zajednički fiktivni artikl za sve materijale ili zaseban artikl za svaku vrstu, ovisno o razini detalja željenoj u poreznim dokumentima.  

**Tarife i mjerne jedinice** – u donjoj tablici moguće je definirati tarife po materijalu za pojedine vremenske intervale.  
Mjerna jedinica, obično u tonama, mora biti usklađena s onom koja se koristi u prodajnim artiklima i fiktivnim CONAI artiklima.

## Definicije u šifrarniku artikala  

U kartici [Težine/Dimenzije](/docs/erp-home/registers/items/create-new-item) šifrarnika artikala moguće je definirati karakteristike ambalaže za CONAI obračun.    
Tu se mogu postaviti sljedeća svojstva:  

**Koristi u kupnji/prodaji** – označava primjenjuje li se CONAI doprinos na dokumentima kupnje ili prodaje.         
**Vrsta ambalaže** – primarna, sekundarna ili tercijarna.     
**Prazna ili puna** – određuje je li ambalaža prazna (neoznačeno polje) ili puna (označeno polje).       
**Materijali ambalaže** – popis materijala koji čine ambalažu s pripadajućom težinom u definiranoj mjernoj jedinici.          

## Postavke u šifrarniku kupaca/dobavljača  

Da bi se CONAI doprinosi pravilno obračunavali na dokumentima kupnje ili prodaje, potrebno je ispravno postaviti šifrarnik kupca ili dobavljača u kartici [Postavke CONAI](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

**Vrsta CONAI partnera** – za obračun u prodaji kupac mora biti samoproizvođač (A), trgovac/distributer (U1) ili ostali korisnik (U2).    
Za obračun u kupnji, dobavljač mora biti proizvođač (P).        
**Postotci izuzeća** – moguće je definirati postotke izuzeća za pojedine materijale, s pripadajućim datumima valjanosti.  

## Vrste otpremnica i računa  

U tablicama [Vrste otpremnica](/docs/configurations/tables/sales/delivery-notes-type) i [Vrste računa](/docs/configurations/tables/sales/invoices-type) nalazi se oznaka **Upravljanje CONAI**. Ova oznaka aktivira automatski obračun CONAI doprinosa za tu vrstu dokumenta.

## Primjer primjene u prodajnom računu

Ako je CONAI upravljanje aktivirano za neku tvrtku, u tabu *Artikli* prodajnog računa bit će dostupan podtab **CONAI materijali za artikl**.  
Ovaj odjeljak prikazuje ambalažne materijale od kojih se sastoji artikl, uz sljedeće informacije:    

**Mjerna jedinica** – mjerna jedinica korištena za materijal.         
**Jedinična težina** – težina svakog materijala, eventualno umanjena za postotak izuzeća definiran u šifrarniku kupca.        
**Ukupna težina** – izračunava se množenjem količine prodanih artikala s jediničnom težinom.      

Kada se dokument spremi ili se pritisne tipka *Ponovni obračun CONAI* na alatnoj traci, Fluentis automatski dodaje jednu ili više stavki troška prema definiranom artiklu materijala i cijeni CONAI doprinosa.  
U XML datoteci elektroničkog računa za SDI, Fluentis automatski dodaje oznake u odjeljku „Ostali upravljački podaci” s materijalima i njihovim jediničnim težinama.

## Ispisi kontrole i zbrojeva  

U modulima faktura za kupnju i prodaju dostupna su dva formata ispisa koja omogućuju izdvajanje periodičnih ukupnih iznosa za razne materijale, kako za internu kontrolu, tako i za obradu podataka koji se moraju prijaviti CONAI-u. Za prodaju je također dostupan izvještaj koji odražava internetske stranice CONAI-a za učitavanje podataka iz izjava, filtrirajući materijale prema početnim slovima CONAI koda unesenog u tablicu materijala.