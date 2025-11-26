---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo de planificación de Fluentis es un sistema integrado diseñado para gestionar varios aspectos cruciales de la planificación de la producción, como la **Planificación general<!-- Pianificazione generale -->**, la **Programación a capacidad finita<!-- Schedulazione a capacità finita -->**, el **Material Requirements Planning (MRP)** y la gestión de los **Pedidos planificados<!-- Ordini pianificati -->**.       
La **planificación general<!-- pianificazione generale -->** en Fluentis adopta un enfoque de capacidad infinita, ofreciendo flexibilidad en la programación de las operaciones sin considerar restricciones físicas. Utiliza las lógicas *lo antes posible<!-- al più presto -->*, para iniciar las operaciones inmediatamente, y *lo más tarde posible<!-- al più tardi -->*, para planificarlas lo más tarde posible respetando los plazos.       
La **programación a capacidad finita<!-- schedulazione a capacità finita -->** es una herramienta diseñada para optimizar la gestión de los recursos productivos dentro de una empresa manufacturera, teniendo en cuenta las limitaciones físicas de los recursos y creando planes de producción realistas y ejecutables.  
El sistema **MRP** facilita el análisis de la disponibilidad<!-- disponibilità --> de materiales<!-- materiali --> y recursos, proponiendo estrategias eficaces para optimizar tanto la compra como el uso de los materiales, con el fin de mejorar la productividad y reducir los desperdicios. Los pedidos planificados<!-- ordini pianificati -->, generables automáticamente o manualmente, permiten la gestión anticipada de las necesidades empresariales, ofreciendo flexibilidad en la modificación de detalles como las fechas de producción.      
En conjunto, el sistema Fluentis aborda los desafíos de la gestión de la producción integrando técnicas avanzadas para optimizar la eficiencia y los costos operativos.

## Módulos del área<!-- Moduli dell'area --> 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     MS - Master Scheduling
        <p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Planificación general<!-- Pianificazione generale --></Link></p>
        <p>Opera a capacidad infinita y permite programar operaciones tanto *lo antes posible<!-- al più presto -->* como *lo más tarde posible<!-- al più tardi -->*. Estos enfoques flexibles permiten una gestión optimizada de las necesidades de producción y los tiempos de procesamiento.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>Permite analizar la disponibilidad de materiales<!-- materiali --> y recursos, optimizando la gestión de stocks y producción mediante sugerencias para anticipar, integrar o anular órdenes. Este sistema mejora la eficiencia operativa reduciendo los niveles de inventario<!-- magazzino -->.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Programación a capacidad finita<!-- Schedulazione a capacità finita --></Link></p>
        <p>Optimiza la gestión de los recursos productivos considerando las capacidades reales de la empresa, permitiendo crear planes de producción realistas limitando los tiempos de inactividad y mejorando la eficiencia operativa.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/fcs-scheduling" className="bold-link">Programación F.C.S.<!-- Schedulazione F.C.S. --></Link></p>
        <p>Permite simular y optimizar de forma detallada los procesos productivos, mejorando la precisión de las entregas, la gestión de situaciones críticas y la eficiencia de toda la planificación empresarial.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/fcs-execution" className="bold-link">Ejecuciones F.C.S.<!-- Esecuzioni F.C.S. --></Link></p>
        <p>Permite gestionar y visualizar de forma detallada toda la información de las simulaciones de programación</p>
        <p><Link to="/docs/planning/ms-master-scheduling/fcs-gantts-and-histograms/fcs-kpi" className="bold-link">Gantts e histogramas F.C.S.<!-- Gantts e istogrammi F.C.S. --></Link></p>
        <p>Permite visualizar los datos de las simulaciones en forma de Gantts e histogramas.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Pedidos planificados<!-- Ordini pianificati --></Link></p>
        <p>Permite la creación y gestión eficiente de los pedidos planificados de producción, compra y subcontratación<!-- conto lavoro -->.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Liberación de pedidos planificados<!-- Rilascio ordini pianificati --></Link></p>
        <p>Permite transformar los pedidos planificados de producción, compra y subcontratación<!-- conto lavoro --> en pedidos efectivos de producción, solicitudes de compra y pedidos de subcontratación<!-- ordini di conto lavoro -->.</p>
    </div>
</div> 

## Para comenzar a utilizar<!-- Per iniziare ad utilizzare -->   

- crear artículos en la [*Ficha de artículos<!-- Anagrafica articoli -->*](/docs/erp-home/registers/items/create-new-item) 
- crear las [*Listas de materiales<!-- Distinte basi -->*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) 
- crear los [*Ciclos de trabajo<!-- Cicli di lavoro -->*](/docs/erp-home/registers/production/routes/new-route) 
- crear los [*Centros de trabajo<!-- Centri di lavoro -->*](/docs/erp-home/registers/production/routes/work-center) 
- crear los [*Calendarios de fábrica<!-- Calendario di fabbrica -->*](/docs/configurations/tables/production/factory-calendar/) 
- crear los [*Calendarios de capacidad productiva<!-- Calendari capacità produttive -->*](/docs/configurations/tables/production/productive-capacity-calendar/) 
- definir los [*Tipos de documento<!-- Tipi documento -->*](/docs/configurations/tables/production/documents-types/)  
- definir los [*Parámetros MS<!-- Parametri MS -->*](/docs/configurations/parameters/production/mps-parameters/)   
- definir los [*Parámetros de pedidos de producción<!-- Parametri ordini produzione -->*](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro/)   

## Conexiones con otros módulos<!-- Collegamenti con altri moduli --> 
Estos están estrechamente relacionados con la [*Ficha de artículos<!-- Anagrafica articoli -->*](/docs/erp-home/registers/items/create-new-item), las [*Listas de materiales<!-- Distinte basi -->*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), [*Ciclos de trabajo<!-- Cicli di lavoro -->*](/docs/erp-home/registers/production/routes/new-route), [*Centros de trabajo<!-- Centri di lavoro -->*](/docs/erp-home/registers/production/routes/work-center), [*Pedidos planificados<!-- Ordini pianificati -->*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) y [*Pedidos de producción<!-- Ordini produzione -->*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).