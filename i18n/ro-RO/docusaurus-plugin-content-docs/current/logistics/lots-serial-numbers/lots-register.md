---
title: "Registru lot și Trasabilitate"
sidebar_position: 3
sidebar_label: "Registru lot și Trasabilitate"
description: "Ghid de utilizare pentru registrul loturilor și modulul de trasabilitate din Fluentis pentru o gestiune eficientă a produselor."
schema: "TechArticle"
tags: ["registru lot", "trasabilitate", "gestiune produse"]
keywords: ["registru lot", "trasabilitate produse", "Fluentis ERP"]
---

# Registru lot și Trasabilitate

:::important Utilizare
Registrul loturilor din Fluentis ERP reprezintă un instrument indispensabil pentru **gestionarea** precisă și detaliată a loturilor în cadrul unui sistem de **trasabilitate** a produselor. Această funcționalitate permite utilizatorilor să caute și să vizualizeze detalii specifice fiecărui lot printr-un simplu dublu clic, facilitând astfel monitorizarea și **gestionarea stocurilor**.

În cadrul registrului dedicate fiecărui lot, utilizatorii pot modifica diverse informații esențiale, precum furnizorul, codul lotului expediat de furnizor, note specifice și starea lotului. Aceasta din urmă, care poate fi actualizată cu ușurință, joacă un rol esențial în determinarea posibilității de utilizare a lotului în documentele de vânzare și în **înregistrările de gestiune**. De asemenea, sistemul permite gestionarea mai multor stări de lot, care influențează direct **disponibilitatea** operațională a lotului.

Un aspect distinctiv al registrului loturilor este secțiunea care permite vizualizarea istorică a documentelor de încărcare și descărcare asociate lotului, menținând astfel o **trasabilitate** precisă în timp. Este posibilă vizualizarea **stocului** actual împărțit pe **gestiuni**. Datorită acestor funcționalități, registrul loturilor din Fluentis simplifică gestionarea operațională și contribuie la asigurarea conformității legislative în sectoare unde trasabilitatea este esențială, precum cel alimentar și farmaceutic.
:::

## Registru lot

Formularul afișează detaliul lotului și este compus din 4 secțiuni diferite:

### Antet lot

În această secțiune sunt afișate datele principale referitoare la lot, în special:

- **Articol**: clasa, codul și descrierea articolului la care se referă lotul. Este vorba despre un articol cu flag-ul *Gestionare loturi* activat în *Registru articol* > tab *Loturi/SN*, fără de care nu ar fi fost posibilă încărcarea lotului pentru acel articol.
- **Variantă**: codul și descrierea variantei articolului la care se referă lotul, dacă există.
- **Lot**: în acest câmp apare codul lotului. Este un câmp editabil, deși în timpul operațiunilor de încărcare poate fi generat automat pe baza unor reguli definite în *Tip cod lot*. Se introduce mai întâi un cod și o descriere pentru *tipul codului lotului*, se salvează linia și apoi se stabilesc parametrii utilizați pentru compunerea *tipului de cod lot* creat. Pentru fiecare parametru se poate decide lungimea și caracterul de completare. De exemplu, cu parametrul *Număr progresiv*, setând caracterul de completare „0” și lungimea „5”, vor fi create loturi cu numerele 00000, 00001, 00002 etc. *Tipul codului lotului* trebuie apoi asociat registrului articolului în câmpul corespunzător din tabul *Loturi/Numere de serie*, astfel încât, în procedurile care creează automat codul lotului, acesta să fie generat conform regulilor stabilite. Câmpul este alfanumeric și poate avea o lungime maximă de 50 de caractere. Nu este identificatorul unic al lotului, deoarece este posibilă efectuarea mai multor încărcări în momente diferite pentru același lot; în acest caz, vor apărea mai multe rânduri cu același *Cod lot* în tabelul *Căutare loturi*.
- **Furnizor**: cont/analitic/descrierea furnizorului.
- **Producător**: reprezintă denumirea sau numele comercial al producătorului.
- **Cod furnizor**: reprezintă codul *Lotului furnizorului*, de obicei denumirea pe care furnizorul o atribuie lotului. Este un câmp editabil și nu poate fi generat automat în timpul operațiunilor de încărcare. Poate avea o lungime maximă de 50 de caractere și poate fi identic pentru loturile diferite ale unor articole diferite.
- **Tip raport etichetă**: reprezintă tipul de etichetă de imprimat pentru acest lot.
- **Dată început**: reprezintă data la care a fost încărcat lotul și este editabilă. Dacă lotul a fost încărcat printr-o **înregistrare de gestiune**, această dată este propusă identică cu cea a creării înregistrării; dacă lotul a fost încărcat printr-un aviz de achiziție sau o **înregistrare de reintrare în sistem loh**, această dată corespunde cu cea a avizului, cu excepția cazului în care utilizatorul o modifică manual. Dacă lotul a fost încărcat printr-o **înregistrarea unei semnalări de producție**, această dată este identică cu data semnalării.
- **Dată scadenţă**: data de expirare a lotului, calculată în momentul creării și încărcării mișcării de gestiune, pornind de la data de început și adăugând zilele de valabilitate ale lotului introduse în tabul *Loturi/Numere de serie* al registrului articolului.
- **Cantitate inițială**: reprezintă cantitatea inițială încărcată pentru lot cu primul document care a făcut încărcarea lotului.
- **Număr colete**: reprezintă numărul de colete ale lotului încărcat.
- **Note**: reprezintă notele introduse în **înregistrarea de gestiune** în momentul încărcării lotului. Câmpul este editabil de utilizator și vizibil și în *Căutare loturi*, așa cum s-a specificat mai sus.
- **Stare lot**: starea lotului, modificabilă și provenită din tabelul *Stări lot*.
- **Evaluare lot**: informație opțională referitoare la evaluarea lotului. Starea lotului determină posibilitatea de utilizare a acestuia în documentele de vânzare, producție și în înregistrările de descărcare din gestiune. Gestionarea nu este obligatorie, utilizatorul nefiind constrâns să folosească tabelul *Stări lot*.
- **Lot vandabil**: dacă este activat, indică faptul că lotul este disponibil pentru a fi prelevat în documentele de vânzare, producție sau **înregistrări de gestiune**. Este o alternativă mai simplă la gestionarea complexă a stărilor lotului.
- **Închis**: dacă este activat, cantitatea acelui lot nu va fi luată în considerare la calculul **stocului** și al **disponibilității**. Poate fi activat doar manual.

### Încărcare

În această secțiune sunt afișate datele esențiale ale documentelor care au contribuit la efectuarea încărcării lotului. În general, apare detaliul **înregistrării de gestiune** care a încărcat lotul; dacă aceasta a fost generată prin încărcarea unui document (aviz, reintrare, etc.), apare un rând suplimentar cu detaliile acelui document.

*Cu dublu clic pe rândul documentului, este posibil, în funcție de drepturile utilizatorului, să se deschidă documentul pentru vizualizare.*

- **Cantitate**: cantitatea lotului angajată în document.
- **Unitate de măsură**: unitatea de măsură folosită în document.
- **Închis forțat**: flag pentru semnalarea închiderii forțate a lotului.
- **Document de referință**: tipul documentului care a generat încărcarea.
- **Număr**: numărul documentului.
- **Gestiune**: reprezintă codul și descrierea *gestiunii* în care a fost încărcat lotul.
- **Locație**: reprezintă codul și descrierea locației.
- **Șablon**: reprezintă codul și descrierea *șablonului* utilizat pentru crearea mișcării de încărcare.
- **Client/Furnizor**: cont sintetic, analitic și descriere referitoare la client sau furnizor.
- **Proiect**: reprezintă comandă de vânzare asociată lotului; este un câmp editabil.

### Alte documente de încărcare

În această secțiune sunt afișate datele esențiale ale altor eventuale documente în care lotul a fost implicat, în relație cu documentul selectat în tabelul superior.  
Rândurile sunt afișate atunci când o *mișcare de lot* este moștenită dintr-un alt document, adică atunci când mai multe documente fac referire la aceleași rânduri de mișcare de lot.  
*Exemplu*: mișcările de lot ale avizelor de livrare de achiziție pot fi moștenite de facturile de achiziție.  

În primul tabel sunt afișate rândurile principale (sursă) ale *mișcărilor de lot* provenite din documente, în timp ce în al doilea tabel sunt afișate rândurile moștenite, adică cele provenite din documente derivate din rândul selectat în tabelul superioară.

### Descărcare

În această secțiune sunt afișate datele esențiale ale tuturor documentelor, în ordine cronologică, care angajează lotul:

- **Cantitate**: cantitatea lotului angajată în document.
- **Unitate de măsură**: unitatea de măsură utilizată în document.
- **Document**: tipul documentului care a angajat primul lotul. Poate fi un ordin de producție, un ordin client, un aviz de vânzare, o factură de vânzare, o listă de ieşiri, un aviz de livrare din sistem lohn sau o reintrare în sistem lohn.
- **Număr**: numărul documentului.
- **Dată**: data documentului.

*Cu dublu clic pe rândul documentului este posibil, conform drepturilor utilizatorului, să se deschidă documentul pentru vizualizare.*

- **Gestiune**: codul și descrierea gestiunii în care a fost descărcat lotul.
- **Locație**: codul și descrierea locației.
- **Șablon**: codul și descrierea șablonului utilizat.
- **Client/Furnizor**: cont, analitic și descriere referitoare la client sau furnizor.
- **Proiect**: comanda de vânzare, editabilă de utilizator, asociată lotului. De obicei, este vorba despre comanda de vânzare asociată rândului articolului care a fost încărcat și care a generat lotul.

### Alte documente de descărcare

În această secțiune sunt afișate datele esențiale ale altor eventuale documente în care lotul a fost implicat, în relație cu documentul selectat în tabelul superior.  
Rândurile sunt afișate atunci când o mișcare de lot este moștenită dintr-un alt document, adică atunci când mai multe documente fac referire la aceleași rânduri de mișcare.  
*Exemplu*: mișcările de lot ale materialelor dintr-un ordin de producție pot fi moștenite de materialele articolelor semnalate; mișcările de lot ale ordinelor de vânzare pot fi moștenite în dispoziția de livrare, în avizuri de livrare sau în facturi de vânzare.

În primul tabel sunt afișate rândurile principale (sursă) ale mișcărilor de lot provenite din documente, iar în al doilea tabel rândurile moștenite provenite din documente derivate din rândul prezent în tabelul superior.

**Tip document**: tipul documentului în care este prezent lotul, în relație cu documentul selectat în tabelul superior. Poate fi un aviz de vânzare, o factură de vânzare, o listă de ieșiri, un aviz de livrare din sistem lohn sau o reintrare din sistem lohn.

*Cu dublu clic pe rândul documentului este posibil, în acord cu drepturile utilizatorului, să se deschidă documentul pentru vizualizare.*

### Vizualizare stocuri

În acest tab este posibilă vizualizarea stocului lotului, împărțit pe gestiuni:

- **Cod**: reprezită codul **gestiunii**.
- **Descriere**: reprezită descrierea **gestiunii**.
- **Cantitate totală încărcată**: reprezită cantitatea totală încărcată a articolului pentru acel lot.
- **Cantitate stoc**: reprezită stocul actual al articolului pentru acel lot.
- **Cantitate disponibilă**: reprezită stocul disponibil al articolului pentru acel lot.
## Trasabilitate lot

:::important Utilizare
Trasabilitatea lotului din Fluentis ERP este un modul conceput pentru a asigura gestionarea eficientă și precisă a loturilor de produse în cadrul ciclului productiv și logistic. Această funcționalitate permite utilizatorilor să monitorizeze și să înregistreze parcursul fiecărui lot, din momentul producției sau achiziției până la utilizarea sa finală, contribuind la o gestionare transparentă și sigură a materialelor.

Prin utilizarea secțiunii dedicate **trasabilității**, utilizatorii pot genera rapoarte detaliate pentru loturile selectate, nu doar pentru a vizualiza informațiile referitoare la lotul propriu-zis, ci și pentru a analiza în ce articole a fost folosit și care materii prime au contribuit la producția sa. Acest proces este facilitat de o serie de filtre personalizabile care permit adaptarea căutării la cerințele specifice ale companiei.

Două dintre principalele instrumente de **trasabilitate** includ:

- **Trasabilitate utilizare**: afișează articolele în care a fost folosit lotul, garantând o verificare detaliată a trasabilității în amonte.
- **Trasabilitate compoziție**: verifică ce articole gestionate pe loturi au fost folosite pentru producția lotului selectat, oferind o imagine clară a trasabilității în aval.

Prin intermediul acestei funcționalități, Fluentis ERP oferă o soluție robustă pentru companii, în special în sectoare precum cel alimentar și farmaceutic, unde **trasabilitatea** este esențială pentru siguranță și conformitate cu reglementările în vigoare.
:::

Acest formular permite imprimarea unui raport care conține detaliul **trasabilității lotului** selectat.  
După configurarea filtrelor dorite, se face clic pe butonul **Căutare** pentru a vizualiza rezultatele.

### Filtre disponibile

- **Trasabilitate utilizare**: dacă este activ, permite vizualizarea articolelor în care a fost folosit lotul articolului analizat; prin urmare, verifică trasabilitatea în amonte.  
- **Trasabilitate compoziție**: dacă este activ, permite vizualizarea articolelor (gestionate pe loturi) folosite pentru producția lotului articolului analizat; astfel, verifică trasabilitatea în aval.  

Aceste două opțiuni sunt active implicit, dar utilizatorul le poate dezactiva.

După selectarea lotului dorit, faceți clic pe **Listează** sau pe **Vizualizare raport** pentru a vizualiza raportul cu rezultatele căutate.

## Rezumat și detalii suplimentare

**Registrul loturilor și trasabilitatea** din Fluentis ERP sunt instrumente fundamentale pentru gestionarea și controlul loturilor de produse. Ele permit monitorizarea fiecărei etape a lotului — de la crearea sa până la utilizarea finală. Datorită funcționalităților dedicate, companiile pot garanta conformitatea legislativă și o gestionare eficientă a materialelor.

Pentru detalii suplimentare, se recomandă consultarea secțiunilor corelate din document.
