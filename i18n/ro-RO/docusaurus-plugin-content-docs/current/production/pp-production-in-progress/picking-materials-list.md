---
title: Listă ieşiri materiale
description: Gestionarea listelor de ieşiri materiale pentru ordinele de producție în Fluentis, cu creare de mișcări și dispoziții de livrare.
keywords:
  - listă ieşiri
  - materiale producție
  - picking
  - Fluentis
  - ordine de producție
sidebar_position: 4
schema: TechArticle
tags:
  - producție
  - logistică
  - materiale
  - dispoziție de livrare
last_update:
  author: Fluentis Documentation Team
---

# Listă ieşiri materiale

:::important Utilizare
**Lista ieşiri materiale** din Fluentis este un instrument esențial pentru gestionarea eficientă a materialelor destinate ordinelor de producție. Permite crearea și gestionarea unor liste detaliate de materiale care trebuie prelevate, conectând direct operațiunea la cerințele specifice de producție.  
Este foarte utilizată pentru generarea dispozițiilor de livrare și gestionarea transferului de materiale, de exemplu către gestiunea WIP, simplificând fluxul logistic și asigurând o trasabilitate precisă.
:::

Procedura permite crearea și gestionarea *listelor de ieşiri a materialelor* pentru *ordinele de producție* care prevăd utilizarea acestora.

Este posibilă căutarea în *ordinele de producție*, aflate în starea *lansat* și *executiv*, a celui dorit, pentru a efectua apoi două operațiuni distincte:

- **Caută materiale**: permite descărcarea materialelor care, în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului, sunt configurate cu *Tip ieșire: Cu listă*. Consumul efectiv are loc cu butonul **Creează mișcări**, generând **descărcarea din gestiune**.  
- **Caută materiale dispoziție de livrare**: permite mutarea materialelor din gestiunea în care sunt stocate (de exemplu, în gestiunea WIP) și crearea **dispozițiilor de livrare**, adică documente care nu sunt încă înregistrate, vizibile în fereastra [Dispoziție de livrare](/docs/logistics/picking/search-picking).

Butonul **Creează mișcări** generează dispoziția de livrare, setând automat:
  - pentru materiale cu *Tip ieșire cu listă*: șablonul și gestiunea care sunt deja prezente pe linia materialelor din ordinul de producție pentru a putea fi descărcate definitiv;
  - pentru materiale cu *Tip ieșire manuală*: șablonul și gestiunea setate în *Tip dispoziție de livrare* selectat.

Materialele transferate în gestiunea WIP vor fi apoi descărcate în  **declarațiile de producție**.  
Înregistrarea va fi făcută ulterior prin procedura dedicată **descărcării dispoziției de livrare**.

## Filtru

Acest tab permite căutarea dispozițiilor de livrare dorite aplicând filtrele disponibile.

### Butoane specifice

- **Caută materiale**: permite crearea directă a înregistrărilor de gestiune. Dintre toate datele afișate mai jos, referitoare la detaliul fiecărui material, este important de subliniat importanța flagului **Mişc.**, care, dacă este activ, indică faptul că pentru acel material a fost ales *tipul ieşiri cu listă* în *Parametrii MRP* ai articolului. Dacă flagul nu este activ înseamnă că pentru acel material s-a optat pentru t*ipul de ieşire manuală*. (Pentru mai multe detalii despre semnificația acestor tipuri de ieşiri, consultați articolul referitor la [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului).  
- **Caută materiale dispoziție de livrare**: permite crearea dispozițiilor de livrare, deci nu a unor adevărate înregistrări, ci a unor documente de transfer materiale care pot fi vizualizate în fereastra [Dispoziție de livrare](/docs/logistics/picking/search-picking) prezentă în aria logistică. În acest caz, înregistrarea va fi făcută ulterior, după un al doilea control.             
- **Creează mișcări**: permite, după selectarea materialelor în funcție de tipul de căutare efectuată, crearea mișcărilor de gestiune (descărcarea) sau a dispoziției de livrare.  
În cazul în care se creează dispoziția de livrare, pentru materialele care sunt cu:  
> - *Tip ieșire Cu listă*: vor fi setate șablonul și gestiunea care sunt deja prezente pe linia materialelor din ordinul de producție.  
> - *Tip ieșire Manuală*: vor fi setate șablonul și gestiunea setate în **Tip dispoziție de livrare** utilizat.  

## Restaurare înregistrare

În acest tab puteți să **restaurați** mișcările create anterior.  
Selectând un rând sunt afișate:  
- în tabul **Înregistrări ieşiri generate** → înregistrările create;
- în tabul **Dispoziții de livrare generate din ieșiri** → dispozițiile de livrare generate.

### Butoane specifice

- **Șterge listă ieşiri**: restaurează simultan atât înregistrările cât și dispozițiile de livrare generate.  
- **Șterge înregistrări**: restaurează exclusiv înregistrarea de gestiune selectată.   
- **Șterge dispoziția de livrare**: restaurează dispoziția de livrare selectată în tabul **Dispoziții de livrare generate din ieșiri**.

## Rezumat și detalii suplimentare

*Lista de ieşiri materiale* permite:

- gestionarea materialelor destinate ordinelor de producție;
- crearea de mișcări de descărcare sau documente de picking;
- gestionarea transferurilor către gestiuni intermediare (ex. WIP);
- trasabilitate și restaurare facilă a înregistrărilor și dispozițiilor de livrare.

Pentru detalii suplimentare:

- [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)
- [Dispoziții de livrare – aria logistică](/docs/logistics/picking/search-picking)
- [Funcționalități și câmpuri comune](/docs/guide/common)