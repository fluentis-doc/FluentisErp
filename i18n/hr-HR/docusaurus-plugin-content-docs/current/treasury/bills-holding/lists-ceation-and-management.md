---
title: Kreiranje i upravljanje prezentacijskim listama
sidebar_position: 6
---

Obrazac se nalazi na putanji **Riznica > Vrijednosni papiri > Popis** te omogućuje kreiranje nove prezentacijske liste ili pregled i izmjenu postojeće.

## Kako kreirati prezentacijsku listu

<details>
<summary>Kliknite za pregled osnovnih koraka</summary>

1. Odaberite **Vrstu liste**. Ako su uz vrstu definirana podkonta ili konta protustavki, oni će se automatski popuniti; u suprotnom ih unesite ručno.
2. **Spremite** novo kreirano zaglavlje.
3. Koristite funkciju **Preuzimanje vrijednosnih papira** za dodavanje prethodno kreiranih vrijednosnih papira u listu.
4. Koristite funkciju **Generiranje Ri.Ba. datoteke** za kreiranje elektroničke datoteke koja se šalje banci.
5. Otvorite **Dokumente** kako biste pristupili generiranoj datoteci.
6. Odaberite **Spremi privitak** za preuzimanje datoteke na računalo.
7. Ispišite listu ili označite status **Ispisano**.
8. Koristite funkciju **Knjiži i zatvori** ako želite knjižiti prezentacijsku listu.

</details>

## 1. Unos podataka

### 1.1 Vrsta liste

U polju **Vrsta** odabire se vrsta prezentacijske liste. Sustav automatski dodjeljuje redni broj prema numeraciji povezanoj s odabranom vrstom i poslovnom godinom.

### 1.2 Datum prezentacije

Predlaže se trenutni datum, ali ga je moguće promijeniti.

### 1.3 Valuta

Valuta liste automatski se preuzima iz postavki aktivnog društva. Ako se koristi valuta različita od eura, u listu se mogu uključivati samo vrijednosni papiri u istoj valuti.

### 1.4 Konta i protustavke

Ovi podaci mogu se automatski popuniti prema konfiguraciji odabrane [vrste prezentacijske liste](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types).

Ako nisu unaprijed definirani, potrebno ih je ručno unijeti:
- **Bankovni račun** – konto banke na koji će biti izvršena konačna uplata nakon uspješne naplate.
- **Konto prezentiranih vrijednosnih papira** – prijelazni konto koji se koristi tijekom prezentacije banci. Prilikom knjiženja liste prenosi se stanje s konta portfelja vrijednosnih papira na ovaj konto, a nakon evidentiranja uplate sredstva se prenose na bankovni račun.

### 1.5 Pregled bankarskog limita

Ako je u evidenciji banke definiran limit za financiranje vrijednosnih papira (*castelletto*), prikazuju se:
- odobreni limit,
- iskorišteni iznos,
- raspoloživi iznos.

Ako se koriste diferencirani limiti, potrebno je odabrati odgovarajuću vrstu prezentacije u sekciji **Vrsta prezentacije** kako bi se pravilno prikazali podaci o odobrenom i raspoloživom limitu.

## 2. Spremanje liste

Nakon spremanja zaglavlja aktiviraju se sve funkcije na alatnoj traci potrebne za daljnju obradu.

## 3. Dodavanje vrijednosnih papira

Funkcija **Preuzimanje vrijednosnih papira** omogućuje odabir prethodno kreiranih vrijednosnih papira koji još nisu uključeni u prezentacijsku listu.

> Vrijednosni papiri moraju sadržavati ispravno unesene ABI i CAB podatke kako bi ih bilo moguće uključiti u listu.

Dodavanjem vrijednosnih papira automatski se ažurira ukupni iznos liste.
Za uklanjanje vrijednosnog papira iz liste:
- označite redak i pritisnite tipku `Delete`, ili
- koristite funkciju **Obriši vrijednosni papir** na alatnoj traci.

## 4. Generiranje bankarske datoteke

Funkcija **Generiranje Ri.Ba. datoteke** kreira elektroničku datoteku za slanje banci.
Ovisno o vrsti prezentacijske liste, dostupni su i drugi izvozni formati:
- **SDD (SEPA Direct Debit)**
- **LCR (francuski standard)**

## 5. Preuzimanje datoteke

Funkcija **Dokumenti** otvara dokumentacijsku sekciju u kojoj se nalazi generirana datoteka.
Nakon otvaranja dokumenta koristite opciju **Spremi privitak** za preuzimanje datoteke na lokalno računalo.

## 6. Ispis

Nakon dovršetka prezentacijske liste moguće je:
- ispisati listu,
- ili ručno označiti status **Ispisano**.

:::tip Info
Status **Ispisano** na prezentacijskoj listi obavezan je preduvjet za njezino knjiženje. Knjiženje se može izvršiti izravno iz ovog obrasca pomoću funkcije **Knjiži i zatvori**, pod uvjetom da je u parametrima modula prethodno definirano odgovarajuće konto-knjiženje.
:::

## 7. Knjiženje prezentacijske liste

Po potrebi koristite funkciju **Knjiži i zatvori** za knjiženje prezentacijske liste.

:::note Napomena
Pregled bankarskog limita prikazuje podatke o SBF limitu pohranjenom u evidenciji bankovnog računa te raspoloživi iznos izračunat na temelju vrijednosnih papira koji su predani banci, ali još nisu naplaćeni.

Sustav također vodi evidenciju sljedećih statusa prezentacijske liste:
- **Ispisana** (obavezni preduvjet za knjiženje),
- **Generirana datoteka**,
- **Knjižena**,
- **RID/SDD lista za komunalne usluge (utenze)** ili **LCR lista**.
:::

## Kartica Plaćanja

Kartica je dostupna **samo za vrste prezentacijskih lista koje imaju uključenu opciju "Vrijednosni papiri dobavljača"**.
Namijenjena je odabiru otvorenih stavki dobavljača koje će biti zatvorene prijenosom vrijednosnih papira uključenih u prezentacijsku listu.
Ukupan iznos u sekciji **Plaćanja** mora odgovarati ukupnom iznosu prenesenih vrijednosnih papira. Ako postoji razlika, moguće je unijeti ručni redak za usklađenje. Takva razlika bit će evidentirana kao nova otvorena stavka dobavljača ako korišteno konto-knjiženje podržava otvaranje stavki.

### Posebne funkcije

- **Novo plaćanje**: otvara novi redak za unos plaćanja.
- **Obriši plaćanja**: briše označena plaćanja.
- **Plaćanja iz stavki**: otvara pregled otvorenih stavki dobavljača iz kojih se odabiru stavke za zatvaranje.

## SDD (SEPA Direct Debit) prezentacijske liste

**SEPA Direct Debit (SDD)** zamjenjuje nekadašnji nacionalni RID sustav te predstavlja unaprijed odobren instrument naplate temeljen na mandatu koji dužnik daje vjerovniku.
Temelji se na prethodnom ugovoru između dužnika i vjerovnika kojim vjerovnik dobiva ovlaštenje za automatsko terećenje računa dužnika putem međubankovnog sustava.
:::tip Kako kreirati SDD prezentacijsku listu

Nakon što su popunjeni svi potrebni podaci:
- u evidenciji kupca koji je nositelj SDD naloga,
- u podacima vlastite tvrtke,

potrebno je:
1. Definirati vrstu vrijednosnog papira **SDD** i povezati je s odgovarajućom vrstom plaćanja.
2. Definirati odgovarajuću vrstu prezentacijske liste u modulu portfelja vrijednosnih papira (s uključenom opcijom za SDD).
3. Kreirati SDD vrijednosne papire putem procedura:
   - Kreiranje iz otvorenih stavki
   - Kreiranje iz dospijeća
4. Kreirati novu prezentacijsku listu tipa **SDD** i u nju uključiti kreirane SDD vrijednosne papire.
5. Koristiti funkciju **Izvoz SDD datoteke** na alatnoj traci za generiranje SEPA bankovne datoteke za slanje banci.
:::