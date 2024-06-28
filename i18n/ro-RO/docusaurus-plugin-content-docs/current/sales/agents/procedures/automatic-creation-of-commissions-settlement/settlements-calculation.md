---
title: Calcul plăți
sidebar_position: 2
---

După efectuarea căutării, în secțiunea  ‘Lista agenți' vor fi afișați toți agenții definiți în sistem: este necesară selectarea listei cu subiecții pentru care doriți să efectuați calculul. Este vizibil și tipul acumulării comisionului agentului, pentru a putea seta filtrele din dreapta conform setărilor agentului.

În partea dreaptă sunt următoarele filtre:

- un filtru după deviza documentului, pentru a crea o plată agent diferențiată pe deviză;

- trei secțiuni de filtru pe baza documentului de referință (ordin/aviz/facturi, pentru agenți cu ordinul confirmat, livrarea efectuată, factura emisă);

- o secțiune de filtru pe angajamente, pentru agenții cu scadența acumulată sau plata efectuată: pe baza datei inserate vor fi deci în primul caz acumulate angajamentele cu scadența antecedentă, în al doilea caz cota parte în relație cu încasările înregistrate în contabilitate cu data antecedentă. În cazul efectelor, acestea nu vor fi considerate acumulate până la data acumulării (și anume data scadenței plus zilele de risc client inserate în parametrii omonimi ai modulului).

Flag-ul ‘Conversie comisioane utilizând schimbul la data documentului' prevede, în schimb, ca valoarea comisioanelor să fie obținută pe baza schimbului din data documentului, dacă nu, implicit, va fi utilizat schimbul datei plății agentului așa cum este inserat în câmpurile din partea inferioară a ferestrei.

În secțiunea inferioară, ‘Date pentru crearea plății comisioanelor', se inserează data plății, descrierea sa și luna/anul de referință pentru calculul Enasarco.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferente fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru căutarea agenților prezenți în societatea activă. |
| Calcul plăți | Buton pentru calcularea plăților pentru agenții selectați, pe baza filtrelor inserate. |






