---
title: Nuevo pedido de cliente
sidebar_position: 2
ai_generated: true
---

El formulario **Crear pedido de cliente<!-- Crea ordine cliente -->** se abre desde la ruta **Ventas > Pedidos de clientes > Nuevo pedido<!-- Vendite > Ordini clienti > Nuovo ordine -->** o bien mediante el botón presente en el formulario [Buscar pedidos de clientes<!-- Ricerca ordini clienti -->](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## *Cómo crear un pedido de cliente<!-- Come creare un ordine cliente -->*<!-- Come creare un ordine cliente -->

## **1. Datos obligatorios<!-- Dati obbligatori -->**

Para continuar con la creación del pedido de cliente<!-- ordine cliente -->, el usuario debe ingresar los campos **obligatorios**:

- **Tipo de pedido<!-- Tipo ordine -->**: predefinido en Configuración > Tablas > Ventas > [Tipos de pedido<!-- Tipi ordini -->](/docs/configurations/tables/sales/sales-order-types); recomendamos revisar la documentación de la tabla para conocer las diversas configuraciones posibles, pero para poder ingresar un pedido es necesario que el tipo de pedido tenga definida la tipología de numeración, dato obligatorio. Según la configuración presente en el tipo de pedido se pueden habilitar diferentes escenarios para la inserción del pedido de cliente<!-- ordine cliente -->, como por ejemplo la creación automática de un proyecto, la gestión de precios con impuestos incluidos, la gestión de matrices, etc.
- **Número<!-- Numero -->**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración de pedidos de clientes<!-- Numerazione ordini clienti -->](/docs/configurations/tables/fluentis-numerations) y en el tipo de documento que contiene la numeración. La numeración asociada al tipo de pedido generalmente prevé una progresión automática basada en fecha y número, con una función de recuperación para cubrir posibles huecos en la secuencia (por ejemplo, causados por la eliminación de documentos). Este comportamiento está regulado por dos flags específicos en la tabla de numeración. Si el usuario desea ingresar manualmente el número, puede deshabilitar el flag de progresión fecha-número (que garantiza el incremento de la numeración en fechas futuras) y el flag de recuperación de números. Además, debe habilitar el flag de numeración externa, indicando al sistema que la numeración será gestionada manualmente.
- **Cliente**: usando la [ayuda de campo<!-- help di campo -->](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o introduciéndolo [directamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection). Al ingresar el cliente, se rellenan automáticamente, si existen en la ficha maestra, los siguientes campos, que explicaremos en las secciones siguientes: moneda, país, idioma, zona, envío, lista de precios y eventuales descuentos, pagos, descuentos, gastos, agentes, destino, transportistas<!-- vettori -->, datos extra.
- **Fecha de pedido<!-- Data ordine -->**: indica la fecha de creación del pedido. Esta fecha es fundamental para el cálculo de los vencimientos y posibles condiciones de pago. Se propone la fecha actual, modificable; en caso de que la numeración prevea una progresión de fecha y número, y se ingrese una fecha pasada, Fluentis revisará la disponibilidad de números en esa fecha para garantizar la progresión, y si no hay, avisará al usuario que no hay números disponibles.
- **Tipo de retención<!-- Tipo ritenuta -->**: este campo es visible solo si el cliente gestiona la retención en la fuente, es decir, si en la ficha maestra presenta el correspondiente flag y el tipo de retención, en la pestaña [información fiscal<!-- informazioni fiscali -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information). La retención en la fuente es una deducción fiscal aplicada a pagos por servicios laborales o profesionales, anticipada al fisco por el contratante y posteriormente deducida del impuesto sobre la renta del beneficiario. Para una gestión correcta de esta función, en la tabla tipos de retención debe estar codificado correctamente el código para la facturación electrónica. El documento capturará automáticamente la sujeción a retención para las filas donde sea posible el cálculo, y calculará automáticamente el importe de la retención.

El formulario contiene una serie de pestañas.

## **2. Cabecera<!-- Testata -->**

Luego de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar completando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo<!-- help di campo -->](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Recuerda<!-- Ricorda -->
Si el documento se *crea automáticamente*, estos datos se toman del *documento de origen* desde el cual fue generado.
:::

### 2.1 Datos del cliente<!-- Dati cliente -->

Al ingresar el **Cliente**, se *proponen* automáticamente todos los datos específicos de la pestaña **Cabecera<!-- Testata -->**, según los datos configurados previamente en la [ficha maestra de cliente<!-- anagrafica cliente -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:
- **Moneda<!-- Divisa -->**: sección que contiene los datos de la [Moneda<!-- Divisa -->](/docs/guide/common/glossary/glossary-intro#currency), [Tipo de cambio<!-- Cambio -->](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha valor<!-- Data valuta -->](/docs/guide/common/glossary/glossary-intro#currency-date).
- **País<!-- Nazione -->**: sección que contiene los datos de [País<!-- Nazione -->](/docs/guide/common/glossary/glossary-intro#country), [Idioma<!-- Lingua -->](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Envío<!-- Spedizione -->**: sección que contiene los datos de [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto<!-- Porto -->](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje<!-- Imballo -->](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios<!-- Listino -->](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [intervalo de validez<!-- intervallo di validità -->](/docs/guide/common/glossary/glossary-intro#validity-date)
- otros campos propuestos tras elegir el cliente, pero modificables: [Destino<!-- Destinazione -->](/docs/guide/common/glossary/glossary-intro#destination), [Destinatario<!-- Destinatario -->](/docs/guide/common/glossary/glossary-intro#recipient).

### 2.2 Datos opcionales de cabecera<!-- Dati facoltativi testata -->

- **Fecha de entrega<!-- Data consegna -->**: en este campo es posible indicar la fecha prevista de entrega de la mercancía.
- **Fecha mercancía lista<!-- Data merce pronta -->**: en este campo se puede señalar la fecha en que la mercancía estará lista; esta fecha debe ser menor o igual a la anterior.
- **Confirmado**: este flag indica que el pedido está confirmado y, por lo tanto, puede ser gestionado; junto a este se encuentra la **Fecha de confirmación<!-- Data conferma -->**; esta condición es obligatoria si se quiere proceder con la gestión del pedido tanto para la eventual gestión posterior de entrega (como picking, albarán y facturas), como para la posible planificación de producción.
- **Impreso**: se activa cuando se imprime el pedido e indica que el documento ha sido impreso; esta bandera también es importante para permitir la gestión del pedido en otros documentos.
- **Archivado**: es necesario marcar este flag si el documento debe ser archivado.
- **Anulado**: el flag activo permite anular el pedido; el estado de cabecera del pedido cambiará a gestionado forzadamente, ya que el pedido no debe ser transferido a otros documentos.
- **Código Único de Proyecto/Código Identificativo de Licitación**: si en la [información fiscal](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) de la ficha maestra del cliente está habilitada la gestión de CIG y CUP, será posible llenar estos datos en el documento.
- **Notas cliente<!-- Annotazioni cliente -->**: este campo se toma de la ficha del cliente, pero puede ser ingresado manualmente también.
- **Nuestra referencia/su referencia**: en estos campos usualmente se indica una referencia interna y una referencia de cliente para el documento; si el pedido fue generado mediante un procedimiento de creación automática, estos campos se completarán según lo indicado en el documento de origen. Esta transferencia es válida solo en el caso de pedido de cliente<!-- ordine cliente --> creado a partir de la extracción de datos de un solo documento.
- **Notas iniciales**: se pueden seleccionar notas previamente ingresadas en la tabla con el mismo nombre que se encuentra en *Configuración > Utilidades > Gestión de notas codificadas*; por lo tanto, el usuario debe hacer doble clic en el campo para abrir la Ayuda y seleccionar los datos; de lo contrario, puede ingresarlos manualmente.
- **Operador**: permite indicar el usuario que crea el documento. Los empleados han sido ingresados previamente en la tabla *Home > Empleados*; el dato pasa a ser obligatorio si la opción está configurada en los [Parámetros](/docs/configurations/parameters/sales/sales-orders-parameters) del propio documento.
- **Estado de gestión<!-- Stato evasione -->**: cuando el pedido se gestiona a través de los documentos de albarán o facturas, su estado cambia automáticamente de *No gestionado* a *Parcialmente gestionado* o *Gestionado*; el usuario puede forzar la gestión de un pedido no totalmente gestionado y, cuando esto ocurre, también se guarda la fecha de gestión.

:::note
Si se activa el estado *Gestionado forzadamente<!-- Evaso forzato -->*, se muestra el siguiente mensaje: “La gestión forzada de la fila comporta la eliminación automática de los posibles pedidos planificados vinculados a órdenes de trabajo<!-- commesse --> en estado programado y la gestión de las órdenes en estado programado y no revisado. Para los documentos generados relativos a órdenes de trabajo<!-- commesse --> en estado lanzado o ejecutado, las órdenes y documentos no se modificarán.”
:::

- **Comienzo de validez<!-- Decorrenza -->**: es la fecha de inicio para el cálculo de los vencimientos de pago.

#### Botones específicos<!-- Pulsanti specifiche -->
> **Gestionar desde proyecto<!-- Evasione da progetto -->**: invoca el procedimiento para crear un pedido a partir de un proyecto.
> **Reemplazar fecha prevista de entrega en las filas<!-- Sostituisci data prev. consegna nelle righe -->**: después de especificar la fecha de entrega solicitada y/o la prevista en la cabecera del pedido, es posible sustituir en masa dichas fechas en las filas de artículo ya ingresadas.
> **Reemplazar agente en las filas<!-- Sostituisci agente nelle righe -->**: este botón abre una ventana emergente donde ingresar una ficha de agente, que se asignará a todas las filas de artículos, agregándose a los agentes ya presentes si los hay.
> **Reemplazar CIG/CUP en las filas<!-- Sostituisci CIG/CUP nelle righe -->**: tras haber especificado CIG y/o CUP en la cabecera del pedido, es posible sustituir en masa dichos datos en las filas de artículo ya ingresadas.
> **Ayuda destinatarios/destinos<!-- Help destinatari/destinazioni -->**: este botón abre la Ayuda para seleccionar el destinatario/destino para el documento, entre los disponibles para el cliente y codificados en su ficha.

En la cabecera también están presentes algunas pestañas que analizamos a continuación.

### 2.3 Pagos<!-- Pagamenti -->

Las **Soluciones de pago<!-- Soluzioni di pagamento -->** se proponen automáticamente desde la *Ficha de cliente > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **Tipo de pago<!-- Tipo pagamento -->** está asociado un descuento financiero, el importe del descuento solo se considera a nivel contable, es decir, en los plazos del documento y no en el total.

El botón específico de esta pestaña es **Eliminar pagos<!-- Cancella pagamenti -->**, para eliminar las filas seleccionadas de pago.

### 2.4 Descuentos<!-- Sconti -->

Solo se proponen los descuentos predefinidos tomados de la *Ficha de cliente > pestaña Descuentos*, no los atribuidos a las condiciones de pago o a ciertos artículos. Pueden ser modificados/eliminados por el usuario.

Los descuentos propuestos en la cabecera del documento se reportan en cada nueva fila de artículo ingresada en el documento.

Si después de ingresar las filas de artículos se ingresa un nuevo descuento en la cabecera, este no se replica en las filas de artículos ya ingresadas.

:::important Recuerda<!-- Ricorda -->
Para poder gestionar los descuentos sobre base imponible, es necesario activar en la base de datos el parámetro general GEN-GlobalSettings_CalculateDiscountOnAmount para la empresa de interés.
Si dicho parámetro no está activo, los descuentos sobre base imponible se transformarán en descuentos en cascada.
:::

El botón específico para esta pestaña es **Eliminar descuentos<!-- Cancella sconti -->**, utilizado para eliminar las filas seleccionadas de descuento.

### 2.5 Agentes

Indica el código de agente y su comisión por cada fila de artículo. Se proponen el código y porcentaje definidos en la *Ficha de cliente > pestaña Agentes*.

Si la comisión no está vinculada al cliente en su ficha, igualmente debe ingresarse el agente, pero con comisión NULL porque si se indicara comisión 0 significaría que el agente está asignado pero no percibe comisión.

En caso de generación del albarán desde el pedido, este dato se trasladará igual que en el pedido de cliente<!-- ordine cliente -->.

La misma sección se propondrá para cada fila de artículo en la pestaña respectiva Agentes.

El botón específico de esta vista es **Eliminar agentes<!-- Cancella agenti -->**, que permite eliminar los agentes seleccionados.

### 2.6 Destino<!-- Destinazione -->

Aquí se propone la información agregada en la *Ficha de cliente > pestaña Entregas*, solo si existen datos predeterminados. El combo presenta todos los destinatarios, destinos y transportistas<!-- vettori --> agregados en la ficha de cliente.

Las direcciones de envío (destinatario/destino y transportista<!-- vettore -->) pueden ingresarse también solo a modo descriptivo, sin haberse introducido previamente como contactos.

Si en la ficha maestra no se ha ingresado este dato predeterminado, entonces se proponen como destinatario y destino la dirección ingresada en los datos de la ficha maestra.

### 2.7 Transportistas<!-- Vettori -->

En la sección Transportistas<!-- Vettori --> se proponen los datos ingresados en la pestaña [Entrega<!-- Consegna -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) de la ficha del cliente. En particular, se propone el sujeto a cargo del transporte, entre remitente, destinatario o transportista<!-- vettore -->. Según la selección, la sección inferior cambiará; si el transporte va por cuenta del Remitente, será posible ingresar Placa del vehículo<!-- Targa automezzo -->, Fecha y Hora de Inicio del transporte, y se mostrará la dirección de la empresa; si va por cuenta del Destinatario, será posible ingresar Placa del vehículo<!-- Targa automezzo -->, Fecha y Hora de Inicio del transporte, con la sugerencia del destino; si va por cuenta del Transportista<!-- Vettore -->, los campos disponibles serán Ficha contable del Transportista<!-- Vettore -->, Placa, Fecha y Hora de transporte.

### 2.8 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.9 Co-titulares<!-- Cointestatari -->

Esta pestaña está activa solo si en la ficha del cliente, pestaña [información fiscal<!-- informazioni fiscali -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), se ha marcado la gestión de co-titulares. La gestión de co-titulares permite que varias personas sean titulares conjuntos del pedido. Los co-titulares deben estar agregados en las direcciones alternativas de la ficha, con una dirección de [tipo](/docs/configurations/tables/general-settings/address-types) co-titular según corresponda. Así, se propondrán en esta pestaña, donde será necesario ingresar manualmente los porcentajes de reparto del gasto.

## **3.a Artículos agrupados<!-- Articoli raggruppati -->**

Esta pestaña está activa y visible solo para los [Tipos de pedido<!-- Tipi ordine -->](/docs/configurations/tables/sales/sales-order-types) que tengan activado el flag de *Gestión de matrices Extra Data* y la respectiva *Configuración*. Esta pestaña permite generar variantes del artículo según las combinaciones válidas de atributos, que se transferirán a la siguiente pestaña *Artículos*.
Para todos los campos no explicados en esta página, puede consultar la documentación de la pestaña *Artículos*.
Al ingresar un [artículo gestionado con Matriz<!-- articolo gestito a Matrice -->](/docs/erp-home/registers/items/create-new-item) en la cuadrícula de artículos, en la pestaña *Matrices<!-- Matrici -->* se visualizará la matriz asociada a la ficha del artículo. En las celdas de la matriz será posible ingresar las cantidades solicitadas para cada combinación; solo se podrán completar las celdas con combinaciones válidas en la ficha maestra.
Una vez ingresadas las cantidades para cada combinación, es necesario hacer clic en el botón de la barra de herramientas *Confirmar valores de matriz<!-- Conferma valori matrice -->* para generar tantas variantes como combinaciones sean posibles. Cada variante llenará una fila de la siguiente pestaña Artículos, con la cantidad correspondiente.

## **3.b Artículos<!-- Articoli -->**

En esta pestaña se ingresan todos los artículos con sus respectivos datos.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para insertar un **Nuevo artículo** en la cuadrícula, simplemente sitúese en la fila e introduzca los distintos datos o utilice el botón **Nuevo** presente en la barra de herramientas.

A continuación se analizan los campos *obligatorios* presentes en la cuadrícula principal:
- **Fila<!-- Riga -->**: este campo contiene el número de la fila y se completará automáticamente y de manera progresiva a medida que se ingresen los datos en la fila.

- **Tipo de fila<!-- Tipo riga -->**: ofrece la posibilidad de seleccionar, desde el combo-box, artículos con diferentes características:
>- *Artículo codificado*: son artículos codificados en la ficha maestra y pueden ser contabilizados en contabilidad analítica y registrados en almacén<!-- magazzino -->.
>- *Artículo no codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica, pero no pueden ser gestionados en almacén<!-- magazzino -->.
>- *Artículo gastos*: son artículos codificados o no y se resumen de forma distinta en los resúmenes de los documentos, si el artículo de gasto está codificado y es de interés fiscal se gestionará en almacén<!-- magazzino -->, si es no codificado o no es de interés fiscal no se gestionarán en almacén<!-- magazzino -->.
>- *Artículo nota*: son notas descriptivas reportadas en la impresión del documento; no afectan a la contabilidad ni al almacén<!-- magazzino -->.
>- *Artículo de obsequio*: el artículo de obsequio se gestiona como un artículo codificado o no a efectos fiscales y de almacén<!-- magazzino -->, pero al ser obsequio se cuenta por separado en los resúmenes del documento y, según el flag de retención de IVA, se calculará el importe del IVA del obsequio a cargo del sujeto o no.

:::note[NOTA]
Si se comienza directamente con la entrada del artículo, su clase, el código y el tipo de fila - Artículo codificado se insertan automáticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import ItemUM from './../../../import/fields/item-um.md'

<ItemUM />

import ItemQuantity from './../../../import/fields/item-quantity.md'

<ItemQuantity />

import ItemPrice from './../../../import/fields/item-price.md'

<ItemPrice />

:::note[NOTA]
En ausencia de lista de precios, el dato propuesto es el **precio de venta** tomado de la *Ficha del artículo > pestaña [Costos](/docs/erp-home/registers/items/create-new-item)* o se recuperará según la configuración de parámetros del documento. Si tampoco está disponible este dato, se reportará el precio 0.
:::

- **Base imponible<!-- Imponibile -->**: este campo contiene el Precio unitario multiplicado por la cantidad, neto de los descuentos.

- **Descuentos del artículo<!-- Sconti articolo -->**: contiene los descuentos válidos para el artículo, provenientes de la cabecera, de la lista de precios o del ingreso manual.

- **Descuentos finales del artículo<!-- Sconti finali articolo -->**: contiene los descuentos finales del artículo indicados en los resúmenes del documento, que se distribuyen a todos los artículos.

import ItemVat from './../../../import/fields/item-vat.md'

<ItemVat />

#### Campos no obligatorios

- **Código de barras/Artículo cliente y Descripción artículo cliente**: estos datos se tomarán de la información presente en la *Ficha de artículos*; para gestionar los Códigos de barras es necesario activar su gestión en los [Parámetros del pedido de cliente<!-- Parametri ordine cliente -->](/docs/configurations/parameters/sales/sales-orders-parameters). Esta columna permite sugerir el artículo buscándolo por su código de barras. Al ser el código de barras único, una vez digitado el código registrado en la ficha del artículo, se propondrá el artículo correspondiente.

- **Facturación de ventas<!-- Fatturato vendite -->**: se propone el dato ingresado en la *Ficha de artículo > pestaña General*, si no se recupera debe introducírselo eligiéndolo entre los propuestos en el combo, de lo contrario la ausencia de este dato podría causar errores en la contabilización de la factura generada por el pedido, si en *Ficha de cliente > Datos contables > pestaña Administrativa* no se ha ingresado un valor en el campo *Ingreso de contrapartida predeterminado*.

- **Gestionado forzadamente<!-- Evaso forzato -->**: si está activo, este flag indica que la fila del artículo ha sido gestionada forzadamente: porque el cliente ya no lo desea, o bien la cantidad producida y enviada es inferior a la cantidad pedida, pero no se producirá el saldo y, por lo tanto, se gestionará forzadamente la cantidad.

:::note[NOTA]
Si se gestiona la producción, al activar el flag, se mostrará un mensaje que avisa al usuario: "La gestión forzada de la fila comporta la eliminación automática de pedidos planificados vinculados a órdenes de trabajo<!-- commesse --> en estado programado y la gestión de órdenes en estado programado y no revisado". En cuanto a los documentos generados por órdenes de trabajo<!-- commesse --> en estado lanzado o ejecutado, las órdenes y los documentos no se modificarán.
:::

- **Fecha mercancía lista y Fecha entrega<!-- Data Merce pronta e Data consegna -->**: estas fechas indican la fecha en la que el material estará listo (cuando la producción haya terminado) y la fecha en la que se prevé entregar el material; Fecha mercancía lista debe ser menor o igual a Fecha de entrega.

En la sección Artículos se encuentran los siguientes botones, en la barra de herramientas:

> **Lista de materiales<!-- Distinta Base -->**: permite abrir la lista de materiales del artículo seleccionado para consultar sus detalles; (para más información sobre este tema consulte el artículo Árbol de la lista de materiales y gestión de estructuras).
> **Desglosar primer nivel de la lista de materiales<!-- Esplodi primo livello distinta -->**: permite agregar en el pedido de cliente<!-- ordine cliente --> los materiales (materias primas y semielaborados) presentes en la lista de materiales del artículo; se reportarán en el pedido los componentes del primer nivel del producto terminado. Esta opción es muy usada para productos tipo kit (compuestos por varias partes).
> **Actualizar listas de precios<!-- Aggiornamento listini -->**: permite actualizar el precio del artículo en una lista existente (guardar el documento para habilitar estos botones), o crear una nueva lista con el artículo y el precio seleccionado.
> **Dividir cantidad en varias entregas<!-- Suddividi quantità in più consegne -->**: permite dividir la cantidad de una fila de artículo en varias filas según las fechas de entrega. Al seleccionar la fila y hacer clic en el botón, se abrirá el formulario **Entregas diferentes<!-- Consegne diverse -->** en el cual se reportará la *Fecha mercancía lista*, la *Fecha entrega* y la *Cantidad* de la fila. En la fila siguiente se deberá indicar la *Fecha mercancía lista* (que debería ser igual), la *Fecha de entrega* que será diferente y la *Cantidad* a enviar en esa fecha y luego será necesario modificar la fecha en la primera fila actualizándola con la cantidad restante, de modo que la suma de las cantidades de ambas filas sea igual a la cantidad inicial de la fila antes de dividirla. Confirmar la operación con el botón *OK*.
> **Empaquetado<!-- Confezionamento -->**: permite crear una UDC a partir de la fila seleccionada. La fila debe ser un artículo codificado y guardado en el documento. El usuario debe disponer de permisos en los [Parámetros de carga/descarga](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) para la carga del palet. Además, el artículo debe gestionarse con UDC y, según los ajustes del Tipo UDC insertados en la ficha del artículo, pestaña [Empaquetado](/docs/erp-home/registers/items/create-new-item), se creará la UDC conforme a los criterios.

A continuación analizamos las pestañas debajo de la cuadrícula de artículos.

### 3.b.1 Descuentos/Lista de precios<!-- Sconti/Listini -->

Esta pestaña tiene como primer campo la eventual **Lista de precios<!-- Listino -->** válida para el cliente y vinculada al artículo; de lo contrario, es un campo que se puede rellenar manualmente para tomar el precio del artículo de una lista específica. Junto a los datos de la lista asignada está el campo **Tipo de tramo<!-- Tipo scaglione -->**: muestra el tramo de descuento a utilizar, que se toma de la ficha del cliente o de la propia lista.
El flag **Precio manual<!-- Prezzo manuale -->** permite modificar el precio y los descuentos manualmente, y mantenerlos en los documentos posteriores creados a partir del documento original modificado.

En la cuadrícula se proponen todos los descuentos asociados al artículo, cada uno con su base de cálculo y asignación. Los descuentos pueden provenir de: la ficha del cliente, la solución de pago asignada al documento, la lista de precios o la asociación lista-cliente. Todos los datos propuestos son modificables.

Desde esta cuadrícula puede usarse el botón **Eliminar descuentos<!-- Cancell sconti -->** de la barra de herramientas.

### 3.b.2 Datos del artículo<!-- Dati articolo -->

En esta pestaña se reportan/ingresan informaciones adicionales relacionadas con el artículo.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Almacén/descripción/Motivo<!-- Magazzino/descrizione/Causale -->**: en estos campos se deberá indicar el almacén<!-- magazzino --> de salida del material con el motivo correspondiente necesario para las salidas de material al emitir el albarán o la factura; estos datos se configuran en la tabla de [Tipos de pedido<!-- Tipi ordine -->](/docs/configurations/tables/sales/sales-order-types).

- **Proyecto**: es el proyecto asociado al documento; este puede ser asignado, en caso de pedido de cliente<!-- ordine cliente -->, mediante el procedimiento *Gestionar desde orden de trabajo<!-- Evasione da commessa -->* o con la ayuda de campo.

- **Retención de IVA<!-- Rivalsa IVA -->**: si se marca, el IVA del obsequio se considera en el total del documento.

- **Oferta**: muestra la referencia de la oferta del cliente si el pedido proviene de una [Oferta](/docs/sales/offers/search-offers).

- **Marca**: representa la marca del artículo, tomada de su ficha o de la lista de precios del artículo.

- **Notas**: ofrece la posibilidad de ingresar notas para cada artículo que se desean trasladar a todos los documentos.

### 3.b.3 Agentes

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.b.4 Lotes y Serial number

En las dos cuadrículas pueden ingresarse los lotes y números de serie que deben ser descargados desde el almacén<!-- magazzino --> y que están vinculados al artículo en la *Ficha del artículo > pestaña [Lotes y Serial Number](/docs/erp-home/registers/items/create-new-item)* o bien pueden ingresarse manualmente.

Esta operación está condicionada a la existencia de los lotes y números de serie en el almacén<!-- magazzino -->.

Si el artículo no prevé la gestión de Lotes/Números de serie, esta pestaña estará deshabilitada.

#### Botones específicos

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.b.5 Analítica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.b.6 Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.b.7 Documentos adjuntos<!-- Documenti allegati -->

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.b.8 Matrices<!-- Matrici -->

Esta pestaña se muestra exclusivamente para los [Tipos de pedido](/docs/configurations/tables/sales/sales-order-types) que tengan el flag de gestión de matrices Extra Data.

### 3.b.9 Sección de valores<!-- Sezione valori -->

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

El campo **Estado** en la parte superior de esta sección muestra la situación del artículo en el eventual ciclo de producción y se actualiza automáticamente en función del estado de la orden de trabajo<!-- commessa --> vinculada.
El artículo puede tener los siguientes estados:
- *Ingresado* cuando se ingresa el artículo;
- *Confirmado* cuando el pedido se confirma, con los flags y la fecha correspondientes en la cabecera;
- *En producción* cuando se genera la orden de trabajo<!-- commessa -->, mediante el procedimiento de [Generación de órdenes de producción](/docs/planning/ms-master-scheduling/general-schedule) o automáticamente si así lo prevé el tipo de pedido;
- *Producido* si la orden de trabajo<!-- commessa --> vinculada está en estado gestionado;
- *Anulado* si el artículo se gestiona forzadamente.

## **4. Resúmenes<!-- Riepiloghi -->**

En las distintas secciones de esta pestaña se presentan las informaciones principales de todo el documento y algunos botones específicos.

### 4.1 Descuentos finales<!-- Sconti finali -->

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Resumen de comisiones de agentes<!-- Riepilogo provvigioni agenti -->

En esta cuadrícula se resumen las comisiones totales ganadas por el agente en este pedido, en caso de que haya uno vinculado. Se presentará el agente y el valor de la comisión adquirida.

### 4.3 Gastos/Descuentos/Incrementos finales<!-- Spese/Sconti/maggiorazioni finali -->

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 Resúmenes de IVA<!-- Riepiloghi IVA -->

Se muestra el resumen de IVA del documento, para cada código de IVA.

### 4.5  Resumen de vencimientos<!-- Riepilogo scadenze -->

En esta cuadrícula se reportan los vencimientos calculados según las soluciones de pago ingresadas.

### 4.6 Otros campos

**Notas finales**: es un campo descriptivo que puede ser rellenado por el usuario también con ayuda de la *Ayuda de notas codificadas*. Se pueden agregar notas adicionales para el cliente, por ejemplo relacionadas con la entrega, que luego se reportarán en la impresión de la Confirmación de Pedido en la parte final.

### 4.7 Totales del documento<!-- Totali documento -->

En la parte derecha de esta pestaña pueden consultarse los resúmenes del documento:

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Documentos vinculados<!-- Documenti collegati -->**

En esta pestaña es posible consultar los documentos adjuntos.
Para adjuntar documentos hay dos formas:
- usando el botón de la barra de herramientas **Documentos** se puede elegir si adjuntar un documento ya codificado en Fluentis o crear un nuevo Documento para adjuntar.
- usando directamente en la cuadrícula el botón derecho del ratón y seleccionando *Adjuntar archivo* se crea un nuevo Documento para adjuntar.