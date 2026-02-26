---
title: Resurse de producție
description: Configurarea și gestionarea resurselor productive în modulul MES din Fluentis, incluzând setări generale, layout, controale de calitate și suspendări.
keywords:
  - MES Fluentis
  - Resurse de producție
  - Configurare MES
  - Centru de lucru
  - Import resurse
  - Declarații de producție
  - Controale de calitate MES
sidebar_position: 4
schema: TechArticle
tags:
  - MES
  - Producție
  - Configurare
  - Fluentis
last_update:
  author: Fluentis Documentation Team
---

# Resurse de producție

:::important Utilizare
Resursele productive din sistemul MES Fluentis permit gestionarea tuturor parametrilor necesari pentru planificarea și optimizarea operațiunilor de producție. Printr-o interfață intuitivă, utilizatorii pot importa diferite tipuri de resurse, printre care articole, mașini, angajați, centre de lucru și instrumente de măsură.

De asemenea, este posibilă personalizarea layout-ului și comportamentului centrului de lucru, adaptând sistemul la nevoile specifice ale companiei, într-un mod simplu, rapid și complet autonom.

Această funcționalitate nu doar simplifică gestionarea resurselor de producție, ci permite și copierea facilă a setărilor predefinite de la resurse existente, asigurând că datele sunt mereu actualizate și coerente.
:::


#### Buton specific

- **Importă**: permite importul în tabelul **Resurse de producție** a următoarelor tipuri de resurse: *Articol*, *Mașină*, *Angajat*, *Centru de lucru* și *Instrument de măsură*; este posibilă importarea mai multora simultan, selectându-le prin pop-up-ul *Importă*.  
Dacă în tabel există deja înregistrări și operatorul selectează una cu un anumit tip de resursă, la apăsarea butonului *Importă*, procedura va filtra deja pentru acel tip de resursă și va copia toate setările introduse în resursa selectată (cea deja prezentă în grila de resurse) în noile înregistrări ale resurselor introduse prin procedura de import.

### Resurse de producție

form-ul este compus dintr-o primă grilă ce conține datele referitoare la resursele introduse, printre care:       
- **Cod**: indică codul resursei de producție;       
- **Descriere**: indică descrierea codului resursei de producție;      
- **Tip de resursă**: indică tipul resursei dintre: *Angajat*, *Articol*, *Mașină*, *Instrument de măsură* și *Centru de lucru*;         
- **Mașină**: indică codul mașinii asociate resursei; este activ doar dacă *Tipul de resursă* este *Mașină*;       
- **Descriere mașină**: indică descrierea mașinii asociate resursei; este activ doar dacă *Tipul de resursă* este *Mașină*;     
- **Centru de lucru**: indică codul centrului de lucru asociat resursei; este activ doar dacă *Tipul de resursă* este *Centru de lucru*;      
- **Descriere centru de lucru**: indică descrierea centrului de lucru asociat resursei; este activ doar dacă *Tipul de resursă* este *Centru de lucru*;     
- **Angajat**: indică codul angajatului asociat resursei; este activ doar dacă *Tipul de resursă* este *Angajat*;     
- **Nume de familie**: indică numele de familie al angajatului asociat resursei; este activ doar dacă *Tipul de resursă* este *Angajat*;     
- **Prenume**: indică prenumele angajatului asociat resursei; este activ doar dacă *Tipul de resursă* este *Angajat*;     
- **Clasă**: indică clasa articolului asociat resursei; este activ doar dacă *Tipul de resursă* este *Instrument de măsură*;       
- **Cod articol**: reprezintă codul articolului asociat resursei; este activ doar dacă *Tipul de resursă* este *Instrument de măsură*;       
- **Descriere articol**: indică descrierea articolului asociat resursei; este activ doar dacă *Tipul de resursă* este *Instrument de măsură*;       
- **Instrument de măsură**: indică codul articolului echipament asociat resursei; este activ doar dacă *Tipul de resursă* este *Instrument de măsură*;        
- **Secunde de refresh**: indică numărul de secunde pentru refresh-ul formularelor MES, de exemplu: pentru refresh-ul datelor din tabul *Analiză* sau refresh-ul timpului de lucru automat.

Fiecărei resurse introduse în grila superioară îi sunt asociate toate informațiile prezente în taburile de mai jos.

## Generale

În acest tab sunt prezente o serie de informații care influențează comportamentul resursei de producție individuale în timpul *Declarațiilor de producție*.

- **Operator obligatoriu**: dacă este activ, obligă operatorul să introducă în câmpul *Resursă* al form-ului principal de Declarații de producție o resursă de tip angajat înainte de a putea continua cu restul activităților. Acesta va fi angajatul indicat ca operator care efectuează declarația;         
- **Parolă obligatorie**: dacă este activ, obligă operatorul să introducă o parolă pentru a putea continua; parolele cerute sunt în următoarea ordine: parola prezentă în form-ul [Angajat](/docs/project-management/registers/employee/new-employee/) și, dacă nu este prezentă, se cere parola de sistem. Dacă niciuna nu este prezentă, se cere introducerea uneia.  
:::note Notă
Dacă sunt activate ambele flaguri **Operator obligatoriu** și **Parolă obligatorie**, operatorul va trebui să introducă mai întâi angajatul și apoi, la cererea procedurii, parola.
:::

- **Echipă obligatorie**: dacă este activ, activează un control care obligă operatorul să introducă cel puțin un membru al echipei înainte de a continua activitatea de declarație;     
- **Permite semnalare suprapusă**: dacă este activ, este posibilă declararea fazelor unei ordin de producție fără a urma secvența prevăzută indicată în ciclu; dacă nu este activ, nu este posibilă nicio suprapunere de faze sau declararea fazelor fără a urma secvența ciclului;    
- **Activează multi-fază**: dacă este activ, permite activarea posibilității de a declara mai multe faze simultan.         
În acest caz, timpul este împărțit între diversele faze astfel: dacă se declară o cantitate (produsă sau respinsă), atunci timpul fiecărei faze se calculează cu formula:             
"**(Timp declarat / cantitate totală (produsă + respinsă)) x cantitatea declarată (produsă + respinsă) a fiecărei faze = Timpul fazei**"           
dacă nu se declară nicio cantitate, ci doar timp, atunci se calculează cu formula:              
"**Timp declarat / numărul de faze = Timpul fazei**"       
- **Număr maxim de faze**: permite indicarea numărului maxim de faze ce pot fi declarate simultan;    
- **Inserare manuală timp**: dacă este activ, permite introducerea timpului de lucru de către operator;     
- **Timp propus**: dacă este activ, permite ca timpul de lucru să fie propus automat;         
- **Metodă distribuţie cantitate**: indică modul în care este repartizată cantitatea în cazul declarației simultane a mai multor faze de lucru. Modurile active sunt: *Secvență*: cantitatea este repartizată pe faze în funcție de secvența planificată sau de introducere, *Proporțional*: cantitatea este repartizată proporțional în funcție de cantitatea produsă a declarației și de cantitățile de produs ale fiecărei faze; *Manual* permite indicarea cantităților produse manual pe fiecare fază;     
- **Secunde de refresh**: indică timpul de refresh al form-ului, dacă nu este indicat, form-ul va fi actualizat doar manual de către operator.             
- **Declarare cantitate material obligatorie**: dacă este activ, împreună cu flagul **Obligatoriu declarare material manuală** prezent în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ai articolului, face ca în tabul *Materiale* al Declarațiilor de producție articolul să fie propus cu cantitate zero, iar utilizatorul va fi obligat să introducă manual o valoare înainte de a putea continua;    
- **Fișă de lucru obligatorie**: dacă este activ, activează un control care împiedică operatorul să adauge o fază care nu are încă flagul "Tipărire definitivă" activat. Acest flag "Tipărire definitivă" poate fi activat din procedura de tipărire a [Fișei de lucru](/docs/production/pp-production-in-progress/reports/worksheet);    
- **Tipărire etichete obligatorie**: dacă este activ, activează un control care obligă operatorul să tipărească toate etichetele înainte de a continua activitatea de declarație;    
- **Defect obligatoriu dacă se declară deșeu**: dacă este activ, activează un control care obligă operatorul să introducă tipul de defect dacă introduce o cantitate respinsă;    
- **Înregistrare automată**: dacă este activ, permite crearea automată a înregistrării de gestiune la confirmarea declarației;    
- **Importă toate fazele grupului**: dacă este activ, și flagul omonim prezent în *help faze* din tabul *producție* al MES este activ implicit. Astfel, dacă utilizatorul selectează o fază care aparține unui grup și o adaugă, vor fi adăugate și toate celelalte faze care aparțin grupului.      
- **Centru de lucru multi-resursă**: când este activ, dacă se indică o *Resursă* de tip *Angajat* și se declară o fază de lucru, aceasta poate fi declarată și finalizată doar de acea *Resursă angajat*. Dacă este necesară schimbarea *Resursei angajat*, faza trebuie *Suspendată* indicând [Blocare propunere fază în M.E.S.](/docs/configurations/tables/production/interruption-reasons), apoi selectată din nou prin butonul **Selectează faze noi** și efectuată o declarație de reluare cu o altă *Resursă angajat*.

### Gestionare documente

- **Tip sursă document de exclus**: acest tabel este legat de tabul *Documente și Instrucțiuni operative* din Fluentis MES și permite definirea tipurilor de documente ce trebuie excluse; astfel, fișierele atașate acestor tipuri de documente nu vor fi vizualizate în tabul *Documente și Instrucțiuni operative*.     
Tipurile de documente care pot fi excluse sunt: 
- *Niciunul*: niciunul dintre tipurile de documente nu este exclus;   
- *Articol*: toate documentele (fișiere, imagini,...) legate de articol nu vor fi vizualizate în tabul *Documente și Instrucțiuni operative*;     
- *Ordin client*: toate documentele (fișiere, imagini,...) legate de comanda client nu vor fi vizualizate în tabul *Documente și Instrucțiuni operative*;      
- *Comandă*: toate documentele (fișiere, imagini,...) legate de comandă nu vor fi vizualizate în tabul *Documente și Instrucțiuni operative*;   
- *Ordin de producție*: toate documentele (fișiere, imagini,...) legate de ordinul de producție nu vor fi afișate în tabul *Documente și Instrucțiuni operative*;  
- *Fază ordin de producție*: toate documentele (fișiere, imagini,...) legate de faza a unui ordin de producție (în tabul *Documente atașate (Documenti allegati)* aferent fazei) nu vor fi afișate în tabul *Documente și Instrucțiuni operative*.

### Control de calitate

Conține o serie de controale legate de tabul *Control calitate* din Fluentis MES.     
- **Tip control aplicabil**: este tipul de document pentru controlul articolelor în care vor fi memorate valorile înregistrate;      
- **Detaliu articol aplicabil**: este nivelul maxim de detaliu al articolului care este considerat la efectuarea testelor (Niciunul, Lot, S.N., U.D.C.);     
- **Faza este blocabilă**: la prima valoare neconformă sau la media valorilor înregistrate ca neconforme, faza respectivă și fazele următoare sunt blocate până când sunt deblocate de un operator autorizat. În acest caz va fi folosită **Motiv întrerupere blocare fază** indicată în secțiunea dedicată *Motivelor întreruperilor*.

### Motive întrerupere

- **Motiv întrerupere de exclus**: în acest tabel se pot indica toate motivele de întrerupere care sunt excluse în Fluentis MES.

- **Motiv întrerupere propus**: reprezintă *Motivul întreruperii* care este utilizat în mod implicit dacă un operator creează o întrerupere fără a indica un motiv în câmpul corespunzător din tabul *Producție* al Fluentis MES.

- **Întrerupere automată**: dacă este activă, permite activarea întreruperilor automate ale declarațiilor conform orarelor indicate în centrul de lucru;  
- **Motiv întrerupere pauza de noapte**: reprezintă motivul întreruperii care este utilizat pentru a crea întreruperea pentru pauza de noapte;  
- **Motiv întrerupere pauza de prânz**: reprezintă motivul întreruperii care este utilizat pentru a crea întreruperea pentru pauza de prânz;  
- **Motiv întrerupere blocare fază**: reprezintă motivul întreruperii care este utilizat pentru a bloca fazele în cazul neconformității la controlul de calitate.

:::note Notă
Dacă se suspendă o activitate folosind un [Motiv de suspendare](/docs/production/mes/production-resources/) cu indicația *Blocare propunere fază în M.E.S.*, la următoarea propunere de faze în lucru pentru Centrul de lucru, faza suspendată nu va fi afișată. Pentru a continua lucrul la faza suspendată va fi necesar să o selectați, cu butonul **Selectează faze noi**, și să efectuați o declarație de reluare.
:::

---

## Layout

#### Butoane specifice

- **Layout complet**: permite activarea layout-ului complet al interfeței MES cu un singur click;           
- **Layout minim**: permite activarea layout-ului minim al interfeței MES cu un singur click;               

În acest tab sunt prezente o serie de informații care influențează layout-ul resursei de producție în timpul Declarațiilor de producție.

- **Secvență taburi**       
Această secțiune permite definirea dacă un tab este vizibil sau nu, de asemenea se poate modifica și ordinea acestora;    

- **Nu afișa**        
Această secțiune permite ascunderea diverselor informații nenecesare în Fluentis MES.

### General
- **Grup**: dacă este activ, ascunde informațiile referitoare la grup;     
- **Secvență**: dacă este activ, ascunde informațiile referitoare la secvență;     
- **Subfază**: dacă este activ, ascunde informațiile referitoare la subfază;     
- **Centru de lucru**: dacă este activ, ascunde informațiile referitoare la centru de lucru;     
- **Mașină**: dacă este activ, ascunde informațiile referitoare la mașină;     
- **Grup manoperă**: dacă este activ, ascunde informațiile referitoare la grupul de manoperă;     
- **Date planificate**: dacă este activ, ascunde informațiile referitoare la datele planificate;     
- **Variantă**: dacă este activ, ascunde informațiile referitoare la variantă;     
- **Comandă de producție**: dacă este activ, ascunde informațiile referitoare la ordinul de producție;    
- **Comandă**: dacă este activ, ascunde informațiile referitoare la comandă;    
- **Proiect**: dacă este activ, ascunde informațiile referitoare la proiect;    
- **Loturi**: dacă este activ, ascunde informațiile referitoare la gestionarea loturilor;    
- **Număr de serie**: dacă este activ, ascunde informațiile referitoare la gestionarea numerelor de serie;    
- **UdI**: dacă este activ, ascunde informațiile referitoare la gestionarea UdI;    
  
### Articole produse  
- **Gestiune de depozitare**: dacă este activ, ascunde informațiile referitoare la gestiunea de depozitare al articolelor produse în tabul *Producție*;  
- **Șablon transfer**: dacă este activ, ascunde informațiile referitoare la șablonul de depozitare a articolelor produse în tabul *Producție*;  
- **Locație depozitare**: dacă este activ, ascunde informațiile referitoare la locația de depozitare a articolelor produse în tabul *Producție*;  
- **Gestiune de depozitare rebut**: dacă este activ, ascunde informațiile referitoare la gestiunea de depozitare rebut al articolelor produse în tabul *Producție*;  
- **Șablon transfer rebut**: dacă este activ, ascunde informațiile referitoare la șablonul de depozitare rebut a articolelor produse în tabul *Producție*;  
- **Locație depozitare rebut**: dacă este activ, ascunde informațiile referitoare la locația de depozitare rebut a articolelor produse în tabul *Producție*;  
- **Cantitate alternativă**: dacă este activ, ascunde informațiile referitoare la gestionarea cantității alternative;  

### **Materiale**  
- **Gestiune colectare**: dacă este activ, ascunde informațiile referitoare la gestiunea de descărcare a materialelor în tabul *Materiale*;  
- **Șablon colectare**: dacă este activ, ascunde informațiile referitoare la șablonul de descărcare a materialelor în tabul *Materiale*;  
- **Gestiune de depozitare rebut**: dacă este activ, ascunde informațiile referitoare la gestiunea de descărcare rebut pentru materiale în tabul *Materiale*;  
- **Șablon depozitare rebut**: dacă este activ, ascunde informațiile referitoare la șablonul de descărcare rebut a materialelor în tabul *Materiale*;   

### Control de calitate

- **Secvență**: dacă este activ, ascunde informațiile referitoare la secvență în tabul *Controale de calitate*;     
- **Tip de probă**: dacă este activ, ascunde informațiile referitoare la tipul de probă în tabul *Controale de calitate*;     
- **Instrumente de măsură**: dacă este activ, ascunde informațiile referitoare la Categoria instrument de măsură și la Instrumentele de măsură în tabul *Control de calitate*;      
- **Limite toleranțe**: dacă este activ, ascunde informațiile referitoare la Limitele toleranțelor (L.min.(toll-), L.min.(toll+), L.max.(toll-) și L.max.(toll+)) în tabul *Control de calitate*;     
- **Tip control și Frecvență**: dacă este activ, ascunde informațiile referitoare la Tipul controlului de probă și Frecvență în tabul *Controale de calitate*;        
- **Gestiune**: dacă este activ, ascunde informațiile referitoare la gestiune în tabul *Control calitate*;  
- **Șablon**: dacă este activ, ascunde informațiile referitoare la șablonul de gestiune pentru articolele neconforme în tabul *Control calitate*;

### Altele

**Producție**  
- **Widget mașină**: dacă este activ, ascunde informațiile referitoare la mașină în tabul *Producție*;    
- **Defect**: dacă este activ, ascunde informațiile referitoare la defect în tabul *Producție*;    
- **Motiv întrerupere**: dacă este activ, ascunde informațiile referitoare la Motiv întrerupere în tabul *Producție*;       

**Echipă**  
- **Operatori inactivi**: dacă este activ, ascunde grila referitoare la *Lista operatorilor inactivi* în tabul *Echipă*;    

**Note**  
- **Listă note**: dacă este activ, ascunde grila referitoare la *Documente atașate semnalării fazei selectate* în tabul *Documente și Instrucțiuni operative* din tabul *Note*;    

**Analiză**    
- **OEE**: dacă este activ, ascunde graficele OEE în tabul *Analiză*;    
- **Grafice**: dacă este activ, ascunde graficele cu bare (*Analiză cantitate*, *Analiză timp*) în tabul *Analiză*;    
- **Tabele**: dacă este activ, ascunde tabelele (*Valori cantitate*, *Valori timp*) în tabul *Analiză*.      

**Extra Data**
- **Listă extra data**: dacă este activ, ascunde grila referitoare la *Lista extra data (selectați o fază)* în tabul *Extra data*;     


# Rezumat și detalii suplimentare

Această pagină descrie configurarea completă a *Resurselor de producție* în MES Fluentis, incluzând:

- importul resurselor  
- parametri generali și multi-fază  
- gestionare documente  
- controale de calitate  
- cauze de suspendare  
- layout personalizabil  

Pentru detalii suplimentare:

- [Funcționalități, butoane și câmpuri comune](/docs/guide/common)  
- [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)  
- [Angajat](/docs/project-management/registers/employee/new-employee/)  
- [Fișă de lucru](/docs/production/pp-production-in-progress/reports/worksheet)