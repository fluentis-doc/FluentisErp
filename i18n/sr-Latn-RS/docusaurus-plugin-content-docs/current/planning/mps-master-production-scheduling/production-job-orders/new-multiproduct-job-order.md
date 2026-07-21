---
title: Radni nalog multiproizvoda
sidebar_position: 5
---

Obrazac se otvara putem menija **Planiranje > Radni nalozi proizvodnje**, klikom na dugme **Unesi radni nalog za više proizvoda** unutar obrasca **Radni nalozi proizvodnje**.

## Posebna dugmad

> [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): putem ovog dugmeta moguće je otvoriti ekran sa MRP parametrima artikla;  
> [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućava otvaranje ekrana sastavnice artikla;  
> [Radni ciklusi](/docs/erp-home/registers/production/routes/new-route): omogućava prikaz radnog ciklusa i pripadajućih proizvodnih faza artikla.

## Upravljanje multiproizvodnim nalozima

Ova kartica izgleda isto kao kartica u obrascu za [unos monoproizvodnog naloga](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

*Osnovna razlika* je u tome što ne postoji sekcija za unos artikla i njegovih podataka, kao kod kreiranja monoproizvodnog naloga, već je taj prostor zamenjen tabelom koja omogućava unos više artikala, pošto se radi o multiproizvodnom nalogu.

Polja prisutna u tabeli ista su kao i kod [monoproizvodnog naloga](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); jedina razlika je polje **Redni broj**, koje korisnik može uređivati. U njemu se predlaže redni broj reda *multiproizvodnog proizvodnog naloga*, dok se planirani datumi početka i završetka, predloženi datum, kao i datumi početka i završetka prognoze definišu za svaki artikl pojedinačno unutar multiproizvodnog naloga (i dalje ostaje sekcija *Planirani datumi* i *Stvarni datumi* koja se odnosi na ukupan status multiproizvodnog naloga).

### Reference na narudžbine kupaca

Ova tabela služi samo za pregled i u njoj se prikazuju narudžbine kupaca povezane sa odgovarajućim proizvodnim nalogom kada je nalog generisan iz jednog ili više redova narudžbina kupaca.

**Vrsta/Godina/Broj**: u ovim kolonama prikazuju se *Vrsta/Godina/Broj* narudžbine kupca koja sadrži red čiji se detalji prikazuju;

**Red/Količina/JM**: u ovoj koloni prikazuje se količina sa reda narudžbine kupca čiji se detalji prikazuju;

**Datum spremne robe**: u ovoj koloni prikazuje se datum spremne robe definisan na redu narudžbine kupca čiji se detalji prikazuju;

**Konto**: u ovoj koloni prikazuju se konto i podkonto kupca na kojeg glasi narudžbina kupca koja sadrži red čiji se detalji prikazuju.

### Dodatni podaci

Ova kartica takođe sadrži tabelu u kojoj će biti prikazani svi dodatni podaci povezani sa artiklom koji se nalazi na proizvodnom nalogu.

## Obračun troškova

Sve informacije vezane za **Obračun troškova** dostupne su na stranici [Obračun troškova](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Dodatni podaci

Ova kartica, koja se nalazi pored kartice *Upravljanje multiproizvodnim nalozima*, sadrži sve [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) povezane sa proizvodnim nalogom.

Za detalje o zajedničkom načinu rada obrazaca pogledajte poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).