---
title: Parámetros de nota de entrega de compra
sidebar_position: 3
---

Los parámetros de las notas de entrega de compra permiten la configuración básica para poder gestionar las facturas de compra correctamente y de acuerdo con las especificaciones solicitadas por cada empresa.

La ventana se compone de botones y tres pestañas diferentes: *General*, *Cargar* y *Analítico*.

### General 

**Gestión de unidad de medida doble**: solo si este indicador está activado, el sistema puede gestionar la unidad de medida alternativa en las notas de entrega de compra.

**Propuesta automática de UM alternativa**: si está activado, se propone la cantidad relativa a la unidad de medida alternativa, siempre que en el registro del artículo se haya establecido una por defecto. Este indicador solo se puede activar si el indicador anterior ha sido activado.

**Costo cero si faltan las listas de precios**: si está activo, en ausencia de un listado válido, se establece el precio con el valor cero. Si esta opción no está marcada, el campo se llenará con el último costo del artículo, si está presente.

**Permitir notas de entrega con el mismo número y proveedor**: si está activo, permite la inserción de dos notas de entrega para el mismo proveedor con el mismo número. Se recomienda dejar este indicador desactivado para permitir que el sistema realice el control de unicidad.

**Lotes y S.N. (Serial Number) obligatorios**: si está activo, obliga al usuario a ingresar a nivel de línea de artículo el lote y el número de serie para todos los artículos para los cuales se prevé esta gestión. Si no está activo, el lote y el número de serie no serán datos obligatorios y será posible guardar el documento incluso sin haberlos ingresado. Se aconseja activar este indicador si se utiliza la gestión de artículos con lote.

**Buscar el precio del artículo en todas las listas de precios por defecto**: si está activo, el precio del artículo ingresado en la línea de la orden de proveedor se buscará en todos los listados predeterminados del registro del proveedor, además del listado por defecto. Si no está activo, el precio del artículo se buscará solo en el listado por defecto presente en el encabezado de la orden, pero no en otros listados del mismo proveedor que tengan fechas de validez diferentes.

**Permitir descuentos para los artículos de regalo**: si está activo, permite la inserción de descuentos en las líneas de artículo de tipo regalo.

**Utilice el artículo del proveedor**: si está activo, en la cuadrícula de artículos de la nota de entrega se propone también el campo para ingresar el código de artículo del proveedor.

**Verifique los artículos en agotamiento**: si está activado, el sistema hace un control sobre la disponibilidad de los artículos ingresados en la nota de entrega y avisa si el artículo está en agotamiento, es decir, si en la [Registro de artículos](/docs/erp-home/registers/items/create-new-item) el indicador *En agotamiento* está activo.

**Contabilidad de empaques**: permite contabilizar, en contabilidad general, también las líneas con artículos de naturaleza de envase que suelen ser gestionados para tener la verificación de los stocks de los [Paquete a ser devuelto](/docs/configurations/tables/logistics/package-to-be-returned).

**Mantener el precio del pedido de compra para los soportes**: se utiliza en el procedimiento de cumplimiento de órdenes en nota de entrega en caso de que la cantidad cumplida sea diferente (normalmente parcial) a la cantidad ordenada para la cual se ha ingresado un precio o un descuento por escalón de cantidad. Si el precio o el descuento no dependen de la cantidad entregada sino solo de la cantidad en orden, este indicador debe activarse; si en cambio el precio o descuento por escalón no debe ser incluido en el documento de entrega en caso de que el cumplimiento no se realice por la cantidad total de la orden, el indicador no debe activarse.

**Activar el Control de Calidad**: en progreso.

**Recalcular transporte**: si está activo, calcula el peso y volumen a partir de los valores del registro de artículos en el documento, estableciendo automáticamente el valor del transporte. Si no está activo, el costo del transporte de la nota de entrega deberá calcularse manualmente ya que no se propondrá.

**Def. U.M. volumen**: indica la unidad de medida por defecto para el volumen al calcular el transporte de la nota de entrega.

**Def. U.M. pesos**: indica la unidad de medida por defecto para el peso al calcular el transporte de la nota de entrega.

### Carga 

**Crear grabación con fecha del documento**: si está activo, el registro de almacén se realiza con la misma fecha de la nota de entrega. Si no está activo, el registro se realizará con la *Fecha de carga* indicada en el encabezado de la nota de entrega, si está presente, de lo contrario con la *Fecha de contabilización del almacén* indicada en el procedimiento de [Registro de Nota de Entrega de Compra de Almacén](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). Si el registro se realiza desde dentro de la nota de entrega mediante el botón *Carga automática en el almacén* y la *Fecha de carga* no está ingresada, se utilizará la fecha actual.

**Plantilla de carga y almacén prioritario**: si está activo, al momento del registro de la nota de entrega en el almacén se utilizan los valores establecidos en los campos a continuación: **Almacén** y **Plantilla de almacén**. Si el indicador no está activo, el almacén y la causal de carga se leen desde las líneas de la nota de entrega. Si no están presentes en las líneas de la nota de entrega, no será posible realizar la Carga automática desde dentro de la factura de compra, pero se podrá registrar la nota de entrega a través del procedimiento específico (ver [Registro de Nota de Entrega de Compra de Almacén](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)) seleccionando en la pestaña *Parámetros* el indicador "*Aceptar como almacén y causal los siguientes datos:*" e indicando *Almacén* y *Causal* a utilizar.

**Carga/descarga automática**: si está activo, al momento de activar el indicador *Controlado* en el encabezado del documento, se recibe un mensaje recordando que el parámetro de carga/descarga automática está activo y pregunta si se desea proceder. Al presionar "*sì*", la nota de entrega se cargará en el almacén; de lo contrario, será posible cargarlo más tarde presionando el botón *Carga automática en el almacén* en la barra de ribbon.

**Advertencia de artículos fantasma**: si está activo, durante la carga de la nota de entrega se controla si hay artículos ficticios presentes. Si están presentes, se da un mensaje para completar el procedimiento; si la respuesta es afirmativa, toda la nota de entrega se cargará (excepto los artículos ficticios, por supuesto). Si se responde que no, la nota de entrega no se cargará. El artículo ficticio puede estar sin lista de materiales de primer nivel si en los parámetros MRP está declarado con tipo de aprovisionamiento de compra; de lo contrario, el registro de carga dará un mensaje de error si hay artículos ficticios en el documento a cargar.

### Analítica 

En esta pestaña se especifica con qué prioridad recuperar el centro de costos (CdC) o centro de beneficios (CdP) en la línea de la nota de entrega.

Es posible modificar las prioridades utilizando los siguientes botones en la barra de ribbon:

> **Mover arriba**  
> **Mover abajo**.

*Valores predeterminados*: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de Volumen de Compras](/docs/configurations/tables/purchase/purchase-invoices-type). Si no está presente en el tipo de facturación, el sistema lo buscará en *Registro del proveedor*. Si no está presente, se buscará en *Registro de artículos* y posteriormente a nivel de *Almacén*.

**Recalcular**: si está activo, recalcula los centros de costos/profitos según la prioridad elegida.

**Evaluar la prioridad por dimensión**: si está activo, este indicador permite evaluar cada prioridad ingresada en la parte superior para entender si hay dimensiones adicionales que aún no se han valorado. Por ejemplo, supongamos que en el Registro del artículo se tiene el centro de costos de la dimensión *Unidad de negocio* y en el Tipo de facturación de compras la dimensión *Direccional*. Si el indicador no está activo, el sistema solo evalúa el CdC presente en el Registro del artículo; si el indicador está activo, después de cargar el CdC presente en el Registro del artículo, el sistema también evalúa la dimensión presente en el Tipo de facturación de compras (en nuestro ejemplo, la dimensión *Direccional*) y si es diferente de las que ya ha gestionado (*Unidad de negocio*), carga el centro y continúa con la verificación de las otras prioridades.