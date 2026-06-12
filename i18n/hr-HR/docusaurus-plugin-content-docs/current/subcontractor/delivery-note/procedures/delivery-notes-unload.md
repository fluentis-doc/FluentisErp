---
title: Razduženje robe po otpremnici
sidebar_position: 1
---

Postupak se otvara putem **Podizvođač > Otpremnice > Procedure > Razduženje robe po otpremnici** te omogućuje knjiženje skladišnog izlaza za otpremnice kooperantske proizvodnje koje su već ispisane, a još nisu knjižene kao izlaz sa skladišta.

## Filtar

Na ovoj kartici moguće je filtrirati otpremnice za isporuku prema kooperantu na kojeg glase, prema datumu otpremnice (Od–Do), broju otpremnice i drugim kriterijima.

#### Posebne funkcije

> **Traži**: primjenjuje zadane filtre pretraživanja na bazu unesenih, provjerenih i još ne proknjiženih otpremnica za isporuku.

> **Istovar**: pokreće proceduru knjiženja otpremnice za isporuku te pripadajućih skladišnih transakcija.

#### Specifična polja

- **Datum zapisa zalihe**: polje koje se prema zadanim postavkama popunjava trenutnim datumom. Korisnik može promijeniti datum kako bi knjiženje skladišnih promjena bilo izvršeno na datum različit od trenutnog.

Nakon odabira otpremnica za isporuku koje se žele knjižiti, potrebno je kliknuti gumb **Istovar** na alatnoj traci kako bi se izvršile skladišne transakcije.

Tijekom ove operacije aplikacija istovremeno:
- razdužuje materijal iz skladišta iz kojeg se roba šalje kooperantu,
- te zadužuje isti materijal na skladište kooperanta.

## Sažetak

Na ovoj kartici moguće je izvršiti poništavanje (*rollback*) knjiženja otpremnice za isporuku te vratiti stanje prije izvršene operacije. U zaglavlju kartice nalaze se filtri pretraživanja koji omogućuju odabir operacija prema broju razduženja (Od–Do), datumu razduženja otpremnice (Od–Do) te broju otpremnice (Od–Do).

Rezultati pretraživanja prikazuju se u tablici u gornjem dijelu prozora pod nazivom **Razduženje otpremnice**.

Odabirom retka u toj tablici, u donjem dijelu obrasca moguće je pregledati:
- razdužene otpremnice za isporuku na kartici **Otpremnice**,
- povezana skladišna knjiženja automatski generirana tijekom razduženja odabrane otpremnice na kartici **Knjiženje**.

#### Posebne funkcije

> **Traži**: primjenjuje filtre pretraživanja na bazu unesenih, ispisanih i već razduženih otpremnica za isporuku.

> **Povrati otpremnicu/primku**: poništava knjiženje otpremnica odabranih u donjoj tablici na kartici **Otpremnice**.

> **Povrati u prethodno stanje**: briše odabrana skladišna knjiženja s kartice **Knjiženje**, bez vraćanja pripadajuće otpremnice u stanje **nije razduženo**. Ovu funkciju preporučuje se koristiti samo u iznimnim situacijama kada je to zaista potrebno.