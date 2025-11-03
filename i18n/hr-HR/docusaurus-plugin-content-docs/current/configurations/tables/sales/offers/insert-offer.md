---
title: Nova ponuda kupcu
sidebar_position: 3
---

Forma **Nova ponuda** otvara se putem putanje **Prodaja > Nova ponuda** ili pomoću tipke **Nova** koja se nalazi u formi [Pretraga ponuda](/docs/sales/offers/search-offers).  

## *Kako izraditi ponudu kupcu*

## **1. Obavezni podaci**  

- **Vrsta prodajne ponude**: sadrži tip ponude među onima unesenima u [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type).

- **Broj**: svakom se dokumentu automatski dodjeljuje broj prema numeraciji definiranoj od strane korisnika u tablici [Numeracija ponuda](/docs/configurations/tables/fluentis-numerations) povezan s odgovarajućom vrstom dokumenta.  

- **Kupac**: unos kupca moguć je korištenjem [pomoći pri unosu podataka](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).  

- **CRM kontakt**: ako je ponuda namijenjena potencijalnom kupcu (lead) koji još nije u sustavu, moguće je unijeti CRM kontakt umjesto kupca.     

- **Godina**: sustav automatski predlaže tekuću godinu.

- **Datum**: predlaže se današnji datum.    

- **Verzija**: prikazuje broj verzije ponude; ako se radi o novoj, početna verzija bit će prva. 

#### Neobavezni podaci:

- ***Prilika kontakta**: ako je za odabranu vrstu ponude u tablici [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type), povezana određena vrsta prilike, sustav će automatski kreirati novu priliku za kupca/kontakt prilikom spremanja ponude. Ako se ručno odabere postojeća prilika, ona će se ažurirati.        

## **2. Zaglavlje**

Nakon unosa osnovnih podataka, unose se podaci u zaglavlju dokumenta:

- **Valuta**: sustav predlaže valutu kupca.

- **Način isporuke**: predlaže se prema [načinu isporuke](/docs/configurations/tables/general-settings/shipments) dall'anagrafica cliente.      

- **Prodajni cjenik**: predlaže se zadani cjenik iz matične kartice kupca s pripadajućim tipom razreda za popuste.

- **Napomene kupca**: ovdje se mogu unijeti reference, početne i završne napomene. Polje *Napomene kupca* preuzima podatke iz [općih podataka o kupcu](/docs/erp-home/registers/contacts/create-new-contact/general).     

- **Datum potvrde ponude**: označava datum kada je ponuda potvrđena i može se pretvoriti u narudžbu.   

- **Predviđeni datum isporuke**: planirani datum isporuke robe; prenosi se u narudžbu kupca.   

- **Datum zatvaranja**: označava kada je ponuda zatvorena.  

- **Datum poništenja**: datum nakon kojeg će se ponuda smatrati nevažećom ako nije postala narudžba.  

- **Vrijedi do**: informativno polje koje označava rok važenja ponude.  

#### Posebne tipke  

> **Nova verzija** – kreira novu verziju ponude, povećavajući polje *Verzija*. Sve nove verzije nasljeđuju priložene dokumente.          

> **Zamijeni predviđeni datum isporuke u stavkama** – zamjenjuje datum isporuke u svim stavkama prema datumu unesenom u zaglavlju.          

> **Pretvorba**: omogućuje pretvaranje prodajne ponude u stvarnu prodajnu narudžbu.
Kako bi proces ispravno funkcionirao, potrebno je unaprijed konfigurirati željeni tip narudžbe u tablici [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type). Osim toga, da bi se ponuda mogla uspješno pretvoriti, mora imati unesen Datum potvrde u zaglavlju — u suprotnom će sustav korisnika upozoriti putem pop-up poruke da je potrebno potvrditi ponudu prije nastavka.
Nakon što su svi potrebni podaci uneseni, pri pokretanju postupka pojavit će se pop-up s idućim poljima:    
> - ako je barem dio stavki ponude već pretvoren u narudžbu, korisnik će biti upitan želi li kreirati novu narudžbu koristeći sve stavke ponude ili samo one koje još nisu prenesene.             
> - **Kreiraj/Ažuriraj projekt**: ovim flagom sustavu se daje do znanja da, osim stvaranja narudžbe, treba također kreirati ili ažurirati projekt. Ako je potrebno kreirati novi projekt, potrebno je aktivirati jedan od sljedećih flagova: *Kreiraj novi prazan projekt*, *Kreiraj novi projekt iz ponude* ili **Kreiraj novi projekt iz ponude i predloška projekta**; u svim slučajevima potrebno je u odgovarajuće polje unijeti **[Vrstu projekta](/docs/configurations/tables/project-management/project-type)** koju treba kreirati. U posljednjem slučaju bit će potrebno navesti i predložak projekta. Ako projekt već postoji i treba ga ažurirati s podacima iz ponude, tada je potrebno ispuniti polje **Projekt**  odabirom postojećeg projekta koji će biti ažuriran.      
> - **Prenesi materijale/resurse s redaka ponude kao redove narudžbe**: ovim flagom se u narudžbu unose artikli zajedno s resursima i materijalima iz ponude, ako je struktura hijerarhijska.          
Nakon potvrde u pop-up prozoru, sustav će generirati novu Narudžbu klijenta koristeći podatke iz ponude. Tu narudžbu je moguće pregledati i uređivati u odjeljku [Pretraga narudžbi klijenata](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders). Korisnik će biti obaviješten putem pop-up poruke o uspješnoj konverziji, uključujući broj konvertirane ponude i verziju, kao i broj narudžbe klijenta koja je kreirana konverzijom.  
Ako su u ponudi izmijenjeni podaci predloženi iz baze podataka, oni će biti preneseni u narudžbu generiranu konverzijom: Bilješke klijenta, Dostava, Plaćanja, Popusti, Agent, Odredišta, Prijevoznici.   

Tablice ispod se popunjavaju s poljima preuzetim iz kartona kupca/kontakta, koja su promjenjiva:
- **Plaćanja**
- **Popusti**
- **Primatelji**
- **Prijevoznici**
- **Agenti**
- **Dodatni podaci**
- **Podaci za e-poštu**

## **3.a Artikli ponude**

U glavnoj mreži unose se artikli.     

Dostupne podkartice:       
- **Popusti** – prikazuje izvorni cjenik i popuste iz matične kartice te omogućuje unos novih; uključuje i oznaku *Ručna cijena*.      
- **Agenti** – prikazuje agente i njihove provizije.       
- **Podaci o artiklu** – sadrži informacije o varijantama, skladištu i alternativnim mjernim jedinicama.   
- **Dodatni podaci**  
- **Priloženi dokumenti**        

#### Posebne tipke

- **Kreiraj novi prototip** – kreira [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za odabrani redak artikla; referenca na generirani predračun prikazuje se na tabu Podaci o artiklu, u polju Predračun. Bit će moguće izmijeniti prototip generiran iz odgovarajućeg modula.  
- **Poveži prototip** : ovom tipkom moguće je povezati ponudu s već postojećim [Prototipom](/docs/erp-home/registers/production/standardization/new-prototype) otvara se pomoć u kojoj je moguće odabrati prototipove dostupne za taj artikl.  
- **Otvori prototip**: ova tipka je omogućena ako odabrana stavka artikla ima pridružen prototip i omogućava njegovo otvaranje.      
- **Uvezi iz projekta**: ova funkcija otvara pomoć *Artikli projekta*, u kojoj je moguće odabrati artikle iz projekta koje želimo dodati u prodajnu ponudu. Pop-up se otvara izravno s filtriranjem po klijentu na kojeg se ponuda odnosi, kako bi se omogućilo pregledavanje njegovih projekata.

## **3.b Artikli hijerarhijske ponude**

Ako je Ponuda *hijerarhijskog tipa*, kartica Artikli bit će drugačija.     

U glavnoj mreži artikli se unose pomoću tipki na alatnoj traci, koje omogućuju kreiranje strukture u obliku stabla. Karakteristike artikala moraju se definirati u kartici *Aktivnosti.*.    

Slijedi popis posebnih kartica hijerarhijske ponude.

### 3.b.1 Aktivnosti 

U ovoj kartici potrebno je unijeti karakteristike artikala iz mreže artikala. Polja su:      
- **Broj retka/Nivo**: sadrži brojeve retka i WBS-a, postavlja se automatski, ali se može i ručno mijenjati.        
- **Tip čvora**: označava je li red **Root Node** (glavni čvor), **Activity Node** (aktivnosti) ili **Work Package Node** (krajnji čvor projekta, jedini koji može sadržavati kodirane artikle).         
- **Tip retka**: označava tip artikla: Kodirani, Nekodirani, Troškovi ili Napomene (zadano).               
- **Šifra artikla**: prikazuje Klasu, Šifru i Opis eventualno odabranog kodiranog artikla.                 
- **Šifra varijante**: prikazuje eventualnu [Varijantu](/docs/erp-home/registers/items/create-new-item) artikla.           
- **Opis artikla**: prikazuje opis artikla ako je tipa Napomena ili Nekodirani.    
- **Prototip**: sadrži eventualni povezani [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) collegato.          
- **Količina/JM/Cijena**: sadrži količinu, jedinicu mjere i cijenu odabranog artikla.         
- **Alternativna količina**: prikazuje eventualnu alternativnu količinu i pripadajuću jedinicu mjere.      
- **JM cijena**: ako je označeno, cijena po jedinici se množi s alternativnom količinom kako bi se dobio iznos.  
- **Cjenik**: moguće je povezati cjenik iz kojeg se preuzima cijena artikla, uz pripadajući **Tip razine** za popust.      
- **Ručno unesena cijena**: označava da je cijena unesena ručno i da se cjenik ne smije koristiti.           
- **Ažuriraj cijenu iz resursa**: ako je označeno, polje *Cijena* mijenja se na iznos iz kolone *Prihod* u kartici *Resursi*; koristi se kad cijena retka ovisi isključivo o resursima.           
- **Ažuriraj cijenu iz materijala**: ako je označeno, polje *Cijena* mijenja se na iznos iz kolone *Prihod* u kartici *Materijali*; koristi se kad cijena retka ovisi isključivo o materijalima.          
- **Ažuriraj cijenu iz prototipa**: ako je označeno, polje *Cijena* mijenja se na iznos iz kolone *Prodajna cijena* povezanog prototipa.        
-  **Isključi resurse u narudžbi kupca**: resursi odabranog retka neće biti preneseni u Narudžbu kupca kreiranu konverzijom ponude.        
-  **Isključi materijale u narudžbi kupca**: materijali odabranog retka neće biti preneseni u Narudžbu kupca kreiranu konverzijom ponude.              
- **Popusti**: prikazuje popuste za kupca i omogućuje dodavanje novih.       
- **Prihodi materijala/Prihodi resursa**: prikazuje kolone *Prihod* iz kartica Materijali i Resursi; omogućuje uvid u utjecaj iznosa na ukupnu cijenu.       
- **PDV**: označava PDV koji se primjenjuje.                   
- **Prodaja po artiklu**: prikazuje [Prodaju po artiklu](/docs/configurations/tables/sales/sales-turnover).                  
- **Predviđeni datum isporuke/Predviđeni period isporuke**: omogućuje unos predviđenog datuma ili razdoblja isporuke odabranog artikla.  

### 3.b.2 Resursi  

U ovoj kartici moguće je unijeti prihode ostvarene putem različitih resursa. Polja su:  
- **Resurs**: zahtijeva unos prethodno kodiranog [Resursa](/docs/project-management/registers/employee/new-employee) koji je obavio aktivnost.        
- **Jedinica mjere**: sadrži jedinicu mjere koju treba koristiti za resurs; predlaže se zadana iz kartice resursa, ali se može promijeniti.        
- **Količina/Jedinična cijena/Ukupni trošak**: ukupni trošak se automatski izračunava množenjem unesene količine s jedinicom cijene.         
- **Postotak/Vrijednost**: moguće je unijeti eventualno povećanje koje se primjenjuje na ukupni trošak, u postotku ili iznosu.       
- **Prihod**: u ovoj koloni automatski se izračunava ukupni trošak s povećanjem.           
- **Napomena**: polje za slobodne napomene.           
- **Ekvivalent puno radno vrijeme**: moguće je unijeti koliko dana/sati resursa odgovara punom radnom vremenu (npr. ako resurs radi 4 sata dnevno, 1 dan tog resursa odgovara 0,5 dana u kompaniji).       

### 3.b.3 Materiali

U ovoj kartici moguće je unijeti prihode ostvarene korištenjem materijala.          
U prvim stupcima tablice moguće je unijeti Kodirani artikl, Nekodirani artikl ili Napomene, njegovu eventualnu Varijantu i PDV. Sljedeći stupci su:    
- **Količina / Jedinična cijena / Ukupni trošak**: ukupni trošak se automatski izračunava množenjem unesene količine s jedinicom cijene.          
- **Tip izvora troška**: moguće je odabrati izvor za popunjavanje stupca *Jedinična cijena* među opcijama: Zadnja cijena, Prosječna cijena, Standardna cijena, Neto cjenik dobavljača, Nalog dobavljača ili Račun kupnje; ovo polje je moguće zadano postaviti u [Parametri ponude](/docs/configurations/parameters/sales/offer-parameters).      
- **Postotak / Vrijednost**: u ovim poljima moguće je unijeti eventualno povećanje koje se primjenjuje na ukupni trošak, u postotku ili iznosu.        
- **Prihod**: u ovom stupcu automatski se izračunava ukupni trošak s povećanjem.           
- **Opis dobavljača**: predlaže se preferirani dobavljač unesen u karticu artikla, ali se može mijenjati; ako je u stupcu *Tip izvora troška* odabran cjenik dobavljača, koristi se važeći cjenik za tog dobavljača; također, taj dobavljač će biti primatelj **Zahtjeva za ponudu** generiranog za odabrani materijal.           
- **Broj / Datum zahtjeva**: sadrži eventualni **Zahtjev za ponudu** kreiran za materijal; kada se nalazite u kartici *Materijali*, na alatnoj traci pojavljuje se tipka *Kreiranje zahtjeva za ponudu* koja generira ZP za odabrani materijal.      
- **Napomena**: polje za slobodne napomene.      

Ostale kartice su analogne onima kod ne-hijerarhijske ponude.        

#### Specifične tipke  

> **Kreiraj novi prototip**: ova tipka stvara [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za odabranu stavku artikla; referenca na generirani predračun bit će prikazana u kartici Podaci artikla, polje Predračun. Bit će moguće mijenjati generirani prototip kroz odgovarajući modul.       
> **Poveži prototip**: ovom tipkom moguće je povezati ponudu s već postojećim [Prototipom](/docs/erp-home/registers/production/standardization/new-prototype) otvara se pomoć u kojoj možete odabrati dostupne prototipove za taj artikl.         
> **Otvori prototip**: ova tipka je omogućena ako odabrana stavka artikla ima povezani prototip i omogućuje njegovo otvaranje.         
> **Uvezi iz projekta**: ova funkcija otvara pomoć Artikli projekta, u kojoj je moguće odabrati artikle iz projekta koje želimo dodati u prodajnu ponudu. Pop-up se otvara direktno s filtriranjem po klijentu iz ponude kako bi se mogli prikazati relevantni projekti.        
> **Novi podređeni**: omogućuje dodavanje stavke projekta kao dijete odabrane stavke.          
> **Novi brat**: omogućuje dodavanje stavke projekta na istom nivou kao odabrana stavka.         
> **Zamijeni WBS broj**: omogućuje uključivanje broja projekta u WBS broj stavki.    
> **Implodiraj**: omogućuje skrivanje stavki stabla.           
> **Eksplodiraj**: omogućuje prikaz stavki stabla.    

## **4. Sažeci ponude**

U ovoj kartici moguće je unijeti podatke koji vrijede za cijeli dokument:  


### 4.1 Konačna sniženja artikala  

Mogu se unijeti samo popusti, izraženi u postotku, koji će se primijeniti na ukupni iznos dokumenta.

Popusti uneseni u ovom odjeljku izračunavaju se i prikazuju na svakom artiklu dokumenta, u *kartica Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućava odabir tipologije popusta (predefinirane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), dodijeljujući tipologiji prioritet primjene popusta i hoće li se popust obračunavati na osnovicu ili kaskadno u odnosu na već prethodno primijenjene popuste.
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed koji se primjenjuje odvija se na rastući način. 
**Kaskadni/Osnovni**: za definirati da li izračun popusta koristi kao osnovu (cijena * količina) - (već obračunati popusti) ili (cijena * količina).  
**Vrijednost**: numerička vrijednost popusta koji treba primijeniti.  


### 4.2 Troškovi/Sniženja/Dodatne naplate  

Ovdje su troškovi uneseni u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na korišteni dokument.

**Tip/Opis**: omogućuje odabir tipa troškova (predefiniranih u *Tipovima troška*), dodjeljujući tipu postotak troška koji se treba primijeniti. 
**Postotak/Vrijednost**: polje koje identificira hoće li se troškovi izračunati s postotkom ili s unaprijed definiranim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troškova. 