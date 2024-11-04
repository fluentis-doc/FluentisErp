---
title: Dostava
sidebar_position: 4
---

Na ovoj kartici se unose materijali koji trebaju biti dostavljeni dobavljaču. Oni se mogu automatski unijeti putem postupka *Izvršenje iz narudžbe* ili ručno od strane korisnika.  


*Specifični gumbi*:
> **Umetni materijal**: pokreće postupak dodavanja novog materijala u mreži članaka na kartici 'Dostava'.    
> **Otkaži materijal**: pokreće postupak brisanja materijala iz mreže članaka na kartici 'Dostava'.   

*Specifična polja*:

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

### Istovar  

U ovoj kartici daje se mogućnost postavljanja, za odabrani redak u mreži, serija za izdavanje iz skladišta s količinom artikla preuzetom za slanje trećoj strani, u slučaju da se radi o više različitih serija preuzetih s istim redkom otpremnice.  

Mreža serija omogućuje korisniku preuzimanje serije koristeći posebnu funkciju 'Pomoć za serije', koja filtrira dostupne serije odabranog artikla u gornjoj mreži. Informacije prikazane u mreži serija uključuju vrstu koda serije, kod serije, seriju dobavljača, vrstu serije, datum početka i datum isteka, količinu serije, lokaciju, podatke o dobavljaču serije (račun, podračun i poslovno ime). Naravno, zbroj količina različitih serija mora točno odgovarati isporučenoj količini iz retka artikla.  

### Datum materijala  

U ovoj kartici prikazane su sljedeće informacije vezane uz odabrani redak u mreži:  

**Klasa, kod, opis i varijanta artikla, količina za isporuku, jedinica mjere, Skladište, Predložak, Nalog podizvođača**: to su niz informacija koje su jednostavno preuzete iz odabranog retka otpremnice;  

**Projekt**: predstavlja prodajni zadatak vezan uz redak otpremnice. Obično se poziva prodajni zadatak unesen u redak naloga za rad po narudžbi iz kojeg je generiran redak otpremnice;  

**Napomene**: u ovom polju korisnik može unijeti bilješku vezanu uz odabrani redak.  

