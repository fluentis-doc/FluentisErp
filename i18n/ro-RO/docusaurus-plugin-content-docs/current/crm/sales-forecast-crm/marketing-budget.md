---
title: Buget de marketing
sidebar_position: 5
---

Cu această funcționalitate pot fi create bugete pe perioade.        

#### Câmpuri specifice
**Perioadă buget**: permite inserarea [Perioadei](/docs/configurations/tables/crm/sales-forecast/budget-period) care va fi utilizată ca unitate de împărțire a anului. În funcție de perioada selectată, valorile introduse ulterior vor fi distribuite automat pe diferitele perioade, afișate în tabelul *Perioade*;  
**Data sfârșit valabilitate**: conține o eventuală dată de închidere a bugetului;  
**Proiect**: permite asocierea unui proiect.  

În tabel se poate construi arborele unui buget, folosind butoanele din bara de instrumente. Fiecare nod principal al arborelui va conține suma cantităților și a valorilor din nodurile subordonate. Nodurile finale ale arborelui sunt cele în care pot fi introduse cheltuielile, prin intermediul următoarelor câmpuri:  
**Unitate de măsură**: reprezintă unitatea de măsură a cheltuieli;  
**Cantitate totală**: conține cantitatea totală care va fi împărțită pe diferitele *Perioade* ale bugetului;  
**Preț unitar**: acest câmp se completează automat cu rezultatul împărțirii dintre **Valoarea totală** și **Cantitatea totală**;  
**Valoare totală**: conține valoarea totală ce va fi împărțită pe diferitele *Perioade* ale bugetului.  

În tabelul din dreapta, **Cantitatea totală** și **Valoarea totală** sunt împărțite conform numărului de Perioade definit de [Perioade buget](/docs/configurations/tables/crm/sales-forecast/budget-period) introdus în antet. În acest fel, va fi posibilă consultarea bugetului pentru fiecare perioadă. 