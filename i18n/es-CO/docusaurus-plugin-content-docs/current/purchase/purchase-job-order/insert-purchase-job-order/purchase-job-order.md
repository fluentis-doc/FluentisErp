---
title: Nueva orden de compra
sidebar_position: 1
---

El formulario se abre a través de la ruta **Compras > Órdenes de compra > Nueva orden de compra** o desde el filtro de búsqueda de órdenes de compra, mediante el botón *Nuevo pedido de trabajo*.

## *Cómo crear una orden de compra*

<details>

<summary>Clic para ver los pasos fundamentales</summary>

1. **Ingresa los datos obligatorios**: *Tipo* y *proveedor* *año*, *número* y *Inserte la fecha* se propondrán automáticamente.  

2. **Ingresa o modifica los datos opcionales** de la cabecera: como *descuentos*, *destino*, etc.  

3. **Ingresa los artículos**: mediante doble clic en el campo *código de artículo* se abre la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *Unidad de medida*, *cantidad*, *precio*, se propondrán automáticamente, pero pueden ser modificados.  
En alternativa, es posible seleccionar como *Tipo de fila* un *Elemento no codificado* e ingresar manualmente los datos siguientes.

4. **Ingresa eventuales descuentos o otra información adicional** en la pestaña *datos*.  

5. **Revisa la sección de Resúmenes** e ingresa eventuales gastos o descuentos finales.  

6. Una vez revisada la orden, **ingresa una *fecha de confirmación* y activa el indicador *stampato* en la cabecera** para hacer el documento disponible para los procedimientos de cumplimiento.

</details>

## **1. Datos obligatorios**

Para crear una nueva orden de compra, el usuario debe ingresar los siguientes datos:

- **Proveedor**: puede ser ingresado usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).  
- **Tipo de orden de trabajo**: predeterminado en la tabla [Tipos de orden de compra](/docs/configurations/tables/purchase/purchase-job-order-types). Este campo determina el rango de numeración del documento que se está ingresando y propone automáticamente el *Número* según la fecha de ingreso y el último número ingresado.  
- **Año/fecha ingresada**: se propone automáticamente la fecha corriente, pero puede ser modificada manualmente.  
- **Número**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración](/docs/configurations/tables/fluentis-numerations). 
- **Número interno**: dato opcional; se propone igual al campo anterior, pero puede ser modificado manualmente ingresando un código alfanumérico diferente.

El formulario contiene una serie de pestañas.

## **Encabezado**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Al ingresar el **proveedor**, se proponen automáticamente todos los datos específicos de la pestaña **encabezado**, según los datos establecidos previamente en la [anagrafía del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las secciones:

- **Divisa**: sección que contiene los datos [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de moneda](/docs/guide/common/glossary/glossary-intro#currency-date).  
- **País**: sección que contiene los datos [*País*](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).  
- **Envío**: sección que contiene los datos [*Envíos*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Flete](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) predeterminado y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Pagos**: sección que contiene los datos [*Pagos*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Descuentos*, *Destino* y *Transportador*.    

Todos estos campos pueden ser eliminados o modificados manualmente por el usuario.

#### Campos opcionales

> **Envío**, *porto* y *imballo* son extraídos de la anagrafía del proveedor, si están presentes; de lo contrario, pueden ser ingresados manualmente.  
> **Lista de precios**: si en la anagrafía del proveedor hay una lista con el indicador *predeterminado*, esta será propuesta en este campo junto con sus fechas de validez.   

> **Fecha estimada de entrega.**: indica la fecha estimada para la entrega de la mercancía.      
> **Fecha de inicio/Fecha de finalización**: permite ingresar una fecha de inicio y una fecha de finalización para la orden.   

> **Notas del proveedor**: este campo se extrae de la [anagrafía del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), pero también se puede ingresar manualmente.   
> **Nuestra/Su referencia**: en estos campos, normalmente se indica una referencia interna y una referencia del proveedor para el documento. Si está presente, se extrae de la anagrafía del proveedor; de lo contrario, puede ser ingresada manualmente. Estos datos serán luego reportados en la orden de proveedor creada mediante [Cumplimiento desde proyecto].   
> **Nota inicial**: se pueden seleccionar las notas que han sido ingresadas previamente en la tabla que se encuentra en la ruta *Configuración > Utilidades > Gestión de notas codificadas*. Para esto, el usuario debe hacer doble clic en el campo *Nota inicial* para abrir la ayuda de notas codificadas y seleccionar los datos.   
> **Proyecto:** usando la ayuda de campo, se puede vincular el documento a un [proyecto](/docs/project-management/projects/search-projects-intro). Esta asociación funciona solo a nivel de la cabecera del artículo.   

> **Estado de ejecución**: cuando la orden es cumplida a través de un pedido de compra, su *Estado de cumplimiento* cambia automáticamente de *No ejecutado* a *Ejecutado parcialmente* o *Ejecutado*. El usuario puede forzar el cumplimiento de una orden no completamente cumplida y cuando esto sucede, también se guarda la **Fecha de ejecución** en el campo homónimo.   
> **Fecha de la conferencia**: permite ingresar la fecha en que la orden fue confirmada.     
> **Impreso**: este indicador se activa automáticamente en el momento del lanzamiento de la impresión definitiva mediante el botón situado en la barra de herramientas. Alternativamente, puede ser activado manualmente para poder realizar el cumplimiento.    

:::important Nota
Para poder realizar el cumplimiento de una orden de compra dentro de un Pedido de proveedor, es necesario que la orden tenga una *Fecha de confirmación* ingresada y que el indicador *Impreso* esté activo.
:::

### 2.1 Pagos

Las [Soluciones de pago](/docs/configurations/tables/general-settings/payment-terms) son extraídas automáticamente de la *Anagrafía del proveedor > pestaña Pagos (Anagrafica fornitore > tab Pagamenti)* y pueden ser modificadas/eliminadas por el usuario.

Si al [Tipo de pago](/docs/configurations/tables/general-settings/payment-types) está asociado un descuento financiero, el monto del descuento se considera solo a efectos contables, es decir, en los vencimientos del documento y no en el total del DDT.

#### Botón específico

> **Eliminar pago**: utilizado para eliminar las filas de pago seleccionadas.


### 2.2 Descuentos 

Se proponen solo los descuentos predefinidos extraídos de la *Anagrafía del proveedor > pestaña Descuentos*. Pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Destino 

Aquí se propone la información ingresada en la *Anagrafía del proveedor > pestaña Entregas*, solo si existen datos por defecto. El combo box propone todos los destinatarios, los destinos y los transportistas ingresados en la anagrafía del proveedor.

Las direcciones de envío (destinatario/destino y transportista) pueden ser ingresadas también solo descriptivamente sin haber sido previamente ingresadas entre los contactos. 

### 2.4 Transportista

En este campo se puede ingresar el *Transportista* que realizará el envío del pedido. Si este ha sido ingresado en la *Anagrafía del proveedor > pestaña Entregas*, será posible seleccionarlo del menú desplegable de la segunda columna; de lo contrario, basta con hacer doble clic en la tercera columna (*Transportista*) para seleccionar uno de los contactos de la empresa. 

Opcionalmente, se pueden agregar los detalles de la *Placa* del transportista y la *Fecha/Hora de transporte*. 

### 2.5 Datos adicionales

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Artículos**

Para ingresar un nuevo artículo en la cuadrícula, basta con colocarse en la fila para completar los diversos datos o utilizar el botón *nuovo articolo* que se encuentra en la barra de herramientas.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

### 3.1 Datos obligatorios

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo de fila** ofrece la posibilidad de seleccionar, desde el combo box, artículos con diferentes características:
> - *Artículo codificado*: son los artículos codificados en la anagrafía y pueden ser contabilizados en contabilidad analítica y registrados en almacén. <br />
> - *Artículo no codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica pero no pueden ser movidos a almacén. <br />
> - *Artículo de cargo*: son artículos codificados o no codificados y se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gasto es codificado y de interés fiscal, se moverá a almacén; si es no codificado o no de interés fiscal, no se moverá a almacén. <br />
> - *Artículo de nota*: son notas descriptivas reportadas en la impresión del documento; no afectan la contabilidad y el almacén.

:::note Nota
Si se comienza directamente con la inserción del código de artículo, su clase, la descripción y el tipo de línea (*Elemento codificado*) se ingresan automáticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

### 3.2 Datos no obligatorios

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Precio**: el precio se propone según la lista de precios ingresada en la anagrafía del contacto; la lista de precios de referencia para el artículo en sí se visualiza en la pestaña Datos. El mismo documento podría contener artículos con precios extraídos de listas diferentes si en la anagrafía del sujeto están asociadas varias listas de precios en cascada (ver [Anagrafía de contactos](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). A través de un doble clic en el campo *Lista de precios* (situado debajo de la etiqueta *Proyectos*), el usuario tiene la posibilidad de seleccionar una lista diferente de la predeterminada, de la cual se tomará el precio del artículo ingresado. En ausencia de lista de precios, el dato propuesto puede ser extraído del *costo último* de la anagrafía del artículo.   

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Tipo de volumen de compras**: se propone el dato ingresado en la pestaña [Generalidades](/docs/erp-home/registers/items/create-new-item) de la anagrafía de artículos. Si este no está presente, no se propone ningún dato y en el momento de contabilización de la factura, se considerará el valor ingresado en el campo *Costo/Ingreso de contrapartida predeterminado* de la anagrafía del contacto.

- **Ejecución forzada**: al activar el indicador, la línea del artículo se marcará como *Cumplida forzosamente (Evasa forzatamente)* y no estará disponible para más cumplimientos.   


### 3.3 Totales

- **Descuentos**: se proponen todos los descuentos asociados al artículo, cada uno con su propia base de cálculo y asignación.         

*Botón específico*

> **Eliminar descuentos**: permite eliminar el descuento seleccionado de la cuadrícula correspondiente. 

### 3.4 Datos

Dentro de esta pestaña se reportan/inserta información adicional relacionada con el artículo. 

- **Artículo**: reporta el artículo seleccionado en la cuadrícula superior.

- **Variante**: en este campo es posible seleccionar una variante del artículo entre las que han sido codificadas previamente en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) de la anagrafía del artículo. Si en la lista de precios se han ingresado precios y/o descuentos diferentes para cada variante, estos se actualizarán al seleccionar una variante diferente del artículo.   

- **Nota**: son las notas relacionadas con la línea del artículo, que también pueden ser ingresadas a través de la ayuda de notas codificadas. Se reportarán en todos los documentos generados a partir de esto.

- **Almacén y causa**: se proponen el almacén y la causa de referencia que también se reportarán en la orden de proveedor generada mediante *Cumplimiento de proyecto*. 

- **Proyecto**: representa el proyecto a asociar al documento. Si en la cabecera del documento se ha ingresado un proyecto, este se reportará en todas las líneas del artículo; alternativamente, puede ser seleccionado a través de la ayuda de proyectos correspondiente.

- **Lista de precios**: se propone la lista de precios de la cual se ha extraído el precio del artículo, con la fecha de inicio/final de validez y con las condiciones particulares (por ejemplo, **Tipo de soporte** de descuento) asignadas al artículo en la lista de precios.

- **Precio manual**: se activa automáticamente cuando el precio del artículo ha sido ingresado o modificado manualmente.

- **Fecha estmada de entrega.**: permite indicar la fecha en la que se espera la entrega del artículo.   

- **Marca**: representa la marca del artículo, extraída de su anagrafía o de la lista de precios del artículo.

### 3.5 Sección de valores

La sección en la parte inferior derecha presenta un resumen de los costos que contribuyen a la formación del precio final de cada artículo seleccionado en la cuadrícula de artículos. Los campos presentes son:

- **Precio**: el valor del campo Precio; 
- **Cantidad**: el valor del campo Cantidad o Cantidad alternativa, dependiendo del indicador Precio unidad de medida alternativa; 
- **Cantidad de línea**: Precio del artículo * Cantidad del artículo; 
- **Descuentos totales**: la suma de los descuentos del artículo, incluidos también los descuentos finales; 
- **Valor**: Importe bruto - Descuentos; 
- **IVA**: Imponible * tasa de IVA del artículo; 
- **Total**: Imponible + Impuesto.

## **Resúmenes**

En las diferentes secciones de esta pestaña se presentan las principales informaciones del documento completo y algunos botones específicos.

### 4.1 Descuentos finales

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Totales del documento

- **Nota final orden de trabajo**: es un campo descriptivo que puede ser completado por el usuario, incluso con la ayuda de la *Ayuda de notas codificadas*. 
- **Monto bruto de los artículos**: representa la suma de los valores de todos los artículos. 
- **A cuenta**: representa el valor del eventual anticipo recibido por el documento. 
- **Cantidad de regalo**: representa el importe de los artículos de tipo obsequio ingresados en la pestaña *artículos*. 
- **Descuentos totales aplicados**: representa el valor total de los descuentos aplicados a los artículos, excluyendo los descuentos finales. 
- **Monto neto de los artículos**: *Monto bruto de los artículos* – *Descuentos totales aplicados*. 
- **Descuentos en artículos finales**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos. 
- **Importe neto de descuentos finales**: *Monto neto de los artículos* - *Descuentos finales totales*. 
- **Total de cargos por artículos**: representa el valor de los gastos ingresados en la pestaña anterior como artículos de *Tipo de cargo*. 
- **Cargos por cobranza**: representa la suma de los gastos de cobro ingresados en la cuadrícula de *gastos*. 
- **Cargos por estampilla**: representa la suma de los gastos de timbre ingresados en la cuadrícula de *gastos*. 
- **Total de gastos/descuentos/recargos**: representa el valor total de los gastos ingresados en la cuadrícula *gastos*. 
- **Imponible**: *Monto neto de los artículos* – *Descuento final* + *Total de cargos por artículos* + *Total de gastos/descuentos/recargos*. 
- **Iva**: representa la suma de los valores contenidos en los resúmenes de IVA. 
- **Total**: *imponibile* + *iva*.