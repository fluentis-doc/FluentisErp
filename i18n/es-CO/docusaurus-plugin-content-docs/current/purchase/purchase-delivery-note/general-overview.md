---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo se encuentra en el área **acquisto**. El DDT se genera cuando un proveedor envía la mercancía ordenada. Este módulo permite registrar los movimientos de los bienes entrantes, facilitando el control y la trazabilidad de la mercancía recibida y permitiendo una gestión precisa del material disponible en el almacén.

## **Configuración preliminar del módulo (Configurazione preliminare del modulo)**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones (Numerazioni)**](/docs/configurations/tables/fluentis-numerations): inserción de las numeraciones a utilizar para los DDT de Compra.  
- [**fatturato acquisti**](/docs/configurations/tables/purchase/purchase-turnover/): definición de los tipos de Fatturato de compras que se deben insertar en los documentos.
- [**Tipi DDT (Tipi DDT)**](/docs/configurations/tables/purchase/purchase-orders-type): creación y definición de los tipos de DDT a utilizar.
- [**Parametri DDT acquisto (Parametri DDT acquisto)**](/docs/configurations/parameters/purchase/purchase-orders-parameters): configuraciones específicas para la gestión de los DDT.

## **Conexiones con otros módulos (Collegamenti con altri moduli)**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Órdenes de Proveedor (Ordini Fornitore)</Link>
        <p>El DDT puede ser creado mediante la ejecución de una o más Órdenes de proveedor, tanto desde dentro del DDT utilizando el botón Evasión por órdenes, como a través del [procedimiento]( /docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders). </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Recepción de mercancías (Ricevimento merci)</Link>
        <p>El procedimiento de [Creación de DDT desde la Recepción de mercancías](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) permite la creación incluso cuando el pedido ya ha sido cumplido dentro de una *Recepción de mercancías*. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logística (Logistica)</Link>
        <p>Una vez generado y controlado, el DDT de compra puede ser [cargado en almacén](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) para registrar la llegada de la mercancía y actualizar los inventarios de material. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Facturas de Compra (Fatture di Acquisto)</Link>
        <p>El procedimiento de [Valoración del DDT de compra](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) permite la creación de Facturas a partir de las facturas de compra. </p>
    </div>
</div>