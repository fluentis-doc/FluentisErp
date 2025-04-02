---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo permite al operador crear listas de inventario, poblarlas y comparar los datos sobre las existencias físicas con las existencias lógicas. El sistema, de manera automática y según los parámetros ingresados por el usuario, procederá a la alineación de las existencias lógicas con las físicas, alineando así el inventario informático con el físico. Una vez realizada esta operación, será posible proceder a la valorización del inventario.

## Los documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Inventarios físicos (Inventari fisici)</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Inventarios físicos (Inventari fisici)</Link></p>
        <p>Permite a los operadores crear listas de inventario, llevar a cabo mediciones de las existencias físicas y comparar los datos obtenidos con las existencias lógicas presentes en el sistema. A través de un proceso automatizado, Fluentis facilita la alineación entre las existencias físicas y lógicas, garantizando así una optimización precisa de la gestión de recursos.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Diferencias de inventario (Differenze inventariali)</Link></p>
        <p>Garantiza una alineación efectiva entre las existencias físicas y lógicas dentro del inventario. Esta funcionalidad permite a los operadores gestionar y registrar sistemáticamente las discrepancias identificadas, asegurando que cada movimiento de inventario sea rastreado y contabilizado de manera precisa.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Historial de cierres (Storico chiusura)</Link></p>
        <p>Permite el acceso a datos históricos relacionados con los cierres de inventario, permitiendo a los operadores monitorear y analizar las variaciones de las existencias a lo largo del tiempo. Esta funcionalidad permite consultar información detallada como el costo último, el costo medio y las existencias de inventario, todo realizado a través del procedimiento de valorización.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Historial de inventario (Storico magazzino)</Link></p>
        <p>Permite a los usuarios consultar los datos históricos relacionados con las operaciones de inventario. Esta funcionalidad permite visualizar un archivo detallado de los cierres y valorizaciones realizadas a lo largo del tiempo, ofreciendo la posibilidad de analizar información como el costo último y medio de cada artículo, así como las existencias específicas asociadas a cada cierre.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorización de inventario (Valorizzazione magazzino)</Link></p>
        <p>Permite a los operadores realizar cierres de inventario en una fecha específica, registrando los saldos y permitiendo la alineación de la información logística con la contable, garantizando así una gestión precisa de los recursos y los costos asociados.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Inventario valorizado con cantidad (Inventario quantità valorizzato)</Link></p>
        <p>Garantiza a las empresas tener una visión clara y detallada de sus existencias. A través de este informe, los usuarios pueden acceder a información completa no solo sobre las cantidades físicas de los artículos presentes en inventario, sino también sobre su valor.</p>
    </div>
</div>

## Para comenzar a utilizar (Per iniziare ad utilizzare)

los **inventari fisici**:  
- crear artículos en la [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)        
- definir correctamente las [*causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) a utilizar       
- definir los [*Parámetros iniciales de inventario (Parametri iniziali di magazzino)*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          
- definir los [*parametri differenze inventariali*](/docs/configurations/parameters/logistics/stock-difference/)           
- definir un [*Tipo de lista de inventario (Tipo lista inventariale)*](/docs/configurations/tables/logistics/stock-lists-types/)        
- crear un empleado en la tabla [Empleados (Dipendenti)](/docs/project-management/registers/employee/new-employee/)

## Conexiones con otros módulos (Collegamenti con altri moduli)  
Desde la [*registrazione di magazzino*](/docs/logistics/warehouse/stock-records/record) es posible visualizar los resultados del **inventario** y de los **cierres de inventario**.