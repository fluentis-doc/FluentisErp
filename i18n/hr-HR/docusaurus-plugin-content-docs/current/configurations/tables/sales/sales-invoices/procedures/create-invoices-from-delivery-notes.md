---
title: Kreiranje računa iz otpremnica
sidebar_position: 1
---

Procedura se otvara putem **Prodaja > Računi prodaje > Procedure > Kreiranje iz otpremnica**.  

Ova procedura omogućuje izvršavanje/obnavljanje operacija kreiranja računa iz jedne ili više otpremnica.  

### Valorizacija

U ovoj kartici korisnik može unijeti filtre za pretraživanje otpremnica sa statusom *Ispisana*, koje se trebaju fakturirati, pomoću filtara (tip otpremnice, datum, broj, kupac).  

**Datum kreiranja**: omogućuje specificiranje datuma računa koji će biti kreiran.  

*Tipke specifične*:    
> **Kreiranje računa iz otpremnica**: omogućuje popunjavanje odabranih otpremnica u mreži prema parametrima unesenim u sljedećoj kartici *Parametri*.    
> **Otvaranje otpremnice**: omogućuje pregled i izmjenu odabrane otpremnice.  

:::note
Nije moguće kreirati samofakturiranje iz otpremnice.  
:::

### Parametri

*Unos u račun*  

Pomoću ovih parametara moguće je grupirati otpremnice istog kupca u jedan račun: 

**Otpremnice iz različitih godina i poreznih razdoblja**: aktiviranjem ovog flag-a omogućuje se kreiranje računa iz otpremnica iz različitih godina i poreznih razdoblja.  

**Otpremnice različitih tipova**: aktiviranjem ovog flag-a omogućuje se kreiranje računa iz otpremnica različitih tipova.  

**Otpremnice s različitim tečajevima**: aktiviranjem ovog flag-a omogućuje se kreiranje računa iz više otpremnica s različitim tečajevima.

**Grupiranje otpremnica po tipu i načinu plaćanja**: načini plaćanja mogu se preuzeti iz kartice kupca ili zadržati one iz otpremnica. Ako nije aktivirano grupiranje po tipu plaćanja, račun može sadržavati više redaka s različitim plaćanjima.  

*Obrada plaćanja u računu*  

Ako postoje otpremnice s različitim načinima plaćanja i ako nije postavljen flag *Grupiraj otpremnice*:  

**Preuzmi s kartice kupca**: račun će preuzeti načine plaćanja iz kartice kupca (ne uzima u obzir podatke iz otpremnica).    

**Zadrži načine plaćanja iz otpremnica**: račun će preuzeti načine plaćanja unesene u otpremnicama.  

*Unos u račun*  

**Grupiraj dospjele u računu**: aktiviranjem ovog flag-a moguće je grupirati dospjele s istim datumom u jedinstvenu stavku, iako dolaze iz različitih otpremnica.  

**Preračunaj CdC/CdP**: koristi se u analitičkom računovodstvu, služi za preračunavanje centara troška ili profita.  

*Reference otpremnica*

**Dodaj reference otpremnica**: ako je ovaj flag postavljen, u kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) računa prikazat će se *Artikl bilješka* koji preuzima reference otpremnice iz koje je kreiran račun. Sadržaj te bilješke mora biti unesen u polje 'Opis' prema parametrima opisanim u labeli.  

*Tipka specifična*:     

> **Spremi parametre**: omogućuje spremanje parametara postavljenih za popunjavanje podataka.  

Nakon odabira otpremnica (u kartici *Popunjavanje podataka*) i postavljanja parametara, račun se može kreirati pomoću tipke *Kreiranje računa iz otpremnice*.  

### Prethodne operacije  

Kao posljednja kartica prisutna je kartica za obnavljanje: moguće ju je koristiti za filtriranje, pregled i poništavanje operacija.  

Podaci u mrežama ispod, **Računi** i **Otpremnice**, odgovaraju odabranom popunjavanju podataka u gornjoj mreži (nakon filtriranja podataka). Također, u ovim dvjema mrežama moguće je pregledati račun i odgovarajuću otpremnicu dvostrukim klikom na željeni red.  

*Tipke specifične*:   
> **Pretraži račune**: omogućuje pretraživanje popunjenih otpremnica.      
> **Obnovi kreiranje**: omogućuje obnavljanje cijele operacije, tj. u slučaju kreiranja više računa istovremeno, briše sve račune i vraća otpremnice u prethodno stanje.    
> **Obnovi račun**: omogućuje obnavljanje odabranog računa u kartici *Računi*.  