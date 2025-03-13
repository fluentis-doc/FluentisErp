---
title: Razlika između dospijeća plaćanja i glavne knjige
sidebar_position: 4
---

Podaci koje je moguće izvući iz ovog obrasca odgovaraju sadržaju ispisa **Razlika između dospijeća plaćanja i glavne knjige**. 

Ovaj ispis služi za traženje stavaka (razlika) između stanja otvorenih stavaka i stanja glavne knjige za svakog kupca i dobavljača, s ciljem kako bi se takve stavke ispravile. Ove razlike mogu nastati od pogrešaka u vođenju glavne knjige ili računovodstvenih zapisa (nedostatak usklađenosti između računovodstvenog kretanja i otvaranja stavki ili naplate/plaćanja i zatvaranja stavke).

:::danger VAŽNA BILJEŠKA:
U slučaju **Vanjskog suradnika**,ako se primjenjuje kriterij prikazivanja otvorenih stavki u iznosu umanjenom za predujam poreza (prema parametrima [vrste predujma poreza](https://docs/configurations/tables/finance/withholding-tax-types)), razlike koje će biti prikazane treba zanemariti (i ne smatrati ih pogreškama), imajući pritom na umu da će one biti neutralizirane prilikom isplate naknade i zatvaranja odgovarajuće stavke.
:::

### **OBLAST FILTRA**:

**Račun**: glavni filtar za pregled podkonta kupca ili dobavljača. Bez filtriranja, bit će prikazana podkonta svih kupaca i dobavljača s razlikama.

**Od/do Datum zapisivanja**: filtriranje datuma računovodstvenog knjiženja. 

**Isključi zatvorene dospjele vrijednosti**: aktiviranje zastavice zanemarit će dospijeća u stanju *Zatvoreno*.

:::tip **KORISNO**
**Detalji**: aktiviranjem ove oznake rezultati će biti raščlanjeni ističući moguću razliku za svako pojedinačno računovodstveno kretanje u usporedbi s povezanom stavkom (ili s povezanim plaćanjem u slučaju obračunskog kretanja naplate/plaćanja);
:::

:::tip **VEOMA KORISNO**
**Prikaži samo detaljna konta/ zapise s razlikom različitom od nule**: (preporučena) aktivna zastavica omogućuje da se označe samo podkonta koji imaju razlike koje treba ispraviti. One koji nemaju razlike se ne prikazuju.
:::

**Grupiraj po valuti tvrtke**: aktivna zastavica određuje prikaz valutnih kretanja prema valuti poduzeća. Primjer kretanja u USD bit će prikazan i preračunat u eure.

### **MREŽA REZULTATA**:

![](/img/it-it/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance/image1.png)

Za svaki podračun povezan s kupcem ili dobavljačem prikazani su ukupni iznosi, odnosno DUGOVNA i POTRAŽIVNA strana, kako za dio računovodstvenih transakcija, tako i za dio pojedinačnih stavki. Na kraju se navode računovodstveni saldo i saldo stavki, uz dodatnu kolonu u kojoj je prikazana razlika.

Na taj način omogućena je procjena mogućih uzroka neslaganja.

Primjerice, pozitivan ukupni dugovni računovodstveni saldo (a time i pozitivan dugovni saldo) uz istovremeni ukupni dugovni saldo stavki jednak nuli, može ukazivati na situaciju u kojoj su računi otvoreni, ali odgovarajuće stavke nisu evidentirane.

---

### **VIDEO TUTORIALI**

:::important Pogledajte također
[**VIDEO TUTORIALI O OTVORENIM STAVKAMA**](/docs/video/finance/intro)
:::