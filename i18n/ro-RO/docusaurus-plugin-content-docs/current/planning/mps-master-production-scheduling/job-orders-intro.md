---
title: Introducere
sidebar_position: 1
---

Form-ul **Generare comenzi** de producție permite crearea comenzilor bazate pe diferite inputuri, cum ar fi ordine clienți, previziuni de vânzare, sub-stoc și necesar de gestiune.    
Utilizatorul poate configura diferiți parametri pentru a optimiza procesul, selectând ordinele relevante și stabilind criterii specifice pentru producție.         
Acest sistem facilitează planificarea activităților de producție, permițând alegerea între diferite moduri operative, cum ar fi comenzi mono sau multi produs, și organizarea muncii în funcție de prioritățile definite. De asemenea, este posibil să actualizați comenzi existente sau să creați noi comenzi bazate pe cerințe specifice de aprovizionare și distribuție.        
Abordarea flexibilă a **Generării comenzilor** permite ca producția să corespundă cerințelor pieței și priorităților companiei, optimizând gestionarea resurselor și îmbunătățind eficiența operațională generală.

## Module arie

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     Comenzi de producție
        <p><Link to="/docs/planning/mps-master-production-scheduling/job-order-creation" className="bold-link">Generare comenzi de producție</Link></p>
        <p>Permite crearea comenzilor de producție bazate pe ordine clienți, previziuni, sub-stoc și necesar de gestiune.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders" className="bold-link">Comenzi de producție</Link></p>
        <p>Permite vizualizarea datelor de antet ale tuturor comenzilor de producție.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders-detail" className="bold-link">Comenzi de producție (detalii)</Link></p>
        <p>Permite vizualizarea datelor de antet și, de asemenea, a celor referitoare la articolele prezente în comanda de producție.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order" className="bold-link">Comenzi monoprodu</Link></p>
        <p>Permite gestionarea comenzilor de producție dedicate unui singur articol.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order" className="bold-link">Comenzi multiprodus</Link></p>
        <p>Permite gestionarea comenzilor de producție cu gruparea mai multor articole asociate aceluiași client sau proiect.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/valorization" className="bold-link">Estimare costuri</Link></p>
        <p>Permite calcularea costurilor asociate producției, evidențiind costurile estimate și efective.</p>
    </div>
</div> 

## Pentru a începe să utilizați

comenzile de producție:
- creați articole în [*Registrul articolelor*](/docs/erp-home/registers/items/create-new-item) 
- definiți [*Tipurile de documente*](/docs/configurations/tables/production/documents-types/)  
- definiți [*Parametrii MS*](/docs/configurations/parameters/production/mps-parameters/)   

## Conexiuni cu alte module

Acestea sunt strâns legate de [*Registrul articolelor*](/docs/erp-home/registers/items/create-new-item), de [*Ordinele clienților*](/docs/sales/sales-orders/settings) și de **Previziunile de vânzare**.