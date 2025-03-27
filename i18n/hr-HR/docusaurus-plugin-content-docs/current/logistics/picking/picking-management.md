---
title: Stvaranje slaganja
sidebar_position: 3
---

Ovaj obrazac se otvara putem:
 - **Logistika > Slaganje > Stvori Slaganje** 

ili putem 

 - gumba **Novo** koji se nalazi u formi [Pretraga odabira](/docs/logistics/picking/search-picking).

*Posebni gumbi*:

> **Izvršenje iz narudžbe**: omogućuje unos artikala u odabir evadiranjem narudžbe kupca. Pritiskom na gumb otvorit će se prozor gdje je moguće filtrirati narudžbe kupca povezane s odabranim kupcem. Stoga je moguće potpuno ili djelomično izvršiti cijelu narudžbu ili redak.

*Specifična polja*:

**Vrsta uzimanja sa zaliha**: prethodno postavljena u *Konfiguracija > Tablice > Logistika > Vrste komisioniranja*. Ovo polje određuje raspon numeriranja dokumenta koji se unosi i automatski predlaže broj odabira na temelju datuma unosa i posljednjeg unesenog broja;  

**Konto**: predstavlja kupca/dobavljača (nije obavezno); 

**Broj**: automatski se predlaže na temelju vrste, ali se može ručno promijeniti uvijek poštujući pravilo napretka između datuma i broja;  

**Datum/Vrijeme**: automatski se predlažu trenutni datum i vrijeme, ali se mogu ručno promijeniti uvijek poštujući pravilo napretka između datuma i broja.

**Status**: predstavlja status dokumenta (koji može biti *Završen*, *Za provjeru* ili *Pauziran*).

**Status izvršenja**: može imati sljedeće vrijednosti: *Nije izvršeno*, *Izvršeno*, *Djelomično izvršeno* ili *Prisilno izvršeno*; ovaj se status odnosi na status izvršenja pojedinih redaka, stoga, na primjer, ako se putem upravljanja oznakama izvrši i jedan redak, **Status izvršenja** će preći s *Nije izvršeno* na *Djelomično izvršeno*.


:::note Napomena 
Primijetite da se stupac *Dokument* u formi [Pretraga slaganja](/docs/logistics/picking/search-picking), donosi na status odabira, a ne na status redaka, pa će preći u status Izvršeno tek kada je Dostavnica ili faktura stvorena.
:::


U tablici unosa unose se artikli specificirajući  **Klasu**, **Šifru artikla** i **Količinu preuzimanja**.   
Također je moguće unijeti **Alternativnu mjernu jedinicu** s odgovarajućom količinom.   
U polju **Skladište** definira se skladište za pokretanje, a u polju **Uzrok** odgovarajući uzrok.   
Također je moguće specificirati **Lokaciju** s koje se preuzima uneseni artikl.        
**Ukupna neto** i **težina artikala** prikazani su, izračunati koristeći težine prisutne u kartici [Težine i dimenzije](/docs/erp-home/registers/items/create-new-item) *Šifarnika artikla* pomnožene s količinom retka.

Potrebni podaci za pokretanje skladišta:    
**Datum izuzimanja**: predstavlja datum kada treba izvršiti zapis o skladištu;    
**Korisnik**: predstavlja referentni korisnički kod za trenutno komisioniranje.   
Što se tiče odabira prijenosa, potrebno je navesti **Skladište polaska i odredišta**: korisna informacija za odabir prijenosa;    
**Ubicazione**: predstavlja lokaciju na koju treba prenijeti artikle;  
**Kupac/dobavljač**: predstavlja račun za koji se obavlja pokret skladišta.

### Lotovi

Ova kartica, koja je aktivna samo ako je odabrani artikl u mreži upravljan preko serija, omogućuje unos serijskog broja i pripadajuće količine.

Ova sekcija, aktivna samo ako je odabrani artikl u mreži upravljan preko serijskih brojeva, omogućuje unos serijskog broja koji se dodjeljuje odabranom artiklu.

**Dodatni podaci Artikla**

Omogućuje unos i pregled *Dodatnih podataka* koji se odnose na pojedinačnu stavku.
Za detaljan opis dodatnih podataka, molimo pogledajte članak o [Dodatnim podacima](/docs/configurations/utility/extra-data/extradata/new-extradata).


### Povezani proizvodni nalog

Ako je artikl povezan s proizvodnim nalogom, ova kartica omogućuje pregled svih informacija vezanih uz nalog.

**Dokumenti u privitku**

Omogućuje prilaganje i pregled dokumenata koji se odnose na pojedinačne artikle.

**Kontrola**

Ova kartica omogućuje pregled stavki koje su označene pomoću [Kontrole zaliha](/docs/logistics/wms/sales/check-row-menagement) u sustavu upravljanja skladištem (WMS).      
Ako se **WMS** ne koristi, i dalje je moguće ručno unijeti nove stavke označenih artikala.

Za detalje o zajedničkom funkcioniranju formi, molimo pogledajte članak o [Funkcionalnostima, gumbima i zajedničkim poljima](/docs/guide/common).