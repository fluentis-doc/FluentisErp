---
title: Autovehicul nou
sidebar_position: 2
description: Ghid pentru gestionarea și codificarea autovehiculelor în Fluentis ERP în modulul Logistică.
schema: HowTo
tags:
  - logistică
  - autovehicule
  - codificare
last_update:
  author: Fluentis Documentation Team
  date: 11-13-2025
keywords:
  - autovehicule
  - logistică
  - dimensiuni
  - plan de încărcare
---

# Autovehicul nou

Tabelul pentru gestionarea autovehiculelor se găsește la calea **Logistică > Autovehicule > Autovehicul nou**.  
În acest tabel este posibilă codificarea diferitelor *Autovehicule* utilizate și definirea dimensiunilor acestora.  
Un exemplu de utilizare a autovehiculelor codificate este prezent în [Planuri de Încărcare](/docs/logistics/load-plans/create-plan/), în tabul *Pregătire plan de încărcare*.  
Tabelul permite introducerea de noi înregistrări, căutarea, vizualizarea, modificarea sau ștergerea celor existente.

## Caută autovehicule

Formularul este compus dintr-o zonă de filtrare și una de rezultate.  
După setarea filtrelor dorite, faceți clic pe butonul **Caută** pentru a vizualiza rezultatele.

## Introducere autovehicul

Pentru a introduce un autovehicul nou:

1. Faceți clic pe primul rând gol din tabel sau apăsați butonul **Nou**.
2. Introduceți cel puțin câmpurile obligatorii cerute:

   - **Tip autovehicul**: tipul vehiculului selectat din tabelul *Tip autovehicul*;
  - **Cod**: reprezintă codul vehiculului;       
- **Număr înmatriculare**: indică numărul de înmatriculare al vehiculului;      
- **Dată înregistrare**: indică data înregistrării vehiculului;          
- **Tip combustibil vehicul**: indică [Tipul de combustibil](/docs/configurations/tables/logistics/motorvehicle-gas-type) utilizat de vehicul.  
- **Marcă**: indică marca vehiculului prezent în tabelul [Mărci vehicule](/docs/configurations/tables/logistics/motorvehicle-brands);             
- **Model**: indică modelul vehiculului prezent în tabelul [Mărci vehicule](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Dată început**: indică data începerii utilizării vehiculului; 
- **Dată scadență contract**: indică data expirării contractului vehiculului;     
- **Dată închidere**: indică data de la care vehiculul nu mai poate fi utilizat;     
- **Descriere**: permite introducerea descrierii libere a vehiculului;       
- **Cont**: permite introducerea contului clientului vehiculului;        
- **Proprietate autovehicul**: permite indicarea tipologiei [Proprietății vehiculului](/docs/configurations/tables/logistics/motorvehicle-ownership);
   - **Şofer alocat**: permite indicarea [Șoferului alocat](/docs/logistics/motorvehicles/motorvehicle-drivers);
   - **Filială companie**: filiala de referință;
   - **Proiect**: proiectul asignat autovehiculului.

## Detalii autovehicul

În partea inferioară a formularului sunt disponibile următoarele taburi:

### Detalii

Câmpuri referitoare la caracteristicile fizice și capacitatea autovehiculului:

- **Compartiment**: indică compartimentul vehiculului;
- **Număr de înmatriculare**: numărul de înmatriculare al vehiculului;
- **Unitate de măsură capacitate**: indică capacitatea maximă a vehiculului;         
- **Capacitate maximă**: indică capacitatea maximă a vehiculului exprimată în **Unitatea de măsură a capacității**;                  
- **Unitate de măsură dimensiuni**: indică unitatea de măsură cu care sunt exprimate **Înălțimea**, **Lățimea**, **Adâncimea** și toleranțele corespunzătoare;      
- **Înălțime**: indică înălțimea vehiculului;         
- **Lățime**: indică lățimea vehiculului;                 
- **Adâncime**: indică adâncimea vehiculului;                 
- **Toleranță în înălțime**: indică toleranța în înălțime a vehiculului;           
- **Toleranță în lățime**: indică toleranța în lățime a vehiculului;       
- **UM volum**: indică unitatea de măsură a volumului;                    
- **Volum**: indică volumul vehiculului;                 
- **Număr unități de încărcare conținute**: indică numărul maxim de unități de încărcare care pot fi conținute în vehicul;
- **Număr straturi**: indică numărul de straturi care pot fi încărcate în vehicul.

### Perioadă de inactivitate autovehicul

Permite introducerea perioadelor în care autovehiculul nu poate fi utilizat.  
Aceste date sunt raportate în [Planificare](/docs/logistics/shipping/calendar).

#### Câmpuri specifice  
- **Descriere**: permite indicarea descrierii perioadei de inactivitate a vehiculului;          
- **De la data**: permite indicarea datei de început a perioadei de inactivitate a vehiculului;          
- **Până la data**: permite indicarea datei de sfârșit a perioadei de inactivitate a vehiculului;          
- **Motiv**: permite introducerea motivului codificat în [Motive absență șofer](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Rezumat și detalii suplimentare  

În acest articol a fost descrisă procedura completă pentru codificarea și gestionarea autovehiculelor noi în modulul Logistică al sistemului ERP.   
De asemenea, a fost explicată funcționalitatea pentru definirea perioadelor de inactivitate, importante pentru planificarea logistică.  

Detalii suplimentare:

- [Planuri de Încărcare](/docs/logistics/load-plans/create-plan/)  
- [Șofer asignat](/docs/logistics/motorvehicles/motorvehicle-drivers) 
- [Autista assegnato](/docs/logistics/motorvehicles/motorvehicle-drivers)   
- [Planificare expedieri și calendar](/docs/logistics/shipping/calendar)  
- [Ghid general despre funcționalități, butoane și câmpuri comune](/docs/guide/common)  