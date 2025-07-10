---
title: Detalii ordine de aprovizionare/necesar
sidebar_position: 5
---

Formularul *Detalii ordine de aprovizionare* permite filtrarea și vizualizarea listei tuturor ordinelor de aprovizionare neexecutate, de orice natură, atât planificate, cât și confirmate.  
Formularul *Detalii ordine de necesar* permite filtrarea și vizualizarea listei documentelor neexecutate care creează cerere. În acest form, articolul afișat este cel angajat. Deci, în cazul ordinelor de producție și în sistem lohn, nu este articolul ordinului.

Secțiunea de filtrare permite selecția în funcție de natura ordinului, starea sa, articol etc. Acestea sunt importante atunci când se dorește analizarea detaliată a situației ordinelor unui articol, în special *Analiza NFP*.

Fiecare linie este colorată în funcție de starea buffer-ului articolului (buffer status) referitoare la gestiunea de încărcare din linia ordinului (gestiunea de destinație pentru ordinele interne Ddmrp) în cazul ordinelor de aprovizionare și gestiunea angajată pentru ordinele care creează cerere.

Culorile sunt:  
- roșu închis pentru stoc negativ,  
- roșu pentru stoc sub 50% din zona roșie,  
- galben dacă stocul este între 50% și 100% din zona roșie,  
- verde dacă stocul este mai mare decât zona roșie (limita minimă normală a stocului) și mai mic decât suma dintre zona roșie și zona verde (limita maximă normală a stocului),  
- albastru dacă este mai mare decât această sumă (stoc excesiv).

Dacă articolul nu este un buffer în gestiunea în care se face încărcarea ordinului, coloana *buffer status* este goală și linia nu este colorată.

Dacă gestiunea ordinului nu a fost specificată, acesta va fi considerat ca fiind gestiunea *Fabrică*.