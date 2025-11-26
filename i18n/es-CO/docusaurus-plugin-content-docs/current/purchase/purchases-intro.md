---
title: COMPRAS
sidebar_position: 1
ai_generated: true
---

La gestión de **Compras<!-- Acquisti -->** en Fluentis ERP está diseñada para apoyar a los operadores de la empresa en la gestión rápida de toda la documentación relacionada con la gestión de la cadena de suministro<!-- Supply Chain -->.

Mediante la emisión de órdenes de suministro<!-- ordini di fornitura -->, que pueden realizarse de forma manual o automática, es posible proceder con el aprovisionamiento de mercancías destinadas a la gestión de la producción o del almacén<!-- magazzino -->, así como la creación de todos los documentos necesarios para el proceso de suministro, entre los que se incluyen *Note de entrega de compra<!-- DDT di acquisto -->*, *Facturas<!-- Fatture -->*, *Solicitudes de compra<!-- Richieste di Acquisto -->*, *Solicitudes de oferta<!-- Richieste di Offerta -->*.

La interconexión con el área de **Logística<!-- Logistica -->** garantiza la actualización de los inventarios<!-- giacenze --> y la generación de solicitudes de reposición de existencias, mientras que la integración con el área de **Administración<!-- Amministrazione -->** facilita la gestión financiera de las compras<!-- acquisti -->, asegurando un proceso fluido y el registro preciso de las transacciones.  
El área de *Compras<!-- Acquisti -->* también está integrada con la **Planificación<!-- Pianificazione -->** mediante la generación de Solicitudes de compra<!-- RDA --> a partir de solicitudes de material necesario para la producción y con el área de **Ventas<!-- Vendite -->** gracias a la posibilidad de generar órdenes de proveedor<!-- ordini fornitore --> a partir de pedidos de cliente.

## Módulos del área<!-- Moduli dell'area -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Solicitudes de compra<!-- Richieste di acquisto --></Link>
        <p>Elaboración de solicitudes de material a comprar a partir de solicitudes provenientes de otros departamentos o reportes de faltantes. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Solicitudes de oferta<!-- Richieste di offerta --></Link>
        <p>Comparación de cotizaciones de los proveedores para elegir la mejor oferta y transformarla en una orden de compra.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Órdenes de proveedores<!-- Ordini fornitori --></Link>
        <p>Gestión y organización del proceso de compra de bienes y servicios a proveedores. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Recepción de mercancía<!-- Ricevimento merci --></Link>
        <p>Registro de la llegada de la mercancía antes de la creación de la nota de entrega<!-- DDT --> o de la factura de compra. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">Nota de entrega de compra<!-- DDT di acquisto --></Link>
        <p>Rastreo y documentación de la transferencia de entrada de las mercancías<!-- merci --> y registro en el almacén<!-- magazzino -->. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Facturas de compra<!-- Fatture di acquisto --></Link>
        <p>Acreditación del importe que la empresa debe a un proveedor por bienes o servicios recibidos, especificando los costos, el IVA y las condiciones de pago. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-price-lists/general-overview">Listas de precios de proveedores<!-- Listini fornitori --></Link>
        <p>Gestión y actualización de los precios acordados con los proveedores, automatizando la aplicación de precios, descuentos y eventuales condiciones personalizadas. </p>
    </div>
    <div className="card">
###     Comandas de compra<!-- Commesse di acquisto -->
        <p>Gestión de comandas<!-- commesse --> de compra en base a contratos previamente negociados con el proveedor. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     Gestión de precios<!-- Gestione prezzi -->
        <p><Link to="/docs/purchase/price-control/definition" className="bold-link">Definición de políticas de descuento<!-- Definizione politiche sconti --></Link></p>
        <p>Aplicación de descuentos asociados al proveedor, a la clase de artículo y/o a las categorías de descuento.</p>
        <p><Link to="/docs/purchase/price-control/formulas" className="bold-link">Fórmulas de actualización de políticas de precios/descuentos<!-- Formule di aggiornamento politiche prezzi/sconti --></Link></p>
        <p>Definición de las reglas de actualización de precios en las listas de precios de compra/venta.</p>
        <p><Link to="/docs/purchase/price-control/correspondence" className="bold-link">Correspondencia de categorías de descuento compr/vent<!-- Corrispondenza categorie sconto acq//ven --></Link></p>
        <p>Asociación de la categoría de descuento genérica con las condiciones de descuento a aplicar a sus clientes/proveedores.</p>
    </div>
</div>

## Inicio rápido<!-- Fast start -->

:::important IMPORTANTE<!-- ATTENZIONE -->
Antes de utilizar las funcionalidades disponibles es necesario configurar las Tablas y los Parámetros del área.

De forma alternativa está disponible el procedimiento de Inicio rápido<!-- Fast Start --> que se describe a continuación.
:::

El Inicio rápido<!-- Fast Start --> es un procedimiento diseñado para simplificar y acelerar la inicialización del software de gestión, permitiendo poblar automáticamente el sistema con parámetros y tablas básicas. Esta funcionalidad reduce notablemente el tiempo y el esfuerzo requerido para la configuración inicial, evitando el ingreso manual de cada ajuste individual.

Recomendamos consultar el [artículo](/docs/guide/fast-start) correspondiente antes de abordar el módulo.