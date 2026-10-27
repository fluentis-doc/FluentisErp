---
title: Administracija
sidebar_position: 1
---

Parametri oblasti **Administracija** odnose se na sledeće module:

[**Računovodstvo**](/docs/configurations/parameters/finance/accounting-parameters): **neophodni** su za korišćenje svih računovodstvenih funkcionalnosti. Sadrže definicije osnovnih podataka, kao što su trajanje poslovne godine, računi koji se koriste za automatizovane računovodstvene operacije i povezivanje matičnih podataka sa kontnim planom. Zbog toga utiču i na postupak kreiranja novih matičnih podataka kupaca i dobavljača.

**Eksterni saradnik**: parametri **koji nisu neophodni** i koji su zadržani zbog kompatibilnosti sa starijim verzijama.

[**Osnovna sredstva**](/docs/configurations/parameters/finance/fixed-assets-parameters): parametri koji sadrže specifične opcije relevantne isključivo za modul osnovnih sredstava i kontroling.

[**Uvoz zarada za kontroling**](/docs/configurations/parameters/finance/payroll-import-parameters): specifični parametri za uvoz knjiženja zarada zaposlenih iz drugih sistema za upravljanje, putem BizLink toka za uvoz.

:::danger[Pažnja]
Nepravilno upravljanje ovim osnovnim podacima može onemogućiti korišćenje odgovarajućih funkcionalnosti.
:::

:::tip[Napomena]
Zbog bliske povezanosti sa oblašću Trezora, naročito u vezi sa različitim postupcima automatskog knjiženja u modulima Potraživanja i Plaćanja dobavljačima, preporučuje se provera i podešavanje [**parametara**](/docs/configurations/parameters/treasury/general-overview) oblasti Trezora.
:::

:::important[**Brzi početak**]
Parametri oblasti Administracija mogu se konfigurisati tokom inicijalizacije okruženja [**_FastStart_**](/docs/guide/fast-start), koje je osmišljeno za brzo podešavanje i neposredno korišćenje sistema.
:::