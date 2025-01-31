---
title: Vizualizare Gantt
sidebar_position: 1
---

:::important Utilizare
Funcționalitatea **Diagramă Gantt** în Fluentis este un instrument esențial pentru planificarea și monitorizarea proiectelor. Aceasta permite vizualizarea grafică a activităților programate, evidențiind timpii și relațiile dintre diferitele faze ale proiectului.     
Utilizatorii pot gestiona resursele, regla termenele și optimiza procesele productive, îmbunătățind eficacitatea operațională. Datorită unei interfețe intuitive, Diagramă Gantt facilitează identificarea eventualelor întârzieri sau blocaje, susținând o gestionare proactivă și strategică a proiectelor.
:::

**Diagramă Gantt** permite reprezentarea grafică a poziționării în timp a comenzii de producție până la detaliul fiecărei faze de lucru și avansarea acesteia.
Instrumentul permite gestionarea mai multor simulări fără a afecta informațiile documentelor operative, până la momentul confirmării uneia dintre ele.

În tabelul de căutare este posibil să filtrați și să vizualizați simulările generate într-o structură de tip arbore, unde părintele este simularea principală, iar ramurile sunt snapshot-urile, deci sub-simulări născute din modificarea simulării principale.

#### Câmpuri specifice

> **Număr**: indică numărul asociat simulării Gantt;     
> **Nume**: indică numele asociat simulării Gantt (implicit este propus numele utilizatorului, data și ora creării);    
> **Data inserării**: indică data inserării simulării Gantt;      
> **Tip**: indică codul [Tip Simulare Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type);           
> **Descriere tip**: indică descrierea [Tip Simulare Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Blochează document**: indică faptul că toate documentele incluse în crearea simulării Gantt sunt blocate;  
> **Validă**: indică faptul că simularea a fost confirmată și, prin urmare, modificările efectuate în Gantt au fost raportate în documentele legate;      
> **Snapshot**: dacă este activ, indică faptul că acesta este un *Tip Simulare Gantt* de tip Snapshot;
> **Operator**: indică utilizatorul simulării Gantt.