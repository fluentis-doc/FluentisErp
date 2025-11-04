---
title: Novi POS  
sidebar_position: 2
---

Forma **Kreiraj POS** otvara se putem putanje **Prodaja > POS > Kreiraj POS** ili pomoću tipke **Novo** koja se nalazi u formi za pretragu *POS*-a.  

## **1. Obavezni podaci**
U formi za unos automatski se predlažu **Datum** i **Godina** trenutni, ali se mogu promijeniti.  

Za nastavak kreiranja prodajne fakture korisnik mora unijeti sljedeća obavezna polja:  

- **Vrsta POS-a**, unaprijed definirana u *Konfiguracija > Tablice > Prodaja > Vrste POS-a*.  

- **Broj** — svakom se dokumentu automatski dodjeljuje broj prema numeraciji definiranoj u tablici [Numeracija POS-a](/docs/configurations/tables/fluentis-numerations)  i tipu dokumenta povezanom s njom.  

- **Konto**, koristeći [pomoć polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  ili unosom [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) podataka.- 

:::danger[Pažnja]
Ovo polje nije relevantno za upravljanje [**Kontabilizacijom POS-a**](/docs/sales/pos/pos-accounting). Računovodstvena stavka povezana s kontabilizacijom POS-a mora imati definiran **FIKSNI** račun kupca s detaljnim **subkontom** (npr. račun “Kupac gotovinski promet”). Tip iznosa u računovodstvenoj stavci za subkonto kupaca bit će postavljen kao *Ukupan dokument / knjiženje*.
:::

- **Kartica subjekta**: alternativno polje prethodnom *Kontu* koje se koristi za unos *kontakta* koji nije povezan ni s jednim subkontom.

### 1.1 Ukupni iznosi dokumenta

Nella parte destra della form sono presenti i totali del documento.

**Bruto iznos artikala**: predstavlja zbroj vrijednosti svih artikala;

**Predujam**: predstavlja vrijednost eventualnog primljenog predujma;

**Iznos poklona**: predstavlja iznos artikala tipa poklon unesenih u karticu *Articoli*.

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost popusta primijenjenih na artikle, ali bez konačnih popusta. 

**Neto iznos artikala**: *Bruto iznos artikala* – *Ukupni primijenjeni popusti*; 

**Ukupni konačni rabati**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala; 

**Ukupno s neto finalnim rabatima**: *Neto iznos artikala* - *Ukupni konačni rabati*;

**Nedokumentirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikle *Tip trošak*; 

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mreži *Naknade*; 

**Troškovi ovjere**: predstavlja zbroj troškova ovjere unesenih u mreži *Naknade*;

**Dokumentirani troškovi**: predstavlja vrijednost troškova unesenih u mreži *Naknade*; 

**Osnovica**: *Neto iznos artikala* – *Konačni rabati* + *Ukupno nedokumentirani troškovi* + *Ukupno dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;

**Ukupno**: *Osnovica* + *PDV*.

<SummariesDocumentTotal />

#### Posebne tipke   
>  **Fiskalno**: omogućuje generiranje fiskalnog računa u komunikaciji s blagajnom (nakon prethodne konfiguracije veze kroz odgovarajuća polja).  
> **Otpremi POS**: omogućuje otpremu POS-a ako su za svaki artikl navedeni skladište i uzrok.


## **2. Zaglavlje**

Nakon unosa obaveznih podataka u gornjem dijelu, korisnik može nastaviti unos ostalih podataka[ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  ili putem [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Unosom **Konta** automatski se predlažu svi podaci zaglavlja prema postavkama u [kartici kontakta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), poljima adrese i *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Otprema**: [Otprema](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date)

#### Ostala polja

- **Status POS-a**: prilikom kreiranja POS-a nijedna opcija nije aktivna. Ova sekcija sadrži:  
> - **Status POS-a**: prilikom kreiranja POS-a nijedna opcija nije aktivna. Ova sekcija sadrži:    
> - **Otpremljeno**: označava da je POS otpremljen iz skladišta ručno ili automatskom procedurom.    
> - **Knjiženo**: automatski se aktivira kada se POS knjiži.     
> - **Poništeno**: aktivni pokazatelj omogućuje poništavanje POS-a.  

:::note
Ovi se pokazatelji mogu poništiti postupkom vraćanja operacije.
:::

- **Naša referenca / Vaša referenca**: polja u koja se obično unose interne i kupčeve reference vezane uz POS.  

**Početne bilješke**: mogu se odabrati bilješke prethodno unesene u istoimenu tablicu koja se nalazi u *Konfiguracija > Korisnost > Upravljanje šifriranim bilješkama*. Za to korisnik treba napraviti dvoklik na polje **Početna bilješka** kako bi otvorio *Pomoć šifriranih bilješki* i odabrao podatke, ili desnim klikom miša može otvoriti prozor u kojem je moguće upisati vrlo dugačak tekst bilješke. Ako polje sadrži neku vrijednost, boja pozadine polja se mijenja.

- **Operater**: omogućuje unos korisnika koji kreira dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici* putem putanje *Početna > Zaposlenici*.  

- **Projekt**: putem [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom.  

### 2.1 Plaćanja

**Rješenja plaćanja** automatski se preuzimaju iz *Kartice kupca > tab Plaćanja* te ih korisnik može izmijeniti ili obrisati.

#### Posebna tipka

> **Izbriši plaćanja**: koristi se za brisanje odabranih redaka plaćanja.

### 2.2  Popusti

Predlažu se samo unaprijed definirani popusti iz *Kartice kupca > kartica Popusti*, a korisnik ih može mijenjati ili brisati.
  
Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi redak artikla unesen u dokument.

Ako nakon unosa redaka artikla bude unesen novi popust u zaglavlju, taj popust se neće replicirati u već unesenim redovima artikla.

*Posebna tipka*

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

### 2.3 Agenti

Navodi kod agenta i njegovu proviziju za svaki redak artikla. Predlažu se podaci definirani u *Kartici kupca > tab Agenti*.

Ako provizija nije povezana s kupcem, agent se svejedno mora unijeti, ali s provizijom NULL — jer bi 0 značilo da je povezan, ali bez naknade.

Ista će se sekcija pojaviti za svaki redak artikla u odgovarajućem tabu *Agenti*.

#### Posebna tipka

> **Izbriši agente**: omogućuje brisanje odabranih agenata.

## **3. Artikli**

U ovoj kartici unose se svi artikli s pripadajućim podacima.

Za opći opis zajedničkih funkcionalnosti formi pogledaj [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz upotrebu [helpa na polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili mogu biti predloženi iz povezanih procedura.

Za unos **novog artikla** potrebno je pozicionirati se na redak i unijeti podatke ili koristiti tipku **Novo** u traci izbornika.


### 3.1 Obavezni podaci

**Broj retka**: ovo polje će se automatski i progresivno popunjavati prilikom unosa podataka u retku.

- **Vrsta retka** omogućuje odabir artikala različitih karakteristika:

> - **Kodirani artikl**: artikli koji su kodirani u šifrarniku i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> - **Artikl – bilješka**: obična napomena, ne utječe na računovodstvo ni skladište.
> - **Artikl – poklon**: označava da je artikl u tom retku poklon i nema trošak za kupca.

**Klasa/Šifra/Opis artikla**: se ogu unijeti  [ručno ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz upotrebu  [helpa u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koji će prikazati sve unesene podatke u *Šifarniku artikla*.

Nakon unosa artikla, njegov *Opis* bit će automatski preuzet iz šifarnika. Ako artikl ima *Varijante*, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: predlaže se glavna mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.

**Varijante**: Ako odabrani artikal ima varijante, bit će potrebno odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante je koristan za artikle s ovom posebnom konfiguracijom koji mogu imati cijenu različitu od standardno postavljene. Kao rezultat, cijena artikla s varijantama može biti drugačija od cijene artikla bez varijanti. To može eventualno zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne mjerne jedinice i kao zadanu vrijednost ima 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izuzimanje (na primjer iz narudžbe dobavljača).

- **Cijena s PDV-om**: predstavlja cijenu s uključenim PDV-om, prethodno unesenu u *Karticu artikla > kartica Troškovi* i može se razlikovati po skladištima.

- **PDV** i **Osnovica** automatski se izračunavaju na temelju cijene s PDV-om.

#### Pulsanti specifici

**Upravljanje pakiranjem**: Omogućuje otvaranje upravljanja povratnom ambalažom korištenom u dokumentu nabave.<br />
Tipka postaje aktivna ako je dokument spremljen, ali nije utovaren.<br />
Klikom na ovu tipku otvara se odgovarajući obrazac gdje se: unese količina, odabere redak i izvrši prijenos odabrane ambalaže u retke artikala klikom na tipku **Izvrši**. U ovom obrascu prikazani su artikli koji su uneseni s vrstom Pakiranje i koji su u tablici. [Povratna ambalaža](/docs/configurations/tables/logistics/package-to-be-returned).  

**Ažuriranje cjenika**: omogućuje ažuriranje cijene artikla na temelju novog cjenika (u slučaju da je unesen ažurirani cjenik).<br />
Klikom na padajući izbornik pored gumba ![](/img/neutral/common/down-arrow.png), biti će moguće kreirati novi cjenik ukoliko još nije stvoren?.


### 3.2 Popusti / Cjenici

**Popusti**: prikazuju se svi popusti povezani s artiklom, svaki s vlastitom osnovom za izračun i dodjelu. Popusti se mogu preuzeti: iz šifarnika kupca, iz uvjeta plaćanja dodijeljenog dokumentu, iz cjenika kupca. Svi predloženi podaci su promjenjivi.

**Cjenik**: prikazuje se cjenik iz kojeg je artikl preuzet, s datumom početka/kraja valjanosti, s posebnim uvjetima prodaje (npr. razred popusta) dodijeljenim artiklu u cjeniku.

*Puosebna tipka*

> **Izbriši rabate**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjoj mreži.


### 3.3 Detalji artikla 

U ovoj kartici prikazuju se i unose dodatne informacije o artiklu.

- **Artikl**: prikazuje informacije o artiklu odabranom u mreži artikala.  

**PDV**: *prioritetan* je podatak unesen u polje Šifra PDV-a u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrijednost koja je se nalazi u'*Šifarniku artikla*, no korisnik ima mogućnost unijeti i neki drugi podatak. Ovo polje je obavezno.

- **Projekt**: projekt povezan s dokumentom, može se dodijeliti putem pomoći polja.    

- **Marka**: predstavlja marku artikla, preuzetu iz šifrarnika ili cjenika.    

- **Prihod od prodaje**: predlaže se podatak iz *Kartice artikla > kartica Općenito*.  

Ako podatak nije unesen, neće biti prikazan, no pri knjiženju će se koristiti vrijednost iz polja *Zadani trošak/prihod konta* u *Kartici kupca > Računovodstveni podaci > tab Administracija*.

- **Skladište i uzrok**: predlažu se podaci koji će se automatski koristiti prilikom otpreme artikala iz skladišta, prema tablici *Vrste POS-a*.    

- **Napomene**: omogućuju unos bilješki za svaki artikl.  

### 3.4 Agenti

**Trgovački predstavnik**: trgovački predstavnik povezan s odgovarajućom provizijom za odabrani artikal; podatak odgovara onome što je prisutno u *Zaglavlje> kartica Trgovački predstavnik*. Postotak se može promijeniti.

*Posebna tipka*

> **Izbriši Trgovačkog predstavnika**: omogućuje brisanje trgovačkog predstavnika povezanog s artiklom.

### 3.5 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na kojima su distribuirane vrijednosti artikala.

Ovi podaci mogu se unijeti ručno ili *automatski* (u slučaju da su centri troškova/profita prethodno uneseni u *šifarnik kontakta*, *šifarnik artikla* ili u *kontni plan*).

## **4. Sažeci**

### 4.1 Konačni popusti artikala 

Mogu se unijeti samo popusti, izraženi u postotku, koji će se primijeniti na ukupni iznos dokumenta.

Popusti uneseni u ovom odjeljku izračunavaju se i prikazuju na svakom artiklu dokumenta, u *kartica Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućava odabir tipologije popusta (predefinirane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), dodijeljujući tipologiji prioritet primjene popusta i hoće li se popust obračunavati na osnovicu ili kaskadno u odnosu na već prethodno primijenjene popuste.
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed koji se primjenjuje odvija se na rastući način. 
**Kaskadni/Osnovni**: za definirati da li izračun popusta koristi kao osnovu (cijena * količina) - (već obračunati popusti) ili (cijena * količina).  
**Vrijednost**: numerička vrijednost popusta koji treba primijeniti.  

### 4.2 Završni troškovi / Popusti / Uvećanja

Ovdje su troškovi uneseni u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na korišteni dokument.

**Tip/Opis**: omogućuje odabir tipa troškova (predefiniranih u *Tipovima troška*), dodjeljujući tipu postotak troška koji se treba primijeniti. 
**Postotak/Vrijednost**: polje koje identificira hoće li se troškovi izračunati s postotkom ili s unaprijed definiranim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troškova. 

### 4.3 Sažetak PDV-a

Prikazuje se sažetak PDV-a dokumenta, za svaki PDV kod.

### 4.4 Sažetak dospijeća

Ovaj odjeljak prikazuje sažetak dospijeća dokumenta, za svaku *vrstu* i *rješenje* plaćanja.
 
- **Broj**: redni broj retka.  
- **Plaćanje**: alfanumerički kod *Vrste plaćanja* preuzet iz *Zaglavlja dokumenta > kartica Plaćanja*.      
- **Iznos**: izračunati iznos dospijeća. Može se ručno izmijeniti, a u tom se slučaju automatski aktivira oznaka *Ručno uređeno*.(Automatski se pokreću kontrole i upozorenja o usklađenosti između iznosa dospijeća i ukupnog iznosa računa.)  
- **Datum dospijeća**: izračunati datum dospijeća. Može se ručno promijeniti, pri čemu se također automatski aktivira oznaka *Ručno uređeno*. 
- **Troškovi naplate**: polje u kojem se prikazuju izračunati troškovi naplate.   
- **PDV**: porez koji se primjenjuje na troškove naplate (može se postaviti i ručno).  
- **Predložak plaćanja**: omogućuje unos predloška izravno u račun, čime se automatski generira knjiženje naplate ili plaćanja. *Napomena:* potrebno je obratiti pažnju na predložak jer koristi konta definirana i bez podkonta; upravo je zbog toga predviđeno sljedeće polje.    
- **Konto/podkonto kupca**: konto koji se koristi za naplatu ili plaćanje (npr. blagajna ili banka) te zamjenjuje konto naveden u predlošku plaćanja (ili naplate).  