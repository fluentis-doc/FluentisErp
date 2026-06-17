---
title: Obrada perioda
sidebar_position: 3
---

Procedura **Obrada perioda** predstavlja centralnu proceduru u analizama kontrolinga. Ovaj modul je podeljen na četiri odvojene procedure: obradu fizičkih kretanja, obračun amortizacije, obradu računovodstvenih podataka i obračun projekta.

## OBRADA FIZIČKIH KRETANJA

Prva procedura učitava ***zapise fizičkih kretanja*** kako bi kreirala osnovnu bazu podataka za ***istoriju fizičkih kretanja***. Učitavaju se količine statičkih jedinica mere (npr. kvadratni metri kancelarijskog prostora) koje se repliciraju kroz različite periode, dok se protočne jedinice mere raspoređuju prema pravilima distribucije perioda.

Potrebno je definisati:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- ***Godinu***

## ISTORIJA AMORTIZACIJE

Ova procedura obrađuje amortizaciju u kontrolingu. Potrebno je definisati sledeće parametre:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize za dodelu vrednosti
- ***Godinu*** obrade
- ***Do perioda*** (poslednji period u godini koji će biti obrađen, obično odgovara poslednjem periodu privremenog zatvaranja)
- ***Početnu godinu za ponovni obračun*** (ako su promenjene postavke kontrolinga na već obrađenim osnovnim sredstvima)

:::tip PRIMER
Ako je osnovno sredstvo nabavljeno 2015. godine i amortizuje se po stopi od 15% godišnje, u kontrolingu bi bilo potpuno amortizovano nakon približno 6,5 godina. Ako se prvi obračun u ***FluentisERP-u*** radi 2022. godine, sistem će automatski obračunati amortizaciju počev od 2015. kako bi utvrdio preostalu vrednost u 2022. godini.

Ako se stopa amortizacije naknadno promeni na 10%, sistem mora odlučiti da li će zadržati prethodne obračune ili ponovo obračunati amortizaciju počev od definisane početne godine za ponovni obračun.

Nakon obrade, ***FluentisERP*** ažurira podatke na dva mesta: u istoriji amortizacije, gde su vidljivi podaci po području, osnovnom sredstvu, godini i mesecu, kao i u vanbilansnim knjiženjima gde briše i ponovo kreira godišnje knjiženje sa mesečnim detaljima amortizacije i ukupnim vrednostima po podkontu i centru troška.
:::

Po završetku obrade, ***FluentisERP*** popunjava dve maske. Prva je ***Istorija amortizacije***, koja omogućava pregled detalja po području, osnovnom sredstvu, godini i mesecu obrađenih podataka za pojedinačno osnovno sredstvo. Kao i kod ostalih istorijskih maski, podaci nisu dostupni za izmenu korisnicima.

Druga maska je ***Vanbilansna knjiženja po području***, gde Fluentis briše i ponovo kreira knjiženje za svaku godinu sa mesečnim detaljima obračunate amortizacije, grupisanim po podkontu i centru troška.

## OBRADA RAČUNOVODSTVENIH PODATAKA

Ova obrada učitava podatke iz ***privremenog zatvaranja***, priprema ih za mesečnu obradu i primenjuje nosioce troškova prema redosledu ciklusa.

Potrebno je definisati:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize
- ***Privremeno zatvaranje*** (nije obavezno)
- ***Vreme usklađenja*** (za korekciju konta koja se ne koriste u kontrolingu)
- ***Datum***
- ***Godinu*** obrade
- ***Šablon*** knjiženja

Izbor ***privremenog zatvaranja*** nije obavezan. Na primer, ako su podaci uvezeni iz spoljnog dokumenta koji sadrži procenjena salda po podkontima i centrima za narednu godinu, moguće je izvršiti analizu na osnovu tih posebnih knjiženja. U tom slučaju primenjuju se nosioci troškova specifični za određeno područje kako bi se podaci raspodelili po mesecima i uporedili sa konsolidovanim računovodstvenim podacima. Pošto izvor podataka ne dolazi iz knjigovodstva, privremeno zatvaranje nije potrebno definisati.

U slučaju obrade stvarnih podataka konsolidacije, ***FluentisERP*** omogućava generisanje automatskih knjiženja ***usklađenja***, uz mogućnost primene korekcija na privremena ili ***godišnja*** zatvaranja.

Ovaj proces omogućava usklađivanje podataka podkonta definisanih kao nekorišćenih u kontrolingu sa podacima prethodno evidentiranim kroz vanbilansna knjiženja područja.

:::tip NAPOMENA
Prema pravilima opisanim u dokumentaciji, logike usklađenja mogu se primeniti na dva načina:

- samo na nivou vrednosti, uz zadržavanje postojećih proporcija centara troškova
- potpunim brisanjem kontroling podataka i generisanjem stornirajućih knjiženja kako bi se obezbedilo računovodstveno usklađenje i po vrednosti i po centru troška
:::

Tokom obrade, ***FluentisERP*** priprema i mesečnu tabelu podataka vezanih isključivo za projekte/naloge, koja predstavlja osnovu za obradu konačnog obračuna projekta.

Ako obrada računovodstvenih podataka obuhvata sve nosioce troškova tipa raspodele od 01 do 12, obrada konačnog obračuna projekta primeniće posebne nosioce troškova namenjene projektima i nalozima.

## OBRADA KONAČNOG OBRAČUNA PROJEKTA

Ova procedura analizira knjiženja obrađena u prethodnim koracima koja su povezana sa projektima. Takođe uzima u obzir podatke iz proizvodnje, uključujući internu i eksternu obradu, kako bi obuhvatila sve direktne troškove i prihode projekta.

Nakon toga primenjuju se nosioci troškova specifični za tipove raspodele od 13 do 18. Više informacija dostupno je u dokumentaciji o ***nosiocima troškova***.

Potrebni parametri su:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) koje se obrađuje
- Raspon ***datuma od*** i ***datuma do***
- ***Šifra*** i ***opis*** obrade
- ***Datum***
- Referentna ***godina***
- ***Šablon*** knjiženja