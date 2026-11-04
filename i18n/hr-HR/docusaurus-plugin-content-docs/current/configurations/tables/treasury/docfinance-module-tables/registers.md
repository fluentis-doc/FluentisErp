---
title: Šifarnici
sidebar_position: 1
---

Tablica služi za upravljanje skupom **informacija koje je potrebno povezati kako bi se omogućila komunikacija između sustava Fluentis i DocFinance** (posebno pogledajte specifičnu dokumentaciju sustava DocFinance za značenje polja koja je potrebno povezati i odgovarajuće potrebne šifre).

Sastoji se od 4 odjeljka:

**[Kontni plan](/docs/erp-home/registers/accounting/analytic-chart-of-accounts):** u ovom odjeljku potrebno je za analitičke konte iz šifarnika banaka navesti polja „Banka” i „RBN” (uz postavljanje šifri koje vrijede u sustavu DocFinance). Prvo polje označava pripadajuću kreditnu instituciju, dok drugo označava vrstu računa (redovni račun, SBF itd.) povezanu s tim analitičkim kontom. Ta su dva polja vidljiva i mogu se uređivati i u šifarniku banaka. Za analitičke konte vrste kupac/dobavljač u ovom je obrascu moguće upravljati i poljem „Mogućnost odstupanja”, koje se može uređivati i u glavnom obrascu šifarnika kontakata, za pojedinačni redak analitičkog konta.

**Tijekovi dospijeća:** u ovom odjeljku potrebno je svakom tijeku novčanog toka (pogledajte osnovnu dokumentaciju istoimenog modula) dodijeliti odgovarajuću šifru za DocFinance. Ista šifra može se dodijeliti većem broju redaka tijeka.

**[Vrste plaćanja](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types):** u ovom odjeljku potrebno je za svaku vrstu plaćanja navesti odgovarajuću povezanu šifru u sustavu DocFinance (ista šifra može se dodijeliti većem broju redaka). Osim toga, moguće je navesti šifru mogućnosti odstupanja za vrstu plaćanja, koja će se upotrebljavati prilikom izvoza podataka u DocFinance.

**Poduzeća:** za svako poduzeće obvezno je navesti odgovarajuću šifru u sustavu DocFinance. Poduzeća bez dodijeljene šifre bit će isključena iz postupaka izvoza/uvoza podataka u sustav DocFinance i iz njega.

:::note[Detaljnije informacije]
Primjer standardnih šifri mogućnosti odstupanja u sustavu DocFinance:

1 >> RATING 1

2 >> RATING 2

3 >> RATING 3

4 >> RATING 4

- **Logika izvoza konta iz sustava Fluentis u DocFinance:** dostupna duljina polja u datoteci iznosi 16 znakova (duljina u sustavu Fluentis iznosi 8 + 8 znakova za polja konto i analitički konto). Polje je podijeljeno u 2 bloka. Primjerice, konto `xyz-001` u datoteku se unosi kao `xyz     001     `.

- **Šifre predložaka iz sustava Fluentis** (u formatu DocFinance dostupna su najviše 4 znaka) mapiraju se u sustavu DocFinance na računovodstvena kretanja koja se uvoze u Fluentis. Preporučuje se u predlošcima u sustavu Fluentis uključiti opcije zatvaranja i otvaranja otvorenih stavki (u slučaju kada otvorena stavka nije pronađena ili je riječ o predujmu).

:::danger[UPOZORENJE]
Napominjemo da se **kreiranje SBF prezentacijske liste i dalje obavlja u sustavu Fluentis** (stoga ćemo datoteku kreirati u Fluentisu i uvesti je u DocFinance), **kao i kreiranje neplaćene stavke** (radi ponovnog otvaranja izvornih otvorenih stavki).

Posebno je važno **zadržati upravljanje portfeljem vrijednosnih papira u sustavu Fluentis kako bi se pravilno upravljalo dospijećem provizija prilikom plaćanja**.
:::

**Knjiženje neplaćenih stavki mora na potražnoj strani sadržavati prijelazni konto banke** (koji je moguće postaviti u parametrima modula Neplaćene stavke) jer DocFinance šalje terećenje tekućeg računa s tim istim prijelaznim kontom kao protukontom.

Sva ostala kretanja naplate i plaćanja koja uključuju banke obrađivat će se u sustavu DocFinance.