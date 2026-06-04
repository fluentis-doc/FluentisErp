---
title: Pretraga plafona
sidebar_position: 3
---

Obrazac za pretragu plafona: 

- nalazi se u izborniku Administracija > Izjave > Plafon

- omogućuje korisniku pretraživanje prethodno kreiranih izračuna plafona s ciljem njihovog pregleda, uređivanja ili brisanja.

Putem ovog obrasca moguće je ručno unijeti i novi izračun plafona putem tipke [**Novi plafon**](/docs/finance-area/declarations/declarations/plafond/plafond-management).



## Tipke u traci izbornika

> - **Pretraga:** Tipka za pretraživanje izračuna plafona prema filtrima postavljenima u zaglavlju obrasca.
> - **Nova:** Otvara obrazac za unos novog izračuna.
> - **Uredi:** Omogućuje izmjenu prethodno unesenog izračuna.  
> - **Prikaz:** Omogućuje pregled prethodno unesenog izračuna.  
> - **Izbriši:** Briše prethodno uneseni izračun.  


## Tablice i početni parametri za upravljanje plafonom  

Postavke izračuna plafona temelje se isključivo na tablici [**Stope načina obračuna PDV-a**](/docs/configurations/tables/finance/vat-rates): 

Polja u tablici koja su relevantna:

**Plafon**: flag definira koje PDV stope su povezane s izjavama o namjeri: ova oznaka označava stopu koja "**troši**" opći raspoloživi plafon iz mjeseca u mjesec u svojstvu redovitog izvoznika.  

**Inozemna prodaja za plafon**: flag označava PDV stope koje se pojavljuju u prodajnim knjiženjima za godinu yyyy, a koje **povećavaju** raspoloživi plafon za godinu yyyy+1 u svojstvu redovitog izvoznika.  

Vrsta računovodstvene stavke i podaci o partneru (naziv ili šifra kupca) nisu relevantni za izračun. Kreditne note (odobrenja) umanjuju iznose iz knjiženih stavki.  
