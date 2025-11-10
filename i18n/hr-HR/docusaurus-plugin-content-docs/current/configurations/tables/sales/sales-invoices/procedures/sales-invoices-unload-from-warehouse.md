---
title: Preuzimanje prodajnih računa sa skladišta  
sidebar_position: 2
---

Procedura se otvara putem puta **Prodaja > Otpremnice > Procedure > Preuzimanje računa sa skladišta**.    

Ova procedura omogućuje izvršavanje/obnavljanje operacija automatskog preuzimanja artikala sa skladišta prisutnih u računu.  

:::tip Zapamti
Ako dokument sadrži **fiktivne artikle**, procedura će uzeti u obzir *Tip nabave* definiranu u MRP parametrima artikla:  
- Artikli tipa *Kupovina* neće biti uključeni u skladišnu evidenciju.       
- Artikli tipa *Proizvodnja* ili *Račun rada* bit će evidentirani u skladištu s prvim nivoom liste materijala.
:::

### Filtriranje

U ovoj kartici korisnik može pretraživati i prenijeti račune koji imaju postavljen flag *Ispisan*.

**Datum skladišne registracije**: omogućuje specificiranje datuma vezanog uz preuzimanje sa skladišta, osim ako je aktivirana opcija *Kreiraj registraciju s datumom dokumenta* u *Parametri računa prodaje > kartica Preuzimanje*.    

*Tipke specifične*:  

> **Traži**: omogućuje pretraživanje računa za preuzimanje.   
> **Preuzmi**: omogućuje izvršenje preuzimanja odabranih računa sa skladišta, prema algoritmima preuzimanja i parametrima unesenim u sljedećoj kartici *Parametri*.   

:::note NOTA
Samo računi tipa **Neposredno** koji ne potječu iz otpremnice mogu se knjižiti na skladište.  

Ako je račun generiran na temelju otpremnice, potrebno je prvo izvršiti preuzimanje otpremnica. Kada su sve otpremnice u računu preuzete, aktivacija flag-a *Ispisan* na računu automatski aktivira flag *Preuzeto*.  

Izuzetak: ako je u tipu računa aktiviran flag  [*Odvoji otpremnicu*](/docs/configurations/tables/sales/invoices-type), moguće je knjižiti na skladište i prodajni račun.  

Računi koji nisu neposredni nikada se ne mogu knjižiti na skladište; flag *Preuzeto* neće se aktivirati ni nakon preuzimanja svih otpremnica u računu.
:::

### Parametri

U ovoj kartici korisnik može definirati kako se tretiraju iznimke za stavke računa.

Ako stavke računa nemaju definirano skladište i knjižnu oznaku, dostupne opcije su:  

- **Ne izvršavaj preuzimanje cijelog računa**: ne dopušta djelomično preuzimanje otpremnice; 

- **Preskoči artikl bez skladišta i knjižne oznake**: dopušta djelomično preuzimanje dokumenta; 

- **Prihvati sljedeće podatke kao skladište i knjižnu oznaku**: za sve artikle bez skladišta i knjižne oznake u odabranim računima, koristi podatke unesene u polja *Skladište* i *Knjižna oznaka* (osigurava potpuno preuzimanje dokumenta).  

*Tipka specifična*:

> **Spremi parametre**: omogućuje spremanje parametara za registraciju.

Nakon odabira računa (u kartici *Filtriranje*) i postavljanja parametara, računi se mogu preuzeti pomoću tipke *Preuzmi*.

### Sažetak

U ovoj kartici korisnik može pretraživati, pregledavati i poništavati operacije preuzimanja koje zadovoljavaju uvjete brisanja skladišnih registracija.  

Podaci u mrežama ispod, **Računi** i **Registracija**, odgovaraju odabranoj registraciji preuzimanja u gornjoj mreži (nakon filtriranja). Također, u ovim mrežama moguće je pregledati račun i njegovu skladišnu registraciju dvostrukim klikom na red.  

*Tipke specifične*:
> **Pretraži preuzete račune**: pretražuje već preuzete račune i prikazuje rezultate u mreži.     
> **Poništi preuzimanje**: briše u potpunosti odabrane operacije preuzimanja u mreži rezultata.  
> **Obnovi račune**: briše odabrane operacije preuzimanja za račun prikazan u mreži detalja.



<iframe width="560" height="315" src="https://www.youtube.com/embed/MWEUxnmD1hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>