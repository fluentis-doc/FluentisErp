---
title: Tab gestiune
sidebar_position: 2
---

Operativitatea procedurii prevede indicarea la început a exercițiului contabil pentru care se dorește efectuarea calculului, apoi data de înregistrare/competență de atribuit înregistrărior de creat și șabloanele de utilizat pentru rectificare și integrare. Opțiunea înregistrare unică va grupa sau nu într-o înregistrare unică toate rectificările și în alta toate integrările.

După salvarea acestor setări se va activa butonul de calcul care va popula secțiunea inferioară cu lista ajustărilor propuse: în acestea va fi inserat tipul operației, referințele la înregistrarea inițială, numărul de zile ale rectificării și apoi, editabile, valoarea și analiticul. În cazul în care șabloanele inserate prevăd gestiunea pe cdc/cdp și mișcarea inițială are datele relative de rectificare/integrare, în secțiunea inferioară vor fi prezente și detaliile calculelor relative.

Faza următoare cere confirmarea, pe fiecare linie, că suma calculată este corectă și completă, cu ajutorul selectării flagului *controlat*, operație care va activa modificabilitatea și relativele flaguri de control și în secțiunea inferioară cu cdc/cdp. Toate liniile cu statusul *controlată* vor fi contabilizate cu ajutorul butonului pentru contabilizare. Utilizatorul poate crea mai multe contabilizări pe măsură ce sunt definite detaliile, poate recalcula lista pentru a verifica dacă au fost adăugate alte operații (de obicei integrări de înregistrări ale noului exercițiu cu competență anterioară) sau crearea ajustărilor noi pentru acestea. Este prezent și tabul pentru restaurarea situației precedente.

În cazul în care au fost efectuate modificări în înregistrările contabile puteți să utilizați butonul *Verificare calcul*: acest buton va recalcula fiecare linie și va afișa eventualele diferențe față de ceea ce a fost deja propus în grid, cu un buton pentru alinierea sau nu a diferențelor care va și șterge liniile de rectificare/integrare asociate mişcărilor contabile care nu mai există.

O ultimă notă importantă este raportată în cazul în care ajustările au fost deja contabilizate: în acest moment nu există nici o blocare atunci când utilizatorul modifică înregistrarea inițială care a determinat rectificarea, unica blocare este atunci când se dorește ștergerea înregistrării (operație nepermisă). Recomandăm deci să fiți atenți atunci când doriți să modificați înregistrările care sunt implicate în operațiile de ajustare de la sfârșitul anului.

Ultimul detaliu se referă la procedura de închidere automată conturi: în aceasta este prezentă o opțiune de transfer automat al operațiilor de ajustare care urmează înregistrările de redeschidere conturi. Cu această opțiune, Ideale2010 va releva, la data redeschiderii, stornarea rectificărilor în timp ce va opera transferul integrărilor la data înregistrării sursă a ajustării.

Optiunile sunt:
> **Salvează** - Buton pentru salvarea antetului, activ după inserarea datelor.  
> **Calculează** - Buton de calcul care va popula secțiunea inferioară cu lista ajustărilor propuse.  
> **Verificare calcul ajustare** - Buton care va efectua calculul pe fiecare linie, afișând eventualele diferențe față de ceea ce a fost deja propus în grid.  
> **Contabilizează** - Buton pentru contabilizarea liniilor cu flagul controlat setat.