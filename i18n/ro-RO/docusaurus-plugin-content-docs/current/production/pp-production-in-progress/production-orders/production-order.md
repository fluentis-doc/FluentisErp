---
title: Ordine de Producție
sidebar_position: 3
---

În  mod normal*, ordinele de producție sunt generate automat de procedura de *Lansare ordine planificate*.
Pentru a crea un ordin de producție manual, este necesar să creați mai întâi ordinul planificat de producție și apoi să-l lansați utilizând procedura dedicată.

## 1. Antet

În antet sunt rezumate toate datele referitoare la ordinul de producție, cum ar fi: numărul, lotul și anul, datele comenzii și ale clientului de referință, proiectul asociat, data de început și sfârșit, informațiile referitoare la articolul de produs, cu versiunea structurii de bază și ciclul, cantitatea de produs și produsă.
Este de asemenea posibilă inserarea gestiunii și șablonului, care vor fi folosite pentru încărcarea produsului finit în gestiune; acestea vor avea prioritate maximă față de toți ceilalți parametri, așa cum este explicat în detaliu în [Parametrii de producție](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

#### Butoane specifice

> **Completare date ordin (Completamento dati ordine)**: apelează procedura care permite introducerea și/sau actualizarea, pentru articolul introdus în ordinul de producție, a tuturor datelor referitoare la materiale, faze, echipamente, echipamente, atribute și note diverse, preluându-le din structura de bază și ciclul de lucru al articolului și **valabile la data de execuție a completării datelor**.
> **Recalculează data de început (Ricalcola data inizio)**: Apelează procedura care permite efectuarea unei actualizări a datei de început a ordinului de producție și eventual a fazelor de lucru ale acestuia în urma unei modificări a timpilor de lucru și/sau a cantității de produs a articolului obiect al ordinului de producție.
> **Generează structura de bază (Genera distinta base)**: permite generarea structurii de bază pe baza datelor introduse în ordinul de producție sau actualizarea datelor existente cu cele introduse în ordin.
> **Generare ciclu de lucru (Generazione ciclo di lavoro)**: permite crearea ciclului de lucru al articolului bazându-se pe datele introduse în ordin sau actualizarea datelor existente cu cele introduse în ordin.

*Câmpuri specifice*:

**Stare (Stato)**: indică starea ordinului de producție: *Lansat* este starea inițială a ordinului de producție abia generat de procedura de lansare ordine planificate, în timp ce *Executiv* este starea de atribuit ordinului pentru a putea continua cu raportările de producție.

**Obligatoriu (Tassativo)**: activând acest flag, ordinul de producție devine obligatoriu, astfel încât [Programarea la capacitate finită (Schedulazione a capacità finita)](/docs/planning/ms-master-scheduling/finite-capacityscheduling) nu îl va repoziționa în timp și îl va menține fix în acele date. În plus, acesta va fi luat în considerare și de procedura [M.R.P.](/docs/planning/ms-master-scheduling/mrp) când este activat flagul *Diferențiază cererea de producție confirmată*.

## Materiale

În acest tab sunt raportate materialele de prim nivel ale structurii de bază referitoare la produsul finit de produs, dar utilizatorul poate modifica datele și/sau adăuga materiale suplimentare la lista de componente a ordinului de producție.
Pentru a importa datele direct din structura de bază a articolului, este necesar să faceți clic pe butonul **Completare date ordin (Completamento dati ordine)** prezent în bara de ribbon.

#### Butoane specifice

> **Introduceți material (Inserisci materiale)**: permite introducerea unui nou material în grilă;
> **Ștergeți material (Cancella materiale)**: permite ștergerea materialelor introduse în grilă.

*Câmpuri specifice*:

**Clasă (Classe)**: Indică clasa articolului;
**Cod articol (Codice articolo)**: indică codul articolului;
**Variantă (Variante)**: în acest câmp este introdusă eventual varianta articolului;
**UM (UM)**: în acest câmp este raportată unitatea de măsură principală a articolului;
**Unitate de măsură (Unità di misura)**: în acest câmp se introduce eventual unitatea de măsură alternativă a articolului;
**Data utilizării (Data impiego)**: coincide cu data de început prevăzută a fazei ordinului de producție la care este asociat acel material; dacă nu este asociat cu nicio fază coincide cu începutul primei faze a ciclului;
**Cantitate utilizare (Quantità impiego)**: reprezintă cantitatea unitară necesară pentru acest articol (prevăzută de [Structura de bază (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)) care poate fi totuși modificată;
**Cantitate totală (Quantità totale)**: reprezintă cantitatea obținută prin înmulțirea *Cantității de utilizare* cu *Cantitatea de produs*;
**Cantitate alternativă (Quantità alternativa)**: reprezintă cantitatea totală dar exprimată în unitatea de măsură alternativă;
**Cantitate prelevată (Quantità prelevata)**: reprezintă cantitatea prelevată prin [Lista de prelevare (Lista di prelievo)](/docs/production/pp-production-in-progress/picking-materials-list);
**Fixă / Variabilă (Fissa / Variabile)**: indică dacă cantitatea materialului este fixă sau variabilă, aceasta fiind moștenită din [Structura de bază (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management);
**Procentaj deșeu (Percentuale scarto)**: în această casetă este introdus sau preluat din [Structura de bază (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) eventualul procentaj de deșeu pentru acest articol;
**Fază / Sub Fază (Fase / Sotto Fase)**: cu un dublu clic se deschide un ajutor faze de lucru din care se poate selecta faza și sub faza corespunzătoare și astfel să se aloce materialul selectat unei anumite faze de lucru a articolului;
**Depozit (Magazzino)**: indică depozitul din care va fi descărcat acest articol;
**Motiv (Causale)**: indică motivul de depozit cu care va fi descărcat acest articol;
**Prioritate (Priorità)**: aici este vizualizată prioritatea componentului, dacă este prezentă, introdusă în [Structura de bază (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management). Aceasta contribuie la unicitatea materialului, astfel încât același material poate fi introdus de mai multe ori cu priorități diferite. În plus, poate fi modificată manual, la fel ca toate celelalte date prezente în această grilă;
**Cantitate disponibilă (Quantità disponibile)**: în acest câmp apare cantitatea disponibilă a articolului dată de procedura de **Recalculează fezabilitatea (Ricalcola fattibilità)** prezentă în [Secvența fazelor (Sequenza fasi)](/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown);
**De declarat pe mobil (Da dichiarare su mobile)**: dacă este activat, materialul va fi propus automat în formularul de declarație de producție prezent pe WMS.

## Faze

În acest tab sunt raportate fazele ciclului de lucru referitor la produsul finit de produs, dar utilizatorul poate modifica datele și/sau adăuga faze suplimentare la ordinul de producție.
Pentru a importa datele direct din ciclul de lucru al articolului, este necesar să faceți clic pe butonul **Completare date ordin (Completamento dati ordine)** prezent în bara de ribbon.
În ordinul de producție este posibil să variați o fază de la internă la externă, astfel încât va fi posibil să introduceți și subcontractorul (terzista) și la salvarea acestuia procedura va crea ordinul de subcontractare (ordine di conto lavoro). În plus, în cazul în care o fază externă este convertită în internă, procedura va elimina automat ordinul de subcontractare asociat.

#### Butoane specifice

> **Introduceți fază (Inserisci fase)**: permite introducerea unei noi faze în grilă;
> **Ștergeți fază (Cancella fase)**: permite ștergerea fazelor introduse în grilă.

*Câmpuri specifice*:

**Cod fază / Fază / Sub Fază (Codice fase / Fase / Sotto Fase)**: cu un dublu clic se deschide ajutorul faze de lucru din care se poate selecta faza și sub faza corespunzătoare;
**Control calitate (Controllo qualità)**: dacă este activat, acest flag indică faptul că această fază este supusă controlului calității și în tabul specific se poate indica *Planul de control* care va fi utilizat pentru a verifica articolul la declarația de producție efectuată;
**Fază productivă (Fase produttiva)**: dacă este activ, indică faptul că faza este productivă și se poate proceda la introducerea raportărilor de producție (deci activându-l se dorește ca producția pentru această fază să fie înregistrată); dacă nu este activ, nu va fi posibil să se declare faza însăși;
**Fază mobilizabilă (Fase movimentabile)**: dacă este activ, indică faptul că în momentul în care se înregistrează faza de producție se creează și mișcări de depozit; acest lucru înseamnă că procedând cu raportarea de producție se va proceda și la încărcarea produsului finit în depozit și la descărcarea materiei prime utilizate pentru producție în acea fază;
**Centru de lucru (Centro di lavoro)**: indică centrul de lucru, adică mașina în care se va desfășura acea fază specifică;
**Timp fix (Tempo fisso)**: dacă este activat, indică faptul că timpul acelei faze este fix și deci nu variabil în funcție de cantitate; acest lucru este moștenit din centrul de lucru introdus;
**Cantitate fază (Quantità fase)**: indică cantitatea totală de piese de produs în acea fază;
**Data de început / sfârșit prevăzută (Data inizio / fine prevista)**: acestea sunt datele de început și sfârșit ale fazei corespunzătoare; schimbând Datele prevăzute de început și sfârșit ale lucrării sunt modificate automat și acestea. Ele sunt calculate pe baza timpilor introduși în fazele de lucru, și mai precis pe baza celui mai mare dintre timpul total al muncitorului și timpul total al mașinii pentru faza selectată;
**Timp total mașină (Totale tempo macchina)**: indică timpul total al mașinii, dat de produsul *timpului mașinii* pentru *numărul de mașini*;
**Timp mașină (Tempo macchina)**: indică timpul de lucru al acelei mașini pentru acea fază;
**Număr mașini (Numero macchine)**: indică numărul de mașini utilizate în acea fază;
**Timp total muncitor (Totale tempo operaio)**: indică timpul total al muncitorului, dat de produsul *timpului muncitorului* pentru *numărul de muncitori*;
**Timp muncitor (Tempo operaio)**: indică timpul de lucru al forței de muncă pentru acea fază;
**Număr muncitori (Numero operai)**: indică numărul de muncitori angajați în acea fază;
**Fază / Sub fază suprapusă (Fase / Sotto fase sovrapposta)**: în aceste două câmpuri, în cazul suprapunerii, se va indica faza care se intenționează a fi suprapusă fazei selectate;
**Locație (Ubicazione)**: permite asocierea și a unei locații de depozit fazei; acest lucru înseamnă că toate articolele utilizate în acea fază vor fi prezente în acea locație;
**Descriere subcontractor (Descrizione terzista)**: cu dublu clic pe casetă se deschide ajutorul pentru a putea selecta contul și subcontul subcontractorului corespunzător. Această casetă este activă doar în cazul în care faza este desemnată ca fază *Externă*. De remarcat că *subcontractorul* este de asemenea preluat din faza de lucru introdusă în ciclul de lucru al articolului;
**Ordin de subcontractare creat (Ordine conto lavoro creato)**: indică faptul că a fost creat ordinul de subcontractare. Funcționează doar pentru fazele externe;
**Descriere centru de lucru (Descrizione centro lavoro)**: indică descrierea centrului de lucru al fazei;
**Tipărire definitivă (Stampa definitivo)**: indică faptul că a fost tipărit [Foaia de lucru (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet) în mod definitiv;
**Data tipăririi foii de lucru (Data stampa foglio di lavoro)**: indică data tipăririi [Foii de lucru (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet) în mod definitiv;
**Număr progresiv foaie de lucru (Numero progressivo foglio lavoro)**: indică numărul progresiv al [Foii de lucru (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet) tipărită în mod definitiv.

### Faze - Proprietăți

În tabul **Proprietăți** sunt vizualizate următoarele date referitoare la faza selectată în grilă:

**Descriere fază (Descrizione fase)**: indică descrierea fazei și subfazei selectate;
**Tip (Tipo)**: în această combo este posibil să se seteze tipul de lucru (intern sau extern);
**Suprapunere (Sovrapposizione)**: prin această combo se introduce tipologia unei eventuale suprapuneri între faze. Putem avea suprapunere *Totală* (în acest caz faza în cauză este suprapusă total fazei indicate), *Pe bucăți* (în acest caz este necesar să se indice după câte bucăți produse de această fază va începe faza următoare), *Pe timp* (în acest caz este necesar să se indice după câte minute de la începutul fazei indicate va începe faza următoare);
**UM Timpuri (UM Tempi)**: în această combo box apare Unitatea de Măsură a Timpurilor Fazei; se poate decide să se gestioneze timpii fazei în secunde, minute, ore și zile. De obicei, timpii fazelor interne sunt gestionați în minute și cei ai fazelor externe în zile, dar desigur depinde foarte mult de tipologia de companie pentru care se setează munca;
**Mașină (Macchina)**: în această combo poate fi selectat codul (și descrierea) mașinii corespunzătoare. Aceasta este propusă automat, preluată din centrul de lucru care a fost introdus anterior în grilă;
**Site de producție (Sito produttivo)**: indică site-ul de producție în care va fi produs articolul; acesta este moștenit din comanda de producție;
**Grup muncitori (Gruppo manodopera)**: în această combo poate fi selectat codul (și descrierea) grupului de muncitori corespunzător. Aceasta este propusă automat, preluată din centrul de lucru care a fost introdus anterior în grilă;
**Cantitate bucăți pe fază (Quantità pezzi per fase)**: indică numărul de bucăți produse pentru fiecare execuție a acelei faze;
**Valoare (Valore)**: aici se indică valoarea eventualei suprapuneri, utilizând criteriile specificate mai sus;
**Utilizare (Utilizzo)**: dacă flagul este activat, înseamnă că se dorește ca timpul de așteptare/coadă să crească timpul de angajament al Centrului de Lucru pe acea fază;
**Timp de așteptare sau coadă (Tempo di attesa o coda)**: indică timpul care este necesar să se aștepte la sfârșitul execuției fazei înainte de a putea să o reexecutați. În plus, activând flagul **Utilizare (Utilizzo)** acest timp de așteptare va fi considerat ca un angajament suplimentar al timpului Centrului de Lucru pe acea fază.

### Faze - Date Extra

Conține eventualele date extra referitoare la faza selectată.

### Faze - Documente atașate

Permite atașarea de documente la faza selectată, care vor fi apoi vizibile și în [MES](/docs/production/mes/mes-intro).

## Echipamente

În acest tab este posibil să se definească timpii referitori la echiparea fazei selectate în tabul anterior.
Este important să se rețină că datele referitoare la centrul de lucru, mașină și muncitori, trebuie introduse doar dacă sunt diferite de cele utilizate pentru fază, altfel dacă sunt goale vor fi considerate automat cele ale fazei principale.

*Câmpuri specifice*:

**Fază / Subfază / Descriere (Fase / Sottofase / Descrizione)**: în aceste câmpuri sunt vizualizate informațiile referitoare la faza care este selectată în tabul *Faze*;
**Tip (Tipo)**: indică tipologia fazei (internă sau externă);
**Tip suprapunere (Tipo sovrapposizione)**: indică eventual tipologia suprapunerii;
**UM Timpuri (UM Tempi)**: indică unitatea de măsură temporală a fazei;
**Centru de Lucru (Centro di Lavoro)**: în aceste câmpuri este introdus codul (și descrierea corespunzătoare) al Centrului de Lucru setat pentru echipare; (de utilizat doar dacă centrul de lucru de echipare este diferit de centrul de lucru utilizat în faza selectată);
**Mașină (Macchina)**: în aceste câmpuri este introdus codul (și descrierea corespunzătoare) al mașinii pentru echipare; (de utilizat doar dacă mașina utilizată pentru echipare este diferită de mașina utilizată în faza selectată);
**Grup Muncitori (Gruppo Manodopera)**: în aceste câmpuri este introdus codul (și descrierea corespunzătoare) al Grupului de muncitori pentru echipare; (de utilizat doar dacă grupul de muncitori utilizat pentru echipare este diferit de grupul de muncitori utilizat în faza selectată);
**Valoare (Valore)**: indică valoarea eventualei suprapunerii;
**Centru de lucru (Centro di lavoro)**: în aceste câmpuri este vizualizat codul și descrierea centrului de lucru corespunzător fazei selectate;
**Data de început (Data inizio)**: este vizualizată data de început a fazei selectate în tabul *Faze*;
**Data de sfârșit (Data fine)**: este vizualizată data de sfârșit a fazei selectate în tabul *Faze*;
**Timp echipare (Tempo attrezzaggio)**: este introdus timpul de echipare. Este un timp fix, care nu variază în funcție de cantitățile de produs în faza selectată;
**Timp reechipare (Tempo riattrezzaggio)**: este introdus timpul de reechipare. Se utilizează în cazul în care este necesar să se reechipeze centrul de lucru între o execuție și alta a fazei însăși și este adăugat la timpul de echipare;
**Număr mașini (Num. macchine)**: se indică numărul de mașini utilizate pentru echipare;
**Număr muncitori (Num. operai)**: se indică numărul de muncitori utilizat pentru echipare.

## Echipamente

În acest tab, constituit în principal dintr-o grilă, este posibil să se definească care și câte echipamente vor fi utilizate în producția fazei selectate în tabul *Faze*.

*Câmpuri specifice*:

**Secvență (Sequenza)**: în acest câmp este posibil să se indice secvența cu care trebuie utilizate echipamentele;

**Echipamente (Attrezzature)**: cu această combo box este posibil să se apeleze codul echipamentului, preluat din tabelul corespunzător [Echipamente (Attrezzature)](/docs/configurations/tables/production/equipments);
**Clasă/Cod articol (Classe/Codice articolo)**: în aceste câmpuri este posibil să se indice clasa și codul articolului (ajutorul filtrează automat doar articolele care sunt identificate ca *Echipamente* în câmpul *Natura Articol* al registrului de depozit);
**Variantă (Variante)**: reprezintă varianta articolului;
**Cantitate (Quantità)**: reprezintă cantitatea articolului.

## Control calitate

În acest tab, constituit în principal dintr-o grilă, este posibil să se vizualizeze detaliile testelor planificate de [control calitate (controllo qualità)](/docs/quality/quality-intro) pentru faza / subfaza.

## Notă fază

În acest tab este vizualizată nota legată de faza de lucru selectată în tabul *Faze*. Aceasta este modificabilă de utilizator în contextul ordinului de producție în cauză.

## Instrucțiuni operative

În acest tab este posibil să se atașeze și să se vizualizeze *Instrucțiunile operative* legate de faza de lucru selectată în tabul *Faze*. Acestea vor fi vizualizabile și în [Fluentis MES](/docs/production/mes/mes-intro).

## Personal

În acest tab este posibil să se introducă operatorii care vor trebui să desfășoare fazele individuale ale ciclului de producție. (*Este utilizat doar pentru personalizări*).

## Date Extra

Pentru o descriere detaliată a datelor extra se face referire la articolul [Date Extra (Extra data)](/docs/configurations/utility/extra-data/extradata/new-extradata).

Pentru detalii despre funcționarea comună a formularelor, consultați linkul [Funcționalități, butoane și câmpuri comune (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).