---
title: Kreiranje i upravljanje prezentacionim listama
sidebar_position: 6
---

Obrazac se nalazi na putanji **Blagajna > Vrednosni papiri > Liste** i omogućava kreiranje nove prezentacione liste, kao i pregled i izmenu postojećih lista.

## Kako kreirati prezentacionu listu

<details>
<summary>Kliknite za pregled osnovnih koraka</summary>

1. Odaberite **Vrstu liste**. Ako su za odabranu vrstu definisana podkonta ili konta protustavki, ona će biti automatski popunjena; u suprotnom ih unesite ručno.
2. **Sačuvajte** novo kreirano zaglavlje.
3. Koristite funkciju **Preuzimanje vrednosnih papira** za dodavanje prethodno kreiranih vrednosnih papira u listu.
4. Koristite funkciju **Generisanje Ri.Ba. datoteke** za kreiranje elektronske datoteke koja se šalje banci.
5. Otvorite **Dokumenta** kako biste pristupili generisanoj datoteci.
6. Odaberite **Sačuvaj prilog** za preuzimanje datoteke na računar.
7. Odštampajte listu ili označite status **Odštampano**.
8. Koristite funkciju **Knjiži i zatvori** ukoliko želite da proknjižite prezentacionu listu.

</details>

## 1. Unos podataka

### 1.1 Vrsta liste

U polju **Vrsta** bira se vrsta prezentacione liste. Sistem automatski dodeljuje redni broj prema numeraciji povezanoj sa izabranom vrstom i poslovnom godinom.

### 1.2 Datum prezentacije

Podrazumevano se predlaže trenutni datum, ali ga je moguće promeniti.

### 1.3 Valuta

Valuta liste automatski se preuzima iz podešavanja aktivnog društva. Ukoliko se koristi valuta različita od evra, u listu se mogu uključiti samo vrednosni papiri u istoj valuti.

### 1.4 Konta i protustavke

Ovi podaci mogu biti automatski popunjeni na osnovu konfiguracije izabrane [vrste prezentacione liste](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types).

Ako nisu unapred definisani, potrebno ih je uneti ručno:

- **Bankovni račun** – konto banke na koji će biti izvršena konačna uplata nakon uspešne naplate.
- **Konto prezentovanih vrednosnih papira** – prelazni konto koji se koristi tokom prezentacije banci. Prilikom knjiženja liste stanje se prenosi sa konta portfelja vrednosnih papira na ovaj konto, a nakon evidentiranja uplate sredstva se prenose na bankovni račun.

### 1.5 Pregled bankarskog limita

Ako je u evidenciji banke definisan limit za finansiranje vrednosnih papira (*castelletto*), prikazuju se:

- odobreni limit,
- iskorišćeni iznos,
- raspoloživi iznos.

Ukoliko se koriste diferencirani limiti, potrebno je odabrati odgovarajuću vrstu prezentacije u sekciji **Vrsta prezentacije** kako bi se ispravno prikazali podaci o odobrenom i raspoloživom limitu.

## 2. Čuvanje liste

Nakon čuvanja zaglavlja aktiviraju se sve funkcije na alatnoj traci potrebne za dalju obradu.

## 3. Dodavanje vrednosnih papira

Funkcija **Preuzimanje vrednosnih papira** omogućava izbor prethodno kreiranih vrednosnih papira koji još nisu uključeni u prezentacionu listu.

> Vrednosni papiri moraju imati ispravno unete ABI i CAB podatke kako bi mogli biti uključeni u listu.

Dodavanjem vrednosnih papira automatski se ažurira ukupan iznos liste.

Za uklanjanje vrednosnog papira iz liste:

- označite red i pritisnite taster `Delete`, ili
- koristite funkciju **Obriši vrednosni papir** na alatnoj traci.

## 4. Generisanje bankarske datoteke

Funkcija **Generisanje Ri.Ba. datoteke** kreira elektronsku datoteku za slanje banci.

U zavisnosti od vrste prezentacione liste, dostupni su i drugi izvozni formati:

- **SDD (SEPA Direct Debit)**
- **LCR (francuski standard)**

## 5. Preuzimanje datoteke

Funkcija **Dokumenti** otvara sekciju dokumentacije u kojoj se nalazi generisana datoteka.

Nakon otvaranja dokumenta koristite opciju **Sačuvaj prilog** kako biste preuzeli datoteku na lokalni računar.

## 6. Štampa

Nakon završetka prezentacione liste moguće je:

- odštampati listu,
- ili ručno označiti status **Odštampano**.

:::tip Info
Status **Odštampano** na prezentacionoj listi predstavlja obavezan preduslov za njeno knjiženje. Knjiženje se može izvršiti direktno iz ovog obrasca pomoću funkcije **Knjiži i zatvori**, pod uslovom da je u parametrima modula prethodno definisana odgovarajuća šema knjiženja.
:::

## 7. Knjiženje prezentacione liste

Po potrebi koristite funkciju **Knjiži i zatvori** za knjiženje prezentacione liste.

:::note Napomena
Pregled bankarskog limita prikazuje podatke o SBF limitu sačuvanom u evidenciji bankovnog računa, kao i raspoloživi iznos izračunat na osnovu vrednosnih papira koji su predati banci, ali još nisu naplaćeni.

Sistem takođe vodi evidenciju o sledećim statusima prezentacione liste:

- **Odštampana** (obavezan preduslov za knjiženje),
- **Generisana datoteka**,
- **Proknjižena**,
- **RID/SDD lista za komunalne usluge** ili **LCR lista**.
:::

## Kartica Plaćanja

Kartica je dostupna **samo za vrste prezentacionih lista kod kojih je uključena opcija „Vrednosni papiri dobavljača“**.

Namenjena je izboru otvorenih stavki dobavljača koje će biti zatvorene prenosom vrednosnih papira uključenih u prezentacionu listu.

Ukupan iznos u sekciji **Plaćanja** mora odgovarati ukupnom iznosu prenetih vrednosnih papira. Ukoliko postoji razlika, moguće je uneti ručni red za usklađivanje. Takva razlika biće evidentirana kao nova otvorena stavka dobavljača ukoliko korišćena šema knjiženja podržava otvaranje stavki.

### Posebne funkcije

- **Novo plaćanje**: otvara novi red za unos plaćanja.
- **Obriši plaćanja**: briše označena plaćanja.
- **Plaćanja iz stavki**: otvara pregled otvorenih stavki dobavljača iz kojih se biraju stavke za zatvaranje.

## SDD (SEPA Direct Debit) prezentacione liste

**SEPA Direct Debit (SDD)** zamenjuje nekadašnji nacionalni RID sistem i predstavlja unapred odobren instrument naplate zasnovan na mandatu koji dužnik daje poveriocu.

Zasniva se na prethodnom ugovoru između dužnika i poverioca, kojim poverilac dobija ovlašćenje za automatsko terećenje računa dužnika putem međubankarskog sistema.

:::tip Kako kreirati SDD prezentacionu listu

Nakon što su popunjeni svi potrebni podaci:

- u evidenciji kupca koji je nosilac SDD naloga,
- u podacima sopstvene kompanije,

potrebno je:

1. Definisati vrstu vrednosnog papira **SDD** i povezati je sa odgovarajućim načinom plaćanja.
2. Definisati odgovarajuću vrstu prezentacione liste u modulu portfelja vrednosnih papira (sa uključenom opcijom za SDD).
3. Kreirati SDD vrednosne papire korišćenjem procedura:
   - Kreiranje iz otvorenih stavki
   - Kreiranje iz dospeća
4. Kreirati novu prezentacionu listu tipa **SDD** i u nju uključiti kreirane SDD vrednosne papire.
5. Koristiti funkciju **Izvoz SDD datoteke** na alatnoj traci za generisanje SEPA bankarske datoteke za slanje banci.

:::