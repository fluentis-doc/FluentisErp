---
title: MRP (MRP)
sidebar_position: 3
---

:::important Utilizare
Funcționalitatea **MRP** (**Planificare necesar de materiale**) din Fluentis permite utilizatorilor să analizeze disponibilitatea materialelor și a resurselor productive în funcție de planificarea producției. Cu această procedură, operatorul primește indicații despre cum să optimizeze gestionarea materialelor, inclusiv  pentru a anticipa aprovizionarea, a integra cantitățile necesare sau a anula ordinele superflue. MRP-ul din Fluentis ține cont de constrângerile de producție, de materiile prime, de semifabricatele disponibile sau comandate, permițând astfel un control eficient al fiecărei comenzi active.
:::

Această procedură permite utilizatorului să aibă analiza corectă a disponibilității materialelor și a resurselor productive în funcție de planificarea producției. Prin această elaborare, operatorul poate primi o serie de indicații referitoare la avansuri pentru unele livrări de materiale, integrarea cantităților necesare, precum și anularea ordinelor de articole inutile, pentru a facilita controlul și gestionarea operațiunilor. 
MRP-ul realizează o planificare a producției ținând cont de diferitele restricții de producție, de materiile prime și semifabricatele disponibile și de cele comandate. 
Datorită acestei proceduri, operatorul este capabil să analizeze acoperirea producției pentru fiecare comandă activă, gestionând și coordonând toate procesele referitoare la achiziție, producție și livrarea produsului finit. 
Principiul de bază al sistemului *necesar materiale de producție* este optimizarea stocurilor pe baza cerințelor companiei, ceea ce se reflectă într-o scădere a nivelurilor stocurilor și într-o creștere a eficienței. 
În esență, prin algoritmii acestei funcții, MRP-ul din Fluentis este capabil să cunoască angajamentul fiecărui material prezent în gestiune și disponibilitatea la data dorită.

### M.R.P.

În acest tab sunt vizualizate rezultatele elaborărilor MRP lansate anterior.

### Comandă

În acest tab este posibil să filtrați și să selectați comenzile de producție pe care doriți să le procesați, astfel încât să acționați parțial asupra comenzilor selectate sau global asupra întregului set de comenzi din producție.

### Parametri

În acest tab sunt setate toți parametrii generali care se referă la procedura MRP. Unele setări prezente în acest tab sunt preluate din form-ul [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) și se referă la un anumit articol.

**Planificare**:  
> **Planificare până la**: indică data de finalizare a planificării;    
> **Materiale**: dacă este activat, materialele sunt considerate în planificare;    
> **Resurse**: dacă este activat, resursele sunt considerate în planificare;    
> **Ordine planificate de achiziție**: dacă este activat, ordinele planificate de achiziție sunt considerate în planificare;    
> **Ordine planificate de producție**: dacă este activat, ordinele planificate de producție sunt considerate în planificare;    
> **Ordine planificate în sistem lohn**: dacă este activat, ordinele planificate în sistem lohn sunt considerate în planificare;   

**Pentru documentele fără date necesare:**    
> **Ordine furnizori** și **Cereri de achiziție**: puteți să decideți să nu considerați articolele fără dată prevăzută de primire sau să considerați ca dată prevăzută de livrare cea indicată manual în această secțiune;    
> **Ordini clienți**: puteți să decideți să nu considerați articolele fără dată prevăzută de primire sau să considerați ca dată prevăzută de livrare cea indicată manual în această secțiune;    

**Consideră disponibilitățile provenite din**:    
> **Achiziții**: dacă este activată, opțiunea permite ca documentele din *Achiziții* să fie luate în considerare în timpul elaborării procedurii MRP;   
> **Vânzări**: dacă este activată, opțiunea permite ca documentele din *Vânzări* să fie luate în considerare în timpul elaborării procedurii MRP;    
> **Gestiune**: dacă este activată, opțiunea permite ca documentele din *Gestiune* să fie luate în considerare în timpul elaborării procedurii MRP;   
> **Sistem lohn**: dacă este activată, opțiunea permite ca documentele din *Sistem lohn* să fie luate în considerare în timpul elaborării procedurii MRP;   
> **Planificare**: dacă este activată, opțiunea permite ca documentele din *Planificare* (deci Comenzi de Producție, Ordini Planificate de Achiziție, Sistem lohn și/sau Producție) să fie luate în considerare în timpul elaborării procedurii MRP;
> **Producție**: dacă este activată, opțiunea permite ca documentele din *Producție* lansată (deci Ordine de Producție) să fie luate în considerare în timpul elaborării procedurii MRP;    

**Consideră și alternativele materialelor**: *ÎN DEZVOLTARE*    
**Consideră și fazele alternative**: *ÎN DEZVOLTARE* 

**Citire liste/cicluri**:   
> **Versiune**: indică versiunea implicită care trebuie luată în considerare pentru listă/cicluri;   

**Consideră cantitățile în funcție de lotul economic**: dacă este activată, opțiunea permite ca pentru articol să fie considerat lotul economic (adică cantitatea minimă) de producție sau de achiziție;   
**Consideră multiplii lotului economic**: dacă este activată, opțiunea permite ca pentru articol să fie considerat multiplu lotului economic de producție sau de achiziție;   
**Reintegrare stoc minim articol**: dacă este activată, opțiunea permite ca pentru articol să fie reintegrat stocul minim setat în anagrafica sa, tab *Aprovizionare*;   
**Completare moment reaprovizionare articol**: dacă este activată, opțiunea permite ca pentru articol să fie completat momentul său de reaprovizionare în tab *Aprovizionare*; *ÎN DEZVOLTARE*       
**Consideră indicele de acoperire**: dacă este activată, opțiunea permite ca pentru articol să fie considerat indicele de acoperire setat în registrul său, tab *Aprovizionare*. Indicele de acoperire este exprimat în săptămâni și, atunci când este activată, indică sistemului să acopere necesarul pentru săptămânile inserate în acest câmp;   
**Fără sugestii**: dacă este activat, MRP nu face propuneri pentru acțiunile de creștere, scădere, anulare, anticipare și amânare asupra ordinelor planificate deja create;   
**Consideră trecutul**: dacă este activat, pentru acele documente cu data prevăzută de livrare trecută în raport cu data curentă (astăzi), consideră disponibilitatea și în trecut; dacă nu este activat, toate documentele trecute (în raport cu astăzi) vor fi considerate cu data prevăzută de livrare astăzi;       
**Diferențiază cererea de producție confirmată**: dacă este activat, MRP-ul este executat de două ori; prima execuție consideră doar necesarul care provine din documentele executive (arii: SCM - Achiziții, SCS - Sistem lohn și MES - Producție), generând ordine planificate, dacă este necesar, valorificând și câmpul "cantitate confirmată" (prezent în ordinul planificat creat recent); această primă execuție generează documentele strict necesare pentru a satisface cererea documentelor mai urgente, adică cele executive.
A doua execuție ia în considerare necesitățile provenite din toate documentele, inclusiv Comenzile de producție; această a doua execuție generează documentele lipsă fără a le optimiza cu cele generate în prima execuție pentru a oferi posibilitatea de a le confirma/lansa separat;       
**Consideră articolele fără comandă**: dacă este activat, în timpul elaborării procedurii MRP vor fi luate în considerare toate articolele cu politică de gestionare previzională și necesitate (cu excepția celor arhivate și/sau fictive) și cu politică de gestionare pe comandă doar dacă flag-ul *Comandă de producție* din parametrii MRP ai articolului este activat, chiar dacă sunt fără comandă;     
**Control necesar cu generare ordine planificate**: permite generareau sau nu a ordinelor planificate. Dacă nu este activat, sunt propuse doar indicațiile de creare a ordinelor planificate.  
*Observație*: ordinele planificate create de MRP nu au referințe la comenzi;    
**Articole gestionate cu stoc**: preia toate articolele care au politică de gestionare *Cu stoc* în parametrii MRP ai articolului. În plus, în parametrii MRP, cel puțin unul dintre parametrii: *stoc minim* și *Moment reaprovizionare* trebuie să fie setat;    
**Toleranță pentru ocuparea C.d.L.**: este utilizat în generarea ocupării pentru fazele ordinelor planificate de producție pentru a defini când MRP-ul trebuie să utilizeze o fază de lucru alternativă.     

### Istoric

Permite filtrarea și vizualizarea listei procedurilor MRP lansate, cu inserarea utilizatorului și a momentului în care au fost executate.