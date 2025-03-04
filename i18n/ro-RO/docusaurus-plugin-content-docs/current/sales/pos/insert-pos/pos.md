---
title: POS Nou (Nuovo POS)
sidebar_position: 2
---

La forma **Creează POS** se deschide prin parcursul **Vânzări > POS > Creează POS** sau prin butonul **Nou** care se află în formularul de căutare *POS*.

## **1. Date obligatorii**
În formularul de introducere sunt propuse automat **Data** și **Anul** curent, dar pot fi modificate.

Pentru a continua crearea facturii de vânzare, utilizatorul trebuie să completeze câmpurile obligatorii:

- **Tip POS** prestabilit în *Configurare > Tabele > Vânzări > Tipuri POS*.

- **Număr** – fiecărui document i se atribuie un număr conform numerotării specificate de utilizator în tabela [Numerotare POS](/docs/configurations/tables/fluentis-numerations) și tipului de document care conține numerotarea.

- **Cont**, folosind [ajutorul câmpului](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau tastând [direct](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) datele. 

:::danger[Atentie]
Acest câmp nu este relevant pentru gestionarea [**Contabilizării POS**](/docs/sales/pos/pos-accounting). Cauza contabilă asociată contabilizării POS trebuie să conțină definiția unui cont Client **FIX** și detaliat cu cod de **subcont** (de exemplu, un cont "Client încasări"). Tipul sumei pe linia cauzei pentru subcontul clienților va fi setat ca *Total Document / înregistrare*.
:::

- **Registru**: acesta este un câmp alternativ pentru *Cont*, care poate fi utilizat pentru a introduce un *Contact* care nu este asociat cu niciun subcont.

### 1.1 Total document

În partea dreaptă a formularului se găsesc totalurile documentului.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

#### Butoane specifice  
> **Fiscal**: permite generarea bonului fiscal interfațându-se cu o casă de marcat (după configurarea conexiunii prin câmpuri corespunzătoare)  
> **Descărcare POS**: permite descărcarea POS, dacă pentru fiecare articol au fost introduse depozitul și cauza.


## **2. Antet**

După ce au fost selectate datele obligatorii în secțiunea superioară, utilizatorul poate continua introducerea următoarelor date [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau cu ajutorul [ajutorului câmpului](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Introducând **Contul** se *propun* automat toate datele specifice tab-ului **Antet**, conform datelor setate anterior în [anagrafica contactului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), în câmpurile corespunzătoare adresei sale și în *seciuni*:  

- **Monedă**: [Moneda](/docs/guide/common/glossary/glossary-intro#currency), [Cursul de schimb](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valutei](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Ţară**: [Țară](/docs/guide/common/glossary/glossary-intro#country), [Limba](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Transport**: [Expediere](/docs/guide/common/glossary/glossary-intro#shipment), [Transport](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalare](/docs/guide/common/glossary/glossary-intro#packing), [Listă de prețuri](/docs/guide/common/glossary/glossary-intro#sales-price-list) și [intervalul de valabilitate](#validity-date).

#### Alte câmpuri 

- **Status POS**: în faza de creare, POS-ul nu prezintă niciun indicator activ. Secțiunea cuprinde câmpurile:
> - **Listat** se activează atunci când este inițiată imprimarea bonului.  
> - **Descărcat** indică faptul că POS-ul a fost descărcat din depozit manual sau prin procedura de descărcare automată.  
> - **Contabilizat**: este selectat automat atunci când POS-ul este contabilizat.  
> - **Anulat**: indicatorul activ permite anularea POS-ului.

:::note
Indicatorii pot fi eliminați prin procedura de restaurare a operației.
:::

- **Referința noastră/referința dumneavoastră (Nostro riferimento/vostro riferimento)**: în aceste câmpuri se indică, de obicei, o referință internă și o referință client pentru POS-ul în discuție.  

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

- **Operator**: permite introducerea utilizatorului care creează documentul. Angajații au fost introduși anterior în tabela *Angajați* care se află în parcursul *Acasă > Angajați*. 

- **Proiect**: folosind [ajutorul câmpului](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), se poate conecta documentul la un proiect.  
Această asociere funcționează doar la nivelul antetului articolului.

### 2.1 Plăți

**Soluţii de plată** sunt afișate automat din *Anagrafica client > tab Plăți* și pot fi modificate/șterse de utilizator.

#### Buton specific

> **Şterge plăţi**: folosit pentru a șterge liniile de plată selectate.

### 2.2 Reduceri

Se propun doar reducerile prestabilite preluate din *Anagrafica client > tab Reduceri* și pot fi modificate/șterse de utilizator.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agenți

Indică codul agentului și comisionul său pentru fiecare linie de articol. Se propune codul și procentul definite în *Anagrafica client > tab Agenți*.

Dacă comisionul nu este asociat cu clientul în anagrafica sa, tot trebuie inserat agentul, dar cu comision NULL, pentru că dacă ar fi cu comision 0, ar însemna că agentul este asociat, dar nu percepe comision.

Aceeași secțiune va fi repropusă pentru fiecare linie de articol în tab-ul său *Agenți*.

#### Buton specific

> **Şterge agenţi**: permite ștergerea agenților selectați.

## **3. Articole**

În acest tab sunt inserate toate articolele cu datele lor corespunzătoare.

Pentru orice aspect neclar în acest document referitor la funcționarea comună a formularelor, consultați următorul link [Funcționalități, butoane și câmpuri comune](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Pentru a introduce un **Articol nou** în grilă, este suficient să vă poziționați pe linie pentru a completa diferitele date sau să utilizați butonul **Nou** prezent în bara de ribbon.


### 3.1 Date obligatorii

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linie** oferă posibilitatea de a selecta articole cu caracteristici diferite:

> - **Articol codificat**: sunt articolele codificate în anagrafica și pot fi contabilizate în contabilitate analitică și înregistrate în depozit; 
> - **Articol notă**: este o notă simplă, care nu influențează contabilitatea și depozitul.
> - **Articol cadou**: acest tip de linie indică faptul că articolul introdus pe acea linie va fi un articol gratuit, și astfel nu va avea un cost pentru client;

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Preţ cu TVA**: reprezintă prețul cu TVA și trebuie să fie introdus anterior în *Anagrafica articole > tab Costuri* și poate fi diferit pentru depozite;

- **TVA** și **Baza de impozitare** sunt calculate automat, preluând valorile din prețul cu TVA.

#### Butoane specifice

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

### 3.2 Reduceri/Listine

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.3 Detaliu articol

În interiorul acestui tab sunt prezentate/inserate informații suplimentare referitoare la articol.

- **Articol**: preia informațiile articolului selectat în grila articolelor.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Proiect**: este proiectul asociat documentului sau poate fi atribuit cu ajutorul ajutorului câmpului.

- **Marcă**: reprezintă marca articolului, preluată din anagrafica lui sau din lista de prețuri a articolului;

- **Facturare Vânzări**: se propune datele introduse în *Anagrafica articole > tab Generalitate*.

Dacă acesta nu este prezent, nu se propune nicio dată, dar în momentul contabilizării, valoarea introdusă în câmpul *Cost/Rentă de contropartă prestabilit* din *Anagrafica client > Date contabile > tab Administrativ* va fi luată în considerare.

- **Depozit și cauză (Magazzino e causale)**: sunt propuse depozitul și cauza de referință care vor apărea automat în momentul descărcării articolelor respective din depozit. Datele sunt preluate din tabela *Tipuri POS*.

- **Note**: oferă posibilitatea de a introduce note pentru fiecare articol.

### 3.4 Agenți

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.5 Analitică

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## **4. Răspunsuri**

### 4.1 Reduceri finale articole

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Cheltuieli/Reduceri/Acresceri finale

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Răspunsuri TVA

Se propune rezumatul TVA-ului documentului, pentru fiecare cod TVA.

### 4.4 Rezumat scadențe

Reprezintă rezumatul scadențelor documentului, pentru fiecare *tip* și *soluție* de plată. 
 
- **Număr**: valoare progresivă a rândului.  
- **Plată**: reprezintă codul alfanumeric al *Tipului de plată* preluat din *Antetul documentului > tab Plăți*.  
- **Valoare**: suma scadenței calculată. Poate fi forțată manual, caz în care se activează automat indicatorul *Modificare manuală* (se activează automat anumite controale și atenționări privind echilibrarea între valorile scadențelor și totalul facturii).
- **Dată scadenţă**: Data scadenței calculate. Poate fi forțată manual, caz în care se activează automat indicatorul *Modificare manuală*.
- **Cheltuieli de încasare**: Câmp în care sunt reportate cheltuielile de încasare calculate.
- **TVA**: de aplicat la cheltuielile de încasare (poate fi setată și manual).
- **Cauza plății (Causale pagamento)**: este posibil să introduceți direct în factură o cauză contabilă care să genereze o înregistrare automată de încasare / plată. NB fiți atenți la șablonul cauzei deoarece va utiliza conturile prezente și fără subcont, de aceea este prezent următorul câmp.
- **Cont/subcont client**: contul folosit pentru a încasează/efectua o plată (casă sau bancă, de exemplu) pentru scadența respectivă, suprascrăind contul prezent în cauza contabilă de plată (sau încasare).