---
title: Vrste dokumenata
sidebar_position: 2
---

## Narudžba

Narudžba je dokument koji predstavlja zahtjev kupca (pošiljatelja) za nabavu robe ili usluga od dobavljača (primatelja).  
Narudžba se sastoji od jedne ili više stavki, u kojima su navedeni artikl ili usluga, količina i cijena.          
**Narudžba je izrađena u formatu definiranom PEPPOL specifikacijom – Order transaction 3.0.**
Narudžba može:   
- odrediti, neovisno od drugih prethodno izdanih narudžbi, robu i/ili usluge koje Klijent namjerava kupiti i odgovarajuće upute za izvršenje usluge (Početna narudžba). Početna narudžba ne sadrži reference na druge narudžbe;  
- odrediti, neovisno od drugih prethodno izdanih narudžbi, robu i/ili usluge koje Klijent namjerava kupiti i odgovarajuće upute za izvršenje isporuke, i ipak biti općenito povezana s drugim Dokumentom (Povezana početna narudžba). Povezana početna narudžba sadrži referencu na Dokument na koji je povezana i oznaku da se radi o pukom "povezivanju";  
- opozvati prethodno izdanu narudžbu (Narudžba za opoziv). Narudžba za opoziv je narudžba koja sadrži oznaku da se radi o "Opozivu" i referencu na narudžbu koju se namjerava opozvati;  
- zamijeniti prethodno izdanu narudžbu (Zamjenska narudžba). Izmjena narudžbe je nova narudžba koja sadrži sve redove narudžbe, koja sadrži oznaku da se radi o "Izmjeni" i referencu na narudžbu koju se namjerava izmijeniti.  
Zamjene i Opozivi, redom, zamjenjuju i poništavaju kako navedenu narudžbu tako i sve druge Zamjene i Opozive, već poslane, koje se odnose na odgovarajuću Početnu narudžbu. Povezana početna narudžba može se koristiti isključivo za zadržavanje memorije da je novi proces koji se namjerava pokrenuti povezan s prethodnim procesom i nikada se ne smije koristiti umjesto drugih alata (Narudžba za opoziv, Zamjenska narudžba i Narudžba za potvrdu) posebno izrađenih za opoziv, zamjenu (ili dopunu), potvrdu ili odbijanje drugog Dokumenta.

## Odgovor

**Odgovor** je dokument kojim dobavljač (pošiljatelj) prihvaća, odbija ili predlaže izmjene narudžbe primljene od kupca (primatelja).    
**Odgovor je izrađen u formatu definiranom PEPPOL specifikacijom – Order Response transaction 3.0.**  
Dobavljač putem odgovora može obavijestiti kupca da:    
- primio je narudžbu, ali je još nije obradio. To je, očigledno, komunikacija koja ne sadrži nikakve informacije o "da li i kako" dobavljač namjerava izvršiti narudžbu. Odgovor o prijemu je odgovor bez redaka narudžbe, koji sadrži oznaku da se radi o "prijemu" ("AB") i referencu na narudžbu koja se potvrđuje da je primljena.  
- namjerava izvršiti primljenu narudžbu. Odgovor o prihvaćanju je odgovor bez redaka narudžbe, koji sadrži oznaku da se radi o "Prihvaćanju" i referencu na narudžbu koju namjerava prihvatiti;  
- odbija primljenu narudžbu. Odgovor o odbijanju je odgovor bez redaka narudžbe, koji sadrži oznaku da se radi o "Odbijanju" i referencu na narudžbu koju namjerava odbiti;  
- namjerava izvršiti primljenu narudžbu uz određene izmjene. Odgovor s izmjenama, koji sadrži oznaku da se radi o "Izmjeni" i referencu na narudžbu koju namjerava izmijeniti, mora sadržavati sve redove narudžbe, kako one koje se namjeravaju zadržati, tako i one koje se namjeravaju promijeniti, budući da nadopunjuje prethodno poslanu narudžbu na koju se odnosi.  
Odgovori s izmjenama i odgovori o odbijanju, redom, nadopunjuju i poništavaju kako navedenu narudžbu, tako i sve druge izmjene i opozive, već poslane, koje se odnose na istu početnu narudžbu.    

Odgovor na opozvanu narudžbu nema učinka.

## Potvrdna narudžba  

Potvrdna narudžba je dokument kojim kupac (pošiljatelj) potvrđuje, odbija ili zamjenjuje  
(zamjenska potvrdna narudžba) prethodno dogovorenu narudžbu ili odgovor koji je poslao dobavljač (primatelj).  
**Narudžba za potvrdu, stoga, nije ništa drugo nego narudžba koja se odnosi na dokument poslan od dobavljača. Posljedično, pripremljena je u istom formatu, koji je opisan specifikacijom PEPPOL narudžbe 3.0.**
Kupac putem potvrdne narudžbe može obavijestiti dobavljača da:   
- potvrđuje prethodno dogovorenu narudžbu ili odgovor koji je poslao dobavljač (potvrdna narudžba za potvrdu). Potvrdna narudžba za potvrdu je dokument koji sadrži oznaku da se radi o „Potvrdi“ te referencu na prethodno dogovorenu narudžbu ili na odgovor koji se potvrđuje.
- odbija prethodno dogovorenu narudžbu ili odgovor koji je poslao dobavljač (potvrdna narudžba za odbijanje). Potvrdna narudžba za odbijanje je dokument koji sadrži oznaku da se radi o „Odbijanju“ te referencu na narudžbu ili odgovor koji se odbija.  
- želi zamijeniti prethodno dogovorenu narudžbu ili odgovor koji je poslao dobavljač (zamjenska potvrdna narudžba). Zamjenska potvrdna narudžba je nova narudžba, koja uključuje sve stavke narudžbe, s oznakom da se radi o „Zamjeni“, te referencom na narudžbu ili odgovor koji se zamjenjuje.          

Zamjenske potvrdne narudžbe i potvrdne narudžbe za odbijanje, svaka u svom slučaju, zamjenjuju i poništavaju i prethodno dogovorenu narudžbu ili odgovor na koji se odnose, kao i sve druge zamjene i opozive koji su već poslani i koji se odnose na istu početnu narudžbu.  
Potvrdna narudžba koja se odnosi na opozvanu prethodno dogovorenu narudžbu nema učinka.

## Prethodno dogovorena narudžba  

Prethodno dogovorena narudžba je dokument koji predstavlja narudžbu za kupovinu roba ili usluga, koji izdaje dobavljač (pošiljatelj), a ne kupac (primatelj), u dogovoru s kupcem.
Prethodno dogovorena narudžba sastoji se od jedne ili više stavki narudžbe, u kojima su navedeni proizvod ili usluga koji su predmet kupovine, količina i cijena.   
**Prethodno dogovorena narudžba izrađena je u formatu opisanom u specifikaciji PEPPOL Order Agreement transaction 3.0.**
Prethodno dogovorena narudžba može:
- odrediti, neovisno o drugim ranije izdatim prethodno dogovorenim narudžbama, robu i/ili usluge koje kupac namjerava kupiti te upute za izvršenje isporuke (početna prethodno dogovorena narudžba). Početna prethodno dogovorena narudžba ne sadrži reference na druge narudžbe;  
- odrediti, neovisno o drugim ranije izdatim prethodno dogovorenim narudžbama, robu i/ili usluge koje kupac namjerava kupiti te upute za izvršenje isporuke, ali biti općenito povezano s drugim dokumentom (povezana početna prethodno dogovorena narudžba). Ova vrsta narudžbe sadrži referencu na dokument na koji se odnosi i naznaku da se radi o običnoj „poveznici“;  
- opozvati prethodno izdanu prethodno dogovorenu narudžbu (opoziv prethodno dogovorene narudžbe). Takva narudžba sadrži naznaku da se radi o „opozivu“ („Cancelled“) i referencu na narudžbu koja se opoziva, te ima samo jednu praznu stavku narudžbe bez sadržaja;  
- zamijeniti prethodno izdanu prethodno dogovorenu narudžbu (zamjenska prethodno dogovorena narudžba). To je nova narudžba koja sadrži sve stavke narudžbe, s naznakom da se radi o „zamjeni“ („Revised“) i s referencom na narudžbu koju zamjenjuje.        

Zamjene i Opozivi, respektivno, zamjenjuju i poništavaju kako Prethodno dogovorenu narudžbu navedenu tako i sve druge Zamjene i Opozive, već poslane, vezane uz odgovarajuću inicijalnu Prethodno dogovorenu narudžbu.  
Inicijalna Prethodno dogovorena narudžba može se koristiti isključivo za zadržavanje evidencije da je novi proces koji se namjerava pokrenuti povezan s prethodnim procesom i nikada se ne smije koristiti umjesto drugih alata (Prethodno dogovorena narudžba za opoziv, Prethodno dogovorena zamjenska narudžba i Odgovor) posebno izrađenih za opoziv, zamjenu (ili dopunu), prihvaćanje ili odbijanje drugog Dokumenta.

## POVEZANOST SA STRANDARDOM PEPPOL

U vezi s naručivanjem roba i usluga, standard PEPPOL BIS verzija 3.0 definira tri vrste dokumenata:         
− Order transaction 3.0;       
− Order Response transaction 3.0;     
− Order Agreement transaction 3.0;       
e tre processi (denominati profili):      
− BIS Order only 3.0;     
− BIS Ordering 3.0;      
− BIS Order Agreement 3.0.