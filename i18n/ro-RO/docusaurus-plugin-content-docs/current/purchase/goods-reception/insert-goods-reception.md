---
title: Inserare recepţie mărfuri
sidebar_position: 3
---

Informaţiile necesare pentru inserarea unei noi recepţii mărfuri sunt:

- furnizorul, cu ajutorul help-ului sau manual,

- data propusă este egală cu data curentă,

- numărul propus este ultimul număr progresiv util,

-  tipul recepţiei mărfurilor.

**Tipul de articole** care poate fi inserat în recepţii mărfuri este doar de articole codificate în registru şi pot fi inserate manual sau din import din barcode sau din ordine furnizori.

**Cod**: se referă la "cod articol barcode" inserat în Articole, tab "Cod barcode". În momentul inserării, programul va prelua automat articolul asociat, cu toate datele registrului său. Inserarea clasei sau matricolei se poate realiza manual sau cu ajutorul "Help Articole" (dublu clic pe banda galbena) care va propune toate datele relative inserate in registrul articole. Dupa ce ati inserat articolul, descrierea lui va fi preluata automat din registru. Daca articolul are variante, trebuie sa selectati varianta corespunzatoare din combobox Variante.

**Variante**: se referă la variantele articolului selectat, dacă există. Alegerea variantei este utilă pentru articolele cu această configurare particulară, care pot avea un preţ diferit de cel standard inserat. Ca urmare, preţul articolului cu variante poate fi diferit de preţul articolului fără variante. Acest lucru poate cere, eventual, gestionarea variantelor articolului în oferta de vânzare de referinţă.

**Articol furnizor**: se referă la tabelul articole furnizor; articolul poate fi selectat manual sau cu ajutorul helpului.

**Variantă articol furnizor**: se referă la tabelul variante articole furnizor; varianta poate fi selectată manual sau cu ajutorul helpului.

**Unitate de măsură**: este propusa U.M. principală a articolului, dar utilizatorul are posibilitatea să aleagă o unitate de măsură alternativă.

**Cantitate document**: este cantitatea U.M. principală; este inserată cantitatea din ordinul furnizor executat; nu este o informaţie obligatorie.

**Cantitate primită**: reprezintă cantitatea efectiv primită.

**Unitate de măsură alternativă**: este propusa U.M. prezenta in gestiunea U.M. alternative din registrul articolului care are flag-ul "implicit".

**Cantitate alternativă**: este propusa valoarea relativa la U.M. alternativa, calculata prin multiplicarea sau divizarea cantitatii gestionale (relativa la U.M. principala) cu factorul de conversie inserat in registru.

**Preţ**: este preţul prezent în ordinul furnizor sau costul ultim din registrul articole.

**Opţiune**: informaţia, obligatorie, corespunde tabelului opţiuni din lista componentelor.

**Gestiune şi şablon**: reprezintă gestiunea şi şablonul recepţiei mărfurilor; sunt preluate din ordin furnizor dacă linia recepţiei a executat o linie ordin furnizor sau poate fi inserată manual de utilizator.

**Descriere articol**: este descrierea articolului şi nu poate fi modificată.

**Referinţă ordin**: reprezintă numărul ordinului executat dacă linia a fost creată executând o linie ordin furnizor.

**Locaţie**: dacă şablonul are o locaţie implicită este propusă locaţia; poate fi inserată manual dacă gestiunea este gestionată pe locaţii.

**Comanda**: fiecărei linii recepţie i se poate asocia o comandă de vânzare.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Buton pentru salvarea recepţiei. |
| Articol nou | Buton pentru inserearea unui articol nou. |
| Şterge articole | Buton pentru ştergerea articolelor selectate. |
| Proprietate articol | Dacă linia articol a executat o linie ordin furnizor, cu ajutorul acestei funcţiuni pot fi afişate datele ordinului furnizor de referinţă şi rezumatul datelor liniei articol. |
| Din ordin furnizor | Procedura permite crearea liniilor recepţiei executând ordinele furnizor. |
| Import din barcode | Procedura permite importarea liniilor articol dintr-un tabel configurat în parametri. |






