---
title: Introducere
sidebar_position: 1
---

Modul UdI permite operatorului să gestioneze unitățile de încărcare, crearea lor, mișcarea acestora în gestiune și vânzarea lor.  
UdI pot fi create manual sau cu ajutorul WMS Mobile. În general, UdI sunt utilizate de companiile care gestionează stocurile pe paleti sau care, în timpul vânzării, creează o UdI de expediere cu toate articolele de expediat.

## Documente gestionate

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/UdI/loading-unit-intro">UdI</Link>
        <p><Link to="/docs/logistics/UdI/loading-unit-management/search-pallet" className="bold-link">Gestionare UdI</Link></p>
        <p>Permite operatorilor să gestioneze întregul ciclu de viață al UdI, de la crearea lor până la mișcare și vânzare. UdI pot fi create manual sau prin WMS Mobile.</p>
        <p><Link to="/docs/logistics/UdI/loading-unit-packing-lists/loading-unit" className="bold-link">Lista de preluare UdI / Lista de Ambalare</Link></p>
        <p>Oferă o metodă inovatoare pentru gestionarea preluării unităților de încărcare, în contrast cu procedura tradițională de colectare care se bazează pe articole individuale. Această funcționalitate este deosebit de utilă atunci când se dorește expedierea mărfii către un client, permițând gruparea articolelor în unități de încărcare predefinite.</p>
        <p><Link to="/docs/logistics/UdI/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista de transfer UdI</Link></p>
        <p>Permite gestionarea mișcărilor Unitatilor de Încărcare în cadrul propriilor depozite, oferind o abordare sistematică și intuitivă pentru transferul mărfurilor. Spre deosebire de Lista de Preluare UdI, care este folosită pentru expedierea către clienți, lista de transfer se concentrează pe optimizarea fluxurilor interne ale UdI între diferitele locații de gestiune.</p>
    </div>
</div>

## Condiții utilizare

**Gestionare UdI**:  
- creați articole în [*Registru articole*](/docs/erp-home/registers/items/create-new-item) și definiți parametrii acestora în tab-ul [Ambalare (Confezionamento)](/docs/erp-home/registers/items/create-new-item)  
- definiți un [*Tip grup UdI*](/docs/configurations/tables/logistics/loading-unit-group-type/)  
- definiți un [*Tip UdI*](/docs/configurations/tables/logistics/loading-unit-types/)  
- definiți [*Șabloane de gestiune*](/docs/configurations/tables/logistics/warehouse-templates) de utilizat  
- definiți [*Parametrii inițiali de gestiune*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
- creați un angajat în tabelul [Angajați](/docs/project-management/registers/employee/new-employee/)

**Lista de preluare UdI / Lista de Ambalare** și **Lista de transfer UdI**:  
- definiți un [*Tip dispoziție livrare*](/docs/configurations/tables/logistics/picking-type/) 

## Conexiuni cu alte module 

Acestea sunt strâns legate de [*Registru articole*](/docs/erp-home/registers/items/create-new-item), de [*Înregistrare stocuri*](/docs/logistics/warehouse/stock-records/record) și de toate documentele care generează mișcări de încărcare și descărcare cu unitățile de încărcare.