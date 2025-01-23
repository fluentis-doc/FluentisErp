---
title: Simulare Gantt
sidebar_position: 2
---

Form-ul permite crearea și modificarea unei simulări Gantt.

## Antet

Permite introducerea datelor de antet ale simulării Gantt.

### Campuri specifice

> **Nume simulare**: indică numele asociat simulării Gantt (implicit este propus numele utilizatorului, data și ora creării);     
> **Tip** și **Descriere**: indică codul și descrierea [Tip simulare Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type) (se văd doar cele care nu sunt de tip Snapshot);        
> **Blochează documente**: indică faptul că toate documentele incluse în crearea simulării Gantt sunt blocate. Deci nu pot fi modificate până când simularea nu este validată;  
> **Număr**: indică numărul simulării Gantt și depinde de numerotarea asociată la [Tip simulare Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type);         
> **Simulare validă**: indică faptul că simularea a fost confirmată și, prin urmare, modificările efectuate în Gantt au fost raportate în documentele legate;      
> **Dată inserare**: indică data inserării simulării Gantt;     
> **Utilizator**: indică utilizatorul simulării Gantt.     

## Filtru

Permite căutarea documentelor care vor fi utilizate pentru crearea **Gantt**.     
Form-ul este compus dintr-o zonă în care sunt inserate filtrele pentru căutarea diverselor documente, iar în partea inferioară o listă care vizualizează toate documentele corespunzătoare filtrelor inserate și alta cu documentele care vor fi inserate în **Gantt**.       
   
Documentele executate sunt considerate doar dacă este activată opțiunea **Consideră documente executate **.      

Tabelele inferioare prezintă documentele cu o structură arbore, permițând utilizatorului să selecteze doar ceea ce îl interesează. Ulterior, cu ajutorul butonului **Transferă selectate** sau *Drag & Drop* utilizatorul le poate adăuga la lista celor care vor fi considerate pentru crearea **Gantt**.       

#### Butoane specifice

> **Căută**: permite căutarea documentelor pe baza filtrelor inserate;          
> **Creează**: permite crearea **Gantt-ului** pe baza documentelor inserate în tabelul din dreapta;     
> **Selectează**: permite selectarea documentului selectat;        
> **Selectează toate**: permite selectarea tuturor documentelor prezente în tabel;       
> **Deselectează toate**: permite eliminarea selecției pentru toate documentele prezente în tabel;    
> **Extinde comenzi**: permite extinderea arborelui comenzii selectate până la detaliul fazei;      
> **Comprimă comenzi**: permite închiderea arborelui comenzii selectate;     
> **Transferă selectate**: permite transferul documentelor selectate din tabelul de căutare în cel de creare a **Gantt-ului**;      
> **Salvează**: permite salvarea modificărilor efectuate.

## Gantt

În acest tab este vizualizat Gantt-ul în baza criteriilor de căutare stabilite în tab-ul anterior. Tab-ul este compus din 2 secțiuni, la rândul lor împărțite în 2 panouri fiecare.

- **Secțiunea superioară**: în secțiunea superioară utilizatorul poate vizualiza în partea stângă lista documentelor care au fost selectate în tab-ul anterior, unul sub altul într-o structură de arbore, cu o indentare bazată pe legăturile pe care documentele le prezintă reciproc.      
În cazul în care comanda de producție prezintă mai mult de un articol, sub comanda de producție este prezentat codul articolului (Articolul cu clasă, cod și descrierea sa).         
În fiecare din aceste rânduri este vizibilă data de început a documentului și data de sfârșit.      
Dacă rândul este evidențiat în roșu înseamnă că a fost executat sau că acel rând nu mai există.        
Fiecărui rând îi corespunde o bară orizontală plasată în partea grafică a secțiunii superioare, care reprezintă  documentele detaliate în zona din stânga a acestei secțiuni.       
Bare orizontale acoperă un arc temporal care poate fi extins sau redus, folosind butoanele **Zoom Out** și **Zoom In**, intrând în detaliu fiecărei zile și vizualizând astfel utilizările la nivel de oră/minut. În plus, cu  dublu click pe bara orizontală care reprezintă un document deschide automat documentul însuși, întotdeauna în funcție de drepturile deținute de utilizator.     
Barele orizontale pot fi mutate pe grafic cu drag and drop; operațiunea permite mutarea datelor documentelor într-un mod absolut dinamic.   
Utilizatorul poate apoi alege, ieșind din tab, să confirme modificarea efectuată sau nu, cu butonul **Aplică**.

:::note Notă
Puteți să anticipați și să amânați doar documentele planificate sau fazele care nu au început încă, restul este blocat.
:::

- **Secțiunea inferioară**: în secțiunea inferioară este prezentat, împărțit în 2 panouri, o histogramă relativă la disponibilitatea și angajamentul resurselor productive.     
În panoul din stânga sunt vizualizate numele *Centrelor de Lucru* utilizate în lucrările dorite în grafic, în timp ce în panoul din dreapta, asociat panoului din stânga al secțiunii superioare, sunt câteva bare verticale care pentru fiecare zi lucrătoare prezintă cantitatea de muncă pe care fiecare *Centru de Lucru* trebuie să o desfășoare în funcție de timpii prevăzuți ai fazelor ordinelor de producție prezente în acele zile.      
De remarcat că histogramă evidențiază totalul ocupării centrelor de lucru individuale, nelimitându-se doar la a reprezenta grafic doar ocuparea derivată din ordinul de producție vizualizat în **Gantt**.     
De fapt, utilizatorul are posibilitatea, cu un dublu click pe bara histogramă a oricărui centru de lucru, să extindă o fereastră în care este prezentată lista ordinelor de producție prezente în **Gantt**, și lista ordinelor de producție care nu sunt prezente în simularea care se execută grafic, cu posibilitatea, chiar și din această fereastră, de a deschide direct documentele pentru care este furnizat un detaliu limitat. Fereastra care este deschisă cu dublu click pe histogramă se numește **Vizualizează faze de lucru**.         
Cu form-ul **Vizualizează faze de lucru** se pot selecta fazele dorite iar cu butoanele **Schimbă centru de lucru** și **Schimbă date**, utilizatorul poate schimba centrul de lucru al fazei și muta cu 'x' timp (zile/ore/minute) sau la o anumită dată fiecare fază.

#### Butoane specifice

- > **Salvează**: permite salvarea modificărilor efectuate;       
- > **Salvează snapshot**: permite salvarea modificărilor efectuate creând un snapshot (un fiu) pornind de la simularea principală;      
- > **Rollback simulare**: permite revenirea simulării la starea originală anulând toate modificările;         
- > **Alege starea avansării**: permite alegerea modului în care trebuie să fie vizualizată starea de avansare a documentelor individuale în **Gantt**.Acestea pot fi: *pe baza timpului trecut*, *pe baza timpului trecut și a cantității*, *pe baza cantității produse* sau niciuna;      
- > **Aplică**: permite să facă modificările aplicate în simularea **Gantt** executive (butonul se activează după salvare);      
- > **Extinde arbore**: permite extinderea arborelui simulării până la detaliul fazei;      
- > **Comprimă arbore**: permite închiderea arborelui simulării;     
- > **Zoom in**: permite creșterea zoom-ului în grafic;     
- > **Zoom fereastră**: permite reglarea zoom-ului în grafic în funcție de fereastra temporală care este considerată;     
- > **Zoom out**: permite diminuarea zoom-ului în grafic;      
- > **Zoom săptămână**: permite reglarea zoom-ului în grafic la o săptămână;      
- > **Zoom 2 săptămâni**: permite reglarea zoom-ului în grafic la două săptămâni;    
- > **Zoom lună**: permite reglarea zoom-ului în grafic la o lună;    
- > **Zoom dată**: permite reglarea zoom-ului în grafic pentru un anumit interval de date indicat de utilizator;            
- > **Mapare cod**: permite vizualizarea stilurilor în prezent utilizate în **Gantt**, care pot fi modificate prin butoanele *Modifică stilul Gantt* și *Modifică stilul histogramă*;          
- > **Modifică stilul Gantt**: permite accesul la setările stilului Gantt actual;     
- > **Modifică stilul histogramei**: permite accesul la setările stilului histogramă actual;          
- > **Actualizează stilul**: permite actualizarea modificărilor făcute stilurilor.      

## Log simulare

În acest tab sunt vizualizate log-urile simulărilor salvate anterior, cu posibilitatea de a verifica, pentru fiecare document care a suferit modificări temporale, vechea dată de început, vechea dată de sfârșit, noua dată de început și noua dată de sfârșit.

