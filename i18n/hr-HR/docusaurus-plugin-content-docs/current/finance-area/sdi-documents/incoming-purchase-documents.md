---
title: Ulazni e-dokumenti
sidebar_position: 3
---


U Fluentisu je moguće, nakon što je usluga Fluentis Business Hub konfigurirana, primati fakture koje dolaze od dobavljača i prolaze kroz Exchange System. Jedan od načina za pregled ovih dokumenata je upravljanje fakturama u funkciji **Ulazni e-dokumenti**. Obrazac za upravljanje podijeljen je na odjeljak zaglavlja, s poljima filtra za pretraživanje dokumenata i prikazom rezultata.

- **Status e-dokumenta**: označava stanje dokumenta nakon što je preuzet u Fluentis. Može biti *Nedodijeljeno* ili *Primljeno*, kada faktura još nije povezana s knjiženjem ili s fakturom izdanom iz nabave ili dokumentom izdanim prema primatelju, ili *Primljeno*, kada je faktura povezana.  
- **Tip**: tip vrste dokumenta (ulazni račun).
- **Datum zaključnog dokumenta** i **Konačni broj dokumenta**:  datum i broj ulaznog dokumenta.
- **Dobavljač**: izdavatelj dokumenta
- **Naziv datoteke ES**: naziv XML datoteke koja je prisutna u sustavu za razmjenu i poslana u Fluentis Business Hub.
- **Datum zadnjeg događaja**: odnosi se na zadnju radnju koju je izvršio operater ili posljednju obavijest primljenu od ES-a tijekom procesa upravljanja dokumentima.

*Specifične tipke:*

> **Pogled**: omogućuje pregled odabranog XML dokumenta otvaranjem *Registar Sdi dokumenata* gdje je moguće vidjeti izvršene radnje na dokumentu, preuzeti privitke i povezati SdI datoteku s nabavkama, knjiženjima ili primateljima. Za više informacija o tim postupcima, pogledajte [odjeljak 1](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Otvori dokument**: omogućeno je samo ako je odabrani dokument u stanju *Primljeno* i otvara računovodstveno knjiženje/dokument nabave/naknadu kojoj je XML datoteka povezana.     
> **Preuzmi privitak**: preuzima odabranu XML datoteku.    
> **Uvezi XML datoteku**: automatski otvara prozor u kojem se mogu odabrati datoteke za uvoz u registar SDI dokumenata.     
> **Parametri stvaranja registracija**:  omogućuje postavljanje parametara za kreiranje knjiženja. Za više informacija pogledajte [odjeljak 2](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Kreiraj zapis**: omogućuje automatsko kreiranje knjiženja na temelju primljene XML datoteke. Za više informacija pogledajte [odjeljak 3](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Izrada ulaznog računa**:  omogućuje kreiranje fakture nabave na temelju XML datoteke. Nakon kreiranja fakture, Fluentis automatski povezuje odgovarajuću primku nabave ili narudžbenicu dobavljača, ako su prisutni. Za više informacija pogledajte [odjeljak 4](/docs/finance-area/sdi-documents/incoming-purchase-documents).    


### 1. Uspoređivanje elektroničkih ulaznih računa

Nakon pretrage ulaznih dokumenata, pomoću funkcije **Pogled** ili dvostrukim klikom na datoteku kojom se upravlja, moguće je kombinirati XML datoteku s računovodstvenim unosom ili dokumentom, klikom na redak koji se odnosi na XML datoteku, ulaskom u dijalog za upravljanje datotekama i korištenjem funkcija:
- **Dodijelite nabavi**
- **Dodijelite knjiženjima**
- **Dodijelite profesionalcima**

Klikom na jednu od tri gore navedene funkcije, prikazuje se dijalog za pretraživanje ulaznih računa evidentiranih u Fluentisu, tj. u računovodstvenim evidencijama koje se odnose na kupnje/nabavu i u dokumentima koji se odnose na naknade primatelja.  
Odabirom stavke u tablici rezultata, XML dokument bit će označen statusom **Primljeno** a uz tranziciju dokumenta, bit će prikazani datum i vrijeme povezivanja.

### 2. Parametri za automatsko kreiranje knjiženja

Unutar obrasca “Ulazni e-dokumenti”, odabirom tipke *Parametri stvaranja registracija* otvorit će se skočni prozor unutar kojeg svaki korisnik može konfigurirati sljedeće opcije upravljanja:   
1. Predloženi datum registracije (knjiženja) 
2. Prikaz detalja podataka   

S prvim, korisnik može odabrati hoće li mu se dodijeliti posljednji uneseni datum knjiženja (za porezni registar prema unaprijed postavljenoj/odabranoj osnovi), današnji datum, ili datum posljednjeg događaja same datoteke (odnosno datum primitka od strane SdI).

S drugim, korisnik postavlja prikaz obrasca za upravljanje samom datotekom, gdje će biti unaprijed unesene eventualne konfiguracije spremljene u evidenciji dobavljača koji je izdao datoteku. U ovom obrascu bit će moguće promijeniti već spremljene opcije ili prebrisati ono što je predloženo kako bi se prilagodilo trenutnim potrebama, prije nego što se kreira knjiženje. Bez ove opcije, obrazac će se otvoriti samo u slučaju da Fluentis nema sve parametre za postavljanje rezultirajućeg knjiženja, tipično za novu vrstu poreza ili plaćanja koju je dobavljač koristio u odnosu na prethodne koje je korisnik već obradio.

### 3. Automatsko knjiženje

Fluentis također daje mogućnost da se, počevši od primljenog ulaznog računa, automatski kreira odgovarajući računovodstveni unos. Jednostavno se odabere željeni ulazni račun i klikne na tipku **Kreiraj zapis**.
  
Nakon što se pritisne ovu tipku, Fluentis će analizirati datoteku kako bi putem OIB-a prodavatelja identificirao odgovarajući konto dobavljača. Moguće situacije su tri:
1. Nema pronađenog dobavljača; u tom će slučaju biti zatraženo želite li kreirati novi subjekt.
Pritiskom na ‘Da’ automatski će se otvoriti obrazac za kreiranje novog šifarnika, u kojem će biti postavljen OIB subjekta preuzet iz zajedničke baze podataka **Vies**: bit će potrebno ući u karticu ‘Podaci knjiženja’ kako biste dodijelili konto dobavljača novom šifarniku. Potrebno je spremiti promjene kako bi se nastavilo s postupkom, a ako se zatvori bez spremanja, postupak knjiženja bit će otkazan.  
2. Postoji više računovodstvenih konta tipa 'dobavljač' povezanih s šifarnikom koji ima OIB prodavatelja. U tom će slučaju biti potrebno odabrati koji konto koristiti.
3. Dobavljač je jedinstveno identificiran.

Ako je dobavljač već prisutan, ovisno o tome hoće li u ovom dokumentu po prvi puta biti unesen šifrirani artikl od strane dobavljača, Fluentis će identificirati prvo ‘šifru artikla’ prisutnu u datoteci (može ih biti više: šifra dobavljača, šifra kupca, EAN13, nomenklatura, itd.) i tražiti potvrdu koja će šifra artikla biti pohranjena za ovog subjekta.    

Sljedeća faza ovisi o korisničkom parametru *Prikaz podataka u detalju* ili o tome je li datoteka koja se obrađuje prva za ovog subjekta, ili ako sadrži šifru koju Fluentis ne može obraditi za ovaj subjekt. Ako je to prva faktura koja se prima od ovog dobavljača i nema unaprijed postavljenih postavki u njegovom šifarniku, tada će se uvijek otvoriti obrazac u kojem Fluentis traži da se definira:     
- **Predložak** koji treba koristit: bit će vidljivi predlošci knjiženja. Ako ne bude predložaka s tim karakteristikama, padajući izbornik će prikazati sve računovodstvene predloške (npr.: nije kodiran specifičan predložak za dokumente TD24 i želi se koristiti predložak za kupnju s TD01).  
- **Predloženi trošak**: u ovom polju može se definirati konto standardnog troška koji će se dodijeliti svim stavkama artikala za koje nije pohranjen specifičan konto.   
- **Artikli** prisutni na fakturi: u ovoj tablici bit će vidljivi kodovi i opisi stavki prisutnih u datoteci, kako bi se mogli dodijeliti specifična konta određenim artiklima na fakturi. Ako je artikl kodiran, Fluentis će pohraniti taj kod kako bi ga prepoznao u budućim dokumentima; ako artikl nije kodiran, pohraniti će se opisi stavki artikla (prvih 200 znakova)   
- **Stope poreza ili izuzeća**: unutar ove tablice bit će prikazan porezni razred s postotkom koji primjenjuje dobavljač ili priroda izuzeća koja je korištena. Fluentis će pohraniti postotak (npr. 25.00) ili kod izuzeća koji je koristio dobavljač zajedno s odgovarajućom stopom koju je odabrao korisnik.   

Svaka od ovih vrsta podataka omogućuje opciju spremanja odabira koji je napravljen, kako bi se mogao ponovo koristiti u budućim fakturama koje će biti primljene od istog subjekta.

Ako ovo nije prvi dokument i korisnik je postavio opciju *Prikaz podataka u detalju*, ovaj isti obrazac bit će prikazan s već dodijeljenim vrijednostima koje su prethodno pohranjene u šifarniku dobavljača koji je izdao datoteku, kako bi ih bilo moguće izmijeniti prije stvaranja knjiženja.

U slučaju da ovo nije prvi dokument i korisnik nije postavio opciju *Prikaz podataka u detalju*, tada se može otvoriti obrazac za konfiguraciju samo za one vrijednosti koje Fluentis ne zna kako obraditi u odnosu na konfiguracije već pohranjene u šifarniku dobavljača koji je izdao datoteku: na primjer, prvi put izdaje fakturu s tipom plaćanja MP12 umjesto prethodnog MP05, ili novi porezni izuzeće kod.

Završna faza bit će kreiranje knjiženja: nakon što se potvrde unesene konfiguracije, ili odmah nakon čitanja datoteke ako su one već pohranjene i korisnik nije postavio opciju *Prikaz podataka u detalju*, otvorit će se knjiženje popunjeno podacima iz same datoteke.     
Knjiženje se može dodatno izmijeniti u ovoj fazi, ali ove promjene neće utjecati na konfiguracije koje su već pohranjene u prethodnoj fazi.  

U slučaju da se ne dovrši spremanje knjiženja, Fluentis će poništiti izvršene radnje na datoteci, a ona će ostati u stanju *Nedodijeljeno* ili *Primljeno*: eventualne konfiguracije koje su već pohranjene u procesu bit će zadržane unutar šifarnika dobavljača.  

#### 3.1 Šifarnik dobavljača: Konfiguracija uvoza elektroničkih faktura  

Konfiguracije pohranjene tijekom obrade različitih datoteka pohranjuju se unutar raznih šifarnika dobavljača u kartici *Konfiguracija uvoza elektroničkih faktura*. U ovoj tablici nalaze se sekcije koje smo prethodno pohranili.  

U prvom polju navodimo što ćemo pohraniti u retku: vrstu dokumenta, vrstu prodaje/usluge, postotak PDV-a i njegovu prirodu, vrstu plaćanja. Ovisno o ovoj vrsti retka, aktivirat će se sljedeća polja: u polju 'Šifra P.A.' bit će prikazan popis službenih kodova koji se mogu koristiti u datotekama (od vrsta dokumenata, priroda PDV-a, vrsta plaćanja), u sljedećim će kolonama biti navedeni predložak, kao i stopa PDV-a, vrsta plaćanja ili konto račun Fluentisa. U polju ‘Vrijednost dobavljača' obično će biti prikazani ‘slobodni' podaci koje dobavljač može unijeti u datoteku: posebice postotak PDV-a (25.00, 5.00 itd.) ali prvenstveno šifra ili opis stavke artikla.

„Zadani troškovni konto (točka 2. prethodnog popisa) sprema se u standardno polje konta u matičnim podacima. Polje „Vrsta šifre artikla dobavljača” nalazi se na kartici 'Porezni podaci'.

Stoga je i na tim mjestima moguće pregledati prethodno spremljene postavke te ih izmijeniti za potrebe budućih knjiženja.

#### 3.2 Brisanje automatski stvorenog knjiženja

Postupiti na sljedeći način:

- Poništiti automatsku povezanost između SDI dokumenta i knjiženja, vraćajući SDI dokument u stanje *Nedodijeljeno* ili *Primljeno* (koristeći odgovarajući padajući izbornik koji je dostupan i u formi s popisom ulaznih SDI dokumenata, kao i u formi s popisom knjiženja).

- Postupiti brisanjem knjiženja na uobičajeni način, kao da je unesena putem postupka običnog knjiženja.

### 4. Izrada ulaznog računa i izvršenje otpremnice/primke i narudžbe

Iz primljenog XML dokumenta moguće je automatski stvoriti odgovarajući ulazni račun pomoću tipke **Izrada ulaznog računa**.
  
Nakon što se pritisne ovaj gumb, Fluentis će analizirati datoteku i, koristeći OIB isporučitelja, pronaći odgovarajući konto dobavljača. Moguće situacije su slične onima iz prethodnog dijela.     

Ako je ovo prva faktura koju primate od ovog dobavljača i u njegovom šifarniku nemate unaprijed postavljene postavke, otvorit će se obrazac u kojem ćete definirati:  
- **Vrsta ulaznog računa** koju treba odabrati iz već kodificirane tablice.
- **Vrsta prometa nabave**: opcionalno polje koje se može mijenjati i na razini pojedinačne stavke artikla.
- **Jedinica mjere** koja će se koristiti u slučaju da nije navedena na stavci artikla.  
- **Artikli**  prisutni na računu: ako je artikl kodificiran, Fluentis će pohraniti taj kod za njegovo prepoznavanje u budućim dokumentima. Ako artikl nije kodificiran, pohranit će se opisi stavki artikla (prvih 200 znakova).  
- **Stopa PDV-a ili izuzeća**: unutar ove mreže bit će prikazana tablica PDV-a s postotkom koji je primijenio dobavljač ili priroda primijenjenog izuzeća.   

Svaka od ovih vrsta podataka omogućava opciju spremanja odabrane postavke, kako bi je mogli ponovo koristiti za fakture koje će se kasnije primiti od istog dobavljača.

Nakon potvrde podataka, otvorit će se upravo stvorena ulazna faktura.   
Prilikom spremanja fakture, Fluentis provodi pretragu u primkama ili neizvršenim narudžbama od dobavljača kako bi nastavio s automatskim izvršenjem.

#### 4.1 Povezivanje fakture s primkom ili narudžbom za nabavu

Kada se nova faktura spremi, Fluentis automatski pokreće pretragu primki ili narudžbi koje je potrebno povezati s fakturom. Ako pronađe primku ili narudžbu koju treba povezati s cijelom fakturom ili s pojedinim stavkama, označava dokument (ili stavku dokumenta) kao izvršen i unosi u fakturu referencu na primku ili narudžbu u odgovarajuća polja. Prioriteti pretrage su sljedeći:
1.	Pretraga primki koje imaju isti datum i isti broj dokumenta naznačen u XML datoteci (ili s istim vrijednostima u poljima *Naša Referenca* i/ili *Vaša referenca*). Ako se pronađe primka s tim podacima, nastavlja se provjera artikala (prvo prema šifri artikla, zatim prema opisu). Ako i artikli odgovaraju onima unesenima na fakturi, izvršit će se ispunjavanje, eventualno parcijalno, primke.  
2. Pretraga se provodi u svim neizvršenim primkama koje su na ime istog dobavljača s fakture, a rezultati se sortiraju prema datumu i pretražuju po stavkama artikla. Artikli na fakturi mogu biti povezani s različitim primkama.  
3.	Ako postoje neizvršene primke za dobavljača, ali neke (ili sve) stavke ne mogu biti povezane s fakturom, bit će prikazan obrazac za *ručno povezivanje*. 
4.	Ako ne postoje primke za dobavljača, pretraga će se obaviti na narudžbama dobavljača počinjući s podacima narudžbe za nabavu: traži se narudžba koja ima isti datum i broj dokumenta kao ID dokumenta naveden u XML datoteci (ili s istim vrijednostima u poljima *Naša Referenca* i/ili *Vaša Referenca*). Ako se narudžba identificira, nastavit će se s provjerom artikala prema *Referenci broja stavke*; u slučaju neuspješnog rezultata, sustav će izvršiti pretraživanje najprije prema šifri, a zatim prema opisu artikla.
5.	Ako se ne identificira odgovarajuća narudžba, provodi se pretraga svih neizvršenih narudžbi na ime dobavljača s fakture, a zatim se uspoređuje pojedinačna stavka artikla. Faktura može obraditi više narudžbi.  
6.	Ako nije moguće izvršiti povezivanje neke (ili svih) stavki, otvorit će se obrazac za *Ručno povezivanje*. U suprotnom, narudžba će biti označena kao *Ispunjeno* (ili *Djelomično ispunjeno*) i stavke artikla na fakturi sadržavat će referencu na identificiranu narudžbu.  

Obrazac za **Ručno povezivanje** otvara se u slučajevima kada se izvršenje ne može automatski obaviti nakon kreiranja fakture ili kada se klikne tipka *Sdi – Zatvaranje dokumenata* na traci izbornika ulazne fakture.    
U ovom obrascu bit će prikazane sve narudžbe i primke na ime dobavljača koje još nisu izvršene, kako bi korisnik mogao ručno označiti, za svaku stavku artikla na fakturi, odgovarajuću primku ili narudžbu.
