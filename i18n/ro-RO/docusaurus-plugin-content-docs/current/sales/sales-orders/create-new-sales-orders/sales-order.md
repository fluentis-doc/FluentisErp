---
title: Comandă nouă client (Nuovo ordine cliente)
sidebar_position: 1
---

Formularul **Creează comandă client** se deschide prin parcursul **Vânzări > Comenzi clienți > Comandă nouă** sau prin butonul ![](/img/neutral/common/new.png) care se află în formularul [Căutare comenzi clienți](/docs/sales/sales-orders/search-sales-orders).

## *Cum să creezi o comandă client*

<details>

<summary>Click pentru pașii fundamentali</summary>

1. **Introdu datele obligatorii**: *Tip comandă* și *Client*. *Anul*, *Numărul* și *Data introducerii* vor fi propuse automat.

2. **Introdu sau modifică datele opționale** ale antetului: cum ar fi datele de livrare, eventualele *discounturi*, *destinația*, etc.

3. **Introdu articolele**: prin dublu clic în câmpul *Cod articol* se deschide ajutorul pentru articole care permite căutarea și selecția unui articol existent. Toate celelalte date ale liniei, cum ar fi *unitatea de măsură*, *cantitatea*, *prețul*, vor fi propuse automat, dar pot fi modificate.
Alternativ, este posibil să selectezi ca *Tip linie* un *Articol necodificat* și să introduci manual datele ulterioare.

4. **Introdu eventuale discounturi sau alte informații suplimentare** în tab-urile *Discounturi/listine* și *Date articol*.

5. **Verifică secțiunea Rapoarte** și introdu eventuale cheltuieli sau discounturi finale.

6. Odată verificată și confirmată comanda, **introdu o *Dată confirmare* și activează indicatorul *Tipărit* în antet** pentru a face comanda disponibilă pentru procedurile de executare.

</details>

## **1. Date obligatorii**

Pentru a continua crearea comenzii client, utilizatorul trebuie să introducă câmpurile **obligatorii**:

- **Tip comandă**: predefinit în Configurare > Tabele > Vânzări > [Tipuri comenzi](/docs/configurations/tables/sales/sales-order-types); facem referire la documentația referitoare la tabel pentru studierea diverselor configurații posibile, dar pentru a putea introduce o comandă este necesar ca tipul Comandă să fi definit tipologia de numerare, date obligatorii. În funcție de configurația prezentă în tipul Comandă se pot deschide scenarii diferite pentru introducerea comenzii client, de exemplu, crearea automată a unui proiect, gestionarea la prețuri cu TVA, gestionarea matricilor, etc.
- **Număr**: fiecărui document îi este atribuit un număr conform numerării specificate de utilizator în tabelul [Numerare comenzi clienți](/docs/configurations/tables/fluentis-numerations) și tipului de document care conține numerarea. Numerația asociată tipologiei de comandă prevede de obicei o progresie automată bazată pe dată și număr, cu o funcție de recuperare care acoperă eventualele lacune în secvență (de exemplu, cauzate prin ștergerea documentelor). Acest comportament este reglementat de două indicatoare specifice în tabelul numerării. Dacă utilizatorul dorește să introducă manual numărul, poate dezactiva indicatorul de progresie dată-număr (care garantează creșterea numerării în datele viitoare) și indicatorul de recuperare a numerelor. În plus, va trebui să activeze indicatorul de numerare externă, semnalând astfel sistemului că numerarea va fi gestionată manual.
- **Client**: utilizând [ajutorul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau tastând [direct](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection). Introducând clientul, câmpurile următoare vor fi populate automat, dacă sunt prezente în registru: moneda, națiunea, limba, zona, livrare, listă de prețuri și eventualele discounturi, plăți, discounturi, cheltuieli, agenți, destinație, transportatori, date extra.
- **Data comandă**: indică data creării comenzii. Această dată este esențială pentru calculul termenelor și eventualelor condiții de plată. Se propune data de astăzi, modificabilă; în cazul în care numerarea prevede o progresie a datei și numărului, și introduc o dată în trecut, Fluentis va verifica disponibilitatea numerelor în acea dată pentru a garanta progresia, iar, dacă nu este prezent, va semnala utilizatorului că nu există numere disponibile în acea dată.
- **Tip reținere**: acest câmp este vizibil doar dacă clientul gestionează reținerea la sursă și, prin urmare, dacă în registru prezintă indicatorul omonim și tipul de reținere, în tab-ul [informații fiscale](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information). Reținerea la sursă este o reținere fiscală aplicată pe plăți pentru servicii de muncă sau profesionale, anticipată fiscului de către angajator și ulterior dedusă din impozitul pe venit al beneficiarului. Pentru o gestionare corectă a acestei funcționalități, în tabelul tipuri de reținere trebuie să fie codificat corect codul pentru facturarea electronică. Documentul va recupera automat supunerea la reținere pentru liniile pe care este posibil să se facă calculul și va calcula automat suma reținerii. 

Formularul conține o serie de taburi.

## **2. Antet**

După ce utilizatorul a selectat datele obligatorii în secțiunea superioară, poate continua introducerea următoarelor date [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau cu [ajutorul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Ține minte
Dacă documentul este *creat automat*, aceste date sunt preluate din *documentul de origine* din care a fost generat.
:::

### 2.1 Date client

Introducând **Clientul**, toate datele specifice tab-ului **Antet** sunt *propuse* automat, conform datelor setate anterior în [registrul clientului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), în câmpurile corespunzătoare adresei sale și în *sețiile*:
- **Monedă**: secțiune conținând date [Monedă](/docs/guide/common/glossary/glossary-intro#currency), [Curs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valutei](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Națiune**: secțiune conținând date [Națiune](/docs/guide/common/glossary/glossary-intro#country), [Limba](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Livrare**: secțiune conținând date [Livrare](/docs/guide/common/glossary/glossary-intro#shipment), [Transport](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalare](/docs/guide/common/glossary/glossary-intro#packing), [Listă de prețuri](/docs/guide/common/glossary/glossary-intro#sales-price-list) și intervalul său de [valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date).
- alte câmpuri propuse o dată cu alegerea clientului, dar modificabile: [Destinație](/docs/guide/common/glossary/glossary-intro#destination), [Destinatar](/docs/guide/common/glossary/glossary-intro#recipient).

### 2.2 Date opționale antet

- **Data livrare**: în acest câmp este posibil să introduci data estimată de livrare a mărfii.
- **Data marfii gata**: în acest câmp este posibil să introduci data în care marfa va fi gata; această dată trebuie să fie mai mică sau egală cu cea anterioară.
- **Confirmat**: acest indicator indică faptul că comanda este confirmată și poate fi astfel executată; lângă este prezent **Data confirmare**; această condiție este obligatorie dacă se dorește continuarea comenzii atât pentru eventualele execuții în documentele ulterioare (cum ar fi picking, ddt și facturi), cât și pentru eventuala gestionare a planificării producției.
- **Tipărit**: se activează atunci când comanda este imprimată și identifică faptul că documentul a fost tipărit; acest indicator este important și pentru a permite execuția comenzii în alte documente.
- **Arhivat**: este necesar să se aplice acest indicator dacă documentul trebuie arhivat.
- **Anulat**: indicatorul activ permite anularea comenzii; starea antetului comenzii se va schimba în „forțat executat”, deoarece comanda nu trebuie să mai fie transferabilă în alte documente.
- **Cod Unic Proiect/Cod Identificator Licitație**: dacă în [informațiile fiscale](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) ale registrului client este activat pentru gestionarea CIG și CUP, va fi posibil să completezi aceste date în document.
- **Note client**: acest câmp este preluat din registrul clientului, dar poate fi introdus și manual.
- **Referința noastră/referința voastră**: în aceste câmpuri se indică de obicei o referință internă și o referință pentru client pentru document; în cazul în care comanda este generată printr-o procedură de creare automată, aceste câmpuri vor fi populate cu indicațiile prezente în documentul de origine. Această transferare este valabilă doar în cazul comenzii client create prin preluarea datelor dintr-un singur document.
- **Note inițiale**: se pot selecta notele care au fost introduse anterior în tabela omonimă care se găsește în parcursul *Configurare > Utilități > Gestionarea notelor codificate*; pentru aceasta, utilizatorul trebuie să efectueze dublu clic pe câmp pentru a deschide Ajutorul și a selecta datele; altfel, poate să le introducă manual.
- **Operator**: permite introducerea utilizatorului care creează documentul. Angajații au fost introduși anterior în tabelul *Acasă > Angajați*; acest câmp devine obligatoriu dacă opțiunea este setată în [Parametrii](/docs/configurations/parameters/sales/sales-orders-parameters) documentului respectiv.
- **Starea execuției**: atunci când comanda este executată prin documentele DDT sau facturi, starea execuției sale se schimbă automat de la *Neexecutat* la *Parțial executat* sau *Executat*; utilizatorul poate forța execuția unei comenzi care nu este total executată și când se întâmplă acest lucru, se salvează și data execuției.

:::note
Dacă este activat starea *Executare forțată*, va fi afișat mesajul: „Executarea forțată a liniei implică eliminarea automată a eventualelor comenzi planificate legate de comenzi în stare programată și executarea comenzilor în stare programată și neexaminată. În ceea ce privește documentele generate în raport cu comenzile în stare lansată sau executivă, comenzile și documentele nu vor fi modificate.”
:::

- **Data de începere** este data de începere pentru calculul termenelor de plată.

#### Butoane specifice  
> **Execuție din proiect**: apelează procedura pentru a crea o comandă dintr-un proiect.
> **Înlocuiește data livrării prevăzute în linii**: după ce ai specificat data dorită de livrare și/sau data estimată de livrare în antetul comenzii, este posibil să înlocuiești în masă aceste date în liniile de articol deja introduse.
> **Înlocuiește agent în linii**: acest buton deschide un pop-up în care introduci un registru agent, care va fi aplicat în toate liniile de articol, adăugându-se eventual la agenții deja prezenți.
> **Înlocuiește CIG/CUP în linii**: după ce ai specificat CIG și/sau CUP în antetul comenzii, este posibil să înlocuiești în masă aceste date în liniile de articol deja introduse.
> **Ajutor destinatari/destinatii**: acest buton deschide Ajutorul pentru a putea alege destinatarii/destinatia pentru document, dintre cei disponibili pentru client și, prin urmare, codificați în registrul său.

În antet există, de asemenea, câteva tab-uri pe care le analizăm mai jos.    

### 2.3 Plăți

**Soluțiile de plată** sunt raportate automat din *Registrul clientului > tab Plăți* și pot fi modificate/șterse de utilizator.

Dacă **Tipul de plată** este asociat cu un discount financiar, suma discountului este considerată doar în scopuri contabile adică în termenele documentului și nu în total.

Butonul specific al acestui tab este **Șterge plăți**, utilizat pentru a șterge liniile de plată selectate.

### 2.4 Discounturi

Sunt propuse doar discounturile predefinite preluate din *Registrul clientului > tab Discounturi* și nu cele atribuite condițiilor de plată sau anumitor articole. Acestea pot fi modificate/șterse de utilizator.

Discounturile propuse în antetul documentului sunt raportate în fiecare nouă linie de articol introdusă în document.

Dacă, după ce au fost introduse liniile de articol, se introduce un nou discount în antet, acesta nu este replicat în liniile de articol deja introduse.

Butonul specific al acestui tab este **Șterge discounturi**, utilizat pentru a șterge liniile de discount selectate.

### 2.5 Agenți

Indică codul agentului și comisionul său pentru fiecare linie de articol. Codul și procentul sunt propuse din *Registrul clientului > tab Agenți*.

Dacă comisionul nu este legat de client în registrul său, agenții trebuie să fie totuși introduși, dar cu comision NULL, deoarece dacă ar fi cu comision 0, ar însemna că agentul este legat de acest agent, dar nu primește comision.

În cazul generării DDT din comandă, aceste date vor fi evident raportate la fel ca și cele din comanda clientului.

Aceeași secțiune va fi repropusă pentru fiecare linie de articol în tab-ul său Agenți.

Butonul specific al acestui formular este **Șterge agenți**, care permite ștergerea agenților selectați.

### 2.6 Destinație

Aici este propusă informația introdusă în *Registrul clientului > tab Livrări*, doar dacă există date prestabilite. Combo box-ul propune toți destinatarii, destinațiile și transportatorii introduși în registrul clientului.

Adresele de livrare (destinatar/destinație și transportator) pot fi introduse și descriptive, fără a fi prealabil introduse între contacte.

În cazul în care în registru nu a fost introdus acest lucru ca dată prestabilită, se propun ca destinatar și destinație adresa introdusă în datele register-ului. 

### 2.7 Transportatori

În secțiunea Transportatori sunt propuse datele introduse în tab-ul [Livrare](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) al registrului clientului. În special, este propus subiectul pe care va fi transportul, între expeditor, destinatar și transportator. În funcție de selecție, secțiunea de dedesubt se va schimba; dacă transportul este pe cheltuiala Expeditorului va fi posibil să se introducă Numărul de înmatriculare a vehiculului, Data și Ora de Începere a transportului, iar adresa companiei va fi propusă; dacă este pe cheltuiala Destinatarului va fi posibil să se introducă Numărul de înmatriculare a vehiculului, Data și Ora de Începere a transportului, cu propunerea destinației; dacă este pe cheltuiala Transportatorului, câmpurile disponibile vor fi Registrul contabil al Transportatorului, Numărul de înmatriculare, Data și Ora transportului.

### 2.8 Date Extra

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.9 Co-locuitori

Acest tab este activ doar dacă în registrul clientului, tab-ul [informații fiscale](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), a fost introdus indicatorul pentru gestionarea co-locuitorilor. Gestionarea co-locuitorilor permite mai multor persoane să fie co-proprietari ai comenzii. Co-locuitorii trebuie să fie introduși în adresele alternative ale registrului, cu o adresă de [tip](/docs/configurations/tables/general-settings/address-types), adică, co-locuitori. În acest mod, ei vor fi propusi în acest tab, unde este necesar să se introducă manual procentajele de împărțire a cheltuielilor.

## **3. Articole grupate**

Acest tab este activ și vizibil doar pentru [Tipuri de comandă](/docs/configurations/tables/sales/sales-order-types) care au activat indicatorul *Gestionare matrici Date Extra* și configurația corespunzătoare. Acest tab permite de fapt generarea variantelor de articol pentru diversele combinații de atribute valide, care vor fi transferate în tab-ul următor [Articole](/docs/sales/sales-orders/create-new-sales-orders/sales-order).       
Pentru toate câmpurile care nu sunt discutate în această pagină, puteți face referire la documentația tab-ului [Articole](/docs/sales/sales-orders/create-new-sales-orders/sales-order).       
Introducând un [articol gestionat prin matrice](/docs/erp-home/registers/items/create-new-items/item-registry/matrix) în grila de articole, astfel, în tab-ul Matrici va fi vizibilă matricea asociată cu registrul articolului. În celulele matricei va fi posibil să se introducă cantitățile comandate pentru fiecare combinație; va fi posibil să se completeze doar celulele care au o combinație valabilă în registru.       
Odată introduse cantitățile pentru fiecare combinație, este necesar să faceți clic pe butonul din bara de instrumente *Confirmă valori matrice* pentru a genera atâtea variante cât sunt combinațiile posibile. Fiecare variantă va popula o linie din tab-ul următor Articole, cu cantitatea corespunzătoare.

## **3. Articole**

În acest tab sunt introduse toate articolele cu datele lor corespunzătoare.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Pentru a introduce un **Articol nou** în grilă, este suficient să te poziționezi pe linie pentru a completa diversele date sau să utilizezi butonul **Nou** prezent în bara de ribbon.

Mai jos analizăm câmpurile *obligatorii* care sunt prezente în grila principală:
- **Linie**: acest câmp conține numărul liniei și se va completa automat și progresiv în timpul introducerii datelor în linie.

- **Tip linie**: oferă posibilitatea de a selecta, din combo-box, articole cu caracteristici diferite:
>- *Articol codificat*: sunt articolele codificate în registru și pot fi contabilizate în contabilitatea analitică și înregistrate în magazin.
>- *Articol necodificat*: sunt articole descriptive care pot fi contabilizate în contabilitatea analitică dar nu pot fi mișcate în magazin.
>- *Articol cheltuieli*: sunt articole codificate sau necodificate și sunt rezumate distinct în rezumatele documentelor; dacă articolul cheltuială este codificat și de interes fiscal va fi mișcat în magazin, dacă este necodificat sau nu de interes fiscal nu vor fi mișcate în magazin.
>- *Articol note*: sunt note descriptive raportate la imprimarea documentului; nu afectează contabilitatea și magazinul.
>- *Articol cadou*: articolul cadou este gestionat ca un articol codificat sau necodificat în scopuri fiscale și contabilitate a magazinului, dar fiind un cadou, este raportat separat în rezumatele documentului și în funcție de indicatorul de Răspundere TVA se calculează suma TVA-ului cadoului pe seama subiectului sau nu.

:::note[NOTĂ]
Dacă începi direct cu introducerea articolului, clasa acestuia, codul și tipul liniei - Articol codificat sunt introduse automat.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note[NOTĂ]
În absența listei de prețuri, datele propuse sunt **prețul de vânzare** preluat din *Registrul articolului > tab [Costuri](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* sau vor fi recuperate în funcție de setările parametrilor documentului. În absența acestui date, va fi raportat prețul 0.
:::

- **Impozabil**: acest câmp conține Prețul unitar înmulțit cu cantitatea, net de discounturi.

- **Discounturi articol**: conține discounturile valide pentru articol, provenind din antet, listă de prețuri sau din introducerea manuală.

- **Discounturi finale articol**: conține discounturile finale ale articolului imputate în rezumatele documentului, care au caracteristica de a fi împărțite în toate articolele.

import ItemVat from './../../../import/fields/item-vat.md'

<ItemVat />

#### Câmpuri non-obligatorii

- **Cod de bare/Articol client și Descriere articol client**: aceste date vor fi preluate din informațiile prezente în *Registrul articolelor*; pentru a gestiona codurile de bare este necesar să activezi gestionarea lor în [Parametrii comenzii client](/docs/configurations/parameters/sales/sales-orders-parameters). Această coloană permite propunerea articolului căutându-l după codul său de bare. Fiind codul de bare unic, o dată ce este tastat codul de bare introdus în registrul articolului, acesta va propune articolul.   

- **Vânzări facturate**: este propusă datele introduse în *Registrul articolelor > tab Generalități*; dacă nu este recuperată, trebuie introdusă alegând o voce dintre cele propuse de combo-ul corespunzător, altfel lipsa acestui date ar putea cauza erori în contabilizarea facturii care va fi generată din comandă, dacă în *Registrul clientului > Date contabile > tab Administrativ* nu a fost setat un valoare în câmpul *Venit de contra-partidă predefinit*.

- **Executat forțat**: dacă este activ, acest indicator indică că linia articolului a fost executată forțat: deoarece clientul nu mai dorește acel articol, sau cantitatea produsă și livrată este mai mică decât cantitatea comandată, dar nu se va produce soldul și astfel cantitatea va fi executată forțat.

:::note[NOTĂ]
Dacă se gestionează producția, atunci când indicatorul este activat, va fi prezentat un mesaj care avertizează utilizatorul: „Executarea forțată a liniei implică eliminarea automată a eventualelor comenzi planificate legate de comenzi în stare programată și executarea comenzilor în stare programată și neexaminată”. În ceea ce privește documentele generate în raport cu comenzile în stare lansată sau executivă, comenzile și documentele nu vor fi modificate.
:::

- **Data Marfii gata și Data livrare**: aceste date indică data în care materialul va fi gata (deci când producția se va termina) și data în care se preconizează livrarea materialului; Data Marfii Gata trebuie să fie mai mică sau egală cu Data livrare.

În secțiunea Articole sunt prezente următoarele butoane, în bara de instrumente: 

> **Lista de Bază**: permite deschiderea listei de bază a articolului selectat pentru a-i vizualiza detaliile; (pentru informații suplimentare pe această temă, se face referire la articolul „Arborele listei de bază și gestionarea structurilor”).
> **Explodare prim nivel listă**: permite adăugarea în comandă a materialelor (materii prime și semifabricate) din lista de bază a articolului; vor fi astfel raportate în comandă componentele de prim nivel ale produsului finit. Această opțiune, de exemplu, este foarte utilizată pentru produsele Kit (Deci compuse din piese multiple).
> **Actualizare liste de prețuri**: permite actualizarea prețului articolului într-o listă existentă (salvează documentul pentru a activa aceste butoane), sau crearea unei noi liste cu articolul și prețul său selectat.       
> **Împărțire cantitate în mai multe livrări**: permite împărțirea cantității unei linii de articol în mai multe linii în funcție de datele de livrare. Selectând linia și făcând clic pe buton se va deschide formularul **Livrări diferite** în care va fi raportată *Data marfii gata*, *Data livrare* și *Cantitatea* liniei. În linia următoare trebuie să se indice *Data marfii gata* (care ar trebui să fie aceeași), *Data de livrare* care va fi diferită și *Cantitatea* care va fi livrată în acea dată și apoi va trebui să se modifice data din prima linie, actualizând-o la cantitatea rămasă, astfel încât suma cantităților celor două linii să fie egală cu cantitatea inițială a liniei înainte de împărțire. Confirmă operațiunea cu butonul *OK*.  
> **Ambalare**: permite crearea unei UDC bazate pe linia selectată. Linia trebuie să fie un articol codificat și salvat în document. Utilizatorul trebuie să aibă drepturile în [Parametrii de încărcare/descărcare](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) pentru încărcarea palletului. În plus, articolul trebuie să fie gestionat la UDC și în funcție de setările Tipului UDC introduse în registrul articolului, tab-ul [Ambalare](/docs/erp-home/registers/items/create-new-items/item-registry/packaging), UDC-ul va fi creat respectând criteriile.      

Acum analizăm tab-urile prezente sub grila articole. 

### 3.1 Discounturi/Listine

Acest tab are ca prim câmp eventualul **Listă de prețuri** validă pentru client și legată de articol, altfel este un câmp care poate fi completat manual pentru a prelua prețul articolului dintr-o listă specifică. Lângă datele listă asignată este prezent câmpul **Tip scutire**: acesta raportează scutirea de discount care trebuie utilizată, care este preluată din registrul clientului sau din lista de prețuri în sine.
Indicatorul **Preț manual** permite modificarea prețului și discounturilor manual și păstrarea acestora în documentele generate din documentul în care a fost efectuată modificarea.

În grilă sunt propuse toate discounturile asociate articolului, fiecare cu baza sa de calcul și de asignare. Discounturile pot fi preluate: din registrul clientului, din soluția de plată atribuită documentului, din listă din asociația listă-client. Toate datele propuse sunt modificabile.

Din această grilă este posibil să folosești butonul **Șterge discounturi** din bara de instrumente. 

### 3.2 Date articol

În cadrul acestui tab sunt raportate/inserate informații suplimentare referitoare la articol.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazin/descriere/Cauză**: în aceste câmpuri trebuie să se indice magazinul de descărcare a materialului cu cauza corespunzătoare necesară pentru descărcările de mărfuri la momentul emiterii DDT-ului sau a facturii; aceste date sunt stabilite în tabelul [Tipurilor de comenzi](/docs/configurations/tables/sales/sales-order-types).

- **Proiect**: este proiectul asociat documentului; acesta poate fi asignat, în cazul comenzii client, cu ajutorul procedurii *Execuție din comandă* sau poate fi asignat cu ajutorul ajutorului de câmp.

- **Răspundere TVA**: dacă este setat, TVA-ul cadoului este considerat în totalul documentului.

- **Ofertă**: raportează referința ofertei clientului dacă comanda provine din [Ofertă](/docs/sales/offers/search-offers).

- **Marcă**: reprezintă marca articolului, preluată din registrul său sau din lista de prețuri a articolului;

- **Note**: oferă posibilitatea de a introduce note pentru fiecare articol pe care dorești să fie raportate în toate documentele.  

### 3.3 Agenți

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Loturi și Numere de serie

În cele două grile pot fi introduse loturile și numerele de serie care trebuie descărcate din magazin și care sunt legate de articol în *Registrul articolului > tab [Loturi și Numere de serie](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* sau pot fi introduse manual.

Această operațiune este condiționată de prezența loturilor și numerelor de serie în magazin.

Dacă articolul nu prevede gestionarea Loturilor/Numerelor de serie, acest tab va fi dezactivat.

#### Butoane specifice

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.5 Analitic

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Date Extra

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documente atașate

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Matrici

Acest tab este vizibil exclusiv pentru [Tipuri de comandă](/docs/configurations/tables/sales/sales-order-types) care au indicatorul activat pentru gestionarea matricilor Date Extra. 

### 3.9 Secțiunea valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

Câmpul **Stare** în vârful acestei secțiuni raportează situația articolului în eventualul ciclu de producție și se actualizează automat în funcție de starea comenzii legate.
Articolul poate avea următoarele stări:
- *Introducere* când articolul este introdus;
- *Confirmat* când comanda este confirmată, cu indicatorii și data corespunzători în antet; 
- *În producție* când se generează comanda, prin procedura de [Generarea comenzilor de producție](/docs/planning/ms-master-scheduling/general-schedule) sau automat dacă tipul de comandă prevede acest lucru; 
- *Produs* dacă comanda legată este în stare executată;
- *Anulat* dacă articolul este executat forțat. 

## **4. Rapoarte**

În diferitele secțiuni ale acestui tab sunt prezentate informațiile principale ale întregului document și câteva butoane specifice.

### 4.1 Discounturi finale

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Rapoarte comisioane agenți

În această grilă sunt raportate comisioanele totale acumulate de agent pentru această comandă, în cazul în care există agent asociat. Va fi indicat agentul și valoarea comisionului acumulat.

### 4.3 Cheltuieli/Discounturi/măritori finale

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 Rapoarte TVA

Se propune raportul TVA al documentului, pentru fiecare cod TVA.

### 4.5  Rapoarte termene    

În această grilă sunt raportate termenele calculate în funcție de soluțiile tipurilor de plată introduse. 

### 4.6 Alte câmpuri 

**Note finale**: este un câmp descriptiv care poate fi completat de utilizator și cu ajutorul *Ajutorului notelor codificate*. Se pot introduce note suplimentare pentru client referitoare, de exemplu, la livrare, care vor fi apoi raportate în imprimarea Confirmării Comenzii în partea finală a imprimării.

### 4.6 Totale document

În partea dreaptă a acestui tab se pot consulta rapoartele documentului:       

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Documente legate**

În acest tab este posibil să consulți documentele atașate.
Pentru a atașa documentele, poți proceda în două moduri:
- utilizând butonul din bara de instrumente **Documente**, se poate alege dacă să atașezi un document deja codificat în Fluentis sau să creezi un nou Document de atașat.       
- utilizând direct în grilă butonul din dreapta și selectând *Atașează fișier*, se va crea un nou Document de atașat.