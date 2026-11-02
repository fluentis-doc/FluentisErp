---
title: Pravila grupisanja mašina
sidebar_position: 3
---

Tabela se nalazi na putanji **Tabele > Proizvodnja > Tabele A.F.C.S. > Pravila grupisanja mašina**.

Podaci iz ove tabele koriste se isključivo u postupku [A.F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).

Svako pravilo grupisanja definisano je jednim zapisom u ovoj tabeli.

**Specifična polja**

> **Element za razmatranje**: potrebno je odabrati element na osnovu kojeg će se izračunavati nivo popunjenosti mašine (jedna od linearnih dimenzija artikla, zapremina, težina, maksimalan broj operacija nezavisno od dimenzija artikala ili ukupan broj komada za obradu). Ako je odabrana dimenzijska vrednost, odgovarajuća vrednost preuzeta iz šifarnika artikala množiće se količinom iz naloga za proizvodnju, osim ako je aktivirana oznaka „Nezavisno od količine”.

> **Minimalna vrednost**: minimalni nivo popunjenosti mašine potreban za njeno pokretanje.

> **Maksimalna vrednost**: maksimalni nivo popunjenosti mašine. Ako operacije sa istom šifrom grupisanja premaše ovo ograničenje, planer će upravljati sa više radnih ciklusa mašine, kreirajući zadatak za svaki od njih.

> **Nezavisna količina**: ako je ova oznaka aktivirana, dimenzijska vrednost artikla na koji se pravilo odnosi neće se množiti količinom iz naloga za proizvodnju.

> **Grupiši samo naloge/narudžbine sa istom količinom**: ako je ova oznaka aktivirana, grupisaće se faze koje imaju istu šifru grupisanja i istu količinu za proizvodnju.

Za te faze planer će kreirati fiktivnu šifru grupisanja u obliku niza znakova koji povezuje šifru grupisanja i količinu za proizvodnju.

> **Napomene**: omogućava unos proizvoljne napomene.

:::note Napomena
Imajte na umu da, ako za radni centar nije aktivirana oznaka fiksnog vremena obrade, mogu postojati faze koje treba obraditi sa istom šifrom grupisanja, ali različitim vremenima obrade (jedinično vreme obrade × količina za proizvodnju).

U tom slučaju kao vreme obrade uzeće se najduže vreme među fazama koje se grupišu (pesimistička i oprezna pretpostavka).

Tokom faze uvoza podataka, koja prethodi pokretanju raspoređivanja, sistem će na spisku grešaka pri uvozu prikazati upozorenja kako bi nas obavestio da će se uzeti u obzir najduže vreme obrade.
:::

**Pretraživanje pravila grupisanja prema mašini**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

**Unos pravila grupisanja prema mašini**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja zahteva program: **Šifra** i **Element za razmatranje**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).