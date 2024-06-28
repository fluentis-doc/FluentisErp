---
title: Substoc
sidebar_position: 5
---

În această fereastră pot fi filtrate liniile articolelor gestionate pe stoc și care vor fi analizate de procedura definire MPS. Pentru ca articolul să fie afișat în acest grid trebuie să aibă, în parametri săi MRP, tipul de gestiune 'Pe stoc'.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie în partea aferentă fiecărei ferestre din aria in care se lucreaza. Lista functionalitatiilor contine:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru căutarea în baza de date a articolelor, pe baza filtrelor inserate. |
| Consideră pe comenzi | Buton pentru mutarea liniilor selectate în gridul tab-ului Rezumat. |

ARIA DE FILTRE: conţine lista cu posibilele tipuri de date cu ajutorul cărora se poate efectua o selecţie/căutare în totalul articolelor care corespund criteriilor de selecție inserate. În general, filtrele sunt în condiţie “AND” şi există posibilitatea inserării simultane a mai multor criterii de filtrare.

În această arie este prezent combo box-ul pentru tipul comenzii de producție, care permite utilizatorului să decidă tipul comenzii de producție de generat. De asemenea, este prezent un câmp în care utilizatorul poate insera data până la care nu dorește ca articolele din grid să ajungă substoc.

GRID REZULTATE: reprezintă lista cu liniile care corespund datelor din filtrele indicate anterior. Utilizatorul, după ce a inserat valorile cu ajutorul cărora doreşte să caute articolele, dacă apasă butonul [Caută ] prezent în ribbon, va obţine în gridul rezultatelor lista cu liniile dorite.

Dintre datele care vor fi afișate amintim:

- moment de lansare comandă, stocul minim și zilele pentru a ordona iar (date preluate din tab aprovizionare, din registrul articolului);

- consum mediu zilnic (informație calculată scăzând stocul minim din momentul de lansare al comenzii și împărțind rezultatul obținut la zilele pentru ordonare);

- disponibilitate început (reprezintă disponibilitatea articolului în ziua în care se lansează elaborarea);

- disponibilitate finală (reprezintă disponibilitatea articolului în ziua indicată în câmpul 'Sub momentul de lansare comandă în data');

- disponibilitate minimă (reprezintă disponibilitatea minimă pe care articolul o are în intervalul de timp care decurge între data curentă și data inserată în câmpul 'Sub momentul de lansare comandă în data');

După filtrarea liniilor articolului, utilizatorul are posibilitatea să selecteze câteva din aceste linii (sau toate) și, clicând butonul 'Consideră pe comenzi' prezent în ribbon bar, să le mute în tab rezumat, de unde apoi liniile vor putea fi examinate de procedura pentru generarea comenzilor de producție. Doar liniile pentru care procedura consideră că trebuie să fie create comenzile de producție vor fi transferate în tab Rezumat. Procedura propune, pentru fiecare articol, o comandă de producție care permite utilizatorului ca, în ziua în care articolul riscă să coboare sub nivelul stocului minim, să fie completat cu o comandă de producție care are data identică cu data substocului. Cantitatea acestei comenzi de producție va trebui să pemită continuitate până la data inserată în 'Sub momentul de lansare comandă' din aria de filtre; evident, dacă articolul prezintă loturi economice de producție sau de achiziție și multipli, acestea vor fi considerate de procedură.






