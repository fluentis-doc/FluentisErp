---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo de planificación de Fluentis es un sistema integrado diseñado para gestionar varios aspectos cruciales de la planificación de la producción, como la **pianificazione generale**, la **Programación a capacidad finita (Schedulazione a capacità finita)**, la **Planificación de Requerimientos de Materiales (MRP)** y la gestión de los **ordini pianificati**.        
La **pianificazione generale** en Fluentis adopta un enfoque de capacidad infinita, ofreciendo flexibilidad en la programación de las operaciones sin considerar restricciones físicas. Utiliza las lógicas *lo más pronto posible (al più presto)*, para iniciar las operaciones inmediatamente, y *lo más tarde posible (al più tardi)*, para programarlas lo más tarde posible respetando los plazos.        
La **programación a capacidad finita (schedulazione a capacità finita)** es una herramienta diseñada para optimizar la gestión de los recursos productivos dentro de una empresa manufacturera, teniendo en cuenta las limitaciones físicas de los recursos y creando planes de producción realistas y factibles.  
El sistema **MRP** facilita el análisis de la disponibilidad de materiales y recursos, proponiendo estrategias efectivas para optimizar tanto la compra como el uso de los materiales, con el fin de mejorar la productividad y reducir el desperdicio. Los pedidos planificados, generados automáticamente o manualmente, permiten la gestión anticipada de las necesidades empresariales, ofreciendo flexibilidad en la modificación de detalles como las fechas de producción.      
En general, el sistema Fluentis aborda los desafíos de la gestión de la producción integrando técnicas avanzadas para optimizar la eficiencia y los costos operativos.

## Módulos del área (Moduli dell'area)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     MS - Programación Maestra (MS - Matser Scheduling)
        <p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Planificación general (Pianificazione generale)</Link></p>
        <p>Opera a capacidad infinita y permite programar operaciones tanto *lo más pronto posible (al più presto)* como *lo más tarde posible (al più tardi)*. Estos enfoques flexibles permiten una gestión optimizada de las necesidades productivas y los tiempos de procesamiento.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P. (M.R.P.)</Link></p>
        <p>Permite analizar la disponibilidad de materiales y recursos, optimizando la gestión de inventarios y producción mediante sugerencias para anticipar, integrar o cancelar pedidos. Este sistema mejora la eficiencia operativa reduciendo los niveles de inventario.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Programación a capacidad finita (Schedulazione a capacità finita)</Link></p>
        <p>Optimiza la gestión de los recursos productivos considerando las capacidades reales de la empresa, permitiendo la creación de planes de producción realistas que limitan los tiempos de inactividad y mejoran la eficiencia operativa.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Pedidos planificados (Ordini pianificati)</Link></p>
        <p>Permite la creación y gestión eficiente de los pedidos planificados de producción, compra y trabajo por encargo.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Liberación de pedidos planificados (Rilascio ordini pianificati)</Link></p>
        <p>Permite transformar los pedidos planificados de producción, compra y trabajo por encargo en órdenes efectivas de producción, solicitudes de compra y órdenes de trabajo por encargo.</p>
    </div>
</div>

## Para comenzar a utilizar (Per iniziare ad utilizzare)

- crear artículos en el [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)  
- crear [*Listas de materiales (Distinte basi)*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)  
- crear [*cicli di lavoro*](/docs/erp-home/registers/production/routes/new-route)  
- crear [*centri di lavoro*](/docs/erp-home/registers/production/routes/work-center)  
- crear el [*calendario di fabbrica*](/docs/configurations/tables/production/factory-calendar/)  
- crear [*Calendarios de capacidades productivas (Calendari capacità produttive)*](/docs/configurations/tables/production/productive-capacity-calendar/)  
- definir los [*tipi documento*](/docs/configurations/tables/production/documents-types/)  
- definir los [*parametri ms*](/docs/configurations/parameters/production/mps-parameters/)  
- definir los [*parametri ordini produzione*](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro/)  

## Conexiones con otros módulos (Collegamenti con altri moduli)
Estos están estrechamente relacionados con el [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item), las [*Listas de materiales (Distinte basi)*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), [*cicli di lavoro*](/docs/erp-home/registers/production/routes/new-route), [*centri di lavoro*](/docs/erp-home/registers/production/routes/work-center), [*ordini pianificati*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) y [*ordini produzione*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).