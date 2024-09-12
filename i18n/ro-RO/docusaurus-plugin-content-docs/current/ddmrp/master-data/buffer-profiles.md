---
title: Profiluri de buffer
sidebar_position: 4
---

Un profil buffer definește caracteristici care sunt comune multor articole buffer.

Astfel, fiecărui articol buffer i se poate asocia profilul său iar modificarea parametrilor relativi se poate face mai ușor și mai rapid. Deci, modificând un profil, acesta va fi aplicat automat tuturor articolelor care-i sunt asociate.

Un profil se identifică prin combinarea a trei parametri:

1. **Tip piesă**

   - M = manufacturing, și anume piesă produsă în fabrică (produs finit sau semifinit)
   - I = intermediate, și anume semifabricat produs în fabrică (această distincție față de M este opțională)
   - P = purchase, piesă achiziționată
   - D = distributed, piesă stocată într-un centru de distribuție (în acest caz înregistrarea nu poate avea câmpul *Gestiune* gol)

2. **Categorie de lead time**

Prin compararea articolelor cu același tip de piesă, se poate defini o valoare inferioară și o valoare superioară a lead time-ului, care permit gruparea elementelor în trei grupuri cu un coeficient asociat între 0 și 1.


   - S = short lead time items, articole cu timp scurt de aprovizionare (coeficient între 0,61 și 1)
   - M = mid lead time items, articole cu timp mediu de livrare (coeficient între 0,41 și 0,6)
   - L = long lead time items, articole cu timp lung de aprovizionare (coeficient între 0 și 0,4)

Valoarea coeficientului este invers proporțională cu timpul de livrare, deoarece pentru articolele cu termen lung este de preferat să aveți mai multe ordine mai mici decât câteva ordine mari, pentru a reduce riscul care derivă din problemele de livrare. 

3. **Categoria de variabilitate**

Prin compararea articolelor cu același tip de piesă, analizând variabilitatea cererii și a aprovizionării, se decide dacă un buffer este caracterizat de variabilitate scăzută, medie sau ridicată.
   
Aceasta este o analiză mai complexă decât cea a lead time, deoarece trebuie să țină seama de variabilitatea cererii (de exemplu, prin verificarea dispersiei statistice a valorilor cererii pe o perioadă semnificativă de timp), de variabilitatea aprovizionării (de exemplu, luând în considerare dispersia statistică a întârzierilor la aprovizionare) și considerând dacă sunt prezente alte buffer, ca fii sau părinți, care prin natura lor reduc variabilitatea.

Sunt considerate trei niveluri de variabilitate asociate unui coeficient cuprins între 0 și 1 după cum urmează:

   - L = low variability sau variabilitate scăzută (coeficient între 0 și 0,4)
   - M = mid variability sau variabilitate medie (coeficient între 0,41 și 0,6)
   - H = high variability sau variabilitate mare (coeficient între 0,61 și 1)

Cu cât variabilitatea este mai mare, cu atât este mai mare nivelul stocului de siguranță al buffer-ului (zona roșie), care este proporțional cu coeficientul de variabilitate.