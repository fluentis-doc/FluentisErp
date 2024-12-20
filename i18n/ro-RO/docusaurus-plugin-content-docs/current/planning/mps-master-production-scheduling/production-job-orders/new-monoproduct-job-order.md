---
title: Comandă monoprodus
sidebar_position: 4
---

Form-ul se află pe calea **Planificare > - Comenzi de producție**.

#### Butoane specifice

> - [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): permite deschiderea form-ului *parametrii MRP* ai articolului;      
> - [Lista de componente](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite deschiderea form-ului *lista de componente* a articolului;  
> - [Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route): permite vizualizarea ciclului de lucru și a fazelor de producție corespunzătoare articolului.

## Gestionare comenzi monoprodus

În acest tab se inserează datele principale pe care trebuie să le conțină comanda de producție.

**Tip comandă**: este propus tipul prestabilit ca tip implicit;    

**Număr**: indică numărul progresiv al comenzii, care este propus automat;     

**An**: este propus automat anul curent;   

**Client**: indică referințele contului sintetic/analitic și descrierea clientului;    

**Data**: este propusă automat data curentă;        

**Obligatoriu**: dacă este activ, această comandă are o importanță fundamentală;    

**Stare comandă**: sistemul propune automat ca *Neexaminată*, starea pe care comanda o asumă imediat ce este creată;   

Celelalte stări pe care le poate asuma sunt:

> - **Planificată**: comanda trece în această stare după ce a fost supusă procedurii de *Planificare generală*;  
> - **Lansată**: comanda trece în această stare după ce cel puțin unul dintre ordinele planificate de producție generate de aceasta în timpul *Planificării generale* a fost lansat (nu trebuie să fi fost lansate alte ordine planificate de tip achiziție sau sistem lohn, altfel comanda trece în stare executivă);      
> - **Executivă**: comanda trece în această stare după ce cel puțin unul dintre ordinele de producție generate de aceasta a fost lansat și a devenit executiv, sau după ce cel puțin unul dintre ordinele planificate de achiziție sau sistem lohn generate de aceasta a fost lansat;   
> - **Executată**: comanda trece în această stare după ce ordinul de producție generat pentru articolul obiect al comenzii a trecut în stare *Executată*;   
> - **Arhivată**: comanda poate fi pusă în această stare manual pentru a nu fi afișată atunci când sunt căutate comenzile *Executate*;  
> - **Anulată**: comanda poate fi pusă în această stare manual, în loc să fie ștearsă complet, pentru a indica faptul că această comanda, care inițial fusese prevăzută, nu a intrat în producție.

**Descriere**: permite introducerea unei descrieri referitoare la comandă;        

**Tip aprovizionare**: de obicei coincide cu tipul de aprovizionare al articolului inserat în comanda de producție. Tipul de aprovizionare al articolului este indicat în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai acestuia;     

**Prioritate aprovizionare**: indică prioritatea aprovizionării;           
       
**Proiecte**: indică proiectul în care este inclusă comanda;       

**Locație producție**: indică locația de producție a comenzii. În acest câmp există un control care, în cazul în care comanda provine dintr-un ordin client, verifică dacă depozitul indicat pe linia ordinului client aparține aceleași locații de producție indicate în comanda de producție.  

**Dată mărfă pregătită**: în această coloană este vizualizată data mărfii pregătite care a fost setată în linia ordinului client;      

**Dată sugerată**: reprezintă data propusă de sistem atunci când utilizatorul a programat comanda utilizând parametrul *Verifică documentele întârziate cu ATP* și a configurat în *Planificare generală* o *Dată început MS* (Master Scheduling). Această dată propusă reprezintă opțiunea pe care utilizatorul o poate confirma ca dată estimată pentru finalizarea comenzii.

**Dată lucrare prevăzută Început/Sfârșit**: reprezintă datele început/sfârșit prevăzute ale *Comenzii de producție*. Până când *Comanda de producție* rămâne în stare *Neexaminată*, aceste date sunt identice și egale cu *Data marfă pregătită* a liniei Ordinului Client din care a fost generată comanda, sau egale cu data de finalizare a Previziunii de Vânzare din care a fost generată comanda. După ce Comanda de Producție a fost programată, data de început prevăzută a comenzii coincide cu data de început prevăzută a primului ordin planificat care este generat de planificarea comenzii. În final, reamintim că în cazul introducerii manuale a Comenzii de Producție, utilizatorul este obligat să introducă această dată manual pentru a salva comanda;

**Data lucrării efective Început/Sfârșit**: reprezintă datele început/sfârșit ale lucrării efective, adică data primei semnalări de producție a unui ordin de producție generat de comandă și data ultimei semnalări de producție care a determinat închiderea definitivă a ordinului de producție al cărui articol este același cu Comanda de Producție. Evident, data efectivă de finalizare este prezentă doar în cazul în care comanda se află în starea de *Executată*;

### Campuri obligatorii pentru generarea comenzii de producție

Campuri obligatorii pentru generarea comenzii de producție*: **Articol** (cu clasa, codul și descrierea corespunzătoare), **Versiune**, **Cantitate** a comenzii și **Unitatea de măsură** corespunzătoare.  

În final, există o serie de câmpuri care sunt toate preluate din [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului selectat, cum ar fi: **Ciclul**, **Lotul economic** cu **Multiplii** corespunzători, **Lead time**, **Percentajul de risipă** asupra cantității și **Tipul aprovizionării**.
Câmpurile **Început / Sfârșit previziune** indică începutul și sfârșitul perioadei luate în considerare a previziunii de vânzare care a generat acea comandă. 

### Referințe ordine clienți

Afișează ordinele clienți asociate comenzii de producție de referință atunci când comanda a fost generată din una sau mai multe linii de ordine clienți.  
**Tip/An/Număr**: se referă la datele ordinului client;  
**N./Cantitate/Unitate de măsură**: se referă la datele ordinului client;  
**Dată mărfă pregătită**: în această coloană este vizualizată data mărfii pregătite care a fost setată în linia ordinului client; 
**Cont**: reprezintă contul sintetic/analitic ale clientului ordinului.

## Estimare cost

Toate informațiile referitoare la **Estimare cost** pot fi consultate în pagina [Estimare cost](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Acest tab conține întregul set de [date suplimentare](/docs/configurations/utility/extra-data/extradata/search-extradata) asociate comenzii de producție.

Pentru detalii despre funcționarea comună a form-urilor, vă rugăm să consultați linkul [Funcționalitate, butoane și câmpuri comune](/docs/guide/common).