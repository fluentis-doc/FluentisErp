---
title: Modifică numărul de serie
sidebar_position: 5
---

Această fereastră afișează detaliul numărului de serie și conține 4 secțiuni:

**Antet număr de serie**:

În această secțiune sunt afișate datele principale relative la numărul de serie, date care pot fi modificate:

**Articol** **: în cele 3 campuri sunt afișate clasa, codul și descrierea articolului din NS. Este vorba despre un articol cu flag ‘Gestiune NS' activat în tab Loturi/NS din registrul articolului, dacă nu, nu ar fi fost posibilă executarea încărcării NS pentru articol;

**Variante** **: în cele 2 campuri sunt afișate codul și descrierea variantei articolului la care se referă NS, dacă este prezent;

**Număr de serie** **: reprezintă codul NS. Este un câmp editabil, chiar dacă în timpul operațiilor de încărcare poate fi generat automat pe baza unor reguli care se inserează în tab ‘Coduri NS' prezent în Parametrii inițiali de gestiune. Se inserează de la început un cod și o descriere a tipului codului NS, se salvează linia și apoi se decide care parametri trebuie să fie utilizați pentru compunerea tipului codului NS tocmai creat. Pentru fiecare parametru utilizat, se poate decide din câte caractere trebuie să fie format și, eventual, și caracterul de umplere de utilizat. De exemplu, cu parametrul ‘Număr progresiv' și cu caracterul de umplere ‘0' și Lungimea 5 vor fi create NS cu primul număr 00000, apoi 00001, apoi 00002 etc. Tipul codului NS trebuie apoi să fie atașat la registrul articolului în câmpul situat în tab ‘Loturi/NS', astfel încât în procedurile care crează automat codul NS pentru articolul ales, NS însuși să fie generat pe baza regulilor inserate în tab ‘Coduri NS' din Parametri inițiali de gestiune și legate la tipul codului NS asociat articolului. Câmpul este alfanumeric și poate atinge lungimea de 50 caractere ca limită maximă;

**Cod lot** **: **reprezintă codul lotului din care face parte NS. Articolul la care se referă NS poate fi gestionat și cu loturi; de exemplu, un lot cu 100 bucăți ar putea fi compus din 100 numere de serie diferite. Același număr de serie ar putea să aparțină unor diverse loturi ale aceluiași articol, sau unor loturi cu articole diferite;

**Gestiune** **: **în cele 2 campuri sunt afișate codul și descrierea gestiunii în care a fost încărcat numărul de serie;

**Încărcat/Descărcat** **: în cele 2 campuri sunt afișate informațiile despre starea numărului de serie;

**Data **început**** **: reprezintă data în care a fost încărcat NS; poate fi modificată de utilizator. Dacă a fost încărcat prin intermediul înregistrării de gestiune, această dată este propusă egală cu data în care a fost creată înregistrarea; dacă NS a fost încărcat cu ajutorul încărcării unui aviz de achiziții sau a unei înregistrări de reintrare în sistem lohn, această dată este setată ca fiind egală cu data avizului de achiziții sau SL (dacă în aviz utilizatorul nu a modificat-o manual); dacă NS a fost încărcat cu ajutorul înregistrării unei semnalări de producție, această dată este propusă ca fiind egală cu data semnalării de producție;

**Data sfârșit** **: **reprezintă data pentru scadența NS, poate fi modificată de utilizator, este calculată în momentul creării NS și deci al încărcării relativei mișcări de gestiune, pornind de la data început și însumând zilele de valabilitate ale NS, inserate în tab Loturi/NS din registrul articolului;

**Încărcare înreg. gest.** **: reprezintă înregistrarea de gestiune care a încărcat NS.

**Documente de încărcare** ****:

În această secțiune sunt afișate datele fundamentale ale documentelor car au contribuit la încărcarea NS. În general apare detaliul Înregistrării de gestiune care a încărcat NS; dacă aceasta a fost generată cu încărcarea unui document (aviz, reintrare, etc.), atunci apare o linie în care sunt detaliile și pentru acest document. Aceste date sunt afișate într-un grid în care apar următoarele coloane:

**Document** **: reprezintă tipul documentului care a generat încărcarea NS. Aceasta poate fi o înregistrare de gestiune, un aviz de achiziție sau o reintrare în sistem lohn;

**Număr** **: **reprezintă numărul documentului;

**Data** **: reprezintă data documentului;

Cu dublu clic pe linia documentului este posibil, în acord cu drepturile pe care le are utilizatorul, să se deschidă pentru vizualizare documentul relativ.

**Cantitate și d**ocument pentru descărcare** lot** ****:

În această secțiune sunt afișate datele fundamentale ale primului document, în ordine cronologică, care a utilizat numărul de serie. Dacă NS a fost descărcat direct cu o înregistrare de gestiune, atunci atunci, în acest grid nu apare nimic, pentru că înregistrarea de descărcare a NS apare întodeauna în secțiunea 4:

**Tip d**ocument** **: **reprezintă tipul documentului care este primul care a utilizat NS. Acesta poate fi un ordin de producție, un ordin client, un aviz de vânzare, o factură de vânzare, o listă de ieșiri, un aviz de livrare în sistem lohn, o reintrare în SL;

**Număr** **: reprezintă numărul documentului;

**Data** **: reprezintă data documentului;

Cu dublu clic pe linia documentului este posibil, în acord cu drepturile pe care le are utilizatorul, să se deschidă pentru vizualizare documentul relativ.

****Documente de descărcare**** ****:

În această secțiune sunt afișate datele fundamentale ale înregistrării de gestiune care a descărcat NS și a altor documente în care a fost utilizat NS , în relație cu documentul selectat în gridul din secțiunea 3. Aceste date sunt afișate într-un grid în care sunt următoarele coloane:

**Document** **: reprezintă tipul documentului în care se află NS, în relație cu documentul selectat în gridul din secțiunea 3. Acesta poate fi un aviz de vânzare, o factură de vânzare, o listă de ieșiri, un aviz de livrare în sistem lohn, o reintrare în SL;

**Număr** **: reprezintă numărul documentului;

**Data** **: reprezintă data documentului;

Cu dublu clic pe linia documentului este posibil, în acord cu drepturile pe care le are utilizatorul, să se deschidă pentru vizualizare documentul relativ.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Buton pentru salvarea modificărilor făcute numărului de serie |






