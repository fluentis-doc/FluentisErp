---
title: Radni nalozi proizvodnje (detalji)
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

Ovisno o statusu naloga (npr. planiran, izvršni i sl.), redak naloga bit će prikazan različitom bojom. Boje koje se mogu povezati sa statusom naloga definiraju se u [MS parametrima](/docs/configurations/parameters/production/mps-parameters), u odjeljku *Boje projekata*.

Iz ovog obrasca moguće je *kreirati nove naloge*, kako **monoproizvodne**, tako i **multiproizvodne**, klikom na odgovarajuće gumbe na *Ribbon traci*: [Umetni podnalog](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) i [Unesi radni nalog za više proizvoda](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Dvostrukim klikom na jedan od projekata prikazanih u tablici rezultata otvara se detaljni prikaz naloga, čiji su podaci detaljno opisani u člancima **Unos novog monoproizvodnog naloga** i **Unos novog multiproizvodnog naloga**.

Stupac *Obračunata* označava, ako je oznaka aktivna, da nalog već sadrži barem jedan obračun troškova.

:::note **Napomena**
Razlika između obrazaca **Radni nalozi proizvodnje** i **Radni nalozi proizvodnje (detalji)** je u tome što je u ovom drugom moguće u tablici prikazati i artikle koji se nalaze unutar naloga, dok se u obrascu bez detalja prikazuju samo podaci zaglavlja proizvodnih projekata.
:::

*Posebni gumbi*:

> **Izmijeni datum naloga**: omogućuje promjenu *datuma spremne robe* i *predviđenog datuma završetka* za odabrane naloge jednostavnim unosom novog datuma u skočnom prozoru i potvrdom;          
> **Dupliciraj nalog**: omogućuje dupliciranje odabranog naloga;  
> **Promijena prioriteta**: omogućuje promjenu prioriteta dodijeljenog nalogu;  
> [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): putem ovog gumba moguće je otvoriti zaslon s MRP parametrima artikla;    
> [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućuje otvaranje zaslona sastavnice artikla;  
> [Tehnološki postupci](/docs/erp-home/registers/production/routes/new-route): omogućuje pregled tehnološkog postupka i pripadajućih proizvodnih faza artikla.