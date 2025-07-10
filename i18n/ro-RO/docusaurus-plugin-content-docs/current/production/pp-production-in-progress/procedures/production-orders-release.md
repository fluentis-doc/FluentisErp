---
title: Lansare ordine de producţie
sidebar_position: 2
---

:::important Utilizare
Procedura permite gestionarea eficientă a tranziției ordinelor de la starea *Lansat* în *Executiv*. Printr-o interfață intuitivă, este posibil să filtrați și să selectați ordinele de lansat, generând în același timp mișcările de gestiune necesare pentru colectarea automată a materialelor. În plus, această procedură permite restabilirea ordinelor deja eliberate, garantând o flexibilitate operațională semnificativă în procesul de producție.
:::

Acest form permite schimbarea stării ordinelor de producție și, simultan, crearea mișcărilor de gestiune pentru descărcarea tuturor articolelor care au în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ai articolului, *Tipul de ieşire* cu valoarea **Automatic**.

## Filtru 

În acest tab este posibilă vizualizarea listei ordinelor planificate care trebuie să fie încă lansate și este posibil să le filtrați folosind o serie de criterii de selecție.

După inserarea filtrelor faceți clic pe butonul **Caută** prezent în ribbon bar pentru afișa rezultatele în tabelul rezultatelor.

După ce ați identificat și selectat ordinele pe care doriți să le lansați, utilizați butonul **Lansează ordine** prezent în ribbon bar, acest lucru va permite schimbarea stării ordinelor ddin *Lansat* în *Executiv* și, în același timp, crearea mișcărilor de gestiune pentru descărcarea tuturor materialelor care au în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ai articolului, *Tipul de  ieşire* cu valoarea **Automatic**.

## Restaurare  

În acest tab este posibilă executarea procedurii de restaurare care permite anularea ribbon lansării ordinului de producție efectuat anterior, restabilind situația anterioară lansării, readucând ordinul de producție în starea starea *Lansat* și eliminând mișcarea de gestiune corespunzătoare.

După inserarea filtrelor faceți clic pe butonul **Caută** prezent în ribbon bar pentru afișa rezultatele în tabelul rezultatelor.

Pentru fiecare linie selectată în tabelul de rezultate, mișcările de gestiune corelate sunt afișate în tabelul inferior.

Pentru a lansa restaurarea, selectați unul sau mai multe ordine și faceți clic pe butonul **Restaurare**.

Restaurarea ordinului de producție este posibilă numai dacă ordinul de producție generat se află în starea de *În execuţie* și nu au început încă declarațiile de producție corespunzătoare; în cazul în care este deja *Executat*, nu mai este posibilă executarea restaurării ordinului de producție, cu excepția cazului în care se merge înapoi pornind de la rollback-ul înregistrării declarațiilor de producție.

Executând această procedură, ordinele restaurate vor fi din nou vizibile în tab **Filtru** unde va fi posibil să reexecutați lansarea.