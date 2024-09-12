---
title: Šifarnik serijskih brojeva
sidebar_position: 5
---

Ovaj prozor prikazuje detalje o lotu i sastoji se od 4 različite sekcije:

### Zaglavlje serijskog broja

U ovoj sekciji prikazuju se, s mogućnošću izmjene, osnovni podaci o seriji, posebno:

**Artikl**: u 3 polja prikazuju se klasa, šifra i opis artikla na koji se odnosi serijski broj. Ovo je artikl definitivno označen za upravljanje *serijskim brojevima* u *Šifarnik artikla* > kartica *Loti/SB*, inače ne bi bilo moguće izvršiti punjenje serije za taj artikl;

**Varijanta**: u 2 polja prikazuju se šifra i opis varijante artikla na koji se odnosi serijski broj, ako postoji;

**Šifra lota**: u ovom polju prikazuje se šifra Lota kojem pripada serijski broj. Artikl na koji se odnosi serijski broj također može biti upravljan serijama; u tom slučaju jedan lot od 100 komada, na primjer, može se sastojati od 100 različitih serijskih brojeva. Isti serijski broj također može pripadati različitim lotovima istog artikla ili lotovima različitih artikala;

**Vrsta lota**: označava vrstu lota koja je korištena;

**Vrsta šifre lota**: označava vrstu šifre lota s kojom je lot generiran;

**Šifra serijskog broja**: u ovom polju prikazuje se šifra serijskog broja. Ovo je polje koje korisnik može uređivati, iako se tijekom operacija punjenja može automatski generirati prema određenim pravilima postavljenim u Tipu Serijskog Broja povezanom s artiklom. Prvo se unosi šifra i opis tipa šifre serijskog broja, zatim se sprema redak, a zatim se odlučuje koje parametre želite koristiti za sastavljanje upravo stvorenog tipa šifre lota. Za svaki korišteni parametar možete odabrati koliko znakova treba biti formirano i eventualno i znak za punjenje koji treba koristiti. Na primjer, s parametrom 'Progresivni broj' postavljanjem znaka za punjenje na '0' i postavljanjem duljine na '5' bit će stvoreni serijski brojevi s prvom brojkom kao 00000, zatim 00001, zatim 00002 i tako dalje. Tip šifre Serijskog Broja tada treba biti povezan s Anagrafikom artikla u odgovarajućem polju smještenom na kartici Lotovi/SerialNumber, tako da u postupcima koji automatski stvaraju šifru serijskog broja za određeni artikl, serijski broj stvarno bude generiran prema pravilima postavljenim u tipu šifre serijskog broja povezanom s artiklom. Polje je alfanumeričko i može sadržavati najviše 50 znakova;

**Vrsta serijskog broja**: označava vrstu šifre serijskog broja s kojom je serijski broj generiran;

**Datum Početka**: u ovom polju prikazuje se datum kada je serijski broj punjen, koji korisnik može uređivati. Ako je serijski broj popunjen putem unosa u skladište, taj se datum predlaže identičnim datumom kao i datum stvaranja unosa; ako je serijski broj popunjen putem unosa na dostavnicu kupnje ili unosa povrata kontnog posla, taj se datum postavlja istim kao i datum dostavnice kupnje ili kontnog posla (osim ako ga korisnik nije ručno promijenio unutar dostavnice); ako je serijski broj popunjen putem unosa proizvodne signalizacije, taj se datum predlaže kao identičan datumu proizvodne signalizacije;

**Datum isteka**: u ovom polju prikazuje se datum isteka serijskog broja, koji korisnik može uređivati, a izračunava se prilikom stvaranja
lota i kasnijeg punjenja pokretnog skladišta, počevši od datuma početka i dodavanjem dana valjanosti serijskog broja unesenih u kartici Loti/SB u anagrafici artikla;

**Šifra kupca**: u ovom polju prikazuje se šifra *kupca Lota*, obično naziv koji kupac dodjeljuje lotu. Ovo je polje koje korisnik može urediti, a nije generirano automatski tijekom operacija punjenja. Također može sadržavati najviše 50 znakova i može biti isti za različite lote različitih artikala;

**Šifra dobavljača**: u ovom polju prikazuje se šifra dobavljača Lota, obično naziv koji dobavljač dodjeljuje lotu. Ovo je polje koje korisnik može urediti, a nije generirano automatski tijekom operacija punjenja. Također može sadržavati najviše 50 znakova i može biti isti za različite lote različitih artikala;

**Dobavljač**: u ovom polju upisuje se račun/podračun/opis dobavljača;

**Opozvano**: ako je aktivno, označava da je serijski broj poništen;

**Prislino zatvoreno**: ako je aktivno, označava da je serijski broj zatvoren silom;

**Rezervirano**: ako je aktivno, označava da je serijski broj rezerviran.


### Učitavanje

Ova sekcija prikazuje osnovne podatke o dokumentima koji su doprinijeli učitavanju serijskog broja. Obično se uvijek prikazuje detalj o *podacima skladišta* koja je učitala serijski broj; ako je ovo generirano putem učitavanja dokumenta (primopredaja, povrat, itd.), tada će se pojaviti i redak koji prikazuje detalje tog dokumenta.

*Dvostrukim klikom na redak dokumenta moguće je, sukladno korisničkim pravima, otvoriti dokument samo za pregled.*.

**Količina**: prikazuje količinu lota koja je korištena u dokumentu;

**Jedinica mjere**: označava jedinicu mjere korištenu u dokumentu;

**Broj paketa**: pokazuje broj paketa;

**Datum unosa**: označava datum unosa;

**Prisilino zatvoreno**: ako je aktivno, označava da je serijski broj zatvoren silom;

**Referentni dokument**: prikazuje vrstu dokumenta koji je generirao punjenje serijskog broja. Može biti registracija skladišta, dobavnica kupnje ili povrat računa;

**Registracija**: prikazuje broj i datum dokumenta;

**Skladište**: prikazuje kod i opis skladišta na kojem je napunjen serijski broj;

**Lokacija**: prikazuje kod i opis lokacije;

**Uzrok**: prikazuje kod i opis uzroka korištenog za stvaranje tog pokreta punjenja;

**Kupac/Dobavljač**: prikazuje račun, podračun i opis povezane s kupcem ili dobavljačem.


### Iskorišćen

Ova sekcija prikazuje osnovne podatke o prvom dokumentu, kronološki, koji je iskoristio serijski broj. Ako je serijski broj izravno iskorišten putem registracije skladišta, tada u ovom prikazu neće biti ničega, budući da se registracija skladišta za iskorištavanje serijskog broja uvijek prikazuje u sekciji 4. Ovi podaci prikazuju se u tablici u kojoj se pojavljuju sljedeće kolone:

**Količina**: prikazuje količinu lota koja je korištena u dokumentu;

**Jedinica mjere**: označava jedinicu mjere korištenu u dokumentu;

**Datum unosa**: označava datum unosa;

**Referentni dokument**: prikazuje vrstu dokumenta koja je prvi put iskoristila serijski broj. Može biti proizvodni nalog, narudžbenica kupca, dobavnica prodaje, prodajna faktura, lista izdavanja, dobavnica isporuke kontnog posla, povrat računa;

**Registracija**: prikazuje broj i datum dokumenta;

**Skladište**: prikazuje kod i opis skladišta na kojem je ispražnjen serijski broj;

**Lokacija**: prikazuje kod i opis lokacije;

**Uzrok**: prikazuje kod i opis uzroka korištenog za stvaranje tog pokreta punjenja;

**Kupac/Dobavljač**: prikazuje račun, podračun i opis povezane s kupcem ili dobavljačem.

*Dvostrukim klikom na redak dokumenta moguće je, sukladno korisničkim pravima, otvoriti dokument samo za pregled*.