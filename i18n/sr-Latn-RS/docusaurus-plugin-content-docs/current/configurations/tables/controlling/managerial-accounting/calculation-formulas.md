---
title: Formule (obračuna)
sidebar_position: 3
---

:::tip Napomena
Ova tabela namenjena je isključivo preduzećima koja imaju aktiviran *Kontroling*.
:::

U formulama obračuna moguće je definisati automatsko kreiranje vanbilansnih knjiženja u području na osnovu izvornih vrednosti. Uopšteno, cilj je automatizovati određena knjiženja, po potrebi i približnim obračunima, koja bi se u računovodstvu inače evidentirala naknadno ili bi njihov ručni unos za svaki period kao vanbilansnih knjiženja područja bio previše zahtevan.

:::tip Primer
Na primer, moguće je automatski obračunati troškove bonusa za ostvarene rezultate, koji se možda evidentiraju na kraju godine primenom stope od 3 % na prihod od rezervnih delova u Italiji. To se može postići formulom koja primenjuje taj procenat na saldo odgovarajućeg konta, vrednovan na centru troška prihoda od prodaje, a obračunati trošak dodeljuje komercijalnom centru.

Formule se mogu primeniti i na evidentirane količine određene merne jedinice, na primer kada se pretpostavlja da određeni trošak iznosi fiksni iznos po komadu.
:::

Za unos nove *formule* u obrascu za pretragu potrebno je pritisnuti dugme *Novo*, čime se otvara obrazac za upravljanje formulom sa sledećim poljima:

- **DATUM POČETKA** i **DATUM ZAVRŠETKA** važenja pravila

- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) na koje se pravilo primenjuje

- **ODREDIŠNI KONTO**, odnosno podkonto koji se koristi za automatsko evidentiranje knjiženja u analitičkom knjigovodstvu vanbilansnog knjiženja područja

- [**ODREDIŠNI CENTAR**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), odnosno centar koji se koristi u redu knjiženja

- [**IZVORNI CENTAR MERNE JEDINICE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) – opciono polje koje služi za filtriranje fizičkih kretanja prema centru kada formula uključuje količine definisane mernom jedinicom

- [**IZVORNI CENTAR KONTA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) – opciono polje koje služi za filtriranje vrednosti podkonta uključenih u formulu prema centru

Ispod se nalaze dve tabele: levo je lista konta iz kontnog plana, a desno lista dostupnih [*mernih jedinica*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units).

U donjem delu obrasca nalazi se odeljak sa formulom. Formula se može sastaviti prevlačenjem mišem elemenata (*konta* i/ili *mernih jedinica*) koje želimo da uključimo u obračun.

:::tip Primer
Formula može, na primer, izgledati ovako:

`40001-004-Prihodi od prodaje rezervnih delova ITA * 0.03`
:::

:::tip Napomena
U obrascu za pretragu nalazi se dugme za dupliranje izabrane formule.
:::