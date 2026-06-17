---
title: Istorija upravljačkih knjiženja
sidebar_position: 3
---

Ovde se prikazuje lista knjiženja kreiranih putem procedure ***Obrada perioda*** u kontrolingu. Reč je o bazi podataka koja se ne može menjati, a sadrži detalje svake pojedinačne vrednovane stavke, počev od mesečnih računovodstvenih vrednosti pa do pojedinačnih raspodela nosilaca troškova (izuzev onih iz konačnih obračuna projekta, koji imaju zasebnu proceduru obrade i prikaza podataka).

:::tip Napomena
Pošto procedura ***Obrada perioda*** u kontrolingu briše i ponovo kreira vrednosti za celu godinu, svaka godina i obrađeno područje imaće samo jedan zapis.
:::

Svako knjiženje može se otvoriti u režimu pregleda radi analize koraka obrade i detalja obrađenih podataka, uz potpunu vidljivost svih izvornih karakteristika podataka, raspodele perioda, primenjenog nosioca troškova i ciklusa obrade. Na osnovu tih podataka moguće je identifikovati uzroke eventualnih neusaglašenosti nastalih zbog neusklađenih podešavanja.

Dostupna polja u tabeli:

- ***Konto***
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Centar prenosa***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) (prikazuje se samo za stavke povezane sa nosiocima troškova)
- ***Godina***
- ***Period***
- ***Duguje***
- ***Potražuje***
- ***Fiksna vrednost*** (zbir fiksne i varijabilne vrednosti daje prethodnu vrednost duguje ili potražuje)
- ***Varijabilna vrednost*** (zbir varijabilne i fiksne vrednosti daje prethodnu vrednost duguje ili potražuje)
- ***Odeljenje***
- ***Valuta*** (uvek jednaka valuti preduzeća)
- ***Raspodela*** perioda povezana sa redom
- ***Vrsta reda***, može biti:
  - *0* – Izvorni redovi (nastali iz zatvaranja ili ručnih unosa zatvaranja, kao i iz redova nosilaca troškova raspodele)
  - *1* – Preneti redovi (kod nosilaca troškova raspodele to su redovi koji storniraju vrednost iz *poslovnog centra*)
  - *2* – Primljeni redovi (kod nosilaca troškova raspodele to su redovi koji prenose vrednost iz centra nosioca u *centar troška*)

:::tip NAPOMENA
Redovi *raspodele* predstavljaju redove raspodele *nosilaca troškova*, koji iz *prelaznih konta* preraspodeljuju vrednosti na stvarne *centre troškova*. Nosioci troškova raspodele *obuhvataju* sve ostale metode prenosa vrednosti.
:::

- ***Vrsta raspodele*** primenjenog nosioca troškova
- [***Nosilac troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) koji je primenjen
- ***Izvor*** podataka može biti:
  - *Računovodstveni podaci* (1), direktno iz *privremenog zatvaranja*
  - *Ručno uneti podaci* (2), *vanbilansna knjiženja* područja
  - *Formula* (3), knjiženja kreirana pomoću *računskih formula*
  - *Amortizacija* (4), knjiženja nastala obračunom amortizacije kontrolinga
  - *Korekcije* (5), zapisi iz privremenih ili godišnjih korekcija
  - *Nosioci troškova tarifa* (6), primena nosilaca troškova tarifa
  - *Zalihe* (7), knjiženja zaliha u kontrolingu
  - *Materijali proizvodnje* (8), troškovi materijala u proizvodnji
  - *Spoljne usluge* (9), troškovi eksternih radova
  - *Proizvodne transformacije* (10), interni proizvodni procesi
  - *Konsolidacija kontrolinga* (15), procedura konsolidacije master kontrolinga u *multicompany* okruženju

:::tip NAPOMENA
Postoje još četiri kategorije izvora podataka koje su vidljive u istoriji konačnog obračuna projekta:

- *Vreme mašine* (11)
- *Vreme čoveka* (12)
- *Priprema mašine* (13)
- *Priprema čoveka* (14)
:::

- ***Broj***, ***Godina***, ***Red***, ***WBS***: referentni podaci za projekte (nisu vrednovani).

Brisanje, izmena i unos podataka u tabelu nisu dozvoljeni.