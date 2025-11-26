---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo se encuentra en el área **Compras > Órdenes de proveedores<!-- Acquisti > Ordini fornitori -->** y representa uno de los pasos intermedios del ciclo pasivo<!-- ciclo passivo -->. Las órdenes de compra<!-- ordini di acquisto --> son documentos formales emitidos por el departamento de *Compras<!-- Acquisti -->*, utilizados para solicitar bienes o servicios a un proveedor, bajo condiciones predefinidas. Contienen los detalles relativos a los productos o servicios a adquirir, incluyendo cantidades, precios, condiciones de entrega, condiciones de pago y otras especificaciones contractuales.   

## **Configuración preliminar del módulo**<!-- Configurazione preliminare del modulo -->

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:     
- [**Numeraciones**](/docs/configurations/tables/fluentis-numerations): ingreso de las numeraciones que se utilizarán para las órdenes<!-- ordini -->.       
- [**Tipos de órdenes de proveedores**](/docs/configurations/tables/purchase/purchase-orders-type): creación y definición de los tipos de orden que se utilizarán.
- [**Parámetros de órdenes de proveedores**](/docs/configurations/parameters/purchase/purchase-orders-parameters): configuraciones específicas para la gestión de las órdenes de proveedores<!-- ordini fornitore -->. 

## **Vínculos con otros módulos**<!-- Collegamenti con altri moduli -->

Las órdenes de compra<!-- ordini di acquisto --> pueden ingresar manualmente o crearse automáticamente a partir de documentos preexistentes. Los métodos de generación automática incluyen:    

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Solicitudes de Compra<!-- Richieste di Acquisto --></Link>
        <p>El procedimiento de [Creación automática de órdenes](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) permite la generación de órdenes de proveedores<!-- Ordini fornitore --> a partir de Solicitudes de Compra<!-- Richieste di Acquisto --> autorizadas.     </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Solicitudes de Oferta<!-- Richieste di Offerta --></Link>
        <p>Las órdenes de compra<!-- Ordini di acquisto --> pueden generarse desde Solicitudes de Oferta<!-- Richieste di offerta --> mediante el procedimiento de [Creación de Orden de proveedor desde Oferta de proveedor](/docs/purchase/offer-request/procedures/order-creation). </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Órdenes de Clientes<!-- Ordini Clienti --></Link>
        <p>El procedimiento de *Creación automática de órdenes* permite también la creación de una *Orden de proveedor* a partir de una *Orden de cliente*. Alternativamente, es posible generar una orden de compra<!-- ordine di acquisto --> desde el filtro de [Búsqueda de órdenes de clientes](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders) mediante el botón *Creación de órdenes de proveedores*.         </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-job-order/general-overview">Órdenes de trabajo de compra<!-- Commesse di Acquisto --></Link>
        <p>Las órdenes de compra<!-- Ordini di acquisto --> también pueden generarse a través de la *ejecución* total o parcial de una orden de trabajo de compra<!-- commessa di acquisto -->, basada en contratos predefinidos y ya negociados con el proveedor.  </p>
    </div>
</div>


Una vez confirmado, la orden de compra<!-- ordine di acquisto --> puede completarse mediante una guía de despacho (DDT) o una factura. Esto permite el registro de la mercancía en el almacén<!-- magazzino --> y la posterior contabilización de la factura dentro del sistema, manteniendo un control preciso del inventario y de los flujos financieros.

El módulo también ofrece la posibilidad de crear la [recepción de mercancía](/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure), permitiendo al usuario completar la orden de proveedor<!-- ordine fornitore -->, registrar la llegada de los bienes, ubicarlos en el almacén<!-- magazzino --> o en las ubicaciones predefinidas, y proceder posteriormente a la carga oficial de la mercancía en almacén<!-- magazzino -->.