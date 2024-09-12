---
title: Actualizare valoare Net Flow Position (NFP)
sidebar_position: 5
---

Această procedură efectuează calculul poziției fluxului net (NFP) al unui articol buffer într-o unitate logistică.

Pentru același articol, valoarea NFP se schimbă odată cu schimbarea unității logistice în care este stocat, deci, de exemplu, dacă este stocat în 5 unități logistice, vom avea 5 valori NFP pentru același articol, una pentru fiecare unitate logistică.

Calculul efectuat, conform teoriei, este următorul:

*NFP = On-Hand + On Order - Demand - Demand Spikes*

**On-hand**: reprezintă stocul relativ la gestiunea liniei (valoare nulă pentru fabrică)

**On order**: reprezintă cantitatea totală rămasă a ordinelor confirmate (pentru centrele de distribuție este dată de ordinele de achiziție și ordinele interne de aprovizionare, pentru fabrică este dată de ordinele de achiziție, producție, sistem lohn)

**Demand**: este dată de suma tuturor cererilor neexecutate a căror date angajament nu sunt ulterioare datei curente.

Pentru centrele de distribuție și hub-uri, cererea provine fie din ordinele clienților, fie din cele interne de aprovizionare confirmate (cele planificate nu sunt considerate). Pentru fabrică la acestea se adaugă cererea ca ordinele de producție și sistem lohn să fie confirmate și planificate, iar cererile de achiziție și facturile nedescărcate.

**Demand Spikes**: reprezintă totalul eventualelor vârfuri de cerere în perioada care pornește de *mâine* până *mâine + orizontul vârfurilor de cerere (OSH)* indicat în parametrii DDMRP.

Rezultatul calculului include și indicarea eventualei cantități de comandat; dacă rezultatul este NFP \<= zona roșie + zona galbenă, atunci este necesar să se emită un ordin pentru o cantitate egală cu zona roșie + zona galbenă + zona verde - NFP, luând în considerare eventualele excepții ale zonelor în data curentă.

Toate elementele calculului sunt memorate pentru o analiză ușoară și pentru a permite analiza datelor trecute.

Pentru fiecare zi se memorează un singur calcul (chiar dacă procedura se lansează de mai multe ori într-o zi, va fi memorat doar rezultatul ultimei execuții) iar detaliile sunt afișate în form-ul **Analiză NFP**.