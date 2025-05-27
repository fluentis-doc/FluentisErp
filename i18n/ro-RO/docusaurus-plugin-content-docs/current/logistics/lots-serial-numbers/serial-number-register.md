---
title: Registru număr serial
sidebar_position: 8
---

:::important Utilizare
Registrul numerelor de serie din Fluentis este un instrument esențial pentru companiile care doresc să gestioneze și să urmărească fiecare articol individual printr-un cod unic de identificare.

Această funcționalitate este deosebit de utilă în industrii în care trasabilitatea și siguranța sunt critice – cum ar fi: electronice, echipamente medicale, piese auto sau produse cu valoare ridicată.
:::

Această fereastră afișează detaliile lotului și este compusă din 4 secțiuni diferite:

### Antet număr serial

**Articol**: sunt afișate clasa, codul și descrierea articolului la care se referă numărul serial. Articolul are opțiunea *Gestionare SN* activată în *Registru articol* > tab *Loturi/SN* pentru a face posibilă încărcarea lotului articolului;  

**Variantă**: sunt afișate codul și descrierea variantei articolului la care se referă numărul serial, dacă este prezent;  

**Cod lot**: reprezintă codul lotului din care face parte numărul serial.  
Articolul la care se referă numărul serial ar putea fi gestionat și pe loturi. De exemplu, un lot de 100 de bucăți ar putea fi compus din 100 de număre seriale diferite.  
Același număr serial ar putea să aparțină unor loturi diferite ale aceluiași articol sau unor loturi ale unor articole diferite;  

**Tip lot**: indică tipul lotului utilizat;  

**Tip cod lot**: indică tipul codului de lot cu care a fost generat lotul;  

**Cod număr serial**: este un câmp editabil, deși în timpul operațiunilor de încărcare poate fi generat automat pe baza unor reguli stabilite în *Tip număr serial* asociat articolului.  
Se introduce mai întâi un cod și o descriere a *Tipului de cod număr serial*, se salvează linia și apoi se decid parametrii care vor fi utilizați pentru compunerea tipului de cod lot recent creat.  
Pentru fiecare parametru utilizat se poate decide din câte caractere trebuie să fie format și eventualul caracterul de umplere de utilizat. De exemplu, cu parametrul *Număr progresiv* setând caracterul de umplere '0' și Lungimea '5', se vor crea număre seriale cu primele numere 00000, apoi 00001, apoi 00002 și așa mai departe.  
*Tipul codului număr serial* trebuie apoi asociat în registrul articolului în câmpul corespunzător situat în tab *Loturi/Număr serial*, pentru ca, în procedurile care generează automat codul *număr serial* pentru articolul respectiv, numărul serial să fie generat conform regulilor stabilite în *tip cod număr serial* asociat articolului.  
Câmpul este alfanumeric și poate conține maxim 50 de caractere;  

**Tip număr serial**: indică tipul codului număr serial cu care a fost generat numărul serial;  

**Dată început**: reprezintă de obicei data la care a fost încărcat numărul serial și este un câmp editabil.  
- dacă numărul serial a fost încărcat prin înregistrarea de gestiune, această dată este identică cu data la care a fost creată înregistrarea;  
-dacă numărul serial a fost încărcat prin încărcarea unei aviz de achiziție sau prin înregistrarea reintrării în sistem lohn, această dată este setată egală cu data avizului de achiziție sau sistem lohn (decât dacă utilizatorul nu a modificat-o manual în aviz);  
- dacă numărul serial a fost încărcat prin înregistrarea unei semnalări de producție, această dată este propusă ca fiind identică cu data semnalării de producție;  

**Dată scadenţă**: reprezintă data de expirare a numărului serial, editabilă, care este calculată la crearea lotului și deci la încărcarea mișcării de gestiune corespunzătoare, pornind de la data de început și adunând zilele de valabilitate ale numărului serial introduse în tab *Loturi/SN* din registrul articolului;  

**Cod client**: reprezintă codul *Lotului client*, deci numele pe care clientul îl atribuie lotului. Este un câmp editabil, care nu poate fi generat automat în timpul operațiunilor de încărcare. Poate avea maxim 50 de caractere și poate fi identic pentru loturi diferite ale unor articole diferite;  

**Cod furnizor**: reprezintă codul *Lotului furnizor*, deci numele pe care furnizorul îl atribuie lotului. Este un câmp editabil, care nu poate fi generat automat în timpul operațiunilor de încărcare. Poate avea maxim 50 de caractere și poate fi identic pentru loturi diferite ale unor articole diferite;  

**Furnizor**: reprezintă contul sintetic/analitic/descrierea furnizorului;  

**Anulat**: dacă este activ, înseamnă că numărul serial a fost anulat;  

**Închis forțat**: dacă este activ, înseamnă că numărul serial a fost închis forțat;  

**Rezervat**: dacă este activ, înseamnă că  numărul serial a fost rezervat.

### Încărcare

În această secțiune sunt vizualizate datele fundamentale ale documentelor care au contribuit la efectuarea încărcării numărului serial. De obicei este afișat detaliul *Înregistrării de gestiune* care a încărcat numărul serial.  

*Cu dublu clic pe linia documentului, în funcție de drepturile utilizatorului, se poate deschide documentul corespunzător.*

**Cantitate**: reprezintă cantitatea lotului care a fost rezervată în document;  

**Unitate de măsură**: indică unitatea de măsură care a fost utilizată în document;  

**Număr colete**: indică numărul de colete;  

**Data inserăre**: indică data inserării;  

**Închis forțat**: dacă este activ, înseamnă că  numărul serial a fost închis forțat;  

**Document de referință**: reprezintă tipul documentului care a generat încărcarea numărului serial. Acesta poate fi o înregistrare de gestiune, un aviz de achiziție sau o Reintrare în sistem lohn;  

**Înregistrare**: reprezintă numărul și data documentului;  

**Gestiune**: reprezintă codul și descrierea gestiunii în care a fost încărcat numărul serial;  

**Locație**: reprezintă codul și descrierea locației;  

**Șablon**: reprezintă codul și descrierea șablonului utilizate pentru crearea acelei mișcări de încărcare;  

**Client/Furnizor**: reprezintă contul, analiticul și descrierea referitoare la client sau furnizor.

### Descărcare 

În această secțiune sunt afișate datele fundamentale ale primului document, în ordine cronologică, care a rezervat numărul serial.  

**Cantitate**: reprezintă cantitatea lotului care a fost rezervată în document;  

**Unitate de măsură**: indică unitatea de măsură care a fost utilizată în document;  

**Dată inserăre**: indică data inserării;  

**Document de referință**: reprezintă tipul documentului care a rezervat pentru prima dată numărul serial. Poate fi un ordin de producție, un ordin de client, un aviz de vânzare, o factură de vânzare, o listă de preluare, un aviz de livrare sistem lohn sau o reintrare sistem lohn;  

**Înregistrare**: reprezintă numărul și data documentului;  

**Gestiune**: reprezintă codul și descrierea gestiunii în care a fost încărcat numărul serial;  

**Locație**: reprezintă codul și descrierea locației;  

**Șablon**: reprezintă codul și descrierea șablonului utilizate pentru crearea acelei mișcări de dezcărcare;  

**Client/Furnizor**: reprezintă contul, analiticul și descrierea referitoare la client sau furnizor.  

*Cu dublu clic pe linia documentului, în funcție de drepturile utilizatorului, se poate deschide documentul corespunzător.*