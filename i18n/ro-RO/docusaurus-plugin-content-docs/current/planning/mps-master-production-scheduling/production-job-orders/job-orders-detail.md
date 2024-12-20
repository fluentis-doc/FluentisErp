---
title: Comenzi de producție (detalii)
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

În funcție de starea comenzii (deci programată, executivă etc.), linia comenzii va avea o culoare diferită. Culorile care pot fi asociate cu starea comenzii sunt stabilite în [Parametrii MPS](/docs/configurations/parameters/production/mps-parameters), în secțiunea *Culori comenzi*.  

De asemenea, acest form permite *crearea comenzilor noi*, atât **monoprodus**, cât și **multiprodus**, utilizând butoanele relative din *Ribbon Bar*: [Inserare comandă](https://docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) și [Inserare comandă multiprodus](https://docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Cu dublu clic pe una din comenzile prezente în tabelul de rezultate, veți putea accesa detaliile comenzii (detalii în articolele *Inserare nouă comandă monoprodus* și *Inserare nouă comandă multiprodus*).

*Estimare cost*: dacă este activ, comanda are deja cel puțin o estimare cost.

:::note Notă
Diferența dintre form **Comenzi de producție** și formă **Comenzi de producție (detalii)** este că în aceasta din urmă este posibil să vizualizați în grilă și articolele prezente în cadrul comenzii, în timp ce în cea fără detalii sunt vizualizate doar datele de cap de comandă.     
:::

#### Butoane specifice

> - **Duplică comandă**: permite duplicarea comenzii selectate;  
> - **Schimbă prioritate**: permite schimbarea priorității atribuite comenzii;   
> - [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): permite deschiderea form-ului referitor la parametrii MRP ai articolului;    
> [Lista de componente](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite deschiderea form-ului referitor la lista de componente a articolului;  
> [Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route): permite vizualizarea ciclului de lucru și a fazelor de producție corespunzătoare articolului.