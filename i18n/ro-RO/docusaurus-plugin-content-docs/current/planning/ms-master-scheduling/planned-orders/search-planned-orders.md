---
title: Caută ordine planificate
sidebar_position: 2
---

Această fereastră se află în [Planificare>MPS>Ordine planificate>Caută ordine planificate] și afișează lista cu ordinele planificate deja inserate, permițând utilizatorului să le modifice, sa le vizualizeze sau să creeze altele noi. 

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru căutarea în baza de date a ordinelor planificate deja inserate. |
| Inserează ordine | Buton pentru inserarea unui nou ordin planificat. |
| Modifică ordine | Buton pentru modificarea unui ordin planificat. |
| Vizualizează ordine | Buton pentru vizualizarea unui ordin planificat. |
| Șterge ordine | Buton pentru ștergerea unui ordin planificat. |
| Verifică disponibilitatea | Buton pentru calcularea și afișarea, pe fiecare material prezent în ordinul planificat de producție, a disponibilității la data rezervării materialului. |
| Modifică filtru atribute | Buton care deschide o fereastră care permite activarea sau nu a filtrului atribute, care permite filtrarea ordinelor planificate pe baza atributelor inserate cu ajutorul codificatorului în articolele care fac obiectul ordinului. |

ARIA DE FILTRE: cuprinde multimea campurilor dupa care se poate face filtrarea datelor dorite. Exista posibilitatea să specificaţi mai multe criterii de filtrare, deoarece filtrele sunt în condiție  'AND'.

**Articol** **: primul combo permite inserarea clasei articolului, iar pe al doilea câmp, cu 'Help articole' cu ajutorul căruia se selectează fiecare articol (cod și descriere);

**Variantă**: cu dublu clic se deschide help variante cu ajutorul căruia se poate selecta varianta articolului;

**Client**: se inserează datele relative la client: 'cont sintetic', 'cont analitic', 'nume client'; cu dubluc clic pe primul câmp se poate deschide un 'Help conturi' din care să se selecteze clientul după care să se efectueze filtrarea;

**Comandă**: se inserează numărul comenzii de vânzare, cu ajutorul helpului comenzi;

**Început lucrare De la...La**: se inserează (într-un interval) data prevăzută pentru începerea lucrării (de la … la ..);

**Sfârșit **lucrare De la...La****: se inserează (într-un interval) data prevăzută pentru sfârșitul lucrării (de la … la ..);

**Tip com** **.**: se poate insera tipul comenzii de producție;

**Com. prod** **.**:  se inserează numărul și anul comenzii de producție;

**Ordin**: se poate insera numărul și anul ordinului planificat;

**Tip ordin de**: cu ajutorul acestor flaguri se pot filtra doar ordinele de achiziție, producție sau în sistem lohn;

**Grup**: se inserează numărul grupului căruia îi aparțin ordinele planificate care să fie afișate în grid;

**Ordine de întreținere**: cu acest flag se poate decide afișarea ordinelor planificate de întreținere;

**Sinteze lună**: activând acest flag, gridul rezultatelor afișează, pentru fiecare articol, o linie pentru fiecare lună a anului, însumând cantitățile totale prevăzute pentru toate ordinele planificate care se află în interiorul lunii. Noua afișare este activă după ce utilizatorul a apăsat butonul de refresh;

GRIDUL REZULTATELOR: este afișată lista cu ordinele planificate care corespund filtrelor inserate mai sus. Utilizatorul, după ce a inserat valorile prin intermediul cărora dorește căutarea ordinelor planificate, dacă apasă butonul [Caută] din ribbon, obține în grid lista cu ordinele planificate dorite.

Descriem în continuare câteva din câmpurile afișate în grid:

**Aprovizionare** **: afișează tipul de aprovizionare a ordinului planificat, care poate fi de producție, de achiziție sau sistem lohn, in relație cu tipul de aprovizionare inserat pentru articolul care face obiectul ordinului în parametrii săi MRP;

**Nivel**: afișează nivelul listei componentelor care identifică articolul care face obiectul ordinului planificat;

**Cod tip ordin**: afișează codul tipului ordinului planificat;

**Descriere **tip ordin**** **: afișează descrierea tipului ordinului planificat;

**An comandă** **: afișează anul comenzii de producție din care a fost generat ordinul planificat. Coloana este goală în cazul în care ordinul planificat a fost generat manual sau dacă provine din elaborarea MRP;

**Număr comandă**: afișează numărul comenzii de producție din care a fost generat ordinul planificat. Coloana este goală în cazul în care ordinul planificat a fost generat manual sau dacă provine din elaborarea MRP;

**Dată început** **: afișează data prevăzută pentru începerea ordinului planificat; dacă este vorba despre ordinul planificat de achiziție sau în sistem lohn, această dată reprezintă data la care trebuie să fie expediat ordinul de achiziție la furnizor care va fi apoi generat cu lansarea ordinului; dacă este vorba despre un ordin planificat de producție această dată reprezintă data prevăzută pentru începerea primei faze de lucru a ciclului articolului;

**Data FOB**: afișează data FOB ('Free on Board'), care este calculată însumând data început prevăzută cu timpul de aprovizionare inserat în tabul furnizori preferențiali al articolului ordinului planificat; este gestionat doar pentru articolele cu tipul de aprovizionare Achiziții;

**Data ETA**: afișează data ETA ('Estimated Time of Arrival'), are este calculată însumând data FOB cu Lead Time de expediție inserat în tabul furnizori preferențiali al articolului ordinului planificat; este gestionat doar pentru articolele cu tipul de aprovizionare Achiziții;

**Data sfârșit** **: afișează data prevăzută pentru sfârșitul ordinului planificat, dacă este vorba despre ordinul planificat de achiziție sau în sistem lohn această dată reprezintă data la care trebuie să fie primite articolele și deci va coincide cu data prevăzută pentru recepție a liniei ordinului furnizor care va fi apoi generat cu lansarea ordinului; dacă este vorba despre un ordin planificat de producție această dată reprezintă data prevăzută pentru sfârșitul ultimei faze de lucru a ciclului articolului;

**Din disponibilitate minimă** **: afișează un flag care este activ doar dacă ordinul planificat a fost generat utilizând procedura pentru planificarea generală și dacă, în parametrii planificării, flagul permite considerarea disponibilității minime în perioadă;

****Cantitate** confirmată**: afișează cantitatea confirmată a ordinului planificat al articolului, diferită de zero doar în cazul ordinului planificat care provine din elaborarea MRP;

**Lot economic de achiziție** **: afișează lotul economic de achiziții al funrizorului preferențial al articolului;

**Multiplii lotului economic de achiziție** **: afișează multiplii lotului economic de achiziții al furnizorului preferețial al articolului;

**Timp de aprovizionare** **: afișează timpul de aprovizionare al furnizorului preferețial al articolului;

**Lot economic producție** **: afișează lotul economic de producție inserat în parametri MRP ai articolului;

**Multiplii lot economic de producție** **: afișează multiplii lotului economic de producție inserat în parametri MRP ai articolului;

**Moment lansare comandă** **: afișează valoarea momentului de lansare al comenzii inserat în tab Aprovizionare al articolului;

**Stoc minim** **: afișează valoarea stocului minim inserat în tab Aprovizionare al articolului;

**Cantitate utilizată** **: afișează cantitatea rezervată în data curentă a articolului;

**Obligatoriu** **: dacă este activ permite utilizatorului să indice că ordinul planificat nu se poate muta.






