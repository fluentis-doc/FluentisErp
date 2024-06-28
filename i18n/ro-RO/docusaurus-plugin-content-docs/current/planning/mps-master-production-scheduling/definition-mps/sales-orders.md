---
title: Ordine clienți
sidebar_position: 3
---

Cu ajutorul acestei ferestre se pot filtra liniile ordinului client care vor fi analizate de procedura Definire MPS. Liniile ordinului care pot fi afișate în acest tab trebuie să răspundă următoarelor cerințe:

- articolul liniei ordinului client trebuie să aibă flag-ul 'Comenzi' activat în 'Parametrii MRP';

- linia nu trebuie să fi fost executată cu ajutorul dispoziției de livrare/a avizului de vânzare/a facturii de vânzare;

- linia nu trebuie să fie pusă 'Forțat executată';

- linia trebuie să fie în starea 'Neexecutată' sau 'Parțial executată';

- din linie nu trebuie să fi fost încă generate comenzile de producție;

- linia trebuie să aibă data mărfii pregătite inserate în tab Articoli din ordinul client din care provine;

- ordinul client din care provine linia trebuie să fie 'Listat' și 'Confirmat';

Dacă una din aceste condiții nu este îndeplinită, linia oridinului client nu va fi afișată în grid.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie în partea aferentă fiecărei ferestre din aria in care se lucreaza. Lista functionalitatiilor contine:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru căutarea în baza de date a liniilor ordinului client. |
| Consideră pentru comenzi | Apelează procedura pentru a muta liniile ordinului client selectate în gridul tabului 'Rezumat'. |
| Generare flux | Apelează procedura pentru generarea fluxului de producție pe baza parametrilor inserați în 'Parametrii MPS'. |
| Modifică filtru atribute | Apelează procedura pentru vizualizarea sau nu a filtrului atribute. Dacă acest buton este activat și cele 2 flaguri prezente în fereastra pop up care apare automat, se poate utiliza filtrul pe Atribute, deci utilizând datele care provin din tabelele 'Codificatorului'. Pentru fiecare tabel se poate insera unul sau mai multe filtre. În acest grid sunt afișate, în cazul utilizării filtrului atribute, datele prezente în fereastra atributelor care se activează cu relativul buton prezent în tab Articole din ordinul client. |

ARIA DE FILTRE: conţine lista cu posibilele tipuri de date cu ajutorul cărora se poate efectua o selecţie sau o căutare în totalul liniilor inserate. În general, filtrele sunt în condiţie “AND” şi există posibilitatea inserării simultane a mai multor criterii de filtrare.

GRID REZULTATE: reprezintă lista cu liniile ordinului client care corespund datelor din filtrele indicate anterior. Utilizatorul, după ce a inserat valorile cu ajutorul cărora doreşte să caute înregistrările, dacă apasă butonul [Caută] prezent în Ribbon, va obţine în gridul rezultatelor lista cu liniile dorite.

Observație: coloana 'Disponibilitate' va fi egală cu zero pentru toate liniile în cazul în care flag-ul 'Consideră disponibilitatea articolului' prezent în tab Parametrii este dezactivat. Evident, în cazul în care flag-ul este activat, procedura de căutare a liniilor ordinelor cere un timp de așteptare un pic mai lung pentru că, în acel moment, sistemul execută 'run time' calculul disponibilității fiecărui articol afișat în grid pe baza filtrelor de căutare inserate.

După filtrarea liniilor de ordin dorite, utilizatorul are posibilitatea să selecteze câteva linii (sau toate) și, clicând pe butonul 'Consideră pe comenzi' prezent în ribbon bar, să le mute în Rezumat, de unde apoi liniile vor putea fi examinate de procedura de generare a comenzilor de producție.

O altă posibilitate este utilizarea, după selectarea unei sau mai multor linii de ordin client, a butonului 'Generare flux', care se abilitează doar în cazul în care în parametrii MPS a fost activat flag-ul 'Generare automată flux de producție'. Cu acest buton se poate lansa direct executarea fluxului de producție complet după crearea comenzilor de producție, care vor fi apoi planificate imediat și, pe baza flagurilor succesive, vor fi eventual generate ordinele planificate, ordinele de producție și semnalările de producție.






