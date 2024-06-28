---
title: Modifică lot
sidebar_position: 4
---

Această fereastră afișează detaliul lotului și conține 4 secțiuni:

**Antet lot**:

În această secțiune sunt afișate datele principale relative la lot, date care pot fi modificate:

**Articol** ****: în cele 3 campuri sunt afișate clasa, codul și descrierea articolului din lot. Este vorba despre un articol cu flag ‘Gestiune loturi' activat în tab Loturi/NS din registrul articolului, dacă nu, nu ar fi fost posibilă executarea încărcării lotului pentru articol;

**Variantă** **: în cele 2 campuri sunt afișate codul și descrierea variantei articolului din lot, dacă este prezent;

**Lot nr.** ****: reprezintă codul lotului. Este un câmp editabil, chiar dacă în timpul operațiilor de încărcare poate fi generat automat pe baza unor reguli care se inserează în tab ‘Coduri lot' prezent în Parametrii inițiali de gestiune. Se inserează de la început un cod și o descriere a tipului codului lotului, se salvează linia și apoi se decide care parametri trebuie să fie utilizați pentru compunerea tipului codului lotului tocmai creat. Pentru fiecare parametru utilizat, se poate decide din câte caractere trebuie să fie format și, eventual, și caracterul de umplere de utilizat. De exemplu, cu parametrul ‘Număr progresiv' și cu caracterul de umplere ‘0' și Lungimea 5 vor fi create loturi cu primul număr 00000, apoi 00001, apoi 00002 etc. Tipul codului lotului trebuie apoi să fie atașat la registrul articolului în câmpul situat în tab ‘Loturi/NS', astfel încât în procedurile care crează automat codul lotului pentru articolul ales, lotul însuși să fie generat pe baza regulilor inserate în tab ‘Coduri lot' din Parametri inițiali de gestiune și legate la tipul codului lotului asociat articolului. Câmpul este alfanumeric și poate atinge lungimea de 50 caractere ca limită maximă. Nu este vorba despre identificativul lotului, pentru că se pot efectua mai multe încărcări în diferite momente, pentru același lot; în acest caz ar apărea mai multe linii cu același Cod lot în gridul Caută loturi;

**Lot furnizor** ****: este numele pe care furnizorul îl atribuie lotului. Este un câmp editabil și nu se generează automat în timpul operațiilor de încărcare. Și acesta poate atinge lungimea de 50 caractere ca limită maximă și poate fi identic și pentru loturile diferite pentru articole diferite;

**Data început valabilitate** ****: reprezintă data în care a fost încărcat lotul; poate fi modificată de utilizator. Dacă a fost încărcat prin intermediul înregistrării de gestiune, această dată este propusă egală cu data în care a fost creată înregistrarea; dacă lotul a fost încărcat cu ajutorul încărcării unui aviz de achiziții sau a unei înregistrări de reintrare în sistem lohn, această dată este setată ca fiind egală cu data avizului de achiziții sau SL (dacă în aviz utilizatorul nu a modificat-o manual); dacă lotul a fost încărcat cu ajutorul înregistrării unei semnalări de producție, această dată este propusă ca fiind egală cu data semnalării de producție;

**Data scadență** **: reprezintă data pentru scadența lotului, poate fi modificată de utilizator, este calculată în momentul creării lotului și deci al încărcării relativei mișcări de gestiune, pornind de la data început și însumând zilele de valabilitate ale lotului, inserate în tab Loturi/NS din registrul articolului;

**Cantitate** **: reprezintă cantitatea inițială încărcată pentru lot cu ajutorul primului document care a încărcat lotul;

**Gestiune** **: **în cele 2 campuri sunt afișate codul și descrierea gestiunii în care a fost încărcat lotul;

**Com/An** **: reprezintă comanda de vânzare asociată lotului; poate fi modificată de utilizator. De obicei este comanda de vânzare atașată la linia articolului care a fot încărcată și care a încărcat lotul însuși;

**Note** **: **reprezintă notele inserate în înregistrarea de gestiune, simultan cu încărcarea lotului. Este un câmp editabil și se poate vizualiza și în Caută loturi;

**Închis** ****: dacă este activ, indică faptul că lotul a fost complet descărcat din gestiune. Menționăm că după închiderea de gestiune, toate loturile rămase ale anului care se închide, sunt automat setate ca fiind ‘Închise', pentru că sunt reîncărcate în stocul inițial al noului an, loturile identice, cu cantitățile rămase la sfârșitul anul precedent închiderii;

**Stare lot** **: este opțional, afișează statusul lotului. Se poate modifica și apelează datele care provin din tabelelul ‘Stări lot'. Starea lotului determină posibilitatea de a utiliza sau nu lotul în documentele de vânzare, de producție și în înregistrările de descărcare de gestiune.

**Evaluare lot** **: este opțional, afișează data relativă la evaluarea lotului. Se poate modifica și apelează datele care provin din tabelelul ‘Evaluare lot'. Această informație este o simplă descriere, nu are o influență particulară în proceduri și în ferestrele  aplicației;

**L. Vânz** **.**: dacă este activ, arată că lotul este disponibil pentru a fi inserat în documentele de vânzare, producție sau în înregistrările de gestiune. Este o posibilitate pe care o are utilizatorul pentru a defini posibilitatea de a extrage sau nu un lot, opțiune alternativă la gestionarea stărilor lotului;

**Documente de încărcare** ****:

În această secțiune sunt afișate datele fundamentale ale documentelor care au contribuit la încărcarea lotului. În general apare detaliul Înregistrării de gestiune care a încărcat lotul; dacă aceasta a fost generată cu încărcarea unui document (aviz, reintrare, etc.), atunci apare o linie în care sunt detaliile și pentru acest document. Aceste date sunt afișate într-un grid în care apar următoarele coloane:

**Document** ****: reprezintă tipul documentului care a generat încărcarea lotului. Aceasta poate fi o înregistrare de gestiune, un aviz de achiziție sau o reintrare în sistem lohn;

**Număr** **: **reprezintă numărul documentului;

**Data** **: reprezintă data documentului;

Cu dublu clic pe linia documentului este posibil, în acord cu drepturile pe care le are utilizatorul, să se deschidă pentru vizualizare documentul relativ.

**Cantitate și document pentru descărcare lot** ****:

În această secțiune sunt afișate datele fundamentale ale primului document, în ordine cronologică, care a utilizat lotul. Dacă lotul a fost descărcat direct cu o înregistrare de gestiune, atunci, în acest grid nu apare nimic, pentru că înregistrarea de descărcare a lotului apare întodeauna în secțiunea 4:

****Cantitate**: reprezintă cantitatea lotului care a fost utilizat în document;

**Document** **: reprezintă tipul documentului care este primul care a utilizat lotul. Acesta poate fi un ordin de producție, o factură de vânzare, o listă de ieșiri, un aviz de livrare în sistem lohn, o reintrare în SL;

**Număr** **: reprezintă numărul documentului;

**Data** ****: reprezintă data documentului;

Cu dublu clic pe linia documentului este posibil, în acord cu drepturile pe care le are utilizatorul, să se deschidă pentru vizualizare documentul relativ.

**Documente de descărcare** ****:

În această secțiune sunt afișate datele fundamentale ale înregistrării de gestiune care a descărcat lotul și a altor documente în care a fost utilizat lotul, în relație cu documentul selectat în gridul din secțiunea 3. Aceste date sunt afișate într-un grid în care sunt următoarele coloane:

**Document** **: reprezintă tipul documentului în care se află lotul, în relație cu documentul selectat în gridul din secțiunea 3. Acesta poate fi un aviz de vânzare, o factură de vânzare, o listă de ieșiri, un aviz de livrare în sistem lohn, o reintrare în SL;

**Număr** **: reprezintă numărul documentului;

**Data** **: reprezintă data documentului;

Cu dublu clic pe linia documentului este posibil, în acord cu drepturile pe care le are utilizatorul, să se deschidă pentru vizualizare documentul relativ.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Buton pentru salvarea modificărilor făcute lotului. |
| Vizualizează atribute lot | Butonul deschide o altă fereastră în care utilizatorul poate atribui lotului o serie de atribute care provin din tabelele codificatorului. |






