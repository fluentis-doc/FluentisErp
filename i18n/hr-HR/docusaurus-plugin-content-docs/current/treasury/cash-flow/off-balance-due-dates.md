---
title: Datum dospijeća vanbilančnih konta
sidebar_position: 3
---

Obrazac se nalazi u Riznica > Novčani tok > Novčani tok > Dugovanja za vanjske obveze.


Ovim ekranom moguće je upravljati izvanknjižnim dospijećima koja se uključuju u odgovarajući cash flow tok (definiran u tablici [**Tip tijeka**](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types) pomoću oznake *Izvanknjižno*), kao što je primjerice predviđanje izlaznih tokova za poreze, plaće itd.

## Kako unijeti izvanknjižno dospijeće za prikaz u cash flow-u

Izravno u mrežu unose se planirana dospijeća.

- Polje **Tipovi datuma dospijeća** povezano je s istoimenom tablicom, gdje se slobodno definira „oznaka” kojom se opisuje vrsta dospijeća.
- Datum dospijeća određuje prikaz u cash flow-u (u odgovarajućem mjesecu), jer se smatra datumom kada će se financijski tok realizirati.
- Valuta je po defaultu postavljena na onu tvrtke (npr. euro), ali je moguće odabrati drugu valutu ako se želi unijeti tok u stranoj valuti. U tom slučaju se upravlja i tečajem na datum dospijeća.
- Iznos u valuti odnosi se na odabranu valutu u prethodnom polju, dok su iznosi Potražuje (pozitivan financijski tok, npr. potraživanje) ili Duguje (negativan tok, npr. obveza) iskazani u valuti tvrtke (npr. euro).
- Oznaka **zatvoreno** koristi se kada se redak više ne želi uključivati u buduće simulacije, ali ga se želi zadržati i arhivirati bez brisanja.



**Specifični gumbi**

**Traži** - gumb za primjenu filtera pretrage na popis izvanknjižnih dospijeća.

**Novo** - postavlja pokazivač na unos novog izvanknjižnog dospijeća.

**Otkaži** - briše označeno izvanknjižno dospijeće.






