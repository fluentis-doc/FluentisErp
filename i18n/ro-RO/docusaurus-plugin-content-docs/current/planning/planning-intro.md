---
title: Introducere
sidebar_position: 1
---

Prin procedura de Planificare a Producției, compania definește și organizează strategiile de producție necesare pentru a asigura livrările către clienți. Totuși, aceste strategii intră adesea în conflict cu obiectivele de gestionare și eficiență ale departamentelor de producție.  

În **Fluentis ERP** există diverse tehici care permit alegerea strategiei pentru planificarea produției: MTO (Make to Order - Fabricare la Comandă), MTS (Make to Stock - Fabricare pe Stoc), ATO (Assembly to Order - Asamblare la Comandă), sau ETO (Engineering To Order - Inginerie la Comandă). 

Cerințele sunt uneori mixte, ceea ce face ca alegerea strategică a modului de organizare a fluxului de producție să devină esențială pentru capacitatea companiei de a menține un echilibru optim între satisfacerea cererii și gestionarea eficientă a ofertei de producție.

## Modulele ariei

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/planning/mps-master-production-scheduling/job-orders-intro">Comenzi de producție</Link>
        <p><Link to="/docs/planning/mps-master-production-scheduling/job-order-creation" className="bold-link">Generare comenzi de producție</Link></p>
        <p>Permite crearea comenzilor de producție bazate pe comenzile clienților, previziuni, sub-stoc și necesar de materiale.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order" className="bold-link">Comenzi monoprodus</Link></p>
        <p>Permite gestionarea comenzilor de producție dedicate unui singur articol.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order" className="bold-link">Comenzi multiprodus</Link></p>
        <p>Permite gestionarea comenzilor de producție cu gruparea mai multor articole ale aceluiași client sau proiect.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/valorization" className="bold-link">Estimare cost</Link></p>
        <p>Permite calcularea costurilor asociate producției, evidențiind costurile preventive și cele definitive.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/ms-master-scheduling-intro">MS - Planificarea Master</Link>
        <p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Planificare generală</Link></p>
        <p>Funcționează pe principiul capacității infinite, permițând programarea operațiunilor atât *cât mai devreme*, cât și *cât mai târziu*. Această abordare flexibilă facilitează gestionarea optimizată a cerințelor de producție și a timpilor de lucru, contribuind la un flux eficient al operațiunilor.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>Optimizează gestionarea stocurilor și producției, îmbunătățind eficiența și reducând nivelurile stocurilor.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Programare pe capacitate finită</Link></p>
        <p>Permite optimizarea gestionării resurselor productive în companiile de producție.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Ordine planificate</Link></p>
        <p>Permite crearea și gestionarea eficientă a ordinelor planificate de producție, achiziție și sistem lohn.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Lansare ordine planificate</Link></p>
        <p>Permite transformarea ordinelor planificate în ordine efective.</p>    
    </div> 
</div> 
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/planning/capacity-requirements-planning/capacity-requirements-planning-intro">CRP – Planificare Cerințe de Capacitate (CRP – Capacity Requirements Planning)</Link>
        <p><Link to="/docs/planning/capacity-requirements-planning/work-center-capacity" className="bold-link">Capacitate Centre de Lucru</Link></p>
        <p>Permite monitorizarea și gestionarea sarcinilor de lucru ale centrelor de producție, evidențiind eventualele suprasarcini sau ineficiențe.</p>
        <p><Link to="/docs/planning/capacity-requirements-planning/gantt-visualization/gantt-visualization-intro" className="bold-link">Simulare Gantt</Link></p>
        <p>Permite planificarea și monitorizarea eficientă a activităților proiectului, optimizând gestionarea timpului și a resurselor.</p>
        <p><Link to="/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown" className="bold-link">Secvența faze</Link></p>
        <p>Permite organizarea fazelor de producție printr-o secvență manuală sau bazată pe reguli definite de utilizator.</p>
    </div>
</div>





