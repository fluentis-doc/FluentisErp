---
title: Izrada plana utovara
sidebar_position: 1
---

**Plan utovara** je dokument koji se stvara između narudžbe klijenta i odabiranja.

## Pretraga narudžbi klijenta

Početna točka za stvaranje plana utovara je pretraga i odabir narudžbi klijenata koje će biti uključene u plan. Iz filter sekcije moguće je izvršiti naprednu pretragu narudžbi koje se žele obraditi među onima koje nisu obrađene ili *djelomično obrađene*.  
Po zadanom, datumi početka i kraja trenutnog tjedna se predlažu kao Od datuma isporuke i Do datuma isporuke, ali se mogu postaviti i drugačije. U  **Parametrima Planova Utovara** moguće je promijeniti predložene datume isporuke za pretragu, odabrati hoće li se prikazati i redovi artikla prisutni u otvorenim planovima utovara, te postaviti različite boje retka, ovisno o tome je li dostupnost potrebna za obradu narudžbe ili ne.

Tipka **Prikaži naloge sa datumom dostave na isključeni datum** omogućuje prikazivanje narudžbi koje imaju blokiran datum (npr. praznik) u kalendaru.
**Prikaz narudžbi s ispravnim datumom dostave** omogućuje prikazivanje narudžbi s važećim datumom.

Moguće je otvoriti narudžbe dvostrukim klikom.
Evo nekoliko podataka koji su prisutni u rezultatima tablice:             
**Vrsta**: sadrži [vrstu](/docs/configurations/tables/sales/sales-order-types) narudžbe klijenta, slijede podaci o narudžbi kao što su **Broj**, **Datum**,**Artikl**, itd.;           
**Bilješke**: mogu se pregledati bilješke redova narudžbe i bilješke plana utovara;         
**Količina**: prikazuje ukupnu količinu artikla u redu narudžbe;         
**Preostala količina**: prikazuje preostalu količinu neprocesuirane narudžbe;              
**Prodajni nalog unutar drugog plana opterećenja**: ova zastava označava da je narudžba već prisutna u drugom planu;          
**Prodajni nalog unutar drugog otvorenog plana opterećenja**: ova zastava označava da je narudžba već prisutna u drugom planu; ove dvije zastave su korisne ako korisnik nije postavio različite boje za retke (u [postavkama](/docs/configurations/parameters/logistics/load-plan-parameters));            
**Artikl**: u ovom stupcu moguće je unijeti količinu artikla koju želite obraditi; ta količina može biti različita od preostale količine.           

Nakon odabira redova narudžbe za procesuiranje u planu utovara, moguće je izvršiti različite radnje pomoću gumba na traci s gumbima. Napominjemo da ako nije obavezna dostupnost prema postavkama, tada će biti moguće procesuirati redove bez dostupnosti.          

**Posebni gumbi**:          
**Umetni nalog**: ovaj gumb premješta odabrane retke u karticu **Priprema plana utovara**;               
**Bilješke o dostavi**: ovaj gumb omogućuje pregled *bilješki o dostavi* prisutnih u kartici *Isporuka Klijentu*;     
**Svojstvo narudžbi**: ovaj gumb otvara **Status izvršenja** za odabranu narudžbu;     
**Uredi bilješke plana utovara**: ovaj gumb omogućuje uređivanje **bilješki plana utovara** unesenih u kartici *Artikli* Narudžbe klijenta.

## Priprema plana utovara

Na ovoj se kartici nude podaci za pripremu plana utovara. Podaci koji se prikazuju prema zadanim postavkama su oni postavljeni u tablici [Vrste plana utovara](/docs/configurations/tables/logistics/load-plan-type), dok se ostali mogu unijeti ručno.        

**Posebni gumbi**:      
**Spremi**: omogućuje spremanje plana utovara;     
**Postavi prijevoznika**: ovaj gumb otvara prozor pretrage **Prijevoznik** i omogućuje odabir jednog za povezivanje s planom utovara; on će biti prikazan u stupcu Prijevoznik u mreži;   
**Izmjeni napomenu prijevoznika**: ovaj gumb omogućuje uređivanje bilješki prijevoznika i prikazuje ih u stupcu *Bilješke prijevoznika* u mreži;        
**Uredi broj prijevoznika**: ako isti prijevoznik stigne, na primjer, s više kamiona, moguće je podijeliti pošiljku;        
**Otpusti plan**: ovaj gumb oslobađa plan za stvaranje drugih dokumenata (npr. odabiranje);    
**Premjesti u drugi plan utovara**: ovaj gumb premješta redak u postojeći plan utovara, odabran iz prozora pretrage;      
**Kreiraj uzimanje sa zaliha**: ovaj gumb omogućuje stvaranje *odabiranja* iz plana utovara; u prozoru je potrebno unijeti **Vrsta uzimanja sa zaliha**, **Operatera**, i moguće je odabrati stvaranje odabiranja za svaku narudžbu zasebno ili ne. Stvoreno odabiranje bit će dostupno u Pretrazi odabiranja.        

## Legenda

Na ovoj se kartici prikazuju položaji i odjeljci za redove plana utovara; oni se konfiguriraju u evidenciji *Vozila*.

## Sažetak plana utovara

Na ovoj kartici prikazuje se sažetak podataka o *Planu utovara*.

