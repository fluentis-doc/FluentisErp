---
title: Generiranje brojača za novu godinu
sidebar_position: 3
---

Ovaj obrazac omogućuje upravljanje brojačima prisutnima u Fluentisu, posebno prilikom prijelaza na novu godinu.

Prilikom otvaranja obrasca, Fluentis prikazuje **Zadnju postojeću upravljanu godinu** (preuzetu iz računovodstvenih parametara) i filter za *brojače koji nisu valjani za sljedeću godinu*.

Mrežna tablica prikazuje popis brojača koji nisu definirani (ili nisu ispravno definirani) za nadolazeću godinu, što korisniku omogućuje da dvostrukim klikom identificira razlog: problem obično proizlazi iz konfiguracije brojača s datumom završetka valjanosti bez opravdanog razloga. To je ranije zahtijevalo ručno dodavanje novog retka svake godine, umjesto da se brojač postavi kao "godišnji", koji se automatski resetira svake godine.
Ipak, moguće je da je brojač namjerno deaktiviran iz određenog razloga (npr. promjena politike numeracije itd.).

#### Specifične tipke

> **Kreiranje**: prikazuje poruku za potvrdu automatske korekcije brojača za odabrane retke u tablici.  
> **Povrat postupka**: izvršava povrat postupka.

*Primjer*  
Ako se na poruku odgovori:  
- potvrdno: bit će uklonjeni datumi završetka valjanosti za brojače koji su (pretpostavlja se) pogrešno zatvoreni tijekom 2017. godine iz primjera (brojači zatvoreni prije 2017. neće biti otključani). Uz to, brojači će biti postavljeni kao godišnji, kako bi ostali trajno valjani.  
- Odbijeno: Fluentis brojači ostat će nepromijenjeni.  


Napravimo nekoliko primjera:  

A) Pretpostavimo da je posljednja godina 2017., a brojač faktura u Fluentisu s kodom ‘1’ postavljen je s datumom završetka valjanosti u 2020., dakle važi i za 2018, postupak će tada automatski kreirati i odgovarajući brojač ex-Ideale2010 s kodom ‘1’ za 2018.

B) pretpostavimo posljednju godinu 2017., brojač faktura Fluentis s kodom ‘2’ postavljen s datumom završetka valjanosti 2017., i stoga NIJE valjan za 2018. Ako korisnik potvrdi ispravak brojača u Fluentisu, tada će u brojaču: biti uklonjen datum završetka valjanosti, tip će biti postavljen kao godišnji, i zatim će biti ponovno kreiran odgovarajući brojač ex-Ideale2010 s kodom ‘2’. U slučaju da brojač u Fluentisu ne bude ispravljen, taj brojač neće biti valjan za 2018., i stoga će i brojač ex-Ideale2010 s kodom ‘2’ ostati blokiran.

C) Pretpostavimo da je posljednja godina 2017., a brojač faktura u Fluentisu s kodom ‘3’ nema definiran datum završetka valjanosti, pa je već valjan za 2018. U tom slučaju, postupak će u svakom slučaju (bez obzira na korisnikov odgovor na poruku) kreirati brojač ex-Ideale2010 s kodom ‘3’ za 2018.

:::tip NAPOMENA
Ova funkcionalnost omogućuje i kreiranje računovodstvenih parametara za novu godinu.
Prikazat će se poruka koja traži potvrdu. Preporučuje se prihvatiti kreiranje, jer će u protivnom računovodstveni parametri, **neophodni** za bilo kakvo knjiženje, morati biti ručno kreirani za novu godinu putem [**odgovarajućeg obrasca**](/docs/configurations/parameters/finance/accounting-parameters).
:::
