---
title: Introducción
sidebar_position: 1
---

El módulo se encuentra en el área **Compras > Facturas de compra**. Las facturas de compra son documentos fiscales emitidos por los proveedores a cambio del suministro de bienes o servicios a la empresa y representan la base para el registro contable y el pago a los proveedores. 

## **Configuración preliminar del módulo**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:     
- [**Numeraciones**](/docs/configurations/tables/fluentis-numerations): inserción de las numeraciones a utilizar para las Facturas de Compra.     
- [**Facturado de compras**](/docs/configurations/tables/purchase/purchase-turnover/): definición de las tipologías de Facturado de compras a insertar en los documentos.
- [**Tipos de Facturas de Compra**](/docs/configurations/tables/purchase/purchase-invoices-type): creación y definición de las tipologías de Facturas a utilizar.
- [**Parámetros de Facturas de Compra**](/docs/configurations/parameters/purchase/purchase-invoices-parameters): configuraciones específicas para la gestión de las facturas. 
- [**Parámetros de agrupamiento de facturas de compra**](/docs/configurations/parameters/purchase/invoice-grouping/): definir las condiciones de agrupamiento de los DDT en la factura.


## **Vínculos con otros módulos**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Pedidos de Proveedor</Link>
        <p>La factura puede ser creada mediante la aplicación de uno o más Pedidos de proveedor desde el interior de la factura utilizando el botón Evasión de pedidos.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">DDT de Compra</Link>
        <p>La factura puede ser creada mediante la aplicación de uno o más DDT, tanto desde el interior de la factura utilizando el botón Evasión DDT, como mediante el procedimiento de [Valoración DDT de Compra](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization). </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/subcontractor/subcontractor-returns/insert-returns/search-returns"> Devolución de Trabajo Por Cuenta</Link>
        <p>El procedimiento de *Valoración DDT de devolución* permite generar una factura de compra aplicando uno o más retornos de trabajo por cuenta.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Recepción de mercancías</Link>
        <p>El procedimiento de [Creación de facturas desde Recepción de mercancías](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt) permite la creación de la factura a partir de una recepción de mercancías ya registrada.  </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logística</Link>
        <p>Las facturas de compra de tipo inmediato pueden ser cargadas en el almacén para registrar la llegada de la mercancía y actualizar las existencias de material.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting">Contabilización</Link>
        <p> La contabilización automática de las facturas permite actualizar los registros contables y financieros garantizando la coherencia con el balance de la empresa. </p>
    </div>
</div>