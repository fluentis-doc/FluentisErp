---
title: Zaliha artikla
sidebar_position: 5
---

:::important Čemu služi
Funkcija **Zaliha artikla** omogućava operaterima brz pregled zaliha skladišta za svaki evidentirani artikl. Putem interaktivne mreže moguće je dobiti detaljne informacije o knjigovodstvenim zalihama, mernim jedinicama i lotovima.

Pored toga, funkcija omogućava analizu zaliha grupisanih po artiklu, skladišnoj lokaciji ili projektu, pružajući potpun pregled raspoloživosti materijala. Ova procedura olakšava praćenje zaliha i omogućava preciznije i informisanije upravljanje skladišnim operacijama, čime doprinosi optimizaciji ukupne logističke efikasnosti.
:::

Ova procedura koristi se za prikaz zaliha artikla.

Obrazac sadrži mrežu čije se kolone menjaju u zavisnosti od filtera postavljenih za pretragu.

Na primer, ako se očita samo šifra skladišne lokacije, pritiskom na dugme **Pretraži** u mreži rezultata biće prikazane sledeće kolone:

> **Artikl**: prikazuje šifru artikla;     
> **Zaliha (osn. JM)**: prikazuje zalihu u osnovnoj (glavnoj) mernoj jedinici;      
> **Merna jedinica**: prikazuje mernu jedinicu artikla;          
> **Zaliha**: prikazuje se samo ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu na osnovu skladišnih kretanja;         
> **Zaliha (FC)**: prikazuje se samo ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu pomoću faktora konverzije;               
> **Lot**: prikazuje lot artikla;       
> **Opis artikla**: prikazuje opis artikla;      
> **Varijanta**: prikazuje šifru varijante artikla;    
> **Opis varijante**: prikazuje opis varijante artikla.     

Dok će se, očitavanjem artikla za koji se želi prikazati zaliha i pritiskom na dugme **Pretraži**, u mreži rezultata prikazati sledeće kolone:

> **Skladišna lokacija**: prikazuje skladišnu lokaciju artikla;        
> **Artikl**: prikazuje šifru artikla;     
> **Zaliha (osn. JM)**: prikazuje zalihu u osnovnoj (glavnoj) mernoj jedinici;      
> **Merna jedinica**: prikazuje mernu jedinicu artikla;          
> **Zaliha**: prikazuje se samo ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu na osnovu skladišnih kretanja;         
> **Zaliha (FC)**: prikazuje se samo ako je oznaka **Podrazumevano WMS** aktivna na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item). Ova vrednost prikazuje zalihu izraženu u alternativnoj mernoj jedinici, izračunatu pomoću faktora konverzije;               
> **Lot**: prikazuje lot artikla;       
> **Varijanta**: prikazuje šifru varijante artikla;    
> **Opis varijante**: prikazuje opis varijante artikla.

:::note Napomena
Kolone koje se odnose na zalihu su:

- *Zaliha (osn. JM)* – zaliha u osnovnoj (glavnoj) mernoj jedinici
- *Zaliha*
- *Zaliha (FC)* – (FC = faktor konverzije)

Ako se koristi oznaka **Podrazumevano WMS** na kartici [Alternativne merne jedinice šifarnika artikla](/docs/erp-home/registers/items/create-new-item), prva kolona prikazuje zalihu u osnovnoj mernoj jedinici artikla, druga kolona prikazuje zalihu izraženu u alternativnoj mernoj jedinici dobijenu zbirom skladišnih kretanja, dok treća kolona prikazuje zalihu izraženu u alternativnoj mernoj jedinici izračunatu pomoću faktora konverzije.

Ako oznaka **Podrazumevano WMS** nije aktivna, kolone *Zaliha* i *Zaliha (FC)* neće biti popunjene.
:::

**Parametri za ulaz/izlaz robe** koje je potrebno definisati u tabeli [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Ovaj parametar potrebno je definisati samo ako se želi filtrirati zaliha za određeno skladište (predložak skladišta može ostati prazan). U suprotnom, ako parametar nije definisan, prikazaće se zalihe svih skladišta.

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći da odabere samo jedno od definisanih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).