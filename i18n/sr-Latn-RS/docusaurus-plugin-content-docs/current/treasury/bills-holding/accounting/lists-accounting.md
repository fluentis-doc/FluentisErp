---
title: Knjiženje lista
sidebar_position: 2
---

Obrazac se nalazi na putanji **Blagajna > Vrednosni papiri > Knjiženja > Knjiženje prezentacionih lista**.

Ova funkcija služi za knjiženje prezentacionih lista. Postupak zatvara konto povezan sa vrstom vrednosnih papira uključenih u prezentacionu listu i otvara prelazni konto banke definisan u samoj listi.

:::note Napomena
Uobičajeno je da se knjiženje prezentacione liste izvršava direktno unutar same prezentacione liste pomoću funkcije **Knjiženje**.

Ovaj obrazac omogućava masovno knjiženje više prezentacionih lista odjednom.
:::

## Kako knjižiti prezentacionu listu

1. U gornjem delu obrasca postavite filtere za pronalaženje prezentacionih lista za knjiženje. Knjiženje je moguće izvršiti samo za liste koje imaju status **Odštampano**.

2. U centralnoj tabeli označite prezentacione liste koje želite da knjižite.

3. Unesite parametre knjiženja:
   - **Kontni nalog**
   - **Datum knjiženja**
   - **Datum obračunskog perioda**

:::note Napomena
Ove vrednosti mogu biti unapred definisane u parametrima modula [**Vrednosni papiri**](/docs/configurations/parameters/treasury/bills-portfolio-parameters).
:::

### Dodatne opcije

- **Knjiženje prema datumu dospeća**: razdvaja knjiženje prezentacione liste prema pojedinačnim datumima dospeća vrednosnih papira, uz primenu broja bankarskih dana definisanih u evidenciji banke za izabranu vrstu knjiženja.

- **Datum dospeća sa datumom valute jednakim datumu dospeća**: knjiži pojedinačne vrednosne papire prema njihovim datumima dospeća, dok se datum valute banke koriguje prema broju bankarskih dana definisanih u evidenciji banke.

4. Kliknite na funkciju **Knjiženje prezentacionih lista** na alatnoj traci.

### Posebne funkcije

- **Pretraži**: prikazuje listu prezentacionih lista spremnih za knjiženje.

- **Knjiženje**: izvršava knjiženje označenih prezentacionih lista.

:::important Generisani knjižni nalog
Knjižna šema ove operacije je fiksna i ne zavisi od izabranog kontnog naloga.

Tokom ove faze zatvara se konto korišćen u prethodnoj fazi **Knjiženja vrednosnih papira**, odnosno konto portfelja vrednosnih papira definisan za pojedinu [vrstu vrednosnog papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types).

Kao protivkonto koristi se konto za **prezentaciju, diskontovanje ili naplatu po dospeću**, definisan u zaglavlju prezentacione liste.
:::

## Kartica Prethodna knjiženja

Na kartici **Prethodna knjiženja** moguće je poništiti prethodno izvršena knjiženja.

Poništavanje je moguće samo ako je obračunski period još uvek otvoren za izmene (glavna knjiga nije zaključena i nisu izvršena završna zatvaranja konta).

Dvostrukim klikom na zapis moguće je otvoriti povezani knjižni nalog.

### Posebne funkcije

- **Pretraži**: prikazuje listu izvršenih knjiženja.

- **Poništi knjiženje**: poništava odabrana knjiženja.

- **Poništi prezentacionu listu**: poništava knjiženje povezano sa odabranom prezentacionom listom.

Dostupna je i kartica za pregled eventualnih grešaka nastalih tokom knjiženja.