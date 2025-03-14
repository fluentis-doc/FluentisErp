---
title: Parametri MS
sidebar_position: 3
tags: [MS]
---

În acest form pot fi setați toți parametrii care se referă la gestionarea comenzilor de producție și modul în care trebuie să fie gestionate fazele succesive operației de generare a comenzilor.

## Metodă generare comandă

În această secțiune trebuie să fie inserat **Tipul comenzii** (Monoprodus/Multiprodus) care trebuie să fie propus în tab **Definire MPS**, tab *Parametri*.  
În momentul generării comenzii din *Definire MPS* este oricum posibilă modificarea acestei setări, precum și cea succesivă numită **Grupare produse după**, cu ajutorul căreia este posibilă stabilirea modului de grupare a articolelor în aceeași comandă *Monoprodus* sau *Multiprodus*.

Dacă *Tipul comenzii* este:  
- **Monoprodus**, unica grupare admisă este cea pe articol: acest tip de gestiune permite utilizatorului să genereze automat din sistem o serie de comenzi monoprodus, selectând o listă de linii din ordine clienți, linii care provin din previziuni de vânzare sau din planul principal de producție sau din substoc, făcând astfel încât fiecare comandă care va fi generată să aibă suma cantităților cerute pentru același articol. Data terminării unei comenzi grupate este întodeauna egală cu cea a necesarului cel mai apropiat datei în care se lansează elaborarea.  
- **Multiprodus**, grupările pot fi efectuate pe client, comandă de vânzare, client/comandă și permit utilizatorului să insereze aceeași comandă Multiprodus pentru articolele care provin din liniile ordinului client asociate la același client, comandă sau la aceeași comandă de vânzare a aceluiași client.

**Prioritate aprovizionare** va fi implicită când comenzile vor fi generate.

## Generare comandă din  

În această secțiune, utilizatorul poate alege, cu ajutorul parametrilor, dacă se generează comanda din *Ordine clienți* sau din *Previziuni* (previziuni de vânzare, plan principal de producție).  
Acești parametri pot fi modificați ulterior din fereastra [Generare comenzi de producție](/docs/planning/mps-master-production-scheduling/job-order-creation).  
În cazul *Generării comenzii de producție din previziuni*, utilizatorul trebuie să specifice dacă se generează comanda de producție cu scadență săptămânală sau lunară.

**Consideră disponibilitățile provenite din** permit utilizatorului să aleagă ca aplicația să considere disponibilitatea produselor finite pentru generarea comenzilor de producție din: **sistem loh**, **achiziții**, **vânzări**, **producție**, **gestiune**.

**Calcul cantitate pe baza LeadTime articol**: este utilizat în cazul în care nu dorește utilizarea ciclurilor de lucru pentru a calcula durata unei comenzi de producție; în acest caz, pentru a calcula durata comenzii se face referință la câmpul Lead time de producție prezent în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului.  

**Generare automată comenzi din ordine clienți**: dacă este activ, procedura creează automat comanda de producție imediat ce este inserată o linie ordin client. Comanda, în acest caz, este creată cu statusul *Neexaminată*. În general, este activat când pentru planificare se utilizează procedura *MRP* în locul *Planificării generale*.

**Actualizare dată marfă pregătită**: dacă este activ, atunci când se modifică (manual sau printr-o procedură)data de finalizare estimată a unei comenzi, noua dată este actualizată și în câmpul *Data marfă pregătită* al comenzii respective, precum și în ordinul client asociat. În plus, a fost creat și un tabel de log denumit **MS_ProductionJobOrderItemReadyGoodsDateLogs**, care înregistrează toate modificările efectuate. Acesta poate fi consultat doar prin SQL.  

**Generare automată flux de producție**: dacă este activ, utilizatorul poate decide să activeze flagul **Planificare**, care îi permite să definească nivelul de automatizare dorit în generarea fluxului de producție; acest flux va fi lansat direct cu butonul **Generare flux**, disponibil în [Generare comenzi de producție](/docs/planning/mps-master-production-scheduling/job-order-creation).  

De exemplu, utilizatorul poate activa flagul **Planificare**, care permite vizualizarea deja programată a comenzilor de producție imediat ce sunt generate de [Generare comenzi de producție](/docs/planning/mps-master-production-scheduling/job-order-creation). La rândul său, activarea flagului **Planificare** permite activarea flagului **Lansare**, care oferă posibilitatea de a decide dacă, după programarea automată, ordinele planificate de achiziție, producție și/sau SL trebuie de asemenea lansate automat.  

În acest ultim caz, pentru **ordinele planificate de producție**, poate fi activat și flagul **Lansare ordine de producție executive**, care permite generarea directă a ordinelor de producție executive, ignorând astfel și procedura de [Lansare ordine de producție](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders).  

:::note Important  
Acest automatism poate fi activat și la confirmarea ordinului client doar dacă în tabelul [Tipuri ordine client](/docs/configurations/tables/sales/sales-order-types/) a fost introdus **Tipul ordinului de producție** și activat flagul **Generare comandă de producție**.  
Se reamintește că, pentru declanșarea automatismului, ordinul client trebuie să fie *confirmat*, *listat* și trebuie să conțină *datele de livrare* și *marfă pregătită* în toate liniile articol.  
:::

## Estimare cost comandă       
În această secțiune se inserează parametri care vor fi propuși implicit la estimarea costului comenzilor de producție.    

> **Tip cost**: reprezintă tipul care va fi utilizat pentru valorizarea materiilor prime între cost *Ultim*, *Mediu* și *Standard*;    
> **Tip reîncărcare**: reprezintă tipul de reîncărcare dintre *Cost* (pe valoare) și *Procent*; în câmpul alăturat se inserează valoarea corespondentă;      
> **Cost lot**: dacă este activ, procedura valorizează costul materialul pe baza tipului de cost selectat, considerând doar valorile acelui lot specific;     
> **Cost comandă**: dacă este activ, procedura valorizează costul materialul pe baza tipului de cost selectat, considerând doar valorile acelei comenzi specifice.     

:::note Nota
În cazul în care **Cost lot** și **Cost comandă** sunt activate împreună, procedura va valoriza costul materialului pe baza tipului costului selectat, considerând valorile doar a acelei comenzi specifice și pentru acel specific lot.
::: 

## Gestiuni pentru planificare comenzi  

Acest tabel este o simplă vizualizare a listei de gestiuni pentru care trebuie verificată disponibilitatea în timpul generării unei comenzi de producție. Această listă este setată în *Calcul disponibilitate*, care se află în *Home > Articole > [Calcul disponibilitate](/docs/erp-home/registers/items/calculate-availability)*.  

**Parametri propuși pentru planificare**: permite definirea parametrilor ce vor fi sugerați pentru planificare; aceștia pot fi cei folosiți în ultima planificare efectuată sau cei utilizați de un anumit operator.  

**Zile până la următoarea planificare**: indică numărul de zile care vor fi adăugate pentru a extinde data de început a planificare cu capacitate finită (câmpul *De la data*), în tabul *Parametri planificare cu capacitate finită* al form-ului *Planificare cu capacitate finită*.  

**Număr maxim de luni pentru planificare**: indică numărul de luni care vor fi adăugate la data curentă pentru a determina data finală a programării (*Planificare până la*), prezentă în parametrii *Planificării generale*.  


**Numărul maxim de luni pentru calcularea disponibilității materialelor**: se poate insera numărul pentru calcularea disponibilității, și anume numărul de luni în care vor fi luate în considerare documentele; în schimb, documentele cu o dată ulterioară lunilor luate în considerare nu vor fi incluse în planificare. 

**Prima zi din săptămână vizualizată în calendarul fabricii**: combo box-ul permite alegerea zilei care va fi prima din săptămâna de lucru în [Calendar fabrică](/docs/configurations/tables/production/factory-calendar). De obicei este luni.

## Culori comenzi  
În această secțiune se pot insera culorile fontului și ale textului comenzilor de producție, pe baza statusului lor (neexaminate, lansate...etc).