---
title: Radni nalog monoproizvoda
sidebar_position: 4
---

Obrazac se otvara putem izbornika **Planiranje > Radni nalozi proizvodnje**, klikom na gumb **Umetni podnalog** unutar obrasca **Radni nalozi proizvodnje**.

## Specifični gumbi

> [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): putem ovog gumba moguće je otvoriti ekran s MRP parametrima artikla;      
> [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućuje otvaranje ekrana sastavnice artikla;  
> [Proizvodni ciklusi](/docs/erp-home/registers/production/routes/new-route): omogućuje prikaz radnog ciklusa i pripadajućih proizvodnih faza artikla.

## Upravljanje monoproizvodnim nalozima

Na ovoj kartici unose se glavni podaci koje proizvodni nalog mora sadržavati.

**Tip dokumenta**: predlaže se zadana vrsta dokumenta sa standardnim kodom *CP* (koji označava proizvodni nalog) definiranim u tablici [Vrste dokumenata](/docs/configurations/tables/production/documents-types/);    

**Broj**: označava redni broj naloga koji se automatski predlaže;     

**Godina**: automatski se predlaže tekuća godina;   

**Kupac**: prikazuje podatke o kontu/podkontu i opis kupca;    

**Datum**: automatski se predlaže tekući datum;        

**Obvezna**: ako je aktivno, nalog postaje obvezan (*obavezan*) te će svi planski nalozi generirani iz njega također biti označeni kao obvezni i uzimat će se u obzir u postupku [Planiranja s konačnim kapacitetom](/docs/planning/ms-master-scheduling/finite-capacityscheduling);    

**Status podnaloga**: sustav automatski predlaže status *Neobrađen*, koji nalog dobiva odmah nakon kreiranja;   

Ostali mogući statusi su:

- **Planiran**: nalog prelazi u ovaj status nakon provedbe procesa Općeg planiranja;  
- **Lansiran**: nalog prelazi u ovaj status nakon što je barem jedan planski proizvodni nalog generiran iz njega tijekom [Općeg planiranja](/docs/planning/ms-master-scheduling/general-schedule) pušten u rad (ako su pušteni i planski nalozi nabave ili kooperacije, nalog prelazi u status izvršnog);      
- **Izvršno**: nalog prelazi u ovaj status nakon što je barem jedan proizvodni nalog generiran iz njega pušten u rad i postao izvršni ili nakon što je pušten barem jedan planski nalog nabave ili kooperacije generiran iz njega;   
- **Izvršeno**: nalog prelazi u ovaj status nakon što nalog prve razine generiran za artikl na koji se nalog odnosi prijeđe u status *Izvršen*;   
- **Povijesni**: nalog se može ručno postaviti u ovaj status kako se više ne bi prikazivao prilikom pretrage *izvršenih* naloga;  
- **Otkazano**: nalog se može ručno postaviti u ovaj status umjesto brisanja, kako bi se označilo da planirani nalog na kraju nije realiziran u proizvodnji.

**Opis**: omogućuje unos opisa vezanog uz nalog;        

**Vrsta nabave**: u pravilu odgovara vrsti nabave artikla unesenog u proizvodni nalog. Vrsta nabave artikla definira se u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) tog artikla;     

**Prioritet nabave**: označava prioritet nabave;           
       
**Projekti**: označava projekt kojem pripada nalog;       

**Mjesto proizvodnje**: označava proizvodnu lokaciju na kojoj će se nalog proizvoditi. Na ovom polju postoji kontrola koja, ako je nalog nastao iz narudžbe kupca, provjerava pripada li skladište navedeno na retku narudžbe kupca istoj proizvodnoj lokaciji koja je definirana na proizvodnom nalogu.  

**Datum spremne robe**: u ovom se polju prikazuje datum spremnosti robe definiran na retku narudžbe kupca za koji se prikazuje detalj;      

**Predloženi datum**: polje u kojem se prikazuje datum koji sustav predlaže ako je korisnik planirao nalog koristeći parametar *Provjeri zakašnjele dokumente pomoću ATP-a* te ako je u parametrima *Općeg planiranja* postavljen *Datum početka MS-a* (Master Scheduling). Predloženi datum je datum koji korisnik može prihvatiti kao planirani datum završetka naloga;

**Predviđeni datum početka/završetka proizvodnje**: u ovim se poljima prikazuju planirani datumi početka i završetka proizvodnog naloga. Dok je proizvodni nalog u statusu *Neobrađen*, ti su datumi jednaki i odgovaraju datumu spremnosti robe s retka narudžbe kupca iz kojeg je nalog generiran ili datumu završetka prognoze prodaje iz koje je nalog nastao. Nakon planiranja proizvodnog naloga, planirani datum početka naloga odgovara planiranom datumu početka prvog planskog naloga generiranog planiranjem. Kod ručnog unosa proizvodnog naloga korisnik mora ručno unijeti ovaj podatak, u suprotnom spremanje naloga neće biti moguće;

**Stvarni (efektivni) datum početka/završetka proizvodnje**: u ovim se poljima prikazuju stvarni datumi početka i završetka proizvodnje, odnosno datum prve prijave proizvodnje za proizvodni nalog generiran iz naloga te datum posljednje prijave proizvodnje koja je uzrokovala konačno zatvaranje proizvodnog naloga čiji je artikl isti kao i artikl proizvodnog naloga. Datum stvarnog završetka prikazuje se samo ako je nalog u statusu *Izvršen*;

*Obvezna polja za generiranje proizvodnog naloga*: **Artikl** (s pripadajućom klasom, šifrom i opisom), **Varijanta**, **Količina** naloga i pripadajuća **Mjerna jedinica**.  

Na kraju, postoji niz polja koja se automatski preuzimaju iz [MRP parametara](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) odabranog artikla, kao što su: **Radni ciklus**, **Ekonomski lot** s pripadajućim **Višekratnicima**, **Pripremno vrijeme**, **Postotak otpada** na količini te **Vrsta nabave**.

Polja **Početak/Kraj prognoze** označavaju početak i kraj razdoblja prognoze prodaje koje je generiralo taj nalog.

Važno je imati na umu da se status zaglavlja multiproizvodnog naloga automatski određuje prema statusima pojedinih redaka. Status zaglavlja odgovarat će najnaprednijem statusu među pojedinačnim recima između: *neispitan*, *planiran*, *pokrenut* i *izvršni*.

Zaglavlje će prijeći u status *izvršen* tek kada svi retci budu izvršeni; isto pravilo vrijedi i za statuse *povijesni* i *otkazan*.

### Referenca narudžbe kupca

Ova tablica služi samo za pregled u kojoj se prikazuju narudžbe kupaca povezane s odgovarajućim proizvodnim nalogom kada je nalog generiran iz jednog ili više redaka narudžbi kupaca.

**Tip/Godina/Broj**: u ovim se stupcima prikazuju *Vrsta/Godina/Broj* narudžbe kupca koja sadrži redak čiji se detalji prikazuju;

**Red/Količina/Mjerna jedinica**: u ovom se stupcu prikazuje količina s retka narudžbe kupca čiji se detalji prikazuju;

**Datum kad je roba spremna**: u ovom se stupcu prikazuje datum spremnosti robe definiran na retku narudžbe kupca čiji se detalji prikazuju;

**Konto**: u ovom se stupcu prikazuju konto i podkonto kupca na kojeg glasi narudžba kupca koja sadrži redak čiji se detalji prikazuju.

### Dodatni podaci

Ova kartica također sadrži tablicu u kojoj će biti prikazani svi dodatni podaci povezani s artiklom koji se nalazi na proizvodnom nalogu.

## Obračun troškova

Sve informacije vezane uz **Troškovni obračun** dostupne su na stranici [Troškovni obračun](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Dodatni podaci

Ova kartica, koja se nalazi uz karticu *Upravljanje monoproizvodnim nalozima*, sadrži sve [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) povezane s proizvodnim nalogom.

Za detalje o zajedničkom načinu rada obrazaca pogledajte poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).