---
title: Registrul loturilor și Trasabilitate (Anagrafica lotti e Tracciabilità)
sidebar_position: 3
---

:::important La ce este folosit
Registrul loturilor din Fluentis reprezintă un instrument indispensabil pentru gestionarea precisă și detaliată a loturilor în cadrul unui sistem de trasabilitate a produselor. Această funcționalitate permite utilizatorilor să caute și să vizualizeze detaliile specifice ale fiecărui lot printr-un simplu dublu clic, facilitând astfel monitorizarea și gestionarea stocurilor.

În cadrul filei dedicate fiecărui lot, utilizatorii pot modifica diverse informații cruciale, cum ar fi furnizorul, codul lotului furnizat de furnizor, note specifice și starea lotului. Aceasta din urmă, care poate fi actualizată cu ușurință, joacă un rol fundamental în determinarea posibilității de utilizare a lotului în documentele de vânzare și în înregistrările de depozit. Nu doar atât, dar sistemul prevede și gestionarea diferitelor stări ale lotului, care afectează direct disponibilitatea operațională a lotului.

Un aspect distinctiv al registrului loturilor este secțiunea care permite vizualizarea istorică a documentelor de încărcare și descărcare care au implicat lotul, menținând astfel o trasabilitate precisă în timp; în plus, este posibil să se vizualizeze stocul actual împărțit pe depozite. Datorită acestor funcționalități, registrul loturilor din Fluentis nu doar simplifică gestionarea operațională, ci contribuie și la garantarea conformității normative în sectoare unde trasabilitatea este esențială, cum ar fi cel alimentar și farmaceutic.
:::

## Registrul loturilor (Anagrafica lotti)

Formularul afișează detaliile lotului și se compune din 4 secțiuni diferite: 

### Antet lot (Testata lotto)

În această secțiune sunt afișate, cu posibilitatea de a modifica unele, datele principale referitoare la lot și în special:

**ARTICOL**: în cele 3 câmpuri respective sunt afișate clasa, codul și descrierea articolului la care se referă lotul. Este cu siguranță un articol cu indicatorul *Gestiune loturi* activat în *Registru articol* > tab *Loturi/SN (Lotti/SN)*, altfel nu ar fi fost posibil să se efectueze încărcarea lotului pentru respectivul articol;

**Variante**: în cele 2 câmpuri respective sunt afișate codul și descrierea variantei articolului la care se referă lotul, dacă este prezent;

**Lot**: în acest câmp apare Codul lotului. Este un câmp editabil de către utilizator, deși în timpul operațiunilor de încărcare poate fi generat automat în baza unor reguli stabilite în *Tip cod lot* legat de articol. Se introduce mai întâi un cod și o descriere a *tipului codului lotului*, se salvează linia și apoi se decide ce parametri se doresc utilizați pentru compunerea *tipului codului lotului* nou creat. Pentru fiecare parametru utilizat se poate decide din câte caractere trebuie să fie format și eventul și caracterul de umplere utilizat. De exemplu, cu parametrul *Număr progresiv* stabilind ca caracter de umplere '0' și Lungimea '5', se vor crea loturi cu ca prim număr 00000, apoi 00001, apoi 00002 și așa mai departe. *Tipul codului lotului* trebuie apoi legat de registrul articolului în câmpul corespunzător situat în tab-ul *Loturi/SerialNumber (Lotti/SerialNumber)*, astfel încât în procedurile care creează automat codul lotului pentru articolul respectiv, lotul să fie generat conform regulilor stabilite în *tipul codului lotului* legat de articol. Câmpul este alfanumeric și poate avea o lungime maximă de 50 de caractere. Nu este identificatorul lotului, întrucât este posibil să se efectueze mai multe încărcări în momente diferite ale aceluiași lot; în acest caz ar apărea mai multe linii cu același *Cod lot* în cadrul grilei de *Căutare Loturi*;

**Furnizor**: în acest câmp se va indica contul/subcontul/descrierea furnizorului;

**Producător**: în acest câmp se va indica denumirea/rațiunea socială a producătorului;

**Cod furnizor**: în acest câmp apare codul *Lot furnizor*, adică de obicei denumirea pe care furnizorul o atribuie lotului. Este un câmp editabil de către utilizator și nu generabil automat în timpul operațiunilor de încărcare. De asemenea, poate avea o lungime maximă de 50 de caractere și poate fi identic și pentru loturi diferite de articole diferite;

**Tip raport etichetă**: în acest câmp este inserat tipul de etichetă care trebuie imprimată pentru acest lot;

**Dată început**: în acest câmp apare de obicei data la care a fost încărcat lotul, editabil de utilizator. Dacă lotul a fost încărcat prin înregistrarea în depozit, această dată este propusă identică cu data în care a fost creată înregistrarea; dacă lotul a fost încărcat prin încărcarea unei DDT de achiziție sau a unei înregistrări de întoarcere de muncă, această dată este setată identică cu data DDT-ului de achiziție sau de muncă (cu excepția cazului în care utilizatorul nu a modificat-o manual în DDT); dacă lotul a fost încărcat prin înregistrarea unei semnalări de producție, această dată este propusă ca identică cu data semnalării de producție;

**Dată scadenţă**: în acest câmp apare data de expirare a lotului, editabil de utilizator, care este calculată, la crearea lotului și deci la încărcarea mișcării de depozit corespunzătoare, pornind de la data de început și adunând zilele de valabilitate ale lotului introduse în tab-ul *Loturi/SerialNumber (Lotti/SerialNumber)* al registrului articolului;

**Cantitate iniţială**: în acest câmp apare cantitatea inițială încărcată pentru lot prin intermediul primului document care a încărcat respectivul lot;

**Numar colete**: indică numărul de coli al lotului încărcat;

**Note**: în acest câmp apar notele introduse în înregistrarea de depozit concomitent cu încărcarea lotului. Câmpul este editabil de utilizator și vizibil și în Căutarea Loturilor, așa cum s-a menționat mai sus;

**Stare Lot**: combo-ul afișează starea lotului. Este modificabil de utilizator și face referință la datele provenite din tabela corespunzătoare *Stări lot (Stati lotto)*. Starea lotului determină posibilitatea de a utiliza sau nu lotul în documentele de vânzare, producție și înregistrările de descărcare din depozit. Totuși, este o gestionare nevinovată, utilizatorul nu este obligat să folosească funcționalitatea tabelei *Stări lot*;

**Evaluare lot**: combo-ul afișează datele referitoare la evaluarea lotului. Este modificabil de utilizator și face referință la datele din tabela corespunzătoare *Evaluare lot*. Aceste date au funcții pur descriptive, fără să influențeze procesele, fiind astfel opționale;

**Lot vândut**: indicatorul, dacă este activat, evidențiază faptul că lotul este disponibil pentru a fi prelevat în documentele de vânzare, producție sau în înregistrările de depozit. Este practic o posibilitate pe care o are utilizatorul de a defini posibilitatea de a prelua sau nu un lot, ca alternativă la gestionarea, mai complexă și detaliată, a stărilor lotului;

**Închis**: indicatorul, dacă este activat, face ca cantitatea acelui lot să nu fie luată în considerare pentru calculul stocului și disponibilității. Acest indicator poate fi activat doar manual.        

### Încărcare (Carico)

În această secțiune sunt afișate datele fundamentale ale documentelor care au contribuit la efectuarea încărcării lotului. De obicei apare întotdeauna detaliul *Înregistrării de depozit* care a încărcat lotul; dacă aceasta a fost generată prin încărcarea unui document (factură, întoarcere etc.), atunci apare un rând cu detaliile acestui document.

*Cu un dublu clic pe rândul documentului este posibil, în conformitate cu drepturile utilizatorului, să se deschidă în vizualizare numai documentul corespunzător*.

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost angajată în document;

**Unităţi de Măsură**: indică unitatea de măsură care a fost utilizată în document;

**Numar colete**: indică numărul de coli;

**Dată inserare**: indică data inserării;

**Stare Lot**: indică starea lotului;

**Închis forţat**: dacă este activ, indică faptul că lotul a fost închis forțat;

**Document referinţă**: în acest câmp apare tipul de document care a generat încărcarea lotului;

**Număr**: în acest câmp apare numărul documentului;

**Dată inserare**: în acest câmp apare data documentului;

**Gestiune**: în aceste câmpuri apar codul și descrierea depozitului la care a fost încărcat lotul;

**Locaţie**: în aceste câmpuri apar codul și descrierea locației;

**Şablon**: în aceste câmpuri apar codul și descrierea cauzei utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: în aceste câmpuri apar contul, subcontul și descrierea referitoare la client sau furnizor;

**Proiect**: în acest câmp apare comanda de vânzare, editabilă de utilizator, legată de lot. De obicei este comanda de vânzare legată de linia articolului care a fost încărcată și care a încărcat lotul respectiv;

### Alte documente de încărcare (Altri documenti di carico)

În această secțiune sunt afișate datele fundamentale ale altor eventuale documente în care lotul a fost angajat, în raport cu documentul selectat în grila de sus.

### Descărcare (Scarico)

În această secțiune sunt afișate datele fundamentale ale tuturor documentelor, în ordine cronologică, care angajează lotul.

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost angajată în document;

**Unităţi de Măsură**: indică unitatea de măsură care a fost utilizată în document;

**Dată inserare**: indică data inserării;

**Stare Lot**: indică starea lotului;

**Document**: în acest câmp apare tipul de document care a angajat pentru prima dată lotul. Poate fi o comandă de producție, o comandă de client, o DDT de vânzare, o factură de vânzare, o listă de prelevare, o DDT de livrare a muncii, o întoarcere a muncii;

**Număr**: în acest câmp apare numărul documentului;

**Dată**: în acest câmp apare data documentului;

*Cu un dublu clic pe rândul documentului este posibil, în conformitate cu drepturile utilizatorului, să se deschidă în vizualizare numai documentul corespunzător*.

**Gestiune**: în aceste câmpuri apar codul și descrierea depozitului la care a fost încărcat lotul;

**Locaţie**: în aceste câmpuri apar codul și descrierea locației;

**Şablon**: în aceste câmpuri apar codul și descrierea cauzei utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: în aceste câmpuri apar contul, subcontul și descrierea referitoare la client sau furnizor;

**Proiect**: în acest câmp apare comanda de vânzare, editabilă de utilizator, legată de lot. De obicei este comanda de vânzare legată de linia articolului care a fost încărcată și care a încărcat lotul respectiv;

### Alte documente de descărcare (Altri documenti di scarico)

În această secțiune sunt afișate datele fundamentale ale altor eventuale documente în care lotul a fost angajat, în raport cu documentul selectat în grila de sus.

**Tip document**: în acest câmp apare tipul de document în cadrul căruia este prezent lotul, în legătură cu documentul selectat în grila de sus. Poate fi o DDT de vânzare, o factură de vânzare, o listă de prelevare, o DDT de livrare a muncii, o întoarcere a muncii;

**Număr**: în acest câmp apare numărul documentului;

**Dată**: în acest câmp apare data documentului.

*Cu un dublu clic pe rândul documentului este posibil, în conformitate cu drepturile utilizatorului, să se deschidă în vizualizare numai documentul corespunzător.*

### Vizualizarea Stocurilor (Visualizzazione Giacenze)

În această tabă este posibil să se vizualizeze stocul lotului împărțit pe depozite.

Grila se compune din următoarele câmpuri:

**Cod**: indică codul depozitului;

**Descriere**: indică descrierea depozitului;

**Unităţi de Măsură**: indică unitatea de măsură;

**Cantitate totală încărcată (Quantità totale caricata)**: indică cantitatea totală încărcată a acelui articol pentru acel lot;

**Cantitate stoc (Quantità giacenza)**: indică stocul actual al acelui articol pentru acel lot;

**Cantitate
disponibilă**: indică stocul disponibil al acelui articol pentru acel lot.


## Trasabilitate lot (Tracciabilità lotto)

:::important La ce este folosit
Trasabilitatea lotului din Fluentis este un modul conceput pentru a asigura o gestionare eficientă și precisă a loturilor de produse în cadrul ciclului productiv și logistic. Această funcționalitate permite utilizatorilor să monitorizeze și să înregistreze parcursul fiecărui lot, de la momentul producerii sau achiziției până la utilizarea sa finală, contribuind la o gestionare transparentă și sigură a materialelor.

Utilizând secțiunea dedicată trasabilității, utilizatorii pot genera rapoarte detaliate pentru loturile selectate, nu doar pentru a vizualiza informațiile referitoare la lotul în sine, ci și pentru a analiza în ce articole a fost utilizat și ce materii prime au contribuit la producția sa. Acest proces este facilitat de o serie de filtre personalizabile care permit adaptarea căutării la nevoile specifice ale afacerii.

Două dintre principalele instrumente de trasabilitate includ:

Trasabilitate Utilizare: care permite vizualizarea tuturor articolelor în care a fost utilizat lotul respectiv, asigurând astfel o verificare detaliată a trasabilității în sus.
Trasabilitate Compoziție: care permite verificarea articolelor gestionate pe loturi care au fost utilizate pentru producția lotului selectat, oferind o vedere clară a trasabilității în jos.

Prin această funcționalitate de trasabilitate a loturilor, Fluentis oferă o soluție robustă pentru întreprinderi, în special în sectoare precum cel alimentar și farmaceutic, unde trasabilitatea este esențială pentru siguranță și conformitatea cu reglementările în vigoare.
:::

Acest formular permite imprimarea unui raport care conține detaliile trasabilității lotului selectat.

Odată ce toate filtrele dorite sunt setate, este suficient să faceți clic pe butonul **Caută** prezent în *Ribbon bar* pentru a vizualiza rezultatele în grila de rezultate.

De notat că în cadrul secțiunii dedicate filtrării sunt prezente următoarele indicatori:

- **Utilizare Trasabilitate**: dacă este activat, permite vizualizarea în ce articole a fost utilizat lotul articolului pe care îl luăm în considerare; astfel, verifică trasabilitatea în sus;      
- **Compoziţie trasabilitate**: dacă este activat, permite vizualizarea ce articole (gestionate pe loturi) au fost utilizate pentru producția lotului articolului pe care îl luăm în considerare; astfel, verifică trasabilitatea în jos.      

Acești doi indicatori, în mod implicit, sunt întotdeauna activi, dar utilizatorul poate să îi activeze sau să îi dezactiveze în funcție de necesități.

După ce a fost selectat lotul de interes, este suficient să faceți clic pe imprimare sau pe previzualizare imprimare pentru a vizualiza raportul cu rezultatele căutate.

Pentru detalii privind funcționarea comună a formularelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).