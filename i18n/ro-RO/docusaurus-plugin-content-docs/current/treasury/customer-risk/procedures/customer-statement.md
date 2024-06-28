---
title: Expunere clienți
sidebar_position: 2
---

Această fereastră permite obținerea unui cadru general al întregii situații de risc față de diverși clienți, cu posibilitatea de a obține date pe agent, țară sau grupuri de societăți.

Descriem în continuare setările prezente și valorile (clienții prezenți în fereastră sunt cei care în registru au activ flag-ul Expunere clienți).

Secțiunea inițială a parametrilor Risc client propune din nou parametrii impliciți de calcul setați pentru modul.

În secțiunea succesivă antetului, este posibilă filtrarea după un anumit responsabil (angajatul care a fost asociat registrului client, primul tab Administrativ), filtrarea clienților ‘Externi' sau ‘Italia', vizualizarea datelor grupate după ‘grup societăți' (va fi afișat doar un total pe contul analitic inserat în câmpul ‘grup societăți' prezent în tabul Administrativ din registrul clientului și nu pe fiecare analitic client) și, în sfârșit, gruparea (și filtrarea) datelor pe agent sau țară. În partea dreaptă este prevăzută posibilitatea de a ordona datele după codul contului sintetic/analitic sau descriere a clientului.

Datele afișate în grid (în care vor fi vizualizate cu roșu liniile variațiilor):

**Documente neîncasate**: este afișată suma documentelor neîncasate necontabilizate sau (dacă flag-ul în antet este inserat) și cele deja contabilizate;

**Fact. ultimele 12 luni**: este facturarea (din aria vânzări, facturi de vânzări) a celor 12 luni precedente datei de referință;

**Variație zile scad**: indică numărul de zile de variație medie a datei scadenșei față de data documentului;

**Facturat**: este facturarea (din aria vânzări, facturi de vânzări) de la începutul anului;

DSO: Days of Sales Outstanding, zilele de rotație ale creditului. Formula de calcul este 365 * (Angajamente debit – Angajamente credit + Efecte în scadență + Documente neîncasate+ Facturi de contabilizat) / Fact. ultimelor 12 luni. În cazul în care facturarea ultimelor 12 luni este 0 atunci și DSO va fi 0;

**Credit **și **Credit asigurat**: suma creditului gestional și a creditului asigurat;

**Sold**: afișează totalurile debit/credit calculate din angajamente sau din soldul contabil;

**Plăți din înreg. prov.**: valoarea plăților angajamentelor asociate înregistrărilor provizorii;

**Efecte în scadență**: valoarea efectelor acumulate (efecte emise + prezentate);

**De contabilizat**: sunt sumele facturilor (a Tipurilor factură asociate creditului) listate dar necontabilizate;

**De facturat**: sunt sumele avizelor (a Tipurilor avizelor asociate creditului) listate dar nefacturate;

**Tot. expunere**: suma ordinelor deschise + avize de facturat + facturi de contabilizat + sold angajamente/cont. + documente neîncasate necontabilizate;

**Expirat**: valoarea angajamentelor deschise și deja expirate;

****Expirat din înreg. prov.****: ca cel precedent, dar derivate din înregistrări provizorii;

**Ordin**: valorile ordinelor (tipurilor de ordine asociate creditului) listate, confermate dar neexecutate încă.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile conține:



| Functie | Functionalitate |
| --- | --- |
| Calculează | Buton pentru calcularea riscului clienți pe baza filtrelor și setărilor inserate. |
| Vizualizează | Buton pentru vizualizarea raportului pentru calculul efectuat. |
| Listează | Buton pentru listarea calculului efectuat. |

ARIA DE FILTRE: aria de filtre conţine lista cu posibilele tipuri de date cu ajutorul cărora se poate efectua o selecție. În general, filtrele sunt în condiţie “AND” şi există posibilitatea inserării simultane a mai multor criterii de filtrare.

GRID REZULTATE: reprezintă lista cu calculele care corespund datelor din filtrele indicate anterior. Utilizatorul, după ce a inserat valorile, cu ajutorul cărora dorește să obțină calculul expunerii, dacă apasă butonul [Caută] prezent în Ribbon, va obţine în gridul rezultatelor lista cu expunerile.






