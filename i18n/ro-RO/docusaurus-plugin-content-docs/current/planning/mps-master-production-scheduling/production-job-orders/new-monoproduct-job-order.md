---
title: Comandă Monoprodus
sidebar_position: 4
---

Form-ul se află pe calea **Planificare > Comenzi de producție** făcând clic în formularul **Comenzi de producție** pe butonul **Inserare comandă**.

## Butoane specifice

> [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): permite deschiderea parametrilor MRP ai articolului;      
> [Listă componente](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite deschiderea listei care compune articolul;  
> [Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route): permite vizualizarea ciclului de lucru și a fazelor de producție corespunzătoare articolului.

## Gestionare comenzi monoprodus

În acest tab se inserează datele principale pe care trebuie să le conțină comanda de producție.

**Tip comandă**: propune tipul pimplicit;    

**Număr**: reprezintă numărul progresiv al comenzii, propus automat;     

**An**: este propus automat cel curent;   

**Client**: reprezintă referințele contului sintetic/analitic și descrierea clientului;    

**Dată**: este propusă automat cea curentă;        

**Obligatoriu**: dacă este activ, această comandă este de importanță fundamentală;    

**Stare comandă**:sistemul propune automat *Neexaminate*, stare pe care comanda o asumă imediat după crearea sa;   

Celelalte stări pe care le poate adopta sunt:

- **Planificată**: comanda trece în această stare după procesul de *Planificare generală*;
- **Lansată**: comanda trece în această stare după ce cel puțin unul dintre ordinele planificate de producție generate de aceasta în timpul *Planificării generale* a fost lansat (nu trebuie să fie lansate alte ordine planificate de tip achiziție sau sistem lohn, altfel comanda trece în stare executivă);
- **Executivă**: comanda trece în această stare după ce cel puțin unul dintre ordinele de producție generate de aceasta a fost lansat și a devenit executiv, sau după ce cel puțin unul dintre ordinele planificate de achiziție sau sistem lohn generate de aceasta a fost lansat;
- **Execiutată**: comanda trece în această stare după ce ordinul de producție generat pentru articolul obiect al comenzii a trecut în stare *Executat*;
- **Arhivată**: comanda poate fi pusă în această stare manual ca să nu mai apară atunci când se efectuează o căutare a comenzilor *Executate*;
- **Anulată**: comanda poate fi pusă în această stare manual, în loc să fie eliminată complet. Indica faptul că, deși inițial a fost prevăzută, comanda nu a fost dusă în producție.

**Descriere**: permite introducerea unei descrieri referitoare la comandă;

**Tip aprovizionare**: în general coincide cu tipul de aprovizionare al articolului introdus în comanda de producție. Tipul de aprovizionare al articolului este indicat în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai acestuia;

**Prioritate aprovizionare**: indică prioritatea aprovizionării;

**Proiecte**: indică proiectul în care este inserată comanda;

**Locație Producție**: indică locația de producție în care va fi produsă comanda. În acest câmp este prezent un control care, în cazul în care comanda provine dintr-un ordin client, verifică dacă gestiunea indicată pe linia ordinului client aparține aceleiași locații de producție indicate în comanda de producție.

**Dată marfă pregătită**: în această coloană este vizualizată data mărfii pregătite care a fost setată pe linia ordinului client pentru care este afișat detaliul;

**Dată sugerată**: este sugerată de sistem în cazul în care utilizatorul a planificat comanda utilizând parametrul *Verifică documente întârziate cu ATP* și a setat, tot în parametrii de *Planificare generală*, o *Dată început MS*. Data sugerată este cea pe care utilizatorul poate decide să o transforme în data prevăzută pentru finalizarea comenzii;

**Dată lucrare prevăzută început/sfârşit**: reprezintă datele de început/sfârşit prevăzute pentru *Comanda de producție*. Până când Comanda de Producție rămâne în stare *Neexaminată*, aceste date sunt identice și egale cu *data mărfii pregătite* din liniei *Ordinului client* din care comanda a fost generată, sau egale cu *data sfârșit* a *Previziunii de vânzare* de care comanda a fost generată. După ce *Comanda de Producție* a fost planificată, data de început prevăzută a comenzii coincide cu data de început prevăzută a primului ordin planificat care este generat de planificarea comenzii. Reamintim că, în cazul inserării manuale a Comenzii de Producție, utilizatorul trebuie să introducă această dată manual, altfel nu va putea salva comanda;

**Dată lucrare efectivă început/sfârşit**: reprezintă datele de început/sfârşit ale lucrării efective, și anume data primei semnalări de producție a unui ordin de producție generat de comandă și data ultimei semnalări de producție care a determinat închiderea definitivă a ordinului de producție al cărui articol este identic cu cel al comenzii de producție. Evident, *data sfârșit efectivă* este prezentă doar în cazul în care comanda se află în starea de *Executată*;

*Campuri obligatorii pentru generarea comenzii de producție*: **Articol** (cu clasa, codul și descrierea sa), **Versiune**, **Cantitatea** comenzii și **Unitatea de măsură** corespunzătoare.  
În final, există o serie de câmpuri care sunt toate preluate din [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului selectat, cum ar fi: **Cicl**, **Lot economic** cu **Multiplii** corespunzători, **Lead time**, **Procent de deșeuri** pe cantitate și **Tip aprovizionare**.
Câmpurile **Început/Sfârșit previziune** indică începutul și sfârșitul perioadei luate în considerare de previziunea de vânzare care a generat acea comandă.

### Referințe ordine clienți

Tab-ul conține un tabel care afișează ordinele clienți asociate comenzii de producție de referință atunci când comanda a fost generată din una sau mai multe linii ordine clienți.
**Tip/An/Număr**: afișează *Tipul/Anul/Numărul* ordinului client în care se află linia pentru care este afișat detaliul;
**N./Cantitate/Unitatea de măsură**: afișează cantitatea liniei ordinului client pentru care este afișat detaliul;
**Dată marfă pregătită**: afișează data mărfii pregătite care a fost setată în linia ordinului client pentru care este afișat detaliul;
**Cont**: în această coloană sunt vizualizate contul sintetic și analitic al clientului căruia îi este destinat ordinul client în care se află linia pentru care este afișat detaliul.

### Date suplimentare

Acest tab este constituit dintr-un tabel în care vor fi raportate toate datele suplimentare asociate articolului prezent în comanda de producție.

## Estimare cost

Toate informațiile referitoare la **Estimare cost** pot fi consultate la pagina [Estimare cost](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Acest tab, care însoțește tab-ul *Gestionare comenzi monoprodus*, conține întregul set de [Extra data
](/docs/configurations/utility/extra-data/extradata/search-extradata) asociate comenzii de producție.

Pentru detalii despre funcționarea comună a form-urilor, faceți referire la paginile [Funcționalitate, butoane și câmpuri comune](/docs/guide/common).