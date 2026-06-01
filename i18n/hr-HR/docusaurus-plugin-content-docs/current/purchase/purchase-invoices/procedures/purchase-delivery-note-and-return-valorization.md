---
title: Valorizacija primke i povrata
sidebar_position: 5
---

Postupak se otvara putem izbornika **Nabava > Ulazni računi > Procedure > Valorizacija primke i povrata**. 

Omogućuje izvršavanje i vraćanje (poništavanje) kreiranja ulaznih računa polazeći ili od primki ili od otpremnica povrata.

### Valorizacija primke i povrata

U ovoj kartici korisnik može postaviti filtre za pretraživanje ulaznih i povratnih dokumenata koje treba valorizirati. Moguće je filtrirati po: dobavljaču, tipu primke, tipu povrata, broju, datumu, artiklu i projektu.

Za razliku od dviju sličnih procedura [Valorizacija primki](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) i [Valorizacija (otpremnica) povrata](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization), u ovoj se formi prikazuje jedan redak za svaku artikl-stavku u dokumentu. Time je omogućeno valorizirati čak i samo jednu stavku.

- **Broj i datum računa**: omogućuju definiranje broja i datuma računa koji će biti kreiran.  

*Posebne tipke*: 

> **Valorizacija**: valorizira odabrane primke u pregledu, prema parametrima postavljenima u sljedećoj kartici *Parametri*.   
> **Prikaži samo dokumente**: uključuje/isključuje istoimenu opciju u filtrima te omogućuje prikaz samo zaglavlja dokumenta ili jedne stavke po artiklu.  

### Parametri

#### Parametri primki  

*Umetanje na račun*  

- **Preračunaj centar troška/profitni centar**: koristi se u analitičkom računovodstvu za ponovni izračun centara troška ili prihoda.
- **Poredaj dokument prema broju dokumenta dobavljača**: ako je uključeno, primke u zbirnom računu bit će poredane prema *broju dokumenta dobavljača* umjesto prema *internom broju*.  
- **Vrsta ulaznog računa**: definira tip računa koji se kreira.  

*Reference otpremnice*

- **Umetni reference otpremnice**: ako je uključeno, u kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) računa pojavit će se *stavka bilješke* s referencama otpremnice iz koje je račun kreiran. Tekst bilješke unosi se u polje *Opis*, prema parametrima iz oznake.
    
    *Primjer*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Ako otpremnica ima broj 5 i datum 11.09.2024., stavka bilješke u računu glasi: "Referenca otpremnice br. 5 od 11.09.2024."

#### Parametri povrata iz radnog naloga podizvođača

*Vrsta računa*

- **Vrsta računa**: definira vrstu računa koji će biti kreiran.
- **Poredaj dokument prema broju dokumenta dobavljača**: ako je uključeno, povrati u zbirnom računu bit će poredani prema *broju dokumenta*; u suprotnom, prema datumu.

*Reference povrata*

- **Umetni reference povrata**: ako je uključeno, u kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) pojavit će se *stavka bilješke* s referencama povrata iz koje je račun kreiran. Tekst bilješke unosi se u *Opis*, prema navedenim parametrima. 


:::tip Zapamti 
Za kreiranje zbirnih računa potrebno je u [Parametrima grupiranja računa](/docs/configurations/parameters/purchase/invoice-grouping/) postaviti uvjete grupiranja.  
:::

*Posebne tipke*: 

> **Spremi parametre primki**: sprema postavljene parametre valorizacije primki.   
> **Spremi parametre povrata**: sprema postavke valorizacije dokumenata povrata.  

Nakon odabira otpremnica (u kartici *Valorizacija*) i postavljanja parametara, račun se može kreirati tipkom *Valorizacija*.

### Povrat

Zadnja kartica služi vraćanju operacija: omogućuje filtriranje, pregled i poništavanje izvršenih valorizacija.  

U gornjem pregledu prikazuju se svi kreirani računi. Odabirom jednog od njih, u donjim se pregledima prikazuje **Ime operatera**, datum valorizacije, **Prima** ili **Povrat** iz kojih je račun nastao, kao i popis valoriziranih artikala. Također je moguće dvostrukim klikom otvoriti primku, povrat ili generirani račun.  

*Posebne tipke*:
> **Pretraga valorizacije**: pretražuje kreirane račune i valorizirane primke prema definiranim filtrima. Rezultati se pojavljuju u prikaznom pregledu.    
> **Povrati račune**: briše odabrani račun iz donjeg pregleda.  