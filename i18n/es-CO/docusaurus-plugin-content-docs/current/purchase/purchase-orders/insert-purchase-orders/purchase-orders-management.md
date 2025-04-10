---
title: Nuevo pedido proveedor (Nuovo ordine fornitore)
sidebar_position: 2
---

El formulario se encuentra en el área **Compras > Pedidos proveedores** y contiene los detalles relacionados con los productos o servicios a comprar, incluidos cantidades, precios, términos de entrega, condiciones de pago y otras especificaciones contractuales.

Desde el formulario de búsqueda de pedidos es posible crear un nuevo documento mediante el botón **Nuevo** o abrir uno existente para visualizarlo y/o modificarlo.

## *Cómo crear un pedido proveedor (Come creare un ordine fornitore)*

<details>

<summary>Clic para ver los pasos fundamentales (Clicca per vedere i passaggi fondamentali)</summary>

1. **Introduce los datos obligatorios**: *tipo ordine* y *fornitore*. *anno*, *numero* y *data inserimento* se propondrán automáticamente.

2. **Introduce o modifica los datos opcionales** de la cabecera: como fechas de entrega, posibles *sconti*, la *destinazione*, etc.

3. **Introduce los Artículos**: mediante doble clic en el campo *codice articolo* se abre la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *unità di misura*, *quantità*, *prezzo*, se propondrán automáticamente, pero pueden ser modificados. Alternativamente, es posible seleccionar como *tipo riga* un *articolo non codificato* e ingresar manualmente los datos siguientes.

4. **Introduce posibles descuentos u otra información adicional** en las pestañas *sconti/listini* y *dati articolo*.

5. **riepiloghi** e introduce posibles gastos o descuentos finales.

6. Una vez revisado y confirmado el pedido, **introduce una *data conferma* y activa el indicador *stampato* en la cabecera** para hacer el pedido disponible para los procedimientos de cumplimiento.

</details>

## **1. Datos obligatorios (Dati obbligatori)**

Para crear el pedido, el usuario debe ingresar los campos obligatorios:

- **tipo ordine**: predefinido en *Configuración > Tablas > Compras > Tipos de pedidos proveedores (Configurazione > Tabelle > Acquisti > Tipi ordini fornitori)*. Este campo determina el rango de numeración del documento que se está ingresando y propone automáticamente el número de pedido proveedor según la fecha de ingreso y el último número ingresado. Además, si en el *tipo ordine* está activado el indicador [Confirmación automática del pedido (Conferma ordine automatica)](/docs/configurations/tables/purchase/purchase-orders-type), se propone la fecha de confirmación del pedido igual a la fecha de ingreso del pedido;  
- **anno**: se inserta automáticamente el año en curso, pero puede ser modificado manualmente siempre respetando la regla de progresión entre fecha y número;  
- **numero**: se propone automáticamente según el tipo, pero puede ser modificado manualmente siempre respetando la regla de progresión entre fecha y número;  
- **data inserimento**: se propone automáticamente la fecha actual, pero puede ser modificada manualmente siempre respetando la regla de progresión entre fecha y número;  
- **fornitore**: puede ser ingresado utilizando la [ayuda de campo (help di campo)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) o [manualmente (manualmente)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).

## **testata** {#header}

Continúa introduciendo los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) o con la [ayuda de campo (help di campo)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).

:::note Recuerda (Ricorda)
Si el documento se *crea automáticamente*, por ejemplo, desde el filtro de búsqueda de [**ordini clienti**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders), desde el procedimiento de [**creazione automatica ordini**](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) o del procedimiento de [**creazione ordine fornitore da offerta fornitore**](/docs/purchase/offer-request/procedures/order-creation), estos datos se toman del *documento de origen* del cual se generó.
:::

### 2.1 Datos del proveedor (Dati fornitore)

Al ingresar el **fornitore**, se proponen automáticamente todos los datos específicos de la pestaña **testata**, según los datos configurados previamente en la [anagrafía del proveedor (anagrafica fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las secciones:

- **divisa**: sección que contiene los datos de [Divisa (Divisa)](/docs/configurations/tables/general-settings/currencies), [Cambio (Cambio)](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de divisa (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).  
- **nazione**: sección que contiene los datos de [*nazione*](/docs/guide/common/glossary/glossary-intro#country), [Idioma (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zona (Zona)](/docs/guide/common/glossary/glossary-intro#zone).  
- **spedizione**: sección que contiene los datos de [*spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Puerto (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios (Listino)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) predeterminada y su [intervalo de validez (intervallo di validità)](/docs/guide/common/glossary/glossary-intro#validity-date).
- **pagamenti**: sección que contiene los datos de [*pagamenti*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *sconti*, *destinazione* y *vettore*.

Todos estos campos pueden ser eliminados o modificados manualmente por el usuario.

### 2.2 Datos opcionales de la cabecera (Dati facoltativi testata)

- **data richiesta consegna** y **data consegna**: si se configuran antes de ingresar los artículos dentro del pedido, se trasladarán también a las líneas de artículos individuales. Alternativamente, simplemente se deberá presionar el botón *Reemplazar fecha prevista de entrega en las líneas* en la barra de ribbon para actualizar las fechas en las líneas de artículos.  
- **data conferma ordine**: para los *tipi ordine* que tienen activado el indicador [Confirmación automática del pedido (Conferma ordine automatica)](/docs/configurations/tables/purchase/purchase-orders-type). Se inserta automáticamente la fecha actual al momento de la creación del pedido. Para poder llevar a cabo el cumplimiento de un pedido proveedor, es necesario ingresar una *data conferma*.  
- **decorrenza**: es la fecha de inicio para el cálculo de los vencimientos de pago.  
- **Anotaciones del proveedor (Annotazioni fornitore)**: este campo se toma de la [anagrafía del proveedor (anagrafica fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), pero también puede ser ingresado manualmente.  
- **nostro/vostro riferimento**: en estos campos generalmente se indica una referencia interna y una referencia del proveedor para el documento. Si está presente, se toma de la anagrafía del proveedor, de lo contrario puede ser ingresado manualmente.   
En caso de que el pedido se complete con el procedimiento *evasione da progetto*, en los campos *Anotaciones del proveedor (Annotazioni fornitore)* y *nostro/vostro riferimento* se propone la información presente en los campos homónimos de la orden de compra. Esta transferencia es válida solo en el caso de un pedido proveedor creado a partir de un solo documento de origen.  
- **note iniziali ordine**: se pueden seleccionar las notas que se han ingresado anteriormente en la tabla que se encuentra en la ruta *Configuración > Utilidades > Gestión de notas codificadas (Configurazione > Utilità > Gestione note codificate)*. Para esto, el usuario debe hacer doble clic en el campo *Notas iniciales* para abrir la ayuda de notas codificadas y seleccionar los datos.  
- **progetto**: utilizando la ayuda de campo, se puede vincular el documento a un [proyecto (progetto)](/docs/project-management/projects/search-projects-intro). Esta asociación funciona solo a nivel de la cabecera del artículo. El proyecto se inserta automáticamente si el pedido proveedor surge de un documento que lo contiene (por ejemplo, desde los pedidos planificados de compra).  
- **commessa di produzione**: utilizando la ayuda de campo, se puede vincular el documento a una [orden de producción (commessa di produzione)](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders). Si el pedido se crea desde la liberación de los pedidos planificados de compra, la orden se propone automáticamente.  
- **nazione**, *lingua*, *zona* se toman de la anagrafía del proveedor, si están presentes, de lo contrario pueden ser ingresados manualmente.  
- **operatore**: permite ingresar el usuario que crea el documento. Si en los Parámetros de pedidos proveedores el indicador [Código de operador obligatorio (Codice operatore obbligatorio)](/docs/configurations/parameters/purchase/purchase-orders-parameters) está activo, será obligatorio insertar al empleado en este campo para poder guardar el pedido. Los [empleados (dipendenti)](/docs/project-management/registers/employee/new-employee) deben ser ingresados previamente en la tabla *Empleados*.  
- **spedizioni**, *porto* y *imballo* se toman de la anagrafía del proveedor, si están presentes, de lo contrario pueden ser ingresados manualmente.  
- **listino**: si en la anagrafía del proveedor existe un listado con el indicador *predefinito*, se propondrá en este campo junto con sus fechas de validez.  
- **Listas a actualizar (Listini di aggiornare)**: si este indicador está activo, la lista de compras correspondiente se actualiza automáticamente al momento de guardar con la información del artículo. Este indicador también puede ser modificado a nivel de la línea del artículo.  
- **punti vendita**: se encuentra bajo el menú de la opción *spedizioni* y se gestiona solo desde la verticalización relacionada con las cadenas de distribución. En caso de un pedido proveedor creado por el traslado de mercancías entre puntos de venta de una misma cadena, en este campo se visualizará el punto de venta de origen de la mercancía.  
- **stato evasione**: cuando el pedido se cumple a través de un DDT o una factura, su *Estado de cumplimiento* cambia automáticamente de *non evaso* a *parzialmente evaso* o *evaso*. El usuario puede forzar el cumplimiento de un pedido no cumplido totalmente y cuando esto sucede, también se guarda la fecha de cumplimiento en el campo *in data*.  

Los siguientes indicadores indican el *estado del pedido*:
- **stampato**: este indicador se activa automáticamente en el momento de lanzar la *Impresión* definitiva mediante el botón presente en la barra de ribbon. Alternativamente, puede activarse manualmente para poder cumplir el pedido en un DDT o en una factura;  
- **annullato**: cuando el usuario desea anular un documento en lugar de borrarlo, automáticamente el pedido se pone forzosamente como cumplido en todas sus líneas de artículo;  
- **storicizzato**: cuando el usuario lo historiar.

#### Botones específicos (Pulsanti specifici)

> **evasione da progetto**: llama al procedimiento para crear un pedido proveedor a partir de una orden de compra. Se activa con la introducción del proveedor y del tipo de pedido proveedor. Para poder cumplir con la orden de compra es necesario que esté impresa y confirmada.  
> **Reemplazar fecha previsto de entrega en las líneas (Sostituisci data prev. consegna nelle righe)**: permite, después de especificar la *data richiesta consegna* y/o la *data consegna* en la cabecera del pedido, reemplazar en masa tales fechas en las líneas de artículo ya ingresadas.

### 2.3 Pagos (Pagamenti)

Las [Soluciones de pago (Soluzioni di pagamento)](/docs/configurations/tables/general-settings/payment-terms) se traen automáticamente desde la *Anagrafía del proveedor - pestaña Pagos (Anagrafica fornitore - tab Pagamenti)* y pueden ser modificadas/eliminadas por el usuario.

Si al [Tipo de pago (Tipo pagamento)](/docs/configurations/tables/general-settings/payment-types) se le asocia un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en los vencimientos del documento y no en el total DDT.

Si el documento surge de una orden de compra o de una oferta del proveedor, el tipo de pago se toma del documento de origen.

#### Botón específico (Pulsante specifico)

**cancella pagamenti**: utilizado para eliminar las líneas de pago seleccionadas.

### 2.4 Descuentos (Sconti)

Se proponen solo los descuentos predeterminados tomados de la *Anagrafía del proveedor > pestaña Descuentos (Anagrafica fornitore > tab Sconti)*. Pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Destinación (Destinazione)

La información ingresada en la *Anagrafía del proveedor > pestaña Entregas (Anagrafica fornitore > tab Consegne)* se propone, solo si existen datos predeterminados. El cuadro combinado propone todos los destinatarios, las destinaciones y los transportistas ingresados en la anagrafía del proveedor.

Las direcciones de envío (destinatario/destinación y transportista) pueden ser ingresadas solo descriptivamente sin ser previamente ingresadas entre los contactos.

### 2.6 Transportista (Vettore)

En este campo es posible ingresar el *vettore* que realizará el envío del pedido. Si este ha sido ingresado en la *Anagrafía del proveedor > pestaña Entregas (Anagrafica fornitore > tab Consegne)*, será posible seleccionarlo desde el menú desplegable de la segunda columna. Alternativamente, basta con hacer doble clic en la tercera columna (*vettore*) para seleccionar uno de los contactos de la empresa.

Opcionalmente, se pueden agregar detalles del *targa* del transportista y la *Fecha/Hora de transporte (Data/Ora trasporto)*.

### 2.7 Datos Extra (Extra Data)

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.8 Procedimiento de cabecera - Cumplimiento de proyecto (Procedure testata - Evasione da progetto)

El procedimiento de recuperación de artículos del proyecto permite cumplir también parcialmente la orden de compra. Se proponen todas las órdenes no cumplidas, no cumplidas forzadamente y cumplidas parcialmente. Para que una orden de compra pueda ser cumplida, debe estar *stampata* y tener una *data conferma*.

Antes de proceder con el cumplimiento, será necesario ingresar el *Tipo de pedido (Tipo di ordine)* que se desea crear y el *fornitore* en la cabecera del documento. Posteriormente, al presionar el botón **evasione da progetto**, se abrirá el formulario donde es posible filtrar las órdenes relacionadas con el proveedor del documento.

En el área de filtrado, es posible elegir si visualizar los datos en una Cuadrícula (Griglia), una Estructura jerárquica (Struttura gerarchica) o ambas.

> - La **struttura gerarchica** permite tener una división más clara de los diversos pedidos y de los artículos contenidos en cada uno de ellos, facilitando también la selección masiva de artículos dentro de una orden.  
> - La **Cuadrícula (Griglia)** permite una mayor personalización del formulario mediante la adición de campos desde el *object navigator*. En este caso, la selección masiva debe realizarse mediante el uso de las teclas del teclado y haciendo clic en el botón *Activar/Desactivar solo líneas seleccionadas (Attiva/Disattiva solo righe selezionate)* en la barra de ribbon.

Una vez configurados todos los *filtri* deseados, al hacer clic en el botón de *ricerca* se visualizarán en la parte inferior todas las órdenes impresas, confirmadas y no cumplidas o cumplidas parcialmente.

:::important NOTA
El procedimiento recupera todos los datos presentes en la orden y, como consecuencia, se aplicarán las condiciones de compra presentes en la orden, incluso si estas han cambiado actualmente.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

- Seleccionar todos o algunos de los artículos propuestos: para hacerlo, simplemente seleccione el indicador presente al inicio de la línea del artículo. La Cantidad a cumplir se establecerá automáticamente igual a la Cantidad residual.
- Seleccionar algunos artículos para una cantidad parcial. En este caso, será necesario modificar la Cantidad a cumplir.

Para completar el procedimiento, será necesario hacer clic en el botón de Cumplimiento, que tomará todos los datos presentes en la orden y los llevará al pedido.

#### Botones específicos (Pulsanti specifici)

> **ricerca**: permite buscar las órdenes de compra;  
> **esecuzione**: permite transferir los artículos seleccionados;  
> **Seleccionar/Deseleccionar todos (Seleziona/Deseleziona tutti)**: permite seleccionar/deseleccionar todos los artículos de la lista;  
> **Activar/Desactivar solo líneas seleccionadas (Attiva/Disattiva solo righe selezionate)**: útil especialmente para el cumplimiento mediante cuadrícula; permite activar/desactivar los indicadores de todas las líneas seleccionadas.  

## **articoli** {#items}

En esta pestaña se ingresan todos los artículos con sus respectivos datos.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para ingresar un nuevo artículo en la cuadrícula, simplemente colóquese en la línea para completar los diversos datos o utilice el botón *nuovo articolo* presente en la barra de ribbon.

### 3.1 Datos obligatorios (Dati obbligatori)

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **tipo riga**: ofrece la posibilidad de seleccionar, desde el cuadro combinado, artículos con características diferentes:  
> - *articolo codificato*: son los artículos codificados en la anagrafía y pueden ser contabilizados en contabilidad analítica y registrados en el almacén. <br />  
> - *Artículo no codificado (Articolo non-codificato)*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica pero no pueden ser movidos a almacén. <br />  
> - *articolo spese*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gastos está codificado y es de interés fiscal, será movido al almacén, si es no codificado o no de interés fiscal, no será movido a almacén. <br />  
> - *articolo note*: son notas descriptivas incluidas en la impresión del documento; no impactan en la contabilidad y en el almacén.  

:::note Nota
Si se comienza directamente con la inserción del artículo, su clase, código y tipo de línea (*articolo codificato*) se ingresan automáticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

En ausencia del listado, el dato propuesto puede ser tomado del *costo ultimo* de la anagrafía del artículo, si en los [Parámetros de pedidos proveedores (Parametri ordini fornitori)](/docs/configurations/parameters/purchase/purchase-orders-parameters) el indicador *Costo a cero en ausencia de listines (Costo a zero in assenza di listini)* no está activo.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **importo**: se calcula automáticamente en neto de descuentos.  
- **totale sconti**: indica el importe total de los descuentos presentes en la pestaña *sconti/listini* para cada línea de artículo.    

### 3.2 Datos opcionales de los artículos (Dati facoltativi articoli)

- **Código/Descripción del artículo proveedor (Codice/Descrizione articolo fornitore)**: en esta sección se puede agregar el código y la descripción que el proveedor utiliza para identificar el artículo; este dato se propone automáticamente si en la anagrafía del artículo (pestaña [Proveedores preferenciales (Fornitori preferenziali)](/docs/erp-home/registers/items/create-new-item)) se ha asociado un artículo proveedor.

- **tipo fatturato acquisti**: se propone el dato ingresado en la pestaña [Generalidades (Generalità)](/docs/erp-home/registers/items/create-new-item) de la anagrafía de artículos. Si este no está presente, no se propone ningún dato y al momento de contabilizar la factura, se considerará el valor ingresado en el campo *Costo/Ingreso de contrapartida predeterminado (Costo/Ricavo di contropartita predefinito)* de la anagrafía de contacto.

- **data richiesta consegna** y **data consegna**: indican la fecha solicitada y prevista para la entrega. Pueden proponerse las fechas ingresadas en la pestaña de cabecera o pueden modificarse manualmente.

#### Botones específicos (Pulsanti specifici)

> **suddividi la quantità in più date consegna**: utilizado para dividir la línea del pedido en más líneas según la entrega solicitada. Este procedimiento abrirá un nuevo formulario donde se deberá ingresar la nueva *data richiesta consegna* y las cantidades previstas para cada fecha.  
> **confezionamento**: se habilita después de guardar el pedido y permite crear una UDC a partir de la línea seleccionada. La línea debe ser un artículo codificado y estar guardado en el documento. El usuario debe tener los derechos correspondientes dentro de los [Parámetros de carga/descarga (Parametri di carico/scarico)](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro/) para la carga del pallet. Además, el artículo debe ser gestionado a UDC, y según la configuracion del Tipo UDC ingresada en la anagrafía del artículo, la pestaña [Embalaje (Confezionamento)](/docs/erp-home/registers/items/create-new-item) se creará la UDC respetando los criterios.  
> **aggiornamento listini**: el botón *Actualizar listado actual (Aggiorna listino corrente)* permite actualizar los precios en el listado actual para cada línea de artículo seleccionada; el botón *crea nuovo listino con nuova validità*, en cambio, abrirá un pop-up donde se ingresarán las fechas de validez del nuevo listado, el cual contendrá solo las líneas seleccionadas y estará destinado al proveedor ingresado en el pedido.

:::note Recuerda  
Cuando se crea/se actualiza un listado mediante este procedimiento, en el listado solo se incluyen los descuentos ingresados manualmente en el pedido.
:::

### 3.3 Descuentos/Listas (Sconti/Listini)

- **listino**: se propone el listado del cual se ha tomado el precio del artículo, con la fecha de inicio/finalización de validez y con las condiciones particulares (por ejemplo, **Tipo escalón de descuento (Tipo scaglione di sconto)**) asignadas al artículo en el listado.

- **prezzo manuale**: se activa automáticamente cuando el precio del artículo ha sido ingresado o modificado manualmente.

- **Listas a actualizar (Listini da aggiornare)**: si este indicador está activo, el precio del artículo se actualiza automáticamente en el listado de compras correspondiente al momento de guardar.

- **sconti**: se proponen todos los descuentos asociados al artículo, cada uno con su propia base de cálculo y asignación.        

#### Botón específico (Pulsante specifico)

**cancella sconti**: permite eliminar el descuento seleccionado de la cuadrícula correspondiente.

### 3.4 Datos del artículo {#items-data}

Dentro de esta pestaña se presentan/se ingresan información adicional relacionada con el artículo.

- **variante**: en este campo es posible seleccionar una variante del artículo entre las que previamente han sido codificadas en la pestaña [Variantes (Varianti)](/docs/erp-home/registers/items/create-new-item) de la anagrafía del artículo. Si en el listado se han ingresado precios y/o descuentos diferentes para cada variante, estos se actualizarán al seleccionar una variante diferente del artículo.

- **progetto**: representa el proyecto a asociar al documento. Si en la cabecera del documento se ha ingresado un proyecto, este se replicará en todas las líneas de artículo; de lo contrario, puede seleccionarse mediante la ayuda correspondiente de proyectos.

- **note**: son las notas relacionadas con la línea del artículo y pueden ser ingresadas también a través de la ayuda de notas codificadas. Se incluirán en todos los documentos generados.

- **marca**: representa la marca del artículo, tomada de su anagrafía o del listado del artículo.

- **articoli commessa di produzione**: si el pedido proveedor está vinculado a una orden de producción (mediante la liberación de un pedido planificado de compra y la creación de un pedido proveedor desde una solicitud de compra), en este campo se presenta el artículo padre contenido en la orden.

- **richiesta di offerta**: si el pedido ha sido creado a partir de una solicitud de oferta, mediante el procedimiento [Creación de Pedido proveedor desde Oferta proveedor (Creazione Ordine fornitore da Offerta fornitore)](/docs/purchase/offer-request/procedures/order-creation), en este campo se verá la solicitud de referencia.

- **Almacén y causa (Magazzino e causale)**: se proponen el almacén y la causa de referencia que aparecerán automáticamente al momento de la carga de los artículos en el almacén. Los datos se toman de los [Tipos de pedido (Tipi ordine)](/docs/configurations/tables/purchase/purchase-orders-type), pero pueden ser modificados manualmente para cada línea de artículo.

- **commesse di produzione**: si el pedido proveedor es creado desde un plan de producción, se indica la orden de producción de referencia (ver *Creación automática de pedidos*).

- **Precio de unidad de medida alternativa (Prezzo unità di misura alternativa)**: si está activo, indica que el precio ingresado en la línea del artículo se refiere a la unidad de medida alternativa y no a la principal. Este indicador, junto con los campos *unità di misura alternativa* y *quantità alternativa*, solo es visible si en los [Parámetros de pedidos proveedores (Parametri ordini fornitori)](/docs/configurations/parameters/purchase/purchase-orders-parameters/) se ha activado el indicador *gestione doppia unità misura*.

- **Unidad de medida/Cantidad alternativa (Unità di misura/Quantità alternativa)**: si en la [anagrafía del artículo (anagrafica dell'articolo)](/docs/erp-home/registers/items/create-new-item) se ha codificado una unidad de medida alternativa con el indicador *predefinito* y en los Parámetros de pedidos proveedores se ha activado el indicador *proposta automatica u.m. alternativa*, estos valores se propondrán automáticamente al ingresar el artículo.

### 3.5 Analítica (Analitica)

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Datos Extra (Extra data)

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documentos adjuntos (Documenti allegati)

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Sección de valores (Sezione valori)

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **riepiloghi** {#summaries}

En las diferentes secciones de esta pestaña se presentan las principales informaciones del documento completo y algunos botones específicos.

### 4.1 Descuentos finales (Sconti finali)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos (Spese)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Resúmenes IVA (Riepiloghi IVA)

Se propone el resumen IVA del documento, para cada código IVA.

### 4.4 Resúmenes vencimientos (Riepiloghi scadenze)

En esta cuadrícula se reportan los vencimientos calculados en base a las soluciones de los tipos de pago ingresados.

### 4.5 Otros campos (Altri campi)

**note finali**: es un campo descriptivo que puede ser completado por el usuario también con la ayuda de las *Ayudas de notas codificadas (Help note codificate)*.

### 4.6 Totales del documento (Totali documento)

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />