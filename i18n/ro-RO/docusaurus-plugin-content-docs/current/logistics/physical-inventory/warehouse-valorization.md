---
title: Valorizare gestiune
description: Procedură pentru închiderea, evaluarea și alinierea contabilă a gestiunii în Fluentis ERP.
keywords:
  - valorizare gestiune
  - închidere stoc
  - stocuri
  - FIFO
  - aliniere contabilă
sidebar_position: 6
schema: TechArticle
tags:
  - gestiune
  - evaluare
  - logistică
  - contabilitate
last_update:
  author: Fluentis Documentation Team
---

# Valorizare gestiune

## Introducere

:::important
*Valorizarea gestiunii* în Fluentis este un element fundamental pentru gestionarea stocurilor și determinarea valorii bunurilor depozitate. Procedura permite efectuarea închiderii gestiunii la o dată specificată, înregistrând stocurile finale și aliniind informațiile logistice cu cele contabile, asigurând astfel o gestionare precisă a resurselor și a costurilor asociate.

Procedura de valorizare permite configurarea mai multor parametri, cum ar fi șablonul mișcării pentru stocurile finale, și oferă posibilitatea de a selecta criteriile de valorizare adecvate, cum ar fi costul ultim sau costul mediu. În acest mod, este posibil să se țină cont de mișcările efectuate pe parcursul anului pentru fiecare gestiune, obținând astfel o imagine detaliată și actualizată a valorii stocurilor.

În plus, procedura nu doar efectuează închiderea gestiunii, ci creează automat o înregistrare de deschidere pentru ziua următoare, asigurând continuitatea operațiunilor logistice. Utilizatorii pot de asemenea monitoriza închiderile efectuate printr-un istoric, care prezintă datele referitoare la costuri și cantități valorizare, facilitând astfel analizele și deciziile strategice pentru îmbunătățirea performanțelor companiei.
:::

## Procedura de închidere

Procedura permite efectuarea închiderii gestiunii la data introdusă de utilizator în câmpul **Data închiderii**.  
Implicit este propusă data curentă.

Automat este creată o mișcare de deschidere cu toate stocurile finale, datată **Data închiderii + 1 zi**, utilizând șablonul prezent în [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates) cu flag-ul **Stocuri** activ.

### Butoane specifice

- **Închidere**: permite lansarea procedurii de închidere care efectuează o serie de verificări privind congruența datelor din gestiune, semnalând eventualele erori care trebuie apoi corectate manual de către operator înainte de a relua procedura; în cazul în care nu există nicio eroare, procedura va efectua închiderea gestiunii la **Data închiderii** și deschiderea în ziua următoare cu stocurile finale.

- **Creează valorizare**: utilizat în localizările externe (ex. România, Croația) pentru recalcularea valorilor mișcărilor de gestiune, integrându-le și cu contabilitatea.

- **Restaurează închidere**: permite restabilirea ultimei închideri efectuate.

- **Aliniere cu contabilitatea**: utilizat în localizările externe precum România/Croația unde mișcările de gestiune trebuie înregistrate și în contabilitate (vezi documentația de mai jos).

:::important Recomandare
Închiderea gestiunii este recomandată în special în cazul în care există un număr mare de mișcări, deoarece aceasta permite păstrarea mișcărilor în arhivă pentru consultare, dar în același timp calculele de stoc, disponibilitate și costuri sunt simplificate, deoarece calculele vor începe din ziua următoare ultimei închideri efectuate.
:::

<u>Procedurile următoare sunt specifice pentru localizări externe precum România și Croația.</u>

## Creare valorizare

Procedura **Creare valorizare** calculează prețurile și modifică valorile în mișcările de gestiune.  
Este utilizată atunci când documentele sunt incomplete sau nefinalizate din motive precum:

- date insuficiente (lipsă prețuri sau cantități),
- erori ale furnizorului sau utilizatorului,
- întârzieri în livrarea documentelor,
- modificări ulterioare ale documentelor existente.

Prin lansarea acestei proceduri, aplicația recalculează noile valori ale articolelor (FIFO) și le introduce direct în documentul existent.      
Așadar, recapitulând, procedura modifică valorile în documentele existente, nu creează documente noi care să elimine/crească valoarea. Prin urmare, procedura este **ireversibilă** și nu este posibilă restabilirea datelor existente înainte de execuția procedurii.      
Această funcționalitate se aplică în principal perioadei în care se efectuează evaluarea.      
Recalcularea (FIFO) și modificarea valorilor în documente încep de la data închiderii gestiunii.

Procesarea se aplică perioadei evaluate, începând cu data închiderii gestiunii.

:::danger Atenție 
Verificați cu atenție valorile din [Parametri inițiali gestiune](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), mai ales dacă data închiderii gestiunii aparține anului precedent.
:::

*Exemplu*:  
Dacă data de început este 01.10.2023, iar data curentă ar putea fi, de exemplu, 28.3.2024,    
prin lansarea procedurii **Creare valorizare**, valorile din documentele de gestiune ar fi modificate de la 01.10.2023 până la data curentă. Astfel, deoarece 2023 a trecut și probabil este deja închis financiar, valorile din documentele de gestiune din 1.10.2023 până la 31.12.2023 ar fi modificate, modificând semnificativ rapoartele deja închise pentru 2023.

## Aliniere cu contabilitatea

Procedura de **Aliniere cu contabilitatea** se execută după **Crearea valorizării**.

După ce procedura **Creare valorizare** a fost finalizată și valorile din documentele de gestiune au fost modificate, este necesar să se aducă modificări și documentelor contabile aferente.        
În această etapă, procedura de **Aliniere cu contabilitatea** aliniază modificările aduse de valorizării gestiunii și modifică valorile din registrele contabile pentru a asigura alinierea financiară cu valorile din documentele de gestiune.

:::danger Atenție
Și această procedură este ireversibilă și modifică sumele din documentele existente.
:::


## Rezumat și detalii suplimentare

Valorizarea gestiunii permite gestionarea închiderii, înregistrarea stocurilor și alinierea valorilor logistice și contabile. Procedurile dedicate localizărilor externe permit, de asemenea, recalcularea valorilor (FIFO) și actualizarea automată a documentelor contabile.

*Detalii suplimentare*:

- [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates)  
- [Parametri inițiali gestiune](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
- [Funcționalități, butoane și câmpuri comune](/docs/guide/common)