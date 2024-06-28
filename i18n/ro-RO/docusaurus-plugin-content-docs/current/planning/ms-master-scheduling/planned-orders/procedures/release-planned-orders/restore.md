---
title: Restaurare
sidebar_position: 4
---

În această fereastră se poate afișa lista ordinelor planificate a căror lansare se poate restaura. Executarea procedurii de restaurare a ordinului planificat permite anularea lansării efectuate anterior, restaurând situația antecedentă lansării. Această operație poate fi realizată doar în anumite cazuri:

Pentru **ordinul planificat de producție**: doar dacă ordinul de producție generat se află în starea 'Lansat'; în cazul în care ordinul de producție este 'În execuție' este necesară efectuarea restaurării lansării ordinului de producție, în schimb dacă este deja 'Executat' nu se poate efectua restaurarea ordinului planificat, decât dacă se face restaurarea înregistrării semnalării de producție;

Pentru ****ordinul planificat de** achiziție**: doar dacă linia cererii de achiziții generată se află în statusul 'Neexecutată'; în cazul în care linia CdA a fost deja executată cu crearea unui ordin furnizor, va fi necesară restaurarea pornond de la documentul de achiziții până la care s-a ajuns deja;

Pentru ****ordinul planificat în sistem lohn****: doar dacă linia ordinului în sistem lohn generat nu a fost încă executată sau nu a fost generat un aviz de livrare pentru materialul relativ acelei linii a ordinului în SL.

Pentru a efectua lansarea trebuie să fie selectate una sau mai multe linii din gridul superior și apoi să se efectueze clic pe butonul 'Restaurare', prezent în ribbon bar.

RIBBON BAR: reprezintă meniul cu butoanele de execuție, pentru fiecare operație in parte aferente fiecărei ferestre din aria in care se lucrează. Lista funcționalităților posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru aplicarea filtrelor de căutare a ordinelor planificate inserate și deja lansate. |
| Restaurează | Apelează procedura care execută restaurarea lansării ordinelor planificate de producție, achiziție și/sau sistem lohn seelctate în gridul rezultatelor. |

ARIA DE FILTRE: cuprinde multimea campurilor dupa care se poate face filtrarea datelor dorite. Exista posibilitatea să specificaţi mai multe criterii de filtrare, deoarece filtrele sunt în condiție  'AND'.

Descriem în continuare următoarele filtre:

**Articol** **: primul combo permite inserarea clasei articolului, iar pe al doilea câmp, cu 'Help articole' cu ajutorul căruia se selectează fiecare articol (cod și descriere);

**Variantă**: cu dublu clic se deschide help variante cu ajutorul căruia se poate selecta varianta articolului;

**Ordine de întreținere**: cu acest flag se poate decide afișarea ordinelor planificate de întreținere;

**Tip com** **.**: se poate insera tipul comenzii de producție;

**Client**: se inserează datele relative la client: 'cont sintetic', 'cont analitic', 'nume client'; cu dubluc clic pe primul câmp se poate deschide un 'Help conturi' din care să se selecteze clientul după care să se efectueze filtrarea;

**Furnizor**: se inserează datele relative la furnizor: 'cont sintetic', 'cont analitic', 'nume client'; cu dubluc clic pe primul câmp se poate deschide un 'Help conturi' din care să se selecteze furnizorul după care să se efectueze filtrarea;

**Com. prod**.: în aceste 2 câmpuri se inserează numărul și anul comenzii de producție.

GRIDUL REZULTATELOR: este afișată lista cu ordinele planificate care corespund filtrelor inserate mai sus. Utilizatorul, după ce a inserat valorile prin intermediul cărora dorește căutarea ordinelor planificate, dacă apasă butonul [Caută] din ribbon, obține în grid lista cu ordinele planificate dorite.

Descriem în continuare următoarele coloane:

**Utilizator lansare**: afișează utilizatorul care a efectuat lansarea ordinului planificat selectat;

**Dată **lansare****: afișează data în care utilizatorul care a efectuat lansarea

**An**: afișează anul ordinului planificat;

**Ordin**: afișează ordinul ordinului planificat;

**An comandă**: afișează anul comenzii de producție din care a fost generat ordinul planificat. Coloana este goală în cazul în care ordinul planificat a fost generat manual sau provine din elaborarea MRP;

**Număr comandă**: afișează numărul comenzii de producție din care a fost generat ordinul planificat. Coloana este goală în cazul în care ordinul planificat a fost generat manual sau provine din elaborarea MRP;

**Dată început** **: afișează data prevăzută pentru începerea ordinului planificat; dacă este vorba despre ordinul planificat de achiziție sau în sistem lohn, această dată reprezintă data la care trebuie să fie expediat ordinul de achiziție la furnizor care va fi apoi generat cu lansarea ordinului; dacă este vorba despre un ordin planificat de producție această dată reprezintă data prevăzută pentru începerea primei faze de lucru a ciclului articolului;

**Data sfârșit** **: afișează data prevăzută pentru sfârșitul ordinului planificat, dacă este vorba despre ordinul planificat de achiziție sau în sistem lohn această dată reprezintă data la care trebuie să fie primite articolele și deci va coincide cu data prevăzută pentru recepție a liniei ordinului furnizor care va fi apoi generat cu lansarea ordinului; dacă este vorba despre un ordin planificat de producție această dată reprezintă data prevăzută pentru sfârșitul ultimei faze de lucru a ciclului articolului;

**Cantitate**: afișează cantitatea ordinului planificat al articolului;

**Comanda**: afișează eventuala comandă de vânzare asocită ordinului planificat;

**Caracteristica**: afișează codul caracteristicii articolului;

**Descriere c**aracteristică**: afișează descrierea caracteristicii articolului;

Ținând selectată una din liniile prezente în gridul rezultatului, se afișează un detaliu, în gridul inferior, relativ la documentul generat din ordinul planificat. Documentul poate fi: ordin de producție (cu detaliu în tab Ordine de producție), ordin în sistem lohn (cu detaliu în tab Ordine în SL) sau cerere de achiziție (cu detaliu în tab Ordine de achiziție).

Pentru fiecare document există un detaliu similar celui care se poate obține căutând documentele în ferestrele relative din modulele aplicației.






