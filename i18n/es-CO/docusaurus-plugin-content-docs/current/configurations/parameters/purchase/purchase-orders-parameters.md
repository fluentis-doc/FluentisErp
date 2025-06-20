---
title: Parámetros de Órdenes de Compra
sidebar_position: 2
---

Los parámetros de los órdenes de compra permiten la configuración básica para gestionar correctamente los órdenes de compra de acuerdo con las solicitudes específicas de cada empresa.  

La ventana se compone de botones y tres pestañas diferentes: *General*, *Cargar* y *Analítico*.

### General 

**Gestión de unidad de medida doble**: solo si está activado, el sistema puede gestionar la unidad de medida alternativa en el orden de compra.

**Propuesta automática de UM alternativa**: si está activado, se propondrá la cantidad relacionada con la unidad de medida alternativa, siempre que se haya configurado una como predeterminada en el registro del artículo. Este indicador solo se puede activar si el indicador anterior está activado.

**Costo cero si faltan las listas de precios**: si está activo, en ausencia de un listado válido, poblará el precio con el valor cero. Si esta opción no está marcada, el campo se valorará con el último costo del artículo, si está presente.

**Bloquear la inserción de documentos en días festivos**: si está activo, el sistema no permite la inserción del orden en días festivos (sábado, domingo y festividades). Si no está activo, el sistema no realiza ningún control y permite ingresar el orden.

**Proponer lista de precios de marca prioritaria/orden de venta**: ya no se utiliza.

**Permitir editar el IVA**: si está activo, en caso de [Creación automática de órdenes desde solicitudes de compra](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) se propone el código de IVA desde el registro del proveedor.

**Código de usuario obligatorio**: si está activo, es necesario especificar el código del usuario en el encabezado, debajo del campo *País*; de lo contrario, no será posible guardar el orden. Cuando el indicador no está activo, este dato es opcional.

**Buscar el precio del artículo en todas las listas de precios por defecto**: si está activo, el precio del artículo ingresado en la línea del orden de compra se buscará en todos los listados predeterminados del registro del proveedor, además del listado por defecto. Si no está activo, el precio del artículo se buscará solo en el listado predeterminado presente en el encabezado del orden, pero no en otros listados para el mismo proveedor con fechas de validez diferentes.

**Utilice el artículo del proveedor.**: si está activo, en la cuadrícula de artículos del orden de compra también se propone el campo para ingresar y buscar el código del artículo del proveedor. Si no está activo, este campo no será visible.

**Verifique los artículos en agotamiento**: si está activado, el sistema realiza un control sobre la disponibilidad de los artículos en la línea del orden y avisa si el artículo está agotándose, es decir, si en el [registro del artículo](/docs/erp-home/registers/items/create-new-item) se ha activado el indicador *En agotamiento*.

**Contabilidad de empaques**: permite contabilizar, en contabilidad general, también las líneas con artículos de naturaleza embalaje que usualmente se gestionan para tener la verificación de las existencias de los [Paquete a ser devuelto](/docs/configurations/tables/logistics/package-to-be-returned).

### Carga 

En esta pestaña se definen los parámetros utilizados para el [Carga de Recepción de Mercancías](/docs/purchase/goods-reception/procedures/good-receipt-load).

**Crear grabación con fecha del documento**: si está activo, el registro de almacén se realiza con la misma fecha del orden y no será necesario especificar la fecha de registro en el formulario de carga. Si no está activo, será necesario especificar la fecha en el formulario de carga.

**Plantilla de carga y almacén prioritario**: si está activo, asegura que la carga de almacén se realice utilizando el **Almacén** y el **Causal** definidos en esta pestaña. Si el indicador no está activado, utiliza el almacén y la causa definidos en las líneas de recepción de mercancías, si están presentes; de lo contrario, se consideran los parámetros establecidos en el procedimiento de carga de recepción de mercancías.

### Analítica 

En esta pestaña se especifica con qué prioridad recuperar el centro de costo (CdC) o centro de beneficio (CdP) en la línea del documento.

Es posible modificar las prioridades utilizando los siguientes botones en la barra de herramientas:

> **Mover arriba**  
> **Mover abajo**.

*Valores predeterminados*: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de Volumen de Compras](/docs/configurations/tables/purchase/purchase-invoices-type). Si no está presente en el tipo de facturación, el sistema lo buscará en el *Registro de proveedores*. Si tampoco está allí, se buscará en el *Registro de artículos* y posteriormente a nivel de *Almacén*.

**Recalcular**: si está activo, este indicador recalcula los centros de costo/profitos de acuerdo con la prioridad seleccionada.

**Centro de costo/ingreso obligatorios**: si está activo, este indicador hace obligatoria la imputación de los centros de costo/profitos.

**Evaluar la prioridad por dimensión**: si está activo, este indicador permite evaluar cada prioridad ingresada en la parte superior para entender si hay dimensiones adicionales que aún no están valoradas. Por ejemplo, supongamos que en el Registro de artículos se tiene el centro de costo de la dimensión *Unidad de negocio* y en el Tipo de facturación de compras la dimensión *Direccional*. Si el indicador no está activo, el sistema evalúa solo el CdC presente en el Registro de artículos; si el indicador está activo, después de haber cargado el CdC presente en el Registro de artículos, el sistema también evalúa la dimensión presente en el Tipo de facturación de compras (en nuestro ejemplo, la dimensión *Direccional*) y si es diferente de aquellas que ya ha gestionado (*Unidad de negocio*), carga el centro y continúa con la verificación de las otras prioridades.