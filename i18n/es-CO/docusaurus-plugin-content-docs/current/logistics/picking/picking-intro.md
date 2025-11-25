---
title: Introducción
sidebar_position: 1
ai_generated: true
---

La introducción a la gestión de picking de Fluentis se centra en la creación y gestión eficiente de listas de recogida<!-- picking, liste di prelievo --> para optimizar las operaciones logísticas<!-- operazioni logistiche --> dentro de las empresas. El sistema permite generar picking a partir de artículos individuales mediante procedimientos simples y rápidos, como la inserción automática de los artículos<!-- articoli --> a través de pedidos de clientes<!-- ordini clienti -->, lo que facilita el proceso de cumplimiento<!-- evasione -->.
Los picking pueden ser introducidos manualmente o automáticamente, por ejemplo, desde los planes de carga<!-- piani di carico -->. A partir del picking es posible crear un documento de transporte<!-- documento di trasporto --> o la factura<!-- fattura -->.
La gestión de picking de Fluentis representa un elemento crucial para la optimización de las operaciones logísticas<!-- operazioni logistiche -->, garantizando eficiencia y un alto nivel de control sobre los procesos de recogida<!-- prelievo --> y movimiento<!-- movimentazione --> de los artículos<!-- articoli -->.

## Los documentos gestionados<!-- I documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-management">Picking</Link>
        <p>Esta funcionalidad permite a los usuarios generar listas de recogida<!-- liste di prelievo --> de forma eficiente, partiendo de los diferentes tipos de picking<!-- tipologie di picking --> configurables en el sistema. A través de la creación de un picking, los operadores pueden seleccionar los artículos<!-- articoli --> a despachar, definiendo detalles clave como la cantidad y la ubicación de recogida<!-- ubicazione di prelievo -->.</p> 
    </div>
</div>

## Para comenzar a utilizar<!-- Per iniziare ad utilizzare -->   

el **Picking**:
- definir un [*Tipo picking*](/docs/configurations/tables/logistics/picking-type/)      
- definir los [*Parámetros de picking*](//docs/configurations/parameters/logistics/picking-parameters/)        
- definir correctamente las [*Causales de almacén*](/docs/configurations/tables/logistics/warehouse-templates)<!-- Causali di magazzino --> a utilizar
- crear los artículos<!-- articoli --> en la [*Ficha de artículos*](/docs/erp-home/registers/items/create-new-item)<!-- Anagrafica articoli -->

## Conexión con otros módulos<!-- Collegamenti con altri moduli -->
Es posible generar un picking manualmente, pero también a partir de una [Lista de recogida de materiales<!-- Liste prelievo materilali -->](/docs/production/pp-production-in-progress/picking-materials-list).
Además, desde un picking es posible crear directamente [Notas de entrega (DDT)<!-- DDT -->](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) y [Facturas<!-- Fatture -->](/docs/sales/sales-invoices/general-overview) de venta.