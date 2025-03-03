---
title: Stvori POS – gornji dio
sidebar_position: 1
---

Obrazac **Stvori POS** otvara se putem putanje **Prodaja > POS > Stvori POS** ili putem gumba **Novo** koji se nalazi u obrascu pretraživanja *POS-a*.

U obrascu za unos automatski se nude trenutačni **Datum** i **Godina**, ali ih korisnik može promijeniti.

## **1. Dati obbligatori**

Za nastavak stvaranja računa prodaje, korisnik mora unijeti **obavezna** polja:

- **Tip POS-a** predefiniran u *Postavke > Tablice > Prodaja > Tipovi POS-a*.

- **Broj** svakom dokumentu dodjeljuje se broj prema numeraciji koju je odredio korisnik u tablici [Numeracija POS-a](/docs/configurations/tables/fluentis-numerations) i prema vrsti dokumenta koja sadrži numeraciju.

- **Račun**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili[izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) upisujući podatke.


## 1.1 Ukupni iznosi

U desnom dijelu obrasca nalaze se ukupni iznosi dokumenta:

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;  

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;

**Poklonjeni iznos**: predstavlja iznos poklonjenih artikala unesenih u kartici Artikli;    

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez konačnih popusta.

**Neto iznos artikala**: Iznos stavki bez popusta – Ukupni primjenjeni rabati;   

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala; 

**Neto iznos konačnih rabata**: Neto iznos artikala - Ukupno konačnih rabata;  

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli Tipa troškovi;  

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mrežu Troškovi;    

**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u mrežu Troškovi;  

**Trošak dokumentacije**: predstavlja vrijednost troškova unesenih u mrežu Troškovi;  

**Osnovica**: Neto iznos artikala - Konačni popusti + Ukupni nepodmireni troškovi + Ukupni dokumentirani troškovi;  

**Porez**: predstavlja zbroj vrijednosti u sažecima PDV-a;

**Ukupno**: Osnovica + PDV.


#### Posebni gumbi

> **Fiskalizacija**: dozvoljena  
> **Razduženje prodajnog mjesta**: omogućuje pražnjenje POS-a, ako je za svaki artikl unesen skladište i uzrok.  

Obrazac sadrži niz kartica.

## **2. Zaglavlje**

Nakon odabira i unosa obveznih podataka u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili pomoću [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)

Unoseći **Račun** automatski se *nude* svi specifični podaci iz kartice **Zaglavlje**, prema podacima postavljenim ranije u[Šifarniku kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Valuta datuma](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [interval valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date)

#### Ostala polja 

**Pos status**: u fazi kreiranja, POS nema niti jedan aktivni oznaku. Ova sekcija uključuje polja:  
> **Ispisano** aktivira se kada se izvrši ispis računa.   
> **Učitaj** označava da je POS otpremljen iz skladišta ručno ili putem automatskog otpremanja.    
> **Knjiženo**: automatski je označeno kada je POS knjižen.  
> **Opozvano**: aktivirana oznaka omogućuje poništenje POS-a.  

:::note BILJEŠKE
Kartice se mogu ukloniti pomoću postupka poništavanja operacije.
:::

**Naša referenca/vaša referenca**: u ovim poljima obično se navodi interna referenca i referenca klijenta za određeni POS.

**Početne bilješke**: Možete odabrati bilješke koje su prethodno unesene u tablicu s istim imenom koja se nalazi na putanji *Postavke  > Korisnički alati > Upravljanje šifriranim bilješkama*. Da biste to učinili, korisnik mora dvaput kliknuti na polje **Početne bilješke** kako bi otvorio *Pomoć za šifrirane bilješke* i odabrao podatke, ili desnom tipkom miša može otvoriti prozor kako bi specificirao vrlo dugu napomenu. Ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici* koja se nalazi na putanji *Dipendenti* koja se nalazi na putanji *Početna stranica > Zaposlenici*. 

**Projekt**: koristeći [pomoćno polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom. Ovo udruživanje funkcionira samo na razini zaglavlja artikla. 

### 2.1 Plaćanja

**Uvjeti plaćanja** automatski se preuzimaju iz *Podaci kupca> kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

#### Poseban gumb

> **Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja. 

### 2.3 Popusti

Nude se samo unaprijed definirani popusti preuzeti iz *Šifarnik klijenta> kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.
  
Popusti koji su ponuđeni u zaglavlju dokumenta reproduciraju se u svakom novom retku artikla unesenom u dokument.

Ako nakon unosa redaka artikla dodate novi popust u zaglavlje, to se neće replicirati u već unesenim redcima artikla.

#### Poseban gumb

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

### 2.3 Predstavnici

Pokazuje kod predstanika i njegovu proviziju za svaki redak artikla. Ponuđeni su kod i postotak definirani u *Šifarnik klijenta > kartica Predstavnici*.

Ako provizija nije povezana s klijentom u njegovoj kartici, agent ipak mora biti unesen, ali s nultom provizijom, jer ako bi bila s provizijom 0, značilo bi da je agent povezan, ali ne prima proviziju.

Ovaj se odjeljak ponovno nudi za svaki redak artikla u odgovarajućoj kartici *Predstavnici*.

#### Poseban gumb

> **Izbriši trgovačke predstavnike**: omogućuje brisanje odabranih predstavnika.

## **3 Artikli**

U ovoj se kartici unose svi artikli s pripadajućim podacima.

Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom radu obrazaca, obratite se na sljedeći link [ Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se mogu unositi [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste ispunili različite podatke ili koristiti gumb **Novo** koji se nalazi na gornjem izborniku.


### Obavezni podaci

**Broj linije**: ovo će se polje automatski popuniti progresivno prilikom unosa podataka u red.

**Tip linije** pruža mogućnost odabira artikala s različitim karakteristikama:
> **Artikl sa klasom**: to su artikli kodirani u anagrafici i mogu se knjižiti u analitičkom knjigovodstvu i registrirati u skladištu;     
> **Bilješka**: to je jednostavna napomena, ne utječe na knjigovodstvo i skladište;     
> **Gratis artikl**: ovaj tip retka označava da je artikl unesen u tom retku poklon, pa stoga nema troškova za kupca;

**Klasa/Kod/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će ponuditi sve relativne podatke unesene u šifarnik artikla.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz šifarnika. Ako artikl ima *Varijante*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: ponuđena je glavna M.J. artikla, ali korisnik može odabrati drugu mjernu jedinicu.

**Varijante**: ako odabrani artikl ima varijante, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati drugačiju cijenu od standardne postavljene. Prema tome, cijena artikla s varijantama može biti različita od cijene artikla bez varijanti. To može zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne U.M. i po zadanim postavkama ima vrijednost 1; može se unijeti ručno ili se može preuzeti iz razmatranog dokumenta za isporuku (npr. iz narudžbe dobavljača).

**Cijena s PDV-om**: predstavlja cijenu s PDV-om i mora biti unesena unaprijed u Registar artikla > kartica Troškovi i može biti različita za skladišta;

**PDV** i **Osnovica**: automatski se izračunavaju, preuzimajući vrijednosti iz cijene s PDV-om.

#### Posebni gumbi*  
> **Upravljanje pakiranjem**: otvara upravljanje pakiranjem koje će se koristiti u dokumentu kupnje.
Gumb postaje aktivan ako je dokument spremljen, ali nije učitan.
Klikom na ovaj gumb otvara se odgovarajući obrazac gdje možete: unesite količinu, odaberite redak i izvršite prijenos odabranog pakiranja na retke artikla klikom na gumb **Izvrši**. U ovom obrascu prikazani su artikli koji su uneseni kao pakiranje i koji su prisutni u tablici **Pakiranja**. 
 
> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla prema novom cjeniku (ako je unesen novi cjenik).
Klikom na padajući izbornik pored gumba, moći ćete stvoriti novi cjenik ako ga još nema.

### 3.1 Popusti/Cjenici

**Popusti**: ponuđeni su svi popusti povezani s artiklom, svaki s vlastitim izračunom i dodjelom. Popusti se mogu preuzeti: iz podataka o kupcu, iz rješenja plaćanja dodijeljenih dokumentu, iz cjenika iz asocijacije cjenika-kupac. Svi predloženi podaci mogu se mijenjati.

**Vrijednosti cjenika**: ponuđen je cjenik iz kojeg je artikl preuzet, s datumom početka/završetka važenja i s posebnim uvjetima prodaje (npr. razrede popusta) dodijeljenim artiklu u cjeniku.

#### Posebni gumb*
> **Izbriši rabat**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem izborniku.

### 3.2 Detalj artikla 

Unutar ove kartice, možete pronaći/dodati dodatne informacije o artiklu.

**Artikl**: prikazuje informacije o odabranom artiklu iz tablice artikala.

**PDV**: prvenstveno koristi PDV unesen u polje PDV u Šifarnik kontakata. Ako to nije dostupno, koristi se vrijednost iz Šifarnika artikala, ali korisnik ima mogućnost unosa druge vrijednosti. Ovo polje je obavezno.

**Projekt**: projekt povezan s dokumentom ili može biti dodijeljen uz pomoć pomoći polja;

**Marka**: prikazuje marku artikla, preuzetu iz šifarnika ili cjenika artikla;

**Promet prodaje**: prikazuje prodaju artikla, preuzetu iz *Šifarnik artikli > kartica Općenito*.

Ako ovo nije dostupno, neće biti prikazani nikakvi podaci, ali tijekom knjiženja uzet će se u obzir vrijednost unesena u polje  *Trošak/Profit* u zadanim *Šifarnik Kontakata > Računovodstvo > kartica Administracija* 

**Skladište i predložak**: automatski se prikazuju skladište i uzrok koji će se automatski pojaviti prilikom pražnjenja artikala iz skladišta. Podaci se preuzimaju iz tablice *Tipovi POS-a*.

**Napomene**: omogućuje dodavanje bilješki za svaki artikl.

## Trgovački predstavnici

**Predstavnik**: predstavnik povezan s odabranim artiklom i pripadajuća provizija; podaci odgovaraju onima koji su dostupni u *Zaglavlju > kartici Predstavnici*. Postotak se može promijeniti.

#### Poseban gumb*
> **Obriši predstavnika**: omogućuje brisanje povezanog predstavnika s odabranim artiklom.


### 3.3 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na koje se raspoređuju vrijednosti artikala.

Ovi podaci mogu biti uneseni ručno ili *automatski* (ako su troškovni/profitni centri unaprijed uneseni u *kontakte*, *šifarnik artikala* ili u *plan konta*).

## **4. Sažetak dokumenta**

### 4.1 Konačni popusti artikala 

Mogu se unijeti samo popusti izraženi u postocima, koji će se primijeniti na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji se izračunavaju i prikazuju za svaki artikl u dokumentu, u kartici *Artikli > kartici Popusti/Listini*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definiranih u **Vrstama popusta**), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući je li popust izračunat na osnovu osnovice ili kaskadno u odnosu na prethodno primijenjene popuste.  
**Prioritet**: označava prioritet primjene popusta; sortiranje se provodi uzlazno.  
**Kaskada/Iznos**: definira koristi li se osnovica za izračun popusta kao (cijena x količina) - (već izračunati popusti) ili (cijena x količina).  
**Vrijednost**: numerička vrijednost konačnog popusta koji se primjenjuje.  


### 4.2 Naknade/Rabati

Ponuđeni su troškovi uneseni u kontaktima, u kartici *Naknade/Rabati*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrsta troškova (unaprijed definiranih u **Vrstama troškova**), dodjeljujući svakoj vrsti postotak troška koji se primjenjuje.

**Postotak/Vrijednost**: polje koje označava je li troškove potrebno izračunati kao postotak ili kao unaprijed određenu novčanu vrijednost.

**Postotak**: numerička vrijednost postotka troška.


### 4.3 Sažeci PDV-a

Prikazuje se pregled PDV-a dokumenta za svaku PDV stopu.

### 4.4 Pregled dospjeća plaćanja

Prikazuje se pregled rokova dospijeća dokumenta za svaki tip i način plaćanja.

**Broj**: progresivna vrijednost retka.  

**Plaćanje**: označava alfanumerički kod *Tipa plaćanja* preuzetog iz *Zaglavlja dokumenta > kartice Plaćanja*.

**Iznos**: iznos obračunatog dospijeća. Može se ručno izmijeniti, u kojem slučaju se automatski aktivira sljedeća opcija *Ručna izmjena*. (Automatski se izvršavaju kontrole i upozorenja o usklađenosti između iznosa dospijeća i ukupnog iznosa računa)

**Datum dospijeća**: datum obračunatog dospijeća. Može se ručno izmijeniti, u kojem slučaju se automatski aktivira sljedeća opcija *Ručna izmjena*.

**Troškovi naplate**: polje za unos obračunatih troškova naplate.

**PDV**: koji se primjenjuje na troškove naplate (može se postaviti i ručno)

**Opis plaćanja**: omogućuje izravni unos knjiženja plaćanja / naplate. Važno je obratiti pažnju na predložak opisa plaćanja jer će koristiti račune čak i bez podračuna, zbog čega postoji sljedeće polje.

**Kontni podračun kupca/dobavljača**: račun koji koristi za naplatu/plaćanje (na primjer, blagajna ili banka) dospijeće, pri čemu se prebrisuje račun naveden u knjiženju plaćanja (ili naplate)

**Primka broj**: eventualni broj primitka za primljene novce

**Jed.**: aktivira knjiženje zatvaranja dospijeća u automatskom zapisu

**Vrsta popusta**: vrsta financijskog popusta

**Dospjela vrijednost**: vrijednost financijskog popusta po primitku

**Detaljne deklaracije**: Odnosi se na izjavu namjere. PDV primijenjen na troškove naplate može biti previsok, pa je stoga potrebno unijeti odgovarajuću izjavu o namjeri (kao i za redove artikla i troškove)


**ULAZNI RAČUNI**

**Znak**: samo dospijeća koja imaju ovu oznaku zatim se upravljaju plaćanjem s knjiženjem i postavljenim računom

**Modeli referentnih plaćanja**: model izrade koda plaćanja. U nekim stranim lokalizacijama svako dospijeće na računu ima kod dodijeljen od strane onoga tko fakturira: ovaj kod strukturiran je prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), kako bi se kod mogao izgraditi algoritmom.

**Kodovi modela plaćanja**: ovo je kod (strukturiran kao prethodni model) koji se mora navesti u stavci, a zatim u plaćanjima koje banka šalje, kako bi obavijestila primatelja koji je rok dospijeća plaćen (i time automatizirati uvoz iz bankovnih transakcija s zatvaranjem stavke). Odatle se popunjava unutar stavke i u SEPA datoteci.

**Rok za prethodnu uplatu**: ovo je polje predviđeno u obrascu računa Sdi, rok za primjenu financijskog popusta.