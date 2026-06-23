---
title: Isporuke/povrati OZO
sidebar_position: 1
---

Forma se nalazi na putanji **Početna stranica > Zaposleni > Isporuke/povrati OZO > Isporuke/povrati OZO**


:::important Čemu služi
Ova procedura omogućava evidentiranje isporuka i povrata *lične zaštitne opreme (LZO)* *zaposlenima*.

Obrazac se sastoji od dela za filtere, dela za predlog podataka i dela sa rezultatima.
Nakon postavljanja svih željenih filtera, dovoljno je kliknuti na dugme **Pretraži isporuke** ili **Pretraži povrate** kako bi se rezultati prikazali u tabeli rezultata.
:::


## Specifična dugmad


### ![](/img/neutral/common/search.png) Pretraži isporuke

Pretraga *LZO* za isporuku zasniva se na aktivnoj *LZO* predviđenoj za *radno mesto* i *zaposlene* koji obavljaju istu *funkciju*.

Na osnovu postavljenih filtera rezultati se prikazuju u tabeli rezultata.

*Predviđeni datum*:
- ne prikazuje se za *LZO* koja nikada nije isporučena *zaposlenom*;
- prikazuje se *crvenim* slovima ako je očekivani datum isporuke *LZO* istekao u odnosu na današnji datum;
- izračunava se na osnovu datuma poslednje isporuke uvećanog za broj meseci definisan kroz polje *Važenje u mesecima* za *funkciju* koju *zaposleni* obavlja;
- ukoliko *zaposleni* obavlja više *funkcija* i za više *funkcija* koristi istu *LZO* sa različitim periodima *važenja u mesecima*, za izračunavanje *predviđenog datuma* koristiće se najkraći period važenja.


### Predloži isporuke

Dugme je omogućeno samo nakon izvršene **pretrage isporuka**.
Postavlja *Isporučenu količinu* na 1 (jedan) za sve redove prikazane u *oblasti rezultata*.


### Obriši isporuke

Dugme je omogućeno samo nakon izvršene **pretrage isporuka**.
Postavlja *Isporučenu količinu* na 0 (nula) za sve redove prikazane u *oblasti rezultata*.

### Pretraži povrate

Pretraga *LZO* za povrat zasniva se na *LZO* koja je prethodno isporučena *zaposlenima*.
Na osnovu postavljenih filtera rezultati se prikazuju u tabeli rezultata.
*Predviđeni datum* prikazuje se crvenim slovima ako je očekivani datum povrata *LZO* istekao u odnosu na današnji datum.
Ne vrši se kontrola da li su *vraćene količine* usklađene sa prethodno *isporučenim količinama*.

### Predloži povrate

Dugme je omogućeno samo nakon izvršene **pretrage povrata**.
Postavlja *Vraćenu količinu* na 1 (jedan) za sve redove prikazane u *oblasti rezultata*.

### Obriši povrate

Dugme je omogućeno samo nakon izvršene **pretrage povrata**.
Postavlja *Vraćenu količinu* na 0 (nula) za sve redove prikazane u *oblasti rezultata*.

### ![](/img/neutral/common/save.png) Sačuvaj (Evidenciju)

Svi redovi sa *isporučenom količinom* ili *vraćenom količinom* većom od *nule* u oblasti rezultata biće upisani u *Istoriju isporuka/povrata OZO*, sa datumima *isporučeno/vraćeno* unetim u oblasti *Predloženi podaci za isporuke/povrate*.

## Oblasti upravljanja

### Filter

Filter podataka sastoji se od sledećih informacija:
> **Isporuke/povrati za zaposlenog**: *zaposleni* za kojeg želite pronaći *LZO* za isporuku/povrat.   
> **Isporuke/povrati za OZO**: *LZO* koju želite isporučiti/preuzeti nazad.

### Predloženi podaci za isporuku/povrat

Ova sekcija sadrži obavezne informacije za evidentiranje *isporuke/povrata*.
Sastoji se od sledećih informacija:
> **Isporučio/Preuzeo povrat**: *osoba* koja isporučuje *LZO* *zaposlenima* / preuzima *LZO* od *zaposlenih*.   
> **Datum isporuke/povrata**: datum isporuke/povrata *LZO* *zaposlenima*.


### Rezultati

Lista se sastoji od sledećih informacija:
> **Predviđeni datum**: predviđeni datum isporuke/povrata *LZO* *zaposlenom*.   
>
> **Zaposleni**
>> **Šifra**: šifra ciljnog *zaposlenog*.   
>> **Prezime**: prezime ciljnog *zaposlenog*.   
>> **Ime**: ime ciljnog *zaposlenog*.   
>
> **OZO**
>> **Šifra**: šifra *LZO* koja se isporučuje/vraća.   
>> **Opis**: opis *LZO* koja se isporučuje/vraća.   
>
> **Količina**
>> **Isporučeno**: *isporučena količina* *LZO* *zaposlenom*.   
>> **Vraćeno**: *vraćena količina LZO* od strane *zaposlenog*.   
>
> **Potpisano**: označava da li je *zaposleni* potpisao *obrazac za isporuku/povrat* kao potvrdu prijema.   
> **Namena korišćenja**: slobodne beleške na temu; preuzimaju se sa liste *LZO* predviđene za *radno mesto* koje *zaposleni* obavlja.   
> **Propisi**: slobodne beleške na temu; preuzimaju se sa liste *LZO* predviđene za *radno mesto* koje *zaposleni* obavlja.   
> **Napomene**: slobodne beleške.

Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkim funkcijama obrazaca, pogledajte sledeći link: [Zajedničke funkcije, dugmad i polja](/docs/guide/common).