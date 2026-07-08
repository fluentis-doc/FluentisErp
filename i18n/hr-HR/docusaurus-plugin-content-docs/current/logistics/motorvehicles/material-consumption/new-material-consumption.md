---
title: Nova potrošnja materijala
description: Kreiranje i upravljanje dokumentima potrošnje materijala povezanima s vozilima u modulu Logistika.
keywords:
  - potrošnja materijala
  - vozila
  - logistika
  - skladište
  - Fluentis ERP
sidebar_position: 2
schema: HowTo
sidebar_label: Nova potrošnja materijala
tags:
  - logistika
  - vozila
  - skladište
last_update:
  author: Fluentis Documentation Team
  date: 10-11-2025
---

# Nova potrošnja materijala

Ovaj odjeljak opisuje postupak kreiranja novog dokumenta **potrošnje materijala** povezanog s vozilom, uz definiranje polja zaglavlja, operativnih detalja i upravljanja lotovima.

Forma **Nova potrošnja materijala** otvara se klikom na gumb **Novo** u odjeljku **Logistika > Vozila > Potrošnja materijala**.

## Podaci zaglavlja

Struktura forme slična je knjiženju skladišta i predviđa unos sljedećih *podataka zaglavlja*:

- **Vozilo**: označava vozilo za koje se troše materijali. Mora biti definirano u [Upravljanju vozilima](/docs/logistics/motorvehicles/motorvehicle-management).
- **Broj**: omogućuje ručni unos broja dokumenta.
- **Odgovorna osoba**: označava korisnika koji je kreirao dokument i automatski se popunjava.
- **Skladište**: označava skladište u kojem će biti evidentiran pokret.
- **Predložak**: definira predložak skladišta prema kojem će se izvršiti pokret.

## Unos operacija potrošnje

U središnju tablicu **Popis izvršenih operacija** potrebno je unijeti sve potrošene artikle popunjavanjem sljedećih polja:

- **Klasa / Šifra artikla / Opis artikla**: označavaju klasifikaciju, šifru i opis artikla.
- **Mjerna jedinica**: označava mjernu jedinicu artikla.
- **Količina**: označava količinu potrošenog artikla.
- **Varijanta**: omogućuje odabir varijante artikla.
- **Opis varijante**: prikazuje opis odabrane varijante artikla.
- **Projekt**: povezuje artikl s određenim projektom.
- **Opis**: prikazuje opis projekta povezanog s artiklom.

:::important
Potrebno je pažljivo popuniti sva polja kako bi se osigurala ispravna sljedivost skladišnih knjiženja.
:::

## Upravljanje lotovima artikala

U donjoj tablici moguće je unijeti lotove koji se odnose na artikl odabran u glavnoj tablici.

**Posebna polja:**

- **Broj lota**: označava broj lota.
- **Šifra lota dobavljača**: označava šifru lota koju je dodijelio dobavljač.
- **Datum početka**: označava datum početka lota.
- **Datum isteka**: označava datum isteka lota.
- **Količina**: označava količinu povezanu s lotom.
- **Lokacija**: označava šifru lokacije lota u skladištu.

:::important
Provjerite ispravnost unesenih lotova jer oni utječu na sljedivost materijala i upravljanje zalihama.
:::

## Sažetak i dodatne informacije

Nakon dovršetka knjiženja **potrošnje materijala**, sustav automatski ažurira skladišna knjiženja, čime se osigurava potpuna sljedivost materijala povezanih s vozilom.

Za više informacija:
- [Upravljanje vozilima](/docs/logistics/motorvehicles/motorvehicle-management)
- [Skladišna knjiženja](/docs/logistics/warehouse/stock-records/record)
- [Zajedničke funkcije, gumbi i polja](/docs/guide/common)