---
title: Resurse de producție 
sidebar_position: 4
---

:::important Utilizare
Acest form din sistemul MES Fluentis permite gestionarea tuturor parametrilor necesari pentru planificarea și optimizarea operațiunilor de producție. Printr-o interfață intuitivă, utilizatorii pot importa diferite tipuri de resurse, inclusiv articole, mașini, angajați, centre de lucru și instrumente de măsură). 

În plus, este posibilă personalizarea aspectului și a comportamentului centrului de lucru, adaptând sistemul la nevoile specifice ale companiei, în mod simplu, rapid și în deplină autonomie.

Această funcționalitate nu doar simplifică gestionarea resurselor de producție, dar permite și copierea cu ușurință a setărilor prestabilite de la resursele existente, asigurând că datele sunt mereu actualizate și coerente.
:::

#### Buton specific

> **Importă**: permite importul în tabelul **Resurse de producție** al următoarelor tipuri de resurse: *Articol*, *Mașină*, *Angajat*, *Centru de lucru* și *Instrument de măsură*; este de asemenea posibil să se importe mai multe simultan, doar selectându-le cu pop-up-ul *Importă*.  
În cazul în care în tabel există deja înregistrări, iar utilizatorul selectează una cu un anumit tip de resursă, când se apasă butonul *Importă*, procedura va filtra deja după acel tip de resursă și, în plus, va copia toate setările introduse în resursa selectată (adică cea deja prezentă în tabelul de resurse) în noile înregistrări ale resurselor introduse cu procedura de import.

## Resurse de producție

#### Câmpuri specifice  
**Cod**: reprezintă codul resursei de producție;  
**Descriere**: indică descrierea codului resursei de producție;  
**Tip de resursă**: indică tipul resursei: *Angajat*, *Articol*, *Mașină*, *Instrument de măsură*, *Centru de lucru*;  
**Mașină**: reprezintă codul mașinii asociate resursei; este activ doar dacă *Tip de resursă* este *Mașină*;  
**Descriere mașin**: indică descrierea mașinii asociate resursei; este activ doar dacă *Tip de resursă* este *Mașină*;  
**Centru de lucru**: reprezintă codul centrului de lucru asociat resursei; este activ doar dacă *Tip de resursă* este *Centru de lucru*;  
**Descriere centru de lucru**: indică descrierea centrului de lucru asociat resursei; este activ doar dacă *Tip de resursă* este *Centru de lucru*;  
**Angajat**: reprezintă codul angajatului asociat resursei; este activ doar dacă *Tip de resursă* este *Angajat*;  
**Nume**: indică numele de familie al angajatului asociat resursei; este activ doar dacă *Tip de resursă* este *Angajat*;  
**Prenume**: indică prenumele angajatului asociat resursei; este activ doar dacă *Tip de resursă* este *Angajat*;  
**Clasă**: reprezintă clasa articolului asociat resursei; este activ doar dacă *Tip de resursă* este *Instrument de măsură*;  
**Cod articol**: reprezintă codul articolului asociat resursei; este activ doar dacă *Tip de resursă* este *Instrument de măsură*;  
**Descriere articol**: indică descrierea articolului asociat resursei; este activ doar dacă *Tip de resursă* este *Instrument de măsură*;  
**Instrument de măsură**: reprezintă codul articolului echipament asociat resursei; este activ doar dacă *Tip de resursă* este *Instrument de măsură*;  
**Interval de actualizare (sec.)**: indică numărul de secunde de refresh pentru ferestrele MES. De exemplu: pentru refresh-ul datelor în tabul *Analiză* sau pentru refresh-ul timpului de lucru automat.
Fiecărei resurse din tabelul superioar îi sunt asociate informațiile prezente în taburile următoare.

## Generale

În acest tab se regăsesc o serie de informații care influențează comportamentul resursei de producție în timpul Declarațiilor de producție.

**Operator obligatoriu**: dacă este activ, obligă operatorul să introducă în câmpul *Resursă* din formul principal al *Declarațiilor de producție* o resursă de tip Angajat înainte de a continua cu restul activităților. Acesta va fi angajatul care va fi indicat drept operator care efectuează declarația;  
**Parolă obligatorie**: dacă este activ, obligă operatorul să introducă o parolă pentru a putea continua; parolele solicitate sunt în următoarea ordine: parola prezentă în formul [Angajat](/docs/project-management/registers/employee/new-employee/) și, dacă nu este prezentă, se solicită parola sistemului. Dacă niciuna nu este prezentă, se cere introducerea uneia noi.  

:::note Nota
În cazul în care sunt activate ambele flaguri **Operator obligatoriu** și **Parolă obligatorie**, operatorul va trebui să introducă mai întâi angajatul și apoi, la cererea procedurii, parola.
:::

**Echipă obligatorie**: dacă este activ, activează un control care obligă operatorul să introducă cel puțin un membru al echipei înainte de a face declararea;  
**Permite semnalare suprapusă**: dacă este activ, este posibilă declararea fazelor unui ordin de producție fără a urma secvența indicată în ciclu; dacă nu este activ, nu este posibilă nicio suprapunere de faze sau declararea fazelor fără a urma secvența ciclului;  
**Activează multi-fază**: dacă este activ, oferă posibilitatea de a face declarații pentru mai multe faze simultan;  
**Număr maxim de faze**: permite indicarea numărului maxim de faze care pot fi declarate simultan;  
**IInserare manuală timp**: dacă este activ, permite introducerea timpului de lucru de către operator;  
**Timp propus**: dacă este activ, timpul de lucru este propus automat;  
**Metodă de repartizare timp**: indică modalitatea prin care se repartizează timpul în cazul declarării simultane a mai multor faze de lucru. Modalitățile active sunt: *Secvență*: timpul se împarte pe fazele în lucru în funcție de secvența planificată sau de inserare, *Proporțional*: timpul se împarte proporțional în funcție de cantitatea produsă în declarație și de cantitățile care trebuie produse în fiecare fază;  
**Metodă de repartizare cantitate**: indică modalitatea prin care se repartizează cantitatea în cazul declarării simultane a mai multor faze de lucru. Modalitățile active sunt: *Secvență*: cantitatea se împarte pe fazele în lucru în funcție de secvența planificată sau de inserare, *Proporțional*: cantitatea se împarte proporțional în funcție de cantitatea produsă în declarație și de cantitățile care trebuie produse în fiecare fază; *Manual* permite indicarea manuală a cantităților produse pe fiecare fază;  
**Declarare cantitate material obligatorie**: dacă este activ, împreună cu flagul **Declarare material manual obligatorie** existent în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ai articolului, face ca în tabul *Materiale* al Declarațiilor de producție articolul să fie propus cu cantitatea zero, iar utilizatorul va fi obligat să introducă manual o valoare înainte de a continua operațiile;  
**işa de lucru obligatorie**: dacă este activ, se activează un control care împiedică operatorul să adauge o fază care nu are încă opțiunea *Listat definitiv* activată. Această opțiune poate fi activată în [Foaie de lucru](/docs/production/pp-production-in-progress/reports/worksheet);  
**Raport etichete obligatoriu**: dacă este activ, se activează un control care obligă operatorul să tipărească toate etichetele înainte de a continua cu activitatea de declarare;  
**Defect obligatoriu dacă este declarat deșeu**: dacă este activ, se activează un control care obligă operatorul să introducă tipul defectului când se înregistrează o cantitate rebutată;  
**Înregistrare automată**: dacă este activ, permite crearea automată a înregistrării de gestiune la confirmarea declarației.

### Document Management 

**Tip sursă document de exclus**: acest tabel este conectat cu tabul *Documente și Instrucțiuni operative* din Fluentis MES și permite definirea tipurilor de documente care trebuie excluse; astfel, fișierele atașate acestor tipuri de documente nu vor fi afișate în tabul *Documente și Instrucțiuni operative*.   
Tipurile de documente care pot fi excluse sunt:  
> *Niciunul*: niciunul dintre tipurile de documente nu este exclus;  
> *Articol*: toate documentele (fișiere, imagini,...) legate de articol nu vor fi afișate în tabul *Documente și Instrucțiuni operative*;  
> *Ordin client*: toate documentele (fișiere, imagini,...) legate de ordinul client nu vor fi afișate în tabul *Documente și Instrucțiuni operative*;  
> *Comandă*: toate documentele (fișiere, imagini,...) legate de comandă nu vor fi afișate în tabul *Documente și Instrucțiuni operative*;  
> *Ordin de producție*: toate documentele (fișiere, imagini,...) legate de ordinul de producție nu vor fi afișate în tabul *Documente și Instrucțiuni operative*;  
> *Fază ordin de producție*: toate documentele (fișiere, imagini,...) legate de faza a unui ordin de producție (în tabul *Documente atașate (Documenti allegati)* aferent fazei) nu vor fi afișate în tabul *Documente și Instrucțiuni operative*.

### Control Calitate

Conține o serie de controale legate de tabul *Control calitate* din Fluentis MES.  
**Tip de control de luat în considerare**: este tipul de document pentru controlul articolelor în care vor fi memorizate valorile înregistrate;  
**Detaliu articol de luat în considerare**: este nivelul maxim de detaliu al articolului pe care îl luăm în considerare pentru efectuarea testelor (Niciunul, Lot, S.N., UdI);  
**Faza este blocabilă**: la prima valoare neconformă sau la media valorilor înregistrate ca neconforme, faza respectivă și fazele următoare sunt blocate până când sunt deblocate de un operator autorizat. În acest caz va fi folosită **Motiv întrerupere blocare fază** indicată în secțiunea dedicată *Motivelor întreruperilor*.

### Motive întrerupere

**Motiv întrerupere de exclus**: în acest tabel se pot indica toate motivele de întrerupere care sunt excluse în Fluentis MES.

**Motiv întrerupere propus**: reprezintă *Motivul întreruperii* care este utilizat în mod implicit dacă un operator creează o întrerupere fără a indica un motiv în câmpul corespunzător din tabul *Producție* al Fluentis MES.

**Întrerupere automată**: dacă este activă, permite activarea întreruperilor automate ale declarațiilor conform orarelor indicate în centrul de lucru;  
**Motiv întrerupere pauza de noapte**: reprezintă motivul întreruperii care este utilizat pentru a crea întreruperea pentru pauza de noapte;  
**Motiv întrerupere pauza de prânz**: reprezintă motivul întreruperii care este utilizat pentru a crea întreruperea pentru pauza de prânz;  
**Motiv întrerupere blocare fază**: reprezintă motivul întreruperii care este utilizat pentru a bloca fazele în cazul neconformității la controlul de calitate.

## Layout

#### Butoane specifice

> **Layout complet**: permite activarea layout-ului complet al interfeței MES cu un singur click;  
> **Layout minim**: permite activarea layout-ului minim al interfeței MES cu un singur click;  

În acest tab există o serie de informații care influențează layout-ul resursei de producție în timpul Declarațiilor de producție.

**Secvență taburi**  
Această secțiune permite definirea vizibilității unui tab și eventual modificarea secvenței lor.

**Nu afișa**  
Această secțiune permite ascunderea diferitelor informații nenecesare în Fluentis MES.

### General

> *Grup*: dacă este activ, ascunde informațiile referitoare la grup;  
> *Secvență*: dacă este activ, ascunde informațiile referitoare la secvență;  
> *Subfază*: dacă este activ, ascunde informațiile referitoare la subfază;  
> *Centru de lucru*: dacă este activ, ascunde informațiile referitoare la centrul de lucru;  
> *Mașină*: dacă este activ, ascunde informațiile referitoare la mașină;  
> *Grup manoperă*: dacă este activ, ascunde informațiile referitoare la grupul de manoperă;  
> *Date planificate (Date previste)*: dacă este activ, ascunde informațiile referitoare la datele planificate;  
> *Variantă*: dacă este activ, ascunde informațiile referitoare la variantă;  
> *Ordin de producție*: dacă este activ, ascunde informațiile referitoare la ordinul de producție;  
> *Comandă*: dacă este activ, ascunde informațiile referitoare la comandă;  
> *Proiect*: dacă este activ, ascunde informațiile referitoare la proiect;  
> *Loturi*: dacă este activ, ascunde informațiile referitoare la gestionarea loturilor;  
> *Număr de serie*: dacă este activ, ascunde informațiile referitoare la gestionarea numerelor de serie;  
> *UdI*: dacă este activ, ascunde informațiile referitoare la gestionarea UdI-urilor;

### Articole produse
> *Gestiune de depozitare*: dacă este activ, ascunde informațiile referitoare la gestiunea de depozitare al articolelor produse în tabul *Producție*;  
> *Șablon transfer*: dacă este activ, ascunde informațiile referitoare la șablonul de depozitare a articolelor produse în tabul *Producție*;  
> *Locație depozitare*: dacă este activ, ascunde informațiile referitoare la locația de depozitare a articolelor produse în tabul *Producție*;  
> *Gestiune de depozitare rebut*: dacă este activ, ascunde informațiile referitoare la gestiunea de depozitare rebut al articolelor produse în tabul *Producție*;  
> *Șablon transfer rebut*: dacă este activ, ascunde informațiile referitoare la șablonul de depozitare rebut a articolelor produse în tabul *Producție*;  
> *Locație depozitare rebut*: dacă este activ, ascunde informațiile referitoare la locația de depozitare rebut a articolelor produse în tabul *Producție*;  
> *Cantitate alternativă*: dacă este activ, ascunde informațiile referitoare la gestionarea cantității alternative;

### Materiale
> *Gestiune colectare*: dacă este activ, ascunde informațiile referitoare la gestiunea de descărcare a materialelor în tabul *Materiale*;  
> *Șablon colectare*: dacă este activ, ascunde informațiile referitoare la șablonul de descărcare a materialelor în tabul *Materiale*;  
> *Gestiune de depozitare rebut*: dacă este activ, ascunde informațiile referitoare la gestiunea de descărcare rebut pentru materiale în tabul *Materiale*;  
> *Șablon depozitare rebut*: dacă este activ, ascunde informațiile referitoare la șablonul de descărcare rebut a materialelor în tabul *Materiale*;

### Control calitate

> **Secvență**: dacă este activ, ascunde informațiile referitoare la secvență în tabul *Control calitate*;  
> **Tip de test**: dacă este activ, ascunde informațiile referitoare la tipul de test în tabul *Control calitate*;  
> **Instrumente de măsură **: dacă este activ, ascunde informațiile referitoare la Categoria instrumente de măsură și la Instrumente de măsură în tabul *Control calitate*;  
> **Limite de toleranță**: dacă este activ, ascunde informațiile referitoare la Limitele de toleranță (L.min.(tol-), L.min.(toll+), L.max.(tol-) și L.max.(tol+)) în tabul *Control calitate*;  
> **Tip control și Frecvență**: dacă este activ, ascunde informațiile referitoare la Tipul controlului de test și la Frecvență în tabul *Control calitate*;  
> **Gestiune**: dacă este activ, ascunde informațiile referitoare la gestiune în tabul *Control calitate*;  
> **Șablon**: dacă este activ, ascunde informațiile referitoare la șablonul de gestiune pentru articolele neconforme în tabul *Control calitate*;

### Altele

*Producție*
> *Widget mașină*: dacă este activ, ascunde informațiile referitoare la Mașină în tabul *Producție*;  
> *Defect*: dacă este activ, ascunde informațiile referitoare la defect în tabul *Producție*;  
> *Motiv întrerupere*: dacă este activ, ascunde informațiile referitoare la Motiv întrerupere în tabul *Producție*;

*Echipă*
> *Operatorii care nu mai sunt activi*: dacă este activ, ascunde tabelul referitoare la *Lista operatorilor inactivi* din tabul *Echipă*;

*Note*
> *Lista note*: dacă este activ, ascunde tabelul referitor la *Documentele atașate semnalării fazei selectate* din tabul *Documente și Instrucțiuni operative* din *Note*;

*Analiză*  
> *OEE*: dacă este activ, ascunde graficele OEE din tabul *Analiză*;  
> *Grafice*: dacă este activ, ascunde graficele sub formă de bare *Analiza cantitativă*, *Analiză timp* din tabul *Analiză*;  
> *Tabele*: dacă este activ, ascunde tabelele *Valori cantitate*, *Valori timp* din tabul *Analiză*.

*Extra Data*  
> *Lista extra data*: dacă este activ, ascunde tabelul referitoare la *Lista de date suplimentare (selectaţi o fază)* din tabul *Extra data*.