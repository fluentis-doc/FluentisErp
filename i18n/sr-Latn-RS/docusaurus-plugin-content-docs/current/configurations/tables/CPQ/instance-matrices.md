---
title: Instanca matrice
sidebar_position: 4
---

Otvaranjem ove tablice pristupa se sučelju za pretraživanje prethodno kodificiranih matrica, što je i polazna točka za kreiranje novih.        
Prilikom kreiranja instance matrice, prvo je potrebno dodijeliti jedinstveni identifikacijski **kod** [Definiciju matrice](/docs/configurations/tables/CPQ/matrices-definition)**; na temelju odabrane definicije, u donjim karticama moguće je odabrati samo one [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) koji su valjani za ovu matricu.

U odjeljku *Dozvoljene vrijednosti dimenzija*, sljedeći korak je odabrati, jedan po jedan, Extra Data iz padajućeg izbornika **Atribut**. Nakon odabira atributa, u mreži *Dostupni rezultati* prikazuju se vrijednosti odabranog Extra Data (na primjer, ako odaberemo atribut Veličina, u ovoj mreži prikazat će se vrijednosti Extra Data: XS, S, M, L, XL itd.). Nakon što se odaberu vrijednosti atributa koje želimo učiniti valjanima za ovu matricu, potrebno ih je povući u mrežu *Dozvoljene vrijednosti* kako bi se označilo da će te vrijednosti biti valjane za kombinacije u matrici.
Nakon što se odaberu valjne vrijednosti za svaki atribut, automatski će se pojaviti nove kartice, po jedna za svaku pomoćnu matricu i jedna kartica za kompletnu matricu, koja će objediniti različite pomoćne matrice u jednu jedinstvenu s svim mogućim kombinacijama.
U karticama generiranim iz pomoćnih matrica potrebno je označiti kombinacije vrijednosti koje su valjane. Za svaku kombinaciju, stoga, potrebno je postaviti oznaku samo ako je kombinacija valjana.
U kartici *Kompletna matrica* generira se jedinstvena matrica sa svim valjanim kombinacijama koje su prethodno postavljene u pomoćnim matricama.
Matrica se sada može koristiti u objektima za koje je konfigurirana. 