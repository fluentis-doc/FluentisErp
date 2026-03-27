---
title: Declarație nouă de producție
description: Ghid complet pentru crearea și gestionarea manuală a declarațiilor de producție în Fluentis ERP.
keywords:
  - declarații de producție
  - MES
  - ordin de producție
  - avansare producție
  - setare utilaj
  - materiale
  - UdI
sidebar_position: 2
schema: TechArticle
tags:
  - Producție
  - Declarații
  - MES
  - ERP
last_update:
  author: Fluentis Documentation Team
ai_generated: true
---

# Declarație nouă de producție

*Declarațiile de producție* sunt generate de obicei automat prin [Fluentis MES](/docs/production/mes/mes-intro).  
Alternativ, utilizatorul le poate crea manual prin acest formular dedicat.

## Inserare ordin de producție

La deschiderea form-ului este necesar:

1. Să introduceți ordinul de producție (an, număr și lot), manual sau cu ajutorul help-ului.  
2. Să selectați faza și subfaza, tot manual sau cu ajutorul help-ului.

Astfel, *datele fazei selectate sunt încărcate automat* în partea superioară a form-ului, unde pot fi vizualizate informații despre tipul ordinului de producție, comanda cu an, număr și tip, proiectul asociat, centrul de lucru și utilajul pe care se execută faza, data estimată de finalizare a lucrării, precum și informațiile despre articol cu eventuală variantă.        
Se inserează cantitatea totală de produs, **cantitatea produsă** care este egală cu suma cantităților declarate de ultima fază productivă și transferabilă a ciclului, (care corespunde corespunde finit), și **cantitatea fazei produse**, care este suma cantităților prezente în declarația fazei respective.

Câmpul **barcode** din antet este folosit pentru introducerea Ordinului de producție sau a Fazei de declarat.    
**Barcode**‑ul trebuie să fie compus dintr-un identificator fix pentru recunoașterea Ordinului de producție (707) sau a Fazei unui ordin de producție (718), caracterul de separare "-" și identificatorul Ordinului de producție sau al Fazei pe care doriți să o declarați.   

*Exemplu*: 707-1234 sau 718-98765

#### Introducere linii declarație

În partea centrală se gestionează liniile declarației.  
Prima informație este **Starea declarației**, cu următoarele tipuri posibile:

- *Deschidere*: permite crearea unei declarații de producție de deschidere;    
- *Întrerupere*: permite crearea unei declarații de producție de întrerupere;    
- *Reluare*: permite crearea unei declarații de producție de reluare; se introduce doar după o *Întrerupere*;          
- *Avansare*: permite crearea unei declarații de producție de avansare;    
- *Închidere*: permite crearea unei declarații de producție de închidere  

:::important Notă
Fiecare declarație de producție trebuie să aibă ca primă linie o declarație de **deschidere** care marchează momentul începerii lucrării.              
Aceasta poate fi urmată de o avansare sau direct de o fază de **închidere**, în funcție de caz. Diferența esențială este că închiderea nu permite introducerea altor linii de declarație, în timp ce avansarea permite.
:::

Sunt posibile și secvențe de tipul *Întrerupere → Reluare*, în cazul în care este necesară oprirea producției din anumite motive.

#### Butoane specifice

> **Salvează**: permite salvarea modificărilor efectuate;        
> **Declarație nouă de producție**: permite introducerea unei noi linii de declarație;          
> **Recalculează timp mașină**: permite recalcularea timpului mașinii pentru toate liniile declarației;          
> **Recalculează timp operator**: permite recalcularea timpului de manoperă pentru toate liniile declarației;          
> **Introdu declarații**: permite introducerea unei noi linii de declarație după cele deja introduse;         
> **Întrerupere/Reluare nouă**: permite introducerea simultană a unei linii de întrerupere și a uneia de reluare, indicând în pop-up data și ora pentru fiecare; butonul se activează doar dacă ultima stare a declarației este *Deschidere* sau *Avansare*;                 
> **Șterge declarații**: permite ștergerea liniei de declarație selectate;            
> **Deschide UdI**: permite deschiderea *Gestionării unităților de încărcare* filtrată pe unitatea de încărcare aferentă liniei de declarație selectate;          
> **Creează UdI**: permite crearea unei unități de încărcare aferente liniei de declarație selectate. Pentru a o crea, este necesar să introduceți manual *Tip unitate de încărcare* și *Angajat*;       
> **Înregistrare declarații**: permite crearea înregistrării mișcării de gestiune aferente liniei de declarație selectate;          
> **Restaurează declarații**: permite anularea înregistrării mișcării de gestiune aferente liniei de declarație selectate.                                     

#### Câmpuri specifice  
**Înregistrat**: indică faptul că linia declarației a fost înregistrată și a fost creată mișcarea de gestiune aferentă;        
**Data**: indică data de început aferentă liniei declarației;         
**Ora**: indică ora de început aferentă liniei declarației;         
**Număr**: este un număr progresiv atribuit fiecărei linii a declarației (începe mereu de la 1);        
**Stare declarație**: permite definirea stării aferente liniei declarației. Poate avea următoarele valori: *Deschidere*, *Întrerupere*, *Reluare*, *Avansare* sau *Închidere*;        
**Activitate de setup**: în Declarațiile de producție și Declarațiile M.E.S. a fost adăugat un indicator pentru Activitate de setup. Bifa este activă (în Declarațiile de producție) și vizibilă (Declarații M.E.S.) doar dacă faza declarată sau prima fază a unui grup de faze presupune utilizarea unui utilaj. Activarea bifei pentru o activitate de setup duce la creșterea contorului de timp ca **Timp de setup**, altfel creșterea va fi pe contorul de **Timp de lucru**.     
**Cauză întrerupere**: permite indicarea șablonului întreruperii de utilizat pentru linia respectivă a declarației. Se activează doar dacă *Starea declarației* este de tip *Întrerupere*;     
**Lot**: permite introducerea manuală a numărului de lot aferent cantității produse;    
**Cantitate produsă**: reprezintă cantitatea produsă aferentă liniei declarației;         
**Unitate de măsură alternativă**: indică unitatea de măsură alternativă utilizată;     
**Cantitate alternativă**: reprezintă cantitatea produsă în unitatea de măsură alternativă utilizată;       
**Gestiune transfer**: indică gestiunea de transfer a cantității produse;         
**Șablon transfer**: reprezintă șablonul de transfer utilizat pentru cantitatea produsă;      
**Locație transfer**: indică locația transferului cantității produse. 
**Cantitate rebutată**: reprezintă cantitatea respinsă aferentă liniei declarației;        
**Gestiune rebut**: indică gestiunea de transfer a cantității respinse;      
**Șablon rebut**: reprezintă șablonul de transfer utilizată pentru cantitatea respinsă;       
**Locație rebut**: indică locația pentru cantitatea respinse;        
**Defect**: permite introducerea defectului aferent cantității respinse. Se activează doar după introducerea unei valori mai mari de zero în câmpul **Cantitate rebutată**;       
**Gestiune de consum**: permite specificarea gestiunii de consum al articolului (în antetul declarației de producție) utilizat de faza precedentă;            
**Șablon de consum**: permite specificarea șablonului de consum al articolului (în antetul declarației de producție) utilizat de faza precedentă;       
**Locație de consum**: permite specificarea locației de consum al articolului (în antetul declarației de producție) utilizat de faza precedentă;        
**Mașini**: indică numărul utilajelor și descrierea șablonului transferului cantității produse;             
**Număr mașini**: indică numărul utilajelor utilizate aferente liniei declarației;        
**Grupuri de manoperă**: reprezintă codul grupului de manoperă folosit pentru rândul declarației;  
**Număr de operatori**: indică numărul de operatori folosiți pentru rândul declarației;  
**Locaţie producţie**: reprezintă codul locației productive aferente rândului declarației;  
**Timp manoperă**: indică timpul de manoperă aferent liniei declarației; se calculează ca diferență între *data/ora* declarației actuale și celei precedente. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);                    
**Timp de setare**: indică timpul de setare aferent liniei declarației; se introduce manual. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);             
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
**Descriere gestiune transfer**: indică descrierea gestiunii de transfer pentru cantitatea produsă;  
**Descriere șablon transfer**: indică descrierea șablonului de transfer pentru cantitatea produsă;  
**Descriere gestiune rebut**: indică descrierea gestiunii aferente cantității de rebuturi;  
**Descriere șablon rebut**: indică descrierea șablonului pentru rebuturi;  
**Descriere mașină**: indică descrierea mașinii utilizate;  
**Descriere grup manoperă**: indică descrierea grupului de manoperă utilizat;  
**Descriere locație de producție**: indică descrierea locației productive utilizate.


Partea inferioară a form-ului este compusă dintr-o serie de taburi aferente liniei de declarație selectate.

### Materiale

În acest tab sunt aduse automat materialele utilizate în fază pentru realizarea articolului de produs. Utilizatorul însă poate modifica datele și/sau adăuga materiale suplimentare după necesități.      
Desigur, pentru ca materialele să fie aduse automat, faza trebuie să fie ultima de tip *Productiv* și *Transferabilă* din ciclu; dacă nu este ultima, trebuie totuși să fie de tip *Productiv* și *Transferabilă* și să i se fi alocat materiale direct.  

#### Câmpuri specifice  
**Înregistrat**: indică faptul că materialul de pe linia declarației selectate a fost înregistrat și a fost creată mișcarea de gestiune aferentă;        
**Unitate de încărcare material**: permite indicarea unității de încărcare din care se preia materialul;             
**Clasă**: indică clasa articolului;         
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
**Gestiune rebuturi**: reprezintă codul gestiunii rebuturi pentru material;  
**Locație rebuturi**: reprezintă codul locației rebuturi pentru material;  
**Șablon rebuturi**: reprezintă codul șablonului rebuturi pentru material;  
**Descriere articol**: indică descrierea articolului;  
**Descriere variantă**: indică descrierea variantei articolului;  
**Descriere gestiune de consum**: indică descrierea gestiunii de consum al materialului;  
**Descriere șablon de consum**: indică descrierea șablonului de consum al materialului;  
**Descriere gestiune rebuturi**: indică descrierea gestiunii rebuturi a materialului;  
**Descriere șablon rebuturi**: indică descrierea șablonului rebuturi a materialului;  
**Prioritate**: indică prioritatea cu care sunt afișate materialele.        

De asemenea, în partea inferioară se pot introduce loturi și serial numbers.

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

## Echipă

Acest tab permite gestionarea membrilor echipei care efectuează lucrarea aferentă liniei de declarație selectate, indicând pentru fiecare data de început și sfârșit a lucrării.

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

### Articole alternative

Permite gestionarea articolelor spin-off generate ca urmare a producerii unui articol principal.

Astfel, acestea pot fi introduse în grila dedicată, cu posibilitatea de a gestiona și loturile și serial numbers aferente.      
Desigur, loturile și serial numbers se referă la linia articolului alternativ selectat.      
Mișcările de încărcare ale articolelor alternative se vor efectua cu gestiunea, șablonul și locația inserateîn linie.

#### Loturi  
**Lot**: indică numărul de lot al articolului;  
**Tip cod lot**: indică tipul codului de lot al articolului;  
**Tip lot**: indică tipul lotului al articolului;  
**Cod lot furnizor**: indică numărul de lot al furnizorului articolului;  
**Notă**: permite introducerea unei note aferente lotului;  
**Cantitate**: reprezintă cantitatea articolului pentru acel lot;  
**Locație**: indică locația lotului articolului;  
**Data început**: indică data de începere a lotului articolului;  
**Dată scadenţă**: indică data de expirare a lotului articolului;  
**Cont sintetic/analitic/Descriere cont**: indică respectiv contul sintetic, analitic și descrierea clientului/furnizorului aferent articolului.

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

### Rebuturi

Acest tab permite specificarea mai multor gestiuni și șabloane pentru rebuturi, cu cantitățile aferente, și se activează numai dacă se declară o cantitate rebutată.

### Extra Data

Permite gestionarea și vizualizarea datelor suplimentare aferente declarației.

Pentru o descriere detaliată a extra data, consultați articolul [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Loturi și Numere Seriale  

În acest tab, la înregistrarea declarației de producție, sunt aduse automat loturile și serial numbers ale articolelor produse conform procedurii indicate în tabul [Loturi și Numere Seriale](/docs/erp-home/registers/items/create-new-item) din registrul articolului.      
Dacă este indicat un lot în linia declarației, articolele produse vor fi înregistrate cu acest număr de lot, care are prioritate față de regulile din registrul articolului.

#### Loturi  
**Lot**: indică numărul de lot al articolului;  
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
**Lot**: reprezintă codul lot al serial number-ului articolului.

## Rezumat și detalii  

Acest ghid descrie în detaliu gestionarea manuală a *Declarațiilor de producție* în Fluentis ERP, incluzând:

- Introducerea ordinului și fazei  
- Crearea liniilor de declarație  
- Stările disponibile și logica lor  
- Materiale, echipe, rebuturi, întreruperi  
- Gestionarea UdI și mișcărilor de gestiune 

Pentru detalii:  
- [Funcționalități, butoane și câmpuri comune](/docs/guide/common)  
- [MES – Introducere](/docs/production/mes/mes-intro)  
- [Listă ieșire materiale](/docs/production/pp-production-in-progress/picking-materials-list)