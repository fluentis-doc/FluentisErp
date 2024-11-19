---
title: Căutare ordine planificate
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Butoane specifice*:

> [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): permite deschiderea form-ului parametriilorMRP ai articolului;             
> [Lista componente](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite deschiderea form-ului listei componentelor articolului;  
> [Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route): permite vizualizarea ciclului de lucru și a fazelor de producție ale articolului.

*Câmpuri specifice*

**Data început**: pentru ordinele planificate de achiziție sau în sistem lohn, reprezintă data la care ordinul de achiziție trebuie trimis furnizorului, care va fi ulterior generat la lansarea ordinului. Pentru ordinele planificate de producție, această dată reprezintă data estimată pentru începutul primei faze de procesare a ciclului articolului;  
**Data FOB (free on Board)**: reprezintă data care este calculată însumând *Data de început prevăzută* cu *Timpul de aprovizionare* introdus în tab-ul [Furnizori preferențiali](/docs/erp-home/registers/items/create-new-items/item-registry/procurement) al articolului aferent ordinului planificat. Este gestionată doar pentru articolele cu tipul de aprovizionare *Achiziție*;  
**Data ETA (Estimated Time of Arrival)**: reprezintă data care este calculată însumând *Data FOB* cu *Lead Time transport* introdus în tab-ul *Furnizori preferențiali* al articolului aferent ordinului planificat. Este gestionată doar pentru articolele cu tipul de aprovizionare *Achiziție*;      
**Dată sfârşit**: pentru ordinele planificate de achiziție sau în sistem lohn, reprezintă data la care bunurile trebuie recepționate și, prin urmare, va coincide cu data estimată a recepției liniei ordinului furnizorului care va fi ulterior generată la lansarea ordinului. Pentru ordinele planificate de producție, această dată reprezintă data estimată pentru finalizarea ultimei etape de procesare a ciclului articolului;  
**Din disponibilitate minimă (Da disponibilità minima)**: indicatorul este activ doar dacă comanda planificată a fost generată folosind procedura de *Programare generală* și dacă, în [Parametrii de Programare](/docs/planning/ms-master-scheduling/general-schedule), indicatorul care permite *Considerarea disponibilității minime în perioada* este activ. Acest indicator se activează atunci când *Data disponibilității minime* în perioada de programare este ulterioară datei de necesitate; altfel, va fi dezactivat;            
**Cantitate confirmată (Quantità confermata)**: este diferită de zero doar dacă comanda rezultă din procesarea MRP;  
**Cantitate angajată (Quantità impegnata)**: este cantitatea care este angajată la data curentă a articolului;  
**Imperativ (Tassativo)**: dacă este activat, indicatorul va arăta că comanda planificată de producție nu poate fi mutată în raport cu data de început stabilită în interiorul acesteia.

În interiorul grilei, comenzile vor fi vizualizate cu culori diferite în funcție de *Tipul ordinului planificat* (dacă este de achiziție, producție sau muncă pe bază de contract). Această setare se face în cadrul [Parametrilor necesarului de materiale](/docs/configurations/parameters/production/resource-requirements-parameters), în grila corespunzătoare unde se poate alege culoarea de fundal a liniei sau a textului diferitelor comenzi.

De asemenea, din acest formular este posibil să se introducă o nouă comandă, făcând clic pe butonul [Introduceți comandă](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).