---
title: Introducere
sidebar_position: 0
---

În aria Logistică din Fluentis, articolele pot fi urmărite și gestionate atât pe **Loturi**, cât și pe **Numere seriale**. Loturile reprezintă grupuri omogene de articole, atât la intrare, cât și la ieșire, permițând o gestionare eficientă a stocurilor și asigurând trasabilitatea pe parcursul procesului de producție și distribuție. Fiecare lot este identificat printr-un cod unic, care permite obținerea de informații detaliate referitoare la specificațiile lotului respectiv, inclusiv date esențiale pentru conformitatea normativă.

Pe de altă parte, numerele seriale sunt utilizate pentru a identifica în mod unic fiecare piesă, fiind deosebit de utile pentru articole de mare valoare sau critice. Această abordare permite o gestionare precisă, facilitând monitorizarea și înregistrarea fiecărui articol individual în magazin. Integrarea acestor sisteme în cadrul platformei Fluentis optimizează trasabilitatea și îmbunătățește eficiența operațională în gestionarea inventarului.

## Documente gestionate

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-register">Registru loturi</Link>
        <p>Este un instrument fundamental pentru gestionarea și trasabilitatea loturilor.</p> 
        <p>Utilizatorii pot căuta și vizualiza cu ușurință detaliile fiecărui lot cu un simplu dublu clic, facilitând monitorizarea stocurilor.</p> 
        <p>Sistemul gestionează diverse stări ale loturilor, influențând disponibilitatea operațională.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Registru număr serial</Link>
        <p>Este un modul fundamental pentru gestionarea numărului serial, care permite companiilor să urmărească articole individuale printr-un cod de identificare unic.</p> 
        <p>Această funcționalitate este crucială pentru cerințele de trasabilitate și securitate, în special pentru articole critice sau de mare valoare. Registrul include, de asemenea, informații despre documentele de încărcare și descărcare asociate, oferind o analiză completă a utilizării în timp.</p> 
        <p>Această abordare sistematică optimizează procesele interne și asigură conformitatea cu reglementările, făcând registrul un instrument indispensabil pentru companiile moderne orientate spre eficiența operațională și calitatea serviciului.</p>
    </div>
</div>

## Pentru a începe să utilizați

**Registru loturi**:
- definiți un [*Tip cod lot*](/docs/configurations/tables/logistics/lot-codes-types)    
- definiți parametrii pentru fiecare articol în tab [*Loturi și numere seriale*](/docs/erp-home/registers/items/create-new-item) din registrul articolului        
- definiți corect [*Șabloanele de gestiune*](/docs/configurations/tables/logistics/warehouse-templates) care trebuie utilizate
- creați un document sau o [*Înregistrare de gestiune*](/docs/logistics/warehouse/stock-records/record) de încărcare sau descărcare cu un articol gestionat pe loturi pentru a putea vizualiza rezultatul în **Registrul lotului**

**Registru număr serial**:
- definiți un [*Tip cod număr serial*](/docs/configurations/tables/logistics/serial-numbers-code-type)      
- definiți parametrii pentru fiecare articol în tab [*Loturi și numere seriale*](/docs/erp-home/registers/items/create-new-item) din registrul articolului        
- definiți corect [*Șabloanele de gestiune*](/docs/configurations/tables/logistics/warehouse-templates) care trebuie utilizate
- creați un document sau o [*Înregistrare de gestiune*](/docs/logistics/warehouse/stock-records/record) de încărcare sau descărcare cu un articol gestionat la numere seriale pentru a putea vizualiza rezultatul în **Registrul număr serial**

## Conexiuni cu alte module
Acestea sunt strâns legate de [*Registrul articolelor*](/docs/erp-home/registers/items/create-new-item), de [*Înregistrările de gestiune*](/docs/logistics/warehouse/stock-records/record) și de toate documentele care generează mișcări de încărcare și descărcare.