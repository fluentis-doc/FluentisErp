---
title: Kreiranje pickinga (slaganja robe)
sidebar_position: 3
---

:::important Čemu služi
Upravljanje **pickingom** u sistemu Fluentis osmišljeno je za optimizaciju postupka preuzimanja artikala iz skladišta. Ova funkcionalnost omogućava korisnicima efikasno kreiranje lista za preuzimanje na osnovu različitih vrsta *pickinga* (slaganja robe) koje je moguće konfigurisati u sistemu. Kreiranjem *pickinga* operateri mogu odabrati artikle koje je potrebno realizovati i definisati važne podatke kao što su količina i lokacija preuzimanja.

Postupak upravljanja *pickingom* sastoji se od različitih interfejsa koji omogućavaju prikaz i filtriranje naloga kupaca, čime se olakšava potpuna ili delimična realizacija naloga putem automatizovanog upravljanja podacima o artiklima. Osim toga, sistem automatski određuje identifikacioni broj *pickinga* na osnovu prethodno konfigurisanih parametara, čime se osiguravaju sledljivost i urednost operacija.

Zahvaljujući funkcionalnostima kao što su praćenje statusa realizacije redova, evidentiranje lotova i serijskih brojeva i povezivanje sa dokumentima kao što su otpremnice i izlazni računi, upravljanje *pickingom* u sistemu Fluentis pruža celovito i fleksibilno radno okruženje. Time se preduzećima omogućava povećanje logističke efikasnosti, smanjenje grešaka tokom preuzimanja i osiguravanje većeg zadovoljstva kupaca.
:::

Obrazac se otvara putem:  
 - putanje **Logistika > Picking (Slaganje robe) > Slaganje robe** 

ili putem 

 - dugmeta **Novo** koje se nalazi u obrascu [Liste za slaganje](/docs/logistics/picking/search-picking).

## 1. Obavezni podaci

**Vrsta pickinga**: prethodno je definisana u *Konfiguracija > Tabele > Logistika > Vrste slaganja robe*. Ovo polje određuje raspon numerisanja dokumenta koji se unosi i automatski predlaže broj pickinga na osnovu datuma unosa i poslednjeg unetog broja;  

**Konto**: predstavlja referentnog kupca/dobavljača (nije obavezno);  

**Broj**: automatski se predlaže na osnovu vrste, ali ga je moguće ručno izmeniti uz poštovanje pravila redosleda između datuma i broja;  

**Datum/Sat**: automatski se predlažu trenutni datum i vreme, ali ih je moguće ručno izmeniti uz poštovanje pravila redosleda između datuma i broja.

**Status**: predstavlja status dokumenta (koji može biti *Završeno*, *Za proveru* ili *Obustavljeno*).

**Status izvršenja**: može imati sledeće vrednosti: *Nije izvršeno*, *Izvršeno*, *Delimično izvršeno* ili *Prisilno izvršeno*. Ovaj status se odnosi na status realizacije pojedinačnih redova. Na primer, ako se putem upravljanja potvrdom realizuje samo jedan red, **Status izvršenja** promeniće se iz *Nije izvršeno* u *Delimično izvršeno*.    

:::note Napomena
Važno je napomenuti da se kolona *Dokument* u obrascu [Pretraga pickinga](/docs/logistics/picking/search-picking) odnosi na status pickinga, a ne na status redova. Stoga će preći u status realizovano tek nakon kreiranja otpremnice ili izlaznog računa.
:::

#### Posebni gumb

> **Izuzimanje (Realizacija) iz naloga**: omogućava unos artikala u picking realizacijom naloga kupca. Klikom na dugme otvara se obrazac u kojem je moguće filtrirati naloge kupaca koji se odnose na predmetnog kupca. Moguće je potpuno ili delimično realizovati ceo nalog ili pojedinačni red.

## 2. Zaglavlje

#### Podaci potrebni za skladišno kretanje  

**Datum izuzimanja (preuzimanja iz skladišta)**: predstavlja datum na koji je potrebno izvršiti skladišno knjiženje;  
**Korisnik**: predstavlja šifru korisnika za trenutni picking. Kod pickinga za prenos potrebno je navesti **Odlazno i odredišno skladište**: podatak potreban za pickinge za prenos;  
**Lokacija**: predstavlja lokaciju na koju se artikli primaju;  
**Kupac/dobavljač za istovar**: predstavlja konto za koji se izvršava skladišno kretanje.

## 3. Artikli

U mrežu za unos unose se artikli uz navođenje **Klase**, **Šifre artikla** i **Količine za preuzimanje**. Moguće je uneti i **Alternativnu mernu jedinicu** sa pripadajućom količinom. U polju **Skladište** definiše se skladište za kretanje, a u polju **Predložak** pripadajući skladišni predložak. Moguće je navesti i **Lokaciju** sa koje se uneti artikl preuzima.

### Lotovi/Serijski brojevi

Kartica, koja je aktivna samo ako se odabranim artiklom u mreži upravlja po lotovima, omogućava unos broja lotova i pripadajuće količine.

Sekcija **Serijski brojevi**, koja je aktivna samo ako se odabranim artiklom u mreži upravlja po serijskim brojevima, omogućava unos serijskog broja koji se dodeljuje predmetnom artiklu.

### Dodatni podaci artikla

Omogućava unos i prikaz *dodatnih podataka* za pojedinačni red.           
Detaljan opis dodatnih podataka dostupan je u članku [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Povezani proizvodni nalozi

Ako je artikl povezan sa proizvodnim nalogom, ova kartica omogućava prikaz svih podataka koji se odnose na taj nalog.

### Priloženi dokumenti

Omogućava prilaganje i prikaz dokumenata povezanih sa pojedinačnim artiklima.  

### Oznaka

Ova kartica omogućava prikaz redova potvrđenih putem funkcionalnosti [Upravljanje oznakom (potvrdom)](/docs/logistics/wms/sales/check-row-management) modula WMS.    
Ako se **WMS** ne koristi, moguće je ručno uneti nove redove potvrđenih artikala.
Funkcionalnost **Upravljanje oznakom** služi za potvrđivanje redova pickinga koje je operater stvarno preuzeo u skladištu. Stoga, ako se u ovoj tabeli nalazi najmanje jedan potvrđeni red, postupci kreiranja otpremnice i izlaznog računa uzeće u obzir samo te redove.         
Ako se u tabeli **Upravljanje oznakom** ne nalazi nijedan red, postupci kreiranja otpremnice i izlaznog računa uzeće u obzir sve redove prisutne u pickingu.

Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte vezu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).