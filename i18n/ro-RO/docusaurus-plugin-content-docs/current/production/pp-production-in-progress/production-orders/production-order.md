---
title: Ordine de producție
sidebar_position: 3
---

În  mod normal*, ordinele de producție sunt generate automat de procedura de *Lansare ordine planificate*.
Pentru a crea un ordin de producție manual, este necesar să creați mai întâi ordinul planificat de producție și apoi să-l lansați utilizând procedura dedicată.

## 1. Antet

În antet sunt prezentate toate datele referitoare la ordinul de producție, precum: numărul, lotul și anul, datele comenzii și ale clientului de referință, proiectul asociat, data de început și sfârșit, informațiile referitoare la articolul de produs, cu versiunea listei componentelor și ciclul, cantitatea de produs și cea produsă.
Este de asemenea posibilă inserarea gestiunii și șablonului, care vor fi folosite pentru încărcarea produsului finit în gestiune; acestea vor avea prioritate maximă față de toți ceilalți parametri, așa cum este explicat în detaliu în [Parametrii de producție](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

#### Butoane specifice

> **Completează date ordin**: apelează procedura care permite introducerea și/sau actualizarea, pentru articolul introdus în ordinul de producție, a tuturor datelor referitoare la materiale, faze, echipamente, dotări, atribute și diverse note, preluându-le din lista componentelor și ciclul de lucru al articolului, **valabile la data completării datelor**.
> **Recalculează data inițială**: apelează procedura care permite actualizarea datei de început a ordinului de producție și, eventual, a fazelor de lucru ale acestuia ca urmare a modificării timpilor de lucru și/sau a cantității de produs a articolului vizat de ordinul de producție.
> **Generează lista de componente**: permite generarea listei componentelor bazată pe datele introduse în ordinul de producție sau actualizarea datelor existente cu cele introduse în ordin.
> **Generare ciclu de lucru**: permite crearea ciclului de lucru al articolului bazat pe datele introduse în ordin sau actualizarea datelor existente cu cele introduse în ordin.

#### Câmpuri specifice

**Stare**: indică starea ordinului de producție: *Lansat* este starea inițială a ordinului de producție, abia generat prin procedura de lansare a ordinelor planificate, în timp ce *Executiv* este starea de atribuit ordinului pentru a putea continua cu raportările de producție.

**Obligatoriu**: activând această opțiune, ordinul de producție devine obligatoriu. Deci [Planificarea la capacitate finită](/docs/planning/ms-master-scheduling/finite-capacityscheduling) nu îl va repoziționa în timp ci îl va menține fix în acele date. În plus, aceasta va fi luată în considerare și de procedura [M.R.P.](/docs/planning/ms-master-scheduling/mrp) atunci când opțiunea *Diferențiază cererea de producție confirmată* este activ.

## 2. Materiale

În acest tab sunt raportate materialele de prim nivel din listei componentelor referitoare la produsul finit care urmează să fie produs, însă utilizatorul poate modifica datele și/sau adăuga materiale suplimentare la lista de componente a ordinului de producție.
Pentru a importa datele direct din lista componentelor articolului, este necesar să se facă clic pe butonul **Completează date ordin** prezent în bara de instrumente.

#### Butone specifice

> **Inserează material**: permite introducerea unui nou material în tabel;
> **Șterge material**: permite ștergerea materialelor introduse în tabel.

#### Câmpuri specifice

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

## 3. Faze

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

În tabul **Proprietăți** sunt vizualizate datele referitoare la faza selectată în tabel:

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

Permite atașarea de documente la faza selectată, acestea vor fi vizibile și în [MES](/docs/production/mes/mes-intro).

## 4. Montaj

În acest tab este posibil să se definească timpii referitori la montajul fazei selectate în tabul anterior.
Este important de reținut că, datele referitoare la centrul de lucru, mașină și operatori ar trebui introduse doar dacă sunt diferite de cele utilizate pentru fază, altfel dacă sunt goale, acestea vor fi considerate automat ca făcând parte din faza principală.

#### Câmpuri specifice

**Fază / Subfază / Descriere**: în aceste câmpuri sunt vizualizate informațiile referitoare la faza care este selectată în tabul *Faze*;
**Tip**: indică tipologia fazei (internă sau externă);  
**Tip suprapunere**: indică eventualul tip de suprapunere;
**UM Timp**: indică unitatea de măsură temporală a fazei;
**Centru de lucru**: reprezintă codul (și descrierea aferentă) centrului de lucru stabilit pentru montaj; (de utilizat doar dacă centrul de lucru pentru montaj este diferit de centrul de lucru utilizat în faza selectată);
**Mașină**: reprezintă codul (și descrierea aferentă) mașinii pentru montaj; (de utilizat doar dacă mașina utilizată pentru montaj este diferită de mașina utilizată în faza selectată);
**Grup manoperă**: reprezintă codul (și descrierea aferentă) grupului de manoperă pentru montaj; (de utilizat doar dacă grupul de manoperă utilizat pentru montaj este diferit de cel utilizat în faza selectată);
**Valoare**: indică valoarea eventualei suprapuneri;
**Centru de lucru**: în aceste câmpuri este vizualizat codul și descrierea Centrului de Lucru al fazei selectate;
**Data început**: este vizualizată data începutului fazei selectate în tabul *Faze*;
**Data sfârșit**: este vizualizată data de sfârșit a fazei selectate în tabul *Faze*;
**Timp montaj**: este introdus timpul montajului. Este un timp fix, care nu variază odată cu modificarea cantității de produs în faza selectată;
**Timp remontaj**: se utilizează în cazul în care este necesară remontarea centrului de lucru între o execuție și alta a fazei respective și se adaugă la timpul de montaj;
**Număr mașini**: se indică numărul de mașini rezervate pentru montaj;
**Număr operatori**: se indică numărul de operatori rezervați pentru montaj.

## 5. Echipamente

Acest tab permite inserarea echipamentelor care trebuie să fie utilizate în producția fazei selectate în tabul *Faze*.

#### Câmpuri specifice

**Secvență**: în acest câmp se inserează secvența în care trebuie folosite echipamentele;  
**Echipamente**: reprezintă codul echipamentului, preluat din tabelul [Echipamente](/docs/configurations/tables/production/equipments);  
**Clasă/Cod articol**: reprezintă clasa și codul articolului (helpul filtrează automat doar articolele care sunt identificate drept *Echipamente* în câmpul *Natura Articol*);  
**Variantă**: reprezintă varianta articolului;  
**Cantitate**: reprezintă cantitatea articolului.

## 6. Control calitate

Acest tab afișează detaliile testelor planificate de [controlul de calitate](/docs/quality/quality-intro) pentru fază/subfază.

## 7. Notă fază

În acest tab este vizualizată nota asociată fazei de lucru selectate în tabul *Faze*. 

## 8. Instrucțiuni operative

În acest tab sunt afișate *Instrucțiunile operative* referitoare la faza de lucru selectată în tabul *Faze*. Acestea vor fi vizualizate și în [Fluentis MES](/docs/production/mes/mes-intro).

## 9. Angajați

În acest tab se inserează operatorii care trebuie să realizeze fazele individuale ale ciclului de producție. (*Acest lucru este utilizat doar pentru personalizări*).

## 10. Extra Data

Pentru o descrierea detaliată a acestora consultați documentul [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).