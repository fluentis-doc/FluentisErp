---
title: Pretraga lotova
sidebar_position: 2
description: Vodič za pretragu lotova i upravljanje njima unutar oblasti Logistika u sistemu Fluentis ERP.
schema: HowTo
tags: [Fluentis ERP, Logistika, Lotovi, Upravljanje skladištem]
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
keywords: [pretraga lotova, Logistika, Lotovi, Upravljanje skladištem]
---

# Pretraga lotova

Forma se otvara putem menija **Logistika > Šifarnik lotova** i omogućava pretragu, pregled i izmenu lotova prisutnih u sistemu.

## Kako izvršiti pretragu

1. Postavite željene filtere u formi za pretragu.  
2. Kliknite na dugme **Traži** na *traci menija* za prikaz rezultata u mreži.  
3. Za otvaranje detalja lota odaberite željeni lot i dvaput kliknite mišem ili kliknite na dugme **Izmeni**.

:::important
Moguće je izmeniti ili izbrisati samo lotove koji nisu referencirani u drugim dokumentima.
:::

## Posebna dugmad

> **Izmeni**: omogućava [izmenu unetog lota](/docs/logistics/lots-serial-numbers/lots-register);    
> **Otkaži**: omogućava brisanje lota ako nije referenciran ni u jednom dokumentu.

## Posebni filteri

- **Svi**: aktiviranjem ove oznake korisnik može filtrirati sve lotove prisutne u bazi podataka;  
- **Nezatvoreni**: aktiviranjem ove oznake korisnik može filtrirati samo otvorene lotove, odnosno samo lotove za koje još postoji zaliha u skladištu;  
- **Zatvoreni**: aktiviranjem ove oznake korisnik može filtrirati samo zatvorene lotove, odnosno samo lotove čija je zaliha jednaka nuli.

## Posebna polja

> *Napomena*: kliknite na znak **+** za otvaranje detalja reda.

- **Zatvoren**: ako je oznaka aktivirana, označava da je zaliha jednaka nuli;  
- **Količina**: prikazuje početnu količinu lota za svako skladište;  
- **Raspoloživa količina**: prikazuje raspoloživu količinu lota za svako skladište, odnosno količinu na zalihi umanjenu za količinu rezervisanu u različitim dokumentima. Raspoloživa količina može biti prikazana i kao nula ako se lot nalazi u statusu **Nije raspoloživ za automatsko preuzimanje**;  
- **Status lota**: prikazuje status lota. Ovim podatkom nije obavezno upravljati;  
- **Skladište**: prikazuje kod skladišta u kojem se lot nalazi.

## Sažetak i dodatne informacije

Funkcija **Pretraga lotova** omogućava brzo pronalaženje evidentiranih lotova i njihovo filtriranje prema statusu i raspoloživosti.  
Moguće je pristupiti detaljima svakog lota, izmeniti njegove podatke ili ga izbrisati, uz poštovanje uslova povezanosti sa drugim dokumentima.

**Dodatne informacije:**
- [Evidentiranje i izmena lotova](/docs/logistics/lots-serial-numbers/lots-register)  
- [Zajedničke funkcionalnosti formi](/docs/guide/common)