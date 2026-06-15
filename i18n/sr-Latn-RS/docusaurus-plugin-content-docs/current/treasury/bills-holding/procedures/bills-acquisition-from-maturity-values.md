---
title: Preuzimanje vrednosnih papira iz dospeća plaćanja
sidebar_position: 2
---

Obrazac se nalazi na putanji **Blagajna > Vrednosni papiri > Procedure > Preuzimanje vrednosnih papira iz dospeća plaćanja**.

Putem ovog obrasca moguće je pokrenuti *čarobnjak* koji istovremeno izvršava:

- pretragu otvorenih stavki kupaca koje su pogodne za kreiranje vrednosnih papira (na primer, bankarska menica),
- kreiranje vrednosnih papira na osnovu podataka iz stavki,
- knjiženje vrednosnih papira, koje zatvara otvorenu stavku i generiše računovodstvenu promenu kojom se stornira potraživanje od kupca i odobrava konto povezan sa korišćenom vrstom vrednosnog papira.

## Kako automatski kreirati novi vrednosni papir iz otvorenih stavki

1. Koristite gornji deo obrasca za filtriranje otvorenih stavki koje treba pretvoriti u vrednosne papire (na primer bankarske menice ili menice).

:::note Napomena
U donjem delu zone za filtriranje nalaze se posebne opcije pretrage:

- prema postavci [**grupisanja dospeća**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) u matičnim podacima kupca; podrazumevano su aktivne obe opcije – sa grupisanjem i bez grupisanja dospeća,
- za prikaz otvorenih stavki dobavljača (podrazumevano isključeno), pored otvorenih stavki kupaca (podrazumevano uključeno).
:::

:::tip Pažnja
U ovom delu prikazuju se **SAMO** računovodstvene stavke povezane sa vrstama plaćanja koje imaju prirodu bankarske menice ili menice.

Ovo je unapred definisan bezbednosni filter kojim se upravlja kroz tabelu [**Vrste plaćanja**](/docs/configurations/tables/general-settings/payment-types), gde se svakoj vrsti plaćanja može dodeliti odgovarajuća vrsta vrednosnog papira.
:::

2. U centralnoj tabeli označite stavke koje želite da preuzmete kao vrednosne papire.

Na osnovu postavki opcije **Grupiši dospeća / Grupiši odobrenja u vrednosnim papirima** iz [**Šifarnika kupaca**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), kao i opcije **Grupiši odobrenja po datumu dospeća** iz [**Parametara portfelja vrednosnih papira**](/docs/configurations/parameters/treasury/bills-portfolio-parameters), stavke će biti grupisane (**ako imaju istu banku i isti datum dospeća**) ili će se u suprotnom kreirati kao zasebni vrednosni papiri.

3. U donjem delu obrasca definišu se:

- **Datum kreiranja** vrednosnog papira
- **Vrsta knjiženja**

Sekcija za **Knjiženje** može biti unapred podešena u parametrima modula Portfelj vrednosnih papira, ali je moguće ručno uključiti ili isključiti knjiženje pre pokretanja postupka.

Ako knjiženje nije izvršeno istovremeno sa kreiranjem putem ovog obrasca, može se naknadno pokrenuti putem [**odgovarajućeg obrasca**](/docs/treasury/bills-holding/accounting/bills-accounting).

Generisano računovodstveno knjiženje zatvara potraživanje prema kupcu, zatvara povezanu otvorenu stavku i odobrava konto definisan za odabranu [**vrstu vrednosnog papira**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types).

Opcija **Grupisanje po kontu** kreira jedno knjiženje koje sadrži onoliko redova koliko je potrebno vrednosnih papira za knjiženje.

Opcija **Privremeno knjiženje** generiše knjiženja u statusu privremenih knjiženja.

:::danger Pažnja
**Upravljanje preuzimanjem vrednosnih papira iz otvorenih stavki** isključuje mogućnost istovremenog preuzimanja iz računa.
:::

4. Kliknite na dugme **Preuzmi** na alatnoj traci kako biste pokrenuli postupak.

### Posebne funkcije

> **Pretraži**: pretražuje listu stavki za koje je potrebno kreirati vrednosne papire.  
> **Preuzmi**: izvršava kreiranje vrednosnih papira za označene stavke.

## Kartica Prethodna preuzimanja

Nakon izvršenog kreiranja, obrađeni redovi nestaju iz tabele na kartici **Filter**, a rezultat je vidljiv na kartici **Prethodna preuzimanja**, gde je moguće poništiti operaciju.

Nije moguće poništiti kreiranje vrednosnih papira ako su oni već proknjiženi ili uključeni u prezentacionu listu.

### Posebne funkcije

> **Pretraži**: prikazuje listu izvršenih preuzimanja.  
> **Poništi preuzimanje**: briše kompletno izvršeno preuzimanje zajedno sa svim povezanim vrednosnim papirima.  
> **Poništi vrednosni papir**: briše pojedinačno kreirani vrednosni papir.