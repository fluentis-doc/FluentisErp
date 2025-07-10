---
title: Stație de lucru (Workstation)
sidebar_position: 3
---

:::important Scop (A cosa serve)
Funcționalitatea este esențială pentru a înțelege cum să gestionați eficient resursele și operațiunile de producție în mediului operativ. Sistemul MES oferă un tabel dedicat codificării stațiilor de lucru, util pentru inserarea, modificarea sau ștergerea înregistrărilor. Printr-o interfață intuitivă, utilizatorii pot căuta stațiile de lucru într-o zonă de filtrare saupot insera altele noi.

Fiecare stație de lucru poate fi asociată cu diverse resurse, în funcție de necesitățile operaționale. De exemplu, dacă este prevăzută o asociere la resurse multiple, la pornirea MES, va fi sarcina utilizatorului să selecteze manual resursa dorită. În schimb, în cazul unei asocieri la o singură resursă, sistemul încarcă automat toate fazele operaționale deja începute ale respectivei resurse, simplificând fluxul de lucru și îmbunătățind eficiența.
:::

## Căutare Stație de lucru

Formularul constă dintr-o zonă de filtrare și una de rezultat. După inserarea filtrelor dorite, va trebui să faceți clic pe butonul **Caută** pentru a vizualiza rezultatele.

## Inserare Stație de lucru 

Pentru a introduce noi stații, este necesar să faceți clic pe prima linie liberă din tabelul principal sau să apăsați butonul **Nou**.  
- **Cod**: indică numele computerului care va funcționa ca stație de lucru;   
:::note Notă (Nota)
Puteți obține numele computerului rulând comanda *hostname* din promptul de comandă.
:::    

- **Descriere**: indică descrierea numelui computerului care va funcționa ca stație de lucru.  

În tabelul secundar, este posibilă asocierea *resurselor* care vor putea lucra pe fiecare stație de lucru.
- În cazul în care unei stații de lucru îi este asociată doar o resursă (ex. de tip centru de lucru), la pornire, MES va încărca automat acea resursă și toate fazele deja începute asociate cu aceasta.  
Exemplu de stație de lucru dedicată unui centru de lucru.   
- În cazul în care pentru o stație de lucru sunt asociate mai multe resurse (ex. de tip centru de lucru), la pornirea MES nu va fi încărcată niciuna dintre ele și utilizatorul va putea selecta doar una dintre resursele asociate.  
Exemplu de stație de lucru dedicată unui departament unde vor avea loc declarațiile tuturor centrelor de lucru din acel departament specific.
- În cazul în care, în schimb, pentru o stație de lucru nu este asociată nicio resursă, la pornirea MES nu va fi încărcată niciuna dintre ele și utilizatorul va putea selecta oricare dintre resursele introduse în [Resurse de producție](/docs/production/mes/production-resources).  
Exemplu de stație de lucru dedicată unui tehnician care va declara propriile activități pentru toate centrele de lucru.