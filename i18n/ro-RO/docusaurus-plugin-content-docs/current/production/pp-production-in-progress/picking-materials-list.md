---
title: Lista ieşiri materiale
sidebar_position: 4
---

:::important Utilizare
**Lista ieşiri materiale** este un instrument fundamental pentru gestionarea eficientă a materialelor destinate ordinelor de producție. Permite crearea și gestionarea listelor detaliate de materiale care urmează să fie prelevate, conectând direct operațiunea la cerințele specifice ale producției. Această funcție este foarte utilizată pentru a crea un dispoziție de livrare pentru a gestiona eficient transferul de materiale (de exemplu în WIP), simplificând procesul logistic și asigurând o trasabilitate precisă.
:::

Form-ul permite căutarea ordinelor de producție aflate în stadiul lansat și executiv, pentru a efectua două operațiuni diferite:  
- prima, prin intermediul butonului **Caută materiale**, permite efectuarea descărcării tuturor materialelor conținute în ordinul de producție care, în **Parametri MRP** ai articolului, au ca **Tip de ieşire** valoarea **Cu listă**. Aceste materiale sunt consumate în momentul în care se apasă butonul **Creează mișcări**, care în acest caz, creează mișcarea  de descărcare din gestiune.

- a doua operațiune permite mutarea materialelor din gestiunea în care sunt stocate, în gestiunea WIP, de exemplu. Acest lucru se realizează utilizând butonul **Caută materiale dispoziție de livrare**, care permite crearea unor dispoziții de livrare. Așadar nu a unor înregistrări propriu-zise, ci documente de mutare a materialelor ce pot fi vizualizate în fereastra **Dispoziție de livrare** din aria logistică.              
În acest caz, butonul **Creează mișcări** generează dispoziția de livrare, în care, pentru materialele ce au *Tip de ieșire cu listă* vor fi setate șablonul și gestiunea deja prezente în rândul materialelor corespunzătoare din ordinul de producție pentru a putea fi descărcate definitiv; în schimb, pentru materialele cu *Tip de ieșire manual* vor fi stabilite șablonul și gestiunea setate în *Tip dispoziție de livrare* utilizat. Materialele mutate în gestiunea WIP vor fi apoi descărcate în declarațiile de producție.            
Înregistrarea va fi făcută ulterior prin procedura dedicată descărcării dispoziției de livrare.

## Filtru

În acest tab este posibilă căutarea dispozițiilor de livrare dorite pe baza filtrelor introduse.

#### Butoane specifice

> **Caută materiale**: permite crearea directă a înregistrărilor de gestiune.  
Dacă opțiunea **Mov.** este activă, înseamnă că pentru acel material s-a ales tipul de ieșire cu listă în *Parametri MRP* ai articolului: dacă nu este activă înseamnă că pentru acel material s-a optat pentru tipul de ieșire manual. (Pentru detalii suplimentare despre semnificația acestui tip de ieșire, consultați articolul despre [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului).      
> **Caută materiale dispoziție de livrare**: permite crearea dispozițiilor de livrare, deci nu a unor înregistrări propriu-zise, ci documente de mutare a materialelor care pot fi vizualizate în fereastra [Dispoziții de livrare](/docs/logistics/picking/search-picking) din aria logistică. În acest caz, înregistrarea se va face ulterior, după un al doilea control.             
> **Creează mișcări**: permite, după ce au fost selectate materialele pe baza tipului de căutare efectuat, să se creeze mișcările de gestiune (descărcarea) sau dispoziția de livrare.      
În cazul în care se creează dispoziția de livrare, pentru materialele care au *Tip de ieșire cu listă* vor fi setate șablonul și gestiunea deja prezente în rândul materialelor ordinului de producție. Iar pentru materialele cu *Tip de ieșire manual* vor fi setate șablonul și gestiunea din *Tipul de dispoziție de livrare* utilizat.

## Restaurare înregistrare

În acest tab este posibilă reinstaurarea mișcărilor create anterior.            
Selectând un rând, se pot vizualiza înregistrările și dispozițiile de livrare create, în tab-urile **Înregistrări ieşiri generate** și **Dispoziții de livrare generate din ieșiri**.  
Prin intermediul butonului **Șterge lista de ieşiri** este posibilă reinstaurarea simultană atât a mișcărilor, cât și a dispozițiilor de livrare create.  
În timp ce, cu butoanele **Șterge înregistrări** și **Șterge dispoziții de livrare**, utilizatorul poate alege să reinstaureze doar înregistrarea sau doar dispoziția de livrare selectată.

#### Butoane specifice

> **Șterge lista de ieşiri**: permite reinstaurarea simultană atât a mișcărilor, cât și a dispozițiilor de livrare create.         
> **Șterge înregistrări**: permite reinstaurarea înregistrării de gestiune selectate în tab-ul **Înregistrări ieşiri generate**.        
> **Șterge dispoziții de livrare**: permite reinstaurarea dispoziției de livrare selectat în tab-ul **Dispoziții de livrare generate din ieșiri**. 