---
title: MES - Manufacturing Execution System
description: Detaljan vodič za Fluentis MES obrazac za evidentiranje proizvodnih aktivnosti i praćenje OEE pokazatelja.
keywords:
  - MES
  - Manufacturing Execution System
  - Evidentiranje proizvodnje
  - OEE
  - Kontrola kvaliteta
  - Serijski brojevi i lotovi
sidebar_position: 5
schema: TechArticle
tags:
  - Proizvodnja
  - MES
  - Kontrola kvaliteta
  - OEE
  - Skladište
last_update:
  author: Fluentis Documentation Team
---

# MES - Manufacturing Execution System

:::important Čemu služi
Glavni obrazac modula za izvršenje proizvodnje (MES) u Fluentisu osmišljen je za optimizaciju i pojednostavljenje procesa evidentiranja proizvodnih aktivnosti.

Operaterima omogućava:

- praćenje proizvodnih resursa u realnom vremenu;
- unos i izmenu podataka vezanih za proizvodne faze i proizvedene količine;
- korišćenje **Barcode Tokenizera** za brži unos podataka;
- primenu specifičnih kontrola radi obezbeđivanja ispravnosti evidentiranja;
- raspodelu vremena i količina prema različitim metodama analize.

Integrisani pristup poboljšava preglednost proizvodnih operacija, optimizuje radne procese i povećava produktivnost preduzeća.
:::

### Specifične funkcije

#### Navigacija

- **Prethodno**: prelazi na prethodnu karticu.
- **Sledeće**: prelazi na sledeću karticu.
- **Osveži**: osvežava sve podatke obrasca (korisno nakon izmena na resursu).
- **Poništi izbor**: uklanja izbor faza u glavnoj tabeli.

#### Potvrda prijave

- **Pokreni**: kreira prijavu početka rada.
- **Napredak**: kreira prijavu napretka rada.
- **Obustavi**: kreira prijavu obustave rada.
- **Nastavi**: kreira prijavu nastavka rada.
- **Završi**: kreira prijavu završetka rada.
- **Poništi**: briše unesene podatke u MES-u.

## Glavni obrazac

Glavni obrazac sastoji se od dela sa osnovnim podacima i tabele koja prikazuje faze u radu.

### Barkod

Veliki broj operacija koje se mogu izvršavati u Fluentis MES-u može se pojednostaviti i ubrzati korišćenjem polja **Barkod**. Ako je pravilno konfigurisano, sistem inteligentno obrađuje podatke očitane putem barkoda i automatski popunjava odgovarajuća polja.

To operateru donosi značajne prednosti u pogledu brzine unosa i efikasnosti, jer sve podatke može očitavati u isto polje **Barkod**, bez potrebe za promenom fokusa na druga polja.
Konfiguracija se vrši u odeljku:

`Tabele > Opšta podešavanja > Barcode tokenizer`

Polje **Barkod** u MES-u može se koristiti za:
- dodavanje pojedinačnih faza ili grupa faza;
- dodavanje faza celog proizvodnog naloga;
- učitavanje lotova i/ili serijskih brojeva materijala za razduženje;

sve jednostavnim očitavanjem odgovarajućih barkodova.
Za informacije o načinu definisanja barkodova koji se koriste u polju **Barkod**, pogledajte stranicu: [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Radna stanica

Sistem automatski prepoznaje radnu stanicu na kojoj se izvršava i, ako je sa njom povezan radni centar, automatski učitava sve faze koje su bile aktivne na tom radnom centru. Operater zatim može nastaviti sa prijavljivanjem tih faza ili dodati nove.
Dodatne informacije: [Radna stanica](/docs/production/mes/workstation)

### Resurs

Polje **Resurs** koristi se za unos bilo koje vrste proizvodnog resursa.
Ako se unese resurs tipa **Radni centar**, on će se automatski postaviti i u odgovarajuće polje **Radni centar**, nakon čega će se učitati faze povezane sa novoodabranim radnim centrom.
Ako se unese resurs tipa **Zaposleni**, on će se koristiti kao operater koji evidentira proizvodnu aktivnost. Unos resursa tipa zaposlenog obavezan je ako je aktivirana oznaka **Operater obavezan** na kartici *Opšte* u [Proizvodnim resursima](/docs/production/mes/production-resources).

### Radni centar

Označava radni centar na kojem operater evidentira proizvodne aktivnosti. Moguće je prikazati samo radne centre povezane sa odabranom **Radnom stanicom**.

Ako radna stanica nije definisana ili sa njom nije povezan nijedan radni centar, biće moguće prikazati sve **Proizvodne resurse** tipa **Radni centar**.

### Faze u radu

Faze se mogu dodati u tabelu putem polja **Barkod** ili korišćenjem funkcije **Odaberi nove faze** koja se nalazi u desnom meniju.

Tabela sadrži različite informacije vezane za proizvodni nalog, proizvodnu komisiju, projekat, varijantu artikla i druge podatke.

Vidljivost pojedinačnih kolona može se uključivati ili isključivati putem kartice **Izgled** u [Proizvodnim resursima](/docs/production/mes/production-resources).

Za odabrani red moguće je, sa desne strane tabele, prikazati podrazumevanu sliku definisanu u [Šifarniku artikala](/docs/erp-home/registers/items/create-new-item). Dvostrukim klikom slika se otvara preko celog ekrana.

## Proizvodnja

### Specifične funkcije

- **Očisti resurs**: uklanja vrednost unetu u polje **Resurs**.
- **Odaberi nove faze**: otvara pomoćni prozor za izbor dodatnih faza koje se mogu dodati postojećim fazama u glavnoj tabeli.

Kod radnog centra sa više faza, ako već postoje aktivne faze, nove faze moguće je dodati samo ako se postojeće nalaze u statusu **Pokrenuta** ili **Obustavljena**. U suprotnom je potrebno prvo obustaviti postojeće faze.
Ako je, na primer, jedna faza u statusu **Obustavljena**, a korisnik doda fazu koja još nije započeta, sistem će automatski kreirati prijavu početka i prijavu obustave za novu fazu sa istim datumom i vremenom. Nakon toga korisnik može nastaviti rad na svim fazama korišćenjem funkcije **Nastavi**.
Ako se dodaju faze koje su već u nekom drugom statusu, njihov status će biti usklađen na **Obustavljena**. Prilikom nastavka rada novododate faze preuzeće podatke o radnom centru i mašini koji su korišćeni za izvorne faze.

- **Ukloni fazu**: uklanja odabranu fazu ili više odabranih faza iz glavne tabele.

Kartica **Proizvodnja** namenjena je unosu podataka o vremenu rada i pripreme, kao i proizvedenim i škartiranim količinama. To je jedina kartica koja se ne može sakriti.

### Glavna polja

**Mašina**  
Vrednost se predlaže prema sledećim pravilima:
- ako je uz fazu povezana mašina i ta mašina je u tabeli [Mašine](/docs/configurations/tables/production/machines/) povezana sa istim radnim centrom koji je odabran u MES-u, mašina će biti automatski predložena;
- korisnik može promeniti mašinu, ali samo izborom mašina koje su povezane sa odabranim radnim centrom;
- ako mašina definisana na fazi nije povezana sa tim radnim centrom, polje će ostati prazno.
U tom slučaju, prilikom pokušaja kreiranja prijave, sistem će zahtevati unos mašine pre nastavka rada.
Ako uz fazu nije definisana nijedna mašina, njen unos neće biti obavezan.
Kod istovremenog odabira više faza, mašina se preuzima sa prve odabrane faze (ili faze sa najvišim prioritetom ako je definisan redosled) među fazama koje pripadaju istom radnom centru odabranom u MES-u.

**Vreme pripreme**  
Omogućava ručni unos ili izmenu vremena pripreme.

**Aktivnost pripreme**  
U proizvodnim prijavama i MES prijavama dodat je pokazatelj aktivnosti pripreme.

Oznaka je dostupna samo ako faza (ili prva faza u grupi faza) koristi mašinu.

Ako je oznaka uključena, vreme će se evidentirati kao **Vreme pripreme**. U suprotnom će se evidentirati kao **Vreme rada**.

**Vreme rada**  
Omogućava pregled i ručnu izmenu vremena rada.
Ponašanje polja moguće je prilagoditi putem podešavanja **Ručni unos vremena** i **Predloženo vreme** u [Proizvodnim resursima](/docs/production/mes/production-resources).
Vreme se automatski izračunava kao razlika između trenutne i prethodne prijave.

**Proizvedena količina**  
Količina proizvedena ovom prijavom.

**Alternativna količina**  
Alternativna merna količina proizvedena ovom prijavom.

**Skladište prijema**  
Skladište u koje se knjiže proizvedeni artikli.

**Predložak prijema**  
Predložak knjiženja proizvedenih artikala.

**Lokacija prijema**  
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
Ako operater kreira obustavu bez odabira razloga, sistem će automatski koristiti podrazumevani razlog definisan u polju **Predloženi razlog obustave** unutar [Proizvodnih resursa](/docs/production/mes/production-resources).
Izgled i ponašanje obrasca moguće je dodatno prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Kontrole kvaliteta

Omogućava upravljanje kontrolama kvaliteta nad proizvedenim ili škartiranim artiklima.

#### Specifične funkcije

- **Odaberi artikle**: omogućava odabir artikala koje je potrebno uključiti u tabelu kontrola kvaliteta među proizvedenim ili škartiranim artiklima.
- **Uvezi sve**: automatski dodaje u tabelu kontrola kvaliteta sve proizvedene i škartirane artikle.
- **Obriši kontrolu**: uklanja odabranu kontrolu kvaliteta.
- **Dupliraj ispitivanje**: kreira kopiju odabranog ispitivanja.
- **Obriši ispitivanje**: uklanja odabrano ispitivanje.

Redovi se u tabelu **Kontrole kvaliteta** mogu dodavati pomoću navedenih funkcija.

U tabeli se prikazuju sledeći podaci:

- **Klasa**: označava klasu artikla.
- **Šifra artikla**: označava šifru artikla.
- **Varijanta**: označava varijantu artikla.
- **Detalj artikla za kontrolu**: određuje najviši nivo detalja artikla koji se uzima u obzir prilikom sprovođenja kontrola (Ništa, Lot, Serijski broj ili U.D.C.). Ovo podešavanje definiše se na kartici **Kontrole kvaliteta** unutar [Proizvodnih resursa](/docs/production/mes/production-resources).
- **Referenca detalja**: prikazuje vrednost odabranog detalja artikla, na primer broj lota.
- **JM**: merna jedinica artikla.
- **Količina**: količina artikla koja je predmet kontrole.
- **Škart**: ako je oznaka aktivna, navedena količina odnosi se na škartirane proizvode; ako nije aktivna, odnosi se na proizvedene artikle koji nisu škartirani.
- **Opis artikla**: opis artikla.
- **Opis varijante**: opis odabrane varijante.

Ako je u proizvodnom nalogu povezanom sa fazom definisano da faza podleže kontroli kvaliteta i ako joj je dodeljen plan kontrole (koji se standardno nasleđuje iz faze tehnološkog postupka, ali ga je moguće ručno izmeniti i na planskom i na proizvodnom nalogu), sva ispitivanja povezana sa odabranim planom kontrole automatski će biti preneta u tabelu **Ispitivanja**.

### Ispitivanja

Tabela sadrži sledeća polja:

- **Sekvenca**: određuje redosled izvođenja ispitivanja.
- **Vrsta ispitivanja**: šifra ispitivanja koje je potrebno sprovesti.
- **Opis vrste ispitivanja**: opis ispitivanja koje je potrebno sprovesti.
- **Obavezno ispitivanje**: označava da li je ispitivanje obavezno za nastavak prijave proizvodnje.
- **Kategorija instrumenta**: kategorija mernog instrumenta koji se koristi.
- **Vrsta vrednosti**: određuje da li je rezultat tipa *Tekst*, *Da/Ne* ili *Numerička vrednost*.
- **Vrsta granice**: omogućava definisanje vrste granice; dostupno je samo ako je **Vrsta vrednosti** postavljena na *Numerička vrednost*.
- **Merna jedinica vrednosti**: merna jedinica rezultata ispitivanja.
- **Nominalna vrednost**: očekivana numerička vrednost ispitivanja.
- **Donja granica** / **Gornja granica**: određuju minimalno i maksimalno dozvoljeno odstupanje od nominalne vrednosti, izraženo kao procenat ili apsolutna vrednost, u zavisnosti od oznake **%**. Donja granica se oduzima od nominalne vrednosti, a gornja joj se dodaje.
- **Min. granica (tol-/+)** / **Maks. granica (tol-/+)**: dodatne tolerancije na minimalnu i maksimalnu granicu koje se primenjuju uz prethodno definisane granice. Na primer, mogu predstavljati nesigurnost merenja. Vrednost je izražena u procentima.
- **%**: označava da li su vrednosti izražene u procentima ili kao apsolutne vrednosti.
- **Vrsta kontrole ispitivanja**: definiše način kontrole ispitivanja.
- **Učestalost**: određuje učestalost sprovođenja kontrole.
- **Merni instrument**: instrument korišćen za merenje, ako je potrebno evidentirati izmerene vrednosti. Sastoji se od šifre i kategorije.
- **Izmerena vrednost**: evidentirana vrednost merenja (koristi se kod pojedinačnog merenja).
- **Prosek izmerenih vrednosti**: prosečna vrednost svih merenja unetih u tabelu **Evidencija višestrukih merenja**.
- **Rezultat**: ishod ispitivanja koji se automatski određuje na osnovu definisanih parametara.
- **Nesukladna količina**: količina artikala za koju je utvrđena nesukladnost.
- **Skladište**: skladište u kojem se nalaze nesukladni artikli. Vrednost se automatski preuzima iz podešavanja **Vrsta kontrole artikla**.
- **Skladišni predložak za nesukladne artikle**: predložak kojim će se knjižiti nesukladni artikli. Vrednost se automatski preuzima iz podešavanja **Vrsta kontrole artikla**. Knjiženje se izvršava prilikom registracije prijave proizvodnje.
- **Napomene**: slobodno polje za unos napomena.

### Evidencija višestrukih merenja

Ova tabela koristi se kada je potrebno evidentirati više merenja koja zajedno određuju vrednost polja **Prosek izmerenih vrednosti**.

Sadrži sledeće kolone:

- **Sekvenca**: redni broj merenja.
- **Pozicija**: opisno polje koje označava mesto ili poziciju na kojoj je merenje izvršeno.
- **Merni instrument**: instrument korišćen za pojedinačno merenje.
- **Izmerena vrednost**: evidentirana vrednost merenja.
- **Napomene**: slobodno polje za unos napomena.

Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

Dodatne informacije o upravljanju kvalitetom dostupne su u modulu [Kvalitet](/docs/quality/quality-intro).

### Lotovi i serijski brojevi

#### Specifične funkcije

- **Generiši**: omogućava generisanje lotova i serijskih brojeva.
- **Obriši**: uklanja odabrani lot ili serijski broj.

Na ovoj kartici moguće je pregledati sve proizvedene artikle zajedno sa pripadajućim proizvedenim i škartiranim količinama.
Putem pripadajućih tabela moguće je unositi i menjati podatke vezane za **lotove** i **serijske brojeve**.
Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Etikete

Na kartici **Etikete** automatski se generišu etikete za proizvedene artikle.

#### Specifične funkcije

- **Nova**: dodaje novi red za unos etikete.
- **Obriši**: uklanja odabrani red etikete.
- **Novi UDC**: ponovo generiše šifru odabrane UDC jedinice.
- **Štampa odabranog**: štampa samo odabrane etikete.
- **Štampa svega**: štampa sve etikete.

Količina artikala po pojedinačnoj etiketi određuje se prema podacima definisanim u šifarniku artikla:
1. Kartica **Pakovanje** – koristi UDC i količinu definisanu u redu sa uključenom oznakom **Obavezna jedinica utovara**.
2. Kartica **Težina/Dimenzije** – koristi UDC i količinu definisanu u poljima **Vrsta jedinice utovara** i **Broj artikala po jedinici utovara**.
3. Kartica **Težina/Dimenzije** – polje **Broj paketa** – koristi količinu definisanu u polju **Broj artikala u paketu**. U tom slučaju UDC se neće automatski predložiti.

Operater može ručno ili putem polja **Kod barkoda** uneti potrebne **lotove** i **serijske brojeve**.
Polje **Status štampe** može imati sledeće vrednosti:

- **Nije štampano**
- **Štampano**
- **Ponovo štampano**
u zavisnosti od broja izvršenih štampanja etikete.
Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Materijali

Na ovoj kartici automatski se prikazuju materijali utrošeni za proizvodnju na osnovu količine nadređenog artikla i njegove sastavnice.
Ako je na kartici **Opšte** u okviru [Proizvodnih resursa](/docs/production/mes/production-resources) aktivirana oznaka **Obavezna prijava količine materijala**, materijal će biti prikazan žutom bojom sa količinom **0**, a operater će količinu morati da unese ručno.
Takođe je moguće evidentirati škartirane količine za svaki pojedinačni materijal, zajedno sa skladištem i predloškom knjiženja škarta.
Putem pripadajućih tabela moguće je unositi i menjati podatke o **lotovima** i **serijskim brojevima** za odabrani materijal.
Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Tim

#### Specifične funkcije

- **Pridruži timu**: omogućava dodavanje jednog ili više operatera u radni tim.
- **Napusti tim**: omogućava uklanjanje jednog ili više operatera iz radnog tima.
- **Zameni operatera**: omogućava zamenu aktivnog operatera drugim operaterom uz zadržavanje vremena ulaska i izlaska iz tima.
- **Ukloni iz tima**: uklanja red koji se odnosi na odabranog operatera.

Kartica **Tim** sastoji se od dve sekcije:

- **Spisak aktivnih operatera**: omogućava unos i pregled operatera koji aktivno učestvuju u prijavi proizvodnje. Prvi uneseni operater automatski dobija oznaku **Vođa tima**, koju je moguće naknadno promeniti.
- **Spisak neaktivnih operatera**: prikazuje operatere koji više nisu aktivni, ali su prethodno radili na ovoj fazi ili grupi faza u ranijim prijavama.

Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Analiza

Kartica je namenjena prikazu i analizi podataka vezanih za efikasnost proizvodnih aktivnosti.
Sastoji se od sledećih sekcija:

- **OEE dijagrami**
- **Stubičasti dijagrami**:
  - Analiza količina
  - Analiza vremena
- **Tabele**:
  - Vrednosti količina
  - Vrednosti vremena

**OEE (Overall Equipment Effectiveness)** odnosno **ukupna efikasnost proizvodnog resursa** predstavlja ključni pokazatelj uspešnosti (KPI) kojim se meri efikasnost proizvodnog procesa.

Vrednost **OEE** sastoji se od tri osnovna faktora:

- **Operativna raspoloživost (Availability)**: procenat stvarnog vremena rada (B) u odnosu na raspoloživo vreme (A).
  Izračunava se kao odnos između ukupno raspoloživog vremena rada postrojenja (A) i stvarnog vremena tokom kojeg je postrojenje proizvodilo (B).

- **Efikasnost rada (Performance)**: procenat stvarno proizvedenih artikala (D) u odnosu na teorijski mogući broj artikala (C).
  Tokom planiranja izračunava se maksimalan broj artikala koji se mogu proizvesti u optimalnim uslovima rada (C). Svako odstupanje od te vrednosti ukazuje na smanjenje produktivnosti (D).

- **Kvalitet proizvoda (Quality)**: procentualni odnos između količine ispravnih artikala (F) i ukupno proizvedenih artikala (E).
  Na taj način identifikuju se gubici uzrokovani škartom ili dodatnim doradama koje smanjuju ukupnu efikasnost procesa.

- **Ukupna efikasnost (OEE)**: izračunava se na osnovu prethodna tri pokazatelja prema formuli:

  OEE = Availability × Performance × Quality × 100  
      = B/A × D/C × F/E × 100

Pokazatelj **ukupne efikasnosti (OEE)** može se izračunavati sa uključenim ili bez uključenog vremena pripreme.

U sekciji stubičastih dijagrama nalaze se dijagrami **Analiza količina** i **Analiza vremena**, koji omogućavaju prikaz planiranih količina i vremena, kao i stvarno prijavljenih vrednosti evidentiranih do trenutka pregleda.
U tabelama koje se nalaze u poslednjoj sekciji takođe je moguće pregledati planirane količine i vremena, kao i stvarno prijavljene vrednosti, ali u obliku tabelarnog prikaza.
Podaci prikazani u svim sekcijama kartice **Analiza** odnose se na trenutno odabrane faze. Ako nijedna faza nije odabrana, prikazani podaci predstavljaju zbirne vrednosti svih faza prikazanih u tabeli **Faze u radu**.
Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Dokumenti i radna uputstva

Ova kartica sastoji se od sekcija **Dokumenti** i **Radna uputstva**.
Sekcija **Dokumenti** dodatno je podeljena na:

- **Dokumenti pridruženi odabranoj fazi**: omogućava pregled svih dokumenata povezanih sa *Šifarnikom artikala*, *Narudžbom kupca*, *Proizvodnom komisijom* i *Proizvodnim nalogom*, u skladu sa podešavanjima definisanim na kartici **Upravljanje dokumentima** unutar [Proizvodnih resursa](/docs/production/mes/production-resources).
- **Dokumenti pridruženi prijavi odabrane faze**: omogućava pregled postojećih dokumenata i dodavanje novih dokumenata direktno uz prijavu, uključujući i metodom *drag & drop*.
- **Radna uputstva**: omogućava pregled svih dokumenata povezanih sa odabranom fazom tehnološkog postupka proizvodnje.

Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Napomene

Kartica se sastoji od dve sekcije:

- **Spisak napomena (odaberite fazu)**: omogućava pregled i prikaz napomena vezanih za odabranu fazu. Napomene prikazane u ovoj tabeli preuzimaju se iz faza tehnološkog postupka, odnosno sa kartice **Napomene**.
- **Spisak napomena prijave**: omogućava unos i pregled napomena vezanih za trenutnu prijavu proizvodnje.

Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### Prethodne prijave

Ova kartica omogućava pregled svih prethodno evidentiranih prijava povezanih sa odabranom fazom.

Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

### ExtraData

Ova kartica sastoji se od dve tabele:

- **Spisak extra data (odaberite fazu)**: omogućava upravljanje extra data poljima vezanim za odabranu fazu.
- **Spisak extra data prijave**: omogućava upravljanje extra data poljima vezanim za proizvodnu prijavu koja se trenutno evidentira.

Ponašanje i izgled obrasca moguće je prilagoditi kroz podešavanja [Proizvodnih resursa](/docs/production/mes/production-resources).

## Sažetak i dodatne informacije

**Fluentis MES** omogućava celovito upravljanje proizvodnim prijavama, uključujući:

- Evidentiranje vremena i količina.
- Upravljanje lotovima i serijskim brojevima.
- Kontrolu kvaliteta.
- Analizu KPI pokazatelja putem OEE-a.
- Upravljanje timovima i proizvodnom dokumentacijom.

Napredna konfiguracija ponašanja obrasca centralizovana je u sledećim modulima:

- [Proizvodni resursi](/docs/production/mes/production-resources)
- [Workstation](/docs/production/mes/workstation)
- [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer)
- [Kvalitet](/docs/quality/quality-intro)

Ovakva integracija obezbeđuje sledljivost, kontrolu performansi i optimizaciju proizvodnih procesa unutar ERP sistema.