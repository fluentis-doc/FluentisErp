---
title: Formule di Calcolo
sidebar position: 3
--- 

Le formule di calcolo possono servirci per automatizzare la registrazione extracontabile di alcuni dati del controlling. 

***Campi della Tabella "Formule di calcolo"***


![](/img/it-it/controlling/calculation.png)

***DATA INIZIO E FINE VALIDITA’:*** Abbiamo definito questa formula che vale per quel solo range di date 

***CONTO SUL QUALE POGGIA LA REGISTRAZIONE:*** Mi farà una registrazione, ad esempio, su CONTI DI DESTINAZIONE e sul CENTRO DI DESTINAZIONE. 

**ESEMPIO**

Invece di andare a leggere l mie provvigioni o scrivere una registrazione manuale, su quelli che sono i costi delle provvigioni del periodo, li derivo da quanto sto registrando come ricavi nel periodo stesso. 

Un modo per ottenere una registrazione automatica sulla base di qualche altro dato che ho registrato. 


***CENTRO ORIGINE CONTI*** Filtra solo i movimenti di questo centro. Lo registra su quel centro ma lo pesca da questo conto.

***ESEMPIO***

MATERIALI PER MANUTENZIONE E RIPARAZIONE BENI DI TERZI


E’ una regola che verrà applicata sempre, poiché legata al multi ambiente

***COTNO DI DESTINAZIONE:*** MATERIALI PER MANUTENZIONE E RIPARAZIONE 
***CENTRO DI DESTINAZIONE:*** FRESATURA-TORNITURA

**Registrazione: Leggendo le ore macchina registrate sempre sulla fresatura e tornitura. Rispetto a quante ore ha registrato quel centro li dico che i costi dei materiali sono TOT % di quanto la macchina sta lavorando.** 
