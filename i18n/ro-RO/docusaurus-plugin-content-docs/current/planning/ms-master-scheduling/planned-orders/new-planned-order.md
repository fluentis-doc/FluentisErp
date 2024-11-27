---
title: Ordin planificat
sidebar_position: 4
---

:::important Utilizare  
Funcționalitatea **Ordine planificate** din sistemul Fluentis este o componentă cheie pentru gestionarea planificării producției și achizițiilor. Ordinele planificate pot fi generate automat utilizùnd Planificarea generală sau elaborarea MRP (Manufacturing Resource Planning) sau create manual de utilizator. Aceste ordine sunt utilizate pentru a gestiona necesitățile viitoare ale resurselor și materialelor în mod preventiv și organizat.

În platforma Fluentis, ordinele planificate pot fi de diferite tipuri: producție, achiziție și sistem lohn. Acestea sunt afișate cu culori diferite în tabel, în funcție de tipul lor. Scopul principal al utilizării ordinelor planificate este optimizarea proceselor de producție și aprovizionare, asigurându-se că resursele necesare sunt disponibile atunci când sunt solicitate și că operațiunile pot continua fără întreruperi.  
:::

În mod normal, ordinele planificate sunt generate automat de procedura *Planificare generală* sau de *Elaborare MRP*, dar utilizatorul are posibilitatea de a genera manual un ordin planificat, fie el de achiziție, de producție sau în sistem lohn.

Form-ul se deschide utilizând:  
 -  calea **Planificare > MS Master scheduling > Ordine planificate > Nou ordin planificat** 

sau  

 - butonul **Inserează ordin** care se află în form-ul [Caută ordine planificate](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Antet ordin planificat

*Buton specific*:  

> **Completează date ordin**: permite introducerea și/sau actualizarea, pentru articolul introdus în ordinul planificat, a tuturor datelor referitoare la materiale, faze, echipamente, atribute precum și diverse note pe care le preia din lista componente și ciclul de lucru al articolului.
> **Recalculează data început**: permite actualizarea datei de început a ordinului planificat și eventual a fazelor de lucru ale acestuia ca urmare a modificării timpilor de lucru și/sau a cantității de produs a articolului ordinului planificat;  
> **[Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: permite vizualizarea Parametrilor MRP ai articolului;  
> **Generează lista componentelor**: permite generarea listei componentelor pe baza datelor introduse în ordinul de producție sau actualizarea datelor existente cu cele introduse în ordin;  
> **Generare ciclu de lucru**: permite crearea ciclului de lucru al articolului bazându-se pe datele introduse în ordin, sau actualizarea datelor existente cu cele introduse în ordin;  
> **[Lista componente](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: permite deschiderea ferestrei listei componentelor articolului;  
> **[Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route)**: permite vizualizarea ciclului de lucru și a fazelor de producție ale articolului.  

*Campuri specifice*: 

**Tip ordin planificat**: este propus tipul predefinit ca tip implicit;  
**Ordin obligatoriu**: dacă este activ, reprezintă  faptul că ordinul planificat are o importanță prioritară și nu permite utilizatorului să mute ordinul stabilind o dată mai mare decât data de finalizare prevăzută de *Planificarea generală*;  
**Prioritate ordin**: permite stabilirea priorității acestui ordin;  
**Generat din cerere**: în acest câmp este afișat *Manual* (dacă este vorba de un ordin planificat creat manual), *Dependent* (dacă este vorba de un ordin planificat creat din planificare și care depinde de alte ordine planificate de nivel superior) sau *Independent* (dacă un ordin planificat creat din planificare și care nu depinde de alte ordine planificate de nivel superior, deoarece deja este un ordin de nivel 1);    
**Comandă producție**: în aceste 3 câmpuri se setează anul, numărul și descrierea comenzii de producție din care a fost generat ordinul planificat. Evident, dacă acesta a fost generat manual, nu va fi posibilă asocierea lui la o comandă de producție deja existentă și, prin urmare, acest câmp va rămâne necompletat;     
**Tip comandă (Tipo commessa)**: în acest câmp se afișează tipul comenzii de producție din care a fost generat ordinul planificat. Evident, dacă acesta a fost generat manual, nu va fi posibilă asocierea lui la o comandă de producție deja existentă și, prin urmare, acest câmp va rămâne necompletat;     
**Proiect**: cu un dublu clic se deschide ajutorul care permite conectarea unui proiect la ordinul planificat pe care îl introduceți;       
**Client (Cliente)**: reprezintă  clientul comenzii;      
**Furnizor/Terţ**: aceste câmpuri sunt active în cazul în care ordinul planificat este de achiziție sau în sistem lohn;  
**Articol**: reprezintă  clasă, codul și descrierea articolului din comanda;  
**Variante**: reprezintă varianta articolului;  
**Cantitate de produs**: reprezintă cantitatea de produs;  
**UM gestională**:  reprezintă unitatea de măsură gestională a articolului;  
**Cantitate utilizare**: în acest câmp se stabilește cantitatea de produs în unitatea de măsură alternativă, dacă este cazul;  
**UM utilizare**: reprezintă unitatea de măsură alternativă a articolului;  
**Data începere și sfârșit**: reprezintă datele prevăzute de început și sfârșit ale lucrării. Dacă, după completarea datelor ciclului de lucru, utilizatorul modifică una dintre aceste 2 date, cealaltă se recalculază;  
**Audit trail**: secțiunea raportează automat data creării ordinului și data ultimei modificări, raportând pentru ambele utilizatorul care a efectuat operațiunea;  
**Note**: este un câmp liber în care pot fi inserate note.  

După salvarea cel puțin a câmpurilor obligatorii, apăsați butonul **Completare date ordin** pentru a actualiza toate tab-urile (Materiale, Faze, etc.) care preiau datele din lista de componente și ciclul de lucru al articolului din Ordinul Planificat (doar dacă este de producție).

## Materiale

Acest tab este constituit dintr-un tabel, în interiorul căruia utilizatorul poate insera manual materialele pe care dorește să le utilizeze pentru producerea articolului din ordinul planificat (doar dacă este de producție). După inserarea manuală, este necesar, pentru a importa datele din lista de componente, să faceți clic pe butonul **Completare date ordine** prezent în ribbon bar.

Tabelul este deja completat în cazul în care ordinului planificat provine din **Planificare generală** sau din **Elaborare MRP **, dar utilizatorul poate modifica datele și/sau adăuga materiale suplimentare în lista de componente a ordinului planificat.

:::note Nota
Dacă ordinul planificat este de achiziție, tab-ul **Materiale** este inactiv.
:::

*Butoane specifice*
> **Inserează material**: permite inserarea unui nou material în tabel;  
> **Șterge material**: permite ștergerea materialelor inserate în tabel. 

*Câmpuri specifice*

**Prioritate**: afișează prioritatea componentului, dacă este prezent, inserată în lista componente. Aceasta poate fi modificată, ca toate celelalte date prezente în acest tabel;  
**S/L**: în acest câmp este preluat flag-ul prezent în **Parametrii MRP** al articolului numit **Consideră în SL**, care indică dacă articolul trebuie inclus ca material în *ordine în sistem lohn*;        
**UM utilizare**: în acest câmp se introduce eventual unitatea de măsură alternativă a articolului;  
**Dată utilizare**: reprezintă data de început prevăzută a ordinului planificat (modificând-o pe prima, aceasta din urmă se schimbă automat);  
**Cantitate utilizare**: reprezintă cantitatea unitară necesară pentru acest articol (prevăzută de DB) care poate fi oricum modificată;  
**Cantitate totală**: reprezintă cantitatea care se obține înmulțind *Cantitatea de utilizare* cu *Cantitatea de produs*;  
**% deșeuri**: în acest câmp se introduce sau se preia din lista de componente eventualul % de deșeuri pentru acest articol;  
**Fază/Subfază**: este posibil să se introducă manual faza și subfaza corespunzătoare și astfel să se aloce materialul selectat unei faze specifice de procesare a articolului; acestea sunt propuse automat de ciclul de lucru;  
**Cantitate disponibilă**: reprezintă cantitatea disponibilă a articolului la data utilizării.
## Faze

Acest tab este constituit dintr-un tabel, în interiorul căruia utilizatorul poate introduce manual fazele pe care dorește să le utilizeze pentru producerea articolului *ordinului planificat* (doar dacă este de producție). După introducerea manuală, este necesar, pentru a importa datele din ciclul de lucru al articolului, să se facă clic pe butonul **Completare date ordin** prezent în ribbon bar.

Tabelul este deja completat în cazul în care ordinul planificat provine din *Planificare generală* sau din *Elaborare MRP*.

*Butoane specifice*:
> **Inserează fază**: permite introducerea unei noi faze în tabel;  
> **Șterge fază**: permite ștergerea fazelor introduse în tabel. 

*Câmpuri specifice*:  

**Cod fază/Fază/Subfază**: cu un dublu clic se deschide help-ul fazelor de lucru din care se poate selecta faza și subfaza corespunzătoare;  
**Control calitate**: opțiunea indică dacă materialul trebuie să fie supus controlului de calitate înainte de utilizare;  
**Fază productivă**: dacă este activ, indică faptul că faza în cauză este o fază productivă și că, prin urmare, trebuie semnalată;  
**Ajustabilă**: dacă este activ, indică faptul că faza în cauză este o fază ajustabilă, generând astfel o mișcare de stoc odată ce declarația de producție este înregistrată;         
**Centru de lucru**: din acest combo se setează centrul de lucru. Acesta este propus automat, preluat din faza care a fost selectată și introdusă anterior în tabel;  
**Dată început/final prevăzută**: se referă la datele de început și sfârșit ale fazei. Schimbând datele prevăzute de început și sfârșit ale lucrării, acestea se modifică automat. Ele sunt calculate în funcție de timpii introduși în fazele de lucru, și mai precis în funcție de cel mai mare dintre timpul operator și timpul total al mașinii pentru faza selectată;  
**Timp mașină**: este timpul utilizat de mașină pentru a realiza faza, referindu-se la cantitatea de piese pe fază;  
**Număr mașini**: indică numărul de mașini implicate în această fază;  
**Timp operator**: este timpul utilizat de operator pentru a realiza această fază, referindu-se la cantitatea de piese pe fază; 
**Număr operatori**: este numărul de muncitori implicați în această fază;  
**Cont terț/descriere terț**: cu dublu clic în aceste câmpuri puteți deschide help-ul care permite selectarea contului și analiticului terțului. Acest câmp este activ doar în cazul în care faza este desemnată ca fază *Externă*. De menționat că *terțul* este, de asemenea, preluat din faza de lucru introdusă în ciclul de lucru al articolului.  
**Descriere centru de lucru**: indică descrierea centrului de lucru.
### Faze - Proprietăți

Conține proprietățile fazei selectate.

**Descriere fază/subfază**: în acest câmp apare descrierea fazei selectate;  
**Tip**: permite alegerea tipul de lucrare (internă sau externă);  
**Suprapunere**: permite alegerea tipului eventualei suprapuneri a fazelor. Putem avea suprapunere *Totală* (în acest caz faza în cauză este suprapusă total fazei indicate ulterior), *Pe bucăți* (în acest caz este necesar să se indice după câte piese produse de această fază va începe faza următoare), *Pe timp* (în acest caz este necesar să se indice după câte minute de la începutul fazei în cauză va începe faza următoare);  
**UM timp**: reprezintă *Unitatea de măsură a timpului* fazei. Se poate alege gestionarea timpilor fazei în secunde, minute, ore și zile. De obicei, se gestionează pe minute timpii fazelor interne și pe zile cei ai fazelor externe, dar depinde foarte mult de tipul companiei pentru care se configurează;  
**Mașină**: permite selectarea codului (și descrierii) mașinii. Aceasta este propusă automat, preluată din centrul de lucru care a fost introdus anterior în tabel;  
**Grup manoperă**: permite selectarea codului (și descrierii) grupului de manoperă corespunzător. Aceasta este propusă automat, preluată din centrul de lucru care a fost introdus anterior în tabel;  
**Suprapunere raportată la faze/subfaze**: reprezintă codul fazei și subfazei care prezintă o suprapunere cu faza în cauză. De obicei, se indică faza următoare;  
**Valoare**: reprezintă valoarea eventualei suprapuneri, utilizând criteriile specificate mai sus;  
**Utilizare**: dacă este activat, timpul de așteptare/coadă va majora timpul de utilizare al Centrului de Lucru pentru acea fază;  
**Timp de așteptare sau coadă**: indică eventualul timp de așteptare/coadă prevăzut pentru această mașină.

### Faze - Date Extra (Fasi - Extra Data)

Conține eventualele date extra referitoare la faza selectată.

## Echipare

În acest tab este posibil să se definească timpii referitori la pregătirea fazei selectate în tab-ul anterior.

*Campi specifici*:

**Fază/Subfază**: în aceste câmpuri sunt afișate informațiile referitoare la faza care este selectată în tab-ul *Faze*;  
**Tip**: indică tipul fazei (internă sau externă);  
**Tip suprapunere**: indică eventualul tip de suprapunere;  
**UM timp**: indică unitatea de măsură temporală a fazei;  
**Centru de lucru**: în aceste câmpuri este introdus codul (și descrierea corespunzătoare) al centrului de lucru ales pentru echipare;  
**Mașină**: în aceste câmpuri este introdus codul (și descrierea corespunzătoare) a mașinii pentru echipare;  
**Grup manoperă**: în aceste câmpuri este introdus codul (și descrierea corespunzătoare) al grupului de manoperă pentru echipare;  
**Valoare**: indică valoarea eventualei suprapunerii;  
**CdL**: în aceste câmpuri este afișat codul și descrierea centrului de lucru corespunzător fazei selectate;  
**Dată început**: este afișată data de început a fazei selectate în tab-ul *Faze*;  
**Dată sfârșit**: este afișată data de finalizare a fazei selectate în tab-ul *Faze*;  
**Timp echipare**: este introdus timpul de echipare. Este un timp fix, care nu variază în funcție de cantitățile de produs în faza selectată;  
**Timp re-echipare**: este introdus timpul de re-echipare, care se adaugă la timpul de echipare;  
**Nr. mașini**: reprezintă numărul de mașini utilizate pentru echipare;  
**Nr. operatori**: reprezintă numărul de operatori utilizați pentru echipare.

## Echipamente

În acest tab, constituit în principal dintr-un tabel, este posibil să definiți care și câte echipamente vor fi utilizate în producția fazei selectate în tab-ul *Faze*.

*Campuri specifice*:

**Secvență**: indică secvența cu care trebuie utilizate echipamentele;      
**Echipamente**: permite selctarea codului echipamentului din tabelul [Echipamente](/docs/configurations/tables/production/equipments);  
**Clasă/Cod articol**: reprezină clasa și codul articolului (help-ul filtrează automat doar articolele care sunt identificate ca *Echipamente* în câmpul *Natură articol* din registrul său);  
**Variantă**: reprezintă varianta articolului;  
**Cantitate**: reprezintă cantitatea articolului.

## Control calitate

În acest tab, constituit în principal dintr-un tabel, sunt afișate detaliile probelor planificate de control pentru faza/subfază.

## Notă fază

În acest tab este vizualizată nota asociată fazei de prelucrare selectată în tab *Faze*. Pot fi modificată de utilizator concomitent cu ordinul planificat.

## Instrucțiuni operative

În acest tab sunt vizualizate notele / documentele asociate fazei de prelucrare selectată în tab *Faze*. Pot fi modificate de utilizator concomitent cu ordinul planificat. Aceste documente sunt vizibile în MES, în tab *Documente și Instrucțiuni operative*.

## Extra Data

Pentru informații suplimentare, consultați documentul [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).

Pentru detalii despre funcționarea comună a form-elor, faceți referire la link-ul [Funcționalitate, butoane și câmpuri comune](/docs/guide/common).