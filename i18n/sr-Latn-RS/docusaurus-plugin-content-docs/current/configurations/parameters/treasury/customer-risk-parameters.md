---
title: Parametri rizika kupca
sidebar_position: 6
---

### UVOD

Modul Rizik kupca čita narudžbine kupaca, otpremnice, fakture, otvorene stavke i menice sa budućim datumom dospeća (odnosno sve što zauzima kreditni limit i stvara izloženost).

Otvorene stavke i menice čitaju se u svakom slučaju, dok se dokumenti (narudžbine kupaca, otpremnice i izlazne fakture) uključuju u skladu sa izborom koji se određuje odgovarajućom oznakom u pojedinačnim tabelama (Vrste narudžbina kupaca, Vrste otpremnica, Vrste izlaznih faktura).

Oznaka koju je potrebno aktivirati da bi se određena vrsta dokumenta uključila u obračun jeste **Kreditni limit**.

Dostupna je i oznaka **Isključi blokadu**: čak i ako dokument zauzima kreditni limit, neće biti blokiran, već će se prikazati samo upozorenje.

### OPŠTA LOGIKA

Narudžbine se uzimaju u obzir ako su odštampane i potvrđene i ako je odgovarajuća oznaka aktivirana u vrsti narudžbine. U obzir se uzimaju narudžbine koje nisu razdužene ili su prinudno razdužene.

Prinudno razdužene narudžbine: preostala količina neće biti isporučena, a narudžbina se smatra zatvorenom iako inače ne bi bila.

Otpremnice moraju biti odštampane i ne smeju biti fakturisane.

Fakture se uzimaju u obzir u zavisnosti od toga da li su odštampane, što se određuje parametrom, i ne smeju biti proknjižene jer bi se u tom slučaju uzimale kao otvorene stavke.

U **parametrima** modula Rizik kupca moguće je unapred definisati podrazumevane vrednosti koje će se predlagati u postupcima modula.

- **Broj dana nakon dospeća za menice predate uz uslov naplate (SBF)**: određuje koliko se dana nakon datuma dospeća menica predata uz uslov naplate smatra nenaplaćenom.
- **Broj dana nakon dospeća za menice predate na naplatu**: određuje koliko se dana nakon datuma dospeća menica predata na naplatu smatra nenaplaćenom.
- **Početni datum obračuna (računovodstvena stanja, fakture, otpremnice)**: određuje početni datum obračuna. Dokumenti sa ranijim datumom neće se uzimati u obzir.
- **Prikaži proknjižene neplaćene stavke**: aktiviranjem ove opcije u modulu će se prikazivati i iznosi proknjiženih neplaćenih stavki, bez obzira na to da li su naplaćene. Ova opcija služi isključivo u informativne svrhe.

**Množilac procene kreditnog limita**: vrednost koja se koristi u obrascu [**Korišćenje kreditnog limita**](/docs/treasury/customer-risk/use-credit) za određivanje iznosa polja *Procenjeni kreditni limit*.

#### Osnova obračuna rizika kupca

- **Računovodstveno stanje**: kreditni limit izračunava se na osnovu računovodstvenog stanja kupca.
- **Otvorene stavke**: kreditni limit izračunava se na osnovu otvorenih stavki kupca.
- **Blokiraj fizičko štampanje**: ako je za kreditni limit kupca predviđena blokada dokumenta, ova opcija onemogućava fizičko štampanje blokiranog dokumenta. Ako nije aktivirana, dokument može da se odštampa, ali mu neće biti dodeljena oznaka *Odštampano*.
- **Uključi fakture za štampanje**: u obračun kreditnog limita uključuju se kreirane, ali neodštampane fakture. Ako opcija nije aktivirana, fakture se podrazumevano uzimaju u obzir samo ako su odštampane, odnosno ako imaju aktiviranu oznaku *Odštampano*.
- **Uključi otvorene stavke iz privremenih knjiženja**: u obračun kreditnog limita uključuju se otvorene stavke nastale iz računovodstvenih knjiženja koja imaju status *Privremeno*, definisan poljem **Status knjiženja** na kartici **Parametri** u okviru samog knjiženja.

**Detaljno**: aktiviranjem ove opcije u obrascu *Obračun rizika kupca* automatski će biti predložena i ista opcija kao aktivirana. Time se u obrascu *Obračun rizika kupca* prikazuje dodatna kartica sa detaljnim pregledom svih dokumenata uključenih u obračun (otvorene stavke, otpremnice, fakture, menice i neplaćene stavke).