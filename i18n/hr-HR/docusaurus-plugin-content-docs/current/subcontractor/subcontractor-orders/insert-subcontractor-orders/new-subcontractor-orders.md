---
title: Nova narudžba podizvođača 
sidebar_position: 1
---

U ovom obrascu moguće je ručno kreirati novi nalog kooperacije ili uređivati postojeće naloge.

Obrazac se otvara putem puta **Podizvođač > Narudžba podizvođača > Nova narudžba** ili putem gumba **Novo** koji se nalazi u obrascu [Pretraga narudžbi podizvođača](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/search-subcontractor-orders).

## **1. Obavezni podaci**

Aplikacija zahtijeva unos **Dobavljača** (izvršitelja) koji je nositelj narudžbe. Automatski će biti predloženi: trenutna **Godina**, **Broj**, **Datum** i **Tip dokumenta** (predložena jednaka onoj unesenoj u *Parametri podizvođača*), a korisnik ih može izmijeniti.

## **2. Zaglavlje**

Nakon što se odaberu obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoć polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, na temelju podataka unesenih u evidenciju izvršitelja, aplikacija *automatski* popunjava polja.

### 2.1 Podaci o dobavljaču

Kada se unese **Dobavljač** automatski se *predlažu* svi specifični podaci na kartici **Zaglavlje**, prema podacima postavljenim ranije u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima adrese i u sljedećim *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Isporuka**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski okvir važenja](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Plaćanja

**Mogućnost plaćanja** automatski se prenose *Šifarnik izvršitelja > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.  

#### Poseban gumb

> **Otkaži plaćanja**:  koristi se za brisanje odabranih redaka plaćanja.  

### 2.3 Popusti

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnik izvršitelja > kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.  
Popusti koji su ponuđeni u zaglavlju dokumenta primjenjuju se na svaki novi redak artikla koji se unese u dokument.
Ako nakon što su uneseni retci artikla dodate novi popust u zaglavlje, on se neće automatski primijeniti na već unesene retke artikla.

*Poseban gumb*  

> **Izbriši zadane rabate**: koristi se za brisanje odabranih redaka popusta.

## **3. Artikli**

Obrazac se sastoji od pregleda u koji korisnik može ručno unijeti proizvode koji su potrebni podizvođaču. Mogu se unijeti šifrirani artikli i napomene.

Obrazac već može biti popunjen ako narudžba dolazi iz *proizvodnje (MS)* ili *MRP obrade*, ali korisnik i dalje može izmijeniti ili dodati dodatne materijale na listu planirane narudžbe. Važno je napomenuti da, ako je planirana narudžba za nabavu, kartica Materijali bit će neaktivna.

### 3.1 Podaci artikla

Na ovoj kartici prikazuju se informacije koje se odnose na odabranu liniju u mreži artikala, uključujući:  

- **Tijek obrade**: u ovom polju preuzima se oznaka **Tijek obrade** definirana u MRP parametrima artikla.
- **Količina za proizvodnju**: količina iz izvornog naloga koja je prijavljena kooperantu za obradu.
- **Obrađena količina**: ukupna količina zaprimljena nakon obrade.
- **Planirani datum povrata**: datum očekivanog povrata obrađene robe.
- **Napomena obrade**: tekst koji korisnik može unijeti ručno. Moguće je automatski prenijeti i određene sistemske informacije, primjerice opis radne faze koja je generirala potrebu za kooperacijom.
- **Faza**: dvostrukim klikom otvara se pomoćni pregled faza obrade u kojem je moguće odabrati fazu i podfazu te dodijeliti odabrani materijal određenoj fazi obrade artikla.
- **Skladište**: skladište odredišta za obrađeni proizvod.
- **Težine**: prikazuju se ukupna neto i bruto težina stavki. Vrijednosti se preuzimaju iz kartice artikla te množe količinom retka.

## **3.a. Materijali**

Obrazac se sastoji od dvije tablice:
- **Materijali za dostavu** – sadrži materijale koji se šalju kooperantu na obradu.
- **Materijali koji će se koristiti** – sadrži materijale koji će biti korišteni ili vraćeni zajedno s obrađenim proizvodom.

Moguće je unositi:
- šifrirane artikle,
- nešifrirane artikle,
- napomene.

Materijale je moguće unijeti ručno. U tom slučaju operater mora unijeti:
- količinu,
- eventualnu cijenu obrade,
- planirani datum povrata,
- datum korištenja materijala.

Ako je nalog nastao iz procedure **proizvodnje (MS)** ili **MRP obrade**, navedeni podaci bit će automatski popunjeni.

### 3.a.1 Materijali za dostavu

**Šifra artikla**: označava materijal koji treba dostaviti na obradu;

:::note NAPOMENA
U slučaju da je narudžba generirana iz izdavanja *Planirane narudžbe* ili *Planirane proizvodne narudžbe* s jednom ili više vanjskih faza, materijali za dostavu neće biti prikazani ako: ne postoje [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) za artikl, ili zastavica *Razmatra se u podizvođaču* nije omogućena u  [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), ili je *Tip izuzimanja* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) *automatska*, ili je *Tip izuzimanja* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) s *popisom* i zastavica WIP nije omogućena.
:::

### 3.a.2 Materijali koji će se koristiti

**Šifra artikla**: označava materijal koji će se koristiti nakon povratka obrađenog proizvoda;    
**Koristi po jedinici**: količina potrebna za svaku jedinicu obrađenog proizvoda, u slučaju automatskog upravljanja rasporedom sklopova; ova informacija je automatski popunjena od strane sistema;    
**Količina koja se koristi**: ukupna količina potrebna za potpunu obradu, u slučaju automatskog upravljanja rasporedom sklopova; ova informacija je automatski popunjena od strane sistema;    
**% otpad**: dodatna količina koja se koristi kao otpad;    
**Procijenjeni datum korištenja**: prema ovom datumu, sistem planira dostupnost potrebnog materijala.  

## **4. Sažeci**

U Sažecima se prikazuju glavne informacije cijelog dokumenta.

### 4.1 Konačni popusti artikala 

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupni iznos dokumenta.
Popusti uneseni u ovoj sekciji se izračunavaju i primjenjuju na svaki artikl u dokumentu, u kartici *Artikli > kartica Popusti/Liste*.

**Vrsta/Opis popusta**: omogućuje odabir vrste popusta (predefinirane u *Vrstama popusta*), dodjeljujući vrsti prioritet primjene popusta i određuje se primjenjuje li se popust na osnovicu ili se kaskadno primjenjuje u odnosu na prethodno primijenjene popuste;    
**Prioritet**: određuje prioritet primjene popusta; sortiranje se vrši uzlazno;  
**Kaskada/Iznos**: definira koristi li se za izračun popusta porijeklo iznosa (cijena * količina) - (već izračunati popusti) ili (cijena * količina);  
**Vrijednost**: numerička vrijednost završnog popusta koji se primjenjuje.


### 4.2 Troškovi

Prikazani su troškovi uneseni u evidenciju kontakta, u kartici *Troškovi/Popusti*.
Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrste troška (predefinirane u tablici *Vrste troškova*), dodjeljujući vrsti postotak troška koji se primjenjuje;  
**Iznos troška**: prikazuje vrijednost troška izraženu u valuti dokumenta;   
**PDV**: označava stopu PDV-a koja se primjenjuje na unesene troškove;  
**Postotak/Iznos**: označava hoće li se troškovi izračunati kao postotak ili unaprijed određeni novčani iznos. Odabirom Iznos, iznos troška treba unijeti u odgovarajuće polje;  
**Postotak**: numerička vrijednost postotka troška.  

### 4.3 Ukupno - dokument

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;  
**Zaduženje**: predstavlja iznos eventualne akontacije primljene za dokument;    
**Poklonjeni iznos**: predstavlja iznos darovanih artikala unesenih u kartici *Artikli*;  
**Ukupni primijenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez završnih popusta;    
**Neto iznos artikala**: *Iznos stavki bez popusta * – *Ukupno primijenjeni popusti*;    
**Konačni popusti artikala**: predstavlja vrijednost završnih popusta izraženih u postocima na bruto iznos artikala;  
**Neto iznos završnih popusta**: *Neto iznos artikala* - *Konačni popusti artikala*;  
**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u tablicu *Troškovi*;  
**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u tablicu *Troškovi*;   
**Oporezivi iznos**: *Neto iznos artikala* – *Ukupno primijenjeni popusti* + *Troškovi naplate* + *Trošak ovjere*;  
**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;  
**Ukupno**: *Osnovica* + *PDV*.
