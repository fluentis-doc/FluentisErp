---
title: Parametri
sidebar_position: 3
---

În parametri, procedura preia toate liniile detaliu ale articolelor inserate în documentele selectate. În particular:


 - statusul și codul TVA sunt luate din registrul partenerului atribuit;
 - eventuala sumă în deviză prezintă informația valorii articolului (preț*cantitate-discounturi) în deviza facturii de achiziție (câmpul este preznet doar pentru intra2);
 - valoarea operațiilor euro ia valoarea articolului la schimbul inserat în factură;
 - natura tranzacției este preluată din tipul documentului;
 - nomenclatura combinată din linia articolului în factură și, dacă lipsește, din registrul articolelor;
 - masa netă se calculează pe baza greutății inserate în registrul articolului;
 - unitatea suplimentară poate fi calculată automat în cazul în care codul nomenclaturii prevede o a doua unitate de măsură, prin intermediul conversiei dintre unitatea de măsură gestională și aceasta pe baza factorilor de conversie inserați în articol;
 - valoarea statistică se calculează în mai multe moduri pe baza setărilor (variație procentuală față de registrul client/furnizor sau majorat de cheltuielile inserate în document);
 - termenii și modalitatea de transport sunt inserate pe baza termenilor de livrare/expediție inserate în document;
 - datele relative la județul pentru expediție/destinație și la țara de origine/destinație sunt citite din registrul partenerului atribuit documentului sau din tabelul societate.

La sfârșitul gridului sunt vizualizate referințele la documentul sursă al liniei.

După completarea datelor necesare în model (și acest lucru depinde de flag-ul **simplificată** inserat în antetul declarației, dar și de tipul perioadei) se poate crea modelul, operație care va reporta detaliile în secțiunile bis/ter/quater pe baza naturii tranzacției intrastat (tipul 2 este reportat în secțiunea Ter relativă la rectificări, tipul **S** în secțiunea quater). Înaintea acestei mutări, se poate efectua o primă grupare a valorilor: această operație va fi însă efectuată pentru fiecare document, determinând o primă rotunjire a datelor.

Opțiuni disponibile:
> **Șterge** - Buton pentru ștergerea facturilor de tip intracomunitar selectate.
