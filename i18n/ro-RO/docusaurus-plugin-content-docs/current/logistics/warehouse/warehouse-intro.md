---
title: Introducere
sidebar_position: 1
---

Înregistrările de gestiune reprezintă un element important în gestionarea operațiunilor, permițând o monitorizare precisă a mișcărilor și a stocurilor.  
În paralel, gestionarea locațiilor oferă un nivel suplimentar de precizie, permițând clasificarea articolelor în diferite zone, cum ar fi rafturi și secțiuni, în interiorul unui depozit. Folosind o structură arborescentă modificabilă, operatorii pot atribui tipuri specifice de locații și defini parametrii cheie cum ar fi lățimea, înălțimea și capacitatea, îmbunătățind eficiența în manipularea și colectarea articolelor.  

## Documente gestionate

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/record">Gestiuni</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Înregistrări</Link></p>
        <p>Asigură gestionarea eficientă a operațiunilor logistice, permițând o înregistrare precisă a mișcărilor în cadrul sistemului. Înregistrările pot fi create automat prin diverse proceduri, cum ar fi încărcarea sau descărcarea documentelor. Acest proces nu doar simplifică introducerea mișcărilor, ci garantează și sincronizarea informațiilor între diferitele documente operaționale.</p>
        </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Locații</Link></p>
        <p>Permite utilizatorilor să structureze locațiile de stocare în interiorul depozitelor conform unei scheme ierarhice, ușor modificabile pentru a se adapta cerințelor de business. Fiecare locație poate fi definită în funcție de diverși parametri, inclusiv tipul de locație (de exemplu, zonă, raft, secțiune) și caracteristicile sale fizice precum lățimea, înălțimea și capacitatea de încărcare.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Rapoarte de Gestiune</Link></p>
        <p>Aceste rapoarte permit operatorilor să efectueze controale precise și să ia decizii informate în legătură cu aprovizionarea, gestionarea stocurilor și analiza mișcărilor de articole. Datorită rapoartelor personalizabile și diverselor filtre, utilizatorii pot obține informații detaliate despre:</p>
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Articolele nemișcate</Link> - <Link to="/docs/logistics/warehouse/management-reports/print-labels" className="bold-link">Raport etichete</Link></p>
        <p><Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution" className="bold-link">Substoc</Link> - <Link to="/docs/logistics/warehouse/management-reports/rotation-index" className="bold-link">Indice de rotație</Link></p>
    </div>
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Rapoarte contabile</Link></p>
        <p>Aceste oferă detalii despre mișcările de intrare și ieșire, permițând înregistrarea precisă a tranzacțiilor. Fiecare raport poate fi personalizat pentru a obține informații specifice, asigurând conformitatea și transparența în gestionarea bunurilor. Utilizatorii pot urmări mișcările și gestiona înregistrările contabile cu ușurință, prin instrumente precum:</p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Selectare mişcări</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-inventory-journal" className="bold-link">Jurnal de Magazie</Link></p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-warehouse-day-book" className="bold-link">Borderou de gestiune</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-cards" className="bold-link">Fișe de mişcări</Link></p>
    </div>
</div>

## Pentru utilizare

**Înregistrări de gestiune**:
- creează articole în [*Registrul articolelor* ](/docs/erp-home/registers/items/create-new-item)        
- definește [*Gestiuni*](/docs/configurations/tables/logistics/warehouses)    
- definește corect [*Șabloane de gestiune*](/docs/configurations/tables/logistics/warehouse-templates) de utilizat       
- definește [*Parametrii inițiali gestiune*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          

**Locații**:
- definește [*Tipuri de locații*](/docs/configurations/tables/logistics/locations-types)  
- definește [*Stare locații*](/docs/configurations/tables/logistics/location-status)                
- definește structura de [Locații](/docs/logistics/warehouse/location/locations)

## Conexiuni cu alte module
[*Înregistrarea de gestiune*](/docs/logistics/warehouse/stock-records/record) este corelată cu toate documentele care generează mișcări de încărcare și/sau descărcare.