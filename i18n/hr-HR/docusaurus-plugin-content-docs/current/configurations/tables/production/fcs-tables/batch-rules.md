---
title: Pravila grupiranja strojeva
sidebar_position: 3
---

Tablica se nalazi na putanji **Tablice > Proizvodnja > Tablice A.F.C.S. > Pravila grupiranja strojeva**.

Podaci iz ove tablice koriste se isključivo u postupku [A.F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).

Svako pravilo grupiranja definirano je jednim zapisom u ovoj tablici.

**Specifična polja**

> **Element za razmatranje**: potrebno je odabrati element na temelju kojeg će se izračunavati razina popunjenosti stroja (jedna od linearnih dimenzija artikla, volumen, težina, maksimalan broj operacija neovisno o dimenzijama artikala ili ukupan broj komada za obradu). Ako je odabrana dimenzijska vrijednost, odgovarajuća vrijednost preuzeta iz šifarnika artikala množit će se s količinom iz naloga za proizvodnju, osim ako je aktivirana oznaka „Neovisno o količini”.

> **Minimalna vrijednost**: minimalna razina popunjenosti stroja potrebna za njegovo pokretanje.

> **Maksimalna vrijednost**: maksimalna razina popunjenosti stroja. Ako operacije s istom šifrom grupiranja premaše ovo ograničenje, planer će upravljati s više radnih ciklusa stroja, kreirajući zadatak za svaki od njih.

> **Nezavisna količina**: ako je ova oznaka aktivirana, dimenzijska vrijednost artikla na koji se pravilo odnosi neće se množiti s količinom iz naloga za proizvodnju.

> **Grupiraj samo naloge/narudžbe s istom količinom**: ako je ova oznaka aktivirana, grupirat će se faze koje imaju istu šifru grupiranja i istu količinu za proizvodnju.

Za te će faze planer kreirati fiktivnu šifru grupiranja u obliku niza znakova koji povezuje šifru grupiranja i količinu za proizvodnju.

> **Napomene**: omogućuje unos proizvoljne napomene.

:::note Napomena
Imajte na umu da, ako za radni centar nije aktivirana oznaka fiksnog vremena obrade, mogu postojati faze koje treba obraditi s istom šifrom grupiranja, ali različitim vremenima obrade (jedinično vrijeme obrade × količina za proizvodnju).

U tom će se slučaju kao vrijeme obrade uzeti najdulje vrijeme među fazama koje se grupiraju (pesimistična i oprezna pretpostavka).

Tijekom faze uvoza podataka, koja prethodi pokretanju raspoređivanja, sustav će na popisu pogrešaka pri uvozu prikazati upozorenja kako bi nas obavijestio da će se uzeti u obzir najdulje vrijeme obrade.
:::

**Traženje pravila grupiranja prema stroju**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

**Unos pravila grupiranja prema stroju**

Za unos novih šifri potrebno je kliknuti u prvi prazni redak tablice ili pritisnuti gumb **Novo**.

Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: **Šifra** i **Element za razmatranje**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).