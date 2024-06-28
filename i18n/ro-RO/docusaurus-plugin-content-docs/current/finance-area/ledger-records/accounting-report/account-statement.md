---
title: Extras de cont
sidebar_position: 3
---

Este raportul de bază pentru obținerea detaliului mişcărilor contabile ale fiecărui analitic, de orice tip (activ, pasiv, cost, venit, parteneri).

Elemente caracteristice ale raportului:

- este posibil, prin intermediul filtrului agent, să cereți extrasul de cont al tuturor clienților în a căror registru a fost inserat acest agent;

- datele pot fi cerute prin intermediul procedurii *Vizualizează sumele în valută* (format A4 orizontal), sau fără acest flag,  doar datele debit/credit în deviza societății (format A4 vertical), sau se poate seta *Vizualizează contrapartide* cu numărul de mişcări de contrapartidă de afișat (format A4 orizontal), sau mişcări exprimate într-o deviză specifică (format A4 orizontal). Aceste setări sunt memorizate la nivelul fiecărui utilizator pentru a le vizualiza la următoarea redeschidere a ferestrei;

- înregistrările pot fi ordonate după data înregistrării sau după data competenței. Această setare va fi memorizată la nivelul fiecărui utilizator pentru a fi repropusă la următoarea redeschidere a ferestrei. Opțiunea este utilă în cazul în care închiderea/redeschiderea conturilor a fost efectuată cu data înregistrării și competenței diferite, cu scopul de a avea un sold progresiv semnificativ;

- este importantă clarificarea gestiunii filtrelor după dată pentru câmpul *Data ultimei deschideri conturi*. În comparație cu *Vizualizare conturi*, în care sunt vizibile toate mişcările fiecărui analitic, raportul este un proces în care este important numărul de înregistrări care trebuie vizualizate din punctul de vedere al prestației mașinii. În acest sens, aplicația va propune în raport mişcările considerând soldul inițial pornind de la ultima dată pentru deschiderea conturilor, care este propusă ca fiind cea mai mare dată anterioară filtrelor inițiale ale raportului. Exemplificând, dacă utilizatorul filtrează mişcările în intervalul de la 01/09/2007 la 31/12/2007 (atât ca dată înreg., cât și ca data comp.), aplicația propune ultima deschidere conturi cu data 01/01/2007 și rezultatul va fi: sold inițial calculat de la 01/01/2007 la 31/08/2007, detaliul mişcărilor asociate la înregistrările cu data în intervalul  01/09-31/12/2007 (pentru acest motiv, în raport vor fi inserate doar conturile analitice care au cel puțin o mișcare între ultima dată pentru deschiderea conturilor și data finală din filtru). Dacă utilizatorul, în schimb, șterge data ultimei deschideri conturi, rezultatul va fi identic cu cel prezent în vizualizare conturi.

Opțiuni disponibile:
> **Vizualizare** - Buton pentru vizualizarea raportului extras de cont.  
> **Listare** - Buton pentru listarea extrasului de cont.