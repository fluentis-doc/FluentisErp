---
title: Povijest zapisa
sidebar_position: 3
---

Ova forma je u osnovi ista kao ***Povijest zapisa upravljanja***, prikazuje rezultate ***Razdoblja obrade*** ali
filtrira isključivo one redove koji su izravno povezani s projektom/nalogom. To znači da su prikazani troškovi i prihodi koji su izravno dodijeljeni analiziranoj dimenziji projekta/naloga.

Polja su ista kao u općoj formi za direkcijsku dimenziju, uključujući:

- ***Podkonto***
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Centar prijenosa***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), prikazuje se samo za stavke povezane s nositeljima troškova
- ***Godina***
- ***Razdoblje***
- ***Duguje***
- ***Potražuje***
- ***Fiksna vrijednost***, (zbrojena s varijabilnom vrijednošću daje prethodnu vrijednost duguje ili potražuje)
- ***Varijabilna vrijednost***, t (zbrojena s fiksnom vrijednošću daje prethodnu vrijednost duguje ili potražuje)
- ***Odjel***
- ***Valuta***, (uvijek jednaka valuti poduzeća)
- ***Distribucija*** perioda povezana s redom
- ***Vrsta retka***, može biti:
    - *0*  Izvorni redovi (nastali iz zatvaranja ili ručnih unosa zatvaranja, ali i iz redova nositelja troškova raspodjele)
    - *1* Preneseni redovi (za nositelje troškova raspodjele, to su redovi koji storniraju vrijednost iz *poslovnog centra*)
    - *2* Primljeni redovi (za nositelje troškova raspodjele, to su redovi koji prenose vrijednost iz centra nositelja
u *centar troška*)
:::tip NAPOMENA
Redovi raspodjele su u osnovi redovi *raspodjele nositelja troškova*, koji iz prijelaznih konta preraspodjeljuju vrijednosti na stvarne *centre troška*. Nositelji troškova *raspodjele* uključuju sve ostale metode prijenosa vrijednosti.
:::
- ***Vrsta distribucije*** primijenjenog nositelja troškova
- [***Nositelj troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) koji je primijenjen
- ***Izvor***, podataka može biti:
    - *Računovodstveni podaci* (1), izravno iz *privremenog zatvaranja*
    - *Ručno uneseni podaci* (2), *izvanbilančna knjiženja* područja
    - *Formula* (3), knjiženja stvorena pomoću *računalnih formula*
    - *Amortizacija* (4), knjiženja stvorena putem obračuna amortizacije kontrolinga
    - *Korigiranja* (5), zapisi iz privremenih ili godišnjih korekcija
    - *Nositelji troškova tarifa* (6), primjena nositelja troškova tarifa 
    - *Zalihe* (7), zapisi zaliha u kontrolingu
    - *Materijali proizvodnje* (8), troškovi materijala u proizvodnji
    - *Vanjske usluge* (9), troškovi vanjskih radova
    - *Proizvodne transformacije* (10), interni proizvodni procesi
    - *Konsolidacija kontrolinga* (15), postupak konsolidacije master kontrolinga u multicompany postavkama


:::tip NAPOMENA
Postoje dodatne četiri kategorije izvora podataka, vidljive u povijesti konačnog proračuna projekta
    - *Vrijeme stroja* (11)
    - *Vrijeme čovjeka* (12)
    - *Priprema stroja* (13)
    - *Priprema čovjeka* (14)
:::

- ***Broj***, ***Godina***, ***Redak***, ***Wbs***: referentni podaci za projekte (nisu valorizirani).

Nije dopušteno brisanje, izmjena ili unos novih podataka u prikazanoj tablici.