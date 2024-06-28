---
title: Prijem robe
sidebar_position: 1
---

Ovaj postupak koristi se prilikom prijema robe, za identifikaciju artikala, kreiranje i utovar dostavnice.

Obrazac se otvara na filtru dobavljačkih narudžbi, gdje je moguće pregledati sve narudžbe u statusu *Neispunjeno* i *Djelomično ispunjeno*. 
Rezultati se mogu filtrirati prema *Broju*, *Tipu narudžbe*, *Godini*, *Artiklu* i *Dobavljaču*.
Nakon odabira jedne ili više dobavljačkih narudžbi, moguće je pregledati neispunjene i djelomično ispunjene artikle pritiskom na gumb *Pregled*, dok se putem gumba *Kreiranje Dostavnice* može započeti unos artikala koji će biti uključeni u dostavnicu.

Glavni obrazac se sastoji se od sljedećih kartica: 

- **Kreiraj primku**  
Nakon odabira dobavljačke narudžbe, putem gumba *Kreiraj primku* moguće je otvoriti formu na kartici *Kreiraj primku*, gdje će se fokus automatski postaviti na polje *Primka* kako bi se prvo unio broj dokumenta. Također, bit će prikazane informacije o prvom artiklu na dobavljačkoj narudžbi, kao i informacije o glavi same narudžbe.

> **Skladište**: označava skladište u kojem će se obaviti promjene;         
> **Uzrok skladišta**: označava uzrok promjene u skladištu;     
> **Tip otpremnice**: označava tip otprremnice koji će se koristiti pri stvaranju dokumenta o prijevozu;                  
> **Datum**: označava datum otpremnice koji se stvara; pretpostavljeni je današnji datum;       
> **Narudžba**: označava broj dobavljačke narudžbe;             
> **Artikl**: označava klasu, kod i opis artikla koji će se potvrditi;            
> **Broj linije**: označava redni broj artikla na dobavljačkoj narudžbi;           
> **Barkod**: omogućuje čitanje barkodova putem odgovarajućeg čitača za obavljanje različitih operacija;      
> **Lot dobavljača**: omogućuje unos broja dobavljačkog lota;  
> **LT**: omogućuje generiranje internog broja lota;           
> **Datum isteka**: označava datum isteka lota;          
> **Količina naručena**: označava naručenu količinu;   
> **Preostala količina**: označava preostalu količinu;         
> **Količina**: označava količinu koja će se utovariti u skladište;   
> **Predloži mjesto**: označava predloženu lokaciju;               
> **Lokacija**: omogućuje unos lokacije varirajući od predložene.  

Pomoću polja **Unesite kod** (koristeći čitač barkoda) moguće je unijeti podatke o lotu, lokaciji, očitanoj količini i artiklu u slučaju da se želi utovariti drugi artikl osim onog koji je predložen, ali koji je ipak prisutan u prethodno odabranim narudžbama. Nakon unosa podataka o trenutačnom artiklu, mogu se potvrditi pritiskom na gumb **Potvrda**.       
Kada su potvrđeni svi retci narudžbe, automatski ćete biti prebačeni na kartici **Detalji otpremnice**, gdje pomoću gumba **Zatvori** možete spremiti dostavnicu i izvršiti odgovarajuće promjene u skladištu.  

**Posebni gumbi**
> **Potvrdi**: potvrđuje unesene podatke za odabrani artikl;             
> **Potvrdi + Ispiši**: potvrđuje unesene podatke za odabrani artikl i otvara skočni prozor koji omogućuje ispis naljepnica;      
> **Ispiši**: omogućuje ispis naljepnica;        
> **Zatvori**: omogućuje spremanje stvorene dostavnice i stvaranje odgovarajućih promjena u skladištu;      
> **Sljedeći predmet**: omogućuje prijelaz na sljedeći artikl prisutan u dobavljačkoj narudžbi;        
> **Prethodni predmet**: omogućuje prijelaz na prethodni artikl prisutan u dobavljačkoj narudžbi.  

- **Detalji Otpremnice**       
Na ovom obrascu prikazane su sve informacije o stvorenim redovima.

**Posebni gumbi**
> **Izbriši artikle**: omogućuje brisanje odabrane stavke s dostavnice.  

- **Detalji narudžbe**: 
Na ovom obrascu prikazane su sve informacije o odabranoj dobavljačkoj narudžbi.

**Parametri za ulaz/izlaz** robe trebaju se unijeti u tablicu [Parametri za ulaz/izlaz robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scs | Fluentis.FluentisErp.Mvvm.Scs.ReadWrite.Views | ReceivingGoodsScsEditDocument |

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).
