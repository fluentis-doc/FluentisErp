---
title: Istorija knjiženja
sidebar_position: 3
---

Ova forma je u osnovi ista kao ***Istorija upravljačkih knjiženja***. Prikazuje rezultate ***Obrade perioda***, ali filtrira isključivo one redove koji su direktno povezani sa projektom/nalogom. To znači da su prikazani troškovi i prihodi koji su direktno dodeljeni analiziranoj dimenziji projekta/naloga.

Polja su ista kao u opštoj formi za upravljačku dimenziju i uključuju:

- ***Podkonto***
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Centar prenosa***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), prikazuje se samo za stavke povezane sa nosiocima troškova
- ***Godina***
- ***Period***
- ***Duguje***
- ***Potražuje***
- ***Fiksna vrednost*** (zbir sa varijabilnom vrednošću daje prethodnu vrednost duguje ili potražuje)
- ***Varijabilna vrednost*** (zbir sa fiksnom vrednošću daje prethodnu vrednost duguje ili potražuje)
- ***Odeljenje***
- ***Valuta*** (uvek jednaka valuti preduzeća)
- ***Distribucija*** perioda povezana sa redom
- ***Vrsta reda***, može biti:
  - *0* Izvorni redovi (nastali iz zatvaranja ili ručnih unosa zatvaranja, ali i iz redova nosilaca troškova raspodele)
  - *1* Preneti redovi (za nosioce troškova raspodele, to su redovi koji storniraju vrednost iz *poslovnog centra*)
  - *2* Primljeni redovi (za nosioce troškova raspodele, to su redovi koji prenose vrednost iz centra nosioca u *centar troška*)

:::tip NAPOMENA
Redovi raspodele su u osnovi redovi *raspodele nosilaca troškova*, koji sa prelaznih konta preraspodeljuju vrednosti na stvarne *centre troškova*. Nosioci troškova *raspodele* uključuju sve ostale metode prenosa vrednosti.
:::

- ***Vrsta distribucije*** primenjenog nosioca troškova
- [***Nosilac troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) koji je primenjen
- ***Izvor*** podataka može biti:
  - *Računovodstveni podaci* (1), direktno iz *privremenog zatvaranja*
  - *Ručno uneti podaci* (2), *vanbilansna knjiženja* područja
  - *Formula* (3), knjiženja kreirana pomoću *računskih formula*
  - *Amortizacija* (4), knjiženja kreirana obračunom amortizacije kontrolinga
  - *Korekcije* (5), zapisi iz privremenih ili godišnjih korekcija
  - *Nosioci troškova tarifa* (6), primena nosilaca troškova tarifa
  - *Zalihe* (7), knjiženja zaliha u kontrolingu
  - *Materijali proizvodnje* (8), troškovi materijala u proizvodnji
  - *Spoljne usluge* (9), troškovi eksternih radova
  - *Proizvodne transformacije* (10), interni proizvodni procesi
  - *Konsolidacija kontrolinga* (15), postupak konsolidacije master kontrolinga u *multicompany* postavkama

:::tip NAPOMENA
Postoje dodatne četiri kategorije izvora podataka, vidljive u istoriji konačnog obračuna projekta:

- *Vreme mašine* (11)
- *Vreme radnika* (12)
- *Priprema mašine* (13)
- *Priprema radnika* (14)
:::

- ***Broj***, ***Godina***, ***Red***, ***WBS***: referentni podaci za projekte (nisu valorizovani).

Nije dozvoljeno brisanje, izmena niti unos novih podataka u prikazanoj tabeli.