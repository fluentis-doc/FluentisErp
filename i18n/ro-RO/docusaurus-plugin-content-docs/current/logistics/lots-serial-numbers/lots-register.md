---
title: Registru loturi și Trasabilitate
---

:::important Utilizare
Registrul loturilor din Fluentis reprezintă un instrument indispensabil pentru gestionarea precisă și detaliată a loturilor în cadrul unui sistem de trasabilitate a produselor. Această funcționalitate permite utilizatorilor să caute și să vizualizeze detalii specifice despre fiecare lot cu un simplu dublu clic, facilitând astfel monitorizarea și gestionarea stocurilor.

În cadrul fiecărui lot, utilizatorii pot modifica diverse informații esențiale, cum ar fi furnizorul, codul lotului expediat de furnizor, note specifice și starea lotului. Aceasta din urmă, care poate fi actualizată ușor, joacă un rol fundamental în determinarea utilizabilității lotului în documentele de vânzare și în înregistrările de gestiune. De asemenea, sistemul prevede gestionarea diferitelor stări ale lotului, ceea ce influențează direct disponibilitatea operativă a acestuia.

Un aspect distinctiv al registrului loturilor este secțiunea care permite vizualizarea istorică a documentelor de încărcare și descărcare care au implicat lotul, menținând astfel o trasabilitate precisă în timp. De asemenea, este posibil să se vizualizeze stocul actual, împărțit pe gestiuni. Datorită acestor funcționalități, registrul loturilor Fluentis nu doar simplifică gestionarea operațională, ci contribuie și la asigurarea conformității normative în domenii în care trasabilitatea este esențială, cum ar fi cel alimentar și cel farmaceutic.
:::

## Registru loturi

Formularul vizualizează detalii despre lot și este compus din 4 secțiuni diferite: 

### Antet lot

#### Câmpuri specifice  

- **Articol**: reprezintă clasa, codul și descrierea articolului la care se referă lotul. Este vorba, cu siguranță, de un articol cu opțiunea *Gestionare loturi* activată în *Registrul articol* > tab *Loturi/SN*, fără de care nu ar fi fost posibilă încărcarea lotului pentru acel articol;

- **Variantă**: reprezintă codul și descrierea variantei articolului la care se referă lotul, dacă este prezentă;

- **Lot**: reprezintă codul lotului. Este un câmp editabil, deși în timpul operațiunilor de încărcare poate fi generat automat în funcție de anumite reguli stabilite în *Tipul codului lot* asociat articolului. Se introduce mai întâi un cod și o descriere a *tipului codului lot*, se salvează linia și apoi se decide ce parametri se doresc utilizați pentru compunerea noului *tip cod lot*. Pentru fiecare parametru utilizat se poate decide din câte caractere trebuie să fie format și, eventual, și caracterul de umplere care trebuie utilizat. De exemplu, cu parametrul *Număr progresiv* stabilind ca și caracter de umplere '0' și Lungimea '5', se vor crea loturi cu primul număr 00000, apoi 00001, apoi 00002 și așa mai departe. *Tipul codului lot* trebuie apoi să fie asociat registrului articolului în câmpul corespunzător situat în tab *Loturi/Numere de serie*, astfel încât în procedurile care generează automat codul lotului pentru articolul respectiv, lotul să fie generat conform regulilor stabilite în *tipul codlot* asociat articolului. Câmpul este alfanumeric și poate atinge o lungime maximă de 50 de caractere. Nu este vorba despre identificatorul lotului, deoarece este posibil să se efectueze mai multe încărcări în momente diferite ale aceluiași lot; în acest caz, ar apărea mai multe linii cu același *Cod Lot* în cadrul grilei de *Căutare Lotturi*;

- **Furnizor**: în acest câmp se va indica contul/analiticul/descrierea furnizorului;

- **Producător**: în acest câmp se va indica denumirea/Rațiunea socială a producătorului;

**Cod furnizor**: reprezintă codul *Lotului furnizor*, deci numele pe care furnizorul îl atribuie lotului. Este un câmp editabil și nu poate fi generat automat în timpul operațiunilor de încărcare. De asemenea, poate atinge o lungime maximă de 50 de caractere și poate fi identic chiar și pentru loturi diferite ale unor articole diferite;

- **Tip raport etichetă**: în acest câmp se introduce tipul de etichetă care trebuie imprimată pentru acest lot;

- **Data început**: reprezintă data la care a fost încărcat lotul și este editabil. Dacă lotul a fost încărcat prin înregistrarea în gestiune, această dată este propusă identică cu data în care a fost creată înregistrarea. Dacă lotul a fost încărcat prin încărcarea unui aviz de achiziție sau prin înregistrarea reintrării în sistem lohn, această dată este setată ca fiind egală cu data aviz-ului de achiziție sau în sistem lohn (cu excepția cazului în care utilizatorul nu a modificat-o manual în aviz). Dacă lotul a fost încărcat prin înregistrarea unei notificări de producție, această dată este propusă ca fiind identică cu data notificării de producție;

- **Data scadenţă**: reprezintă data de expirare a lotului, editabilă, care este calculată în momentul creării lotului, însumând zilele de valabilitate ale lotului introduse în tab *Loturi/Numere de serie* al registrului articolului;

**Cantitate inițială**: reprezintă cantitatea inițială încărcată pentru lot cu primul document care a încărcat lotul respectiv;

**Număr colete**: reprezintă numărul de colete al lotului încărcat;

**Note**: reprezintă notele introduse în înregistrarea de gestiune concomitent cu încărcarea lotului. Câmpul este editabil și vizibil și în Căutarea Loturilor, așa cum a fost specificat mai sus;

**Stare lot**: poate fi modificată și preia date din tabelul omonim. Starea lotului determină posibilitatea de utilizare a lotului în documentele de vânzare, producție și înregistrările de descărcare din gestiune. Totuși, gestionarea nu este obligatorie, utilizatorul nefiind obligat să folosească funcționalitatea tabelului *Stări loturi*;

**Evaluare lot**: poate fi modificată și preia date din tabelul omonim. Are rol pur descriptiv, fără a avea o influență specifică asupra procedurilor, fiind de asemenea opțional;

**Lot vandabil**: opțiunea, dacă este activă, reprezintă faptul că lotul este disponibil pentru a fi preluat în documentele de vânzare, de producție sau în înregistrările de gestiune. Acesta oferă utilizatorului posibilitatea de a defini dacă un lot poate fi preluat sau nu, ca alternativă la gestionarea, mai complexă și elaborată, a stării lotului;

**Închis**: dacă este activ, cantitatea lotului nu va fi considerată pentru calculul stocului și disponibilității. Acest flag poate fi activat doar manual.        

### Încărcare

În această secțiune sunt afișate datele fundamentale ale documentelor care au contribuit la încărcarea lotului. De obicei, este afișat detaliul în *Înregistrarea de gestiune* care a încărcat lotul; dacă aceasta a fost generată prin încărcarea unui document (factură, reintrare etc.), atunci apare o linie în care sunt afișate și detaliile acestui document.

*Cu un dublu clic pe linia documentului, în acord cu drepturile utilizatorului, se poate deschide pentru vizualizare documentul corespunzător*.

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost rezervată în document;

**Unitate de măsură**: reprezintă unitatea de măsură care a fost utilizată în document;

**Număr colete**: reprezintă numărul de colete;

**Data inserare**: reprezintă data introducerii;

**Stare lot**: reprezintă starea lotului;

**Închis forțat**: dacă este activ, reprezintă faptul că lotul a fost închis forțat;

**Document de referință**: reprezintă tipul de document care a generat încărcarea lotului;

**Număr**: reprezintă numărul documentului;

**Data inserare**: reprezintă data documentului;

**Gestiune**: reprezintă codul și descrierea gestiunii în care a fost încărcat lotul;

**Locație**: reprezintă codul și descrierea locației;

**Șablon**: reprezintă codul și descrierea șablonului utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: reprezintă contul, analiticul și descrierea referitoare la client sau furnizor;

**Proiect**: reprezintă comanda de vânzare, editabilă, asociată lotului. De obicei, este vorba despre comanda de vânzare asociată liniei articolului care a fost încărcată și care a încărcat lotul însuși;

### Alte documente încărcare

În această secțiune sunt afișate datele fundamentale ale altor eventuale documente în care lotul a fost rezervat, în relație cu documentul selectat în tabelul superior.

### Descărcare

În această secțiune sunt afișate datele fundamentale ale tuturor documentelor, în ordine cronologică, care implică lotul. 

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost rezervată în document;

**Unitate de măsură**: reprezintă unitatea de măsură care a fost utilizată în document;

**Stare lot**: reprezintă starea lotului;

**Document**: reprezintă tipul documentului care a rezervat pentru prima dată lotul. Acesta poate fi o comandă de producție, o comandă client, un aviz de vânzare, o factură de vânzare, o dispoziție de livrare, un aviz de livrare sistem lohn, o reintrare sistem lohn;

**Număr**: reprezintă numărul documentului;

**Data**: reprezintă data documentului;

*Cu un dublu clic pe linia documentului, în acord cu drepturile utilizatorului, se poate deschide pentru vizualizare documentul corespunzător*.

**Gestiune**: reprezintă codul și descrierea gestiunii pe care a fost încărcat lotul;

**Locație**: reprezintă codul și descrierea locației;

**Șablon**: reprezintă codul și descrierea șablonului utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: reprezintă contul, analiticul și descrierea referitoare la client sau furnizor;

**Proiect**: reprezintă comanda de vânzare, editabilă, asociată de lot. De obicei, este vorba despre comanda de vânzare asociată de linia articolului care a fost încărcată și care a încărcat lotul respectiv;

### Alte documente descărcare

În această secțiune sunt afișate datele fundamentale ale altor eventuale documente în care lotul a fost rezervat, în relație cu documentul selectat în tabelul superioară.

**Tip document**: reprezintă tipul de document în cadrul căruia este prezent lotul, în raport cu documentul selectat în tabelul superioară. Acesta poate fi un aviz de vânzare, o factură de vânzare, o listă de preluare, un aviz de livrare sistem lohn, o reintrare sistem lohn;

**Număr**: reprezintă numărul documentului;

**Data**: reprezintă data documentului.

*Cu un dublu clic pe linia documentului, în acord cu drepturile utilizatorului, se poate deschide pentru vizualizare documentul corespunzător*.

### Vizualizare stocuri

Permite vizualizarea stocului lotului, împărțit pe gestiuni.

#### Câmpuri specifice

**Cod**: reprezintă codul gestiunii;

**Descriere**: reprezintă descrierea gestiunii;

**Unitate de măsură**: reprezintă unitatea de măsură;

**Cantitate totală încărcată**: reprezintă cantitatea totală încărcată din acel articol și acel lot;

**Cantitate stoc**: reprezintă stocul actual pentru acel articol și acel lot;

**Cantitate disponibilă**: reprezintă stocul disponibil pentru acel articol și acel lot.


## Trasabilitate lot

:::important Utilizare
Trasabilitatea lotului din Fluentis este un modul proiectat pentru a garanta o gestionare eficientă și precisă a loturilor de produse în cadrul ciclului de producție și logistic. Această funcționalitate permite utilizatorilor să urmărească și să înregistreze parcursul fiecărui lot, din momentul producției sau achiziției până la utilizarea sa finală, contribuind astfel la o gestionare transparentă și sigură a materialelor.

Folosind secțiunea dedicată trasabilității, utilizatorii pot genera rapoarte detaliate pentru loturile selectate, nu doar pentru a vizualiza informațiile referitoare la lotul în sine, ci și pentru a analiza în ce articole a fost utilizat și ce materii prime au contribuit la producerea sa. Acest proces este facilitat de o serie de filtre personalizabile care permit adaptarea căutării la necesitățile specifice ale companiei.

Două dintre principalele instrumente de trasabilitate includ:

**Trasabilitatea utilizare**: permite vizualizarea tuturor articolelor în care a fost utilizat lotul în cauză, asigurând astfel o verificare detaliată a trasabilității în sus.  
**Trasabilitatea compoziție**: controlează care articole gestionate pe loturi au fost utilizate pentru producția lotului selectat, oferind o imagine clară asupra trasabilității în jos.

Cu această funcționalitate de trasabilitate a lotului, Fluentis oferă o soluție importantă pentru companii, în special în sectoare precum cel alimentar și farmaceutic, unde trasabilitatea este esențială pentru siguranța și conformitatea cu reglementările actuale.
:::

Acest form permite imprimarea unui raport care conțe detalii despre trasabilitatea lotului selectat.

Odată ce toate filtrele dorite sunt setate, este suficient să faceți clic pe butonul **Căutare** prezent în *Ribbon bar* pentru a vizualiza rezultatele în tabelul de rezultate.

#### Parametrii specifici

- **Trasabilitate utilizare**: dacă este activ, permite vizualizarea acelor articole în care a fost utilizat lotul articolului pe care îl analizați; astfel se verifică trasabilitatea în sus;      
- **Trasabilitate compoziție**: dacă este activ, permite vizualizarea acelor articole (gestionate pe loturi) care au fost utilizate pentru producția lotului articolului pe care îl analizați; astfel se verifică trasabilitatea în jos.      

Aceste două opțiuni sunt, în mod implicit, întotdeauna active, dar utilizatorul le poate activa sau dezactiva în funcție de necesități.

După ce a fost selectat lotul dorit, este suficient să faceți clic pe listare sau pe previzualizare pentru a putea vizualiza raportul cu rezultatele căutate.

Pentru detalii privind funcționarea comună a formularelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).