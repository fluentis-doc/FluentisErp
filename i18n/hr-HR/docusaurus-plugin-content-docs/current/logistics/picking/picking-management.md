---
title: Kreiranje pickinga (slaganja robe)
sidebar_position: 3
---

:::important Čemu služi
Upravljanje **pickingom* u sustavu Fluentis osmišljeno je za optimizaciju postupka preuzimanja artikala iz skladišta. Ova funkcionalnost omogućuje korisnicima učinkovito kreiranje lista za preuzimanje na temelju različitih vrsta *pickinga* (slaganja robe) koje je moguće konfigurirati u sustavu. Kreiranjem *pickinga* operateri mogu odabrati artikle koje je potrebno realizirati te definirati važne podatke kao što su količina i lokacija preuzimanja.

Postupak upravljanja *pickingom* sastoji se od različitih sučelja koja omogućuju prikaz i filtriranje narudžbi kupaca, čime se olakšava potpuna ili djelomična realizacija narudžbi putem automatiziranog upravljanja podacima o artiklima. Osim toga, sustav automatski određuje identifikacijski broj *pickinga* na temelju prethodno konfiguriranih parametara, čime se osiguravaju sljedivost i urednost operacija.

Zahvaljujući funkcionalnostima kao što su praćenje statusa realizacije redaka, evidentiranje šarži i serijskih brojeva te povezivanje s dokumentima kao što su otpremnice i izlazni računi, upravljanje *pickingom* u sustavu Fluentis pruža cjelovito i fleksibilno radno okruženje. Time se poduzećima omogućuje povećanje logističke učinkovitosti, smanjenje pogrešaka tijekom preuzimanja i osiguravanje većeg zadovoljstva kupaca.
:::

Obrazac se otvara putem:  
 - putanje **Logistika > Picking (Slaganje robe) > Slaganje robe** 

ili putem 

 - gumba **Novo** koji se nalazi u obrascu [Liste za slaganje](/docs/logistics/picking/search-picking).

## 1. Obvezni podaci

**Vrsta pickinga**: prethodno je definirana u *Konfiguracija > Tablice > Logistika > Vrste slaganja robe*. Ovo polje određuje raspon numeriranja dokumenta koji se unosi i automatski predlaže broj pickinga na temelju datuma unosa i posljednjeg unesenog broja;  

**Konto**: predstavlja referentnog kupca/dobavljača (nije obvezno);  

**Broj**: automatski se predlaže na temelju vrste, ali ga je moguće ručno izmijeniti uz poštovanje pravila slijeda između datuma i broja;  

**Datum/Sat**: automatski se predlažu trenutačni datum i vrijeme, ali ih je moguće ručno izmijeniti uz poštovanje pravila slijeda između datuma i broja.

**Status**: predstavlja status dokumenta (koji može biti *Završeno*, *Za provjeru* ili *Obustavljeno*).

**Status izvršenja**: može imati sljedeće vrijednosti: *Nije izvršeno*, *Izvršeno*, *Djelomično izvršeno* ili *Prisilno izvršeno*. Ovaj se status odnosi na status realizacije pojedinačnih redaka. Primjerice, ako se putem upravljanja potvrdom realizira samo jedan redak, **Status izvršenja** promijenit će se iz *Nije izvršeno* u *Djelomično izvršeno*.    

:::note Napomena
Važno je napomenuti da se stupac *Dokument* u obrascu [Pretraga pickinga](/docs/logistics/picking/search-picking) odnosi na status pickinga, a ne na status redaka. Stoga će prijeći u status realizirano tek nakon kreiranja otpremnice ili izlaznog računa.
:::

#### Posebni gumb

> **Izuzimanje (Realizacija-9 iz narudžbe**: omogućuje unos artikala u picking realizacijom narudžbe kupca. Klikom na gumb otvara se obrazac u kojem je moguće filtrirati narudžbe kupaca koje se odnose na predmetnog kupca. Moguće je potpuno ili djelomično realizirati cijelu narudžbu ili pojedini redak.

## 2. Zaglavlje

#### Podaci potrebni za skladišno kretanje  

**Datum izuzimanja (preuzimanja iz skladišta)**: predstavlja datum na koji je potrebno izvršiti skladišno knjiženje;  
**Korisnik**: predstavlja šifru korisnika za trenutačni picking. Kod pickinga za prijenos potrebno je navesti **Odlazno i odredišno skladište**: podatak potreban za pickinge za prijenos;  
**Lokacija**: predstavlja lokaciju na koju se artikli zaprimaju;  
**Kupac/dobavljač za istovar**: predstavlja konto za koji se izvršava skladišno kretanje.

## 3. Artikli

U mrežu za unos unose se artikli uz navođenje **Klase**, **Šifre artikla** i **Količine za preuzimanje**. Moguće je unijeti i **Alternativnu mjernu jedinicu** s pripadajućom količinom. U polju **Skladište** definira se skladište za kretanje, a u polju **Predložak** pripadajući skladišni predložak. Moguće je navesti i **Lokaciju** s koje se uneseni artikl preuzima.

### Lotovi/Serijski brojevi

Kartica, koja je aktivna samo ako se odabranim artiklom u mreži upravlja po lotovima, omogućuje unos broja lotovima i pripadajuće količine.

Sekcija **Serijski brojevi**, koja je aktivna samo ako se odabranim artiklom u mreži upravlja po serijskim brojevima, omogućuje unos serijskog broja koji se dodjeljuje predmetnom artiklu.

### Dodatni podaci artikla

Omogućuje unos i prikaz *dodatnih podataka* za pojedini redak.           
Detaljan opis dodatnih podataka dostupan je u članku [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Povezani proizvodni nalozi

Ako je artikl povezan s proizvodnim nalogom, ova kartica omogućuje prikaz svih podataka koji se odnose na taj nalog.

### Priloženi dokumenti

Omogućuje prilaganje i prikaz dokumenata povezanih s pojedinim artiklima.  

### Oznaka

Ova kartica omogućuje prikaz redaka potvrđenih putem funkcionalnosti [Upravljanje oznakom (potvrdom)](/docs/logistics/wms/sales/check-row-management) modula WMS.    
Ako se **WMS** ne koristi, moguće je ručno unijeti nove retke potvrđenih artikala.
Funkcionalnost **Upravljanje oznakom** služi za potvrđivanje redaka pickinga koje je operater stvarno preuzeo u skladištu. Stoga, ako se u ovoj tablici nalazi barem jedan potvrđeni redak, postupci kreiranja otpremnice i izlaznog računa uzet će u obzir samo te retke.         
Ako se u tablici **Upravljanje oznakom** ne nalazi nijedan redak, postupci kreiranja otpremnice i izlaznog računa uzet će u obzir sve retke prisutne u pickingu.

Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).