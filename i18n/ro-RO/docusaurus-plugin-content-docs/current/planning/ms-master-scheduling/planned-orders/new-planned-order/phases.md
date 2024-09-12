---
title: Faze
sidebar_position: 3
---

În gridul acestei ferestre, utilizatorul poate insera manual fazele de lucru pentru producerea articolului ordinului planificat (doar dacă este e producție). Gridul este deja completat în cazul în care ordinul planificat provine din planificarea generală sau din elaborare MRP. Dacă ordinul este inserat manual, pentru a importa datele ciclului de lucru al articolului, este necesar să se utilizeze butonul 'Completare date ordin' prezent în toolbar.

Descriem în continuare următoarele coloane:

**Cod fază/Fază/Subfază**: cu dublu clic se deschide help faze de lucru din care se pot selecta faza și subfaza;

**Ctrl. cant.**: dacă este activ, materialul trebuie să fie supus controlului de calitate la prima sa utilizare;

****Fază **prod.**: dacă este activ, faza este una productivă, deci va trebui să fie semnalată;

**Centru de lucru**: este propus automat; este preluat din faza care a fost selectată anterior și inserată în grid;

**Data început/sfârșit prevăzută**: reprezintă datele fazei. Sunt calculate pe baza timpilor inserați în fazele de lucru, mai exact pe baza celui mai mare dintre timpul lucrător și timpul mașină total pentru faza selectată;

****Timp **mașină**: reprezintă timpul necesar mașinii pentru a realiza faza, menționând cantitatea de bucăți pe fază;

**Număr mașini**: reprezintă numărul de mașini necesar pentru această fază;

**Cant. bucăți pe fază**: reprezintă numărul de bucăți pe fază;

**Timp lucrător**: reprezintă timpul necesar lucrătorului pentru a realiza faza, menționând cantitatea de bucăți pe fază;

******Număr **lucrători**: reprezintă numărul de lucrători necesar pentru această fază;

**Cont sintetic/analitic terț**: acest câmp este activ doar în cazul în care faza este externă. Observație: terțul este preluat din faza de lucru inserată în ciclul de lucru a articolului;

Sub grid sunt afișate alte informații despre faza inserată în grid:

**Mașină**: este propusă automat; este preluată din centru de lucru care a fost selectat anterior și inserat în grid;

**Grup MDO**: grupul de manoperă este propus automat; este preluat din centru de lucru care a fost selectat anterior și inserat în grid;

**Tip**: se poate selecta tip de lucrare (internă sau externă);

**Suprapunere**: cu ajutorul acestui combo se inserează tipul unei eventuale suprapuneri ale fazelor. Poate exista suprapunere Totală (caz în care faza analizată este suprapusă total fazei succesive), Pe bucăți (caz în care este necesară indicarea după câte bucăți produse de această fază va începe faza succesivă), Pe timp (caz în care este necesară indicarea după câte minute de când a început faza va începe faza succesivă);

**UM timpi**: în acest combo box este afișată unitatea de măsură a timpului fazei; timpii fazei pot fi: secunde, minute, ore și zile. De obicei, sunt utilizate minutele pentru timpii fazelor interne și zilele pentru fazele externe, dar depinde mult de tipul de companie pentru care se inserează lucrarea;

**Valoare**: se inserează valoarea eventualei suprapuneri, utilizând citeriile specificate sus;

**Suprapunere referitoare la f**ază/subfază****: se inserează codul fazei și al subfazei care prezintă o suprapunere cu faza analizată. De obicei, se inserează faza successivă;

**Utilizare**: dacă este activ, timpul de așteptare/coadă majorează timpul de utilizare al centrului de lucru în acea fază;

**Timp așteptare sau coadă**: indică eventualul timp de așteptare/coadă prevăzut pentru această mașină.






