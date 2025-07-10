---
title: Actualizare Lead Time Decuplat (DLT)
sidebar_position: 2
---

Această procedură calculează lead time-ul decuplat (DLT) al tuturor articolelor buffer, atât din fabrică cât și din centrele de distribuție/hub-uri. Este  foarte important pentru determinarea dimensiunii zonelor unui buffer și, implicit, a nivelurilor de stoc care sunt proporționale cu dlt-ul.

Dacă un centru de distribuție/hub este alimentat de un hub, dlt-ul articolelor stocate în acesta este același pentru toate și este dat de lead time-ul indicat în tabela structurii logistice (dacă articolul nu are o excepție de furnizare în parametrii DDMRP).

Dacă centrul de distribuție/hub este alimentat de la fabrică, fiecare articol va avea un DLT specific, dat de suma lead time-ului de transport de la fabrică și timpul necesar pentru realizarea produsului în fabrică (nul doar pentru acele articole care sunt buffer în fabrică).

Datele obligatorii pentru lansarea procedurii sunt tipul buffer-ului pentru articolele buffer și, în general, lead time-ul articolelor din lista componentelor (pentru articolele de achiziție, trebuie să fie specificat  furnizorul preferat și lead time-ul, iar pentru celelalte articole, lead time-ul trebuie să fie prezent în parametrii MRP).

Articolele cu date incongruente sau lipsă nu vor fi luate în calcul, iar la finalul procedurii va fi afișat un mesaj care listează incongruențele găsite.

Pentru toate articolele de fabrică care au lista componentelor, procedura va însuma lead time-ul fiecărui articol de-a lungul fiecărei ramificări a listei componentelor, oprindu-se atunci când întâlnește un articol Buffer, deoarece un articol Buffer este deja disponibil și deci nu are nevoie de timp pentru a fi furnizat.

Suma cea mai mare a diferitelor ramuri determină valoarea DLT a articolului, adică timpul necesar pentru a obține produsul.

Acest calcul este efectuat și pentru produsele care nu sunt stocuri DDMRP în fabrică, deoarece acestea pot fi în schimb în centrele de distribuție/hub-uri. Deci, dlt-ul lor este egal cu valoarea DLT în fabrică plus timpul de transport.

Procedura determină, de asemenea, calea critică a fiecărui articol, adică identifică toate articolele aflate pe cel mai lung lanț de aprovizionare, și anume cele care determină valoarea DLT a articolului.

Dacă se dorește reducerea valorii DLT a unui articol, trebuie să se aleagă articole de pe lanțul critic ca noi articole buffer, deoarece alegerea articolelor care nu se află pe lanțul critic nu aduce niciun beneficiu.

La finalul procedurii este apelată automat procedura de actualizare a zonelor.