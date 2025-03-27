---
title: Razlika između dospijeća plaćanja i glavne knjige
sidebar_position: 5
---

Ispis koji se može pokrenuti iz ovog obrasca odgovara sadržaju prikaza na ekranu koji se može dobiti pomoću obrasca **[Razlika između otvorenih partija i računovodstvenog salda.](/docs/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance)**

Ovaj ispis služi za traženje stavaka (razlika) između stanja otvorenih stavaka i stanja glavne knjige za svakog kupca i dobavljača, s ciljem kako bi se takve stavke ispravile. Ove razlike mogu nastati od pogrešaka u vođenju glavne knjige ili računovodstvenih zapisa (nedostatak usklađenosti između računovodstvenog kretanja i otvaranja stavki ili naplate/plaćanja i zatvaranja stavke).

:::danger BILJEŠKA:
U slučaju **primatelja**,  ako se primijeni kriterij izlaganja otvorenih partija umanjenih za porez na dohodak (u parametrima [tipa poreza na dohodak](/docs/configurations/tables/finance/withholding-tax-types)),  razlike koje će biti prikazane trebaju se ignorirati (i ne smatrati greškama), uzimajući u obzir da će biti apsorbirane prilikom plaćanja naknade i zatvaranja odgovarajuće partije.
:::


**Račun**: Glavni filtar za pregled podkonta kupca ili dobavljača. Bez filtriranja, bit će prikazana podkonta svih kupaca i dobavljača s razlikama.

**Od/do Datum zapisivanja**: filtriranje datuma računovodstvenog knjiženja

**Isključi zatvorene dospjele vrijednosti**: aktiviranje zastavice zanemarit će dospijeća u stanju ‘Zatvoreno’. 

**Detalji**: aktiviranjem ove oznake rezultati će biti raščlanjeni ističući moguću razliku za svako pojedinačno računovodstveno kretanje u usporedbi s povezanom stavkom (ili s povezanim plaćanjem u slučaju obračunskog kretanja naplate/plaćanja);

**Prikaži samo detaljna konta/ zapise s razlikom različitom od nule**: (preporučen) aktivan flag omogućuje da se označe samo podkonta koji imaju razlike koje treba ispraviti. One koji nemaju razlike se ne prikazuju.

**Grupiraj po valuti tvrtke**: aktivan flag određuje prikaz valutnih kretanja prema valuti poduzeća. 