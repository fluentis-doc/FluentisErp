---
title: Upravljanje zaključavanjem 
sidebar_position: 3
---

Obrazac se nalazi u Put Riznica > Rizik Klijenta > Procedure > Upravljanje zaključavanjem.

Putem ovog postupka upravlja se autorizacijom dokumenata koji premašuju odobrene kreditne limite, kao i izravnim blokiranjem klijenta, neovisno o prekoračenju limita.

Podsjećamo da blokiranje dokumenata pretpostavlja ispravnu postavku [**Cjenici Kupaca / dobavljača**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) (za klijente podložne kontroli limita i u skladu s odabranim načinom upravljanja) te odgovarajućih tablica za [**vrste prodajnih dokumenata**](/docs/configurations/tables/sales/sales-order-types) (npr. Vrsta narudžbe, Vrsta otpremnice itd.), kako bi se definiralo koje vrste dokumenata podliježu kontroli i eventualnom blokiranju.




## Kartica autorizacija

Korisnik koji ima pristupna prava može pregledavati popis označenih, blokiranih, autoriziranih dokumenata itd. 

U prikazanoj tablici moguće je promijeniti status iz ***Dok. blokiran*** u ***Autorizacija odobrena*** kako bi se omogućio nastavak dokumentacijskog tijeka za taj dokument. 

:::tip Info
Dvostrukim klikom na redak tablice moguće je otvoriti sam dokument i pregledati sve njegove detalje.
:::

## Kartica **Blokada klijenata**

Omogućuje ručno postavljanje ***Blokade narudžbi*** ili ***Blokade otpremnica*** (ili oboje, putem odgovarajućih oznaka) za određeni popis klijenata, uz definiranje vremenskog razdoblja blokade. 

### Kako blokirati klijenta

Na primjer, ako klijent nije podmirio ratu (npr. nepodmirena mjenica), financijsko odjeljenje može odlučiti blokirati sve poslovne transakcije s tim klijentom. 

1. pristupiti ovom obrascu
2. ispuniti polje Opis unosom matice klijenta kojeg treba blokirati
3. aktivirati oznake Blokada narudžbi i/ili Blokada otpremnica te upisati datume početka i kraja blokade

:::note[Napomena]
Za ponovno omogućavanje poslovanja s klijentom dovoljno je unijeti **Datum završetka valjanosti zaključavanja** (čime se zadržava povijesni zapis blokade) ili potpuno obrisati red iz sustava. 
Sustav bilježi **korisnika i datum blokade i deblokade**.
:::




Oznake **Autoriziraj narudžbu** i **Autoriziraj Ovlaštene prodajne napomene** omogućuju da se za narudžbu ili otpremnicu uvijek traži autorizacija, neovisno o tome postoji li raspoloživi kreditni limit ili ne.

**Napomene**: omogućuju unos slobodnog komentara uz radnju blokade (ili deblokade, ako se redak zadrži).
