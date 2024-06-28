---
title: Barkodovi 
sidebar_position: 7
---

U ovoj Kartici možete unijeti eventualne alternativne kodove, poznate i kao barkodovi, koji predstavljaju artikl.

Barkodovi su trake s kodom koji sadrže neke od osnovnih informacija o kodiranju povezane s artiklom kojem su dodijeljeni i korisni su za operacije u skladištu. Ovi se kodovi čitaju putem određenih uređaja poznatih kao mobilni uređaji pomoću laserskih zraka ili LED traka. 

Bar kodovi mogu biti različitih vrsta. 
Dvije vrste kojima upravlja baza podataka su:
- EAN13 (označava da maksimalna duljina barkoda može biti 13 znakova)   
- EAN128 (označava da barkod mora imati paran broj znakova)

U **Fluentis ERP** nisu unaprijed definirani parametri koji ukazuju kako postaviti barkod kodiranje da bi se poštovali standardi EAN13 i 128, ali mogu se primijeniti prilagođeni algoritmi koji slijede standarde i provjeravaju uneseni barkod kako bi se osiguralo da poštuje navedene norme.

Obrazac se sastoji od mreže unutar koje se unosi **Novi** barkod putem gumba **Umetni** koji se nalazi na ribbor bar, ili izravno na novi redak.

U polju **Tip barkoda** odabire se, putem odgovarajuće kombinacije, vrsta barkoda koju želite kodirati, a u polje **Barkod** unosi se kod barkoda.

![](/img/it-it/erp-home/registers/items/create-new-items/item-registry/barcode/barcode_01.png)

*Posebni gumbi*:

> **Provjera**: pritiskom na ovaj gumb, sustav će provjeriti odgovara li kod navedenim pravilima o duljini koju kod treba imati prema vrsti koju unosimo;  
> **Izbriši barkodove**: omogućuje brisanje prethodno unesenih barkodova.