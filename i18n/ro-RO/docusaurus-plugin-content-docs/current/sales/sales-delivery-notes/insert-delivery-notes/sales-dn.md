---
title: Nou DDT de vânzare (Nuovo DDT di vendita)
sidebar_position: 2
---

Formularul **Creează DDT de vânzare** se deschide prin parcursul **Vânzări > DDT > Creează DDT de vânzare** sau prin butonul ![](/img/neutral/common/new.png) care se află în formularul [Căutare DDT de vânzare](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn).

## *Cum să creezi un DDT de vânzare*

<details>
 
<summary>Clic pentru pașii fundamentali</summary>
 
1. **Introdu datele obligatorii**: *Tip comandă* și *Client*. *An*, *Număr* și *Data introducerii* vor fi propuse automat.  
 
2. **Introdu sau modifică datele opționale** ale antetului: cum ar fi datele de livrare, eventuale *reduceri*, *destinația*, etc.  
 
3. **Introdu articolele**: prin dublu clic în câmpul *Cod articol* se deschide ajutorul pentru articole care permite căutarea și selectarea unui articol existent. Toate celelalte date ale liniei, cum ar fi *unitatea de măsură*, *cantitatea*, *prețul*, vor fi propuse automat, dar pot fi modificate. Alternativ, se poate selecta ca *Tip linie* un *Articol necodificat* și introduce manual datele ulterioare.
 
4. **Introdu eventualele reduceri sau alte informații suplimentare** în tab-urile *Reducerile/listinelor* și *Date articol*
 
5. **Verifică secțiunea Răspunsuri** și introdu eventuale cheltuieli sau reduceri finale.  
 
6. Odată ce comanda a fost verificată și confirmată, **introdu o *Dată de confirmare* și activează flagul *Tipărit* în antet** pentru a face comanda disponibilă pentru procedurile de execuție.
 
</details>

## **1. Date obligatorii**

Pentru a continua crearea DDT de vânzare, utilizatorul trebuie să introducă câmpurile obligatorii:
- **Tip DDT**: prestabilit în *Configurare > Tabele > Vânzări > [Tipuri DDT](/docs/configurations/tables/sales/delivery-notes-type)*.
- **Număr**: fiecărui document i se alocă un număr conform numerotării specificate de utilizator și tipului de document care conține numerotarea. Numerotarea asociată tipului de DDT prevede în general o progresie automată bazată pe dată și număr, cu o funcție de recuperare care acoperă eventualele goluri din secvență (de exemplu, cauzate de ștergerea documentelor). Acest comportament este reglat de două flaguri specifice în tabela numerotării. Dacă utilizatorul dorește să introducă manual numărul, poate dezactiva flagul de progresie dată-număr (care garantează incrementarea numerotării în datele viitoare) și flagul de recuperare a numerelor. În plus, trebuie să activeze flagul numerotării externe, semnalând astfel sistemului că numerotarea va fi gestionată manual.    
- **Client**: poate fi introdus utilizând [ajutorul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), tastând [direct](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) datele sau folosind procedura automată, dacă se alege să se creeze documentele prin [Execuția DDT din comanda clientului](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). Introducând clientul, se vor popula automat, dacă sunt prezente în registru, următoarele câmpuri, pe care le vom explica în secțiunile următoare: valută, națiune, limbă, zonă, expediere, listă de prețuri și eventuale reduceri, plăți, cheltuieli, agenți, destinație, transportatori, date extra.               
- **Data**: indică data creării DDT-ului. Această dată este esențială pentru calculul termenelor de plată și eventualele condiții de plată. Se propune data de astăzi, care poate fi modificată; în cazul în care numerotarea prevede o progresie de dată și număr, iar eu introdu o dată din trecut, Fluentis va verifica disponibilitatea numerelor în acea dată pentru a garanta progresia, iar dacă nu este prezent, va informa utilizatorul că nu există numere disponibile în acea dată. 

Formularul conține o serie de tab-uri.

## **2. Antet**

După selectarea datelor obligatorii în secțiunea superioară, utilizatorul poate continua introducerea următoarelor date [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau cu [ajutorul câmpului](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau, în funcție de procedurile pe care le alege, aplicația completează câmpurile *automat*.

:::note Amintește-ți
Dacă documentul este *creat automat*, aceste date sunt preluate din *documentul de origine* din care a fost generat.
:::

Introducând **Clientul**, toate datele specifice tab-ului **Antet** sunt *propunse* automat, conform datelor setate anterior în [registrul clientului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), în câmpurile corespunzătoare adresei sale și în *selecțiile*:  
- **Valută**: secțiune care conține date despre [Valută](/docs/guide/common/glossary/glossary-intro#currency), [Schimb](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valutei](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Națiune**: secțiune care conține date despre [Națiune](/docs/guide/common/glossary/glossary-intro#country), [Limbă](/docs/guide/common/glossary/glossary-intro#language), [Zonă](/docs/guide/common/glossary/glossary-intro#zone).
- **Expediere**: secțiune care conține date despre [Expediere](/docs/guide/common/glossary/glossary-intro#shipment), [Port](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalare](/docs/guide/common/glossary/glossary-intro#packing), [Listă de prețuri](/docs/guide/common/glossary/glossary-intro#sales-price-list) (în antetul documentului este introdusă lista introdusă în registrul clientului cu flagul Implicit) cu tipul de discount și [intervalul de valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Alte câmpuri antet

- **Tipărit**: se activează atunci când este lansată imprimarea documentului și identifică faptul că documentul a fost tipărit; acest flag este important și pentru a permite execuția DDT în alte documente.      
- **Descărcat**: acest flag se activează automat când documentul este mutat în magazin, cu butonul de pe bara de instrumente *Descărcare automată* sau prin procedurile disponibile.     
- **Valorificat**: acest flag se activează atunci când DDT-ul este valorificat în factură.   
- **Valorificat parțial**: acest flag indică faptul că DDT-ul a fost valorificat doar parțial în factură. 
- **Valorificat forțat**: acest flag se activează dacă DDT-ul a fost încheiat forțat cu execuția forțată a articolelor; de exemplu, când restul nu va fi livrat, iar documentul va fi considerat închis, chiar dacă nu ar fi.
- **Anulat**: flagul activ permite anularea comenzii.      

:::note
Flagurile pot fi eliminate prin procedurile de restaurare a operației.
:::

- **Cod Unic de Proiect/Cod Identificativ de Licitație**: dacă în [informațiile fiscale](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) ale registrului clientului acesta este activat pentru gestionarea CIG și CUP, va fi posibil să completezi aceste date în document.    
- **Notițe client**: acest câmp este preluat din comanda care a creat DDT-ul, dar poate fi introdus și manual.
- **Referință noastră/referința dumneavoastră**: în aceste câmpuri se indică, de obicei, o referință internă și o referință a clientului pentru document; în cazul în care DDT-ul este generat printr-o procedură de creare automată, aceste câmpuri vor fi populate cu indicațiile prezente în documentul de origine (această transferare este valabilă doar în cazul DDT-ului creat prin preluarea datelor dintr-un singur document de origine).   
- **Referința la Numărul Comenzilor Client**: în acest câmp este introdus automat comanda din care derivă DDT-ul.
- **Referința la Data Comenzilor Client**: în acest câmp este introdus automat data comenzii din care derivă DDT-ul; împreună cu câmpul precedent, se creează datele necesare pentru eticheta 2.1.2 a fișierului XML al facturii electronice, atunci când aceasta va fi creată; dacă nu sunt completate, se va lua în schimb câmpul Referința dumneavoastră.     
- **Note inițiale DDT**: se pot selecta notele care au fost introduse anterior în tabela omonimă care se găsește pe parcursul *Configurare > Utilitate > Gestionare note codificate*; pentru aceasta, utilizatorul trebuie să facă dublu clic pe câmp pentru a deschide Ajutorul și a selecta datele; altfel le poate introduce manual.       
- **Proiect**: este posibil să asociezi un proiect documentului.    
- **Operator**: permite introducerea utilizatorului care creează documentul. Angajații au fost introduși anterior în tabela *Acasă > Angajați*; datele devin obligatorii dacă opțiunea este setată în [Parametri](/docs/configurations/parameters/sales/dn-parameters) ai documentului în sine.     
- **Starea execuției**: atunci când comanda este executată prin documentele DDT sau facturi, starea sa de execuție se schimbă automat de la *Nefolosit* la *Parțial folosit* sau *Folosit*; utilizatorul poate forța execuția unei comenzi care nu a fost complet utilizată și când se întâmplă acest lucru, se salvează și data executării.
- **Data limită** este data limită pentru calculul termenelor de plată.      
- **Audit Trail**: ca în toate documentele, această secțiune indică data creării documentului cu operatorul, și data ultimei modificări a documentului cu operatorul.   

#### Butoane specifice

> [Execuție din comenzi](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (vezi documentația relevantă).    
> [Descărcare automată](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (vezi documentația relevantă)   
> **Ajutor destinatari/destinatii**: acest buton deschide Ajutorul pentru a putea alege destinatarul/destinatia pentru document, dintre cei disponibili pentru client și astfel codificați în registrul său.      
> **Introdu agent în rânduri**: acest buton deschide un pop-up în care se poate introduce un registru de agent, care va fi aplicat în toate liniile articolului, adăugându-se eventual Agenți deja prezenți.           
> **Înlocuiți CIG/CUP în rânduri**: după ce s-au specificat CIG și/sau CUP în antet, este posibilă înlocuirea în masă a acestor date în liniile articolului deja introduse.      
> **Ștergeți**: șterge reducerile selectate în tab-ul *Reduceri* al Antetului.          

În antet există apoi câteva tab-uri pe care le analizăm mai jos. 

### 2.1 Plăți

**Soluțiile de plată** sunt raportate automat din documentul de origine sau din *Registrul clientului > tab Plăți* și pot fi modificate/silite de utilizator.        
Dacă **Tipul de plată** este asociat unei reduceri financiare, suma reducerii este considerată doar în scopuri contabile, adică în termenii documentului și nu în totalul comenzii.

#### Buton specific*
> **Șterge plățile**: utilizat pentru a șterge liniile de plată selectate.

### 2.2 Reduceri

Se propun doar reducerile presetate preluate din *Registrul clientului > tab Reduceri* și pot fi modificate/silite de utilizator.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agenți

Indică codul agentului și comisionul său pentru fiecare linie de articol. Se propune codul și procentul definite în *Registrul clientului > tab Agenți*. 
Dacă comisionul nu este legat de client în registrul său, totuși agentul trebuie introdus, dar cu comision NULL pentru că dacă ar fi cu comision 0, aceasta ar însemna că agentul este legat de agent, dar nu percepe comision.
Aceeași secțiune va fi repropusă pentru fiecare linie de articol în tab-ul relevant *Agenți*.

#### Buton specific*
> **Șterge agenții**: permite ștergerea agenților selectați.

### 2.4 Date suplimentare

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Proceduri pentru antet:

### *Execuție din comandă*

În antetul DDT, apăsând butonul **Execuție din comandă** se va deschide formularul unde este posibil să se filtreze comenzile confirmate ale clientului documentului și să le transferi în DDT. Este posibil să executați operațiunea de creare DDT din comandă și din [Căutarea comenzilor](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

Prin această procedură este posibil să creezi un DDT de vânzare din execuția corespunzătoarei comenzi a clientului. Este astfel posibil să introduci articole în cadrul DDT-ului, executând complet sau parțial o întreagă comandă sau o linie.

Pentru a putea utiliza această procedură, trebuie respectate următoarele condiții inițiale:

 - clientul comenzilor trebuie să fie același cu DDT-ul;
 - comanda pe care doriți să o executați trebuie să aibă activat flagul *Tipărit* și *Data de confirmare a comenzii*;
 - în tabela [Tipurilor DDT](/docs/configurations/tables/sales/delivery-notes-type) trebuie să fie prezent flagul pe *Comandă* (care indică faptul că DDT-ul poate deriva dintr-o comandă).    
 - doar dacă procedura este executată din Căutarea comenzilor, tipurile documentului trebuie să fie compatibile: în tabela [Tipurilor de comandă](/docs/configurations/tables/sales/sales-order-types) tipul de comandă pe care doriți să-l executați trebuie să aibă setat tipul DDT corespunzător.        

Apoi, va trebui să se setez în antetul noului DDT, *Tipul DDT* pe care doriți să-l creați (care trebuie să corespundă celui setat în tabela *Tipurilor comenzilor*) și *Clientul*. Odată introduse aceste date, trebuie să faceți clic pe butonul *Execuție din comenzi* pentru a deschide formularul de execuție.

#### Procedură:

Filtrele pentru client și valută vor fi raportate automat pe baza clientului selectat în DDT.

Odată ce toate *Filtrele* dorite sunt setate, apăsând butonul de *Căutare* se va vizualiza în grilă o linie pentru fiecare comandă tipărită, confirmată și neexecutată sau executată parțial.

:::note Notă
Procedura preia toate datele prezente în comandă și, ca urmare, vor fi aplicate condițiile de achiziție prezente în comandă, chiar dacă acestea s-au schimbat.
:::

:::note Notă
Liniile de tip Notă vor fi mereu vizibile, chiar dacă deja au fost executate, până când toate liniile celorlalte tipuri vor fi executate.
:::

În grila de rezultate, utilizatorul are apoi posibilitatea de a:

 1. selecta *comanda completă*. Pentru a face acest lucru, trebuie doar să selecteze flagul prezent la începutul rândului comenzii.
 2. selecta doar *anumite* *articole* propuse. Pentru a face acest lucru, trebuie doar să selecteze flagul prezent la începutul rândului articolului.
 3. selecta doar *anumite articole* pentru o *cantitate determinată*. În acest caz, va trebui să modifice cantitatea de executat.

Pentru a finaliza procedura, va trebui apoi să faceți clic pe butonul *Transfer*, care va prelua toate datele prezente în comandă și le va transfera în DDT.

#### Butoane specifice

> **Căutare** permite căutarea comenzilor furnizor.  
> **Transfer** permite transferul datelor comenzii selectate în noul DDT.  
> **Execuție forțată a comenzii** permite execuția forțată a comenzii; în cazul în care sunt selectate anumite linii ale comenzii, acestea vor fi executate forțat doar pe liniile selectate (cu adăugarea flagului *Executat forțat* în corespondența liniei articolului); în cazul în care se execută comanda completă, aceasta își va schimba starea și în antet.  
> **Execuție din comenzi** permite execuția comenzii.  
> **Extinde** permite extinderea întregului arbore al comenzilor în grila de mai jos, pentru a vizualiza articolele conținute în acestea.  
> **Comprimare** permite comprimarea vizualizării liniilor de articol și afișarea doar a liniilor de comandă.  
> **Selectează tot** permite selectarea tuturor articolelor din listă.  
> **Deselează tot** permite deselectarea tuturor articolelor din listă.  

### *Descărcare automată*

Cealaltă procedură prezentă în antetul DDT este descărcarea automată din magazin. Butonul se activează dacă documentul este Tipărit.      
Amintim că dacă în [Parametrii DDT](/docs/configurations/parameters/sales/dn-parameters) este activată descărcarea automată, această procedură va fi inițiată automat odată ce documentul este Tipărit.      
Odată ce procedura a fost inițiată, Fluentis verifică prezența magazinului și cauzei în liniile DDT și eventualitatea prezenței loturilor și numărului de serie dacă sunt solicitate; în cazul în care procedura nu reușește, utilizatorul va fi notificat cu o eroare.      
Dacă procedura reușește, se creează [Înregistrarea de magazin](/docs/logistics/warehouse/stock-records/record) care mișcă articolele documentului și se introduce flagul **Descărcat** în antetul DDT.      

## **3. Articole**

În acest tab sunt introduse toate articolele cu datele respective.

Pentru tot ce nu este detaliat în acest document despre funcționarea comună a formularelor, consultați următorul link [Funcționalitate, butoane și câmpuri comune](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Pentru a introduce un **Articol nou** în grilă, trebuie să te poziționezi pe rând pentru a completa diferitele date sau să folosești butonul **Nou** din bara de ribbon. Coloanele disponibile sunt următoarele:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linie**: oferă posibilitatea de a selecta, din combo-box, articole cu caracteristici diferite:
>- *Articol codificat*: sunt articolele codificate în registru și pot fi contabilizate în contabilitatea analitică și înregistrate în magazin.
>- *Articol necodificat*: sunt articole descriptive care pot fi contabilizate în contabilitatea analitică, dar nu pot fi mișcate în magazin.
>- *Articol cheltuieli*: sunt articole codificate sau necodificate și sunt rezumate distinct în rezumatele documentelor; dacă articolul cheltuială este codificat și de interes fiscal, va fi mișcat în magazin, dacă este un articol necodificat sau fără interes fiscal, nu va fi mișcat în magazin.
>- *Articol notă*: sunt note descriptive afișate în imprimarea documentului; nu influențează contabilitatea și magazinul.
>- *Articol cadou*: articolul cadou este gestionat ca un articol codificat sau necodificat în scopuri fiscale și de magazin, dar fiind un cadou este contabilizat separat în rezumatele documentului și în funcție de flagul de recuperare a TVA-ului, se va calcula suma TVA-ului cadoului în sarcina subiectului sau nu.
:::note[NOTĂ]
Dacă se începe direct cu introducerea articolului, clasa sa, codul și tipul liniei - Articol codificat sunt introduse automat.
:::

- **Barcode**: dacă în [Parametrii DDT](/docs/configurations/parameters/sales/dn-parameters) a fost activată gestionarea codurilor de bare, va apărea coloana Cod de bare unde se poate selecta datele pentru articol dintre codurile de bare introduse în *Registrul articolului > Coduri de bare*. 

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Articol client**: dacă în [Parametrii DDT](/docs/configurations/parameters/sales/dn-parameters) a fost activată gestionarea articolelor client, va apărea coloana Articol client, cu codul articolului valid pentru clientul poseid  al documentului și introdus în *Registrul articolului > Clienți*. 

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
În absența listei de prețuri, datele propuse sunt **prețul de vânzare** preluat din *Registrul articolului > tab [Costuri](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* sau vor fi recuperate conform setărilor parametrelor documentului. În absența și acestui dat, va fi raportat prețul 0.
:::

- **Imponibil**: în acest câmp se raportează Prețul unitar, înmulțit cu cantitatea articolului, net de reduceri.        

- **Reduceri articol**: se raportează suma reducerilor prevăzute pentru articol.     

- **Reduceri finale articol**: se raportează suma reducerilor finale inserate pentru articol în Răspunsurile documentului.     

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Facturat vânzări**: se propune datele introduse în *Registrul articolelor > tab Generalități*. Dacă acest lucru nu este prezent, nu se propune nicio dată, dar la contabilizarea facturii va fi considerat valoarea introdusă în câmpul *Cost/Răspunător prestabilit* din *Registrul clientului > Date contabile > tab Administrativ* sau va genera un mesaj de eroare.   

- **În factură**: acest flag este introdus implicit, dar poate fi dezactivat dacă articolul nu trebuie să fie transferat în factură și astfel nu ar trebui să apară în procedurile de execuție ale DDT-ului.     

- **Greutate netă**: se raportează Greutatea netă prezentă în registrul articolului, înmulțită cu cantitatea articolului a rândului.     

- **Greutate brută**: se raportează Greutatea brută prezentă în registrul articolului, înmulțită cu cantitatea articolului a rândului.     


#### Butoane specifice

> **Recalculare Conai**: dacă [Conai](/docs/sales/sales-flow/conai) este activat pentru document, este posibil să recalculați valorile cu acest buton după eventuale modificări.       

> **Actualizare date Conai în registrul articolului**: dacă în tab *Materiale Conai pentru articol* sunt modificate Unitate de măsură și/sau Greutate, este posibil să transferați aceste valori în secțiunea Conai a registrului articolului.      

> **Gestionare ambalaje**: permite deschiderea gestionării ambalajelor de returnare utilizate în documentul de achiziții.
Butonul devine activ dacă documentul este salvat, dar nu încărcat.
Apăsând acest buton se deschide formularul corespunzător unde: introduceți cantitatea, selectați rândul și efectuați transferul ambalajului selectat în liniile articolului apăsând butonul Execute. În acest formular sunt raportate articolele care au fost introduse cu natura Ambalaj și care sunt prezente în tabela ambalajelor returnabile.         

> **Actualizare liste de prețuri**: apăsând pe săgeată de lângă buton se accesează două proceduri. Prima procedură este **Actualizare lista de prețuri curent**, care permite alinierea prețului articolului intern în Lista de prețuri, ca urmare a unei eventuale variații de preț direct în rândul articolului. Cu a doua procedură, **Creează nouă listă de prețuri cu nouă valabilitate**, este posibil să creați o nouă listă de prețuri personalizată pentru clientul posesor al documentului; vor fi solicitate, într-un pop-up, datele de început și de sfârșit ale valabilității noii liste de prețuri.      

> **Afișați/Ascundeți detaliile**: apăsând acest buton se fac vizibile sau invizibile tab-urile interne din Articole.   

### 3.1 Reduceri/Listini

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Date

În această tab sunt raportate/inserate informații suplimentare referitoare la articol.

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazin și cauză**: se propun magazinul și cauza de referință care vor apărea automat la momentul descărcării articolelor relevante din magazin. Datele sunt preluate din *Tipurile DDT* sau sunt introduse manual.
- **Variante**: este posibil să alegi o variantă a articolului, dacă sunt codificate în *Registrul articolului > Variante*.    
- **Starea execuției**: în această secțiune este posibil să verifici dacă linia articolului a fost Valorificată, Valorificată parțial sau Valorificată forțat.       
- **Proiect**: este proiectul asociat documentului sau poate fi atribuit cu ajutorul ajutorului de câmp.     
- **Recuperare TVA**: dacă este setat, TVA-ul cadoului este considerat pentru totalul documentului.   
- **Referința comenzii**: se referă la comanda din care a fost creat DDT-ul.  
- **Referința noastră/referința dumneavoastră**: în aceste câmpuri se indică, de obicei, o referință internă și o referință a clientului pentru document; în cazul în care DDT-ul este generat printr-o procedură de creare automată, aceste câmpuri vor fi populate cu indicațiile prezente în documentul de origine.      
- **Număr/Data referință**: indică Referința la Numărul și Data Comenzii clientului de origine.     
- **Marcă**: reprezintă marca articolului, preluată din registrul său sau din lista de prețuri a articolului.    
- **În factură**: acest flag este introdus implicit, dar poate fi dezactivat dacă articolul nu trebuie să fie transferat în factură și astfel nu ar trebui să apară în procedurile de execuție ale DDT-ului.     
- **Notă**: oferă posibilitatea de a introduce note pentru fiecare articol.     
- **Detalii declarații**: se raportează [Declarația de intenție](/docs/finance-area/declarations/declarations/intent-declaration) utilizată pentru propunerea TVA-ului articolului; din combo box este posibil să schimbi declarația de intenție de referință, dacă sunt prezente mai multe declarații valide.    

### 3.3 Agenți

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Loturi și Număr de serie

În cele două grile pot fi introduse loturile și numerele de serie care trebuie descărcate din magazin.     
Această operațiune este condiționată de prezența loturilor și numerelor de serie în magazin. 

Dacă articolul nu prevede gestionarea Loturilor/Numerelor de serie, acest tab va fi dezactivat.  

#### Butoane specifice

import DeleteLot from './../../../import/buttons/delete-lot.md'

> <DeleteLot />

import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteSN />

### 3.5 Analitic

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Date suplimentare

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documente anexate

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Secțiunea valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **4. Răspunsuri**

În Răspunsuri sunt prezentate informațiile principale ale întregului document.

### 4.1 Reduceri finale articole

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Răsumt provizioane agenți

În acest tab sunt rezumate provizioanele prevăzute pentru fiecare agent.     

### 4.3 Cheltuieli/Reduceri/majorări finale 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

- **Detalii declarații**: este inserată eventuala declarație de intenție validă pentru client.    

### 4.4 Răsumt TVA

Se propune răsumt TVA documentului, pentru fiecare cod TVA.

### 4.5 Răsumt termene

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

### 4.6 Totale document

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Transport**

Datele prezente sunt: 

- **Destinatar**: se propune destinatarul prestabilit introdus în registrul clientului; dacă nu este prezent, se ia adresa clientului.    
- **Destinație**: se propune destinația prestabilită a destinatarului, dacă este inserată în registrul clientului.        
- **Număr de urmărire**: câmp liber. 
- **Volum**: se propune volumul cumulativ, rezultat din suma volumelor articolelor (valoarea este preluată din Registrul articolului > tab Greutăți/Dimensiuni), când unitatea de măsură a volumului articolelor corespunde celei introduse în [parametrii DDT](/docs/configurations/parameters/sales/dn-parameters). 
- **Greutate netă**: se propune greutatea netă cumulativă, rezultat din suma greutăților articolelor (valoarea este preluată din Registrul articolului > tab Greutăți/Dimensiuni), când unitatea de măsură a greutății articolelor corespunde celei introduse în parametrii DDT. 
- **Greutate brută**: se propune greutatea brută cumulativă, rezultat din suma greutăților articolelor (valoarea este preluată din Registrul articolului > tab Greutăți/Dimensiuni), când unitatea de măsură a greutății articolelor corespunde celei introduse în parametrii DDT.     
- **Aspectul exterior al bunurilor**: combo box care trimite la tabela omonimă.     
- **Coli**: se propune numărul de coli, pe baza datelor introduse în *Registrul articolului > tab Greutăți/Dimensiuni*, în câmpurile *Articole prezente într-un col* sau *Coli pentru a forma articolul*. Se iau în considerare doar articolele care au acest câmp completat.     
- **Valori modificate manual**: cu acest flag se permite modificarea câmpurilor Volum, Greutate netă, Greutate brută și Coli, care altfel reporta levă date din registrul articolului fără posibilitatea de modificare.     
- **Intrare/Ieșire din biroul vamal**: câmpuri utilizate pentru eTransport pentru versiunea română, care trimite la tabela Biroul vamal.     
- **Intrare/Ieșire punct de frontieră**: câmpuri utilizate pentru eTransport pentru versiunea română, care trimite la tabela Punct de frontieră.      
- **Transport**: este necesar să selectați figura care se va ocupa de transport, punând flagul în Expeditor, Destinatar sau Transportator; în funcție de selecție, secțiunea de mai jos se va schimba; dacă transportul este în sarcina Expeditorului, va fi posibil să se introducă Numărul de înmatriculare al vehiculului, Remorca, Data și Ora de Început al transportului; dacă este în sarcina Destinatarului, va fi posibil să se introducă Numărul de înmatriculare al vehiculului, Remorca, Data și Ora de Început al transportului; dacă este în sarcina Transportatorului, câmpurile disponibile vor fi Registrul contabil al Transportatorului, Numărul de înmatriculare, Remorca, Data și Ora transportului, eventual Clientul, Încărcătorul, Proprietarul, Locul de încărcare. 

## **6. Documente conectate**

În acest tab este posibil să consultați documentele anexate.
Pentru a anexa documentele, pot fi urmate două căi:
- utilizând butonul din bara de instrumente **Documente**, se poate alege dacă să anexezi un document deja codificat în Fluentis sau să creezi un nou Document de anexat.       
- utilizând direct în grilă tasta dreaptă și selectând *Anexare fișier*, se va crea un nou Document de anexat.