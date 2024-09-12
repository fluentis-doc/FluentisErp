---
title: Ordin planificat nou
sidebar_position: 1
---

Fereastra permite inserarea unui ordin planificat nou și se află în [Planificare>MPS>Ordine planificate>Ordin planificat nou].

În mod normal, ordinele planificate sunt generate automat de procedura de planificare generală sau de elaborarea MPR, dar cu această procedură utilizatorul poate generara manual un ordin planificat de achiziții, producție sau sistem lohn.

Aplicația cere, înainte de toate, inserarea tipului ordinului planificat, chiar dacă propune tipul implicit. După, utilizatorul poate insera, cu ajutorul helpului sau manual, informațiile relative la articol. Pentru a salva ordinul, trebuie inserată data sfârșit prevăzută și cantitatea de produs. După salvare, trebuie apăsat butonul 'Completare date ordin' cu scopul de a actualiza toate taburile (Materiale, Faze, etc.) care preiau datele din lista componentelor și ciclu de lucru al articolului care face obiectul ordinului planificat (doar dacă este de producție).

Alte date prezente în fereastră:

**Număr/An**: sunt propuse anul și numărul ordinului planificat care se creează, în relație cu tipul numerotării asociat tipului ordinului planificat inserat în câmpul relativ. Aceste date poti fi modificate, dar nu recomandăm acest lucru;

**Tip ordin**: afișează tipul ordinului planificat care se creează sau care a fost creat (producție, achiziție, sistem lohn). În general este identic cu tipul de aprovizionare al articolului ordinului planificat;

**Ordin obligatoriu**: dacă este activ, ordinul planificat este prioritar și nu permite utilizatorului să-l mute inserând o dată mai mare decât data sfârșit prevăzută de planificarea generală;

**Tip comandă**: în acest câmp este afișat tipul comenzii de producție din care a fost generat ordinul planificat. Evident, dacă acesta a fost generat manual, nu va fi posibilă asocierea la anumite comenzi deproducție deja existente, iar câmpul va rămâne gol;

**Generat din cerere**: este afișat textul 'Manual' (dacă este un ordin planificat creat manual), 'Dependent' (dacă este un ordin planificat creat din planificare și care depinde de alte ordine planificate de nivel superior) sau 'Independent' (dacă este un ordin planificat creat din planificare și care nu depinde de alte ordine planificate de nivel superior, deoarece este un ordin de nivelul 1);

**Com. prod** **.**: se inserează datele comenzii de producție din care a fost generat ordinul planificat. Evident, dacă acesta a fost generat manual, nu va fi posibilă asocierea la anumite comenzi deproducție deja existente, iar câmpul va rămâne gol;

**Data inserării**: este data curentă inserată implicit (nu se poate modifica);

**Comandă**: cu dubluc clic se deschide 'help comenzi' care permite asocierea unei comenzi de vânzare la ordinul planificat care se inserează;

**Ultima modificare**: se inserează data în care a fost făcută ultima modificare a ordinului;

**Ciclu structură preferențială**: cu dubluc clic se deschide 'help cicluri' din care se poate selecta un ciclu. Utilizatorul are deci posibilitatea să decidă din care ciclu de lucru al articolului trebuie să fie preluate informațiile care vor fi apoi inserate în tab Faze ordin planificat;

**Versiune**: combo box-ul permite selectarea 'Versiunii', în timp ce câmpul succesiv este relativ la anul versiunii. De obicei este inserată versiunea implicită;

**Lucrare prevăzută început/sfârșit**: dacă după completarea datelor ciclului de lucru, utilizatorul modifică una din aceste 2 date, cealaltă este recalculată automat;

**Cantitate de produs**: în cazul în care articolul inserat este de producție, în acest câmp este propusă automat cantitatea lotului economic de producție inserat în parametri MRP ai articolului;

****Cantitate **utilizată**: reprezintă cantitatea de produs în eventuala unitate de măsură alternativă;

**UM utilizată**: reprezintă unitatea de măsură alternativă a articolului.






