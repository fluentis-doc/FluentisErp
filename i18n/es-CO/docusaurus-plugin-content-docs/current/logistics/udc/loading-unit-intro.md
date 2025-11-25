---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo de UDC permite al operador gestionar las unidades de carga<!-- unità di carico -->, su creación, su movimiento dentro del almacén<!-- magazzino --> y su venta.  
Las UDC pueden crearse manualmente o desde WMS Mobile. Normalmente las UDC son utilizadas por empresas que gestionan el almacén<!-- magazzino --> en palets, o que, en la fase de venta, crean una UDC de expedición con todos los artículos por enviar incluidos.

## Documentos gestionados<!-- I documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">UDC</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Gestión UDC</Link></p>
        <p>Permite a los operadores gestionar todo el ciclo de vida de las UDC, desde su creación hasta el movimiento y la venta. Las UDC pueden crearse manualmente o mediante WMS Mobile, lo que hace que el sistema sea versátil y adaptable a diversas necesidades operativas.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista de recogida UDC / Packing list</Link></p>
        <p>Ofrece un método innovador para gestionar la recogida de unidades de carga<!-- unità di carico -->, en contraste con el procedimiento tradicional de picking basado en artículos individuales. Esta funcionalidad es especialmente útil cuando se quiere enviar mercancía a un cliente, permitiendo agrupar artículos dentro de unidades de carga<!-- unità di carico --> predefinidas.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista de transferencia UDC</Link></p>
        <p>Permite gestionar los movimientos de las Unidades de Carga<!-- Unità Di Carico --> dentro de los propios almacenes<!-- magazzini -->, ofreciendo un método sistemático e intuitivo para la transferencia de mercancía. A diferencia de la Lista de Recogida UDC, utilizada para el envío a clientes, la lista de transferencia se centra en la optimización de los flujos internos de las UDC entre las diferentes ubicaciones del almacén<!-- magazzino -->.</p>
    </div>
</div>

## Para empezar a utilizar<!-- Per iniziare ad utilizzare -->   

la **Gestión UDC**:
- crear artículos en la [*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item) y definir sus parámetros en la pestaña [Envasado<!-- Confezionamento -->](/docs/erp-home/registers/items/create-new-item)        
- definir un [*Tipo grupo UDC*](/docs/configurations/tables/logistics/loading-unit-group-type/)        
- definir un [*Tipo UDC*](/docs/configurations/tables/logistics/loading-unit-types/)  
- definir correctamente las [*Causales de almacén*<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates) a utilizar       
- definir los [*Parámetros iniciales de almacén*<!-- Parametri iniziali di magazzino -->](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)                      
- crear un empleado en la tabla [Empleados<!-- Dipendenti -->](/docs/project-management/registers/employee/new-employee/)

Además, para **Lista de recogida UDC / Packing list** y **Lista de transferencia UDC**:
- definir un [*Tipo de picking*<!-- Tipo picking -->](/docs/configurations/tables/logistics/picking-type/)      

## Conexiones con otros módulos<!-- Collegamenti con altri moduli -->
Estos están estrechamente conectados al [*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item), a las [*Registro de almacén*<!-- Registrazione di magazzino -->](/docs/logistics/warehouse/stock-records/record) y a todos los documentos que generan movimientos de carga y descarga con las unidades de carga<!-- unità di carico -->.