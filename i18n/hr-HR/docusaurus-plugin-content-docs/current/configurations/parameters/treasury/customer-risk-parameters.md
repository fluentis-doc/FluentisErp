---
title: Parametri rizika kupca
sidebar_position: 6
---

### UVOD

Modul Rizik kupca čita narudžbe kupaca, otpremnice, račune, otvorene stavke i mjenice s budućim datumom dospijeća (odnosno sve što zauzima kreditni limit i stvara izloženost).

Otvorene stavke i mjenice čitaju se u svakom slučaju, dok se dokumenti (narudžbe kupaca, otpremnice i izlazni računi) uključuju prema odabiru koji se određuje odgovarajućom oznakom u pojedinim tablicama (Vrste narudžbi kupaca, Vrste otpremnica, Vrste izlaznih računa).

Oznaka koju je potrebno aktivirati za uključivanje pojedine vrste dokumenta u izračun jest **Kreditni limit**.

Dostupna je i oznaka **Isključi blokadu**: čak i ako dokument zauzima kreditni limit, neće biti blokiran, već će se samo prikazati upozorenje.

### OPĆA LOGIKA

Narudžbe uzimaju se u obzir ako su ispisane i potvrđene te ako je odgovarajuća oznaka aktivirana u vrsti narudžbe. U obzir se uzimaju narudžbe koje nisu razdužene ili su prisilno razdužene.

Prisilno razdužene narudžbe: preostala količina neće se isporučiti, a narudžba se smatra zatvorenom iako inače ne bi bila.

Otpremnice moraju biti ispisane i ne smiju biti fakturirane.

Računi se uzimaju u obzir ovisno o tome jesu li ispisani, što se određuje parametrom, te ne smiju biti proknjiženi jer bi se u tom slučaju uzimali kao otvorene stavke.

U **parametrima** modula Rizik kupca moguće je unaprijed definirati zadane vrijednosti koje će se predlagati u postupcima modula.

- **Broj dana nakon dospijeća za mjenice predane uz uvjet naplate (SBF)**: određuje koliko se dana nakon datuma dospijeća mjenica predana uz uvjet naplate smatra nenaplaćenom.
- **Broj dana nakon dospijeća za mjenice predane na naplatu**: određuje koliko se dana nakon datuma dospijeća mjenica predana na naplatu smatra nenaplaćenom.
- **Početni datum izračuna (računovodstvena stanja, računi, otpremnice)**: određuje početni datum izračuna. Dokumenti s ranijim datumom neće se uzimati u obzir.
- **Prikaži proknjižene neplaćene stavke**: aktiviranjem ove opcije u modulu će se prikazivati i iznosi proknjiženih neplaćenih stavki, neovisno o tome jesu li naplaćene. Ova je opcija isključivo informativna.

**Množitelj procjene kreditnog limita**: vrijednost koja se koristi u obrascu [**Korištenje kreditnog limita**](/docs/treasury/customer-risk/use-credit) za određivanje iznosa polja *Procijenjeni kreditni limit*.

#### Osnova izračuna rizika kupca

- **Računovodstveno stanje**: kreditni limit izračunava se na temelju računovodstvenog stanja kupca.
- **Otvorene stavke**: kreditni limit izračunava se na temelju otvorenih stavki kupca.
- **Blokiraj fizički ispis**: ako je za kreditni limit kupca predviđena blokada dokumenta, ova opcija onemogućuje fizički ispis blokiranog dokumenta. Ako nije aktivirana, dokument se može ispisati, ali mu se neće dodijeliti oznaka *Ispisano*.
- **Uključi račune za ispis**: u izračun kreditnog limita uključuju se kreirani, ali neispisani računi. Ako opcija nije aktivirana, računi se prema zadanim postavkama uzimaju u obzir samo ako su ispisani, odnosno ako imaju aktiviranu oznaku *Ispisano*.
- **Uključi otvorene stavke iz privremenih knjiženja**: u izračun kreditnog limita uključuju se otvorene stavke nastale iz računovodstvenih knjiženja koja imaju status *Privremeno*, definiran poljem **Status knjiženja** na kartici **Parametri** unutar samog knjiženja.

**Detaljno**: aktiviranjem ove opcije u obrascu *Izračun rizika kupca* automatski će se predložiti ista opcija kao aktivirana. Time se u obrascu *Izračun rizika kupca* prikazuje dodatna kartica s detaljnim pregledom svih dokumenata uključenih u izračun (otvorene stavke, otpremnice, računi, mjenice i neplaćene stavke).