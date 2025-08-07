---
title: Novi povrat
sidebar_position: 1
---

Putem ovog obrasca moguće je ručno stvoriti novi povrat podizvođača ili izmijeniti već postojeće. 

Obrazac se otvara putem puta  **Podizvođač > Povrati >  Novi povrat** ili putem gumba **Novo** koji se nalazi u obrascu [Pretraga Povrata](/docs/subcontractor/subcontractor-returns/insert-returns/search-returns).

## **1. Obvezni podaci**

Aplikacija zahtijeva unos  **Dobavljača** (Podizvođača) na čije ime je narudžba, koristeći odgovarajuću pomoć za račune, te  **Tip**, **Broj** i **Datum** stvarnog povrata (koji obično odgovara trenutnom datumu). 

**Kontrolirano**: oznaku ručno aktivira korisnik;    
**Valorizirano i Utovareno**: oznake se automatski aktiviraju u trenutku kada se redom izvrše vrijednovanje i registracija dokumenta u skladište.  

> **Predviđene isporuke na skladište**: gumb se aktivira nakon spremanja obaveznih podataka i otvara obrazac *Izuzimanje iz narudžbe*, unutar kojeg korisnik vidi sve narudžbe kontnog rada koje još uvijek imaju djelomično ili potpuno neizvršene stavke i iz kojih je moguće generirati povrate;     
> **Zapis isporuke robe na skladište**:

## **2. Zaglavlje**

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručni](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili [pomoću pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, na temelju podataka unesenih u registru podizvođača, aplikacija *automatski* popunjava polja.  

Unosom **Dobavljača** automatski se predlažu svi specifični podaci kartice **Zaglavlje**, prema podacima postavljenim ranije u [Šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima za njegovu adresu i u sljedećim *sekcijama*:    

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Isporuka**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period važenja](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.1 Plaćanja 

**Uvjeti plaćanja** automatski se prenose iz *Šifarnik podizvođača > kartica Plaćanja* i mogu se izmijeniti/izbrisati od strane korisnika.  

*Poseban gumb*

> **Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja.  

### 2.2 Popusti

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnika podizvođača > kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.

Popusti koji su predloženi u zaglavlju dokumenta primjenjuju se na svaki novi redak artikla unesen u dokumentu.

Ako nakon unosa redaka artikla unesete novi popust u zaglavlju, taj se popust ne replicira na već unesene redove artikla.

*Poseban gumb*  

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

## Procedure testata:

### *Izvršenje iz narudžbe*

U ovom prozoru, koji se otvara pritiskom na gumb *Predviđene Isporuke* na traci izbornika, moguće je filtrirati narudžbe kontnog rada. 

U donjoj mreži prikazuje se jedan redak za svaku narudžbu kontnog rada koja još nije potpuno ili djelomično ispunjena. Korisnik, dvostrukim klikom na redak narudžbe, može proširiti redove koji trebaju još biti vraćeni od podizvođača, može ih odabrati ili unijeti količinu na svakom od njih i pritisnuti gumb *Preuzimanje* kako bi prebacio količine odabranih artikala u mrežu kartice *Artikli* povrata kontnog rada.

*Posebni gumbi*:  
> **Traži naloge**: omogućuje primjenu filtara za pretraživanje cijele baze podataka unesenih narudžbi Podizvođača koje još nisu ispunjene ili su samo djelomično ispunjene;    
> **Nabava**: pokreće postupak koji prenosi odabrane artikle u mrežu kartice Artikli Isporuke podizvođača iz donje mreže;    
> **Prisilno izvršenje narudžbe**: pokreće postupak koji prisilno označava ispunjenom liniju narudžbe kontnog rada koju korisnik prenosi;   
> **Označi sve**: omogućuje odabir svih redaka u desnom dijelu prozora gdje se prikazuju artikli za prijenos;    

### *Zapis isporuke robe na skladište*

Pogledajte detalje na temu u [Registraciji Povrata](/docs/subcontractor/subcontractor-returns/procedure/returns-record).

## **3. Artikli**

Obrazac se sastoji od rešetke unutar koje korisnik može ručno unijeti artikle koji su primljeni.

### 3.1 Podaci

Na ovoj kartici prikazuju se informacije koje se odnose na odabranu stavku u rešetki članaka, uključujući:  

**Proizvodni nalog**: to je proizvodni nalog čija je vanjska faza generirala red radnog naloga koji je izvršen s odabranom linijom povratka;  

**Projekt**: u ovom polju prikazan je projekt povezan s linijom povrata. Obično se odnosi na projekt unesen u red nalog za rad iz kojeg je generirana linija povrata;  

**Težina**: prikazuju se ukupne neto težine i ukupne bruto težine redaka artikla. Prikazuju se težine artikla iz osnovnih podataka pomnožene s količinom reda.  

### 3.2 Lote / SB

Na ovoj kartici je omogućeno postavljanje lotova ili serijskih brojeva za unos u skladište za odabrani redak u mreži, s količinom vraćenog artikla, u slučaju kada se vraćaju različiti lotovi ili serijski brojevi s istim redom povrata. Ovisno o tome je li artikl upravljan lotovima ili serijskim brojevima, aktivira se odgovarajuća mreža na ovoj kartici.  

:::note NAPOMENA 
Zbroj količina različitih lotova/serijskih brojeva mora točno odgovarati količini vraćenog artikla na liniji.  
:::

## **4. Materijali**

Na ovoj kartici prikazani su materijali koje je podizvođač trebao koristiti za proizvodnju onoga što je uneseno u tablicu *Artikli*. Prijedlog materijala definiran je u Parametrima podizvođača, u polju **Podaci za predložene materijale**. 

Odjeljak *Artikl* sadrži informacije o odabranoj liniji u tablici *Artikli*.  

### 4.1 Materijali

Za svaki artikl prikazan gore možete unijeti materijale i njihove detalje ili će ti podaci biti predloženi.

### Detalj materijala

Na ovoj se kartici unose materijali koji nisu korišteni od strane podizvođača, bilo zbog viška ili zbog odbačenih materijala.  

#### Specifična polja

**Skladište**: u ovoj koloni prikazan je kod skladišta za povrate, preuzet iz parametara radnog naloga, automatski prikazan samo ako je unesena količina vraćena za liniju materijala, moguće ga je uređivati od strane korisnika;  

**Predložak**: u ovoj koloni prikazan je kod predložak za unos povrata, preuzet iz parametara radnog naloga, automatski se prikazuje samo ako je unesena količina vraćena za liniju materijala, i može se uređivati od strane korisnika. Ako materijali koje korisnik nije koristio budu odbačeni, tada predložak ne smije imati protupostavku. Međutim, ako su materijali vraćeni, tada predložak mora imati protupostavku u opterećenju kako bi se naznačilo gdje će se smjestiti vraćeni materijali.  

**Učitaj lot**: u mreži, korisnik može naznačiti koje su partije materijala upotrijebile podizvođači. Prikazane su iste kolone i pravila za korištenje mreže kao i u tabu Lote\SB koji se nalazi u kartici *Artikli*.

## **5. Sažeci**

U sažecima su prikazane osnovne informacije cijelog dokumenta.

### 5.1 Konačni popusti artikala 

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji se izračunavaju i prikazuju na svakom artiklu dokumenta, u kartici *Artikli > kartica Popusti/Cjenici*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (predefiniranih u *Vrstama popusta*), dodjeljujući vrsti prioritet primjene popusta te određujući računanje popusta na osnovicu ili kaskadno u odnosu na prethodno primijenjene popuste;  
**Prioritet**: predstavlja redoslijed primjene popusta; sortiranje se vrši uzlazno;  
**Kaskada/Iznos**: definira računa li se popust na osnovicu (cijena * količina) - (već izračunati popusti) ili samo na (cijena * količina);  
**Vrijednost**: numerička vrijednost završnog popusta koji treba primijeniti.

### 5.2 Troškovi

Prikazani su troškovi uneseni u šifarniku kontakta, u kartici *Naknade/Rabati*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrsta troškova (predefiniranih u tablici *Tipovi troškova*), dodjeljujući vrsti postotak troška koji treba primijeniti;  
**Iznos troška**: označava vrijednost troška izraženu u valuti dokumenta;  
**PDV**: navodi stopu PDV-a koja se primjenjuje na unesene troškove;   
**Postotak/Vrijednost**: označava treba li se troškovi izračunati kao postotak ili kao fiksni iznos. Odabirom "Vrijednost", iznos troška treba unijeti u odgovarajuće polje;    
**Postotak**: numerička vrijednost postotka troška.  


### 5.3 Ukupnosti dokumenta

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;  
**Zaduženje**: predstavlja iznos eventualne akontacije primljene za dokument;    
**Poklonjeni iznos**: predstavlja iznos darovanih artikala unesenih u kartici *Artikli*;  
**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez završnih popusta;    
**Neto iznos artikala**: *Bruto iznos artikala * – *Ukupno primijenjeni popusti*;    
**Ukupno konačnih popusta**: predstavlja vrijednost završnih popusta izraženih u postocima na bruto iznos artikala;  
**Neto iznos završnih popusta**: *Neto iznos artikala* - *Ukupni završni popusti*;  
**Naknade za naplatu**: predstavlja zbroj troškova naplate unesenih u mrežu *Troškovi*;  
**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u mrežu *Troškovi*;   
**Oporezivi iznos**: *Neto iznos artikala* – *Završni popusti* + *Ukupno neizdvojene troškove* + *Ukupno izdvojene troškove*;  
**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;  
**Ukupno**: *Osnovica* + *PDV*.