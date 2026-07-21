---
title: Radni nalog monoproizvoda
sidebar_position: 4
---

Obrazac se otvara putem menija **Planiranje > Radni nalozi proizvodnje**, klikom na dugme **Unesi podnalog** unutar obrasca **Radni nalozi proizvodnje**.

## Posebna dugmad

> [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): putem ovog dugmeta moguće je otvoriti ekran sa MRP parametrima artikla;      
> [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućava otvaranje ekrana sastavnice artikla;  
> [Proizvodni ciklusi](/docs/erp-home/registers/production/routes/new-route): omogućava prikaz radnog ciklusa i pripadajućih proizvodnih faza artikla.

## Upravljanje monoproizvodnim nalozima

Na ovoj kartici unose se glavni podaci koje proizvodni nalog mora sadržati.

**Tip dokumenta**: predlaže se podrazumevana vrsta dokumenta sa standardnim kodom *CP* (koji označava proizvodni nalog) definisana u tabeli [Vrste dokumenata](/docs/configurations/tables/production/documents-types/);    

**Broj**: označava redni broj naloga koji se automatski predlaže;     

**Godina**: automatski se predlaže tekuća godina;   

**Kupac**: prikazuje podatke o kontu/podkontu i opis kupca;    

**Datum**: automatski se predlaže tekući datum;        

**Obavezna**: ako je aktivno, nalog postaje obavezan te će svi planski nalozi generisani iz njega takođe biti označeni kao obavezni i uzimaće se u obzir u postupku [Planiranja sa konačnim kapacitetom](/docs/planning/ms-master-scheduling/finite-capacityscheduling);    

**Status podnaloga**: sistem automatski predlaže status *Neobrađen*, koji nalog dobija odmah nakon kreiranja;   

Ostali mogući statusi su:

- **Planiran**: nalog prelazi u ovaj status nakon sprovođenja procesa Opšteg planiranja;  
- **Lansiran**: nalog prelazi u ovaj status nakon što je najmanje jedan planski proizvodni nalog generisan iz njega tokom [Opšteg planiranja](/docs/planning/ms-master-scheduling/general-schedule) pušten u rad (ako su pušteni i planski nalozi nabavke ili kooperacije, nalog prelazi u status izvršnog);      
- **Izvršni**: nalog prelazi u ovaj status nakon što je najmanje jedan proizvodni nalog generisan iz njega pušten u rad i postao izvršni ili nakon što je pušten najmanje jedan planski nalog nabavke ili kooperacije generisan iz njega;   
- **Izvršeno**: nalog prelazi u ovaj status nakon što nalog prvog nivoa generisan za artikl na koji se nalog odnosi pređe u status *Izvršen*;   
- **Istorijski**: nalog se može ručno postaviti u ovaj status kako se više ne bi prikazivao prilikom pretrage *izvršenih* naloga;  
- **Otkazano**: nalog se može ručno postaviti u ovaj status umesto brisanja, kako bi se označilo da planirani nalog na kraju nije realizovan u proizvodnji.

**Opis**: omogućava unos opisa vezanog za nalog;        

**Vrsta nabavke**: po pravilu odgovara vrsti nabavke artikla unetog u proizvodni nalog. Vrsta nabavke artikla definiše se u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) tog artikla;     

**Prioritet nabavke**: označava prioritet nabavke;           
       
**Projekti**: označava projekat kojem pripada nalog;       

**Mesto proizvodnje**: označava proizvodnu lokaciju na kojoj će se nalog proizvoditi. Na ovom polju postoji kontrola koja, ako je nalog nastao iz narudžbine kupca, proverava da li skladište navedeno na redu narudžbine kupca pripada istoj proizvodnoj lokaciji koja je definisana na proizvodnom nalogu.  

**Datum spremne robe**: u ovom polju prikazuje se datum spremne robe definisan na redu narudžbine kupca za koji se prikazuje detalj;      

**Predloženi datum**: polje u kojem se prikazuje datum koji sistem predlaže ako je korisnik planirao nalog koristeći parametar *Proveri zakašnjele dokumente pomoću ATP-a* i ako je u parametrima *Opšteg planiranja* postavljen *Datum početka MS-a* (Master Scheduling). Predloženi datum je datum koji korisnik može prihvatiti kao planirani datum završetka naloga;

**Predviđeni datum početka/završetka proizvodnje**: u ovim poljima prikazuju se planirani datumi početka i završetka proizvodnog naloga. Dok je proizvodni nalog u statusu *Neobrađen*, ti datumi su jednaki i odgovaraju datumu spremne robe sa reda narudžbine kupca iz kojeg je nalog generisan ili datumu završetka prognoze prodaje iz koje je nalog nastao. Nakon planiranja proizvodnog naloga, planirani datum početka naloga odgovara planiranom datumu početka prvog planskog naloga generisanog planiranjem. Kod ručnog unosa proizvodnog naloga korisnik mora ručno uneti ovaj podatak, u suprotnom čuvanje naloga neće biti moguće;

**Stvarni (efektivni) datum početka/završetka proizvodnje**: u ovim poljima prikazuju se stvarni datumi početka i završetka proizvodnje, odnosno datum prve prijave proizvodnje za proizvodni nalog generisan iz naloga i datum poslednje prijave proizvodnje koja je uzrokovala konačno zatvaranje proizvodnog naloga čiji je artikl isti kao i artikl proizvodnog naloga. Datum stvarnog završetka prikazuje se samo ako je nalog u statusu *Izvršen*;

*Obavezna polja za generisanje proizvodnog naloga*: **Artikl** (sa pripadajućom klasom, šifrom i opisom), **Varijanta**, **Količina** naloga i pripadajuća **Jedinica mere**.  

Na kraju, postoji niz polja koja se automatski preuzimaju iz [MRP parametara](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) odabranog artikla, kao što su: **Radni ciklus**, **Ekonomska serija** sa pripadajućim **Višekratnicima**, **Pripremno vreme**, **Procenat otpada** na količini i **Vrsta nabavke**.

Polja **Početak/Kraj prognoze** označavaju početak i kraj perioda prognoze prodaje koji je generisao taj nalog.

Važno je imati na umu da se status zaglavlja multiproizvodnog naloga automatski određuje prema statusima pojedinačnih redova. Status zaglavlja odgovaraće najnaprednijem statusu među pojedinačnim redovima između: *neobrađen*, *planiran*, *lansiran* i *izvršni*.

Zaglavlje će preći u status *izvršen* tek kada svi redovi budu izvršeni; isto pravilo važi i za statuse *istorijski* i *otkazan*.

### Referenca narudžbine kupca

Ova tabela služi samo za pregled i u njoj se prikazuju narudžbine kupaca povezane sa odgovarajućim proizvodnim nalogom kada je nalog generisan iz jednog ili više redova narudžbina kupaca.

**Tip/Godina/Broj**: u ovim kolonama prikazuju se *Vrsta/Godina/Broj* narudžbine kupca koja sadrži red čiji se detalji prikazuju;

**Red/Količina/Jedinica mere**: u ovoj koloni prikazuje se količina sa reda narudžbine kupca čiji se detalji prikazuju;

**Datum kada je roba spremna**: u ovoj koloni prikazuje se datum spremne robe definisan na redu narudžbine kupca čiji se detalji prikazuju;

**Konto**: u ovoj koloni prikazuju se konto i podkonto kupca na kojeg glasi narudžbina kupca koja sadrži red čiji se detalji prikazuju.

### Dodatni podaci

Ova kartica takođe sadrži tabelu u kojoj će biti prikazani svi dodatni podaci povezani sa artiklom koji se nalazi na proizvodnom nalogu.

## Obračun troškova

Sve informacije vezane za **Obračun troškova** dostupne su na stranici [Obračun troškova](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Dodatni podaci

Ova kartica, koja se nalazi pored kartice *Upravljanje monoproizvodnim nalozima*, sadrži sve [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) povezane sa proizvodnim nalogom.

Za detalje o zajedničkom načinu rada obrazaca pogledajte poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).