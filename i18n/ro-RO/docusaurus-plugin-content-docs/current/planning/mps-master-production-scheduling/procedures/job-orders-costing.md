---
title: Calculare comandă
sidebar_position: 2
---

Această fereastră se deschide urmănd calea Planificare > MPS > Proceduri > Calculare cost. Această fereastră permite căutarea Calculelor create anterior sau crearea altora noi.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferente fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor conține:



| Functie | Functionalitate |
| --- | --- |
| Caută | Buton pentru căutarea în baza de date a calculelor deja inserate. |
| Inserează calcul cost | Apelează procedura pentru inserarea unui nou calcul. |
| Deschide calcul cost | Apelează procedura pentru modificarea unui calcul de cost inserat anterior. |
| Șterge calcul cost | Apelează procedura pentru ștergerea unui calcul de cost inserat anterior. |

ARIA DE FILTRU: conține lista cu posibilele tipuri de date cu ajutorul cărora se poate face selecția și căutarea calculelor inserate. Filtrele sunt în condiție 'AND' și pot fi specificate mai multe filtre simultane.

Utilizatorul poate folosi următoarele filtre:

**Tip com** **.**: în acest combo se poate insera tipul comenzii de producție pentru a filtra și afișa toate comenzile de producție pentru tipul selectat;

**De la număr ….. La număr**: în aceste câmpuri se pot căuta comenzile inserând un interval de numerotare;

**De la an ….. La an** **: în aceste câmpuri se pot căuta comenzile inserând un interval de timp, considerând anul creării comenzii;

**Articol**: în primul combo se poate insera clasa articolului; cu dublu clic în al doilea și în al treilea câmp se deschide helpul articolelor, util pentru selectarea articolului după care utilizatorul dorește să filtreze comenzile de producție;

**Variantă**: în acest combo se poate selecta varianta articolului;

**Tip comandă**: permite filtrarea după comanda monoprodus, comanda multiprodus sau ambele;

**Ordin client**: Tip: cu ajutorul acestui combo se poate insera tipul ordinului, descrierea și numărul relativ. În acest caz vor fi afișate toate comenzile de producție legate la numărul ordinului pentru care a fost inserat filtrul;

**Comanda**:  în acest câmp, cu dublu clic, se poate deschide Help comenzi din care se selectează comanda de vânzare la care sunt legate comenzile de producție care trebuie căutate;

**Client**: în aceste 3 câmpuri sunt specificate datele relative la client: 'Cont sintetic', 'Cont analitic', 'Nume client'; cu dublu clic pe primul câmp se deschide Help conturi din care se poate selecta clientul dorit. În acest mod se caută toate comenzile de producție legate la clientul selectat;

**Prevăzut sfârşit lucrare De la data..La data**: în aceste câmpuri poate fi inserată (într-un interval) data prevăzută pentru sfârșitul lucrării (de la … la ..); se poate eventual specifica, cu ajutorul flagurilor, daca sa fie afișate comenzile întârziate și/sau scadente;

**Stare comandă**: cu ajutorul acestor flag-uri se poate filtra starea comenzii care se dorește să fie afișată (Neexaminată, Planificată, Lansată, În execuție, Executată, Arhivată);

**Dată calcul cost**: în aceste câmpuri poate fi inserată (într-un interval) data la care a fost executat calculul costului (de la … la ..).

GRID REZULTATE: în acest grid este afișată lista cu datele care corespund filtrelor inserate anterior. Utilizatorul, după ce a inserat valorile în filtre și a apăsat butonul de căutare din ribbon, va obține în gridul rezultatelor lista cu calculele dorite.

Coloanele afișate în grid sunt:

**An**: coloana afișează anul comenzii de producție;

**Comandă lucrare**: coloana afișează numărul comenzii de vânzare asociată la comanda de producție;

**Stare comandă**: coloana afișează starea comenzii de producție (Neexaminată, Planificată, Lansată, În execuție, Executată, Arhivată);

**Dată calcul cost**: coloana afișează data la care a fost efectuat calculul costului;

**Dată prevăzută început/sfârșit lucrare**: coloana afișează datele prevăzute pentru începutul și sfârșitul lucrării comenzii de producție;

**Client**: coloana afișează contul sintetic și analitic al clientului asociat la linia comenzii de producție;

**Comandă**: coloana afișează eventuala comandă de vânzare asociată la linia comenzii de producție;

**Descriere client**: coloana afișează numele clientului asociat la linia comenzii de producție;

**Cod tip comandă**: coloana afișează codul tipului comenzii de producție;

****Descriere **tip comandă******: coloana afișează descrierea tipului comenzii de producție.






