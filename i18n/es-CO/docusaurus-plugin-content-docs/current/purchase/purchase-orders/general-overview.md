---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo se encuentra en el área **Compras > Pedidos de proveedores (Acquisti > Ordini fornitori)** y representa uno de los pasos intermedios del ciclo pasivo. Los pedidos de compra son documentos formales emitidos por el departamento de *acquisti*, utilizados para solicitar bienes o servicios a un proveedor, según condiciones predeterminadas. Contienen los detalles relacionados con los productos o servicios a adquirir, incluidos cantidades, precios, términos de entrega, condiciones de pago y otras especificaciones contractuales.

## **Configuración preliminar del módulo (Configurazione preliminare del modulo)**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones (Numerazioni)**](/docs/configurations/tables/fluentis-numerations): ingreso de las numeraciones a utilizar para los pedidos.  
- [**Tipos de pedidos de proveedores (Tipi ordini fornitori)**](/docs/configurations/tables/purchase/purchase-orders-type): creación y definición de los tipos de pedido a utilizar.
- [**parametri ordini fornitori**](/docs/configurations/parameters/purchase/purchase-orders-parameters): configuraciones específicas para la gestión de pedidos de proveedores.  

## **Conexiones con otros módulos (Collegamenti con altri moduli)**

Los pedidos de compra se pueden ingresar manualmente o crear automáticamente a partir de documentos preexistentes. Las modalidades de generación automática incluyen:  

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Solicitudes de Compra (Richieste di Acquisto)</Link>
        <p>El procedimiento de [Creación automática de pedidos (Creazione automatica ordini)](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) permite la creación de pedidos de proveedores a partir de solicitudes de compra autorizadas.     </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Solicitudes de Oferta (Richieste di Offerta)</Link>
        <p>Los pedidos de compra pueden generarse a partir de solicitudes de oferta mediante el procedimiento de [Creación de Pedido de proveedor desde Oferta de proveedor (Creazione Ordine fornitore da Offerta fornitore)](/docs/purchase/offer-request/procedures/order-creation). </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Pedidos de Clientes (Ordini Clienti)</Link>
        <p>El procedimiento de *creazione automatica ordini* también permite la creación de un *Pedido de proveedor* a partir de un *Pedido de cliente*. Alternativamente, es posible generar un pedido de compra desde el filtro de [Búsqueda de Pedidos de clientes (Ricerca Ordini clienti)](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders) mediante el botón *Creación de pedidos de proveedores (Creazione ordini fornitori)*.         </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-job-order/general-overview">Órdenes de Compra (Commesse di Acquisto)</Link>
        <p>Los pedidos de compra también pueden generarse a través de la *evasión* total o parcial de una orden de compra, basada en contratos predefinidos y ya negociados con el proveedor.  </p>
    </div>
</div>

Una vez confirmado, el pedido de compra puede ser cumplido mediante un DDT o una factura. Esto permite el registro de la mercancía en el almacén y la posterior contabilización de la factura dentro del sistema, manteniendo un control preciso de las existencias y de los flujos financieros.

El módulo también ofrece la posibilidad de crear el [recibo de mercancía (ricevimento della merce)](/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure), permitiendo al operador cumplir el pedido de proveedor, registrar la llegada de los bienes, ubicarlos en el almacén o en las ubicaciones predefinidas, y proceder posteriormente con la carga oficial de las mercancías en el almacén.