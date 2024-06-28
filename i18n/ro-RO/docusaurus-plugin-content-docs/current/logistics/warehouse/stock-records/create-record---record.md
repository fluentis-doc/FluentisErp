---
title: Înregistrare
---

Acest tab este constituit dintr-un antet și 4 griduri. În primul se inserează articolele care sunt mișcate cu înregistrarea de gestiune; celelalte 3 sunt utilizate în funcție de setările făcute în registrul articolului și în șablonul de gestiune inserat în antet.

**Antet înregistrare**:

Se inserează mai întâi codul gestiunii în care se va face înregistrarea. Procedura inserează automat data înregistrării (Data înreg.) egală cu data curentă și numărul ei, care este un progresiv pe gestiune care se șterge zilnic, pornind automat de la numărul 1. Ambele date pot fi modificate de utilizator; data înregistrării reprezintă ziua în care sunt efectuate înregistrările de gestiune care vor fi apoi inserate în gridul relativ, deci poate fi modificată inserând, de exemplu, o dată precedentă datei curente. Această dată trebuie însă să fie întodeauna în intervalul de date pentru începutul și sfârșitul perioadei inserate în primul tab din Parametri inițiali de gestiune. Observație: după inserarea primului articol în grid, data și numărul înregistrării devin read only.

A doua informație obligatorie pentru inserarea mișcărilor de gestiune este șablonul de gestiune care se selectează din relativul combo box, în care sunt propuse doar șabloanele asociate gestiunii selectate. După ce a inserat și această informație, utilizatorul poate insera mișcările în gridul articolelor. Descriem, în continuare, alte câmpuri afișate:

**Cdc** ****: în acest câmp, utilizând ‘Help centre de cost', se poate insera centrul de cost care trebuie să fie asociat întregii înregistrări de gestiune. Observație: această operație poate fi efectuată doar după ce a fost inserată cel puțin o linie în gridul articolelor; în acest caz, procedura va insera, pentru fiecare linie a mișcării, centrul de cost inserat în antet;

**Doc. int.** **: **în acest câmp, numit ‘Document intern', utilizatorul poate insera o ulterioară notă pentru a motiva crearea înregistrării. Dacă înregistrarea a fost creată automat din înregistrarea unei semnalări de producție, în acest câmp apare numărul semnalării și faza pentru care aceasta a fost efectuată;

**Versiune** ****: cu ajutorul acestui combo box,  utilizatorul poate insera o versiune diferită de cea implicită, propusă automat de procedură;

**Doc. ref.** **: în acest câmp, numit ‘Document de referință', utilizatorul poate specifica motivul principal pentru care se inserează înregistrarea de gestiune. Dacă înregistrarea a fost creată automat prin intermediul încărcării sau descărcării unui document, în acest câmp se inserează automat o descriere parametrică a documentului, în care apar descrierea tipului documentului și numărul său. Dacă înregistrarea a fost creată automat din înregistrarea unei semnalări de producție, în acest câmp apare numărul ordinului de producție pentru care a fost efectuată semnalarea de producție. Este un câmp editabil, chiar dacă este completat automat de aplicație;

**Data doc. ref.** **: în acest câmp, numit ‘Dată document de referință', utilizatorul poate specifica o dată relativă la documentul pe baza căruia inserează înregistrarea. Dacă înregistrarea a fost creată automat prin intermediul încărcării sau descărcării unui document, în acest câmp se setează automat data inserării documentului. Dacă înregistrarea a fost creată automat din înregistrarea unei semnalări de producție, în acest câmp apare data pentru începerea efectivă a ordinului de producție pentru care a fost efectuată semnalarea de producție. Este un câmp editabil, chiar dacă este completat automat de aplicație;

**Comanda** ****: cu dublu clic se deschide ‘Help comenzi' care permite asocierea unei comenzi de vânzare întregii înregistrări care tocmai se inserează. Această este apoi replicată în fiecare linie articol inserată în grid;

**Cli/Fur** ****: în aceste 3 câmpuri se inserează datele relative la client sau furnizor (cu dublu clic se poate deschide ‘Help-ul conturilor' din care se selectează partenerul care va fi asociat înregistrării). Dacă înregistrarea a fost creată automat prin intermediul încărcării sau descărcării unui document, în acest câmp sunt inserate automat datele clientului sau furnizorului din antetul documentului.

**Grid articole/mișcări**:

În acest grid, utilizatorul poate insera cu ajutorul ‘Help-ului articolelor', lista cu articolele care vor fi mișcate.

Descriem în continuare coloanele prezente în grid:

**Clasa** **: **reprezintă clasa articolului;

**Cod articol** **: în această coloană se poate insera manual codul articolului sau se poate utiliza Helpul articolelor, care permite căutarea articolului pe baza filtrelor de căutare;

**Variantă** ****: cu ajutorul acestui combo box, utilizatorul poate selecta și insera una din variantele articolului. Dacă articolul nu are variante, combo box-ul este inactiv;

**Opțiune** **: reprezintă opțiunea articolului. De obicei, se inserează automat opțiunea implicită (Opțiunea bază). Această informație este obligatorie; fără ea nu se poate salva linia mișcării;

**Descriere opțiuni** **: reprezintă descrierea opțiunii inserite;

**U.M. gest.** **: **reprezintă unitatea de măsură gestională a articolului; este read only;

**U.M. alt.** **:  în această coloană utilizatorul poate selecta, cu ajutorul combo box-ului, codul unei unități de măsură alternative articolului, acolo unde există, cu scopul de a executa mișcarea inserând cantitatea în unitatea de măsură alternativă aleasă. Cantitatea gestională ar fi, în acest caz, calculată automat pe baza factorului de conversie inserat în tab ‘UM Alternative' din registrul articolului;

**Cantitate mișcare**: în această coloană utilizatorul trebuie să insereze cantitatea mișcării, exprimată în unitatea de măsură gestională în cazul în care coloana ‘U.M. alt.' este necompletată; în caz contrar, cantitatea ar fi exprimată în unitatea de măsură alternativă inserată în coloana ‘U.M. alt.'. După ce utilizatorul a inserat codul articolului, cantitatea mișcării este inserată automat egală cu 1; în acest moment utilizatorul poate să o modifice. Cantitatea mișcării trebuie inserată tot timpul în valoare absolută, deoarece tipul de mișcare de încărcare/descărcare este determinat de tipul șablonului utilizat;

****Cantitate **gestională** **: în această coloană apare, în read only, cantitatea exprimată în unitatea de măsură gestională a articolului. Aceasta este identică cu cantitatea mișcării în cazul în care coloana ‘U.M. alt.' este goală; în caz contrar, coloana devine editabilă și utilizatorul trebuie să insereze cantitatea gestională manual, fapt care determină calculul automat al cantității mișcării care ar avea valoarea egală cu cantitatea gestională divizată sau multiplicată (pe baza setărilor făcute în Parametrii inițiali de gestiune) cu factorul de conversie inserat în tab ‘UM alternative' din registrul articolului;

**Valoare mișcare** **: în această coloană apare automat valoarea costului ultim, al costului mediu, al costului standard sau al prețului de vânzare pe baza setărilor șablonului de gestiune utilizat în înregistrare. În cazul în care, în șablon apare cost propus ‘Nici unul', procedura propune drept cost înregistrare o valoare egală cu zero. În cazul în care coloana ‘U.M. alt.' este goală, valoarea mișcării rezultă întodeauna identică cu valoarea gestională; în mod contrar, în această coloana ar trebui inserată valoarea unitară a articolului pe baza unității de măsură alternative inserate în linia mișcării. În cazul în care, în Parametrii inițiali de gestiune, este activat, pentru anul în curs, flag-ul ‘Vizualizează tooltip de stoc în înregistrări', procedura afișează, într-un tooltip, stocul acelui articol în gestiunea în care se crează mișcarea, exact în momentul în care utilizatorul inserează sau schimbă cantitatea; în cazul în care stocul nu este suficient și în Parametrii inițiali de gestiune este dezactivat pentru anul în curs, flag-ul ‘Permite stoc negativ' pentru acea gestiune, linia mișcării nu va fi salvată;

****Valoare** gestională** **: în această coloană apare automat valoarea costului ultim, al costului mediu, al costului standard sau al prețului de vânzare pe baza setărilor șablonului de gestiune utilizat în înregistrare. În cazul în care, în șablon apare cost propus ‘Nici unul', procedura propune drept cost înregistrare o valoare egală cu zero. În cazul în care coloana ‘U.M. alt.' este goală, valoarea gestională rezultă întodeaua identică cu valoarea mișcării; în mod contrar, în această coloana, care este read only, va fi calculată valoarea unitară a mișcării pe baza unității de măsură gestionale, cu ajutorul următoarei formule: Valoare mișcare * Cantitate mișcare/Cantitate gestională;

**Comandă de vânzare** **: în această coloană, cu ajutorul ‘Help-ului comenzi', utilizatorul poate insera comanda de vânzare care trebuie să fie asociată liniei mișcării;

**Valoare totală** **: în această coloană apare automat, valoarea totală a liniei mișcării. Această valoare rezultă din multiplicarea cantității gestionale cu valoarea gestională;

****Descriere **articol** **: **în această coloană apare automat descrierea articolului;

****Descriere **variantă** **: în această coloană apare automat descrierea variantei articolului;

**Număr mișcare** **: în această coloană apare automat numărul progresiv al mișcării. Pornește întodeauna de la 1 și este un simplu progresiv care se șterge imediat ce se deschide o altă înregistrare de gestiune. Câmpul este read only și nu permite recuperarea manuală a numerelor mișcării în cazul eliminării manuale a liniiilor mișcării.

În momentul în care utilizatorul salvează linia mișcării, procedura poate executa corect salvarea și permite inserarea unei noi mișcări sau poate impune utilizatorului să insereze cu ajutorul încărcării loturilor și/sau numerelor de serie din gridurile inferioare.

**Loturi** ****:

În acest grid, activ doar dacă șablonul de gestiune utilizat are flag-ul ‘Gest. loturi' activ și dacă articolul este gestionat cu loturi, utilizatorul trebuie să insereze informațiile asociate lotului sau loturilor care vor fi mișcate.

Înregistrarea de gestiune poate fi de încărcare sau de descărcare; în funcție de caz, gridul loturilor are utilizări și setări diferite.

**Înregistrare de încărcare**

În momentul în care utilizatorul salvează linia mișcării, procedura lasă în ‘update' linia, și obligă utilizatorul să se mute în gridul Loturi pentru a insera detaliile loturilor de încărcat.

Descriem în continuare următoarele coloane:

**Auto** ****: apăsând acest buton, procedura execută crearea automată a lotului, pe baza tipului codului lotului asociat registrului articolului și pe baza numărului de zile scadența inserat tot în registru;

**Tip cod** **: după apăsarea butonului ‘Auto', aplicația inserează automat tipul codului lotului inserat în registrul articolului. Este un câmp editabil;

**Tip lot** **: este un câmp opțional și se inserează utilizând datele din combo box, date preluate din tabelul omonim;

**Loturi n.** **: **după apăsarea butonului ‘Auto', aplicația inserează automat codul lotului de încărcat, construit pe baza regulilor inserate în Parametrii inițiali de gestiune asociate la tipul codului lotului inserat. Este un câmp editabil, deci se poate evita utilizarea butonului ‘Auto' pentru a insera manual codul lotului;

**Lot furn.** ****: în această coloană se inserează manual codul lotului furnizorului, care de obicei este numele pe care furnizorul îl atribuie lotului. Este un câmp opțional, care nu se generează automat în timpul operațiilor de încărcare. În cazul în care codul lotului este inserat cu 'Help loturi', această coloana se completează automat cu lotul furnizorului atașat la lotul ales;

**Data început** **: în această coloană apare automat data înregistrării de gestiune; este un câmp editabil. În cazul în care codul lotului este inserat cu 'Help loturi', această coloana se completează automat cu data început a lotului ales;

**Data scad.** **: în această coloană apare automat data scadenței lotului care se calculează pornind de la data început și adunând zilele de valabilitate a lotului inserat în tab Loturi/NS din registrul articolului. În cazul în care codul lotului este inserat cu 'Help Loturi', această coloana se completează automat cu data scadenței lotului ales;

**Cantitate** **: **în acest câmp apare cantitatea care se atribuie lotului inserat. În cazul creeării lotului cu ajutorul butonului ‘Auto', cantitatea se completează automat cu cantitatea din linia mișcării; este un câmp editabil, utilizatorul putând să decidă modificarea cantității, executând apoi iar clic pe butonul ‘Auto' dar pe linia inferioară: astfel se creează un nou lot, cu caracteristici similare lotului deja inserat dar cu codul lotului diferit;

**Închis** **: dacă este activ, indică faptul că lotul este complet descărcat din gestiune. În cazul încărcării lotului flagul rezultă inactiv;

**L. vânz** **.**: acest flag ‘Lot care se poate vinde', dacă este activ, indică faptul că lotul este disponibil pentru a fi transferat în documentele de vânzare, de producție sau în înregistrările de gestiune. Este o posibilitate pe care o are utilizatorul pentru a extrage sau nu un lot, operație alternativă la gestionarea stării lotului. Deci, în cazul încărcării automate a lotului, flag-ul rezulta activ implicit, chiar dacă utilizatorul poate decide deja în această fază dezactivarea lui, făcând astfel indisponibil lotul;

**Descriere** **: în acest câmp se poate insera o notă relativă la lotul care tocmai se încarcă. În cazul în care codul lotului este inserat cu 'Help Loturi', această coloana se completează automat cu nota asociată la lotul ales.

După completarea gridului ‘Loturi', făcând astfel încât cantitatea liniei mișcării să fie egală cu suma cantităților loturilor încărcate, utilizatorul poate să salveze linia mișcării fără să mai primească mesaje de eroare de la procedură.

**Înregistrare de descărcare**

În momentul în care utilizatorul salvează linia mișcării, procedura lasă în ‘update' linia, și obligă utilizatorul să se mute în gridul Loturi pentru a insera detaliile loturilor de descărcat.

Descriem în continuare următoarele coloane:

**Loturi n.** **: în această coloana, cu ajutorul ‘Help-ului loturi', utilizatorul are posibilitatea să aleagă lotul care va fi descărcat, filtrând loturile disponibile în gestiunea înregistrării;

**Lot furn.** ****: această coloană se completează automat cu lotul furnizorului atașat la lotul ales;

**Data început** **: **în această coloană apare automat data început a lotului ales;

**Data scad.** **: ** **în această coloană apare automat data scadenței lotului ales;

**Cantitate** ****: în acest câmp este afișată cantitatea aleasă pentru a fi descărcată din lotul ales. Este un câmp editabil, utilizatorul putând să decidă modificarea cantității;

**Locație** **: în acest câmp este afișată locația în care este încărcat lotul ales.

După completarea gridului ‘Loturi', făcând astfel încât cantitatea liniei mișcării să fie egală cu suma cantităților loturilor descărcate, utilizatorul poate să salveze linia mișcării fără să mai primească mesaje de eroare de la procedură.

**Numere de serie** ****:

În acest grid, activ doar dacă șablonul de gestiune utilizat are flag-ul ‘Gest. loturi' activ și dacă articolul este gestionat cu numere de serie, utilizatorul trebuie să insereze informațiile asociate numerelor de serie care vor fi mișcate.

Înregistrarea de gestiune poate fi de încărcare sau de descărcare; în funcție de caz, gridul numerelor de serie are utilizări și setări diferite.

**Înregistrare de încărcare**

În momentul în care utilizatorul salvează linia mișcării, procedura lasă în ‘update' linia, și obligă utilizatorul să se mute în gridul Numere de serie pentru a insera detaliile NS de încărcat.

Descriem în continuare următoarele coloane:

**Auto** **: apăsând acest buton, procedura execută crearea automată a NS, pe baza tipului codului NS asociat registrului articolului și pe baza numărului de zile scadența inserat tot în registru. Se creează însă doar primul număr de serie; în grid trebuie să fie inserat un număr de linii egale cu cantitatea inserată în linia mișcării. Deci, de exemplu, dacă linia mișcării are o cantitate de 30 de bucăți, în gridul NS trebuie să fie inserate 30 NS, unul pentru fiecare linie din grid. Sistemul cel mai rapid pentru a crea automat numerele de serie în acest grid, este utilizarea câmpului extern ‘Propune automat NS', în care se poate insera primul număr dintre NS care trebuie încărcate și apoi se apasă butonul ‘Propune N.S.', care, pornind de la primul număr de serie inserat, creează toate celelalte numere de serie cerute de cantitatea liniei mișcării; 

**Tipuri NS** ****: după apăsarea butonului ‘Auto', aplicația inserează automat tipul codului NS inserat în registrul articolului. Este un câmp editabil;

**Număr de serie** **: după apăsarea butonului ‘Auto', aplicația inserează automat codul NS care trebuie încărcat, construit pe baza regulilor inserate în Parametrii inițiali de gestiune asociate la tipul codului NS inserat. Este un câmp editabil;

După completarea inserării loturilor care trebuie încărcate în gridul ‘Numere de serie', făcând astfel încât cantitatea liniei mișcării să fie egală cu numărul NS inserate în grid, utilizatorul poate să salveze linia mișcării fără să mai primească mesaje de eroare de la procedură.

**Înregistrare de descărcare**

În momentul în care utilizatorul salvează linia mișcării, procedura lasă în ‘update' linia, și obligă utilizatorul să se mute în gridul numerelor de serie pentru a insera detaliile NS de descărcat.

Descriem în continuare următoarele coloane:

**Nr**: reprezintă numărul liniei; este un progresiv generat automat;

**Număr de serie** **: în această coloană utilizatorul trebuie să insereze NS cu ajutorul ‘Help-ului numerelor de serie' .

După completarea inserării loturilor care trebuie descărcate din gridul ‘Numere de serie', făcând astfel încât cantitatea liniei mișcării să fie egală cu numărul NS inserate în grid, utilizatorul poate să salveze linia mișcării fără să mai primească mesaje de eroare de la procedură.

**Variante** ****:

În acest grid utilizatorul poate gestiona mișcarea articolului cu variante utilizând posibilitatea de a utiliza prezența unui ‘Atribut' implicit care se inserează în tab ‘Atribute' din registrul articolului. Inserând atributul implicit în combo box-ul care se află deasupra gridului, utilizatorul poate asocia la aceeași linie mișcare mai multe cantități ale diverselor variante ale aceluiași articol, permițând deci procedurii să execute automat suma cantităților fiecărei linii de variante inserate și să o insereze în cantitatea gestională a liniei mișcării.

Gridul este compus dintr-o coloană în care se poate selecta varianta articolului și o coloană în care trebuie să fie inserată cantitatea pentru acea variantă. Gridul este utilizabil doar dacă în registrul articlului este prezent un atribut implicit.

Modalitatea de inserare a datelor în acest grid nu se modifică dacă înregistrarea este de încărcare sau de descărcare.

**Centre de cost pentru fiecare mișcare** ****:

În acest grid utilizatorul poate atașa la linia mișcării unul sau mai multe centre de cost, atribuind deci diferite cantități ale mișcării la diferite centre de cost.

Se inserează coloana CdC, care se poate completa utilizând 'Help-ul centrelor de cost', și cantitatea. În cazul în care suma cantităților inserate în liniile din gridul centrelor de cost este diferită de cantitatea gestională a liniei mișcării, procedura lansează un aviz și nu permite salvarea mișcării.

Observație: dacă, după ce a inserat centrele de cost în fiecare linie a înregistrării, utilizatorul inserează centrul de cost în antetul acesteia, toate centrele de cost inserate în fiecare linie de mișcare vor fi substituite de cel din antet.






