---
title: Planificare la capacitate finită
sidebar_position: 4
---

:::important Utilizare
Funcționalitatea **Planificare la capacitate finită** din Fluentis este un instrument avansat, conceput pentru a optimiza gestionarea resurselor productive într-o companie de producție.  
Acest modul este integrat în sistemul ERP al suitei Fluentis și permite planificarea și gestionarea activităților productive, având în vedere capacitățile reale ale resurselor disponibile, cum ar fi forța de muncă, utilajele și materialele.  
Datorită acestei funcționalități, companiile pot minimiza timpii de nefuncționare, îmbunătăți eficiența operațională și răspunde cu o flexibilitate mai mare la variațiile cererii.  
Planificarea la capacitate finită ia în considerare limitările fizice ale resurselor, permițând crearea planurilor de producție realiste și realizabile. În plus, oferă instrumente analitice pentru a prezice eventualele blocaje și permite optimizarea alocării sarcinilor, integrându-se cu alte funcționalități ale ERP-ului pentru o viziune completă a operațiunilor de afaceri. Acest sistem ajută companiile să echilibreze eficient cererea clienților cu capacitățile de producție, îmbunătățind în cele din urmă rentabilitatea și satisfacția clientului.
:::

Planificarea producției la capacitate finită permite monitorizarea orelor de lucru care poate fi realizată într-o perioadă de timp definită, având în vedere limitările unor resurse. Obiectivul final este de a asigura cea mai mare eficiență a ritmurilor de producție pe întreaga linie internă a fabricii, optimizând timpii și reducând costurile centrelor de lucru.  
Cu această modalitate de planificare, este posibil să se creeze secvențe optime de procesare pe fiecare *Centru de lucru*, obținând astfel o saturație maximă a acestora.

## Comenzi

Acest tabel afișează doar comenzile care sunt cu statusul *neplanificată*.

#### Butoane specifice

> **Planificare F.C.S.**: permite sistemului să planifice la capacitate finită etapele de procesare ale documentelor prevăzute;  
> **Modifică dată comandă**: permite modificarea datei comenzii;  
> **Schimbă prioritatea**: permite modificarea priorității comenzilor selectate;    
> **Parametri MRP**: permite deschiderea parametrilor MRP pentru comenzile selectate;    
> **Lista componente**: permite deschiderea listelor de componente ale comenzilor selectate;    
> **Ciclul de lucru**: permite deschiderea ciclurilor de lucru ale comenzilor selectate.        

#### Filtre specifice

**Tip comandă**: permite selectarea tipul de comandă care va fi afișat: monoprodus, multiprodus sau ambele;

**Locație producție**: afișează comenzile în baza locului unde se produc, după selectarea acestuia din combo-box;

#### Câmpuri specifice

**Data sugerată**: cum am precizat în documentul *Parametrii generali de planificare*, activând parametrul [Verifică document în întârziere cu ATP](/docs/planning/ms-master-scheduling/general-schedule), planificatorul va verifica dacă chiar și unul dintre ordinele care sunt planificate și generate este întârziat față de data prevăzută și va șterge toate ordinele create, apoi le va genera de la data MS care este inserată întotdeauna în parametrii (care se activează setând opțiunea *Verifică document în întârziere cu ATP*) și va propune data nouă pentru comenzi în câmpul *Data sugerată* din tabelul rezultatelor.

### Procedură planificare F.C.S.    

În tab-ul **Comenzi** puteți selecta comenzile neplanificate pe care doriți să le considerați. 
Cu butonul **Planificare F.C.S.**, procedura va efectua o primă planificare la capacitate infinită asupra comenzilor neplanificate recent selectate, utilizând parametrii prezenți în tab **Parametrii generali** și apoi va efectua o planificare la capacitate finită asupra tuturor documentelor indicate în **Parametrii planificare la capacitate finită**.

Ca în cazul planificării generale, ordinele planificate vor putea fi vizualizate în form [Caută ordine planificate](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

Pentru a vizualiza toate planificările efectuate și erorile / avertizările corespunzătoare create pentru fiecare comandă, este suficient să accesați tab-ul **Istoric**.    

## Parametrii planificare generală

Toți parametrii referitori la faza de planificare generală pot fi consultați în documentul [Planificare generală](/docs/planning/ms-master-scheduling/general-schedule).        

## Parametrii planificare la capacitate finită   

:::note Notă
Este important să se seteze în acest tab parametrii de respectat pentru a efectua planificarea la capacitate finită.
::: 

**Planificare mai devreme sau mai târziu**: aceste opțiuni sunt dezactivate. Este activă întotdeauna doar opțiunea *Mai devreme*, deoarece planificarea la capacitate finită încearcă să satureze cât mai repede centrele de lucru;        

**De la data**: permite definirea datei de la care să înceapă planificarea la capacitate finită; este propusă ca *Data curentă* dar poate fi majorată cu un număr de zile egal cu valoarea care poate fi introdusă din *Parametrii MPS* în câmpul *Zile următoarea planificare*.

**Operație pe ordine planificate Recalculare timp**: este întotdeaună activă și permite recalcularea timpului în ordinele planificate;    

**Recalculare ordine de producție**: permite selectarea ordinelor de producție, *Lansate* și/sau *Executive*, care trebuie luate în considerare de planificarea F.C.S.;    

**Recalculare faze**: permite selectarea fazelor de producție, *Neîncepute* și/sau *Deja începute*, care trebuie luate în considerare de planificarea F.C.S.;    

**Modalitate pentru recalculare faze deja începute**: permite alegerea modului în care procedura de planificare F.C.S. trebuie să recalculeze partea rămasă de executat a fazelor deja începute. Permite alegerea priorității între timpului lucrat, marcând *Timp deja lucrat* și apoi *Cantitate deja produsă* sau se va da prioritate cantității produse cu opțiunea *Cantitate deja produsă* și apoi *Timp deja lucrat*;     

**Blochează ordinele obligatorii**: permite selectarea tipurilor de ordine între *Planificate*, *Lansate* și *Executive*, care, în cazul în care au opțiunea *Obligatoriu * activată, nu vor fi modificate de procedura de planificare F.C.S.;  

**Începe lucrările pe baza disponibilității materialelor**: dacă este activ, planificarea F.C.S. va verifica și disponibilitatea materialelor până la data indicată în câmpul **Verifică disponibilitate până la**, iar după acea dată planificarea va continua fără a lua în considerare disponibilitatea materialelor. Activând opțiunea **Verifică disponibilitate doar pentru Materialele critice**, procedura va verifica disponibilitatea doar pentru materialele care în lista de componente au opțiunea *Critic* activă;   

**Consideră disponibilitatea Materialelor**: va permite selectarea modului în care se consideră disponibilitatea materialelor între *General* (indiferent de comanda de producție care le implică) și *Pe comandă producție*. Momentan este prevăzută doar regula *General*.

În partea de jos a form-ului este posibil să se indice cu ce criterii planificarea la capacitate finită trebuie să opereze.

:::note Notă
În funcție de opțiunile activate anterior, planificarea F.C.S. va programa diversele documente în următoarea ordine: Faze deja începute, Faze încă neîncepute, Ordine de producție în stare executivă și apoi lansate, și în final Ordine planificate. 
::: 

Din tabelul **Opţiuni prioritate planificare**, se pot muta elementele cu drag & drop în tabelul **Prioritate planificare** pentru a le modifica prioritatea. În cazul în care sunt selectate elementele *Clienți critici* sau *C.d.L critici*, se va activa și tabelul **Detaliu prioritate planificare**, unde se vor putea insera clienții sau centrele de lucru, putând modifica și în acest caz prioritatea.   

#### Buton specific

> **Restaurare prioritate**: permite restabilirea priorităților implicite în tabelul *Prioritate planificare*.    

## Monitor

În acest tab, prin activarea sau dezactivarea opțiunilor prezente, utilizatorul are posibilitatea de a alege vizualizarea rezultatelor planificării în tab-ul **Istoric**.

Se poate decide dacă:
- să fie vizualizeze **Calendarele** considerate (*Calendar fabrică* și calendarul *Capacități productive*);  
- să fie semnalat dacă în planificare au fost **Articole fără** *Parametri MRP*, fără *Lista componente*, fără *Ciclul de lucru*, fără *Furnizor preferențial* (în cazul ordinelor de achiziție), fără *Terț preferențial* (pentru ordinele în sistem lohn) și fără indicarea stocului minim pentru toate acele articole care sunt gestionate pe stoc.  Pentru fiecare **Comandă de producție** se poate alege să se vizualizeze în istoric, *Numărul de rânduri planificate* și detaliul acestor rânduri, comenzile întârziate și comenzile expirate.

În ceea ce privesc **Ordinele planificate**, se poate alege să se vizualizeze în istoric, *Numărul de ordine generate* și *Detaliul* acestora, ordinele *Întârziate* și *Expirate*, *Alternative materiale*.  De asemenea, utilizatorul poate fi avizat în cazul în care există **Ordine planificate fără** *Materiale*, fără *Faze de procesare*, fără *Furnizor* (pentru achiziție) și fără *Terț* (pentru sistem lohn).

**Legendă**: opțiunile active permit primirea avertizărilor și detaliilor referitoare la elementele selectate.

## Istoric

Afișează toate informațiile rezumative referitoare la planificarea comenzii.

**Progr. planificare**: vizualizează un simplu progresiv al operațiunii de planificare lansate de utilizator;

**Operator**: vizualizează utilizatorul care a lansat planificarea;

**Nr. erori**: vizualizează numărul erorilor înregistrate în timpul procedurii de planificare;

**Data început**: vizualizează data și ora de început a procesului de planificare;

**Data sfârșit**: vizualizează data și ora de sfârșit a procesului de planificare;

**Date planificate care provin din**: vizualizează originea precisă a datelor planificate;

**Previzional**: vizualizează dacă datele provin din *Previziuni de vânzare* sau din *Plan principal de producție*;

**Perioadă**: vizualizează tipul de previziune, săptămânal sau lunar;

**Zi**: vizualizează ziua săptămânii în care va fi *Data sfârșit comandă de producție* planificată direct din *Definiția MP*.

Toate celelalte coloane ale tabelului vizualizează setările utilizate în tab-ul **Parametri** al planificării relative la rândul selectat.

**Rezultat planificare**

În baza rândului selectat în tabel, în această secțiune vor apărea eventuale erori și/sau avertizări cu detaliile solicitate de utilizator în tab-ul **Monitor**.

Pentru detalii despre funcționarea comună a form-urilor, consultați documentul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).