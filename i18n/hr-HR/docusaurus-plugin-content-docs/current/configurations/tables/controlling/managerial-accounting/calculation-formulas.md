---
title: Formule (izračuna)
sidebar_position: 3
---

:::tip Napomena
Ova je tablica namijenjena isključivo tvrtkama koje imaju aktiviran *Kontroling*.
:::

U formulama izračuna moguće je definirati automatsko stvaranje izvanbilančnih knjiženja u području na temelju izvornih vrijednosti. Općenito, cilj je automatizirati određena knjiženja, po potrebi i približnim izračunima, koja bi se u računovodstvu inače evidentirala naknadno ili bi njihov ručni unos za svako razdoblje kao izvanbilančnih knjiženja područja bio previše zahtjevan.

:::tip Primjer
Primjerice, moguće je automatski izračunati troškove bonusa za ostvarene rezultate, koji se možda evidentiraju na kraju godine primjenom stope od 3 % na prihod od rezervnih dijelova u Italiji. To se može postići formulom koja primjenjuje taj postotak na saldo odgovarajućeg konta, vrednovan na centru troška prihoda od prodaje, a izračunani trošak dodjeljuje komercijalnom centru.

Formule se mogu primijeniti i na evidentirane količine određene mjerne jedinice, primjerice kada se pretpostavlja da određeni trošak iznosi fiksni iznos po komadu.
:::

Za unos nove *formule* u obrascu za pretraživanje potrebno je pritisnuti gumb *Novo*, čime se otvara obrazac za upravljanje formulom sa sljedećim poljima:

- **DATUM POČETKA** i **DATUM ZAVRŠETKA** valjanosti pravila

- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) na koje se pravilo primjenjuje

- **ODREDIŠNI KONTO**, odnosno podkonto koji se koristi za automatsko evidentiranje knjiženja u analitičkom računovodstvu izvanbilančnog knjiženja područja

- [**ODREDIŠNI CENTAR**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), odnosno centar koji se koristi u retku knjiženja

- [**IZVORNI CENTAR MJERNE JEDINICE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) – neobvezno polje koje služi za filtriranje fizičkih kretanja prema centru kada formula uključuje količine definirane mjernom jedinicom

- [**IZVORNI CENTAR KONTA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) – neobvezno polje koje služi za filtriranje vrijednosti podkonta uključenih u formulu prema centru

Ispod se nalaze dvije tablice: lijevo je popis konta iz kontnog plana, a desno popis dostupnih [*mjernih jedinica*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units).

U donjem dijelu obrasca nalazi se odjeljak s formulom. Formula se može sastaviti povlačenjem mišem elemenata (*konta* i/ili *mjernih jedinica*) koje želimo uključiti u izračun.

:::tip Primjer
Formula može, primjerice, izgledati ovako:

`40001-004-Prihodi od prodaje rezervnih dijelova ITA * 0.03`
:::

:::tip Napomena
U obrascu za pretraživanje nalazi se gumb za dupliciranje odabrane formule.
:::