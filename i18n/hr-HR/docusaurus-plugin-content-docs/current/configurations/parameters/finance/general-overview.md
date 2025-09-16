---
title: Administrativna 
sidebar_position: 1
---

Parametri područja **Administrativna** odnose se na module za: 

[**Knjigovodstvo**](/docs/configurations/parameters/finance/accounting-parameters): **neophodni** za korištenje bilo koje računovodstvene funkcionalnosti, sadrže definiciju osnovnih podataka kao što su trajanje poslovne godine, računi korišteni za automatizirane računovodstvene operacije te povezivanje između matičnih podataka i plana konta, stoga utječu i na proces kreiranja novih matičnih podataka kupaca i dobavljača.  

**Vanjski suradnik**: parametri **koji nisu nužni** i prisutni su zbog unatrag kompatibilnosti.  

[**Osnovna sredstva**](/docs/configurations/parameters/finance/fixed-assets-parameters): parametri koji sadrže specifične opcije relevantne isključivo za modul dugotrajne imovine/kontroling.

[**Uvoz plaće za kontrolu**](/docs/configurations/parameters/finance/payroll-import-parameters) specifični parametri za uvoz knjiženja vezanih uz plaće zaposlenika iz drugih upravljačkih sustava putem Bizlink uvoznog toka.

:::danger[Pažnja]
Neodgovarajuće upravljanje ovim osnovnim podacima može onemogućiti korištenje pripadajućih funkcionalnosti.  
:::

:::tip[Napomena]
Zbog uske povezanosti s područjem Riznice, osobito za različite procedure automatskog knjiženja u modulima Aktivni portfelj i Plaćanja dobavljačima, preporučuje se provjera i upravljanje i [**parametrima**](/docs/configurations/parameters/treasury/general-overview) područja riznice.  
:::

:::important[**Fast Start**]
Parametri administrativnog područja mogu se konfigurirati putem inicijalizacije [***FastStart* okruženja**](/docs/guide/fast-start) koje je dizajnirano za brzu konfiguraciju i trenutno korištenje sustava.  
:::