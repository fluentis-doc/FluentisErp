---
title: Inserare oferte de preț în sistem lohn
sidebar_position: 1
---

Pwermite inserarea ofertelor de preț în sistem lohn.

## Secțiunea superioară

În secțiunea superioară este necesar să introduceți **furnizorul**.  
Valorile câmpurilor **Data valabilității** (este propusă data curentă pentru începerea valabilității) și [Moneda](/docs/guide/common/glossary/glossary-intro#currency) (este propusă moneda societății, dar poate fi modificată) sunt preluate automat.  
Este preluat din registru și eventualul **Discount ofertă de preț** și se pot insera **Note**.

În secțiunea superioară este prezent și filtrul pentru a căuta **articole** în oferta de preț.

## Articole

**Clasă/Articol/Descriere**: reprezintă codul articolului de inclus în oferta de preț. Descrierea este recuperată automat prin intermediul codului. Pentru a insera un articol nou, este suficient să vă poziționați pe un rând liber sau să utilizați butonul *Articol nou* din ribbon bar.  
**Cod variantă/Descriere variantă**: se utilizează în cazul în care, pe lângă codul articolului, și varianta deosebește un articol de altul.  
**Cod fază**: permite să asociați articolului o eventuală **Fază externă** care va fi efectuată de terț. Astfel se poate defini un preț pentru fiecare fază a aceluiași articol. Sistemul va completa automat câmpurile **Fază** și **Subfază**.  
**Unitate de măsură**: poate fi cea de gestiune a articolului sau una dintre unitățile sale de măsură alternative.  
**Cantitate**: în mod implicit este 1 și reprezintă cantitatea de referință pentru preț; dacă este diferită de 1, atunci când va fi calculat prețul, acesta se împarte la cantitatea din ofertă.  
**Preț** este în raport cu moneda ofertei de preț.  
**TVA**: acest câmp este preluat automat. Dacă pentru client nu a fost setat, va fi necesar să completați câmpul cu codul TVA.  
**Preț cu TVA**: sistemul calculează acest preț pornind de la preț și de la cota TVA introdusă.  
**Înălțime/Lățime/Adâncime**: sunt date informative referitoare la ofertă. Sistemul nu utilizează aceste câmpuri pentru eventuale prelucrări.

Pentru fiecare articol din ofertă se pot insera anumite tipuri de discount. Se indică un **Tip de eşalon** în câmpul omonim, iar în câmpurile următoare sunt raportate datele referitoare la articolele inserate în ofertă. Aceste eșaloane sunt indicate în tabelul *Tipuri de discount*.  
În partea dreaptă a formularului se află un tabel în care sunt indicate toate discounturile posibile pentru acest articol. Acestea se completează doar selectând un articol prezent în ofertă.

### Discounturi

Aceste discounturi sunt fixe și sunt raportate în documente. 

**N**: populat de sistem, indică ordinea în care sunt considerate discounturile.

**Tip discount/Descriere**: selectați tipul de discount dintre cele existente. Există 3 tipologii standard: *discount comercial*, *discount pe cantitate* și *discount pe valoare*.

**Valoare**: setați procentul de discount care trebuie aplicat.

**Prioritate**: această prioritate este preluată din setările efectuate în tabelul [Tipuri discount](/docs/configurations/tables/general-settings/discount-types).

**Casc./B. imp.**: este populat pe baza valorii introduse în tabelul *Tipuri discount*.

### Discounturi pe cantitate 

Această tipologie de discount poate avea diverse procente în funcție de cantitate.

**Tip**: setați tipul de discount, care trebuie să fie *discount pe cantitate*. Această denumire va fi apoi raportată în raport.

**Cantitate**: setați cantitatea de la care discountul devine activ.

**Procent**: introduceți procentul de discount la atingerea cantității indicate.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Discounturi pe valoare

În această tipologie, discountul se aplică atunci când se atinge un anumit total pe linie.

**Tip**: setați tipul de discount, care trebuie să fie *discount pe valoare*.

**Valoare**: setați un prag de la care, dacă este depășit, discountul devine activ.

**Procent**: introduceți procentul de discount la atingerea valorii stabilite.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Preț per cantitate

În acest caz, la atingerea unei anumite cantități, prețul unitar se modifică.

**Cantitate**: setați un prag de la care, dacă este depășit, se aplică prețul unitar „personalizat”.

**Preț unitar**: introduceți prețul unitar pentru cantitatea comandată.

Aceste discounturi se vor cumula cu alte discounturi existente.

### Note

Din punct de vedere informativ, se pot insera note pentru un anumit tip de discount.

### Documente atașate 

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />