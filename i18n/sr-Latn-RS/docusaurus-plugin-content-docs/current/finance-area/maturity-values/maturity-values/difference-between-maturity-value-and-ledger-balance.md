---
title: Razlika između otvorenih stavki i glavne knjige
sidebar_position: 4
---

Podaci koje je moguće izdvojiti iz ovog obrasca odgovaraju sadržaju izveštaja **Razlika između otvorenih stavki i glavne knjige**.

Svrha ovog pregleda je provera razlika između stanja u glavnoj knjizi i stanja otvorenih stavki za svakog kupca i dobavljača, kako bi se eventualna odstupanja mogla ispraviti. Ove razlike mogu nastati zbog grešaka u vođenju glavne knjige ili računovodstvenih zapisa (na primer, neusaglašenosti između računovodstvenog knjiženja i otvaranja stavke ili između evidentiranog plaćanja/naplate i zatvaranja otvorene stavke).

:::danger VAŽNA NAPOMENA
Kod **spoljnih saradnika**, ukoliko je u parametrima **[Vrste poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types)** aktiviran kriterijum prikaza otvorenih stavki bez poreza po odbitku, prikazane razlike treba zanemariti i ne smatrati ih greškom. Nakon isplate naknade i zatvaranja odgovarajuće stavke, ove razlike će se automatski poništiti.
:::

## OBLAST FILTERA

**Konto**: osnovni filter za izdvajanje određenog podkonta kupca ili dobavljača. Ako se ne primeni filter, biće prikazani svi podkonti kupaca i dobavljača kod kojih postoje razlike.

**Od/Do datuma knjiženja**: filtrira računovodstvene zapise prema datumu knjiženja.

**Isključi zatvorene stavke**: kada je opcija uključena, zatvorene otvorene stavke neće biti uzete u obzir.

:::tip KORISNO
**Detalji**: aktiviranjem ove opcije rezultati će biti prikazani detaljno, umesto grupisano, tako da će eventualna razlika biti prikazana za svako pojedinačno računovodstveno knjiženje u odnosu na odgovarajuću otvorenu stavku (ili povezano plaćanje kod knjiženja naplate/plaćanja).

Ova opcija je naročito korisna u kombinaciji sa filterom po podkontu određenog kupca ili dobavljača, kako bi se analiziralo na kojim knjiženjima je nastala razlika i olakšala njena korekcija.
:::

:::tip VEOMA KORISNO
**Prikaži samo detaljna konta/zapise sa razlikom različitom od nule**: (preporučena opcija) prikazuje isključivo podkonta kod kojih postoje razlike koje je potrebno ispraviti, dok se ispravna podkonta neće prikazivati.
:::

**Grupiši po valuti preduzeća**: kada je opcija aktivna, valutna knjiženja prikazuju se u valuti preduzeća.

## PRIKAZ REZULTATA

![](/img/it-it/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance/image1.png)

Za svaki podkonto kupca ili dobavljača prikazani su ukupni iznosi dugovanja i potraživanja kako za računovodstvene zapise, tako i za otvorene stavke, zajedno sa računovodstvenim saldom, saldom otvorenih stavki i razlikom između njih.

Na ovaj način moguće je utvrditi potencijalni uzrok neusaglašenosti.

Na primer, ako računovodstveni saldo potraživanja postoji, dok je saldo otvorenih stavki jednak nuli za podkonto kupca, to može značiti da je račun proknjižen u glavnoj knjizi, ali za njega nije otvorena odgovarajuća otvorena stavka.

---

## VIDEO TUTORIJALI

:::important Pogledajte takođe
[**VIDEO TUTORIJALI O OTVORENIM STAVKAMA**](/docs/video/finance/intro)
:::