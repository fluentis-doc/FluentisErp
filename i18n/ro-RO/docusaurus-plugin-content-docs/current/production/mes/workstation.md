---
title: Workstation
description: Gestionarea și configurarea stațiilor de lucru în MES Fluentis, inclusiv asocieri la resursele de producție.
keywords:
  - MES Fluentis
  - Workstation
  - Resurse de producție
  - Configurare MES
  - Centre de lucru
sidebar_position: 3
schema: TechArticle
tags:
  - MES
  - Producție
  - Workstation
  - Fluentis
last_update:
  author: Fluentis Documentation Team
---

# Workstation

:::important Utilizare
Tabelul dedicat permite codificarea stațiilor de lucru, căutarea, modificarea și asocierea acestora la resursele operaționale.
:::

Sistemul oferă o gestionare structurată a stațiilor de lucru, permițând utilizatorilor să:

- Introducă noi codificări.
- Căute stații de lucru existente prin filtre dedicate.
- Asocieze una sau mai multe resurse.
- Influențeze comportamentul de încărcare al MES la pornire, în funcție de resursele asociate.

## Gestionara stații de lucru

Tabelul permite gestionarea codificării diferitelor tipuri de *stații de lucru*.

Permite introducerea înregistrărilor noi sau căutarea celor deja existente pentru a le vizualiza, modifica sau șterge.

## Căutare stații de lucru

Form-ul de căutare este compus din:  
- **Zona de filtre**: permite setarea criteriilor de căutare.
- **Tabelul cu rezultate**: afișează lista stațiilor de lucru găsite.

### Procedura de căutare

1. Setați filtrele dorite.
2. Faceți clic pe butonul **Caută**.
3. Vizualizați rezultatele în tabel.

## Inserare stație de lucru

Pentru a crea o nouă codificare:

1. Faceți clic pe primul rând gol din tabel sau apăsați **Nou**.
2. Completați următoarele câmpuri:
   - **Cod** și **Descriere**: numele și descrierea calculatorului care va funcționa ca stație de lucru.  
     :::note
     Numele PC-ului poate fi obținut executând comanda `hostname` din promptul de comandă.
     :::

3. În tabelul secundar asociați **resursele**.

## Asociere resurse

În acest tabel este posibilă asocierea *resurselor* care pot lucra pe fiecare stație de lucru.
- În cazul în care pentru o stație de lucru este asociată o singură resursă (ex. de tip centru de lucru), la pornire MES va încărca automat acea resursă și toate fazele deja începute asociate acesteia.      
Exemplu de stație de lucru dedicată unui centru de lucru.        
- În cazul în care pentru o stație de lucru sunt asociate mai multe resurse (ex. de tip centru de lucru), la pornirea MES nu va fi încărcată niciuna dintre ele și utilizatorul va putea selecta doar una dintre resursele asociate.      
Exemplu de stație de lucru dedicată unui departament unde se vor declara toate centrele de lucru ale acelui departament.     
- În cazul în care, însă, pentru o stație de lucru nu este asociată nicio resursă, la pornirea MES nu va fi încărcată niciuna dintre ele și utilizatorul va putea selecta orice resursă introdusă în tabelul [Resurse de producție](/docs/production/mes/production-resources).       
Exemplu de stație de lucru dedicată unui operator care va declara activitățile pentru toate centrele de lucru.

## Rezumat și detalii suplimentare

Stațiile de lucru din MES Fluentis permit:

- Definirea locațiilor operaționale utilizate în procesul de producție.
- Asocierea de resurse individuale sau multiple, cu impact direct asupra comportamentului sistemului.
- Automatizarea sau personalizarea încărcării fazelor de producție.
- Gestionarea registrelor printr-un form structurat cu funcții de căutare, inserare și modificare.

Pentru detalii suplimentare:

- [Resurse de producție](/docs/production/mes/production-resources)  
- [Funcționalități comune](/docs/guide/common)