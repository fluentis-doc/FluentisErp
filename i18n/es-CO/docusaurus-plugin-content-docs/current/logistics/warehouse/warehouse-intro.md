---
title: Introducción (Introduzione)
sidebar_position: 1
---

Las registraciones de almacén representan un elemento crucial en la gestión operativa de las mercancías, permitiendo un monitoreo preciso de los movimientos y los inventarios.    
Este proceso es fundamental para garantizar que las cantidades de artículos entrantes y salientes estén siempre actualizadas y correspondan a la realidad física del almacén.    
Al mismo tiempo, la gestión de las ubicaciones ofrece un nivel adicional de precisión, permitiendo clasificar los artículos en diferentes áreas, como estantes y secciones, dentro de un almacén. Al utilizar un esquema de árbol modificable, los operadores pueden asignar tipos de ubicación específicos y definir parámetros clave como ancho, altura y capacidad, mejorando la eficiencia en el manejo y la extracción de artículos.       
La correcta integración de las registraciones de almacén con la información sobre las ubicaciones permite optimizar el flujo de mercancías y facilita una gestión logística fluida y reactiva.

## Los documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/record">Almacén (Magazzino)</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Registraciones (Registrazioni)</Link></p>
        <p>Asegura una gestión eficiente de las operaciones logísticas, permitiendo un registro preciso de los movimientos dentro del sistema. Las registraciones pueden ser creadas automáticamente a través de diversos procedimientos, como la carga de documentos (por ejemplo, DDT y facturas de compra) o descarga (a través de DDT y factura de venta). Este proceso no solo simplifica la entrada de movimientos, sino que también garantiza la sincronización de la información entre los diversos documentos operativos.</p>
        </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Ubicaciones (Ubicazioni)</Link></p>
        <p>Permite a los usuarios estructurar las ubicaciones de almacenamiento dentro de los almacenes según un esquema jerárquico, fácilmente modificable para adaptarse a las necesidades empresariales. Cada ubicación puede definirse según varios parámetros, incluidos el tipo de ubicación (por ejemplo, área, estante, estantería, sección) y sus características físicas como ancho, altura y capacidad de carga.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Impresiones de gestión (Stampe gestionali)</Link></p>
        <p>Estas impresiones permiten a los operadores realizar controles precisos y tomar decisiones informadas sobre el aprovisionamiento, la gestión de inventarios y el análisis de los movimientos de los artículos. Gracias a reportes personalizables y diversos filtros, los usuarios pueden obtener información detallada sobre:</p>
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Artículos no movidos (Articoli non movimentati)</Link> - <Link to="/docs/logistics/warehouse/management-reports/print-labels" className="bold-link">Impresiones de etiquetas (Stampe etichette)</Link></p>
        <p><Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution" className="bold-link">Bajo stock (Sottoscorta)</Link> - <Link to="/docs/logistics/warehouse/management-reports/rotation-index" className="bold-link">Índice de rotación (Indice di rotazione)</Link></p>
    </div>
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Impresiones contables (Stampe contabili)</Link></p>
        <p>Estas impresiones proporcionan reportes detallados sobre los movimientos entrantes y salientes, permitiendo un registro preciso de las transacciones. Cada plantilla de impresión puede personalizarse para obtener información específica, garantizando la conformidad y la transparencia en la gestión de los bienes. Los usuarios pueden rastrear los movimientos y gestionar las registraciones contables con facilidad, a través de herramientas como:</p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Selección de movimientos (Selezione movimenti)</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-inventory-journal" className="bold-link">Diario de almacén (Giornale di magazzino)</Link></p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-warehouse-day-book" className="bold-link">Libro diario de almacén (Brogliaccio di magazzino)</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-cards" className="bold-link">Tarjetas de movimiento (Schede di movimentazione)</Link></p>
    </div>
</div>

## Para comenzar a utilizar (Per iniziare ad utilizzare)  

las **registrazioni di magazzino**:  
- crear artículos en la [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)        
- definir los [*magazzini*](/docs/configurations/tables/logistics/warehouses)    
- definir correctamente las [*causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) a utilizar       
- definir los [*Parámetros iniciales de almacén (Parametri iniziali di magazzino)*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          

las **ubicazioni**:  
- definir los [*tipi ubicazioni*](/docs/configurations/tables/logistics/locations-types)  
- definir los [*Estados de ubicaciones (Stato ubicazioni)*](/docs/configurations/tables/logistics/location-status)                
- definir el árbol de [Ubicaciones (Ubicazioni)](/docs/logistics/warehouse/location/locations)


## Conexiones con otros módulos (Collegamenti con altri moduli)  
Las [*registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) están vinculadas a todos los documentos que generan movimientos de carga y/o descarga.