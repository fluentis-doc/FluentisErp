---
title: Parametri
sidebar_position: 3
---

În această secțiune, procedura prezintă toate liniile detaliu ale articolelor inserate în documentele selectate, preluând din fiecare din acestea datele din document. În particular:

 - starea și codul TVA sunt extrase din registrul partenerului atribuit;
 - eventuala sumă în deviză prezintă informația valorii articolului (preț*cantitate-discounturi) în deviza facturii de achiziție (câmp prezent doar pentru intra2);
 - suma operațiilor euro preia valoarea articolului la schimbul inserat în factură ;
 - natura tranzacției este preluată din tipul documentului;
 - nomenclatura combinată din linia articolului în factură, iar dacă acesta nu este completat, din registrul articolelor;
 - masa netă este calculată pe baza greutății inserate în registrul articolului;
 - unitatea suplimentară poate fi calculată automat în cazul în care codul nomenclaturii prevede o unitate de măsură secundară, prin intermediul conversiei între unitatea de măsură gestională și aceasta, pe baza factorilor de conversie inserați în articol;
 - valoarea statistică este calculată în mai multe moduri, pe baza setărilor (variație procentuală față de registrul client/furnizor sau majorată de cheltuielile inserate în mod specific document)
 - termenii și modalitatea detransport sunt inserate pe baza termenilor de livrare/expediție inserate în document;
 - datele care se referă la județul expeditor/destinatar și la țara de origine/destinație sunt citite din registrul partenerului atribuit documentului sau din tabelul societate.

La finalul liniei sunt vizualizate referințele la documentul sursă al liniei.

După completarea datelor necesare în model (și acest lucru depinde de flagul *simplificată* inserat în antetul declarației dar și din tipul perioadei) se poate crea modelul, operație care va prezenta detaliile în secțiunile bis/ter/quater pe baza naturii tranzacției Intrastat (tipul 2 este prezentat în secțiunea Ter relativă la rectificări, tipul ‘S' în secțiunea quater). Înaintea acestei mutări, se poate realiza o prima grupare a sumelor: această operație va fi efectuată pe fiecare document, determinând o primă rotunjire a datelor.

Opțiuni disponibile:

> **Șterge** - Buton pentru ștergerea facturile de tip intracomunitar selectate.