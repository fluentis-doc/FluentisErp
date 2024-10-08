---
title: Radni nalog s više proizvoda
sidebar_position: 5
---

Obrazac se otvara putem staze  **Planiranje > Proizvodne narudžbe** klikom na gumb  **Unesi višeproizvodnu narudžbu** u obrascu **Proizvodne narudžbe**.

## Posebni gumbi

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): putem ovog gumba možete otvoriti zaslon s parametrima MRP-a artikla;  
> [Sastavnica materijala](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućuje otvaranje zaslona s materijalnom specifikacijom artikla;  
> [Proizvodni ciklusi](/docs/erp-home/registers/production/routes/new-route): omogućuje pregled radnog ciklusa i pripadajućih faza proizvodnje artikla.  

## Upravljanje radnim nalozima s više proizvoda

Ova kartica izgleda isto kao ona na zaslonu za [Unos narudžbi s jednim proizvodom](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

*Osnovna razlika* je u tome što ne postoji odjeljak u kojem se unosi artikl s njegovim relevantnim podacima kao što je to slučaj kod kreiranja narudžbe s jednim proizvodom, već je taj prostor zamijenjen mrežom koja omogućuje unos ne jednog, već više artikala budući da se radi o narudžbi s više proizvoda.   

Polja prisutna u mreži su ista kao i u narudžbi s [jednim proizvodom](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); jedina razlika je polje **Progresivno** koje je polje koje korisnik može uređivati, u kojem se predlaže progresivni redak *Narudžbe za proizvodnju s više proizvoda* te planirani datumi početka/završetka, predloženi datum i datum početka i završetka plana se specificiraju za svaki artikl prisutan u narudžbi s više proizvoda (ostaje dio Predviđeni datum i Stvarni datum koji se odnosi na ukupno stanje narudžbe s više proizvoda).

### Referencije narudžbi kupaca

Kartica sadrži mrežu samo za čitanje, u kojoj se prikazuju narudžbe kupaca povezane s referentnom proizvodnom narudžbom kada je narudžba generirana iz jednog ili više redaka narudžbi kupaca.   
**Tip/Godina/Broj**: u ovim stupcima prikazuju se *Tip/Godina/Broj* narudžbe kupca u kojoj se nalazi redak čiji su detalji prikazani;  
**Br./Količina/JM**: u ovom stupcu prikazuje se količina retka narudžbe kupca čiji su detalji prikazani;    
**Datum kad je roba spremna**: u ovom stupcu prikazuje se datum spremnosti robe koji je postavljen u retku narudžbe kupca čiji su detalji prikazani; Konto: u ovom stupcu prikazuju se konto i podkonto kupca na kojeg je naslovljena narudžba kupca u kojoj se nalazi redak čiji su detalji prikazani;    
**Konto**: u ovom stupcu prikazuju se konto i podkonto kupca na kojeg je naslovljena narudžba kupca u kojoj se nalazi redak čiji su detalji prikazani.  

### Dodatni podaci

Ova kartica također se sastoji od mreže u kojoj će biti prikazani svi dodatni podaci povezani s artiklom prisutnim u proizvodnoj narudžbi.  

##  Obračun troškova

Sve informacije o **Obračun troškova** možete pronaći na stranici [Obračun troškova](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Dodatni podaci

Ova kartica, koji je uz kartice  *Upravljanje narudžbama više proizvoda*, sadrži sve [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) povezane s proizvodnom narudžbom.   

Za detalje o zajedničkom radu obrazaca molimo pogledajte poveznicu [Zajedničke funkcionalnosti, gumbe i polja](/docs/guide/common).