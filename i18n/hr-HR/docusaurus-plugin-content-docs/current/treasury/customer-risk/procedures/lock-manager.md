---
title: Upravljanje zaključavanjem (Lock Manager)
sidebar_position: 3
---

Obrazac se nalazi na putanji **Riznica > Rizik kupaca > Procedure > Upravljanje zaključavanjem (Lock Manager)**.

Ova funkcionalnost služi za upravljanje autorizacijama dokumenata koji prelaze odobreni kreditni limit kupca te za ručno blokiranje kupaca neovisno o raspoloživom kreditnom limitu.

Podsjećamo da upravljanje blokadama dokumenata zahtijeva prethodnu konfiguraciju [**matičnih podataka kupca**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) (za kupce koji podliježu kontroli kreditnog limita) te odgovarajućih tablica [**vrsta prodajnih dokumenata**](/docs/configurations/tables/sales/sales-order-types) (npr. vrste narudžbi, vrste otpremnica i sl.) kako bi se definiralo koji dokumenti podliježu kontroli i eventualnoj blokadi.

## Kartica Autorizacija

Korisnici s odgovarajućim ovlastima mogu pregledavati popis dokumenata koji su označeni za provjeru, blokirani, odobreni ili obrađeni.

U tablici je moguće promijeniti status iz **Blokiran dokument** u **Odobrenje izdano**, čime se omogućuje nastavak daljnjeg tijeka obrade povezanog dokumenta.

:::tip Informacija
Dvostrukim klikom na redak moguće je otvoriti dokument i pregledati sve njegove detalje.
:::

## Kartica Blokada kupaca

Ova kartica omogućuje prisilnu blokadu:

- narudžbi,
- otpremnica,
- ili oboje istovremeno,

za odabrane kupce tijekom definiranog razdoblja blokade.

### Kako blokirati kupca

Primjerice, ako je kupac imao nenaplaćenu bankovnu mjenicu ili drugo neplaćeno potraživanje, administracija može prisilno blokirati sve poslovne aktivnosti povezane s tim kupcem.

1. Otvorite obrazac **Upravljanje blokadama (Lock Manager)**.
2. U polje **Opis** odaberite kupca kojeg želite blokirati.
3. Aktivirajte opcije **Blokada narudžbi** i/ili **Blokada otpremnica** te unesite datum početka i završetka blokade.

:::note Napomena
Za ponovno aktiviranje kupca dovoljno je:

- unijeti **datum završetka valjanosti** blokade kako bi se zadržao povijesni zapis ili
- obrisati redak blokade iz sustava.

Sustav automatski evidentira korisnika te datum blokiranja i deblokiranja.
:::

Opcije **Autoriziraj narudžbu** i **Autoriziraj otpremnicu** zahtijevaju autorizaciju svakog dokumenta bez obzira na raspoloživi kreditni limit.

**Napomene** omogućuju unos slobodnih bilješki vezanih uz blokadu ili deblokadu kupca.