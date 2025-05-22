---
title: acquisti
sidebar_position: 1
---

La gestión de **acquisti** de Fluentis ERP está diseñada para apoyar a los operadores empresariales en la gestión rápida de toda la documentación relacionada con la gestión de la cadena de suministro (Supply Chain).

A través de la emisión de órdenes de suministro, que pueden realizarse de manera manual o automática, es posible proceder con el aprovisionamiento de mercancías destinadas a la gestión de la producción o del almacén, así como la creación de todos los documentos necesarios para el proceso de suministro, incluyendo *ddt di acquisto*, *fatture*, *richieste di acquisto*, *richieste di offerta*.

La interconexión con el área de **Logística** garantiza la actualización de existencias y la generación de solicitudes de reintegro de inventario, mientras que la integración con el área de **Administración** facilita la gestión financiera de las compras, asegurando un proceso fluido y el registro preciso de las transacciones.
El área de *Compras* también está integrada con la **Planificación** a través de la generación de RDA a partir de solicitudes de material necesario para la producción y con el área de **Ventas** gracias a la posibilidad de generar órdenes de proveedor a partir de órdenes de clientes.

## Módulos del área (Moduli dell'area)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Solicitudes de compra (Richieste di acquisto)</Link>
        <p>Elaboración de la solicitud de material a comprar a partir de solicitudes provenientes de otros departamentos o reportes de faltantes.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Solicitudes de oferta (Richieste di offerta)</Link>
        <p>Comparación de presupuestos de proveedores para elegir la mejor oferta y transformarla en orden de compra.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Órdenes de proveedores (Ordini fornitori)</Link>
        <p>Gestión y organización del proceso de compra de bienes y servicios de los proveedores.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Recepción de mercancías (Ricevimento merci)</Link>
        <p>Registro de la llegada de la mercancía antes de la creación del DDT o la factura de compra.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">DDT de compra (DDT di acquisto)</Link>
        <p>Seguimiento y documentación de la transferencia de mercancías entrantes y registro en el almacén.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Facturas de compra (Fatture di acquisto)</Link>
        <p>Acreditación del importe adeudado por la empresa a un proveedor por bienes o servicios recibidos, especificando los costos, el IVA y las condiciones de pago.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-price-lists/general-overview">Listas de precios de proveedores (Listini fornitori)</Link>
        <p>Gestión y actualización de los precios acordados con los proveedores, automatizando la aplicación de precios, descuentos y eventuales condiciones personalizadas.</p>
    </div>
    <div className="card">
###     Commisiones de compra
        <p>Gestión de comisiones de compra basadas en contratos previamente negociados con el proveedor.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     Gestión de precios (Gestione prezzi)
        <p><Link to="/docs/purchase/price-control/definition" className="bold-link">Definición políticas de descuentos (Definizione politiche sconti)</Link></p>
        <p>Aplicación de descuentos asociados al proveedor, a la clase de artículo y/o a las categorías de descuento.</p>
        <p><Link to="/docs/purchase/price-control/formulas" className="bold-link">Fórmulas de actualización políticas de precios/descuentos (Formule di aggiornamento politiche prezzi/sconti)</Link></p>
        <p>Definición de las reglas de actualización de precios en las listas de compra/venta.</p>
        <p><Link to="/docs/purchase/price-control/correspondence" className="bold-link">Correspondencia categorías descuento compra/venta (Corrispondenza categorie sconto acq//ven)</Link></p>
        <p>Asociación de la categoría de descuento genérica a las condiciones de descuento que se aplicarán a sus clientes/proveedores.</p>
    </div>
</div>

## Inicio rápido (Fast start)

:::important ATENCIÓN (ATTENZIONE)
Antes de utilizar las funcionalidades disponibles, es necesario configurar las Tablas y Parámetros del área.

Alternativamente, está disponible el procedimiento de Inicio Rápido descrito a continuación.
:::

El Inicio Rápido es un procedimiento diseñado para simplificar y acelerar la inicialización del software de gestión, permitiendo poblar automáticamente el sistema con parámetros y tablas básicas. Esta funcionalidad reduce significativamente el tiempo y el esfuerzo requerido para la configuración inicial, evitando la entrada manual de cada configuración.
 
Recomendamos consultar el [artículo relacionado](/docs/guide/fast-start) antes de abordar el módulo.