---
title: Loturi
sidebar_position: 2
---

Fereastra pentru Căutare loturilor se deschide în [Logistica>Loturi/NS>Loturi>Loturi] și prezintă lista cu toate loturile din database, permițând utilizatorului să le modifice și să vizualizeze un detaliu.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru aplicarea filtrelor de căutare a loturilor inserate în baza de date. |
| Modifică lot | Buton pentru deschiderea procedurii care permite modificarea unui lot inserat. |
| Vizualizare lot | Buton pentru deschiderea procedurii care permite vizualizarea unui lot inserat. |
| Schimbă status lot | Buton pentru deschiderea procedurii care permite schimbarea statusului lotului/loturilor selectate. Acest buton deschide o fereastră numită 'Stare lot nouă', în care se poate selecta una din stări și apoi, cu butonul OK se poate modifica masiv starea tuturor loturilor selectate. |

ARIA DE FILTRE: Zona de filtrare cuprinde multimea campurilor dupa care se poate face filtrarea loturilor dorite. Exista posibilitatea să specificaţi mai multe criterii de filtrare, deoarece filtrele sunt, de obicei, în condiție  'AND'.

**Articol** **: acest câmp permite inserarea clasei articolului; cu dublu clic se deschide 'Help articole' prin intermediul căruia se poate selecta fiecare articol (cod și descriere);

**Variantă** **: cu dublu clic se deschide 'Help variante' prin intermediul căruia se poate selecta varianta articolului;

**Lot nr** **.**: acest câmp permite filtrarea datelor pe baza codului lotului;

**Lot furnizor** **: acest câmp permite filtrarea datelor pe baza lotului furnizorului;

**Gestiune** **: în acest combo se poate insera codul gestiunii în care se dorește căutarea loturilor care vor fi afișate în grid;

**Data început scad./val.** **: în aceste 2 câmpuri se poate insera un interval de date pe baza cărora se filtrează loturile;

**Data încărcare lot De la…La…** **: în aceste 2 câmpuri se poate insera un interval de date pe baza cărora se filtrează loturile;

**Client** **: **în aceste 3 câmpuri se inserează datele clientului: 'cont sintetic', 'cont analitic', 'nume client', cu dublu clic în primul câmp se poate deschide 'Help conturi' din care puteți selecta clientul pentru a efectua căutarea;

**Toate** **:**dacă este activ, utilizatorul poate filtra toate loturile prezente în baza de date;

**Deschise** **: dacă este activ, utilizatorul poate filtra doar loturile deschise, adică doar loturile pentru care există încă un stoc în gestiune;

**Închise** **: dacă este activ, utilizatorul poate filtra doar loturile închise, adică doar loturile pentru care stocul este egal cu zero;

**Grupează după codul lotului** **: dacă este activ, se activează un grid în care se afișează o linie pentru fiecare cod lot, cu cantitățile diverselor linii ale aceluiași lot însumate, gestiune pe gestiune și articol pe articol;

**Com./An**: cu ajutorul acestui câmp se pot filtra loturile pe baza comenzii de vânzare atașate, utilizând help comenzi care se deschide cu dublu clic în câmpul galben.

GRIDUL REZULTATELOR: este afișată lista cu loturile care corespund datelor din filtrele inserate sus. Utilizatorul, după ce a inserat filtrele și a apăsat butonul [Caută] prezent în ribbonul relativ, va obține, în gridul rezultatelor, lista cu loturile dorite.

Coloanele din grid sunt:

**Închis**: dacă este activ, evidențiază faptul că stocul este egal cu zero;

**Lot nr.** **: reprezintă codul lotului;

**Dată început** **: reprezintă data început lot;

**Data scad** **.**: reprezintă data scadența lot;

**Cantitate** **: reprezintă cantitatea inițială a lotului pentru fiecare gestiune;

****Cantitate d**isp** **.**: reprezintă cantitatea disponibilă pentru fiecare gestiune a lotului, și anume cantitatea în stoc minus cantitatea utilizată în diverse documente. Cantitatea disponibilă poate să fie afișată și ca fiind egală cu zero, în cazul în care lotul se află într-un status 'nedisponibil pentru ieșiri automate';

**Stare lot** **: reprezintă statusul lotului. Este o informație care ar putea sa nu fie gestionată;

**L. Vânz** **.**: dacă este activ, arată că lotul este disponibil pentru a fi inserat în documentele de vânzare, producție sau în înregistrările de gestiune;

**Gestiune**: reprezintă codul gestiunii în care se află lotul;

**Descriere gestiune** **: reprezintă descrierea gestiunii în care se află lotul;

**Clasă** **: reprezintă clasa articolului care are lotul;

**Cod articol** **: reprezintă codul articolului care are lotul;

**Variantă** **: reprezintă eventuala variantă a articolului care are lotul;

**Comandă** **: reprezintă comanda de vânzare asociată lotului;

**Note** **: reprezintă notele lotului;

****Descriere v**ariantă** **: reprezintă descrierea eventualei variante a articolului care are lotul;

****Descriere **articol** **: reprezintă descrierea  articolului care are lotul;

**Lot furn.** **: reprezintă lotul furnizorului;

**Furnizor** **: sunt datele furnizorului lotului, deci al furnizorului din documentul cu care a fost încărcat lotul însuși;

**UdI:**este paletul legat la lot.






