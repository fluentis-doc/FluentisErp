---
title: Operaţii patrimoniale
sidebar_position: 2
---

După salvarea datelor din antent vor fi activate tab-urile succesive: în ‘Operaţii patrimoniale' sunt prezente diversele operaţii făcute mijlocului fix. Primul grid se referă la achiziţia iniţială a mijlocului fix: data operaţiei, numărul progresiv şi valoarea (eventual şi cantitatea de mijloace fixe relativă la această valoare totală). În partea dreaptă a gridului sunt prezente câmpul contului analitic client. În cazul în care încărcaţi un mijloc fix istoric, valoarea fondurilor de amortizare deja calculate se inserează direct în al doilea grid, cu statusul ‘contabilizat' pentru a permite aplicaţiei să recalculeze această secţiune.

Gridul central prezintă lista cu amortizările calculate pentru mijlocul fix: inserarea poate fi manuală sau automată. La inserarea manuală trebuie să indicaţi anul de referinţă, numărul progresiv al liniei (dar numai pentru categorii neincrementale; pentru celelalte câmpul este ascuns pentru că amortizarea va fi întodeauna asociată la progresivul 1), tipul de amortizare de aplicat: în acest punct, aplicația va prelua setările categoriei mijlocului fix de referinţă cu cont sintetic-analitic, procent de aplicare şi sume, valori care pot fi forţate şi modificate. Urmează apoi data de referinţă a amortizării (propusă ca fiind sfârşitul exerciţiului pentru anul liniei) şi sumele deducibile şi nedeductibile ale amortizării. Inserarea automată prevede definirea anului de referinţă în câmpul din partea superioară a acestui grid şi utilizarea butonului ‘Execută automat amortizarea' care va prelua datele amortizărilor prevăzute în categorie, pentru tot mijlocul fix analizat.

Calculul amortizării va fi prezent în coloana ‘Deja amortizat' situat în gridul superior cu o valoare care nu este încă definitivă: doar când va fi activat flag-ul ‘contabilizat', valorile din gridul superior vor fi atribuite la coloana fondului, pe baza tipului de amortizare ales. Inserarea manuală a flagului NU determină crearea unei înregistrări în contabilitate (pentru care există procedura contabilizare amortizări): în mod normal se utilizează doar pentru încărcarea manuală iniţială a situaţiei istorice, pentru care se efectuează o inserare unică a valorii totale amortizate pentru anul anterior începerii utilizării aplicației. În momentul salvării liniei cu flagul ‘contabilizat' aplicația vă va întreba dacă doriţi să asociaţi o înregistrarea contabilă deja existentă, mesaj la care, în mod normal (în cazul preluării datelor istorice), se răspunde negativ. Flagul amortizare fiscală prevede gestionarea fiscală a liniei amortizare: este propus pe baza aceluiaşi flag prevăzut în categoria mijlocului fix. În anumite cazuri poate fi utilizat manual. Urmărirea fiscală, în schimb, se face utilizând valorizarea câmpurilor cu sumele deducibile/nedeductibile ale amortizării, valorizate automat pe baza procentului de deducibilitate asociat mijlocului fix sau categoriei sale.

În ultima secţiune, este prezent detaliul valorizării pe centru de cost/comenzi de vânzare ale amortizărilor selectate în al doilea grid.

RIBBON BAR: Reprezintă meniul Forum-ului în discuţie, mai precis aria în care se pot efectua acţiuni asociate la procedura utilizată. Prezentăm în continuare lista cu funcţionalităţile posibile:



| Functie | Functionalitate |
| --- | --- |
| Nouă operaţie | Activează cursorul în primul grid operaţii patrimoniale. |
| Şterge operaţia | Şterge operaţia selectată în gridul operaţii patrimoniale. |
| Nouă amortizare | Activează cursorul în al doilea grid amortizări. |
| Şterge amortizare | Şterge amortizarea selectată în gridul amortizări. |
| Execută amortizarea automată | Calculează amortizarea mijlocului fix în uz pentru anul setat în câmpul din partea superioară a gridului amortizări. |
| Inserează cdc | Activează cursorul în gridul centrelor de cost. |
| Şterge cdc | Şterge mişcarea centrului de cost selectat în grid. |
| Calcul centre de cost | Efectuează calculul centrelor de cost pentru valoarea liniei de amortizare selectată. |
| Inserează comenzi | Activează cursorul în gridul comenzilor. |
| Şterge comenzi | Şterge calculul comenzii selectate în grid. |
| Calcul comenzi | Efectuează calcul comenzii pentru valoarea liniei de amortizare selectată. |
| Detalii reevaluare | Deschide fereastra Detalii reevaluare. Butonul este activ doar dacă flag-ul ‘reevaluări' este setat pentru categoria mijlocului fix în uz.  |
| Documente | Reprezintă arhivă de documente asociată ferestrei în uz. |






