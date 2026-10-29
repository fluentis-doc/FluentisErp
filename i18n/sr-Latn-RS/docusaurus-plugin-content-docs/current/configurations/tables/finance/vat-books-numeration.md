---
title: Numerisanje zapisa PDV-a
sidebar_position: 22
---

Omogućava podešavanje zasebnog brojača PDV protokola za svaki registar (knjigu), uz uobičajene standardne opcije dostupne i za ostale brojače u sistemu. Jedini izuzetak je formula za alfanumeričko upravljanje, jer je broj PDV protokola **UVEK** numerički. Time se zamenjuje standardno numerisanje predviđeno za PDV registre (knjige).

Postavke brojača iste su kao kod ostalih standardnih brojača.

Numerisanje definisano u ovoj tabeli koristi se u okviru [**tabele PDV registara (knjiga)**](/docs/configurations/tables/finance/vat-books/).

:::tip Napomena
U italijanskom sistemu **nije** potrebno definisati brojače u ovoj tabeli jer se numerisanje protokola **uvek** vrši prema kalendarskoj godini, nezavisno od toga da li se računovodstvena godina poklapa sa kalendarskom godinom ili prelazi njene granice. Zato je za upravljanje numerisanjem dovoljan standardni brojač koji je već predviđen u tabeli PDV registara.

Ova mogućnost uvedena je za strane lokalizacije u kojima numerisanje protokola ne prati kalendarsku godinu.
:::