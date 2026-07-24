---
title: Lista za preuzimanje materijala (Picking)
description: Upravljanje listama za preuzimanje materijala za proizvodne naloge u Fluentisu, uz kreiranje skladišnih knjiženja i dokumenata za picking (slaganje robe).
keywords:
  - lista za preuzimanje
  - materijali proizvodnje
  - picking (slaganje robe)
  - Fluentis
  - proizvodni nalozi
sidebar_position: 4
schema: TechArticle
tags:
  - proizvodnja
  - logistika
  - materijali
  - picking (slaganje robe)
last_update:
  author: Fluentis Documentation Team
---

# Lista za preuzimanje materijala

:::important Čemu služi
**Lista za preuzimanje (Picking) materijala** u Fluentisu ključan je alat za učinkovito upravljanje materijalima namijenjenima proizvodnim nalozima. Omogućuje kreiranje i upravljanje detaljnim popisima materijala koje je potrebno preuzeti, uz izravno povezivanje operacije sa specifičnim potrebama proizvodnje.

Često se koristi za generiranje dokumenata za picking i upravljanje prijenosom materijala, primjerice prema WIP skladištu, čime se pojednostavljuje logistički proces i osigurava potpuna sljedivost.
:::

Ova procedura omogućuje kreiranje i upravljanje *listama za preuzimanje materijala* za *proizvodne naloge* koji koriste takav način opskrbe.

Moguće je pretraživati *radne naloge proizvodnje* u statusu *Pokrenuto* i *Izvršni* te nad njima izvršiti dvije različite operacije:

- **Traži materijale**: omogućuje izdavanje materijala koji su u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla definirani s *Tip preuzimanja: S listom*. Stvarna potrošnja izvršava se putem gumba **Kreiraj knjiženja**, čime se generira **skladišni izlaz**.

- **Traži materijale za picking (listu)**: omogućuje premještanje materijala iz skladišta u kojem su pohranjeni (primjerice u WIP skladište) te kreiranje **dokumenata za picking**, odnosno dokumenata kretanja robe koji još nisu knjiženi, a mogu se pregledavati u prozoru [Picking](/docs/logistics/picking/search-picking).

Gumb **Kreiraj knjiženja** generira dokument za picking te automatski postavlja:

- za materijale s *Tip preuzimanja = S listom*: predložak i skladište koji su već definirani na retku materijala proizvodnog naloga kako bi se mogao izvršiti konačni skladišni izlaz;
- za materijale s *Tip preuzimanja = Ručno*: predložak i skladište definirane u odabranoj *Vrsti pickinga*.

Materijali preneseni u WIP skladište naknadno će biti izdani kroz **prijave proizvodnje**.

Knjiženje će se izvršiti naknadno putem posebne procedure za **izlaz pickinga**.

## Filtar

Na kartici **Filtar** moguće je pretraživati željene *Proizvodne naloge* primjenom dostupnih kriterija filtriranja.

### Specifični gumbi

- **Traži materijale**: nakon pretraživanja materijala ovim gumbom moguće je izravno kreirati skladišna knjiženja. Među prikazanim podacima za svaki materijal posebno je važna oznaka **Mov.**, koja kada je aktivna označava da je za taj materijal u MRP parametrima artikla odabrana vrsta preuzimanja *Putem liste*. Ako oznaka nije aktivna, za taj je materijal odabrana vrsta preuzimanja *Ručno*. (Za više informacija o vrstama preuzimanja pogledajte članak o [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.)

- **Traži materijale za picking**: nakon pretraživanja materijala ovim gumbom moguće je kreirati dokumente za picking, odnosno dokumente za premještanje materijala, a ne stvarna knjiženja. Takvi dokumenti mogu se pregledavati u prozoru [Picking](/docs/logistics/picking/search-picking) unutar logističkog područja. U tom slučaju knjiženje će biti izvršeno naknadno, nakon dodatne provjere.

- **Omogući kretanja (knjiženja)** i **Onemogući kretanja (knjiženja)**: masovno aktiviraju ili deaktiviraju oznaku mogućnosti knjiženja **Kretanje** na odabranim redovima materijala.

- **Kreiraj knjiženja**: nakon odabira materijala, ovisno o vrsti pretrage, omogućuje kreiranje skladišnih knjiženja (izlaza) ili dokumenta za picking.

U slučaju kreiranja dokumenta za picking, za materijale s:

  - *Tip preuzimanja = S listom*: postavljaju se predložak i skladište koji su već definirani na retku materijala proizvodnog naloga;
  - *Tip preuzimanja = Ručno*: postavljaju se predložak i skladište definirani u korištenoj **Vrsti pickinga**.

## Povrati zapis

Na ovoj kartici moguće je **vratiti** prethodno kreirana knjiženja.

Odabirom retka prikazuju se:

- na kartici **Generirani zapisi podizanja** → kreirana knjiženja;
- na kartici **Picking (lista) generirana iz podizanja** → generirani dokumenti za picking.

### Specifični gumbi

- **Izbriši popis podizanja (pickinga)**: istovremeno vraća i knjiženja i generirane dokumente za picking.

- **Izbriši zapise (knjiženja)**: vraća isključivo odabrano skladišno knjiženje.

- **Izbriši picking (listu)**: vraća odabrani dokument za picking na kartici **Picking (lista) generirana iz podizanja**.

## Sažetak i dodatne informacije

Lista za preuzimanje materijala omogućuje:

- upravljanje materijalima namijenjenima proizvodnim nalozima;
- kreiranje skladišnih izlaza ili dokumenata za picking;
- upravljanje prijenosima prema *međuskladištima* (npr. WIP);
- jednostavno praćenje i vraćanje knjiženja i pickinga.

Za dodatne informacije pogledajte:

- [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)
- [Picking (slaganje robe) – logističko područje](/docs/logistics/picking/search-picking)
- [Zajedničke funkcionalnosti i polja](/docs/guide/common)