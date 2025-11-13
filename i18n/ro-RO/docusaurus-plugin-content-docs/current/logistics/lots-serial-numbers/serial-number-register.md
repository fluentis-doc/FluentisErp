---
title: Registru număr serial
sidebar_position: 8
description: Ghid pentru gestionarea Registruluinumărului serial, o funcționalitate esențială a aplicației Fluentis ERP pentru trasabilitatea articolelor. 
schema: TechArticle
tags:
    - numere seriale
    - gestiuni
keywords:
    - numere seriale
    - gestiuni
    - gestionare articole
    - trasabilitate
    - Fluentis ERP
---

# Registru număr serial 

:::important
Registrul numărului serial din Fluentis ERP este esențial pentru gestionarea detaliată a numerelor de serie, permițând companiilor să urmărească articolele individuale, cu ajutorul unui cod unic de identificare.  
Această funcționalitate răspunde cerințelor specifice de trasabilitate și siguranță, fiind deosebit de importantă pentru articole critice sau de mare valoare, unde este esențial să fie monitorizat fiecare element individual și nu doar o cantitate totală.

Utilizatorul are posibilitatea de a căuta un **număr serial** specific și de a-i vizualiza detaliile cu un simplu dublu clic.  
În această secțiune, pot fi modificate **codul clientului**, **codul furnizorului**, și **starea numărului serial**, care poate fi **anulat**, **închis forțat** sau **rezervat**.

De asemenea, registrul oferă detalii despre documentele de **încărcare și descărcare** asociate cu **numărul serial**, permițând o analiză completă a utilizării sale în timp.  
Abordarea sistematică a gestionării numerelor de serie nu doar optimizează procesele interne, ci asigură și conformitatea cu reglementările în vigoare, făcând din acest registru un instrument indispensabil pentru companiile moderne care doresc să maximizeze eficiența operațională și calitatea serviciului.
:::

## Antet registru număr serial

În această secțiune sunt afișate, cu posibilitatea de modificare a unora dintre ele, datele principale referitoare la lot, în special:

- **Articol**: în cele 3 câmpuri corespunzătoare sunt afișate clasa, codul și descrierea articolului la care se referă **numărul serial**. Este vorba despre un articol cu opțiunea *Gestionare SN* activată în *registrul articol* > tab *Loturi/SN*, altfel nu ar fi fost posibilă încărcarea lotului pentru acel articol;

- **Variantă**: în cele 2 câmpuri sunt afișate codul și descrierea variantei articolului la care se referă **numărul serial**, dacă există;

- **Cod lot**: reprezintă codul lotului din care face parte **numărul serial**. Articolul la care se referă **numărul serial** poate fi gestionat și pe loturi; astfel, de exemplu, un lot de 100 de bucăți ar putea fi compus din 100 de **număre seriale** diferite. Același **număr serial** ar putea, de asemenea, aparține unor loturi diferite ale aceluiași articol sau ale unor articole diferite;

- **Tip lot**: indică tipul de lot utilizat;

- **Tip cod lot**: indică tipul de cod de lot cu care a fost generat lotul;

- **Cod număr serial**: reprezintă codul **numărului serial**. Este un câmp editabil, deși în timpul operațiunilor de **încărcare** poate fi generat automat în baza anumitor reguli setate în *Tip numere seriale* asociat articolului.  

*Procedura*
Se introduce mai întâi un *cod* și o *descriere* pentru *Tipul codului numărului serial*, se *salvează* linia și apoi se decide ce *parametri* vor fi utilizați pentru compunerea tipului de cod de lot creat.  

Pentru fiecare parametru se poate decide din câte caractere trebuie format și, eventual, ce caracter de completare să fie utilizat.  
De exemplu, cu parametrul **Număr progresiv**, setând caracterul de completare '0' și lungimea '5', se vor crea **număre seriale** astfel: primul 00000, apoi 00001, 00002 și așa mai departe.  

*Tipul codului numărului serial* trebuie apoi asociat în **registrul articol** în câmpul corespunzător din tab-ul *Loturi/SerialNumber*, astfel încât în procedurile care generează automat codul **numărului serial** pentru articolul respectiv, numărul de serie să fie creat conform regulilor setate.  

Câmpul este alfanumeric și poate avea o lungime maximă de 50 de caractere;  

- **Tip numere seriale**: indică tipul codului **numărului serial** cu care a fost generat numărul de serie;  

- **Data început**: reprezintă, de obicei, data la care a fost încărcat **numărul serial**, editabilă. Dacă **numărul serial** a fost încărcat printr-o **înregistrare de gestiune**, data propusă este aceeași cu data înregistrării; dacă a fost încărcat printr-un **Aviz de achiziție** sau un **reintrare în sistem lohn**, data este setată ca fiind egală cu cea a avizului respectiv (cu excepția cazului în care utilizatorul a modificat-o manual); dacă a fost încărcat printr-o **înregistrare de producție**, data propusă este aceeași cu data înregistrării de producție;

- **Data scadență**: reprezintă data de expirare a **numărului serial**, editabilă de către utilizator, calculată la crearea lotului prin adunarea zilelor de valabilitate setate în tab-ul *Loturi/SN* a  **Registrul articol**;

- **Cod client**: reprezintă codul *Lotului client*, deci numele pe care clientul îl atribuie lotului. Este un câmp editabil, care nu poate fi generat automat în timpul operațiunilor de încărcare. Poate avea maxim 50 de caractere și poate fi identic pentru loturi diferite ale unor articole diferite;

- **Cod furnizor**: reprezintă codul *Lotului furnizor*, deci numele pe care furnizorul îl atribuie lotului. Este un câmp editabil, care nu poate fi generat automat în timpul operațiunilor de încărcare. Poate avea maxim 50 de caractere și poate fi identic pentru loturi diferite ale unor articole diferite;

- **Furnizor**: reprezintă contul sintetic/analitic/descrierea furnizorului;

- **Anulat**: dacă este activ, înseamnă că numărul serial a fost anulat;

- **Închis forțat**: dacă este activ, înseamnă că numărul serial a fost închis forțat;

- **Rezervat**: dacă este activ, înseamnă că  numărul serial a fost rezervatt.
### încărcare

În această secțiune sunt afișate datele fundamentale ale documentelor care au contribuit la efectuarea **încărcării numărului serial**:

- **Cantitate**: cantitatea lotului implicată în document.  
- **Unitate de măsură**: unitatea de măsură utilizată în document.  
- **Număr colete**: indică numărul de colete.  
- **Data inserăre**: indică data inserării.  
- **Închis forțat**: indică dacă **numărul serial** a fost închis forțat, dacă este activ.  
- **Document de referință**: reprezintă tipul documentului care a generat încărcarea numărului serial. Acesta poate fi o înregistrare de gestiune, un aviz de achiziție sau o Reintrare în sistem lohn.  

- **Înregistrare**: reprezintă numărul și data documentului;  

- **Gestiune**: reprezintă codul și descrierea gestiunii în care a fost încărcat numărul serial;  

- **Locație**: reprezintă codul și descrierea locației;  

- **Șablon**: reprezintă codul și descrierea șablonului utilizate pentru crearea acelei mișcări de încărcare;  

- **Client/Furnizor**: reprezintă contul, analiticul și descrierea referitoare la client sau furnizor.

### Descărcare

În această secțiune sunt afișate datele fundamentale ale primului document, în ordine cronologică, care a implicat **numărul serial**. Datele apar într-un tabel cu următoarele coloane:

- **Cantitate**: cantitatea lotului implicată în document.  
- **Unitate de măsură**: unitatea de măsură utilizată în document.  
- **Document de referință**: reprezintă tipul documentului care a rezervat pentru prima dată numărul serial. Poate fi un ordin de producție, un ordin de client, un aviz de vânzare, o factură de vânzare, o listă de preluare, un aviz de livrare sistem lohn sau o reintrare sistem lohn.
- **Înregistrare**: reprezintă numărul și data documentului;  

- **Gestiune**: reprezintă codul și descrierea gestiunii în care a fost încărcat numărul serial;  

- **Locație**: reprezintă codul și descrierea locației;  

- **Șablon**: reprezintă codul și descrierea șablonului utilizate pentru crearea acelei mișcări de dezcărcare;  

- **Client/Furnizor**: reprezintă contul, analiticul și descrierea referitoare la client sau furnizor.

## Rezumat și detalii suplimentare

*Registrul numărului serial* din Fluentis ERP este un instrument pentru gestionarea trasabilității și siguranței articolelor.  
Pentru informații suplimentare, consultă:  
- [Registru articol](/docs/erp-home/registers/items/create-new-item)  
- [Gestiune](/docs/logistics/warehouse/warehouse-intro)
