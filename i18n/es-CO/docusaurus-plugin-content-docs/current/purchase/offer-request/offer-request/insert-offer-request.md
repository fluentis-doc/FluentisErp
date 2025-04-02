---
title: nuova richiesta di offerta
sidebar_position: 3
---

El formulario se abre a través de la ruta **Compras > Solicitud de Oferta > Nueva solicitud de oferta** o desde el filtro de búsqueda Solicitudes de Oferta, mediante el botón Nuevo.

## *Cómo crear una solicitud de oferta* (Come creare una richiesta di offerta)

<details>

<summary>Clic aquí para ver los pasos fundamentales</summary>

1. **Ingresa los datos obligatorios**: *Tipo de solicitud de oferta* y *Proveedor*. *Año*, *Número* y *Fecha* se propondrán automáticamente. 

2. **Ingresa o modifica los datos opcionales** de la cabecera: como fechas de entrega, eventuales *descuentos*, la *destinación*, etc.

3. **Ingresa los Artículos**: mediante doble clic en el campo *Código de artículo*, se abre la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *unidad de medida*, *cantidad*, *precio*, se proponen automáticamente, pero pueden ser modificados. 
   Alternativamente, es posible seleccionar como *Tipo de línea* un *Artículo no codificado* e ingresar manualmente los datos siguientes.

4. **Ingresa eventuales descuentos u otra información adicional** en las pestañas *Descuentos* y *Datos del artículo*.

5. **Revisa la sección de Resúmenes** e ingresa eventuales descuentos finales.

6. Una vez revisada y confirmada la oferta, **ingresa una *Fecha de confirmación* en la cabecera** de modo que el documento esté disponible para la conversión a pedido.

</details>

## **1. Sección superior** (Sezione superiore) {#upper-section}

Los campos obligatorios para el ingreso de una solicitud de compra son los siguientes:

- **Tipo**: es un campo obligatorio. Dependiendo del [Tipo RDO](/docs/configurations/tables/purchase/purchase-offer-type) elegido, se activarán algunas funcionalidades, como por ejemplo la *Gestión de activos*.
- **Fecha/Año**: por defecto, se propone la fecha actual, pero puede ser modificada manualmente.
- **Número**: propuesto automáticamente en base al Tipo RDO elegido.
- **Proveedor**: contiene la información del contacto al que se le solicita la oferta.
- **Versión**: contiene la versión de la oferta; es posible crear una nueva versión con el botón de la barra de ribbon **Nueva versión**.

:::note Recuerda
Si el documento es *creado automáticamente* desde una RDA, estos datos se tomarán del *documento de origen* del cual fue generado. 
:::

## **2. Cabecera** (Testata) {#header}

### 2.1 Datos del proveedor (Dati fornitore)

Al ingresar el **Proveedor**, automáticamente se proponen todos los datos específicos de la pestaña **Cabecera**, de acuerdo con los datos configurados anteriormente en la [anagrafía del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las secciones:    
>- **Moneda**: sección que contiene los datos de [Moneda](/docs/configurations/tables/general-settings/currencies), [Tipo de cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de moneda](/docs/guide/common/glossary/glossary-intro#currency-date).    
>- **Envío**: sección que contiene los datos de [*Envíos*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Flete](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predeterminada y su [rango de validez](/docs/guide/common/glossary/glossary-intro#validity-date).   
>- **País**: sección que contiene los datos de [*País*](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).    
>- **Pagos**: sección que contiene los datos de [*Pagos*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Descuentos*, *Destinación* y *Transportista*.    

Todos estos campos pueden ser eliminados o modificados manualmente por el usuario.

### 2.2 Datos opcionales de la cabecera (Dati facoltativi testata)

- **Anotaciones**: este campo se toma de la anagrafía del proveedor o eventualmente de la RDA, pero también puede ser ingresado manualmente.
- **Nuestro/Su referencia**: en estos campos, generalmente se indica una referencia interna y una referencia del proveedor para el documento. Si está presente, se toma de la anagrafía del proveedor; de lo contrario, puede ser ingresado manualmente.
- **Notas iniciales/finales**: se pueden seleccionar las notas que se han.Insertado anteriormente en la tabla que se encuentra en la ruta *Configuración > Utilidades > Gestión de notas codificadas*. Para esto, el usuario debe hacer doble clic en el campo *Notas iniciales/finales* para abrir la ayuda de notas codificadas y seleccionar los datos.
- **Proyecto**: usando la ayuda de campo se puede vincular el documento a un proyecto. Esta asociación funciona solo a nivel de la cabecera del artículo. El proyecto se inserta automáticamente si la RDO fue generada desde una RDA que lo contiene.
- **Fecha de confirmación de la oferta**: permite insertar la fecha en la que fue confirmada la oferta, pero no es un dato obligatorio; en el procedimiento de [Creación de pedido de proveedor desde Solicitud de oferta de proveedor](/docs/purchase/offer-request/procedures/order-creation), es posible visualizar y convertir también las RDO no confirmadas, activando el indicador correspondiente en el área de filtro.
- **Fecha estimada de entrega**: si se establece antes de ingresar los artículos dentro de la RDO, se reflejará también en cada una de las líneas de artículo. De lo contrario, basta con presionar el botón *Reemplazar la fecha estimada de entrega en las líneas* en la barra de ribbon para actualizar las fechas en las líneas de artículo.
- **Fecha de cierre**: en el momento de convertir la RDO en pedido de proveedor, se valoriza automáticamente con la fecha actual si se ha habilitado el indicador correspondiente para cerrar las ofertas convertidas.
- **Validez de la oferta**: permite establecer una fecha de finalización de validez para la solicitud de oferta.

#### Botones específicos

> **Reemplazar fecha estimada de entrega en las líneas**: después de especificar la fecha estimada de entrega en la cabecera, es posible reemplazarla masivamente en las líneas de artículo ya ingresadas.

### 2.3 Pagos (Pagamenti)

Las [Soluciones de pago](/docs/configurations/tables/general-settings/payment-terms) se proponen automáticamente desde la *Anagrafía del proveedor > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.   
Si al [Tipo de pago](/docs/configurations/tables/general-settings/payment-types) se le asocia un descuento financiero, el monto del descuento se considera solo a efectos contables, es decir, en los plazos del documento y no en el total DDT.

#### Botones específicos

> **Eliminar pagos**: utilizado para eliminar las líneas de pago seleccionadas.

### 2.4 Descuentos (Sconti)

Se proponen solo los descuentos predeterminados tomados de la *Anagrafía del proveedor > pestaña Descuentos* y no aquellos atribuidos a las condiciones de pago o a ciertos artículos. Pueden ser modificados/eliminados por el usuario.   

Los descuentos propuestos en la cabecera del documento se reflejan en cada nueva línea de artículo ingresada en el documento. Si después de haber ingresado las líneas de artículo se inserta un nuevo descuento en la cabecera, este no se replicará en las líneas de artículo ya ingresadas.

#### Botones específicos

> **Eliminar descuentos predeterminados**: utilizado para eliminar los descuentos seleccionados.

### 2.5 Datos Adicionales (Extra Data)

Aquí se propone la información ingresada en la *Anagrafía del sujeto > pestaña Datos adicionales*, solo si existen datos predeterminados.

## **3. Artículos** (Articoli) {#items}

Para insertar un *Nuevo artículo* en la cuadrícula, simplemente colócate en la fila para completar los diversos datos o utiliza el botón **Nuevo artículo** presente en la barra de ribbon.

### 3.1 Datos obligatorios (Dati obbligatori)

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo de línea** ofrece la posibilidad de seleccionar, desde el combo-box, artículos con características diversas:
> - *Artículo codificado*: son los artículos codificados en la anagrafía y pueden ser contabilizados en contabilidad analítica y registrados en el almacén.
> - *Artículo no codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica, pero no pueden ser movidos a almacén.
> - *Artículo de gastos*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gastos está codificado y es de interés fiscal, se moverá a almacén; si no está codificado o no es de interés fiscal, no se moverán a almacén.
> - *Artículo de notas*: son notas descriptivas incluidas en la impresión del documento; no afectan a la contabilidad y al almacén.
> - *Artículo de regalo*: se gestiona como un artículo codificado o no codificado a efectos fiscales y de almacén, pero dado que es un regalo, se contabiliza por separado en los resúmenes del documento y, dependiendo del indicador de IVA, se calcula el monto del IVA del regalo a cargo del sujeto, o no.

:::note Nota
Si se comienza directamente con la inserción del artículo, su clase, código y tipo de línea (*Artículo codificado*) se ingresan automáticamente.
:::

- **Clase/Código/Descripción del artículo**: se pueden ingresar manualmente o con la ayuda del campo, que propondrá todos los datos relacionados ingresados en la Anagrafía del artículo. Después de ingresar el artículo, su Descripción se tomará automáticamente de la anagrafía. Si el artículo tiene Variantes, será posible seleccionar la variante deseada desde la pestaña Datos del artículo.

- **Unidad de medida**: se propone la unidad de medida principal del artículo, pero en caso de que en la anagrafía del artículo estén codificadas unidades de medida alternativas, el usuario tiene la posibilidad de elegir otra.

- **Cantidad**: representa la cantidad de la U.M. principal y por defecto tiene el valor 1; puede ser modificada manualmente o puede ser tomada del documento considerado para el cumplimiento.

- **Precio**: el precio se propone desde la lista de precios ingresada en la anagrafía del contacto; la lista de referencia para el artículo en sí se visualiza en la pestaña *Datos del artículo*; el mismo documento podría contener artículos con precios tomados de listas de precios diferentes, si en la anagrafía del sujeto se asocian múltiples listas en cascada. A través del doble clic en el campo Listas, el usuario tiene la posibilidad de seleccionar una lista diferente a la predeterminada, desde la cual se tomará el precio del artículo ingresado.

- **IVA**: la información prioritaria es la ingresada en el campo IVA de la Anagrafía del contacto. Si este no está presente, se propone el valor presente en la Anagrafía del artículo, pero el usuario tiene la posibilidad de ingresar otro dato.

- **Importe unitario**: se calcula automáticamente después de deducir los descuentos.

### 3.2 Datos no obligatorios (Dati non obbligatori)

- **Facturación de compras**: se propone el dato ingresado en la pestaña *Generalidades* de la anagrafía de artículos.

- **Fecha de cierre**: indica la fecha de cierre de la oferta; se completa automáticamente si en el momento de la [creación del pedido de proveedor desde la oferta del proveedor](/docs/purchase/offer-request/procedures/order-creation), se ha seleccionado el indicador de cierre de las ofertas.

- **Fecha estimada de entrega**: indica la fecha prevista para la entrega de la mercancía. Se propone automáticamente si la *Fecha estimada de entrega* ha sido valorada en la pestaña de cabecera.

- **Periodo de entrega estimada**: campo descriptivo libre en el cual se puede indicar el periodo de tiempo previsto para la entrega de la mercancía.

### 3.3 Descuentos (Sconti) {#discount}

- **Tipo de tramo**: indica el tramo de descuento a utilizar, que se toma de la anagrafía del proveedor o de la lista de precios.

- **Precio manual**: se activa automáticamente cuando el precio del artículo ha sido ingresado o modificado manualmente.   

En la cuadrícula, se proponen todos los descuentos asociados al artículo, cada uno con su propia base de cálculo y asignación. Los descuentos pueden ser tomados de: la anagrafía del proveedor, la solución de pago asignada al documento, la lista de precios, la [definición de políticas de descuentos](/docs/purchase/price-control/definition). Todos los datos propuestos son modificables.

#### Botones específicos

> **Eliminar descuentos**: permite eliminar el descuento seleccionado de la cuadrícula correspondiente.

### 3.4 Datos del artículo (Dati articolo) {#items-data}

Dentro de esta pestaña se muestran/se ingresan más información relacionada con el artículo.

>- **Artículo**: muestra el artículo seleccionado en la cuadrícula superior.
>- **Variante**: en este campo se puede seleccionar una variante del artículo entre aquellas previamente codificadas en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) de la anagrafía del artículo. Si en la lista de precios se han ingresado precios y/o descuentos diferentes para cada variante, estos se actualizarán al seleccionar una variante diferente del artículo.  
>- **Nota**: son las notas relacionadas con la línea del artículo, también pueden ser ingresadas a través de la ayuda de notas codificadas. Se incluirán en todos los documentos generados por esto.
>- **Almacén y causa**: se proponen el almacén y la causa de referencia que aparecerán automáticamente al momento de cargar los artículos correspondientes en el almacén.

>- **Proyecto**: representa el proyecto a asociar al documento. Si en la cabecera del documento se ha ingresado un proyecto, se reflejará en todas las líneas de artículos; alternativamente, puede ser seleccionado a través de la ayuda correspondiente de proyectos.
>- **Lista de precios**: se propone la lista de la cual se ha tomado el precio del artículo, con su fecha de inicio/finalización de validez.

>- **Unidad de medida/Cantidad alternativa**: permite establecer una unidad de medida alternativa y la cantidad correspondiente para el artículo seleccionado en la cuadrícula.
>- **Precio de la unidad de medida alternativa**: si está activo, indica que el precio ingresado en la línea del artículo se refiere a la unidad de medida alternativa y no a la principal.

>- **Marca**: representa la marca del artículo, tomada de su anagrafía o de la lista de precios del artículo.
>- **Solicitud de compra**: si la oferta fue creada a partir de una RDA, se incluye la [Solicitud de compra](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request) de referencia.  

#### 3.4 Datos adicionales (Extra data) {#extra-data}

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

#### 3.5 Documentos adjuntos (Documenti allegati) {#attached-documents}

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## **4. Resúmenes** (Riepiloghi) {#summaries}

En las secciones de esta pestaña se presentan las informaciones principales de todo el documento.

### 4.1 Descuentos finales de artículos

Los descuentos finales aplicados a nivel de cada artículo se distribuyen (o "esparcen") en cada línea de artículo del documento. Esto significa que el importe del descuento se divide proporcionalmente entre todos los artículos presentes en el documento, y el descuento relativo será visible en la pestaña Artículos para cada línea individual.

- **Tipo/Descripción del descuento**: permite elegir los tipos de descuentos (predeterminados en [Tipos de descuentos](/docs/configurations/tables/general-settings/discount-types)), atribuyendo a la tipología la prioridad de aplicación del descuento y si el descuento se calcula sobre la base imponible o en cascada respecto a los descuentos previamente aplicados.

- **Prioridad**: representa la prioridad de aplicación del descuento; el orden que se aplica es de manera creciente.

- **Cascada/Imponible**: para definir si el cálculo del descuento utiliza como base imponible (precio * cantidad) - (descuentos ya calculados) o (precio * cantidad).

- **Valor**: valor numérico del descuento final a aplicar.

### 4.2 Totales del documento (Totali documento)

- **Importe bruto de artículos**: representa la suma de los valores de todos los artículos.

- **Anticipo**: representa el valor de cualquier anticipo recibido por el documento.

- **Importe de regalo**: representa el importe de los artículos de tipo regalo incluidos en la pestaña *Artículos*.

- **Total de descuentos aplicados**: representa el valor total de los descuentos aplicados a los artículos, excluyendo los descuentos finales.

- **Importe neto de artículos**: *Importe bruto de artículos* – *Total de descuentos aplicados*.

- **Descuentos finales de artículos**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos.

- **Importe neto de descuentos finales**: *Importe neto de artículos* - *Total de descuentos finales*.

- **Total de artículos de gastos**: representa el valor de los gastos incluidos en la pestaña anterior como artículos de *Tipo gastos*.

- **Gastos de cobro**: representa la suma de los gastos de cobro incluidos en la cuadrícula de *Gastos*.

- **Gastos de sello**: representa la suma de los gastos de sello incluidos en la cuadrícula de *Gastos*.

- **Total de gastos/descuentos/recargos**: representa el valor total de los gastos incluidos en la cuadrícula *Gastos*.

- **Base imponible**: *Importe neto de artículos* – *Descuentos finales* + *Total de artículos de gastos* + *Total de gastos/descuentos/recargos*.

- **IVA**: representa la suma de los valores contenidos en los resúmenes de IVA.

- **Total**: *Base imponible* + *IVA*.