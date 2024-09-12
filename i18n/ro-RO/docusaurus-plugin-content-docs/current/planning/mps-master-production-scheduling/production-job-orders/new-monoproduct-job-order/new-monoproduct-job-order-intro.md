---
title: Nouă comandă monoprodus
sidebar_position: 1
---

Fereastra permite inserarea unei noi comenzi monoprodus și se află în [Planificare>Comenzi>Nouă comandă monoprodus].

Aplicația cere inserarea tipului comenzii de producție chiar dacă propune tipul implicit. Apoi, utilizatorul trebuie să insereze, cu ajutorul helpului sau manual, clasa și codul articolului care va fi produs, varianta articolului și restul de date disponibile care se referă la articol. Pentru a salva comanda trebuie să fie inserată data prevăzută pentru sfârșit și cantitatea de produs.

Descriem în continuare alte câmpuri prezente în fereastră:

**An/Număr**: sunt inserate implicit numărul și anul comenzii care se creează, în relație cu tipul comenzii inserate în câmpul relativ. Aceste date pot fi modificate;

**Stare**: este afișată, dar se poate modifica, starea comenzii de producție. Starea poate fi:

**Neexaminată**: este starea cu care este creată/inserată comanda;

**Planificată**: comanda trece în această stare după ce a suportat procesul de planificare generală;

**Lansată**: comanda trece în această stare după ce, cel puțin unul din ordinele planificate de producție sau de achiziție, de aceasta generat în timpul planificării generale, a fost lansat;

**În execuție**: comanda trece în această stare după ce, cel puțin unul din ordinele de producție de aceasta generat a fost lansat sau după ce cel puțin unul din ordinele planificate în sistem lohn de aceasta generat, a fost lansat sau după ce cel puțin una dintre liniile cererii de achiziție de aceasta generată a fost transformată în linie de ordin furnizor;

**Executată**:  comanda trece în această stare după ce ordinul de producție generat pentru articolul comenzii a trecut în starea 'Executat';

**Arhivată**: comanda poate fi pusă în această stare manual, pentru a nu mai fi afișată când sunt căutate comenzile executate;

**Anulată**: comanda poate fi pusă în această stare manual, pentru a nu fi eliminată complet, și indica faptul că această comandă, care inițial a fost prevăzută, nu a intrat în producție.

**Proveniența**: indică faptul că această comandă a fost inserată manual (va fi afișată informația 'Manual'), dacă a fost generată dintr-o linie a unui ordin client (va fi afișată informația 'Ordin client') sau dacă această comandă a fost generată din previziuni de vânzare sau dintr-un plan principal de producție (va fi afișată informația 'Previziune');

**Obligatorie (flag)**: indică dacă această comandă este de importanță fundamentală sau nu;

**Prioritate**: se poate specifica prioritatea comenzii;

**Aprovizionare**: afișează tipul comenzii de producție care se creează sau care a fost creată (producție, achiziție, sistem lohn). În general este identică cu tipul de aprovizionare al articolului care face obiectul comenzii de producție;

**Data inserării/Ultima modificare**: sunt două date care nu pot fi modificate;

**Data prevăzută pentru început/sfârșit lucrare**: reprezintă datele prevăzute pentru începutul/sfârșitul comenzii de producție. Până când comanda de producție rămâne în starea 'Neexaminată', aceste date sunt identice și egale cu data mărfii pregătite din linia ordinului client din care a fost generată comanda sau sunt egale cu data sfârșit a previziunii de vânzare din care a fost generată comanda. După ce comanda de producție a fost planificată, data prevăzută pentru începerea comenzii coincide cu data prevăzută început a primului ordin planificat, care este generat din planificarea comenzii. Aminim faptul că, în cazul inserării manuale a comenzii de producție, utilizatorul trebuie să insereze manual această informație pentru a putea salva comanda;

**Dată sugerată**: este data sugerată de sistem în cazul în care utilizatorul a planificat comanda utilizând parametrul 'Controlează documente întârziate cu ATP' și dacă, în parametri planificării general, există o 'Dată început MS (Master Scheduling)'. Data sugerată poate deveni data prevăzută pentru sfârșitul comenzii;

**Data efectivă pentru început/sfârșit lucrare**: reprezintă datele efective pentru începutul/sfârșitul, și anumedata primei semnalări de producție a unui ordin de producție generat din comandă și data ultimei semnalări de producție care a cauzat închiderea definitivă a ordinului de producție care are articolul identic cu cel al comenzii de producție. Data efectivă este prezentă doarîn cazul în care comanda se află în statusul 'Executată';

**Data prevăzută pentru început/sfârșit**: reprezintă datele previziunii de vânzare operative din care a fost generată comanda de producție;

**Comanda**: acest câmp poate fi utilizat pentru a asocia manual comanda de producție la un antet sau la o linie a unei comenzi de vânzare existente;

**Client**: cu dubluc clic pe primul câmp se poate deschide 'Help conturi' din care se poate selecta clientul dorit. În cazul în care, comanda de producție a fost generată dintr-o linie a unui ordin client, în acest câmp apare clientul din ordinul client;

**Note**: se poate insera manual o notă relativp la comanda de producție;

**Locație prod.**: se inserează locația productivă care trebuie să fie considerată pentru planificarea articolului prezent în comanda de producție;

**Ciclu**: se poate insera numărul ciclului de lucru care trebuie să fie considerat pentru planificarea articolului prezent în comandă;

**Opțiune**: este afișată opțiunea care trebuie să fie utilizată pentru planificarea articolului prezent în comandă;

**Cantitate utiliz. **de produs**/UMU**: se inserează cantitatea de produs în unitatea de măsură alternativă a articolului, iar în câmpul 'UMU' se inserează unitatea de măsură alternativă precodificată a articolului. Dacă articolul nu are nici o unitate de măsură alternativă sau dacă se dorește inserarea unității de măsură gestionale, se inserează doar cantitatea de produs, fără a se mai actualiza câmpul 'UMU'. Aminim faptul că, în cazul inserării manuale a comenzii de producție, utilizatorul trebuie să insereze manual această informație pentru a putea salva comanda;

****Cantitate **gest. de produs/UMG**: se inserează cantitatea de produs în unitatea de măsură gestională, iar în câmpul 'UMG' se afișează unitatea de măsură gestională a articolului. Câmpul 'Cantitate gest. de produs' este actualizat automat când se inserează cantitatea de produs în câmpul anterior;

****Cantitate **deja produsă/UMG**: se afișează cantitatea deja produsă în unitatea de măsură gestională (UMG) a articolului.






