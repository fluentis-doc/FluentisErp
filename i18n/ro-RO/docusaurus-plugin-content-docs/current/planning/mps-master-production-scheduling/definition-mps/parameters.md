---
title: Parametri
sidebar_position: 2
---

Cu ajutorul acestei ferestre se pot seta toți parametrii care se referă la crearea comenzilor de producție și la modul în care trebuie să fie gestionate fazele succesive. Câteva setări, prezente în acest tab, sunt preluate din fereastra parametrii MPS, prezent în [Home>Parametri>Producție].

În secțiunea **Metodă generare comandă **trebuie să fie inserat tipul comenzii (Monoprodus/Multiprodus) care trebuie să fie propus în tab Parametri din Definire MPS. În momentul generării comenzii din Definire MPS se poate oricum modifica această setare, precum și 'Gruparea produselor pe', prin intermediul căreia se poate indica cum trebuie să fie eventual grupate articolele în aceeași comandă monoprodus sau multiprodus.

Dacă tipul comenzii este monoprodus, unica grupare admisă este cea pe articol: acest tip de gestionare permite utilizatorului să genereze automat din sistem o serie de comenzi monoprodus, selectând o listă de linii de ordine clienți, linii care provin din previziuni de vânzare sau din planul principal de producție sau provenite din substoc, făcând astfel încât, fiecare comandă care se va genera să prezinte suma cantităților cerute pentru același articol. Data de sfârșit a unei comenzi grupate este întodeauna egală cu cea a necesarului cel mai apropiat datei în care se efectuează elaborarea.

Dacă tipul comenzii este multiprodus, grupările pot fi efectuate pe client, comandă de vânzare, client/comandă, și permit utilizatorului să insereze în aceeași comandă multiprodus mai multe articole care provin din liniile ordinului client asociat aceluiași client, la aceeași comandă de vânzare sau la aceeași comandă de vânzare a aceluiași client.

Flag-ul '**Actualizare comenzi deja existente**' permite, pornind din tab 'Previzional', lansarea directă a unei planificări generale în comenzile generate automat din acel tab care se află încă în starea Neexaminate sau Planificate.

Imediat dedesupt, utilizatorul poate alege, cu ajutorul flagurilor, cum să fie generată comanda: din ordine clienți sau previziune (previziuni de vânzare, plan principal de producție), sau din substoc; în acest ultim caz se utilizează un algoritm particular care va fi explicat în paragraful dedicat tabului 'Substoc'.

Există apoi posibilitatea de a alege, în cazul activării flag-ului 'Previzional', cu care modalitate temporală trebuie să fie generate comenzile de producție:

**Lunar** ****: în acest caz comanda de producție va fi generată în luna în care cade data sfârșit a previziunii de vânzare sau în luna în care a fost inserată cantitatea în planul principale de producție. Utilizatorul poate insera și ziua lunii în care trebuie să fie inserată data prevăzută sfârșit comandă de către procedura automată de creare a comenzii;

**Săptămânal** **: în acest caz va fi generată o comanda de producție pentru fiecare săptămână a lunii în care cade data sfârșit a previziunii de vânzare sau a lunii în care a fost inserită cantitatea în planul principale de producție. Utilizatorul poate insera și ziua săptămânii în care trebuie să fie inserată data prevăzută sfârșit comandă de către procedura automată de creare a comenzii;

**Reale** **: în acest caz va fi generată o comanda de producție pentru fiecare săptămână a lunii în care cade data sfârșit a previziunii de vânzare sau a lunii în care a fost inserită cantitatea în planul principale de producție, dar considerando exact data sfârșit a fiecărei linii a previziunii de vânzare;

**Săptămânal considerând zilele de producție ale zonei de livrare** **: **în acest caz va fi generată o comanda de producție ținând cont de zilele de producție ale zonei de livrare asociate clientului pentru care a fost creata previziunea de vânzare.

Flag-ul '**Grupează previziuni pe clienți'**: dacă este activ, comenzile de producție vor fi generate grupând liniile previziunii ale acelorași clienți.

Flag-ul '**Generează comenzi în luna/săptămâna precedentă'**: dacă este activ, comanda de producție generată din previziunile de vânzare sau din planul principal de producție este creată în luna precedentă lunii previziunii sau planului principal, sau în săptămâna precedentă celei în care cade data sfârșit a previziunii de vânzare.

În secțiunea** Dacă nu este specificată data de livrare**, care se referă exclusiv la tab-ul Ordine Clienți din Definire MPS, utilizatorul poate decide dacă, în cazul în care lipsește data mărfii pregătite în linia ordinului client care trebuie analizată de procedură, trebuie să fie ignorată linia fără data sau trebuie să fie acceptată o anumită dată prevăzută pentru sfârșit comandă care va fi generată, sau trebuie să fie acceptă o anumită dată prevăzută pentru începutul comenzii care va fi generată.

Flag-ul '**Consideră disponibilitatea articolului': **dacă este activ în toate taburile definirii MPS va fi afișată disponibilitatea articolului la data prevăzută sfârșit comandă de producție care va fi creată. Același lucru se va întâmpla și în tab Rezumat. Disponibilitatea este luată în considerație pe baza flagurilor activate în 'Parametrii MPS' (Sistem lohn, Achiziții, Vânzări, Producție, Gestiune).

Imediat dedesupt, sunt afișate **Gestiunile pentru planificarea comenzilor**, gestiuni care au fost inserate în fereastra 'Calcul disponibilitate', care se află în [Home>Utilitare>Calcul disponibilitate]; în acest tab Parametri pot fi doar vizualizate, nu și modificate.

Combo box **Locație productivă **permite utilizatorului să decidă considerarea disponibilității în procedura de generare a comenzilor pe baza locației productive, dacă este utilizat.

Flag-ul '**Calculează cantitatea pe baza lotului economic'**: dacă este activ, procedura va genera comanda de producție considerând lotul economic de achiziție inserat în tab furnizori preferențiali, în furnizorul implicit dacă articolul analizat în Definire MPS are tipul aprovizionării de 'Achiziții' sau 'Sistem lohn', și lotul economic de producție inserat în parametrii MRP dacă articolul comenzii are tipul aprovizionării din 'Producție'.       

Flag-ul '**Calculează cantitatea pe baza** ** multiplilor articolului': **dacă este activ, procedura va genera comanda de producție considerând și multiplii lotului economic de achiziție inserat în tab furnizori preferențiali în furnizorul implicit al articolelor dacă articolul comenzii are tipul aprovizionării de 'Achiziții' sau 'Sistem lohn', și multiplii lotului economic de producție inserat în parametrii MRP dacă articolul analizat în Definire MPS are tipul aprovizionării din 'Producție'. Acest flag poat fi activat doar dacă este activ flag-ul precedent.              

Flag-ul '**Completare moment reaprovizionare articol** **'**, dacă este activ, articolului analizat în Definire MPS îi este completat momentul de reaprovizionare inserat în tab Aprovizionarea în registrul articolului.

Flag-ul '**Completare stoc minim articol** **'**, dacă este activ, articolului analizat în Definire MPS îi este completat stocul minim inserat în tab Aprovizionarea în registrul articolului.

Flag-ul '**Exclude ordine in întârziere** **'**, dacă este activ, procedura pentru generarea comenzii de producție va exclude din calculul disponibilității articolului analizat, cantitățile care provin din liniile ordinului client a cărui data marfă pregătită este precedentă datei curente.






