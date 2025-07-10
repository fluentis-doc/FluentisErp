---
title: Lansare ordine de producţie
sidebar_position: 2
---

:::important Utilizare
Procedura permite gestionarea eficientă a tranziției ordinelor de la starea *Lansat* în *Executiv*. Printr-o interfață intuitivă, este posibil să filtrați și să selectați ordinele de lansat, generând în același timp mișcările de gestiune necesare pentru colectarea automată a materialelor. În plus, această procedură permite restabilirea ordinelor deja eliberate, garantând o flexibilitate operațională semnificativă în procesul de producție.
:::

Acest formular permite schimbarea stării ordinelor de producție și, simultan, crearea mișcărilor de gestiune pentru descărcarea tuturor articolelor ce au, în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ale articolului, *Tipul de preluare* cu valoarea **Automatic**.

## Filtru (Filtro)

În acest tab este posibilă vizualizarea listei ordinelor planificate care trebuie să fie încă eliberate și este posibil să le filtrați folosind o serie de criterii de selecție.

Odată ce toți filtrii doriti sunt setați, va trebui să faceți clic pe butonul **Căutare (Ricerca)** prezent în *bara de panglică (ribbon bar)* pentru a vizualiza rezultatele în cadrul grilei de rezultat.

După ce ați identificat și selectat ordinele pe care doriți să le eliberați, pentru a continua va trebui să folosiți butonul **Eliberare ordine (Rilascio ordini)** prezent în *bara de panglică (ribbon bar)*, acest lucru va permite schimbarea stării ordinelor de la *Lansat* în *Executiv* și, în același timp, crearea mișcărilor de gestiune pentru descărcarea tuturor materialelor ce au, în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ale articolului, *Tipul de preluare* cu valoarea **Automatic**.

## Restaurare (Ripristino)

În acest tab este posibilă executarea procedurii de restaurare care permite anularea eliberării ordinului de producție efectuat anterior, restabilind situația anterioară eliberării, readucând starea ordinului de producție la *Lansat* și eliminând mișcarea de gestiune corespunzătoare.

Odată ce toți filtrii doriti sunt setați, va trebui să faceți clic pe butonul **Căutare (Ricerca)** prezent în *bara de panglică (ribbon bar)* pentru a vizualiza rezultatele în cadrul grilei de rezultat.

Ținând selectată una dintre rândurile prezente în grila de rezultat, mișcările de gestiune create corespunzătoare sunt afișate în grila de mai jos.

Pentru a lansa restaurarea, selectați unul sau mai multe ordine și faceți clic pe butonul **Restaurare (Ripristino)**.

Restaurarea ordinului de producție este posibilă numai dacă ordinul de producție generat se află în starea de *Executiv (Esecutivo)* și nu au început încă declarațiile de producție corespunzătoare; în cazul în care este deja *Epuizat (Evaso)*, nu mai este posibilă executarea restaurării ordinului de producție, cu excepția cazului în care se merge înapoi pornind de la rollback-ul înregistrării declarațiilor de producție.

Executând această procedură, ordinele restaurate vor fi din nou vizibile în tabul de **Filtru (Filtro)** unde va fi posibil să reexecutați eliberarea.

Pentru detalii privind funcționarea comună a formularelor, vă rugăm să consultați linkul [Funcționalități, butoane și câmpuri comune (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).