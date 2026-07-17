---
title: Zaliha artikla
sidebar_position: 5
---

:::important Čemu služi
Funkcija **Zaliha artikla** omogućuje operaterima brz pregled zaliha skladišta za svaki evidentirani artikl. Putem interaktivne mreže moguće je dobiti detaljne informacije o knjigovodstvenoj zalihi, mjernim jedinicama i lotovima.

Osim toga, funkcija omogućuje analizu zaliha grupiranih po artiklu, skladišnoj lokaciji ili projektu, pružajući cjelovit pregled raspoloživosti materijala. Ova procedura olakšava praćenje zaliha i omogućuje preciznije te informiranije upravljanje skladišnim operacijama, čime doprinosi optimizaciji ukupne logističke učinkovitosti.
:::

Ova procedura koristi se za prikaz zalihe artikla.

Obrazac sadrži mrežu čiji se stupci mijenjaju ovisno o filtrima postavljenima za pretragu.

Primjerice, ako se očita samo šifra skladišne lokacije, pritiskom na gumb **Pretraži** u mreži rezultata bit će prikazani sljedeći stupci:

> **Artikl**: prikazuje šifru artikla;     
> **Zaliha (osn. JM)**: prikazuje zalihu u osnovnoj (glavnoj) mjernoj jedinici;      
> **Mjerna jedinica**: prikazuje mjernu jedinicu artikla;          
> **Zaliha**: prikazuje se samo ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu na temelju skladišnih kretanja;         
> **Zaliha (FC)**: prikazuje se samo ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu pomoću faktora pretvorbe;               
> **Lot**: prikazuje lot artikla;       
> **Opis artikla**: prikazuje opis artikla;      
> **Varijanta**: prikazuje šifru varijante artikla;    
> **Opis varijante**: prikazuje opis varijante artikla.     

Dok će se, očitavanjem artikla za koji se želi prikazati zaliha te pritiskom na gumb **Pretraži**, u mreži rezultata prikazati sljedeći stupci:

> **Skladišna lokacija**: prikazuje skladišnu lokaciju artikla;        
> **Artikl**: prikazuje šifru artikla;     
> **Zaliha (osn. JM)**: prikazuje zalihu u osnovnoj (glavnoj) mjernoj jedinici;      
> **Mjerna jedinica**: prikazuje mjernu jedinicu artikla;          
> **Zaliha**: prikazuje se samo ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu na temelju skladišnih kretanja;         
> **Zaliha (FC)**: prikazuje se samo ako je oznaka **Zadano WMS** aktivna na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrijednost prikazuje zalihu izraženu u alternativnoj mjernoj jedinici, izračunatu pomoću faktora pretvorbe;               
> **Lot**: prikazuje lot artikla;       
> **Varijanta**: prikazuje šifru varijante artikla;    
> **Opis varijante**: prikazuje opis varijante artikla.     

:::note Napomena
Stupci koji se odnose na zalihu su:

- *Zaliha (osn. JM)* – zaliha u osnovnoj (glavnoj) mjernoj jedinici
- *Zaliha*
- *Zaliha (FC)* – (FC = faktor pretvorbe)

Ako se koristi oznaka **Zadano WMS** na kartici [Alternativne mjerne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item), prvi stupac prikazuje zalihu u osnovnoj mjernoj jedinici artikla, drugi stupac prikazuje zalihu izraženu u alternativnoj mjernoj jedinici dobivenu zbrojem skladišnih kretanja, dok treći stupac prikazuje zalihu izraženu u alternativnoj mjernoj jedinici izračunatu pomoću faktora pretvorbe.

Ako oznaka **Zadano WMS** nije aktivna, stupci *Zaliha* i *Zaliha (FC)* neće biti popunjeni.
:::

**Parametri za ulaz/izlaz robe** koje je potrebno definirati u tablici [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Ovaj parametar potrebno je definirati samo ako se želi filtrirati zaliha za određeno skladište (predložak skladišta može ostati prazan). U suprotnom, ako parametar nije definiran, prikazat će se zalihe svih skladišta.

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći odabrati samo jedno od definiranih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).