---
title: Nouă reintrare
sidebar_position: 1
---

Acest form permite crearea manuală a unei noi reintrări în sistem lohn sau modificarea reintrărilor existente.

Form-ul se deschide prin calea **Sistem lohn > Reintrări > Nouă reintrare** sau cu butonul **Nou** din form-ul [Caută reintrări](/docs/subcontractor/subcontractor-returns/insert-returns/search-returns).

## **1. Date obligatorii**

Aplicația solicită introducerea **Furnizorului** (terț) ordinului, utilizând help-ul de conturi, **Tipul**, **Numărul** și **Data reintrării** efectivă (care de obicei corespunde datei curente).

**Controlat**: acest flag este activat manual de utilizator;  
**Valorizat și Încărcat**: se activează automat în momentul în care se efectuează valorizarea ordinului și înregistrarea în gestiune a documentului.

> **Reintrări prevăzute**: butonul se activează după salvarea datelor obligatorii și deschide form-ul *Executare din ordin*, în care sunt afișate toate ordinele în sistem lohn care au linii parțial sau complet neexecutate și din care se pot genera reintrări;  
> **Înregistrare reintrări**:

## **2. Antet**

După ce au fost selectate datele obligatorii în secțiunea superioară, utilizatorul poate continua introducerea următoarelor date [manual](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) sau cu [help de câmp](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ori, în baza datelor introduse în registrul terțului, aplicația completează câmpurile *automat*.

Introducând **Furnizorul** sunt *propuse* automat toate datele specifice din tab-ul **Antet**, conform datelor setate anterior în [registrul furnizorului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), în câmpurile corespunzătoare adresei și în *secțiunile*:

- **Monedă**: [Monedă](/docs/guide/common/glossary/glossary-intro#currency), [Curs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valută](/docs/guide/common/glossary/glossary-intro#currency-date).  
- **Națiune**: [Națiune](/docs/guide/common/glossary/glossary-intro#country), [Limbă](/docs/guide/common/glossary/glossary-intro#language), [Zonă)](/docs/guide/common/glossary/glossary-intro#zone)  
- **Expediere**: [Expediere](/docs/guide/common/glossary/glossary-intro#shipment), [Incoterm](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaj](/docs/guide/common/glossary/glossary-intro#packing), [Oferta de prețuri](/docs/guide/common/glossary/glossary-intro#sales-price-list) și [Intervalul său de valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.1 Plăți

**Soluțiile de plată** sunt preluate automat din *Registru terț > tab Plăți* și pot fi modificate/șterse de utilizator.

#### Buton specific  
> **Șterge plăți**: utilizat pentru a șterge liniile de plată selectate.

### 2.2 Discounturi

Sunt propuse doar discounturile predefinite preluate din *Registru terț > tab Discounturi* și pot fi modificate/șterse de utilizator.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Proceduri antet:

### *Executare din ordin*

În această fereastră, care se deschide utilizând butonul *Reintrări prevăzute* din ribbon bar, se pot filtra ordinele în sistem lohn.

În tabelul inferior este afișată o linie pentru fiecare ordin în sistem lohn care nu este executată sau este parțial executată.  
Utilizatorul, cu dublu click pe linia ordinului, poate detalia liniile care încă trebuie să reintre de la terț, poate să le selecteze sau să introducă cantitatea pentru fiecare și să apese butonul *Achiziție* pentru a transfera cantitățile articolelor selectate în tabelul din tab *Articole* din reintrarea în sistem lohn.

#### Butoane specifice  
> **Caută ordine**: permite aplicarea filtrelor de căutare asupra întregii baze de date a ordinelor în sistem lohn introduse și încă neexecutate sau doar parțial efectuate;  
> **Achiziție**: apelează procedura care transferă în tabelul din tab *Articole reintrate* din *Reintrarea în sistem lohn* articolele selectate în fereastra de mai jos;  
> **Executare forțată ordine**: apelează procedura care permite să se considere forțat executată linia ordinului în sistem lohn pe care utilizatorul o transferă;  
> **Selectează tot**: permite selectarea tuturor liniilor prezente în secțiunea din dreapta ferestrei în care apar articolele de transferat;

### *Înregistrare reintrări*

Vezi detalii în documentul [Înregistrare reintrări](/docs/subcontractor/subcontractor-returns/procedure/returns-record).

## **3. Articole**

Conține un tabel în care utilizatorul poate introduce manual articolele reintrate.

### 3.1 Date

În acest tab sunt vizualizate informațiile referitoare la linia selectată în tabelul de articole:

**Ordin de prod.**: este ordinul de producție a cărei fază externă a generat linia de ordin în sistem lohn care a fost executată cu linia de reintrare selectată;

**Proiect**: în acest câmp este afișat proiectul asociat liniei cu reintrarea. De obicei, este preluat proiectul inserat în linia ordinului de sistem lohn din care a fost generată linia de reintrare;

**Greutăți**: sunt afișate *Greutatea netă* și *Greutatea brută* totale ale liniilor de articol. Sunt preluate greutățile din registrul articolului înmulțite cu cantitatea din linie.

### 3.2 Loturi/SN

Permite inserarea loturilore sau numerelor de serie care vor fi încărcate în gestiune cu cantitatea de articol reintrată, în cazul în care este vorba despre mai multe loturi diferite reintrate cu aceeași linie de reintrare. Dacă articolul este gestionat pe loturi sau pe numere de serie, se activează tabelul corespunzător din acest tab.

:::note Nota
Suma cantităților diferitelor loturi/numere de serie trebuie să corespundă exact cantității reintrate a liniei articolului.
:::

## **4. Materiale**

În acest tab sunt vizualizate materialele pe care terțul ar fi trebuit să le utilizeze pentru a produce ceea ce s-a introdus în tab-ul *Articole*. Propunerea materialelor este definită în Parametriisistem lohn, în câmpul **Date materiale propuse**.

Secțiunea *Articol* conține informațiile despre linia selectată în tab-ul *Articole*.

### 4.1 Materiale

Pentru fiecare articol afișat mai sus se pot introduce materialele și detaliile lor, sau aceste date vor fi propuse automat.

### Detaliu material

În acest tab se introduc Materialele care nu au fost utilizate de terț, deoarece sunt în exces sau pentru că au fost rebutate.

#### Câmpuri specifice

**Gestiune**: reprezintă codul gestiunii retururilor, preluat din *parametrii în sistem lohn*, afișat automat doar dacă se introduce cantitatea returnată pe linia de material, editabil de utilizator;

**Șablon**: reprezintă codul șablonului pentru încărcarea retururilor, preluat din *parametrii în sistem lohn*, afișat automat doar dacă se introduce cantitatea returnată pe linia de material, editabil de utilizator. Dacă materialele neutilizate au fost rebutate, atunci șablonul nu trebuie să aibă contrapartidă. Dacă materialele au fost returnate, atunci șablonul trebuie să aibă o contrapartidă de încărcare pentru a indica unde se plasează materialele returnate.

#### Loturi 

**Încarcă lot**  
În tabel, utilizatorul poate indica ce loturi de materiale au fost utilizate de terț. Coloanele afișate și regulile de utilizare a tabelului sunt identice cu cele din tabelul loturi din tab-ul *Loturi\SN* din *Articole*.

## **5. Rezumate**

Sunt prezentate informațiile principale ale întregului document.

### 5.1 Discounturi finale articole

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 5.2 Cheltuieli

Sunt propuse cheltuielile introduse în registrul contactului, în tab *Cheltuieli/discounturi*. În acest tabel, eventualele cheltuieli trebuie introduse cu semn pozitiv, iar eventualele discounturi cu semn negativ.

Aceste elemente se aplică întregului document și nu sunt distribuite în liniile de articole. Ele pot include costuri suplimentare, discounturi globale sau majorări aplicate întregului document. Dacă sunt setate în registrul articolului, sunt propuse automat la momentul creării documentului.

- **Tip/Descriere**: permite alegerea tipurilor de cheltuieli (predefinite în [Tipuri cheltuieli](/docs/configurations/tables/general-settings/expenses-types)), atribuind tipului procentul de cheltuială care trebuie aplicat.  
- **Valoare cheltuieli**: indică valoarea cheltuielii exprimată în divisa documentului.  
- **TVA**: reprezintă cota TVA de aplicat cheltuielilor introduse.  
- **Procent/Valoare**: indică dacă cheltuielile se calculează procentual sau cu o valoare monetară predefinită. Dacă se selectează *valoare*, valoarea cheltuielii se introduce în câmpul cu același nume.  
- **Procent**: reprezintă valoarea numerică a procentului de cheltuieli.

:::note Nota
Dacă *Tip cheltuieli* introdus are flag-ul [Repartizat](/docs/configurations/tables/general-settings/expenses-types) activ, în timpul încărcării reintrării în gestiune, cheltuiala va fi repartizată pe toate articolele în funcție de valorile totale ale fiecărei linii de articol. Rezultatul repartizării cheltuielii este vizibil în [înregistrarea de gestiune](/docs/logistics/warehouse/stock-records/record).  
1. Dacă articolele au un preț: cheltuielile totale vor fi repartizate proporțional pe valorile nete ale fiecărui articol; rezultatul va fi adăugat la prețul inițial al articolului în câmpul *Valoare totală* din înregistrare. Dacă pentru unele linii valoarea este 0, aceasta va fi considerată ca 1 pentru a permite repartizarea cheltuielilor pe toate articolele.  
2. Dacă toate articolele au preț 0: cheltuielile vor fi distribuite în mod egal între toate liniile articol și, plecând de la această distribuție, se va calcula *valoarea mișcării/valoarea de gestională* în înregistrare, ținând cont de cantitățile fiecărui articol.  
:::

### 5.3 Totaluri document

**Valoare brută articole**: reprezintă suma valorilor tuturor articolelor;  
**Acont**: reprezintă valoarea eventualului avans primit pentru document;  
**Valoare promo**: reprezintă valoarea articolelor de tip promo introduse în tab *Articole*;  
**Total discounturi aplicate**: reprezintă valoarea totală a discounturilor aplicate pe articole, fără discounturile finale;  
**Valoare netă articole**: *Valoare brută articole* – *Total discounturi aplicate*;  
**Total discounturi finale**: reprezintă valoarea discounturilor finale exprimate procentual din valoarea brută a articolelor;  
**Valoare netă discounturi finale**: *Valoare netă articole* - *Total discounturi finale*;  
**Cheltuieli de încasare**: reprezintă suma cheltuielilor de încasare introduse în tabelul *Cheltuieli*;  
**Taxă timbru**: reprezintă suma cheltuielilor de timbru introduse în tabelul *Cheltuieli*;  
**Bază de impozitare**: *Valoare netă articole* – *Discounturi finale* + *Total cheltuieli nedocumentate* + *Total cheltuieli documentate*;  
**TVA**: reprezintă suma valorilor conținute în rapoartele de TVA;  
**Total**: *Bază de impozitare* + *TVA*.