---
title: Calculare valoare capital investit în buffere
sidebar_position: 4
---

Această procedură calculează capitalul în medie investit într-un articol gestionat pe stoc conform logicii Ddmrp (buffer).

Acest calcul se realizează prin înmulțirea valorii medii a stocului buffer (zona roșie + zona verde/2) cu costul unitar al articolului buffer.

*Notă*: calculul costului unitar ia în considerare doar costul materialelor achiziționate sau al prelucrărilor externe (costuri directe și variabile), nu și alte costuri indirecte (costul forței de muncă, amortizarea utilajelor etc).

Scopul principal al acestei proceduri este de a verifica dacă introducerea sau eliminarea unui buffer duce la scăderea valorii totale a capitalului investit.

În cazul în care, ca urmare a unei alegeri, valoarea totală a capitalului investit scade, aceasta trebuie considerată o alegere validă; în caz contrar, probabil trebuie evitată.

Dacă un articol buffer are o *listă de componente*, în aceasta există o ramură care duce până la produsele de achiziție, care reprezintă lanțul componentelor critice, adică acel lanț care determină valoarea lead time-ului declupat (DLT) al bufferului părinte.

În mod normal, transformarea unui buffer într-un astfel de articol duce la scăderea valorii DLT a bufferului părinte și, implicit, la scăderea stocului mediu al acestuia, în timp ce se introduce un nou stoc pentru noul buffer.

Deoarece costul unitar crește pe măsură ce creșterea nivelul în lista componentelor, această acțiune duce în mod normal la o scădere a sumei valorii totale a capitalului investit al bufferului părinte și al bufferului copil.

Pentru a confirma sau infirma ceea ce s-a afirmat mai sus, este necesar să se execute această procedură.

Pentru acest calcul se folosesc doar costurile directe, deoarece calculul tradițional al costului unitar complet, cu distribuirea costurilor indirecte prin intermediul indicatorilor de cost (cost diver), este considerat inadecvat și derutant pentru luarea deciziilor.

Acest cost unitar complet are valoare doar pentru valorizările de gestiune pentru exercițiul financiar anterior, pentru a îndeplini obligațiile contabile legislative (conform GAAP sau Generally Accepted Accounting Principles, valabile în întreaga lume). De fapt, doar la final se cunosc cu exactitate volumele produse și, prin urmare, se poate realiza o calculație suficient de fiabilă a costului unitar.

Pentru mărfurile achiziționate, se va lua în considerare ceea ce este prezent în câmpurile de cost din registrul articolui (cost ultim, mediu, standard, în funcție de opțiunea utilizatorului în momentul lansării procedurii).

În cazul articolelor în sistem lohn, costul prelucrării (cost ultim, mediu, standard, în funcție de opțiunea utilizatorului în momentul lansării procedurii) este dedus prin scăderea costului articolului din suma costurilor componentelor sale din lista componentelor.

*Notă*: valorile calculate se bazează pe dimensiunile zonelor roșie și verde ale fiecărui buffer citite în *Parametri DDMRP*.

Dacă, în momentul lansării procedurii, există excepții în *Demand Adjustent Factor* sau în zone și a fost executată procedura de actualizare a zonelor, valorile valorizărilor capitalului circulant vor ține cont. Deci, pentru același articol se vor obține valori diferite în momente diferite de calcul.