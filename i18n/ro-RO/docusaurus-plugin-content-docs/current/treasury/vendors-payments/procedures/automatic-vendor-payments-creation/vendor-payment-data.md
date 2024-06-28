---
title: Date plăți furnizor
sidebar_position: 2
---

În al doilea tab ‘parametri' se inserează diversele elemente pentru gestionarea procedurii: înainte de toate se inserează banca de referință, care va fi banca din listă. Este vorba despre un cod asociat unui registru bănci, cu scopul de a prelua din acesta câmpul contului curent și de a avea toate datele de inserat la expedierea telematică a transferurilor.

Flag-ul **Utilizează banca de plată din angajamentului furnizorului, dacă nu a fost inserată în registru** va impune procedurii să creeze un număr de liste egal cu numărul de bănci atribuite diverselor angajamente selectate în procedura pentru gestionarea suportului plății sau inserate în registrul furnizorului. În absența ambelor, plata va fi inserată în listă pentru codul băncii inserat în câmpul inițial.

Flag-ul **Utilizează banca principală din registrul furnizorului** forțează atribuirea codurilor bancare ale beneficiarului, citindu-le din linia băncii implicite inserate în secțiunea bănci principale în tabul Plăți din registrul furnizorului. Acest flag poate fi predefinit în parametrii modulului.

**Tipul plății** permite definirea tipului de plată care va fi atribuit listei: câmpul devine obligatoriu doar când  angajamentele de plată prevăd tipurile de plată neuniforme.

**Anul** și **data emiterii** sunt definite implicit pe baza datei sistemului.

Flag-ul **Inserează data valutei beneficiarului** permite atribuirea, în directorul telematic, a unei date pentru beneficiarul plății, care, dacă nu este inserată, este considerată egală cu data curentă. Dacă flag-ul nu este setat, data valutei va fi egală cu data scadenței.

Câmpul **note inițiale** este un câmp liber pentru notele plății, neutilizat în standard.

Câmpul** note finale** este utilizat la contabilizarea plăților pentru descrierea detaliată a mișcării contabile a contului analitic al băncii.

Flag-ul **Contabilizare angajament** permite înregistrarea directă a închiderii angajamentelor și a relativelor mișcări în partidă dublă a plăților; dacă nu este activat va fi posibilă apoi folosirea procedurii separate de contabilizare. Parametrii acestei contabilizări sunt: șablonul contabil care va fi utilizat pentru înregistrare; data înregistrării și a plății, contul analitic pentru înregistrarea diferențelor inserate în listă (acest cont analitic este propus pe baza contului analitic ‘Venituri în afara exploatării' inserat în parametrii contabili), data și numărul documentului care vor fi inserate ca referință în antetul înregistrării (ar putea fi numărul/data listei).

În partea dreaptă este prezent un flag activ implicit pentru înregistrarea închiderii angajamentului (nu trebuie dezactivat) și criteriul de grupare în contabilitate: opțiunea implicită “Grupează bănci” permite realizarea unei înregistrări pentru fiecare cont analitic bancă, care este metoda cea mai simplă pentru reconcilierea mișcărilor bancare din rapoartele extraselor de cont. Celelalte două opțiuni sunt: grupare după contul analitic al furnizorului și gruparea detaliată pe fiecare plată.

Dacă șablonul contabil prevede gestionarea datei valutei băncii și în registrul băncii a fost inserat un număr de zile pentru calcularea sa în relație cu șablonul contabil utilizat, câmpul va fi gestionat automat în înregistrarea rezultată.

RIBBON BAR: Reprezintă meniul Forum-ului în discuţie, mai precis aria în care se pot efectua acţiuni asociate la procedura utilizată. Prezentăm în continuare lista cu funcţionalităţile posibile:



| Functie | Functionalitate |
| --- | --- |
| Începe crearea plății din angajamente | Buton pentru crearea plății/listei și a contabilizării plății, dacă acest lucru este prevăzut. Butonul este activ dacă ați selectat cel puțin un angajament în primul tab și după ce ați inserat banca pentru plată în prezentul tab. |






