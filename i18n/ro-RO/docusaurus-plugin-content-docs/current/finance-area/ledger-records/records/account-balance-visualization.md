---
title: Bilanț vizualizare conturi
sidebar_position: 8
---

Cu ajutorul acestui formular este posibilă obținerea unei vizualizări a datelor pe ecran care să corespundă aproximativ cu raportul balanței de verificare, având diverse posibilități de filtrare, grupare de date și opțiuni suplimentare.

**Aria de filtrare** permite filtrarea datelor contabile care urmează să fie vizualitate prin introducerea unui interval de date de înregistrare contabilă, a unui interval (subset) de conturi sau subconturi, a unui tip de cont, a unui model contabil (Șablon de contabilitate generală), a unei anumite diviziuni (utilă dacă există mai multe decât unul activ), un tip de valută (Monedă).

Prin activarea flag-ului din aria de filtrarea *Convertiți și pentru celelalte sume în valută*, împreună cu valoarea filtrului de valută anterior (care extrage mișcările exprimate într-o anumită valută), vor fi convertite și celelalte mișcări contabile exprimate în euro sau alte valute în moneda selectată prin modificarea datei de înregistrare.

Tab-ul **Parametri**: (deschideți extensia)

Deoarece grila de rezultate are și câmpul *Nivel*, care reprezintă ordinea ierarhică a contului/subcontului respectiv în planul de conturi (unde 99 este ultimul nivel de detaliu cel mai scăzut posibil și 0 este nodul rădăcină, conținând în general totalul) există un filtru pentru nivelurile care trebuie afișate:
- *Toate*: arată toate nivelurile;
- *Afișați totalurile pentru nivelul X al contului de grupare (introducei valoarea X)*: prin introducerea nivelului dorit (exemplu 98) în câmpul corespunzător alăturat *Nivel*, rezultatele vor fi grupate pe cont principal (care în planul de conturi este nivelul imediat mai mare de 99, definit în scopul prezentei elaborări drept cel mai mare detaliu posibil al subconturilor din planul de conturi);
- *Afisați totalurile pentru nivelul X al contului de grupare cu subtotaluri*: comparativ cu cu tipul de grupare anterior, va afișa și subtotalurile posibilelor grupări inferioare ierarhic;
- *Afișează totalurile numai pentru subconturi*: valorile vor fi afișate numai pentru nivelurile care conțin subconturi (nivelurile ierarhic superioare nu vor fi afișate);
- *Excludeți rândurile cu 0 (exclude rândurile în care fiecare valoare in rândul = 0)*: conturile/subconturile neadministrate nu vor fi afișate;
- *Adaugă închis/deschis*: activează sau dezactivează un anumit mod de afișare care, în cazul modificării intervalului de date de înregistrare și al actualizării filtrării, prin apăsarea din nou a butonului *Caută*, adaugă noul rezultat (adăugându-l în grila de rezultate) la cel afișat anterior permițând, de exemplu, să se facă comparații de valori între diferite perioade. Din motive de gestionare și claritate a rezultatului se recomandă utilizarea acestui mod numai împreună cu filtrul pe setul de conturi/subconturi pentru a returna un set limitat de date.

**Grila de rezultate:**
Această grilă afișează conturile sintetice și analitice conform filtrului de căutare și parametrilor definiți în prima parte a formularului.

Codul și descrierea atât a *Grupului* (vezi structura **[planului de conturi](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**), cât si a conturilor sintetice și analitice și codul de *Nivel* definit special pentru această prelucrare.

*Final*: acest câmp indică (cu un steag) dacă contul și/sau grupul este ierarhic mai mare decât toate celelalte din ramura sa (din structura planului de conturi). Acest lucru este util deoarece, în cazul unei organizări neoptimale sau neperfect omogene a structurii planului de conturi, codul afișat în câmpul *Nivel* poate să nu fie cu adevărat cel ierarhic superior și, prin urmare, este posibil să nu fie posibilă filtrarea corectă. (și obțineți totaluri corecte).

In tab-ul **Totaluri** sunt prezente următoarele câmpuri:

- *Total linii selectate*: este posibil să selectați unul sau mai multe conturi sintetice și analitice (ținând apăsată tasta Ctrl), iar în acest caz sumele sunt totalizate în acest rând;  
ATENȚIE: Dacă, de exemplu, sunt selectate subconturi și conturile contabile aferente, sau grupuri de un nivel ierarhic superior (care includ deci deja valoarea subconturilor detaliate), suma afișată în acest rând va fi afișată în roşu. pentru a evidenţia faptul că totalul va fi distorsionat de o selecţie neomogenă şi coerentă.

- *Total conturi detaliate*: totalurile afișate în acest rând sunt doar cele care se referă la subconturi detaliate de cel mai jos nivel ierarhic;  
- *Total*: totalurile afișate pe acest rând se referă la toate rândurile afișate în grila de rezultate, deci dacă sunt returnate ambele conturi detaliate (sintetice și analitice), conturi sau niveluri superioare (pe baza filtrelor setate), totalul va fi suma conturilor și niveluri superioare (înmulțirea valorilor în raport cu nivelul de detaliu și în acest caz reprezentând o dată de puțină semnificație).
