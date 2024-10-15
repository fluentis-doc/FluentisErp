---
title: Articole (Articoli)
sidebar_position: 2
---


Pentru a insera un *Articol nou* (Nuovo articolo) în grilă, este suficient să te poziționezi pe rând pentru a completa diferitele date sau să folosești butonul **Articol Nou** disponibil în bara de ribbon.

### Date obligatorii

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linie** oferă posibilitatea de a selecta, din combo-box, articole cu caracteristici diferite:
> - *Articol codificat*: sunt articolele codificate în registru și pot fi contabilizate în contabilitate analitică și înregistrate în depozit. <br />
> - *Articol ne-codificat (Articolo non-codificato)*: sunt articole descriptive care pot fi contabilizate în contabilitate analitică, dar nu pot fi mișcate în depozit. <br />
> - *Articol cheltueli*: sunt articole codificate sau ne-codificate și sunt rezumate în mod distinct în sumarizarea documentelor; dacă articolul cheltuială este codificat și de interes fiscal, va fi mișcat în depozit, dacă este ne-codificat sau nu de interes fiscal, nu va fi mișcat în depozit. <br />
> - *Articol note*: sunt note descriptive menționate în document; nu afectează contabilitatea și depozitul.
> - *Articol cadou*: este gestionat ca un articol codificat sau ne-codificat în scopuri fiscale și de depozit, dar fiind un cadou, este contabilizat separat în sumarizarea documentului, iar pe baza indicatorului de *Atribuire TVA* se va calcula suma TVA-ului cadoului pe seama subiectului sau nu.

:::note Nota
Dacă începi direct cu inserarea articolului, clasa, codul și tipul rândului (*Articol codificat*) sunt introduse automat.
:::

- **Clasă/Cod/Descriere articol (Classe/Codice/Descrizione articolo)**: se pot introduce manual sau cu ajutorul ajutorului de câmp care va propune toate datele relevante introduse în Registrul articolului. După inserarea articolului, Descrierea acestuia va fi preluată automat din registru. Dacă articolul are Variante, va fi posibil să selectezi varianta dorită din tab-ul Date articol.

- **Unităţi de Măsură**: se propune unitatea de măsură principală a articolului, dar în cazul în care în registrul articolului sunt codificate unități de măsură alternative, utilizatorul are posibilitatea de a alege alta.

- **Cantitate**: reprezintă cantitatea U.M. principale și în mod implicit are valoarea 1; poate fi modificată manual sau poate fi preluată din documentul considerat pentru execuție.

- **Preţ**: prețul este propus din lista introdusă în registrul contactului; lista de referință pentru articolul în sine este vizibilă în tab-ul *Date articol*; același document ar putea conține articole cu prețuri preluate din liste diferite, dacă în registrul subiectului sunt asociate mai multe liste în cascadă. Printr-un dublu click în câmpul Listine, utilizatorul are posibilitatea de a selecta o listă diferită de cea implicită, din care va fi preluat prețul articolului introdus.   

- **TVA**: datele introduse în câmpul TVA al Registrului contactului sunt prioritare. Dacă aceasta nu este disponibilă, se propune valoarea din Registrul articolului, dar utilizatorul poate introduce o altă valoare. 

- **Valoare unitară**: este calculat automat fără discounturi.

### Date neobligatorii

- **Facturare achiziţii**: se propune valoarea introdusă în tab-ul *Generalități* al registrului articolelor.   

- **Dată închidere**: indică data închiderii ofertei; este completată automat dacă, în timpul [creării comenzii furnizorului din oferta furnizorului](/docs/purchase/offer-request/procedures/order-creation), este selectat indicatorul de închidere a ofertelor. 

- **Data de livrare estimată**: indică data prevăzută pentru livrarea mărfii. Se propune automat dacă *Data prevăzută livrare* a fost completată în tab-ul antet.

- **Perioadă prevăzută livrare**: câmp descriptiv liber în care se poate indica perioada de timp estimată pentru livrarea mărfii.

### Discounturi

- **Tip eşalon**: indică scăderea care va fi utilizată, care este preluată din registrul furnizorului sau din listă.  

- **Preţ manual**: se activează automat atunci când prețul articolului a fost introdus sau modificat manual.   

În grilă sunt propuse toate discounturile asociate articolului, fiecare cu propria bază de calcul și de atribuire. Discounturile pot fi preluate: din registrul furnizorului, din soluția de plată atribuită documentului, din listă, din [definirea politicilor de discount]( /docs/purchase/price-control/definition). Toate datele propuse sunt modificabile.

*Buton specific*
> **Şterge discounturi**: permite ștergerea discountului selectat din grila corespunzătoare. 

### Date articol

În cadrul acestui tab sunt indicate/inserate informații suplimentare referitoare la articol.

>- **ARTICOL**: vizualizează articolul selectat în grila superioară.   
>- **Variante**: în acest câmp este posibil să selectezi o variantă a articolului dintre cele codificate anterior în tab-ul [Variante](/docs/erp-home/registers/items/create-new-items/item-registry/variants) al registrului articolului. Dacă în listă au fost introduse prețuri și/sau discounturi diferite pentru fiecare variantă, acestea vor fi actualizate atunci când se selectează o variantă diferită a articolului.     
>- **Notă**: sunt notele referitoare la rândul articolului, pot fi introduse și prin ajutorul notelor codificate. Vor fi menționate în toate documentele generate din aceasta.
>- **Depozit și cauză (Magazzino e causale)**: se propun depozitul și cauza de referință care vor apărea automat în momentul în care articolele respective sunt încărcate în depozit.    

>- **Proiect**: reprezintă proiectul ce trebuie asociat documentului. Dacă în antetul documentului a fost introdus un proiect, acesta va fi menționat pe toate rândurile articolului; alternativ, poate fi selectat prin ajutorul special al proiectelor.
>- **Ofertă**: se propune lista din care a fost preluat prețul articolului, cu data de început/final de valabilitate.

>- **Unitate de măsură/Cantitate alternativă (Unità di misura/Quantità alternativa)**: permite setarea unei unități de măsură alternative și a cantității corespunzătoare pentru articolul selectat în grilă.     
>- **Preț unitate de măsură alternativă (Prezzo unità di misura alternativa)**: dacă este activ, indică faptul că prețul introdus pe rândul articolului se referă la unitatea de măsură alternativă și nu la cea principală.    

>- **Marcă**: reprezintă marca articolului, preluată din registrul său sau din lista articolului.   
>- **Cerere de cumpărare**: dacă oferta a fost creată din RDA, va fi menționată [Cererea de achiziție](/docs/purchase/purchase-requests/insert-purchase-request) relevantă.   


## Date suplimentare

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documente atașate

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />