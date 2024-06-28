---
title: Nouă comandă multiprodus
sidebar_position: 4
---

Fereastra permite inserarea unei noi comenzi multiprodus și se află în [Planificare>Comenzi>Nouă comandă multiprodus].

Aplicația cere inserarea tipului comenzii de producție chiar dacă propune tipul implicit. Apoi, utilizatorul trebuie să insereze, cu ajutorul helpului sau manual, clasa și codul articolului care va fi produs, varianta articolului, să insereze cantitatea de produs și data sfârșit prevăzută a comenzii; apoi este completată automat prima linie a gridului Nouă Comandă Multiprodus cu descrierea articolului, tipul de aprovizionare a liniei comenzii (care se preia din tipul de aprovizionare a articolului și poate fi de producție, achiziție sau sistem lohn), starea comenzii, etc.

Descriem în continuare alte câmpuri prezente în fereastră:

**An/Număr**: sunt inserate implicit numărul și anul comenzii care se creează, în relație cu tipul numerotării asociat tipului comenzii inserat în câmpul relativ. Aceste date poti fi modificate manual de utilizator;

**Stare**: este afișată, dar se poate modifica, starea comenzii de producție. Starea poate fi:

**Neexaminată**: este starea cu care este creată/inserată comanda;

**Planificată**: comanda trece în această stare după ce a suportat procesul de planificare generală;

**Lansată**: comanda trece în această stare după ce, cel puțin unul din ordinele planificate de producție sau de achiziție generat de cel puțin una din liniile comenzii în timpul planificării generale, a fost lansat;

**În execuție**: comanda trece în această stare după ce, cel puțin unul din ordinele de producție generat de cel puțin una din liniile comenzii a fost lansat sau după ce cel puțin unul din ordinele planificate în sistem lohn generat de cel puțin una din liniile comenzii a fost lansat sau după ce cel puțin una din liniile cererii de achiziții generate de cel puțin una din liniile comenzii a fost transformată în linie de ordin furnizor;;

**Executată**:  comanda trece în această stare după ce toate ordinele de producție generate din toate liniile comenzii pentru articolele sale au trecut în starea 'Executată';

**Arhivată**: comanda poate fi pusă în această stare manual, pentru a nu mai fi afișată când sunt căutate comenzile executate.

**Obligatorie (flag)**: indică dacă această comandă este de importanță fundamentală sau nu;

**Prioritate**: se poate specifica prioritatea comenzii;

**Aprovizionare**: afișează tipul comenzii de producție care se creează sau care a fost creată (producție, achiziție, sistem lohn). În general este identică cu tipul de aprovizionare al primului articol înserat în comanda de producție. Este o informație nesemnificativă în cazul comenzii multiprodus;

**Data prevăzută pentru început/sfârșit lucrare**: reprezintă datele prevăzute pentru începutul/sfârșitul comenzii de producție, considerând ca dată început data cea mai veche dintre cele prezente în toate liniile comenzii și ca dată sfârșit cea mai îndepărtată dată dintre cele prezente în toate liniile comenzii;

**Data efectivă pentru început/sfârșit lucrare**: reprezintă datele efective pentru începutul/sfârșitul, și anumedata primei semnalări de producție a primului ordin de producție semnalat generat de una din liniile comenzii și data ultimei semnalări de producție care a provocat închiderea definitivă a ultimului ordin de producție semnalat generat de una din liniile comenzii. Data efectivă este prezentă doarîn cazul în care comanda se află în statusul 'Executată';

**Comanda**: acest câmp poate fi utilizat pentru a asocia manual comanda de producție la un antet sau la o linie a unei comenzi de vânzare existente;

**Client**: cu dubluc clic pe primul câmp se poate deschide 'Help conturi' din care se poate selecta clientul dorit. În cazul în care comanda de producție a fost generată prin gruparea mai multor linii de ordin client pentru același client, atunci, în acest câmp, apare clientul din ordinul client în care există liniile ordinului; în caz contrar, câmpul rămâne gol, dar utilizatorul îl poate completa manual;

**Note**: se poate insera manual o notă relativp la comanda de producție;

**Locație prod.**: se inserează locația productivă care trebuie să fie considerată pentru planificarea articolelor prezente în comanda de producție;

Descriem în continuare câmpurile prezente în grid:

**Tip a**provizionare**:**afișează tipul liniei comenzii de producție care se creează sau care a fost creată (producție, achiziție, sistem lohn). În general este identic cu tipul de aprovizionare al articolului care face obiectul comenzii de producție;

**Stare**: este afișată, dar se poate modifica, starea liniei comenzii de producție. Starea poate fi:

**Neexaminată**: este starea cu care este creată/inserată comanda;

**Planificată**: comanda trece în această stare după ce a suportat procesul de planificare generală;

**Lansată**: comanda trece în această stare după ce, cel puțin unul din ordinele planificate de producție sau de achiziție, de aceasta generat, în timpul planificării generale, a fost lansat;

**În execuție**: comanda trece în această stare după ce, cel puțin unul din ordinele de producție de aceasta generat a fost lansat sau după ce cel puțin unul din ordinele planificate în sistem lohn de aceasta generat, a fost lansat sau după ce cel puțin una dintre liniile cererii de achiziție de aceasta generată a fost transformată în linie de ordin furnizor;

**Executată**:  comanda trece în această stare după ce ordinul de producție generat pentru articolul comenzii a trecut în starea 'Executat';

**Arhivată**: comanda poate fi pusă în această stare manual, pentru a nu mai fi afișată când sunt căutate comenzile executate;

**Anulată**: comanda poate fi pusă în această stare manual, pentru a nu fi eliminată complet, și indica faptul că această comandă, care inițial a fost prevăzută, nu a intrat în producție.

**Progr**.: este un câmp editabil; este propus un progresiv pentru linia comenzii de producție multiprodus;

**Ciclu**: se poate insera numărul ciclului de lucru care trebuie să fie considerat pentru planificarea articolului prezent în comandă;

**Opțiune**: este afișată opțiunea care trebuie să fie utilizată pentru planificarea articolului prezent în comandă;

**UM utiliz**.: se inserează unitatea de măsură alternativă precodificată care trebuie să fie considerată;

**Cantitate utiliz. **de produs****: se inserează cantitatea de produs în unitatea de măsură alternativă a articolului.  Dacă articolul nu are nici o unitate de măsură alternativă sau dacă se dorește inserarea unității de măsură gestionale, se inserează doar cantitatea de produs, fără a se mai actualiza câmpul 'UM Utiliz'. Aminim faptul că, în cazul inserării manuale a comenzii de producție, utilizatorul trebuie să insereze manual această informație pentru a putea salva comanda;

**UM**: afișează unitatea de măsură gestională a articolului;

****Cantitate **gest. de produs**: se inserează cantitatea de produs în unitatea de măsură gestională. Câmpul 'Cantitate gest. de produs' este actualizat automat când se inserează cantitatea de produs în câmpul anterior;

******Cantitate**** produsă**:  afișează cantitatea deja produsă în unitatea de măsură gestională a articolului;

**Data **prevăzută început**: reprezintă data prevăzută pentru începutul liniei comenzii de producție. Până când comanda de producție rămâne în starea 'Neexaminată', această dată este identică cu data prevăzută pentru sfârșit și cu data mărfii pregătite a liniei ordinului client din care fost generată linia comenzii sau egală cu data început a previziunii de vânzare din care a fost generată linia comenzii. După ce comanda de producție a fost planificată, data prevăzută pentru începerea comenzii coincide cu data prevăzută început a primului ordin planificat, care este generat din planificarea liniei comenzii.

**Data **prevăzută sfârșit****: reprezintă data prevăzută pentru sfârșitul liniei comenzii de producție. Până când comanda de producție rămâne în starea 'Neexaminată', această dată este identică cu data prevăzută pentru început și cu data mărfii pregătite a liniei ordinului client din care fost generată linia comenzii sau egală cu data sfârșit a previziunii de vânzare din care a fost generată linia comenzii. După ce linia comenzii de producție a fost planificată, data prevăzută pentru sfârșitul comenzii coincide cu data prevăzută sfârșit a primului ordin planificat, care este generat din planificarea liniei comenzii. Aminim faptul că, în cazul inserării manuale a comenzii de producție, utilizatorul trebuie să insereze manual această informație pentru a putea salva comanda;

**Dată sugerată**: este data sugerată de sistem în cazul în care utilizatorul a planificat linia comenzii utilizând parametrul 'Controlează documente întârziate cu ATP' și dacă, în parametrii planificării generale, există o 'Dată început MS (Master Scheduling)'. Data sugerată poate deveni data prevăzută pentru sfârșitul comenzii;

**Dată început previziune**: este afișată data început a previziunii de vânzare operative din care a fost generată linia comenzii de producție;

**Dată sfârșit previziune**:  este afișată data sfârșit a previziunii de vânzare operative din care a fost generată linia comenzii de producție;

**Comanda**:  acest câmp poate fi utilizat pentru a asocia manual comanda de producție la un antet sau la o linie a unei comenzi de vânzare existente;

**Client/Descriere client**: cu dubluc clic pe primul câmp se poate deschide 'Help conturi' din care se poate selecta clientul dorit. În cazul în care, comanda de producție a fost generată dintr-o linie a unui ordin client, în acest câmp apare clientul din ordinul client;

****Descriere a**rticol**: este afișată descrierea articolului care face obiectul liniei comenzii de producție.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie în partea aferentă fiecărei ferestre din aria in care se lucreaza. Lista functionalitatiilor contine:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Buton pentru salvarea modificărilor. |
| Inserează comanda multiprodus | Apelează procedura pentru inserarea unei noi comenzii de producție multiprodus. |
| Duplicare comandă | Apelează procedura pentru generarea unei noi comenzi de producție multiprodus, compusă din aceleași articole din care este compusă comanda inițială. Înainte de a deschide o fereastră nouă, aplicația cere salvarea datelor comenzii inițiale. |
| Inserează articol  | Buton pentru inserarea unei noi linii pentru comandă. |
| Șterge articol | Buton pentru ștergerea liniei selectate din gridul cu articole ale comenzii de producție multiprodus. |
| Vizualizează | Apelează fereastra 'Verificare comenzi'. |
| Listează | Apelează fereastra 'Verificare comenzi'. |






