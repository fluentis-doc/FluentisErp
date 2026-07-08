---
title: Pretraga lotova
sidebar_position: 2
description: Vodič za pretraživanje lotova i upravljanje njima unutar područja Logistika u sustavu Fluentis ERP.
schema: HowTo
tags: [Fluentis ERP, Logistika, Lotovi, Upravljanje skladištem]
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
keywords: [pretraga lotova, Logistika, Lotovi, Upravljanje skladištem]
---

# Pretraga lotova

Forma se otvara putem izbornika **Logistika > Šifarnik lotova** i omogućuje pretraživanje, pregled i izmjenu lotova prisutnih u sustavu.

## Kako izvršiti pretragu

1. Postavite željene filtre u formi za pretraživanje.  
2. Kliknite gumb **Traži** na *traci izbornika* za prikaz rezultata u mreži.  
3. Za otvaranje detalja lota odaberite željeni lot i dvaput kliknite mišem ili kliknite gumb **Izmijeni**.

:::important
Moguće je izmijeniti ili izbrisati samo lotove koji nisu referencirani u drugim dokumentima.
:::

## Posebni gumbi

> **Izmijeni**: omogućuje [izmjenu unesenog lota](/docs/logistics/lots-serial-numbers/lots-register);    
> **Otkaži**: omogućuje brisanje lota ako nije referenciran ni u jednom dokumentu.

## Posebni filtri

- **Svi**: aktiviranjem ove oznake korisnik može filtrirati sve lotove prisutne u bazi podataka;  
- **Nezatvoreni**: aktiviranjem ove oznake korisnik može filtrirati samo otvorene lotove, odnosno samo lotove za koje još postoji zaliha u skladištu;  
- **Zatvoreni**: aktiviranjem ove oznake korisnik može filtrirati samo zatvorene lotove, odnosno samo lotove čija je zaliha jednaka nuli.

## Posebna polja

> *Napomena*: kliknite znak **+** za otvaranje detalja retka.

- **Zatvoren**: ako je oznaka aktivirana, označava da je zaliha jednaka nuli;  
- **Količina**: prikazuje početnu količinu lota za svako skladište;  
- **Raspoloživa količina**: prikazuje raspoloživu količinu lota za svako skladište, odnosno količinu na zalihi umanjenu za količinu rezerviranu u različitim dokumentima. Raspoloživa količina može biti prikazana i kao nula ako se lot nalazi u statusu **Nije raspoloživ za automatsko preuzimanje**;  
- **Status lota**: prikazuje status lota. Ovim podatkom nije obvezno upravljati;  
- **Skladište**: prikazuje kod skladišta u kojem se lot nalazi.

## Sažetak i dodatne informacije

Funkcija **Pretraga lotova** omogućuje brzo pronalaženje evidentiranih lotova i njihovo filtriranje prema statusu i raspoloživosti.  
Moguće je pristupiti detaljima svakog lota, izmijeniti njegove podatke ili ga izbrisati, uz poštovanje uvjeta povezanosti s drugim dokumentima.

**Dodatne informacije:**
- [Evidentiranje i izmjena lotova](/docs/logistics/lots-serial-numbers/lots-register)  
- [Zajedničke funkcionalnosti formi](/docs/guide/common)