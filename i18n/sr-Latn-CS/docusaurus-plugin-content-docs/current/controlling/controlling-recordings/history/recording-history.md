---
title: Povijest zapisa upravljanja
sidebar_position: 3
---

Ovdje se prikazuje popis zapisa koji su kreirani putem postupka ***Obrade perioda*** kontrolinga. Radi se o bazi podataka koju nije moguće mijenjati, a sadrži detalje svake pojedinačne valorizirane stavke, počevši od mjesečnih računovodstvenih vrijednosti do pojedinačnih raspodjela nositelja troškova (izuzimajući one iz konačnih proračuna projekta, koji imaju zaseban postupak obrade i prikaz podataka).

:::tip Napomena
Budući da postupak ***Obrada perioda*** kontrolinga briše i ponovno kreira vrijednosti za cijelu godinu, svaka godina i obrađeno područje imat će samo jedan zapis.
:::

Svaki zapis može se otvoriti u prikazu kako bi se analizirali koraci obrade i detalji obrađenih podataka, uz potpunu vidljivost svih izvornih karakteristika podataka, raspodjele razdoblja, primijenjenog nositelja troškova i ciklusa obrade. Na temelju ovih podataka moguće je identificirati uzroke mogućih nesukladnosti uzrokovanih neusklađenim postavkama.

Dostupna polja u tablici:

- ***Konto***
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Centar prijenosa***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) (prikazuje se samo za stavke povezane s nositeljima troškova)
- ***Godina***
- ***Razdoblje***
- ***Duguje***
- ***Potražuje***
- ***Fiksna vrijednost***,(zbrojena s varijabilnom vrijednošću daje prethodnu vrijednost duguje ili potražuje)
- ***Varijabilna vrijednost***, (zbrojena s fiksnom vrijednošću daje prethodnu vrijednost duguje ili potražuje)
- ***Odjel***
- ***Valuta***, (uvijek jednaka valuti poduzeća)
- ***Distribucija*** perioda povezana s redom
- ***Vrsta retka***, može biti:
    - *0* – Izvorni redovi (nastali iz zatvaranja ili ručnih unosa zatvaranja, ali i iz redova nositelja troškova raspodjele)
    - *1* Preneseni redovi (za nositelje troškova raspodjele, to su redovi koji storniraju vrijednost iz *poslovnog centra*)
    - *2* Primljeni redovi (za nositelje troškova raspodjele, to su redovi koji prenose vrijednost iz centra nositelja u *centar troška*)
:::tip NAPOMENA
Redovi *raspodjele* su u osnovi redovi raspodjele *nositelja troškova*, koji iz *prijelaznih konta* preraspodjeljuju vrijednosti na stvarne *centre troška*. Nositelji troškova raspodjele *uključuju* sve ostale metode prijenosa vrijednosti.
:::
- ***Vrsta distribucije*** primijenjenog nositelja troškova
- [***Nositelj troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) primijenjen
- ***Izvor*** podataka može biti:
    - *Računovodstveni podaci* (1), izravno iz *privremenog zatvaranja*
    - *Ručno uneseni podaci* (2), *izvanbilančna knjiženja* područja
    - *Formula* (3), knjiženja stvorena pomoću *računalnih formula*
    - *Amortizacija* (4), – knjiženja stvorena putem obračuna amortizacije kontrolinga
    - *Korigiranja* (5), zapisi iz privremenih ili godišnjih korekcija
    - *Nositelji troškova tarifa* (6),  primjena nositelja troškova tarifa
    - *Zalihe* (7), zapisi zaliha u kontrolingu
    - *Materijali proizvodnje* (8), troškovi materijala u proizvodnji
    - *Vanjske usluge* (9), troškovi vanjskih radova
    - *TProizvodne transformacije* (10), interni proizvodni procesi
    - *Konsolidacija kontrolinga* (15), postupak konsolidacije master kontrolinga u multicompany postavkama

:::tip NAPOMENA
Postoje dodatne četiri kategorije izvora podataka, vidljive u povijesti konačnog proračuna projekta:
    - *Vrijeme stroja* (11)
    - *Vrijeme čovjeka* (12)
    - *Priprema stroja* (13)
    - *Priprema čovjeka* (14)
:::

- ***Broj***, ***Godina***, ***Redak***, ***Wbs***: referentni podaciza projekte (nisu valorizirani).

Nije dopušteno brisanje, izmjena niti unos podataka u tablicu.