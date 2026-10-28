---
title: Parametri grupiranja računa
sidebar_position: 9
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Parametri grupiranja omogućuju definiranje načina podjele dokumenata tijekom postupaka razduživanja. U tu se svrhu koriste posebne oznake kojima se dokumenti grupiraju prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opće parametre grupiranja potrebno je konfigurirati samo jednom, a zatim se automatski primjenjuju na sve postupke te vrijede za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drukčije ponašanje od onoga definiranog općim parametrima, potrebno je prilagoditi parametre grupiranja u njegovu šifarniku.

Na taj se način osigurava fleksibilno upravljanje razduživanjima koje se može prilagoditi posebnim zahtjevima svakog kupca ili dobavljača, uz zadržavanje centralizirane i dosljedne konfiguracije za većinu postupaka.

U ovom se obrascu definiraju pravila grupiranja za sljedeće postupke:

- **Vrednovanje prodajnih otpremnica**
- **Vrednovanje servisnih intervencija**
- **Kreiranje prodajnog računa iz Pickinga**
- **Kreiranje prodajnog računa iz lista za preuzimanje UDC-a**
- **Kreiranje prodajnog računa iz POS-a**

Prilikom razduživanja više dokumenata moguće ih je grupirati prema sljedećim svojstvima označavanjem odgovarajućih opcija:

- **Vrsta dokumenta**: izvorni dokumenti iste vrste kreirat će jedan račun.
- **Godina**: izvorni dokumenti iz iste godine kreirat će jedan račun.
- **Mjesec**: izvorni dokumenti iz istog mjeseca kreirat će jedan račun.
- **Tečaj**: izvorni dokumenti s istim tečajem kreirat će jedan račun.
- **Projekt**: izvorni dokumenti s istim projektom u zaglavlju kreirat će jedan račun.
- **Vrsta i način plaćanja**: izvorni dokumenti s istim uvjetima plaćanja kreirat će jedan račun.
- **Odredište**: izvorni dokumenti s istim odredištem i prijevoznikom kreirat će jedan račun.
- **Suvlasnici**: izvorni dokumenti s istom vrstom operacije za upravljanje osnovnim sredstvima kreirat će jedan račun.

Potrebno je označiti stupce koji određuju željena pravila grupiranja za navedena razduživanja.

Opcija **Zbirna** ključna je za kreiranje jednog dokumenta na temelju više izvornih dokumenata. Ostale se opcije odnose na posebna pravila grupiranja.

Stupac **Prioritet** trenutačno se ne koristi.