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

### Resurse de producție

#### Câmpuri specifice  
**Cod**: indică codul resursei de producție (risorsa di produzione);  
**Descriere (Descrizione)**: indică descrierea codului resursei de producție (risorsa di produzione);  
**Tip de resursă (Tipo di risorsa)**: indică tipul resursei: *Angajat*, *Articol*, *Mașină*, *Instrument de măsură*, *Centru de lucru*;  
**Mașină**: indică codul mașinii asociate resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Mașină*;  
**Descriere mașină (Descrizione macchina)**: indică descrierea mașinii asociate resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Mașină*;  
**Centru de lucru**: indică codul centrului de lucru asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Centru de lucru*;  
**Descriere centru de lucru (Descrizione centro di lavoro)**: indică descrierea centrului de lucru asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Centru de lucru*;  
**Angajat**: indică codul angajatului asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Angajat*;  
**Nume de familie (Cognome)**: indică numele de familie al angajatului asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Angajat*;  
**Prenume (Nome)**: indică prenumele angajatului asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Angajat*;  
**Clasă (Classe)**: indică clasa articolului asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Instrument de măsură*;  
**Cod articol (Codice articolo)**: indică codul articolului asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Instrument de măsură*;  
**Descriere articol (Descrizione articolo)**: indică descrierea articolului asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Instrument de măsură*;  
**Instrument de măsură**: indică codul articolului echipament asociat resursei; este activ doar dacă *Tip de resursă (Tipo di risorsa)* este *Instrument de măsură*;  
**Secunde de refresh (Secondi di refresh)**: indică numărul de secunde de refresh pentru formularele MES (MES), de exemplu: pentru refresh-ul datelor în tabul *Analiză (Analisi)* sau pentru refresh-ul timpului de lucru automat.

Pentru fiecare resursă introdusă în tabelul superioară sunt asociate toate informațiile prezente în taburile de mai jos.

## Generale

În acest tab se regăsesc o serie de informații care influențează comportamentul resursei individuale de producție (risorsa di produzione) în timpul Declarațiilor de producție (Dichiarazioni di produzione).

**Operator obligatoriu (Operatore obbligatorio)**: dacă este activ, obligă operatorul (operatore) să introducă în câmpul *Resursă* din formularul principal al Declarațiilor de producție (Dichiarazioni di produzione) o resursă de tip Angajat înainte de a putea continua cu restul activităților. Acesta va fi angajatul (dipendente) care va fi indicat drept operator care efectuează declarația;  
**Parolă obligatorie (Password obbligatoria)**: dacă este activ, obligă operatorul (operatore) să introducă o parolă pentru a putea continua; parolele solicitate sunt în următoarea ordine: parola prezentă în formularul [Angajat](/docs/project-management/registers/employee/new-employee/) și, dacă nu este prezentă, se solicită parola sistemului. Dacă niciuna nu este prezentă, se cere introducerea uneia noi.  
:::note Nota
În cazul în care sunt activate ambele flaguri **Operator obligatoriu (Operatore obbligatorio)** și **Parolă obligatorie (Password obbligatoria)**, operatorul (operatore) va trebui să introducă mai întâi angajatul (dipendente) și apoi, la cererea procedurii, parola.
:::
**Echipă obligatorie (Squadra obbligatoria)**: dacă este activ, activează un control care obligă operatorul (operatore) să introducă cel puțin un membru al echipei (squadra) înainte de a continua cu activitatea de declarare;  
**Permite semnalare suprapusă (Consenti segnalazione sovrapposta)**: dacă este activ, este posibilă declararea fazelor (fasi) unui ordin de producție (ordine di produzione) fără a urma secvența indicată în ciclu (ciclo); dacă nu este activ, nu este posibilă nicio suprapunere de faze (fasi) sau declararea fazelor fără a urma secvența ciclului;  
**Activează multi-fază (Abilita multi-fase)**: dacă este activ, permite posibilitatea de a face declarații pentru mai multe faze (fasi) simultan;  
**Număr maxim de faze (Numero massimo di fasi)**: permite indicarea numărului maxim de faze care pot fi declarate simultan;  
**Introducere manuală a timpului (Inserimento tempo manuale)**: dacă este activ, permite introducerea timpului de lucru de către operator;  
**Timp propus (Tempo proposto)**: dacă este activ, timpul de lucru este propus automat;  
**Metodă de repartizare a timpului (Metodo di ripartizione tempo)**: indică modalitatea prin care se repartizează timpul în cazul declarării simultane a mai multor faze de lucru. Modalitățile active sunt: *Secvență (Sequenza)*: timpul se împarte pe fazele în lucru în funcție de secvența planificată sau de inserare, *Proporțional (Proporzionale)*: timpul se împarte proporțional în funcție de cantitatea produsă în declarație și de cantitățile care trebuie produse în fiecare fază;  
**Metodă de repartizare a cantității (Metodo di ripartizione quantità)**: indică modalitatea prin care se repartizează cantitatea în cazul declarării simultane a mai multor faze de lucru. Modalitățile active sunt: *Secvență (Sequenza)*: cantitatea se împarte pe fazele în lucru în funcție de secvența planificată sau de inserare, *Proporțional (Proporzionale)*: cantitatea se împarte proporțional în funcție de cantitatea produsă în declarație și de cantitățile care trebuie produse în fiecare fază; *Manual (Manuale)* permite indicarea manuală a cantităților produse pe fiecare fază;  
**Declarație obligatorie a cantității de material (Dichiarazione quantità materiale obbligatoria)**: dacă este activ, împreună cu flagul **Obbligo dichiarazione materiale manuale** existent în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ale articolului, face ca în tabul *Materiale (Materiali)* al Declarațiilor de producție (Dichiarazioni di produzione) articolul să fie propus cu cantitatea zero, iar utilizatorul va fi obligat să introducă manual o valoare înainte de a putea continua;  
**Foaie de lucru obligatorie (Foglio di lavoro obbligatorio)**: dacă este activ, se activează un control care împiedică operatorul (operatore) să adauge o fază (fase) care nu are încă flagul de „Tipărire definitivă (Stampa definitiva)” activat. Acest flag de „Tipărire definitivă (Stampa definitiva)” poate fi activat din procedura de tipărire a [Foaiei de lucru (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet);  
**Tipărirea etichetelor obligatorie (Stampa etichette obbligatoria)**: dacă este activ, se activează un control care obligă operatorul (operatore) să tipărească toate etichetele înainte de a continua cu activitatea de declarare;  
**Defect obligatoriu dacă există rebut (Difetto obbligatorio se dichiarato scarto)**: dacă este activ, se activează un control care obligă operatorul (operatore) să introducă tipul defectului când se înregistrează o cantitate rebutată;  
**Înregistrare automată (Registrazione automatica)**: dacă este activ, permite crearea automată a înregistrării de depozit la confirmarea declarației.

### *Gestionarea documentelor (Gestione documentale)* 
**Tip de origine a documentului de exclus (Tipo origine documento da escludere)**: acest tabel este legat de tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)* din Fluentis MES și permite definirea tipurilor de documente care trebuie excluse; astfel, fișierele atașate acestor tipuri de documente nu vor fi afișate în tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)*.   
Tipurile de documente care pot fi excluse sunt:  
> *Niciuna (Nessuna)*: niciunul dintre tipurile de documente nu este exclus;  
> *Articol*: toate documentele (fișiere, imagini,...) legate de articol nu vor fi afișate în tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)*;  
> *Comandă client (Ordine cliente)*: toate documentele (fișiere, imagini,...) legate de comanda client nu vor fi afișate în tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)*;  
> *Comandă (Commessa)*: toate documentele (fișiere, imagini,...) legate de comandă nu vor fi afișate în tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)*;  
> *Ordin de producție (Ordine di produzione)*: toate documentele (fișiere, imagini,...) legate de ordinul de producție (ordine di produzione) nu vor fi afișate în tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)*;  
> *Fază ordin de producție (Fase ordine di produzione)*: toate documentele (fișiere, imagini,...) legate de faza individuală a unui ordin de producție (în tabul *Documente atașate (Documenti allegati)* aferent fazei) nu vor fi afișate în tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)*.

### *Control Calitate (Controlli Qualità)*
Conține o serie de controale legate de tabul *Control calitate (Controllo qualità)* din Fluentis MES.  
**Tip de control de luat în considerare (Tipo controllo da considerare)**: este tipul de document pentru controlul articolelor în care vor fi memorate valorile înregistrate;  
**Detaliu articol de luat în considerare (Dettaglio articolo da considerare)**: este nivelul maxim de detaliu al articolului pe care îl luăm în considerare pentru efectuarea testelor (Nessuno, Lotto, S.N., U.D.C.);  
**Faza este blocabilă (La fase è bloccabile)**: la prima valoare neconformă sau la media valorilor înregistrate ca neconforme, faza respectivă și fazele următoare sunt blocate până când sunt deblocate de un operator (operatore) autorizat. În acest caz va fi folosită **Cauza de suspendare pentru blocarea fazei (Causale di sospensione blocco fase)** indicată în secțiunea dedicată cauzelor de suspendare (causali di sospensione).

### *Cauze de suspendare (Causali di sospensione)*
**Cauze de suspendare de exclus (Causali di sospensione da escludere)**: în acest tabel se pot indica toate cauzele de suspendare (causali di sospensione) care se doresc excluse în Fluentis MES.

**Cauza de suspendare propusă (Causale di sospensione proposta)**: indică cauza de suspendare (causale di sospensione) care este utilizată în mod implicit dacă un operator (operatore) creează o suspendare fără a indica o cauză de suspendare în câmpul corespunzător din tabul *Producție (Produzione)* al Fluentis MES.

**Întrerupere automată (Interruzione automatica)**: dacă este activă, permite activarea întreruperilor automate ale declarațiilor conform orarelor indicate în centrul de lucru (centro di lavoro);  
**Cauza de suspendare pentru pauza de noapte (Causale di sospensione pausa notturna)**: indică cauza de suspendare (causale di sospensione) care este utilizată pentru a crea suspendarea pentru pauza de noapte;  
**Cauza de suspendare pentru pauza de prânz (Causale di sospensione pausa pranzo)**: indică cauza de suspendare (causale di sospensione) care este utilizată pentru a crea suspendarea pentru pauza de prânz;  
**Cauza de suspendare pentru blocarea fazei (Causale di sospensione blocco fase)**: indică cauza de suspendare (causale di sospensione) care este utilizată pentru a bloca fazele în cazul neconformității la controlul calității.

## Layout

*Butoane specifice (Pulsanti specifici)*:

> **Layout complet (Layout completo)**: permite activarea layout-ului complet al interfeței MES (MES) cu un singur click;  
> **Layout minim (Layout minimo)**: permite activarea layout-ului minim al interfeței MES (MES) cu un singur click;  

În acest tab există o serie de informații care influențează layout-ul resursei de producție (risorsa di produzione) în timpul Declarațiilor de producție (Dichiarazioni di produzione).

**Secvență tabulatori (Sequenza tabulatori)**  
Această secțiune permite definirea vizibilității unui tab și eventual modificarea secvenței lor.

**Nu afișa (Non visualizzare)**  
Această secțiune permite ascunderea diferitelor informații nenecesare în Fluentis MES.

### **General (Generale)**
> *Grup (Gruppo)*: dacă este activ, ascunde informațiile referitoare la grup;  
> *Secvență (Sequenza)*: dacă este activ, ascunde informațiile referitoare la secvență;  
> *Subfază (Sottofase)*: dacă este activ, ascunde informațiile referitoare la subfază;  
> *Centru de lucru*: dacă este activ, ascunde informațiile referitoare la centrul de lucru;  
> *Mașină*: dacă este activ, ascunde informațiile referitoare la mașină;  
> *Grup manoperă (Gruppo manodopera)*: dacă este activ, ascunde informațiile referitoare la grupul de manoperă;  
> *Date planificate (Date previste)*: dacă este activ, ascunde informațiile referitoare la datele planificate;  
> *Variantă (Variante)*: dacă este activ, ascunde informațiile referitoare la variantă;  
> *Ordin de producție (Ordine di produzione)*: dacă este activ, ascunde informațiile referitoare la ordinul de producție;  
> *Comandă (Commessa)*: dacă este activ, ascunde informațiile referitoare la comandă;  
> *Proiect (Progetto)*: dacă este activ, ascunde informațiile referitoare la proiect;  
> *Loturi (Lotti)*: dacă este activ, ascunde informațiile referitoare la gestionarea loturilor;  
> *Număr de serie (Serial number)*: dacă este activ, ascunde informațiile referitoare la gestionarea numerelor de serie;  
> *UDC*: dacă este activ, ascunde informațiile referitoare la gestionarea UDC-urilor;

### **Articole produse (Articoli prodotti)**
> *Depozit de transfer (Magazzino versamento)*: dacă este activ, ascunde informațiile referitoare la depozitul de transfer al articolelor produse în tabul *Producție (Produzione)*;  
> *Cauză de transfer (Causale versamento)*: dacă este activ, ascunde informațiile referitoare la cauza de transfer a articolelor produse în tabul *Producție (Produzione)*;  
> *Ubicare de transfer (Ubicazione versamento)*: dacă este activ, ascunde informațiile referitoare la ubicarea de transfer a articolelor produse în tabul *Producție (Produzione)*;  
> *Depozit de transfer rebut (Magazzino versamento scarto)*: dacă este activ, ascunde informațiile referitoare la depozitul de transfer rebut al articolelor produse în tabul *Producție (Produzione)*;  
> *Cauză de transfer rebut (Causale versamento scarto)*: dacă este activ, ascunde informațiile referitoare la cauza de transfer rebut a articolelor produse în tabul *Producție (Produzione)*;  
> *Ubicare de transfer rebut (Ubicazione versamento scarto)*: dacă este activ, ascunde informațiile referitoare la ubicarea de transfer rebut a articolelor produse în tabul *Producție (Produzione)*;  
> *Cantitate alternativă (Quantità alternativa)*: dacă este activ, ascunde informațiile referitoare la gestionarea cantității alternative;

### **Materiale (Materiali)**
> *Depozit de prelevare (Magazzino prelievo)*: dacă este activ, ascunde informațiile referitoare la depozitul de descărcare a materialelor în tabul *Materiale (Materiali)*;  
> *Cauză de prelevare (Causale prelievo)*: dacă este activ, ascunde informațiile referitoare la cauza de descărcare a materialelor în tabul *Materiale (Materiali)*;  
> *Depozit de transfer rebut (Magazzino versamento scarto)*: dacă este activ, ascunde informațiile referitoare la depozitul de descărcare rebut pentru materiale în tabul *Materiale (Materiali)*;  
> *Cauză de transfer rebut (Causale versamento scarto)*: dacă este activ, ascunde informațiile referitoare la cauza de descărcare rebut a materialelor în tabul *Materiale (Materiali)*;

### **Control calitate (Controlli qualità)**

> **Secvență (Sequenza)**: dacă este activ, ascunde informațiile referitoare la secvență în tabul *Control calitate (Controlli qualità)*;  
> **Tip de probă (Tipo di prova)**: dacă este activ, ascunde informațiile referitoare la tipul de probă în tabul *Control calitate (Controlli qualità)*;  
> **Instrumente de măsură (Strumenti di misura)**: dacă este activ, ascunde informațiile referitoare la Categoria instrument de măsură și la Instrumente de măsură (strumenti di misura) în tabul *Control calitate (Controlli qualità)*;  
> **Limite de toleranță (Limiti tolleranze)**: dacă este activ, ascunde informațiile referitoare la Limitele de toleranță (L.min.(toll-), L.min.(toll+), L.max.(toll-) și L.max.(toll+)) în tabul *Control calitate (Controlli qualità)*;  
> **Tip de control și Frecvență (Tipo controllo e Frequenza)**: dacă este activ, ascunde informațiile referitoare la Tipul controlului de probă și la Frecvență în tabul *Control calitate (Controlli qualità)*;  
> **Depozit (Magazzino)**: dacă este activ, ascunde informațiile referitoare la depozit în tabul *Control calitate (Controlli qualità)*;  
> **Cauză (Causale)**: dacă este activ, ascunde informațiile referitoare la cauza de depozit pentru articolele neconforme în tabul *Control calitate (Controlli qualità)*;

### **Altele (Altro)**

*Producție (Produzione)*
> *Widget mașină (Widget macchina)*: dacă este activ, ascunde informațiile referitoare la Mașină în tabul *Producție (Produzione)*;  
> *Defect (Difetto)*: dacă este activ, ascunde informațiile referitoare la defect (difetto) în tabul *Producție (Produzione)*;  
> *Cauză de suspendare (Causale sospensione)*: dacă este activ, ascunde informațiile referitoare la cauza de suspendare (causale di sospensione) în tabul *Producție (Produzione)*;

*Echipă (Squadra)*
> *Operatori inactivi (Operatori non più attivi)*: dacă este activ, ascunde tabelul referitoare la *Lista operatorilor inactivi (Elenco operatori non più attivi)* din tabul *Echipă (Squadra)*;

*Note*
> *Lista note (Elenco note)*: dacă este activ, ascunde tabelul referitoare la *Documentele atașate semnalării fazei selectate (Documenti allegati alla segnalazione della fase selezionata)* din tabul *Documente și Instrucțiuni operative (Documenti e Istruzioni operative)* din tabul *Note*;

*Analiză (Analisi)*  
> *OEE*: dacă este activ, ascunde graficele OEE din tabul *Analiză (Analisi)*;  
> *Grafice (Grafici)*: dacă este activ, ascunde graficele sub formă de bare (*Analiză cantități (Analisi quantità)*, *Analiză timp (Analisi tempo)*) din tabul *Analiză (Analisi)*;  
> *Tabele (Griglie)*: dacă este activ, ascunde tabelele (*Valori cantități (Valori quantità)*, *Valori timp (Valori tempo)*) din tabul *Analiză (Analisi)*.

*Extra Data*  
> *Lista extra data (Elenco extra data)*: dacă este activ, ascunde tabelul referitoare la *Elenco extra data (selezionare o fază) (Elenco extra data (selezionare una fase))* din tabul *Extra data*;

Pentru tot ceea ce nu este detaliat în acest document cu privire la funcționarea comună a formularelor, consultați următorul link [Funcționalități, butoane și câmpuri comune (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).