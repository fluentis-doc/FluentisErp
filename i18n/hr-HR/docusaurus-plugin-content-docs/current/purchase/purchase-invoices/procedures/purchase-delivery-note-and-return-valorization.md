---
title: Valorizacija primke i povrata
sidebar_position: 5
---

Postupak se otvara putem izbornika **Nabava > Ulazni računi > Procedure > Valorizacija ulaznih i povratnih otpremnica**. 

Omogućuje izvršavanje i vraćanje (poništavanje) kreiranja ulaznih računa polazeći ili od ulaznih otpremnica ili od otpremnica povrata.

### Valorizacija

U ovoj kartici korisnik može postaviti filtre za pretraživanje ulaznih i povratnih otpremnica koje treba valorizirati. Moguće je filtrirati po: dobavljaču, tipu ulazne otpremnice, tipu povrata, broju, datumu, artiklu i projektu.

Za razliku od dviju sličnih procedura [Valorizacija ulaznih otpremnica](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) i [Valorizacija otpremnica povrata](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization), u ovoj se formi prikazuje jedan redak za svaku artikl-stavku u dokumentu. Time je omogućeno valorizirati čak i samo jednu stavku.

- **Broj i datum računa**: omogućuju definiranje broja i datuma računa koji će biti kreiran.  

*Posebne tipke*: 

> **Valorizacija**: valorizira odabrane otpremnice u gridu, prema parametrima postavljenima u sljedećoj kartici *Parametri*.   
> **Prikaži samo dokumente**: uključuje/isključuje istoimenu opciju u filtrima te omogućuje prikaz samo zaglavlja dokumenta ili jedne stavke po artiklu.  

### Parametri

#### Parametri ulaznih otpremnica  

*Unos u račun*  

- **Preračunaj CdC/CdR**: koristi se u analitičkom računovodstvu za ponovni izračun centara troška ili prihoda.
- **Poredaj otpremnice prema broju dokumenta dobavljača**: ako je uključeno, otpremnice u zbirnom računu bit će poredane prema *broju dokumenta dobavljača* umjesto prema *internom broju*.  
- **Tip ulaznog računa**: definira tip računa koji se kreira.  

*Reference otpremnice*

- **Umetni reference otpremnice**: ako je uključeno, u kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) računa pojavit će se *stavka bilješke* s referencama otpremnice iz koje je račun kreiran. Tekst bilješke unosi se u polje *Opis*, prema parametrima iz oznake.
    
    *Primjer*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Ako otpremnica ima broj 5 i datum 11.09.2024., stavka bilješke u računu glasi: "Referenca otpremnice br. 5 od 11.09.2024."

#### Parametri povrata iz kooperacije

*Tip računa*

- **Tip računa**: definira vrstu računa koji će biti kreiran.
- **Poredaj otpremnice prema broju dokumenta dobavljača**: ako je uključeno, povratne otpremnice u zbirnom računu bit će poredane prema *broju dokumenta*; u suprotnom, prema datumu.

*Reference povrata*

- **Umetni reference povrata**: ako je uključeno, u kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) pojavit će se *stavka bilješke* s referencama povratne otpremnice iz koje je račun kreiran. Tekst bilješke unosi se u *Opis*, prema navedenim parametrima. 


:::tip Zapamti 
Za kreiranje zbirnih računa potrebno je u [Parametrima grupiranja računa](/docs/configurations/parameters/purchase/invoice-grouping/) postaviti uvjete grupiranja.  
:::

*Posebne tipke*: 

> **Spremi parametre ulaznih otpremnica**: sprema postavljene parametre valorizacije ulaznih otpremnica.   
> **Spremi parametre povrata**: sprema postavke valorizacije otpremnica povrata.  

Nakon odabira otpremnica (u kartici *Valorizacija*) i postavljanja parametara, račun se može kreirati tipkom *Valorizacija*.

### Prethodne operacije  

Zadnja kartica služi vraćanju operacija: omogućuje filtriranje, pregled i poništavanje izvršenih valorizacija.  

U gornjem gridu prikazuju se svi kreirani računi. Odabirom jednog od njih u donjim se gridovima prikazuju **Ime operatera** datum valorizacije, **Ulazna otpremnica** ili **Povrat iz kooperacije** iz kojih je račun nastao, kao i popis valoriziranih artikala. Također je moguće dvostrukim klikom otvoriti otpremnicu, povrat ili generirani račun.  

*Posebne tipke*:
> **Pretraži valorizacije**: pretražuje kreirane račune i valorizirane otpremnice prema definiranim filtrima. Rezultati se pojavljuju u prikaznom gridu.    
> **Vraćanje računa**: briše odabrani račun iz donjeg grida.  