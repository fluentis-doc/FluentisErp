---
title: Obračun troškova
sidebar_position: 6
---

**Preliminarna Parametrizacija**   

Prije nastavka, molimo pogledajte kako je naznačeno na sljedećim stranicama u vezi s *Obračun troškova proizvodnih naloga*:    

> [Parametri MS -> kartica cijenjenje narudžbe](/docs/configurations/parameters/production/mps-parameters)     
> [Tipovi dokumenata](/docs/configurations/tables/production/documents-types)     
> [Vrsta cijenjenja narudžbe](/docs/configurations/tables/production/production-job-order-cost-type)      
> [Parametri podizvođača -> Vrijednost radnog materijala po trošku](/docs/configurations/parameters/production/subcontractor-parameters/)       

*Specifični gumbi*:
 
> **Dodatni troškovi**: omogućuje unos dodatnih troškova koji se mogu automatski predložiti u svakom narednom cijenjenju (ovi troškovi nisu povezani s pojedinom narudžbom, već su globalni). Ti troškovi se dijele na *Direktni troškovi*, *Opći troškovi* i *Ostali troškovi*. Oni će se automatski prikazati u odgovarajućim sekcijama procijenjenih i stvarnih troškova na kartici *Ukupni troškovi*;     
> **Izvrši obračun troškova**: omogućuje pokretanje postupka cijenjenja narudžbi;    
> **Umetni obračunsku kalkulaciju**: omogućuje unos novog cijenjenja; automatski će se unijeti svi zadani podaci uneseni u fazi preliminarnog parametriziranja, koje se naravno mogu ručno mijenjati za pojedino cijenjenje;     
> **Izbriši obračunsku kalkulaciju**: omogućuje brisanje već stvorenog cijenjenja;     
> **Proširite obračun troškova**: omogućuje raspakiranje stabla dokumenata već stvorenog cijenjenja.  

:::note NAPOMENA
Kartica **Obračun troškova** (koja se odnosi na cijenjenje troškova) prisutna je u upravljanju kako jednoproizvodnim tako i višeproizvodnim narudžbama; u slučaju višeproizvodnih narudžbi, cijenjenje će uzeti u obzir sve artikle prisutne u toj narudžbi.  
::: 

U gornjem dijelu obrasca nalazi se mreža koja sadrži popis svih pokrenutih valorizacija za tu narudžbu, dok se na desnoj strani prikazuju opće informacije o odabranoj narudžbi.   
Donji dio obrasca sastoji se od sljedećih kartica:  

## Detalji troškova  

U ovoj kartici prikazuju se detaljne informacije o troškovima povezane s odabranim cijenjenjem na vrhu obrasca.   
U lijevoj tablici možete vidjeti stablo dokumenata koji čine cijenjenje s sljedećim informacijama:  
**Vrsta dokumenta**: označava vrstu dokumenta;      
**Godina**: označava godinu dokumenta;     
**Broj**: označava broj dokumenta;     
**Lot**: označava broj lota dokumenta (ako je dostupno);       
**Vrsta**: označava kod vrste dokumenta;      
**Razred**: označava razred artikla u dokumentu;       
**Šifra artikla**: označava šifru artikla u dokumentu;      
**Varijanta**: označava varijantu artikla u dokumentu;        
**Jedinica mjere**: označava jedinicu mjere artikla u dokumentu;        
**Količina**: označava količinu artikla u dokumentu;      
**Ukupni planirani trošak**: označava ukupni planirani trošak artikla (predviđeno) u dokumentu;        
**Ukupni stvarni trošak**: označava ukupni stvarni trošak artikla (stvarno) u dokumentu;        
**Opis artikla**: označava opis artikla u dokumentu;      
**Opis varijante**: označava opis varijante artikla u dokumentu.     

Nakon što odaberete dokument iz stabla, u desnom dijelu obrasca prikazat će se sve detaljne informacije vezane uz taj dokument, podijeljene po:  

#### *Interna obrada*  

**Centar rada**: označava kod radnog centra;    
**Stroj**: označava kod stroja;       
**Grupa radne snage**: označava kod radne skupine;        
**Ref. Dokument**: označava referencu dokumenta;    
**J.M. Vremena**:označava jedinicu mjere vremena;      
**Predviđeno podešavanje vremena**: označava predviđeno vrijeme podešavanja;       
**Stvarno podešavanje vremena**: označava stvarno vrijeme podešavanja;      
**Predviđeno vrijeme stroja**: označava predviđeno vrijeme stroja;     
**Stvarno vrijeme stroja**: označava stvarno vrijeme stroja;      
**Predviđeno vrijeme radne skupine**: označava predviđeno vrijeme radne skupine;      
**Stvarno vrijeme radne skupine**: označava stvarno vrijeme radne skupine;      
**Opis Centar rada**: označava opis radnog centra;   
**Opis stroja**: označava opis stroja;      
**Opis Grupe radne snage**: označava opis radne skupine;          
**Ukupni predviđeni trošak**: označava ukupni predviđeni trošak;     
**Ukupni stvarni trošak**: označava ukupni stvarni trošak.  

:::note NAPOMENA 
U slučaju da je stvarni radni centar različit od predviđenog, u ovoj će tablici biti prikazana dva reda: jedan s predviđenim radnim centrom i pripadajućim troškovima, a drugi sa stvarnim radnim centrom.  
::: 

#### *Vanjska obrada*

**Podizvođač**: označava podizvođača;   
**Ref. Dokument**: označava referencu dokumenta;       
**J.M.**: označava jedinicu mjere upravljanja;     
**Predviđena količina**: označava predviđenu količinu za proizvodnju;    
**Stvarna količina**: označava stvarno proizvedenu količinu;    
**Predviđena jedinična cijena**: označava predviđenu jediničnu cijenu;    
**Stvarna jedinična cijena**: označava stvarnu jediničnu cijenu;      
**Ukupni predviđeni trošak**: označava ukupni predviđeni trošak;      
**Ukupni stvarni trošak**: označava ukupni stvarni trošak.     

#### *Materijali*    

**Razred**: označava razred artikla;     
**Šifra artikla**: označava šifru artikla;    
**Opis artikla**:označava opis artikla;      
**Ref. Dokument**: označava referencu dokumenta;    
**J.M.**: označava jedinicu mjere upravljanja;    
**Predviđena količina**: označava predviđenu količinu za kupnju;    
**Stvarna količina**: označava stvarno kupljenu količinu;    
**Predviđena jedinična cijena**: označava predviđenu jediničnu cijenu;    
**Stvarna jedinična cijena**: označava stvarnu jediničnu cijenu;      
**Varijanta**: označava varijantu artikla;     
**Opis varijante**: označava opis varijante artikla;    
**Ukupni predviđeni trošak**: označava ukupni predviđeni trošak;    
**Ukupni stvarni trošak**: označava ukupni stvarni trošak.  

U donjem dijelu obrasca nalazi se expander nazvan **Detalji troškova dokumenta** u kojem su navedene sljedeće informacije:  

**Trošak materijala predviđeni / stvarni po jedinici**: označava predviđeni / stvarni jedinični trošak materijala vezanih uz odabrani dokument;      
**Trošak obrade predviđeni / stvarni po jedinici**: označava predviđeni / stvarni jedinični trošak obrade (unutarnje i vanjske) vezane uz odabrani dokument;   
**Ukupan trošak predviđeni / stvarni po jedinici**: označava ukupan predviđeni / stvarni jedinični trošak (materijali i obrade) vezan uz odabrani dokument;     
**Trošak materijala predviđeni / stvarni ukupno**: označava predviđeni / stvarni ukupni trošak materijala vezanih uz odabrani dokument;     
**Trošak obrade predviđeni / stvarni ukupno**: označava predviđeni / stvarni ukupni trošak obrade (unutarnje i vanjske) vezane uz odabrani dokument;    
**Ukupan trošak predviđeni / stvarni ukupno**: označava ukupan predviđeni / stvarni trošak (materijali i obrade) vezan uz odabrani dokument.  

## Ukupni troškovi

U ovoj kartici se sažeto prikazuju predviđeni i stvarni troškovi povezani s odabranom cijenjenjem.    
Za svaku sekciju (predviđeni i stvarni troškovi), prikazani su sljedeći podaci:     
**Analitika troškova**: ukupni troškovi materijala i troškovi unutarnjih i vanjskih radova;     
**Ukupni direktan trošak**: ukupni troškovi navedeni u sekciji **Direktni troškovi**;    
**Ukupni direktni trošak kom.**: ukupni *Industrijski Trošak* i ukupni *Direktan Trošak*;     
**Nadoplata**: omogućuje odabir vrste nadoplate, bilo postotka ili iznosa, te unosi vrijednost nadoplate;      
**Ukupni nadopunjeni trošak**: ukupni trošak kom. direktnog i nadoplate;       
**Ukupni opći troškovi**: ukupni troškovi navedeni u sekciji **Opći troškovi**;      
**Ukupni ostali troškovi**: ukupni troškovi navedeni u sekciji **Opći troškovi**;     
**Korekcija**: omogućuje unos vrijednosti za korekciju *Ukupnog nadopunjenog troška*;      
**Zaokruživanje**: omogućuje odabir zaokruživanja prema gore ili prema dolje i veličinu zaokruživanja;       
**Ukupni trošak narudžbe**: *Ukupni trošak Nadopunjenog troška*, *Ukupni opći troškovi*, *Ukupni ostali troškovi*, *Korekcija* i *Zaokruživanje*. *Ukupni trošak narudžbe* se prikazuje crvenom bojom u sekciji *Stvarni troškovi* quando questo è superiore quello presente nella sezione deiako je veći od troška u sekciji *Predviđeni troškovi*.           

:::note NAPOMENA 
Polja koja se automatski prikazuju i usklađuju između sekcije *Predviđeni troškovi* i *Stvarni troškovi* su: *Nadoplata* (vrsta nadoplate i vrijednost), *Korekcija* i *Zaokruživanje* (vrsta zaokruživanja i vrijednost). U svakom slučaju, u sekciji *Stvarni troškovi* mogu se ručno promijeniti kako bi se razlikovali od vrijednosti unesenih u sekciji *Predviđeni troškovi*.
::: 

Pomoću dugmeta **Dodatni troškovi** mogu se dodati *Direktni troškovi*, *Opći troškovi* i *Ostali troškovi* koji mogu biti unaprijed predloženi kako u predviđenim tako i u stvarnim troškovima.   
Za svaki od tih troškova moguće je odrediti je li postotni ili fiksni, navodeći i samu vrijednost.      
    

Za sve informacije potrebne za stvaranje ovih troškova, pogledajte stranicu [Elementi troška](/docs/configurations/tables/general-settings/cost-elements).         

## Analiza troškova

Ova kartica ističe sve komponente troškova u predviđenim i stvarnim troškovima koristeći dva tipa analize:      

> **Sintetski**: u ovoj vrsti analize prikazan je *Industrijski trošak*, koji obuhvaća troškove materijala i troškove unutarnjih i vanjskih radova. Također su prikazani *Direktni troškovi*, *Opći troškovi* i *Ostali troškovi*, te ukupan iznos *Nadoplata* i *Korekcija*;        
> **Analitički**: ovaj tip analize detaljno razdvaja svaku stavku u grafikonu. *Industrijski trošak* je podijeljen na *Troškove materijala*, *Unutarnje troškove rada* i *Vanjske troškove rada*. Također su pojedinačno prikazane stavke *Nadoplata* i *Korekcija*. Naravno, uključeni su i *Direktni troškovi*, *Opći troškovi* i *Ostali troškovi*.         

Za detalje o zajedničkom radu obrazaca, pogledajte link [Značajke, gumbe i zajednička polja](/docs/guide/common).
