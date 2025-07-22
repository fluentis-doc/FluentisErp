---
title: Declarație nouă
sidebar_position: 2
---

În mod normal, *Declarațiile de producție* sunt generate automat cu Fluentis [MES](/docs/production/mes/mes-intro), însă utilizatorul are posibilitatea să le genereze manual folosind acest form.

Pentru a crea o declarație nouă este necesară inserarea ordinului de producție cu indicarea anului, numărului și lotului, fie manual, fie prin intermediul help-ului, precum și faza și subfaza de declarat, tot manual sau prin intermediul help-ului.  
Astfel se încarcă automat datele fazei selectate în partea superioară a formului, unde putem vedea informațiile referitoare la tipul ordinului de producție, comanda cu anul, numărul și tipul, proiectul asociat, centrul de lucru și mașina pe care se execută faza, data de finalizare estimată a lucrării, precum și informațiile articolului cu varianta sa, dacă există.  
Se inserează cantitatea totală de produs, cantitatea produsă care este egală cu suma cantităților declarate de ultima fază productivă și care se poate înregistra a ciclului (corespunzătoare, deci, produsului finit), și cantitatea fazei produse, care rezultă din suma cantităților prezente în declarația fazei respective.

Câmpul **barcode** din antet este utilizat pentru introducerea ordinului de producție sau a fazei care urmează să fie declarată.  
Barcode-ul trebuie să fie compus dintr-un identificator fix pentru recunoașterea ordinului de producție (707) sau a fazei unui ordin de producție(718), caracterul de separare "-" și identificatorul ordinului de producție ori al fazei pe care dorim să o declarăm.

Exemplu: 707-1234 sau 718-98765

În tabelul central se introduc liniile declarației de producție.  
Primul lucru de introdus este *Starea declarației*, care poate avea următoarele valori:

- *Deschidere*: permite crearea unei declarații de producție de deschidere;  
- *Întrerupere*: permite crearea unei declarații de producție de înrerupere;  
- *Reluare*: permite crearea unei declarații de producție de reluare; se introduce doar după o *Întrerupere*;  
- *Avansare*: permite crearea unei declarații de producție de progres;  
- *Închidere*: permite crearea unei declarații de producție de închidere;

Fiecare declarație de producție trebuie să aibă ca prim rând o declarație de deschidere, care determină momentul în care începe prelucrarea.  
Aceasta poate fi urmată de avansare sau direct de o fază de închidere, în funcție de caz. Diferența esențială este că închiderea nu permite introducerea altor rânduri de declarație, în timp ce *Avansare* da.  
De asemenea, este posibilă introducerea declarațiilor de înrerupere, urmate de o declarație de reluare, în cazul în care este necesară oprirea producției dintr-un anumit motiv.

#### Butoane specifice

> **Salvează**: permite salvarea modificărilor efectuate;  
> **Declarație de producție nouă**: permite inserarea unui nou rând în declarație;  
> **Recalculează timp mașină**: permite recalcularea timpului de funcționare a mașinii pentru toate rândurile declarației;  
> **Recalculează timp operator**: permite recalcularea timpului de manoperă pentru toate rândurile declarației;  
> **Inserează declarații**: permite introducerea unui nou rând de declarație, ulterior celor deja introduse;  
> **Nouă întrerupere/reluare**: permite inserarea simultană a unui rând de înrerupere și a unui rând de reluare, indicând în pop-up data și ora pentru fiecare; butonul este activ doar dacă ultima stare a declarației este *Deschidere* sau *Avansare*;  
> **Șterge declarații**: permite ștergerea rândului de declarație selectat;  
> **Deschide UdI**: permite deschiderea form-ului pentru gestionarea unității de încărcare cu filtrul corespunzător unității de încărcare aferente rândului declarației selectate;  
> **Creează UdI**: permite crearea unei unități de încărcare aferente rândului declarației selectate. Pentru a o crea, este necesar să fie introduse manual *Tipul unității de încărcare* și *Angajatul*;  
> **Înregistrare declarații**: permite crearea înregistrării mișcării de gestiune pentru rândul de declarație selectat;  
> **Restaurează declarații**: permite anularea înregistrării mișcării de gestiune pentru rândul de declarație selectat.

#### Câmpuri specifice 

**Înregistrat**: indică faptul că rândul declarației a fost înregistrat și a fost creată mișcarea corespunzătoare de gestiune;  
**Data**: indică data de începere aferentă rândului declarației;  
**Ora**: indică ora de început aferentă rândului declarației;  
**Număr**: este un număr progresiv atribuit fiecărui rând al declarației (pornește întotdeauna de la 1);  
**Stare declarație**: definește starea rândului declarației. Poate fi: *Deschidere*, *Întrerupere*, *Reluare*, *Avansare* sau *Închidere*;  
**Șablon înrerupere**: permite indicarea șablonului de înrerupere utilizat pentru rândul de declarație. Se activează numai dacă *Starea declarației* este de tip *Întrerupere*;  
**Lot**: permite introducerea manuală a numărului de lot aferent cantității produse;  
**Cantitate produsă**: reprezintă cantitatea produsă aferentă rândului declarației;  
**Unitate de măsură alternativă**: indică unitatea de măsură alternativă utilizată;  
**Cantitate alternativă**: reprezintă cantitatea produsă în unitatea de măsură alternativă;  
**Gestiune de depozitare**: indică gestiunea în care se depozitează cantitatea produsă;  
**Șablon depozitare**: indică șablonul de depozitare utilizat pentru cantitatea produsă;  
**Locație depozitare**: indică locația în care se depozitează cantitatea produsă;  
**Cantitate rebutată**: reprezintă cantitatea rebutată aferentă rândului declarației;  
**Gestiune deșeuri**: indică gestiunea pentru cantitatea de deșeuri;  
**Șablon deșeuri**: indică șablonul utilizat pentru cantitatea rebutată;  
**Locație deșeuri**: indică locația pentru cantitatea rebutată;  
**Defect**: permite introducerea defectului aferent cantității respinse. Se activează numai după ce s-a introdus o valoare mai mare de zero în câmpul **Cantitate rebutată**;  
**Gestiune de consum**: permite specificarea gestiunii de consum a articolului (în antetul declarației de producție) utilizat în faza anterioară;  
**Șablon de consum**: permite specificarea șablonului de consum a articolului (în antetul declarației de producție) utilizat în faza anterioară;  
**Locație de consum**: permite specificarea locației de consum a articolului (în antetul declarației de producție) utilizat în faza anterioară;  
**Mașini**: indică descrierea șablonului de depozitare a cantității produse;  
**Număr mașini**: indică numărul de mașini folosit pentru rândul declarației;  
**Grupuri de manoperă**: reprezintă codul grupului de manoperă folosit pentru rândul declarației;  
**Număr de operatori**: indică numărul de operatori folosiți pentru rândul declarației;  
**Locaţie producţie**: reprezintă codul locației productive aferente rândului declarației;  
**Timp mașină**: indică timpul mașinilor aferent rândului declarației. Se calculează ca diferență între *data/ora* declarației actuale și cele ale declarației anterioare. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);  
**Timp manoperă**: indică timpul de manoperă aferent rândului declarației. Se calculează ca diferență între *data/ora* declarației actuale și cele ale declarației anterioare. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);  
**Timp de configurare**: indică timpul de pregătire aferent rândului declarației; acesta se indică manual. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);  
**Angajat**: reprezintă codul utilizatorului care efectuează declarația;  
**Nume**: indică numele de familie al utilizatorului care efectuează declarația;  
**Prenume**: indică prenumele utilizatorului care efectuează declarația;  
**Unitate de încărcare**: indică numărul unității de încărcare, format din an, număr ordin de producție și un progresiv. Pentru ca unitatea de încărcare să poată fi folosită în declarațiile de producție, este necesar ca **Grupul**, configurat în [Tip grup UdI](/docs/configurations/tables/logistics/loading-unit-group-type/) al unității de încărcare, să fie de tip *Comandă de producţie* sau *Ordin de producție*;  
**Tip unitate de încărcare**: indică tipul unității de încărcare;  
**Descriere tip unitate de încărcare**: indică descrierea tipului unității de încărcare;  
**Număr unitate de încărcare**: indică numărul unității de încărcare;  
**Înălțime**: indică înălțimea unității de încărcare;  
**Lățime**: indică lățimea unității de încărcare;  
**Adâncime**: indică adâncimea unității de încărcare;  
**Descriere șablon de înrerupere**: indică descrierea șablonului de întrerupere fololocație în rândul declarației;  
**Descriere gestiune depozitare**: indică descrierea gestiunii depozitare pentru cantitatea produsă;  
**Descriere șablon depozitare**: indică descrierea șablonului depozitare pentru cantitatea produsă;  
**Descriere gestiune de deșeuri**: indică descrierea gestiunii aferente cantității de deșeuri;  
**Descriere șablon de deșeuri**: indică descrierea șablonului pentru deșeuri;  
**Descriere mașină**: indică descrierea mașinii utilizate;  
**Descriere grup manoperă**: indică descrierea grupului de manoperă utilizat;  
**Descriere locației de producție**: indică descrierea locației productive utilizate.

Partea inferioară a formului se compune dintr-o serie de taburi aferente rândului declarației selectate.

## Materiale  

În acest tab sunt afișate automat materialele utilizate în faza de realizare a articolului de produs, dar utilizatorul poate modifica datele și/sau adăuga materiale suplimentare, în funcție de necesități.  
Desigur, pentru ca materialele să fie afișate automat, faza trebuie să fie ultima de tip *Productiv* și *Cu mișcare* din ciclu; dacă nu este ultima, tot trebuie să fie de tip *Productiv* și *Cu mișcare* și să-i fie asociate direct materiale.

#### Câmpuri specifice  

**Înregistrat**: indică faptul că materialul aferent rândului declarației selectate a fost înregistrat și a fost creată mișcarea de gestiune corespunzătoare;  
**Unitate de încărcare material**: permite indicarea unității de încărcare din care preluăm materialul;  
**Clasă**: reprezintă clasa articolului;  
**Cod articol**: reprezintă codul articolului;  
**Variantă**: reprezintă codul variantei articolului;  
**Unitate de măsură**: indică unitatea de măsură principală pentru material;  
**Cantitate prelevată**: reprezintă cantitatea preluată prin procedura [Lista ieşiri material)](/docs/production/pp-production-in-progress/picking-materials-list);  
**Cantitate consumată**: reprezintă cantitatea utilizată de material;  
**Unitate de măsură alternativă**: indică unitatea de măsură alternativă a materialului;  
**Cantitate alternativă**: reprezintă cantitatea de material utilizată în unitatea de măsură alternativă;  
**Gestiune de consum**: reprezintă codul gestiunii de consum al materialului;  
**Șablon de consum**: reprezintă codul șablonului de consum al materialului;  
**Locație de consum**: reprezintă codul locației gestiunii de consum al materialului;  
**Cantitate rebutată**: reprezintă cantitatea respinsă a materialului;  
**Gestiune de deșeuri**: reprezintă codul gestiunii deșeuri pentru material;  
**Locație deșeuri**: reprezintă codul locației deșeuri pentru material;  
**Șablon de deșeuri**: reprezintă codul șablonului deșeuri pentru material;  
**Descriere articol**: indică descrierea articolului;  
**Descriere variantă**: indică descrierea variantei articolului;  
**Descriere gestiune de consum**: indică descrierea gestiunii de consum al materialului;  
**Descriere șablon de consum**: indică descrierea șablonului de consum al materialului;  
**Descriere gestiune de deșeuri**: indică descrierea gestiunii de deșeuri a materialului;  
**Descriere șablon de deșeuri**: indică descrierea șablonului de deșeuri a materialului;  
**Prioritate**: indică prioritatea cu care sunt afișate materialele.

### Loturi  

**Lot**: indică numărul de lot al materialului selectat;  
**Cod lot furnizor**: indică numărul de lot al furnizorului pentru materialul selectat;  
**Cantitate**: reprezintă cantitatea de material selectat aferentă acelui lot;  
**Locație**: indică locația lotului materialului selectat;  
**Dată început**: indică data de începere pentru lotul materialului selectat;  
**Dată scadenţă**: indică data de expirare pentru lotul materialului selectat;  
**Cont sintetic/analitic/Descriere cont**: indică respectiv contul sintetic, analitic și descrierea clientului/furnizorului pentru materialul selectat.

### Numere Seriale  

**Barcode**: codul barcode include numărul serial și alte informații aferente. Pentru toate informațiile despre cum se codifică barcode-ul care urmează a fi citit în acest câmp, consultați pagina [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer);  
**Tip Număr Serial**: indică tipul de număr serial pentru materialul selectat;  
**Număr Serial**: indică numărul serial al materialului selectat;  
**Data început**: indică data de începere a numărului serial pentru materialul selectat;  
**Anulat**: indică faptul că numèrul serial este în stare anulată;  
**Lot**: reprezintă codul lotului pentru numărul serial al materialului selectat.

## Echipa  

Acest tab permite gestionarea membrilor echipei care lucrează pentru declarația selectatè, indicând pentru fiecare data de începere și data de sfârșit a lucrării.

#### Câmpuri specifice 

**Cod**: reprezintă codul operatorului care lucrează la declarație;  
**Nume**: indică numele de familie al operatorului;  
**Prenume**: indică prenumele operatorului;  
**Șef echipă**: indică faptul că acel operator este șeful de echipă;  
**Activitate**: indică activitatea desfășurată de operator;  
**Descriere**: indică descrierea activității desfășurate de operator;  
**Configurare**: indică faptul că timpul lucrat de operator va fi considerat ca timp de pregătire în analizele ulterioare;  
**Dată început**: indică data de începere a lucrării operatorului;  
**Ora început**: indică ora de început a lucrării operatorului;  
**Dată sfârșit**: indică data de sfârșit a lucrării operatorului;  
**Ora sfârșit**: indică ora de sfârșit a lucrării operatorului;  
**Dată creare**: indică data creării înregistrării;  
**Dată ultimă modificare**: indică data ultimei modificări a înregistrării;  
**Operator**: indică utilizatorul care a creat înregistrarea.

## Articole alternative  

Acest tab permite adăugarea și gestionarea articolelor (spin-off) care sunt realizate ca urmare a producției unui articol principal.  Loturile și numerele seriale se referă la rândul articolului alternativ selectat.  
Mișcările de încărcare pentru articolele alternative se vor face în gestiunea, cu șablonul și locația inserate pe rând.

### Loturi

**Lot**: indică numărul de lot al articolului;  
**Tip cod lot**: indică tipul codului de lot al articolului;  
**Tip lot**: indică tipul lotului al articolului;  
**Cod lot furnizor**: indică numărul de lot al furnizorului articolului;  
**Notă**: permite introducerea unei note aferente lotului;  
**Cantitate**: reprezintă cantitatea articolului pentru acel lot;  
**Locație**: indică locația lotului articolului;  
**Data început**: indică data de începere a lotului articolului;  
**Dată scadenţă**: indică data de expirare a lotului articolului;  
**Contsintetic/analitic/Descriere cont**: indică respectiv contul sintetic, analitic și descrierea clientului/furnizorului aferent articolului.

### Numere Seriale

**Cod Număr Serial**: indică numărul serial al articolului;  
**Tip Număr Serial**: indică tipul de număr serial al articolului;  
**Număr serial client**: indică numărul serial al clientului pentru articolul respectiv;  
**Număr serial furnizor**: indică numărul serial al furnizorului pentru articolul respectiv;  
**Data început**: indică data de începere a numărului serial al articolului;  
**Anulat**: indică faptul că numărul serial este în stare anulată;  
**Lot**: reprezintă codul lotului pentru numărul serial al articolului.

## Întreruperi

Acest tab permite specificarea mai multor șabloane de înrerupere, cu minutele corespunzătoare, și se activează doar pentru un rând cu *Starea declarației* de tip *Întrerupere*.

## Deșeuri 

Acest tab permite specificarea mai multor gestiuni și șabloane pentru deșeuri, cu cantitățile aferente, și se activează numai dacă se declară o cantitate rebutată.

## Date extra  
Permite gestionarea și vizualizarea datelor suplimentare asociate declarației.

Pentru o descriere detaliată despre extra data, consultați articolul [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Loturi și Numere Seriale 

În tabul **Loturi și Numere Seriale**, în timpul înregistrării declarației de producție, loturile și numerele seriale ale articolelor produse sunt preluate automat, pe baza logicii indicate în tabul [Loturi și Numere Seriale](/docs/erp-home/registers/items/create-new-item) din registrul articolului.  
Dacă este indicat un lot în câmpul relativ din rândul declarației, articolele produse vor fi înregistrate cu acest număr de lot, care are prioritate față de regulile introduse în registrul articolului.

### Loturi

**Lot**: indică numărul de lot al articolului;  
**Tip cod lot**: indică tipul codului de lot al articolului;  
**Tip lot**: indică tipul lotului articolului;  
**Cod lot furnizor**: indică numărul lotului furnizorului articolului;  
**Notă**: permite introducerea unei note aferente lotului;  
**Cantitate**: reprezintă cantitatea articolului pentru acel lot;  
**Locație**: indică locația lotului articolului;  
**Data început**: indică data de începere a lotului articolului;  
**Dată scadență**: indică data de expirare a lotului articolului;  
**Cont sintetic/analitic/Descriere cont **: indică respectiv contul sintetic, analitic și descrierea clientului/furnizorului aferent articolului.

### Numere Seriale

**Cod Număr Serial**: indică numărul serial al articolului;  
**Tip număr serial**: indică tipul de număr serial al articolului;  
**Număr serial client**: indică numărul serial al clientului pentru articolul respectiv;  
**Număr serial furnizor**: indică numărul serial al furnizorului pentru articolul respectiv;  
**Data început**: indică data de începere a numărului serial al articolului;  
**Anulat**: indică faptul că numărul serial este în stare anulată;  
**Lot**: reprezintă codul lotului pentru numărul serial al articolului.