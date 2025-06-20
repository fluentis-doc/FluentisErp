---
title: Înregistrare nouă
sidebar_position: 3
---

:::important Utilizare   
Introducerea înregistrărilor de gestiune în Fluentis reprezintă un element crucial pentru gestionarea eficientă a operațiunilor logistice, permițând înregistrarea precisă a mișcărilor de bunuri în cadrul sistemului. Înregistrările pot fi create automat prin diverse proceduri, cum ar fi încărcarea documentelor (de exemplu, avize și facturi de achiziție) sau descărcarea lor (prin avize și factură de vânzare). Acest proces nu doar că simplifică introducerea mișcărilor, dar asigură și sincronizarea informațiilor între diferitele documente operaționale.

Fiecare înregistrare de gestiune permite operatorului să specifice detalii fundamentale precum gestiunea, șablonul și data. Înregistrarea articolului se face într-un tabel care permite specificarea cantităților și unităților de măsură, cu opțiunea de a gestiona loturi și numere de serie atunci când este necesar. În plus, sunt implementate diverse opțiuni care reglementează necesitatea documentelor obligatorii și tratamentul șabloanelor de contrapartidă, asigurând astfel trasabilitatea și conformitatea operațiunilor de gestiune.

Un alt aspect distinctiv este posibilitatea personalizării înregistrărilor în funcție de nevoile specifice ale gestiunii, alegând între gestionări pe baza locației, proiectului sau clientului/furnizorului. Această flexibilitate permite adaptarea sistemului la diversele configurări logistice ale afacerii, făcând din Fluentis un instrument puternic pentru gestionarea gestiunii.
:::

Form-ul se deschide:
- pe calea **Logistică > Gestiune > Înregistrări > Înregistrare nouă**  
sau  
- făcând clic pe butonul **Nou** din form-ul de căutare **Înregistrări**.

#### Creare automată înregistrări

Înregistrările de gestiune pot fi create automat prin *procedurile de încărcare* de avize de achiziție, facturi de achiziție, primiri de bunuri, prin *procedurile de descărcare* avize de vânzare, facturi de vânzare, liste de dispoziții de livrare, liste de colectare de materiale, avize de livrare sistem lohn, sau prin *procedurile de înregistrare a semnalărilor de producție și a reintrărilor în sistem lohn*. 

#### Creare manuală înregistrări

Utilizatorul poate de asemenea să introducă manual înregistrările de gestiune, completând toate câmpurile necesare în funcție de tipul de articol și de tipul șabloanelor pe care dorește să le utilizeze. 

:::note Notă  
Tabul **Contrapartidă** este activ doar dacă șablonul introdus în primul tab are un șablon de contrapartidă asociat în [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates).     
:::

## Înregistrare

### Date antet

**Gestiune**: reprezintă codul gestiunii în care se face înregistrarea;  
**Șabloan de gestiune**: obligatoriu pentru inserarea mișcărilor de gestiune. Se selectează folosind combo box-ul corespunzător, în care sunt propuse doar șabloanele legate de gestiunea selectată.  
**Data înregistrare**: este propusă automat și este egală cu data curentă, identificând în mod specific ziua în care sunt efectuate mișcările de gestiune care vor fi apoi introduse în tabelul corespunzător; poate fi modificată, setând de exemplu o dată anterioară datei curente. Această dată trebuie să fie totuși întotdeauna cuprinsă între datale de Început și Sfârșit ale Perioadei introduse în primul tab *Parametrii inițiali gestiune*;  
**Număr înregistrare**: este propus automat; este un progresiv pentru gestiune și se resetează zilnic, reluând automat de la numărul 1. 

:::note Notă  
După introducerea primului articol în tabel, data și numărul înregistrării devin read-only.
:::

**Document intern**: în acest câmp, utilizatorul poate insera motivul pentru care se creează înregistrarea. Dacă înregistrarea a fost creată automat din înregistrarea unei *Semnalări de producție*, în acest câmp apare informația referitoare la numărul semnalării și faza pentru care aceasta a fost efectuată; în câmpul data **Documentului intern** utilizatorul poate specifica data referitoare la documentul în baza căruia introduce înregistrarea. Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp se setează automat data de introducere a documentului.  
Dacă înregistrarea a fost creată automat din înregistrarea unei *Semnalări de producție*, acest câmp va afișa data efectivă de începere a ordinului de producție pentru care a fost efectuată semnalarea de producție.  

**Versiune**: prin intermediul acestui combo box, utilizatorul poate seta o versiune diferită de cea implicită, propusă totuși automat de procedură; 

**Cont**: în aceste 3 câmpuri sunt specificate datele corespunzătoare ale Clientului/Furnizorului: *cont*, *subcont*, *denumirea*.  
Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp se setează automat datele clientului sau furnizorului care deține documentul respectiv.

**Document de referință**: în acest câmp utilizatorul poate specifica documentul care a generat înregistrarea însăși.  
Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp se setează automat o descriere parametrizată a documentului, în care apar și descrierea tipului de document și numărul său.  
Dacă înregistrarea a fost creată automat din registrarea unei *Semnalări de producție*, în acest câmp apare numărul comenzii de producție pentru care a fost efectuată semnalarea de producție.  

**Proiect**: cu un dublu clic se deschide un *Help progetti* care permite legarea unui proiect la întreaga înregistrare pe care o introduc. Aceasta este apoi replicată în fiecare dintre liniile de articole introduse în tabel;  

**Notă**: în acest câmp este posibil să introduci o notă liberă referitoare la înregistrarea de gestiune.

Așa cum s-a specificat mai sus, utilizatorul poate, în acest moment, să treacă la introducerea mișcărilor în prima tabel, cea care va conține articolele care trebuie mișcate.

### Articole 

prima dintre acestea fiind cea în care sunt introduse articolele care sunt mișcate prin înregistrarea de gestiune

În această primă tabel, utilizatorul poate introduce, folosind *Help articole (Help articoli)*, lista de articole de mișcat.

**Număr mișcare**: în această coloană apare numărul progresiv al mișcării. Acesta începe întotdeauna de la 1 și este un simplu progresiv care se resetează de fiecare dată când se deschide o altă înregistrare de gestiune. Câmpul este read-only și nu permite recuperarea manuală a numerelor de mișcare, în cazul ștergerii manuale de rânduri de mișcare.

**Clasă**: în acest câmp, prin intermediul combo box-ului corespunzător, este posibil să se selecteze clasa articolului;  

**Cod articol**: în această coloană se poate introduce manual codul sau folosind *Help Articole (Help Articoli)*;  

**Variantă**: prin intermediul acestui combo box utilizatorul poate selecta și introduce una dintre variantele articolului. Dacă articolul nu conține variante, combo box-ul va fi dezactivat;  

**Unitate de măsură**: în această coloană apare, în read-only, codul unității de măsură de gestiune a articolului;  

**Unitate de măsură alternativă**: în această coloană, utilizatorul poate selecta, folosind combo box-ul corespunzător, codul uneia dintre unitățile de măsură alternative ale articolului, dacă sunt disponibile, pentru a efectua mișcarea imputând cantitatea în unitatea de măsură alternativă aleasă. Cantitatea de gestiune va fi calculată automat în funcție de factorul de conversie setat în *Registru articol* > tab *UM Alternative*;  

**Cantitate mișcare**: în această coloană utilizatorul trebuie să introducă obligatoriu cantitatea mișcării, exprimată în unitatea de măsură de gestiune în cazul în care coloana *U.M. alt.* este goală; în caz contrar, cantitatea va fi exprimată în unitatea de măsură alternativă introdusă în coloana *U.M. alt.*. După ce utilizatorul a introdus codul articolului și l-a validat, cantitatea mișcărilor va fi introdusă automat ca fiind egală cu 1; utilizatorul o poate modifica. Cantitatea mișcărilor trebuie să fie întotdeauna introdusă ca valoare absolută, deoarece natura mișcării (încarcă sau descarcă) este determinată de tipul de șablon utilizat;  

**Cantitate de gestiune**: în această coloană apare, în read-only, cantitatea exprimată în unitatea de măsură de gestiune a articolului. Aceasta este identică cu cantitatea de mișcare în cazul în care coloana *U.M. alt.* este goală; în caz contrar, coloana devine editabilă și utilizatorul trebuie să introducă manual cantitatea de gestiune, iar cantitatea de mișcare va fi calculată automat, având astfel o valoare egală cu cantitatea de gestiune împărțită sau înmulțită (în funcție de ceea ce este setat în *Parametrii inițiali de gestiune*) cu factorul de conversie setat în *Registru articol* > tab *UM Alternative*;  

**Valoare mişcare**: în această coloană apare automat valoarea de *cost ultim, cost mediu, cost standard sau preț de vânzare*, în funcție de setările cauzei de gestiune utilizate în înregistrare.  
Dacă în șablon este specificată ca cost propus indicația *Niciunul*, procedura propune ca prețul înregistrării o valoare egală cu zero.  
Dacă coloana *U.M. alt.* este goală, importul mișcării este întotdeauna identic cu importul de gestiune; în caz contrar, în această coloană trebuie introdus importul unitar al articolului în funcție de unitatea de măsură alternativă introdusă în rândul mișcării.  
Dacă în *Parametrii inițiali de gestiune* este activat, pentru anul în curs, flag-ul *Afișează tooltip de stoc în înregistrări*, procedura va vizualiza, într-un tooltip, stocul acelui articol în gestiune la care se creează mișcare, exact în momentul în care utilizatorul introduce sau modifică cantitatea respectivă.  
Dacă stocul nu este suficient și flag-ul *Permite stoc negativ* este dezactivat pentru acel gestiune în *Parametrii inițiali de gestiune*, rândul de mișcare nu va fi salvat.

**Valoare gestională**: în această coloană apare automat valoarea de *cost ultim, cost mediu, cost standard sau preț de vânzare*, în funcție de setările cauzei de gestiune utilizate în înregistrare.  
Dacă în șablon este specificată ca cost propus indicația *Niciunul*, procedura propune ca prețul înregistrării o valoare egală cu zero.  
Dacă coloana *U.M. alt.* este goală, importul de gestiune este întotdeauna identic cu importul mișcării; în caz contrar, în această coloană, care este întotdeauna read-only, va fi calculată valoarea unitară a mișcării pe baza unității de măsură de gestiune, conform următoarei formule: *Valoare mișcare * Cantitate mișcare / Cantitate gestionale*;  

**Proiect**: în această coloană utilizatorul poate introduce, prin intermediul *Help proiecte*, care se deschide cu un dublu clic pe câmpul galben, comanda de vânzare care trebuie asociată rândului de mișcare;  

**Valoare totală**: în această coloană apare, neditabil, importul total al rândului de mișcare. Acesta rezultă din înmulțirea cantității de gestiune cu importul de gestiune;  

**Descriere articol**: în această coloană apare descrierea articolului. Aceasta este setată automat imediat ce articolul introdus de utilizator este recunoscut în tabel;  

**Descriere variantă**: în această coloană apare descrierea variantei articolului. Aceasta este setată automat imediat ce codul variantei articolului introdus de utilizator este recunoscut în tabel;  

**Note**: în acest câmp este posibil să se introducă o notă liberă referitoare la fiecare rând din înregistrarea de gestiune;  

**Locație**: în acest câmp este specificată locația din care va fi descărcat sau în care va fi încărcat articolul, în funcție evident de tipul de șablon de gestiune (încărcare / descărcare);  

**Greutate netă**: se înregistrează greutatea netă totală a rândurilor de articol. Se înregistrează greutatea netă a registrului articolului înmulțită cu cantitatea rândului;  

**Greutate brută**: se înregistrează greutatea brută totală a rândurilor de articol. Se înregistrează greutatea brută a registrului articolului înmulțită cu cantitatea rândului;  

Atunci când utilizatorul procedează la salvarea rândului de mișcare, procedura poate efectua salvarea corectă și poate face disponibil rândul următor pentru introducerea unei noi mișcări, sau poate obliga utilizatorul să finalizeze introducerea prin încărcarea loturilor și/sau a numerelor de serie în grilele corespunzătoare de mai jos.

#### Loturi și Număr de serie

**Loturi**

În această tabel, activă doar dacă șablonul de gestiune utilizată are flag-ul *Gestionare loturi* activat și dacă articolul este desemnat ca articol gestionat pe loturi, utilizatorul trebuie să introducă obligatoriu informațiile legate de lot sau loturi de mișcat.

După cum știm, înregistrarea de gestiune poate fi de încărcare sau de descărcare; în funcție de cele 2 cazuri diferite, tabelul de loturi are utilizări și setări diferite.

> *1° caz: Înregistrare de încărcare*

Atunci când utilizatorul procedează la salvarea rândului de mișcare, procedura lasă rândul în actualizare, invitând utilizatorul să treacă la tabelul *Loturi* și să indice detaliile loturilor de încărcat.

Coloanele prezente în tabel sunt următoarele:

**Tip cod lot**: în această coloană este inserat tipul codului lot introdus în registrul articolului;  

**Tip lot**: în această coloană poate fi introdus opțional de utilizator Tipul Lot, prin intermediul combo box-ului corespunzător, care extrage din tabela omonimă. Este un dat opțional;  

**Număr loturi**: în această coloană este introdus codul lotului care trebuie încărcat, construit pe baza regulilor stabilite în *Parametrii inițiali de gestiune* asociate cu *Tipul codului lot* introdus. Câmpul este galben deoarece utilizatorul ar putea decide să efectueze o nouă încărcare a unui lot deja existent în baza de date; în acest caz, cu un dublu clic pe câmpul galben, ar avea posibilitatea, prin intermediul unui *Help loturi (Help lotti)*, de a alege lotul de încărcat, filtrându-l printre loturile gestionate până în acel moment în baza de date și în compania în care lucrează;**Cod lot furnizor**: în această coloană se introduce manual codul lotului furnizor, adică numele pe care furnizorul îl atribuie lotului. Acesta este un câmp care nu poate fi generat automat în timpul operațiunilor de încărcare și nu este obligatoriu. Dacă Codul Lot este introdus prin *Help loturi*, această coloană va fi completată automat cu Lotul Furnizor asociat lotului ales;

**Dată început**: în acest câmp apare aceeași dată cu a înregistrării de gestiune, editabilă de utilizator. Dacă Codul Lot este introdus prin *Help loturi*, această coloană va fi completată automat cu data de început a lotului ales;

*Dată scadenţă**: în acest câmp apare data de expirare a lotului, editabilă de utilizator, care se calculează pornind de la data de început și adunând zilele de valabilitate ale lotului introduse în tab-ul *Loturi/NS* al registrului articolului. Dacă Codul Lot este introdus prin *Help loturi*, această coloană va fi completată automat cu data de expirare a lotului ales;

**Cantitate**: în acest câmp apare cantitatea pe care se dorește a fi atribuită lotului introdus. În cazul creării lotului prin apăsarea butonului ‚Auto', cantitatea se umple automat cu cantitatea conținută în linia mișcării; aceasta poate fi editată de utilizator, care poate decide să modifice cantitatea, diminuând-o, și apoi să apese din nou butonul ‘Auto' pe linia de sub aceasta: astfel se va crea un nou lot, cu caracteristici similare lotului deja introdus, dar cu Cod Lot diferit;

**Închis**: dacă este activ, evidențiază că lotul a fost complet descărcat din gestiune. Logic, în cazul încărcării lotului, acest flag este întotdeauna dezactivat;

**Lot vandabil**: dacă este activ, indică faptul că lotul este disponibil pentru a fi preluat în documentele de vânzare, de producție sau în înregistrările de gestiune. Practic, aceasta este o opțiune pe care utilizatorul o are pentru a defini posibilitatea de a prelua sau nu un lot, alternativ la gestionarea mai complexă a situațiilor lotului. Așadar, în cazul încărcării automate a lotului, flag-ul este activ implicit, deși utilizatorul poate decide să-l dezactiveze deja în această etapă, făcând astfel lotul indisponibil;

**Notă**: în acest câmp utilizatorul poate introduce o notă referitoare la lotul pe care îl încarcă. Dacă Codul Lot este introdus prin *Help loturi*, această coloană va fi completată automat cu nota legată de lotul ales.

După finalizarea introducerii loturilor în tabelul *loturi*, asigurându-se că cantitatea liniei mișcării este egală cu suma cantităților loturilor încărcate, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

> *Caz 2: Înregistrarea descărcării*

Atunci când utilizatorul salvează linia mișcării, procedura lasă linia în ‘update', invitând utilizatorul să se mute în tabelul loturi și să indice detaliile loturilor de descărcat.

Coloanele din tabel sunt următoarele:

**Număr Loturi**: în această coloană utilizatorul poate, printr-un double-click pe câmpul galben, alege lotul de descărcat utilizând *Help loturi*, filtrându-l printre loturile disponibile în gestiunea înregistrării;

**Cod lot furnizor**: această coloană este completată automat cu *Lotul furnizor* asociat lotului ales;

**Dată început**: în acest câmp apare data de început a lotului ales;

**Dată scadenţă**: în acest câmp apare data de expirare a lotului ales;

**Cantitate**: în acest câmp apare cantitatea pe care se dorește a fi descărcată din lotul ales. Aceasta este editabilă de utilizator, care poate decide să modifice cantitatea, diminuând-o, și să efectueze o nouă căutare folosind ajutorul lotului pe linia de sub aceasta;

**Locație**: în acest câmp se afișează locația în care este încărcat lotul ales.

După finalizarea introducerii loturilor de descărcat în tabelul *loturi*, asigurându-se că cantitatea liniei mișcării este egală cu suma cantităților loturilor descărcate, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

**Numere seriale**

În această tabel, activă doar dacă motivele de gestiune utilizate au flag-ul *Gest. lotti* activat și dacă articolul este definit ca articol gestionat cu numere seriale, utilizatorul trebuie să introducă obligatoriu informațiile legate de numerele seriale de transferat.

După cum știm, înregistrarea de gestiune poate fi de încărcare sau de descărcare; în funcție de cele 2 cazuri diferite, tabelul Numere Seriali are utilizări și setări diferite.

> *Caz 1: Înregistrarea încărcării*

Atunci când utilizatorul salvează linia mișcării, procedura lasă linia în ‘update', invitând utilizatorul să se mute în tabelul Numere Seriali și să indice detaliile numerelor seriale de încărcat.

Coloanele din tabel sunt următoarele:

**Tip Serial Number**: în această coloană este introdus automat, tipul codului SN din registrul articolului. Acesta poate fi modificat de utilizator.

**Serial Number**: în această coloană este introdus codul numărului serial de încărcat, construit pe baza regulilor stabilite în *Parametrii inițiali de gestiune* asociați tipului cod SN introdus. Acesta este editabil de utilizator.

**Client Serial Number**: indică numărul serial utilizat de client;

**Furnizor Serial Number**: indică numărul serial utilizat de furnizor;

**Data început**: indică data de început de valabilitate a numărului serial;

**Data scadență**: indică data de expirare a numărului serial;

**Data ultimei modificări**: indică data ultimei modificări;

**Anulat**: indică faptul că numărul serial se află într-o stare anulată;

**Închis forțat**: indică faptul că numărul serial a fost închis forțat;

**Lot**: indică numărul lotului corespunzător acelui număr serial.

După finalizarea introducerii loturilor în tabelul *Numere Seriali*, asigurându-se că cantitatea liniei mișcării este egală cu numărul numerelor seriale introduse în tabel, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

> *Caz 2: Înregistrarea descărcării*

Când utilizatorul salvează linia mișcării, procedura lasă linia în update, invitând utilizatorul să se mute în tabelul Numere Seriali și să indice detaliile numerelor seriale de descărcat.

Coloanele din tabel sunt următoarele:

**Serial Number**: în această coloană utilizatorul trebuie să introducă, printr-un dublu click pe câmpul galben, numerele seriale de descărcat, extragându-le din *Help Numere Seriali (Help Serial Numbers)*.

**Data inserare**: indică data introducerii numărului serial;

**Client Serial Number**: indică numărul serial utilizat de client;

**Furnizor Serial Number**: indică numărul serial utilizat de furnizor;

**Data ultimei modificări**: indică data ultimei modificări;

**Data început**: indică data de început de valabilitate a numărului serial;

**Anulat**: indică faptul că numărul serial se află în stare anulată;

**Lot**: indică numărul lotului corespunzător acelui număr serial.

După finalizarea introducerii loturilor de descărcat în tabelul *Numere Seriali*, asigurându-se că cantitatea liniei mișcării este egală cu numărul numerelor seriale introduse în tabel, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

####  Centre de Cost

În această tabel, utilizatorul poate asocia unei linii de mișcare unul sau mai multe centre de cost, atribuind astfel cuantități diferite ale mișcării unor centre de cost diferite.

Grila conține o coloană în care apare un câmp de culoare galbenă, pe care utilizatorul poate, printr-un dublu click, deschide *Help Centre de Cost*, prin care poate introduce centrul de cost în linia grilei, completând apoi linia cu cantitatea la care acest centru de cost se referă. Dacă suma cantităților introduse în liniile grilei centrelor de cost este diferită de cantitatea de gestiune a liniei de mișcare, procedura va emite un avertisment și va împiedica salvarea mișcării.

####  Date Extra

Se face referire la documentația referitoare la [Date Extra](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Contrapartidă

Acest tab este exact identic cu tab-ul *Înregistrare*, dar este activ doar dacă motivul de gestiune setat în tab-ul *Înregistrare* are un gestiune și o șablon de Contrapartidă.  
Cauzele de Contrapartidă sunt stabilite atunci când se dorește gestionarea unei mișcări duble de gestiune, cu o singură înregistrare. Astfel, este posibil, în tabelul șabloanelor de gestiune, să se seteze o șablon de încărcare ca contraparte a unei cauze de descărcare și invers.

În tab-ul *Contrapartidă (Contropartita)* sunt raportate astfel exact toate datele setate în tab-ul *Înregistrare*, cu posibilitatea pentru utilizator de a modifica doar unele dintre datele de antet: Document intern, Document de referință, Comandă de vânzare.

Datele din linia mișcării trebuie să fie identice între cele 2 tab-uri; același lucru este valabil pentru grilele Loturi, Numere Seriali, Variante și Centre de Cost ale mișcării individuale. Singurul câmp care poate fi editat în tab-ul de Contrapartidă este câmpul locație.

Există un caz **particular** în care în tab-ul *Înregistrare* se introduce un articol și în tab-ul *Contrapartidă* se introduc altele: acest lucru se întâmplă doar când șablonul de Contrapartidă legată de șablonul principală are activat flag-ul *Listă componente*, flag care permite utilizatorului să încarce articolul în tab-ul *Înregistrare* (astfel utilizând o șablon de încărcare) și să vadă că există o listă de componente inserată în tab-ul *Contrapartidă*, în care va fi prezentă, așadar, o șablon de descărcare. Bineînțeles că se poate gestiona și invers.

O situație **particulară** care necesită gestionarea unor cauze cu contraparte legată se referă la *descărcarea automată a avize-ului de livrare de conto de muncă*, care efectuează descărcarea materialelor de livrat către subcontractor din gestiunea de materii prime (sau semifabricate, în funcție de situații) cu o descărcare imediată pe gestiunea subcontractorului acelorași materiale, care trebuie apoi utilizate pentru a produce ceea ce a fost solicitat prin comanda de conto de muncă.