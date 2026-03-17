---
title: Ordine de Producție
description: Ghid complet pentru crearea, gestionarea și configurarea ordinelor de producție în Fluentis ERP.
keywords:
  - ordine de producție
  - producție Fluentis
  - ciclu de lucru
  - listă de materiale
  - materiale producție
  - faze de lucru
sidebar_position: 3
schema: TechArticle
tags:
  - Producție
  - Ordine
  - Planificare
last_update:
  author: Fluentis Documentation Team
---

# Ordine de Producție

De obicei, ordinele de producție sunt generate automat de procedura **Lansare ordine planificate**.  
Pentru a crea manual un ordin de producție este necesar:

1. Să creați un ordin planificat de producție.
2. Să îl lansați cu procedura dedicată.

## Antet ordin de producție

Antetul rezumă toate informațiile generale ale ordinului, printre care: număr, lot și an, datele comenzii și ale clientului de referință, proiectul asociat, data de început și sfârșit, informațiile referitoare la articolul care urmează să fie produs, cu versiunea listei componentelor și a ciclului, cantitatea de produs și cea produsă.

:::important
Gestiunea și șablonul indicate în antet au **prioritate maximă** față de ceilalți parametri.  
Vedeți și [Parametri de producție](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
:::

#### Butoane specifice

- **Completează date ordin**: permite introducerea sau actualizarea, pentru articolul introdus în ordinul de producție, datelor referitoare la materiale, faze, setări, echipamente, atribute și note diverse, preluându-le din lista componentelor și ciclul de lucru al articolului, **valabile la data completării datelor**.  
- **Recalculează data inițială**: actualizează data de început a ordinului și a fazelor aferente ca urmare a modificărilor timpilor de lucru și/sau a cantității de produs a articolului din ordinul de producție.  
- **Generează listă de componente**: generează lista componentelor pe baza datelor introduse în ordinul de producție sau actualizează datele existente cu cele introduse în ordin.  
- **Generează ciclu de lucru**: creează ciclul de lucru al articolului pe baza datelor introduse în ordin sau actualizează datele existente cu cele introduse în ordin.

#### Câmpuri specifice

- **Stare**: indică starea ordinului de producție: *Lansat* este starea inițială a ordinului de producție abia generat de procedura de lansare a ordinelor planificate, în timp ce *În execuție* este starea ce trebuie atribuită ordinului pentru a putea continua cu raportările de producție.     
- **Obligatoriu**: activând acest flag, ordinul de producție devine obligatoriu. Deci [Planificarea la capacitate finită](/docs/planning/ms-master-scheduling/finite-capacityscheduling) nu îl va repoziționa în timp ci îl va menține fix în acele date. În plus, acesta va fi luat în considerare și de procedura [M.R.P.](/docs/planning/ms-master-scheduling/mrp) atunci când este activ opțiunea *Diferentiază cererea de producție confirmată*.

## Materiale

În acest tab sunt enumerate materialele de prim nivel din lista componentelor a produsului finit care urmează să fie produs, dar utilizatorul poate modifica datele și/sau adăuga materiale suplimentare la lista de componente a ordinului de producție.  
Pentru a le importa din lista componentelor folosiți butonul **Completare date ordin**.

#### Butone specifice

> **Inserează material**: permite introducerea unui nou material în tabel;
> **Șterge material**: permite ștergerea materialelor introduse în tabel.

**Clasă**: reprezintă clasa articolului;  
**Cod articol**: reprezintă codul articolului;
**Variantă**: reprezintă eventuala variantă a articolului;
**UM**: reprezintă unitatea de măsură principală a articolului;
**Unitate de măsură**: reprezintă eventuala unitate de măsură alternativă a articolului;
**Dată consum**: coincide cu data prevăzută pentru începerea fazei ordinului de producție la care este asociat acel material; dacă nu este asociat niciunei faze, coincide cu începutul primei faze a ciclului;
**Cantitate de consum**: reprezintă cantitatea unitară necesară pentru acest articol (prevăzută de [Lista de componente](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)) care poate fi de asemenea modificată;
**Cantitate totală**: reprezintă cantitatea obținută prin multiplicarea *Cantității de consum* cu *Cantitatea de produs*;
**Cantitate alternativă**: reprezintă cantitatea totală, dar exprimată în unitatea de măsură alternativă;
**Cantitate prelevată**: reprezintă cantitatea prelevată prin intermediul [Listei de ieşiri](/docs/production/pp-production-in-progress/picking-materials-list);
**Fix / Variabil**: se referă la cantitatea materialului, dacă este fixă sau variabilă, aceasta fiind preluată din [Lista de componente](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management);
**Procent deșeu**: se inserează sau se preia din [Lista de componente](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) eventualul procent de deșeu pentru acest articol;
**Fază / Subfază**: cu un dublu clic se deschide un *Help faze de lucru* din care se poate selecta faza și subfaza corespunzătoare și astfel să se atribuie materialul selectat unei anumite faze de lucru a articolului;
**Gestiune**: indică gestiuneul din care va fi descărcat acest articol;
**Șablon**: indică șablonul de gestiune cu care va fi descărcat acest articol;
**Prioritate**: reprezintă prioritatea componentei, dacă este inserată în [Lista de componente](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management). Aceasta contribuie la unicitatea materialului, astfel încât același material poate fi inserat de mai multe ori cu priorități diferite. În plus, poate fi modificată manual, la fel ca toate celelalte date prezente în această tabel;
**Cantitate disponibilă**: reprezintă cantitatea disponibilă a articolului dată de procedura **Recalculează fezabilitatea** prezentă în [Secvența fazelor](/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown);
**De declarat pe mobil**: dacă este activat, materialul va fi propus automat în formul declarației de producție din WMS.

## Faze

În acest tab sunt raportate fazele ciclului de lucru referitoare la produsul finit care urmează să fie produs, însă utilizatorul poate modifica datele și/sau adăuga faze suplimentare la ordinul de producție.
Pentru a importa datele direct din ciclul de lucru al articolului, utilizați butonul **Completează date ordin** prezent în bara de instrumente.
În ordinul de producție o fază se poate modifica din internă în externă, astfel încât să se introducă și terțistul. La salvarea acestuia, procedura va crea ordinul în sistem lohn. În plus, în cazul în care o fază externă este convertită în internă, procedura va elimina automat ordinul în sistem lohn asociat.

#### Butone specifice

> **Inserează faza**: permite introducerea unei noi faze în tabel;  
> **Șterge fază**: permite ștergerea fazelor introduse în tabel.

#### Câmpuri specifice

**Cod fază / Fază / Subfază**: cu un dublu clic se deschide helpul fazelor de lucru din care se poate selecta faza și subfaza corespunzătoare;
**Control calitate**: dacă este activat, această opțiune indică faptul că această fază este supusă controlului calității și în tabul specific se poate indica *Planul de control* care va fi utilizat pentru a verifica articolul în declarația de producție efectuată;
**Fază productivă**: dacă este activ, indică faptul că faza este productivă și se pot insera rapoarte de producție (deci activându-l se dorește ca producția pentru această fază să fie înregistrată); dacă nu este activ, nu va fi posibilă declararea fazei respective;
**Fază cu mișcare**: dacă este activă, indică faptul că în momentul în care se înregistrează faza de producție se creează și mișcări de gestiune; deci continuând cu declarația de producție, produsul finit se va încărca în gestiune materia primă utilizată pentru producție în acea fază va fi descărcată;  
**Centru de lucru**: reprezintă centrul de lucru, adică mașina pe care se va desfășura acea fază specifică;  
**Timp fix**: dacă este activat, indică faptul că timpul pentru acea fază este fix, deci nu viariază în funcție de cantitate; acest lucru este preluat de la centrul de lucru introdus;  
**Cantitate fază**: reprezintă cantitatea totală de bucăți care urmează să fie produsă în acea fază;  
**Dată început / sfârșit prevăzută**: reprezintă datele de început și sfârșit ale fazei respective; schimbând Datele prevăzute de început și sfârșit ale lucrării se modifică automat și acestea. Ele sunt calculate în baza timpilor introduși în fazele de lucru, și mai precis în funcție de cel mai mare dintre timpul total al operatorului și timpul total al mașinii pentru faza selectată;  
**Total timp mașină**: indică timpul total al mașinii, determinat de produsul dintre *timpul mașinii* și *numărul de mașini*;
**Timp mașină**: indică timpul de lucru al acelei mașini pentru acea fază;
**Număr mașini**: indică numărul de mașini utilizate în acea fază;
**Total timp operator**: indică timpul total al operatorului, dat de produsul dintre *timpul operatorului* și *numărul de operatori*;
**Timp operator**: indică timpul de lucru al manoperei pentru acea fază;
**Număr operatori**: indică numărul de operatori angajați în acea fază;
**Fază / Subfază suprapusă**: în aceste două câmpuri, în cazul suprapunerii, se va indica faza care se intenționează a fi suprapusă fazei selectate;
**Locație**: permite asocierea unei locații de gestiune la fază; acest lucru înseamnă că toate articolele utilizate în acea fază vor fi prezente în acea locație;
**Descriere terț**: cu dublu clic puteți deschide help-ul de câmp pentru a putea selecta contul sintetic și analiticul terțului. Această câmp este activ doar în cazul în care faza este *Externă*. Se observă că *terțul* este, de asemenea, preluat din faza de lucru inserată în ciclul de lucru al articolului;
**Ordin sistem lohn**: funcționează doar pentru fazele externe;
**Descriere centru de lucru**: indică descrierea centrului de lucru al fazei;
**Raport definitiv**: indică faptul că a fost listat definitiv [Foaia de lucru](/docs/production/pp-production-in-progress/reports/worksheet);
**Dată listare foaie de lucru**: indică data listării [Foii de lucru](/docs/production/pp-production-in-progress/reports/worksheet) în mod definitiv;
**Număr progresiv fișă de lucru**: indică numărul progresiv al [Foii de lucru](/docs/production/pp-production-in-progress/reports/worksheet) listată în mod definitiv.

### Faze - Proprietăți

În tab sunt afișate următoarele date referitoare la faza selectată în grilă:

**Descriere fază**: indică descrierea fazei și subfazei selectate;  
**Tip**: în această combo se poate seta tipul lucrării (intern sau extern);  
**Suprapunere**: permite inserarea tipului unei eventuale suprapuneri a fazelor. Putem avea suprapunere *Totală* (în acest caz faza în cauză se suprapune total pe faza indicată), *Pe bucăți* (în acest caz este necesar să se indice după câte bucăți produse de această fază va începe faza următoare), *Pe timp* (în acest caz este necesar să se indice după câte minute de când a început faza indicată va începe faza următoare);  
**UM Timp**: reprezintă unitatea de măsură a timpilor fazei; se poate decide să se gestioneze timpii fazei în secunde, minute, ore și zile. De obicei, timpii fazelor interne se gestionează în minute iar cei ai fazelor externe în zile, dar depinde foarte mult de tipologia de companie pentru care se setează lucrul;
**Mașină**: este propusă automat, preluată din centrul de lucru care a fost anterior introdus în tabel;  
**Locaţie producţie**: indică locația de producție în cadrul căruia va fi produs articolul; acest lucru este preluat din comanda de producție;
**Grup manoperă**: este propusă automat, preluată din centrul de lucru care a fost anterior introdus în tabel;  
**Cantitate de bucăți pe fază**: indică numărul de bucăți produse pentru fiecare execuție a acelei faze;  
**Valoare**: reprezintă valoarea eventualei suprapuneri, utilizând criteriile specificate mai sus;  
**Utilizare**: dacă opțiunea este activată, înseamnă că se dorește ca timpul de așteptare/coadă să crească timpul de rezervare a Centrului de Lucru pentru acea fază;  
**Timp de așteptare sau coadă**: indică timpul care este necesar să se aștepte la sfârșitul execuției fazei înainte de a o reexecuta. În plus, activând opțiunea **Utilizare** acest timp de așteptare va fi considerat ca rezervare suplimentară a timpului centrului de lucru pentru acea fază.

### Faze - Extra Data

Conține eventualele date suplimentare referitoare la faza selectată.

### Faze - Documente atașate

Permite atașarea de documente la faza selectată, care vor fi apoi vizibile și în [MES](/docs/production/mes/mes-intro).

## Setare

Permite inserarea timpilor de setare pentru faza selectată în tabul anterior.  
Este important de reținut că, datele referitoare la centrul de lucru, mașină și operatori trebuie introduse doar dacă sunt diferite de cele utilizate pentru fază, altfel dacă sunt goale, acestea vor fi considerate automat ca făcând parte din faza principală.

#### Câmpuri specifice

**Fază / Sub-fază / Descriere**: în aceste câmpuri sunt afișate informațiile referitoare la faza selectată în tabul *Faze*;  
**Tip**: indică tipul fazei (internă sau externă);  
**Tip suprapunere**: indică eventualul tip de suprapunere;  
**UM Timp**: indică unitatea de măsură temporală a fazei;  
**Centru de lucru**: în aceste câmpuri se introduce codul (și descrierea aferentă) *centrului de lucru* inserat pentru setare; (de utilizat doar dacă centrul de lucru pentru setare este diferit de cel utilizat în faza selectată);      
**Mașină**: în aceste câmpuri se introduce codul (și descrierea aferentă) mașinii pentru setare; (de utilizat doar dacă mașina utilizată pentru setare este diferită de cea utilizată în faza selectată);        
**Grup manoperă**: în aceste câmpuri se introduce codul (și descrierea aferentă) grupului de manoperă pentru setare; (de utilizat doar dacă grupul de manoperă utilizat pentru setare este diferit de cel utilizat în faza selectată);         
**Valoare**: indică valoarea eventualei suprapuneri;  
**Centru de lucru**: în aceste câmpuri este afișat codul și descrierea centrului de lucru aferent fazei selectate;  
**Data început**: este afișată data de început a fazei selectate în tabul *Faze*;  
**Data sfârșit**: este afișată data de sfârșit a fazei selectate în tabul *Faze*;  
**Timp setare**: se introduce timpul de setare. Este un timp fix, care nu variază în funcție de cantitățile de produs din faza selectată;  
**Timp resetare**: se introduce timpul de resetare. Se utilizează în cazul în care este necesară resetarea centrului de lucru între două execuții ale aceleiași faze și se adaugă la timpul de setare;           
**Număr mașini**: se indică numărul de mașini utilizate pentru setare;  
**Număr operatori**: se indică numărul de operatori utilizați pentru setare.

## Echipamente

Acest tab permite inserarea echipamentelor care trebuie să fie utilizate în producția fazei selectate în tabul *Faze*.

#### Câmpuri specifice  
**Secvență**: în acest câmp se poate indica secvența în care trebuie utilizate echipamentele;  

**Echipamente**: se poate apela codul echipamentului, preluat din tabelul  [Echipamente](/docs/configurations/tables/production/equipments);  
**Planificat**: dacă este activ, indică faptul că echipamentul va fi ocupat în timpul producției; cu acest flag, [Planificarea F.C.S.](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) va lua în considerare nu articolul introdus prin lista de echipamente, ci articolul introdus în câmpurile clasă și cod, care trebuie să aibă ca *Natura articol* tipul *Echipament* sau *Unealtă*;          
**De reordonat**: dacă este activ, procedura de [Planificare F.C.S.](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) va crea un ordin planificat pentru aprovizionarea echipamentului respectiv în cazul în care nu este disponibil; dacă nu este activ, înseamnă că acel echipament nu trebuie reordonat, ci poate fi utilizat repetat în funcție de disponibilitatea sa (de exemplu, o matriță);            
**Clasă/Cod articol**: reprezintă clasa și codul articolului (helpul filtrează automat doar articolele care sunt identificate drept *Echipamente* în câmpul *Natura Articol*);  
**Variantă**: reprezintă varianta articolului;  
**Cantitate**: reprezintă cantitatea articolului.
**Lot**: indică lotul articolului;  
**Număr de serie**: indică numărul de serie al articolului.  

## Control calitate

Acest tab afișează detaliile testelor planificate de [controlul de calitate](/docs/quality/quality-intro) pentru fază/subfază.

## Notă fază

În acest tab este vizualizată nota asociată fazei de lucru selectate în tabul *Faze*. Poate fi modificată de utilizator în ordin de producție.

## Instrucțiuni operative

În acest tab se pot atașa și vizualiza *Instrucțiunile operative* legate de faza de lucru selectată în tabul *Faze*. Acestea vor fi vizibile și în [Fluentis MES](/docs/production/mes/mes-intro). 

## Angajați

În acest tab se pot introduce operatorii care vor efectua fazele individuale ale ciclului de producție. (*Se utilizează doar pentru personalizări*).    

## Extra Data

Pentru descrierea detaliată a datelor suplimentare, consultați articolul [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Rezumat și detalii suplimentare

Gestionarea ordinelor de producție în Fluentis include:

- Creare automată sau manuală.
- Gestionare avansată a ciclului, listei componentelor și modificărilor operative.
- Legătură cu MRP, planificare, calitate și MES.
- Instrumente de suport precum completare date, suprapuneri și control resurse.

Detalii suplimentare:

- [Listă de componente](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)  
- [Ciclu de lucru](/docs/erp-home/registers/production/routes/new-route)  
- [Planificare FCS](/docs/planning/ms-master-scheduling/fcs-scheduling)  
- [MES](/docs/production/mes/mes-intro)  
- [Funcționalități, butoane și câmpuri comune](/docs/guide/common)