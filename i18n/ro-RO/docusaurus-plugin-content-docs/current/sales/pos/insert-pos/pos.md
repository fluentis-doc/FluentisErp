---
title: POS Nou
sidebar_position: 1
---

În formularul **Creează POS** se deschide prin calea **Vânzări > POS > Creează POS** sau prin butonul **Nou** care se află în formularul de căutare *POS*.

## **1. Date obligatorii**
În formularul de introducere, **Data** și **Anul** curent sunt propuse automat, dar pot fi modificate.

Pentru a continua crearea facturii de vânzare, utilizatorul trebuie să introducă câmpurile obligatorii:

- **Tip POS** predefinit în *Configurare > Tabele > Vânzări > Tipuri POS*.

- **Număr**: fiecărui document i se atribuie un număr conform numerotării specificate de utilizator în tabelul [Numerotare POS](/docs/configurations/tables/fluentis-numerations) și tipului de document care conține numerotarea.

- **Cont**, folosind [ajutorul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau tastând [direct](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) datele.  

:::danger[Atentie]
Acest câmp nu este relevant pentru gestionarea [**Contabilizării POS**](/docs/sales/pos/pos-accounting). Cauza contabilă asociată contabilizării POS trebuie să aibă în interior definiția unui cont Client **FIX** și detaliat cu cod de **subcont** (de exemplu, un cont "Client încasări"). Tipul de sumă pe linia cauzei pentru subcontul clienților va fi setat ca *Total document / înregistrare*.
:::

- **Anagrafica**: reprezintă un câmp alternativ la *Cont* care poate fi utilizat pentru a introduce un *Contact* care nu este asociat cu niciun subcont.

## **1.1 Totaluri document**

În partea dreaptă a formularului se află totalurile documentului.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

#### Butoane specifice  
> **Fiscale**: permite generarea bonului fiscal interconectându-se cu un registrator de casă (prealabil configurarea conexiunii prin câmpuri adecvate).  
> **Descărcare POS**: permite descărcarea POS, dacă pentru fiecare articol au fost introduse depozitul și cauza.

## **2. Antet**

După ce a selectat datele obligatorii în secțiunea superioară, utilizatorul poate continua introducerea următoarelor date [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau cu [ajutorul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Introducând **Contul**, se *propun* automat toate datele specifice anotării **Antet**, conform datelor setate anterior în [anagrafica contactului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), în câmpurile corespunzătoare adresei sale și în *secțiunile*:  

- **Monedă**: [Monedă](/docs/guide/common/glossary/glossary-intro#currency), [Curs valutar](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valutară](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Ţară**: [Țară](/docs/guide/common/glossary/glossary-intro#country), [Limba](/docs/guide/common/glossary/glossary-intro#language), [Zonă](/docs/guide/common/glossary/glossary-intro#zone)
- **Transport**: [Expediere](/docs/guide/common/glossary/glossary-intro#shipment), [Transport](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalare](/docs/guide/common/glossary/glossary-intro#packing), [Lista de prețuri](/docs/guide/common/glossary/glossary-intro#sales-price-list) și intervalul său de [valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date)

#### Alte câmpuri 

- **Stare POS**: în curs de creare, POS nu prezintă niciun semn activ. Secțiunea include câmpurile:
> - **Imprimat** se activează atunci când se lansează imprimarea bonului.  
> - **Descărcat** indică faptul că POS a fost descărcat din depozit manual sau prin procedura de descărcare automată.  
> - **Contabilizat**: este selectat automat atunci când POS este contabilizat.  
> - **Anulat**: semnul activ permite anularea POS.

:::note
Semnele pot fi eliminate cu procedura de restaurare a operației.
:::

- **Referința noastră / referința dvs.**: în aceste câmpuri se indică de obicei o referință internă și o referință client pentru POS-ul în cauză.  

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

- **Operator**: permite inserarea utilizatorului care creează documentul. Angajații au fost introduși anterior în tabelul *Angajați* care se află pe calea *Acasă > Angajați*. 

- **Proiect**: folosind [ajutorul de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se poate lega documentul de un proiect.  
Această asociere funcționează doar la nivelul antetului articolului.

### 2.1 Plăți

**Soluțiile de plată** sunt raportate automat din *Anagrafica client* > tabul Plăți și pot fi modificate/șterse de utilizator.

#### Buton specific

> **Șterge plăți**: utilizat pentru a șterge liniile de plată selectate.

### 2.2 Reduceri

Sunt propuse doar reducerile predefinite preluate din *Anagrafica client* > tabul Reduceri și pot fi modificate/șterse de utilizator.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agenți

Indică codul agentului și comisionul său pentru fiecare linie de articol. Se propune codul și procentajul definite în *Anagrafica client* > tabul Agenți.

Dacă comisionul nu este legat de client în anagrafica sa, trebuie să se introducă agentul dar cu comision NULL, deoarece dacă ar fi cu comision 0, aceasta ar însemna că agentul este asociat, dar nu primește comision.

Aceeași secțiune va fi repropusă pentru fiecare linie de articol în tab-ul său *Agenți*.

#### Buton specific

> **Șterge agenți**: permite ștergerea agenților selectați.

## **3. Articole**

În acest tab sunt introduse toate articolele cu datele lor corespunzătoare.

Pentru tot ceea ce nu este detaliat în acest document cu privire la funcționarea comună a formularelor, consultați următorul link [Funcționalități, butoane și câmpuri comune](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Pentru a introduce un **Articol nou** în grilă, trebuie să vă poziționați pe linie pentru a completa diferitele date sau să utilizați butonul **Nou** prezent în bara de ribbon.

### 3.1 Date obligatorii

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linie** oferă posibilitatea de a selecta articole cu caracteristici diferite:

> - **Articol codificat**: acestea sunt articolele codificate în anagrafica și pot fi contabilizate în contabilitate analitică și înregistrate în depozit; 
> - **Articol notă**: este o simplă notă, nu afectează contabilitatea și depozitul.
> - **Articol cadou**: acest tip de linie indică faptul că articolul introdus în acea linie va fi un articol cadou, și deci nu va avea un cost pentru client;

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Preț cu TVA**: reprezintă prețul cu TVA și trebuie să fie introdus anterior în *Anagrafica articole* > tabul Costuri și poate fi diferit pentru depozite;

- **TVA** și **Imponibil** sunt calculate automat, preluând valorile din prețul cu TVA.

#### Butoane specifice

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

### 3.2 Reduceri/Listă de prețuri

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.3 Detaliul articolului

În acest tab sunt raportate/inserate informații suplimentare referitoare la articol.

- **Articol**: preia informațiile articolului selecționat din grila de articole.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Proiect**: este proiectul asociat documentului sau poate fi atribuit cu ajutorul ajutorului de câmp.

- **Marcă**: reprezintă marca articolului, preluată din anagrafica sa sau din lista de prețuri a articolului;

- **Vânzări facturate**: se propune datele introduse în *Anagrafica articole* > tabul Generalități.

Dacă aceasta nu este prezentă, nu este propusă nicio dată, dar la momentul contabilizării, va fi considerat valoarea introdusă în câmpul *Cost/Raport de contraparte predefinit* din *Anagrafica client* > Date contabile > tabul Administrativ. 

- **Depozit și cauză**: se propun depozitul și cauză de referință care vor apărea automat în momentul descărcării articolelor corespunzătoare din depozit. Datele sunt preluate din tabelul *Tipuri POS*.

- **Note**: oferă posibilitatea de a introduce note pentru fiecare articol.

### 3.4 Agenți

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.5 Analitic

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## **4. Rapoarte**

### 4.1 Reduceri finale articole

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Cheltuieli/Reduceri/Acres finalizate

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Rapoarte TVA

Se propune raportul TVA al documentului, pentru fiecare cod TVA.

### 4.4 Raport de scadențe

Reprezintă raportul scadențelor documentului, pentru fiecare *tip* și *soluție* de plată. 
 
- **Număr**: valoare progresivă a liniei.  
- **Plată**: reprezintă codul alfanumeric al *Tipului de plată* preluat din *Antetul documentului > tabul Plăți*.  
- **Valoare**: suma scadenței calculată. Poate fi forțată manual, caz în care se activează automat următorul semn *Modificare manuală*. (Se activează automat controale și avertismente legate de echilibrarea valorilor scadențelor și totalul facturii)
- **Dată scadenţă**: Data scadenței calculate. Poate fi forțată manual, caz în care se activează automat următorul semn *Modificare manuală*.
- **Cheltuieli încasare**: câmp în care sunt raportate cheltuielile de încasare calculate.
- **TVA**: care se aplică la cheltuielile de încasare (poate fi setată și manual)
- **Cauza plății (Causale pagamento)**: este posibilă introducerea direct în factură a unei cauze contabile care dă naștere la o înregistrare automată de încasare/plată. NB: fiți atenți la șablonul cauzei deoarece va folosi conturile prezente și fără subcont, motiv pentru care este prezent câmpul următor.
- **Cont/subcont client (Conto/sottoconto cliente)**: contul folosit pentru a încasare/plata (casă sau bancă de exemplu) a scadenței, merge să suprascrie contul prezent în cauza contabilă de plată (sau încasare).