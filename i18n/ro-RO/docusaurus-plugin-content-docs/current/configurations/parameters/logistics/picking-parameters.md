---
title: Parametri dispoziții de livrare
sidebar_position: 6
---

:::important Utilitate
Cu această funcționalitate, utilizatorii pot configura și adapta sistemul în funcție de diferitele cerințe operaționale, asigurând o desfășurare fluidă și coerentă a activităților logistice.

În această secțiune, puteți să atribuiți gestiuni și șabloane de descărcare prestabilite, să decideți dacă trebuie verificată disponibilitatea articolelor și să definiți dacă introducerea informațiilor, cum ar fi codul operatorului, trebuie să fie obligatorie. Alte opțiuni includ gestionarea articolelor pe loturi sau numere de serie și controlul cantităților în momentul creării picking-ului. Acest modul de parametrizare nu doar că facilitează operativitatea, dar garantează și că procedurile sunt conforme cu politicile companiei și reglementărilot în vigoare, permițând o gestionare eficientă și precisă a depozitului.
:::

Form-ul se află în **Parameteri > Logistică > Parameteri dispoziții de livrare** și permite parametrizarea documentelor. 

#### Buton specific 
> *Restaurare*: restaurează parametrii la starea lor anterioară.

## General

În acest tab se pot configura generalitățile gestionării **Dispoziției de livrare**. Este posibil să se aloce o gestiune și un șablon care să fie utilizate implicit pentru descărcarea *Dispoziției de livrare*. Pentru a face acest lucru, este suficient să bifați **Prioritate parametri dispoziției de livrare** și să indicați o **Gestiune** și un **Șablon**.  
De asemenea, este posibil să alegeți dacă, în momentul descărcării, să **Verificați disponibilitatea**, să **Excluzi comenzile clienților** din disponibilitate și/sau să fiți blocați în cazul în care disponibilitatea nu satisface cantitatea de mutat (**Disponibilitate obligatorie**).

În cazul în care alegeți să verificați disponibilitatea, este posibil să determinați cum trebuie să fie calculată în funcție de **Sistem lohn**, **Producția planificată**, **Achiziții**, **Producția lnsată**, **Vânzări** și/sau **Gestiune**.

Ca setări generale, este posibil să alegeți dacă în momentul creării *Dispoziției de livrare* este obligatoriu să se introducă **Codul operatorului**, dacă **Numerotarea trebuie să fie progresivă pe an**, iar **Codul operatorului care confirmă Dispoziția de livrare** este obligatoriu.

În cazul în care există gestiuni speciale ale articolelor, este activabilă **Gestionare mărime și culoare**.

#### Gestionare loturi și număre de serie

**Gestionare loturi/Număr de serie**: activează posibilitatea de a gestiona loturi și numere de serie prin grilele corespunzătoare.

**Propune loturi/Număr de serie**: dacă este activ, la modificarea unei cantități din linia *Dispoziției de livrare*, dacă articolul este gestionat pe loturi cu tipologia de prelevare FIFO sau după data de expirare, loturile sunt propuse automat în grila corespunzătoare.

**Verificare automată mişcaree**: dacă este activ, în formularul *Gestionare check* face descărcarea automată a liniei.   

**Vizualizare tabel execuție**: dacă este activ, acest indicator activează modul tabel în formularul de execuție al *Dispoziției de livrare*.

**Vizualizare arbore execuție**: dacă este activ, acest indicator activează modul arbore în formularul de execuție al *Dispoziției de livrare*.

## WMS Mobile

În acest tab puteți defini parametrii pentru funcționarea dispoziției de livrare în WMS Mobile.

**Tip cont transportator**: reprezintă transportatorul care va fi inclus în dispozițiile create de WMS Mobile.   

De asemenea, pot fi inserate șabloanele care vor fi utilizate pentru următoarele mișcări:

- *Descărcare UdI pentru confirmare transfer*;

- *Șablon propus pentru descărcare dispoziție*;

- *Descărcare după gestiune ieșire*;

- *Încărcare pe gestiune destinație*;

- *Șablon descărcare gestiune sistem lohn*.

Pentru informații generale despre form-uri consultați [Funcționalități, butoane și câmpuri comune](/docs/guide/common).
