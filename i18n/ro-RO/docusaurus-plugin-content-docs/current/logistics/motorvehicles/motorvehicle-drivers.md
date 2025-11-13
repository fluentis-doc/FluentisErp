---
title: Șoferi vehicule
description: Gestionarea și codificarea șoferilor asociați vehiculelor în modulul logistică. 
keywords:
  - vehicule
  - logistică
  - expediți
  - Fluentis ERP
sidebar_position: 3
schema: HowTo
tags:
  - logistică
  - vehicule
  - expediți
last_update:
  author: Fluentis Documentation Team
  date: 12-11-2025
---

# Șoferi vehicule

Această secțiune descrie cum să gestionați și să codificați **șoferii asociați vehiculelor**, cu detalii despre căutarea, introducerea și gestionarea perioadelor de inactivitate.

Tabelul se află pe calea **Logistică > Autovehicule > Șoferi vehicule**.

Șoferii codificați în acest tabel vor putea fi selectați în [Expediți](/docs/logistics/shipping/shippings).  
Tabelul permite inserarea înregistrărilor noi sau căutarea celor existente pentru a le vizualiza, modifica sau șterge.

## Caută șoferi vehicule

Formularul este compus dintr-o zonă de filtre și una de rezultate.  
După ce setați toate filtrele dorite, apăsați butonul **Caută** pentru a afișa rezultatele în tabel.

## Inserare șoferi vehicule

Pentru a introduce un șofer nou, puteți face clic pe primul rând gol din tabel sau puteți apăsa butonul **Nou**.

Câmpurile obligatorii de completat sunt:
- **Nume**  
- **Prenume**

### Câmpuri opționale

- **Permise de conducere vehicule**: permite selectarea permisului șoferului dintre cele existente în [Permise de conducere vehicule](/docs/configurations/tables/logistics/motorvehicle-driving-licences).  
- **Resursă atribuită**: permite inserarea [resursei din proiecte](/docs/configurations/tables/project-management/project-resources/) atribuită vehiculului.  
- **Angajat**: permite asocierea unui angajat intern.  
- **Angajat extern atribuit**: permite să introduceți manual un angajat extern asociat resursei.

### Buton disponibilî

- **Șterge**: permite eliminarea înregistrării selectate.

## Perioadă de inactivitate șofer

În tabelul *Perioadă de inactivitate șofer* se pot insera perioadele de inactivitate, care vor fi raportate în [Planificare](/docs/logistics/shipping/calendar).

### Câmpuri disponibile 

- **Descriere**: permite indicarea descrierii perioadei de inactivitate a șoferului;  
- **De la data**: permite indicarea datei de început a perioadei de inactivitate a șoferului;  
- **La data**: permite indicarea datei de sfârșit a perioadei de inactivitate a șoferului  
- **Motiv**: reprezintă motivul codificat în [Motive absență șofer](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Rezumat și detalii

Acest ghid explică modalitățile de introducere, căutare și gestionare a **șoferilor vehicule**, incluzând perioadele de inactivitate și referințele la expediții și resurse asociate.

Pentru informații suplimentare:
- [Expediții](/docs/logistics/shipping/shippings)
- [Permise de conducere vehicule](/docs/configurations/tables/logistics/motorvehicle-driving-licences) 
- [Motive absență șofer](/docs/configurations/tables/logistics/driver-off-time-reasons/)