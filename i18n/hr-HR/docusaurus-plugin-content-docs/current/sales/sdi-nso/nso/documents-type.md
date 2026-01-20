---
title: Vrste dokumenata
sidebar_position: 2
---

## Narudžba

Narudžba je dokument koji predstavlja zahtjev za kupnju dobara i usluga, izdana od strane Klijenta (Pošiljatelja) i upućena Dobavljaču (Primatelju). Narudžba se sastoji od jedne ili više stavki, u kojima su navedeni proizvod ili usluga koju se namjerava kupiti, količina i cijena.         
**Narudžba je pripremljena u formatu definiranom PEPPOL Order transaction 3.0 specifikacijom.**
Narudžba može:    
- odrediti, neovisno o drugim prethodno izdanim narudžbama, dobra i/ili usluge koje Klijent namjerava kupiti, te priložiti upute za izvršenje (početna narudžba). Početna narudžba ne sadrži reference na druge narudžbe;   
da li Klijent namjerava kupiti i pripadajuće upute za izvršenje usluge (Početna narudžba). Početna narudžba ne sadrži reference na druge narudžbe;  
- odrediti, neovisno o drugim prethodno izdanih narudžbi, dobra i/ili usluge koje Klijent namjerava kupiti te pripadajuće upute za izvršenje isporuke i, međutim, biti općenito povezano s drugim Dokumentom (Povezana početna narudžba). Povezana početna narudžba sadrži referencu na Dokument na koji je povezana i oznaku da se radi o pukom "povezivanju";  
- Poništavanje prethodno izdanog Naloga (Nalog za revokaciju). Nalog za revokaciju je Nalog koji sadrži naznaku da se radi o “Revokaciji” i referencu na Nalog koji se želi poništiti.     
- Zamjena prethodno izdanog Naloga (Zamjenski nalog).
Izmjena Naloga je novi Nalog koji sadrži sve stavke izvornog Naloga, a u kojem je naznačeno da se radi o “Izmjeni” te sadrži referencu na Nalog koji se želi izmijeniti.     
Zamjene i opozivi, redom, zamjenjuju odnosno poništavaju kako nalog koji je u njima naveden, tako i sve druge prethodno dostavljene zamjene i opozive koji se odnose na isti početni nalog.
Povezani početni nalog smije se koristiti isključivo radi evidentiranja da je novi postupak koji se namjerava pokrenuti povezan s prethodnim postupkom te se nikada ne smije koristiti umjesto drugih alata (nalog za opoziv, zamjenski nalog i nalog za očitovanje) koji su posebno izrađeni za opoziv, zamjenu (ili dopunu), potvrdu ili odbijanje drugog dokumenta.

## Odgovor

Odgovor je dokument kojim Dobavljač (Pošiljatelj) prihvaća, odbija ili predlaže izmjene narudžbe zaprimljene od Kupca (Primatelja).  
**Odgovor se izrađuje u formatu opisanom u specifikaciji PEPPOL Order Response transaction 3.0.**      
Putem Odgovora Dobavljač može Kupcu priopćiti da:  
- je zaprimio Narudžbu (Odgovor o zaprimanju), ali je još nije obradio. Riječ je, očito, o privremenoj obavijesti koja ne sadrži nikakvu naznaku o tome hoće li i na koji način Dobavljač postupiti po Narudžbi. Odgovor o zaprimanju je Odgovor bez stavki narudžbe, koji sadrži oznaku da je riječ o „zaprimanju” („AB”) te upućivanje na Narudžbu čiji se primitak potvrđuje;    
- namjerava postupiti po zaprimljenoj Narudžbi (Odgovor o prihvaćanju). Odgovor o prihvaćanju je Odgovor bez stavki narudžbe, koji sadrži oznaku da je riječ o „Prihvaćanju” te upućivanje na Narudžbu koja se prihvaća;   
- odbija zaprimljenu Narudžbu (Odgovor o odbijanju). Odgovor o odbijanju je Odgovor bez stavki narudžbe, koji sadrži oznaku da je riječ o „Odbijanju” te upućivanje na Narudžbu koja se odbija;  
- namjerava izvršiti zaprimljenu Narudžbu unoseći određene izmjene (Odgovor s izmjenama). Odgovor s izmjenama, koji označava da se radi o „Izmjeni” i upućuje na Narudžbu koja se mijenja, mora sadržavati sve stavke narudžbe—i one koje se namjeravaju zadržati i one koje se namjeravaju promijeniti—budući da nadopunjuje prethodno dostavljenu Narudžbu na koju se odnosi.
Odgovori s izmjenama i Odgovori o odbijanju, redom, nadopunjuju odnosno poništavaju kako Narudžbu navedenu u njima, tako i sve druge prethodno dostavljene Izmjene i Opozive koji se odnose na istu početnu Narudžbu.   

Odgovor na opozvanu narudžbu nema učinka.  

## Prihvaćen nalog

Potvrdni nalog je dokument kojim Kupac (Pošiljatelj) potvrđuje, odbija ili zamjenjuje (zamjenski potvrdni nalog) prethodno dogovorenu Narudžbu ili Odgovor poslan od Dobavljača (Primatelja).   
**Potvrdni nalog, stoga, u biti predstavlja Narudžbu koja se odnosi na dokument poslan od Dobavljača. Sukladno tome, izrađuje se u istom formatu, opisanom u specifikaciji PEPPOL Order transaction 3.0.**    
Putem Potvrdnog naloga Kupac može Dobavljaču priopćiti da:    
- potvrđuje prethodno dogovorenu Narudžbu ili Odgovor poslan od Dobavljača (Potvrdni nalog za potvrdu). Potvrdni nalog za potvrdu je Narudžba koja sadrži oznaku da se radi o „Potvrdi” te upućivanje na prethodno dogovorenu Narudžbu ili Odgovor koji se potvrđuje;     
- koji odbija unaprijed dogovoreni Nalog ili Odgovor poslan od strane Dobavljača (Nalog za provjeru s odbijanjem).
Nalog za provjeru s odbijanjem je Nalog koji sadrži oznaku da se radi o ‘Odbijanju’ i referencu na Nalog ili Odgovor koji se želi odbiti;   
- koji namjerava zamijeniti unaprijed dogovoreni Nalog ili Odgovor poslan od strane Dobavljača (Zamjenski Nalog za provjeru).
Zamjenski Nalog za provjeru je novi Nalog, kompletan sa svim stavkama narudžbe, koji sadrži oznaku da se radi o ‘Zamjeni’ i referencu na Nalog ili Odgovor koji se želi zamijeniti.           

Zamjenski nalozi za provjeru i nalozi za provjeru s odbijanjem redom zamjenjuju, odnosno poništavaju, kako navedeni unaprijed dogovoreni Nalog ili Odgovor, tako i sve prethodno poslane zamjene i otkaze povezane s tim početnim Nalogu.
Nalog za provjeru koji se odnosi na unaprijed dogovoreni Nalog koji je već otkazan nema učinka.

## Unaprijed dogovoreni nalog

Unaprijed dogovoreni nalog je dokument koji predstavlja narudžbu roba i usluga, izdan od strane Dobavljača (Pošiljatelja) umjesto Klijenta (Primatelja), u dogovoru s Klijentom.
Unaprijed dogovoreni nalog sastoji se od jedne ili više stavki narudžbe, u kojima su navedeni kupljeni proizvod ili usluga, količina i cijena.    
**Unaprijed dogovoreni nalog priprema se u formatu opisanom u specifikaciji PEPPOL Order Agreement transaction 3.0.**   
Unaprijed dogovoreni nalog može:  
- odrediti, neovisno o drugim prethodno dogovorenim Narudžbama, robu i/ili usluge koje Klijent namjerava kupiti i odgovarajuće upute za izvršenje isporuke (Inicijalna prethodno dogovorena narudžba). Inicijalna prethodno dogovorena narudžba ne sadrži reference na druge prethodno dogovorene Narudžbe.  
- odrediti, neovisno o drugih prethodno dogovorenih Narudžbi, dobra i/ili usluge koje Klijent namjerava kupiti te odgovarajuće upute za izvršenje isporuke i, ipak, biti općenito povezan s drugim Dokumentom (povezana inicijalna prethodno dogovorena Narudžba). Povezana inicijalna prethodno dogovorena Narudžba sadrži referencu na Dokument s kojim je povezana i oznaku da se radi o pukom "povezivanju".  
- revocirati narudžbu prethodno dogovorenu (Ordine pre-concordato di revoca). Narudžba prethodno dogovorena za revokaciju je narudžba koja sadrži oznaku da se radi o "revokaciji" ("Cancelled") i referencu na prethodno dogovorenu narudžbu koju se namjerava revokirati, a također ima samo jedan redak narudžbe bez sadržaja.  
- zamijeniti prethodno izdanu prekonkordnu narudžbu (Sostituire un Ordine pre-concordato precedentemente emesso). Modifikacija prekonkordne narudžbe je nova prekonkordna narudžba, koja sadrži sve redove narudžbe, a koja uključuje oznaku da se radi o "zamjeni" ("sostituzione" ili "Revised") i referencu na prekonkordnu narudžbu koju se namjerava modificirati.    

Zamjene i Opozivi, redom, zamjenjuju i poništavaju kako unaprijed dogovorenu Narudžbu navedenu, tako i sve druge Zamjene i Opozive, već poslane, koje se odnose na odgovarajuću inicijalnu unaprijed dogovorenu Narudžbu.  
Inicijalna unaprijed dogovorena Narudžba može se koristiti isključivo za zadržavanje evidencije da je novi proces koji se namjerava pokrenuti povezan s prethodnim procesom i nikada se ne smije koristiti umjesto drugih alata (Opoziv unaprijed dogovorene Narudžbe, Zamjenska unaprijed dogovorena Narudžba i Odgovor) posebno izrađenih za opoziv, zamjenu (ili dopunu), prihvaćanje ili odbijanje drugog Dokumenta.  

## VEZA S PEPPOL STANDARDOM  

U vezi s naručivanjem robe i usluga, PEPPOL BIS standard verzije 3.0 definira tri tipa dokumenata:          
− Order transaction 3.0;       
− Order Response transaction 3.0;     
− Order Agreement transaction 3.0;       
i tri procesa (nazvana profili):        
− BIS Order only 3.0;     
− BIS Ordering 3.0;      
− BIS Order Agreement 3.0.