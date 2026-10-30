---
title: Element troška
sidebar_position: 44
---

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi njihova pregleda, izmjene ili brisanja.

**### Pretraživanje stavki (elemenata) troškova**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

**### Unos stavki troškova**

Za unos novih šifri potrebno je kliknuti prvi prazan redak u tablici ili pritisnuti gumb **Novo**.

**#### Specifična polja**

**Šifra**: označava šifru stavke troška.

**Opis**: označava opis stavke troška.

**Vrsta troška**: označava kategoriju kojoj pripada stavka troška: *Izravni troškovi*, *Opći troškovi* ili *Ostali troškovi*.

**Primjeni na**: označava na koju će se vrstu troška primijeniti ova stavka:

> *Trošak materijala*: trošak se primjenjuje samo na trošak materijala (primjenjivo samo na stavke kod kojih je **Vrsta troška** postavljena na *Izravni troškovi*).

> *Trošak stroja*: trošak se primjenjuje samo na trošak stroja (primjenjivo samo na stavke kod kojih je **Vrsta troška** postavljena na *Izravni troškovi*).

> *Trošak radne snage*: trošak se primjenjuje samo na trošak rada (primjenjivo samo na stavke kod kojih je **Vrsta troška** postavljena na *Izravni troškovi*).

> *Trošak obrade*: trošak se primjenjuje samo na trošak obrade (ukupni trošak stroja i rada) (primjenjivo samo na stavke kod kojih je **Vrsta troška** postavljena na *Izravni troškovi*).

> *Industrijski trošak*: trošak se primjenjuje samo na ukupni trošak materijala i trošak obrade (primjenjivo samo na stavke kod kojih je **Vrsta troška** postavljena na *Izravni troškovi* ili *Opći troškovi*).

> *Opći trošak*: trošak se primjenjuje na ukupne opće troškove (primjenjivo samo na stavke kod kojih je **Vrsta troška** postavljena na *Opći troškovi*).

> *Ostali troškovi*: trošak se primjenjuje na ukupne ostale troškove (primjenjivo samo na stavke kod kojih je **Vrsta troška** postavljena na *Ostali troškovi*).

:::note[Napomena]
Stavke troškova kod kojih je **Primjeni na** postavljena na *Trošak materijala*, *Trošak stroja*, *Trošak radne snage*, *Trošak obrade* ili *Industrijski trošak* uključuju se u odjeljak **Izravni troškovi**.

Stavke troškova kod kojih je **Primjeni na** postavljena na *Opći trošak* ili *Ostali troškovi* uključuju se u odgovarajuće odjeljke **Opći troškovi** odnosno **Ostali troškovi** unutar postupka [Vrednovanje](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).
:::

**Postotak/Vrijednost**: označava je li stavka troška definirana kao *postotak*, *fiksna vrijednost* ili *varijabilna vrijednost* (aktivno samo za stavke troškova kod kojih je **Primjeni na** = *Ostali troškovi*).

Detaljnije:
- *Postotak* se izračunava na temelju ukupnog troška navedenog u polju **Primjeni na**.
- *Fiksna vrijednost* dodaje se ukupnom trošku navedenom u polju **Primjeni na**.
- *Varijabilna vrijednost* množi se s količinom unesenom u upravljanju *Ostalim troškovima* u postupku izračuna troškova.

**Vrijednost**: označava zadanu vrijednost stavke troška koja će se zatim automatski predložiti.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).