---
title: Nuevo DDT de venta
sidebar_position: 2
ai_generated: true
---

El formulario **Crear DDT de venta** se abre a través de la ruta **Ventas > DDT > Crear DDT de venta** o mediante el botón **Nuevo** que se encuentra en el formulario [Búsqueda de DDT de venta](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn).

## *Cómo crear un DDT de venta*<!-- *Come creare un DDT di vendita* -->

## **1. Datos obligatorios**<!-- **1. Dati obbligatori** -->

Para continuar con la creación del DDT de venta, el usuario debe ingresar los campos obligatorios:
- **Tipo de DDT**: predefinido en *Configuración > Tablas > Ventas > [Tipos de DDT](/docs/configurations/tables/sales/delivery-notes-type)*.
- **Número**: a cada documento se le asigna un número según la numeración especificada por el usuario y el tipo de documento que contiene la numeración. La numeración asociada al tipo de DDT prevé generalmente una progresión automática basada en fecha y número, con una función de recuperación que cubre posibles huecos en la secuencia (por ejemplo, causados por la eliminación de documentos). Este comportamiento está regulado por dos flags específicos en la tabla de numeración. Si el usuario desea ingresar manualmente el número, puede desactivar el flag de progresión fecha-número (que garantiza el incremento de la numeración en fechas futuras) y el flag de recuperación de números. Además, deberá habilitar el flag de numeración externa, indicando así al sistema que la numeración será gestionada manualmente.
- **Cliente**: ingresable usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), introduciendo [directamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) los datos o utilizando el procedimiento automático si se elige crear los documentos mediante la [Ejecución de DDT desde pedido de cliente](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). Al ingresar el cliente, se completan automáticamente, si están presentes en el registro maestro, los siguientes campos, que se explicarán en las secciones siguientes: moneda, país, idioma, zona, envío, tarifa y posibles descuentos, pagos, descuentos, gastos, agentes, destino, transportistas, datos extra.
- **Fecha**: indica la fecha de creación del DDT. Esta fecha es fundamental para el cálculo de los vencimientos y de las posibles condiciones de pago. Se propone la fecha actual, modificable; en el caso de que la numeración contemple una progresión de fecha y número, y se ingrese una fecha en el pasado, Fluentis controlará la disponibilidad de números en esa fecha para garantizar la progresión, y si no está presente avisará al usuario que no hay números disponibles en esa fecha.

El formulario contiene una serie de pestañas.

## **2. Encabezado**<!-- **2. Testata** -->

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o, según los procedimientos que elija, la aplicación completará los campos *automáticamente*.

:::note Recuerda<!-- Ricorda -->
Si el documento es *creado automáticamente*, estos datos se recuperan del *documento de origen* desde el cual se generó.
:::

Al ingresar el **Cliente**, se *proponen* automáticamente todos los datos específicos de la pestaña **Encabezado<!-- Testata -->**, según los valores establecidos previamente en el [registro maestro de clientes](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:  
- **Moneda<!-- Divisa -->**: sección que contiene los datos de [Moneda](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha valor](/docs/guide/common/glossary/glossary-intro#currency-date).
- **País<!-- Nazione -->**: sección que contiene los datos de [País](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Envío<!-- Spedizione -->**: sección que contiene los datos de [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Tarifa](/docs/guide/common/glossary/glossary-intro#sales-price-list) (en el encabezado del documento se inserta la tarifa registrada en el maestro del cliente con el flag Default) con el tipo de tramo de descuento y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Otros campos de encabezado<!-- Altri campi testata -->

- **Impresa**: se activa cuando se realiza la impresión del documento e identifica que el documento ha sido impreso; este flag también es importante para permitir la ejecución del DDT en otros documentos.
- **Descargada**: este flag se activa automáticamente cuando el documento se mueve al almacén<!-- magazzino -->, con el botón de la barra de herramientas *Descarga automática* o con los procedimientos disponibles.<!-- movimentato a magazzino -->
- **Ajustado en valor**: este flag se activa cuando el DDT se valora en una factura.
- **Valorado parcialmente**: este flag indica que el DDT ha sido valorizado solo parcialmente en factura.
- **Valorado forzadamente**: este flag se activa si el DDT se ha cerrado forzadamente con la ejecución forzada de los artículos; por ejemplo, cuando el saldo restante no se entregará y el documento se considera cerrado aunque no lo esté.
- **Anulado**: el flag activo permite anular el pedido.

:::note
Los flags se pueden quitar con los procedimientos de restauración de operación.
:::

- **Código único de proyecto/Código identificativo de licitación**: si en la [información fiscal](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) del registro del cliente está habilitada la gestión de CIG y CUP, será posible completar estos datos en el documento.
- **Notas del cliente**: este campo se toma del pedido que creó el DDT, pero también se puede ingresar manualmente.
- **Nuestra referencia/vuestra referencia**: en estos campos generalmente se indica una referencia interna y una referencia del cliente para el documento; en el caso de que el DDT se genere mediante un procedimiento de creación automático, estos campos se completarán con la información presente en el documento de origen (esta transferencia es válida solo en el caso de DDT creado tomando los datos de un solo documento de origen).
- **Referencia al número de orden del cliente**: en este campo se ingresa automáticamente el pedido del cual deriva el DDT.
- **Referencia a la fecha de orden del cliente**: en este campo se inserta automáticamente la fecha de la orden de la que deriva el DDT; junto con el campo anterior, crea los datos necesarios para la etiqueta 2.1.2 del archivo xml de la factura electrónica, cuando ésta se cree; si no se completan, se tomará en su lugar el campo Vuestra Referencia.
- **Notas iniciales DDT**: se pueden seleccionar las notas que se han insertado previamente en la tabla homónima que se encuentra en el recorrido *Configuración > Utilidades > Gestión de notas codificadas*; para esto, el usuario debe hacer doble clic en el campo para abrir la Ayuda y seleccionar los datos; de lo contrario, puede introducirlos manualmente.
- **Proyecto**: es posible asociar un proyecto al documento.
- **Operador**: permite ingresar el usuario que crea el documento. Los empleados han sido insertados previamente en la tabla *Home > Empleados*; el dato se vuelve obligatorio si la opción se establece en los [Parámetros](/docs/configurations/parameters/sales/dn-parameters) del propio documento.
- **Estado de ejecución**: cuando el pedido es ejecutado a través de documentos DDT o facturas, su estado de ejecución cambia automáticamente de *No ejecutado* a *Parcialmente ejecutado* o *Ejecutado*; el usuario puede forzar la ejecución de un pedido no totalmente ejecutado y cuando esto ocurre, también se guarda la fecha de ejecución.
- **Plazo**: es la fecha de inicio para el cálculo de los vencimientos de pago.
- **Audit Trail**: como en todos los documentos, esta sección muestra la fecha de creación del documento con el operador, y la fecha de la última modificación del documento con el operador.

#### Botones específicos<!-- Pulsanti specifici -->

> [Ejecución desde pedidos](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (ver la documentación relacionada).  
> [Descarga automática](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (ver la documentación relacionada)  
> **Ayuda destinatarios/destinos**: este botón abre la Ayuda para poder elegir el destinatario/destino para el documento, entre los disponibles para el cliente y por lo tanto codificados en su registro maestro.
> **Insertar agente en las filas**: este botón abre un pop en el que insertar un registro de agente, que se asignará a todas las filas de artículo, agregándose eventualmente a Agentes ya presentes.
> **Sustituir CIG/CUP en las filas**: después de especificar CIG y/o CUP en el encabezado, es posible sustituir en masa dichos datos en las filas de artículo ya insertadas.
> **Borrar**: borra los descuentos seleccionados en la pestaña *Descuentos* del Encabezado.

En el encabezado también están presentes algunas pestañas que analizamos a continuación.

### 2.1 Pagos

Las **Soluciones de pago** se trasladan automáticamente desde el documento de origen o desde el *Registro maestro del cliente > pestaña Pagos* y pueden ser modificadas/borradas por el usuario.
Si al **Tipo de pago** se le asocia un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en los vencimientos del documento y no en el total del pedido.

#### Botón específico*
> **Borrar pagos**: se utiliza para borrar las filas de pago seleccionadas.

### 2.2 Descuentos

Solo se proponen los descuentos predeterminados tomados del *Registro maestro de clientes > pestaña Descuentos* y pueden ser modificados/borrados por el usuario.

:::important Recuerda<!-- Ricorda -->
Para poder gestionar los descuentos sobre imponible es necesario activar desde la base de datos el parámetro general GEN-GlobalSettings_CalculateDiscountOnAmount para la empresa de interés.
Si este parámetro no está activo, los descuentos sobre imponible se transformarán en descuentos en cascada.
:::

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agentes

Indica el código del agente y su comisión por cada fila de artículo. Se propone el código y el porcentaje definidos en el *Registro maestro de clientes > pestaña Agentes*.
Si la comisión no está vinculada al cliente en su registro maestro, de todos modos, se debe ingresar el agente pero con comisión NULL porque si tiene comisión 0, significaría que el agente está vinculado al cliente pero no percibe comisión.
La misma sección se mostrará para cada fila de artículo en la correspondiente pestaña *Agentes*.

#### Botón específico*
> **Borrar agentes**: permite borrar los agentes seleccionados.

### 2.4 Datos extra<!-- Extra Data -->

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Procedimientos de encabezado<!-- Procedure testata: -->

### *Ejecución desde pedido*<!-- *Evasione da ordine* -->

En el encabezado del DDT, al pulsar el botón **Ejecución desde pedido**, se abrirá el formulario donde es posible filtrar los pedidos confirmados del cliente del documento y transferirlos al DDT. Es posible realizar la operación de creación de DDT desde pedido también desde la [Búsqueda de pedidos](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

Mediante este procedimiento es posible crear un DDT de venta a partir de la ejecución del correspondiente pedido de cliente. Por lo tanto, se pueden insertar los artículos dentro del DDT, ejecutando total o parcialmente un pedido completo o una línea.

Para poder utilizar este procedimiento existen condiciones iniciales que deben cumplirse:

 - El/los clientes de los pedidos deben ser los mismos que el del DDT;
 - El pedido que se desea ejecutar debe tener activado el flag *Impreso* y la *Fecha de confirmación de pedido*;
 - En la tabla [Tipos de DDT](/docs/configurations/tables/sales/delivery-notes-type) debe estar marcado el flag de *Pedido* (que indica que el DDT puede derivar de un pedido).
 - Solo si el procedimiento se realiza desde la Búsqueda de pedidos, los tipos de documentos deben ser compatibles: en la tabla [Tipos de pedido](/docs/configurations/tables/sales/sales-order-types) el tipo de pedido a ejecutar debe tener establecido el tipo DDT correspondiente.

Luego será necesario establecer en el encabezado del nuevo DDT el *Tipo de DDT* que se desea crear (que debe corresponder al establecido en la tabla de *Tipos de pedidos*) y el *Cliente*. Una vez introducidos estos datos, será necesario pulsar el botón *Ejecución pedidos* para abrir el formulario de ejecución.

:::tip Recuerda<!-- Ricorda --> 
Cualquier anotación introducida en el encabezado del pedido (como *Nuestra/Vuestra referencia*, *Referencia al número de orden del cliente*, *Notas iniciales*) se trasladará al encabezado del DDT solo en caso de recuperación de datos desde un único pedido.
:::

#### Procedimiento:

Los filtros para cliente y moneda se reportarán automáticamente según el cliente seleccionado en el DDT.

Una vez configurados todos los *Filtros* deseados, al hacer clic en el botón de *Buscar* se mostrará en la cuadrícula una fila para cada pedido impreso, confirmado y no ejecutado o ejecutado parcialmente.

:::note Nota
El procedimiento toma todos los datos presentes en el pedido y como consecuencia se aplicarán las condiciones de compra presentes en el pedido, incluso si estas actualmente han cambiado.
:::

:::note Nota
Las filas de tipo Nota siempre serán visibles, incluso si ya han sido ejecutadas, hasta que todas las filas de los otros tipos hayan sido ejecutadas.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

 1. seleccionar el *pedido completo*. Para hacerlo simplemente marque el flag al inicio de la fila del pedido.
 2. seleccionar solo *algunos* de los *artículos* propuestos. Para hacerlo simplemente marque el flag al inicio de la fila de artículo.
 3. seleccionar solo *algunos artículos* para una *cantidad específica*. En este caso deberá modificar la cantidad a ejecutar.

Para completar el procedimiento, será necesario pulsar el botón *Transferir*, que tomará todos los datos presentes en el pedido y los trasladará al DDT.

#### Botones específicos

> **Buscar** permite buscar los pedidos de proveedor.  
> **Transferir** permite transferir los datos del pedido seleccionado dentro del nuevo DDT.  
> **Ejecución forzada del pedido** permite la ejecución forzada del pedido; en el caso de que se seleccionen algunas líneas del pedido, solo se ejecutarán forzadamente las líneas seleccionadas (con la adición del flag *Ejecutado forzado* en la correspondiente línea de artículo); en caso de que se ejecute el pedido completo, este también cambiará el estado en el encabezado.  
> **Ejecución pedidos** permite la ejecución del pedido.  
> **Expandir** permite expandir todo el árbol de pedidos en la cuadrícula de abajo, para visualizar los artículos contenidos en ellos.  
> **Comprimir** permite comprimir la visualización de las líneas de artículo, para visualizar solo las filas de pedido.  
> **Seleccionar todos** permite seleccionar todos los artículos de la lista.  
> **Deseleccionar todos** permite deseleccionar todos los artículos de la lista.  

### *Descarga automática*

El otro procedimiento presente en el encabezado del DDT es la descarga automática desde almacén<!-- magazzino -->. El botón se habilita si el documento está Impreso.  
Recordamos que si en los [Parámetros de DDT](/docs/configurations/parameters/sales/dn-parameters) está habilitada la descarga automática, este procedimiento se iniciará automáticamente una vez que el documento esté Impreso.  
Una vez iniciado el procedimiento, Fluentis controla la presencia de almacén<!-- magazzino --> y causal<!-- causale --> en las líneas del DDT y la posible presencia de lotes y números de serie si son requeridos; en caso de que el procedimiento no tenga éxito, se avisará al usuario con un error.  
Si el procedimiento es exitoso, se crea el [Registro de almacén<!-- Registrazione di magazzino -->](/docs/logistics/warehouse/stock-records/record) que mueve los artículos del documento y se introduce el flag **Descargado** en el encabezado del DDT.

:::important Recuerda
Si en los *[Parámetros de DDT](/docs/configurations/parameters/sales/dn-parameters#scarico) > pestaña Descarga* el flag **Crear registro con la fecha del documento** no está activo, el registro de almacén<!-- registrazione di magazzino --> siempre se ejecutará con la fecha actual.
Si el flag en los parámetros está activo, el registro se creará utilizando la *Fecha de transporte* indicada en la pestaña *Transporte* del DDT, si está rellenada, de lo contrario se utilizará la fecha del DDT.
:::

## **3. Artículos**<!-- **3. Articoli** -->

En esta pestaña se insertan todos los artículos con los datos correspondientes.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para insertar un **Nuevo artículo** en la cuadrícula basta con posicionarse en la fila para completar los distintos datos o utilizar el botón **Nuevo** presente en la barra de opciones. Las columnas disponibles son las siguientes:

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo de fila**: ofrece la posibilidad de seleccionar, desde la lista desplegable, artículos con diferentes características:
> - *Artículo codificado*: son los artículos codificados en el registro maestro y pueden ser contabilizados en contabilidad analítica y registrados en almacén<!-- magazzino -->.
> - *Artículo no codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica pero no pueden ser movidos en almacén<!-- magazzino -->.
> - *Artículo gastos*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gasto está codificado y es de interés fiscal se moverá en almacén<!-- magazzino -->, si no está codificado o no es de interés fiscal no serán movidos en almacén<!-- magazzino -->.
> - *Artículo notas*: son notas descriptivas que se reportan en la impresión del documento; no inciden en la contabilidad ni en el almacén<!-- magazzino -->.
> - *Artículo de obsequio*: el artículo de obsequio se gestiona como un artículo codificado o no codificado a efectos fiscales y de almacén<!-- magazzino -->, pero al ser un obsequio se cuenta por separado en los resúmenes del documento y según el flag "Rivalsa iva" se calcula el importe del IVA del obsequio a cargo del sujeto o no.
:::note[NOTA]
Si se comienza directamente con la inserción del artículo, su clase, el código y el tipo de fila - Artículo codificado se inserta automáticamente.
:::

- **Código de barras**: si en los [Parámetros DDT](/docs/configurations/parameters/sales/dn-parameters) se ha habilitado la gestión de códigos de barras, aparecerá la columna Código de barras donde seleccionar el dato para el artículo entre los códigos insertados en *Registro maestro de artículos > Códigos de barras*.

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Artículo cliente**: si en los [Parámetros DDT](/docs/configurations/parameters/sales/dn-parameters) se ha habilitado la gestión de Artículo cliente, aparecerá la columna Artículo cliente, con el código del artículo válido para el cliente titular del documento e insertado en *Registro maestro de artículos > Clientes*.

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
En ausencia de tarifa, el dato propuesto es el **precio de venta** tomado del *Registro maestro de artículos > pestaña [Costos](/docs/erp-home/registers/items/create-new-item)* o se recuperará según los parámetros del documento. Si tampoco se encuentra este dato, se registrará el precio 0.
:::

- **Base imponible**: en este campo se registra el Precio unitario, multiplicado por la cantidad de artículo, neto de descuentos.

- **Descuentos del artículo**: se muestra la suma de los descuentos previstos para el artículo.

- **Descuentos finales del artículo**: se muestra la suma de los descuentos finales insertados en el artículo en los resúmenes del documento.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Facturación de ventas**: se propone el dato insertado en el *Registro maestro de artículos > pestaña Generalidades*. Si esto no está presente, no se propone ningún dato pero al momento de contabilizar la factura, se tomará el valor insertado en el campo *Costo/Ingreso de contrapartida predeterminado* del *Registro maestro de clientes > Datos contables > pestaña Administrativa* o se generará un mensaje de error.

- **En factura**: este flag se inserta por defecto, pero se puede deshabilitar si el artículo no debe ser transferido a factura y, por lo tanto, no debe aparecer en los procedimientos de ejecución del DDT.

- **Peso neto**: se muestra el peso neto presente en el registro maestro del artículo, multiplicado por la cantidad de artículo de la fila.

- **Peso bruto**: se muestra el peso bruto presente en el registro maestro del artículo, multiplicado por la cantidad de artículo de la fila.

#### Botones específicos

> **Recalcular Conai**: si el [Conai](/docs/sales/sales-flow/conai) está habilitado para el documento, es posible recalcular los valores con este botón después de eventuales modificaciones.

> **Actualizar los datos Conai en el registro maestro de artículos**: si en la pestaña *Materiales Conai para el artículo* se modifican Unidad de medida y/o Peso, es posible transferir estos valores a la sección Conai del registro maestro del artículo.

> **Gestión de embalajes**: permite la apertura de la gestión de embalajes retornables usados en el documento de compras.
El botón se activa si el documento está guardado, pero no cargado.
Al hacer clic en este botón se abre el formulario correspondiente donde: ingresar la cantidad, seleccionar la fila y ejecutar la transferencia del embalaje seleccionado en las filas de artículo haciendo clic en el botón Execute. En este formulario se muestran los artículos que han sido ingresados con naturaleza Embalaje y que están presentes en la tabla de Embalajes retornables.

> **Actualización de tarifas**: haciendo clic en la flecha junto al botón se accede a dos procedimientos. El primer procedimiento es **Actualizar la tarifa actual**, que permite alinear el precio del artículo internamente en la Tarifa, tras una eventual variación de precio directamente en la fila del artículo. En cambio, con el segundo procedimiento, **Crear nueva tarifa con nueva validez**, es posible crear una nueva tarifa personalizada para el cliente titular del documento; se solicitarán, en un pop-up, las fechas de inicio y fin de validez de la nueva tarifa.

> **Mostrar/Ocultar detalles**: al hacer clic en este botón se muestran u ocultan las pestañas internas de los Artículos.

### 3.1 Descuentos/Tarifas

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Datos

Dentro de esta pestaña se reportan/insertan informaciones adicionales relacionadas con el artículo.

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Almacén y causal**: se proponen el almacén<!-- magazzino --> y la causal<!-- causale --> de referencia que aparecerán automáticamente en el momento de la descarga de los artículos correspondientes desde almacén<!-- magazzino -->. Los datos se recuperan de los *Tipos de DDT* o se ingresan manualmente.
- **Variante**: es posible elegir una variante del artículo, si ha sido codificada en el *Registro maestro de artículos > Variantes*.
- **Estado de ejecución**: en esta sección es posible verificar si la línea de artículo ha sido valorada, valorada parcialmente o valorada forzadamente.
- **Proyecto**: es el proyecto asociado al documento o puede ser asignado con la ayuda de la ayuda de campo.
- **Rivalsa IVA**: si está configurado el IVA del obsequio se considera para el total del documento.
- **Referencia de pedido**: hace referencia al pedido del cual se creó el DDT.
- **Nuestra referencia/vuestra referencia**: en estos campos generalmente se indica una referencia interna y una referencia del cliente para el documento; en el caso que el DDT se genere mediante un procedimiento de creación automática, estos campos se completarán con las indicaciones presentes en el documento de origen.
- **Número/Fecha de referencia**: muestran la Referencia al Número y a la Fecha del Pedido de cliente de origen.
- **Marca**: representa la marca del artículo, tomada de su registro maestro o de la tarifa del artículo.
- **En factura**: este flag se inserta por defecto, pero se puede deshabilitar si el artículo no debe ser transferido a factura y, por lo tanto, no debe aparecer en los procedimientos de ejecución del DDT.
- **Nota**: permite ingresar notas para cada artículo.
- **Detalle de declaraciones**: se muestra la [Declaración de intención](/docs/finance-area/declarations/declarations/intent-declaration) utilizada para proponer el IVA del artículo; desde la lista desplegable es posible cambiar la declaración de intención de referencia, si hay varias declaraciones válidas.

### 3.3 Agentes

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lotes y Números de serie

En las dos cuadrículas se pueden insertar los lotes y los números de serie que deben ser descargados del almacén<!-- magazzino -->.
Esta operación depende de la presencia de lotes y números de serie en el almacén<!-- magazzino -->.

Si el artículo no prevé la gestión de Lotes/Números de serie, esta pestaña estará deshabilitada.

:::tip Recuerda
Si en los [Parámetros iniciales de almacén](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) el flag *Lotes y números de serie obligatorios* está deshabilitado, será posible guardar el documento sin ingresar los lotes/números de serie.
Además, si la *Tipología de recolección* del lote codificado en el [registro maestro de artículos](/docs/erp-home/registers/items/create-new-item) es *FIFO* o con *Fecha de caducidad*, al grabar el DDT en almacén<!-- magazzino --> los lotes se propondrán automáticamente, si no han sido introducidos con anterioridad.
:::

#### Botones específicos

import DeleteLot from './../../../import/buttons/delete-lot.md'

> <DeleteLot />

import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteSN />

### 3.5 Analítica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Datos extra<!-- Extra data -->

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documentos adjuntos

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Sección de valores

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **4. Resúmenes**<!-- **4. Riepiloghi** -->

En los Resúmenes se presentan las principales informaciones de todo el documento.

### 4.1 Descuentos finales artículos

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Resumen comisiones agentes

En esta pestaña se resumen las comisiones previstas para cada agente.

### 4.3 Gastos/Descuentos/aumentos finales 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

- **Detalle declaraciones**: se introduce la eventual declaración de intención válida para el cliente.    

### 4.4 Resúmenes IVA

Se propone el resumen IVA del documento, para cada código de IVA.

### 4.5 Resumen de vencimientos

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

### 4.6 Totales del documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Transporte**

Los datos presentes son: 

- **Destinatario**: se propone el destinatario por defecto introducido en el registro maestro del cliente; si no está presente, se toma la dirección del cliente.
- **Destino**: se propone el destino por defecto del destinatario, si está presente en el registro maestro del cliente.
- **Número de seguimiento**: campo libre.
- **Volumen**: se propone el volumen acumulado, resultado de la suma de los volúmenes de los artículos (el valor se toma del Registro maestro de artículos > pestaña Pesos/Dimensiones), cuando la unidad de medida del volumen de los artículos corresponde con la introducida en los [parámetros del DDT](/docs/configurations/parameters/sales/dn-parameters).
- **Peso neto**: se propone el peso neto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma del Registro maestro de artículos > pestaña Pesos/Dimensiones), cuando la unidad de peso de los artículos corresponde con la introducida en los parámetros del DDT.
- **Peso bruto**: se propone el peso bruto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma del Registro maestro de artículos > pestaña Pesos/Dimensiones), cuando la unidad de peso de los artículos corresponde con la introducida en los parámetros del DDT.
- **Aspecto exterior de los bienes**: combo box que remite a la tabla homónima.
- **Bultos**: se propone el número de bultos, en base a los datos ingresados en el *Registro maestro de artículos > pestaña Pesos/Dimensiones*, en los campos *Artículos presentes en un bulto* o *Bultos para formar el artículo*. Solo se tienen en cuenta los artículos que tienen este campo completado.
- **Valores modificados manualmente**: con este flag es posible modificar los campos Volumen, Peso neto, Peso bruto y Bultos, que de otro modo toman los datos del registro maestro de artículos sin posibilidad de modificación.
- **Entrada/Salida de la oficina aduanera**: campos utilizados para el eTransporte en la versión rumana, que remiten a la tabla Oficina aduanera.
- **Entrada/Salida del cruce fronterizo**: campos utilizados para el eTransporte en la versión rumana, que remiten a la tabla Cruce fronterizo.
- **Transporte**: es necesario seleccionar la figura que se encargará del transporte, marcando el flag en Remitente, Destinatario o Transportista; según la selección, la sección inferior cambiará; si el transporte corre a cargo del Remitente será posible ingresar Matrícula del vehículo<!-- Targa automezzo -->, Remolque, Fecha y Hora de Inicio de transporte; si corre a cargo del Destinatario será posible ingresar Matrícula del vehículo<!-- Targa automezzo -->, Remolque, Fecha y Hora de Inicio de transporte; si corre a cargo del Transportista, los campos disponibles serán Registro contable del Transportista, Matrícula, Remolque, Fecha y Hora de transporte, posible Comisionista, Cargador, Propietario, Lugar de carga.

## **6. Documentos relacionados**<!-- **6. Documenti collegati** -->

En esta pestaña es posible consultar los documentos adjuntos.
Para adjuntar los documentos es posible proceder de dos maneras:
- utilizando el botón de la barra de herramientas **Documentos** se puede elegir si adjuntar un documento ya codificado en Fluentis o si crear un nuevo Documento para adjuntar.
- usando directamente en la cuadrícula el botón derecho y seleccionando *Adjuntar archivo* se crea un nuevo Documento para adjuntar.