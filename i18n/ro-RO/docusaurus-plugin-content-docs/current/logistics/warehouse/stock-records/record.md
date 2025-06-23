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

**Document intern**: în acest câmp, utilizatorul poate insera șablonul pentru care se creează înregistrarea. Dacă înregistrarea a fost creată automat din înregistrarea unei *Semnalări de producție*, reprezintă informația referitoare la numărul semnalării și faza pentru care aceasta a fost efectuată; în câmpul data **Documentului intern** utilizatorul poate specifica data referitoare la documentul în baza căruia introduce înregistrarea. Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp se setează automat data de introducere a documentului.  
Dacă înregistrarea a fost creată automat din înregistrarea unei *Semnalări de producție*, acest câmp va afișa data efectivă de începere a ordinului de producție pentru care a fost efectuată semnalarea de producție.  

**Versiune**: permite alegerea unei versiuni diferite de cea implicită, propusă automat de procedură; 

**Cont**: în aceste 3 câmpuri sunt specificate datele corespunzătoare ale Clientului/Furnizorului: *cont sintetic*, *analitic*, *nume*.  
Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp se setează automat datele clientului sau furnizorului care deține documentul respectiv.

**Document de referință**: permite inserarea documentului care a generat înregistrarea.  
Dacă înregistrarea a fost creată automat prin *încărcarea* sau *descărcarea* unui document, în acest câmp se setează automat o descriere parametrizată a documentului, în care apar și descrierea tipului de document și numărul său.  
Dacă înregistrarea a fost creată automat din registrarea unei *Semnalări de producție*, reprezintă numărul ordinului de producție pentru care a fost efectuată semnalarea de producție.  

**Proiect**: cu un dublu clic se deschide un *Help proiecte* care permite asocierea unui proiect la înregistrare. Aceasta este apoi replicată în fiecare linie articol introduse în tabel;  

**Notă**: permite inserare unei note libere, referitoare la înregistrarea de gestiune.

### Articole 

Secțiunea permite, folosind eventual *Help articole*, inserarea articolelor care sunt mișcate cu înregistrarea de gestiune.

**Număr mișcare**: reprezintă numărul progresiv al mișcării. Acesta începe întotdeauna de la 1 și este un simplu progresiv care se resetează de fiecare dată când se deschide o altă înregistrare de gestiune. Câmpul este read-only și nu permite recuperarea manuală a numerelor în cazul ștergerii manuale a rândurilor.

**Clasă**: permite selectarea clasei articolului;  

**Cod articol**: permite inserarea codului manual sau folosind *Help Articole*;  

**Variantă**: permite selectarea variantelor articolului. Dacă articolul nu conține variante, combo box-ul va fi dezactivat;  

**Unitate de măsură**: reprezintă, în read-only, codul unității de măsură de gestiune a articolului;  

**Unitate de măsură alternativă**: permite selectarea codului unităților de măsură alternative ale articolului, dacă sunt disponibile, pentru a efectua mișcarea inserând cantitatea în unitatea de măsură alternativă aleasă. Cantitatea de gestiune va fi calculată automat în funcție de factorul de conversie setat în *Registru articol* > tab *UM Alternative*;  

**Cantitate mișcare**: permite inserarea cantității mișcării, exprimată în unitatea de măsură de gestiune în cazul în care coloana *U.M. alt.* este goală. În caz contrar, cantitatea va fi exprimată în unitatea de măsură alternativă introdusă în coloana *U.M. alt.*. După ce utilizatorul a introdus codul articolului și l-a validat, cantitatea mișcărilor va fi introdusă automat ca fiind egală cu 1; utilizatorul însă o poate modifica. Cantitatea mișcărilor trebuie să fie întotdeauna introdusă ca valoare absolută, deoarece natura mișcării (încarcă sau descarcă) este determinată de tipul de șablon utilizat;  

**Cantitate de gestiune**: reprezintă, în read-only, cantitatea exprimată în unitatea de măsură de gestiune a articolului. Aceasta este identică cu cantitatea de mișcare în cazul în care coloana *U.M. alt.* este goală. În caz contrar, coloana devine editabilă și utilizatorul trebuie să introducă manual cantitatea de gestiune, iar cantitatea de mișcare va fi calculată automat, având astfel o valoare egală cu cantitatea de gestiune împărțită sau înmulțită (în funcție de ceea ce este setat în *Parametrii inițiali de gestiune*) cu factorul de conversie setat în *Registru articol* > tab *UM Alternative*;  

**Valoare mişcare**: reprezintă automat valoarea *cost ultim, cost mediu, cost standard sau preț de vânzare*, în funcție de setările șablonului de gestiune utilizate în înregistrare.  
Dacă în șablon este specificată drept cost propus *Niciunul*, procedura propune în prețul înregistrării valoarea zero.  
Dacă coloana *U.M. alt.* este goală, valoarea mișcării este întotdeauna identică cu valoarea de gestiune; în caz contrar, în această coloană trebuie introdus valoarea unitară a articolului în funcție de unitatea de măsură alternativă introdusă în rândul mișcării.  
Dacă în *Parametrii inițiali de gestiune* este activat, pentru anul în curs, opțiunea *Afișează tooltip stoc în înregistrări*, procedura va vizualiza, într-un tooltip, stocul acelui articol în gestiune la care se creează mișcare, exact în momentul în care utilizatorul introduce sau modifică cantitatea respectivă.  
Dacă stocul nu este suficient și opțiunea *Permite stoc negativ* este dezactivat pentru acel gestiune în *Parametrii inițiali de gestiune*, rândul de mișcare nu va fi salvat.

**Valoare gestională**: reprezintă automat valoarea *cost ultim, cost mediu, cost standard sau preț de vânzare*, în funcție de setările șablonului de gestiune utilizate în înregistrare.  
Dacă în șablon este specificată drept cost propus *Niciunul*, procedura propune în prețul înregistrării valoarea zero.   
Dacă coloana *U.M. alt.* este goală, valoarea de gestiune este întotdeauna identicè cu valoarea mișcării; în caz contrar, în această coloană, care este întotdeauna read-only, va fi calculată valoarea unitară a mișcării pe baza unității de măsură de gestiune, conform următoarei formule: *Valoare mișcare * Cantitate mișcare / Cantitate gestionale*;  

**Proiect**: permite inserarea, utilizând *Help proiecte*, a comenzii de vânzare care trebuie asociată rândului de mișcare;  

**Valoare totală**: reprezintă valoarea totală a rândului de mișcare. Acesta rezultă din înmulțirea cantității de gestiune cu valoarea de gestiune;  

**Descriere articol**: reprezintă descrierea articolului. Aceasta este setată automat imediat ce articolul introdus de utilizator este recunoscut în tabel;  

**Descriere variantă**: reprezintă descrierea variantei articolului. Aceasta este setată automat imediat ce codul variantei articolului introdus de utilizator este recunoscut în tabel;  

**Note**: permite inserarea unei note libere referitoare la fiecare rând din înregistrarea de gestiune;  

**Locație**:reprezintă locația din care va fi descărcat sau în care va fi încărcat articolul, în baza tipului șablonului de gestiune (încărcare / descărcare);  

**Greutate netă**: reprezintă greutatea netă totală a rândurilor de articol. Se înregistrează greutatea netă a registrului articolului înmulțită cu cantitatea rândului;  

**Greutate brută**: reprezintă greutatea brută totală a rândurilor de articol. Se înregistrează greutatea brută a registrului articolului înmulțită cu cantitatea rândului.

#### Loturi și Numere de serie

#### Loturi

În această tabel, activ doar dacă șablonul de gestiune utilizat are opțiunea *Gestionare loturi* activată și dacă articolul este desemnat ca articol gestionat pe loturi, utilizatorul trebuie să introducă obligatoriu informațiile legate de lot sau loturi de mișcat.

În baza înregistrării de gestiune (încărcare sau descărcare), tabelul *loturi* are utilizări și setări diferite.

> **1° caz: Înregistrare de încărcare**

După salvarea rândului de mișcare, utilizatorul va trebui să indice detaliile loturilor de încărcat în tabelul *Loturi*.

#### Câmpuri specifice

**Tip cod lot**: reprezintă tipul codului lot introdus în registrul articolului;  
**Tip lot**: este opțional si se poate selecta din tabelul omonim;  
**Număr loturi**: reprezintă codul lotului care trebuie încărcat, construit pe baza regulilor stabilite în *Parametrii inițiali de gestiune* asociate cu *Tip cod lot* introdus.  Utilizatorul poate decide să efectueze o nouă încărcare a unui lot deja existent în baza de date; în acest caz, cu un dublu clic pe câmpul poate deschide *Help loturi*, pentru a alege lotul de încărcat;  
**Cod lot furnizor**: reprezintă codul pe care furnizorul îl atribuie lotului. Acesta este un câmp care nu poate fi generat automat în timpul operațiunilor de încărcare și nu este obligatoriu. Dacă este introdus prin *Help loturi*, această coloană va fi completată automat cu *Lotul Furnizor* asociat lotului ales;  
**Dată început**: este egală cu dată înregistrării de gestiune, editabilă de utilizator. Dacă este introdusă prin *Help loturi*, va fi completată automat cu data de început a lotului ales;  
**Dată scadenţă**: reprezintă data de expirare a lotului, care se calculează pornind de la data de început la care se adaugă zilele de valabilitate ale lotului introduse în tab-ul *Loturi/NS* al registrului articolului. Dacă este introdus prin *Help loturi*, această coloană va fi completată automat cu data de expirare a lotului ales;  
**Cantitate**: reprezintă cantitatea care va fi atribuită lotului introdus. În cazul creării lotului prin apăsarea butonului **Auto**, cantitatea se completează automat cu cantitatea conținută în linia mișcării; aceasta poate fi editată de utilizator, care poate decide să modifice cantitatea, diminuând-o, și apoi să apese din nou butonul **Auto** pe linia inferioară. Astfel se va crea un nou lot, cu caracteristici similare lotului deja introdus, dar cu *Cod Lot* diferit;  
**Închis**: dacă este activ, evidențiază că lotul a fost complet descărcat din gestiune. Logic, în cazul încărcării lotului, acest flag este întotdeauna dezactivat;  
**Lot vandabil**: dacă este activ, indică faptul că lotul este disponibil pentru a fi preluat în documentele de vânzare, de producție sau în înregistrările de gestiune. Practic, aceasta este o opțiune pe care utilizatorul o are pentru a defini posibilitatea de a prelua sau nu un lot, alternativ la gestionarea mai complexă a situațiilor lotului. Așadar, în cazul încărcării automate a lotului, opțiunea este activ implicit, deși utilizatorul poate decide să-l dezactiveze deja în această fază, făcând astfel lotul indisponibil;  
**Notă**: permite inserarea unei note referitoare la lotul încărcat. Dacă Codul Lot este introdus prin *Help loturi*, această coloană va fi completată automat cu nota legată de lotul ales.

După finalizarea inserării loturilor în tabelul *loturi* și când cantitatea liniei mișcării este egală cu suma cantităților loturilor încărcate, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

> **Caz 2: Înregistrare de descărcare**

După salvarea rândului de mișcare, utilizatorul va trebui să indice detaliile loturilor de descărcat în tabelul *Loturi*.

#### Câmpuri specifice

**Număr Loturi**: permite alegerea lotului de descărcat utilizând *Help loturi*;  
**Cod lot furnizor**: este completat automat cu *Lotul furnizor* asociat lotului ales;  
**Dată început**: reprezintă data de început a lotului ales;  
**Dată scadenţă**: reprezintă data de expirare a lotului ales;  
**Cantitate**: reprezintă cantitatea pe care se dorește a fi descărcată din lotul ales. Aceasta este editabilă de utilizator, care poate decide să modifice cantitatea, diminuând-o, și să efectueze o nouă căutare folosind ajutorul lotului pe linia de sub aceasta;  
**Locație**: în acest câmp se afișează locația în care este încărcat lotul ales.

După finalizarea inserării loturilor de descărcat în tabelul *loturi* și când cantitatea liniei mișcării este egală cu suma cantităților loturilor descărcate, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

#### Numere seriale

În această tabel, activ doar dacă șablonul de gestiune utilizat are opțiunea *Gestionare loturi* activată și dacă articolul este desemnat ca articol gestionat pe numere seriale, utilizatorul trebuie să introducă obligatoriu informațiile legate de numerele seriale de transferat.

În baza înregistrării de gestiune (încărcare sau descărcare), tabelul *loturi* are utilizări și setări diferite.


> **Caz 1: Înregistrare de încărcare**

După salvarea rândului de mișcare, utilizatorul va trebui să indice detaliile numerelor seriale de încărcat.

#### Câmpuri specifice  

**Tip număr serial**: în această coloană este introdus automat, tipul codului SN din registrul articolului. Acesta poate fi modificat de utilizator.  
**Număr serial**: în această coloană este introdus codul numărului serial de încărcat, construit pe baza regulilor stabilite în *Parametrii inițiali de gestiune* asociați tipului cod SN introdus. Acesta este editabil de utilizator.  
**Client număr serial**: indică numărul serial utilizat de client;  
**Furnizor număr serial**: indică numărul serial utilizat de furnizor;  
**Data început**: indică data de început de valabilitate a numărului serial;  
**Data scadență**: indică data de expirare a numărului serial;  
**Data ultimei modificări**: indică data ultimei modificări;  
**Anulat**: indică faptul că numărul serial se află într-o stare anulată;  
**Închis forțat**: indică faptul că numărul serial a fost închis forțat;  
**Lot**: indică numărul lotului corespunzător acelui număr serial.

După finalizarea inserării în tabelul *Numere de serie*și când cantitatea liniei mișcării este egală cu numărul numerelor seriale introduse în tabel, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

> *Caz 2: Înregistrare de descărcare*

Când utilizatorul salvează linia mișcării, procedura lasă linia în update, invitând utilizatorul să se mute în tabelul Numere de serie și să indice detaliile numerelor seriale de descărcat.

După finalizarea introducerii loturilor de descărcat în tabelul *Numere de serie*și când cantitatea liniei mișcării este egală cu numărul numerelor seriale introduse în tabel, utilizatorul poate salva linia mișcării fără a mai primi mesaje de eroare din partea procedurii.

####  Centre de Cost

Permite asocierea unei linii de mișcare la unul sau mai multe centre de cost, atribuind astfel cantități diferite ale mișcării unor centre de cost diferite.

Tabelul permite, cu ajutorul *Help-ului Centre de Cost*, inserarea centrului de cost și a cantității la care acest centru de cost se referă. Dacă suma cantităților introduse în liniile tabelului centrelor de cost este diferită de cantitatea de gestiune a liniei de mișcare, procedura va emite un avertisment și va împiedica salvarea mișcării.

####  Date Extra

Vă rugăm să consultați documentația [Date Extra](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Contrapartidă

Acest tab este identic cu tab-ul *Înregistrare*, dar este activ doar dacă șablonul de gestiune setat în tab-ul *Înregistrare* are o gestiune și un șablon de *Contrapartidă*.  
*Șabloanele de contrapartidă* sunt inserate atunci când se dorește gestionarea unei mișcări duble de gestiune, cu o singură înregistrare. Astfel, în tabelul șabloanelor de gestiune, se poate insera un șablon de încărcare drept contrapartidă a unui șablon de descărcare și invers.

În tab-ul *Contrapartidă* sunt raportate astfel toate datele setate în tab-ul *Înregistrare*, cu posibilitatea de a modifica doar unele dintre datele de antet: *Document intern*, *Document de referință*, *Comandă de vânzare*.

Datele din linia mișcării trebuie să fie identice în cele 2 tab-uri. Același lucru este valabil pentru tabelele *Loturi*, *Numere de serie*, *Variante* și *Centre de Cost* ale mișcării individuale. Singurul câmp care poate fi editat în tab-ul de *Contrapartidă* este câmpul *locație*.

Există un caz **particular** în care în tab-ul *Înregistrare* se introduce un articol și în tab-ul *Contrapartidă* se introduc altele, și anume doar când* șablonul de contrapartidă* asociat șablonului principal are activat opțiunea *Listă componente*, opțiune care permite utilizatorului să încarce articolul în tab-ul *Înregistrare* și să vadă că există o listă de componente inserată în tab-ul *Contrapartidă*, în care va fi prezentă un șablon de descărcare. Același lucru și in caz contrar.

O situație **particulară** care necesită gestionarea unor șabloane cu contrapartidă asociată se referă la *descărcarea automată a aviz-ului de livrare în sistem lohn*, care efectuează descărcarea materialelor de livrat către terț din gestiunea de materii prime (sau semifabricate, în funcție de situații) cu descărcarea imediată din gestiunea terțului acelorași materiale, care trebuie apoi utilizate pentru a produce ceea ce a fost solicitat prin ordinul în sistem lohn.