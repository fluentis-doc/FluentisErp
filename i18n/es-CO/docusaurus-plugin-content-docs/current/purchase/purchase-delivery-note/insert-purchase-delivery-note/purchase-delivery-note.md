---
title: Nuevo DDT de compra 
sidebar_position: 2
---

El formulario *Crear DDT de compra* se abre a través de la ruta **Compras > DDT de compra > Nuevo DDT** o mediante el botón *Nuevo* que se encuentra en el formulario [Búsqueda DDT de compra](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note).

## *Cómo crear un DDT de compra*

<details>
 
<summary>Clic para ver los pasos fundamentales</summary>
 
1. **Ingresa los datos obligatorios**: *Tipo DDT* y *Proveedor*. *Año*, *Número* y *Fecha de ingreso* se propondrán automáticamente.  
 
2. **Ingresa o modifica los datos opcionales** de la cabecera: como descuentos, *destinación*, etc.  
 
3. **Artículos**: al hacer doble clic en el campo *Código de artículo* se abre la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *unidad de medida*, *cantidad*, *precio*, se propondrán automáticamente, pero pueden ser modificados.  
En alternativa, se puede seleccionar como *Tipo de línea* un *Artículo no codificado* e ingresar manualmente los datos posteriores.
 
4. **Ingresa cualquier descuento o información adicional** en las pestañas *Descuentos/Listas de Precios* y *Datos del artículo*.

5. **Agrega la información relacionada con el Transporte** de la mercancía en la pestaña *Transporte*.

6. **Resúmenes** e ingresa cualquier gasto o descuento final.  
 
7. Una vez confirmado el DDT, **activa el indicador *controlado* en la cabecera** para hacer que el documento esté disponible para los procedimientos siguientes.
 
</details>

## **1. Datos obligatorios**

- **Tipo de factura de entrega de compra**: predefinido en *Configuración > Tablas > Compras > Tipos DDT de compra*.  
Este campo determina el rango de numeración del documento que se está ingresando y propone automáticamente el *Número* del DDT según la fecha de ingreso y el último número ingresado;   
- **Proveedor**: puede ser ingresado utilizando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection);   
- **Número interno**: se propone automáticamente según el tipo, pero puede ser modificado manualmente siguiendo la regla de progresión entre fecha y número;  
- **Inserte la fecha**: se propone automáticamente la fecha actual, pero puede ser modificada manualmente siguiendo la misma regla de progresión entre fecha y número;  
- **número**: en este campo se puede ingresar un número de documento que puede ser diferente al propuesto en el campo anterior.

El formulario contiene una serie de pestañas.

## **Encabezado**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), o bien, según los procedimientos elegidos, la aplicación completa los campos *automáticamente*.

:::note Recuerda
Si el documento se *crea automáticamente*, por ejemplo mediante [**Obtener de órdenes**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), estos datos se tomarán del *documento de origen* del cual fue generado.
:::

### 2.1 Datos del proveedor

Al ingresar el **proveedor**, se proponen automáticamente todos los datos específicos de la pestaña **encabezado**, según los datos establecidos previamente en la [anagrafía del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las secciones:

- **Moneda**: sección que contiene los datos [Moneda](/docs/configurations/tables/general-settings/currencies), [Intercambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de cambio](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Nación**: sección que contiene los datos [*Nación*](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).   
- **Envío**: sección que contiene los datos [*Envíos*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Flete](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) predeterminada y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).

Todos estos campos pueden ser eliminados o modificados manualmente por el usuario.

### 2.2 Datos opcionales de la cabecera 

- **Estado de la nota de entrega**: los siguientes indicadores indican el estado del DDT. Al momento de la creación del DDT ninguno de estos indicadores estará activo:   

    > **Controlado**: el indicador activo permite la contabilización/valorización del DDT.     
    > **Valorado**: este indicador se activa cuando el DDT es valorizado en factura.   
    > **Parcialmente valorizado**: este indicador indica que el DDT ha sido valorizado solo parcialmente en factura.     
    > **Valoración forzada**: este indicador se activa si el DDT ha sido cerrado forzosamente con el cumplimiento forzado de los artículos; por ejemplo, cuando el saldo no será entregado y el documento se considera cerrado aunque no lo estaría.   
    > **Cargado**: este indicador se activa automáticamente cuando el documento es trasladado al almacén mediante el botón *Carga automática* de la barra de herramientas o con la [procedimiento de carga en almacén](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).  
    > **Contabilizado**: se selecciona automáticamente cuando el DDT es contabilizado;  
    > **Cancelada**: el indicador activo permite anular el DDT.

:::note Nota
Los indicadores pueden ser eliminados con el procedimiento de restauración de la operación.
:::

- **Fecha de llegada**: en este campo se puede ingresar la fecha de llegada de la mercancía.

- **Fecha de carga**: este campo se completa automáticamente con la fecha actual al momento de la carga o con la fecha utilizada para el registro en almacén, según el procedimiento utilizado.   

- **Notas del proveedor**: este campo se toma de la anagrafía del proveedor, mientras que en caso de creación desde un solo pedido, se tomarán los mismos datos contenidos en el campo homónimo del pedido del proveedor. También puede ser ingresado manualmente. 

- **Nuestra/Su referencia**: en estos campos suele indicarse una referencia interna y una referencia del proveedor para el documento.    
Si está presente, se toma de la anagrafía del proveedor, de lo contrario puede ser ingresada manualmente.  
En caso de que el pedido se complete con el procedimiento [Cumplimiento de pedido](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), en los campos *Notas del proveedor* y *Nuestra/Su referencia* se propone la información presente en los campos homónimos del pedido de compra (esta transferencia es válida solo en el caso de DDT creado a partir de los datos de un solo pedido).

- **Nota inicial**: se pueden seleccionar las notas que se han ingresado previamente en la tabla homónima que se encuentra en la ruta *Configuración > Utilidades > Gestión de notas codificadas*; para esto, el usuario debe hacer doble clic en el campo para abrir la Ayuda y seleccionar los datos; de lo contrario, puede ingresarlas manualmente.

- **Proyecto**: utilizando la ayuda de campo se puede vincular el documento a un proyecto. Esta asociación funciona solo a nivel de la cabecera del artículo. El proyecto se inserta automáticamente si el DDT ha sido creado mediante el cumplimiento de un pedido que lo contiene.

### 2.3 Pagos

Las **Soluciones de pago** se cargan automáticamente desde la *Anagrafía del proveedor > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **Tipo de pago** se le asocia un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en los vencimientos del documento y no en el total del DDT.

:::note Nota
Si el documento nace mediante el cumplimiento de un solo *Orden de compra* o de varios pedidos con la misma condición de pago, se toman el tipo y la solución de pago presentes en los pedidos.
:::

#### Botón específico:

> **Eliminar pagos**: se utiliza para eliminar las líneas de pago seleccionadas.

### 2.4 Descuentos 

Solo se proponen los descuentos predeterminados tomados de la *Anagrafía del proveedor > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Datos Extra 

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Procedimientos de cabecera:**

### *Carga automática en el almacén*

Este procedimiento se inicia con la ayuda del botón homónimo que se encuentra en la cabecera del documento y respeta una serie de parámetros previamente establecidos en el DDT (para más detalles, consulte el procedimiento idéntico: [Registro DDT de compra en almacén](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)).

El resultado puede ser visualizado en Logística > [Registros](/docs/logistics/warehouse/stock-records/records) o en el procedimiento [Registro DDT de compra en almacén](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse), pestaña *Resumen*.

:::note Nota
Si en los [Parámetros DDT de compra](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) está activo el indicador **Carga/descarga automática**, al momento de activar el indicador *Controlado* en la cabecera del DDT se propondrá automáticamente llevar a cabo la carga del DDT. Este campo será editable solo una vez activado el campo *Controlado* e ingresado el *Número* de documento.
:::

### *Cumplimiento de pedido*

En la cabecera del DDT, al presionar el botón **Cumplimiento de pedido** se abrirá el formulario donde es posible filtrar los pedidos de proveedores relacionados con el proveedor del documento.

A través de este procedimiento es posible crear un DDT de compra a partir del cumplimiento del pedido correspondiente. Por lo tanto, es posible ingresar los artículos dentro del DDT, cumpliendo total o parcialmente un pedido entero o una línea.

Para poder utilizar este procedimiento, hay ciertas condiciones iniciales que deben cumplirse:

 - El/los proveedor(es) de los pedidos debe(n) ser el mismo que el del DDT;
 - El pedido que se desea cumplir debe tener activo el indicador *Impreso* y debe haber sido *Confirmado*.

Luego, se deberá establecer en la cabecera del nuevo DDT, el *Tipo de nota de entrega* que se desea crear y el *proveedor*. Una vez ingresados estos datos, será necesario hacer clic en el botón *Procesamiento de Pedidos* para abrir el formulario de cumplimiento.

#### Procedimiento

Los filtros por proveedor y divisa se cargarán automáticamente según el cliente seleccionado en el DDT.

En el área de filtro es posible elegir visualizar los datos en una *rejilla*, una *estructura jerárquica* o ambas.

> La **Estructura jerárquica** permite tener una división más clara de los diferentes pedidos y artículos contenidos en cada uno de ellos. También permite la selección masiva de todos los artículos contenidos dentro de un pedido simplemente seleccionando el pedido.    
> La **Rejilla** permite una mayor personalización del formulario mediante la adición de campos desde el Navigador de Objetos (Object navigator). En este caso, la selección masiva se realizará utilizando las teclas del teclado y haciendo clic en el botón *Activar/Desactivar solo líneas seleccionadas* en la barra de herramientas.

Una vez establecidos todos los *Filtros* deseados, al hacer clic en el botón de *buscar* se visualizarán en la parte inferior todos los pedidos impresos, confirmados y no cumplidos o cumplidos parcialmente.

:::note Nota
El procedimiento toma todos los datos presentes en el pedido y, como consecuencia, se aplicarán las condiciones de compra presentes en el pedido, incluso si estas han cambiado actualmente.   
En caso de cumplimiento de varios pedidos con la misma solución de pago y/o misma destinación, se reportarán en el DDT la información contenida en el pedido; en alternativa se tomarán las de la anagrafía del proveedor. 
:::

En la rejilla de resultados, el usuario tiene la posibilidad de:

 - Seleccionar todos o algunos de los artículos propuestos: para hacerlo, basta con seleccionar el indicador presente al comienzo de la línea de artículo. La *Cantidad a cumplir* se establecerá automáticamente igual a la *Cantidad restante*.
 - Seleccionar algunos artículos para una *cantidad parcial*. En este caso, se deberá modificar la *Cantidad a cumplir*.

Para completar el procedimiento, luego se deberá hacer clic en el botón *ejecución*, que tomará todos los datos presentes en el pedido y los trasladará al DDT.

#### Botones específicos

> **buscar**: permite buscar los pedidos de proveedor.  
> **ejecución**: permite transferir los datos de los pedidos seleccionados dentro del nuevo DDT.  
> **Ejecución por orden forzada**: permite el cumplimiento forzado del pedido o de las líneas de artículo seleccionadas.  
> **Seleccionar todo**: permite seleccionar todos los artículos de la lista.  
> **Deseleccionar todo**: permite deseleccionar todos los artículos de la lista.  
> **Active solo filas seleccionadas**: permite activar los indicadores para todas las líneas seleccionadas con el mouse.   
> **Desactivar únicamente las filas seleccionadas**: permite desactivar los indicadores para todas las líneas seleccionadas con el mouse.

:::important Recuerda
En caso de múltiples cumplimientos parciales para una determinada línea de artículo dentro del mismo DDT, es posible elegir si sumar las cantidades en una única línea en el DDT o si mantener líneas distintas, desactivando o activando el indicador **Cantidad de pedido no consumida** en la tabla de [Tipos DDT de compra](/docs/configurations/tables/purchase/purchase-delivery-notes-type/).
:::

## **Artículos**

En esta pestaña se ingresan todos los artículos con sus respectivos datos.

Los datos se ingresan manualmente, con la ayuda de la ayuda de campo o pueden ser propuestos por los procedimientos conectados ([Creación DDT desde Recepción de mercancías](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) o [Cumplimiento DDT de compra desde pedidos](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders)).

Para ingresar un nuevo artículo en la rejilla, basta con colocarse sobre la línea para completar varios datos o utilizar el botón *Nuevo artículo* presente en la barra de herramientas.

:::note Nota
Si el DDT ha sido creado mediante el cumplimiento de un pedido de proveedor, todos los datos se tomarán del pedido.
:::

### 3.1 Datos obligatorios

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo de fila** ofrece la posibilidad de seleccionar, desde el combo-box, artículos con características diferentes:
> - *Artículo codificado*: son los artículos codificados en anagrafía y pueden contabilizarse en contabilidad analítica y registrarse en almacén. <br />
> - *Artículo no codificado*: son artículos descriptivos que pueden contabilizarse en contabilidad analítica pero no pueden ser movidos a almacén. <br />
> - *Artículo de cargo*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gastos está codificado y es de interés fiscal, se moverá en almacén; si es no codificado o no es de interés fiscal, no se moverá a almacén. <br />
> - *Elemento de nota*: son notas descriptivas incluidas en la impresión del documento; no afectan a la contabilidad ni al almacén.
> - *Artículo de regalo*: el artículo de regalo se gestiona como un artículo codificado o no codificado para fines fiscales y de almacén, pero al ser un regalo se contabiliza por separado en los resúmenes del documento y, de acuerdo con el indicador de *rivalsa iva*, se calcula el importe del IVA del regalo a cargo de la persona o no.

:::note Nota
Si se comienza directamente con el ingreso del artículo, su clase, código y tipo de línea (*Artículo codificado*) se llenan automáticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Precio**: el precio se propone de la lista de precios ingresada en la anagrafía del contacto; la lista de precios de referencia para el artículo mismo se visualiza en la pestaña *Descuentos/Listas de Precios*. El mismo documento puede contener artículos con precios tomados de listas diferentes, si en la anagrafía del sujeto se asocian más listas en cascada (ver [Anagrafía de contactos](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). A través del doble clic en el campo **Lista de precios** (pestaña *Descuentos/Listas de Precios*) el usuario tiene la posibilidad de seleccionar una lista diferente a la predeterminada, desde la cual se tomará el precio del artículo ingresado.    
En ausencia de la lista de precios, el dato propuesto puede ser tomado del *costo último* de la anagrafía del artículo, si en los [Parámetros DDT de Compra](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) el indicador *Costo a cero en ausencia de listas de precios* no está activo.

- **Valor**: se calcula automáticamente neto de los descuentos.

- **Descuentos totales**: indica el importe total de los descuentos presentes en la pestaña *Descuentos/Listas de Precios* para cada línea de artículo.   

- **Iva**: es prioritario el dato ingresado en el campo IVA de la *Anagrafía del contacto*. Si este no está presente, se propone el valor presente en la *Anagrafía del artículo*, pero el usuario tiene la posibilidad de ingresar un dato diferente. Es un campo obligatorio.

### 3.2 Datos opcionales de artículos 

- **Código/Descripción de artículo del proveedor**: en esta sección se podrá agregar el código y la descripción que el proveedor utiliza para identificar el artículo; este dato se propone automáticamente si en la anagrafía del artículo, pestaña [Proveedores preferenciales](/docs/erp-home/registers/items/create-new-item), se ha asociado un artículo proveedor. 

- **Tipo de volumen de compras**: se propone el dato ingresado en la pestaña [Generalidades](/docs/erp-home/registers/items/create-new-item) de la anagrafía de artículos. Si este no está presente, no se propone ningún dato y en el momento de la contabilización de la factura, se considerará el valor ingresado en el campo *Costo/Ingreso de contrapartida predeterminado* de la anagrafía del contacto.

#### Botones específicos

> **Reciclar de nuevo**: si la [Gestión Conai](/docs/sales/sales-flow/conai) está habilitada para el documento, es posible recalcular los valores con este botón después de cualquier modificación.
>
> **Gestión de paquetes**: permite abrir la gestión de los embalajes a devolver usados en el documento de compra.   
El botón se activa si el documento está guardado, pero no cargado.   
Al hacer clic en este botón se abre el formulario correspondiente donde ingresar la cantidad, seleccionar la línea y ejecutar el traslado del embalaje seleccionado en las líneas de artículo haciendo clic en el botón **execute**. En este formulario se reportan los artículos que han sido ingresados con naturaleza de Embalaje y que están presentes en la tabla de [Embalajes a devolver](/docs/configurations/tables/logistics/package-to-be-returned).    
>
> **Actualizar ubicación**: utilizada para actualizar la ubicación en varias líneas de artículo. El botón se activa seleccionando al menos dos artículos y abre la ayuda de ubicaciones desde la cual se puede elegir la nueva ubicación para todos los artículos seleccionados.   
>
> **Reversión de recepciones**: el botón está activo solo para los [Tipos DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) que tienen la *Naturaleza DDT* de tipo *devolver*. En el formulario se visualizarán todos los DDT asignados a ese proveedor que ya han sido cargados en almacén. Después de seleccionar las líneas de artículo y las cantidades a anular, será suficiente presionar el botón *storno ricevimenti* para insertarlos en el DDT.    
>
> **Actualizar listas de precios**: el botón **Actualizar lista actual** permite actualizar los precios en la lista actual para cada línea de artículo seleccionada.    
El botón **Crear nueva lista de precios con nueva validez** abrirá un pop-up en el cual ingresar las fechas de validez de la nueva lista, que contendrá solo las líneas seleccionadas y estará asignada al proveedor ingresado en el DDT.

:::important Recuerda   
Cuando se crea/actualiza una lista mediante este procedimiento, se reportan en la lista solo los descuentos que se han ingresado manualmente en el DDT. 
:::

### 3.3 Descuentos/Listas 

- **Lista de precios**: se propone la lista de la cual se ha tomado el precio del artículo, con la fecha de inicio/finalización de validez y con las condiciones especiales (por ejemplo, **Tipo de soporte** de descuento) asignadas al artículo en la lista.

- **Precio manual**: se activa automáticamente cuando el precio del artículo ha sido ingresado o modificado manualmente.

- **Descuentos**: se proponen todos los descuentos asociados al artículo, cada uno con su propia base de cálculo y asignación.        

#### Botón específico

> **Eliminar descuentos**: permite eliminar el descuento seleccionado de la rejilla correspondiente. 

### 3.4 Datos del artículo

Dentro de esta pestaña se reportan/se ingresan más información relacionada con el artículo.

- **Artículo**: reporta clase, código y descripción del artículo seleccionado en la rejilla.   
- **Variante**: en este campo es posible seleccionar una variante del artículo entre aquellas previamente codificadas en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) de la anagrafía del artículo. Si en la lista se han ingresado precios y/o descuentos diferentes para cada variante, estos se actualizarán al seleccionar una variante diferente del artículo.     
- **Nota**: son las notas relativas a la línea del artículo, pueden ser ingresadas también a través de la ayuda de notas codificadas. Serán reportadas en todos los documentos generados a partir de esto.   
- **Almacén y causal**: se proponen el almacén y la causal de referencia que aparecerán automáticamente al momento de cargar los artículos en almacén. Los datos provienen de los [Tipos DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) o del pedido de proveedor, si el DDT se deriva de un cumplimiento de un pedido. Pueden ser modificados manualmente para cada línea de artículo.   
- **Ubicación**: se propone automáticamente si a la causal utilizada se le ha asignado una ubicación en la tabla de [Causales de almacén](/docs/configurations/tables/logistics/warehouse-templates) o si el artículo ha sido ingresado en la [Mapa de ubicaciones por artículo](/docs/logistics/warehouse/location/item-location-map/). Puede ser ingresada o modificada manualmente.   
- **Valorado**: indica si la línea de artículo ha sido valorizada, es decir, si ha sido cumplida dentro de una factura de compra.   
- **Parcialmente valorizado**: indica si la línea de artículo ha sido valorizada para una cantidad parcial.   
- **Valoración forzada**: indica si la línea de artículo ha sido valorizada forzosamente.   
- **Proyecto**: representa el proyecto a asociar al documento. Si en la cabecera del documento se ha ingresado un proyecto, este se reportará en todas las líneas de artículo; de lo contrario, puede ser seleccionado a través de la ayuda de proyectos correspondiente.   
- **Unidad de medida/Cantidad alternativa**: si en la [anagrafía del artículo](/docs/erp-home/registers/items/create-new-item) se ha codificado una unidad de medida alternativa con el indicador *predefinito* y en los Parámetros de pedidos de proveedor se ha activado el indicador *Propuesta automática U.M. alternativa*, estos valores se propondrán automáticamente al momento de ingresar el artículo; de lo contrario, es posible seleccionar una entre las unidades de medida alternativas codificadas para el artículo.   
- **Precio de unidad de medida alternativa**: si está activo indica que el precio ingresado en la línea de artículo se refiere a la unidad de medida alternativa y no a la principal.    
Este indicador junto con los campos *Unidad de medida alternativa* y *cantidad alternativa* son visibles solo si en los [Parámetros de pedidos de proveedor](/docs/configurations/parameters/purchase/purchase-orders-parameters) se ha activado el indicador *Gestión de doble UM*.
- **Marca**: representa la marca del artículo, tomada de su anagrafía o de la lista de precios del artículo.
- **Referencia de pedido**: en caso de que el DDT se genere a partir del pedido, la referencia al pedido se reportará en este campo.
- **Declaraciones detalladas**: se reporta la [Declaración de intención](/docs/finance-area/declarations/declarations/intent-declaration) utilizada para proponer el IVA del artículo; desde el combo box es posible cambiar la declaración de intención de referencia, si hay más declaraciones válidas presentes.

### 3.5 Lotes y Números de serie 

En las dos rejillas se pueden ingresar los lotes y números de serie que deben ser cargados en el almacén.   
Si el artículo no prevé la gestión de [Lotes y Números de serie](/docs/erp-home/registers/items/create-new-item), esta pestaña estará desabilitada.

:::tip Recuerda
Si en los [Parámetros DDT de compra](/docs/configurations/parameters/purchase/purchase-orders-parameters) el indicador *Lotes y S.N. obligatorios* está desabilitado, será posible guardar el documento sin ingresar los lotes/números de serie. Además, si la *Tipología de extracción* del lote codificada en la [anagrafía del artículo](/docs/erp-home/registers/items/create-new-item) es *FIFO* o con *Fecha de vencimiento*, al momento de la carga en almacén del DDT, los lotes se propondrán automáticamente si no han sido ingresados previamente.
:::

#### Botones específicos

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.6 Analítica 

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

#### Botones específicos

import DeleteCostCenter from './../../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 3.7 Datos extra 

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.8 Documentos adjuntos 

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.9 Material Conai para el artículo 

Esta pestaña es visible si para la sociedad activa se ha habilitado la gestión Conai.

Esta sección reportará los materiales de embalaje que componen el artículo, con la unidad de medida correspondiente, peso unitario (reducido por el posible porcentaje de exención de la anagrafía del cliente) y el total del peso obtenido por la multiplicación entre el número de artículos vendidos por el peso unitario.    
Al guardar el documento, o al presionar el botón **Reciclar de nuevo**, Fluentis insertará una o más líneas de gastos recuperando el artículo de los materiales, con cantidad igual a la suma de las cantidades y precio igual al costo Conai para ese material.

Para más información sobre la [Gestión Conai](/docs/sales/sales-flow/conai) en Fluentis, consulte la página adjunta.

### 3.9 Sección de valores

La sección en la parte inferior, a la derecha, presenta un resumen de los costos que contribuyen a la formación del precio final de cada artículo seleccionado en la rejilla de artículos. Los campos presentes son: 

- **Precio unitario**: el valor del campo *precio*; 
- **Cantidad**: el valor del campo *cantidad* o *cantidad alternativa*, según el indicador *Precio de unidad de medida alternativa*;
- **Cantidad de línea**: Precio artículo * Cantidad artículo; 
- **Descuentos totales**: la suma de los descuentos del artículo, incluidos también los descuentos finales;
- **Valor**: Importe de línea - Total descuentos;
- **Impuesto**: Importe * tasa IVA del artículo; 
- **Total**: Importe + Impuesto.

## **Resumen**

En las diferentes secciones de esta pestaña se presentan las principales informaciones de todo el documento y algunos botones específicos.

### 4.1 Descuentos finales 

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos 

Se proponen los gastos ingresados en la anagrafía de contacto, en la pestaña *spese/sconti*. En esta rejilla, cualquier gasto debe ser ingresado en positivo, cualquier descuento en negativo.      

Estos elementos se aplican a la totalidad del documento y no están distribuidos entre las líneas de los artículos. Pueden incluir costos adicionales, descuentos globales o recargos aplicados a todo el documento. Si se establecen en la anagrafía del artículo, se proponen automáticamente al momento de la creación del documento.

- **Tipo/Descripción**: permite elegir los tipos de gastos (predeterminados en la tabla [Tipos de gastos](/docs/configurations/tables/general-settings/expenses-types)), asignando a la tipología el porcentaje de gasto a aplicar.  
- **Monto a cobrar**: indica el valor del gasto expresado en la divisa del documento.    
- **Iva**: indica la tasa IVA que se aplicará a los gastos ingresados.   
- **Porcentaje/Valor**: indica si calcular los gastos con un porcentaje o con un valor monetario predeterminado. Al seleccionar *valor*, el importe del gasto debe ingresarse bajo la voz homónima.      
- **Porcentaje**: valor numérico del porcentaje de gasto.  

:::note Nota
Si el *Tipo de gasto* ingresado tiene activo el indicador [repartido](/docs/configurations/tables/general-settings/expenses-types), durante la carga del DDT en almacén, el gasto será repartido entre todos los artículos en función de los importes totales de cada línea de artículo. El resultado de la repartición del gasto es visible en el [registro de almacén](/docs/logistics/warehouse/stock-records/record).    
1. Si los artículos tienen un precio: el gasto total será repartido proporcionalmente sobre los importes netos de cada artículo; el resultado se añadirá al precio inicial del artículo en el campo *Total importe* del registro. Si para algunas líneas el importe es 0, este será considerado como 1 para permitir la repartición del gasto entre todos los artículos.   
2. Si todos los artículos tienen precio igual a 0: el gasto será distribuido equitativamente entre todas las líneas de artículo y, a partir de esta distribución, se calculará el *importe movimiento/monto del movimiento* en el registro, teniendo en cuenta las cantidades de cada artículo.   
:::

### 4.3 Resúmenes de IVA

Se propone el resumen de IVA del documento, para cada código IVA.

### 4.4 Resúmenes de vencimientos

Representa el resumen de los vencimientos del documento, para cada *tipo* y *solución* de pago.  
- **Número**: valor progresivo de la línea.  
- **Pago**: representa el código alfanumérico del *Tipo de pago* tomado de la *Cabecera del documento > pestaña Pagos*.  
- **Importe**: Importe del vencimiento calculado. Puede ser forzado manualmente, en cuyo caso se activa automáticamente el siguiente indicador *editar manualmente*. (Se activan automáticamente controles y avisos sobre la cuadratura entre los valores de los vencimientos y el total de la factura)
- **Fecha de vencimiento**: Fecha del vencimiento calculada. Puede ser forzada manualmente, en cuyo caso se activa automáticamente el siguiente indicador *editar manualmente*.
- **Cargos por cobranza**: Campo donde se reportan los gastos de cobro calculados.
- **Iva**: que se aplicará a los gastos de cobro (puede ser establecida también manualmente).
- **Causal de pago**: es posible ingresar directamente en la factura una causal contable que dé lugar a un registro automático de cobro/pago. NB prestar atención al template de la causal porque utilizará las cuentas presentes incluso sin subcuenta, motivo por el cual está presente el campo siguiente.
- **Cuenta/subcuenta del cliente/proveedor**: cuenta que se utiliza para cobrar/pagar (caja o banco, por ejemplo) el vencimiento y sobrescribirá la cuenta presente en la causal contable de pago (o cobro).
- **Soltero**: activa la contabilización del cierre de vencimientos en la escritura automatizada.
- **Modelos de referencia de pago**: Modelo de creación del código de pago. En algunas localizaciones externas, cada vencimiento en factura prevé un código atribuido por quien factura: este código está estructurado de acuerdo a ciertos modelos específicos (tabla MB_PaymentReferenceModels), de modo que se pueda construir el código con un algoritmo.
- **Códigos de modelos de pago**: Este es el código (estructurado como el modelo anterior) que se reportará en la partida y, por lo tanto, en los pagos que se envían al banco, para que este comunique al beneficiario cuál es el vencimiento que ha sido pagado (y así automatizar la importación de los movimientos bancarios con el cierre de la partida). De aquí se completa dentro de la partida y en el archivo Sepa.
- **Fecha límite para pago anticipado**: Este es un campo previsto en el trazado de facturas Sdi, la fecha límite para poder aplicar el descuento financiero.
- **Tipo de descuento**: Tipo de descuento financiero.
- **Valor matricial**: Valor del descuento financiero en cobro.

### 4.5 Otros campos 

- **Volumen**: se propone el volumen acumulativo, resultado de la suma de los volúmenes de los artículos (el valor se toma de la *Anagrafía del artículo > pestaña* [*pesos/dimensiones*](/docs/erp-home/registers/items/create-new-item)), cuando la unidad de medida del volumen de los artículos corresponde a la que se inserta en los parámetros del DDT. Solo se toman en cuenta los artículos que tienen este campo completado.

- **Peso neto/bruto**: se propone el peso neto acumulativo, resultado de la suma de los pesos de los artículos (el valor se toma de la *Anagrafía del artículo > pestaña* [*pesos/dimensiones*](/docs/erp-home/registers/items/create-new-item)), cuando la unidad de medida del peso de los artículos corresponde a la que se inserta en los parámetros del DDT. Solo se toman en cuenta los artículos que tienen este campo completado.

- **Número de paquetes**: se propone el número de bultos, sobre la base de los datos ingresados en la *Anagrafía del artículo > pestaña* [*pesos/dimensiones*](/docs/erp-home/registers/items/create-new-item), en los campos *Artículos presentes en un paquete* o *Paquetes para el artículo*. Se toman en cuenta solo los artículos que tienen este campo completado.

- **Valores modificados manualmente**: al activar este indicador será posible modificar manualmente los valores de *volumen*, *peso neto*, *peso bruto* y *bultos*.

### 4.6 Totales del documento 

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **Transporte**

La pestaña contiene información sobre el transporte de los artículos.

Los combo box proponen todos los *destinatari*, *destinazioni* y *vettori* ingresados en la *Anagrafía del contacto > pestaña [Envíos (Spedizioni)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* pero pueden ser ingresados manualmente. 

Los datos presentes son: 

- **mittente**: en este campo se puede ingresar la cuenta/subcuenta del remitente.
- **Destinatarios**: se propone el destinatario predeterminado ingresado en la anagrafía del cliente; si no está presente, se toma la dirección del cliente.    
- **Destino**: se propone la destinación predeterminada del destinatario, si está ingresada en la anagrafía del cliente.        
- **Volumen**: se propone el volumen acumulativo, resultado de la suma de los volúmenes de los artículos (el valor se toma de la Anagrafía del artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del volumen de los artículos corresponde a la que se inserta en los parámetros de la factura. 
- **Peso neto**: se propone el peso neto acumulativo, resultado de la suma de los pesos de los artículos (el valor se toma de la Anagrafía del artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la que se inserta en los parámetros de la factura. 
- **Peso bruto**: se propone el peso bruto acumulativo, resultado de la suma de los pesos de los artículos (el valor se toma de la Anagrafía del artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la que se inserta en los parámetros de la factura.     
- **Aspecto exterior del bien**: combo box que remite a la tabla homónima donde codificar los datos.     
- **Paquetes**: se propone el número de bultos, sobre la base de los datos ingresados en la *Anagrafía del artículo > pestaña Pesos/Dimensiones*, en los campos *Artículos presentes en un paquete* o *Paquetes para el artículo*. Se toman en cuenta solo los artículos que tienen este campo completado.     
- **Valores modificados manualmente**: con este indicador se hace posible la modificación de los campos Volumen, Peso neto, Peso bruto y Bultos, que de otro modo reportan los datos de la anagrafía del artículo sin posibilidad de modificación.     
- **Ingreso/Salida de la oficina aduanera**: campos utilizados para el eTransporte para la versión rumana, que remiten a la tabla *Oficina de aduanas*.     
- **Ingreso/Salida del paso fronterizo**: campos utilizados para el eTransporte para la versión rumana, que remiten a la tabla *Punto de cruce fronterizo*.      
- **Transporte**: es necesario seleccionar la figura que se encargará del transporte, marcando el indicador en *remitente*, *destinatario* o *transportista*; según la selección, la sección siguiente cambiará; si el transporte es a cargo del *Remitente*, será posible ingresar Matrícula del vehículo, Revettoremolque, Fecha y Hora de Inicio de transporte; si es a cargo del *Destinatario*, será posible ingresar Matrícula del vehículo, Remolque, Fecha y Hora de Inicio de transporte; si es a cargo del *Transportista*, en cambio, los campos disponibles serán Anagrafía contable del Transportista, Matrícula, Remolque, Fecha y Hora de transporte, posible Cliente, Cargador, Propietario, Lugar de carga.