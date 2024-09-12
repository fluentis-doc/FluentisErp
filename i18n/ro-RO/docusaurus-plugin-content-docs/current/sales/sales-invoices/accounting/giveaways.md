---
title: Omagii(Promo)
sidebar_position: 3
---

Puteti sa decideti daca sunt sau nu contabilizate omagiile, iar daca sunt, care este sablonul cu care acestea trebuie sa fie inregistrate in contabilitate si care este contul pentru stornarea TVA.

**Contabilizare omagii**: cu ajutorul acestui flag se activează procedura de contabilizare omagii. Implicit sunt activate și flagurile succesive. Dacă factura care se contabilizează conține un articol promo, dar parametrul de gestiune nu a fost setat, sistemul va genera un avertisment, cerând uilizatorului să confirme operația. În această situație, factura va fi înregistrată normal, fără gestionarea liniei cu articolul promo, care deci va fi înregistrată manual în contabilitate. În cazul în care este activată gestionarea articolelor promo, dar fără inserarea nici unui cont în câmpurile succesive, sistemul va adăuga, la coada normalelor înregistrări contabile, linile necesare de storno pentru venituri, utilizând același cont analitic inserat pentru articolul vândut.

Dacă, în schimb, a fost setat flagul **Substituie contul articolului** se activează câmpul unde se setează contul analitic de (cost pentru) storno acounturi, care va fi utilizat în locul contului analitic al articolului, în aceste linii adăugate.

Câmpul **Cont storno TVA**, în schimb, este considerat în cazul în care articolul promo nu are flagul ‘Atribuire TVA' în factură, cu care se indică dacă TVA-ul aplicat articolului promo este în sarcina (cu flag) sau nu (fără flag) a clientului. Această valoare va fi înregistrată și stornată doar în cazul în care a fost inserat storno TVA, în lipsa căruia operația va trebui gestionată manual în contabilitate (și în acest câmp este un mesaj de confirmare/aviz utilizator în cazul în care lipsește setarea).

**Crează file XML**: cu ajutorul acestui flag aplicația va crea un xml cu rezultatul contabilizării în directorul inserat în câmpul succesiv.

**Cont analitic scont financiar**: acest câmp este utilizat pentru înregistrarea scontului financiar asociat scadenței facturii.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează parametri | Permite salvarea parametri inserati. |






