---
title: Histogramă
sidebar_position: 3
---

În acest tab, compus dintr-un grid și dintr-o parte grafică, se poate vizualiza o linie pentru fiecare fază a ordinelor planificate și/sau de producție filtrate pe baza criteriilor de căutare inserate în tab 'Filtru'.

Descriem în continuare următoarele coloane:

**Document**: în această coloană este afișat tipul documentului: ordin de producție sau ordin planificat;

**Obligatoriu**: dacă acest flag este activ, înseamnă că ordinul planificat nu se poate muta;

**An comandă**: reprezintă anul comenzii de producție din care a fost generat documentul. Coloana este goală în cazul în care documentul a fost generat manual sau dacă provine din elaborare MRP;

**Număr comandă**: reprezintă numărul comenzii de producție din care a fost generat documentul. Coloana este goală în cazul în care documentul a fost generat manual sau dacă provine din elaborare MRP;

**Dată început ordin**: reprezintă data prevăzută pentru începerea documentului, și anume data pentru începerea primei faze de lucru din ciclul articolului;

**Dată sfârșit ordin**: reprezintă data prevăzută pentru sfârșitul documentului, și anume data pentru sfârșitul ultimei faze de lucru din ciclul articolului;

**Dată marfă pregătită**: este data liniei ordinului client din care a fost generată comanda a cărei planificare sau elaborare MRP a generat ordinul selectat. Câmpul este gol când comanda care a generat ordinul planificat sau de producție a fost creat din 'Previziuni' sau manual;

**Dată prevăzută livrare**: este data liniei ordinului client din care a fost generată comanda a cărei planificare sau elaborare MRP a generat ordinul selectat. Câmpul este gol când comanda care a generat ordinul planificat sau de producție a fost creat din 'Previziuni' sau manual;

**Fază, subfază, descriere fază**: sunt datele relative la faza de lucru a ordinului planificat de producție selectat;

**CdL**: acest combo box, care afișează codul centrului de lucru creat pentru faza selectată permite modificarea CdL, atribuind deci faza selectată unui alt centru de lucru;

**Dată început fază/ D**ată sfârșit fază****: sunt datele fazei selectate. Acestea sunt calculate pe baza timpilor inserați în fazele de lucru, și, mai precis, pe baza celui mai mare dintre timpul operator și timpul mașină total pentru faza selectată;

**UM timp**: coloana afișează unitatea de măsură utilizată, pentru faza selectată, pentru timpii care apar în coloanele succesive. Pot fi secunde, minute, ore, zile;

**Timp montare**: coloana afișează timpul de montare inserat pentru faza selectată;

****Timp **mașină**: coloana afișează timpul mașină unitar inserat, pentru faza selectată, pentru cantitatea pe fază;

****Timp **alocat**: coloana afișează timpul operator unitar inserat, pentru faza selectată, pentru cantitatea pe fază;

**Cantitate**: coloana afișează cantitatea de produs pentru acel ordin pentru faza selectată;

****Cantitate **produsă**: coloana afișează cantitatea deja produsă (și deci semnalată) pentru acel ordin pentru faza selectată;

****Cantitate **rămasă**: coloana afișează diferența dintre câmpurile indicate mai sus, deci cantitatea care trebuie încă produspă pentru acel ordin pentru faza selectată;

**Note**: coloana afișează notele inserate în tab Note din ordinul planificat sau de producție pentru faza selectată;

**Descriere centru de lucru**: coloana afișează descrierea centrului de lucru pentru faza selectată.

Dacă se selectează o linie a gridului, secțiunea inferiorară afișează graficul relativ la centrul de lucru utilizat pentru faza selectată, evidențiind cu galben timpul utilizat de acea fază. Cu roșu este evidențiată histograma relativă la capacitata productivă disponibilă a centrului de lucru reprezentată în graficul expus, cu albastru este evidențiată histograma relativă la timpul utilizat în ordinele planificate, în timp ce, cu verde este evidențiată histograma relativă la timpul utilizat în ordinele de producție. Pe axa orizontală sunt reprezentate zilele calendarului de fabrică (zilele lucrătoare sunt reprezentate cu culoarea rosie), în timp ce pe axa verticală sunt indicate minutele de lucru disponibile pentru o zi, calculate pe baza calendarului fiecărei capacități productive. De exemplu, dacă un centru de lucru are capacitatea zilnică de 8 ore, în grafic, bara verticală roșie va ajunge la valoarea de 480 minute, reprezentată pe axa orizontală.

Utilizatorul, cu dublu clic pe linia gridului, intra direct în document (ordin planificat sau ordin de producție) care conține faza reprezentată în linia din care s-a plecat, cu posibilitatea, dacă utilizatorul are drepturi, să modifice documentul și, după ce a făcut 'refresh' să vizualizeze situația actualizată și din punct de vedere grafic.






