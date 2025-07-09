---
title: Introducción
sidebar_position: 1
---

El módulo se encuentra en el área de **Compras (Acquisti) > Recepción de Mercancías (Ricevimento merci)** y representa un paso intermedio que permite registrar la llegada de la mercancía enviada por un proveedor, de modo que se actualicen las existencias de almacén sin tener que crear previamente la nota de entrega (Documento di Trasporto) (DDT) o la factura de compra.

## **Configuración preliminar del módulo (Configurazione preliminare del modulo)**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones (Numerazioni)**](/docs/configurations/tables/fluentis-numerations): inserción de las numeraciones que se utilizarán para las recepciones de mercancía.  
- [**Tipos de Recepción de Mercancías (Tipi ricevimento merci)**](/docs/configurations/tables/purchase/goods-receipt-types)  
- [**Parámetros de pedidos de proveedores (Parametri ordini fornitori)**](/docs/configurations/parameters/purchase/purchase-orders-parameters): en la pestaña *Carga (Carico)* se deben indicar los parámetros a utilizar para la *Carga (Carico) de Recepción de Mercancías (ricevimento merci)*.

## **Conexiones con otros módulos (Collegamenti con altri moduli)**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logística (Logistica)</Link>
        <p>La recepción de mercancías puede cargarse en almacén mediante la [procedura (procedura)](/docs/purchase/goods-reception/procedures/good-receipt-load).  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Nota de entrega (DDT) y Facturas de compra (Fatture di acquisto)</Link>
        <p>A partir de una recepción de mercancías es posible realizar la [Creación de una nota de entrega de compra (Creazione di un DDT di acquisto)](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) o una [Factura de compra (Fattura di acquisto)](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).  </p>
    </div>
</div>