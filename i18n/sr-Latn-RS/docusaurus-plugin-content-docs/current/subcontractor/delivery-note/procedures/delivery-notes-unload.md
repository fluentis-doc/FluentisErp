---
title: Razduženje robe po otpremnici
sidebar_position: 1
---

Procedura se otvara putem **Podizvođač > Otpremnice > Procedure > Razduženje robe po otpremnici** i omogućava knjiženje skladišnog izlaza za otpremnice kooperantske proizvodnje koje su već odštampane, a još nisu proknjižene kao izlaz iz skladišta.

## Filter

Na ovoj kartici moguće je filtrirati otpremnice za isporuku prema kooperantu na kojeg glase, prema datumu otpremnice (Od–Do), broju otpremnice i drugim kriterijumima.

#### Posebne funkcije

> **Traži**: primenjuje zadate filtere pretrage na bazu unetih, potvrđenih i još neproknjiženih otpremnica za isporuku.

> **Istovar**: pokreće proceduru knjiženja otpremnice za isporuku i pripadajućih skladišnih transakcija.

#### Specifična polja

- **Datum zapisa zalihe**: polje koje se podrazumevano popunjava trenutnim datumom. Korisnik može promeniti datum kako bi knjiženje skladišnih promena bilo izvršeno na datum različit od trenutnog.

Nakon izbora otpremnica za isporuku koje se žele proknjižiti, potrebno je kliknuti dugme **Istovar** na alatnoj traci kako bi se izvršile skladišne transakcije.

Tokom ove operacije aplikacija istovremeno:
- razdužuje materijal iz skladišta iz kojeg se roba šalje kooperantu,
- i zadužuje isti materijal na skladište kooperanta.

## Rekapitulacija

Na ovoj kartici moguće je izvršiti poništavanje (*rollback*) knjiženja otpremnice za isporuku i vratiti stanje pre izvršene operacije. U zaglavlju kartice nalaze se filteri pretrage koji omogućavaju izbor operacija prema broju razduženja (Od–Do), datumu razduženja otpremnice (Od–Do) i broju otpremnice (Od–Do).

Rezultati pretrage prikazuju se u tabeli u gornjem delu prozora pod nazivom **Razduženje otpremnice**.

Odabirom reda u toj tabeli, u donjem delu obrasca moguće je pregledati:
- razdužene otpremnice za isporuku na kartici **Otpremnice**,
- povezana skladišna knjiženja automatski generisana tokom razduženja odabrane otpremnice na kartici **Knjiženje**.

#### Posebne funkcije

> **Traži**: primenjuje filtere pretrage na bazu unetih, odštampanih i već razduženih otpremnica za isporuku.

> **Vrati otpremnicu/prijemnicu**: poništava knjiženje otpremnica odabranih u donjoj tabeli na kartici **Otpremnice**.

> **Vrati u prethodno stanje**: briše odabrana skladišna knjiženja sa kartice **Knjiženje**, bez vraćanja pripadajuće otpremnice u stanje **nije razdužena**. Ovu funkciju preporučuje se koristiti samo u izuzetnim situacijama kada je to zaista potrebno.