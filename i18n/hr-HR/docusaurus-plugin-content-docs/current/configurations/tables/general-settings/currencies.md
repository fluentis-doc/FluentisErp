---
title: Valuta
sidebar_position: 1
---

:::tip[FAst Start]
Tablica je obuhvaćena postupkom [**Fast Start**](/docs/guide/fast-start)

U slučaju da se želi konfigurirati ručno, potrebno je pogledati kontrolni popis na povezanom linku
:::

### Gornji dio

Tablica, zajednička za sve tvrtke u bazi podataka, omogućuje definiranje liste valuta koje se koriste u različitim dokumentima/unosima.  

**Valuta / Opis**: Šifra / opis kodirane valute   

**Decimale**: potrebno je upisati broj decimalnih mjesta predviđenih za valutu  

**CEE**: flag označava valute koje su dio sustava fiksnih tečajeva za euro  

**EURO**: flag identificira euro.  

**Preuzmi tečajeve**: omogućuje [**automatsko preuzimanje**](/docs/configurations/tables/finance/currency-exchange) tečajeva za odgovarajuću valutu.  


### Donji dio

Polja u tablici omogućuju postavljanje pomoćnih računa dobiti i gubitka od tečajnih razlika, specifičnih za svaku tvrtku, koji se koriste pri automatskoj valorizaciji knjigovodstvenih tečajnih razlika.  

**Račun / Pomoćni račun / Opis dobiti**: koristi se za evidentiranje dobiti od tečajnih razlika  

**Račun / Pomoćni račun / Opis gubitaka**: koristi se za evidentiranje gubitaka od tečajnih razlika

**Račun / Pomoćni račun / Opis rezervi**: koristi se za evidentiranje knjiženja rezervi za rizike od tečajnih razlika  