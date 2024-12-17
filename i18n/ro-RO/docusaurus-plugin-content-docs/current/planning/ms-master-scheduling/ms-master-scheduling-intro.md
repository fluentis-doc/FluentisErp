---
title: Introducere
sidebar_position: 1
---

Modul de planificare din Fluentis este un sistem integrat proiectat pentru a gestiona diverse aspecte cruciale ale planificării producției, cum ar fi **Planificarea generală (Pianificazione generale)**, **Schedularea a capacitate finită (Schedulazione a capacità finita)**, **Planificarea necesarului de materiale (Material Requirements Planning)** și gestionarea **Ordinele planificate (Ordini pianificati)**.       
**Planificarea generală** în Fluentis adoptă un abordare de capacitate infinită, oferind flexibilitate în programarea operațiunilor fără a considera constrângeri fizice. Utilizează logica *al mai devreme*, pentru a începe operațiunile imediat, și *al mai târziu*, pentru a le planifica cât mai târziu posibil respectând termenele limită.       
**Schedularea a capacitate finită** este un instrument proiectat pentru a optimiza gestionarea resurselor productive în cadrul unei companii de producție, ținând cont de limitările fizice ale resurselor și creând planuri de producție realiste și realizabile.  
Sistemul **MRP** facilitează analiza disponibilității materialelor și resurselor, propunând strategii eficiente pentru a optimiza atât achiziția cât și utilizarea materialelor, cu scopul de a îmbunătăți productivitatea și a reduce risipa. Ordinele planificate, generabile automat sau manual, permit gestionarea anticipată a necesităților companiei, oferind flexibilitate în modificarea detaliilor precum datele de producție.      
În ansamblu, sistemul Fluentis abordează provocările gestionării producției integrând tehnici avansate pentru a optimiza eficiența și costurile operaționale.

## Module aria Planificare

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     MS - Planificare generală (MS - Matser Scheduling)
        <p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Planificare generală</Link></p>
        <p>Funcționează la capacitate infinită și permite programarea operațiunilor atât *mai devreme* cât și *mai târziu*. Aceste abordări flexibile permit o gestionare optimizată a cerințelor de producție și a timpilor de procesare.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>Permite analiza disponibilității materialelor și resurselor, optimizând gestionarea stocurilor și producției prin indicații pentru avans, integrare sau anulare ordine. Acest sistem îmbunătățește eficiența operațională reducând nivelurile de magazie.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Planificare pe capacitate finită</Link></p>
        <p>Optimizează gestionarea resurselor productive având în vedere capacitățile reale ale companiei, permițând crearea de planuri de producție realiste, limitând timpii de inactivitate și îmbunătățind eficiența operațională.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Ordine planificate</Link></p>
        <p>Permite crearea și gestionarea eficientă a ordinelor planificate de producție, achiziție și sistem lohn.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Lansare ordine planificate</Link></p>
        <p>Permite transformarea ordinelor planificate de producție, achiziție și sistem lohn în ordine efective de producție, cereri de achiziție și ordine în sistem lohn.</p>
    </div>
</div> 

## Configurare tabele și parametri inițiali 

- creați articole în [*Registru articole*](/docs/erp-home/registers/items/create-new-items/create-new-item) 
- creați [*Liste componente*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) 
- creați [*Cicluri de lucru*](/docs/erp-home/registers/production/routes/new-route) 
- creați [*Centre de lucru*](/docs/erp-home/registers/production/routes/work-center) 
- creați [*Calendare de fabrică*](/docs/configurations/tables/production/factory-calendar/) 
- creați [*Calendare capacități productive*](/docs/configurations/tables/production/productive-capacity-calendar/) 
- definiți [*Tipuri de documente*](/docs/configurations/tables/production/documents-types/)  
- definiți [*Parametrii MS*](/docs/configurations/parameters/production/mps-parameters/)   
- definiți [*Parametrii ordine de producție*](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro/)   

## Conexiuni cu alte module  

Acestea sunt strâns legate de [*Registru articole*](/docs/erp-home/registers/items/create-new-items/create-new-item), [*Liste componente*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), [*Cicluri de lucru*](/docs/erp-home/registers/production/routes/new-route), [*Centre de lucru*](/docs/erp-home/registers/production/routes/work-center), [*Ordine planificate*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) și [*Ordine de producție*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).