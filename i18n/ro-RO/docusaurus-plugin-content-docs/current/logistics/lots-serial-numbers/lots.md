---
title: Caută loturi
sidebar_position: 2
schema: HowTo
tags:
  - logistică
  - loturi
  - gestiuni
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
keywords:
  - logistică
  - loturi
  - gestiuni
---

# Caută loturi

Fereastra se află pe calea **Logistică > Registru loturi** și permite să căutarea tuturor loturilor cu scopul de a le vizualiza și modifica.

## Cum se efectuează o căutare 

1. Setați filtrele dorite în zona de căutare.  
2. Faceți clic pe butonul **Caută** prezent în ribbon bar pentru a afișa rezultatele în tabel.  
3. Pentru a deschide detaliile unui lot, selectați-l și faceți dublu clic cu mouse-ul sau faceți clic pe butonul **Modifică**.

:::important
Este posibil să modificați sau să eliminați doar loturile care nu sunt referențiate în alte documente.
:::

## Butoane specifice

> **Modifică**: permite modificare unui [lot](/docs/logistics/lots-serial-numbers/lots-register) inserat.  
> **Șterge**: permite ștergerea lotului dacă acesta nu este referențiat în niciun document.

## Filtre specifice 

- **Toate**: activând acest flag, utilizatorul poate filtra toate loturile prezente în baza de date;  
- **Neînchise**: activând acest flag, utilizatorul poate filtra doar loturile deschise, adică acele loturi pentru care există încă un stoc în gestiune;  
- **Închise**: activând acest flag, utilizatorul poate filtra doar loturile închise, adică acele loturi a căror stoc este egal cu zero.

## Câmpuri specifice 

> *Notă*: faceți clic pe semnul **+** pentru a deschide detaliul liniei.

- **Închis**: dacă este activ, evidențiază că stocul este egal cu zero;  
- **Cantitate**: afișează cantitatea inițială a lotului pentru fiecare gestiune;  
- **Cantitate disponibilă**: afișează cantitatea disponibilă pentru fiecare gestiune a lotului, adică stocul minus cantitatea angajată în diferite documente. Cantitatea disponibilă poate fi afișată și ca fiind egală cu zero în cazul în care lotul se află în starea *nedisponibil pentru preluări automate*;  
- **Stare lot**: afișează starea lotului. Este un câmp care poate să nu fie gestionat;  
- **Gestiune**: afișează codul gestiunii în care se află lotul.

## Sumar și detalii 

Funcționalitatea **Caută loturi** permite identificarea rapidă a loturilor înregistrate, filtrându-le în funcție de stare și disponibilitate.  

Pentru detalii suplimentare:  
- [Înregistrarea și modificarea loturilor](/docs/logistics/lots-serial-numbers/lots-register)  
- [Funcționalități comune ale form-urilor](/docs/guide/common)