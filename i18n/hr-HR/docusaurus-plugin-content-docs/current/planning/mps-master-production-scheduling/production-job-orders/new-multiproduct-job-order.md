---
title: Radni nalog mutliproizvoda
sidebar_position: 5
---

Obrazac se otvara putem izbornika **Planiranje > Radni nalozi proizvodnje**, klikom na gumb **Umetni radni nalog za više proizvoda** unutar obrasca **Radni nalozi proizvodnje**.

## Specifični gumbi

> [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): putem ovog gumba moguće je otvoriti ekran s MRP parametrima artikla;  
> [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućuje otvaranje ekrana sastavnice artikla;  
> [Radni ciklusi](/docs/erp-home/registers/production/routes/new-route): omogućuje prikaz radnog ciklusa i pripadajućih proizvodnih faza artikla.

## Upravljanje multiproizvodnim nalozima

Ova kartica izgleda jednako kao kartica u obrascu za [unos monoproizvodnog naloga](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

*Osnovna razlika* je u tome što ne postoji sekcija za unos artikla i njegovih podataka, kao kod kreiranja monoproizvodnog naloga, već je taj prostor zamijenjen tablicom koja omogućuje unos više artikala, budući da se radi o multiproizvodnom nalogu.

Polja prisutna u tablici ista su kao i kod [monoproizvodnog naloga](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); jedina je razlika polje **Redni broj**, koje korisnik može uređivati. U njemu se predlaže redni broj retka *multiproizvodnog proizvodnog naloga*, dok se planirani datumi početka i završetka, predloženi datum te datumi početka i završetka prognoze definiraju za svaki artikl pojedinačno unutar multiproizvodnog naloga (i dalje ostaje sekcija *Planirani datumi* i *Stvarni datumi* koja se odnosi na ukupni status multiproizvodnog naloga).

### Reference na narudžbe kupaca

Ova tablica služi samo za pregled u kojoj se prikazuju narudžbe kupaca povezane s odgovarajućim proizvodnim nalogom kada je nalog generiran iz jednog ili više redaka narudžbi kupaca.

**Vrsta/Godina/Broj**: u ovim se stupcima prikazuju *Vrsta/Godina/Broj* narudžbe kupca koja sadrži redak čiji se detalji prikazuju;

**Red/Količina/MJ**: u ovom se stupcu prikazuje količina s retka narudžbe kupca čiji se detalji prikazuju;

**Datum spremnosti robe**: u ovom se stupcu prikazuje datum spremnosti robe definiran na retku narudžbe kupca čiji se detalji prikazuju;

**Konto**: u ovom se stupcu prikazuju konto i podkonto kupca na kojeg glasi narudžba kupca koja sadrži redak čiji se detalji prikazuju.

### Dodatni podaci

Ova kartica također sadrži tablicu u kojoj će biti prikazani svi dodatni podaci povezani s artiklom koji se nalazi na proizvodnom nalogu.

## Obračun troškova

Sve informacije vezane uz **Troškovni obračun** dostupne su na stranici [Troškovni obračun](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Dodatni podaci

Ova kartica, koja se nalazi uz karticu *Upravljanje multiproizvodnim nalozima*, sadrži sve [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) povezane s proizvodnim nalogom.

Za detalje o zajedničkom načinu rada obrazaca pogledajte poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).