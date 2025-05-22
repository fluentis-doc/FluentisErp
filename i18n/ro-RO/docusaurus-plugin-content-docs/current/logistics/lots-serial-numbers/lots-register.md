---
title: Registrul loturilor și Trasabilitate (Anagrafica lotti e Tracciabilità)
sidebar_position: 3
---

:::important Utilizare
Registrul loturilor din Fluentis reprezintă un instrument indispensabil pentru gestionarea precisă și detaliată a loturilor în cadrul unui sistem de trasabilitate a produselor. Această funcționalitate permite utilizatorilor să caute și să vizualizeze detalii specifice despre fiecare lot cu un simplu dublu clic, facilitând astfel monitorizarea și gestionarea stocurilor.

În cadrul fiecărui lot, utilizatorii pot modifica diverse informații esențiale, cum ar fi furnizorul, codul lotului expediat de furnizor, note specifice și starea lotului. Aceasta din urmă, care poate fi actualizată ușor, joacă un rol fundamental în determinarea utilizabilității lotului în documentele de vânzare și în înregistrările de gestiune. De asemenea, sistemul prevede gestionarea diferitelor stări ale lotului, ceea ce influențează direct disponibilitatea operativă a acestuia.

Un aspect distinctiv al registrului loturilor este secțiunea care permite vizualizarea istorică a documentelor de încărcare și descărcare care au implicat lotul, menținând astfel o trasabilitate precisă în timp. De asemenea, este posibil să se vizualizeze stocul actual, împărțit pe gestiuni. Datorită acestor funcționalități, registrul loturilor Fluentis nu doar simplifică gestionarea operațională, ci contribuie și la asigurarea conformității normative în domenii în care trasabilitatea este esențială, cum ar fi cel alimentar și cel farmaceutic.
:::

## Registru loturi

Formularul vizualizează detalii despre lot și este compus din 4 secțiuni diferite: 

### Antet lot

În această secțiune sunt afișate, cu posibilitatea de a modifica unele dintre ele, datele principale referitoare la lot, în special:

**Articol**: în cele 3 câmpuri referitoare sunt afișate clasa, codul și descrierea articolului la care se referă lotul. Este vorba, cu siguranță, de un articol cu flagul *Gestionare loturi* activat în *Registrul articol (Anagrafica articolo)* > tab *Loturi/SN*, altfel nu ar fi fost posibil să se efectueze încărcarea lotului pentru acel articol;

**Variantă**: în cele 2 câmpuri referitoare sunt afișate codul și descrierea variantei articolului la care se referă lotul, dacă este prezentă;

**Lot**: în acest câmp apare Codul lotului. Este un câmp editabil de utilizator, deși în timpul operațiunilor de încărcare poate fi generat automat în funcție de anumite reguli stabilite în *Tipul codului lot (Tipo codice lotto)* legat de articol. Se introduce mai întâi un cod și o descriere a *tipului codului lot*, se salvează linia și apoi se decide ce parametri se doresc utilizați pentru compunerea noului *tip cod lot*. Pentru fiecare parametru utilizat se poate decide din câte caractere trebuie să fie format și, eventual, și caracterul de umplere care trebuie utilizat. De exemplu, cu parametrul *Număr progresiv* stabilind ca și caracter de umplere '0' și Lungimea '5', se vor crea loturi cu primul număr 00000, apoi 00001, apoi 00002 și așa mai departe. *Tipul codului lot* trebuie apoi să fie legat de registrul articolului în câmpul corespunzător situat în tab *Loturi/SerialNumber*, astfel încât în procedurile care generează automat codul lotului pentru articolul respectiv, lotul să fie generat conform regulilor stabilite în *tipul codlot* legat de articol. Câmpul este alfanumeric și poate atinge o lungime maximă de 50 de caractere. Nu este vorba despre identificatorul lotului, deoarece este posibil să se efectueze mai multe încărcări în momente diferite ale aceluiași lot; în acest caz, ar apărea mai multe linii cu același *Cod Lot* în cadrul grilei de *Căutare Lotturi*;

**Furnizor**: în acest câmp se va indica contul/subcontul/descrierea furnizorului;

**Producător**: în acest câmp se va indica denumirea/Rațiunea socială a producătorului;

**Cod furnizor**: în acest câmp apare codul *Lotului furnizor*, deci de obicei numele pe care furnizorul îl atribuie lotului. Este un câmp editabil de utilizator și nu generabil automat în timpul operațiunilor de încărcare. De asemenea, poate atinge o lungime maximă de 50 de caractere și poate fi identic chiar și pentru loturi diferite ale unor articole diferite;

**Tip raport etichetă**: în acest câmp se introduce tipul de etichetă care trebuie imprimată pentru acest lot;

**Data început**: în acest câmp apare de obicei data la care a fost încărcat lotul, editabil de utilizator. Dacă lotul a fost încărcat prin înregistrarea în gestiune, această dată este propusă identică cu data în care a fost creată înregistrarea; dacă lotul a fost încărcat prin încărcarea unui DDT de achiziție sau prin înregistrarea revenirii de lucru, această dată este setată ca fiind egală cu data DDT-ului de achiziție sau de lucru (cu excepția cazului în care utilizatorul nu a modificat-o manual în cadrul DDT-ului); dacă lotul a fost încărcat prin înregistrarea unei notificări de producție, această dată este propusă ca fiind identică cu data notificării de producție;

**Data expirare**: în acest câmp apare data de expirare a lotului, editabilă de utilizator, care este calculată în momentul creării lotului, sumând zilele de valabilitate ale lotului introduse în tab *Loturi/SerialNumber* al registrului articolului;

**Cantitate inițială**: în acest câmp apare cantitatea inițială încărcată pentru lot prin primul document care a încărcat lotul respectiv;

**Număr colete**: indică numărul de colete al lotului încărcat;

**Note**: în acest câmp apar notele introduse în înregistrarea de gestiune concomitent cu încărcarea lotului. Câmpul este editabil de utilizator și vizibil și în Căutarea Loturilor, așa cum a fost specificat mai sus;

**Stare lot**: combo-ul vizualizează starea lotului. Aceasta poate fi modificată de utilizator și solicită date din tabelul corespunzător *Stări loturi*. Starea lotului determină posibilitatea de utilizare a lotului în documentele de vânzare, producție și înregistrările de descărcare din gestiune. Totuși, gestionarea nu este obligatorie, utilizatorul nefiind obligat să folosească funcționalitatea tabelului *Stări loturi*;

**Evaluare lot**: combo-ul vizualizează datele referitoare la evaluarea lotului. Aceasta poate fi modificată de utilizator și solicită date din tabelul corespunzător *Evaluare lot*. Acest date are rol pur descriptiv, fără a avea o influență specifică asupra procedurilor, fiind de asemenea opțional;

**Lot vandabil**: flagul, dacă este activ, indică faptul că lotul este disponibil pentru a fi preluat în documentele de vânzare, de producție sau în înregistrările de gestiune. Acesta oferă utilizatorului posibilitatea de a defini dacă un lot poate fi preluat sau nu, în alternativa gestionării, mai complexe și elaborate, a stărilor lotului;

**Închis**: flagul, dacă este activat, face ca cantitatea respectivă a lotului să nu fie considerată pentru calculul stocului și disponibilității. Acest flag poate fi activat doar manual.        

### Încărcare

În această secțiune sunt afișate datele fundamentale ale documentelor care au contribuit la încărcarea lotului. De obicei, este prezent întotdeauna detaliul în *Înregistrarea de gestiune* care a încărcat lotul; dacă aceasta a fost generată prin încărcarea unui document (factură, întoarcere etc.), atunci apare o linie în care sunt afișate și detaliile acestui document.

*Cu un dublu clic pe linia documentului, în acord cu drepturile utilizatorului, este posibil să se deschidă în vedere unică documentul corespunzător*.

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost angajată în document;

**Unitate de măsură**: indică unitatea de măsură care a fost utilizată în document;

**Număr colete**: indică numărul de colete;

**Data inserare**: indică data introducerii;

**Stare lot**: indică starea lotului;

**Închis forțat**: dacă este activ, indică faptul că lotul a fost închis forțat;

**Document de referință**: în acest câmp apare tipul de document care a generat încărcarea lotului;

**Număr**: în acest câmp apare numărul documentului;

**Data inserare**: în acest câmp apare data documentului;

**Gestiune**: în aceste câmpuri apar codul și descrierea gestiunii pe care a fost încărcat lotul;

**Locație**: în aceste câmpuri apar codul și descrierea locației;

**Șablon**: în aceste câmpuri apar codul și descrierea cauzei utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: în aceste câmpuri apar contul, subcontul și descrierea referitoare la client sau furnizor;

**Proiect**: în acest câmp apare comanda de vânzare, editabilă de utilizator, legată de lot. De obicei, este vorba despre comanda de vânzare legată de linia articolului care a fost încărcată și care a încărcat lotul respectiv;

### Alte documente încărcare

În această secțiune sunt afișate datele fundamentale ale altor eventuale documente în care lotul a fost angajat, în relație cu documentul selectat în grila superioară.

### Descărcare

În această secțiune sunt afișate datele fundamentale ale tuturor documentelor, în ordine cronologică, care implică lotul. 

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost angajată în document;

**Unitate de măsură**: indică unitatea de măsură care a fost utilizată în document;

**Data inserare**: indică data introducerii;

**Stare lot**: indică starea lotului;

**Document**: în acest câmp apare tipul documentului care a angajat pentru prima dată lotul. Acesta poate fi o comandă de producție, o comandă client, un DDT de vânzare, o factură de vânzare, o listă de preluare, un DDT de livrare de lucru, o întoarcere de lucru;

**Număr**: în acest câmp apare numărul documentului;

**Data**: în acest câmp apare data documentului;

*Cu un dublu clic pe linia documentului, în acord cu drepturile utilizatorului, este posibil să se deschidă în vedere unică documentul corespunzător*.

**Gestiune**: în aceste câmpuri apar codul și descrierea gestiunii pe care a fost încărcat lotul;

**Locație**: în aceste câmpuri apar codul și descrierea locației;

**Șablon**: în aceste câmpuri apar codul și descrierea cauzei utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: în aceste câmpuri apar contul, subcontul și descrierea referitoare la client sau furnizor;

**Proiect**: în acest câmp apare comanda de vânzare, editabilă de utilizator, legată de lot. De obicei, este vorba despre comanda de vânzare legată de linia articolului care a fost încărcată și care a încărcat lotul respectiv;

### Alte documente descărcare

În această secțiune sunt afișate datele fundamentale ale altor eventuale documente în care lotul a fost angajat, în relație cu documentul selectat în grila superioară.

**Tip document**: în acest câmp apare tipul de document în cadrul căruia este prezent lotul, în raport cu documentul selectat în grila superioară. Acesta poate fi un DDT de vânzare, o factură de vânzare, o listă de preluare, un DDT de livrare de lucru, o întoarcere de lucru;

**Număr**: în acest câmp apare numărul documentului;

**Data**: în acest câmp apare data documentului.

*Cu un dublu clic pe linia documentului, în acord cu drepturile utilizatorului, este posibil să se deschidă în vedere unică documentul corespunzător*.

### Vizualizare stocuri

În acest tab este posibil să se vizualizeze stocul lotului împărțit pe gestiuni.

Grila este compusă din următoarele câmpuri:

**Cod**: indică codul gestiunii;

**Descriere**: indică descrierea gestiunii;

**Unitate de măsură**: indică unitatea de măsură;

**Cantitate totală încărcată**: indică cantitatea totală încărcată pentru acel articol pentru acel lot;

**Cantitate stoc**: indică stocul actual pentru acel articol pentru acel lot;

**Cantitate disponibilă**: indică stocul disponibil pentru acel articol pentru acel lot.


## Trasabilitate lot

:::important Utilizare
Trasabilitatea lotului din Fluentis este un modul proiectat pentru a garanta o gestionare eficientă și precisă a loturilor de produse în cadrul ciclului de producție și logistic. Această funcționalitate permite utilizatorilor să urmărească și să înregistreze parcursul fiecărui lot, de la momentul producției sau achiziției până la utilizarea sa finală, contribuind astfel la o gestionare transparentă și sigură a materialelor.

Folosind secțiunea dedicată trasabilității, utilizatorii pot genera rapoarte detaliate pentru loturile selectate, nu doar pentru a vizualiza informațiile referitoare la lotul în sine, ci și pentru a analiza în ce articole a fost utilizat și ce materii prime au contribuit la producția sa. Acest proces este facilitat de o serie de filtre personalizabile care permit adaptarea căutării la necesitățile specifice ale afacerii.

Două dintre principalele instrumente de trasabilitate includ:

**Trasabilitatea Utilizării**: care permite vizualizarea tuturor articolelor în care a fost utilizat lotul în cauză, asigurând astfel o verificare detaliată a trasabilității în sus.  
**Trasabilitatea Compoziției**: care permite verificarea care articole gestionate pe loturi au fost utilizate pentru producția lotului selectat, oferind o imagine clară asupra trasabilității în jos.

Prin această funcționalitate de trasabilitate a lotului, Fluentis oferă o soluție robustă pentru companii, în special în sectoare precum cel alimentar și farmaceutic, unde trasabilitatea este esențială pentru siguranța și conformitatea cu reglementările actuale.
:::

Acest formular permite imprimarea unui raport conținând detalii despre trasabilitatea lotului selectat.

Odată ce toate filtrele dorite sunt setate, este suficient să faceți clic pe butonul **Căutare** prezent în *Ribbon bar* pentru a vizualiza rezultatele în grila de rezultate.

De menționat că în cadrul secțiunii dedicate filtrelor sunt prezente următoarele opțiuni:

- **Trasabilitate utilizare**: dacă este activ, permite vizualizarea în ce articole a fost utilizat lotul articolului pe care îl considerăm; astfel verificăm trasabilitatea în sus;      
- **Trasabilitate compoziție**: dacă este activ, permite vizualizarea ce articole (gestionate pe loturi) au fost utilizate pentru producția lotului articolului pe care îl considerăm; astfel verificăm trasabilitatea în jos.      

Aceste două opțiuni sunt, în mod implicit, întotdeauna active, dar utilizatorul le poate activa sau dezactiva în funcție de necesități.

După ce a fost selectat lotul de interes, este suficient să faceți clic pe imprimare sau pe previzualizare de imprimare pentru a putea vizualiza raportul cu rezultatele căutate.

Pentru detalii privind funcționarea comună a formularelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).