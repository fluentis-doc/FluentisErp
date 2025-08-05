---
title: Novi nalog podizvođača 
sidebar_position: 1
---

Pomoću ovog obrasca moguće je ručno kreirati novu narudžbu za rad na temelju ugovora o radu ili izmijeniti već postojeće narudžbe.

Obrazac se otvara putem puta **Podizvođač > Nalog Podizvođača > Novi nalog Podizvođača** ili putem gumba **Novo** koji se nalazi u obrascu [Pretraga narudžbi Podizvođača](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/search-subcontractor-orders).

## **1. Dati obbligatori**

Aplikacija zahtijeva unos **Dobavljača** (izvršitelja) koji je nositelj narudžbe, koristeći odgovarajuću pomoć za račune. Automatski će biti predloženi: trenutna **Godina**, **Broj**, **Datum** i **Tip dokumenta** (predložena jednaka onoj unesenoj u *Parametre Podizvođača*), a korisnik ih može izmijeniti.

## **2. Zaglavlje**

Nakon što odabere obavezne podatke u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoć polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, na temelju podataka unesenih u evidenciju izvršitelja, aplikacija *automatski* popunjava polja.

### 2.1 Dati Dobavljač

Kada se unese **Dobavljač** automatski se *predlažu* svi specifični podaci na kartici **Zaglavlje**, prema podacima postavljenim ranije u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima adrese i u sljedećim *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Isporuka**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov  [vremenski okvir važenja](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Plaćanja

**Mogućnost plaćanja** automatski se prenose  *Šifarnik izvršitelja > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.  

#### Poseban gumb

> **Izbriši plaćanja**:  koristi se za brisanje odabranih redaka plaćanja.  

### 2.3 Popusti

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnnik izvršitelja > kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.  

Popusti koji su ponuđeni u zaglavlju dokumenta primjenjuju se na svaki novi redak artikla koji se unese u dokument.

Ako nakon što su uneseni retci artikla dodate novi popust u zaglavlje, on se neće automatski primijeniti na već unesene retke artikla.

*Poseban gumb*  

> **Izbriši popuste**: koristi se za brisanje odabranih redaka popusta.

## **3. Artikli**

Obrazac se sastoji od mreže u koju korisnik može ručno unijeti proizvode koji su potrebni izvršitelju. Mogu se unijeti kodirani artikli i napomene.

Obrazac već može biti popunjena ako narudžba dolazi iz *Općeg rasporeda* ili *MRP obrade*, ali korisnik i dalje može izmijeniti ili dodati dodatne materijale na listu komponenti planirane narudžbe. Važno je napomenuti da ako je planirana narudžba za kupovinu, kartica Materijali bit će neaktivna.

### 3.1 Podaci o artiklu

Na ovoj kartici prikazuju se informacije koje se odnose na odabranu liniju u mreži artikala, uključujući:  

**Radni tijek**: ovo polje odražava oznaku prisutnu u MRP parametrima artikla nazvanom *Radni tijek*;  
**Količina za proizvesti**: količina početne narudžbe komunicirana izvršitelju;  
**Već vraćena količina**: ukupna količina primljena i obrađena;  
**Očekivani datum povrata**: datum dolaska obrađenih proizvoda;  
**Radna bilješka**: upravlja ih korisnik. Može biti parametrizirano i može sadržavati osjetljive podatke sustava, kao što je opis faze obrade koja je generirala potrebu za obradom;    
**Faza**: dvoklikom se otvara pomoć za faze obrade, iz koje se može odabrati odgovarajuća faza i podfaza te dodijeliti odabrani materijal određenoj fazi obrade artikla;    
**Skladište**: skladište odredišta za obrađeni proizvod;  
**Težine**: prikazuju se ukupna neto i bruto težina linija artikala. Prikazuju se težine artikla iz evidencije pomnožene s količinom linije.  

## **3. Materijali**

Obrazac se sastoji od dvije mreže koje prikazuju materijale koji se šalju izvršitelju na obradu i materijale koji će se koristiti po povratku obrađenog proizvoda. Mogu se unijeti kodirani artikli, nekodirani artikli i napomene.

Operater može upravljati materijalima koji se šalju i koriste, u tom slučaju potrebno je unijeti količinu, eventualnu cijenu obrade, predviđeni datum povratka i datum upotrebe materijala. Ovi podaci već su popunjeni ako narudžba dolazi iz *Općeg rasporeda* ili *MRP obrade*.

### 3.1 Materijali za dostavu

**Šifra artikla**: označava materijal koji treba dostaviti na obradu;

:::note NAPOMENA
U slučaju da je narudžba rad na temelju ugovora generirana iz izdavanja *Planirane narudžbe* rad na temelju ugovora ili *Planirane proizvodne narudžbe* s jednim ili više vanjskih faza, materijali za dostavu neće biti prikazani ako: ne postoje [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) za artikl, ili zastavica *Razmatra se u podizvođaču* nije omogućena u  [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), ili je *Tip izuzimanja* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) *automatska*, ili je *Tip izuzimanja* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) s *popisom* i zastavica WIP nije omogućena.
:::


### 3.2 Materijali za upotrebu

**Šifra artikla**: označava materijal koji će se koristiti nakon povratka obrađenog proizvoda;    
**Jedinična upotreba**: količina potrebna za svaku jedinicu obrađenog proizvoda, u slučaju automatskog upravljanja rasporedom sklopova; ova informacija je automatski popunjena od strane sistema;    
**Ukupna upotreba**: ukupna količina potrebna za potpunu obradu, u slučaju automatskog upravljanja rasporedom sklopova; ova informacija je automatski popunjena od strane sistema;    
**% otpad**: dodatna količina koja se koristi kao otpad;    
**Planirani datum upotrebe**: prema ovom datumu, sistem planira dostupnost potrebnog materijala.  

## **4. Sažeci**

U Sažecima se prikazuju glavne informacije cijelog dokumenta.

### 3.1 Konačni popusti artikala 

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupni iznos dokumenta.

Popusti uneseni u ovoj sekciji se izračunavaju i primjenjuju na svaki artikal u dokumentu, u kartici *Artikli > kartica Popusti/Liste*.

**Vrsta/Opis popusta**: omogućuje odabir vrste popusta (predefinirane u *Vrstama popusta*), dodjeljujući vrsti prioritet primjene popusta i određuje se primjenjuje li se popust na osnovicu ili se kaskadno primjenjuje u odnosu na prethodno primijenjene popuste;    
**Prioritet**: određuje prioritet primjene popusta; sortiranje se vrši uzlazno;  
**Višefazni porez/Porijeklo iznosa**: definira koristi li se za izračun popusta porijeklo iznosa (cijena * količina) - (već izračunati popusti) ili (cijena * količina);  
**Vrijednost**: numerička vrijednost završnog popusta koji se primjenjuje.


### 3.2 Troškovi

Prikazani su troškovi uneseni u evidenciju kontakta, u kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrste troška (predefinirane u tablici *Vrste troškova*), dodjeljujući vrsti postotak troška koji se primjenjuje;  
**Iznos troška**: prikazuje vrijednost troška izraženu u valuti dokumenta;   
**PDV**: označava stopu PDV-a koja se primjenjuje na unesene troškove;  
**Postotak/Iznos**: označava hoće li se troškovi izračunati kao postotak ili unaprijed određeni novčani iznos. Odabirom Iznos, iznos troška treba unijeti u odgovarajuće polje;  
**Postotak**: numerička vrijednost postotka troška.  

### 3.3 Ukupnosti dokumenta

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