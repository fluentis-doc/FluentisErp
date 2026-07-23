---
title: MES - Manufacturing Execution System
description: Detaljan vodič za Fluentis MES obrazac za evidentiranje proizvodnih aktivnosti i praćenje OEE pokazatelja.
keywords:
  - MES
  - Manufacturing Execution System
  - Evidentiranje proizvodnje
  - OEE
  - Kontrola kvalitete
  - Serijski brojevi i lotovi
sidebar_position: 5
schema: TechArticle
tags:
  - Proizvodnja
  - MES
  - Kontrola kvalitete
  - OEE
  - Skladište
last_update:
  author: Fluentis Documentation Team
---

# MES - Manufacturing Execution System

:::important Čemu služi
Glavni obrazac modula za izvršenje proizvodnje (MES) u Fluentisu osmišljen je za optimizaciju i pojednostavljenje procesa evidentiranja proizvodnih aktivnosti.

Operaterima omogućuje:

- praćenje proizvodnih resursa u stvarnom vremenu;
- unos i izmjenu podataka vezanih uz proizvodne faze i proizvedene količine;
- korištenje **Barcode Tokenizera** za brži unos podataka;
- primjenu specifičnih kontrola radi osiguravanja ispravnosti evidentiranja;
- raspodjelu vremena i količina prema različitim metodama analize.

Integrirani pristup poboljšava preglednost proizvodnih operacija, optimizira radne procese i povećava produktivnost poduzeća.
:::

### Specifične funkcije

#### Navigacija

- **Prethodno**: prelazi na prethodnu karticu.
- **Sljedeće**: prelazi na sljedeću karticu.
- **Osvježi**: osvježava sve podatke obrasca (korisno nakon izmjena na resursu).
- **Poništi odabir**: uklanja odabir faza u glavnoj tablici.

#### Potvrda prijave

- **Pokreni**: kreira prijavu početka rada.
- **Napredak**: kreira prijavu napretka rada.
- **Obustavi**: kreira prijavu obustave rada.
- **Nastavi**: kreira prijavu nastavka rada.
- **Završi**: kreira prijavu završetka rada.
- **Poništi**: briše unesene podatke u MES-u.

## Glavni obrazac

Glavni obrazac sastoji se od dijela s osnovnim podacima i tablice koja prikazuje faze u radu.

### Kod barkoda

Velik broj operacija koje se mogu izvršavati u Fluentis MES-u može se pojednostaviti i ubrzati korištenjem polja **Kod barkoda**. Ako je pravilno konfigurirano, sustav inteligentno obrađuje podatke očitane putem barkoda te automatski popunjava odgovarajuća polja.
To operateru donosi značajne prednosti u pogledu brzine unosa i učinkovitosti jer sve podatke može očitavati u isto polje **Kod barkoda**, bez potrebe za promjenom fokusa na druga polja.
Konfiguracija se obavlja u odjeljku:

`Tablice > Opće postavke > Barcode tokenizer`
Polje **Kod barkoda** u MES-u može se koristiti za:

- dodavanje pojedinačnih faza ili grupa faza;
- dodavanje faza cijelog proizvodnog naloga;
- učitavanje lotova i/ili serijskih brojeva materijala za razduženje;
sve jednostavnim očitavanjem odgovarajućih barkodova.

Za informacije o načinu definiranja barkodova koji se koriste u polju **Kod barkoda**, pogledajte stranicu: [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Radna stanica

Sustav automatski prepoznaje radnu stanicu na kojoj se izvršava te, ako je s njom povezan radni centar, automatski učitava sve faze koje su bile aktivne na tom radnom centru. Operater zatim može nastaviti s prijavom tih faza ili dodati nove.
Dodatne informacije: [Radna stanica](/docs/production/mes/workstation)

### Resurs

Polje **Resurs** koristi se za unos bilo koje vrste proizvodnog resursa.
Ako se unese resurs tipa **Radni centar**, on će se automatski postaviti i u odgovarajuće polje **Radni centar**, nakon čega će se učitati faze povezane s novoodabranim radnim centrom.
Ako se unese resurs tipa **Zaposlenik**, on će se koristiti kao operater koji evidentira proizvodnu aktivnost. Unos resursa tipa zaposlenik obavezan je ako je aktivirana oznaka **Operater obavezan** na kartici *Općenito* u [Proizvodnim resursima](/docs/production/mes/production-resources).

### Radni centar

Označava radni centar na kojem operater evidentira proizvodne aktivnosti. Moguće je prikazati samo radne centre povezane s odabranom **Radnom stanicom**.
Ako radna stanica nije definirana ili s njom nije povezan nijedan radni centar, bit će moguće prikazati sve **Proizvodne resurse** tipa **Radni centar**.

### Faze u radu

Faze se mogu dodati u tablicu putem polja **Kod barkoda** ili korištenjem funkcije **Odaberi nove faze** koja se nalazi u desnom izborniku.

Tablica sadrži različite informacije vezane uz proizvodni nalog, proizvodnu komisiju, projekt, varijantu artikla i druge podatke.

Vidljivost pojedinih stupaca može se uključivati ili isključivati putem kartice **Izgled** u [Proizvodnim resursima](/docs/production/mes/production-resources).

Za odabrani redak moguće je, s desne strane tablice, prikazati zadanu sliku definiranu u [Šifarniku artikala](/docs/erp-home/registers/items/create-new-item). Dvostrukim klikom slika se otvara preko cijelog zaslona.

## Proizvodnja

### Specifične funkcije

- **Očisti resurs**: uklanja vrijednost unesenu u polje **Resurs**.
- **Odaberi nove faze**: otvara pomoćni prozor za odabir dodatnih faza koje se mogu dodati postojećim fazama u glavnoj tablici.

Kod radnog centra s više faza, ako već postoje aktivne faze, nove faze moguće je dodati samo ako se postojeće nalaze u statusu **Pokrenuta** ili **Obustavljena**. U suprotnom je potrebno prvo obustaviti postojeće faze.

Ako je, primjerice, jedna faza u statusu **Obustavljena**, a korisnik doda fazu koja još nije započela, sustav će automatski kreirati prijavu početka i prijavu obustave za novu fazu s istim datumom i vremenom. Nakon toga korisnik može nastaviti rad na svim fazama korištenjem funkcije **Nastavi**.

Ako se dodaju faze koje su već u nekom drugom statusu, njihov će status biti usklađen na **Obustavljena**. Prilikom nastavka rada novododane faze preuzet će podatke o radnom centru i stroju koji su korišteni za izvorne faze.

- **Ukloni fazu**: uklanja odabranu fazu ili više odabranih faza iz glavne tablice.

Kartica **Proizvodnja** namijenjena je unosu podataka o vremenu rada i pripreme te proizvedenim i škartiranim količinama. To je jedina kartica koja se ne može sakriti.

### Glavna polja

**Stroj**  
Vrijednost se predlaže prema sljedećim pravilima:
- ako je uz fazu povezan stroj i taj stroj je u tablici [Strojevi](/docs/configurations/tables/production/machines/) povezan s istim radnim centrom koji je odabran u MES-u, stroj će biti automatski predložen;
- korisnik može promijeniti stroj, ali samo odabirom strojeva koji su povezani s odabranim radnim centrom;
- ako stroj definiran na fazi nije povezan s tim radnim centrom, polje će ostati prazno.
U tom slučaju, prilikom pokušaja kreiranja prijave, sustav će zahtijevati unos stroja prije nastavka rada.
Ako uz fazu nije definiran nijedan stroj, njegov unos neće biti obavezan.
Kod istovremenog odabira više faza, stroj se preuzima s prve odabrane faze (ili faze s najvišim prioritetom ako je definiran redoslijed) među fazama koje pripadaju istom radnom centru odabranom u MES-u.

**Vrijeme pripreme**  
Omogućuje ručni unos ili izmjenu vremena pripreme.

**Aktivnost pripreme**  
U proizvodnim prijavama i MES prijavama dodan je pokazatelj aktivnosti pripreme.
Oznaka je dostupna samo ako faza (ili prva faza u grupi faza) koristi stroj.
Ako je oznaka uključena, vrijeme će se evidentirati kao **Vrijeme pripreme**. U suprotnom će se evidentirati kao **Vrijeme rada**.

**Vrijeme rada**  
Omogućuje pregled i ručnu izmjenu vremena rada.
Ponašanje polja moguće je prilagoditi putem postavki **Ručni unos vremena** i **Predloženo vrijeme** u [Proizvodnim resursima](/docs/production/mes/production-resources).
Vrijeme se automatski izračunava kao razlika između trenutne i prethodne prijave.

**Proizvedena količina**  
Količina proizvedena ovom prijavom.

**Alternativna količina**  
Alternativna mjerna količina proizvedena ovom prijavom.

**Skladište zaprimanja**  
Skladište u koje se knjiže proizvedeni artikli.

**Predložak zaprimanja**  
Predložak knjiženja proizvedenih artikala.

**Lokacija zaprimanja**  
Lokacija skladištenja proizvedenih artikala.

**Skladište škarta**  
Skladište u koje se knjiže škartirani proizvodi.

**Predložak škarta**  
Predložak knjiženja škartiranih proizvoda.

**Lokacija škarta**  
Lokacija knjiženja škartiranih proizvoda.

**Defekt**  
Označava razlog škarta proizvedenih artikala.
Moguće je uključiti kontrolu putem oznake **Defekt obavezan kod prijave škarta** u [Proizvodnim resursima](/docs/production/mes/production-resources).

**Razlog obustave**  
Razlog koji se koristi kod prijave obustave rada.

Ako operater kreira obustavu bez odabira razloga, sustav će automatski koristiti zadani razlog definiran u polju **Predloženi razlog obustave** unutar [Proizvodnih resursa](/docs/production/mes/production-resources).

Izgled i ponašanje obrasca moguće je dodatno prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Kontrole kvalitete

Omogućuje upravljanje kontrolama kvalitete nad proizvedenim ili škartiranim artiklima.

#### Specifične funkcije

- **Odaberi artikle**: omogućuje odabir artikala koje je potrebno uključiti u tablicu kontrola kvalitete među proizvedenim ili škartiranim artiklima.
- **Uvezi sve**: automatski dodaje u tablicu kontrola kvalitete sve proizvedene i škartirane artikle.
- **Obriši kontrolu**: uklanja odabranu kontrolu kvalitete.
- **Dupliciraj ispitivanje**: stvara kopiju odabranog ispitivanja.
- **Obriši ispitivanje**: uklanja odabrano ispitivanje.

Redci se u tablicu **Kontrole kvalitete** mogu dodavati pomoću navedenih funkcija.

U tablici se prikazuju sljedeći podaci:

- **Klasa**: označava klasu artikla.
- **Šifra artikla**: označava šifru artikla.
- **Varijanta**: označava varijantu artikla.
- **Detalj artikla za kontrolu**: određuje najvišu razinu detalja artikla koja se uzima u obzir pri provođenju kontrola (Ništa, Lot, Serijski broj ili U.D.C.). Ova postavka definira se u kartici **Kontrole kvalitete** unutar [Proizvodnih resursa](/docs/production/mes/production-resources).
- **Referenca detalja**: prikazuje vrijednost odabranog detalja artikla, primjerice broj lota.
- **JM**: mjerna jedinica artikla.
- **Količina**: količina artikla koja je predmet kontrole.
- **Škart**: ako je oznaka aktivna, navedena količina odnosi se na škartirane proizvode; ako nije aktivna, odnosi se na proizvedene artikle koji nisu škartirani.
- **Opis artikla**: opis artikla.
- **Opis varijante**: opis odabrane varijante.

Ako je u proizvodnom nalogu povezanom s fazom definirano da faza podliježe kontroli kvalitete te joj je pridružen plan kontrole (koji se standardno nasljeđuje iz faze tehnološkog postupka, ali ga je moguće ručno izmijeniti i na planskom i na proizvodnom nalogu), sva ispitivanja povezana s odabranim planom kontrole automatski će biti prenesena u tablicu **Ispitivanja**.

### Ispitivanja

Tablica sadrži sljedeća polja:

- **Sekvenca**: određuje redoslijed izvođenja ispitivanja.
- **Vrsta ispitivanja**: šifra ispitivanja koje je potrebno provesti.
- **Opis vrste ispitivanja**: opis ispitivanja koje je potrebno provesti.
- **Obavezno ispitivanje**: označava je li ispitivanje obavezno za nastavak prijave proizvodnje.
- **Kategorija instrumenta**: kategorija mjernog instrumenta koji se koristi.
- **Vrsta vrijednosti**: određuje je li rezultat tipa *Tekst*, *Da/Ne* ili *Numerička vrijednost*.
- **Vrsta granice**: omogućuje definiranje vrste granice; dostupno je samo ako je **Vrsta vrijednosti** postavljena na *Numerička vrijednost*.
- **Mjerna jedinica vrijednosti**: mjerna jedinica rezultata ispitivanja.
- **Nominalna vrijednost**: očekivana numerička vrijednost ispitivanja.
- **Donja granica** / **Gornja granica**: određuju minimalno i maksimalno dopušteno odstupanje od nominalne vrijednosti, izraženo kao postotak ili apsolutna vrijednost, ovisno o oznaci **%**. Donja granica oduzima se od nominalne vrijednosti, a gornja joj se dodaje.
- **Min. granica (tol-/+)** / **Maks. granica (tol-/+)**: dodatne tolerancije na minimalnu i maksimalnu granicu koje se primjenjuju uz prethodno definirane granice. Primjerice, mogu predstavljati nesigurnost mjerenja. Vrijednost je izražena u postotku.
- **%**: označava jesu li vrijednosti izražene u postocima ili kao apsolutne vrijednosti.
- **Vrsta kontrole ispitivanja**: definira način kontrole ispitivanja.
- **Učestalost**: određuje učestalost provođenja kontrole.
- **Mjerni instrument**: instrument korišten za mjerenje, ako je potrebno evidentirati izmjerene vrijednosti. Sastoji se od šifre i kategorije.
- **Izmjerena vrijednost**: evidentirana vrijednost mjerenja (koristi se kod pojedinačnog mjerenja).
- **Prosjek izmjerenih vrijednosti**: prosječna vrijednost svih mjerenja unesenih u tablicu **Evidencija višestrukih mjerenja**.
- **Rezultat**: ishod ispitivanja koji se automatski određuje na temelju definiranih parametara.
- **Nesukladna količina**: količina artikala za koju je utvrđena nesukladnost.
- **Skladište**: skladište u kojem se nalaze nesukladni artikli. Vrijednost se automatski preuzima iz postavke **Vrsta kontrole artikla**.
- **Skladišni predložak za nesukladne artikle**: predložak kojim će se knjižiti nesukladni artikli. Vrijednost se automatski preuzima iz postavke **Vrsta kontrole artikla**. Knjiženje se izvršava prilikom registracije prijave proizvodnje.
- **Napomene**: slobodno polje za unos napomena.

### Evidencija višestrukih mjerenja

Ova tablica koristi se kada je potrebno evidentirati više mjerenja koja zajedno određuju vrijednost polja **Prosjek izmjerenih vrijednosti**.
Sadrži sljedeće stupce:

- **Sekvenca**: redni broj mjerenja.
- **Pozicija**: opisno polje koje označava mjesto ili poziciju na kojoj je mjerenje izvršeno.
- **Mjerni instrument**: instrument korišten za pojedino mjerenje.
- **Izmjerena vrijednost**: evidentirana vrijednost mjerenja.
- **Napomene**: slobodno polje za unos napomena.

Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).
Dodatne informacije o upravljanju kvalitetom dostupne su u modulu [Kvaliteta](/docs/quality/quality-intro).

### Lotovi i serijski brojevi

#### Specifične funkcije

- **Generiraj**: omogućuje generiranje lotova i serijskih brojeva.
- **Obriši**: uklanja odabrani lot ili serijski broj.

U ovoj kartici moguće je pregledati sve proizvedene artikle zajedno s pripadajućim proizvedenim i škartiranim količinama.
Putem pripadajućih tablica moguće je unositi i mijenjati podatke vezane uz **lotove** i **serijske brojeve**.
Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Etikete

U kartici **Etikete** automatski se generiraju etikete za proizvedene artikle.

#### Specifične funkcije

- **Nova**: dodaje novi redak za unos etikete.
- **Obriši**: uklanja odabrani redak etikete.
- **Novi UDC**: ponovno generira šifru odabrane UDC jedinice.
- **Ispis odabranog**: ispisuje samo odabrane etikete.
- **Ispis svega**: ispisuje sve etikete.

Količina artikala po pojedinoj etiketi određuje se prema podacima definiranim u šifarniku artikla:

1. Kartica **Pakiranje** – koristi UDC i količinu definiranu u retku s uključenom oznakom **Obavezna jedinica utovara**.
2. Kartica **Težina/Dimenzije** – koristi UDC i količinu definiranu u poljima **Vrsta jedinice utovara** i **Broj artikala po jedinici utovara**.
3. Kartica **Težina/Dimenzije** – polje **Broj paketa** – koristi količinu definiranu u polju **Broj artikala u paketu**. U tom slučaju UDC se neće automatski predložiti.

Operater može ručno ili putem polja **Kod barkoda** unijeti potrebne **lotove** i **serijske brojeve**.
Polje **Status ispisa** može imati sljedeće vrijednosti:

- **Nije ispisano**
- **Ispisano**
- **Ponovno ispisano**

ovisno o broju izvršenih ispisa etikete.
Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Materijali

U ovoj kartici automatski se prikazuju materijali utrošeni za proizvodnju na temelju količine nadređenog artikla i njegove sastavnice.
Ako je u kartici **Općenito** unutar [Proizvodnih resursa](/docs/production/mes/production-resources) aktivirana oznaka **Obavezna prijava količine materijala**, materijal će biti prikazan žutom bojom s količinom **0**, a operater će količinu morati unijeti ručno.
Također je moguće evidentirati škartirane količine za svaki pojedini materijal, zajedno sa skladištem i predloškom knjiženja škarta.
Putem pripadajućih tablica moguće je unositi i mijenjati podatke o **lotovima** i **serijskim brojevima** za odabrani materijal.
Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Tim

#### Specifične funkcije

- **Pridruži timu**: omogućuje dodavanje jednog ili više operatera u radni tim.
- **Napusti tim**: omogućuje uklanjanje jednog ili više operatera iz radnog tima.
- **Zamijeni operatera**: omogućuje zamjenu aktivnog operatera drugim operaterom uz zadržavanje vremena ulaska i izlaska iz tima.
- **Ukloni iz tima**: uklanja redak koji se odnosi na odabranog operatera.

Kartica **Tim** sastoji se od dvije sekcije:

- **Popis aktivnih operatera**: omogućuje unos i pregled operatera koji aktivno sudjeluju u prijavi proizvodnje. Prvi uneseni operater automatski dobiva oznaku **Voditelj tima**, koju je moguće naknadno promijeniti.
- **Popis neaktivnih operatera**: prikazuje operatere koji više nisu aktivni, ali su prethodno radili na ovoj fazi ili skupini faza u ranijim prijavama.

Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Analiza

Kartica je namijenjena prikazu i analizi podataka vezanih uz učinkovitost proizvodnih aktivnosti.
Sastoji se od sljedećih sekcija:
- **OEE dijagrami**
- **Stupčasti dijagrami**:
  - Analiza količina
  - Analiza vremena
- **Tablice**:
  - Vrijednosti količina
  - Vrijednosti vremena

**OEE (Overall Equipment Effectiveness)** odnosno **ukupna učinkovitost proizvodnog resursa** predstavlja ključni pokazatelj uspješnosti (KPI) kojim se mjeri učinkovitost proizvodnog procesa.

Vrijednost **OEE** sastoji se od tri osnovna čimbenika:

- **Operativna raspoloživost (Availability)**: postotak stvarnog vremena rada (B) u odnosu na raspoloživo vrijeme (A).
  Izračunava se kao odnos između ukupno raspoloživog vremena rada postrojenja (A) i stvarnog vremena tijekom kojeg je postrojenje proizvodilo (B).

- **Učinkovitost rada (Performance)**: postotak stvarno proizvedenih artikala (D) u odnosu na teorijski mogući broj artikala (C).
  Tijekom planiranja izračunava se maksimalan broj artikala koji se mogu proizvesti pri optimalnim uvjetima rada (C). Svako odstupanje od te vrijednosti ukazuje na smanjenje produktivnosti (D).

- **Kvaliteta proizvoda (Quality)**: postotni odnos između količine ispravnih artikala (F) i ukupno proizvedenih artikala (E).
  Na taj se način identificiraju gubici uzrokovani škartom ili dodatnim doradama koje smanjuju ukupnu učinkovitost procesa.

- **Ukupna učinkovitost (OEE)**: izračunava se na temelju prethodna tri pokazatelja prema formuli:

  OEE = Availability × Performance × Quality × 100
      = B/A × D/C × F/E × 100

Pokazatelj **ukupne učinkovitosti (OEE)** može se izračunavati s uključenim ili bez uključenog vremena pripreme.

U sekciji stupčastih dijagrama nalaze se dijagrami **Analiza količina** i **Analiza vremena**, koji omogućuju prikaz planiranih količina i vremena te stvarno prijavljenih vrijednosti evidentiranih do trenutka pregleda.
U tablicama koje se nalaze u posljednjoj sekciji također je moguće pregledavati planirane količine i vremena te stvarno prijavljene vrijednosti, ali u obliku tabličnog prikaza.
Podaci prikazani u svim sekcijama kartice **Analiza** odnose se na trenutno odabrane faze. Ako nijedna faza nije odabrana, prikazani podaci predstavljaju zbirne vrijednosti svih faza prikazanih u tablici **Faze u radu**.

Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Dokumenti i radne upute

Ova kartica sastoji se od sekcija **Dokumenti** i **Radne upute**.

Sekcija **Dokumenti** dodatno je podijeljena na:

- **Dokumenti pridruženi odabranoj fazi**: omogućuje pregled svih dokumenata povezanih sa *Šifarnikom artikala*, *Narudžbom kupca*, *Proizvodnom komisijom* i *Proizvodnim nalogom*, u skladu s postavkama definiranim u kartici **Upravljanje dokumentima** unutar [Proizvodnih resursa](/docs/production/mes/production-resources).
- **Dokumenti pridruženi prijavi odabrane faze**: omogućuje pregled postojećih dokumenata te dodavanje novih dokumenata izravno uz prijavu, uključujući i metodom *drag & drop*.
- **Radne upute**: omogućuje pregled svih dokumenata povezanih s odabranom fazom tehnološkog postupka proizvodnje.

Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Napomene

Kartica se sastoji od dvije sekcije:

- **Popis napomena (odaberite fazu)**: omogućuje pregled i prikaz napomena vezanih uz odabranu fazu. Napomene prikazane u ovoj tablici preuzimaju se iz faza tehnološkog postupka, odnosno iz kartice **Napomene**.
- **Popis napomena prijave**: omogućuje unos i pregled napomena vezanih uz trenutnu prijavu proizvodnje.

Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### Prethodne prijave

Ova kartica omogućuje pregled svih prethodno evidentiranih prijava povezanih s odabranom fazom.

Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

### ExtraData

Ova kartica sastoji se od dvije tablice:

- **Popis extra data (odaberite fazu)**: omogućuje upravljanje extra data poljima vezanima uz odabranu fazu.
- **Popis extra data prijave**: omogućuje upravljanje extra data poljima vezanima uz proizvodnu prijavu koja se trenutno evidentira.

Ponašanje i izgled obrasca moguće je prilagoditi kroz postavke [Proizvodnih resursa](/docs/production/mes/production-resources).

## Sažetak i dodatne informacije

**Fluentis MES** omogućuje cjelovito upravljanje proizvodnim prijavama, uključujući:

- Evidentiranje vremena i količina.
- Upravljanje lotovima i serijskim brojevima.
- Kontrolu kvalitete.
- Analizu KPI pokazatelja putem OEE-a.
- Upravljanje timovima i proizvodnom dokumentacijom.

Napredna konfiguracija ponašanja obrasca centralizirana je u sljedećim modulima:

- [Proizvodni resursi](/docs/production/mes/production-resources)
- [Workstation](/docs/production/mes/workstation)
- [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer)
- [Kvaliteta](/docs/quality/quality-intro)

Ovakva integracija osigurava sljedivost, kontrolu performansi i optimizaciju proizvodnih procesa unutar ERP sustava.