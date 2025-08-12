---
title: Nueva Factura de compra 
sidebar_position: 2
---

El formulario se abre a través de la ruta **Compras > Facturas de compra > Nueva factura** o mediante el botón **Nueva** que se encuentra en el formulario [Buscar facturas de compra](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices).

## *Cómo crear una factura de compras*

<details>
 
<summary>Clickea para ver los pasos fundamentales</summary>
 
1. **Inserta los datos obligatorios**: *Tipo* y *Proveedor*. *Año*, *Número* y *Fecha de ingreso* se propondrán automáticamente.  
 
2. **Inserta o modifica los datos opcionales** de la cabecera: como fechas de llegada, eventuales *descuentos*, la *destinación*, etc.  
 
3. **Inserta los Artículos**: mediante un doble clic en el campo *Código artículo* se abrirá la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *unidad de medida*, *cantidad*, *precio*, se propondrán automáticamente, pero pueden ser modificados.  
Alternativamente, es posible seleccionar como *Tipo de línea* un *Artículo no codificado* e ingresar manualmente los datos siguientes.
 
4. **Inserta eventuales descuentos o otra información adicional** en las pestañas *Descuentos/listados* y *Datos del artículo*.
 
5. **Revisa la sección de Resúmenes** e inserta eventuales gastos o descuentos finales.  
 
6. Una vez revisada la factura, **activa el indicador *Controlada* en cabecera** para que el documento esté disponible para los procedimientos posteriores.
 
</details>

## **1. Datos obligatorios**

- **Tipo de factura de compra** predeterminado en *Tablas > Compras > [Tipo de factura de compra](/docs/configurations/tables/purchase/purchase-invoices-type)*;   
Este campo determina el rango de numeración del documento que se está ingresando y propone automáticamente el *Número interno* de la factura en función de la fecha de ingreso y el último número ingresado;   
- **Proveedor** puede ser ingresado usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o manualmente;  
- **Fecha**: se propone automáticamente la fecha actual, pero puede ser modificada manualmente respetando la regla de progresión entre fecha y número;  
- **Número interno**: se propone automáticamente en función del tipo de factura, pero puede ser modificado manualmente siempre respetando la regla de progresión entre fecha y número;  
- **Número de documento**: en este campo es posible ingresar un número de documento que puede ser diferente al propuesto en el campo anterior.

El formulario contiene una serie de pestañas.

## **2. Cabecera**

Después de haber seleccionado los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos manualmente o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o, según los procedimientos que elija, la aplicación completa los campos *automáticamente*.

:::note Recuerda
Si el documento es *creado automáticamente*, por ejemplo, mediante **Cumplimiento de pedido de proveedor** o **Cumplimiento de DDT**, estos datos se toman del *documento original* del cual se generó la factura.
:::

### 2.1 Datos del proveedor

Al ingresar el **Proveedor** se proponen automáticamente todos los datos específicos de la pestaña **Cabecera**, según los datos configurados anteriormente en el [registro del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las *secciones*:  

- **Moneda**: sección que contiene los datos [Moneda](/docs/configurations/tables/general-settings/currencies), [Tipo de cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de divisa](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Nación**: sección que contiene los datos [*Nación*](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).   
- **Envío**: sección que contiene los datos [*Envios*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Flete](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Listado](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) predeterminado y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).

Todos estos campos pueden ser eliminados o modificados manualmente por el usuario.

### 2.2 Datos opcionales de la cabecera

- **Estado de las facturas**: cuando la factura es creada, no tiene ningún indicador activo. La sección incluye los campos:

    > **Controlado**: el indicador activo permite contabilizar la factura;  
    > **Contabilizado**: el indicador se activa automáticamente cuando la factura soporta el procedimiento de [Contabilización](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting);  
    > **Cargado**: el indicador se activa cuando la factura soporta el procedimiento de [Carga en el almacén](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice). En el caso de una factura creada a partir de un documento de transporte ya cargado, está presente el parámetro general VE-PurchaseInvoices_VerifyLoadStatusDDT que bloquea el indicador Cargada también en la factura.  
    > **Historizado**: al activar este indicador, el documento no será más visible para los procedimientos posteriores.   
    > **Cancelada**: el indicador activo permite anular la factura.

:::note
Los indicadores pueden ser desactivados mediante los procedimientos de restauración de operación.
:::

- **Fecha de llegada**: en este campo se puede ingresar la fecha de llegada de la mercancía.

- **Fecha de carga**: este campo se completa automáticamente con la fecha actual al momento de la carga o con la fecha utilizada para el registro de almacén, dependiendo del procedimiento utilizado.   

- **Anotaciones del proveedor**: este campo se toma del registro del proveedor, mientras que en el caso de creación a partir de un solo pedido/DDT se tomarán los mismos datos contenidos en el campo homónimo del documento de partida. Puede ser ingresado también manualmente. 

- **Nuestra/Su referencia**: en estos campos generalmente se indica una referencia interna y una referencia del proveedor para el documento.    
Si está presente, se toma del registro del proveedor, de lo contrario puede ser ingresado manualmente.  
En caso de que el pedido se complete con el procedimiento [Cumplimiento de pedido](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) o mediante [Valoración DDT de compra](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization), en los campos *Anotaciones del proveedor* y *Nuestra/Su referencia* se propone la información presente en los campos homónimos del documento de partida (esta transferencia es válida solo en el caso de una factura creada mediante la recopilación de datos de un solo documento de partida).

- **Nota inicial**: en caso de cumplimiento, se propondrán las informaciones presentes en el pedido. Alternativamente, se pueden seleccionar las notas que se han ingresado previamente en la tabla homónima que se encuentra en el camino *Configuración > Utilidades > Gestión de notas codificadas*; para esto el usuario debe hacer un doble clic en el campo para abrir la Ayuda y seleccionar los datos; de lo contrario, puede ingresarlas manualmente.

- **progetto**: utilizando la ayuda de campo se puede vincular el documento a un proyecto. Esta asociación solo funciona a nivel de la cabecera del artículo. El proyecto se inserta automáticamente si el DDT fue creado mediante el cumplimiento de un pedido que lo contiene.

- **CUP/CIG**: si en la información fiscal del [registro del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) está habilitado para la gestión de CIG y CUP, será posible completar estos datos en el documento. Los campos están posicionados bajo la sección *Anotaciones del proveedor*.

- **Ref. FA**: ubicado bajo la sección *Nación*. Se utiliza después de la creación de la [anulación](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) de una factura para vincular manualmente las dos facturas ingresando en la factura de anulación *número*, *tipo* y *fecha* de la factura de origen.

- **reg. cont.**: ubicado bajo la sección *Nación*. Informa número, fecha y protocolo de la registro contable derivada de la contabilización de la factura. 

### 2.3 Pagos

Las **Soluciones de pago** se importan automáticamente del *Registro del proveedor > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **Tipo de pago** se le asocia un descuento financiero, el importe del descuento se considera solo a fines contables, es decir, en los vencimientos del documento y no en el total de la factura.

#### Botón específico

> **cancella pagamenti**: utilizado para eliminar las líneas de pago seleccionadas.

### 2.4 Descuentos

Se proponen solo los descuentos predeterminados tomados del *Registro del proveedor > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Envío

Aquí se propone la información ingresada en el registro del proveedor, pestaña [Entrega](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), solo si existen datos predeterminados.

El combo box propone todos los *Destinatarios* y las *Destinaciones* ingresadas en el registro del proveedor.

Las direcciones de envío (destinatario/destinación y transportista) pueden ser ingresadas también solo de forma descriptiva sin haber sido previamente registradas entre los contactos. 

### 2.6 Transportista

En este campo es posible ingresar el Transportista que realizará el envío. Si este fue ingresado en el registro del proveedor, pestaña [Entrega](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) se podrá seleccionarlo del menú desplegable de la segunda columna; de lo contrario, basta con hacer doble clic en la tercera columna (*Transportista*) para seleccionar uno de los contactos de la empresa.

Opcionalmente, se pueden agregar los detalles de la *Placa* del transportista y la *Fecha/Hora de transporte*. 

### 2.7 Datos Extra

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Procedimientos del encabezado:**

### *Carga automática en almacén*

Este procedimiento se inicia con la ayuda del botón **Carga automática en el almacén** que se encuentra en la cabecera del documento y respeta una serie de parámetros establecidos previamente en la factura. Para detalles, consulta el procedimiento idéntico: [Carga de facturas de compra en el almacén](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

El resultado puede ser visualizado en Logística > [Registros](/docs/logistics/warehouse/stock-records/records) o en el procedimiento [Carga de facturas de compra en el almacén](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse), pestaña *Resumen*.

:::note Nota
Si en los *Parámetros de facturas de compra* está activo el indicador **Carga/Descarga automática**, al momento de activar el indicador *Controlada* en la cabecera de la factura, se propondrá automáticamente cargar el documento en el almacén. Por lo tanto, este campo será editable solo una vez activado el campo *Controlada* e ingresado el *Número de documento*.
:::

### *Cumplimiento DDT*

El procedimiento permite la creación de una factura de compra mediante el cumplimiento de uno o más DDT de compra.

En la cabecera del documento, al presionar el botón **Cumplimiento DDT**, se abrirá el formulario en el que es posible filtrar los DDT a nombre del proveedor del documento. Por lo tanto, es posible insertar los artículos dentro de la factura, cumpliendo total o parcialmente los DDT.

Para poder utilizar este procedimiento, hay ciertas condiciones iniciales que deben ser respetadas:

- el proveedor de los DDT debe ser el mismo que el de la factura;  
- el DDT que se desea evadir debe tener activo el indicador *Controlado* y no debe haber sido ya *Valorado*.

#### Procedimiento

Se deberá configurar en la cabecera de la nueva factura, el [Tipo de factura](/docs/configurations/tables/purchase/purchase-invoices-type) que se desea crear y el *Proveedor*. Una vez ingresados estos datos, se debe hacer clic en el botón *Cumplimiento DDT* para abrir el formulario de cumplimiento.

Los filtros para proveedor y divisa se llenarán automáticamente en función del proveedor ingresado en la factura.

En el área de filtro es posible elegir si visualizar los datos en una *Rejilla*, una *Estructura jerárquica* o ambas soluciones.

> La **Estructura jerárquica** permite tener una división más clara de los DDT disponibles para el cumplimiento y de los artículos contenidos en cada uno de ellos. También permite la selección masiva de todos los artículos contenidos dentro de un DDT simplemente activando el indicador en la fila del DDT.   
> La **Rejilla** permite una mayor personalización del formulario mediante la adición de campos desde el *Object navigator*. En este caso, la selección masiva debe hacerse mediante el uso de las teclas del teclado y haciendo clic en el botón *Seleccionar/Deseleccionar* en la barra de ribbon.

Una vez configurados todos los filtros deseados, al hacer clic en el botón de *Buscar* se visualizarán en la parte inferior todos los DDT controlados y no aún valorados o valorados parcialmente.

En la rejilla de resultados, el usuario tiene la posibilidad de:

 - Seleccionar todos o algunos de los artículos propuestos: para hacerlo, basta con seleccionar el indicador presente al inicio de la fila del artículo. La *Cantidad a evadir* se establecerá automáticamente igual a la *Cantidad restante*.  
 - Seleccionar algunos artículos para una *cantidad parcial*. En este caso, se deberá modificar la *Cantidad a evadir*.

Para completar el procedimiento, luego se deberá hacer clic en el botón *Transferencia*, que tomará todos los datos presentes en los DDT seleccionados y los ingresará en la factura.

#### Botones específicos

> **ricerca**: permite buscar DDT disponibles para la transferencia.  
> **trasferimento**: permite transferir los artículos/pedidos seleccionados.  
> **seleziona tutto**: permite seleccionar todos los artículos de la lista.  
> **deseleziona tutti**: permite deseleccionar todos los artículos de la lista.  
> **seleziona**: permite activar los indicadores para todas las filas seleccionadas con el mouse.   
> **deseleziona**: permite desactivar los indicadores para todas las filas seleccionadas con el mouse.

### *Cumplimiento de pedido*

El procedimiento permite la creación de una factura de compra mediante el cumplimiento de uno o más pedidos de proveedor.

En la cabecera del documento, al presionar el botón **Cumplimiento de pedidos** se abrirá el formulario en el que es posible filtrar los pedidos relacionados con el proveedor del documento. Por lo tanto, es posible insertar los artículos dentro de la factura, cumpliendo totalmente o parcialmente un pedido entero o una línea.

Para poder utilizar este procedimiento, hay ciertas condiciones iniciales que deben ser respetadas:

- el proveedor de los pedidos debe ser el mismo que el de la factura;  
- el pedido que se desea evadir debe tener activo el indicador *Impreso* y debe haber sido ya *Confirmado*.

#### Procedimiento  

Se deberá configurar en la cabecera de la nueva factura, el [Tipo de factura](/docs/configurations/tables/purchase/purchase-invoices-type) que se desea crear y el *Proveedor*. Una vez ingresados estos datos, se debe hacer clic en el botón *Cumplimiento de pedidos* para abrir el formulario de cumplimiento.

Los filtros para proveedor y divisa se llenarán automáticamente en función del proveedor ingresado en la factura.

En el área de filtro es posible elegir si visualizar los datos en una *Rejilla*, una *Estructura jerárquica* o ambas soluciones.

> La **Estructura jerárquica** permite tener una división más clara de los diversos pedidos y de los artículos contenidos en cada uno de ellos. También permite la selección masiva de todos los artículos contenidos dentro de un pedido simplemente activando el indicador en el pedido.   
> La **Rejilla** permite una mayor personalización del formulario mediante la adición de campos desde el *Object navigator*. En este caso, la selección masiva debe hacerse mediante el uso de las teclas del teclado y haciendo clic en el botón *Activar/Desactivar solo filas seleccionadas* en la barra de ribbon.

Una vez configurados todos los filtros deseados, al hacer clic en el botón de *Buscar* se visualizarán en la parte inferior todos los pedidos impresos, confirmados y no cumplidos o cumplidos parcialmente.

:::note Nota
El procedimiento toma todos los datos presentes en el pedido y, como consecuencia, se aplicarán las condiciones de compra presentes en el pedido, incluso si estas han cambiado actualmente.   
En el caso de cumplimiento de múltiples pedidos que tengan la misma solución de pago y/o misma destinatario, se informarán en la factura las informaciones contenidas en el pedido; alternativamente, se tomarán las del registro del proveedor. 
:::

En la rejilla de resultados, el usuario tiene la posibilidad de:

 - Seleccionar todos o algunos de los artículos propuestos: para hacerlo, basta con seleccionar el indicador presente al inicio de la fila del artículo. La *Cantidad a evadir* se establecerá automáticamente igual a la *Cantidad restante*.  
 - Seleccionar algunos artículos para una *cantidad parcial*. En este caso, se deberá modificar la *Cantidad a evadir*.

Para completar el procedimiento, luego se deberá hacer clic en el botón *Cumplimiento*, que tomará todos los datos presentes en el pedido y los ingresará en la factura.

#### Botones específicos 

> **ricerca**: permite buscar los pedidos del proveedor.  
> **evasione**: permite transferir los artículos/pedidos seleccionados.  
> **evasione forzata ordine**: permite el cumplimiento forzado del pedido o de las líneas de artículo seleccionadas.  
> **seleziona tutto**: permite seleccionar todos los artículos de la lista.  
> **deseleziona tutti**: permite deseleccionar todos los artículos de la lista.  
> **attiva solo righe selezionate**: permite activar los indicadores para todas las filas seleccionadas con el mouse.   
> **disattiva solo righe selezionate**: permite desactivar los indicadores para todas las filas seleccionadas con el mouse.

:::important Recuerda
En el caso de múltiples cumplimientos parciales para una determinada línea de artículo dentro de la misma factura, es posible elegir si sumar las cantidades en una única línea en la factura o si mantener líneas distintas, respectivamente desactivando o activando el indicador **Cumplimiento de cantidad de artículo no sumada** en la tabla de [Tipos de facturas de compra](/docs/configurations/tables/purchase/purchase-invoices-type).
:::

### *Sdi - Cierre de documentos*

Con el botón **Sdi - Cierre de documentos** se abre el módulo para vincular manualmente eventuales pedidos y DDT de compra a las facturas generadas por los xml recibidos. Este procedimiento también se inicia automáticamente cuando se realiza este vínculo desde la máscara [Documentos de compras entrantes](/docs/finance-area/sdi-documents/incoming-purchase-documents).          
El módulo se divide en dos secciones principales: una a la izquierda, dedicada a la visualización de los DDT y de los Pedidos, y una a la derecha, que muestra los artículos de la factura. 

La rejilla de pedidos y DDT contiene las siguientes columnas:        
- Número de fila de la factura vinculada
- Tipo de documento
- Número
- Fecha
- Número de fila
- Clase de artículo
- Códigos de artículo
- Descripción de artículo
- Cantidad
- Precios
- Descuento total
- Importe neto
- Precio unitario neto        

Las filas ya vinculadas a los artículos de la factura se resaltarán en verde para facilitar su identificación.

La rejilla de las facturas contiene las siguientes columnas:        
- Número de fila
- Clase de artículo
- Códigos de artículo
- Descripción de artículo
- Cantidad
- Precios
- Descuento total
- Importe neto
- Precio unitario neto      

Las filas ya vinculadas a los artículos de DDT o Pedidos se resaltarán para facilitar la verificación.

En estas rejillas se visualizarán solo las filas de los DDT o de los Pedidos que no han sido ejecutadas o forzadas previamente. 
Para ejecutar el vínculo, es necesario ingresar el número de fila de la factura en la columna *Número de fila de factura vinculada* y hacer clic en la barra de herramientas en **Asociar**. 

:::note
El mismo número de factura no puede ser vinculado al mismo tiempo a un DDT y a un Pedido. 
:::

Con el botón **associa**, las filas con el "Número de fila de factura vinculada" se ejecutarán en los DDT o en los Pedidos correspondientes.        
El botón **rollback associa** permite anular el vínculo, restaurando el estado de ejecución correcto para los DDT o los Pedidos.

Durante la fase de vinculación, el sistema realiza algunos controles para garantizar la congruencia de los datos:       
- Precios: Diferencias entre los precios reportados en los pedidos/DDT y los de la factura generada automáticamente.
- Descuentos: Discrepancias entre los valores totales de los descuentos.
- Precio Neto Unitario: Diferencias entre el precio neto unitario indicado en la factura y el que está indicado en los DDT/Pedidos.
- Importe Total: Diferencias entre el importe total de la factura y la suma de los importes totales de las filas ejecutadas en los DDT/Pedidos.

Si uno o más de estos controles fallan, la vinculación no se realiza automáticamente y el error se reporta en la rejilla de errores, con la indicación del número de fila de la factura y la descripción del error.

## **3. Artículos**

En esta pestaña se ingresan todos los artículos con sus respectivos datos.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para insertar un nuevo artículo en la rejilla, basta con posicionarse en la fila para completar los diversos datos o utilizar el botón *Nuevo artículo* presente en la barra de ribbon.

:::note Nota
Si la factura fue creada mediante el cumplimiento de un pedido de proveedor o de un DDT de compra, los siguientes datos se tomarán del documento de partida.
:::

### 3.1 Datos obligatorios

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo de línea** ofrece la posibilidad de seleccionar, desde el combo-box, artículos con características diferentes:
> - *Artículo codificado*: son los artículos codificados en el registro y pueden ser contabilizados en contabilidad analítica y registrados en almacén. <br />
> - *Artículo no codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica, pero no pueden ser movidos a almacén. <br />
> - *Artículo de gastos*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gastos es codificado y de interés fiscal se moverá a almacén; si es no codificado o no de interés fiscal no se moverán a almacén. <br />
> - *Artículo de notas*: son notas descriptivas que se reportan en la impresión del documento; no inciden en la contabilidad y en el almacén.
> - *Artículo de cortesía*: el artículo de cortesía se gestiona como un artículo codificado o no codificado a efectos fiscales y de almacén, pero siendo un regalo se contabiliza por separado en los resúmenes del documento y en base al indicador de Reposición IVA, se calcula el importe del IVA del regalo a cargo del sujeto o no.

:::note Nota
Si se comienza directamente con la inserción del artículo, su clase, código y tipo de línea (*Artículo codificado*) se ingresan automáticamente.
:::

- **Clase/Código/Descripción del artículo (Classe/Codice/Descrizione articolo)**: se pueden ingresar [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la ayuda de la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), la cual propondrá todos los datos relacionados ingresados en la *Anagrafica artículo*. 
Después de la inserción del artículo, su *Descripción* se tomará automáticamente del registro. Si el artículo tiene *Variantes*, será posible seleccionar la variante deseada de la pestaña *Datos*.

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **prezzo**: el precio se propone desde el listado ingresado en el registro de contacto; el listado de referencia para el artículo mismo es visualizado en la pestaña *Descuentos/Listados*. El mismo documento podría contener artículos con precios tomados de listados diferentes, si en el registro del sujeto están asociados múltiples listados en cascada (ver [Registro de contactos](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). A través del doble clic en el campo **Listados** (pestaña *Descuentos/Listados*), el usuario tiene la posibilidad de seleccionar un listado diferente al predeterminado, desde el cual se tomará el precio del artículo ingresado.    
En ausencia del listado, el dato propuesto puede ser tomado del *último costo* del registro del artículo, si en los [Parámetros de facturas de compra](/docs/configurations/parameters/purchase/purchase-orders-parameters/) el indicador *Costo a cero en ausencia de listados* no está activo.

- **importo**: se calcula automáticamente neto de los descuentos.

- **totale sconti**: indica el importe total de los descuentos presentes en la pestaña *Descuentos/Listados* para cada línea de artículo.   

- **iva**: tiene prioridad el dato ingresado en el campo IVA del *Registro de contacto*. Si este no está presente, se propone el valor presente en la *Anagrafica artículo*, pero el usuario tiene la posibilidad de ingresar un dato diferente.

### 3.2 Datos opcionales de los artículos

- **Código/Descripción del artículo proveedor (Codice/Descrizione articolo fornitore)**: en esta sección se podrá agregar el código y la descripción que el proveedor utiliza para identificar el artículo; este dato se propone automáticamente si en el registro del artículo, pestaña [Proveedores preferenciales](/docs/erp-home/registers/items/create-new-item) se ha asociado un artículo proveedor. 

- **tipo fatturato acquisti**: se propone el dato ingresado en la pestaña [Generalidades](/docs/erp-home/registers/items/create-new-item) del registro de artículos. Si este no está presente, no se propone ningún dato y en el momento de la contabilización de la factura, se considerará el valor ingresado en el campo *Costo/Ingreso de contrapartida predeterminado* del registro de contacto.

#### Botones específicos

> **ricalcolo conai**: si la [Gestión Conai](/docs/purchase/purchase-flow/conai) está habilitada para el documento, es posible recalcular los valores con este botón tras eventuales modificaciones.
>
> **gestione imballi**: permite la apertura de la gestión de los embalajes a devolver utilizados en el documento de compra.   
El botón se activará si el documento está guardado, pero no cargado. Al hacer clic en este botón se abre el formulario correspondiente donde ingresar la cantidad, seleccionar la línea y ejecutar la transferencia del embalaje seleccionado en las líneas de artículo haciendo clic en el botón **execute**. En este formulario se reportan los artículos que han sido ingresados con la naturaleza Embalaje y que están presentes en la tabla de [Embalajes a devolver](/docs/configurations/tables/logistics/package-to-be-returned).      
>
> **storno ricevimenti**: el botón está activo solo para los [Tipos de facturas de compra](/docs/configurations/tables/purchase/purchase-invoices-type) que tienen la *Naturaleza* de tipo *Nota de crédito*. En el formulario se visualizan todas las facturas a nombre de ese proveedor. Después de seleccionar las líneas de artículo y las cantidades correspondientes a anular, será suficiente presionar el botón *Anulación de recepciones* para insertarlas en la factura.    
>
> **aggiornamento listini**: el botón **Actualizar listado actual (Aggiorna listino corrente)** permite actualizar los precios en el listado actual para cada línea de artículo seleccionada.    
El botón **crea nuovo listino con nuova validità**, en cambio, abrirá un pop-up en el que ingresar las fechas de validez del nuevo listado, que contendrá solo las filas seleccionadas y estará a nombre del proveedor ingresado en la factura.   

:::important Recuerda   
Cuando se crea/actualiza un listado mediante este procedimiento, solo se reportan en el listado aquellos descuentos que han sido ingresados manualmente en la factura. 
:::

### 3.3 Descuentos/Listados

- **listino**: se propone el listado del cual se tomó el precio del artículo, con la fecha de inicio/final de validez y con las condiciones particulares (por ejemplo, **Tipo de tramo** de descuento) asignadas al artículo en el listado.

- **prezzo manuale**: se activa automáticamente cuando el precio del artículo ha sido ingresado o modificado manualmente.

- **sconti**: se proponen todos los descuentos asociados al artículo, cada uno con su propia base de cálculo y atribución.        

### 3.4 Datos del artículo 

Dentro de esta pestaña se reportan/inserten más informaciones relacionadas con el artículo.

- **articolo**: reporta clase, código y descripción del artículo seleccionado en la rejilla.   
- **variante**: en este campo es posible seleccionar una variante del artículo entre las previamente codificadas en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) del registro del artículo. Si en el listado se han ingresado precios y/o descuentos diferentes para cada variante, estos se actualizarán cuando se seleccione una variante diferente del artículo.     
- **note**: son las notas relacionadas con la línea de artículo, pueden ser ingresadas también a través de la ayuda de notas codificadas. Serán reportadas en todos los documentos generados por esto.   
- **Almacén y causal (Magazzino e causale)**: se proponen el almacén y la causal de referencia que aparecerán automáticamente al momento de cargar los artículos relacionados en el almacén. Los datos se obtienen de los [Tipos de facturas de compra](/docs/configurations/tables/purchase/purchase-invoices-type) o del pedido de proveedor o del DDT, si la factura deriva del cumplimiento de un pedido o de la valoración de DDT. Pueden ser modificados manualmente para cada línea de artículo.   
- **ubicazione**: se propone automáticamente si a la causal utilizada se le ha asociado una ubicación en la tabla de [Causales de almacén](/docs/configurations/tables/logistics/warehouse-templates) o si el artículo ha sido ingresado en la [Mapa de ubicaciones por artículo](/docs/logistics/warehouse/location/item-location-map/). Puede ser ingresado o modificado manualmente.  
- **Unidad de medida/Cantidad alternativa (Unità di misura/Quantità alternativa)**: si en el [registro del artículo](/docs/erp-home/registers/items/create-new-item) se ha codificado una unidad de medida alternativa con el indicador *Predeterminado* y en los Parámetros de pedidos de proveedor se ha activado el indicador *Propuesta automática U.M. alternativa*, estos valores se propondrán automáticamente al momento de la inserción del artículo, de lo contrario, es posible seleccionar una entre las unidades de medida alternativas codificadas para el artículo.   
- **Precio unidad de medida alternativa (Prezzo unità di misura alternativa)**: si está activo indica que el precio ingresado en la línea de artículo se refiere a la unidad de medida alternativa y no a la principal.    
Este indicador junto a los campos *Unidad de medida alternativa* y *Cantidad alternativa* son visibles solo si en los [Parámetros de facturas de compra](/docs/configurations/parameters/purchase/purchase-invoices-parameters) se ha activado el indicador *Gestión de doble unidad de medida*.
- **progetto**: representa el proyecto a asociar al documento. Si en la cabecera del documento se ha ingresado un proyecto, este se reportará en todas las líneas de artículo; alternativamente, puede ser seleccionado a través de la ayuda de proyectos correspondiente.   
- **rivalsa iva**: si está configurado, el IVA del regalo se considera para el total de la factura.
- **marca**: representa la marca del artículo, tomada de su registro o del listado del artículo.
- **riferimento ordine**: en caso de que la factura sea generada a partir de un pedido, la referencia al pedido se reportará automáticamente en este campo.
- **dettaglio dichiarazioni**: se reporta la [Declaración de intención](/docs/finance-area/declarations/declarations/intent-declaration) utilizada para proponer el IVA del artículo; desde el combo box es posible cambiar la declaración de intención de referencia, si hay más de una declaración válida.

### 3.5 Lotes y Números de serie

En las dos rejillas pueden ser ingresados los lotes y números de serie que deben ser cargados en el almacén.   
Si el artículo no prevé la gestión de [Lotes y Números de serie](/docs/erp-home/registers/items/create-new-item), esta pestaña estará deshabilitada.

:::tip Recuerda
Si en los [Parámetros de facturas de compra](/docs/configurations/parameters/purchase/purchase-invoices-parameters) el indicador *Lotes y S.N. obligatorios* está deshabilitado, será posible guardar el documento sin ingresar los lotes/números de serie. Además, si la *Tipología de extracción* del lote codificada en el [registro del artículo](/docs/erp-home/registers/items/create-new-item) es *FIFO* o *Fecha de caducidad* al momento de la carga en almacén de la factura, los lotes serán propuestos automáticamente, si no han sido ya ingresados previamente.
:::

### 3.6 Analítica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.7 Datos Extra

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.8 Documentos adjuntos

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.9 Material Conai para el artículo

Esta pestaña es visible si para la empresa activa se ha activado la gestión de Conai.

Esta sección reportará los materiales de embalaje que componen el artículo, con la unidad de medida correspondiente, peso unitario (sujeto a la eventual tasa de exención del registro del cliente) y el total del peso obtenido de la multiplicación entre el número de artículos vendidos y el peso unitario.    
Al guardar el documento, o al presionar el botón **Recalcular Conai**, Fluentis insertará una o más líneas de gastos recuperando el artículo de los materiales, con una cantidad igual a la suma de las cantidades y precio igual al costo conai para ese material.

Para más información sobre la [Gestión Conai](/docs/purchase/purchase-flow/conai) en Fluentis ver la página adjunta.

### 3.10 Costos a recibir 

Las pestañas **Costos a recibir** y **Gastos** no son gestionadas en la versión actual de Fluentis.

### 3.11 Sección de valores

La sección en la parte inferior, a la derecha, presenta el resumen de los costos que contribuyen a la formación del precio final de cada artículo seleccionado en la rejilla de artículos. 

- **Precio unitario**: el valor del campo *Precio*; 
- **Cantidad**: el valor del campo *Cantidad* o *Cantidad alternativa*, dependiendo del indicador *Precio unidad de medida alternativa*;
- **Importe de línea**: Precio artículo * Cantidad artículo; 
- **Total de descuentos**: la suma de los descuentos del artículo, incluidos también los descuentos finales;
- **Importe**: Importe de línea - Total de descuentos;
- **Impuesto**: Importe * tasa IVA del artículo; 
- **totale**: Importe + Impuesto.

## **4. Resúmenes**

En las diversas secciones de esta pestaña se presentan las informaciones principales del documento completo y algunos botones específicos.

### 4.1 Descuentos finales

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos

Se proponen los gastos ingresados en el registro de contacto, en la pestaña *Gastos/Descuentos*. En esta rejilla, eventuales gastos deben ser ingresados en positivo, eventuales descuentos en negativo.      

Estos elementos se aplican a la totalidad del documento y no están distribuidos entre las líneas de los artículos. Pueden incluir costos adicionales, descuentos globales, o incrementos aplicados a todo el documento. Si se establecen en el registro del artículo, se proponen automáticamente al momento de la creación del documento.

- **Tipo/Descripción (Tipo/Descrizione)**: permite elegir los tipos de gasto (predeterminados en la tabla [Tipos de gastos](/docs/configurations/tables/general-settings/expenses-types)), atribuyendo al tipo la porcentaje de gasto a aplicar.  
- **importo spesa**: indica el valor del gasto expresado en la divisa del documento.    
- **IVA**: indica la tasa IVA a aplicar a los gastos ingresados.   
- **percentuale/valore**: indica si calcular los gastos con un porcentaje o con un valor monetario predeterminado. Si se selecciona *valor*, el importe del gasto debe ser ingresado bajo la voz homónima.      
- **percentuale**: valor numérico del porcentaje de gasto.  

:::note Nota
Si el *Tipo de gasto* ingresado tiene el indicador [repartido](/docs/configurations/tables/general-settings/expenses-types) activo, durante la carga de la factura en el almacén, el gasto será repartido entre todos los artículos en función de los importes totales de cada línea de artículo. El resultado de la repartición del gasto es visible en la [registro de almacén](/docs/logistics/warehouse/stock-records/record).    
1. Si los artículos tienen un precio: el gasto total será repartido proporcionalmente sobre los importes netos de cada artículo; el resultado se sumará al precio inicial del artículo en el campo *Total importe* de la registro. Si para algunas líneas el importe es 0, este será considerado como 1 para permitir una repartición del gasto sobre todos los artículos.   
2. Si todos los artículos tienen un precio igual a 0: el gasto será distribuido equitativamente entre todas las líneas de artículo y, a partir de esta distribución, se calculará el *importe movimiento/importe gestionable* en el registro, teniendo en cuenta las cantidades de cada artículo.   
:::

### 4.3 Resúmenes IVA

Se propone el resumen IVA del documento, para cada código IVA.

### 4.4 Resumen de vencimientos

Representa el resumen de los vencimientos del documento, para cada *tipo* y *solución* de pago.  
- **numero**: valor progresivo de la fila.  
- **pagamento**: representa el código alfanumérico del *Tipo de pago* tomado de la *Cabecera del documento > pestaña Pagos*.  
- **importo**: Importe de la vencimiento calculado. Puede ser forzado manualmente, en cuyo caso se activa automáticamente el siguiente indicador *Modificación manual*. (Se activan automáticamente controles y avisos sobre la cuadratura entre los valores de las vencimientos y el total de la factura)
- **data scadenza**: Fecha de la vencimiento calculada. Puede ser forzada manualmente, en cuyo caso se activa automáticamente el siguiente indicador *Modificación manual*.
- **spese di incasso**: Campo en el que se reportan los gastos de cobranza calculados.
- **IVA**: a aplicar a los gastos de cobranza (puede ser también establecido manualmente).
- **Causal de pago (Causale pagamento)**: es posible insertar directamente en la factura una causal contable que dé lugar a una escritura automática de cobro/pago. NB prestar atención al template de la causal porque utilizará las cuentas presentes incluso sin subcuenta, razón por la cual está presente el siguiente campo.
- **Cuenta subcuenta cliente/proveedor (Conto sottoconto cliente / fornitore)** que usa para cobrar/pagar (caja o banco, por ejemplo) la vencimiento, sobrescribiendo la cuenta presente en la causal contable de pago (o cobro).
- **segno**: solo las vencimientos que tienen este indicador son luego gestionadas en pago con causal y cuenta establecido.
- **Modelos de referencia de pago (Modelli riferimento pagamento)**: Modelo de creación del código de pago. En algunas localizaciones extranjeras, cada vencimiento en la factura prevé un código atribuido por quien emite la factura: este código se estructura según algunos modelos específicos (tabla MB_PaymentReferenceModels), para poder construir el código con un algoritmo.
- **Códigos de modelos de pago (Codici modelli pagamento)**: Este es el código (estructurado como según el modelo anterior) que se reportará en la partida y luego en los pagos que se envían al banco, de modo que este comunique al beneficiario cuál es la vencimiento que ha sido pagada (y así automatizar la importación de los movimientos bancarios con cierre de partida). Desde aquí se compila dentro de la partida y en el archivo Sepa.
- **Fecha límite para descuento anticipado (Data limite pag anticipato)**: Este es un campo previsto en el trazo de las facturas Sdi, la fecha límite para poder aplicar el descuento financiero.
- **tipo sconto**: Tipo de descuento financiero.
- **valore sconto**: Valor del descuento financiero en el cobro.

### 4.5 Otros campos

**note finali**: es un campo libre que puede ser completado por el usuario también con la ayuda de la *Ayuda notas codificadas*.

### 4.6 Totales del documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />