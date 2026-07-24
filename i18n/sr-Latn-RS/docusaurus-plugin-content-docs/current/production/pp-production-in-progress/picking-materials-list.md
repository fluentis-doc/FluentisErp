---
title: Lista za preuzimanje materijala (Picking)
description: Upravljanje listama za preuzimanje materijala za proizvodne naloge u Fluentisu, uz kreiranje skladišnih knjiženja i dokumenata za picking (komisioniranje robe).
keywords:
  - lista za preuzimanje
  - materijali proizvodnje
  - picking (komisioniranje robe)
  - Fluentis
  - proizvodni nalozi
sidebar_position: 4
schema: TechArticle
tags:
  - proizvodnja
  - logistika
  - materijali
  - picking (komisioniranje robe)
last_update:
  author: Fluentis Documentation Team
---

# Lista za preuzimanje materijala

:::important Čemu služi
**Lista za preuzimanje (Picking) materijala** u Fluentisu predstavlja ključni alat za efikasno upravljanje materijalima namijenjenim proizvodnim nalozima. Omogućava kreiranje i upravljanje detaljnim listama materijala koje je potrebno preuzeti, uz direktno povezivanje operacije sa specifičnim potrebama proizvodnje.

Često se koristi za generisanje dokumenata za picking i upravljanje transferom materijala, na primjer prema WIP skladištu, čime se pojednostavljuje logistički proces i osigurava potpuna sljedivost.
:::

Ova procedura omogućava kreiranje i upravljanje *listama za preuzimanje materijala* za *proizvodne naloge* koji koriste takav način snabdijevanja.

Moguće je pretraživati *radne naloge proizvodnje* u statusu *Pokrenuto* i *Izvršni* te nad njima izvršiti dvije različite operacije:

- **Traži materijale**: omogućava izdavanje materijala koji su u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla definisani sa *Tip preuzimanja: Sa listom*. Stvarna potrošnja izvršava se putem dugmeta **Kreiraj knjiženja**, čime se generiše **skladišni izlaz**.

- **Traži materijale za picking (listu)**: omogućava premještanje materijala iz skladišta u kojem su uskladišteni (na primjer u WIP skladište) te kreiranje **dokumenata za picking**, odnosno dokumenata kretanja robe koji još nisu knjiženi, a mogu se pregledavati u prozoru [Picking](/docs/logistics/picking/search-picking).

Dugme **Kreiraj knjiženja** generiše dokument za picking te automatski postavlja:

- za materijale sa *Tip preuzimanja = Sa listom*: predložak i skladište koji su već definisani na redu materijala proizvodnog naloga kako bi se mogao izvršiti konačni skladišni izlaz;
- za materijale sa *Tip preuzimanja = Ručno*: predložak i skladište definisane u odabranoj *Vrsti pickinga*.

Materijali preneseni u WIP skladište naknadno će biti izdani kroz **prijave proizvodnje**.

Knjiženje će biti izvršeno naknadno putem posebne procedure za **izlaz pickinga**.

## Filtar

Na kartici **Filtar** moguće je pretraživati željene *Proizvodne naloge* primjenom dostupnih kriterijuma filtriranja.

### Specifična dugmad

- **Traži materijale**: nakon pretrage materijala ovim dugmetom moguće je direktno kreirati skladišna knjiženja. Među prikazanim podacima za svaki materijal posebno je važna oznaka **Mov.**, koja kada je aktivna označava da je za taj materijal u MRP parametrima artikla odabran tip preuzimanja *Putem liste*. Ako oznaka nije aktivna, za taj materijal je odabran tip preuzimanja *Ručno*. (Za više informacija o tipovima preuzimanja pogledajte članak o [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.)

- **Traži materijale za picking**: nakon pretrage materijala ovim dugmetom moguće je kreirati dokumente za picking, odnosno dokumente za premještanje materijala, a ne stvarna knjiženja. Takvi dokumenti mogu se pregledavati u prozoru [Picking](/docs/logistics/picking/search-picking) unutar logističke oblasti. U tom slučaju knjiženje će biti izvršeno naknadno, nakon dodatne provjere.

- **Omogući kretanja (knjiženja)** i **Onemogući kretanja (knjiženja)**: masovno aktiviraju ili deaktiviraju oznaku mogućnosti knjiženja **Kretanje** na odabranim redovima materijala.

- **Kreiraj knjiženja**: nakon odabira materijala, u zavisnosti od vrste pretrage, omogućava kreiranje skladišnih knjiženja (izlaza) ili dokumenta za picking.

U slučaju kreiranja dokumenta za picking, za materijale sa:

  - *Tip preuzimanja = Sa listom*: postavljaju se predložak i skladište koji su već definisani na redu materijala proizvodnog naloga;
  - *Tip preuzimanja = Ručno*: postavljaju se predložak i skladište definisani u korišćenoj **Vrsti pickinga**.

## Povrati zapis

Na ovoj kartici moguće je **vratiti** prethodno kreirana knjiženja.

Odabirom reda prikazuju se:

- na kartici **Generisani zapisi podizanja** → kreirana knjiženja;
- na kartici **Picking (lista) generisana iz podizanja** → generisani dokumenti za picking.

### Specifična dugmad

- **Obriši listu podizanja (pickinga)**: istovremeno vraća i knjiženja i generisane dokumente za picking.

- **Obriši zapise (knjiženja)**: vraća isključivo odabrano skladišno knjiženje.

- **Obriši picking (listu)**: vraća odabrani dokument za picking na kartici **Picking (lista) generisana iz podizanja**.

## Sažetak i dodatne informacije

Lista za preuzimanje materijala omogućava:

- upravljanje materijalima namijenjenim proizvodnim nalozima;
- kreiranje skladišnih izlaza ili dokumenata za picking;
- upravljanje transferima prema *međuskladištima* (npr. WIP);
- jednostavno praćenje i vraćanje knjiženja i pickinga.

Za dodatne informacije pogledajte:

- [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)
- [Picking (komisioniranje robe) – logistička oblast](/docs/logistics/picking/search-picking)
- [Zajedničke funkcionalnosti i polja](/docs/guide/common)