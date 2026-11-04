---
title: Generiranje brojača za novu godinu
sidebar_position: 3
---

Obrazac omogućuje upravljanje brojačima u Fluentisu, osobito prilikom prijelaza u novu godinu.

Prilikom otvaranja obrasca Fluentis prikazuje **posljednju postojeću poslovnu godinu** (preuzetu iz računovodstvenih parametara) i filtar za *brojače koji neće biti valjani u sljedećoj godini*.

Tablica prikazuje popis brojača koji nisu definirani (ili nisu ispravno definirani) za sljedeću godinu. Dvostrukim klikom korisnik može utvrditi razlog. Problem je najčešće u konfiguraciji brojača kojem je bez opravdanog razloga postavljen datum završetka valjanosti. Zbog toga je prije uvođenja ove automatizacije svake godine bilo potrebno izrađivati novi redak, umjesto da se brojač postavi na opciju **Godišnje**, koja automatski započinje ispočetka svake godine.

Međutim, moguće je i da je brojač blokiran iz određenog razloga (npr. zbog promjene pravila numeracije).

#### Posebni gumbi

> **Kreiranj**: gumb prikazuje poruku kojom se traži potvrda automatskog ispravljanja brojača za retke odabrane u tablici.
>
> **Povrat**: izvršava vraćanje postupka na prethodno stanje.

*Primjer*

Ako na poruku odgovorimo na sljedeći način:

- **Potvrdno** – uklonit će se datumi završetka valjanosti brojača za koje se pretpostavlja da su pogrešno zatvoreni u 2017. godini iz primjera (brojači zatvoreni prethodnih godina neće se deblokirati). Osim toga, postavit će se kao „godišnji” kako bi trajno ostali valjani.
- **Odbijemo** – brojači u Fluentisu ostat će nepromijenjeni.

Pogledajmo nekoliko primjera:

A) Pretpostavimo da je posljednja poslovna godina 2017. Brojač računa u Fluentisu sa šifrom „1” ima postavljen datum završetka valjanosti 2020. i stoga je valjan za 2018. godinu. Postupak će izraditi i odgovarajući brojač ex-Ideale2010 sa šifrom 1 za 2018. godinu.

B) Pretpostavimo da je posljednja poslovna godina 2017. Brojač računa u Fluentisu sa šifrom „2” ima postavljen datum završetka valjanosti 2017. i stoga NIJE valjan za 2018. godinu. Ako korisnik potvrdi ispravak brojača u Fluentisu, uklonit će se datum završetka valjanosti i vrsta brojača postavit će se na godišnju. Zatim će se ponovno izraditi odgovarajući brojač ex-Ideale2010 sa šifrom „2”.

Ako korisnik ne potvrdi ispravak brojača u Fluentisu, taj brojač neće biti valjan za 2018. godinu, pa će i odgovarajući brojač ex-Ideale2010 sa šifrom „2” ostati blokiran.

C) Pretpostavimo da je posljednja poslovna godina 2017. Brojač računa u Fluentisu sa šifrom „3” nema postavljen datum završetka valjanosti i stoga je valjan za 2018. godinu. Postupak će izraditi i odgovarajući brojač ex-Ideale2010 sa šifrom 3 za 2018. godinu, neovisno o korisnikovu odgovoru na poruku za potvrdu ispravka brojača u Fluentisu.

:::tip NAPOMENA
Ovaj alat omogućuje i izradu računovodstvenih parametara za novu godinu. Prikazat će se odgovarajuća poruka s upitom za potvrdu. Preporučuje se potvrditi izradu jer se računovodstveni parametri, **nužni** za izvršavanje bilo kojeg računovodstvenog knjiženja, u suprotnom moraju izraditi za novu godinu putem [**odgovarajućeg obrasca**](/docs/configurations/parameters/finance/accounting-parameters).
:::