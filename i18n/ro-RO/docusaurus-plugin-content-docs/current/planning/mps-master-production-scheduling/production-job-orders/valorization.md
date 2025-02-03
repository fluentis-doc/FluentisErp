---
title: Estimare cost 
sidebar_position: 6
---

## Parametrizări preliminare

Înainte de a începe, consultați informațiile din următoarele pagini referitoare la *Estimare cost comenzi de producție*:

> [Parametri MS -> tab Estimare cost comandă ](/docs/configurations/parameters/production/mps-parameters)
> [Tipuri documente ](/docs/configurations/tables/production/documents-types)
> [Tip estimare cost comandă ](/docs/configurations/tables/production/production-job-order-cost-type)
> [Parametri sistem lohn -> Valor. lucrare materiale la cost ](/docs/configurations/parameters/production/subcontractor-parameters/)

#### Butoane specifice 

> **Costuri adiționale **: permite introducerea unor costuri adiționale care pot fi propuse implicit în fiecare *Estimare cost* ulterioară (aceste costuri nu sunt legate de comanda individuală, ci sunt globale). Aceste costuri sunt împărțite în *Costuri directe*, *Costuri generale* și *Alte costuri*. Acestea vor fi raportate implicit în secțiunile corespunzătoare de costuri prevăzute și efective în tab-ul *Costuri totale*;
> **Execută estimare cost**: permite lansarea procedurii de Estimare cost comenzi;
> **Inserează Estimare cost**: permite introducerea unei noi estimări de cost: Automat vor fi introduse toate datele implicite introduse în faza de parametrizare preliminară, care e pot fi modificate manual pentru fiecare *Estimare cost*;
> **Șterge Estimare cost**: permite ștergerea unei estimări de cost deja create;
> **Extinde Estimare cost**: permite extinderea arborelui documentelor unei estimări de cost deja create.

:::note Notă
Tab-ul **Estimare cost** este prezent atât în gestionarea comenzilor monoprodus, cât și în cea pentru comenzile multiprodus. Pentru cele multiprodus, *Estimare cost* va lua în considerare toate articolele prezente în acea comandă.
:::

În partea superioară a form-ului este prezent un tabel care conține lista tuturor valorificărilor lansate pentru acea comandă, în timp ce în partea dreaptă sunt afișate informațiile generale referitoare la comanda selectată.
Partea inferioară a form-ului, în schimb, se compune din următoarele tab-uri:

## Detaliu costuri

În acest tab sunt afișate informațiile detaliate ale costurilor referitoare la *Estimarea cost* selectată în partea superioară a form-ului.
În tabelul din stânga este afișat arborele documentelor care compun *Estimarea cost* cu următoarele informații:
**Tip document**: reprezintă tipologia documentului;
**An**: reprezintă anul documentului;
**Număr**: reprezintă numărul documentului;
**Lot**: reprezintă numărul de lot al documentului (dacă este prezent);
**Tip**: reprezintă codul tipologiei documentului;
**Clasă**: reprezintă clasa articolului prezent în document;
**Cod articol**: reprezintă codul articolului prezent în document;
**Variantă**: reprezintă varianta articolului prezent în document;
**U.M.**: reprezintă unitatea de măsură a articolului prezent în document;
**Cantitate**: reprezintă cantitatea articolului prezent în document;
**Cost total prevăzut**: reprezintă costul total prevăzut al articolului prezent în document;
**Cost total efectiv**: reprezintă costul total efectiv al articolului prezent în document;
**Descriere articol**: reprezintă descrierea articolului prezent în document;
**Descriere variantă**: reprezintă descrierea variantei articolului prezent în document.

Odată selectat un document din arbore, în partea dreaptă a form-ului sunt afișate toate informațiile detaliate referitoare la acesta, împărțite în:

### Lucrări interne

**CdL**: reprezintă codul centrului de lucru;
**Mașină**: reprezintă codul mașinii;
**Grp manoperă**: reprezintă codul grupului manoperă;
**Ref. document**: reprezintă referința documentului;
**U.M. Timpuri**: reprezintă unitatea de măsură a timpilor;
**T. Setup prevăzut**: reprezintă timpul de setup prevăzut;
**T. Setup efectiv**: reprezintă timpul de setup efectiv;
**T. Mașină prevăzut**: reprezintă timpul mașină prevăzut;
**T. Mașină efectiv**: reprezintă timpul mașină efectiv;
**T. manoperă prevăzut**: reprezintă timpul manoperă prevăzut;
**T. manoperă efectiv**: reprezintă timpul manoperă efectiv;
**Descriere CdL**: reprezintă descrierea articolului centrului de lucru;
**Descriere mașin**: reprezintă descrierea mașinii;
**Descriere grup manoperă**: reprezintă descrierea grupului manoperă;
**Cost total prevăzu**: reprezintă costul total prevăzut;
**Cost total efectiv**: reprezintă costul total prevăzut.

:::note Notă
În cazul în care centrul de lucru efectiv este diferit de cel prevăzut, în acest tabel vor fi afișate două rânduri, unul cu centrul de lucru prevăzut cu costurile aferente și unul cu centrul de lucru efectiv.
:::

### Lucrări externe

**Terţ**: reprezintă subcontractorul;
**Ref. document**: reprezintă referința documentului;
**U.M.**: reprezintă unitatea de măsură gestionară;
**Cantitate prevăzută**: reprezintă cantitatea prevăzută de produs;
**Cantitate efectivă**: reprezintă cantitatea efectivă produsă;
**Preț unit. prevăzut**: reprezintă prețul unitar prevăzut;
**Preț unit. efectiv**: reprezintă prețul unitar efectiv;
**Cost total prevăzut**: reprezintă costul total prevăzut;
**Cost total efectiv**: reprezintă costul total prevăzut.

### Materiale

**Clasăî**: reprezintă clasa articolului;
**Cod articol**: reprezintă codul articolului;
**Descriere articol**: reprezintă descrierea articolului;
**Ref. document**: reprezintă referința documentului;
**U.M.**: reprezintă unitatea de măsură gestionară;
**Cantitate prevăzută**: reprezintă cantitatea prevăzută de achiziționat;
**Cantitate efectivă**: reprezintă cantitatea efectivă achiziționată;
**Preț unit. prevăzut**: reprezintă prețul unitar prevăzut;
**Preț unit. efectiv**: reprezintă prețul unitar efectiv;
**Variantă**: reprezintă varianta articolului;
**Descriere variantă**: reprezintă descrierea variantei articolului;
**Cost total prevăzut**: reprezintă costul total prevăzut;
**Cost total efectiv**: reprezintă costul total prevăzut.

În partea inferioară a form-ului este prezent un expander denumit **Detaliu cost document** în care sunt raportate următoarele informații:

**Cost materiale estimat / efectiv unitar**: reprezintă costul unitar al materialelor estimat / efectiv referitor la documentul selectat;
**Cost lucrare estimat / efectiv unitar**: reprezintă costul unitar al lucrărilor (interne și externe) estimat / efectiv referitor la documentul selectat;
**Total cost estimat / efectiv unitar**: reprezintă totalul costului unitar (materiale și lucrări) estimat / efectiv referitor la documentul selectat;
**Cost materiale estimat / efectiv total**: reprezintă costul unitar al materialelor estimat / efectiv referitor la documentul selectat;
**Cost lucrări estimat / efectiv total**: reprezintă costul unitar al lucrărilor (interne și externe) estimat / efectiv referitor la documentul selectat;
**Total cost estimat / efectiv total**: reprezintă totalul costului unitar (materiale și lucrări) estimat / efectiv referitor la documentul selectat.

## Costuri totale

În acest tab sunt raportate în mod sumar costurile estimate și efective referitoare la *Estimarea cost*  selectată.
În mod specific, pentru fiecare secțiune (estimat și efectiv), sunt raportate următoarele câmpuri:
**Cost gestiune**: totalul costurilor materiale și costul lucrărilor (interne și externe);
**Total costuri directe**: totalul costurilor introduse în secțiunea **Costuri directe**;
**Total cost direct comandă**: totalul *Costului de gestiune* și al *Totalului costurilor directe*;
**Adaos**: permite indicarea tipului de adaos, procentual sau valoric, și valoarea însăși;
**Total cost majorat**: reprezintă suma dintre *Total cost direct comandă* și al *Adaos*;
**Total costuri generale**: reprezintă totalul costurilor introduse în secțiunea **Costuri generale**;
**Total alte costuri**: reprezintă totalul costurilor introduse în secțiunea **Alte costuri**;
**Corecție**: permite introducerea unei valori pentru a corecta *Total cost majorat*;
**Rotunjire**: permite alegerea rotunjirii: superioară sau inferioară și ordinea de mărime;
**Total cost comandă**: reprezintă suma dintre *Total cost majorat*, *Total costuri generale*, *Total alte costuri*, *Corecții* și *Rotunjiri*. *Total cost comandă* este evidențiat în roșu în secțiunea *Costuri efective* când acesta este superior celui prezent în secțiunea de *Costuri estimate*.

:::note Notă
Câmpurile care sunt raportate și aliniate automat, între secțiunea *Costuri estimate* și secțiunea *Costuri efective*, sunt: *Adaos* (tipul de adaos și valoarea), *Corecții* și *Rotunjiri* (tipul de rotunjire și valoarea). În orice caz, în secțiunea *Costuri efective* se pot face modificări manuale pentru a le diferenția de valorile introduse în secțiunea *Costuri estimate*.
:::

Utilizând butonul **Costuri adiționale** este posibilă introducerea *Costurilor directe*, *Costurilor generale* și *Alte costuri* care pot fi propuse implicit, atât în costurile estimate, cât și în costurile efective.
Pentru fiecare dintre aceste costuri se poate defini dacă sunt de tip procentual sau valoaric, indicând valoarea însăși.

Pentru toate informațiile necesare creării acestor costuri, consultați pagina referitoare la [Elemente de cost](/docs/configurations/tables/general-settings/cost-elements).

## Analiză costuri

În acest tab sunt evidențiate toate componentele de cost care se referă la costurile estimate și efective, utilizând două tipuri de analiză:

> **Sintetic**: în acest tip de analiză este raportat *Costul de gestiune*, deci ca sumă dintre costurile materialelor și costurile lucrărilor, în plus sunt raportate *Costuri directe*, *Costuri generale* și *Alte costuri* și în final totalul *Adaosurilor* și *Corecțiilor*;
> **Analitic**: în acest tip, în schimb, sunt afișate grafic fiecare element, deci *Costul de gestiune* este împărțit în *Cost materiale*, *Cost lucrări interne* și *Cost lucrări externe*. Elementele referitoare la *Adaosuri* și *Corecții* sunt raportate separat. Sunt apoi raportate *Costurile directe*, *Costurile generale* și *Alte costuri*.

Pentru detalii despre funcționarea comună a form-urilor, faceți referire la paginile [Funcționalitate, butoane și câmpuri comune](/docs/guide/common).