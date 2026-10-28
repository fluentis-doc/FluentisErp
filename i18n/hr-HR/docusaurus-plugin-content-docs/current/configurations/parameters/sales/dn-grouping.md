---
title: Parametri grupiranja otpremnica
sidebar_position: 8
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Parametri grupiranja omogućuju definiranje načina podjele dokumenata tijekom postupaka razduživanja. U tu se svrhu koriste posebne oznake kojima se dokumenti grupiraju prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opće parametre grupiranja potrebno je konfigurirati samo jednom, a zatim se automatski primjenjuju na sve postupke te vrijede za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drukčije ponašanje od onoga definiranog općim parametrima, potrebno je prilagoditi parametre grupiranja u njegovu šifarniku.

Na taj se način osigurava fleksibilno upravljanje razduživanjima koje se može prilagoditi posebnim zahtjevima svakog kupca ili dobavljača, uz zadržavanje centralizirane i dosljedne konfiguracije za većinu postupaka.

U ovom se obrascu definiraju pravila grupiranja za sljedeće postupke:

- **Kreiranje otpremnica iz Pickinga**
- **Kreiranje otpremnica iz lista za preuzimanje UJ-a**
- **Kreiranje otpremnica iz lista prijenosa UJ-a**
- **Kreiranje otpremnica iz POS-a**
- **Kreiranje otpremnica iz narudžbe kupca**

Prilikom razduživanja više dokumenata moguće ih je grupirati prema sljedećim svojstvima označavanjem odgovarajućih opcija:

- **Vrsta dokumenta**: izvorni dokumenti s istom [vrstom](/docs/configurations/tables/sales/sales-order-types) kreirat će jednu otpremnicu.
- **Godina**: izvorni dokumenti iz iste godine kreirat će jednu otpremnicu.
- **Mjesec**: izvorni dokumenti iz istog mjeseca kreirat će jednu otpremnicu.
- **Tečaj**: izvorni dokumenti s istim tečajem kreirat će jednu otpremnicu.
- **Projekt**: izvorni dokumenti s istim projektom u [zaglavlju](/docs/sales/sales-orders/create-new-sales-orders/sales-order) kreirat će jednu otpremnicu.
- **Vrsta i način plaćanja**: izvorni dokumenti s istim uvjetima plaćanja kreirat će jednu otpremnicu.
- **Odredište**: izvorni dokumenti s istim odredištem i prijevoznikom kreirat će jednu otpremnicu.
- **Suvlasnici**: izvorni dokumenti s istom vrstom operacije za upravljanje osnovnim sredstvima kreirat će jednu otpremnicu.

Potrebno je označiti stupce koji određuju željena pravila grupiranja za navedena razduživanja.

Opcija **Zbirno** ključna je za kreiranje jednog dokumenta na temelju više izvornih dokumenata. Ostale se opcije odnose na posebna pravila grupiranja.

Stupac **Prioritet** trenutačno se ne koristi.