---
title: Nueva Recepción de Mercancías
sidebar_position: 3
---

El formulario se abre a través de la ruta **Compras > Recepción de Mercancías > Crear Recepción de Mercancías** o desde el filtro de búsqueda de la Recepción de Mercancías, mediante el botón *Nuevo*.

## *Cómo crear una Recepción de Mercancías*

<details>
 
<summary>Clicca per vedere i passaggi fondamentali</summary>

1. **Inserta los datos obligatorios**: *Tipo* y *Proveedor*. *Año*, *Número* y *Fecha Inserción* se propondrán automáticamente.  

2. **Inserta los Artículos**: mediante doble clic en el campo *Código artículo*, se abre la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la fila, como *unidad de medida*, *cantidad*, *precio*, se propondrán automáticamente, pero pueden modificarse.  
Como alternativa, es posible seleccionar como *Tipo fila* un *Artículo no codificado* e insertar manualmente los datos posteriores.

3. **Inserta posibles informaciones adicionales** en las pestañas *Lotes y Números de serie* y *Datos artículo*.

</details>

## **1. Datos obligatorios**

Para crear la Recepción de Mercancías, el usuario debe insertar los siguientes datos:

- **Proveedor**: puede insertarse usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).  
- **Tipo documento**: predefinido en la tabla [Tipos de Recepción de Mercancías](/docs/configurations/tables/purchase/goods-receipt-types). Este campo determina el rango de numeración del documento que se está insertando y propone automáticamente el *Número* en base a la fecha de inserción y al último número insertado.  
- **Número de recibo**: se propone automáticamente basándose en el tipo, pero puede modificarse manualmente respetando siempre la regla de progresión entre fecha y número.  
- **Fecha recepción**: se propone automáticamente la fecha actual, pero puede modificarse manualmente respetando siempre la regla de progresión entre fecha y número.  
- **Proyecto**: ubicado en la parte inferior de la cuadrícula de artículos; representa el proyecto que se asociará al documento y puede seleccionarse mediante la ayuda de proyectos.

## **2. Artículos**

- **Tipo fila** ofrece la posibilidad de seleccionar, desde la lista desplegable, artículos con diferentes características:  
> - *Artículo codificado*: son los artículos codificados en el registro y pueden contabilizarse en contabilidad analítica y registrarse en almacén. <br />
> - *Artículo de obsequio*: se gestiona como un artículo codificado o no codificado para fines fiscales y de almacén, pero al ser un obsequio se contabiliza por separado en los resúmenes del documento y, en base al flag Rivalsa iva, se calcula o no el importe del IVA del obsequio a cargo de la parte correspondiente.

:::note Nota
Si se comienza directamente con la inserción del artículo, su clase, el código y el tipo de fila (*Artículo codificado*) se insertan automáticamente.
:::

- **Código**: hace referencia al código de artículo (barcode) insertado en la *Ficha de artículo > pestaña Código barcode*.

- **Clase/Código/Descripción de artículo**: pueden insertarse manualmente o con la ayuda de campo, la cual propondrá todos los datos relativos insertados en la Ficha de artículo. Tras la inserción del artículo, su descripción se rellenará automáticamente a partir de la ficha. Si el artículo tiene Variantes, será posible seleccionar la variante deseada desde la pestaña Datos artículo.

- **Código/Variante de artículo de proveedor**: hace referencia al código que el proveedor utiliza para identificar el artículo y a la variante, si la hubiera; este dato se propone automáticamente si en la ficha del artículo, pestaña [Proveedores preferenciales](/docs/erp-home/registers/items/create-new-item/) se ha asociado un artículo de proveedor.

- **Unidad de medida**: se propone la unidad de medida principal del artículo, pero en caso de que en la ficha del artículo estén codificadas unidades de medida alternativas, el usuario tiene la posibilidad de elegir otra.

- **Cantidad del documento**: representa la cantidad de la U.M. principal; se introduce la cantidad referida a la orden de compra cubierta, no es un dato obligatorio.  

- **Cantidad recibida**: representa la cantidad efectivamente recibida.

- **Precio**: representa el *precio* presente en la orden de compra, si la línea de recepción ha cubierto una línea de orden de compra, o el *costo último* de la ficha de artículos.

- **Referencia de orden**: si la línea se ha creado cubriendo una línea de orden de compra, se muestra el número de orden cubierto.

- **Ubicación**: si la causal tiene una ubicación predeterminada, se propone dicha ubicación; de lo contrario, puede insertarse [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) si el almacén se gestiona con ubicaciones.

#### Botones específicos

> **Ejecución desde orden**: permite crear una Recepción de Mercancías (ricevimento merci) cubriendo las líneas de una orden de compra (ordine fornitore) con el procedimiento [Evasión de órdenes de proveedor](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).  
>
> **Gestión de embalajes**: permite abrir la gestión de embalajes retornables utilizados en el documento de compra. El botón se activa si el documento está guardado, pero no cargado.  
> Con un clic en este botón se abre el formulario correspondiente donde insertar la cantidad, seleccionar la línea y ejecutar la transferencia del embalaje seleccionado en las filas de artículo haciendo clic en el botón *Execute*. En este formulario se muestran los artículos que se han insertado con naturaleza *Embalaje* y que están presentes en la tabla de [Embalajes a retornar](/docs/configurations/tables/logistics/package-to-be-returned).

### 2.1 Lotes 

En las dos cuadrículas pueden insertarse los lotes y números de serie que deben cargarse en el almacén (magazzino).  
Si el artículo no prevé la gestión de [Lotes y Números de serie](/docs/erp-home/registers/items/create-new-item), esta pestaña estará deshabilitada.

#### Botón específico

> **Cancelar lote**: permite eliminar la fila de lote seleccionada

### 2.2 Datos de artículo

Dentro de esta pestaña se incluyen datos adicionales relativos al artículo.

- **Artículo**: muestra el artículo seleccionado en la cuadrícula superior.

- **Variante**: en este campo es posible seleccionar una variante del artículo de entre las previamente codificadas en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) de la ficha de artículo. Si en la lista de precios se insertaron precios y/o descuentos diferentes para cada variante, se actualizarán cuando se seleccione una variante diferente del artículo.

- **Almacén y Causal**: permite insertar el almacén y la causal de referencia a utilizar para la carga de los artículos correspondientes en almacén. Si la línea de artículo se ha tomado de una orden de compra, se propondrán el almacén y la causal insertados en la orden; de lo contrario, pueden insertarse manualmente para cada línea de artículo. Si los campos no están valorados, en el momento de la carga de la Recepción de Mercancías se utilizarán los insertados en los parámetros de pedidos de proveedores, pestaña [Carga](/docs/configurations/parameters/purchase/purchase-orders-parameters).

- **Proyecto**: representa el proyecto que se asociará al documento. Si en la cabecera del documento se ha insertado un proyecto, éste se verá reflejado en todas las líneas de artículo; alternativamente, puede seleccionarse mediante la ayuda de proyectos.

- **Unidad de medida/Cantidad alternativa**: si en la [ficha del artículo](/docs/erp-home/registers/items/create-new-item) se ha codificado una unidad de medida alternativa con el flag *Predeterminado* y en los Parámetros de pedidos de proveedor se ha activado el flag *Propuesta automática U.M. alternativa*, estos valores se propondrán automáticamente al momento de la inserción del artículo.

### 2.3 Analítica 

Puede contener información sobre los centros de costo/beneficio en los que se distribuyen los valores de los artículos.

Estos datos pueden insertarse manualmente o automáticamente (en caso de que los centros de costo/beneficio se hayan añadido previamente en la *ficha de contacto*, la *ficha de artículo* o en el *plan de cuentas*).

#### Botones específicos

import DeleteCostCenter from './../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 2.4 Datos extra

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />