---
title: Pretraga plafona
sidebar_position: 3
---

Obrazac za pretragu plafona:

- nalazi se u meniju **Administracija > Izjave > Plafon**
- omogućava korisniku pretragu prethodno kreiranih obračuna plafona radi njihovog pregleda, izmene ili brisanja.

Putem ovog obrasca moguće je ručno uneti i novi obračun plafona pomoću dugmeta [**Novi plafon**](/docs/finance-area/declarations/declarations/plafond/plafond-management).

## Dugmad na traci menija

> - **Traži:** Dugme za pretragu obračuna plafona prema filterima postavljenim u zaglavlju obrasca.
> - **Novo:** Otvara obrazac za unos novog obračuna.
> - **Izmeni:** Omogućava izmenu prethodno unetog obračuna.
> - **Prikaži:** Omogućava pregled prethodno unetog obračuna.
> - **Obriši:** Briše prethodno uneti obračun.

## Tabele i početni parametri za upravljanje plafonom

Postavke obračuna plafona zasnivaju se isključivo na tabeli [**Stope načina obračuna PDV-a**](/docs/configurations/tables/finance/vat-rates):

Polja u tabeli koja su relevantna:

**Plafon**: flag definiše koje su PDV stope povezane sa izjavama o nameri. Ova oznaka određuje stopu koja **"troši"** ukupni raspoloživi plafon iz meseca u mesec za redovnog izvoznika.

**Inostrana prodaja za plafon**: flag označava PDV stope koje se pojavljuju u prodajnim knjiženjima za godinu yyyy, a koje **povećavaju** raspoloživi plafon za godinu yyyy+1 za redovnog izvoznika.

Vrsta računovodstvene stavke i podaci o partneru (naziv ili šifra kupca) nisu relevantni za obračun. Kreditne note (odobrenja) umanjuju iznose knjiženih stavki.