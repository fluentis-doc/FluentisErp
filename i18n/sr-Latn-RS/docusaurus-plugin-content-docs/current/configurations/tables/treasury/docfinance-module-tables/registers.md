---
title: Šifarnici
sidebar_position: 1
---

Tabela služi za upravljanje skupom **informacija koje je potrebno povezati kako bi se omogućila komunikacija između sistema Fluentis i DocFinance** (posebno pogledajte specifičnu dokumentaciju sistema DocFinance za značenje polja koja je potrebno povezati i odgovarajuće potrebne šifre).

Sastoji se od 4 odeljka:

**[Kontni plan](/docs/erp-home/registers/accounting/analytic-chart-of-accounts):** u ovom odeljku potrebno je za analitičke konta iz šifarnika banaka navesti polja „Banka” i „RBN” (uz postavljanje šifara koje važe u sistemu DocFinance). Prvo polje označava pripadajuću kreditnu instituciju, dok drugo označava tip računa (redovni račun, SBF itd.) povezan sa tim analitičkim kontom. Ta dva polja vidljiva su i mogu se uređivati u šifarniku banaka. Za analitička konta tipa kupac/dobavljač u ovom obrascu moguće je upravljati i poljem „Mogućnost odstupanja”, koje se može uređivati i u glavnom obrascu šifarnika kontakata, za pojedinačni red analitičkog konta.

**Tokovi dospeća:** u ovom odeljku potrebno je svakom toku novčanog toka (pogledajte osnovnu dokumentaciju istoimenog modula) dodeliti odgovarajuću šifru za DocFinance. Ista šifra može se dodeliti većem broju redova toka.

**[Tipovi plaćanja](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types):** u ovom odeljku potrebno je za svaki tip plaćanja navesti odgovarajuću povezanu šifru u sistemu DocFinance (ista šifra može se dodeliti većem broju redova). Osim toga, moguće je navesti šifru mogućnosti odstupanja za tip plaćanja, koja će se koristiti prilikom izvoza podataka u DocFinance.

**Preduzeća:** za svako preduzeće obavezno je navesti odgovarajuću šifru u sistemu DocFinance. Preduzeća bez dodeljene šifre biće isključena iz postupaka izvoza/uvoza podataka u sistem DocFinance i iz njega.

:::note[Detaljnije informacije]
Primer standardnih šifara mogućnosti odstupanja u sistemu DocFinance:

1 >> RATING 1

2 >> RATING 2

3 >> RATING 3

4 >> RATING 4

- **Logika izvoza konta iz sistema Fluentis u DocFinance:** dostupna dužina polja u datoteci iznosi 16 znakova (dužina u sistemu Fluentis iznosi 8 + 8 znakova za polja konto i analitički konto). Polje je podeljeno u 2 bloka. Na primer, konto `xyz-001` u datoteku se unosi kao `xyz     001     `.

- **Šifre šablona iz sistema Fluentis** (u formatu DocFinance dostupna su najviše 4 znaka) mapiraju se u sistemu DocFinance na računovodstvena kretanja koja se uvoze u Fluentis. Preporučuje se da se u šablonima u sistemu Fluentis uključe opcije zatvaranja i otvaranja otvorenih stavki (u slučaju kada otvorena stavka nije pronađena ili je reč o avansu).

:::danger[UPOZORENJE]
Napominjemo da se **kreiranje SBF prezentacione liste i dalje obavlja u sistemu Fluentis** (stoga ćemo datoteku kreirati u Fluentisu i uvesti je u DocFinance), **kao i kreiranje neplaćene stavke** (radi ponovnog otvaranja izvornih otvorenih stavki).

Posebno je važno **zadržati upravljanje portfeljem hartija od vrednosti u sistemu Fluentis kako bi se pravilno upravljalo dospećem provizija prilikom plaćanja**.
:::

**Knjiženje neplaćenih stavki mora na potražnoj strani da sadrži prelazni konto banke** (koji je moguće postaviti u parametrima modula Neplaćene stavke) jer DocFinance šalje zaduženje tekućeg računa sa tim istim prelaznim kontom kao protivkontom.

Sva ostala kretanja naplate i plaćanja koja uključuju banke obrađivaće se u sistemu DocFinance.