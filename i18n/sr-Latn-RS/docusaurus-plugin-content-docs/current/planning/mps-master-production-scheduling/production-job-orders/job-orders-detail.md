---
title: Radni nalozi proizvodnje (detalji)
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

U zavisnosti od statusa naloga (npr. planiran, izvršni i sl.), red naloga biće prikazan različitom bojom. Boje koje se mogu povezati sa statusom naloga definišu se u [MS parametrima](/docs/configurations/parameters/production/mps-parameters), u odeljku *Boje projekata*.

Iz ovog obrasca moguće je *kreirati nove naloge*, kako **monoproizvodne**, tako i **multiproizvodne**, klikom na odgovarajuću dugmad na *Ribbon traci*: [Unesi podnalog](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) i [Unesi radni nalog za više proizvoda](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Dvostrukim klikom na jedan od projekata prikazanih u tabeli rezultata otvara se detaljni prikaz naloga, čiji su podaci detaljno opisani u člancima **Unos novog monoproizvodnog naloga** i **Unos novog multiproizvodnog naloga**.

Kolona *Obračunata* označava, ako je oznaka aktivna, da nalog već sadrži najmanje jedan obračun troškova.

:::note Napomena
Razlika između obrazaca **Radni nalozi proizvodnje** i **Radni nalozi proizvodnje (detalji)** je u tome što je u ovom drugom moguće u tabeli prikazati i artikle koji se nalaze unutar naloga, dok se u obrascu bez detalja prikazuju samo podaci zaglavlja proizvodnih projekata.
:::

*Posebna dugmad*:

> **Izmeni datum naloga**: omogućava promenu *datuma spremne robe* i *predviđenog datuma završetka* za odabrane naloge jednostavnim unosom novog datuma u iskačućem prozoru i potvrdom;          
> **Dupliraj nalog**: omogućava dupliranje odabranog naloga;  
> **Promena prioriteta**: omogućava promenu prioriteta dodeljenog nalogu;  
> [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): putem ovog dugmeta moguće je otvoriti ekran sa MRP parametrima artikla;    
> [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućava otvaranje ekrana sastavnice artikla;  
> [Tehnološki postupci](/docs/erp-home/registers/production/routes/new-route): omogućava pregled tehnološkog postupka i pripadajućih proizvodnih faza artikla.