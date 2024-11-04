---
title: Istovar otpremnica
sidebar_position: 1
---

Postupak se otvara putem **Podizvođač > Otpremnice > Procedure > Istovar otpremnica** i dopušta preuzimanje iz skladišta dostavnih otpremnica za rad na račun koje su već tiskane, a još nisu preuzete.  

## Filter

Na ovoj kartici moguće je filtrirati dostavne listove za isporuku prema trećim stranama na koje su upisane, prema datumu dostavne liste (Od...do...), prema broju dostavne liste, itd.

*Posebni gumbi*:
> **Traži**: gumb za primjenu filtara pretrage na cijelu bazu podataka unesenih, provjerenih i još neregistriranih otpremnica;    
> **Razduženje**: poziva postupak koji provodi registraciju dostavne liste za isporuku i povezane skladišne promjene. 

*Specifična polja*: 

U donjem dijelu obrasca nalazi se polje datuma nazvano **Datum zapisa zalihe**, koje je zadano postavljeno na trenutni datum. Korisnik može promijeniti ovaj datum kako bi odlučio da se registracija u skladištu izvrši na drugi datum osim današnjeg.  

Nakon što odaberete dostavne listove za isporuku koje želite registrirati, možete koristiti gumb **Razduženje** na traci s alatkama i izvršiti skladišne promjene: istovremeno s ovom operacijom, aplikacija provodi ispražnjivanje materijala za dostavu s skladišta i njihovo punjenje na skladište trećeg lica.


## Sažetak 

Na ovoj kartici moguće je izvršiti poništavanje operacije registracije dostavnih listova za isporuku, čime se vraća situacija na stanje prije same operacije. U zaglavlju ove kartice nalaze se filteri pretrage koji korisniku omogućuju filtriranje operacija prema broju ispraznjenja (Od...do...), datumu ispraznjenja dostavne liste (Od...do...), broju dostavne liste (Od...do...).   

Rezultati su vidljivi unutar mreže u gornjem dijelu prozora nazvane  **Razduživanje Otpremnica**.  
Kada se odabere redak unutar ove mreže, u donjem dijelu obrasca mogu se vidjeti ispražnjene otpremnice (u odgovarajućoj kartici *Otpremnica*), kao i pripadajući zapisi skladišta koji su automatski generirani ispraznjenjem odabrane *otpremnice* (u odgovarajućoj kartici *Registracija*).  

*Posebni gumbi*:  
> **Traži**: gumb za primjenu filtara pretrage na cijelu bazu podataka unesenih, ispisanih i već ispražnjenih dostavnih listova za isporuku.    
> **Otkaži**: poziva postupak koji izvršava poništavanje cijele operacije ispraznjenja odabranog dostavnog lista za isporuku u mreži *Isprazni otpremnicu*; dakle, ako je istom operacijom registracije ispražnjen više dostavnih listova za isporuku, svi ti dostavni listovi bit će vraćeni u status koji *nije ispražnjen*.    
> **Povrati otpremnicu**: poziva postupak koji izvršava poništavanje registracije odabranih dostavnih listova za isporuku u donjoj mreži, u kartici *Otpremnice*.    
> **Povrati**: poziva postupak koji izvršava jednostavno brisanje odabranih zapisa skladišta u kartici *Registracija*, bez vraćanja povezanog dostavnog lista za isporuku u status koji nije *ispražnjen*. Preporučuje se da se ovaj gumb koristi samo u iznimnim situacijama.    