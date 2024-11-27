---
title: Căutare ordine planificate
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Butoane specifice*:

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): permite deschiderea form-ul referitor la parametrii MRP ai articolului;             
> [Lista componente (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite deschiderea form-ului referitor la lista de componente a articolului;  
> [Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route): permite vizualizarea ciclului de lucru și a fazelor de producție corespunzătoare articolului.

*Câmpuri specifice*

**Dată început**: pentru ordinele planificate de achiziție sau în sistem lohn reprezintă data în care trebuie trimis furnizorului ordinul de achiziție care va fi generat ulterior cu eliberarea ordinului respectiv. Pentru ordinele planificate de producție, această dată reprezintă data de început prevăzută a primei faze de prelucrare a ciclului articolului;  
**Dată FOB**: reprezintă data care este calculată adunând *Data de început prevăzută* cu *Timpul de aprovizionare* introdus în tab-ul [Furnizori preferențiali](/docs/erp-home/registers/items/create-new-items/item-registry/procurement) al articolului ordinului planificat și este gestionată doar pentru articolele cu tipul de aprovizionare *Achiziție*;  
**Dată ETA**: reprezintă data care este calculată adunând *Data FOB* cu *Lead Time de Expediere* introdus în tab-ul *Furnizori preferențiali* al articolului ordinului planificat și este gestionată doar pentru articolele cu tipul de aprovizionare *Achiziție*;      
**Dată sfârșit**: pentru ordinele planificate de achiziție sau în sistem lohn reprezintă data în care trebuie primită livrarea și va coincide cu data de primire prevăzută a liniei ordinului furnizor care va fi generat ulterior cu lansarea ordinului respectiv. Pentru ordinele planificate de producție, această dată reprezintă data de finalizare prevăzută a ultimei faze de prelucrare a ciclului articolului;  
**Din disponibilitate minimă**: este activ doar dacă ordinul planificat a fost generat utilizând procedura de *Planificare generală* și dacă, în [Parametrii planificare](/docs/planning/ms-master-scheduling/general-schedule), parametrul care permite *Considerarea disponibilității minime în perioada* este activ. Acest parametru se activează atunci când *Data disponibilității minime* în perioada de planificare este ulterioară datei necesitate. În caz contrar, va fi dezactivat;            
**Cantitate confirmată**: este diferită de zero doar dacă ordinul rezultă din elaborare MRP;  
**Cantitate rezervată**: este cantitatea rezervată la data curentă a articolului;  
**Obligatoriu**: dacă este activ, indică faptul că ordinul planificat de producție nu este modificabil în raport cu data de început setată în el.

În interiorul tabelului, ordinele vor fi vizualizate cu culori diferite în baza *Tipului ordinului planificat* (dacă este de achiziție, producție sau sistem lohn). Această setare se realizează în [Parametri necesar materiale](/docs/configurations/parameters/production/resource-requirements-parameters), în tabelul corespunzător unde se poate alege culoarea fundalului rândului sau a textului diferitelor ordine.

De asemenea, din acest form puteți să introduceți un nou ordin, făcând clic pe butonul [Inserează ordin](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).