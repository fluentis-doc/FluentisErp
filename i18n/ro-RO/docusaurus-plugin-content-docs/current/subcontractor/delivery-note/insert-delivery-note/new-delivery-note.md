---
title: Nou aviz de livrare
sidebar_position: 1
---

Acesta se află pe calea **Sistem lohn > Ordine > Nouă ordin sistem lohn** sau prin butonul **Nou** care se găsește în formularul [Caută ordine sistem lohn](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## **1. Date obligatorii**

Aplicația solicită introducerea **Furnizorului** (Terț) titular al avizului, folosind help-ul dedicat pentru conturi prezent în antetul avizului. Automat vor fi propuse datele pentru: **An**, **Număr**, **Data** și **Tipul avizului de livrare** (propunere identică cu cea introdusă în *Parametri sistem lohn*), care pot fi modificate de utilizator.

## **2. Antet**

După ce a selectat datele obligatorii în secțiunea superioară, utilizatorul poate continua introducerea următoarelor date [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau cu [helpul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ori, în baza datelor introduse în registrul terțului, aplicația completează câmpurile *automat*.

### 2.1 Date furnizor

Introducând **Furnizorul**, sunt *propuse* automat toate datele specifice din tab-ul **Antet**, conform datelor setate anterior în [registrul furnizorului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), în câmpurile corespunzătoare adresei și în *secțiuni*:

- **Monedă**: [Monedă](/docs/guide/common/glossary/glossary-intro#currency), [Curs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data monedă)](/docs/guide/common/glossary/glossary-intro#currency-date).  
- **Națiune**: [Națiune](/docs/guide/common/glossary/glossary-intro#country), [Limbă](/docs/guide/common/glossary/glossary-intro#language), [Zonă](/docs/guide/common/glossary/glossary-intro#zone)  
- **Expediere**: [Expediere](/docs/guide/common/glossary/glossary-intro#shipment), [Incoterm](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaj](/docs/guide/common/glossary/glossary-intro#packing), [Ofertă de prețuri](/docs/guide/common/glossary/glossary-intro#sales-price-list) și [Intervalul de validitate](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Date opționale antet

**Stare aviz**: cu aceste 2 opțiuni se identifică starea avizului, care poate fi listat (după ce a fost lansată tipărirea fizică a raportului avizului de livrare) și descărcat (după ce s-a realizat descărcarea avizului din gestiune). Dacă avizul nu a fost tipărit, nu se poate descărca;

**Referința Noastră/Voastră**: la finalizarea procedurii de [Executare ordin](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), este propusă informația prezentă în câmpul omonim din ordin;

**Proiect**: folosind [helpul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), se poate asocia documentul la un Proiect.

#### Butoane specifice

> [Livrări prevăzute](/docs/subcontractor/delivery-note/insert-delivery-note/new-delivery-note): apelează procedura pentru a crea un aviz dintr-un ordin. Se activează după introducerea furnizorului și tipului de avizului. Ordinul de executat trebuie să aibă setat opțiunea *Listat* și *Data confirmare ordin* completată;  
> **Descărcare automată**: utilizată pentru a descărca automat gestiunea cu articolele selectate. Acest câmp va fi editabil numai după ce a fost activat câmpul *Listat*.

### 2.3 Plăți

**Soluții de plată** sunt preluate automat din *Registrul furnizor > tab Plăți* și pot fi modificate/șterse de utilizator.

Dacă **Tipului de plată** este asociat un scont financiar, valoarea acestuia este luată în considerare doar din punct de vedere contabil, deci în scadențele avizului, nu în totalul său.

Dacă documentul provine dintr-o ordin, tipurile de plată pot fi preluate din primul document sau din registrul furnizorului.

#### Buton specific

> **Inserează/Șterge plăți**: folosit pentru a introduce/șterge rândurile de plată selectate.

### 2.4 Discounturi

Sunt propuse doar Discounturile predefinite, preluate din *registrul furnizor > tab Discounturi* și pot fi modificate/șterse de utilizator.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Agenți

Se indică codul agentului și comisionul său pe fiecare linie articol. Sunt propuse codul și procentul definite în *Registru terț > tab Agenți*.

Când comisionul nu asociat terțului în registrul său, trebuie oricum introdus un agent, însă cu comisionul NULL, deoarece dacă ar fi cu comisionul 0, ar însemna că agentul este asociat, dar că nu primește comision.

Aceeași secțiune este reluată pentru fiecare rând articol în tab-ul *Agenți*.

#### Buton specific

**Șterge agenți**: permite ștergerea agenților selectați.

## **Proceduri antet:**

### *Executare aviz*

În antetul avizului de livrare, apăsând butonul **Livrări prevăzute** se va deschide formulul ordinelor clientului documentului.

Procedura permite crearea avizului de livrare din executarea ordinului aferent. Deci este posibilă inserarea articolelor în aviz, executând total sau parțial un întreg ordin sau un rând.

#### Condiții pentru utilizarea procedurii:

 -  furnizorul ordinelor trebuie să fie același cu cel al avizului;  
 -  ordinul de executat trebuie să aibă setat opțiunea *Listat*;  
 - tipurile de document trebuie să fie compatibili.

#### Procedură

Filtrele pe furnizor și monedă sunt preluate automat, în funcție de furnizorul selectat în aviz.

După setarea filtrelor dorite, efectuați clic pe butonul *Caută* pentru a vizualiza în tabel fiecare ordin tipărit și neexecutat sau executat parțial.

:::note Aviz
Procedura preia toate datele prezente în ordin și, ca urmare, vor fi aplicate condițiile existente în ordin, chiar dacă acestea s-au schimbat între timp.
:::

În tabrlul de rezultate, utilizatorul are apoi posibilitatea de a:

 1. selecta *Ordinul în întregime*. Pentru aceasta, este suficient să selectați opțiunea de la începutul rândului de ordin.  
 2. selecta doar *anumite* *articole* propuse. Pentru aceasta, este suficient să bifați opțiunea de la începutul rândului de articol.  
 3. selecta doar *anumite articole*, dar pentru *o anumită cantitate*. În acest caz, trebuie modificată cantitatea de executat.

Pentru a finaliza procedura, trebuie apoi să faceți clic pe butonul **Transfer**, care va prelua toate datele prezente în ordin și le va transfera în aviz.

#### Butoane specifice

> **Caută** permite aplicarea filtrelor de căutare la nivelul întregii baze de date cu Ordine introduse și încă nelivrate sau livrate parțial.  
> **Transfer** permite transferul în tabelul tab-ului Livrări al avizului în sistem lohn a articolelor selectate în fereastra inferioară.  
> **Extinde** permite extinderea întregului arbore al ordinelor din tabelul de mai jos pentru a vizualiza articolele conținute în ele.  
> **Comprimă** permite restrângerea vizualizării rândurilor de articol, afișând doar rândurile de ordin.  
> **Selectează tot** permite selectarea tuturor articolelor din listă.

## **3. Livrare**

În acest tab sunt introduse materialele care trebuie livrate către terț. Ele pot fi inserate automat prin procedura de *Executare din ordin* sau manual de către utilizator.

#### Butoane specifice

> **Inserează material**: apelează procedura pentru a introduce un nou material în tabelul articolelor din tab-ul *Livrări*.  
> **Șterge material**: apelează procedura pentru a șterge un material din tabelul articolelor  din tab-ul *Livrări*.

#### Câmpuri specifice

**Ordin S/L număr și an**: se afișează numărul și anul ordinului în sistem lohn din care a fost extras rândul de articol. Dacă rândul a fost introdus manual, această coloană rămâne goală;

**Dată prevăzută livrare**: reprezintă data de livrare prevăzută a materialului, preluată din tab-ul *Materiale de livrat* din ordinul în sistem lohn din care a fost generat rândul de articol al avizului;

**Reintrare prevăzută**: reprezintă data de reintrare prevăzută a produsului finit care trebuie realizat de terț utilizând materialul livrat, preluată din tab-ul *Articole de produs* al ordinului în sistem lohn din care a fost generat rândul de articol al avizului;

**Nr. rând**: reprezintă un simplu număr progresiv al rândului documentului, editabil de utilizator;

**UM**: reprezintă unitatea de măsură de gestiune a articolului livrat;

**Fază/Sub-fază**: sunt afișate codul fazei și sub-fazei de producție a ordinului de producție de care articolul este eventual asociat. Acest lucru se întâmplă dacă ordinul în sistem lohn din care a fost creat acest rând de aviz a fost generat dintr-o fază externă a unui ordin de producție;

**Cantitate**: reprezintă cantitatea livrată terțului, editabilă de utilizator;

**Gestiune**: reprezintă codul gestiunii din care este preluată marfa de livrat către terț. Codul gestiunii este propus identic cu cel setat în rândul din tab-ul *Materiale de livrat* al ordinului în sistem lohn din care a fost generat rândul de aviz, dar poate fi modificat. Dacă este activă opțiunea din *Parametri sistem lohn*, *Consideră gestiunile în baza tipului avizului de livrare*, gestiunea propusă va fi cea setat în tabelul ‘Tipuri avize de vânzare’, în coloana *Gestiune*;

**Șablon**: reprezintă codul șablonului de gestiune care se va folosi pentru a efectua scoaterea din gestiune a mărfii care trebuie livrate către terț. Codul șablonului de gestiune este propus identic cu cel setat în rândul din tab-ul *Materiale de livrat* al ordinului în sistem lohn din care a fost generat rândul avizului, dar se poate modifica. Dacă este activă opțiunea din *Parametri sistem lohn*, numită *Consideră gestiunile în baza tipului avizului de livrare*, șablonul propus va fi cel setat în tabelul ‘Tipuri avize de vânzare’, în coloana *Gestiune*;

**Preț**: reprezintă prețul unitar al articolului. Este o coloană editabilă și nu este obligatorie. Se utilizează, de regulă, când avizului de livrare trebuie să treacă printr-o vamă;

**TVA**: reprezintă codul TVA, care poate fi introdus manual sau preluat automat de procedură din registrul terțului sau din registrul articolului aferent rândului, în funcție de caz.

**Tip facturare achiziții**: reprezintă codul tipului facturării, sau poate fi preluat automat de procedură din registrul articolului aferent rândului.  

**Greutăți**: reprezintă greutatea netă și greutatea brută totală ale rândurilor articol. Se preiau greutățile din registrul articol, înmulțite cu cantitatea de pe rând.

### 3.1 Descărcare loturi  

În acest tab există posibilitatea de a seta, pentru rândul selectat în tabel, loturile care se descarcă din gestiune cu cantitatea de articol prelevată pentru a fi expediată terțului, în cazul în care este vorba de mai multe loturi diferite prelevate cu același rând de aviz.

Tabelul de loturi permite utilizatorului să preia lotul folosind ‘Help loturi’, care filtrează loturile disponibile ale articolului selectat în tabelul superioar. Informațiile introduse în tabelul loturilor includ: tipul codului lotului, codul lotului, lotul furnizor, tipul lotului, data de început, data expirării, cantitatea lotului, locația, datele furnizorului lotului. Desigur, suma cantităților diferitelor loturi trebuie să corespundă exact cantității livrate din rândul articolului.

### 3.2 Date material  

În acest tab sunt afișate următoarele informații legate de rândul selectat în tabel:

**Clasă, cod, descriere și variantă articol, cantitate de livrat, unitate de măsură, gestiune, șablon, orin S/L**: sunt o serie de informații doar preluate din rândul avizului selectat;

**Proiect**: reprezintă comanda de vânzare asociată rândului de avizului. De obicei, este apelată comanda de vânzare introdusă în rândul ordinului în sistem lohn de unde a fost generat rândul avizului;

**Note**: în acest câmp, utilizatorul poate introduce o notă referitoare la rândul selectat.

## **4. Rezumate**

În secțiune sunt prezentate informațiile principale ale întregului document.

### 4.1 Discounturi finale

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Cheltuieli/Discounturi/Majorări finale  

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Alte câmpuri  

**Volum**: este propus volumul cumulativ, rezultat din suma volumelor articolelor  (valoarea este preluată din *Registrul articol > tab Greutăți/Dimensiuni*), atunci când unitatea de măsură a volumului articolelor  corespunde cu cea introdusă în parametrii facturii. Sunt luate în considerare doar articolele care au acest câmp completat;  
**Greutate netă**: este propusă greutatea netă cumulativă, rezultată din suma greutăților articolelor (valoarea este preluată din *Registrul articol > tab Greutăți/Dimensiuni*), atunci când unitatea de măsură a greutății articolelor corespunde cu cea introdusă în parametrii facturii. Sunt luate în considerare doar articolele care au acest câmp completat;  
**Greutate brută**: este propusă greutatea brută cumulativă, rezultată din suma greutăților articolelor (valoarea este preluată din *Registrul articol > tab Greutăți/Dimensiuni*), atunci când unitatea de măsură a greutății articolelor corespunde cu cea introdusă în parametrii facturii. Sunt luate în considerare doar articolele care au acest câmp completat;  
**Coli (Colli)**: este propus numărul de colete, pe baza datelor introduse în *Registrul articol > tab Greutăți/Dimensiuni*, în câmpurile *Articole prezente într-un colet* sau *Colete necesare pentru a forma articolul*. Sunt luate în considerare doar articolele care au acest câmp completat.

### 4.3 Transport 

Este propus automat *Transportul în sarcina* prezent în *Registrul contactului > tab [livrare](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (buton: Expeditor/Destinatar/Transportator), însă datele pot fi modificate.

### 4.4 Totaluri document 

**Valoare brută articole**: reprezintă suma valorilor tuturor articolelor;  
**Acont**: reprezintă valoarea unui eventual avans primit pentru document;  
**Valoare promo**: reprezintă valoarea articolelor de tip cadou inserate în tab-ul *articole*;  
**Total discounturi aplicate**: reprezintă valoarea totală a discounturilor aplicate asupra articolelor, fără a lua în calcul discounturile finale;  
**Valoare netă articole**: *Valoare brută articole* – *Total discounturi aplicate*;  
**Total discounturi finale**: reprezintă valoarea discounturilor finale exprimate în procent din valoarea brută a articolelor;  
**Valoare netă discounturi finale**: *Valoare netă articole* – *Total discounturi finale*;  
**Cheltuieli de încasare**: reprezintă suma cheltuielilor de încasare introduse în tabelul de *Cheltuieli*;  
**Taxă timbru**: reprezintă suma cheltuielilor de timbru introduse în tabelul de *Cheltuieli*;  
**Bază impozabilă**: *Valoare netă articole* – *Discounturi finale* + *Total cheltuieli nedocumentate* + *Total cheltuieli documentate*;  
**TVA**: reprezintă suma valorilor conținute în recapitulările TVA;  
**Total**: *Bază impozabilă* + *TVA*.