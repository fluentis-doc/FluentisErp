---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo permite al operador crear listas de inventario, poblarlas y comparar los datos de existencias físicas con las existencias lógicas. El sistema, de forma automática y según los parámetros introducidos por el usuario, procederá a la alineación de las existencias lógicas con las físicas, alineando así el almacén informático<!-- magazzino informatico --> con el físico. Una vez realizada esta operación, será posible proceder a la valorización del almacén<!-- magazzino -->.

## Documentos gestionados<!-- I documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Inventarios físicos<!-- Inventari fisici --></Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Inventarios físicos<!-- Inventari fisici --></Link></p>
        <p>Permite a los operadores crear listas de inventario, realizar relevamientos de las existencias físicas y comparar los datos obtenidos con las existencias lógicas presentes en el sistema. A través de un proceso automatizado, Fluentis facilita la alineación entre existencias físicas y lógicas, garantizando así una óptima y precisa gestión de los recursos.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Diferencias de inventario<!-- Differenze inventariali --></Link></p>
        <p>Ofrece una alineación eficaz entre las existencias físicas y lógicas dentro del almacén<!-- magazzino -->. Esta funcionalidad permite a los operadores gestionar y registrar sistemáticamente las discrepancias identificadas, asegurando que cada movimiento de almacén<!-- movimiento de magazzino --> sea rastreado y contabilizado con precisión.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Historial de cierres<!-- Storico chiusura --></Link></p>
        <p>Permite acceder a los datos históricos relativos a los cierres de almacén<!-- chiusure di magazzino -->, permitiendo a los operadores monitorear y analizar las variaciones de las existencias en el tiempo. Esta funcionalidad permite consultar información detallada como el coste último, coste medio y las existencias del almacén<!-- giacenze di magazzino -->, todo realizado mediante el procedimiento de valorización.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Historial de almacén<!-- Storico magazzino --></Link></p>
        <p>Permite a los usuarios consultar los datos históricos relativos a las operaciones del almacén<!-- magazzino -->. Esta funcionalidad permite visualizar un archivo detallado de los cierres y valorizaciones realizados a lo largo del tiempo, ofreciendo la posibilidad de analizar información como el último coste y coste medio de cada artículo, así como las existencias específicas asociadas a cada cierre.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorización de almacén<!-- Valorizzazione magazzino --></Link></p>
        <p>Permite a los operadores realizar cierres de almacén<!-- chiusure di magazzino --> en una fecha específica, registrando los remanentes y permitiendo la alineación de la información logística con la contable, garantizando así una gestión precisa de los recursos y los costes asociados.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Inventario valorizado por cantidad<!-- Inventario quantità valorizzato --></Link></p>
        <p>Permite a las empresas tener una visión clara y detallada de sus existencias. A través de este reporte, los usuarios pueden acceder a información completa no solo sobre las cantidades físicas de los artículos almacenados<!-- presenti in magazzino -->, sino también sobre su valor.</p>
    </div>
</div>

## Para empezar a utilizar<!-- Per iniziare ad utilizzare    -->

los **Inventarios físicos<!-- Inventari fisici -->**:
- crear artículos en el [*Maestro de artículos<!-- Anagrafica articoli -->*](/docs/erp-home/registers/items/create-new-item)        
- definir correctamente las [*Causales de almacén<!-- Causali di magazzino -->*](/docs/configurations/tables/logistics/warehouse-templates) a utilizar       
- definir los [*Parámetros iniciales de almacén<!-- Parametri iniziali di magazzino -->*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          
- definir los [*Parámetros de diferencias de inventario<!-- Parametri differenze inventariali -->*](/docs/configurations/parameters/logistics/stock-difference/)           
- definir un [*Tipo de lista inventarial<!-- Tipo lista inventariale -->*](/docs/configurations/tables/logistics/stock-lists-types/)        
- crear un empleado en la tabla [Empleados<!-- Dipendenti -->](/docs/project-management/registers/employee/new-employee/)


## Conexión con otros módulos<!-- Collegamenti con altri moduli -->
Desde las [*Registraciones de almacén<!-- Registrazione di magazzino -->*](/docs/logistics/warehouse/stock-records/record) es posible visualizar los resultados del **inventario** y de los **cierres de almacén<!-- chiusure di magazzino -->**.