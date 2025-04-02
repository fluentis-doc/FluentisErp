---
title: Nuevo pedido cliente (Nuovo ordine cliente)
sidebar_position: 2
---

El formulario **crea ordine cliente** se abre a través de la ruta **Ventas > Pedidos clientes > Nuevo pedido** o mediante el botón que se encuentra en el formulario [Buscar pedidos clientes](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## *Cómo crear un pedido cliente*

## **1. Datos obligatorios**

Para continuar con la creación del pedido cliente, el usuario debe ingresar los campos **obligatorios**:

- **tipo ordine**: predefinido en Configuración > Tablas > Ventas > [Tipos de pedidos](/docs/configurations/tables/sales/sales-order-types); remitimos a la documentación relacionada con la tabla para estudiar las diversas configuraciones posibles, pero para poder ingresar un pedido es necesario que el tipo de pedido haya definido la tipología de numeración, dato obligatorio. Según la configuración presente en el tipo de pedido, se pueden abrir diferentes escenarios para la inserción del pedido cliente, por ejemplo, la creación automática de un proyecto, la gestión a precios con IVA, la gestión de matrices, etc.  
- **numero**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración de pedidos clientes](/docs/configurations/tables/fluentis-numerations) y al tipo de documento que contiene la numeración. La numeración asociada a la tipología de pedido prevé generalmente una progresión automática basada en la fecha y el número, con una función de recuperación que cubre eventuales agujeros en la secuencia (por ejemplo, causados por la cancelación de documentos). Este comportamiento está regulado por dos indicadores específicos en la tabla de numeración. Si el usuario desea ingresar manualmente el número, puede desactivar el indicador de progresión fecha-número (que garantiza el incremento de la numeración en fechas futuras) y el indicador de recuperación de números. Además, deberá habilitar el indicador de numeración externa, indicando así al sistema que la numeración será gestionada manualmente.  
- **cliente**: usando el [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o escribiendo [directamente](https://docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection). Al ingresar el cliente, se completan automáticamente, si están presentes en el registro, los siguientes campos, que explicaremos en las secciones siguientes: divisa, nación, idioma, zona, envío, lista de precios y eventuales descuentos, pagos, gastos, agentes, destino, transportistas, datos adicionales.             
- **data ordine**: indica la fecha de creación del pedido. Esta fecha es fundamental para el cálculo de los plazos y las condiciones de pago. Se propone la fecha actual, la cual puede ser modificable; en caso de que la numeración prevea una progresión de fecha y número, y yo ingrese una fecha en el pasado, Fluentis verificará la disponibilidad de números en esa fecha para garantizar la progresión, y si no está presente, avisará al usuario que no hay números disponibles en esa fecha.        
- **tipo ritenuta**: este campo solo es visible si el cliente gestiona la retención de impuesto (ritenuta d’acconto), por lo que si en el registro existe el indicador homónimo y el tipo de retención, en la pestaña [información fiscal](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information). La retención de impuesto es una deducción fiscal aplicada a los pagos por servicios laborales o profesionales, anticipada al fisco por el contratista y posteriormente deducida del impuesto sobre la renta del beneficiario. Para una gestión correcta de esta funcionalidad, en la tabla de tipos de retención debe codificarse correctamente el código para la facturación electrónica. El documento recuperará automáticamente la sujeción a la retención para las líneas sobre las cuales es posible hacer el cálculo, y calculará automáticamente el importe de la retención. 

El formulario contiene una serie de pestañas.

## **testata**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con el [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Recuerda
Si el documento es *creado automáticamente*, estos datos se recuperan del *documento de origen* del cual se ha generado.
:::

### 2.1 Datos cliente

Al ingresar el **Cliente**, se *proponen* automáticamente todos los datos específicos de la pestaña **testata**, según los datos establecidos previamente en la [anagrafía cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:  
- **divisa**: sección que contiene los datos de [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de divisa (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).
- **nazione**: sección que contiene los datos de [Nación](/docs/guide/common/glossary/glossary-intro#country), [Idioma (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zona (Zona)](/docs/guide/common/glossary/glossary-intro#zone).
- **spedizione**: sección que contiene los datos de [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios (Listino)](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).
- otros campos propuestos con la elección del cliente, pero modificables: [Destino (Destinazione)](/docs/guide/common/glossary/glossary-intro#destination), [Destinatario (Destinatario)](/docs/guide/common/glossary/glossary-intro#recipient).

### 2.2 Datos opcionales del encabezado

- **data consegna**: en este campo se puede ingresar la fecha prevista de entrega de la mercancía.
- **data merce pronta**: en este campo se puede ingresar la fecha en la que la mercancía estará lista; esta fecha debe ser menor o igual a la anterior.        
- **confermato**: este indicador indica que el pedido está confirmado y, por lo tanto, puede ser cumplido; al lado está presente la **data conferma**; esta condición es obligatoria si se quiere continuar con el pedido tanto para el posible cumplimiento en documentos posteriores (como picking, DDT y facturas), como para la eventual gestión de la planificación de producción.        
- **stampato**: se activa cuando se realiza la impresión del pedido e identifica que el documento ha sido impreso; este indicador es importante también para permitir el cumplimiento del pedido en otros documentos.        
- **archiviato**: es necesario marcar este indicador si el documento debe ser archivado.   
- **annullato**: el indicador activo permite cancelar el pedido; el estado del encabezado del pedido cambiará a forzadamente cumplido, ya que el pedido no debe ser transferible a otros documentos.    
- **Código Único de Proyecto/Código Identificativo de Licitación (Codice Unico di Progetto/Codice Identificatico di Gara)**: si en la [información fiscal](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) del registro del cliente se ha habilitado la gestión de CIG y CUP, será posible completar estos datos en el documento.    
- **annotazioni cliente**: este campo se recupera del registro del cliente, pero también se puede ingresar manualmente.
- **Nuestra referencia/Su referencia (Nostro riferimento/vostro riferimento)**: en estos campos generalmente se indica una referencia interna y una referencia del cliente para el documento; en caso de que el pedido se genere a través de un procedimiento de creación automática, estos campos se poblarán con las indicaciones presentes en el documento de origen. Esta transferencia solo es válida en el caso de un pedido cliente creado a partir de los datos de un solo documento.     
- **note iniziali**: se pueden seleccionar las notas que se han ingresado previamente en la tabla homónima que se encuentra en la ruta *Configuración > Utilidades > Gestión de notas codificadas*; para esto, el usuario debe hacer doble clic en el campo para abrir la Ayuda y seleccionar los datos; de lo contrario, puede ingresarlas manualmente.       
- **operatore**: permite ingresar al usuario que crea el documento. Los empleados se han ingresado previamente en la tabla *Inicio > Empleados*; el dato se vuelve obligatorio si la opción está habilitada en los [Parámetros](/docs/configurations/parameters/sales/sales-orders-parameters) del documento mismo.     
- **stato evasione**: cuando el pedido es cumplido a través de los documentos DDT o facturas, su estado de cumplimiento cambia automáticamente de *non evaso* a *parzialmente evaso* o *evaso*; el usuario puede forzar el cumplimiento de un pedido no totalmente cumplido y cuando esto sucede, también se guarda la fecha de cumplimiento.      

:::note
Si se activa el estado *Cumplido forzado (Evaso forzato)*, se muestra el mensaje: “El cumplimiento forzado de la línea implica la eliminación automática de eventuales pedidos planificados vinculados a trabajos en estado programado y el cumplimiento de los trabajos en estado programado y no examinados. En cuanto a los documentos generados a partir de trabajos en estado lanzado o ejecutivo, los trabajos y documentos no se modificarán.”
:::

- **decorrenza** es la fecha de vigor para el cálculo de los plazos de pago.

#### Botones específicos  
> **evasione da progetto**: invoca el procedimiento para crear un pedido desde un proyecto.        
> **Reemplazar la fecha de entrega prevista en las líneas (Sostituisci data prev. consegna nelle righe)**: después de haber especificado la fecha solicitada de entrega y/o la fecha prevista de entrega en el encabezado del pedido, es posible reemplazar en masa tales fechas en las líneas de artículo ya ingresadas.           
> **Reemplazar agente en las líneas (Sostituisci agente nelle righe)**: este botón abre un pop-up en el cual se puede ingresar una anagrafía de agente, que se aplicará a todas las líneas de artículo, añadiéndose eventualmente a los agentes ya presentes.        
> **Reemplazar CIG/CUP en las líneas (Sostituisci CIG/CUP nelle righe)**: después de haber especificado CIG y/o CUP en el encabezado del pedido, es posible reemplazar en masa tales datos en las líneas de artículo ya ingresadas.           
> **help destinatari/destinazioni**: este botón abre la Ayuda para poder elegir el destinatario/destino para el documento, entre los disponibles para el cliente y, por ende, codificados en su registro. 

En el encabezado hay varias pestañas que analizamos a continuación.    

### 2.3 Pagos (Pagamenti)

Las **soluzioni di pagamento** se reportan automáticamente desde la *Anagrafía del cliente > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **tipo pagamento** se le asocia un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en los plazos del documento y no en el total.

El botón específico de esta pestaña es el **cancella pagamenti**, utilizado para cancelar las líneas de pago seleccionadas.

### 2.4 Descuentos (Sconti)

Se proponen solo los descuentos predefinidos recuperados de la *Anagrafía del cliente > pestaña Descuentos* y no aquellos atribuidos a las condiciones de pago o a ciertos artículos. Pueden ser modificados/eliminados por el usuario.
  
Los descuentos propuestos en el encabezado del documento se reportan en cada nueva línea de artículo ingresada en el documento.

Si después de ingresar las líneas de artículo se ingresa un nuevo descuento en el encabezado, este no se replicará en las líneas de artículo ya ingresadas.

El botón específico de esta pestaña es el **cancella sconti**, utilizado para cancelar las líneas de descuento seleccionadas.


### 2.5 Agentes (Agenti)

Indica el código del agente y su comisión para cada línea de artículo. Se proponen el código y el porcentaje definidos en la *Anagrafía del cliente > pestaña Agentes*.

Si la comisión no está vinculada al cliente en su registro, sin embargo, debe ingresarse el agente pero con comisión NULL, porque si fuera con comisión 0, significaría que el agente está vinculado al cliente pero no percibe comisión.

En caso de generación de DDT desde el pedido, este dato se reportará obviamente igual que en el pedido del cliente.

La misma sección se volverá a proponer para cada línea de artículo en su pestaña Agentes.

El botón específico de esta máscara es el **cancella agenti**, que permite cancelar los agentes seleccionados.

### 2.6 Destino (Destinazione)

Aquí se propone la información ingresada en la *Anagrafía del cliente > pestaña Entregas*, solo si existen datos predeterminados. El combo box propone todos los destinatarios, destinos y transportistas ingresados en la anagrafía del cliente.

Las direcciones de envío (destinatario/destino y transportista) pueden ser ingresadas de forma descriptiva sin haber sido previamente ingresadas entre los contactos. 

En caso de que en la anagrafía no se haya ingresado este dato predeterminado, entonces se proponen como destinatario y destino la dirección ingresada en los datos anagráficos. 

### 2.7 Transportistas (Vettori)

En la sección Transportistas se proponen los datos ingresados en la pestaña [Entrega](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) de la anagrafía del cliente. En particular, se propone el sujeto a cargo del transporte, ya sea remitente, destinatario o transportista. Según la selección, la sección inferior cambiará; si el transporte es a cargo del Remitente, será posible ingresar la matrícula del vehículo, la fecha y la hora de inicio del transporte, y se propondrá la dirección de la empresa; si es a cargo del Destinatario, será posible ingresar la matrícula del vehículo, la fecha y hora de inicio del transporte, con la propuesta del destino; si es a cargo del Transportista, los campos disponibles serán la Anagrafía contable del Transportista, matrícula, fecha y hora de transporte.

### 2.8 Datos adicionales (Extra Data)

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.9 Cotitulares (Cointestatari)

Esta pestaña está activa solo si en la anagrafía del cliente, en la pestaña [información fiscal](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), se ha incluido el indicador para la gestión de cotitulares. La gestión de cotitulares permite que más personas sean titulares conjuntos del pedido. Los cotitulares deben ser ingresados en las direcciones alternativas de la anagrafía, con una dirección que sea de [tipo](https://docs/configurations/tables/general-settings/address-types), precisamente, cotitular. De este modo, se propondrán en esta pestaña, donde es necesario ingresar manualmente los porcentajes de distribución del gasto.

## **3.a Artículos agrupados**

Esta pestaña está activa y visible solo para los [Tipos de pedido](/docs/configurations/tables/sales/sales-order-types) que tienen activado el indicador de *Gestión de matrices Extra Data* y la correspondiente *Configuración*. Esta pestaña permite crear las variantes de artículos para las diversas combinaciones de atributos válidas, que se transferirán a la siguiente pestaña *Artículos*.      
Para todos los campos no explicados en esta página, puede referirse a la documentación de la pestaña *Artículos*.       
Al ingresar un [artículo gestionado por matriz](/docs/erp-home/registers/items/create-new-item) en la cuadrícula de artículos, en la pestaña *Matriz* se visualizará la matriz asociada a la anagrafía del artículo. En las celdas de la matriz será posible ingresar las cantidades ordenadas para cada combinación; solo se podrán completar las celdas que tengan una combinación válida en la anagrafía.       
Una vez ingresadas las cantidades para cada combinación, es necesario hacer clic en el botón de la barra de herramientas *Confirmar valores de matriz* para generar tantas variantes como combinaciones sean posibles. Cada variante poblará una línea de la siguiente pestaña Artículos, con la cantidad correspondiente.

## **3.b Artículos**

En esta pestaña se ingresan todos los artículos con los respectivos datos.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para ingresar un **Nuevo artículo** en la cuadrícula, basta con posicionarse en la línea para completar los diversos datos o utilizar el botón **Nuevo** presente en la barra de herramientas.

A continuación, se analizan los campos *obligatorios* presentes en la cuadrícula principal:
- **riga**: este campo contiene el número de línea y se llenará automáticamente y progresivamente al ingresar los datos en la línea.

- **tipo riga**: ofrece la posibilidad de seleccionar, desde el combo box, artículos con características diferentes:
>- *articolo codificato*: son los artículos codificados en la anagrafía y pueden contabilizarse en contabilidad analítica y registrarse en el almacén.
>- *Artículo no codificado (Articolo non-codificato)*: son artículos descriptivos que pueden contabilizarse en contabilidad analítica pero no pueden ser movidos en el almacén.
>- *articolo spese*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de documentos; si el artículo gasto es codificado y de interés fiscal, será movido en el almacén, si es no codificado o no de interés fiscal no serán movidos en el almacén.
>- *articolo note*: son notas descriptivas que aparecen en la impresión del documento; no afectan la contabilidad y el almacén.
>- *articolo omaggio*: el artículo regalo se gestiona como un artículo codificado o no codificado a efectos fiscales y de almacén, pero siendo un regalo se contabiliza por separado en los resúmenes del documento y en base al indicador de Recupero IVA, se calculará el importe del IVA del regalo a cargo del sujeto o no.

:::note[NOTA]
Si se comienza directamente con la inserción del artículo, su clase, código y tipo de línea - Artículo codificado se ingresan automáticamente.
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
En ausencia de la lista de precios, el dato propuesto es el **precio de venta** recuperado de la *Anagrafía del artículo > pestaña [Costos](/docs/erp-home/registers/items/create-new-item)* o se recuperará según las configuraciones de los parámetros del documento. En ausencia de este dato, se reportará el precio 0.
:::

- **imponibile**: este campo contiene el Precio unitario multiplicado por la cantidad, neto de descuentos.

- **sconti articolo**: contiene los descuentos válidos para el artículo, provenientes del encabezado, de la lista de precios o de la inserción manual.

- **sconti finali articolo**: contiene los descuentos finales artículo imputados en los resúmenes de los documentos, que tienen la característica de ser distribuidos en todos los artículos.   

import ItemVat from './../../../import/fields/item-vat.md'

<ItemVat />

#### Campos no obligatorios

- **Código de barras/Artículo cliente y Descripción artículo cliente**: estos datos se recuperarán de la información presente en la *Anagrafía de artículos*; para gestionar los códigos de barras es necesario activar su gestión en los [Parámetros de pedido cliente](/docs/configurations/parameters/sales/sales-orders-parameters). Esta columna permite la propuesta del artículo buscándolo por su código de barras. Al ser el código de barras único, una vez digitado el código de barras ingresado en la anagrafía del artículo, se propondrá el artículo.   

- **fatturato vendite**: se propone el dato ingresado en la *Anagrafía de artículos > pestaña Generalidades*; si no se recupera debe ser ingresado eligiendo una opción entre las propuestas por el combo respectivo, de lo contrario la falta de este dato podría causar errores en la contabilización de la factura que se generará a partir del pedido, si en *Anagrafía del cliente > Datos contables > pestaña Administrativa* no se ha establecido un valor en el campo *Ingreso de contrapartida predeterminado*.

- **Cumplido forzado (Evaso forzato)**: si está activo, este indicador indica que la línea de artículo ha sido cumplida forzadamente: porque el cliente ya no quiere ese artículo, o la cantidad producida y enviada es inferior a la cantidad ordenada pero no se producirá el saldo, por lo tanto se procederá a cumplir forzadamente la cantidad. 

:::note[NOTA]
Si se gestiona la producción, cuando el indicador se activa, se muestra un mensaje que avisa al usuario: “El cumplimiento forzado de la línea implica la eliminación automática de eventuales pedidos planificados relacionados con trabajos en estado programado y el cumplimiento de los trabajos en estado programado y no examinados". En cuanto a los documentos generados a partir de trabajos en estado lanzado o ejecutivo, los trabajos y documentos no se modificarán.     
:::

- **Fecha de mercancía lista y Fecha de entrega**: estas fechas indican la fecha en la que el material estará listo (por lo tanto cuando la producción esté terminada) y la fecha en la que se prevé entregar el material; la Fecha de Mercancía Lista debe ser menor o igual a la Fecha de entrega.

En la sección Artículos están presentes los siguientes botones, en la barra de herramientas: 

> **distinta base**: permite abrir la lista de materiales del artículo seleccionado para visualizar sus detalles; (para más información sobre este tema se remite al artículo sobre el Árbol de la lista de materiales y gestión de estructuras).  
> **Explode primer nivel de lista (Esplodi primo livello distinta)**: permite agregar en el pedido cliente los materiales (materias primas y semiacabados) presentes en la lista de materiales del artículo; de este modo se reportarán en el pedido los componentes de primer nivel del producto terminado. Esta opción, por ejemplo, es muy utilizada para productos en Kit (compuestos por varias partes).  
> **aggiornamento listini**: permite actualizar el precio del artículo en una lista de precios existente (guardar el documento para habilitar estos botones), o crear una nueva lista de precios con el artículo y el precio respectivo seleccionado.       
> **Dividir cantidad en múltiples entregas (Suddividi quantità in più consegne)**: permite dividir la cantidad de una línea de artículo en múltiples líneas según las fechas de entrega. Al seleccionar la línea y hacer clic en el botón, se abrirá el formulario **Entregas diferentes**, dentro del cual se reportará la *Fecha de mercancía lista*, la *Fecha de entrega* y la *Cantidad* de la línea. En la siguiente línea, se deberá indicar la *Fecha de mercancía lista* (que debería ser la misma), la *Fecha de entrega* que será diferente y la *Cantidad* que se enviará en esa fecha, luego será necesario modificar la fecha en la primera línea actualizándola a la cantidad restante de modo que la suma de las cantidades de las dos líneas dé como resultado la cantidad inicial de la línea antes de la división. Confirmar la operación con el botón *OK*.  
> **confezionamento**: permite crear un UDC a partir de la línea seleccionada. La línea debe ser un artículo codificado y guardado en el documento. El usuario debe tener los derechos dentro de los [Parámetros de carga/descarga](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) para la carga del pallet. Además, el artículo debe ser gestionado a UDC y, según las configuraciones del Tipo UDC establecidas en la anagrafía del artículo, en la pestaña [Embalaje (Confezionamento)](/docs/erp-home/registers/items/create-new-item), se creará el UDC respetando los criterios.      

Analicemos ahora las pestañas presentes bajo la cuadrícula de artículos. 

### 3.b.1 Descuentos/Listas (Sconti/Listini)

Esta pestaña tiene como primer campo la eventual **Lista de precios** válida para el cliente y vinculada al artículo, de lo contrario es un campo que se puede completar manualmente para tomar el precio del artículo de una lista específica. Junto a los datos de la lista de precios asignada está el campo **tipo scaglione**: indica el escalón de descuento a utilizar, que se recupera de la anagrafía del cliente o de la lista de precios misma.
El indicador **prezzo manuale** permite modificar el precio y los descuentos manualmente, y mantenerlos en los documentos que se crean a partir del documento donde se ha hecho la modificación.

En la cuadrícula se proponen todos los descuentos asociados al artículo, cada uno con su propia base de cálculo y asignación. Los descuentos pueden ser recuperados: de la anagrafía del cliente, de la solución de pago asignada al documento, de la lista de precios de la asociación lista-cliente. Todos los datos propuestos son modificables.

Desde esta cuadrícula es posible utilizar el botón **Eliminar descuentos (Cancell sconti)** de la barra de herramientas. 

### 3.b.2 Datos del artículo (Dati articolo)

Dentro de esta pestaña se reportan/inserten más información sobre el artículo.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Almacén/descripción/Causa (Magazzino/descrizione/Causale)**: en estos campos se deberá indicar el almacén de desecho del material con la causa respectiva necesaria para los residuos de mercancía al momento de la emisión del DDT o de la factura; estos datos se establecen en la tabla de [Tipos de pedidos](/docs/configurations/tables/sales/sales-order-types).

- **progetto**: es el proyecto asociado al documento; este puede ser asignado, en el caso del pedido cliente, con la ayuda del procedimiento *Cumplimiento desde trabajo* o puede ser asignado con la ayuda del ayuda de campo.

- **rivalsa iva**: si está configurado, el IVA del regalo se considera para el total del documento.

- **offerta**: reporta la referencia de la oferta del cliente si el pedido proviene de una [Oferta](/docs/sales/offers/search-offers).

- **marca**: representa la marca del artículo, recuperada de su anagrafía o de la lista de precios del artículo;

- **note**: ofrece la posibilidad de ingresar notas para cada artículo que se desea que sean reportadas en todos los documentos.  

### 3.b.3 Agentes (Agenti)

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.b.4 Lotes y números de serie (Lotti e Serial number)

En las dos cuadrículas pueden ser ingresados los lotes y los números de serie que deben ser desechados del almacén y que están vinculados al artículo en la *Anagrafía de artículos> pestaña [Lotes y números de serie](/docs/erp-home/registers/items/create-new-item)* o se pueden ingresar manualmente.

Esta operación está condicionada por la presencia de los lotes y los números de serie en el almacén. 

Si el artículo no prevé la gestión de Lot/Números de serie, esta pestaña estará deshabilitada.  

#### Botones específicos

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.b.5 Analítica (Analitica)

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.b.6 Datos adicionales (Extra data)

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.b.7 Documentos adjuntos (Documenti allegati)

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.b.8 Matrículas (Matrici)

Esta pestaña se visualiza exclusivamente para los [Tipos de pedido](/docs/configurations/tables/sales/sales-order-types) que tienen activado el indicador de gestión de matrices Extra Data. 

### 3.b.9 Sección de valores (Sezione valori)

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

El campo **stato** en la parte superior de esta sección reporta la situación del artículo en el eventual ciclo de producción y se actualiza automáticamente según el estado del trabajo vinculado.
El artículo puede tener los siguientes estados:
- *inserito* cuando se inserta el artículo;
- *confermato* cuando el pedido es confirmado, con los respectivos indicadores y fecha en el encabezado; 
- *in produzione* cuando se genera el trabajo, a través del procedimiento de [Generación de trabajos de producción](/docs/planning/ms-master-scheduling/general-schedule) o automáticamente si el tipo de pedido lo prevé; 
- *prodotto* si el trabajo vinculado está en estado cumplido;
- *annullato* si el artículo es cumplido forzadamente. 

## **riepiloghi**

En las diferentes secciones de esta pestaña se presentan las informaciones principales del documento completo y algunos botones específicos.

### 4.1 Descuentos finales (Sconti finali)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Resumen de comisiones de agentes (Riepilogo provvigioni agenti)

En esta cuadrícula se resumen las comisiones totales acumuladas por el agente para este pedido, en caso de que haya un agente vinculado. Se indicará el agente y el valor de la comisión acumulada.

### 4.3 Gastos/Descuentos/Aumentos finales (Spese/Sconti/maggiorazioni finali)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 Resúmenes de IVA (Riepiloghi IVA)

Se presenta el resumen del IVA del documento, por cada código de IVA.

### 4.5 Resumen de plazos (Riepilogo scadenze)    

En esta cuadrícula se reportan los plazos calculados en base a las soluciones de tipos de pago ingresadas. 

### 4.6 Otros campos (Altri campi) 

**note finali**: es un campo descriptivo que puede ser completado por el usuario, incluso con la ayuda de *Ayuda de notas codificadas*. Pueden ingresarse notas adicionales para el cliente relacionadas, por ejemplo, con la entrega, que luego se reportarán en la impresión de la Confirmación de Pedido en la parte final de la impresión.

### 4.7 Totales documento (Totali documento)

En la sección derecha de esta pestaña se pueden consultar los resúmenes del documento:       

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **documenti collegati**

En esta pestaña es posible consultar los documentos adjuntos. 
Para adjuntar documentos se pueden realizar dos acciones:
- utilizando el botón de la barra de herramientas **Documentos**, se puede elegir si adjuntar un documento ya codificado en Fluentis o crear un nuevo documento para adjuntar.       
- utilizando directamente en la cuadrícula la tecla derecha y seleccionando *Adjuntar archivo*, se procede a crear un nuevo documento para adjuntar.