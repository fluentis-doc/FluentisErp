---
title: Filtru
sidebar_position: 2
---

În această fereastră se poate vizualiza lista cu ordinele planificate care trebuie să fie lansate.

RIBBON BAR: reprezintă meniul cu butoanele de execuție, pentru fiecare operație in parte aferente fiecărei ferestre din aria in care se lucrează. Lista funcționalităților posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru căutarea în baza de date a ordinelor planificate inserate. |
| Lansare ordine planificate de producție | Apelează procedura care lansează ordinele planificate de producție selectate în gridul rezultatelor, generând ordine de producție lansate sau în execuție, în funcție de parametrii Necesar Materiale. |
| Lansare ordine planificate de achiziție | Apelează procedura care lansează ordinele planificate de achiziție selectate în gridul rezultatelor, generând cererile de achiziție autorizate sau neautorizate, în funcție de parametrii Necesar Materiale. |
| Lansare ordine planificate în sistem lohn | Apelează procedura care lansează ordinele planificate în sistem lohn selectate în gridul rezultatelor, generând ordine în SL. |
| Deschide căutarea ordinelor de producție | Apelează procedura pentru deschiderea ferestrei Caută ordine planificate filtrate cu aceleași criterii utilizate în secțiunea de filtre ale ferestrei. De exemplu, filtrând ordinele planificate pe baza numărului comenzii 3 din anul 2012, fereastra de căutare ordine de producție se va deschide deja filtrată pentru comanda 3 a anului 2012. |
| Atribute | Deschide o fereastră care permite stabilirea dacă se activează sau nu Filtru atribute, care permite filtrarea ordinelor planificate pe baza atributelor inserate cu ajutorul codificatorului în articolele care fac obiectul ordinului. |

ARIA DE FILTRE: cuprinde multimea campurilor dupa care se poate face filtrarea datelor dorite. Exista posibilitatea să specificaţi mai multe criterii de filtrare, deoarece filtrele sunt în condiție  'AND'.

**Articol** **: primul combo permite inserarea clasei articolului, iar pe al doilea câmp, cu 'Help articole' cu ajutorul căruia se selectează fiecare articol (cod și descriere);

**Variantă**: cu dublu clic se deschide help variante cu ajutorul căruia se poate selecta varianta articolului;

**Dată început lucrare De la...La**: se inserează (într-un interval) data prevăzută pentru începerea lucrării (de la … la ..);

**Dată sfârșit **lucrare De la...La****: se inserează (într-un interval) data prevăzută pentru sfârșitul lucrării (de la … la ..);

**Ordine de întreținere**: cu acest flag se poate decide afișarea ordinelor planificate de întreținere;

**Lansare ordine planificate în** **: se selectează tipului ordinului care va trebui generat cu lansarea (Cereri de achiziție, Ordine de producție, Ordine în SL);

**Grup**: în acest câmp se poate insera numărul grupului căruia îi aparțin ordinele planificate care vor fi afișate în grid.

GRIDUL REZULTATELOR: este afișată lista cu ordinele planificate care corespund filtrelor inserate mai sus. Utilizatorul, după ce a inserat valorile prin intermediul cărora dorește căutarea ordinelor planificate, dacă apasă butonul [Caută] din ribbon, obține în grid lista cu ordinele planificate dorite.

Descriem în continuare următoarele coloane:

**Nivel**: afișează nivelul listei componentelor care identifică articolul ordinului planificat;

**Cod tip ordin**: afișează codul tipului ordinului planificat;

**Descriere **tip ordin**** **: afișează descrierea tipului ordinului planificat;

**An comandă** **: afișează anul comenzii de producție din care a fost generat ordinul planificat. Coloana este goală în cazul în care ordinul planificat a fost generat manual sau dacă provine din elaborarea MRP;

**Număr comandă**: afișează numărul comenzii de producție din care a fost generat ordinul planificat. Coloana este goală în cazul în care ordinul planificat a fost generat manual sau dacă provine din elaborarea MRP;

**Dată început** **: afișează data prevăzută pentru începerea ordinului planificat; dacă este vorba despre ordinul planificat de achiziție sau în sistem lohn, această dată reprezintă data la care trebuie să fie expediat ordinul de achiziție la furnizor care va fi apoi generat cu lansarea ordinului; dacă este vorba despre un ordin planificat de producție această dată reprezintă data prevăzută pentru începerea primei faze de lucru a ciclului articolului;

**Data sfârșit** **: afișează data prevăzută pentru sfârșitul ordinului planificat, dacă este vorba despre ordinul planificat de achiziție sau în sistem lohn această dată reprezintă data la care trebuie să fie primite articolele și deci va coincide cu data prevăzută pentru recepție a liniei ordinului furnizor care va fi apoi generat cu lansarea ordinului; dacă este vorba despre un ordin planificat de producție această dată reprezintă data prevăzută pentru sfârșitul ultimei faze de lucru a ciclului articolului;

****Cantitate** confirmată**: afișează cantitatea confirmată a ordinului planificat al articolului, diferită de zero doar în cazul ordinului planificat care provine din elaborarea MRP;

**Furnizor**: afișează furnizorul asociat ordinului planificat, dacă este de achiziție sau în sistem lohn;

**Comanda**: afișează eventuala comandă de vânzare asociată ordinului planificat;

**Număr ordin**: afișează numărul ordinului client din care a fost generată linia comenzii de producție a cărei planificare a generat ordinul planificat;

**Obligatoriu** **: dacă este activ permite utilizatorului să indice că ordinul planificat nu se poate muta.






