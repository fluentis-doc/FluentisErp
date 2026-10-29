---
title: Instanca matrice
sidebar_position: 4
---

Otvaranjem ove tabele pristupa se interfejsu za pretragu prethodno kodifikovanih matrica, što predstavlja i polaznu tačku za kreiranje novih.
Prilikom kreiranja instance matrice najpre je potrebno dodeliti jedinstveni identifikacioni **kod** [Definiciji matrice](/docs/configurations/tables/CPQ/matrices-definition). Na osnovu izabrane definicije, na donjim karticama moguće je izabrati samo one [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) koji važe za ovu matricu.
U odeljku *Dozvoljene vrednosti dimenzija* sledeći korak je izbor stavki Extra Data, jedne po jedne, iz padajuće liste **Atribut**. Nakon izbora atributa, u mreži *Dostupni rezultati* prikazuju se vrednosti izabranog Extra Data (na primer, ako izaberemo atribut Veličina, u ovoj mreži prikazaće se vrednosti Extra Data: XS, S, M, L, XL itd.). Nakon što izaberemo vrednosti atributa koje želimo da učinimo važećim za ovu matricu, potrebno ih je prevući u mrežu *Dozvoljene vrednosti* kako bismo označili da će te vrednosti biti važeće za kombinacije u matrici.
Nakon izbora važećih vrednosti za svaki atribut, automatski će se pojaviti nove kartice: po jedna za svaku pomoćnu matricu i jedna za kompletnu matricu, koja će objediniti različite pomoćne matrice u jednu celinu sa svim mogućim kombinacijama.
Na karticama generisanim iz pomoćnih matrica potrebno je označiti važeće kombinacije vrednosti. Zato je za svaku kombinaciju potrebno postaviti oznaku samo ako je kombinacija važeća.
Na kartici *Kompletna matrica* generiše se jedinstvena matrica sa svim važećim kombinacijama koje su prethodno definisane u pomoćnim matricama.
Matrica se sada može koristiti u objektima za koje je konfigurisana.