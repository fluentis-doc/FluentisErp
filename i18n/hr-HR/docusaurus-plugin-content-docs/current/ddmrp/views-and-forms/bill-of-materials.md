---
title: DDMRP sastavnica
description: Prikaz sastavnice u DDMRP okruženju s analizom DLT-a, ADU-a, buffer zona i obrtnog kapitala.
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
  - Sastavnice
last_update:
  author: Fluentis Documentation Team
---

# DDMRP sastavnica

Ovaj obrazac omogućuje prikaz sastavnice proizvoda u **DDMRP** okruženju.
Razlikuje se od standardnog Fluentis obrasca za upravljanje sastavnicama jer prikazuje isključivo informacije relevantne za DDMRP te **ne omogućuje izmjenu sastavnice**.

## Artikli upravljani DDMRP zalihama i prikazane informacije

Artikli koji se upravljaju putem DDMRP zaliha označeni su simbolom **trobojnog spremnika (buffer)**.
Za takve artikle prikazuju se sljedeće specifične informacije:
- ADU (Average Daily Usage – prosječna dnevna potrošnja)
- DLT (Decoupled Lead Time – razdvojeno vrijeme nabave/proizvodnje)
- Crvena zona
- Žuta zona
- Zelena zona
- Obrtni kapital

Prikazane vrijednosti su **trenutno važeće** i usklađene s podacima definiranima u obrascu **DDMRP parametri**.

:::important
Prikazani obrtni kapital odnosi se na sam artikl, a ne na zalihu potrebnu za proizvodnju proizvoda čija se sastavnica trenutno pregledava.
:::

Vrijednost se određuje na temelju ukupne potražnje svih artikala koji koriste predmetni artikl kao DDMRP zalihu te se odnosi na **posljednji izvršeni izračun**.
Kako bi podaci bili ažurni, dovoljno je ponovno pokrenuti odgovarajući postupak izračuna.

## Postupci dostupni iz obrasca

Iz obrasca za prikaz DDMRP sastavnice moguće je izravno pokrenuti sljedeće operativne postupke:

1. [**Izračun DLT-a (Decoupled Lead Time)**](/docs/ddmrp/procedures/dlt-calculation)
2. [**Izračun buffer zona**](/docs/ddmrp/procedures/zones-calculation)
3. [**Ažuriranje prosječne dnevne potrošnje (ADU)**](/docs/ddmrp/procedures/adu-update)
4. [**Izračun vrijednosti zaliha**](/docs/ddmrp/procedures/inventory-value)

## Korištenje za simulacije i analize

DDMRP prikaz sastavnice posebno je koristan tijekom simulacija za provjeru promjena DLT-a i obrtnog kapitala (koristeći izvještaj **Obrtni kapital**).

## Artikli na kritičnom putu i prikaz DLT-a

Kod pojedinih artikala koji nisu definirani kao DDMRP zalihe ipak se prikazuje njihov DLT.
To se događa kod artikala označenih **crvenom bojom**, odnosno onih koji pripadaju **kritičnom putu** nekog gotovog proizvoda.
Glavni razlozi za to su:
- Artikli skladišteni u distribucijskim centrima, gdje je za izračun DLT-a potrebno zbrojiti vrijeme transporta iz proizvodnog pogona i vrijeme potrebno za izradu proizvoda.
- Međuproizvodi koji nisu gotovi proizvodi, za koje postupak izračuna DDMRP buffera mora izračunati DLT i za artikle koji se nalaze na kritičnom putu buffera.

### Postupak izračuna DLT-a

Postupak [**Izračun DLT-a (Decoupled Lead Time)**](/docs/ddmrp/procedures/dlt-calculation) identificira sve artikle koji se nalaze na kritičnim putovima svih sastavnica prisutnih u sustavu, a ne samo sastavnica artikala koji imaju DDMRP buffer.

## Označavanje kritičnih putova

U prikazu DDMRP sastavnice svi artikli koji pripadaju bilo kojem **kritičnom putu** označeni su crvenom bojom.
Zbog toga se u prikazu jedne sastavnice može pojaviti više crveno označenih grana:
- zato što proizvod može imati više kritičnih putova (čije su DLT vrijednosti jednake),
- ili zato što pojedine grane predstavljaju dio kritičnog puta nekog drugog proizvoda.

## Smanjenje razdvojenog vremena isporuke (DLT)

Smanjenje **DLT-a proizvoda** čija se sastavnica pregledava moguće je isključivo stvaranjem DDMRP zalihe za jedan od artikala označenih crvenom bojom koji se nalazi na kritičnom putu tog proizvoda.
Ova je napomena važna jer se ponekad prikazuje više crvenih grana, od kojih neke predstavljaju kritične putove drugih proizvoda.
Takav prikaz omogućuje brzo prepoznavanje artikala čijim se stavljanjem na zalihu može smanjiti vrijeme isporuke gotovog proizvoda.

## Obrtni kapital i kriteriji izračuna

Prikaz **obrtnog kapitala** omogućuje razumijevanje koje odluke o pozicioniranju zaliha istovremeno:
- smanjuju vrijeme isporuke,
- minimiziraju obrtni kapital potreban za postizanje tog rezultata.

Za dodatne informacije pogledajte izvještaj **Obrtni kapital**.

### Jedinični trošak

**Jedinični trošak** prikazan za svaki artikl odgovara vrijednosti korištenoj u posljednjem izračunu prosječno investiranog obrtnog kapitala u DDMRP zalihama (prosječni, posljednji ili standardni trošak).
U obzir se uzimaju isključivo:
- troškovi materijala,
- troškovi vanjskih operacija i kooperacije,

odnosno troškovi koji se mogu izravno pripisati vanjskim dobavljačima.
Za dodatne informacije pogledajte postupak [**Izračun vrijednosti zaliha**](/docs/ddmrp/procedures/inventory-value).

### Artikli kooperacije (conto lavoro)

Kod artikala koji se proizvode putem kooperacije (*conto lavoro*), jedinični trošak obrade izračunava se oduzimanjem troška podređenih artikala iz sastavnice od ukupnog troška artikla:
> Trošak artikla − Trošak podređenih artikala iz sastavnice

### Izračun obrtnog kapitala

Prosječno investirani obrtni kapital izračunava se množenjem:
> Jedinični trošak × Prosječna zaliha
pri čemu je:
> Prosječna zaliha = Crvena zona + (Zelena zona / 2)

Dobiveni rezultat predstavlja prosječnu vrijednost obrtnog kapitala vezanog uz predmetnu zalihu.

:::important
Prikazana vrijednost obrtnog kapitala možda nije ažurna ako su nakon posljednjeg izračuna promijenjeni:
- parametri buffer zona,
- jedinični troškovi artikala.
:::

Kako bi podaci bili točni i ažurni, potrebno je ponovno pokrenuti postupak [**Izračun vrijednosti zaliha**](/docs/ddmrp/procedures/inventory-value).

## Sažetak i dodatne informacije

Obrazac za prikaz DDMRP sastavnice omogućuje:
- Integriranu analizu DLT-a, ADU-a i buffer zona
- Identifikaciju kritičnih putova i strateških artikala
- Procjenu utjecaja zaliha na obrtni kapital
- Podršku pri planiranju i DDMRP simulacijama

Za dodatne operativne informacije pogledajte:
- [**Izračun DLT-a (Decoupled Lead Time)**](/docs/ddmrp/procedures/dlt-calculation)
- [**Izračun buffer zona**](/docs/ddmrp/procedures/zones-calculation)
- [**Ažuriranje prosječne dnevne potrošnje (ADU)**](/docs/ddmrp/procedures/adu-update)
- [**Izračun vrijednosti zaliha**](/docs/ddmrp/procedures/inventory-value)