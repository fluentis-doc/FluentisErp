---
title: Creează
sidebar_position: 6
---

Această fereastră este utilă inserării unei noi liste plăți; este aceeași fereastră care se deschide în momentul în care doriți să modificați/vizualizați o listă deja salvată.

În primul combo se selectează **tipul plății** de referință al listei. În următoarele câmpuri, procedura propune anul actual al sistemului și numerotarea progresivă a listei: pentru data emiterii este propusă data actuală.

În câmpul **banca** se inserează, în mod normal, codul contului analitic al băncii pentru care se va emite lista: obligativitatea asocierii la un registru bănci este legată de necesitatea de a avea referințe cin/abi/cab/cont curent necesare pentru expedierea telematică a directorului transferurilor Italia. Din punctul de vedere al contabilizării plăților, în schimb, nu există nici o necesitate particulară: acest cont analitic ar putea fi orice cont analitic din planul de conturi.

Câmpul **contului curent** este completat automat pe baza registrului băncii asociate la contul analitic inserat: eventual poate fi inserat și/sau modificat manual.

Câmpul **note inițiale** este un câmp liber pentru inserarea notelor plății, neutilizat în standard.

Câmpul **note finale** este utilizat la contabilizarea plății pentru a avea descrierea detaliată a mișcării contabile a contului analitic al băncii.

Flag-ul **Inserează această dată valută beneficiar** permite definirea, în directorul telematic, a datei care va fi atribuită beneficiarului plății: în cazul în care data nu este inserată, va fi utilizată data curentă. Dacă flag-ul nu este setat, data valutei va fi egală cu data scadenței.

În partea dreaptă sunt prezente două flag-uri de stare a listei: flag **Listat **nu este gestionat automat de program, în timp ce flag-ul **Fișier emis** este actualizat pe baza creării fișierului telematic. Este posibilă recrearea fișierului și fără resetarea acestui flag în listă.

Gestiunea detaliilor plăților se efectuează în mod normal cu ajutorul butonului plăți din angajamente: deci trebuie selectată lista angajamentelor contabile care vor fi închise cu plata în listă. În această fereastră de selectare a angajamentelor, printre diversele filtre și flag-uri disponibile, semnalăm că nu recomandăm utilizarea flag-ului **Vizualizează angajamente liber profesioniști** (pentru că gestionarea plății trebuie să fie realizată în modulul liber profesioniști pentru ca apoi să poată fi obținută certificarea reținerilor; flag-ul ‘Inserează banca principală din registrul furnizorului' înseamnă ca banca beneficiară a plății va fi banca implicită inserată în registrul furnizorului, în secțiunea plăți, grid bănci principale; acest lucru este independent de banca principală asociată angajamentului în înregistrarea sa contabilă. Acest al doilea flag poate fi predefinit implicit în parametrii modulului.

Este permisă modificarea valorilor plății inserate în grid, cu scopul de a obține, de exemplu, plăți parțiale, ca și adăugarea manuală a plăților.

Câmpul **Note** este completat automat,  pe baza angajamentelor plătite pe baza referințelor documentului care se închide. Aceste note vor fi preluate în liniile plății inserate în contabilitatea generală, în corespondență cu contul analitic relativ.

RIBBON BAR: reprezintă meniul Forum-ului în discuţie, mai precis aria în care se pot efectua acţiuni asociate la procedura utilizată. Prezentăm în continuare lista cu funcţionalităţile posibile:



| Functie | Functionalitate |
| --- | --- |
| Plată nouă | Buton pentru inserarea manuală a unei noi plăți furnizor; |
| Salvează | Buton pentru salvarea antetului noii plăți furnizor, activ după inserarea tipului plății și a contului analitic al băncii; |
| Șterge plățile selectate | Buton pentru ștergerea plăților furnizori create manual sau din angajamente; |
| Creează o plată din angajamente  | Buton pentru crearea unei plăți, activ după salvarea antetului, pentru a crea o plată, achiziționând datele din arhiva de angajamente.  |
| Numerotare din |  |
| Documente | Procedura da posibilitatea de a atașa documente. |






