---
title: Ulazni e-dokumenti
sidebar_position: 3
---


U Fluentisu je moguće, nakon što je usluga Fluentis Business Hub konfigurisana, primati fakture koje dolaze od dobavljača i prolaze kroz Exchange System. Jedan od načina za pregled ovih dokumenata je upravljanje fakturama u funkciji **Ulazni e-dokumenti**. Forma za upravljanje podeljena je na odeljak zaglavlja, sa poljima filtera za pretraživanje dokumenata i prikazom rezultata.

- **Status e-dokumenta**: označava stanje dokumenta nakon što je preuzet u Fluentis. Može biti *Nedodeljeno* ili *Primljeno*, kada faktura još nije povezana sa knjiženjem ili sa fakturom izdatom iz nabavke ili dokumentom izdatim prema primaocu, ili *Primljeno*, kada je faktura povezana.  
- **Tip**: tip vrste dokumenta (ulazni račun).
- **Datum konačnog dokumenta** i **Konačni broj dokumenta**: datum i broj ulaznog dokumenta.
- **Dobavljač**: izdavalac dokumenta.
- **Naziv datoteke ES**: naziv XML datoteke koja je prisutna u sistemu za razmenu i poslata u Fluentis Business Hub.
- **Datum poslednjeg događaja**: odnosi se na poslednju radnju koju je izvršio operater ili poslednje obaveštenje primljeno od ES-a tokom procesa upravljanja dokumentima.

*Specifična dugmad:*

> **Pogled**: omogućava pregled odabranog XML dokumenta otvaranjem *Registra SdI dokumenata*, gde je moguće videti izvršene radnje na dokumentu, preuzeti priloge i povezati SdI datoteku sa nabavkama, knjiženjima ili primaocima. Za više informacija o tim postupcima pogledajte [odeljak 1](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Otvori dokument**: omogućeno je samo ako je odabrani dokument u stanju *Primljeno* i otvara računovodstveno knjiženje/dokument nabavke/naknadu sa kojom je XML datoteka povezana.     
> **Preuzmi prilog**: preuzima odabranu XML datoteku.    
> **Uvezi XML datoteku**: automatski otvara prozor u kojem se mogu odabrati datoteke za uvoz u registar SDI dokumenata.     
> **Parametri kreiranja knjiženja**: omogućava podešavanje parametara za kreiranje knjiženja. Za više informacija pogledajte [odeljak 2](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Kreiraj knjiženje**: omogućava automatsko kreiranje knjiženja na osnovu primljene XML datoteke. Za više informacija pogledajte [odeljak 3](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Kreiranje ulaznog računa**: omogućava kreiranje fakture nabavke na osnovu XML datoteke. Nakon kreiranja fakture, Fluentis automatski povezuje odgovarajuću prijemnicu nabavke ili narudžbenicu dobavljača, ako su prisutne. Za više informacija pogledajte [odeljak 4](/docs/finance-area/sdi-documents/incoming-purchase-documents).    


### 1. Uparivanje elektronskih ulaznih računa

Nakon pretrage ulaznih dokumenata, pomoću funkcije **Pogled** ili dvostrukim klikom na datoteku kojom se upravlja, moguće je povezati XML datoteku sa računovodstvenim knjiženjem ili dokumentom, klikom na red koji se odnosi na XML datoteku, ulaskom u dijalog za upravljanje datotekama i korišćenjem funkcija:

- **Dodeli nabavci**
- **Dodeli knjiženjima**
- **Dodeli primaocima naknada**

Klikom na jednu od tri gore navedene funkcije prikazuje se dijalog za pretraživanje ulaznih računa evidentiranih u Fluentisu, odnosno računovodstvenih evidencija koje se odnose na kupovine/nabavku i dokumenata koji se odnose na naknade primalaca.  
Odabirom stavke u tabeli rezultata, XML dokument biće označen statusom **Primljeno**, a uz tranziciju dokumenta biće prikazani datum i vreme povezivanja.

### 2. Parametri za automatsko kreiranje knjiženja

Unutar forme „Ulazni e-dokumenti“, odabirom dugmeta *Parametri kreiranja knjiženja* otvoriće se iskačući prozor unutar kojeg svaki korisnik može konfigurisati sledeće opcije upravljanja:   
1. Predloženi datum registracije (knjiženja)  
2. Prikaz detalja podataka   

Pomoću prve opcije korisnik može odabrati da li će mu biti dodeljen poslednji uneti datum knjiženja (za poreski registar prema unapred postavljenoj/odabranoj osnovi), današnji datum ili datum poslednjeg događaja same datoteke (odnosno datum prijema od strane SdI-ja).

Pomoću druge opcije korisnik podešava prikaz forme za upravljanje samom datotekom, gde će unapred biti unete eventualne konfiguracije sačuvane u evidenciji dobavljača koji je izdao datoteku. U ovoj formi biće moguće promeniti već sačuvane opcije ili prepisati ono što je predloženo kako bi se prilagodilo trenutnim potrebama, pre nego što se kreira knjiženje. Bez ove opcije, forma će se otvoriti samo u slučaju da Fluentis nema sve parametre za postavljanje rezultirajućeg knjiženja, tipično za novu vrstu poreza ili plaćanja koju je dobavljač koristio u odnosu na prethodne koje je korisnik već obradio.

### 3. Automatsko knjiženje

Fluentis takođe pruža mogućnost da se, počevši od primljenog ulaznog računa, automatski kreira odgovarajuće računovodstveno knjiženje. Dovoljno je odabrati željeni ulazni račun i kliknuti na dugme **Kreiraj knjiženje**.
  
Nakon što se pritisne ovo dugme, Fluentis će analizirati datoteku kako bi putem PIB-a prodavca identifikovao odgovarajući konto dobavljača. Moguće su tri situacije:

1. Nije pronađen nijedan dobavljač; u tom slučaju biće postavljeno pitanje da li želite da kreirate novi subjekt.

Pritiskom na „Da“ automatski će se otvoriti forma za kreiranje novog šifarnika, u kojoj će biti postavljen PIB subjekta preuzet iz zajedničke baze podataka **Vies**: biće potrebno otvoriti karticu „Podaci knjiženja“ kako biste dodelili konto dobavljača novom šifarniku. Potrebno je sačuvati izmene kako bi se nastavilo sa postupkom, a ako se forma zatvori bez čuvanja, postupak knjiženja biće otkazan.  

2. Postoji više računovodstvenih konta tipa „dobavljač“ povezanih sa šifarnikom koji ima PIB prodavca. U tom slučaju biće potrebno odabrati koji konto će se koristiti.

3. Dobavljač je jednoznačno identifikovan.

Ako je dobavljač već prisutan, u zavisnosti od toga da li je u ovom dokumentu prvi put unet šifrirani artikal od strane dobavljača, Fluentis će identifikovati prvu „šifru artikla“ prisutnu u datoteci (može ih biti više: šifra dobavljača, šifra kupca, EAN13, nomenklatura itd.) i zatražiti potvrdu koja će šifra artikla biti sačuvana za ovog subjekta.    

Sledeća faza zavisi od korisničkog parametra *Prikaz podataka u detalju* ili od toga da li je datoteka koja se obrađuje prva za ovog subjekta, odnosno da li sadrži šifru koju Fluentis ne može da obradi za ovaj subjekt. Ako je ovo prva faktura primljena od ovog dobavljača i nema unapred definisanih podešavanja u njegovom šifarniku, uvek će se otvoriti forma u kojoj Fluentis zahteva da se definiše:     

- **Šablon** koji treba koristiti: biće vidljivi šabloni knjiženja. Ako nema šablona sa tim karakteristikama, padajući meni će prikazati sve računovodstvene šablone (npr. nije kodiran specifičan šablon za dokumente TD24 i želi se koristiti šablon za nabavku sa TD01).  
- **Predloženi trošak**: u ovom polju može se definisati konto standardnog troška koji će biti dodeljen svim stavkama artikala za koje nije sačuvan specifičan konto.   
- **Artikli** prisutni na fakturi: u ovoj tabeli biće vidljive šifre i opisi stavki prisutnih u datoteci kako bi se određenim artiklima na fakturi mogla dodeliti specifična konta. Ako je artikal kodiran, Fluentis će sačuvati tu šifru kako bi ga prepoznao u budućim dokumentima; ako artikal nije kodiran, biće sačuvani opisi stavki artikla (prvih 200 znakova).   
- **Poreske stope ili oslobođenja**: unutar ove tabele biće prikazana poreska stopa sa procentom koji primenjuje dobavljač ili vrsta oslobođenja koja je korišćena. Fluentis će sačuvati procenat (npr. 25.00) ili šifru oslobođenja koju je koristio dobavljač zajedno sa odgovarajućom stopom koju je odabrao korisnik.   

Svaka od ovih vrsta podataka omogućava opciju čuvanja izvršenog izbora kako bi se mogao ponovo koristiti u budućim fakturama koje će biti primljene od istog subjekta.
Ako ovo nije prvi dokument i korisnik je postavio opciju *Prikaz podataka u detalju*, ova ista forma biće prikazana sa već dodeljenim vrednostima koje su prethodno sačuvane u šifarniku dobavljača koji je izdao datoteku, kako bi ih bilo moguće izmeniti pre kreiranja knjiženja.

U slučaju da ovo nije prvi dokument i korisnik nije postavio opciju *Prikaz podataka u detalju*, forma za konfiguraciju može se otvoriti samo za one vrednosti koje Fluentis ne zna kako da obradi u odnosu na konfiguracije koje su već sačuvane u šifarniku dobavljača koji je izdao datoteku: na primer, prvi put izdaje fakturu sa vrstom plaćanja MP12 umesto prethodnog MP05 ili koristi novu šifru poreskog oslobođenja.
Završna faza biće kreiranje knjiženja: nakon što se potvrde unete konfiguracije ili odmah nakon čitanja datoteke ako su one već sačuvane i korisnik nije postavio opciju *Prikaz podataka u detalju*, otvoriće se knjiženje popunjeno podacima iz same datoteke.     

Knjiženje se u ovoj fazi može dodatno izmeniti, ali te izmene neće uticati na konfiguracije koje su već sačuvane u prethodnoj fazi.  

U slučaju da se ne završi čuvanje knjiženja, Fluentis će poništiti izvršene radnje na datoteci, a ona će ostati u stanju *Nedodeljeno* ili *Primljeno*: eventualne konfiguracije koje su već sačuvane tokom postupka biće zadržane u šifarniku dobavljača.  

#### 3.1 Šifarnik dobavljača: Konfiguracija uvoza elektronskih faktura

Konfiguracije sačuvane tokom obrade različitih datoteka čuvaju se u odgovarajućim šifarnicima dobavljača, na kartici *Konfiguracija uvoza elektronskih faktura*. U ovoj tabeli nalaze se sekcije koje su prethodno sačuvane.  
U prvom polju navodi se šta će biti sačuvano u redu: vrsta dokumenta, vrsta prodaje/usluge, procenat PDV-a i njegova priroda, vrsta plaćanja. U zavisnosti od ove vrste reda, aktiviraće se sledeća polja: u polju „Šifra P.A.“ biće prikazan spisak službenih šifara koje se mogu koristiti u datotekama (vrste dokumenata, prirode PDV-a, vrste plaćanja), dok će u sledećim kolonama biti navedeni šablon, kao i stopa PDV-a, vrsta plaćanja ili konto Fluentisa. U polju „Vrednost dobavljača“ obično će biti prikazani „slobodni“ podaci koje dobavljač može uneti u datoteku: naročito procenat PDV-a (25.00, 5.00 itd.), ali pre svega šifra ili opis stavke artikla.
„Podrazumevani troškovni konto“ (tačka 2 prethodnog spiska) čuva se u standardnom polju konta u matičnim podacima. Polje „Vrsta šifre artikla dobavljača“ nalazi se na kartici „Poreski podaci“.

Stoga je i na tim mestima moguće pregledati prethodno sačuvana podešavanja i izmeniti ih za potrebe budućih knjiženja.

#### 3.2 Brisanje automatski kreiranog knjiženja

Postupiti na sledeći način:

- Poništiti automatsku povezanost između SDI dokumenta i knjiženja, vraćajući SDI dokument u stanje *Nedodeljeno* ili *Primljeno* (korišćenjem odgovarajućeg padajućeg menija koji je dostupan i u formi sa spiskom ulaznih SDI dokumenata i u formi sa spiskom knjiženja).
- Izbrisati knjiženje na uobičajen način, kao da je uneto putem postupka običnog knjiženja.

### 4. Kreiranje ulaznog računa i izvršenje otpremnice/prijemnice i narudžbine

Iz primljenog XML dokumenta moguće je automatski kreirati odgovarajući ulazni račun pomoću dugmeta **Kreiranje ulaznog računa**.
Nakon što se pritisne ovo dugme, Fluentis će analizirati datoteku i, koristeći PIB isporučioca, pronaći odgovarajući konto dobavljača. Moguće situacije slične su onima iz prethodnog odeljka.

Ako je ovo prva faktura koju primate od ovog dobavljača i u njegovom šifarniku nemate unapred definisana podešavanja, otvoriće se forma u kojoj ćete definisati:  

- **Vrstu ulaznog računa** koju treba odabrati iz već kodirane tabele.
- **Vrstu prometa nabavke**: opciono polje koje se može menjati i na nivou pojedinačne stavke artikla.
- **Jedinicu mere** koja će se koristiti u slučaju da nije navedena na stavci artikla.  
- **Artikle** prisutne na računu: ako je artikal kodiran, Fluentis će sačuvati tu šifru kako bi ga prepoznao u budućim dokumentima. Ako artikal nije kodiran, biće sačuvani opisi stavki artikla (prvih 200 znakova).  
- **Stopu PDV-a ili oslobođenja**: unutar ove tabele biće prikazana stopa PDV-a sa procentom koji je primenio dobavljač ili priroda primenjenog oslobođenja.   

Svaka od ovih vrsta podataka omogućava opciju čuvanja odabranog podešavanja kako bi se moglo ponovo koristiti za fakture koje će kasnije biti primljene od istog dobavljača.

Nakon potvrde podataka otvoriće se upravo kreirana ulazna faktura.   
Prilikom čuvanja fakture, Fluentis pretražuje prijemnice ili neizvršene narudžbine dobavljača kako bi nastavio sa automatskim izvršenjem.

#### 4.1 Povezivanje fakture sa prijemnicom ili narudžbinom za nabavku

Kada se nova faktura sačuva, Fluentis automatski pokreće pretragu prijemnica ili narudžbina koje je potrebno povezati sa fakturom. Ako pronađe prijemnicu ili narudžbinu koju treba povezati sa celom fakturom ili sa pojedinačnim stavkama, označava dokument (ili stavku dokumenta) kao izvršen i unosi u fakturu referencu na prijemnicu ili narudžbinu u odgovarajuća polja. Prioriteti pretrage su sledeći:

1. Pretraga prijemnica koje imaju isti datum i isti broj dokumenta naveden u XML datoteci (ili iste vrednosti u poljima *Naša referenca* i/ili *Vaša referenca*). Ako se pronađe prijemnica sa tim podacima, nastavlja se provera artikala (prvo prema šifri artikla, a zatim prema opisu). Ako i artikli odgovaraju onima unetim na fakturi, izvršiće se ispunjavanje prijemnice, eventualno delimično.  
2. Pretraga se vrši u svim neizvršenim prijemnicama koje glase na istog dobavljača sa fakture, a rezultati se sortiraju prema datumu i pretražuju po stavkama artikla. Artikli na fakturi mogu biti povezani sa različitim prijemnicama.  
3. Ako postoje neizvršene prijemnice za dobavljača, ali neke (ili sve) stavke ne mogu biti povezane sa fakturom, biće prikazana forma za *ručno povezivanje*.  
4. Ako ne postoje prijemnice za dobavljača, pretraga će se izvršiti u narudžbinama dobavljača, počevši od podataka narudžbine za nabavku: traži se narudžbina koja ima isti datum i broj dokumenta kao ID dokumenta naveden u XML datoteci (ili iste vrednosti u poljima *Naša referenca* i/ili *Vaša referenca*). Ako se narudžbina identifikuje, nastaviće se sa proverom artikala prema *Referenci broja stavke*; u slučaju neuspešnog rezultata, sistem će izvršiti pretragu najpre prema šifri, a zatim prema opisu artikla.
5. Ako se ne identifikuje odgovarajuća narudžbina, vrši se pretraga svih neizvršenih narudžbina koje glase na dobavljača sa fakture, a zatim se upoređuju pojedinačne stavke artikala. Faktura može obraditi više narudžbina.  
6. Ako nije moguće povezati neke (ili sve) stavke, otvoriće se forma za *Ručno povezivanje*. U suprotnom, narudžbina će biti označena kao *Ispunjeno* (ili *Delimično ispunjeno*), a stavke artikala na fakturi sadržaće referencu na identifikovanu narudžbinu.  

Forma za **Ručno povezivanje** otvara se u slučajevima kada izvršenje nije moguće automatski obaviti nakon kreiranja fakture ili kada se klikne na dugme *Sdi – Zatvaranje dokumenata* na traci menija ulazne fakture.    
U ovoj formi biće prikazane sve narudžbine i prijemnice koje glase na dobavljača i koje još nisu izvršene, kako bi korisnik mogao ručno označiti, za svaku stavku artikla na fakturi, odgovarajuću prijemnicu ili narudžbinu.