---
title: Datum dospeća vanbilansnih konta
sidebar_position: 3
---

Obrazac se nalazi u **Blagajna > Novčani tok > Novčani tok > Datum dospeća vanbilansnih konta**.

Ovde je moguće upravljati vanbilansnim dospećima koja se uključuju u odgovarajući *novčani tok* (definisan u tabeli [**Tipovi tokova**](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types) pomoću oznake *Vanbilansno*), kao što su projekcije budućih odliva za poreze, zarade zaposlenih i slično.

## Kako uneti vanbilansno dospeće za prikaz u novčanom toku

Planirana dospeća unose se direktno u tabelu.

- Polje **Tipovi datuma dospeća** povezano je sa istoimenom tabelom, u kojoj se slobodno definiše oznaka koja opisuje vrstu dospeća.
- **Datum dospeća** određuje prikaz u novčanom toku (u odgovarajućem mesecu), jer predstavlja datum kada se očekuje realizacija finansijskog toka.
- **Valuta** je podrazumevano postavljena na valutu kompanije (npr. evro), ali je moguće odabrati i drugu valutu ukoliko se želi evidentirati tok u stranoj valuti. U tom slučaju vodi se računa i o kursu na datum dospeća.
- **Iznos u valuti** odnosi se na izabranu valutu, dok se iznosi **Potražuje** (pozitivan finansijski tok, npr. priliv) i **Duguje** (negativan finansijski tok, npr. obaveza) iskazuju u valuti kompanije.
- Oznaka **Zatvoreno** koristi se kada se određeni red više ne želi uključivati u buduće simulacije novčanog toka, ali ga je potrebno zadržati u evidenciji bez brisanja.

## Posebna dugmad

### Traži

Primjenjuje zadate kriterijume pretrage na listu vanbilansnih dospeća.

### Novo

Postavlja kursor na novi red za unos vanbilansnog dospeća.

### Obriši

Briše označeno vanbilansno dospeće.