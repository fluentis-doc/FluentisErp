---
title: Antet (Testata)
sidebar_position: 2
---

### Antet (Testata)

După ce utilizatorul a selectat datele obligatorii în secțiunea superioară, acesta poate continua introducerea următoarelor date [manual](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) sau cu [ajutorul câmpului](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).

:::note Ține minte
Dacă documentul este *creat automat*, de exemplu din filtrul de căutare al [**Comenzilor clienților**](/docs/sales/sales-orders/search-sales-orders), din procedura de [**Creare automată a comenzilor**](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) sau din procedura de [**Creare comandă furnizor din ofertă furnizor**](/docs/purchase/offer-request/order-creation), aceste date sunt preluate din *documentul de origine* din care a fost generat.
:::

Introducând **Furnizorul**, toate datele specifice tab-ului **Antet** sunt propuse automat, conform datelor setate anterior în [registrul furnizorului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) în câmpurile corespunzătoare adresei sale și în secțiunile: 

- **Monedă**: secțiune care conține datele [Monedă](/docs/configurations/tables/general-settings/currencies), [Curs](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valutei](/docs/guide/glossary/glossary-intro#currency-date).   
- **Ţară**: secțiune care conține datele [*Țară*](/docs/guide/glossary/glossary-intro#country), [Limba](/docs/guide/glossary/glossary-intro#language), [Zonă](/docs/guide/glossary/glossary-intro#zone).   
- **Transport**: secțiune care conține datele [*Livrări*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Transport](/docs/guide/glossary/glossary-intro#carriage), [Ambalare](/docs/guide/glossary/glossary-intro#packing), [Listă de prețuri](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) prestabilită și intervalul său de [valabilitate](/docs/guide/glossary/glossary-intro#validity-date).
- **Plăţi**: secțiune care conține datele [*Plăți*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discounturi*, *Destinație* și *Transportator*.    

Toate aceste câmpuri pot fi șterse sau modificate manual de utilizator.

*Câmpuri opționale*: 

> **Dată cerere livrare** și **Dată livrare**: dacă sunt setate înainte de a introduce articolele în comandă, acestea vor fi reflectate și pe liniile individuale ale articolelor. Alternativ, este suficient să apăsați butonul *Înlocuiește data estimată de livrare în linii* din bara de ribbon pentru a actualiza datele pe liniile articolelor.   
> **Dată confirmare ordin**: pentru *Tipurile de comandă* care au indicatorul [Confirmare automată a comenzii](/docs/configurations/tables/purchase/purchase-orders-type), data curentă este introdusă automat în momentul creării comenzii. Pentru a putea efectua livrarea unei comenzi de furnizor, este necesar să se introducă o *Data de confirmare*.   
> **Dată început**: este data de începere pentru calculul termenelor de plată.   

Următoarele indicatori indică starea comenzii:
- **Listat**: acest indicator este activat automat în momentul lansării *Imprimării* definitive prin butonul din bara de ribbon. Alternativ, poate fi activat manual pentru a putea efectua livrarea comenzii într-un DDT sau într-o factură;  
- **Anulat**: când utilizatorul dorește să anuleze un document în loc să-l șteargă, comanda este forțat marcată ca livrată în toate liniile sale de articole;   
- **Arhivat**: când utilizatorul îl istorizează.

> **Note furnizor (Annotazioni fornitore)**: acest câmp este preluat din [registrul furnizorului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), dar poate fi introdus și manual.   
> **Referinţa noastră/dumneavoastră**: în aceste câmpuri se indică de obicei o referință internă și o referință a furnizorului pentru document. Dacă este prezent, este preluat din registrul furnizorului, altfel poate fi introdus manual.    
În cazul în care comanda este completată cu procedura *Livrare din proiect*, în câmpurile *Note furnizor* și *Referința noastră/a voastră* se propune informația prezentă în câmpurile omonime ale comenzii de achiziție. Această transferare este valabilă doar în cazul unei comenzi de furnizor create prin preluarea datelor dintr-un singur document de origine.   
> **Note inițiale ale comenzii (Note inițiali ordine)**: se pot selecta notele care au fost introduse anterior în tabelul care se află în calea *Configurare > Utilități > Gestionare note codificate*. Pentru aceasta, utilizatorul trebuie să facă dublu clic pe câmpul *Note inițiale* pentru a deschide Ajutorul notelor codificate și a selecta datele.   
> **Proiect (Progetto):** folosind ajutorul câmpului, se poate conecta documentul la un [proiect](/docs/project-management/projects/search-projects-intro). Această asociere funcționează doar la nivelul antetului articolului. Proiectul este introdus automat dacă comanda de furnizor provine dintr-un document care îl conține (de exemplu, din comenzi planificate de achiziție).  
> **Comandă producţie**: folosind ajutorul câmpului, se poate conecta documentul la o [comandă de producție](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders). Dacă comanda este creată din lansarea comenzilor planificate de achiziție, comanda este propusă automat.  

> **Ţară**, *Limba*, *Zonă* sunt preluate din registrul furnizorului, dacă sunt prezente, altfel pot fi introduse manual.   
> **Operator**: permite introducerea utilizatorului care creează documentul. Dacă în Parametrii comenzilor de furnizor indicatorul [Cod operator obligatoriu](/docs/configurations/parameters/purchase/purchase-orders-parameters) este activ, va fi obligatoriu să se introducă angajatul în acest câmp pentru a putea salva comanda. [Angajații](/docs/project-management/registers/employee/new-employee) trebuie să fie introduși anterior în tabelul *Angajați*.   

> **Stare executare**: când comanda este livrată printr-un DDT sau o factură, *Starea livrării* se schimbă automat de la *Neefectuat* la *Parțial livrat* sau *Livrat*. Utilizatorul poate forța livrarea unei comenzi care nu este complet livrată și când acest lucru se întâmplă, data livrării este salvată și în câmpul *În data*.  

> **Transport**, *Incoterm* și *Ambalaj* sunt preluate din registrul furnizorului, dacă sunt prezente, altfel pot fi introduse manual.   
> **Listă de preţuri**: dacă în registrul furnizorului există o listă de prețuri cu indicatorul *Prestabilit*, aceasta va fi propusă în acest câmp împreună cu datele sale de valabilitate.   
> **Listă de prețuri de actualizat (Listini di aggiornare)**: dacă acest indicator este activ, lista de prețuri de achiziție se actualizează automat în timpul salvării cu informațiile articolului. Acest indicator poate fi modificat și la nivelul liniei de articol.   
> **Puncte de Vânzare**: se află sub meniul opțiunii *Livrări* și este gestionat doar de verticalizarea referitoare la lanțurile de distribuție. În cazul unei comenzi de furnizor creată prin transferul de bunuri între punctele de vânzare ale unui singur lanț, în acest câmp se va vizualiza punctul de vânzare de origine a bunurilor.

*Buton specific*

> **Evaziunea proiectului**: apelează [procedura](/docs/purchase/purchase-orders/insert-purchase-orders/header-procedures) pentru a crea o comandă de furnizor dintr-o comandă de achiziție. Se activează prin introducerea furnizorului și a tipului de comandă de furnizor.  
> **Înlocuiește data estimată de livrare în linii (Sostituisci data prev. consegna nelle righe)**: după ce a fost specificată *Data cerută pentru livrare* și/sau *Data livrării* în antetul comenzii, este posibil să se înlocuiască în masă aceste date în liniile de articole deja introduse.

### Plăți (Pagamenti)

[Solutiile de plată](/docs/configurations/tables/general-settings/payment-terms) sunt preluate automat din *Registrul furnizorului > tab Plăți* și pot fi modificate/șterse de utilizator.

Dacă la [Tipul de plată](/docs/configurations/tables/general-settings/payment-types) este asociat un discount financiar, suma discountului este considerată doar în scopuri contabile, adică în termenele documentului și nu în totalul DDT.

Dacă documentul provine dintr-o comandă sau dintr-o ofertă de furnizor, tipul de plată este preluat din documentul de origine.

*Buton specific*

> **Şterge plăţi**: utilizat pentru a șterge liniile de plată selectate.


### Discounturi (Sconti)

Sunt propuse doar discounturile prestabilite preluate din *Registrul furnizorului > tab Discounturi*. Acestea pot fi modificate/șterse de utilizator.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Destinație (Destinazione)

Aici este propusă informația introdusă în *Registrul furnizorului > tab Livrări*, doar dacă există date prestabilite. Combo box-ul propune toți destinatarii, destinațiile și transportatorii introduși în registrul furnizorului.

Adresele de livrare (destinatar/destinatie și transportator) pot fi introduse și doar descriptiv, fără a fi introduse anterior între contacte. 

### Transportator (Vettore)

În acest câmp este posibil să se introducă *Transportatorul* care va efectua livrarea comenzii. Dacă acesta a fost introdus în *Registrul furnizorului > tab Livrări*, va fi posibil să-l selectați din meniul derulant al celei de-a doua coloane, altfel este suficient să faceți dublu clic pe a treia coloană (*Transportator*) pentru a selecta unul dintre contactele companiei. 

Opțional, se pot adăuga detalii despre *Numărul de înmatriculare* al transportatorului și *Data/Ora transportului*.

### Date suplimentare (Extra Data)

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />
