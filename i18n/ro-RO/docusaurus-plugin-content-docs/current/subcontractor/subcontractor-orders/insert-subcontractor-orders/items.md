---
title: Articole
sidebar_position: 3
---

Fereastra Articole conține un grid în care se pot insera manual produsele cerute terțului. Acest grid este deja completat în cazul în care ordinul provine din planificarea generală sau din elaborare MRP. În cazul în care ordinul este inserat manual este necesară inserarea cantității, a eventualului preț lucrare, a datei prevăzute pentru reintrare, a datei utilizării materialului.

Secțiunea situată sub grid conține detaliile fiecărei linii selectate în grid.

Trebuie evidențiat faptul că, în cazul completării automate a acestui grid, toate datele indicate anterior sunt actualizate automat, lasând oricum posibilitatea utilizatorului să le modifice sau să adauge ulterioare materiale la lista de componente a ordinului planificat. Observație: în cazul în care ordinul planificat este de achiziții, tabul Materiale ramâne dezactivat.

**Grid articole**

**Executat**: indică dacă linia este executată, este valorizată automat de sistem sau dacă poate fi modificată de utilizator;

**Listat**: indică dacă linia a fost deja listată; acest lucru pentru a controla eventuale modificări și pentru a le putea lista pe fiecare în parte;

**Cod articol**: cu dubluc clic se apelează help articole cu ajutorul căruia se selectează codul articolui;

**Curs lucrare**: în acest câmp este preluat flag-ul prezent în parametrii MRP ai articolului numit “Curs lucrare”;

**UM**: reprezintă unitatea de măsură a articolului;

**UMA**: reprezintă eventuala unitatea de măsură alternativă a articolului;

**Cantitate de produs**: reprezintă cantitatea ordinului inițial comunicată terțului;

****Cantitate **reintrată**: totalul cantității prelucrate primite;

**Preț unitar lucrare**: prețul din ofertă sau inserat manual;

**Dată prevăzută reintrare**: data sosirii materialelor prelucrate;

**Dată utilizare material**: data la care eventualul material trebuie să fie disponibil pentru a fi expediat terțului către prelucrare.

**Detaliu articol**

Pentru fiecare linie de articol din grid sunt prezente alte date:

**Comandă**: preia comanda de vânzare pentru care face referire necesarul;

**Note lucrare**: sunt controlate de utilizator. Poate fi parametrizat și pot fi preluate date din sistem, cum ar fi descrierea fazei de lucru care a generat necesarul pentru lucrare;

**Ordin/Fază**: cu dubluc clic se apelează help faze de lucru din care se poate selecta relativa fază și subfază și deci să fie atribuit materialul selectat la o anumită fază de lucru a articolului;

**Gestiune**: reprezintă gestiunea de primire a produsului prelucrat; 

RIBBON BAR: reprezintă meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile conține:



| Functie | Functionalitate |
| --- | --- |
| Inserează | Permite inserarea unei noi linii în grid. |
| Șterge | Permite ștergerea liniei din grid (și datele ‘materiale' asociate). |
| Diverse - Caută | Caută în lista de articole din grid. |






