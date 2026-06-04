---
title: Šifarnik lotova i Sljedivost
sidebar_position: 3
---

### Šifarnik lotova

Obrazac prikazuje detalje o lotu i sastoji se od 4 različite sekcije:

## Zaglavlje lota

U ovoj sekciji se prikazuju, s mogućnošću izmjene, glavni podaci o lotu, posebno:
**Artikl**: u 3 povezana polja prikazuju se klasa, kod i opis artikla na koji se odnosi lot. To svakako uključuje artikl s aktiviranim zastavicom *Upravljanje lotovima u podacima artikla > kartici Loti/SB*, inače ne bi bilo moguće izvršiti učitavanje lota za taj artikl;

**Varijanta**: u 2 povezana polja prikazuju se kod i opis varijante artikla na koji se odnosi lot, ako postoji;

**Lot**: u ovom polju prikazuje se šifra lota. To je polje koje korisnik može urediti, iako se tijekom operacija učitavanja može generirati automatski na temelju određenih pravila postavljenih u *Tipu šifre lota* povezanom s artiklom. Prvo se unosi šifra i opis *tipa šifre lota*, spremi se redak, a zatim se odlučuje koje se parametre želi koristiti za sastavljanje upravo stvorenog tipa šifre lota. Za svaki korišteni parametar možete odlučiti koliko će se znakova koristiti i, po potrebi, koji se punjeni znak koristi. Na primjer, s parametrom Broj uzastopnih postavljanjem punila "0" i postavljanjem Duge "5" stvaraju se lotovi s prvom brojkom kao 00000, zatim 00001, zatim 00002 i tako dalje. Tip šifre lota tada se mora povezati s podacima artikla u odgovarajućem polju koje se nalazi na kartici Lotovi/SerialNumber, tako da u postupcima koji automatski stvaraju kod lote za određeni artikl lot bude generiran prema pravilima postavljenim u tipu šifre lota povezanom s artiklom. Polje je alfanumeričko i može dosegnuti maksimalnu duljinu od 50 znakova.To nije identifikator lota, jer je moguće izvršiti više učitavanja u različitim trenucima istog lota; u tom slučaju pojavilo bi se više redaka s istom *šifrom lota* unutar mreže *Pretrage lotova*;

**Dobavljač**: u ovom polju navodi se račun/podračun/opis dobavljača;

**Proizvođač**: u ovom polju navodi se nadimak/naziv tvrtke proizvođača;

**Šifra dobavljača**: u ovom polju prikazuje se kod dobavljača loteva, obično naziv koji dobavljač dodjeljuje lotu. To je polje koje korisnik može urediti, a ne generira se automatski tijekom operacija učitavanja. Također može doseći maksimalnu duljinu od 50 znakova i može biti identičan čak i za različite lotove različitih artikala;

**Vrsta izvještaja naljepnica**: u ovom polju unosi se vrsta naljepnice koja će se ispisati za ovaj lot;

**Datum početka**: u ovom polju obično se prikazuje datum kada je lot učitan, koji korisnik može urediti. Ako je lot učitan putem zapisivanja u skladištu, ovaj se datum predlaže identičan datumu kada je zapis napravljen; ako je lot učitan putem upisivanja dostavnice kupnje ili registracije povratka posla, ovaj datum postavlja se kao jednak datumu dostavnice kupnje ili poslovnog povratka (osim ako korisnik nije ručno promijenio unutar dostavnice); ako je lot učitan putem registracije proizvodnog signala, ovaj datum predlaže se kao identičan datumu proizvodnog signala;

**Datum dospijeća**: u ovom polju prikazuje se datum isteka roka valjanosti lota, koji korisnik može urediti, a koji se izračunava pri stvaranju lota i stoga pri učitavanju odgovarajuće trgovine, počevši od datuma početka i dodavši broj dana valjanosti lota unesen u kartici Lotovi/SerialNumber u podacima artikla;

**Početna količina**: u ovom polju prikazuje se početna količina učitana za lot putem prvog dokumenta koji je učitao lot;

**Broj paketa**: pokazuje broj paketa učitanih u lot;

**Napomene**: u ovom polju prikazuju se bilješke unesene u registraciju skladišta prilikom učitavanja lota. Polje može urediti korisnik i može se vidjeti i u Pretrazi lotova, kao što je gore navedeno;

**Status lota**: okvir prikazuje stanje lota. On je promjenjiv od strane korisnika i poziva podatke iz odgovarajuće tablice *Stanje lota*. Stanje lota određuje mogućnost korištenja ili nekorištenja lota u prodajnim dokumentima, proizvodnji i zapisima o izlazu iz skladišta. Međutim, ovo je neobvezujuće upravljanje, pa korisnik nije obvezan koristiti funkcionalnost tablice *Stanje lota*;

**Procjena lotova**: Padajući izbornik prikazuje podatke o evaluaciji lota. Može ga mijenjati korisnik i povlači podatke iz odgovarajuće tablice *Ocjena lota*. Ovi podaci imaju isključivo deskriptivne funkcije, pa nemaju poseban utjecaj na procedure i prozore Ideal, stoga su i oni opcionalni;

**Lot prodao**: ako je ova oznaka aktivirana, označava da je lot dostupan za preuzimanje u prodajnim dokumentima, proizvodnji ili evidencijama iz skladišta. Ovo je praktično mogućnost koju korisnik ima kako bi odredio može li se lot preuzeti ili ne, kao alternativu kompleksnijem i detaljnijem upravljanju stanjem lota;

**Zatvoreno**: ako je ova oznaka aktivirana, označava da je lot potpuno ispražnjen iz skladišta. Napomena da nakon zatvaranja skladišta, svi preostali lotovi za tu godinu automatski se označavaju kao *Zatvoreni*, jer se na početnu zalihu nove godine ponovno učitavaju "blizanci" lotova s količinama ostataka s kraja prethodne godine prije zatvaranja.

## Utovar

U ovoj sekciji prikazuju se osnovni podaci dokumenata koji su doprinijeli učitavanju lota. Općenito, uvijek se prikazuje detalj registracije u skladištu koji je učitao lot; ako je ova generirana putem učitavanja dokumenata (kao što su otpremnice, povrati, itd.), tada se prikazuje i redak s detaljima tog dokumenta.

*Klikom na dvostruki klik na redak dokumenta, korisnik, prema svojim pravima, može otvoriti dokument u samo za čitanje.*

**Količina**: ovdje se prikazuje količina lota koja je bila angažirana u dokumentu;

**Jedinica mjere**: označava jedinicu mjere korištenu u dokumentu;

**Broj paketa**: pokazuje broj paketa;

**Datum unosa**: označava datum unosa;

**Status lota**: označava status lota;

**Prisilno zatvoreno**: ako je aktivno, označava da je lot prisilno zatvoren;

**Referentni dokument**: ovdje se prikazuje vrsta dokumenta koja je generirala učitavanje lota;

**Broj**: ovdje se prikazuje broj dokumenta;

**Datum unosa**: ovdje se prikazuje datum dokumenta;

**Skladište**: ovdje se prikazuju kod i opis skladišta na kojem je učitan lot;

**Lokacija**: ovdje se prikazuju kod i opis lokacije;

**Uzrok**: ovdje se prikazuju kod i opis uzroka korištenog za stvaranje tog pokreta opterećenja;

**Kupac/Dobavljač**: ovdje se prikazuju račun, podračun i opis povezani s kupcem ili dobavljačem;

**Projekt**: ovdje se prikazuje prodajni projekt, koji korisnik može urediti, povezan s lotom. Obično je to prodajni projekt povezan s linijom proizvoda koja je učitana i koja je učitala taj lot.


## Drugi dokumenti utovara

U ovoj sekciji prikazuju se osnovni podaci drugih eventualnih dokumenata u kojima je lot bio angažiran, u odnosu na dokument odabran u gornjoj mreži.

## Istovar

U ovoj sekciji prikazuju se osnovni podaci prvog dokumenta, kronološki, koji je angažirao lot. Ako je lot bio izravno ispražnjen putem registracije u skladištu, tada u ovoj mreži ništa neće biti prikazano.

**Količina**: Ovdje se prikazuje količina lota koja je bila angažirana u dokumentu;

**Jedinica mjere**: označava jedinicu mjere korištenu u dokumentu;

**Datum unosa**: označava datum unosa;

**Status lota**: označava status lota;

**Datum**: ovdje se prikazuje datum dokumenta;

*Dvostrukim klikom na liniju dokumenta moguće je, u skladu s pravima korisnika, otvoriti samo relevantni dokument u pregledu.*

**Skladište**: ovdje se prikazuju kod i opis skladišta na kojem je učitan lot;

**Lokacija**: ovdje se prikazuju kod i opis lokacije;

**Uzrok**: ovdje se prikazuju kod i opis uzroka korištenog za stvaranje tog pokreta opterećenja;

**Kupac/Dobavljač**: ovdje se prikazuju račun, podračun i opis povezani s kupcem ili dobavljačem;

**Projekt**: ovdje se prikazuje prodajni projekt, koji korisnik može urediti, povezan s lotom. Obično je to prodajni projekt povezan s linijom proizvoda koja je učitana i koja je učitala taj lot.


## Drugi dokumenti istovaraca

U ovoj sekciji prikazuju se osnovni podaci drugih eventualnih dokumenata u kojima je lot bio angažiran, u odnosu na dokument odabran u gornjem izborniku.

**Vrsta dokumenta**: ovdje se prikazuje vrsta dokumenta unutar kojeg se nalazi lot, u odnosu na odabrani dokument u gornjoj mreži. To može biti otpremnica, račun, lista preuzimanja, otpremnica za radni nalog, povrat za radni nalog;

**Broj**: ovdje se prikazuje broj dokumenta;

**Datum**: ovdje se prikazuje datum dokumenta.

*Dvostrukim klikom na redak dokumenta korisnik, sukladno svojim ovlastima, može otvoriti dokument samo za pregled*.

## Pregled Zaliha

Ova kartica omogućuje pregled stanja zaliha loteva po skladištima.
Izbornik je sastavljen od sljedećih polja:

**Šifra**: označava kod skladišta;

**Opis**: označava opis skladišta;

**Jedinica mjere**: označava jedinicu mjere;

**Ukupna količina**: pokazuje ukupnu količinu tog artikla za taj lot;

**Količina na stanju**: pokazuje trenutačno stanje zaliha tog artikla za taj lot;

**Dostupna količina**: pokazuje dostupnu količinu tog artikla za taj lot.

## Sljedivost lota

Ovaj obrazac omogućuje ispis izvješća koje detaljno prikazuje tragljivost odabranog lota.
Nakon postavljanja svih željenih filtera, dovoljno je kliknuti na gumb **Traži** u *alatnoj traci* kako bi se prikazali rezultati unutar prikaza rezultata.  

*Napomena*: unutar odjeljka posvećenog filterima nalaze se sljedeće oznake:

> - sljedivost korištenja: ako je aktivirano, omogućuje pregled u kojim artiklima je korišten lot odabranog artikla, tj. provjerava tragljivost prema gore;  
> - sljedivost sastav: ako je aktivirano, omogućuje pregled kojim artiklima (koji se upravljaju lotovima) su korišteni za proizvodnju lota odabranog artikla, tj. provjerava tragljivost prema dolje.

Ove dvije oznake su zadane, ali korisnik ih može aktivirati ili deaktivirati prema potrebi.
Nakon odabira željenog lota, dovoljno je kliknuti na gumb Ispiši ili Pregled prije ispisivanja kako biste pregledali izvješće s traženim rezultatima.

Za detalje o zajedničkom funkcioniranju obrazaca, molimo pogledajte link  [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).
