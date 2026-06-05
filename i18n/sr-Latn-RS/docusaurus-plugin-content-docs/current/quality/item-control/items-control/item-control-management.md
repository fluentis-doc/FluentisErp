---
title: Kontrole artikala
sidebar_position: 3
---

Upravljanje je dostupno putem **Pretrage kontrola artikala**.

:::important Čemu služi
*Kontrole artikala* omogućavaju evidentiranje izvršenih merenja, utvrđenih vrednosti i određivanje usklađenosti ili neusaglašenosti kontrolisanog materijala, poluproizvoda ili proizvoda.

Dokumenti iz kojih je moguće vršiti kontrole artikala su:

- *Prijem robe*
- *Primke*
- *Ulazni računi*
- *Prijave proizvodnje*
- *Faze proizvodnog naloga*
- *Povrati od kooperanata*
- *Kretanja zaliha*

Kontrole mogu biti specifične za:

- *Lot artikla*
- *Serijski broj*
- *Jedinicu utovara*

Putem M.E.S. rešenja, integrisanog u Fluentis, moguće je unositi tražene informacije na direktan i pojednostavljen način.

Standardno su dostupni sledeći izveštaji:

> **Lista kontrola artikala po artiklu**: lista *Kontrola artikala* grupisanih po *Artiklu*.
>
> **Lista kontrola artikala po kupcu/dobavljaču**: lista *Kontrola artikala* grupisanih po *Kupcu/Dobavljaču*.
>
> **Lista kontrola artikala po vrsti dokumenta**: lista *Kontrola artikala* grupisanih po *Vrsti dokumenta*.
>
> **C i NC etiketa artikla**: etiketa koja prikazuje reference *Artikla* i detalje kontrolisanog *Lota* ili *Serijskog broja*.
:::

## Dugmad za upravljanje

### ![](/img/neutral/common/save.png) Sačuvaj

Pritiskom na ovo dugme čuvaju se sve izmenjene informacije prikazane u *Kontrolama artikala*.

### ![](/img/neutral/common/tick.png) Pretraga kontrolnih planova

Pritiskom na ovo dugme vrši se pretraga *Kontrolnog plana* koji treba povezati sa izabranim *Kontrolama artikala*.

Za izabranu *Kontrolu artikla*:

- ako postoje *Testovi* sa već unetim vrednostima, nova pretraga se neće izvršiti;
- ako nijedan *Test* nema unete vrednosti, postojeći *Testovi* biće zamenjeni testovima pronađenim u odgovarajućem *Kontrolnom planu*.

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />

### ![](/img/neutral/common/update.png) Ažuriraj

Pritiskom na ovo dugme vrši se ažuriranje svih informacija prikazanih u *Kontrolama artikala*.

### ![](/img/neutral/common/delete.png) Otkaži

Pritiskom na ovo dugme brišu se svi izabrani redovi sa glavne liste *Kontrola artikala*.

### Kreiraj skladišni zapis

Dugme je omogućeno samo ako je na listi *Testovi* izabran najmanje jedan *Test* koji:

- još nije proknjižen;
- sadrži evidentirane vrednosti;
- ima definisanu *Potvrđenu količinu* i/ili *Neusaglašenu količinu*.

Pritiskom na dugme kreiraju se skladišna knjiženja sa današnjim datumom za *Artikal* povezan sa *Kontrolom*, za definisanu *Potvrđenu količinu* i/ili *Neusaglašenu količinu*, koristeći navedeno *Skladište* i odgovarajuće *Šablone*.

### Storniraj zapis

Dugme je omogućeno samo ako je na listi *Testovi* izabran najmanje jedan već proknjižen *Test*.

Pritiskom na dugme poništavaju se skladišna knjiženja povezana sa izabranim redom *Testa*.

### ![](/img/neutral/common/duplicate.png) Dupliraj test

Dugme je omogućeno samo kada je izabran jedan red *Testa*.

Sve informacije izvornog *Testa* kopiraju se u novi *Test* koji se dodaje na kraj postojećeg redosleda *Testova*.

## Upravljani podaci

### Podaci zaglavlja

Podaci zaglavlja podeljeni su na dve oblasti:

- sa leve strane nalazi se lista *Kontrola artikala*;
- sa desne strane prikazane su reference izvornog dokumenta.

Lista *Kontrola artikala* sadrži sledeće informacije:

> **Klasa**: klasa *Artikla* koji se kontroliše.
>
> **Šifra artikla**: šifra kontrolisanog *Artikla*.
>
> **Detalj**: vrsta detalja koji se kontroliše (*bez grupisanja*, *Lot*, *S.N.* ili *Jedinica utovara*).
>
> **Referenca detalja artikla**: referenca na *Lot*, *Serijski broj* ili *Jedinicu utovara*.
>
> **Vrsta kontrole**: šifra *Vrste kontrole artikla*.
>
> **Broj**: broj *Kontrole artikla*.
>
> **Datum unosa**: datum kreiranja kontrole.
>
> **Korišćeni kontrolni plan**: referenca povezanog *Kontrolnog plana*.
>
> Ako postoji više odgovarajućih planova, podatak se može menjati.
>
> **Opis kontrolnog plana**: opis povezanog *Kontrolnog plana*.
>
> **Datum rezultata**: datum završetka analize.
>
> **Rezultat**: ukupan rezultat svih testova.
>
> **Datum odobrenja**: datum odobravanja ukupnog rezultata.
>
> **Odobreno**: označava da je kontrola odobrena.
>
> Nakon odobrenja svi podaci o testovima postaju neizmenjivi.
>
> **Količina u jedinici mere**
>
> **Količina dokumenta**
>
> **Opis artikla**
>
> **Opis vrste kontrole**
>
> **Napomene**: slobodne beleške.

Reference izvornog dokumenta razlikuju se prema *Vrsti dokumenta*:

> **Primka**: *Dobavljač*, *Vrsta primke*, *Broj primke*, *Datum primke* i *Red*.
>
> **Otpremnica**: *Dobavljač*, *Vrsta otpremnice*, *Broj dokumenta*, *Interni broj*, *Datum* i *Red*.
>
> **Faktura**: *Dobavljač*, *Vrsta fakture*, *Broj dokumenta*, *Interni broj*, *Datum* i *Red*.
>
> **Prijava proizvodnje**: *Kupac*, *Vrsta naloga*, *Godina/Nalog/Serija*, *Faza/Podfaza*, *Broj* i *Datum prijave*.
>
> **Faza proizvodnog naloga**: *Kupac*, *Vrsta naloga*, *Godina/Nalog/Serija*, *Faza/Podfaza* i *Radni centar*.
>
> **Povrat od kooperanta**: *Dobavljač*, *Vrsta povrata*, *Broj dokumenta*, *Datum* i *Red*.
>
> **Kretanje robe**: *Kupac/Dobavljač*, *Skladište*, *Razlog*, *Broj*, *Datum* i *Broj kretanja*.

### Testovi

Sadrži listu *Testova* za izabrani *Artikal*.

Lista uključuje informacije o:

- redosledu izvršavanja testa;
- vrsti i opisu testa;
- internom ili eksternom izvršenju;
- laboratoriji;
- mernim instrumentima;
- nominalnim vrednostima i granicama tolerancije;
- evidentiranim vrednostima;
- rezultatima testa;
- skladišnim podacima;
- odobrenju rezultata.

Prilikom unosa *Izmerene vrednosti* sistem automatski evidentira:

- zaposlenog koji je izvršio unos;
- prijavljenog korisnika;
- datum unosa;
- rezultat testa prema definisanim granicama i tolerancijama.

Podaci koji potiču iz *Kontrolnog plana* dostupni su samo za čitanje. Ručno dodati *Testovi* mogu se uređivati.

#### Vrednosti merenja

Sadrži pojedinačna merenja izvršena za izabrani *Test*.

Lista sadrži:

> **Redosled**
>
> **Pozicija**
>
> **Izmerena vrednost**
>
> **Korišćeni merni instrument**
>
> **Evidentirao**
>
> **Evidentirao korisnik**
>
> **Datum merenja**
>
> **Napomene**
>
> **Opis mernog instrumenta**

Ako je *Izmerena vrednost* numerička, sistem automatski izračunava prosečnu vrednost i koristi je za određivanje rezultata testa.

#### Atributi testa

Omogućava unos [Dodatnih podataka](/docs/configurations/utility/extra-data/extradata/new-extradata) za pojedinačni *Test*.

#### Konfiguracija testa

Sadrži [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) koje operater mora pripremiti pre izvršavanja testa.

Podaci se nasleđuju iz:

- *Planiranih konfiguracija testova* definisanih u *Kontrolnim planovima*;
- *Parametara konfiguracije testova i mernih instrumenata* definisanih u *Vrsti testa*.

#### Priloženi dokumenti

Na ovoj listi moguće je dodavati i pregledati sve priloge povezane sa testom.

### Atributi kontrole

Omogućava unos [Dodatnih podataka](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaku *Kontrolu artikla*.

Nasleđuju se iz *Dodatnih podataka* povezanih sa *Vrstom kontrole artikla*.

### Svojstva artikla

Omogućava unos [Dodatnih podataka](/docs/configurations/utility/extra-data/extradata/new-extradata) za kontrolisani *Artikal*.

Nasleđuju se iz *Dodatnih podataka* povezanih sa *Artiklom*.

### Povezani dokumenti

Na ovoj listi moguće je dodavati i pregledati sve priloge povezane sa dokumentom.