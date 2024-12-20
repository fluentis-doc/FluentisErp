---
title: Estimare cost
sidebar_position: 6
---

## Configurări preliminare  

Înainte de a continua, consultați informațiile indicate în paginile următoare referitoare la *Estimare cost comenzi de producție*:    

> - [Parametri MS -> tab Estimare cost comandă](/docs/configurations/parameters/production/mps-parameters)     
> - [Tipuri documente](/docs/configurations/tables/production/documents-types)     
> - [Tip Estimare cost comandă](/docs/configurations/tables/production/production-job-order-cost-type)      
> - [Parametri sistem lohn -> Valor. lucrări materiale la cost ](/docs/configurations/parameters/production/subcontractor-parameters/)       

#### Butoane specifice

> - **Costuri suplimentare**: permite introducerea unor costuri suplimentare care pot fi propuse implicit în fiecare Estimare cost ulterioară (aceste costuri nu sunt legate de comanda individuală, ci sunt globale). Aceste costuri se împart în *Costuri directe*, *Costuri generale* și *Alte costuri*. Acestea vor fi raportate implicit în secțiunile corespunzătoare de costuri estimate și efective în tab-ul *Costuri totale*;     
> - **Execută Estimare cost**: permite lansarea procedurii de Estimare cost a comenzilor;    
> - **Introducere Estimare cost**: permite introducerea unei noi estimări de cost; automat vor fi introduse toate datele implicite introduse în etapa de parametrizare preliminară, care pot fi modificate manual pentru Estimare cost individuală;     
> - **Șterge Estimare cost**: permite ștergerea unei estimări de cost deja create;     
> - **Explodează Estimare cost**: permite desfășurarea arborelui documentelor unei estimări de cost deja create. 

:::note Nota
Tab-ul **Estimare cost** este prezent în gestionarea atât a comenzilor monoprodus, cât și a celor multiprodus; în cazul comenzilor multiprodus, *Estimare cost* va examina toate articolele prezente în acea comandă.
::: 

În partea superioară a form-ului este prezent un tabel care conține lista tuturor valorificărilor lansate pentru acea comandă, în timp ce în partea dreaptă sunt afișate informațiile generale referitoare la comanda selectată.
Partea inferioară a form-ului, în schimb, este compusă din următoarele tab-uri:

## Detaliu costuri

În acest tab sunt afișate informațiile detaliate ale costurilor referitoare la *Estimare cost* selectată în partea superioară a form-ului
În tabelul din stânga este posibil să vizualizați arborele documentelor care compun *Estimare cost* cu următoarele informații:
**Tip document**: indică tipul documentului;    
**An**: indică anul documentului;     
**Număr**: indică numărul documentului;     
**Lot**: indică numărul lotului documentului (dacă este prezent);     
**Tip**: reprezintă codul tipului documentului;    
**Clasă**: indică clasa articolului prezent în document;     
**Cod articol**: reprezintă codul articolului prezent în document;    
**Variantă**: indică varianta articolului prezent în document;      
**U.M.**: indică unitatea de măsură a articolului prezent în document;      
**Cantitate**: reprezintă cantitatea articolului prezent în document;      
**Cost tot. prevăzut**: reprezintă costul total prevăzut (estimat) al articolului prezent în document;      
**Cost tot. efectiv**: reprezintă costul total efectiv (realizat) al articolului prezent în document;      
**Descriere articol**: reprezintă descrierea articolului prezent în document;      
**Descriere variantă**: indică descrierea variantei articolului prezent în document.      

Odată selectat un document din arbore, în partea dreaptă a form-ului sunt afișate toate informațiile detaliate referitoare la acesta, împărțite în:

#### Lucrări interne 

**C.D.L.**: reprezintă codul centrului de lucru;    
**Mașină**: reprezintă codul mașinii;     
**Grp MDO**: reprezintă codul grupului de operatori;     
**Ref. Document**: indică referința documentului;    
**U.M. Timp**: indică unitatea de măsură a timpului;    
**T. Setup prevăzut**: indică timpul de setup prevăzut;     
**T. Setup efectiv**: indică timpul de setup efectiv;    
**T. Mașină prevăzut**: indică timpul mașinii prevăzut;    
**T. Mașină efectiv**: indică timpul mașinii efectiv;     
**T. MDO prevăzut)**: indică timpul de muncă prevăzut;    
**T. MDO efectiv**: indică timpul de muncă efectiv;    
**Descriere C.D.L.**: indică descrierea articolului centrului de lucru; 
**Descriere mașină**: indică descrierea mașinii;     
**Descriere Grp. MDO**: indică descrierea grupului de muncitori;        
**Cost tot. prevăzut (Cost tot. previsto)**: reprezintă costul total prevăzut;    
**Cost tot. efectiv**: reprezintă costul total efectiv. 

:::note Nota
În cazul în care centrul de lucru efectiv este diferit de cel prevăzut, în acest tabel vor fi afișate două rânduri, unul cu centrul de lucru prevăzut și costurile corespunzătoare și unul cu centrul de lucru efectiv. 
::: 

#### Lucrări externe  

**Terț **: indică terțul; 
**Ref. Document **: indică referința documentului;    
**U.M. **: indică unitatea de măsură gestională;    
**Cant. prevăzută**: reprezintă cantitatea prevăzută de produs;    
**Cant. efectivă (Q.tà effettiva)**: reprezintă cantitatea efectiv produsă;    
**Preț unit. prevăzut**: indică prețul unitar prevăzut;    
**Preț unit. efectiv**: indică prețul unitar efectiv;    
**Cost tot. prevăzut**: reprezintă costul total prevăzut;    
**Cost tot. efectiv**: reprezintă costul total efectiv.    

#### Materiale    

**Clas**: indică clasa articolului;     
**Cod articol**: reprezintă codul articolului;    
**Descriere articol**: indică descrierea articolului;      
**Ref. Document**: indică referința documentului;    
**U.M.**: indică unitatea de măsură gestionară;    
**Cant. prevăzută**: reprezintă cantitatea prevăzută de achiziționat;    
**Cant. efectivă**: reprezintă cantitatea efectivă achiziționată;    
**Preț unit. prevăzut**: indică prețul unitar prevăzut;    
**Preț unit. efectiv (Prz. Unit. effettivo)**: indică prețul unitar efectiv;     
**Variantă**: indică varianta articolului;     
**Descriere variantă**: indică descrierea variantei articolului;   
**Cost tot. prevăzut**: reprezintă costul total prevăzut;    
**Cost tot. efectiv**: reprezintă costul total efectiv.   

În partea inferioară a form-ului este prezent un expander numit **Detaliu cost document** în care sunt raportate următoarele informații:

**Cost materiale prevăzut / efectiv unitar**: reprezintă costul unitar al materialelor prevăzut / efectiv referitor la documentul selectat;    
**Cost lucrări prevăzut / efectiv unitar**: reprezintă costul unitar al lucrărilor (interne și externe) prevăzut / efectiv referitor la documentul selectat;  
**Total cost prevăzut / efectiv unitar**: indică totalul costului unitar (materiale și lucrări) prevăzut / efectiv referitor la documentul selectat;    
**Cost materiale prevăzut / efectiv total**: reprezintă costul unitar al materialelor prevăzut / efectiv referitor la documentul selectat;    
**Cost lucrări prevăzut / efectiv total**: reprezintă costul unitar al lucrărilor (interne și externe) prevăzut / efectiv referitor la documentul selectat;  
**Total cost prevăzut / efectiv total**: indică totalul costului unitar (materiale și lucrări) prevăzut / efectiv referitor la documentul selectat;  

## Costuri totale 

În acest tab sunt prezentate în mod rezumativ costurile estimate și efective referitoare la *Estimare cost* selectată.     
În mod specific, pentru fiecare secțiune (prevăzut și efectiv), sunt raportate următoarele câmpuri:     
**Cost industrial**: totalul costurilor materialelor și costul lucrărilor (interne și externe);     
**Total costuri directe**: totalul costurilor introduse în secțiunea **Costuri directe**;    
**Total cost direct comandă**: totalul *Costului industrial* și al *Totalului costurilor directe*;     
**Reîncărcat**: permite indicarea tipului de reîncărcare, procentual sau valoric, precum și valoarea acestuia;    
**Total cost reîncărcat**: reprezintă suma dintre *Total cost direct comandă* și *Reîncărcare*;     
**Total costuri generale**: reprezintă totalul costurilor introduse în secțiunea **Costuri generale**;      
**Total alte costuri**: reprezintă totalul costurilor introduse în secțiunea **Alte costuri**;     
**Corecție**: permite introducerea unei valori pentru a corecta *Totalul costului reîncărcat*;      
**Rotunjire**: permite rotunjirea în plus sau în minus și ordinea de mărime;   
**Total cost comandă**: reprezintă suma dintre *Total cost reîncărcat*, *Total costuri generale*, *Total alte costuri*, *Corecție* și *Rotunjire*. *Totalul costului comenzii* este evidențiat în roșu în secțiunea *Costuri efective* atunci când acesta este mai mare decât cel prezent în secțiunea *Costuri estimate*.           

:::note Nota
Câmpurile care sunt raportate și aliniate automat între secțiunea *Costuri estimate* și cea a *Costuri efective* sunt: *Reîncărcare* (tipul de reîncărcare și valoarea), *Corecție* și *Rotunjire* (tipul de rotunjire și valoarea). În orice caz, în secțiunea *Costuri efective* este posibil să le modificați manual pentru a le diferenția de valorile introduse în secțiunea *Costuri estimate*.
::: 

Cu butonul **Costuri suplimentare** puteți să introduceți *Costuri directe*, *Costuri generale* și *Alte costuri* care pot fi propuse implicit, atât în costurile estimate, cât și în cele efective.      
Pentru fiecare dintre aceste costuri puteți să definiți dacă sunt de tip procentual sau în valoare, indicând și valoarea acestora.    

Pentru toate informațiile necesare creării acestor costuri, consultați pagina referitoare la [Elemente de cost](/docs/configurations/tables/general-settings/cost-elements).         

## Analiza costurilor  

În acest tab sunt evidențiate toate componentele de cost referitoare la costurile estimate și efective, utilizând două tipuri de analiză:      

> - **Sintetică**: în acest tip de analiză este raportat *Costul industrial*, deci ca sumă a costurilor materialelor și a costurilor lucrărilor. De asemenea sunt raportate *Costurile directe*, *Costurile generale* și *Alte costuri*, iar în final totalul *Reîncărcărilor* și *Corecțiilor*;     
> **Analitică**: în acest tip sunt raportate în grafic toate articolele individual. Deci *Costul industrial* este împărțit în *Costul materialelor*, *Costul lucrărilor interne* și *Costul lucrărilor externe*. De asemenea, articolele referitoare la *Reîncărcări* și *Corecții* sunt raportate separat; evident, sunt raportate și *Costurile directe*, *Costurile generale* și *Alte costuri*.       

Pentru detalii despre funcționarea comună a form-urilor, vă rugăm să consultați link-ul [Funcționalitate, butoane și câmpuri comune (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).