---
title: Skidanje otpremnica sa skladišta
sidebar_position: 1
---

Masovna procedura pokreće se putem izbornika **Prodaja > Otpremnice > Procedure > Skidanje otpremnica sa skladišta**.  

Ova procedura omogućuje izvođenje ili poništavanje automatskih operacija skidanja sa skladišta za artikle koji se nalaze u otpremnici.       
Podsjećamo da se ista operacija može izvršiti i unutar [Zaglavlja](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) pojedine otpremnice pomoću tipke [Automatsko skidanje](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). 

:::tip Zapamti
Ako dokument sadrži **fiktivne artikle**, procedura će uzeti u obzir *Vrstu nabave* definiranu u MRP parametrima artikla:  
- Artikli tipa *Nabava* neće biti uključeni u skladišnu evidenciju.     
- Artikli tipa *Proizvodnja* ili *Kooperacija* bit će evidentirani u skladištu prema prvoj razini sastavnice (BOM-a).  
:::

Masovna procedura sastoji se od tri kartice koje su opisane u nastavku.

### Filter

Na ovoj kartici korisnik može pretražiti i prenijeti otpremnice koje imaju označenu opciju *Ispisano* te su time spremne za skidanje sa skladišta.      

*Posebne tipke*:

> **Pretraga** – omogućuje pretraživanje otpremnica spremnih za skidanje.    
> **Skidanje** – omogućuje izvođenje skidanja odabranih otpremnica sa skladišta, prema algoritmima i parametrima definiranima u sljedećoj kartici *Parametri*.


### Parametri

U ovom dijelu korisnik može odrediti način postupanja s iznimkama na stavkama artikala.  

Ako stavke otpremnice nemaju definirano skladište i uzrok (tj. tip) za skidanje, dostupne su sljedeće opcije:

- **Ne skidaj cijelu otpremnicu** – ne dopušta djelomično skidanje otpremnice.    
- **Preskoči artikl bez skladišta i uzroka** – omogućuje djelomično skidanje dokumenta.         
- **Koristi sljedeće podatke kao skladište i uzrok** – za sve artikle bez definirane lokacije i uzroka u odabranim otpremnicama, program će primijeniti vrijednosti navedene u poljima *Skladište* i *Uzrok* (osigurava potpuno skidanje dokumenta).  

*Posebna tipka*

> **Spremi parametre** – omogućuje spremanje zadanih parametara za evidenciju.  

Nakon što se odaberu otpremnice (u kartici *Filtar*) i postave parametri, skidanje se pokreće pomoću tipke *Skidanje*.

### Sažetak

Na ovoj kartici korisnik može pretraživati, pregledavati i poništavati izvršene operacije skidanja, pod uvjetom da zadovoljavaju specifične uvjete za brisanje skladišnih evidencija.  

Podaci u donjim tablicama, **Otpremnica** i **Evidencija**, odnose se na zapis skidanja odabran u gornjoj tablici (nakon filtriranja). U tim se tablicama također može pregledati otpremnica i njezina skladišna evidencija (dvostrukim klikom na redak).

*Posebne tipke*:
> **Pretraga** – pretražuje otpremnice koje su skinute; rezultati se prikazuju u tablici rezultata.    
> **Brisanje** – briše u potpunosti odabrane operacije skidanja, ako zadovoljavaju uvjete za brisanje skladišnih evidencija.     
> **Povrati otpremnicu** – poništava odabrane operacije skidanja za otpremnicu prikazanu u tablici s detaljima.