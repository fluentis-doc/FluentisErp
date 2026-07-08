---
title: Nova potrošnja materijala
description: Kreiranje i upravljanje dokumentima potrošnje materijala povezanim sa vozilima u modulu Logistika.
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

Ovaj odeljak opisuje postupak kreiranja novog dokumenta **potrošnje materijala** povezanog sa vozilom, uz definisanje polja zaglavlja, operativnih detalja i upravljanja lotovima.

Forma **Nova potrošnja materijala** otvara se klikom na dugme **Novo** u odeljku **Logistika > Vozila > Potrošnja materijala**.

## Podaci zaglavlja

Struktura forme slična je skladišnom knjiženju i predviđa unos sledećih *podataka zaglavlja*:

- **Vozilo**: označava vozilo za koje se troše materijali. Mora biti definisano u [Upravljanju vozilima](/docs/logistics/motorvehicles/motorvehicle-management).
- **Broj**: omogućava ručni unos broja dokumenta.
- **Odgovorna osoba**: označava korisnika koji je kreirao dokument i automatski se popunjava.
- **Skladište**: označava skladište u kojem će biti evidentirano kretanje.
- **Predložak**: definiše skladišni predložak prema kojem će se izvršiti kretanje.

## Unos operacija potrošnje

U centralnu tabelu **Spisak izvršenih operacija** potrebno je uneti sve potrošene artikle popunjavanjem sledećih polja:

- **Klasa / Šifra artikla / Opis artikla**: označavaju klasifikaciju, šifru i opis artikla.
- **Merna jedinica**: označava mernu jedinicu artikla.
- **Količina**: označava količinu potrošenog artikla.
- **Varijanta**: omogućava izbor varijante artikla.
- **Opis varijante**: prikazuje opis izabrane varijante artikla.
- **Projekat**: povezuje artikal sa određenim projektom.
- **Opis**: prikazuje opis projekta povezanog sa artiklom.

:::important
Potrebno je pažljivo popuniti sva polja kako bi se osigurala ispravna sledljivost skladišnih knjiženja.
:::

## Upravljanje lotovima artikala

U donjoj tabeli moguće je uneti lotove koji se odnose na artikal izabran u glavnoj tabeli.

**Posebna polja:**

- **Broj lota**: označava broj lota.
- **Šifra lota dobavljača**: označava šifru lota koju je dodelio dobavljač.
- **Datum početka**: označava datum početka lota.
- **Datum isteka**: označava datum isteka lota.
- **Količina**: označava količinu povezanu sa lotom.
- **Lokacija**: označava šifru lokacije lota u skladištu.

:::important
Proverite ispravnost unetih lotova jer oni utiču na sledljivost materijala i upravljanje zalihama.
:::

## Sažetak i dodatne informacije

Nakon završetka knjiženja **potrošnje materijala**, sistem automatski ažurira skladišna knjiženja, čime se osigurava potpuna sledljivost materijala povezanih sa vozilom.

Za više informacija:
- [Upravljanje vozilima](/docs/logistics/motorvehicles/motorvehicle-management)
- [Skladišna knjiženja](/docs/logistics/warehouse/stock-records/record)
- [Zajedničke funkcije, dugmad i polja](/docs/guide/common)