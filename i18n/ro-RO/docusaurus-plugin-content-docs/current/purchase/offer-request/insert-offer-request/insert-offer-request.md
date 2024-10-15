---
title: Header
sidebar_position: 1
---

Câmpurile obligatorii pentru introducerea unei cereri de achiziție sunt următoarele:

- **Tip**: este un câmp obligatoriu. În funcție de [Tipul RDO](/docs/configurations/tables/purchase/purchase-offer-type) ales, vor fi activate anumite funcționalități, cum ar fi *Gestionarea bunurilor*. 
- **Dată/An (Data/Anno)**: implicit se propune data curentă, dar poate fi modificată manual.  
- **Număr**: propus automat în funcție de Tipul RDO ales.   
- **Furnizor**: conține anagrafica contactului căruia i se solicită oferta.                
- **Versiune**: conține versiunea ofertei; este posibil să creați o nouă versiune cu butonul din ribbon bar **Nouă versiune**.       

:::note Ține minte
Dacă documentul este *creat automat* dintr-o RDA, aceste date sunt preluate din *documentul de origine* din care a fost generat.
:::


Introducând **Furnizor**, vor fi propuse automat toate datele specifice tab-ului **Header**, conform datelor setate anterior în [anagrafica furnizorului](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) în câmpurile corespunzătoare adresei sale și în secțiunile:    
>- **Monedă**: secțiune care conține datele [Monedă](/docs/configurations/tables/general-settings/currencies), [Curs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valutei](/docs/guide/common/glossary/glossary-intro#currency-date).     
>- **Transport**: secțiune care conține datele [*Expedieri*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Transport](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalare (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Listă de prețuri (Listino)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) implicită și intervalul său de [valabilitate](/docs/guide/common/glossary/glossary-intro#validity-date).   
>- **Ţară**: secțiune care conține datele [*Țară*](/docs/guide/common/glossary/glossary-intro#country), [Limba (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zonă (Zona)](/docs/guide/common/glossary/glossary-intro#zone).    
>- **Plăţi**: secțiune care conține datele [*Plăți*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discount-uri (Sconti)*, *Destinaţie* și *Transportator*.    

Toate aceste câmpuri pot fi șterse sau modificate manual de utilizator.

Alte câmpuri opționale sunt: 

- **Note**: acest câmp este preluat din anagrafica furnizorului sau, eventual, din RDA, dar poate fi introdus și manual.             
- **Referinţa noastră/dumneavoastră**: în aceste câmpuri se indică de obicei o referință internă și o referință a furnizorului pentru document. Dacă este prezent, este preluat din anagrafica furnizorului, altfel poate fi introdus manual.   
- **Note inițiale/finale (Note iniziali/finali)**: se pot selecta notele care au fost introduse anterior în tabelul care se află pe parcursul *Configurare > Utilități > Gestionare note codificate*. Pentru acest lucru, utilizatorul trebuie să facă dublu clic pe câmpul *Note inițiale/finale* pentru a deschide Help note codificate și a selecta datele.
- **Proiect**: folosind ajutorul de câmp, se poate conecta documentul la un proiect. Această asociere funcționează doar la nivelul antetului articolului. Proiectul este introdus automat dacă RDO-ul a fost generat dintr-o RDA care îl conține. 
- **Dată confirmare deviz**: permite introducerea datei în care oferta a fost confirmată, dar nu este o dată obligatorie; în procedura de [Creare a comenzii de furnizare din Oferta de furnizor](/docs/purchase/offer-request/procedures/order-creation) este posibil să vizualizați și să convertiți și RDO-urile neconfirmate, activând indicatorul corespunzător în zona de filtrare.  
- **Dată prevăzută livrare**: dacă este setată înainte de introducerea articolelor în RDO, va fi afișată și pe liniile individuale de articole. Alternativ, este suficient să apăsați butonul *Înlocuiește data estimată a livrării în rânduri* din ribbon bar pentru a actualiza datele pe liniile de articole.
- **Dată închidere**: în momentul conversiei RDO-ului în comandă de furnizare, este automat valorizată cu data curentă dacă este activat indicatorul corespunzător pentru a închide ofertele convertite. 
- **Valididate oferta**: permite setarea unei date de încheiere a valabilității pentru cererea de ofertă. 

*Buton specific*
> **Înlocuiește data estimată a livrării în rânduri (Sostituisci data prev. consegna nelle righe)**: după ce ați specificat data estimată a livrării în antet, este posibil să o înlocuiți în masă în rândurile de articole deja introduse.

### Plăți

[Solutiile de plată](/docs/configurations/tables/general-settings/payment-terms) sunt preluate automat din *Anagrafica furnizor > tab Plăți* și pot fi modificate sau șterse de utilizator.   
Dacă la [Tipul de plată](/docs/configurations/tables/general-settings/payment-types) este asociat un discount financiar, suma discountului este considerată doar în scopuri contabile, adică în termenii documentului și nu în totalul DDT.

*Buton specific*
> **Şterge plăţi**: utilizat pentru a șterge liniile de plată selectate.

### Discounturi

Sunt propuse doar discounturile implicite preluate din *Anagrafica furnizor > tab Discounturi* și nu cele atribuite condițiilor de plată sau anumitor articole. Pot fi modificate sau șterse de utilizator.   

Discounturile propuse în antetul documentului sunt aduse în fiecare nouă linie de articol introdusă în document. Dacă, după ce ați introdus liniile de articole, este introdus un nou discount în antet, acesta nu este replicat în liniile de articole deja introduse.

*Buton specific*
> **Şterge discounturile predefinite**: utilizat pentru a șterge discounturile selectate.


### Date suplimentare (Extra Data)

Aici sunt propuse informațiile introduse în *Anagrafica subiectului > tab Date suplimentare*, doar dacă există date implicite.