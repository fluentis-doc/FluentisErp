---
title: Introducere 
sidebar_position: 1
---

**Fluentis ERP** permite gestionarea Producției și a tuturor aspectelor sale operaționale în companiile din sectorul Manufacturier și Industrial care trebuie să gestioneze situații complexe, de estimare și contabilizare a costurilor, materialelor și activităților.  
Algoritmii **Fluentis** permit gestionarea tuturor proceselor interne și externe ale întregului ciclu de viață al produsului, de la estimare la proiectare, achiziția materialelor și a resurselor de producție, planificarea producției interne și/sau în sistem de lohn pe comandă, precum și colectarea datelor despre producție și controlul costurilor, fără a uita de conectarea cu Industry 4.0 a instalațiilor de producție și a gestiunilor automate.

În Fluentis ERP, aplicarea modelului MES a fost proiectată prin implementarea unei serii de parametri pentru gestionarea integrată a datelor provenite din procesele productive care influențează semnificativ rentabilitatea companiei. În software-ul MES Fluentis, putem observa cum documentele referitoare la ordinele de producție, efectiv lansate, dar nu neapărat executive, definesc secvența prin care, în fiecare departament, și chiar mai în detaliu în fiecare centru de lucru, se regăsește definirea tuturor informațiilor necesare pentru executarea activității productive.  
Materialele, etapele și subetapele, echipamentele și în general toată documentația de suport este destinată să facă executarea activității cât mai automatizată, organizată și fluidă.  
Algoritmul principal al unui ERP specializat în domeniul Producției este definit de MRP, sistemul de planificare care se ocupă de verificarea alocării corecte a materialelor și resurselor necesare pentru realizarea activității productive. 

## Module arie

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/mrp">MRP - Material Requirement Planning</Link>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>MRP este un sistem integrat de planificare a resurselor care ajută companiile să optimizeze gestionarea stocurilor și a producției, sincronizând disponibilitatea materialelor cu cerințele de producție pentru a îmbunătăți eficiența operațională și a reduce costurile.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/production-intro">MES - Manufacturing Execution System</Link>
        <p><Link to="/docs/production/pp-production-in-progress/production-orders/search-production-orders" className="bold-link">Ordine de producție</Link></p>
        <p>Modulul este proiectat pentru a optimiza și simplifica planificarea proceselor productive. Permite gestionarea ordinelor în starea "Lansată" și "Executivă", permițând o diferențiere clară între ordinele pregătite pentru demarare și cele deja în faza de execuție.</p>
        <p><Link to="/docs/production/pp-production-in-progress/picking-materials-list" className="bold-link">Lista de ieșire materiale</Link></p>
        <p>Permite gestionarea și mișcarea eficientă a materialelor destinate producției.</p>
        <p><Link to="/docs/production/pp-production-in-progress/signals/sisgnals" className="bold-link">Declarații de producție</Link></p>
        <p>Aceast modul permite utilizatorilor să genereze declarații de producție urmărind starea de progres a fiecărei etape, asigurând astfel o vizibilitate completă și controlul procesului de producție.</p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/signals-record" className="bold-link">Înregistrare declarații</Link></p>
        <p>Această procedură permite înregistrarea mai multor declarații de producție simultan.</p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/production-orders-release" className="bold-link">Lansare Ordine de Producţie</Link></p>
        <p>Procedura Fluentis permite schimbarea stării ordinelor din *Lansat* în *Executiv*, generând în același timp mișcările de stoc necesare.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/mes/mes-intro">Fluentis MES</Link>
        <p><Link to="/docs/production/mes/workstation" className="bold-link">Staţii de lucru</Link></p>
        <p>Permite o gestionare eficientă a operațiunilor de producție, permițând codificarea, filtrarea și asocierea resurselor. Datorită interfeței lor intuitive, utilizatorii pot optimiza fluxul de lucru și îmbunătăți eficiența operațională.</p>
        <p><Link to="/docs/production/mes/production-resources" className="bold-link">Resursele de producție</Link></p>
        <p>Permite personalizarea rapidă și simplă a configurației și comportamentului fiecărui centru de lucru, adaptând sistemul la cerințele specifice ale companiei.</p>
        <p><Link to="/docs/production/mes/mes-main-form" className="bold-link">MES</Link></p>
        <p>Este proiectat pentru a optimiza și simplifica procesul de declarare a activităților productive. Această interfață permite operatorilor să monitorizeze și să gestioneze în timp real resursele de producție, facilitând introducerea datelor referitoare la etapele de lucru și la cantitățile produse.</p>
    </div>
</div>