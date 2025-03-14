---
title: Administrativa
sidebar_position: 1
---

Parametrii din aria **Administrativă** se referă la modulele:

[**Contabilitate** (/docs/configurations/parameters/finance/accounting-parameters)]: **indispensabili** pentru utilizarea oricărei funcționalități contabile. Conțin definiția unor date fundamentale, cum ar fi durata exercițiului, conturile utilizate pentru operațiunile contabile automatizate și corelarea dintre registrele contabile și planul de conturi, influențând astfel și procesul de creare a noilor registre pentru clienți și furnizori.

**Liber profesioniști**: nu sunt obligatorii, dar sunt prezenți pentru retro-compatibilitate.

[**Mijloace fixe** (/docs/configurations/parameters/finance/fixed-assets-parameters)]: parametrii care prevăd opțiuni specifice, de interes limitat la modulul mijloace fixe/contabilitate.

[**Import salarii** (/docs/configurations/parameters/finance/payroll-import-parameters)]: parametrii specifici pentru importul înregistrărilor legate de salariile angajaților din alte sisteme de gestionare prin fluxul de import Bizlink.

:::danger[Atenție]
O gestionare deficitară a acestor date de bază ar putea împiedica utilizarea funcționalităților vizate.
:::

:::tip[Notă]
Având în vedere strânsa interconectare cu aria Tresoreria, în special în ceea ce privește diversele proceduri de contabilizare automată ale modulului Portofel activ și *Plăți furnizori*, se recomandă să verificați și să gestionați și [**parametrii** (/docs/configurations/parameters/treasury/general-overview)] din aria Tresoreria.
:::

:::important[**Fast Start**]
Parametrii din aria Administrativă pot fi configurați prin inițializarea unui [**mediu *FastStart* (/docs/guide/fast-start)**], conceput pentru a permite o configurare rapidă și utilizarea imediată a sistemului.
:::