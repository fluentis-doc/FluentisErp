---
title: Nouă Cerere de ofertă
sidebar_position: 3
---

Form-ul se află pe calea **Achiziții > Cerere de ofertă > Nouă cerere de ofertă** sau din filtrul de *Căutare cereri de ofertă*, cu butonul *Nou*.

## *Cum să creezi o cerere de ofertă*

<details>
<summary>Clic aici pentru a vedea pașii esențiali</summary>

1. **Introdu date obligatorii**: *Tip cerere ofertă* și *Furnizor*. *An*, *Număr* și *Dată* vor fi propuse automat.

2. **Introdu sau modifică date facultative** în antet: cum ar fi date de livrare, eventual *Discounturi*, *Destinație* etc.

3. **Introdu articole**: cu dublu click în câmpul *Cod articol* se deschide Help articole, care permite căutarea și selectarea unui articol existent. Toate celelalte date ale rândului, precum *Unitate de măsură*, *Cantitate*, *Preț*, vor fi propuse automat, dar pot fi modificate.  Alternativ, puteți să selectați ca *Tip linie* un *Articol necodificat* și să introduceți manual datele următoare.

4. **Introdu eventuale discounturi sau alte informații suplimentare** în tab-urile *Discounturi* și *Date articol*

5. **Verifică secțiune Rezumat** și introdu eventuale discounturi finale.

6. Odată ce oferta a fost verificată și confirmată, introdu valoarea *Dată confirmare* în antet pentru ca documentul să fie disponibil pentru conversie în ordin.

</details>

## **1. Secțiune superioară {#upper-section}**

Câmpurile obligatorii pentru introducerea unei cereri de achiziție sunt următoarele:

- **Tip**: este un câmp obligatoriu. În funcție de [Tipul CdO](/docs/configurations/tables/purchase/purchase-offer-type) ales, vor fi activate anumite funcționalități, de exemplu *Gestionare mijloace fixe*.  
- **Dată/An**: implicit este propusă data curentă, dar poate fi modificată manual.  
- **Număr**: propus automat pe baza *Tipului CdO* selectat.  
- **Furnizor**: conține registrul contactului căruia i se solicită oferta.  
- **Versiune**: conține versiunea ofertei. Se poate creea o nouă versiune cu butonul **Nouă versiune**.

:::note Note
Dacă documentul este *creat automat* dintr-o CDA, aceste date sunt preluate din *documentul sursă* din care a fost generat.
:::

## **2. Antet {#header}**

### 2.1 Date furnizor  

Introducând **Furnizorul** sunt propuse automat toate datele specifice din tabul **Antet**, conform datelor setate anterior în [Registrul furnizorului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) în câmpurile corespunzătoare adresei și în secțiunile:

> - **Valută**: secțiune care conține datele despre [Valută](/docs/configurations/tables/general-settings/currencies), [Schimb valutar](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Dată valută](/docs/guide/common/glossary/glossary-intro#currency-date).  
> - **Expediţie**: secțiune care conține datele despre [*Expediții*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Transport (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaj](/docs/guide/common/glossary/glossary-intro#packing), [Oferta de prețuri](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) prestabilită și [interval de valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date).  
> - **Țară**: secțiune care conține datele despre [*Țară*](/docs/guide/common/glossary/glossary-intro#country), [Limbă](/docs/guide/common/glossary/glossary-intro#language), [Zonă](/docs/guide/common/glossary/glossary-intro#zone).  
> - **Plăți**: secțiune care conține datele despre [*Plăți*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discount*, *Destinație* și *Transportator*.

Toate aceste câmpuri pot fi șterse sau modificate manual de către utilizator.

### 2.2 Date opționale antet

- **Note**: acest câmp este preluat din registrul furnizorului sau, eventual, din CdA, dar poate fi introdus și manual.             
- **Referința noastră/voastră**: în aceste câmpuri se indică de obicei o referință internă și o referință a furnizorului pentru document. Dacă este prezent, este preluat din registrul furnizorului, altfel poate fi introdus manual.   
- **Note inițiale/finale**: se pot selecta notele care au fost introduse anterior în tabelul de pe calea *Configurare > Utilitare > Gestionare note codificate*. Pentru acest lucru, utilizatorul trebuie să facă dublu clic pe câmpul *Note inițiale/finale* pentru a deschide *Help note codificate* și a selecta datele.
- **Proiect**: cu ajutorul help-ului de câmp, se poate conecta documentul la un proiect. Această asociere funcționează doar la nivelul antetului articolului. Proiectul este introdus automat dacă CdO a fost generată dintr-o CdA care îl conține. 
- **Data confirmare ofertă**: permite introducerea datei la care a fost confirmată oferta, dar nu este o dată obligatorie; în procedura de [Creare ordin furnizor din ofertă furnizor](/docs/purchase/offer-request/procedures/order-creation) puteți să vizualizați și să convertiți și CdO-urile neconfirmate, activând parametrul corespunzător în zona de filtrare.  
- **Dată prevăzută livrare**: dacă este setată înainte de introducerea articolelor în CdO, va fi preluată și pe liniile articolelor. Alternativ, este suficient să apăsați pe butonul *Înlocuiește data estimată a livrării pe linii* din ribbon bar pentru a actualiza datele în liniile articolului.
- **Dată închidere**: în momentul conversiei CdO în ordin furnizor, este automat completată cu data curentă dacă parametrul corespunzător pentru închiderea ofertelor convertite a fost activat. 
- **Valabilitate ofertă**: permite setarea unei date de sfârșit a valabilității pentru solicitarea ofertei. 

#### Butoane specifice

> **Substituie data prevăzută pentru livrare din linii**: după ce a fost specificată data estimată a livrării în antet, este posibil să o înlocuiți în toate liniile articolului deja introduse.

### 2.3 Plăți 

[Soluțiile de plată ](/docs/configurations/tables/general-settings/payment-terms) sunt preluate automat din *Registrul furnizorului > tab Plăți* și pot fi modificate/eliminate de utilizator.   
Dacă [Tipul de plată](/docs/configurations/tables/general-settings/payment-types) este asociat cu o discount financiar, suma reducerii este considerată doar în scopuri contabile, adică în termenele documentului și nu în totalul său.

#### Butoane specifice

> **Șterge plăți**: utilizat pentru a șterge liniile de plată selectate.

### 2.4 Reduceri  

Sunt propuse doar reducerile predefinite preluate din *Registrul furnizorului > tab Reduceri* și nu cele atribuite condițiilor de plată sau anumitor articole. Pot fi modificate/eliminate de utilizator.   

Reducerilee propuse în antetul documentului sunt reportate pe fiecare nouă linie de articol introdus în document. Dacă după introducerea liniilor articolului se introduce o nouă discount în antet, aceasta nu este replicată pe liniile de articol deja introduse.

#### Butoane specifice

> **Șterge discounturile predefinite**: utilizat pentru a șterge reducerile selectate.


### 2.5 Date suplimentare  

Aici este propusă informația introdusă în *Registrul subiectului > tab Date suplimentare*, doar dacă există date implicite.

## **3. Articole** {#items}

Pentru a introduce un *Articol nou* în tabel, este suficient să se poziționeze pe linia respectivă pentru a completa diversele date sau să utilizeze butonul **Articol nou** prezent în ribbon bar.

### 3.1 Date obligatorii

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linie** oferă posibilitatea de a selecta, din combo-box, articole cu caracteristici diferite:
> - *Articol codificat*: sunt articolele codificate în registru și pot fi contabilizate în contabilitate analitică și înregistrate în gestiune.  
> - *Articol necodificat*: sunt articole descriptive care pot fi contabilizate în contabilitate analitică, dar nu pot fi mișcate în gestiune.  
> - *Articol cheltuieli*: sunt articole codificate sau necodificate și sunt rezumate individual în rezumatele documentelor; dacă articolul cheltuiali este codificat și de interes fiscal, va fi mișcat în gestiune, dacă este necodificat sau nu de interes fiscal, nu va fi mișcat în gestiune.  
> - *Articol note*: sunt note descriptive preluate la listarea; nu influențează contabilitatea și gestiunea.
> - *Articol promo*: este gestionat ca un articol codificat sau necodificat în scopuri fiscale și de gestiune, dar fiind un cadou, este contabilizat separat în rezumatele documentului și pe baza parametrului *Colectare TVA* se calculează valoarea TVA-ului cadoului în sarcina subiectului sau nu.

:::note Nota
Dacă se începe direct cu introducerea articolului, clasa sa, codul și tipul liniei sunt introduse automat.
:::

- **Clasă/Cod/Descriere articol**: pot fi introduse manual sau cu ajutorul *Help-ului de câmp* care va propune toate datele aferente introduse în registrul articolului. După introducerea articolului, descrierea sa va fi preluată automat din registrul său. Dacă articolul are Variante, va fi posibil să selectați varianta dorită din tab *Dati articol*.

- **Unitate de măsură**: este propusă unitatea de măsură principală a articolului, dar în cazul în care în registrul articolului sunt codificate unități de măsură alternative, utilizatorul are posibilitatea de a alege alta.

- **Cantitate**: reprezintă cantitatea U.M. principale și implicit are valoarea 1; poate fi modificată manual sau poate fi preluată din documentul luat în considerare pentru execuție.

- **Preț**: prețul este propus din lista introdusă în registrul contactului; lista de referință pentru articolul respectiv este vizibilă în tab-ul *Date articol*; același document ar putea conține articole cu prețuri preluate din liste diferite, dacă în registrul subiectului sunt asociate mai multe liste în cascadă. Cu dublu clic pe câmpul *Ofertă de preț*, utilizatorul are posibilitatea de a selecta o ofertă diferită de cea implicită, din care va fi preluat prețul articolului introdus.   

- **TVA**: este prioritară informația introdusă în câmpul TVA din registrul contactului. Dacă aceasta nu este prezentă, se propune valoarea din registrul articolului, dar utilizatorul are posibilitatea de a introduce o altă informație.

- **Valoare unitară**: este calculată automat, fără reduceri.

### 3.2 Date facultative

- **Facturare achiziţii**: este propusă informația introdusă în tab-ul *Generalități* din registrul articolelor.   

- **Dată închidere**: indică data de închidere a ofertei; este completată automat dacă, în momentul [creării comenzii furnizor din ofertă furnizor](/docs/purchase/offer-request/procedures/order-creation), este selectat parametrul de închidere a ofertelor. 

- **Data de livrare estimată**: indică data estimată pentru livrarea mărfii. Este propusă automat dacă *Data estimată livrare* a fost valorificată în tab-ul antet.

- **Perioadă prevăzută livrare**: câmp descriptiv liber în care este posibil să se indice perioada de timp estimată pentru livrarea mărfii.

### 3.3 Discounturi {#discount}

- **Tip eşalon**: reprezintă intervalul de discount de utilizat, care este preluat din registrul furnizorului sau din listă.  

- **Preţ manual**: se activează automat când prețul articolului a fost introdus sau modificat manual.   

În tabel sunt propuse toate reducerile asociate articolului, fiecare cu propria bază de calcul și de alocare. Reducerile pot fi preluate: din registrul furnizorului, din soluția de plată atribuită documentului, din listă, din [definirea politicilor de reduceri](/docs/purchase/price-control/definition). Toate datele propuse sunt modificabile.

#### Butoane specifice

> **Șterge discounturi**: permite ștergerea reducerii selectate din tabelul corespunzătoar.

### 3.4 Date articol {#items-data}

În cadrul acestui tab sunt prezentate/inserate informații suplimentare legate de articol.

>- **Articol**: vizualizează articolul selectat în tabelul superior.   
>- **Variantă**: permite selectarea variantei articolului dintre cele codificate anterior în tab-ul [Variante](/docs/erp-home/registers/items/create-new-item) al registrului articolului. Dacă în ofertă au fost introduse prețuri și/sau reduceri diferite pentru fiecare variantă, acestea vor fi actualizate când se selectează o variantă diferită a articolului.     
>- **Notă**: sunt notele referitoare la linia articolului, pot fi introduse și cu help notecodificate. Vor fi reportate în toate documentele generate din acesta.
>- **Gestiune și șablon**: sunt propuse gestiunea și șablonul de referință care vor fi propuse automat în încărcării articolelor respective în gestiune.    
>- **Proiect**: reprezintă proiectul care trebuie asociat documentului. Dacă în antetul documentului a fost introdus un proiect, acesta va fi preluat în toate liniile articolelor. Alternativ, poate fi selecționat cu help proiecte.
>- **Ofertă de prețuri**: este propusă oferta din care a fost preluat prețul articolului, cu data sa de început/sfârșit a valabilității.  
>- **Unitate de măsură/Cantitate alternativă**: permite setarea unei unități de măsură alternative și a cantității aferente pentru articolul selectat în tabel.     
>- **Preț unitate de măsură alternativă**: dacă este activ, indică faptul că prețul introdus pe linia articolului se referă la unitatea de măsură alternativă și nu la cea principală.    
>- **Marcă**: reprezintă marca articolului, preluată din registrul său sau din oferta articolului.   
>- **Cererea de achiziție**: dacă oferta a fost creată dintr-o CdA, va fi reportată [Cererea de achiziție](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request) de referință.   

#### 3.4 Date suplimentare {#extra-data}

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

#### 3.5 Documente anexate {#attached-documents}

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## **4. Rezumate** {#summaries}

În secțiunile acestui tab sunt prezentate informațiile principale ale întregului document.

### 4.1 Discounturi finale articole

Reducerile finale aplicate la nivelul fiecărui articol sunt distribuite pe fiecare linie de articol din document. Acest lucru înseamnă că suma reducerii este împărțită proporțional între toate articolele prezente în document, iar reducerea corespunzătoare va fi vizibilă în tab Articole pentru fiecare linie în parte.

- **Tip/Descriere discount**: permite alegerea tipurilor de discount (predefinite în [Tipuri de discounturi](/docs/configurations/tables/general-settings/discount-types)), atribuind tipului prioritatea de aplicare a discountului și dacă discountul este calculat pe baza impozabilă sau în cascadă în raport cu reducerile aplicate anterior.  

- **Prioritate**: reprezintă prioritatea de aplicare a discountului; ordonarea care trebuie aplicată se face în mod crescător.  

- **Cascadă/Bază de impozitare**: definește calculul reducerii care utilizează ca bază de impozitare (preț * cantitate) - (reduceri deja calculate) sau (preț * cantitate).  

- **Valoare**: valoare numerică a reducerii finale de aplicat.  

### 4.2 Total document

- **Valoare brută a articolelor**: reprezintă suma valorilor tuturor articolelor.

- **Acont**: reprezintă valoarea avansului eventual primit pentru document.

- **Valoare articole promo**: reprezintă suma articolelor de tip cadou introduse în tab-ul *Articole*.

- **Total discounturi aplicate**: reprezintă valoarea totală a reducerilor aplicate pe articole, excluzând reducerile finale.

- **Valoare netă articole**: *Valoare brută articolelor* – *Total discounturi aplicate*.

- **Discounturi finale articole**: reprezintă valoarea reducerilor finale exprimate în procent din valoarea brută a articolelor.

- **Valoare netă discounturi finale**: *Valoare netă articole* - *Total discounturi finale*.

- **Total articole cheltuieli**: reprezintă valoarea cheltuielilor introduse ca articole de *Tip cheltuieli*.

- **Cheltuieli de încasare**: reprezintă suma cheltuielilor de încasare introduse în tabelul *Cheltuieli*.

- **Cheltuieli timbru**: reprezintă suma cheltuielilor de timbru introduse în tabelul *Cheltuieli*.

- **Total cheltuieli/reduceri/majorări**: reprezintă valoarea totală a cheltuielilor introduse în tabelul *Cheltuieli*.

- **Baza de impozitare**: *Valoare netă articole* – *Discounturi finale* + *Total articole cheltuieli* + *Total cheltuieli/reduceri/majorări*.

- **TVA**: reprezintă suma valorilor conținute în rezumatele TVA.

- **Total**: *Baza de impozitare* + *TVA*.