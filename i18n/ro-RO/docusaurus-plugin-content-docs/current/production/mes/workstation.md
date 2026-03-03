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
Introducerea stațiilor de lucru<!-- workstation --> din **MES Fluentis** este esențială pentru gestionarea eficientă a resurselor și a operațiunilor de producție.  
Tabelul dedicat permite codificarea stațiilor de lucru<!-- workstation -->, căutarea, modificarea și asocierea acestora la resursele operaționale.
:::

Sistemul oferă o gestionare structurată a stațiilor de lucru<!-- workstation -->, permițând utilizatorilor să:

- Introducă noi codificări.
- Căute stații de lucru<!-- workstation --> existente prin filtre dedicate.
- Asocieze una sau mai multe resurse<!-- risorse -->.
- Influențeze comportamentul de încărcare al MES la pornire, în funcție de resursele asociate.

## Gestionarea stațiilor de lucru<!-- Gestione Workstation -->

Tabelul permite gestionarea codificării diferitelor tipuri de *stații de lucru<!-- Workstation -->*.

Permite introducerea de noi înregistrări sau căutarea celor deja existente pentru a le vizualiza, modifica sau șterge.

## Căutare stații de lucru<!-- Ricerca Workstation -->

Formularul de căutare este compus din:  
- **Zona de filtre<!-- Area filtri -->**: permite setarea criteriilor de căutare.
- **Grila rezultatelor<!-- Griglia dei risultati -->**: afișează lista stațiilor de lucru<!-- workstation --> găsite.

### Procedura de căutare<!-- Procedura di ricerca -->

1. Setați filtrele dorite.
2. Faceți clic pe butonul **Caută<!-- Ricerca -->**.
3. Vizualizați rezultatele în grilă.

## Introducere stație de lucru<!-- Inserimento Workstation -->

Pentru a crea o nouă codificare:

1. Faceți clic pe primul rând gol din grilă sau apăsați **Nou<!-- Nuovo -->**.
2. Completați următoarele câmpuri:
   - **Cod<!-- Codice -->**: numele PC-ului care va funcționa ca stație de lucru<!-- workstation -->.  
     :::note
     Numele PC-ului poate fi obținut executând comanda `hostname` din promptul de comandă.
     :::
   - **Descriere<!-- Descrizione -->**: descrierea PC-ului care va funcționa ca stație de lucru<!-- workstation -->.

3. În grila secundară asociați **resursele<!-- risorse -->**.

## Asociere resurse<!-- Associazione risorse -->

În această grilă este posibilă asocierea *resurselor<!-- risorse -->* care pot lucra pe fiecare stație de lucru<!-- workstation -->.
- În cazul în care pentru o stație de lucru<!-- workstation --> este asociată o singură resursă (ex. de tip centru de lucru<!-- centro di lavoro -->), la pornire MES va încărca automat acea resursă și toate fazele deja începute asociate acesteia.      
Exemplu de stație de lucru<!-- workstation --> dedicată unui centru de lucru<!-- centro di lavoro -->.        
- În cazul în care pentru o stație de lucru<!-- workstation --> sunt asociate mai multe resurse (ex. de tip centru de lucru<!-- centro di lavoro -->), la pornirea MES nu va fi încărcată niciuna dintre ele și utilizatorul va putea selecta doar una dintre resursele asociate.      
Exemplu de stație de lucru<!-- workstation --> dedicată unui departament unde se vor declara toate centrele de lucru<!-- centro di lavoro --> ale acelui departament.     
- În cazul în care, însă, pentru o stație de lucru<!-- workstation --> nu este asociată nicio resursă, la pornirea MES nu va fi încărcată niciuna dintre ele și utilizatorul va putea selecta orice resursă introdusă în tabelul [Resurse de producție<!-- Risorse di produzione -->](/docs/production/mes/production-resources).       
Exemplu de stație de lucru<!-- workstation --> dedicată unui tehnician care va declara activitățile pentru toate centrele de lucru<!-- centro di lavoro -->.

## Rezumat și detalii suplimentare<!-- Riepilogo e approfondimenti -->

Stațiile de lucru<!-- workstation --> din MES Fluentis permit:

- Definirea posturilor operaționale utilizate în procesul de producție.
- Asocierea de resurse<!-- risorse --> individuale sau multiple cu impact direct asupra comportamentului sistemului.
- Automatizarea sau personalizarea încărcării fazelor de producție.
- Gestionarea fișelor de bază printr-un formular structurat cu funcții de căutare, introducere și modificare.

Pentru detalii suplimentare:

- [Resurse de producție<!-- Risorse di produzione -->](/docs/production/mes/production-resources)  
- [Funcționalități comune<!-- Funzionalità comuni -->](/docs/guide/common)