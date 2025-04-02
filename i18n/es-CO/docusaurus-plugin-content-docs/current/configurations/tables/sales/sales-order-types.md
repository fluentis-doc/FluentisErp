---
title: tipi ordine cliente
sidebar_position: 23
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

La tabla se abre a través de la ruta **Tablas > Ventas > tipi ordine cliente (Tabelle > Vendite > Tipi ordine cliente)**.

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario consta de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados en la cuadrícula de resultados.

Para insertar nuevos registros, es necesario hacer clic en la primera línea vacía de la cuadrícula o presionar el botón **nuovo**.

**Tipo/Descripción (Tipo/Descrizione)**: campos en los que se indica el código y la descripción de la tipología de pedido de cliente. Importante: el código debe ser único para la sociedad y la división;  

**numerazione**: en este campo se debe ingresar el código de numeración apropiado. Para más detalles sobre la numeración de documentos, consulte el artículo [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations); 

**creazione progetto automatico** y **tipo progetto**: si está activo, el sistema se encargará, al ingresar el pedido del cliente, de crear un proyecto del tipo especificado en la columna Tipo de Proyecto presente siempre en el tipo de pedido y con el mismo número del pedido del cliente; el proyecto se insertará automáticamente en la cabecera del pedido del cliente para crear la relación. El proyecto creado se considera un contenedor para coleccionar los documentos relacionados con el proyecto y sus líneas. El proyecto creado desde el pedido del cliente se mantiene actualizado según los cambios realizados en el pedido y se mantiene la relación de línea de proyecto para cada línea de pedido. 

**conferma ordine automatica**: si está activo, al ingresar un nuevo pedido se establece automáticamente la fecha de confirmación del pedido igual a la fecha de inserción del pedido; 

**Excluir bloqueo (Escludi blocco)**: se refiere al bloqueo por superación del límite de crédito y, por lo tanto, se inserta en la gestión del Lock Manager presente en el área de tesorería entre los procedimientos de Utilización de Créditos (Utilizzo Fidi). Si está activo, el sistema para este tipo de pedido no considerará el bloqueo del documento debido a la superación del límite de crédito, pero permitirá al usuario ingresar e imprimir el documento; si no está activo, el tipo de pedido se bloqueará si se supera el límite de crédito y se impedirá al usuario la impresión del documento; 

**evasione tipo ddt**: contiene el tipo de DDT que se desea generar al lanzar el procedimiento automático de Cumplimiento de DDT presente en el botón de la cinta de opciones de Búsqueda de Pedidos de Clientes; 

**evasione tipo fattura**: contiene el tipo de factura que se desea generar al lanzar el procedimiento automático de Cumplimiento de Facturas presente en el botón de la cinta de opciones de Búsqueda de Pedidos de Clientes; 

**evasione tipo picking**: contiene el tipo de picking que se desea generar al lanzar el procedimiento de creación del picking desde las [Envíos (Spedizioni)](/docs/logistics/shipping/shippings); 

**Bloquear Documentos Impresos (Blocca Doc. Stampato)**: si está activo, no permite la modificación del pedido del cliente que tenga el indicador “Impreso (Stampato)” activo en la cabecera; 

**fido**: si está activo, el pedido con este tipo se considera para el cálculo de superación del límite de crédito; 

**cash flow**: si está activo, el tipo de pedido contribuye al cálculo del [flujo de efectivo (cash flow)](/docs/treasury/cash-flow/cash-flow/search-cash-flow); 

**Almacén/Descripción del almacén (Magazzino/Descrizione magazzino)**: en estos campos se indicará el [almacén (magazzino)](/docs/configurations/tables/logistics/warehouses) de compromiso de los artículos presentes en ese tipo de pedido; el almacén especificado aquí se llevará en todas las líneas de artículo ingresadas en el pedido de esta tipología. 

**Motivo/Descripción del motivo del almacén (Causale/Descrizione causale magazzino)**: en estos campos se indicará la *causal de movimiento* de los artículos comprometidos contenidos en ese tipo de pedido; la causal especificada aquí se llevará en todas las líneas de artículo ingresadas en el pedido de esta tipología. 

**evasione quantità articolo non sommata**: si está activo, al cumplir en momentos diferentes la misma línea de pedido en el mismo documento de cumplimiento (DDT, Factura, ..), se reportarán en el documento de cumplimiento las líneas de artículo individuales sin sumar las cantidades. Ejemplo: tengo una línea de pedido de 10 piezas, hago un primer cumplimiento en DDT de 2 piezas, luego un segundo cumplimiento de la misma línea de otras 2 piezas; en el DDT aparecerán 2 líneas de artículo con cantidad 2 cada una, mientras que sin el indicador, el segundo cumplimiento habría incrementado la línea DDT llevando la cantidad a 4; 

**Control de disponibilidad (Controllo disponibilità)**: si está activo, estos tipos de pedidos se considerarán en el [cálculo de la disponibilidad](/docs/erp-home/registers/items/calculate-availability); 

**agr. acq. iva**: si está activo, en el momento de creación del pedido, el sistema verificará si el artículo utilizado tiene un código de IVA agrícola. De lo contrario, se utilizará el código de IVA presente en el [registro de artículos (anagrafica articolo)](/docs/erp-home/registers/items/create-new-item); 

**prezzo ivato**: la gestión de precios con IVA se activa a través de este parámetro presente en todos los documentos del área de ventas a partir de las listas de precios. En la toma de precios de un documento con la tipología Precio con IVA, se busca en las listas de precios, con el mismo indicador de Precio con IVA configurado, y se calculan los descuentos partiendo siempre del precio con IVA. Del precio con IVA, utilizando la tasa de IVA del registro del cliente o del registro del artículo, se calcula el precio sin IVA. En los documentos son visibles las columnas Precio y Precio con IVA. ¡Atención! Si no existe una lista de precios válida con el indicador Precio con IVA configurado y en el registro de artículos hay un precio de venta, se propone como Precio con IVA el precio de venta. ¡Atención! Es posible cumplir un pedido con indicador de precio con IVA en un DDT con tipología no a precio con IVA, los totales de línea se calculan de manera diferente entre un documento con indicador de precio con IVA y uno sin. ¡Atención! Es posible duplicar un pedido con indicador de precio con IVA en un pedido con tipología no a precio con IVA, los totales de línea se calculan de manera diferente entre un documento con indicador de precio con IVA y uno sin. Para entender el funcionamiento de la toma de Precios y de los precios con y sin IVA, siga el artículo Toma de Precios y Descuentos en documentos de venta.  

**tipo commessa produzione**: en este campo es posible indicar el tipo de pedido de producción que se quiere generar a partir de este tipo de pedido dentro de la *Definición MPS (Definizione MPS)* en el momento de la generación de los pedidos de producción a partir del pedido del cliente; en caso de que se configure el siguiente indicador *Generación de pedido de producción*, la generación del pedido se realizará automáticamente cuando el pedido se confirme.     

**Tipo de pedidos de proveedores/Descripción tipo OF (Tipo ordini fornitori/Descrizione tipo OF)**: se debe indicar el código del tipo de pedido de proveedor que se desea generar, en caso de que se elija generar el pedido de proveedor a partir del pedido del cliente, a través del procedimiento correspondiente; 

**controllo cliente**: si está activo, en el momento en que se inserta el cliente dentro del pedido, el sistema realizará un control sobre los registros, verificando que el código ingresado corresponda obligatoriamente al código de un registro de cliente. Si no es así, el sistema avisará al usuario; sin este indicador, es posible crear pedidos también para tipos de cuentas de proveedor. 

**gestione matrici extra data**: si está activo, permite visualizar, en el caso de gestionar artículos con matriz, una pestaña adicional para la imputación de los valores de la cantidad por cada celda de matriz. Si no está activo, no se mostrará esta pestaña y la consiguiente matriz. Para saber más sobre la gestión de Matrices, lea el artículo Gestión de Matrices Extra-Data. 

**configurazione**: en este campo se debe insertar un código para la configuración automática de los Datos Extra en la cabecera del pedido de cliente. 

**stampa**: en este campo es posible establecer la impresión predeterminada a utilizar para este tipo de documento; recordemos que, al imprimir el documento, será necesario seleccionar el informe 'Impresiones múltiples' para utilizar automáticamente la impresión predeterminada; 

**numero di copie**: en este campo se establece el número de copias del documento a imprimir; 

**Generación de Pedido de Producción (Generazione Commessa di Produzione)**: si está activo, indica que el pedido de producción del tipo especificado en la columna *Tipo de Producción del Pedido* se creará automáticamente una vez que el pedido sea confirmado. 

:::note
Cuando se agrega una nueva línea dentro de un Pedido de Cliente para el cual se generan automáticamente los Pedidos de Producción, la nueva línea en el pedido asume el estado *non esaminato*.
:::

**gestione cespiti**: si está activo, en la pestaña de artículos del pedido se activa la pestaña de Activos para vincular el pedido a la venta de un activo. 

**tipo operazione**: siempre está relacionado con la gestión de activos, si se indica se propone automáticamente en el widget Tipo de Operación presente en la pestaña de Activos de la pestaña de Artículos del pedido.      

**Tipo de descuento/Descripción (Tipo sconto/Descrizione)**: en esta columna es posible asociar el tipo de descuento que se propondrá cuando los descuentos se ingresen directamente en la columna *sconti articolo* de la cuadrícula de artículos de los documentos (para más detalles, consulte el artículo [Gestión de Widget de descuentos simplificada (Gestione Widget sconti semplificato)](/docs/sales/sales-flow/discount-widget)).