---
title: Radni nalog jednoproizvoda
sidebar_position: 4
---

Obrazac se otvara putem putanje  **Planiranje > Proizvodne narudžbe** klikom na gumb  **Umetni narudžbu** unutar obrasca **Proizvodne narudžbe**.  

## Posebni gumbi

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters):omogućuje otvaranje zaslona s parametrima MRP (materijalni zahtjevi za proizvodnju) za artikl;      
> [Sastavnica materijala](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućuje otvaranje zaslona s baznom strukturom proizvoda za artikl;   
> [Proizvodni ciklus](/docs/erp-home/registers/production/routes/new-route): omogućuje prikaz radnog ciklusa i pripadajućih faza proizvodnje za artikl.

## Upravljanje narudžbama jednoproizvoda

Unutar ovog obrasca se navode glavni podaci koje mora sadržavati proizvodna narudžba.

**Tip radnog naloga**: predložen je zadani tip kao zadano;    

**Broj**: označava progresivni broj narudžbe koji se automatski predlaže;     

**Godina**: automatski se predlaže trenutna godina;   

**Klijent**: označava računske podatke/podsračunske podatke i opis klijenta;    

**Datum**: automatski se predlaže trenutni datum;        

**Obvezna**: ako je aktivno, označava je li ova narudžba od temeljne važnosti;    

**Status podnaloga**: Sistem automatski predlaže *Nije ispitano*, stanje koje narudžba dobiva odmah nakon što se stvori;   

Ostali statusi koje može preuzeti su:  

- **Vremenski raspoređeno**: narudžba prelazi u ovaj status nakon što je prošla kroz proces Opće rasporedbe;    
- **Pokrenuto**: narudžba prelazi u ovaj status nakon što je barem jedna od planiranih proizvodnih narudžbi koje su generirane tijekom Opće rasporedbe bila puštena (ne smiju biti pušteni drugi planirani redovi kupnje ili radnog naloga, inače narudžba prelazi u izvršni status);        
- **Izvršno**: narudžba prelazi u ovaj status nakon što je barem jedan od generiranih proizvodnih naloga postao izvršan ili nakon što je barem jedan od planiranih redova kupnje ili radnog naloga postao izvršan;     
- **Izvršeno**: Narudžba prelazi u ovaj status nakon što je proizvodni nalog generiran za artikl koji je predmet narudžbe prešao u status *Izvršeno*;   
- **Povijesni**: narudžba može biti ručno postavljena u ovaj status kako se ne bi prikazivala prilikom pretraživanja *Izvršenih* narudžbi;  
- **Otkazano**: narudžba može biti ručno postavljena u ovaj status umjesto da se potpuno obriše, kako bi označila da narudžba, koja je prvotno bila planirana, ipak nije uvedena u proizvodnju.

**Opis**: omogućuje unos opisa vezanog uz narudžbu;        

**Tip nabave**: obično odgovara vrsti nabave artikla unesenog u proizvodnu narudžbu. Vrsta nabave artikla označena je unutar [MRP parametara](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) istog;     

**Prioritet nabave**: označava prioritet nabave;           
       
**Projekti**: označava projekt u koji je narudžba uključena;       

**Mjesto proizvodnje**: označava lokaciju proizvodnje gdje će se narudžba proizvesti.  Na ovom polju postoji kontrola koja, u slučaju da narudžba proizlazi iz narudžbe kupca, provjerava da li skladište navedeno u retku narudžbe kupca pripada istoj proizvodnoj lokaciji naznačenoj u proizvodnoj narudžbi.  

**Datum kad je roba spremna**: u ovoj stupcu prikazan je datum spremne robe koji je postavljen u retku klijentske narudžbe čiji se detalji prikazuju;      

**Predloženi datum**: polje u kojem se prikazuje datum koji je sustav predložio u slučaju da je korisnik zakazao narudžbu koristeći parametar *Provjeri zakašnjele dokumente s ATP-om*postavljajući, također u parametrima *općeg rasporeda*, *Početni datum MS* (Master Scheduling). Predloženi datum je onaj koji korisnik zatim može odlučiti da postane predviđeni datum završetka narudžbe;

**Datum radova predviđen Početak/Kraj**: u ovim poljima prikazuju se predviđeni datumi početka/završetka *Proizvodne narudžbe*. Dok god proizvodna narudžba ostaje u statusu *Nije pregledana*, ovi datumi su identični i jednaki su datumu spremnosti robe iz retka Narudžbe kupca iz kojeg je narudžba generirana, ili jednaki datumu završetka Prodajnih predviđanja iz kojeg je narudžba generirana. Nakon što je proizvodna narudžba raspoređena, predviđeni datum početka narudžbe podudara se s predviđenim datumom početka prve planirane narudžbe koja je generirana rasporedom narudžbe. Konačno, napominje se da u slučaju ručnog unosa proizvodne narudžbe, korisnik mora ručno unijeti ovaj podatak, inače neće biti moguće spremiti narudžbu;

**Stvarni datum radova Početak/Kraj**: u ovim poljima pojavljuju se datumi početka/završetka stvarne obrade, odnosno, datumi prve proizvodne prijave naloga za proizvodnju generiranog iz naloga za proizvodnju i datumi zadnje proizvodne prijave koja je uzrokovala konačno zatvaranje naloga za proizvodnju čiji je artikl isti kao i nalog za proizvodnju. Naravno, datum stvarnog završetka prisutan je samo u slučaju kada je nalog u statusu *Izvršeno*;

*Obavezna polja za generiranje proizvodne narudžbe*: **Artikl** (s pripadajućom klasom, kodom i opisom), **Verzija**, **Količina** narudžbe i pripadajuća **Jedinica mjere**.  
Na kraju, postoji niz polja koja se preuzimaju iz [MRP Parametara](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)  odabranog artikla, kao što su: **Ciklus**, **Ekonomski lot** s pripadajućim **Višekratnicima**, **Vrijeme isporuke**, **Postotak otpada** na količinu i **Tip nabave**.
Polja **Početak / Kraj prognoze** označavaju početak i kraj razdoblja uzetog u obzir za prognozu prodaje koja je generirala tu narudžbu. 

### Referencije narudžbi kupaca

Tablica sadrži samo za čitanje mrežu u kojoj se prikazuju narudžbe kupaca povezane s referentnom proizvodnom narudžbom kada je narudžba generirana iz jednog ili više redaka narudžbi kupaca.   
**Tip/Godina/Broj**: : u ovim stupcima prikazuju se *Tip/Godina/Broj* narudžbe kupca u kojoj je sadržan redak za koji se prikazuje detalj;  
**Br./Količina/Jedinica mjere**: u ovom stupcu prikazuje se količina reda narudžbe kupca za koji se prikazuje detalj;  
**Datum kad je roba spremna**: u ovom stupcu prikazuje se datum spremnosti robe koji je postavljen u redu narudžbe kupca za koji se prikazuje detalj;  
**Konto**: u ovom stupcu prikazuju se konto i podkonto kupca na čije ime glasi narudžba kupca u kojoj je sadržan redak za koji se prikazuje detalj.  

### Dodatni podaci 

Ova kartica također sadrži mrežu u kojoj će biti prikazani svi dodatni podaci povezani s artiklom koji se nalazi u proizvodnoj narudžbi.

##  Obračun troškova

Sve informacije vezane uz  **Obračun troškova** mogu se pronaći na stranici [Obračun troškova](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Dodatni podaci 

Ova kartica, koja se nalazi uz karticu *Upravljanje radnim nalozima s jednim proizvodom*, sadrži sve [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) povezane s proizvodnom narudžbom.  

Za detalje o zajedničkom radu obrazaca pogledajte poveznicu [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).