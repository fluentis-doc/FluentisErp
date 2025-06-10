---
title: Calendar
sidebar_position: 4
---

:::important Utilizare
Planificarea expedierilor este esențială pentru optimizarea gestionării logistice în cadrul unei companii. Aceasta permite planificarea, monitorizarea și coordonarea tuturor activităților legate de expedierea mărfurilor, asigurând o distribuție eficientă a resurselor și o optimizare a timpilor.  
Datorită vizualizării unor date (orele, transportatorii, autovehiculele și clienții), planificarea facilitează programarea activităților zilnice, reducând întârzierile și îmbunătățind precizia expedierilor. În plus, integrând funcționalități precum gestionarea perioadelor de inactivitate și actualizarea stării expedierilor, oferă o imagine de ansamblu completă și actualizată a operațiunilor logistice, promovând o capacitate decizională mai bună și o eficiență operațională mai mare.
:::

Calendarul expedierilor se află pe calea: **Logistică > Expedieri > Calendar** și afișează toate expedierile introduse în sistem, grupate în *timeline view* în funcție de șofer/transportator/autovehicul/client/fără grupare.  
La deschiderea sa, intervalul vizualizat va fi data curentă + 7 zile, dacă există expedieri în această perioadă. În caz contrar, va fi arătat primul interval următor în care sunt expedieri.

Pe lângă expedieri, în calendar sunt prezentate și perioadele de inactivitate ale autovehiculelor și transportatorilor.

În coloana din stânga se află datele referitoare la **șofer/transportator/autovehicul/client** în funcție de gruparea aleasă, iar în tabelul calendarului sunt afișate diferitele expedieri.  
Chiar dacă durata expedierii este de doar o oră, aceasta va fi afișată în calendar ca fiind zilnică, pentru a facilita vizualizarea. În cazul în care se dorește o vizualizare mai detaliată, în ribbon bar faceți clic pe **Vizualizare cronologică orară**.  
În acest fel, expedierea va fi afișată cu dimensiunea corespunzătoare duratei sale efective. Această opțiune poate fi utilă în cazul în care se utilizează zoom in/zoom out (ctrl + scroll al mouse-ului) pentru a obține cel mai mare detaliu orar al zilei.  
Pentru a reveni la vizualizarea expedierilor zilnice, faceți clic pe butonul **Vizualizare cronologică zilnică** din ribbon bar.

#### Butoane specifice  
> - **Vizualizează pe transportator**: în coloana din stânga vor fi afișati întâi toți transportatorii și expedierile respective; dacă în rândurile de grupare nu este prezent transportatorul, va fi considerat transportatorul din antetul expedierii.   
- Dacă transportatorul nu este indicat nicăieri, la sfârșitul listei de transportatori afișați, vor fi enumerați șoferii corespunzători; dacă nu sunt prezenți șoferii în rândurile de grupare, va fi considerat șoferul din antetul expedierii.    
- Dacă șoferul nu este indicat nicăieri, la sfârșitul listei de transportatori afișați, vor fi enumerați clienții.  
- **Vizualizează pe șofer**: în coloana din stânga vor fi afișați întâi toți șoferii și expedierile respective; dacă în rândurile de grupare nu este prezent șoferul, va fi considerat șoferul din antetul expedierii.  
- Dacă șoferul nu este indicat nicăieri, la sfârșitul listei de șoferi afișați, vor fi enumerați transportatorii corespunzători; dacă nu sunt prezenți transportatorii în rândurile de grupare, va fi considerat transportatorul din antetul expedierii.  
- Dacă transportatorul nu este indicat nicăieri, la sfârșitul listei de șoferi afișați, vor fi enumerați clienții.  
> - **Vizualizează pe client**: în coloana din stânga vor fi afișați toți clienții; dacă nu sunt prezenți, va exista o opțiune de tip "*altul*" care va grupa toate expedierile fără client asignat.  
> - **Vizualizează pe autovehicul**: în coloana din stânga vor fi afișate toate autovehiculele; dacă în rândurile de grupare nu este prezent autovehiculul, va fi considerat autovehiculul din antetul expedierii.  
- Dacă nu este prezent, va exista o opțiune de tip "*altul*" care va grupa toate expedierile fără autovehicul asignat.  
> - **Fără grupare**: va fi afișat un calendar pentru tipul de expediere.

Cu butonul din dreapta este posibil să se introducă o nouă expediere sau o perioadă de inactivitate pentru șofer sau autovehicul.

Culorile expedierilor reprezintă [Starea expedierii](/docs/configurations/tables/logistics/shipping-states).    
Cu butonul din dreapta pe *expediere*, este posibil avansarea stării.

Culorile atribuite listei de șoferi/autovehicule/transportatori/clienți sunt aleatoare și sunt asignate la deschiderea calendarului, până la următoarea vizualizare.