---
title: Introducere
sidebar_position: 1
---

Acest nou instrument a fost dezvoltat pentru a optimiza și simplifica procesul de expediere, permițând un control mai eficient și integrat al tuturor activităților logistice.  
**Gestionare expedieri** include procedura de **groupage**, care permite consolidarea diferitelor expedieri de mărfuri provenind de la diferiți expeditori, dar direcționate către aceeași zonă geografică, într-un singur transport sau container.        
Aceasta permite utilizarea mai eficientă a spațiului disponibil în mijloacele de transport, precum camioane, containere maritime sau aeriene, și oferă un serviciu mai economic în comparație cu expedierea de mărfuri individuale.         
În plus, a fost implementat un **instrument avansat de planificare** care permite vizualizarea expedierilor pe: mijloc de transport, șofer, transportator și client. Datorită unei funcționalități simple de drag & drop, operatorii pot organiza cu ușurință expedierile, anticipându-le sau amânându-le și modificând mijlocul de transport sau șoferul responsabil, garantând o gestionare mai flexibilă.

## Module arie 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">expedieri</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">expedieri</Link></p>
        <p>Prin gestionarea groupage, este posibil să se grupeze expedierile de la diferiți clienți sau furnizori într-o singură unitate de transport.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendar</Link></p>
        <p>Permite planificarea și gestionarea eficientă a activităților operaționale și logistice, optimizând resursele și îmbunătățind coordonarea expedierilor.</p>
    </div>
</div>

## Condiții utilizare expedierile

- creați articole în [*Registru articole*](/docs/erp-home/registers/items/create-new-item) 
- definiți un [*Tip de expediere*](/docs/configurations/tables/logistics/shipping-type)        
- definiți un [*Stare de expediere*](/docs/configurations/tables/logistics/shipping-states)     
- definiți [*Autovehicule*](/docs/logistics/motorvehicles/motorvehicle)   
- definiți [*Șoferi autovehicul*](/docs/logistics/motorvehicles/motorvehicle-drivers)      
- definiți [*Motive oprire autovehicul*](/docs/configurations/tables/logistics/motorvehicle-off-time-reasons)     
- definiți [*Motive absență șofer*](/docs/configurations/tables/logistics/driver-off-time-reasons) 
- definiți [*Permise de conducere autovehicul*](/docs/configurations/tables/logistics/motorvehicle-driving-licences)     
- definiți tipul [*Proprietăți autovehicul*](/docs/configurations/tables/logistics/motorvehicle-ownership)   
- definiți [*Mărci autovehicul*](/docs/configurations/tables/logistics/motorvehicle-brands)   
- definiți [*Tip carburant autovehicul*](/docs/configurations/tables/logistics/motorvehicle-gas-type)  
- definiți [*Tipuri de autovehicul*](/docs/configurations/tables/logistics/motorvehicle-type)  

## Conexiuni cu alte module

Acestea sunt strâns legate de [*Registru articole*](/docs/erp-home/registers/items/create-new-item) și de [*Ordine clienți*](/docs/sales/sales-orders/settings), deoarece vă permite să adăugați articole direct dintr-un ordin.           
În plus, dintr-o expediere se poate crea direct [*Avize de expediere*](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn), [*Facturi*](/docs/sales/sales-invoices/general-overview) de vânzare și, de asemenea, [*Dispoziţii de livrare*](/docs/logistics/picking/picking-intro).