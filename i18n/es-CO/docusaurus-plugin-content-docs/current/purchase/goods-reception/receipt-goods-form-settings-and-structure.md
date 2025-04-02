---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo se encuentra en el área de compras **ricevimento merci** y representa un paso intermedio que permite registrar la llegada de la mercancía enviada por un proveedor, de modo que se actualicen las existencias en el almacén sin necesidad de crear primero el Documento de Transporte (DDT) o la Factura de compra.

## **Configuración preliminar del módulo (Configurazione preliminare del modulo)**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones (Numerazioni)**](/docs/configurations/tables/fluentis-numerations): ingreso de numeraciones a utilizar para las recepciones de mercancías.  
- [**tipi ricevimento merci**](/docs/configurations/tables/purchase/goods-receipt-types)  
- [**parametri ordini fornitori**](/docs/configurations/parameters/purchase/purchase-orders-parameters): en la pestaña *carico* se deben indicar los parámetros a utilizar para la *Carga de recepción* de mercancías. 

## **Conexiones con otros módulos (Collegamenti con altri moduli)**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logística (Logistica)</Link>
        <p>La recepción de mercancías puede ser cargada en el almacén mediante el [procedimiento apropiado (procedura)](/docs/purchase/goods-reception/procedures/good-receipt-load).  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">DDT y Facturas de Compra (DDT e Fatture di Acquisto)</Link>
        <p>A partir de una recepción de mercancías es posible realizar la [Creación de un DDT de compra (Creazione di un DDT di acquisto)](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) o de una [Factura de compra (Fattura di acquisto)](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).  </p>
    </div>
</div>