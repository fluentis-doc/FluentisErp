---
title: Nou ordin furnizor
sidebar_position: 2
---
 
Form-ul conține detalii referitoare la produsele sau serviciile de achiziționat, inclusiv cantități, prețuri, termeni de livrare, condiții de plată și alte specificații contractuale.
 
Din form-ul de căutare al ordinelor puteți să creați un nou document folosind butonul **Nou** sau să deschideți unul existent pentru a-l vizualiza și/sau modifica.
 
## *Cum să creați o comandă furnizor*
 
<details>
 
<summary>Click pentru pașii fundamentali</summary>
 
1. **Introduceți datele obligatorii**: *Tip ordin* și *Furnizor*. *An*, *Număr* și *Dată inserare* vor fi propuse automat.  
 
2. **Introduceți sau modificați datele opționale** ale antetului: cum ar fi datele de livrare, eventualele *discounturi*, *destinația*, etc.  
 
3. **Introduceți articolele**: cu dublu clic pe câmpul *Cod articol* se deschide *Help articole*, care permite căutarea și selectarea unui articol existent. Toate celelalte date ale liniei, cum ar fi *unitate de măsură*, *cantitate*, *preț*, vor fi propuse automat, dar pot fi modificate. Alternativ, puteți să selectați ca *Tip linie* un *Articol necodificat* și să introduceți manual datele ulterioare.
 
4. **Introduceți eventuale discounturi sau alte informații suplimentare** în tab-urile *Discounturi/Oferte de preț* și *Date articol*
 
5. **Verificați secțiunea Rapoarte** și introduceți eventuale cheltuieli sau reduceri finale.  
 
6. După ce ați verificat și confirmat ordinul, inserați *Data confirmării* și activați opțiunea *Listat* în antet pentru ca ordinul să fie disponibil pentru procedurile de execuție.
 
</details>
 
 
## 1. Date obligatorii
 
Pentru a crea ordinul, utilizatorul trebuie să introducă câmpurile obligatorii:
 
- **Tip ordin**: predefinit în *Configurare > Tabele > Achiziții > Tipuri ordine furnizori*. determină intervalul de numerotare al documentului care se inserează şi propune automat numărul ordinului furnizor pe baza datei inserate şi a ultimului număr inserat. În plus, dacă în *Tipo ordine* este setată opțiunea [Confirmare automată ordin](/docs/configurations/tables/purchase/purchase-orders-type), este propusă data confirmării ordinului egală cu data inserării ordinului;  
- **An**: ste inserat automat anul în curs, dar poate fi modificat manual respectând regula progresiei dintre dată şi număr;  
- **Numer**: este propus automat pe baza tipului, dar poate fi modificat manual respectând regula progresiei dintre dată şi număr;  
- **Dată inserare**: este propusă automat data curentă, dar poate fi modificată manual respectând regula progresiei dintre dată şi număr;  
- **Furnizor**: poate fi inserat utilizând [help-ul](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) sau [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).
 
## 2. Antet
 
Continuați cu inserarea următoarelor date [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) sau cu ajutorul [help-ului](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).

:::note Important
Dacă documentul este *creat automat*, de exemplu din filtrul de căutare al [**Ordinelor clienți**](/docs/sales/sales-orders/search-sales-orders), din procedura de [**Creare automată ordine**](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) sau din procedura de [**Creare ordin furnizor din ofertă furnizor**](/docs/purchase/offer-request/procedures/order-creation), aceste date sunt preluate din *documentul de origine* din care a fost generat. 
:::
 
### 2.1 Date furnizor

Introducând **Furnizorul**, sunt propuse automat toate datele specifice tab-ului **Antet**, conform datelor setate anterior în [Registru furnizor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) în câmpurile corespunzătoare adresei sale și în secțiunile:

- **Monedă**: secțiune conținând date din [Monedă](/docs/configurations/tables/general-settings/currencies), [Schimb valutar](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valută](/docs/guide/common/glossary/glossary-intro#currency-date).  
- **Țară**: secțiune conținând date din [Țară](/docs/guide/common/glossary/glossary-intro#country), [Limba](/docs/guide/common/glossary/glossary-intro#language), [Zonă](/docs/guide/common/glossary/glossary-intro#zone).  
- **Expediţie**: secțiune conținând date din [Expediere](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Incoterm](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaj](/docs/guide/common/glossary/glossary-intro#packing), [Listă de prețuri](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinită și intervalul său de [valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Plăți**: secțiune conținând date din [Plăți](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discounturi*, *Destinație* și *Transportator*.    

Toate aceste câmpuri pot fi șterse sau modificate manual de utilizator.  
 
### 2.2 Date opționale antet

- **Dată cerere livrare** și **Dată livrare**: dacă sunt setate înainte de a introduce articolele în ordin, acestea vor fi raportate și pe liniile individuale ale articolului. Alternativ, este suficient să apăsați butonul *Substituie data prevăzută pentru livrare din linii* din ribbon bar pentru a actualiza datele pe liniile articolului.  
- **Dată confirmare ordine**: pentru *Tipuri ordine* cu opțiunea [Confirmare automată ordin](/docs/configurations/tables/purchase/purchase-orders-type) se introduce automat data curentă la momentul creării ordinului. Pentru a putea efectua livrarea unui ordin furnizor, este necesar să se introducă *Data confirmării*.  
- **Dată început**: este data de la care pornește calcularea termenelor de plată.  
- **Note furnizor**: acest câmp este preluat din [registru furnizor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), dar poate fi introdus și manual.  
- **Referință noastră/dumneavoastră**: în aceste câmpuri se indică de obicei o referință internă și o referință furnizor pentru document. Dacă este prezent, este preluat din registru furnizor, altfel poate fi introdus manual.    
În cazul în care ordinul este completat cu procedura *Executare din proiect*, în câmpurile *Note furnizor* și *Referință noastră/dumneavoastră* este propusă informația prezentă în câmpurile omonime ale comanda de achiziție. Această transferare este valabilă doar în cazul unui ordin furnizor creat prin preluarea datelor dintr-un singur document sursă.  
- **Note inițiale ordin**: se pot selecta notele care au fost introduse anterior în tabelul din *Configurări > Utilitare > Gestionare note codificate*. Pentru aceasta, efectuați dublu clic pe câmpul *Note inițiale* pentru a deschide *Help note codificate* din care se pot selecta datele.  
- **Proiect**: utilizați help-ul câmpului pentru a asocia un [proiect](/docs/project-management/projects/search-projects-intro). Această asociere funcționează doar la nivelul antetului articolului. Proiectul este introdus automat dacă ordinul furnizor este creat dintr-un document care îl conține (de exemplu, din ordinele planificate de achiziție).  
- **Comandă de producție**: utilizați help-ul câmpului pentru a asocia o [comandă de producție](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders). Dacă ordinul este creat din *lansare ordine planificate de achiziție*, comanda este propusă automat.  
- **Țară**, *Limbă*, *Zonă* sunt preluate din registru furnizor, dacă sunt prezente, altfel pot fi introduse manual.  
- **Operator**: permite introducerea utilizatorului care creează documentul. Dacă în *Parametrii ordine furnizor* opțiunea [Cod operator obligatoriu)](/docs/configurations/parameters/purchase/purchase-orders-parameters) este activ, va fi obligatoriu să se introducă angajatul în acest câmp pentru a putea salva ordinul. [Angajații](/docs/project-management/registers/employee/new-employee) trebuie să fie introduși anterior în tabelul *Angajați*.  
- **Livrari**, *Incoterm* și *Ambalaj* sunt preluate din registru furnizor, dacă sunt prezente, altfel pot fi introduse manual.  
- **Ofertă de prețuri**: dacă în registru furnizor există o ofertă cu opțiunea *Predefinit*, aceasta va fi propusă în acest câmp împreună cu datele sale de valabilitate.  
- **Oferte de actualizat**: dacă această opțiune este activă, oferta de achiziție corespunzătoare se actualizează automat în timpul salvării cu informațiile articolului. Această opțiune poate fi modificată și la nivelul liniei articolului.  
- **Puncte de vânzare**: se află sub meniul opțiunii *Expediții* și este gestionat doar de verticalizarea referitoare la lanțurile de distribuție. În cazul unui ordin furnizor creat prin transfer de bunuri între punctele de vânzare ale unui singur lanț, în acest câmp se vizualizează punctul de vânzare sursă a bunurilor.
- **Stare livrare**: când ordinul este livrat printr-un aviz sau o factură, *Starea livrării* se schimbă automat din *Neefectuat* (Neexecutat) în *Parțial executat* sau *Executat*. Utilizatorul poate forța executarea unui ordin care nu este complet livrat iar când acest lucru se întâmplă, se salvează și data livrării în câmpul *În data*.  

Următoarele opțiuni indică *starea ordinului*:
- **Listat**: această opțiune este activată automat în momentul lansării *imprimării* definitive cu butonul din ribbon bar. Alternativ, poate fi activat manual pentru a efectua executarea ordinului într-un aviz sau într-o factură;  
- **Anulat**: când utilizatorul dorește să anuleze un document în loc să-l șteargă, automat ordinul este setat forțat ca executat pe toate liniile sale de articole;  
- **Arhivat**: când utilizatorul îl arhivează.

#### Butoane specifice

> **Executare din proiect**: apelează procedura pentru crearea unui ordin furnizor dintr-o comandă de achiziție. Se activează prin introducerea furnizorului și a tipului de ordin furnizor. Pentru a putea executa comanda de achiziție, este necesar să fie imprimată și confirmată.   
> **Substituie data prevăzută pentru livrare în linii**: permite, după specificarea *Datei cerute livrare* și/sau a *Datei de livrare* în antetul ordinului, să fie înlocuite masiv aceste date în liniile articolului deja introduse.

### 2.3 Plăți

**[Soluțiile de plată](/docs/configurations/tables/general-settings/payment-terms)** sunt preluate automat din *registru furnizor - tab Plăți* dar pot fi modificate/șterse de utilizator.

Dacă la **[Tipil plății](/docs/configurations/tables/general-settings/payment-types)** este asociat un discount financiar, suma discountului este considerată doar în scopuri contabile, adică în scadențele documentului și nu în totalul documentului.

Dacă documentul provine dintr-o comandă sau dintr-o ofertă furnizor, tipul de plată este preluat din documentul sursă.

#### Buton specific

**Șterge plăți**: utilizat pentru a șterge liniile de plată selectate.

### 2.4 Discounturi

Sunt propuse doar discounturile prestabilite, preluate din *Registru furnizor > tab Discounturi*. Acestea pot fi modificate/șterse de utilizator.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Destinație

Informația introdusă în *Registru furnizor > tab Livrări* este propusă doar dacă există date implicite. Combo-box-ul propune toți destinatarii, destinațiile și transportatorii introduși în registru furnizor.

Adresele de expediere (destinatar/destinație și transportator) pot fi introduse și doar descriptiv chiar dacă nu au fost introduse anterior în contacte.

### 2.6 Transportator

Permite inserarea *Transportatorul* care va efectua expedierea. Dacă acesta a fost introdus în *Registru furnizor > tab Livrări*, va fi posibil să-l selectați din combo-ul din a doua coloană. Alternativ, va fi suficient să faceți dublu clic pe a treia coloană (*Transportator*) pentru a selecta unul dintre contactele companiei.

Opțional, se pot adăuga detalii pentru *Numărul de înmatriculare* al transportatorului și *Data/Ora transportului*.

### 2.7 Extra data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />
 
### 2.8 Procedură antet - Executare din proiect

Procedura permite executarea și parțială a comenzii de achiziție. Sunt propuse toate comenzile neexecutate, neforțate și parțial executate. Pentru a putea fi executată o comandă de achiziție, aceasta trebuie să fie *Listată* și cu *Data confirmării* completată.
 
Înainte de a continua cu executarea, va fi necesar să introduceți *Tipul de ordin* pe care doriți să-l creați și *Furnizorul* în antetul documentului. Ulterior, apăsând butonul **Executare din proiect**, se va deschide form-ul unde puteți să filtrați comenzile referitoare la furnizorul documentului.

În zona de filtrare, puteți să alegeți dacă să vizualizați datele într-un tabel, o structură ierarhică sau ambele.

> - **Structură ierarhică** permite o subdiviziune mai clară a diferitelor ordine și articolele conținute în fiecare dintre acestea, facilitând astfel selecția masivă a articolelor dintr-o comandă.  
> - **Tabel** permite o personalizare mai mare a form-ului prin adăugarea de câmpuri din *Object navigator*. În acest caz, selecția masivă se va efectua prin utilizarea tastaturii și făcând clic pe butonul *Activare/Dezactivare doar rânduri selectate* din ribbon bar.

După ce toate *Filtrele* dorite sunt setate, făceți clic pe butonul de *Căutare* pentru a afișa în partea inferioară toate comenzile tipărite, confirmate și neexecutate sau executate parțial.

:::important NOTĂ
Procedura preia toate datele prezente în comandă și, ca urmare, vor fi aplicate condițiile de achiziție prezente în comandă, chiar dacă acestea s-au schimbat între timp.
:::

În tabelul de rezultate, utilizatorul are apoi posibilitatea de a:

- Selecta toate sau doar unele dintre articolele propuse: pentru a face acest lucru, va trebui să selectați opțiunea prezentă la începutul rândului articolului. Cantitatea de executat va fi setată automat egală cu *Cantitatea reziduală*.
- Selectați doar unele articole pentru o cantitate parțială. În acest caz, va trebui să modificați *Cantitatea de executat*.

Pentru a finaliza procedura, va trebui să faceți clic pe butonul *Executare*, care va prelua toate datele prezente în comandă și le va transfera în ordine.

#### Butoane specifice

> **Căutare**: permite căutarea comenzilor de achiziție;  
> **Executare**: permite transferul articolelor selectate;  
> **Selectează/Deselectează tot**: permite selectarea/deselectarea tuturor articolelor din listă;  
> **Activare/Dezactivare doar rânduri selectate**: util mai ales pentru executarea prin tabel; permite activarea/dezactivarea flag-urilor tuturor rândurilor selectate.
 
## 3. Articole
 
În acest tab se introduc toate articolele cu datele corespunzătoare.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Pentru a introduce un nou articol în tabel, este suficient să vă poziționați pe rând pentru a completa diversele date sau să folosiți butonul *Articol nou* prezent în ribbon bar.

### 3.1 Date obligatorii

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip rând**: oferă posibilitatea de a selecta, din combo-box, articole cu caracteristici diferite:
> - *Articol codificat*: sunt articolele codificate în registru și pot fi contabilizate în contabilitate analitică și înregistrate în stoc. <br />
> - *Articol ne-codificat*: sunt articole descriptive care pot fi contabilizate în contabilitate analitică, dar nu pot fi mișcate în stoc. <br />
> - *Articol cheltuieli*: sunt articole codificate sau ne-codificate și sunt rezumate distinct în rezumatele documentelor; dacă articolul cheltuială este codificat și de interes fiscal, va fi mișcat în stoc, dacă este ne-codificat sau nu este de interes fiscal, nu va fi mișcat în stoc. <br />
> - *Articol note*: sunt note descriptive incluse în imprimarea documentului; nu afectează contabilitatea și stocul.

:::note Notă
Dacă se începe direct cu introducerea articolului, clasa sa, codul și tipul rândului (*Articol codificat*) sunt introduse automat.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

În absența ofertei de prețuri, datele propuse pot fi preluate din *costul ultim* al articolului înregistrat, dacă în [Parametrii ordine furnizori](/docs/configurations/parameters/purchase/purchase-orders-parameters) opțiunea *Cost zero în absența ofertelor* nu este activ.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Sumă**: este calculată automat, fără discounturi.
- **Total discounturi**: indică suma totală a discounturilor prezente în tab *Discounturi/Oferte* pentru fiecare rând de articol.  
 
### 3.2 Date opționale articole

- **Cod/Descriere articol furnizor**: în această secțiune se poate adăuga codul și descrierea pe care furnizorul le utilizează pentru a identifica articolul; această dată este propusă automat dacă în registru articolului, tab [Furnizori preferențiali](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors) a fost asociat un articol furnizor.

- **Tip facturare achiziții**: este propusă data introdusă în tab [Generalități](/docs/erp-home/registers/items/create-new-items/item-registry/generality) din registrul articole. Dacă aceasta nu este prezentă, nu este propusă nicio dată și, la momentul contabilizării facturii, va fi considerat valoarea introdusă în câmpul *Cheltuieli/Venituri contrapartidă implicit* din registrul contactului.

- **Data cerută livrare** și **Dată livrare**: indică data cerută și prevăzută pentru livrare. Pot fi propuse datele introduse în tab *Antet* sau se pot modifica manual.

#### Butoane specifice

> **Subdivide cantitatea pe mai multe date de livrare**: utilizat pentru a împărți rândul comenzii în mai multe rânduri în funcție de livrarea cerută. Această procedură va deschide un nou form în care se va introduce noua *Dată cerere livrare* și cantitățile prevăzute pentru fiecare dată.  
> **Ambalare**: se activează după salvarea comenzii și permite crearea unei UDC (Unități de Desfacere a Comenzilor) pornind de la rândul selectat. Rândul trebuie să fie un articol codificat și salvat în document. Utilizatorul trebuie să aibă drepturi în [Parametrii de încărcare/descărcare](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro/) pentru încărcarea paletului. În plus, articolul trebuie să fie gestionat la UDC, iar în funcție de setările *Tip UDC* introduse în registrul articolului, tab [Ambalare](/docs/erp-home/registers/items/create-new-items/item-registry/packaging) va fi creat UDC respectând criteriile.  
> **Actualizare oferte**: butonul *Actualizează oferta curentă* permite actualizarea prețurilor din oferta curentă pentru fiecare rând de articol selectat;    
butonul *Creează o nouă ofertă de preţuri cu o nouă valabilitate* va deschide un pop-up în care se vor introduce datele de validitate ale noii oferte, care va conține doar rândurile selectate și va fi asociat furnizorului inserat în comandă.

:::note Important 
Când se creează/actualizează o ofertă cu această procedură, în ofertă sunt incluse doar discounturile introduse manual în comandă.
:::

### 3.3 Discounturi/Oferte

- **Ofertă preţ**: este propusă oferta din care a fost preluat prețul articolului, cu data început/final validitate și cu condițiile particulare (de exemplu, **Tip eşalon** de discount) atribuite articolului în ofertă.

- **Preț manual**: se activează automat când prețul articolului a fost introdus sau modificat manual.

- **Oferte de preț de actualizat**: dacă acest flag este activ, prețul articolului se actualizează automat în oferta de achiziție corespunzătoare în timpul salvării.

- **Discounturi**: sunt propuse toate discounturile asociate articolului, fiecare cu propria bază de calcul și de atribuire.        

#### Buton specific

**Șterge discounturi**: permite ștergerea discountului selectat din tabelul relativ.

### 3.4 Date articol 

În acest tab sunt prezentate/inserate informații suplimentare referitoare la articol.

- **Variantă**: în acest câmp este posibil să se selecteze o variantă a articolului dintre cele anterior codificate în tab [Variante (Varianti)](/docs/erp-home/registers/items/create-new-items/item-registry/variants) al registrului articolului. Dacă în listin au fost introduse prețuri și/sau discounturi diferite pentru fiecare variantă, acestea vor fi actualizate atunci când se selectează o variantă diferită a articolului.  

- **Proiect**: reprezintă proiectul de asociat documentului. Dacă în antetul documentului a fost introdus un proiect, acesta va fi raportat pe toate rândurile articolului; alternativ, poate fi selectat prin ajutorul corespunzător al proiectelor.

- **Note**: sunt notele referitoare la rândul articolului și pot fi introduse și cu ajutorul notelor codificate. Acestea vor fi raportate în toate documentele generate.

- **Marcă**: reprezintă marca articolului, preluată din registrul său sau din oferta articolului.

- **Articole comandă de producție**: dacă ordinul furnizor este legat de o comandă de producție (prin emiterea unui ordin planificat de achiziție și crearea unui ordin furnizor din cererea de achiziție), în acest câmp este raportat articolul părinte conținut în comandă.

- **Cerere de ofertă**: dacă ordinul a fost creat dintr-o cerere de ofertă, prin procedura [Creare Ordin furnizor din Ofertă furnizor](/docs/purchase/offer-request/procedures/order-creation), în acest câmp este preluată cererea de referință.

- **Gestiune** și **Şablon**: sunt propuse gestiunea și șablonul de referință care vor apărea automat în momentul încărcării articolelor corespunzătoare în gestiune. Datele sunt preluate din [Tipuri ordine](/docs/configurations/tables/purchase/purchase-orders-type), dar pot fi modificate manual pentru fiecare rând de articol.

- **Comenzi de producție**: dacă ordinul furnizor a fost creat din planificare de producție, este raportată comanda de producție de referință (vezi *Creare automată ordine*). 

- **Preț unitate de măsură alternativă**: dacă este activ, indică faptul că prețul introdus pentru articol se referă la unitatea de măsură alternativă și nu la cea principală. Acest flag, împreună cu câmpurile *Unitate de măsură alternativă* și *Cantitate alternativă*, este vizibil doar dacă în [Parametrii ordine furnizori](/docs/configurations/parameters/purchase/purchase-orders-parameters/) a fost activat flagul *Gestionare unitate de măsură dublă*.

- **Unitate de măsură/Cantitate alternativă**: dacă în [registrul articolului](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) a fost codificată o unitate de măsură alternativă cu opțiunea *Predefinit* și în *Parametrii ordine furnizor* a fost activată opțiunea *Propunere automată U.M. alternativă*, aceste valori vor fi propuse automat în momentul introducerii articolului.
 
### 3.5 Analitic
 
import TabAnalytic from './../../../import/sections/tab-analytic.md'
 
<TabAnalytic />
 
### 3.6 Extra data
 
import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'
 
<DocItemExtraData />
 
### 3.7 Documente atașate
 
import DocAttachDocument from './../../../import/sections/doc-attach-document.md'
 
<DocAttachDocument />
 
### 3.8 Secțiune valori
 
import SalesValuesSection from './../../../import/sections/item-values-section.md'
 
<SalesValuesSection />
 
## 4. Rezumat

În diversele secțiuni ale acestui tab sunt prezentate informațiile principale ale întregului document și câteva butoane specifice.

### 4.1 Discounturi finale

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'
 
<SummariesFinalDiscount />

### 4.2 Cheltuieli

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'
 
<SummariesExpenses />

### 4.3 Rezumat TVA

Este propus rezumatul TVA al documentului, pentru fiecare cod TVA.

### 4.4 Rezumat scadențe

În acest tabel sunt afișate scadențele calculate în funcție de soluțiile tipurilor de plată introduse.

### 4.5 Alte câmpuri

**Note finale**: este un câmp descriptiv care poate fi completat de utilizator și cu ajutorul *Help-ului note codificate*.

### 4.6 Total document
 
import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'
 
<SummariesDocumentTotal />
