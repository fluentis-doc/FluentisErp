---
title: Introducere 
sidebar_position: 1
---

Modulul permite operatorului să creeze liste de inventar, să le completeze și să compare datele privind stocurile faptice cu stocurile scriptice. Sistemul, în mod automat și conform parametrilor introduși de utilizator, va alinia stocurile scriptice cu cele faptice. După această operațiune, va fi posibilă valorizarea stocului.

## Documente gestionate

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Inventare faptice</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Inventare faptice</Link></p>
        <p>Permite operatorilor să creeze liste de inventar, să releve stocurile faptice și să compare datele obținute cu stocurile scriptice prezente în sistem. Printr-un proces automatizat, Fluentis facilitează alinierea între stocurile faptice și cele scriptice, asigurând astfel o optimizare precisă a gestionării resurselor.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Diferențe de inventar</Link></p>
        <p>Asigură alinierea eficientă dintre stocurile faptice și cele scriptice din gestiune. Această funcționalitate permite operatorilor să gestioneze și să înregistreze discrepanțele identificate în mod sistematic, asigurându-se că fiecare mișcare de gestiune este urmărită și contabilizată.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Istoric închideri</Link></p>
        <p>Permite accesul la datele istorice referitoare la închiderile de gestiune, permițând operatorilor să monitorizeze și să analizeze variațiile stocurilor în timp. Această funcționalitate permite consultarea informațiilor detaliate, cum ar fi costul final, costul mediu și stocurile de gestiune, toate realizate prin procedura de valorizare.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Arhivă gestiune</Link></p>
        <p>Permite utilizatorilor să consulte datele istorice referitoare la operațiunile de gestiune. Această funcționalitate permite vizualizarea unei arhive detaliate a închiderilor și valorizărilor realizate în timp, oferind posibilitatea de a analiza informații precum costul final și mediu pentru fiecare articol, precum și stocurile specifice asociate fiecărei închideri.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorizare gestiune</Link></p>
        <p>Permite operatorilor să efectueze închideri de gestiune la o dată specificată, înregistrând stocurile și permițând alinierea informațiilor logistice cu cele contabile, garantând astfel o gestionare precisă a resurselor și a costurilor asociate.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Inventar cantitativ valoric</Link></p>
        <p>Asigură companiilor o viziune clară și detaliată asupra stocurilor. Cu acest raport, utilizatorii pot accesa informații complete nu doar despre cantitățile faptice ale articolelor prezente în gestiune, ci și despre valoarea acestora.</p>
    </div>
</div>

## Condiții utilizare

**Inventare faptice**:
- creați articole în [*Registrul articolelor*](/docs/erp-home/registers/items/create-new-item)        
- definiți corect [*Șabloanele de gestiune*](/docs/configurations/tables/logistics/warehouse-templates) de utilizat        
- definiți [*Parametrii inițiali ai gestiunii*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          
- definiți [*Parametrii diferențelor de inventar*](/docs/configurations/parameters/logistics/stock-difference/)           
- definiți un [*Tip de listă de inventar*](/docs/configurations/tables/logistics/stock-lists-types/)        
- creați un angajat în tabelul [Angajați](/docs/project-management/registers/employee/new-employee/)

## Conexiuni cu alte module  

În [*Înregistrările de gestiune](/docs/logistics/warehouse/stock-records/record) puteți să vizualizați rezultatele **inventarului** și **închiderilor de gestiune**.