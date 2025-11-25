---
title: Introducción
sidebar_position: 1
ai_generated: true
---

Las registraciones de almacén<!-- registrazioni di magazzino --> representan un elemento crucial en la gestión operativa de las mercancías, permitiendo un monitoreo preciso de los movimientos<!-- movimenti --> y de las existencias<!-- giacenze -->.     
Este proceso es fundamental para garantizar que las cantidades de artículos que ingresan y salen estén siempre actualizadas y correspondan con la realidad física del almacén<!-- magazzino -->.     
De forma conjunta, la gestión de las ubicaciones ofrece un nivel adicional de precisión, permitiendo clasificar los artículos en diferentes áreas, como estantes<!-- ripiani --> y secciones, dentro de un almacén<!-- magazzino -->. Utilizando un esquema de árbol modificable, los operadores pueden asignar tipos de ubicación específicos y definir parámetros clave como ancho, altura y capacidad, mejorando la eficiencia en la manipulación y el retiro<!-- prelievo --> de los artículos.       
La correcta integración de las registraciones de almacén<!-- registrazioni di magazzino --> con la información sobre las ubicaciones permite optimizar el flujo de mercancías y facilitar una gestión logística fluida y reactiva.

## Documentos gestionados<!-- I documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/record">Almacén<!-- Magazzino --></Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Registraciones<!-- Registrazioni --></Link></p>
        <p>Garantiza la gestión eficiente de las operaciones logísticas, permitiendo un registro preciso de los movimientos<!-- movimenti --> dentro del sistema. Las registraciones<!-- registrazioni --> pueden ser creadas automáticamente a través de diferentes procedimientos, como entrada de documentos (por ejemplo, albaranes<!-- DDT --> y facturas de compra) o salida (mediante albarán<!-- DDT --> y factura de venta). Este proceso no solo simplifica la inserción de los movimientos<!-- movimenti -->, sino que también asegura la sincronización de la información entre los diferentes documentos operativos.</p>
        </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Ubicaciones</Link></p>
        <p>Permite a los usuarios estructurar las ubicaciones de almacenamiento dentro de los almacenes<!-- magazzini --> según un esquema jerárquico, fácilmente modificable para adaptarse a las necesidades empresariales. Cada ubicación puede definirse según varios parámetros, incluido el tipo de ubicación (por ejemplo, área, estante<!-- ripiano -->, estantería<!-- scaffale -->, sección) y sus características físicas como ancho, alto y capacidad de carga.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Reportes de gestión<!-- Stampe gestionali --></Link></p>
        <p>Estos reportes permiten a los operadores realizar controles detallados y tomar decisiones informadas sobre el aprovisionamiento, la gestión de existencias<!-- giacenze --> y el análisis de los movimientos<!-- movimenti --> de artículos. Gracias a reportes personalizables y a diferentes filtros, los usuarios pueden obtener información detallada sobre:</p>
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Artículos no movidos<!-- Articoli non movimentati --></Link> - <Link to="/docs/logistics/warehouse/management-reports/print-labels" className="bold-link">Impresión de etiquetas<!-- Stampe etichette --></Link></p>
        <p><Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution" className="bold-link">Stock de seguridad<!-- Sottoscorta --></Link> - <Link to="/docs/logistics/warehouse/management-reports/rotation-index" className="bold-link">Índice de rotación<!-- Indice di rotazione --></Link></p>
    </div>
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Reportes contables<!-- Stampe contabili --></Link></p>
        <p>Estos reportes proporcionan informes detallados sobre los movimientos<!-- movimenti --> de entrada y salida, permitiendo un registro preciso de las transacciones. Cada plantilla de impresión puede personalizarse para obtener información específica, garantizando el cumplimiento y la transparencia en la gestión de bienes. Los usuarios pueden rastrear los movimientos<!-- movimenti --> y gestionar los registros contables con facilidad, mediante herramientas como:</p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection"className="bold-link">Selección de movimientos<!-- Selezione movimenti --></Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-inventory-journal" className="bold-link">Diario de almacén<!-- Giornale di magazzino --></Link></p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-warehouse-day-book" className="bold-link">Libro auxiliar de almacén<!-- Brogliaccio di magazzino --></Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-cards" className="bold-link">Tarjetas de movimiento<!-- Schede di movimentazione --></Link></p>
    </div>
</div>

## Para empezar a utilizar<!-- Per iniziare ad utilizzare -->   

las **Registraciones de almacén<!-- Registrazioni di magazzino -->**:
- crear artículos en la [*Ficha de artículos*<!-- Anagrafica articoli -->](/docs/erp-home/registers/items/create-new-item)        
- definir los [*Almacenes*<!-- Magazzini -->](/docs/configurations/tables/logistics/warehouses)    
- definir correctamente las [*Causales de almacén*<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates) a utilizar       
- definir los [*Parámetros iniciales de almacén*<!-- Parametri iniziali di magazzino -->](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          

las **Ubicaciones**:
- definir los [*Tipos de ubicaciones*<!-- Tipi ubicazioni -->](/docs/configurations/tables/logistics/locations-types)  
- definir los [*Estados de ubicación*<!-- Stato ubicazioni -->](/docs/configurations/tables/logistics/location-status)                
- definir el árbol de [Ubicaciones](/docs/logistics/warehouse/location/locations)


## Conexiones con otros módulos<!-- Collegamenti con altri moduli -->
Las [*Registraciones de almacén*<!-- Registrazione di magazzino -->](/docs/logistics/warehouse/stock-records/record) están relacionadas con todos los documentos que generan movimientos<!-- movimenti --> de entrada y/o salida.