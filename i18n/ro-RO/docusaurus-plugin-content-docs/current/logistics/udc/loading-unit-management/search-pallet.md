---
title: Căutare UdI și Vizualizare transferuri UdI
sidebar_position: 2
---

:::important Utilizare
Gestionarea *Unităților de Încărcare* în Fluentis permite operatorilor să gestioneze întregul ciclu de viață al UdI, de la crearea până la vânzare. 

Procedura de gestionare oferă un filtru detaliat pentru a vizualiza toate UdI create, permițând controlul stării de încărcare și descărcare a unităților. Fiecare UdI este identificată printr-o cheie unică formată din an, grup și număr, iar informațiile referitoare la dimensiuni și greutate pot fi modificate în funcție de cerințele specifice.

În plus, modulul permite gestionarea detaliului articolelor din fiecare UdI, facilitând asocierea cu ordinele clienților și înregistrarea mișcărilor de gestiune. Operațiuni precum încărcarea, descărcarea și transferul UdI între locații sunt gestionate cu flexibilitate, asigurând că datele sunt întotdeauna actualizate și precise. Datorită acestor funcționalități, gestionarea UdI în Fluentis contribuie la îmbunătățirea eficienței operaționale și a trasabilității stocurilor.
:::

### Căutare UdI

Form-ul se află pe calea **Logistică > Gestionare UdI**.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

:::note Notă
La deschiderea form-ului, opțiunile *Încărcare* și *Descărcare* din filtrul respectiv nu sunt bifate, deci vor fi vizualizate doar UdI care nu au fost încărcate.
Activând opțiunea *Încărcare* vor fi vizualizate doar UdI încărcate, iar dacă se activează și opțiunea *Descărcare* se vor vedea doar UdI care au fost și descărcate.
:::

În cazul în care o *Unitate de încărcare* a fost inserată într-o *listă de livrare sau de transfer*, în tabelul de rezultate sunt vizibile numărul și data listei.

De asemenea, este interesant de menționat că este posibil să se caute UdI după ordinul client la care au fost asociate.

:::note ATENȚIE
Dacă doriți să transferați articole din gestiune direct în unitatea de încărcare, utilizând un motiv de încărcare pentru a insera articolele în unitate și un contrapartidă de descărcare pentru a le elimina din gestiune, este important să rețineți că trebuie să mutați mai întâi articolele în locația indicată în motivul contrapartidei.
:::

#### Butoane specifice  

> - **Nou**: butonul permite [Crearea unei noi UdI](/docs/logistics/udc/loading-unit-management/insert-new-pallet);  
> - **Retur client**: permite crearea unei noi *Unități de încărcare*, folosind ca *Tip UdI* cel cu opțiunea *Pentru retur* activat, iar toate celelalte proprietăți sunt copiate din *Unitatea de încărcare* originală. Acest buton se activează doar pentru liniile care sunt încărcate și livrate;  
> - **Inserare ordine în UdI**: permite inserarea articolelor dintr-un ordin client într-o *Unitate de încărcare*. Această procedură creează o legătură între UdI și Ordinul client;  
> - **Încărcare UdI**: execută procedura de creare a înregistrării/miscării de încărcare a *Unității de încărcare*;          
> - **Descărcare UdI**: execută procedura de creare a înregistrării/miscării de descărcare a *Unității de încărcare*. Acest lucru este posibil doar dacă *Unitatea de încărcare* a fost deja încărcată și este prezentă într-o listă de preluare UdI;            
> - **Vizualizare înregistrare de încărcare**: deschide înregistrarea de gestiune a încărcării UdI;  
> - **Vizualizare înregistrare de descărcare**: deschide înregistrarea de gestiune a descărcării UdI;  
> - **Restaurare încărcare UDI**: dacă UdI este încărcată, execută rollback-ul înregistrării de gestiune a încărcării;  
> - **Restaurare descărcare UdI**: dacă UdI este încărcată și descărcată, execută rollback-ul înregistrării de gestiune a descărcării;  
> - **Adaugă/Elimină articole**: permite utilizatorului să adauge sau să elimine un articol din *Unitatea de încărcare* selectată. De asemenea, utilizatorul are posibilitatea să elimine un articol dintr-o altă *Unitate de încărcare* pentru a-l adăuga în cea selectată. Acest buton este activat pentru liniile încărcate, nelivrate, neasociate la *Dispoziția de livrare* sau *Liste de transfer* și neasociate la declarații de producție;    
> - **Mută UdI**: permite mutarea UdI dintr-o locație în alta;  
> - **Restaurare raport**: permite setarea opțiunii de imprimare **Fals**. Acest buton este activat doar pentru liniile neîncărcate și neasociate la declarații de producție.      

### Vizualizare transferuri UdI

Procedura a fost concepută pentru a permite utilizatorului să interogheze cu ușurință gestiunea UdI cu scopul de a menține controlul asupra stocurilor și de a obține în timp minim toate informațiile referitoare la UdI prezente în gestiune și care au fost transferate sau nu între gestiuni.