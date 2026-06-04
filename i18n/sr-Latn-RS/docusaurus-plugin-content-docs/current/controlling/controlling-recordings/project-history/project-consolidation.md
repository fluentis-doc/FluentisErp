---
title: Konsolidacija naloga za posao
sidebar_position: 5
---

Prilikom svake obrade ***konsolidiranog projekta*** putem ***Obrade perioda***, ovdje će se prikazati odgovarajući zapisi koji sadrže detalje svih troškova i prihoda dodijeljenih projektima, bilo da su izravni ili neizravni putem preraspodjele nositelja troškova primijenjenih na podatke direkcijske dimenzije.

Prikazana polja:

- ***Podkonto***
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): u ovom slučaju centar projekta/naloga, tj. centar koji ima flag *Zadano za dimenziju projekata* ili centar dodijeljen projektu putem ***tablice pridruživanja centara projektima/nalozima***
- [***Centar prijenosa***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), (prikazuje se samo za stavke povezane s nositeljima troškova)
- ***Godina***
- ***Razdoblje***
- ***Duguje***
- ***Potražuje***
- ***Fiksna vrijednost***, (zbrojena s varijabilnom vrijednošću daje prethodnu vrijednost duguje ili potražuje)
- ***Varijabilna vrijednost***, (zbrojena s fiksnom vrijednošću daje prethodnu vrijednost duguje ili potražuje)
- ***Odjel***
- ***Valuta***, (uvijek jednaka valuti poduzeća)
- ***Vrsta retka***, može biti:
    - *0* Izvorni redovi (nastali iz zatvaranja ili ručnih unosa zatvaranja, ali i iz redova nositelja troškova raspodjele)
    - *2* Primljeni redovi (za nositelje troškova raspodjele, to su redovi kojiprenose vrijednost iz centra nositelja u centar troška)

:::tip NAPOMENA
Redovi *raspodjele* su u osnovi redovi raspodjele *nositelja troškova*, koji iz prijelaznih konta preraspodjeljuju vrijednosti na stvarne *centre troška*. Nositelji troškova *raspodjele* uključuju sve ostale metode prijenosa vrijednosti.

:::
- ***Vrsta distribucije*** primijenjenog nositelja troškova
- [***Nositelj troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) koji je primijenjen
- ***Izvor***, podataka može biti:
    - *Računovodstveni podaci* (1), izravno iz *privremenog zatvaranja*
    - *Ručno uneseni podaci* (2),  *izvanbilančna knjiženja* područja
    - *Formula* (3), knjiženja stvorena pomoću *računalnih formula*
    - *Amortizacija* (4), knjiženja stvorena putem obračuna amortizacije kontrolinga
    - *Korigiranja* (5), zapisi iz privremenih ili godišnjih korekcija
    - *Nositelji troškova tarifa* (6), primjena nositelja troškova tarifa 
    - *Zalihe* (7), zapisi zaliha u kontrolingu
    - *Materijali proizvodnje* (8), troškovi materijala u proizvodnji
    - *Vanjske usluge* (9), troškovi vanjskih radova
    - *Proizvodne transformacije* (10), – interni proizvodni procesi
    - *Vrijeme stroja* (11)
    - *Vrijeme čovjeka* (12)
    - *Priprema stroja* (13)
    - *Priprema čovjeka* (14)
    - *Konsolidacija kontrolinga* (15), postupak konsolidacije master kontrolinga u *multicompany* postavkama

:::

- ***Vrsta troška*** *(za retke podrijetlom iz materijala)*

- ***Broj***, ***godina***, ***linija***, ***Wbs broj***: reference na projekte (nepopunjeno)

- [***Jedinica mjere***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), ***artikl***, ***opis artikla***, ***faza***, ***podfaza***, ***broj***, ***opis*** i ***količina***  proizvedenog ili obrađenog artikla

Nije dopušteno brisanje, izmjena ili unos novih podataka u prikazanoj tablici.