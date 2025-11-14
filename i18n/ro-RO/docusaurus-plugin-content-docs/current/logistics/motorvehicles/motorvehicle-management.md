---
title: Gestionare autovehicul
description: Gestionarea și codificarea autovehiculelor în modulul Logistică al aplicației Fluentis ERP.
keywords:
  - autovehicul
  - gestionare autovehicule
  - logistică
  - tipuri de autovehicule
  - Fluentis ERP
sidebar_position: 1
schema: TechArticle
tags:
  - logistică
  - autovehicule
  - configurare
last_update:
  author: Fluentis Documentation Team
  date: 13-11-2025
---

# Gestionare autovehicul

Această secțiune descrie procedura de gestionare și codificare a **autovehiculelor** în modulul **Logistică**, cu indicații despre căutare, inserare și câmpuri specifice.

Tabelul se găsește pe calea **Logistică > autovehicule > Gestionare autovehicul**.

Datele prezente în acest tabel sunt utilizate pentru a defini și clasifica diferitele tipuri de autovehicule create.  
Se pot insera noi înregistrări, căuta cele deja existente pentru a le vizualiza, modifica sau șterge.

## Caută gestionare autovehicul

Formularul este compus dintr-o zonă de *filtru* și una de *rezultat*.  
După ce setați filtrele dorite, apăsați butonul **Caută** pentru a vizualiza rezultatele în tabel.

## Inserare gestionare autovehicul

Pentru a insera un nou **autovehicul**, faceți clic pe primul rând gol din tabel sau apăsați butonul **Nou**.  

Câmpurile obligatorii care trebuie completate sunt:
- **Cod**
- **Descriere**

### Câmpuri specifice

> **Tip autovehicul**: definește tipul de autovehicul și poate fi codificat în tabelul [Tip autovehicul](/docs/configurations/tables/logistics/motorvehicle-types/).  
> **Cod**: cod unic de identificare al autovehiculului.  
> **Descriere**: descriere textuală a autovehiculului.  
> **Clasă / Cod / Descriere**: permite asocierea autovehiculului cu un articol existent în registru, introducând clasa, codul și descrierea.

## Rezumat și detalii suplimentare 

Acest ghid explică modul de configurare și gestionare a **autovehiculelor** în Fluentis ERP, specificând câmpurile obligatorii și relațiile cu tabelele *tip autovehicul* și *articole*.

Pentru detalii suplimentare:
- [Tip autovehicul](/docs/configurations/tables/logistics/motorvehicle-types/)
- [Consum materiale](/docs/logistics/motorvehicles/material-consumption/)
- [Funcționalități, butoane și câmpuri comune](/docs/guide/common)