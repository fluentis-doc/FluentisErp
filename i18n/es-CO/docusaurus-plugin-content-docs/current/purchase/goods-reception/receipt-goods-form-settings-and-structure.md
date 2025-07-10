---
title: Introducción
sidebar_position: 1
---

El módulo se encuentra en el área de **Compras > Recepción de Mercancías** y representa un paso intermedio que permite registrar la llegada de la mercancía enviada por un proveedor, de modo que se actualicen las existencias de almacén sin tener que crear previamente la nota de entrega (DDT) o la factura de compra.

## **Configuración preliminar del módulo**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones**](/docs/configurations/tables/fluentis-numerations): inserción de las numeraciones que se utilizarán para las recepciones de mercancía.  
- [**Tipos de Recepción de Mercancías**](/docs/configurations/tables/purchase/goods-receipt-types)  
- [**Parámetros de pedidos de proveedores**](/docs/configurations/parameters/purchase/purchase-orders-parameters): en la pestaña *Carga* se deben indicar los parámetros a utilizar para la *Carga de Recepción de Mercancías*.

## **Conexiones con otros módulos**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logística</Link>
        <p>La recepción de mercancías puede cargarse en almacén mediante la [procedura](/docs/purchase/goods-reception/procedures/good-receipt-load).  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Nota de entrega (DDT) y Facturas de compra</Link>
        <p>A partir de una recepción de mercancías es posible realizar la [Creación de una nota de entrega de compra](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) o una [Factura de compra](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).  </p>
    </div>
</div>