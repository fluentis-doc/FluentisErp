---
title: Previziuni consum
sidebar_position: 7
---

Acest tabel conține previziuni privind consumul articolelor buffer.

Pentru fiecare articol buffer și pentru fiecare unitate logistică, se poate insera valoarea consumului prevăzut cu detaliul zilnic.

Datele din acest tabel sunt utilizate de procedura [**Actualizare consum mediu zilnic (ADU)**](/docs/ddmrp/procedures/ADU-update) în cazul tehnicii de calcul care ia în considerare datele prognozate privind consumul viitor și pot fi introduse manual sau automat (cu procedura de calcul care efectuează previziunile de vânzări ale produselor finite).

În cazul inserării manuale, nu este necesară indicarea valorii pentru fiecare zi, trebuie doar una pentru fiecare perioadă de timp egală cu parametrul **Zile în viitor** din parametrii DDMRP ai articolului.

*Exemplu*: **Zile în viitor** este egal cu 10 zile. Va fi suficientă introducerea unei valori la fiecare 10 zile egală cu consumul total din perioada respectivă, deoarece procedura de actualizare a consumului mediu zilnic în cazul utilizării unui mod care se referă la viitor, va aduna previziunile din acea perioadă de timp și la va împărți la **Zile în viitor**.