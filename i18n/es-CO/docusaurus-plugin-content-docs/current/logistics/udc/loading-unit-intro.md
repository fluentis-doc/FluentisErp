---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo de las UDC permite a los operadores gestionar las unidades de carga, su creación, su movimiento en el almacén y su venta.  
Las UDC pueden ser creadas manualmente o mediante WMS Mobile. Normalmente, las UDC son utilizadas por las empresas que gestionan el almacén en pallets o que, en fase de venta, crean una UDC de envío con todos los artículos que se van a enviar.

## Documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">UDC</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Gestión de UDC (Gestione UDC)</Link></p>
        <p>Permite a los operadores gestionar todo el ciclo de vida de las UDC, desde su creación hasta el movimiento, y hasta la venta. Las UDC pueden ser creadas manualmente o a través de WMS Mobile, lo que hace que el sistema sea versátil y adaptable a diversas necesidades operativas.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista de recogida UDC / Packing list</Link></p>
        <p>Ofrece un método innovador para gestionar la recogida de unidades de carga, en contraposición al procedimiento tradicional de picking basado en artículos individuales. Esta funcionalidad es especialmente útil cuando se desea enviar mercancía a un cliente, permitiendo agrupar artículos dentro de unidades de carga predefinidas.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista de transferencia UDC</Link></p>
        <p>Permite gestionar los movimientos de las Unidades de Carga dentro de sus propios almacenes, ofreciendo un método sistemático e intuitivo para la transferencia de mercancía. A diferencia de la Lista de Recogida UDC, que se utiliza para el envío a clientes, la lista de transferencia se centra en la optimización de los flujos internos de las UDC entre las diversas ubicaciones del almacén.</p>
    </div>
</div>

## Para comenzar a utilizar (Per iniziare ad utilizzare)

la **gestione udc**:
- crear artículos en la [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item) y definir sus parámetros en la pestaña [Empaquetado (Confezionamento)](/docs/erp-home/registers/items/create-new-item)        
- definir un [*tipo gruppo udc*](/docs/configurations/tables/logistics/loading-unit-group-type/)        
- definir un [*Tipo UDC (Tipo UDC)*](/docs/configurations/tables/logistics/loading-unit-types/)  
- definir correctamente las [*causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) a utilizar       
- definir los [*Parámetros iniciales de almacén (Parametri iniziali di magazzino)*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)                      
- crear un empleado en la tabla [Empleados (Dipendenti)](/docs/project-management/registers/employee/new-employee/)

además, para la **Lista de recogida UDC / Packing list** y **Lista de transferencia UDC**:
- definir un [*tipo picking*](/docs/configurations/tables/logistics/picking-type/)      

## Conexiones con otros módulos (Collegamenti con altri moduli)  
Estos están estrechamente relacionados con la [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item), los [*registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) y todos los documentos que generan movimientos de carga y descarga con las unidades de carga.