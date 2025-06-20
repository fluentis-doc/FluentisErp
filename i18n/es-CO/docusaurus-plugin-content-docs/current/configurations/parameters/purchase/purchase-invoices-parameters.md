---
title: Parámetros de Facturas de Compras
sidebar_position: 4
tags: [Facturas de Compra]
keywords: [Facturas de Compra]
---

Los parámetros de las facturas de compra permiten la configuración básica para gestionarlas correctamente y de acuerdo con las solicitudes específicas de cada empresa.

La ventana está compuesta por botones y tres pestañas diferentes: *General*, *Cargar* y *Analítico*.

### General 

**Gestión de unidad de medida doble**: al activar este indicador, es posible gestionar las unidades de medida alternativas en las facturas de compra. Estas deben ser ingresadas para cada línea de artículo en la pestaña *datos*.

**Propuesta automática de UM alternativa**: esta casilla se habilita solo si *Gestión de unidad de medida doble* está activa. Cuando se ingresa un artículo que tiene en su registro de unidad de medida alternativa una UM Alternativa por defecto, esta UM se propone automáticamente como UM Alternativa del artículo y se calcula también la cantidad alternativa usando el factor de conversión correspondiente.

**Costo cero si faltan las listas de precios**: si está activo, en ausencia de un listado válido, se poblará el precio con un valor de cero. En caso de que esta opción no esté marcada, el campo se valorizará con el último costo del artículo, si está presente.

**Tipo de factura**, **tasa de IVA**, **tipo de rotación**: aquí se establecen los valores por defecto que se utilizarán en la creación de facturas a partir de órdenes.

**Lotes y S.N. (Serial Number) obligatorios**: si está activo, obliga al usuario a ingresar el lote y el número de serie a nivel de línea de artículo para todos los artículos para los cuales se prevé esta gestión. Si no está activo, el lote y el número de serie no son datos obligatorios y será posible guardar el documento sin haberlos ingresado. Se recomienda activar este indicador si se utiliza la gestión de artículos con lote.

**Buscar el precio del artículo en todas las listas de precios por defecto**: este parámetro se utiliza para la búsqueda del precio en las listas de proveedores; la búsqueda se realiza en las listas del tipo predeterminado en el registro del proveedor, incluso si las listas no son válidas (las listas válidas son aquellas que tienen una fecha de inicio de validez \<= a la fecha actual y una fecha de fin de validez nula o >= a la fecha actual).

**Permitir descuentos para artículos de regalo**: si está activo, permite la inserción de descuentos en las líneas de artículos tipo regalo;

**Utilice el artículo del proveedor**: si está activo, en la cuadrícula de artículos del documento también se propone el campo para ingresar el código de artículo del proveedor. Si no está activo, este campo no será visible;

**Verifique los artículos en agotamiento**: si está activado, el sistema realiza un control sobre la disponibilidad de los artículos ingresados en la factura y avisa si el artículo está en agotamiento, es decir, si en el [Registro de artículos](/docs/erp-home/registers/items/create-new-item) el indicador *En agotamiento* está activo.

**Contabilidad de empaques**:  permite contabilizar, en la contabilidad general, también las líneas con artículos de naturaleza de embalaje que normalmente se gestionan para tener la verificación de las existencias de los [Paquete a ser devuelto](/docs/configurations/tables/logistics/package-to-be-returned).

**Mantener el precio del pedido de compra para los soportes**: se utiliza en el cumplimiento de los órdenes en factura en caso de que la cantidad cumplida sea diferente (normalmente parcial) de la cantidad ordenada para la cual se ha informado un precio o un descuento por tramo de cantidad. Si el precio o el descuento no dependen de la cantidad entregada, sino solo de la cantidad en pedido, este indicador debe estar activado; si, en cambio, el precio o el descuento por tramo no deben ser ingresados en el documento de entrega en caso de que el cumplimiento no ocurra por la cantidad total del pedido, el indicador no debe activarse.

**Activar el Control de Calidad**: trabajo en progreso.

### Carga 

**Crear grabación con fecha del documento**: si este indicador está activo, el registro de almacén se realiza con la misma fecha de la factura. Si no está activo, se lleva a cabo con la *Fecha de carga* indicada en el encabezado de la factura, si está presente; de lo contrario, con la *Fecha de contabilización del almacén* indicada en el procedimiento de [Carga de Facturas de Compra de Almacén)](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). Si el registro se realiza desde dentro de la factura mediante el botón *Carga automática en el almacén*, y la *Fecha de carga* no está ingresada, entonces se usará la fecha actual.

**Plantilla de carga y almacén prioritario**: si está activo, en el momento de registrar la factura en almacén, se utilizan los valores establecidos en los campos siguientes: **Almacén** y **Plantilla de almacén**. Si el indicador no está activo, el almacén y la causa de carga se leen desde las líneas de la factura. Si no están indicados, no será posible realizar la Carga automática desde dentro de la factura de compra, pero se podrá utilizar el procedimiento de [Carga de Facturas de Compra de Almacén](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/) seleccionando el indicador "*Aceptar como almacén y causa los siguientes datos:*" en la pestaña *Parámetros* y especificando *Almacén* y *Causal* a utilizar.

**Carga/descarga automática**: si está activo, al momento de activar el indicador *Controlado* en el encabezado del documento, se recibirá un mensaje recordando que el parámetro de carga/descarga automática está activo y pregunta si se desea continuar. Al presionar "*Sí*", la factura se cargará al almacén, de lo contrario, será posible cargarla posteriormente presionando el botón *Carga automática en el almacén* ubicado en la barra de herramientas.

**Advertencia de artículos fantasma**: verifica si, en el momento de la carga en el almacén, hay o no artículos ficticios en las líneas de la factura. En caso de que estén presentes, se solicitará si se desea realizar la carga sin dichos artículos o si no proceder con el movimiento del almacén. El artículo ficticio puede estar sin lista de materiales de primer nivel si en los parámetros del MRP se declara con tipo de aprovisionamiento de compra; de lo contrario, el registro de carga generará un mensaje de error si hay artículos ficticios en el documento a cargar.

### Analítica 

En esta pestaña se especifica con qué prioridad se recupera el centro de costo (CdC) o centro de beneficios (CdP) en la línea del documento.

Es posible modificar las prioridades utilizando los siguientes botones en la barra de herramientas:
> **Mover arriba**  
> **Mover abajo**.

*Valores predeterminados*: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de Volumen de Compras](/docs/configurations/tables/purchase/purchase-invoices-type). Si no está presente en el tipo de facturación, el sistema lo buscará en *Registro de proveedores*. Si tampoco está allí, se buscará en *Registro de artículos* y posteriormente a nivel de *Almacén*.

**Recalcular**: si está activo, este indicador recalcula los centros de costo/profitos de acuerdo con la prioridad elegida.

**Evaluar la prioridad por dimensión**: si está activo, este indicador permite evaluar cada prioridad ingresada en la parte superior para comprender si hay dimensiones adicionales que aún no están valoradas. Por ejemplo, supongamos que en el Registro de artículos se tiene el centro de costo de la dimensión *Unidad de negocio* y en el tipo de facturación de compras la dimensión *Direccional*. Si el indicador no está activo, el sistema evalúa solo el CdC presente en el Registro de artículos; si el indicador está activo, después de cargar el CdC de Registro de artículos, el sistema también evaluará la dimensión presente en el tipo de facturación de compras (en nuestro ejemplo, la dimensión *Direccional*) y si es diferente de las que ya ha gestionado (*Unidad de negocio*), cargará el centro y procederá a verificar las demás prioridades.