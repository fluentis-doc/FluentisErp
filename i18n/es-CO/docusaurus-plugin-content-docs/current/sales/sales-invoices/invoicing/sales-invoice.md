---
title: Nueva factura de venta
sidebar_position: 2
ai_generated: true
---

El formulario se abre:  
1. a través de la ruta **Ventas > Facturas > Crear factura de venta**  
o bien
2. mediante el botón **Nuevo<!-- Nuova -->** que se encuentra en el formulario [Búsqueda de facturas de venta](/docs/sales/sales-invoices/invoicing/search-sales-invoices).

## *Cómo crear una factura de venta*<!-- Come creare una fattura di vendita -->

## **1. Datos obligatorios**<!-- Dati obbligatori -->

Para continuar con la creación del documento, el usuario debe ingresar los campos *obligatorios*:

- **Tipo de factura<!-- Tipo fattura -->**: predeterminado en *Configuración > Tablas > Ventas > [Tipo de factura de venta](/docs/configurations/tables/sales/invoices-type)*.          
- **Número<!-- Numero -->**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración](/docs/configurations/tables/fluentis-numerations) y al tipo de documento que contiene la numeración. La numeración asociada al tipo de factura generalmente prevé una progresión automática basada en fecha y número, con una función de recuperación que cubre posibles huecos en la secuencia (por ejemplo, causados por la eliminación de documentos). Este comportamiento está regulado por dos flags específicos en la tabla de numeración. Si el usuario desea ingresar manualmente el número, puede deshabilitar la bandera de progresión fecha-número (que garantiza el incremento de la numeración en fechas futuras) y la bandera de recuperación de números. Además, deberá habilitar la bandera de numeración externa, señalando así al sistema que la numeración será gestionada manualmente.
- **Cliente**: usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o ingresando [directamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) los datos. Al ingresar el cliente, se rellenan automáticamente, si están presentes en el registro, los siguientes campos que se explicarán en las secciones siguientes: moneda, país, idioma, zona, envío, tarifa y posibles descuentos, pagos, descuentos, gastos, agentes, destino, transportistas, datos extra.
- **Fecha de la factura<!-- Data fattura -->**: indica la fecha de creación de la factura. Esta fecha es fundamental para el cálculo de los vencimientos y las posibles condiciones de pago. Se propone la fecha actual, que es modificable; en el caso de que la numeración prevea una progresión de fecha y número, y se ingrese una fecha en el pasado, Fluentis verificará la disponibilidad de números en esa fecha para garantizar la progresión, y si no está disponible avisará al usuario que no hay números disponibles en esa fecha.

Continúe la creación ingresando al menos los datos obligatorios en cada una de las pestañas a continuación.

## **2. Cabecera**<!-- Testata -->

Después de haber seleccionado los datos obligatorios en la sección superior, el usuario puede continuar el ingreso de los siguientes datos:  
- [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)
- o bien con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)
- o, según los procedimientos que elija, la aplicación puede completar los campos **automáticamente**.

:::note Recuerda<!-- Ricorda -->
Si el documento se *crea automáticamente*, estos datos se toman del *documento de origen* desde el cual se ha generado.
:::

Al ingresar el **Cliente**, automáticamente se proponen todos los datos específicos de la pestaña **Cabecera<!-- Testata -->**, según los datos configurados previamente en el [registro de cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:
- **Moneda<!-- Divisa -->**: sección que contiene los datos de [Moneda](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de moneda](/docs/guide/common/glossary/glossary-intro#currency-date).
- **País<!-- Nazione -->**: sección que contiene los datos de [País](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Envío<!-- Spedizione -->**: sección que contiene los datos de [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Tarifa](/docs/guide/common/glossary/glossary-intro#sales-price-list) (en la cabecera del documento se inserta la tarifa configurada en el registro de cliente con el flag por defecto) con el tipo de escala de descuentos y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Otros campos

- **Impreso<!-- Stampata -->**: se activa cuando se imprime el documento e identifica que el documento ha sido impreso.
- **Descargado<!-- Scaricata -->**: este flag se activa automáticamente cuando el documento genera movimiento de inventario<!-- magazzino -->, con el botón de la barra de herramientas *Descarga automática* o con los procedimientos disponibles.

:::note Nota
En el caso de una factura creada a partir de un documento de transporte<!-- DDT --> ya descargado, existe el parámetro general VE-PurchaseInvoices_VerifyLoadStatusDDT que bloquea el flag *Descargado* también en la factura.
:::

- **Anulada<!-- Annullata -->**: el flag activo permite anular el documento; automáticamente se marcarán los flags *Descargado* y *Valorizado* para evitar que el documento sea visible en los procedimientos.
- **Contabilizada<!-- Contabilizzata -->**: el flag indica que la factura ha sido contabilizada.

:::note
Los flags pueden eliminarse con los procedimientos de restauración de operación.
:::

- **Notas del cliente<!-- Annotazioni cliente -->**: se propone la información insertada en el registro de cliente; en el caso de creación automática desde un pedido/DDT se tomarán los mismos datos del campo homónimo del documento de origen; también se puede ingresar manualmente. Con clic derecho se puede abrir un formulario para especificar un texto largo de nota; si el campo tiene valor, se cambia el color de fondo del campo.
- **Nuestro referente/vuestro referente<!-- Nostro riferimento/vostro riferimento -->**: en estos campos suele indicarse una referencia interna y una referencia del cliente para la factura en cuestión.
- **Referencia al número de pedido de cliente<!-- Riferimento al Numero Ordini Cliente -->**: en este campo se inserta automáticamente el pedido del cual deriva la factura.
- **Referencia a la fecha del pedido de cliente<!-- Riferimento alla Data Ordini cliente -->**: en este campo se inserta automáticamente la fecha del pedido del cual deriva la factura; junto con el campo anterior crea los datos necesarios para la etiqueta 2.1.2 del archivo XML de la factura electrónica cuando sea creada; si no se completan, se tomará el campo Vuestro Referente. En el caso en que la factura se genere mediante el procedimiento de:
> *Creación desde pedido de cliente*, estos últimos cuatro campos se llenarán con los datos presentes en el pedido de cliente. Esta transferencia es válida solo en el caso de la factura creada extrayendo los datos de un único pedido;
> *Ejecución de DDT*, estos campos serán llenados con los datos presentes en el DDT. Esta transferencia es válida solo en el caso de la factura creada extrayendo los datos de un solo DDT.

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

import User from './../../../import/fields/user.md'

<User />

- **Proyecto**: usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se puede vincular el documento a un proyecto.  
Esta asociación funciona solo a nivel de cabecera del artículo.
- **Audit Trail**: como en todos los documentos, esta sección muestra la fecha de creación del documento con el usuario, y la fecha de última modificación del documento con el usuario.
- **Tipo de referencia<!-- Tipo riferimento -->**: si la factura proviene de otra factura por causa de una anulación del documento, aquí se muestra el tipo de factura del documento de origen.
- **Referencia FT**: si la factura ha sido creada a partir de otra factura, aquí se muestran el número y la fecha del documento de origen.
- **Referencia SDI id**: en este campo se muestran las referencias de la factura si ha sido enviada al SDI.
- **Registro contable<!-- Registrazione contabile -->**: contiene el identificador del asiento contable<!-- registrazione contabile --> si la factura ha sido contabilizada.
- **Envío**: en esta sección se muestran posibles Puerto, Embalaje y Vehículo<!-- Automezzo --> insertados en el registro de cliente; los campos son modificables.
- **Tarifa<!-- Listino -->**: se propone la tarifa con el flag por defecto configurado en *Registro de cliente > Tarifas* que se utilizará para el documento; es un dato modificable.
- **Tipo de escala<!-- Tipo scaglione -->**: indica el tipo de escala de descuento configurada en *Registro de cliente > Tarifas* prevista para el tipo de tarifa por defecto.
- **Inicio de vigencia<!-- Decorrenza -->**: es la fecha de inicio de vigencia para el cálculo de los vencimientos de pago.

#### Botones específicos

> **[Ejecución desde pedido de cliente](/docs/sales/sales-invoices/invoicing/sales-invoice)**: llama al procedimiento para crear una factura desde un pedido de cliente. Se activa al ingresar el cliente y el tipo de factura.
> **Ejecución desde DDT**: llama al procedimiento para crear una factura desde un documento de transporte<!-- DDT -->. Se activa al ingresar el cliente y el tipo de factura.
> **[Descarga automática](/docs/sales/sales-invoices/invoicing/sales-invoice)**: este procedimiento permite realizar la descarga de inventario<!-- magazzino --> del documento, si está *Impreso*.
> **Ayuda destinatario/destino**: permite visualizar e ingresar los destinatarios o destinos desde el registro del cliente.
> **Insertar agente en las filas**: aplica el agente ingresado en la cabecera a las filas de artículo, en la pestaña *Agentes*.
> **Insertar CIG/CUP en las filas**: aplica los códigos ingresados en la cabecera en las filas de artículo, en las respectivas opciones.
> **Eliminar pagos**: elimina los pagos de la cabecera.
> **Registro de documentos SDI**: abre el documento sdi referido a la factura, una vez *Controlada*.

### 2.1 Pagos

Las **Soluciones de pago** se importan automáticamente del *Registro de cliente > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **Tipo de pago<!-- Tipo pagamento -->** está asociado un descuento financiero, el importe del descuento solo es considerado a efectos contables, es decir, en los vencimientos del documento y no en el total de la factura.

Si el documento se origina a partir de:

- *Pedido de cliente*: los tipos de pago pueden ser tomados del primer documento, del registro de cliente o se muestran en un formulario todos los pagos de los documentos a facturar y el usuario selecciona el tipo de pago deseado.

- *DDT*: se pueden mantener los pagos de la ficha del cliente o los pagos individuales presentes en cada DDT; en este caso se reporta en factura el tipo de pago con la base imponible y el IVA igual al de DDT y se añade una nueva fila para las eventuales filas de artículo añadidas en factura que no provienen del DDT.

### 2.2 Descuentos<!-- Sconti -->

Solo se proponen los descuentos predeterminados tomados del *Registro de cliente > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

:::important Recuerda
Para poder gestionar los descuentos sobre la base imponible es necesario activar desde la base de datos el parámetro general GEN-GlobalSettings_CalculateDiscountOnAmount para la empresa en cuestión.
Si tal parámetro no está activo, los descuentos sobre la base imponible serán transformados en descuentos escalonados.
:::

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agentes

Indica el código de agente y su comisión para cada línea de artículo. Se propone el código y el porcentaje definidos en el *Registro de cliente > pestaña Agentes*.

Si la comisión no está vinculada al cliente en su ficha aunque se debe introducir el agente pero con comisión NULL porque si fuera con comisión 0 significaría que el agente está vinculado pero no percibe comisión.

En el caso de generación de la factura desde pedido, este dato se reportará igual que el del pedido de cliente.

La misma sección será propuesta para cada línea de artículo en la pestaña correspondiente Agentes.

### 2.4 Datos extra<!-- Extra Data -->

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Procedimientos de cabecera:

### *Factura electrónica*

Desde esta sección, presente en la barra de herramientas de la factura, es posible gestionar la creación y el envío de la factura electrónica al SDI. Este procedimiento se realiza con el cambio de estado del documento; los estados son los siguientes:
- *No examinada*: es el estado inicial en el que se encuentran los documentos antes de comunicarse con el sdi; el documento ha sido generado y aún no se han realizado acciones relacionadas con la gestión del documento electrónico; los estados siguientes pueden ser Controlado, Anulada o Excluida;
- *Controlado*: al establecer este estado, Fluentis realiza los controles sobre el documento; si faltan datos para la comunicación con SDI se notificará al usuario; desde este estado en adelante se activará el botón *Registro de documentos SDI* donde consultar el historial y la hoja de estilo del XML; los estados siguientes pueden ser Generado, Anulada, Excluida;
- *Generado*: Se ha creado el archivo XML relativo al documento electrónico. Desde este momento es posible proceder con los siguientes estados para enviar el archivo al Fluentis Business Hub o descargar el archivo XML para gestiones externas; los estados siguientes pueden ser Firmada, Por enviar, Anulada, Excluida;
- *Firmada*: El documento ha sido firmado externamente con certificado de firma Cades o Xades y reimportado en Fluentis en el nuevo formato; los estados sucesivos pueden ser Por enviar, Anulada, Excluida;
- *Por enviar*: Este estado, a utilizar en caso de que el canal Fluentis Business Hub esté correctamente configurado, agrega el documento a la lista de documentos que BizLink deberá procesar para el envío al Sdi; no se prevén otras acciones manuales pues será necesario esperar el resultado del Sdi;
- *Anulada*: el documento no debe ser enviado al cliente final pero sigue siendo válido a efectos de IVA;
- *Excluida*: El documento ha sido creado pero no se encuentra entre los que deben enviarse al SdI (ej. nota de anulación interna o cliente no residente en Italia y no sujeto a emisión de factura electrónica con envío a SdI).

### *Ejecución desde DDT*

En la cabecera de la factura, al pulsar el botón **Ejecución desde DDT** se abrirá el formulario donde es posible filtrar los DDT relativos al cliente del documento.

Mediante este procedimiento es posible crear una factura de venta desde la ejecución del DDT correspondiente. Es posible ingresar los artículos dentro de la factura, total o parcialmente un pedido completo o una línea.

Para poder utilizar este procedimiento hay condiciones iniciales que deben cumplirse:
 -  el/los cliente(s) deben ser el mismo de la factura;
 -  el DDT que se desea ejecutar debe tener activado el flag *Impreso*;

:::tip Recuerda
Las anotaciones ingresadas en la cabecera del DDT (como *Nuestro/Vuestro referente*, *Referencia al número de pedido de cliente*, *Notas iniciales*) se reportan en la cabecera de la Factura solo si se extraen los datos de un único DDT.
:::

#### Procedimiento

Los filtros por cliente y moneda se completarán automáticamente según el cliente seleccionado en la factura.

Una vez configurados todos los *filtros* deseados, haciendo clic en el botón de *Búsqueda* se visualizará en la cuadrícula una fila por cada DDT impreso, confirmado y no ejecutado o ejecutado parcialmente.

:::note Nota
El procedimiento recupera todos los datos presentes en el ddt y en consecuencia se aplicarán las condiciones de compra presentes, incluso si éstas han cambiado actualmente (ejemplo: actualización de listas de precios).
:::

:::note Nota
Las líneas de tipo Nota siempre serán visibles, incluso si ya han sido ejecutadas, hasta que todas las demás líneas de otros tipos hayan sido ejecutadas.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

 1. seleccionar el *DDT completo*. Para ello basta con seleccionar el flag presente al inicio de la fila.
 2. seleccionar solo *algunos* de los *artículos* propuestos. Para ello basta con seleccionar el flag presente al inicio de la línea de artículo.
 3. seleccionar solo *algunos artículos* pero solo para una *cantidad determinada*. En este caso debe modificar la cantidad a ejecutar.

Para completar el procedimiento deberá hacer clic en el botón *Transferencia*, que tomará todos los datos presentes en el DDT y los trasladará a la factura.

#### Botones específicos

> **Búsqueda**: permite buscar los documentos.
> **Transferencia**: permite transferir los datos del documento seleccionado dentro de la nueva factura.
> **Ejecución forzada del pedido**: permite la ejecución forzada del DDT.
> **Ejecución de pedidos**: permite la ejecución del DDT.
> **Expandir**: permite expandir todo el árbol de DDT en la cuadrícula inferior para visualizar los artículos contenidos en ellos.
> **Comprimir**: permite comprimir la visualización de las líneas de artículo y solo mostrar las líneas de DDT.
> **Seleccionar todos**: permite seleccionar todos los artículos de la lista.
> **Deseleccionar todos**: permite deseleccionar todos los artículos de la lista.

### *Ejecución desde pedidos de cliente*

En la cabecera de la factura, al pulsar el botón **Ejecución desde pedidos de cliente** se abrirá el formulario donde es posible filtrar los pedidos relativos al cliente del documento.

Mediante este procedimiento es posible crear una factura de venta desde la ejecución del pedido de cliente correspondiente. Es posible ingresar los artículos dentro de la factura, total o parcialmente un pedido completo o una línea.

Para poder utilizar este procedimiento hay condiciones iniciales que deben cumplirse:
 -  el/los cliente(s) de los pedidos deben ser el mismo de la factura;
 -  el pedido que se desea ejecutar debe tener activado el flag *Impreso* y la *Fecha de confirmación del pedido*;
 -  los tipos de documentos deben ser compatibles: en la tabla de *Tipos de pedidos* el tipo de pedido que se desea ejecutar debe tener configurado el tipo de factura correspondiente, mientras que en la tabla de *Tipos de facturas* debe estar presente el flag en *Pedido* (que indica que la factura deriva de un pedido);

Luego se debe configurar en la cabecera del nuevo DDT el *Tipo de DDT* que se desea crear (que debe corresponder a aquel configurado en la tabla de *Tipos de pedidos*) y el *Cliente*. Una vez ingresados estos datos, debe hacer clic en el botón *Ejecución de pedidos* para abrir el formulario de ejecución.

:::tip Recuerda
Anotaciones ingresadas en la cabecera del pedido (como *Nuestro/Vuestro referente*, *Referencia al número de pedido de cliente*, *Notas iniciales*) se reportan en la cabecera de la Factura solo si se extraen los datos de un único pedido.
:::

#### Procedimiento

Los filtros por cliente y moneda se completarán automáticamente según el cliente seleccionado en la factura.

Una vez configurados todos los *filtros* deseados, haciendo clic en el botón de *Búsqueda* se visualizará en la cuadrícula una fila por cada pedido impreso, confirmado y no ejecutado o ejecutado parcialmente.

:::note Nota
El procedimiento recupera todos los datos presentes en el pedido y en consecuencia se aplicarán las condiciones de compra presentes en el pedido, incluso si han cambiado actualmente (ejemplo: actualización de listas de precios).
:::

:::note Nota
Las líneas de tipo Nota siempre serán visibles, incluso si ya han sido ejecutadas, hasta que todas las demás líneas de otros tipos hayan sido ejecutadas.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

 1. seleccionar el *pedido completo*. Para ello basta con seleccionar el flag presente al inicio de la fila de pedido.
 2. seleccionar solo *algunos* de los *artículos* propuestos. Para ello basta con seleccionar el flag presente al inicio de la línea de artículo.
 3. seleccionar solo *algunos artículos* pero solo para una *cantidad determinada*. En este caso debe modificar la cantidad a ejecutar.

Para completar el procedimiento deberá hacer clic en el botón *Transferencia*, que tomará todos los datos presentes en el pedido y los trasladará a la factura.

#### Botones específicos

> **Búsqueda**: permite buscar los pedidos.
> **Transferencia**: permite transferir los datos del pedido seleccionado dentro de la nueva factura.
> **Ejecución forzada del pedido**: permite la ejecución forzada del pedido.
> **Ejecución de pedidos**: permite la ejecución del pedido.
> **Expandir**: permite expandir todo el árbol de pedidos en la cuadrícula inferior para visualizar los artículos contenidos en ellos.
> **Comprimir**: permite comprimir la visualización de las líneas de artículo y solo mostrar las líneas de pedido.
> **Seleccionar todos**: permite seleccionar todos los artículos de la lista.
> **Deseleccionar todos**: permite deseleccionar todos los artículos de la lista.

### *Descarga automática*

Otro procedimiento presente en la cabecera es la descarga automática desde inventario<!-- magazzino -->. El botón se habilita si el documento está Impreso y si la factura no está vinculada a un DDT ya descargado.
Recuerde que si en los [Parámetros de factura](/docs/configurations/parameters/sales/sales-invoices-parameters) está habilitada la descarga automática, este procedimiento se iniciará automáticamente una vez que el documento se imprima.
Una vez iniciado el procedimiento, Fluentis verifica la existencia del inventario<!-- magazzino --> y la causal<!-- causale --> en las filas de la factura y la posible presencia de lotes y números de serie si se requieren; si el procedimiento no tiene éxito, se notificará al usuario con un error.
Si el procedimiento se realiza correctamente, se crea la [Registro de inventario](/docs/logistics/warehouse/stock-records/record)<!-- Registrazione di magazzino --> que mueve los artículos del documento y se inserta el flag **Descargado** en la cabecera.

## **3. Artículos**

En esta pestaña se ingresan todos los artículos junto con sus respectivos datos.

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidad, botones y campos comunes](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para insertar un **Nuevo artículo** en la cuadrícula basta ubicarse en la fila para completar los datos respectivos o utilizar el botón **Nuevo** presente en la barra de opciones. Las columnas disponibles son las siguientes:

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo de línea<!-- Tipo riga -->**: permite seleccionar, desde la lista desplegable, artículos con diferentes características:
>- *Artículo codificado*: son artículos codificados en ficha y se pueden contabilizar en contabilidad analítica y registrar en inventario<!-- magazzino -->.
>- *Artículo no-codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica, pero no pueden moverse en inventario<!-- magazzino -->.
>- *Artículo gastos*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gasto es codificado y de interés fiscal será movido en inventario<!-- magazzino -->, si no está codificado o no es de interés fiscal no se moverán en inventario<!-- magazzino -->.
>- *Artículo nota*: son notas descriptivas que se informan en la impresión del documento; no inciden en la contabilidad ni en el inventario<!-- magazzino -->.
>- *Artículo obsequio*: el artículo obsequio se gestiona como un artículo codificado o no codificado a efectos fiscales y de inventario<!-- magazzino -->, pero al ser obsequio se contabiliza separadamente en los resúmenes del documento y, según la bandera Rivalsa iva, se calcula el importe del IVA del obsequio a cargo del sujeto o no.
>- *Factura de anticipo*: la línea de artículo de anticipo se utiliza para crear facturas de anticipo.
>- *Anulación de factura de anticipo*: la línea de artículo de anulación de anticipo cierra la línea de anticipo y los anticipos pueden ser seleccionados mediante una ayuda de anticipos. Estos datos se pueden ingresar automáticamente al insertar directamente la clase o el número de serie porque el tipo de línea 'artículo codificado' se selecciona automáticamente.
:::note[NOTA]
Si se comienza directamente con la inserción del artículo, su clase, código y tipo de línea - Artículo codificado se insertan automáticamente.
:::

- **Código de barras<!-- Barcode -->**: si en los [Parámetros de factura](/docs/configurations/parameters/sales/sales-invoices-parameters) se ha habilitado la gestión de códigos de barras, aparecerá la columna Código de barras para seleccionar el dato para el artículo entre los códigos ingresados en *Ficha artículo > Códigos de barras*.

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Artículo del cliente<!-- Articolo cliente -->**: si en los [Parámetros de factura](/docs/configurations/parameters/sales/sales-invoices-parameters) se ha habilitado la gestión de Artículo de cliente, aparecerá la columna Artículo de cliente, con el código de artículo válido para el cliente titular del documento e ingresado en *Ficha artículo > Clientes*.

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
En ausencia de lista de precios, el dato propuesto es el **precio de venta** transformado de la *Ficha artículo > pestaña [Costos](/docs/erp-home/registers/items/create-new-item)* o automáticamente recuperado según la configuración del documento. En ausencia incluso de este dato, se indicará el precio 0.
:::

- **Base imponible<!-- Imponibile -->**: en este campo se muestra el precio unitario, multiplicado por la cantidad de artículos, neto de descuentos.

- **Descuentos de artículo<!-- Sconti articolo -->**: se muestra la suma de los descuentos previstos para el artículo.

- **Descuentos finales del artículo<!-- Sconti finali articolo -->**: se muestra la suma de los descuentos finales del artículo ingresados en los Resúmenes del documento.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Ventas facturadas<!-- Fatturato vendite -->**: se propone el dato ingresado en la *Ficha de artículo > pestaña Generalidades*. Si este no está presente, no se propone ningún dato, pero en el momento de la contabilización de la factura se considerará el valor ingresado en el campo *Coste/ingreso de contrapartida predeterminado* de la *Ficha cliente > Datos contables > pestaña Administrativa*, o se generará un mensaje de error.

#### Botones específicos

> **Recalcular Conai**: si el [Conai](/docs/sales/sales-flow/conai) está habilitado para el documento, es posible recalcular los valores con este botón tras modificaciones eventuales.

> **Actualizar los datos Conai en la ficha del artículo**: si en la pestaña *Materiales Conai para el artículo* se modifican la Unidad de medida y/o el Peso, es posible transferir estos valores a la sección Conai de la ficha artículo.

> **Gestión de embalajes**: permite abrir la gestión de los embalajes retornables usados en el documento de compras.
El botón se activa si el documento está guardado, pero no cargado.
Al hacer clic en este botón se abre el formulario correspondiente donde: ingresar la cantidad, seleccionar la fila y transferir el embalaje seleccionado a las filas de artículo haciendo clic en el botón Ejecutar. En este formulario se muestran los artículos que han sido ingresados con la naturaleza Embalaje y que están presentes en la tabla de Embalajes retornables.

> **Actualizar listas de precios**: haciendo clic en el desplegable al lado del botón se accede a dos procedimientos. El primer procedimiento es **Actualizar la lista de precios actual**, que permite alinear el precio del artículo internamente al listado, tras una eventual variación de precio directamente en la línea de artículo. Con el segundo procedimiento, **Crear nueva lista de precios con nueva validez**, es posible crear una nueva lista de precios personalizada para el cliente titular del documento; se solicitarán, en un pop-up, las fechas de inicio y final de la validez de la nueva lista.

> **Mostrar/Ocultar detalles**: haciendo clic en este botón se hacen visibles u ocultan las pestañas internas de Artículos.

> **Gestión de anticipos**: Fluentis permite gestionar las facturas de anticipo y su anulación, procedimientos accesibles haciendo clic en este botón.
> - **Creación de factura de anticipo**
Las facturas de anticipo pueden tener un [Tipo de documento](/docs/configurations/tables/sales/invoices-type) dedicado o no, ya que la gestión de anticipos no ocurre a nivel de tabla, sino de artículos.
Por lo tanto, la gestión de anticipos implica la creación de una factura normal de venta, para la cual se requieren un **Tipo**, un **Cliente**, etc.
Después de completar los datos de la Cabecera, es posible pasar a la pestaña Artículos.
En la cuadrícula de artículos, ingrese un *Tipo de línea 6 Factura de anticipo*, una Descripción libre, el Precio, el IVA, un Ventas facturadas (que debería tener como cuenta Anticipos de clientes), y demás datos necesarios. Es la línea de esta tipología la que determina el importe del anticipo.
Una vez terminada la factura, se puede imprimir.
A este punto la factura de anticipo queda confirmada.
Al crear otros documentos para este cliente, Fluentis advertirá sobre la existencia de una factura de anticipo.
> - **Anulación de factura de anticipo**
Para anular una factura de anticipo es necesario crear una nueva factura de venta para el mismo cliente.
En la pestaña Artículos, si el cliente tiene al menos una factura de anticipo, estará activo el botón de gestión de anticipos de la barra de herramientas. Al pulsarlo se abrirá el procedimiento correspondiente.
En la pestaña **Anulación de anticipos** se pueden seleccionar los anticipos a anular; una vez seleccionados, con el botón **Crear anulación** se generará la anulación, la cual aparecerá en la cuadrícula inferior.
Al cerrar el formulario se preguntará si se desea insertar el nuevo valor de anulación en la factura. Si se confirma, será posible consultar la línea de anulación en la pestaña Artículos de la factura, que contendrá los datos de la factura de anticipo previamente creada.

Luego hay algunas pestañas que se analizan a continuación.

### 3.1 Descuentos/Precios

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Datos de artículo

- **Variante**: contiene la posible variante del artículo;

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Inventario, causal y ubicación**: se proponen el inventario<!-- magazzino --> y la causal<!-- causale --> de referencia que aparecerán automáticamente al momento de la descarga de los artículos desde inventario<!-- magazzino -->. Los datos se toman de la tabla *Tipos de facturas*;

- **Artículo**: informa el artículo seleccionado;

- **Proyecto**: es el proyecto asociado al documento o puede ser asignado con la ayuda de campo;

- **IVA repercutido**: si está configurado el IVA del obsequio se considera para el total de la factura;

- **Detalle de declaraciones**: contiene la posible [declaración de intención](/docs/finance-area/declarations/declarations/intent-declaration) del cliente;

- **Referencia de pedido**: hace referencia al pedido del cual se creó la factura;

- **Marca**: representa la marca del artículo, tomada de su ficha o de la lista de precios del artículo;

- **Notas**: ofrece la posibilidad de insertar notas para cada artículo;

### 3.3 Agentes

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lotes y Números de serie

En las dos cuadrículas pueden insertarse los lotes y los números de serie que deben ser descargados del inventario<!-- magazzino --> y que están vinculados al artículo en la *Ficha artículo > pestaña [Lotes y Números de serie]*(/docs/erp-home/registers/items/create-new-item) o pueden ser ingresados manualmente.

Esta operación está condicionada por la existencia de lotes y números de serie en el inventario<!-- magazzino -->.

Si el artículo no prevé la gestión de Lotes/Números de serie, esta pestaña estará deshabilitada.

:::tip Recuerda
Si en los [Parámetros iniciales de inventario](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) el flag *Lotes y números de serie obligatorios* está deshabilitado, será posible guardar el documento sin ingresar los lotes/números de serie.
Además, si el *Tipo de selección* del lote configurado en la [ficha del artículo](/docs/erp-home/registers/items/create-new-item) es *FIFO* o con *Fecha de caducidad*, en el momento de la contabilización de la factura en inventario<!-- magazzino -->, los lotes se propondrán automáticamente, si no han sido ingresados previamente.
:::

#### Botones específicos

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />  
> <DeleteSN />

### 3.5 Analítica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Datos adicionales

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documentos adjuntos

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Sección valores

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **4. Resúmenes**<!-- Riepiloghi -->

En las diferentes secciones de esta pestaña se presentan las informaciones principales de todo el documento y algunos botones específicos.

### 4.1 IVA/Vencimientos

#### Resúmenes de IVA

Se muestra el resumen de IVA del documento, para cada código de IVA.

#### Resumen de vencimientos

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

Generalmente los vencimientos se recalculan si se modifica el pago en la cabecera del documento. Los casos en los que no se actualizan los vencimientos, si se modifica el pago en la cabecera, son los siguientes:
-	Cuando la factura tiene el enlace SDI y tiene un estado diferente de NoExaminado, Controlado, Cancelado, Excluido
-	Cuando hay al menos un vencimiento con el flag 'Modificación manual' activado
-	Cuando la factura está enlazada con uno o más Efectos o está enlazada con una fila FSAdvanceInvoiceMaturity
-	Cuando hay descuento en el vencimiento pero no proviene del pago
-	Cuando la suma del Importe en la cuadrícula de Pagos es mayor que la base imponible de la factura
-	O si las facturas se han modificado fuera de Fluentis

En estos casos es necesario hacer clic en el botón de la barra de herramientas 'Recalcular y agrupar vencimientos'.

### 4.2 Agentes/Descuentos/Gastos

#### Descuentos finales de artículos

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

#### Gastos/Descuentos

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

#### Otros campos

**Notas finales**: es un campo libre que puede ser llenado por el usuario con la ayuda de 'Notas codificadas'.

### 4.3 Totales del documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

- **Descuento total porcentual**: es posible ingresar un descuento final adicional en porcentaje; al ingresar este campo, también se llena automáticamente el siguiente.

- **Descuento total en valor**: es posible ingresar un descuento final en valor.

- **Redondeo**: existe un campo adicional para redondear al alza el documento.

- **Total a pagar**: finalmente se muestra el total definitivo obtenido.

## **5. Transporte**

Si la factura es de tipo acompañante, es necesario completar la pestaña Transporte<!-- Trasporto -->.
Los datos presentes son:

- **Destinatario**: se propone el destinatario por defecto configurado en el registro de cliente; si no está presente, se toma la dirección del cliente.
- **Destino**: se propone el destino por defecto del destinatario, si está configurado en el registro de cliente.
- **Número de seguimiento**: campo libre.
- **Volumen**: se propone el volumen acumulado, resultado de la suma de los volúmenes de los artículos (el valor se toma de la Ficha artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del volumen de los artículos corresponde a la configurada en los parámetros de la factura.
- **Peso neto**: se propone el peso neto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma de la Ficha artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la configurada en los parámetros de la factura.
- **Peso bruto**: se propone el peso bruto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma de la Ficha artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la configurada en los parámetros de la factura.
- **Aspecto exterior de los bienes**: lista desplegable que remite a la tabla homónima.
- **Bultos**: se propone el número de bultos, en base a los datos ingresados en la *Ficha artículo > pestaña Pesos/Dimensiones*, en los campos *Artículos presentes en un bulto* o *Bultos para formar el artículo*. Se consideran solo los artículos que tienen este campo completado.
- **Valores modificados manualmente**: con este flag es posible modificar los campos Volumen, Peso neto, Peso bruto y Bultos, que en caso contrario muestran los datos del registro artículo sin posibilidad de modificación.
- **Transporte**: es necesario seleccionar la figura que se encargará del transporte, marcando el flag en Remitente, Destinatario o Transportista; según la selección, la sección inferior cambiará; si el transporte es por cuenta del Remitente será posible ingresar Placa del vehículo<!-- Targa automezzo -->, Remolque, Fecha y Hora de inicio del transporte; si es por cuenta del Destinatario será posible ingresar Placa del vehículo<!-- Targa automezzo -->, Remolque, Fecha y Hora de inicio del transporte; si es por cuenta del Transportista, en cambio, los campos disponibles serán Registro contable del Transportista, Placa, Remolque, Fecha y Hora de transporte, posible Mandante, Cargador, Propietario, Lugar de carga.

## **6. Documentos vinculados**

En esta pestaña es posible consultar los documentos adjuntos.
Para adjuntar documentos es posible proceder de dos formas:
- Utilizando el botón de la barra de opciones **Documentos** se puede elegir si adjuntar un documento ya codificado en Fluentis o crear un nuevo Documento para adjuntar.
- Utilizando directamente en la cuadrícula el clic derecho y seleccionando *Adjuntar archivo* se procede con la creación de un nuevo Documento para adjuntar.