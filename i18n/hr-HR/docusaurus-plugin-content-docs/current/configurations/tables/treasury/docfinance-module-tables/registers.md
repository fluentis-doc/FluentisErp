---
title: Šifarnici
sidebar_position: 1
---

Tablica upravlja nizom **informacija koje se moraju povezati kako bi se omogućila komunikacija između Fluentis i DocFinance** (posebno se treba pozvati na specifičnu dokumentaciju DocFinance za značenje polja i odgovarajuće kodove koje treba koristiti).  

Sastoji se od 4 odjeljka:

**[Plan računa](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**: u ovom odjeljku potrebno je za podračune bankovnih anagrafika označiti polja ‘Banka’ i ‘RBN’ (postavljanjem valjanih kodova u DocFinance). Prvo polje označava referentnu banku, dok drugo tip računa (tekući račun, SBF, itd.) povezan s tim podračunom. Ova dva polja su vidljiva i mogu se mijenjati i unutar bankovne anagrafike. Što se tiče podračuna za kupce/dobavljače, moguće je u ovom sučelju upravljati i poljem ‘Derogabilnost’, koje se može upravljati i iz glavnog sučelja anagrafike kontakata za pojedinu liniju podračuna.

**Novčani tokovi po rokovima**: u ovom odjeljku se svakom cash flow toku (pogledati osnovnu dokumentaciju modula) dodjeljuje odgovarajući kod za DocFinance. Dozvoljeno je da se isti kod dodijeli više redaka toka.

**[Tipovi plaćanja](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types)**: u ovom odjeljku za svaki tip plaćanja se označava odgovarajući kod u DocFinance (isti kod se može dodijeliti više redaka). Moguće je dodatno označiti i kod derogabilnosti tipa plaćanja, koji će se koristiti pri izvozu podataka za DocFinance.

**Tvrtke**: za svaku tvrtku je obavezno unijeti odgovarajući kod za DocFinance. Tvrtke bez koda bit će isključene iz procedura izvoza/uvoza podataka za/iz DocFinance.


:::note[Detaljnije]
Primjer standardne derogabilnosti u DocFinance:

1    >>         RATING 1

2    >>         RATING 2

3    >>         RATING 3

4    >>         RATING 4



- Logika izvoza računa iz Fluentis u DocFinance: dostupno polje u datoteci ima 16 znakova (Fluentis koristi 8+8 za polja račun+podračun), polje se dijeli u dva bloka, npr. račun xyz-001 u datoteci će biti unesen kao ‘xyz 001 ‘.


- Kodovi knjiženja u Fluentis (maksimalno 4 znaka dostupna u DocFinance tragu) mapirat će se u DocFinance za knjiženja koja se uvoze u Fluentis: preporučuje se da se u Fluentis-u postave flagovi za zatvaranje i otvaranje stavki (u slučaju da stavka nije identificirana ili je avans).

- Važno je da Fluentis upravlja kreiranjem SBF naloga (datoteka se stvara u Fluentis-u za uvoz u DocFinance), kao i kreiranjem neplaćenih stavki (za ponovno otvaranje originalnih stavki). Treba zadržati upravljanje portfeljem efekata u Fluentis-u kako bi se pravilno obračunale provizije prilikom plaćanja.

Knjiženje neplaćenih stavki mora predvidjeti privremeni bankovni račun (koji se može postaviti u parametrima modula neplaćenih stavki) jer DocFinance šalje terećenje na tekući račun s kontra-računom tim istim privremenim računom.

Svi ostali novčani primitci i uplate koji uključuju banke bit će upravljani kroz DocFinance.
:::