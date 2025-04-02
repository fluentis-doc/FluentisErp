---
title: Introducción (Introduzione)
sidebar_position: 1
---

La introducción a la gestión de picking de Fluentis se centra en la creación y gestión eficiente de las listas de recogida para optimizar las operaciones logísticas dentro de las empresas. El sistema permite generar picking de artículos individuales a través de procedimientos simples y rápidos, como la inserción automática de artículos mediante pedidos de clientes, lo que facilita el proceso de cumplimiento.  
Los pickings se pueden introducir manualmente o automáticamente, por ejemplo, a partir de los planes de carga. A partir del Picking, es posible crear un documento de transporte o una factura.  
La gestión de picking de Fluentis representa un elemento crucial para la optimización de las operaciones logísticas, garantizando eficiencia y un alto nivel de control sobre los procesos de recogida y movimiento de artículos.

## Los documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-management">Picking</Link>
        <p>Esta funcionalidad permite a los usuarios generar listas de recogida de manera eficiente, comenzando por los diferentes tipos de picking configurables en el sistema. A través de la creación de un picking, los operadores pueden seleccionar los artículos a cumplir, definiendo detalles cruciales como la cantidad y la ubicación de recogida.</p> 
    </div>
</div>

## Para empezar a utilizar (Per iniziare ad utilizzare)  

el **Picking**:  
- definir un [*tipo picking*](/docs/configurations/tables/logistics/picking-type/)  
- definir los [*parametri picking*](//docs/configurations/parameters/logistics/picking-parameters/)  
- definir correctamente las [*causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates) a utilizar  
- crear artículos en la [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)  

## Conexiones con otros módulos (Collegamenti con altri moduli)  
Es posible generar un picking manualmente, pero también desde una [Lista de materiales de recogida (Liste prelievo materilali)](/docs/production/pp-production-in-progress/picking-materials-list).  
Además, desde un picking es posible crear directamente [DDT (DDT)](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) y [Facturas (Fatture)](/docs/sales/sales-invoices/general-overview) de venta.