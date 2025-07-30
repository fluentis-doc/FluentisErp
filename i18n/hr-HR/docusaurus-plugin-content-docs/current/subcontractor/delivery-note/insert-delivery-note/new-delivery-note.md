---
title: Nova otpremnica 
sidebar_position: 1
---

Obrazac se otvara putem puta  **Podizvođač > Narudžbe > Novi nalog podizvođača** ili putem gumba **Novo** unutar obrasca [Pretraga naloga Podizvođača. ](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## **1. Datum**

Aplikacija zahtijeva unos  **Dobavljača** (Izvođača) koji je primatelj Otpremnice, koristeći odgovarajuću pomoćnu opciju računa koja se nalazi u zaglavlju Otpremnice. Automatski će se predložiti: trenutna: **Godina**, **Broj**, **Datum** i **Tip otpremnice** (predložen identično kao što je uneseno u *Parametre Podizvođača*), a korisnik ih može izmijeniti po potrebi.

## **2. Zaglavlje**

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručni](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili koristiti [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection). Ovisno o podacima unesenima u kartici dobavljača, aplikacija *automatski* popunjava polja.

### 2.1 Podaci o dobavljaču

Unosom **Dobavljača** automatski se *predlažu* svi specifični podaci iz kartice **Zaglavlje**, prema prethodno unesenim podacima u [Šifarnik dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) i u sljedećim *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [interval valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Opcionalni podaci zaglavlja 

**Stanje otpremnice**: pomoću ova dva znaka označava se stanje otpremnice, što može biti označeno kao ispisano (nakon što je fizički ispis izvješća otpremnice dostave pokrenut) i preuzeto (nakon što je sama otpremnica preuzeta iz skladišta). Ako otpremnica nije isprintana, nije moguće preuzeti;  

**Naša/vaša referenca**: nakon što se postupak [Izvršenje iz narudžbe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders),završi, također se predlaže informacija koja se nalazi u istoimenom polju narudžbe;    

**Projekt**: koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom.   

#### Specifični gumbi

> [Očekivane isporuke](/docs/subcontractor/delivery-note/insert-delivery-note/new-delivery-note): pokreće postupak stvaranja otpremnice iz narudžbe. Aktivira se unosom dobavljača i vrste otpremnice. Narudžba koja se mora izvršiti mora imati postavljenu oznaku *Ispisano* i popunjeno polje *Datum potvrde narudžbe*;    
> **Automatsko preuzimanje**: koristi se za automatsko preuzimanje skladišta odabranih artikala. Ovo polje će biti editabilno samo nakon što je polje *Ispisano* aktivirano.  

### 2.3 Plaćanja

**Načini plaćanja** automatski se preuzimaju u *Šifarniku dobavljača > kartice Plaćanja* i mogu se izmijeniti/izbrisati od strane korisnika.

Ako je na **Način plaćanja** povezan financijski popust, iznos popusta se uzima u obzir samo za računovodstvene svrhe, odnosno za rokove plaćanja dokumenta, a ne za ukupne Otpremnice.

Ako dokument potječe iz narudžbe, vrste plaćanja mogu se preuzeti ili iz prvog dokumenta ili iz Šifarnika dobavljača.

#### Specifični gumbi

> **Dodaj/Ukloni plaćanja**: koriste se za dodavanje/brisanje odabranih redaka plaćanja.  

#### 2.4 Popusti  

Ponuđeni su samo predefinirani popusti preuzeti u *Šifarniku dobavljača >  kartica Popusti* i mogu ih korisnici mijenjati/brisati.  

Popusti navedeni u zaglavlju dokumenta prikazuju se u svakom novom retku stavke dodanom u dokument.

Ako nakon unosa stavki u dokumentu dodate novi popust u zaglavlju, on se ne kopira u već unesene retke stavki.

*Poseban gumb*  

**Izbriši popuste**: koristi se za brisanje odabranih redaka popusta.

### 2.5 Agenti

Ovdje se navodi kod agenta i njegova provizija za svaku stavku artikla. Predloženi su kod i postotak koji su definirani u *Šifarnik dobavljača > kartica Agenti*.  

Ako provizija nije povezana s dobavljačem u njegovoj kartici, ipak se mora unijeti kod agenta ali s provizijom NULL. Ako bi provizija bila 0, to bi značilo da je agent povezan, ali ne prima proviziju.

Ovaj odjeljak bit će ponovno prikazan za svaki artikal u pripadajućoj kartici *Agenti*.  

#### Specifični gumb

**Obriši agente**: omogućuje brisanje odabranih redaka agenata.

## **Procedure testata:**

### *Izvršenje iz narudžbe**

U zaglavlju otpremnice, pritiskom na gumb **Predviđene isporuke** otvorit će se obrazac gdje je moguće filtrirati narudžbe povezane s kupcem dokumenta.

Pomoću ove procedure moguće je kreirati otpremnicu iz izvršenja odgovarajuće narudžbe. Zatim je moguće unijeti artikle u otpremnicu, izvršavajući cijelu narudžbu ili njezin dio, bilo da se radi o cijeloj narudžbi ili pojedinačnoj stavci.

Za korištenje ove procedure potrebno je ispuniti sljedeće početne uvjete:

 -  dobavljač narudžbi mora biti isti kao onaj u otpremnici;  
 -  narudžba koju želite izvršiti mora imati označenu opciju *Ispisano*;
 -  vrste dokumenata moraju biti kompatibilne.

#### Postupak:

Filtri za dobavljača i valutu automatski će se prenijeti na temelju odabranog dobavljača u otpremnici.   

Nakon što postavite sve željene *Filtere* klikom na gumb *Pretraživanje*, u mreži će se prikazati jedan redak za svaku narudžbu koja je ispisana i još nije izvršena ili je djelomično izvršena.

:::note UPOZORENJE
Procedura preuzima sve podatke prisutne u narudžbi, što znači da će se primijeniti uvjeti iz narudžbe, čak i ako su se u međuvremenu promijenili.
:::

U mreži rezultata korisnik zatim ima mogućnost:

 1. odabrati *cijelu narudžbu*. Da biste to učinili, jednostavno označite zastavicu na početku reda narudžbe.  
 2. odabrati samo *neke* od predloženih *artikala*. Da biste to učinili, označite zastavicu na početku reda artikla.  
 3. odabrati samo *neke artikle*, ali samo za *određenu količinu*. U tom slučaju morate izmijeniti količinu za izvršenje.  

Za dovršetak procedure potrebno je kliknuti na gumb **Prijenos**, koji će preuzeti sve podatke iz narudžbe i prenijeti ih u otpremnicu.  

#### Specifični gumbi*:

> **Traži** omogućuje primjenu pretraživačkih filtera na cijelu bazu podataka narudžbi koje još nisu izvršene ili su djelomično izvršene.   
> **Prijenos** omogućuje prijenos odabranih artikala u mrežu kartice Isporuke u otpremnici za vanjsko uslužno računovodstvo.    
> **Proširi** omogućuje proširenje cijelog stabla narudžbi u donjoj mreži, kako bi se prikazali artikli sadržani u njima.    
> **Sažmi** omogućuje sažimanje prikaza redaka artikala, prikazujući samo redove narudžbi.    
> **Odaberi sve** omogućuje odabir svih artikala s popisa.   

## **3. Dostava**

Na ovoj kartici se unose materijali koji trebaju biti dostavljeni dobavljaču. Oni se mogu automatski unijeti putem postupka *Izvršenje iz narudžbe* ili ručno od strane korisnika.  


#### Specifični gumbi:
> **Umetni materijal**: pokreće postupak dodavanja novog materijala u mreži članaka na kartici 'Dostava'.    
> **Otkaži materijal**: pokreće postupak brisanja materijala iz mreže članaka na kartici 'Dostava'.   

#### Specifična polja:

**Broj i godina narudžbenice Podizvođača**: prikazuju broj i godinu narudžbenice Podizvođača iz koje je preuzeta stavka artikla. Ako je stavka unesena ručno, ova će se kolona prikazati prazna;  

**Procijenjeni datum dostave**: ovo je datum koji označava predviđeni datum dostave materijala, preuzet iz kartice  *Materijali za dostavu* narudžbenice konta rada iz koje je generiran stavka artikla u Otpremnici;  

**Očekivani povrat**: ovo je datum koji označava predviđeni datum povrata gotovog proizvoda koji će biti izrađen od strane dobavljača koristeći materijale koji su dostavljeni, preuzet iz kartice *Artikli za proizvodnju* narudžbenice konta rada iz koje je generirana stavka artikla u otpremnici.;

**Broj linije**: predstavlja jednostavan progresivni broj reda dokumenta, koji može uređivati korisnik;

**JM**: predstavlja upravljačku mjeru jedinice predmeta u isporuci;  

**Faza/Podfaza**: prikazuju kod faze i kod podfaze proizvodne faze narudžbenice proizvodnje na koju je eventualno vezan predmet; to se događa ako je narudžbenica podizvođača iz koje je stvoren ovaj redak otpremnice generirana iz vanjske faze narudžbenice proizvodnje;  

**Količina**: predstavlja količinu koju je odlučeno dostaviti Podizvođaču i koju korisnik može urediti;  

**Skladište**: predstavlja kod skladišta iz kojeg se preuzima roba za dostavu Podizvođaču.Kod skladišta se predlaže isti kao u retku 'Materijali za isporuku' u kartici narudžbe konta rada iz koje je generiran redak otpremnica, ali ga korisnik može uređivati. Ako je aktivirana zastavica u Parametrima Podizvođača pod nazivom 'Uvažavaj skladišta prema vrsti otpremnice', predloženo skladište bit će ono postavljeno u tablici 'Vrste dostavnih naljepnica' u odgovarajućem stupcu 'Skladište';

**Predložak**: predstavlja šifru predloška skladišta koja će se koristiti za povlačenje iz skladišta iz kojeg je potrebno izvaditi robu za isporuku dobavljaču. Šifra predloška skladišta predložena je ista kao ona postavljena u retku kartice 'Materijali za dostavu' narudžbenice konta rada iz koje je generiran redak otpremnice, ali je korisnik može urediti. Ako je, međutim, aktivna oznaka, prisutna u parametrima konta rada, nazvana 'Uvažavaj skladišta prema vrsti otpremnice', predloženi uzrok bit će onaj postavljen u tablici 'Vrste prodajnih otpremnica', u odgovarajućem stupcu 'Predložak';

**Cijena**: predstavlja jediničnu cijenu artikla. Ovo je stupac koji korisnik može urediti i nije obavezan. Obično se koristi kada otpremnica mora proći carinu;  

**PDV**: predstavlja PDV kod, ili ga automatski predlaže procedura koja ga preuzima iz registracije treće strane ili iz registracije artikla prisutnog u retku, ovisno o slučaju. Kombinirani okvir povlači iz tablice 'Stope PDV-a' koja se nalazi u 'Općim postavkama';  

**Tip prometa nabave**: predstavlja kod Tip prometa ili ga automatski predlaže procedura koja ga preuzima iz registracije artikla prisutnog u retku. Kombinirani okvir povlači iz tablice 'Vrsta fakturiranih nabava' koja se nalazi u 'Tablicama područja nabave';       

**Težine**: prikazuju se ukupna neto i bruto Težina redaka artikala. Prikazuju se težine iz šifarnika artikla pomnožene s količinom u retku.  

### 3.1 Istovar  

U ovoj kartici daje se mogućnost postavljanja, za odabrani redak u mreži, serija za izdavanje iz skladišta s količinom artikla preuzetom za slanje trećoj strani, u slučaju da se radi o više različitih serija preuzetih s istim redkom otpremnice.  

Mreža serija omogućuje korisniku preuzimanje serije koristeći posebnu funkciju 'Pomoć za serije', koja filtrira dostupne serije odabranog artikla u gornjoj mreži. Informacije prikazane u mreži serija uključuju vrstu koda serije, kod serije, seriju dobavljača, vrstu serije, datum početka i datum isteka, količinu serije, lokaciju, podatke o dobavljaču serije (račun, podračun i poslovno ime). Naravno, zbroj količina različitih serija mora točno odgovarati isporučenoj količini iz retka artikla.  

### 3.2 Datum materijala  

U ovoj kartici prikazane su sljedeće informacije vezane uz odabrani redak u mreži:  

**Klasa, kod, opis i varijanta artikla, količina za isporuku, jedinica mjere, Skladište, Predložak, Nalog podizvođača**: to su niz informacija koje su jednostavno preuzete iz odabranog retka otpremnice;  

**Projekt**: predstavlja prodajni zadatak vezan uz redak otpremnice. Obično se poziva prodajni zadatak unesen u redak naloga za rad po narudžbi iz kojeg je generiran redak otpremnice;  

**Napomene**: u ovom polju korisnik može unijeti bilješku vezanu uz odabrani redak.  

## **4. Sažeci**

U Sažecima su prikazane glavne informacije cijelog dokumenta.

### 4.1 Konačni popusti

Mogu se unijeti samo popusti izraženi u postocima, koji se primjenjuju na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji izračunavaju se i prikazuju na svakom artiklu dokumenta, na *kartici Artikli > kartica Popusti/Cjenici*.

> **Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (prethodno definiranih u Vrstama popusta), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući je li popust izračunat na osnovici ili se primjenjuje kaskadno u odnosu na prethodno primijenjene popuste;       
> **Prioritet**: predstavlja redoslijed primjene popusta; sortiranje se vrši uzlazno;    
> **Kaskada/Iznos**: određuje koristi li se za izračun popusta osnovica (cijena * količina) - (već izračunati popusti) ili (cijena * količina);     
> **Vrijednost**: numerička vrijednost završnog popusta koji treba primijeniti.  


### 4.2 Konačni troškovi/popusti/doplate

Ovdje se prikazuju troškovi uneseni u Šifarnik  kontakata, u kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

> **Vrsta/Opis**: omogućuje odabir vrste troška (prethodno definirane u tablici Tipovi troškova), dodjeljujući svakoj vrsti postotak troška za primjenu;   
> **Iznos troška**: označava vrijednost troška izraženu u valuti dokumenta;    
> **PDV**: označava stopu PDV-a koja se primjenjuje na unesene troškove;    
> **Postotak/Vrijednost**: označava hoće li se troškovi izračunati kao postotak ili kao unaprijed određeni novčani iznos. Odabirom Iznos troška treba unijeti u odgovarajuće polje;    
> **Postotak**: numerička vrijednost postotka troška.  


### 4.3 Ostala polja

**Volumen**: prikazuje kumulativni volumen koji proizlazi iz zbroja volumena artikala (vrijednost se preuzima iz kartice *Šifarnik artikla > kartica Težine/Dimenzije*), kada se jedinica mjere volumena artikala podudara s onom navedenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj podatak popunjen;    
**Neto težina**: prikazuje kumulativnu neto težinu koja proizlazi iz zbroja neto težina artikala (vrijednost se preuzima iz kartice *Šifarnik artikla > kartica Težine/Dimenzije*), kada se jedinica mjere težine artikala podudara s onom navedenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj podatak popunjen;    
**Bruto težina**: prikazuje kumulativnu bruto težinu koja proizlazi iz zbroja bruto težina artikala (vrijednost se preuzima iz kartice *Šifarnik artikla > kartica Težine/Dimenzije*), kada se jedinica mjere težine artikala podudara s onom navedenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj podatak popunjen;    
**Paketi**: prikazuje broj komada na temelju podataka unesenih u kartici *Šifarnik artikla > kartica Težine/Dimenzije*, u poljima *Artikli prisutni u jednom pakiranju* ili *Paketi za oblikovanje*. Razmatraju se samo artikli koji imaju ovaj podatak popunjen.   

### 4.3 Transport

Automatski se predlaže *Vrsta prijevoza prema postavkama* u  *Šifarniku kontakta > kartica  [Isporuka](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (radio button: Pošiljatelj/Primatelj/Prijevoznik), ali podaci se mogu izmijeniti.  

### 4.4 Sveukupni Dokument

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;
**Zaduženje**: predstavlja iznos eventualnog avansa primljenog za dokument;
**Poklonjeni iznos**: predstavlja iznos artikala koji su poklonjeni, uneseni u kartici *Artikli*;  
**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez završnih popusta;  
**Neto iznos artikala**: *Bruto iznos artikala* – *Ukupni primijenjeni popusti*;  
**Ukupno konačnih popusta**: predstavlja vrijednost završnih popusta izraženih u postocima na bruto iznos artikala;    
**Neto iznos završnih popusta**: *Neto iznos artikala* - *Ukupni završni popusti*;  
**Naknade naplate**: predstavlja zbroj naknada za naplatu unesenih u mreži *Naknade*;    
**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u mrežu *Naknade*;   
**Oporezivo**: *Neto iznos artikala* – *Završni popusti* + *Ukupni nepotvrđeni troškovi* + *Ukupni potvrđeni troškovi*;  
**Porezi**: predstavlja zbroj vrijednosti u pregledima PDV-a;  
**Ukupno**: *Osnovica + PDV*.