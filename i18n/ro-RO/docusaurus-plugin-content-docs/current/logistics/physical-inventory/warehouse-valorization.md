---
title: Valorizare Gestiune
sidebar_position: 6
---

:::important Utilizare
Procedura este un element fundamental în gestionarea stocurilor și determinarea valorii bunurilor stocate. Permite operatorilor să efectueze închideri de gestiune la o dată specificată, înregistrând stocurile și facilitând alinierea informațiilor logistice cu cele contabile, asigurând astfel o gestionare precisă a resurselor și a costurilor asociate.
:::

**Valorizare Gestiune** permite efectuarea închiderii de gestiune la data inserată de utilizator în câmpul **Dată închidere** (implicit aceasta este propusă ca fiind data curentă).    
În plus, procedura creează și o mișcare de deschidere cu toate stocurile care au data egală cu **Data închiderii** plus o zi, utilizând șablonul specificat în [Șabloanele de gestiune](/docs/configurations/tables/logistics/warehouse-templates) cu opțiunea **Stocuri** activată.

#### Butoane specifice  
> - **Închidere**: permite inițierea procedurii de închidere care efectuează o serie de verificări asupra coerenței datelor de gestiune, semnalând eventualele erori care apoi trebuie corectate manual de către operator înainte de a continua. În cazul în care nu există erori, procedura va efectua închiderea gestiunii la **Data închiderii** și deschiderea în ziua următoare cu stocurile;             
> - **Creează valorizare**: permite ca mișcările de gestiune să fie înregistrate și în contabilitate (vezi documentația de mai jos);      
> - **Restaurează închiderea**: permite restaurarea ultimei închideri efectuate;     
> - **Aliniere cu contabilitatea**: permite ca mișcările de gestiune să fie înregistrate înregistrate și în contabilitate (vezi documentația de mai jos).

:::note Recomandare
Activitatea de închidere a gestiunii este recomandată în special în cazul în care există un număr mare de mișcări, deoarece aceasta permite păstrarea mișcărilor în arhivă pentru consultare, dar și simplificarea calculării stocului, disponibilității și costurilor deoarece calculele vor porni din ziua următoare ultimei închideri efectuate.
:::

## Creează valorizare

Procedura **Creează valorizare** calculează prețurile și modifică valorile în mișcările de gestiune.        
Este utilizată în cazul documentelor de gestiune incomplete, nefinalizate sau neconciliate.     
Acest lucru se întâmplă în principal din cauza datelor insuficiente (preț și cantitate) în timpul inserării documentelor de gestiune, erori ale furnizorului sau inserții greșite din partea utilizatorului, întârzieri în livrarea documentelor de gestiune sau modificări ulterioare în documentele existente.     
Inițiind această procedură, aplicația recalculează valorile noi ale articolelor (FIFO) și le introduce direct în documentul existent.      
Așadar, pe scurt, procedura modifică valorile în documentele existente, nu creează documente noi care să elimine/să crească valoarea. Ca urmare, procedura este ireversibilă și nu este posibil să se restaureze datele existente înainte de executarea procedurii.      
Această funcționalitate se aplică în principal perioadei în care se efectuează valorizarea.      
Recalcularea (FIFO) și modificarea valorilor în documente încep de la data închiderii gestiunii.     

:::danger ATENȚIE
Este important să se acorde o atenție deosebită setărilor din [Parametrii inițiali gestiune](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), mai ales dacă data închiderii gestiunii aparține anului anterior.       
:::

De exemplu, Data de început este 01.10.2023, în timp ce data curentă ar putea fi, de exemplu, 28.3.2024.       
Inițiind procedura **Creează valorizare**, valorile din documentele de gestiune ar fi modificate de la 01.10.2023 până la data curentă. Așadar, deoarece 2023 a trecut și este probabil deja închis financiar, valorile din documentele de gestiune din 01.10.2023 până la 31.12.2023 ar fi modificate, afectând semnificativ rapoartele deja finalizate pentru 2023.      

## Aliniere cu contabilitatea

Procedura de **Aliniere cu contabilitatea** este efectuată după procedura de **Creează valorizare**.        
După ce procedura de **Creează valorizare** a fost finalizată și valorile din documentele de gestiune au fost modificate, este necesar să se modifice și documentele contabile aferente.        
În această fază, procedura de **Aliniere cu contabilitatea** aliniază modificările aduse de valorizarea gestiunii și modifică valorile din registrele contabile pentru a asigura alinierea financiară cu valorile din documentele de gestiune.       

:::danger Atenție
De asemenea, această procedură este ireversibilă și modifică sumele din documentele existente.        
:::