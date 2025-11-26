---
title: Tipos de orden de cliente
sidebar_position: 23
ai_generated: true
---

:::tip[FAst Start]<!-- FAst Start -->
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que desee configurarlo manualmente, consulte la lista de verificación de la página enlazada
:::

La tabla se abre mediante la ruta **Tablas > Ventas > Tipos de orden de cliente<!-- Tipi ordine cliente -->**.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario se compone de un área de filtro y otra de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.
 
Para insertar nuevos registros es necesario hacer clic en la cuadrícula en la primera fila vacía o pulsar el botón **Nuevo<!-- Nuovo -->**.  

**Tipo/Descripción:** campos en los que se indica el código y la descripción de la tipología de orden de cliente<!-- ordine cliente -->. Importante: el código debe ser único para la compañía y la división; 

**Numeración**: en este campo se debe ingresar el código de la numeración adecuado. Para más detalles sobre la numeración de documentos consulte el artículo [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations); 

**Creación automática de proyecto** y **Tipo de proyecto**: si está activo, el sistema creará, en la fase de inserción de la orden de cliente<!-- ordine cliente -->, un proyecto del tipo especificado en la columna Tipo de Proyecto presente siempre en el tipo de orden y con el mismo número de la orden de cliente<!-- ordine cliente -->. El proyecto será insertado automáticamente en la cabecera de la orden de cliente<!-- ordine cliente --> para crear la relación. El proyecto creado se considera como un contenedor para recolectar los documentos vinculados al proyecto y a sus líneas. El proyecto creado desde la orden de cliente<!-- ordine cliente --> se mantiene actualizado con base en las modificaciones hechas en la orden y se mantiene la relación línea-proyecto para cada línea de la orden.

**Confirmación automática de orden**: si está activo, al ingresar una nueva orden se establece la fecha de confirmación de orden automáticamente igual a la fecha de inserción de la orden; 

**Excluir bloqueo:** se refiere al bloqueo por superación del límite de crédito y, por tanto, se encuentra en la gestión del Lock Manager presente en el área de tesorería entre los procedimientos de Uso de Límites. Si está activo, el sistema para este tipo de orden no considerará el bloqueo del documento debido a la superación del límite de crédito, sino que dejará al usuario la posibilidad de ingresar e imprimir el documento; si no está activo, el tipo de orden será bloqueado en caso de superación del crédito y al usuario se le impedirá la impresión del documento; 

**Ejecución tipo DDT**: contiene el tipo DDT que se desea generar al lanzar el procedimiento automático de Ejecución DDT presente en el botón de cintillo de Búsqueda de Órdenes de Clientes; 

**Ejecución tipo factura**: contiene el tipo de factura que se desea generar al lanzar el procedimiento automático de Ejecución de Facturas presente en el botón de cintillo de Búsqueda de Órdenes de Clientes; 

**Ejecución tipo picking**: contiene el tipo de picking que se desea generar al lanzar el procedimiento de creación de picking desde los [Envíos](/docs/logistics/shipping/shippings); 

**Bloquear doc. impreso**: si está activo, no permite la modificación de la orden de cliente<!-- ordine cliente --> que tenga la marca "Impreso" activa en cabecera; 

**Crédito**: si está activo, la orden con este tipo se considera para el cálculo de la superación del límite de crédito; 

**Cash flow**: si está activo, el tipo de orden contribuye al cálculo del [cash flow](/docs/treasury/cash-flow/cash-flow/search-cash-flow); 

**Almacén/Descripción de almacén**: en estos campos se debe indicar el [almacén<!-- magazzino -->](/docs/configurations/tables/logistics/warehouses) de compromiso de los artículos presentes en ese determinado tipo de orden; el almacén aquí especificado se reflejará en todas las líneas de artículos ingresadas en la orden de esta tipología. 

**Causal /Descripción de causal de almacén**: en estos campos se debe indicar la *causal de movimiento* de los artículos comprometidos contenidos en ese determinado tipo de orden; la causal aquí especificada se reflejará en todas las líneas de artículos ingresadas en la orden de esta tipología. 

**Ejecución cantidad de artículo no sumada**: si está activo, al ejecutar en diferentes momentos la misma línea de orden en el mismo documento de salida (DDT, Factura, etc.) se incluyen en el documento de salida las líneas individuales de artículo sin sumar las cantidades. Ejemplo: tengo una línea de orden de 10 pzs, hago un primer despacho en DDT de 2 piezas, luego un segundo despacho de la misma línea de otras 2 pzs, en la DDT aparecerán 2 líneas de artículo con cantidad 2 cada una, mientras que sin la marca, el segundo despacho habría incrementado la línea DDT llevándola a 4 la cantidad;

**Control de disponibilidad**: si está activo, estos tipos de orden se considerarán en el [cálculo de la disponibilidad<!-- disponibilita -->](/docs/erp-home/registers/items/calculate-availability); 

**Agr. Adq. IVA**: si está activo, en fase de creación de la orden, el sistema verifica si para el artículo utilizado está presente un código de IVA agrícola, de lo contrario se usará el código de IVA presente en la [ficha de artículo](/docs/erp-home/registers/items/create-new-item); 

**Precio con IVA**: la gestión de precios con IVA se activa mediante este parámetro presente en todos los documentos del área de ventas a partir de las listas de precios de venta. Al recuperar precios en un documento con tipología Precio con IVA, se buscan en las listas con la misma marca Precio con IVA activada y se calculan los descuentos partiendo siempre del precio con IVA. Del precio con IVA utilizando la tasa de IVA de la ficha del cliente o del artículo se calcula el precio sin IVA. En los documentos son visibles las columnas Precio y Precio con IVA. ¡Atención! si no existe una lista válida con la marca Precio con IVA y en la ficha de artículos hay un precio de venta, se propone como Precio con IVA el precio de venta. ¡Atención! es posible despachar una orden con marca precio con IVA en un DDT con tipología no a precio con IVA, los totales de línea se calculan de forma diferente entre un documento con la marca precio con IVA y un documento sin la marca precio con IVA. ¡Atención! es posible duplicar una orden con la marca precio con IVA en una orden con tipología no a precio con IVA, los totales de línea se calculan de forma diferente entre un documento con la marca precio con IVA y un documento sin la marca precio con IVA. Para entender el funcionamiento de la recuperación de Precios y de los precios con y sin IVA siga el artículo Recuperación de Precios y Descuentos en documentos de ventas.  

**Tipo de orden de producción<!-- Tipo commessa produzione -->**: en este campo es posible indicar el tipo de orden de producción<!-- commessa di produzione --> que se desea generar a partir de este tipo de orden dentro de la *Definición MPS* en el momento de la generación de las órdenes de producción<!-- commesse di produzione --> desde la orden de cliente<!-- ordine cliente -->; en caso de que esté activada la marca posterior *Generación de orden de producción*, la generación de la orden se realizará automáticamente cuando se confirme la orden.     

**Tipos de orden de proveedores/Descripción tipo OP**: debe indicarse el código del tipo de orden de proveedor que se desea generar, en caso de que se elija generar la orden de proveedor a partir de la orden de cliente, mediante el procedimiento adecuado; 

**Control de cliente**: si está activo, al momento de ingresar el cliente en la orden, el sistema realizará un control sobre los datos maestros, verificando que el código ingresado corresponda necesariamente al código de un dato maestro de cliente. Si no es así, el sistema avisará al usuario; sin esta marca es posible crear Órdenes incluso para tipos cuenta Proveedor. 

**Gestión de Matrices Extra Data**: si está activo, permite visualizar, en caso de gestión de artículos con matriz, una pestaña adicional para ingresar los valores de cantidad por cada celda de la matriz. Si no está activo, no se visualiza esta pestaña ni la matriz correspondiente. Para más información sobre la gestión de Matrices lea el artículo Gestión de Matrices Extra-Data. 

**Configuración**: en este campo se debe ingresar un código para la configuración automática del Extradata en la cabecera de la orden de cliente<!-- ordine cliente -->. 

**Impresión**: en este campo es posible configurar la impresión predeterminada que se usará para esta tipología de documento; recordamos que, en fase de impresión del documento, será necesario seleccionar el reporte 'Impresiones múltiples' para utilizar automáticamente la impresión predeterminada;

**Número de copias**: en este campo se configura el número de copias de documento a imprimir; 

**Generación de Orden de Producción**: si está activo, indica que la orden de producción del tipo especificado en la columna *Tipo de Producción de Orden* se creará automáticamente una vez que la orden sea confirmada. 

:::note<!-- note -->
Cuando se añade una nueva línea dentro de una Orden de Cliente<!-- Ordine Cliente --> para la cual se generan automáticamente las Órdenes de Producción<!-- Commesse di Produzione -->, la nueva línea en la orden tendrá estado *No examinado*.
:::

**Gestión de Bienes de Capital**: si está activo, en la pestaña de artículos de la orden se activa la pestaña de Bienes de Capital para vincular la orden a la venta de un bien de capital.

**Tipo de Operación**: siempre está vinculada a la gestión de bienes de capital, si se indica se propone automáticamente en el widget Tipo de Operación presente en la pestaña Bienes de Capital de la pestaña Artículos de la orden.      

**Tipo de descuento/Descripción**: en esta columna es posible asociar el tipo de descuento a proponer cuando los descuentos se insertan directamente en la columna *Descuentos de artículo* de la cuadrícula de artículos de los documentos (para más detalles vea el artículo [Gestión Widget de Descuentos Simplificado](/docs/sales/sales-flow/discount-widget)).