---
title: Zaglavlje
sidebar_position: 2
---

## Zaglavlje

Nakon što su odabrani obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka:

- [ručni unos](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection)  
- [pomoćno polje](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection)
- automatski unos: Na temelju odabrane procedure, aplikacija može **automatski** popuniti određena polja.

:::note NAPOMENA
Ako se dokument stvara *automatski*, ovi podaci se preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.
:::

Unoseći **Klijenta** automatski se *nude* svi specifični podaci u **Zaglavlju**, prema prethodno postavljenim podacima u [Šifarnik klijenta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima za adresu i u sljedećim *sekcijama*: 

- **Valuta**: [Valuta](/docs/guide/glossary/glossary-intro#currency), [Tečaj](/docs/guide/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/glossary/glossary-intro#country), [Jezik](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/glossary/glossary-intro#shipment), [Luka](/docs/guide/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/glossary/glossary-intro#packing), [Cjenik](/docs/guide/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval](/docs/guide/glossary/glossary-intro#validity-date)
- ostala polja koja se nude izborom klijenta, ali se mogu mijenjati: [Odredište](/docs/guide/glossary/glossary-intro#destination), [Primatelj](/docs/guide/glossary/glossary-intro#recipient).

*Ostala opcionalna polja*:

**Stanje računa**: prilikom stvaranja, račun nema aktivnih oznaka.
Ova sekcija uključuje sljedeća polja:  
> **Ispisano** aktivira se kada se račun ispisa, označava da je račun isprintan.    
> **Knjiženo**: automatski se označava kada se račun knjiži.  
> **Otkazano**: aktivna oznaka omogućuje storno računa.   
> **Otpremljeno**: označava da je račun otpremljen iz skladišta, ručno ili *automatski* putem postupka *automatskog otpreme*.  


:::note NAPOMENA
Oznake se mogu ukloniti postupkom **Povrati** operacije
:::

**Bilješke kupaca**: nudi se informacija unesena u karticu klijenta, dok u slučaju automatskog stvaranja iz narudžbenice/otpremnice bit će preuzeti isti podaci iz odgovarajućeg polja izvornog dokumenta.

Moguće je i ručno unijeti podatke. Desnim klikom miša moguće je otvoriti formu kako bi se specificirao dugi tekst bilješke; ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Naša referenca/vaša referenca**: u ovim se poljima obično navodi interna referenca i referenca klijenta za određeni račun.  
U slučaju kada se račun generira putem:  
> *Stvaranje iz narudžbenice kupca*, ova polja bit će popunjena informacijama koje su navedene u narudžbenici kupca. Ovaj prijenos vrijedi samo za račun stvoren uzimanjem podataka iz jedne narudžbenice;  
> *Izvršenje otpremnice*, ova polja bit će popunjena informacijama koje su navedene u otpremnici. Ovaj prijenos vrijedi samo za račun stvoren uzimanjem podataka iz jedne otpremnice.

**Početna bilješka**: mogu se odabrati napomene koje su prethodno unesene u tablicu istog imena koja se nalazi u putanji *Konfiguracija > Alati > Upravljanje šifriranim napomenama* Korisnik mora dvaput kliknuti na polje **Početna bilješka** kako bi otvorio pomoć *šifriranim napomenama* i odabrao podatke ili desnim klikom miša može otvoriti prozor kako bi specificirao vrlo dug tekst bilješke. Ako polje sadrži vrijednost, promijenit će se boja pozadine polja.

U slučaju *Izvršenja putem narudžbenice*, informacije koje su bile navedene u narudžbenici kupca bit će automatski ponovno prikazane u polju **Početna bilješka**.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su uneseni unaprijed u tablicu *Zaposlenici* koja se nalazi u putanji *Početna stranica > Zaposlenici*. Podatak postaje **obvezan** ako je opcija postavljena u parametrima samog dokumenta.

**Projekt**: koristeći [pomoć u polju](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom. Ovo povezivanje funkcionira samo na razini zaglavlja artikla.

**Status dokumenta**: ovaj podatak odnosi se na tablicu *Stanja dokumenta* i mora ga unijeti korisnik. Može se koristiti za postupke replikacije poslovanja, instalirane za upravljanje poslovnicom s prodajnim mjestima.

**EDI**: predstavlja datum prijenosa dokumenta iz EDI postupaka.

**Primjeni iz**: je datum početka za izračun datuma dospijeća plaćanja.

*Posebni gumbi*

> **Obrada iz narudžbenice kupca**: pokreće postupak za stvaranje računa iz narudžbenice kupca. Aktivira se kada su uneseni klijent i tip računa.  
> **Obrada iz otpremnice**: pokreće postupak za stvaranje računa iz otpremnice. Aktivira se kada su uneseni klijent i tip računa.  
> **Automatsk preuzimanje**: ovaj postupak omogućuje istovar zaliha dokumenta ako je označeno kao Ispisano.  
> **Pomoć za primatelja/odredište**: omogućuje pregled i unos primatelja/odredišta iz evidencije klijenata.  
> **Umetni agenta u linijama**: dodjeljuje Predstavnika unesenog u zaglavlje u retke stavki, u kartici Predstavnici.  
> **Umetni CIG/CUP u linijama**: Dodjeljuje unesene kodove u zaglavlje u retke stavki, u odgovarajući padajući izbornik.  
> **Otkaži plaćanja**: Briše plaćanja iz zaglavlja.  
> **Registar Sdi dokumenata**: Otvora SDI dokument koji se odnosi na račun, nakon Kontrolirano.


### Plaćanja

**Uvijeti plaćanja** automatski se prenose iz *Šifarnik kupca > kartica Plaćanje* i mogu se mijenjati/brisati od strane korisnika.

Ako je uz **Vrstu plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otprmenice.

Ako dokument potječe iz:

- Narudžba kupca, vrste plaćanja mogu biti preuzete iz prvog dokumenta (narudžbenica), iz klijentovih podataka ili se mogu prikazati u obrascu sva plaćanja dokumenata za izvršenje, a korisnik odabire željeni način plaćanja.  

- Plaćanja mogu biti preuzeta iz klijentove kartice ili iz pojedinačnih plaćanja prisutnih u svakoj otpremnici. U ovom slučaju, u računu će se prikazati vrsta plaćanja s istim iznosom i PDV-om kao i u otpremnici, te će se dodati nova linija za bilo kakve stavke koje nisu proizašle iz otpremnice.

## Popusti

Ponuđeni su samo predefinirani popusti iz *Šifarnik kupca > kartica Popusti* a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.
  
Popusti ponuđeni u zaglavlju dokumenta pojavit će se u svakom novom retku stavke u dokumentu.

Nakon što se unesu nove stavke, u zaglavlje se unese novi popust, on neće biti primijenjen na već unesene stavke.

*Posebni gumb*  
> **Izbriši rabate**: koristi se za brisanje odabranih redova popusta.

## Trgovački predstavnici

Pokazuje kod agenta i njegovu proviziju za svaki redak članka. Kod i postotak definirani su u *Šifarnik kupca > kartica Predstavnici*.

Ako provizija nije povezana s klijentom u njegovoj anagrafici, Predstavnik ipak mora biti unesen, ali s provizijom NULL, jer da je s provizijom 0, to bi značilo da je Predstavnik povezan s Predstavnikom, ali ne prima proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi podaci naravno će se ponoviti isto kao u narudžbi klijenta.

Ovaj odjeljak bit će ponovljen za svaki redak članka u pripadajućem odjeljku Trgovački predstavnici.

## Dodatni podaci

Ovdje se nudi informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.