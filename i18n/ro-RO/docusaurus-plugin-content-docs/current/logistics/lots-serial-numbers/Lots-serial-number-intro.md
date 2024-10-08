---
title: Introducere (Introduzione)
sidebar_position: 0
---

În gestionarea logistică a Fluentis, articolele pot fi urmărite și gestionate atât prin **Loturi** cât și prin **Număr de serie**. Loturile reprezintă grupuri omogene de articole, atât la intrare cât și la ieșire, permițând o gestionare eficientă a stocurilor și garantând trasabilitatea pe parcursul procesului de producție și distribuție. Fiecare lot este identificat printr-un cod unic, care permite obținerea de informații detaliate referitoare la specificațiile lotului, inclusiv date esențiale pentru conformitatea normativă.

Pe de altă parte, numerele seriale sunt utilizate pentru a identifica unic fiecare piesă, fiind deosebit de utile pentru articole de valoare mare sau critice. Această abordare permite o gestionare precisă, facilitând monitorizarea și înregistrarea fiecărui articol în depozit. Integrarea acestor sisteme în cadrul platformei Fluentis optimizează trasabilitatea și îmbunătățește eficiența operațională în gestionarea inventarului.         

## Documentele gestionate

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-register">Registru loturi (Anagrafica lotti)</Link>
        <p>Registrul loturilor din Fluentis este un instrument fundamental pentru gestionarea și trasabilitatea loturilor.</p> 
        <p>Utilizatorii pot căuta și vizualiza cu ușurință detalii despre fiecare lot cu un simplu dublu clic, facilitând monitorizarea stocurilor.</p> 
        <p>Sistemul gestionează diverse stări ale lotului, influențând disponibilitatea operațională.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Registru numere seriale (Anagrafica serial number)</Link>
        <p>Registrul numerelor seriale din Fluentis este un modul fundamental pentru gestionarea numerelor seriale, care permite companiilor să urmărească articole individuale printr-un cod identificativ unic.</p> 
        <p>Această funcționalitate este crucială pentru cerințele de trasabilitate și securitate, în special pentru articole critice sau de valoare mare. Registrul include și informații despre documentele de încărcare și descărcare asociate, furnizând o analiză completă a utilizării în timp.</p> 
        <p>Această abordare sistematică optimizează procesele interne și asigură conformitatea cu normele, făcând registrul un instrument indispensabil pentru companiile moderne orientate spre eficiența operațională și calitatea serviciului.</p>
    </div>
</div>

## Pentru a începe să utilizați   

**Registru loturi**:
- definește un [*Tip cod lot*](/docs/configurations/tables/logistics/lot-codes-types)      
- definește parametrii pentru fiecare articol în tab-ul [*Loturi și Numere seriale*](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) din registrul articolului        
- definește corect [*Cauzele de depozitare*](/docs/configurations/tables/logistics/warehouse-templates) de utilizat
- creează un document sau o [*Înregistrare de depozit*](/docs/logistics/warehouse/stock-records/record) de încărcare sau descărcare cu un articol gestionat pe loturi, pentru a putea vizualiza rezultatul în **Registrul loturilor**

**Registrul Numerelor seriale (Anagrafica Serial number)**:
- definește un [*Tip cod număr serial*](/docs/configurations/tables/logistics/serial-numbers-code-type)      
- definește parametrii pentru fiecare articol în tab-ul [*Loturi și Numere seriale*](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) din registrul articolului        
- definește corect [*Cauzele de depozitare*](/docs/configurations/tables/logistics/warehouse-templates) de utilizat
- creează un document sau o [*Înregistrare de depozit*](/docs/logistics/warehouse/stock-records/record) de încărcare sau descărcare cu un articol gestionat pe numere seriale, pentru a putea vizualiza rezultatul în **Registrul Numerelor seriale**

## Legături cu alte module
Acestea sunt strâns legate de [*Registrul articolelor*](/docs/erp-home/registers/items/create-new-items/create-new-item), de [*Îregistrarea de depozit*](/docs/logistics/warehouse/stock-records/record) și de toate documentele care generează mișcări de încărcare și descărcare.