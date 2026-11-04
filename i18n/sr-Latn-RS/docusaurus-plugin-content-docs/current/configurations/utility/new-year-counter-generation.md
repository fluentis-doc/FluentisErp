---
title: Generisanje brojača za novu godinu
sidebar_position: 3
---

Obrazac omogućava upravljanje brojačima u Fluentisu, naročito prilikom prelaska u novu godinu.

Prilikom otvaranja obrasca Fluentis prikazuje **poslednju postojeću poslovnu godinu** (preuzetu iz računovodstvenih parametara) i filter za *brojače koji neće važiti u sledećoj godini*.

Tabela prikazuje listu brojača koji nisu definisani (ili nisu ispravno definisani) za sledeću godinu. Dvostrukim klikom korisnik može da utvrdi razlog. Problem je najčešće u konfiguraciji brojača kojem je bez opravdanog razloga postavljen datum završetka važenja. Zbog toga je pre uvođenja ove automatizacije svake godine bilo potrebno kreirati novi red, umesto da se brojač podesi na opciju **Godišnje**, koja se automatski vraća na početnu vrednost svake godine.

Međutim, moguće je i da je brojač blokiran iz određenog razloga (npr. zbog promene pravila numerisanja).

**#### Posebna dugmad**

> **Kreiraj**: dugme prikazuje poruku kojom se traži potvrda automatskog ispravljanja brojača za redove odabrane u tabeli.
>
> **Povratak**: vraća postupak na prethodno stanje.

*Primer*

Ako na poruku odgovorimo na sledeći način:

- **Potvrdno** – ukloniće se datumi završetka važenja brojača za koje se pretpostavlja da su pogrešno zatvoreni u 2017. godini iz primera (brojači zatvoreni prethodnih godina neće biti deblokirani). Osim toga, biće podešeni kao „godišnji” kako bi trajno ostali važeći.
- **Odbijemo** – brojači u Fluentisu ostaće nepromenjeni.

Pogledajmo nekoliko primera:

A) Pretpostavimo da je poslednja poslovna godina 2017. Brojač faktura u Fluentisu sa šifrom „1” ima postavljen datum završetka važenja 2020. i zato važi za 2018. godinu. Postupak će kreirati i odgovarajući brojač ex-Ideale2010 sa šifrom 1 za 2018. godinu.

B) Pretpostavimo da je poslednja poslovna godina 2017. Brojač faktura u Fluentisu sa šifrom „2” ima postavljen datum završetka važenja 2017. i zato NE važi za 2018. godinu. Ako korisnik potvrdi ispravku brojača u Fluentisu, ukloniće se datum završetka važenja, a tip brojača biće podešen na godišnji. Zatim će ponovo biti kreiran odgovarajući brojač ex-Ideale2010 sa šifrom „2”.

Ako korisnik ne potvrdi ispravku brojača u Fluentisu, taj brojač neće važiti za 2018. godinu, pa će i odgovarajući brojač ex-Ideale2010 sa šifrom „2” ostati blokiran.

C) Pretpostavimo da je poslednja poslovna godina 2017. Brojač faktura u Fluentisu sa šifrom „3” nema postavljen datum završetka važenja i zato važi za 2018. godinu. Postupak će kreirati i odgovarajući brojač ex-Ideale2010 sa šifrom 3 za 2018. godinu, nezavisno od korisnikovog odgovora na poruku za potvrdu ispravke brojača u Fluentisu.

:::tip NAPOMENA
Ovaj alat omogućava i kreiranje računovodstvenih parametara za novu godinu. Prikazaće se odgovarajuća poruka sa zahtevom za potvrdu. Preporučuje se da potvrdite kreiranje jer se računovodstveni parametri, **neophodni** za izvršavanje bilo kog računovodstvenog knjiženja, u suprotnom moraju kreirati za novu godinu putem [**odgovarajućeg obrasca**](/docs/configurations/parameters/finance/accounting-parameters).
:::