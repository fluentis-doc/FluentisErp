---
title: Knjiženje popisa
sidebar_position: 2
---

Obrazac se nalazi na putanji **Riznica > Vrijednosni papiri > Knjiženja > Knjiženje prezentacijskih lista**.

Ova funkcija služi za knjiženje prezentacijskih lista. Postupak zatvara konto povezan s vrstom vrijednosnih papira uključenih u prezentacijsku listu te otvara prijelazni konto banke definiran u samoj listi.

:::note Napomena
Uobičajeno je da se knjiženje prezentacijske liste izvršava izravno unutar same prezentacijske liste pomoću funkcije **Knjiženje**.

Ovaj obrazac omogućuje masovno knjiženje više prezentacijskih lista odjednom.
:::

## Kako knjižiti prezentacijsku listu (popis)

1. U gornjem dijelu obrasca postavite filtre za pronalaženje prezentacijskih lista za knjiženje. Knjiženje je moguće izvršiti samo za liste koje imaju status **Ispisano**.
2. U središnjoj tablici označite prezentacijske liste koje želite knjižiti.
3. Unesite parametre knjiženja:
   - **Konto-knjiženje**
   - **Datum knjiženja**
   - **Datum obračunskog razdoblja**

:::note Napomena
Ove se vrijednosti mogu unaprijed definirati u parametrima modula [**vrijednosnih papira**](/docs/configurations/parameters/treasury/bills-portfolio-parameters).
:::

### Dodatne opcije

- **Knjiženje prema datumu dospijeća**: razdvaja knjiženje prezentacijske liste prema pojedinačnim datumima dospijeća vrijednosnih papira, uz primjenu broja bankarskih dana definiranih u evidenciji banke za odabranu vrstu knjiženja.
- **Datum dospijeća s datumom valute jednakim datumu dospijeća**: knjiži pojedinačne vrijednosne papire prema njihovim datumima dospijeća, dok se datum valute banke korigira prema broju bankarskih dana definiranih u evidenciji banke.

4. Kliknite **Knjiženje prezentacijskih lista** na alatnoj traci.

### Posebne funkcije
- **Pretraži**: prikazuje popis prezentacijskih lista spremnih za knjiženje.
- **Knjiženje**: izvršava knjiženje označenih prezentacijskih lista.

:::important Generirani knjižni nalog
Knjižna shema ove operacije je fiksna i ne ovisi o odabranom konto-knjiženju.

Tijekom ove faze zatvara se konto korišten u prethodnoj fazi **Knjiženja vrijednosnih papira**, odnosno konto portfelja vrijednosnih papira definiran za pojedinu [vrstu vrijednosnog papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types).

Kao protustavka koristi se konto za **prezentaciju, diskontiranje ili naplatu nakon dospijeća**, definiran u zaglavlju prezentacijske liste.
:::

## Kartica Prethodna knjiženja

Na kartici **Prethodna knjiženja** moguće je poništiti prethodno izvršena knjiženja.
Poništenje je moguće samo ako je obračunsko razdoblje još uvijek otvoreno za izmjene (glavna knjiga nije zaključena i nisu izvršena završna zatvaranja konta).
Dvostrukim klikom na zapis moguće je otvoriti povezani knjižni nalog.

### Posebne funkcije
- **Pretraži**: prikazuje popis izvršenih knjiženja.
- **Poništi knjiženje**: poništava odabrana knjiženja.
- **Poništi prezentacijsku listu**: poništava knjiženje povezano s odabranom prezentacijskom listom.

Dostupna je i kartica za pregled eventualnih pogrešaka nastalih tijekom knjiženja.