---
title: Vizualizează ordin
sidebar_position: 4
---

Fereastra 'Vizualizează ordine' se compune din două taburi identice, fiecare compusă din două griduri. Gridul inferior depinde de ceea ce se selectează în gridul superior.

În tab-ul 'Ordine în Gantt', în gridul superior, este afișată o linie pentru fiecare fază a fiecărui ordin de producție implicat în utilizarea centrului de lucru a cărui hisograma a fost utilizată pentru expandarea ferestrei în discuție.

Coloanele afișate în gridul rezultatelor sunt:

**Tip ordin**: coloana afișează tipul de document; poate fi 'În execuție', 'Lansat' și, în cazul ordinului planificat 'Planificat';

**Comenzi de producție**: coloana afișează anul și numărul comenzii de producție din care a fost generat ordinul. Coloana este goală în cazul în care ordinul planificat a fost generat manual sau provine din elaborarea MRP;

**Cod tip comandă**: coloana afișează codul tipului comenzii de producție;

**Descriere tip comandă**: coloana afișează descrierea tipului comenzii de producție;

**Ordin**: coloana afișează numărul ordinului planificat sau de producție;

**Cod tip ordin**: coloana afișează codul tipului ordinului planificat;

**Descriere tip ordin**: coloana afișează descrierea tipului ordinului planificat;

**Dată început ordin**: coloana afișează data prevăzută pentru începerea ordinului planificat sau de producție; este data primei faze de lucru a ciclului articolului;

**Dată sfârșit ordin**: coloana afișează data prevăzută pentru terminarea ordinului planificat sau de producție; este data ultimei faze de lucru a ciclului articolului;

**Ordin exec.**: coloana are valoarea '0' dacă ordinul nu a fost încă semnalat și valoarea '1' dacă a avut deja semnalări de producție;

**Clasă**: coloana afișează clasa articolului care face obiectul ordinului;

**Codice articolo**: coloana afișează codul articolului care face obiectul ordinului;

**Descriere articol**: coloana afișează descrierea articolului care face obiectul ordinului;

**Variantă**: coloana afișează eventuala variantă a articolului;

**Descriere variantă**: coloana afișează descrierea eventualei variante a articolului;

**Cod/Descriere zonă livrare**: coloana afișează eventual cod și descrierea zonei de livrare;

**Fază de producție**: coloana afișează codurile fazei și subfazei de producție;

****Descriere **fază**: coloana afișează descrierea fazei de producție;

**Timp CdL**: coloana afișează totalul timpului pe care centrul de lucru, de la care s-a pornit, dedică acelei faze;

**%**: coloana afișează procentul timpului din totalul capacității productive disponibile pentru acea zi;

**Articol, Descriere, Variantă, Descriere variantă primul nivel**: coloana afișează informațiile relative la semifabricatul de prim nivel prezent în lista componentelor;

**Cantitate**: coloana afișează cantitatea ordinului planificat al articolului;

****Cantitate **confirmată**: coloana afișează cantitatea confirmată a ordinului planificat al articolului, diferită de zero doar în cazul în care ordinul planificat provine din elaborare MRP;

**Client**: coloana afișează contul sintetic și analitic al clientului asociat ordinului planificat;

**Furnizor**: coloana afișează contul sintetic și analitic al furnizorului asociat ordinului planificat, dacă este de achiziție sau în sistem lohn.

În gridul inferior sunt afișate liniile ordinelor clienți, acolo unde sunt prezente, din care au fost generate comenzile de producție a căror planificare a determinat crearea ordinelor planificate sau de producție reprezentate în gridul superior. 

În al doilea tab sunt expuse 'Ordinele care nu sunt în Gantt'.

Există și un ribbon bar care permite utilizatorului să substituie centrul de lucru pentru documentul selectat și să mute cu 'x' zile, la o anumită dată, documentul selectat în gridul superior.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Import simulare | Buton care apelează procedura care confirmă modificările efectuate de utilizator în documentele afișate în grafic. |
| Salvează simularea | Buton care apelează procedura care salvează într-un fișier simularea efectuată de utilizator fără ca modificările sale sa fie inserate în documentele graficului. |
| Încarcă simularea | Buton care apelează procedura care încarcă în grafic o simulare salvată anterior. |
| Zoom Out | Permite mărirea detaliului în grafic. |
| Zoom In | Permite diminuarea detaliului în grafic. |
| M.R.P. | Buton care apelează procedura care lansează elaborarea MRP în toată baza de date. |
| CdL supraîncărcate | Butonul deschide o fereastră pop-up în care apare un grid în care sunt afișate centrele de lucru implicate în documentele graficului, cu evidențierea, în roșu, a zilelor în care centrele de lucru rezultă a fi ocupate mai mult față de capacitatea lor productivă zilnică. |
| Rollback simulare | Buton care apelează procedura pentru restaurarea simulării la care se lucrează. |






