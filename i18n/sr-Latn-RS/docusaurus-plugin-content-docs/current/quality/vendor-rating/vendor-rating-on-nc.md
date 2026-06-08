---
title: Periodične procene neusaglašenosti
sidebar_position: 3
---

Upravljanje se nalazi na putanji **Kvalitet > Kvalifikacija dobavljača > Periodične procene neusaglašenosti**.

:::important Čemu služi
*Periodične procene neusaglašenosti* predstavljaju jedan od dostupnih metoda ocenjivanja dobavljača.

Ova objektivna metoda zasniva se na težini neusaglašenosti dodeljenih *Neusaglašenostima dobavljača* i najčešće se koristi za periodične procene dobavljača.

Upravljanje omogućava kreiranje novih *Periodičnih procena neusaglašenosti* ili pretragu postojećih procena radi pregleda rezultata.
:::

## Dugmad za upravljanje

### ![](/img/neutral/common/search.png) Pretraga periodičnih procena neusaglašenosti

Forma se sastoji od dela za filtriranje i dela sa rezultatima.

Nakon podešavanja željenih filtera potrebno je kliknuti na dugme **Traži** kako bi se podaci prikazali u tabeli rezultata.

### ![](/img/neutral/common/accountant-search.png) Periodična kvalifikacija

Za izvršavanje procene potrebno je kliknuti na dugme **Periodična kvalifikacija**.

Prikazuje se forma za unos sledećih podataka:

> **Datum završetka procene**: predlaže se tekući datum i predstavlja datum od kojeg se za svakog *Dobavljača* unazad posmatra definisani period procene.
>
> **Vrsta procene**: vrsta procene koja će biti dodeljena svakom obrađenom *Dobavljaču*.
>
> Predlaže se *Vrsta procene* definisana u *Parametrima kvalifikacije dobavljača*.

Oba podatka su obavezna.

## Podaci kojima se upravlja

### Periodične procene neusaglašenosti

Ova lista prikazuje osnovne informacije o *Periodičnim procenama neusaglašenosti*.

Sastoji se od sledećih podataka:

> **Od datuma procene**: početni datum perioda procene.
>
> **Do datuma procene**: završni datum perioda procene.
>
> **Dobavljač**: naziv ocenjenog *Dobavljača*.
>
> **Bonus**: početna vrednost *Bonusa* dodeljena *Dobavljaču*.
>
> **Preostali bonus**: konačna vrednost *Bonusa* nakon izvršene procene.
>
> **Bodovi %**: procentualna vrednost izračunata na osnovu odnosa *Preostalog bonusa* i početnog *Bonusa*.
>
> **Procena**: ocena dodeljena *Dobavljaču* na osnovu ostvarenog procenta bodova.
>
> Polje se prikazuje bojama pozadine i teksta definisanim u tabeli *Ocene dobavljača*.
>
> Ukoliko je dodeljena *Procena* povezana sa opcijom *Automatska suspenzija*, ocenjeni *Dobavljač* biće automatski označen kao *Suspendovan* počev od datuma procene.
>
> Uklanjanje suspenzije mora izvršiti odgovorna *Poslovna funkcija*.
>
> **Napomene**: slobodne beleške.

Svi podaci su samo za čitanje, osim polja **Napomene**.

### Vrednosti neusaglašenosti u periodu

Ova lista prikazuje različite nivoe *Ozbiljnosti* evidentirane tokom procenjivanog perioda.

Sastoji se od sledećih podataka:

> **Ozbiljnost**: šifra *Ozbiljnosti*.
>
> **Opis ozbiljnosti**: opis *Ozbiljnosti*.
>
> **Broj**: broj evidentiranih pojava određene *Ozbiljnosti*.
>
> **Bodovi ozbiljnosti**: vrednost *Bodova za obračun indeksa kvalifikacije dobavljača (IQF)* povezana sa izabranom *Ozbiljnošću*.
>
> **Ukupno obračunati bodovi**: zbir svih izračunatih *IQF* vrednosti za datu *Ozbiljnost*.

### Dodatni podaci

Moguće je unositi [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *Periodične procene neusaglašenosti*.

:::tip Metoda korišćena za obračun

Metoda obračuna koristi sledeće vrednosti:

- **Ukupno obračunati bodovi**
- **Preostali bonus**
- **Bodovi %**
- **Procena**

Postupak obračuna:

- Razmatra se svaki red *Kvara* unutar *Neusaglašenosti* evidentiran tokom procenjivanog perioda i povezan sa odgovarajućim *Dobavljačem*.
- Za svaki red množe se pojedinačne *IQF* vrednosti:
  - *Uočeni kvar*
  - *Stvarni uzrok* ili *Pretpostavljeni uzrok* (ako stvarni uzrok nije definisan)
  - *Predloženo rešenje*
  - *Preduzeta odluka*

Ako neki od podataka nije definisan, njegova *IQF* vrednost iznosi **1,0**.

Primer:

- Red 1:
  - IQF Uočenog kvara = **5,1**
  - IQF Stvarnog uzroka = **1,5**
  - IQF Predloženog rešenja = **1,3**
  - IQF Preduzete odluke = **2,1**

  Ukupno za red:

  **5,1 × 1,5 × 1,3 × 2,1 = 20,8845**

- Red 2:
  - IQF Uočenog kvara = **2,1**
  - IQF Pretpostavljenog uzroka = **4,2**
  - IQF Predloženog rešenja = **1,0** (nije definisano)
  - IQF Preduzete odluke = **1,7**

  Ukupno za red:

  **2,1 × 4,2 × 1,0 × 1,7 = 14,994**

Ukupno obračunati bodovi za određenu *Ozbiljnost* predstavljaju zbir svih obračuna za redove iste ozbiljnosti:

- **20,8845 + 14,994 = 35,8785**

Za obračun *Preostalog bonusa*, uz početni *Bonus* od **500**:

- **Preostali bonus = 500 − 35,8785 = 464,1215**

Za obračun procenta bodova:

- **464,1215 / 500 × 100 = 92,8243 %**

*Procena* se određuje na osnovu vrednosti *Bodovi od* definisanih u listi *Rasponi bodova za ocenjivanje* unutar *Parametara kvalifikacije dobavljača*.

Dodeljuje se ona *Procena* čija je vrednost *Bodovi od* neposredno niža od izračunatog procenta bodova.

:::

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu:

[Funkcionalnosti, dugmad i polja](/docs/guide/common).