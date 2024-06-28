---
title: Articole reintrate
sidebar_position: 1
---

În această fereastră este afișată lista cu articolele care se întorc de la terț, deci liniile care au produs o executare a liniilor ordinului SL. Ferestra este compusă dintr-un grid și alte două taburi: 'Articol' și 'Loturi/NS'.

Prezentăm în continuare următoarele coloanele din grid:

**Fază/Subfază** **: sunt afișate codul fazei și codul subfazei fazei de producție a ordinului de producție la care este asociat eventual articolul; sunt afișate dacă ordinul în SL, din care a fost creată această linie, a fost generat dintr-o fază externă a unui ordin de producție;

**UM** **: ****reprezintă unitatea de măsură gestională a articolului reintrat;

**UMU** **: **reprezintă unitatea de măsură utilizată a articolului reintrat;

**Cantitate comandată** **: reprezintă cantitatea care a fost inserată drept cantitate de produs în linia ordinului în SL din care a fost generată această linie reintrare. Este o coloana read only;

****Cantitate **reintrată** **: reprezintă cantitatea reintrată cu această linie de reintrare în SL. Este o coloana editabilă;

****Cantitate **rămasă** **:  reprezintă cantitatea rămasă a liniei ordinului SL din care a fost generată linia reintrării. Când aceasta este egală cu zero înseamnă că linia ordinului SL a fost complet executată;

**Preț unitar lucrare** **: este prețul preluat direct din linia ordinului SL din care a fost generată linia reintrării. Este o coloana editabilă;

**Valoare** **: reprezintă valoarea totală a lucrării. Este o coloană needitabilă și reprezintă produsul valorilor coloanelor: cantitate reintrată și preț unitar lucrare;

**UM alt.** **: reprezintă unitatea de măsură alternativa a articolului reintrat, poate fi editat de utilizator;

**Cantitate alternativă**: reprezintă cantatea în unitatea de măsură alternativă a articolului;

**Sold**: în această coloană este afișat un flag care permite utilizatorului, dacă este activat, să efectueze executarea forțată a liniei corespondente;

**Gestiune reintrare**: în această coloană este afișat codul gestiunii în care se face încărcarea articolelor reintrate de la terț. Codul gestiunii este propus identic cu cel inserat în linia ordinului în SL care a fost executat cu aceast articol reintrat, dar poate fi modificat de utilizator. Dacă, în schimb, a fost inserat în antet un anumit tip de reintrare care prevede o gestiune diferită, atunci este propusă gestiunea tipului reintrării, dar numai dacă este activ flagul prezent în Parametri sistem lohn, numit 'Consideră gestiuni pe baza tipului avizului reintrării';

**Șablon reintrare**: în această coloană este afișat codul șablonului de gestiune care va fi utilizat pentru încărcarea în gestiune a articolului reintrat de la terț. Codul șablonului gestiunii ceste propus identic cu cel inserat în linia ordinului în SL care a fost executat cu aceast articol reintrat, dar poate fi modificat de utilizator. Dacă, în schimb, a fost inserat în antet un anumit tip de reintrare care prevede o gestiune diferită, atunci este propus șablonul de gestiune al tipului reintrării, dar numai dacă este activ flagul prezent în Parametri sistem lohn, numit 'Consideră gestiuni pe baza tipului avizului reintrării';

**Ordin/An: **reprezintă numărul și anul ordinului în SL din care a fost generată linia reintrării;

**Descriere variantă**: reprezintă descrierea variantei articolului reintrat;

****Descriere **opțiune: **reprezintă descrierea opțiunii liniei articolului;

****Descriere **gestiune**:  reprezintă descrierea gestiunii inserate în linia articolului;

****Descriere **șablon: **reprezintă descrierea șablonului gestiunii inserat în linia articolului;






