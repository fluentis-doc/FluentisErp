---
title: Contrapartidă
sidebar_position: 5
---

Acest tab este identic cu tab-ul Înregistrare, dar este activ doar dacă șablonul de gestiune inserat în tab Înregistrare conține o gestiune și un șablon de contrapartidă. Șabloanele de contrapartidă se inserează în cazul în care se dorește gestionarea unei duble mișcări de gestiune cu o singură înregistrare. Deci este posibil, în tabelul șabloanelor de gestiune, să se insereze un șablon de încărcare drept contrapartidă pentru un șablon de descărcare si invers.

Datele din linia mișcării trebuie să fie identice în cele 3 taburi; același lucru este valabil și pentru gridurile: Loturi, Nmere de serie, Centre de cost și Variante.

Există un caz particular în care, în tab Înregistrare este inserat un articol și în tab Contrapartidă se inserează altele: când șablonul de contrapartidă asociată șablonului principal are activ flag-ul 'Lista componentelor', flag care permite utilizatorului să încarce articolul în tab Înregistrare (deci utilizând un șablon de încărcare) și să vadă lista componentelor sale în tab Contrapartidă, în care va fi deci prezent șablonul de descărcare. Evident, se poate gestiona și cazul contrar.

O situație generală care cere gestionare șabloanelor cu contrapartida asociată este descărcarea automată a avizului de livrare în sistem lohn, care efectuează descărcarea materialelor de livrat terțului din gestiunea de materii prime (sau semifabricate, în funcție de caz), cu imediata încărcare în gestiunea terțului a materialelor care vor fi apoi utilizate de el pentru a produce articolele cerute în ordinul în sistem lohn.

RIBBON BAR: reprezintă meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile conține:



| Functie | Functionalitate |
| --- | --- |
| Înregistrare nouă | Buton pentru salvarea înregistrării tocmai create sau a modificărilor făcute acesteia; permite și inserarea unei noi înregistrări de gestiune ștergând toate datele ferestrei deja deschise. |
| Salvează | Buton pentru salvarea înregistrării tocmai create sau a modificărilor făcute acesteia. |
| Inserează mișcări | Buton pentru inserarea unei linii noi în gridul mișcărilor de gestiune. |
| Șterge mișcările selectate | Buton pentru ștergerea liniilor selectate din gridul mișcărilor. |
| Extinde gridul | Buton pentru extinderea gridului mișcărilor de gestiune, ascunzând momentan gridurile inferioare. |
| Șterge centrele de cost | Buton pentru ștergerea liniilor selectate din gridul centrelor de cost. |
| Șterge numărul de serie | Buton pentru ștergerea liniilor selectate din gridul numerelor de serie. |
| Șterge loturi | Buton pentru ștergerea liniilor selectate din gridul loturi. |
| Import | Buton pentru importarea articolelor dintr-un fișier. Acesta trebuie să fie inserat în tab “Import” din Parametrii inițiali de gestiune. Apăsând acest buton se deschide o fereastră numită “Import”, în care sunt afișate toate liniile prezente în fișier, în relativul grid. Selectând liniile gridului și apăsând butonul “Import”, liniile sunt transferate în gridul mișcărilor din înregistrarea de gestiune. |
| Import din barcode | Buton pentru importarea articolelor citind codul lor de bare cu un dispozitiv. leggendo il loro codice a barre con un emulatore di tastiera. Apăsând acest buton se deschide o fereastră numită “Import din barcode”, în care sunt afișate toate liniile prezente în fișier, în relativul grid. Selectând liniile gridului și apăsând butonul “Import”, liniile sunt transferate în gridul mișcărilor din înregistrarea de gestiune. |
| Vizualizare stoc pe articol | Buton care deschide fereastra “Vizualizare stocuri” deja filtrată după articolul selectat în gridul mișcărilor și după gestiunea setată în antetul înregistrării. Dacă se face clic pe buton fără să se selecteze nici un articol în grid, procedura deschide “Vizualizare stocuri” filtrată doar după gestiune, afișând stocurile tuturor articolelor prezente în acea gestiune. |






