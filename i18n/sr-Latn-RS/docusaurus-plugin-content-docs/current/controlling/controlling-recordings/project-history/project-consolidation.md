---
title: Konsolidacija naloga/projekta
sidebar_position: 5
---

Prilikom svake obrade ***konsolidovanog projekta*** kroz proceduru ***Obrada perioda***, ovde će biti prikazana odgovarajuća knjiženja koja sadrže detalje svih troškova i prihoda dodeljenih projektima, bilo direktno ili indirektno putem preraspodele nosilaca troškova primenjenih na podatke upravljačke dimenzije.

Prikazana polja:

- ***Podkonto***
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): u ovom slučaju centar projekta/naloga, odnosno centar koji ima uključenu opciju *Podrazumevano za dimenziju projekata* ili centar dodeljen projektu putem ***tabele povezivanja centara sa projektima/nalozima***
- [***Centar prenosa***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), prikazuje se samo za stavke povezane sa nosiocima troškova
- ***Godina***
- ***Period***
- ***Duguje***
- ***Potražuje***
- ***Fiksna vrednost*** (zbir fiksne i varijabilne vrednosti daje ukupnu vrednost duguje ili potražuje)
- ***Varijabilna vrednost*** (zbir sa fiksnom vrednošću daje ukupnu vrednost duguje ili potražuje)
- ***Odeljenje***
- ***Valuta*** (uvek jednaka valuti preduzeća)
- ***Vrsta reda***, koja može biti:
  - *0* – Izvorni redovi (nastali iz zatvaranja ili ručnih unosa zatvaranja, kao i iz redova nosilaca troškova raspodele)
  - *2* – Primljeni redovi (za nosioce troškova raspodele, redovi koji prenose vrednost iz centra nosioca troškova u centar troška)

:::tip NAPOMENA
Redovi *raspodele* predstavljaju redove nosilaca troškova koji sa prelaznih konta preraspodeljuju vrednosti na stvarne *centre troškova*. Nosioci troškova raspodele obuhvataju sve ostale metode prenosa vrednosti.
:::

- ***Vrsta distribucije*** primenjenog nosioca troškova
- [***Nosilac troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) koji je primenjen
- ***Izvor*** podataka, koji može biti:
  - *Računovodstveni podaci* (1), direktno iz *privremenog zatvaranja*
  - *Ručno uneti podaci* (2), iz *vanbilansnih knjiženja* područja
  - *Formula* (3), knjiženja kreirana pomoću *formula*
  - *Amortizacija* (4), knjiženja nastala obračunom amortizacije u kontrolingu
  - *Korekcije* (5), zapisi iz privremenih ili godišnjih korekcija
  - *Nosioci troškova tarifa* (6), primena tarifnih nosilaca troškova
  - *Zalihe* (7), zapisi zaliha u kontrolingu
  - *Materijali proizvodnje* (8), troškovi materijala u proizvodnji
  - *Spoljne usluge* (9), troškovi eksternih radova
  - *Proizvodne transformacije* (10), interni proizvodni procesi
  - *Vreme mašine* (11)
  - *Vreme radnika* (12)
  - *Priprema mašine* (13)
  - *Priprema radnika* (14)
  - *Konsolidacija kontrolinga* (15), procedura konsolidacije master kontrolinga u *multicompany* okruženju

- ***Vrsta troška*** (za redove nastale iz materijala)

- ***Broj***, ***godina***, ***linija***, ***WBS broj***: reference na projekte (mogu ostati nepopunjene)

- [***Jedinica mere***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), ***artikal***, ***opis artikla***, ***faza***, ***podfaza***, ***broj***, ***opis*** i ***količina*** proizvedenog ili obrađenog artikla

Nije dozvoljeno brisanje, izmena niti unos novih podataka u prikazanu tabelu.