---
title: Introducere
sidebar_position: 1
---

Sistemul Fluentis permite generarea dispozițiilor de livrare din articole prin proceduri simple și rapide, cum ar fi introducerea automată a articolelor cu ajutorul ordinelor clienților, facilitând astfel procesul de livrare.  
Dispozițiile de livrare pot fi introduse manual sau automat, de exemplu, din planurile de încărcare. Pornind de la dispoziția de livrare se poate crea un document de transport sau o factură.  
Gestionarea dispoziției de livrare în Fluentis reprezintă un element important pentru optimizarea operațiunilor logistice, garantând eficiență și un nivel ridicat de control asupra proceselor de colectare și mișcare a articolelor.

## Documente

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-management">Dispoziție de livrare</Link>
        <p> Această funcționalitate permite utilizatorilor să genereze liste de ieșiri în mod eficient, începând de la diversele tipuri de dispoziție de livrare configurabile în sistem. Prin crearea unui dispoziții de livrare, operatorii pot selecta articolele de livrat, definind detalii importante precum cantitatea și locația de colectare.</p> 
    </div>
</div>

## Utilizare   

Pentru a crea o **Dispoziție de livrare**:
- inserează un [*Tip de dispoziție de livrare*](/docs/configurations/tables/logistics/picking-type/)      
- inserează [*Parametrii dispoziției de livrare*](//docs/configurations/parameters/logistics/picking-parameters/)        
- inserează corect [*Șabloanele de gestiune*](//docs/configurations/tables/logistics/warehouse-templates) de utilizat
- creează articole în [*Registru articole*](/docs/erp-home/registers/items/create-new-item)

## Conexiuni cu alte module  
Se poate genera o dispoziție de livrare manual, dar și dintr-o [Listă de ieșiri materiale](/docs/production/pp-production-in-progress/picking-materials-list).  
De asemenea, dintr-o dispoziție de livrare se poate crea direct [Avize](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) și [Facturi](/docs/sales/sales-invoices/general-overview) de vânzare.