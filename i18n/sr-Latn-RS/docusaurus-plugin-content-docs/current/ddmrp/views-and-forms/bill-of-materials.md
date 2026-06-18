---
title: DDMRP sastavnica
description: Prikaz sastavnice u DDMRP okruženju sa analizom DLT-a, ADU-a, buffer zona i obrtnog kapitala.
keywords:
  - DDMRP sastavnica
  - DLT
  - ADU
  - DDMRP buffer
  - obrtni kapital
sidebar_position: 8
schema: TechArticle
sidebar_label: DDMRP sastavnica
tags:
  - DDMRP
  - Proizvodnja
  - Planiranje
last_update:
  author: Fluentis Documentation Team
---

# DDMRP sastavnica

Ovaj obrazac omogućava prikaz sastavnice proizvoda u **DDMRP** okruženju.
Razlikuje se od standardnog Fluentis obrasca za upravljanje sastavnicama jer prikazuje isključivo informacije relevantne za DDMRP i **ne omogućava izmenu sastavnice**.

## Artikli kojima se upravlja DDMRP zalihama i prikazane informacije

Artikli kojima se upravlja putem DDMRP zaliha označeni su simbolom **trobojnog buffera**.
Za takve artikle prikazuju se sledeće specifične informacije:
- ADU (Average Daily Usage – prosečna dnevna potrošnja)
- DLT (Decoupled Lead Time – razdvojeno vreme nabavke/proizvodnje)
- Crvena zona
- Žuta zona
- Zelena zona
- Obrtni kapital

Prikazane vrednosti su **trenutno važeće** i usklađene sa podacima definisanim u obrascu **DDMRP parametri**.

:::important
Prikazani obrtni kapital odnosi se na sam artikl, a ne na zalihu potrebnu za proizvodnju proizvoda čija se sastavnica trenutno pregledava.
:::

Vrednost se određuje na osnovu ukupne potražnje svih artikala koji koriste posmatrani artikl kao DDMRP buffer i odnosi se na **poslednji izvršeni obračun**.
Kako bi podaci bili ažurni, dovoljno je ponovo pokrenuti odgovarajuću proceduru izračuna.

## Procedure dostupne iz obrasca

Iz obrasca za prikaz DDMRP sastavnice moguće je direktno pokrenuti sledeće operativne procedure:
1. [**Izračun DLT-a (Decoupled Lead Time)**](/docs/ddmrp/procedures/dlt-calculation)
2. [**Izračun buffer zona**](/docs/ddmrp/procedures/zones-calculation)
3. [**Ažuriranje prosečne dnevne potrošnje (ADU)**](/docs/ddmrp/procedures/adu-update)
4. [**Izračun vrednosti zaliha**](/docs/ddmrp/procedures/inventory-value)

## Korišćenje za simulacije i analize

DDMRP prikaz sastavnice posebno je koristan tokom simulacija za proveru promena DLT-a i obrtnog kapitala (koristeći izveštaj **Obrtni kapital**).

## Artikli na kritičnom putu i prikaz DLT-a

Kod pojedinih artikala koji nisu definisani kao DDMRP bufferi ipak se prikazuje njihov DLT.
To se dešava kod artikala označenih **crvenom bojom**, odnosno onih koji pripadaju **kritičnom putu** nekog gotovog proizvoda.
Glavni razlozi za to su:
- Artikli skladišteni u distributivnim centrima, gde je za izračunavanje DLT-a potrebno sabrati vreme transporta iz proizvodnog pogona i vreme potrebno za izradu proizvoda.
- Međuproizvodi koji nisu gotovi proizvodi, za koje procedura obračuna DDMRP buffera mora izračunati DLT i za artikle koji se nalaze na kritičnom putu buffera.

### Procedura izračuna DLT-a

Procedura [**Izračun DLT-a (Decoupled Lead Time)**](/docs/ddmrp/procedures/dlt-calculation) identifikuje sve artikle koji se nalaze na kritičnim putanjama svih sastavnica prisutnih u sistemu, a ne samo sastavnica artikala koji imaju DDMRP buffer.

## Označavanje kritičnih putanja

U prikazu DDMRP sastavnice svi artikli koji pripadaju bilo kojoj **kritičnoj putanji** označeni su crvenom bojom.
Zbog toga se u prikazu jedne sastavnice može pojaviti više crveno označenih grana:
- zato što proizvod može imati više kritičnih putanja (čije su DLT vrednosti jednake),
- ili zato što pojedine grane predstavljaju deo kritične putanje nekog drugog proizvoda.

## Smanjenje razdvojenog vremena isporuke (DLT)

Smanjenje **DLT-a proizvoda** čija se sastavnica trenutno pregleda moguće je isključivo kreiranjem DDMRP buffera za jedan od artikala označenih crvenom bojom koji se nalazi na kritičnoj putanji tog proizvoda.
Ova napomena je važna jer se ponekad prikazuje više crvenih grana, od kojih neke predstavljaju kritične putanje drugih proizvoda.
Takav prikaz omogućava brzo prepoznavanje artikala čijim se stavljanjem na zalihu može smanjiti vreme isporuke gotovog proizvoda.

## Obrtni kapital i kriterijumi obračuna

Prikaz **obrtnog kapitala** omogućava razumevanje koje odluke o pozicioniranju zaliha istovremeno:

- smanjuju vreme isporuke,
- minimizuju obrtni kapital potreban za postizanje tog rezultata.

Za dodatne informacije pogledajte izveštaj **Obrtni kapital**.

### Jedinični trošak

**Jedinični trošak** prikazan za svaki artikl odgovara vrednosti korišćenoj u poslednjem obračunu prosečno investiranog obrtnog kapitala u DDMRP zalihama (prosečni, poslednji ili standardni trošak).

U obzir se uzimaju isključivo:
- troškovi materijala,
- troškovi eksternih operacija i kooperacije,
odnosno troškovi koji se mogu direktno pripisati spoljnim dobavljačima.

Za dodatne informacije pogledajte proceduru [**Izračun vrednosti zaliha**](/docs/ddmrp/procedures/inventory-value).

### Artikli kooperacije (kooperantska proizvodnja)

Kod artikala koji se proizvode putem kooperacije (*conto lavoro*), jedinični trošak obrade izračunava se oduzimanjem troška podređenih artikala iz sastavnice od ukupnog troška artikla:
> Trošak artikla − Trošak podređenih artikala iz sastavnice

### Izračun obrtnog kapitala

Prosečno investirani obrtni kapital izračunava se množenjem:
> Jedinični trošak × Prosečna zaliha
pri čemu je:
> Prosečna zaliha = Crvena zona + (Zelena zona / 2)

Dobijeni rezultat predstavlja prosečnu vrednost obrtnog kapitala vezanog za predmetnu zalihu.

:::important
Prikazana vrednost obrtnog kapitala možda nije ažurna ukoliko su nakon poslednjeg obračuna promenjeni:
- parametri buffer zona,
- jedinični troškovi artikala.
:::

Kako bi podaci bili tačni i ažurni, potrebno je ponovo pokrenuti proceduru [**Izračun vrednosti zaliha**](/docs/ddmrp/procedures/inventory-value).

## Sažetak i dodatne informacije

Obrazac za prikaz DDMRP sastavnice omogućava:

- Integrisanu analizu DLT-a, ADU-a i buffer zona
- Identifikaciju kritičnih putanja i strateških artikala
- Procenu uticaja zaliha na obrtni kapital
- Podršku pri planiranju i DDMRP simulacijama

Za dodatne operativne informacije pogledajte:

- [**Izračun DLT-a (Decoupled Lead Time)**](/docs/ddmrp/procedures/dlt-calculation)
- [**Izračun buffer zona**](/docs/ddmrp/procedures/zones-calculation)
- [**Ažuriranje prosečne dnevne potrošnje (ADU)**](/docs/ddmrp/procedures/adu-update)
- [**Izračun vrednosti zaliha**](/docs/ddmrp/procedures/inventory-value)