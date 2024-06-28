---
title: Numere de serie
sidebar_position: 3
---

Fereastra pentru Căutarea numerelor de serie se află în [Logistica>Loturi/SN>Loturi>Numere seriale] și prezintă lista cu toate numerele seriale prezente în baza de date; pot fi modificate sau vizualizate detaliat.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru aplicarea filtrelor de căutare a numerelor de serie inserate în baza de date. |
| Modifică număr de serie | Buton pentru deschiderea procedurii care permite modificarea unui NS inserat. |
| Vizualizează număr de serie | Buton pentru deschiderea procedurii care permite vizualizarea unui NS inserat. |

ARIA DE FILTRE: Zona de filtrare este cuprinde multimea campurilor dupa care se poate face filtrarea NS încărcate. Exista posibilitatea să specificaţi mai multe criterii de filtrare, deoarece filtrele sunt, de obicei, în condiție  'AND'.

**Articol** **: acest câmp permite inserarea clasei articolului; cu dublu clic se deschide 'Help articole' prin intermediul căruia se poate selecta fiecare articol (cod și descriere);

**Variantă** **: cu dublu clic se deschide 'Help variante' prin intermediul căruia se poate selecta varianta articolului;

**Cod NS** **: acest câmp permite filtrarea datelor pe baza codului NS;

**Gestiune** **: în acest combo se poate insera codul gestiunii în care se dorește căutarea loturilor care vor fi afișate în grid;

**Lot furnizor** **: acest câmp permite filtrarea datelor pe baza codului lotului legat de numărul serial care se dorește a fi afișat în grid;

**Data înreg. început/sfârșit** **: în aceste 2 câmpuri se poate insera un interval de date pe baza cărora se filtrează loturile;

**Numere de serie prezente la data** **: vor fi afișate doar numerele de serie care erau prezente în data inserată aici. În acest caz procedura controlează toate mișcările de gestiune care privesc articolele gestionate cu numere de serie și vizualizează doar numerele de serie prezente în data inserată;

**Situații de NS** ****: cele 4 flag-uri, permit utilizatorului să filtreze numerele de serie Descărcate (și anume cele care au fost deja utilizate într-un document de descărcare și care deci nu sunt disponibile), Încărcate (și anume cele care au fost deja încărcate în gestiune), Nedescărcate (și anume cele care nu sunt încă disponibile în gestiune și deci nu sunt încă utilizate în niciun document de descărcare), Neîncărcate (și anume cele care au fost generate într-un document de încărcare, cum este avizul de achiziție, dar al cărui document de încărcare nu a fost încă încărcat în gestiune). Evident, combinația acestor flaguri permite utilizatorului să vizualizeze numerele de serie pe care le dorește în baza stării lor;

**Vizualizează numere de serie expirate** ****: acest flag permite utilizatorului să vizualizeze în grid și numerele de serie expirate, deci cele cu data sfârșit anterioară datei curente.

GRIDUL REZULTATELOR: este afișată lista cu numerele de serie care corespund datelor din filtrele inserate sus. Utilizatorul, după ce a inserat filtrele și a apăsat butonul [Caută] prezent în ribbonul relativ, va obține, în gridul rezultatelor, lista cu numerele de serie dorite.

**Încărcat/Neîncărcat** ****: coloana afișează textul 'Încărcat' dacă documentul prin intermediul căruia a fost generat numărul de serie a fost deja încărcat în gestiune; 'Neîncărcat' în caz contrar;

**Descărcat/Nedescărcat** **: **coloana afișează textul 'Descărcat' dacă documentul prin intermediul căruia a fost generat numărul de serie a fost deja încărcat în gestiune; 'Nedescărcat' în caz contrar;

**Dată început** **: reprezintă data început număr de serie;

**Dată sfârșit** **: reprezintă data sfârșit număr de serie;

**Cod lot** **: reprezintă codul lotului asociat numărului de serie;

**Clasă** **: reprezintă clasa articolului la care se referă numărul de serie;

**Cod articol** **: reprezintă codul articolului la care se referă numărul de serie;

****Cod v**ariantă** **: reprezintă eventuala variantă a articolului la care se referă numărul de serie;

**Gestiune** **: reprezintă codul gestiunii în care se află numărul de serie;

**Descriere g**estiune**** **: reprezintă descrierea gestiunii în care se află numărul de serie;

**Locație** **: **reprezintă codul locației în care se află numărul de serie;

****Descriere **articol** **: reprezintă descrierea articolului la care se referă numărul de serie;

****Descriere **variantă** **: reprezintă eventuala variantă a articolului la care se referă numărul de serie;






