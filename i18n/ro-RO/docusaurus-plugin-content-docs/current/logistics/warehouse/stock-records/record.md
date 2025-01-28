---
title: Înregistrare nouă
sidebar_position: 3
---

:::important Utilizare  
Înregistrările de gestiune în Fluentis reprezintă un element estențial pentru gestionarea eficientă a operațiunilor logistice, permițând înregistrarea precisă a mișcărilor articolelor în cadrul sistemului.  
Înregistrările pot fi create automat prin diverse proceduri, cum ar fi încărcarea documentelor (de exemplu: avize și facturi de achiziție) sau descărcarelor (utilizând avize și facturi de vânzare). Acest proces nu doar simplifică introducerea mișcărilor, dar asigură și sincronizarea informațiilor între diferitele documente operative.

Fiecare înregistrare de gestiune permite operatorului să specifice detalii fundamentale precum gestiunea, șablonul și data. Înregistrarea articolului solicită indicarea cantității și unității de măsură, cu opțiunea de a gestiona loturi și numere de serie când este necesar. În plus, sunt implementate diverse opțiuni care gestionează necesitatea documentelor obligatorii și tratamentul șabloanelor din contrapartidă, garantând astfel trasabilitatea și conformitatea operațiunilor de gestiune.

Un alt aspect este posibilitatea de a personaliza înregistrările în funcție de cerințele specifice ale gestiunii, alegând între gestiuni pentru locație, proiect sau client/furnizor. Această flexibilitate permite adaptarea sistemului la diversele configurații logistice ale companiei, făcând din Fluentis un instrument important pentru gestionarea depozitului.
:::

Form-ul se deschide:
- utilizând calea **Logistică > gestiune > Înregistrări > Înregistrare nouă**  
sau  
- făcând clic pe butonul **Nou** din form-ul de căutare **Înregistrări**.

## Creare automată înregistrare

Înregistrările de gestiune pot fi create automat prin *procedurile de încărcare* a avize de achiziție, facturi de achiziție, recepții mărfuri și prin *procedurile de descărcare* avize de vânzare, factură de vânzare, dispoziția de livrare, lista de ieșiri materiale, avize de livrare în sistem lohn, sau prin *procedurile de înregistrare a semnalărilor de producție și de reintrări din sistem lohn*.

## Creare manuală înregistrare

Utilizatorul poate introduce și manual înregistrările de gestiune, setând toate câmpurile necesare în funcție de tipul de articol și de tipul de șablon pe care decide să o utilizeze.

Form-ul noii înregistrări de gestiune conține 2 taburi: **Înregistrare** și **Contrapartide**.

:::note Notă
Tabul **Contrapartide** devine activ doar dacă șablonul introdus în primul tab are un șablon contrapartidă asociat în tabelul dedicat [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates).
:::

În înregistrarea de gestiune pot fi introduse diverse mișcări de gestiune pentru diverse articole diferite.

## Înregistrare

Acest tab este constituit dintr-un antet și din 4 tabele diferite. Primul afișează articolele care sunt mișcate prin înregistrarea de gestiune. Celelalte 3 tabele sunt utilizate pe baza setărilor articolului și șablonului de gestiune introduse în antet.

### Înregistrare - secțiune fixă

**Gestiune**: reprezintă codul depozitului în care se efectuează înregistrarea;  
**Şablon de gestiune**: obligatoriu pentru introducerea mișcărilor de gestiune. Se selectează utilizând combo-box-ul dedicat, în care sunt propuse doar șabloanele asociate gestiunii selectae.       
**Dată înregistrare**: este propusă automat egală cu data curentă și identifică ziua în care sunt efectuate mișcările de gestiune care vor fi apoi introduse în tabelul dedicat, deci poate fi și modificată setând, de exemplu, o dată anterioară datei curente. Această dată trebuie însă să fie întotdeauna cuprinsă între datele de Început și Sfârșit perioadă introduse în primul tab *Parametri inițiali gestiune*;   
**Număr înregistrare**: este propus automat. Este un progresiv pe gestiune care se resetează în fiecare zi, reluând automat de la numărul 1. Ambele date sunt editabile de utilizator;

:::note Notă
După introducerea primului articol în tabel, data și numărul înregistrării devin read-only.
:::

După introducerea aceste date, utilizatorul poate continua cu introducerea mișcărilor în tabelul articolelor.

**Document intern**: în acest câmp utilizatorul poate oferi o informație suplimentară privind motivul pentru care este creată înregistrarea. Dacă înregistrarea a fost creată automat din înregistrarea unei *Semnalări de producție*, afișează indicația privind numărul semnalării și faza pentru care a fost efectuată.  
**Document intern**: permite inserarea datei referitoare la documentul pe baza căruia inserează înregistrarea. Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp este setată automat data introducerii documentului.  
Dacă înregistrarea a fost creată automat din înregistrarea unei *Semnalări de producție*, afișează data de început efectivă a ordinului de producție pentru care a fost efectuată semnalarea de producție.

**Versiune**: cu acest combo-box utilizatorul poate seta o versiune diferită de cea implicită, propusă automat de procedură;

**Cont**: în aceste 3 câmpuri sunt specificate datele relative Clientului/Furnizorului: *cont sintetic*, *cont analitic*, *nume companie*.  
Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp sunt setate automat datele clientului sau ale furnizorului documentului.

**Document de referință**: reprezintă documentul care a generat înregistrarea.  
Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp este setată automat o descriere parametrică a documentului, cu referire la tipul documentului și numărul său.  
Dacă înregistrarea a fost creată automat din înregistrarea unei *Semnalări de producție*, afișează numărul ordinului de producție pentru care a fost efectuată semnalarea de producție.

**Proiect**: cu dublu click se deschide *Help proiecte* care permite asocierea unui proiect la înregistrare care se inserează. Aceasta este apoi replicată în fiecare rând articol introdus în tabel;

**Notă**: în acest câmp se poate insera o notă liberă pentru înregistrarea de gestiune.



### Articole

În acest prim tabel utilizatorul poate introduce, folosind *Help articole*, lista de articole care vor fi înregistrate.

**Număr mișcare**: în această coloană apare numărul progresiv al mișcării. Acesta începe întotdeauna de la 1 și este un simplu progresiv care se resetează imediat ce se deschide o altă înregistrare de depozit. Câmpul este read-only și nu permite recuperarea manuală a numerelor de mișcare, în cazul eliminării manuale a rândurilor de mișcare.

**Clasă**: permite selectarea clasei articolului;

**Cod articol**: permite inserarea codului atât manual, cât și utilizând *Help Articole*;

**Variantă**: permite selectarea variantei articolului. Dacă articolul nu prezintă variante, combo-box-ul este dezactivat;

**Unitate de măsură**: afișează, în read-only, codul unității de măsură a articolului;

**Unitate de măsură alternativă**: permite selectarea variantei unității de măsură alternative ale articolului, pentru a efectua mișcarea imputând cantitatea în unitatea de măsură alternativă aleasă. Cantitatea ar fi în acest caz calculată automat pe baza factorului de conversie setat în *Registrul articolului* > tab *UM Alternative*;
Cantitate mișcare (Quantità movimento)

**Cantitate mișcare**: acest câmp este obligatoriu și trebuie să conțină cantitatea mișcării, exprimată în unitatea de măsură principală a gestiunii (U.M. gestionară), dacă câmpul U.M. alternativă (U.M. alt.) este necompletat. În caz contrar, cantitatea se exprimă în unitatea de măsură alternativă specificată în *U.M. alt.*
După introducerea codului articolului și validarea acestuia, procedura atribuie automat cantității mișcării valoarea implicită „1”. Această valoare poate fi ulterior modificată de utilizator. Cantitatea trebuie introdusă întotdeauna în valoare absolută, tipul de mișcare (încărcare/descărcare) fiind determinat automat de șablonul de gestiune specificat.

**Cantitate gestionară**: această coloană afișează, în mod read-only, cantitatea exprimată în unitatea de măsură a articolului. Aceasta este identică cu cantitatea mișcării dacă *U.M. alt.* este necompletat. În caz contrar, coloana devine editabilă, iar utilizatorul trebuie să introducă manual cantitatea gestionară. Sistemul va calcula automat cantitatea mișcării, utilizând factorul de conversie definit în *Registrul articolului* > tab *UM Alternative*, în funcție de setările din *Parametrii inițiali de gestiune*.

**Valoare mișcare**: în această coloană este afișată automat valoarea corespunzătoare unui *cost ultim, cost mediu, cost standard* sau *preț de vânzare*, în baza șablonului de gestiune utilizat.  
Dacă în șablon este indicat *Niciun cost propus*, sistemul atribuie valoarea 0.  
Dacă *U.M. alt.* este necompletat, valoarea mișcării este identică cu valoarea gestionară; altfel, trebuie introdusă manual valoarea unitară a articolului, raportată la unitatea de măsură alternativă.  
Dacă opțiunea *Afișează tooltip de stoc în înregistrări* este activată în *Parametrii inițiali de gestiune*, utilizatorul poate vizualiza stocul curent al articolului în gestiunea selectată. În cazul în care stocul este insuficient, iar opțiunea *Permite stoc negativ* este dezactivată, salvarea rândului mișcării nu va fi permisă.

**Valoare gestionară**: afișează automat valoarea corespunzătoare *costului ultim, mediu, standard* sau *prețului de vânzare*, în baza șablonului de gestiune utilizat.  
Dacă în șablon este indicat *Niciun cost propus*, sistemul atribuie valoarea 0.  
Dacă *U.M. alt.* este necompletat, valoarea gestionară este identică cu valoarea mișcării. Altfel, această coloană, întotdeauna read-only, calculează valoarea gestionară utilizând formula:  
*Valoare mișcare * Cantitate mișcare / Cantitate gestionară*.

**Proiect**: reprezintă comandă de vânzare asociată rândului mișcării utilizând *Help proiecte*, accesibil cu dublu click pe câmpul galben.

**Valoare totală**: câmp read-only, în care se afișează valoarea totală a rândului mișcării, calculată automat prin înmulțirea cantității gestionare cu valoarea gestionară.

**Descriere articol**: sse completează automat cu descrierea articolului imediat ce acesta este recunoscut de sistem.

**Descriere variantă**: se completează automat cu descrierea variantei articolului recunoscute de sistem.

**Note**: permite introducerea unor observații suplimentare referitoare la rândul mișcării.

**Locație**: specifică locația de unde articolul va fi descărcat sau unde va fi încărcat, în funcție de tipul șablonului de gestiune.

**Greutate netă**: afișează greutatea netă totală a articolului, calculată prin înmulțirea greutății nete din registrul articolului cu cantitatea din rând.

**Greutate brută**: afișează greutatea brută totală a articolului, calculată similar greutății nete, dar utilizând greutatea brută.

În momentul salvării rândului mișcării, sistemul verifică completitudinea datelor. Dacă sunt necesare informații suplimentare despre loturi și/sau numere seriale, procedura va solicita utilizatorului completarea acestora.

### Loturi și Numere Seriale

#### Loturi

Această secțiune este activă dacă șablonul de gestiune are activată opțiunea *Gestionare loturi* și articolul este setat ca fiind gestionat pe loturi. Utilizatorul trebuie să completeze informațiile privind loturile, în funcție de tipul mișcării:

> **1° caz: Înregistrare de încărcare**  
După salvarea rândului, utilizatorul trebuie să completeze tabelul *Loturi*. Coloanele disponibile includ:  

**Tip cod lot**: tipul codului lotului definit în registrul articolului.  
**Tip lot**: se poate selecta opțional un tip de lot din combo-box.  
**Număr lot**: reprezintă codul lotului de încărcat, construit pe baza regulilor stabilite în *Parametrii inițiali de gestiune* asociați tipului de cod lot introdus. Câmpul este de culoare galbenă deoarece utilizatorul poate decide să efectueze o nouă încărcare a unui lot deja existent în baza de date. În acest caz, cu un dublu clic pe câmpul galben care deschide *Help loturi*, poate alege lotul de încărcat filtrându-l între loturile gestionate până în acel moment în baza de date și în compania în care se află;

**Cod lot furnizor**: permite inserarea manuală a codului lotului furnizor (deci numele pe care furnizorul îl atribuie lotului). Este un câmp care nu este generat automat în timpul operațiunilor de încărcare și nu este obligatoriu. În cazul în care *Cod lot* este introdus folosind *Help loturi*, această coloană va fi completată automat cu *Lotul furnizor* asociat lotului ales;

**Dată început**: afișează aceeași dată a înregistrării de gestiune, editabilă de utilizator. În cazul în care *Cod lot* este introdus folosind *Help loturi*, această coloană va fi completată automat cu data de început a lotului ales;

**Dată scadenţă**: afișează data de expirare a lotului, editabilă de utilizator, care este calculată, pornind de la data de început la care se adună zilele de valabilitate ale lotului introduse în tab-ul *Loturi/SN* din registrul articolului. În cazul în care *Codul lot* este introdus folosind *Help loturi*, această coloană va fi completată automat cu data de expirare a lotului ales;

**Cantitate**: afișează cantitatea pe care dorim să o atribuim lotului introdus. În cazul creării lotului prin apăsarea butonului „Auto”, cantitatea este completată automat cu cantitatea conținută în linia mișcării. Aceasta poate fi editată de utilizator, care poate decide să modifice cantitatea, diminuând-o, efectuând apoi click pe butonul „Auto” pe linia următoare. În acest mod va crea un nou lot, cu caracteristici similare lotului deja introdus, dar cu un *Cod lot* diferit;

**Închis**: dacă este activat, indică faptul că lotul a fost complet descărcat din gestiune. Logic, în cazul încărcării lotului, opțiunea rămâne întotdeauna dezactivat;

**Lot vandabil**: dacă este activat, indică faptul că lotul este disponibil pentru a fi prelevat în documentele de vânzare, producție sau în înregistrările de gestiune. Practic, este o posibilitate pe care utilizatorul o are pentru a defini oportunitatea de a preleva sau nu un lot, alternativ la gestionarea, mai complexă și detaliată, a stărilor lotului. Așadar, în cazul încărcării automate a lotului, opțiunea rămâne activă în mod implicit, chiar dacă utilizatorul poate decide deja în această fază să o dezactiveze, făcând astfel lotul indisponibil;

**Notă**: reprezintă o notă referitoare la lotul care se încarcă. În cazul în care *Cod lot* este introdus folosind *Help loturi*, această coloană va fi completată automat cu nota asociată lotului ales.

După ce utilizatorul a completat inserarea loturilor în tabelul *Loturi* și s-a asigurat că în linia mișcării cantitatea este egală cu suma cantităților loturilor încărcate, poate salva linia mișcării fără a mai primi mesaje de eroare de la procedură.

> *2° cazul: Înregistrare descărcare*

În momentul salvării liniei mișcării, procesul va pune linia respectivă în starea *Actualizare*, solicitând utilizatorului să acceseze tabelul *Loturi* și să completeze detaliile loturilor de descărcat.

#### Coloane specifice

**Număr loturi**: cu un dublu clic pe câmpul galben care deschide *Help loturi*, utilizatorul poate alege lotul de descărcat;

**Cod lot furnizor**: această coloană este completată automat cu *Lotul furnizorului* asociat lotului ales;

**Dată început**: afișează data de început a lotului ales;

**Dată scadenţă**: afișează data de expirare a lotului ales;

**Cantitate**: afișează cantitatea pe care dorim să o descărcăm din lotul ales. Aceasta poate fi editată de utilizator, care poate decide să modifice cantitatea, diminuând-o, și să efectueze apoi o altă căutare cu ajutorul *Help loturi*, dar pe linia următoare;

**Locație**: afișează locația în care este încărcat lotul ales.

După ce a completat introducerea loturilor de descărcat în tabelul *Loturi*, asigurându-se că pe  liniei mișcării cantitatea este egală cu suma cantităților loturilor descărcate, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

### Numere seriale

În acest tabel, activ doar dacă șablonul de gestiune utilizat are opțiunea *Gest. loturi* activată și dacă articolul este semnalat ca articol gestionat cu numere seriale, utilizatorul trebuie să introducă obligatoriu informațiile asociate numerelor seriale de mișcat.

Înregistrarea de gestiune poate fi de încărcare sau de descărcare. În funcție de cele 2 cazuri diferite, tabelul *Numere seriali* are utilizări și setări diferite.

> *1° caz: Înregistrare de încărcare (Registrazione di carico)*

În momentul salvării liniei mișcării, procesul va pune linia respectivă în starea *Actualizare*, solicitând utilizatorului să acceseze tabelul *Numere Seriali* și să indice detaliile numerelor seriale de încărcat.

#### Câmpuri specifice

**Tip serial number**: reprezintă automat tipul codului SN introdus în registrul articolului. Acesta este însă modificabil;

**Serial number**: reprezintă codul numărului serial de încărcat, construit pe baza regulilor stabilite în *Parametrii inițiali de gestiune* asociați tipului de cod SN introdus. Este un câmp editabil.

**Client serial number**: indică Numărul Serial utilizat de client;

**Furnizor serial number**: indică Numărul Serial utilizat de furnizor;

**Dată început**: indică data de început de valabilitate a Numărului Serial;

**Dată scadenţă**: indică data de expirare a Numărului Serial;

**Data ultimei modificări**: indică data ultimei modificări;

**Anulat**: indică faptul că Numărul Serial se află în stare anulată;

**Închis forțat**: indică faptul că Numărul Serial a fost închis forțat;

**Lot**: indică numărul lotului corespunzător acelui Număr Serial.

După ce utilizatorul a completat introducerea loturilor în tabelul *Numere seriale*, și s-a asigurat că în linia mișcării cantitatea este egală cu numărul Numerelor seriale introduse în tabel, poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

> *2° cazul: Înregistrare de descărcar*
În momentul salvării liniei mișcării, procesul va pune linia respectivă în starea *Actualizare*, solicitând utilizatorului să acceseze tabelul *Numere Seriali* și să indice detaliile numerelor seriale de descărcat.

#### Câmpuri specifice  

**Număr serial**: cu un dublu clic pe câmpul galben care deschide *Help numere seriale*, utilizatorul poate alege lotul de descărcat;

**Dată inserare**: indică data introducerii Numărului Serial;

**Client serial number**: indică Numărul Serial utilizat de client;

**Furnizor serial number**: indică Numărul Serial utilizat de furnizor;

**Dată ultimă modificare**: indică data ultimei modificări;

**Dată început**: indică data de început a valabilității numărului serial;

**Anulat**: indică faptul că numărul serial se află în stare anulată;

**Lot**: indică numărul lotului corespunzător numărului serial.

După ce utilizatorul a completat introducerea numerelor de descărcat în tabelul *Numere seriale*, și s-a asigurat că în linia mișcării cantitatea este egală cu numărul Numerelor seriale introduse în tabel, poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.
### Centre de cost

În acest tabel, utilizatorul poate asocia liniei mișcării unul sau mai multe centre de cost, atribuind astfel cantități diferite ale mișcării diverselor centre de cost.

Cu dublu clic in *Help Centre de cost*, utilizatorul poate selecta centrul de cost, completând apoi linia cu cantitatea la care acest centru de cost trebuie să se raporteze. Dacă suma cantităților introduse în rândurile tabelului centrelor de cost este diferită de cantitatea gestionară a liniei mișcării, procedura va lansa un avertisment și va împiedica salvarea mișcării.

### Extra Data

Vă rugăm sa consultați documentul [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Contrapartidă

Acest tab are aceeași structură și funcționalitate ca tab-ul *Înregistrare*, fiind activat doar în cazul în care șablonul de gestiune configurat în tab-ul *Înregistrare* include o gestiune și un șablon de contrapartidă. Șablonele de contrapartidă sunt utilizate atunci când se dorește gestionarea unei mișcări de gestiune duble într-o singură înregistrare. Astfel, în tabelul șablonelor de gestiune, se poate defini un șablon de încărcare în contrapartidă pentru un șablon de descărcare și viceversa.

În tab-ul *Contrapartidă*, sunt redate exact aceleași informații setate în tab-ul *Înregistrare*, însă utilizatorul are posibilitatea de a modifica doar anumite date de antet, cum ar fi: Document intern, Document de referință și Comandă de vânzare.

Datele liniei mișcării trebuie să fie identice în cele două tab-uri. De asemenea, aceleași reguli se aplică pentru tabelele Loturi, Numere de Serie, Variante și Centre de Cost ale fiecărei mișcări. Singurul câmp editabil în tab-ul *Contropartidă* este câmpul *Locație*.

În cazul unui scenariului **special**, în care în tab-ul *Înregistrare* este introdus un articol și în tab-ul *Contrapartidă* sunt introduse altele, acest lucru se întâmplă doar atunci când șablonul de contrapartidă asociat șablonului principal are activată opțiunea *Listă componente*. Aceasta este o opțiune care permite utilizatorului să încarce articolul în tab-ul *Înregistrare* (utilizând un șablon de încărcare) și să vizualizeze lista sa de componente în tab-ul *Contrapartidă*, unde va fi afișat un șablon de descărcare. Evident, acest proces poate fi gestionat și invers.

O situație **particulară** în care se gestionează șabloanele cu contrapartida asociată este descărcarea automată a *Avizului de livrare în sistem lohn*, care se referă la descărcarea materialelor destinate livrării către terți din gestiunea de materii prime (sau semifabricate, în funcție de caz), urmată de descărcarea imediată și consecventă a acelorași materiale în gestiunea terțului, care trebuie ulterior utilizate pentru a produce bunurile solicitate prin ordinul în sistem lohn.

Pentru tot ceea ce nu este detaliat în acest document privind funcționarea comună a form-urilor, consultați link-ul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).