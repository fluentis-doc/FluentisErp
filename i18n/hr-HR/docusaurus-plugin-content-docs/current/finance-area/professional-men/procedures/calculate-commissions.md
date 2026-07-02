---
title: Obračun provizija
sidebar_position: 2
---

Ova procedura, koja pripada području **Administracija**, služi za obračun provizija zastupnika/agenta na temelju podataka evidentiranih u računovodstvenim knjiženjima, uz prethodno odgovarajuće konfigurirane računovodstvene predloške.

Kako bi se provizije ispravno obračunavale, računovodstveni predložak (ili više njih) koji se koristi za knjiženje izlaznih računa mora imati aktiviranu opciju **Provizije**.

:::note Napomena
Potrebno je aktivirati i opciju **Upravljanje provizijama** u izborniku **Konfiguracija > Uslužni programi > Administracija > Parametri računovodstva** za odgovarajuću poslovnu godinu.
:::

Nakon otvaranja forme i pokretanja funkcije **Traži** na alatnoj traci, učitava se popis svih aktivnih zastupnika/agenta. Po potrebi je moguće uključiti i zastupnike kojima je istekao datum važenja zastupničkog ugovora.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

Na desnoj strani forme nalaze se kriteriji za filtriranje podataka koji će biti uključeni u obračun provizija, kao i podaci potrebni za ispravnu izradu obračuna naknada.

:::warning Važno
Za razliku od istoimene procedure u području **Prodaja**, ovdje se **ne izrađuju obračuni provizija** koji se naknadno pretvaraju u naknade.

Po završetku postupka sustav **izravno generira naknade zastupnika**, koje su odmah dostupne u području **Primatelji naknada** za daljnju obradu.
:::

## Filtar valute

Omogućuje filtriranje otvorenih stavki koje će biti uključene u obračun provizije prema odabranoj valuti.

## Filtar otvorenih stavki

Ova skupina filtera omogućuje određivanje:

- datuma prema kojem se utvrđuje pravo na proviziju (prema zadanim postavkama predlaže se tekući datum)
- vrste dokumenta
- datuma dokumenta.

Dostupna je i opcija kojom se otvorene stavke u stranoj valuti preračunavaju prema tečaju na datum dokumenta, neovisno o tečaju korištenom prilikom otvaranja stavke.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

:::warning Važno
Ako zastupnik/agent koristi način obračuna provizije **Po potpunoj naplati**, a izlazni račun ima način plaćanja **Bankovna mjenica (Ri.Ba.)**, pravo na proviziju nastupa na datum dospijeća bankovne mjenice, bez obzira na zatvaranje otvorene stavke prilikom izdavanja ili predaje mjenice na naplatu.

Na taj datum dodatno se pribrajaju dani definirani u:

**Parametri > Riznica > Parametri kreditnog rizika kupca > Broj dana nakon dospijeća za mjenice predane na naplatu / nakon naplate**.
:::

## Podaci za izradu obračuna

Prije pokretanja obračuna potrebno je definirati:

- datum obračuna (prema zadanim postavkama tekući datum)
- opis obračuna
- mjesec i godinu obračuna doprinosa ENASARCO.

Ako mjesec i godina ENASARCO nisu uneseni, naknade će biti izrađene bez tih podataka te ih je potrebno naknadno ručno dopuniti u svakom generiranom dokumentu.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Nakon definiranja svih kriterija:

1. odaberite zastupnike za koje želite izvršiti obračun
2. kliknite **Izračunaj** na alatnoj traci.

Po završetku postupka naknade zastupnika/agenta automatski su izrađene te su odmah dostupne u području **Primatelji naknada**, gdje ih je moguće pregledavati i nastaviti obrađivati.