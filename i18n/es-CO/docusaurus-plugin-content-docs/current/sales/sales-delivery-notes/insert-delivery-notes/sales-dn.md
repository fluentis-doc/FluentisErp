---
title: Nuevo DDT de venta (Nuovo DDT di vendita)
sidebar_position: 2
---

El formulario **Crear DDT de venta (Crea DDT di vendita)** se abre a través de la ruta **Ventas > DDT > Crear DDT de venta (Vendite > DDT > Crea DDT di vendita)** o mediante el botón **nuovo** que se encuentra en el formulario [Buscar DDT de venta](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn).

## *Cómo crear un DDT de venta*

## **1. Datos obligatorios**

Para continuar con la creación del DDT de venta, el usuario debe ingresar los campos obligatorios:
- **tipo ddt**: predeterminado en *Configuración > Tablas > Ventas > [Tipos DDT](/docs/configurations/tables/sales/delivery-notes-type)*.
- **numero**: a cada documento se le asigna un número según la numeración especificada por el usuario y el tipo de documento que contiene la numeración. La numeración asociada a la tipología de DDT generalmente prevé una progresión automática basada en la fecha y el número, con una función de recuperación que cubre posibles huecos en la secuencia (por ejemplo, causados por la eliminación de documentos). Este comportamiento está regulado por dos indicadores específicos en la tabla de numeración. Si el usuario desea ingresar manualmente el número, puede desactivar el indicador de progresión fecha-número (que asegura el incremento de la numeración en fechas futuras) y el indicador de recuperación de números. Además, deberá habilitar el indicador de numeración externa, indicando así al sistema que la numeración será gestionada manualmente.  
- **cliente**: ingresable usando el [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), tecleando [directamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) los datos o usando el procedimiento automático, si se elige crear los documentos a través de la [Evasión DDT de orden del cliente](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). Al ingresar el cliente, se completan automáticamente, si están presentes en el registro, los siguientes campos, que explicaremos en las secciones posteriores: divisa, país, idioma, zona, envío, lista de precios y posibles descuentos, pagos, gastos, agentes, destino, transportistas, datos adicionales.  
- **data**: indica la fecha de creación del DDT. Esta fecha es fundamental para el cálculo de los plazos y las posibles condiciones de pago. Se propone la fecha actual, que es modificable; en caso de que la numeración prevea una progresión de fecha y número, y si ingreso una fecha en el pasado, Fluentis comprobará la disponibilidad de números en esa fecha para asegurar la progresión, y si no están disponibles, notificará al usuario que no hay números disponibles en esa fecha.

El formulario contiene una serie de pestañas.

## **testata**

Después de haber seleccionado los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), o bien, de acuerdo con los procedimientos que elija, la aplicación completa los campos *automáticamente*.

:::note Recuerda
Si el documento es *creado automáticamente*, estos datos son tomados del *documento de origen* de donde se generó.
:::

Al ingresar el **Cliente**, se *proponen* automáticamente todos los datos específicos de la pestaña **testata**, según los datos configurados previamente en el [registro del cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:  
- **divisa**: sección que contiene los datos de [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de divisa](/docs/guide/common/glossary/glossary-intro#currency-date).
- **nazione**: sección que contiene los datos de [País](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **spedizione**: sección que contiene los datos de [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/guide/common/glossary/glossary-intro#sales-price-list) (en el encabezado del documento se inserta la lista de precios configurada en el registro del cliente con el indicador Predeterminado) con el tipo de escala de descuento y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Otros campos del encabezado

- **stampata**: se activa cuando se imprime el documento e identifica que el documento ha sido impreso; este indicador también es importante para permitir el cumplimiento del DDT en otros documentos.  
- **scaricata**: este indicador se activa automáticamente cuando el documento es movido al almacén, con el botón de la barra de herramientas *Descarga automática* o con los procedimientos disponibles.  
- **valorizzata**: este indicador se activa cuando el DDT es valorado en la factura.  
- **valorizzata parzialmente**: este indicador señala que el DDT ha sido valorado solo parcialmente en la factura.  
- **valorizzata forzatamente**: este indicador se activa si el DDT ha sido cerrado forzosamente con la evasión forzada de los artículos; por ejemplo, cuando el residuo no será entregado y el documento se considera cerrado aunque no lo estaría.
- **annullata**: el indicador activo permite anular el pedido.  

:::note
Los indicadores pueden ser eliminados con los procedimientos de restauración de operación.
:::

- **Código Único de Proyecto/Código Identificativo de Licitación (Codice Unico di Progetto/Codice Identificatico di Gara)**: si en la [información fiscal](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) del registro del cliente está habilitada la gestión de CIG y CUP, será posible completar estos datos en el documento.  
- **annotazioni cliente**: este campo se toma del pedido que creó el DDT, pero también se puede ingresar manualmente.
- **Nuestra referencia/Su referencia (Nostro riferimento/vostro riferimento)**: en estos campos generalmente se indica una referencia interna y una referencia del cliente para el documento; en caso de que el DDT se genere mediante un procedimiento de creación automática, estos campos se llenarán con las indicaciones presentes en el documento de origen (este traspaso es válido solo en caso de DDT creado a partir de los datos de un solo documento de origen).  
- **Referencia al Número de Pedidos del Cliente (Riferimento al Numero Ordini Cliente)**: en este campo se inserta automáticamente el pedido del cual deriva el DDT.
- **Referencia a la Fecha de Pedidos del Cliente (Riferimento alla Data Ordini cliente)**: en este campo se inserta automáticamente la fecha del pedido del cual deriva el DDT; junto con el campo anterior, crea los datos necesarios para la etiqueta 2.1.2 del archivo xml de la factura electrónica, cuando se genere; si no se completan, se tomará en su lugar el campo Su Referencia.  
- **note iniziali ddt**: se pueden seleccionar las notas que se han insertado previamente en la tabla homónima que se encuentra en el camino *Configuración > Utilidades > Gestión de notas codificadas*; para esto, el usuario debe hacer doble clic en el campo para abrir la Ayuda y seleccionar los datos; de lo contrario, puede ingresarlas manualmente.  
- **progetto**: es posible asociar un proyecto al documento.  
- **operatore**: permite insertar al usuario que crea el documento. Los empleados se han insertado previamente en la tabla *Inicio > Empleados*; el dato se vuelve obligatorio si la opción está configurada en los [Parámetros](/docs/configurations/parameters/sales/dn-parameters) del documento en sí.  
- **stato evasione**: cuando el pedido es cumplido mediante los documentos DDT o facturas, su estado de cumplimiento cambia automáticamente de *No cumplido* a *Parcialmente cumplido* o *Cumplido*; el usuario puede forzar el cumplimiento de un pedido no totalmente cumplido y cuando esto sucede, también se guarda la fecha de cumplimiento.
- **decorrenza** es la fecha de inicio para el cálculo de los plazos de pago.  
- **audit trail**: como en todos los documentos, esta sección muestra la fecha de creación del documento con el operador, y la fecha de última modificación del documento con el operador.  

#### Botones específicos

> [Cumplimiento desde pedidos (Evasione da ordini)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (ver la documentación relacionada).  
> [Descarga automática (Scarico automatico)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (ver la documentación relacionada)  
> **help destinatari/destinazioni**: este botón abre la Ayuda para elegir el destinatario/destino para el documento, entre los disponibles para el cliente y por lo tanto codificados en su registro.  
> **inserisci agente nelle righe**: este botón abre un popup donde insertar un registro de agente, que se aplicará en todas las líneas del artículo, sumándose eventualmente a los Agentes ya presentes.  
> **Reemplazar CIG/CUP en las líneas (Sostituisci CIG/CUP nelle righe)**: después de especificar CIG y/o CUP en el encabezado, es posible reemplazar masivamente esos datos en las líneas del artículo ya ingresadas.  
> **cancella**: elimina los descuentos seleccionados en la pestaña *sconti* del Encabezado.  

En el encabezado también hay algunas pestañas que analizaremos a continuación.

### 2.1 Pagos (Pagamenti)

Las **soluzioni di pagamento** se reportan automáticamente desde el documento de origen o desde la *Anagrafica cliente > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.  
Si al **tipo pagamento** está asociado un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en los plazos del documento y no en el total del pedido.

#### Botón específico*
> **cancella pagamenti**: utilizado para eliminar las filas de pago seleccionadas.

### 2.2 Descuentos (Sconti)

Se proponen solo los descuentos predeterminados extraídos de la *Anagrafica cliente > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agentes (Agenti)

Indica el código de agente y su comisión para cada línea de artículo. Se propone el código y el porcentaje definidos en la *Anagrafica cliente > pestaña Agentes*.  
Si la comisión no está relacionada con el cliente en su registro, el agente debe ser ingresado, pero con comisión NULL porque si fuera con comisión 0, significaría que el agente está vinculado al cliente pero no recibe comisión.  
La misma sección se volverá a proponer para cada línea de artículo en su pestaña *Agentes*.

#### Botón específico*
> **cancella agenti**: permite eliminar los agentes seleccionados.

### 2.4 Datos adicionales (Extra Data)

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Procedimientos del encabezado:

### *Cumplimiento desde pedido (Evasione da ordine)*

En el encabezado del DDT, al presionar el botón **Cumplimiento desde pedido (Evasione da ordine)** se abrirá el formulario donde se puede filtrar los pedidos confirmados del cliente del documento y transferirlos al DDT. También es posible realizar la operación de creación de DDT desde el pedido desde la [Búsqueda de pedidos](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

A través de este procedimiento es posible crear un DDT de venta desde el cumplimiento del pedido correspondiente. Por lo tanto, es posible insertar los artículos dentro del DDT, cumpliendo total o parcialmente un pedido completo o una línea.

Para poder utilizar este procedimiento hay algunas condiciones iniciales que deben cumplirse:

- el cliente de los pedidos debe ser el mismo que el del DDT;  
- el pedido que se desea cumplir debe tener habilitado el indicador *stampato* y la *data conferma ordine*;  
- en la tabla [Tipos DDT](/docs/configurations/tables/sales/delivery-notes-type) debe estar presente el indicador de *Pedido* (que indica que el DDT puede derivar de un pedido).  
- solo si el procedimiento se ejecuta desde la Búsqueda de pedidos, los tipos de documentos deben ser compatibles: en la tabla [Tipos de pedido](/docs/configurations/tables/sales/sales-order-types) el tipo de pedido que se desea cumplir debe tener el tipo de DDT correspondiente habilitado.  

Luego, se deberá configurar en el encabezado del nuevo DDT, el *Tipo DDT* que se desea crear (que debe corresponder al establecido en la tabla de *Tipos de pedidos*) y el *Cliente*. Una vez que se han ingresado estos datos, debe hacer clic en el botón *evasione ordini* para abrir el formulario de cumplimiento.

#### Procedimiento:

Los filtros para cliente y divisa se trasladarán automáticamente según el cliente seleccionado en el DDT.

Una vez establecidos todos los *Filtros* deseados, al hacer clic en el botón de *Búsqueda*, se mostrará en la cuadrícula una fila por cada pedido impreso, confirmado y no cumplido o cumplido parcialmente.

:::note Nota
El procedimiento toma todos los datos presentes en el pedido y como consecuencia se aplicarán las condiciones de compra presentes en el pedido, incluso si estas han cambiado actualmente.
:::

:::note Nota
Las filas de tipo Nota siempre serán visibles, incluso si ya han sido cumplidas, hasta que todas las filas de otros tipos hayan sido cumplidas.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

1. seleccionar el *pedido completo*. Para hacerlo, basta con seleccionar el indicador presente al principio de la fila del pedido.
2. seleccionar solo *algunos* de los *artículos* propuestos. Para hacerlo, basta con seleccionar el indicador presente al principio de la fila del artículo.
3. seleccionar solo *algunos artículos* para una *cantidad determinada*. En este caso, deberá modificar la cantidad a cumplir.

Para completar el procedimiento, deberá hacer clic en el botón *Transferencia*, que tomará todos los datos presentes en el pedido y los trasladará al DDT.

#### Botones específicos

> **ricerca** permite buscar los pedidos del proveedor.  
> **trasferimento** permite transferir los datos del pedido seleccionado al nuevo DDT.  
> **evasione forzata dell'ordine** permite el cumplimiento forzado del pedido; en caso de que se seleccionen algunas filas del pedido, solo se cumplirán forzosamente las filas seleccionadas (con la adición del indicador *Cumplido forzado (Evaso forzato)* en la fila del artículo); en caso de que se cumpla el pedido completo, su estado también cambiará en el encabezado.  
> **evasione ordini** permite el cumplimiento del pedido.  
> **espandi** permite expandir todo el árbol de pedidos en la cuadrícula inferior para mostrar los artículos contenidos en ellos.  
> **comprimi** permite comprimir la visualización de las filas del artículo, y mostrar solo las filas del pedido.  
> **seleziona tutti** permite seleccionar todos los artículos de la lista.  
> **deseleziona tutti** permite deseleccionar todos los artículos de la lista.  

### *scarico automatico*

El otro procedimiento presente en el encabezado del DDT es la descarga automática del almacén. El botón se habilita si el documento ha sido Impreso.  
Recordemos que si en los [Parámetros DDT](/docs/configurations/parameters/sales/dn-parameters) está habilitada la descarga automática, este procedimiento se iniciará automáticamente una vez que se imprima el documento.  
Una vez que se inicia el procedimiento, Fluentis verifica la presencia de almacén y causa en las líneas del DDT y la posible presencia de lotes y números de serie si se requieren; en caso de que el procedimiento no se ejecute con éxito, se avisará al usuario con un error.  
Si el procedimiento se ejecuta correctamente, se crea el [Registro de almacén](/docs/logistics/warehouse/stock-records/record) que mueve los artículos del documento y se inserta el indicador **scaricato** en el encabezado del DDT.  

## **articoli**

En esta pestaña se ingresan todos los artículos con sus datos correspondientes.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para insertar un **nuovo articolo** en la cuadrícula, basta con posicionarse en la fila para completar los varios datos o utilizar el botón **nuovo** presente en la barra de ribbon. Las columnas disponibles son las siguientes:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **tipo riga**: ofrece la posibilidad de seleccionar, desde la combo-box, artículos con características diferentes:
>- *articolo codificato*: son los artículos codificados en el registro y pueden ser contabilizados en contabilidad analítica y registrados en el almacén.
>- *Artículo no codificado (Articolo non-codificato)*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica pero no pueden ser movidos en el almacén.
>- *articolo spese*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gastos está codificado y es de interés fiscal, se moverá en el almacén, si es no codificado o no de interés fiscal no se moverá en el almacén.
>- *articolo note*: son notas descriptivas que se mencionan en la impresión del documento; no afectan la contabilidad ni el almacén.
>- *articolo omaggio*: el artículo regalo se gestiona como un artículo codificado o no codificado a efectos fiscales y de almacén, pero por ser un regalo se contabiliza por separado en los resúmenes del documento y en función del indicador de Recargo IVA se calcula el monto del IVA del regalo a cargo del sujeto o no.
:::note[NOTA]
Si se comienza directamente con la inserción del artículo, su clase, código y tipo de fila - Artículo codificado se ingresan automáticamente.
:::

- **barcode**: si en los [Parámetros DDT](/docs/configurations/parameters/sales/dn-parameters) se ha habilitado la gestión de Código de barras, aparecerá la columna Código de barras donde se selecciona el dato para el artículo entre los Códigos de barras ingresados en *Anagrafica articolo > Barcode*.

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **articolo cliente**: si en los [Parámetros DDT](/docs/configurations/parameters/sales/dn-parameters) se ha habilitado la gestión de Artículo cliente, aparecerá la columna Artículo cliente, con el código de artículo válido para el cliente titular del documento e ingresado en *Anagrafica articolo > Clienti*.

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
En ausencia de lista de precios, el dato propuesto es el **precio de venta** tomado de la *Anagrafica articolo > pestaña [Costos](/docs/erp-home/registers/items/create-new-item)* o se recuperará según los parámetros del documento. En ausencia también de este dato, se indicará el precio 0.
:::

- **imponibile**: en este campo se indica el Precio unitario, multiplicado por la cantidad del artículo, neto de descuentos.  

- **sconti articolo**: se reporta la suma de los descuentos previstos para el artículo.  

- **sconti finali articolo**: se reporta la suma de los descuentos finales aplicados a los artículos registrados en los Resúmenes del documento.  

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **fatturato vendite**: se propone el dato ingresado en la *generalità*. Si esto no está presente, no se propone ningún dato pero en el momento de contabilizar la factura, se considerará el valor ingresado en el campo *Costo/Ingresos de contrapartida predeterminado* de la *Anagrafica cliente > Datos contables > pestaña Administrativa* o se generará un mensaje de error.  

- **in fattura**: este indicador se inserta de manera predeterminada, pero se puede deshabilitar si el artículo no debe ser trasladado a la factura y por lo tanto no debe aparecer en los procedimientos de cumplimiento del DDT.  

- **peso netto**: se indica el Peso neto presente en el registro del artículo, multiplicado por la cantidad del artículo de la fila.  

- **peso lordo**: se indica el Peso bruto presente en el registro del artículo, multiplicado por la cantidad del artículo de la fila.  


#### Botones específicos

> **ricalcolo conai**: si el [Conai](/docs/sales/sales-flow/conai) está habilitado para el documento, es posible recalcular los valores con este botón después de cualquier modificación.  

> **aggiorna i dati conai nell'anagrafica articolo**: si en la pestaña *Materiales Conai para el artículo* se modifican la Unidad de medida y/o Peso, es posible transferir estos valores a la sección Conai del registro del artículo.  

> **gestione imballi**: permite abrir la gestión de los embalajes retornables usados en el documento de compras.  
El botón se activa si el documento está guardado, pero no cargado.  
Al hacer clic en este botón se abre el formulario correspondiente donde: se ingresará la cantidad, se seleccionará la fila y se ejecutará la transferencia del embalaje seleccionado a las líneas de artículos haciendo clic en el botón Ejecutar. En este formulario se muestran los artículos que se han ingresado con naturaleza de Embalaje y que están presentes en la tabla de Embalajes retornables.  

> **aggiornamento listini**: al hacer clic en el desplegable junto al botón se accede a dos procedimientos. El primer procedimiento es **aggiorna il listino corrente**, que permite alinear el precio del artículo internamente a la Lista de precios, después de un posible cambio de precio directamente en la fila del artículo. En cambio, con el segundo procedimiento, **crea nuovo listino con nuova validità**, es posible crear una nueva lista de precios personalizada para el cliente titular del documento; se solicitarán, en un pop-up, las fechas de inicio y fin de validez de la nueva lista.  

> **mostra/nascondi dettagli**: al hacer clic en este botón, se vuelven visibles o no las pestañas internas de los Artículos.  


### 3.1 Descuentos/Listas (Sconti/Listini)

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Datos (Dati)

Dentro de esta pestaña se reportan/inserta información adicional relacionada con el artículo.

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Almacén y causa (Magazzino e causale)**: se proponen el almacén y la causa de referencia que aparecerán automáticamente en el momento de la descarga de los artículos correspondientes del almacén. Los datos son extraídos de los *Tipos DDT* o se ingresan manualmente.
- **variante**: es posible elegir una variante del artículo, si están codificadas dentro de la *Anagrafica articolo > Varianti*.  
- **stato evasione**: en esta sección se puede verificar si la línea del artículo ha sido Valorada, Valorada parcialmente o Valorada forzosamente.  
- **progetto**: es el proyecto asociado al documento o se puede asignar con la ayuda de la ayuda de campo.  
- **rivalsa iva**: si se activa, el IVA del regalo se considera para el total del documento.  
- **riferimento ordine**: hace referencia al pedido del cual se creó el DDT.  
- **Nuestra referencia/Su referencia (Nostro riferimento/vostro riferimento)**: en estos campos generalmente se indica una referencia interna y una referencia del cliente para el documento; en caso de que el DDT se genere mediante un procedimiento de creación automática, estos campos se llenarán con las indicaciones presentes en el documento de origen.  
- **numero/data riferimento**: reportan la Referencia al Número y a la Fecha del Pedido del cliente de origen.  
- **marca**: representa la marca del artículo, extraída de su registro o de la lista de precios del artículo.  
- **in fattura**: este indicador se inserta de manera predeterminada, pero se puede deshabilitar si el artículo no debe ser trasladado a la factura y por lo tanto no debe aparecer en los procedimientos de cumplimiento del DDT.  
- **nota**: ofrece la posibilidad de ingresar notas para cada artículo.  
- **dettaglio dichiarazioni**: se reporta la [Declaración de intención](/docs/finance-area/declarations/declarations/intent-declaration) utilizada para proponer el IVA del artículo; desde la combo box se puede cambiar la declaración de intención de referencia, si hay más declaraciones válidas presentes.  

### 3.3 Agentes (Agenti)

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lotes y Números de serie (Lotti e Serial number)

En las dos cuadrículas se pueden ingresar los lotes y los números de serie que deben ser descargados del almacén.  
Esta operación está condicionada por la presencia de lotes y números de serie en el almacén.  

Si el artículo no prevé la gestión de Lotes/Números de serie, esta pestaña estará desactivada.

#### Botones específicos

import DeleteLot from './../../../import/buttons/delete-lot.md'

> <DeleteLot />

import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteSN />

### 3.5 Analítica (Analitica)

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Datos adicionales (Extra data)

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documentos adjuntos (Documenti allegati)

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Sección de valores (Sezione valori)

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **riepiloghi**

En los Resúmenes se presentan la información principal del documento entero.

### 4.1 Descuentos finales de artículos (Sconti finali articoli)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Resumen de comisiones de agentes (Riepilogo provvigioni agenti)

En esta pestaña se resumen las comisiones previstas para cada agente.  

### 4.3 Gastos/Descuentos/mayoraciones finales (Spese/Sconti/maggiorazioni finali)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

- **dettaglio dichiarazioni**: se inserta la eventual declaración de intención válida para el cliente.  

### 4.4 Resúmenes de IVA (Riepiloghi IVA)

Se propone el resumen de IVA del documento, para cada código IVA.

### 4.5 Resumen de plazos (Riepilogo scadenze)

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

### 4.6 Totales del documento (Totali documento)

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **trasporto**

Los datos presentes son: 

- **destinatario**: se propone el destinatario predeterminado ingresado en el registro del cliente; si no está presente, se toma la dirección del cliente.  
- **destinazione**: se propone el destino predeterminado del destinatario, si está ingresado en el registro del cliente.  
- **Número de seguimiento (Numero Tracking)**: campo libre.  
- **volume**: se propone el volumen acumulado, resultado de la suma de los volúmenes de los artículos (el valor se toma del Registro del artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del volumen de los artículos corresponde a la que se ha ingresado en los [parámetros del DDT](/docs/configurations/parameters/sales/dn-parameters).  
- **peso netto**: se propone el peso neto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma del Registro del artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la que se ha ingresado en los parámetros del DDT.  
- **peso lordo**: se propone el peso bruto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma del Registro del artículo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la que se ha ingresado en los parámetros del DDT.  
- **aspetto esteriore dei beni**: combo box que remite a la tabla homónima.  
- **colli**: se propone el número de bultos, basado en los datos ingresados en la *Anagrafica articolo > pestaña Pesos/Dimensiones*, en los campos *Artículos presentes en un bulto* o *Bultos para formar el artículo*. Solo se tienen en cuenta los artículos que tienen este campo completo.  
- **valori modificati manualmente**: con este indicador se hace posible la modificación de los campos Volumen, Peso neto, Peso bruto y Bultos, que de otro modo reportan los datos del registro del artículo sin posibilidad de modificación.  
- **Entrada/Salida de la oficina de aduanas (Ingresso/Uscita dell'ufficio doganale)**: campos utilizados para el eTransport para la versión rumana, que remiten a la tabla Oficina de aduanas.  
- **Entrada/Salida del paso fronterizo (Ingresso/Uscita valico di frontiera)**: campos utilizados para el eTransport para la versión rumana, que remiten a la tabla Paso fronterizo.  
- **trasporto**: es necesario seleccionar la figura que se encargará del transporte, marcando el indicador en Remitente, Destinatario o Transportista; según la selección, la sección inferior cambiará; si el transporte corre a cargo del Remitente se podrá ingresar la Matrícula del vehículo, Remolque, Fecha y Hora de Inicio de transporte; si corre a cargo del Destinatario se podrá ingresar la Matrícula del vehículo, Remolque, Fecha y Hora de Inicio de transporte; si corre a cargo del Transportista, los campos disponibles serán Registro contable del Transportista, Matrícula, Remolque, Fecha y Hora de transporte, eventual Cliente, Cargador, Propietario, Lugar de carga.  

## **documenti collegati**

En esta pestaña es posible consultar los documentos adjuntos.  
Para adjuntar documentos, se puede proceder de dos maneras:
- utilizando el botón de la barra de herramientas **documenti** se puede elegir si adjuntar un documento ya codificado en Fluentis o si crear un nuevo Documento para adjuntar.  
- utilizando directamente en la cuadrícula el botón derecho y seleccionando *allega file* se crea un nuevo Documento para adjuntar.