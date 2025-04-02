---
title: nuovo ricevimento merci
sidebar_position: 3
---

El formulario se abre a través de la ruta **Compras > Recepción de mercancías > Crear recepción de mercancías** o desde el filtro de búsqueda de Recepción de mercancías, mediante el botón *Nuevo*.

## *Cómo crear una recepción de mercancías*

<details>
 
<summary>Haz clic para ver los pasos fundamentales</summary>
 
1. **Ingresa los datos obligatorios**: *Tipo* y *Proveedor*. *Año*, *Número* y *Fecha de ingreso* se propondrán automáticamente.  
 
2. **Ingresa los Artículos**: mediante doble clic en el campo *Código artículo* se abre la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *unidad de medida*, *cantidad*, *precio*, se propondrán automáticamente, pero pueden ser modificados.  
En alternativa, es posible seleccionar como *Tipo de línea* un *Artículo no codificado* e ingresar manualmente los datos siguientes.

3. **Ingresa cualquier información adicional** en las pestañas *Lotes y Número de serie* y *Datos del artículo*.  
 
</details>

## **1. Datos obligatorios**

Para crear la recepción de mercancías, el usuario debe ingresar los siguientes datos:

- **Proveedor**: puede ser ingresado utilizando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) o [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).  
- **Tipo de documento**: predefinido en la tabla [Tipos de recepción de mercancías](/docs/configurations/tables/purchase/goods-receipt-types). Este campo determina el rango de numeración del documento que se está ingresando y propone automáticamente el *Número* basado en la fecha de ingreso y en el último número ingresado.  
- **Número de recibo**: se propone automáticamente basado en el tipo, pero puede ser modificado manualmente siempre respetando la regla de progresión entre fecha y número.  
- **Fecha de recepción**: se propone automáticamente la fecha actual, pero puede ser modificada manualmente siempre respetando la regla de progresión entre fecha y número.  
- **Proyecto**: ubicado en la parte inferior de la cuadrícula de artículos; representa el proyecto a asociar al documento y puede ser seleccionado a través de la ayuda de proyectos correspondiente.

## **2. Artículos**

- **Tipo de línea** ofrece la posibilidad de seleccionar, desde la caja combinada, artículos con características diferentes:
> - *Artículo codificado*: son los artículos codificados en el registro y pueden ser contabilizados en contabilidad analítica y registrados en el almacén. <br /> 
> - *Artículo de regalo*: se gestiona como un artículo codificado o no codificado a efectos fiscales y de almacén, pero al ser un regalo se contabiliza por separado en los resúmenes del documento y, según el indicador de IVA, se calculará el monto del IVA del regalo a cargo del sujeto o no.

:::note Nota
Si se empieza directamente con la inserción del artículo, su clase, código y tipo de línea (*Artículo codificado*) se ingresan automáticamente.
:::

- **Código**: hace referencia al Código artículo de código de barras ingresado en la *Registro de artículos > pestaña Código de barras*. 

- **Clase/Código/Descripción del artículo**: se pueden ingresar manualmente o con la ayuda de la ayuda de campo, la cual propondrá todos los datos relacionados ingresados en el Registro de artículo. Después de ingresar el artículo, su Descripción se recuperará automáticamente del registro. Si el artículo tiene Variantes, será posible seleccionar la variante deseada en la pestaña Datos del artículo.

- **Código/Variante del artículo proveedor**: hace referencia al código que el proveedor utiliza para identificar el artículo y a la posible variante; este dato se propone automáticamente si en el registro del artículo, pestaña [Proveedores preferenciales](/docs/erp-home/registers/items/create-new-item/) se ha asociado un artículo proveedor. 

- **Unidad de medida**: se propone la unidad de medida principal del artículo, pero en caso de que en el registro del artículo se hayan codificado unidades de medida alternativas, el usuario tiene la posibilidad de elegir otra.

- **Cantidad del documento**: representa la cantidad de la U.M. principal; se ingresa la cantidad referida al pedido del proveedor cumplido, no es un dato obligatorio.   

- **Cantidad recibida**: representa la cantidad realmente recibida.  

- **Precio**: representa el *precio* presente en el pedido del proveedor, si la línea de recepción ha cumplido una línea de pedido del proveedor, o el *costo último* del registro de artículos.

- **Referencia del pedido**: si la línea se ha creado cumpliendo una línea de pedido del proveedor, se reporta el número del pedido cumplido.

- **Ubicación**: si la causa tiene una ubicación predeterminada, se propone dicha ubicación; de lo contrario, puede ser ingresada [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) si el almacén se gestiona por ubicaciones.

#### Botones específicos 

> **Cumplimiento desde pedido (Evasione da ordine)**: permite crear una recepción de mercancías cumpliendo las líneas de un pedido del proveedor con el procedimiento [Cumplimiento desde pedidos de proveedores](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).   
>
> **gestione imballi**: permite abrir la gestión de los embalajes a devolver usados en el documento de compra. El botón se activa si el documento está guardado, pero no cargado.   
> Al hacer clic en este botón se abre el formulario correspondiente donde ingresar la cantidad, seleccionar la línea y realizar la transferencia del embalaje seleccionado a las líneas de artículo al hacer clic en el botón *execute*. En este formulario se reportan los artículos que han sido ingresados con naturaleza *Embalaje* y que están presentes en la tabla de [Embalajes a devolver](/docs/configurations/tables/logistics/package-to-be-returned).

### 2.1 Lotes

En las dos cuadrículas se pueden ingresar los lotes y números de serie que deben ser cargados en el almacén. 
Si el artículo no requiere la gestión de [Lotes y Números de serie](/docs/erp-home/registers/items/create-new-item), esta pestaña estará deshabilitada.  

#### Botón específico 

> **cancella lotto**: permite eliminar la línea de lote seleccionada.

### 2.2 Datos del artículo

Dentro de esta pestaña se reportan/inserta información adicional relacionada con el artículo.

- **Artículo**: muestra el artículo seleccionado en la cuadrícula superior.   

- **Variante**: en este campo es posible seleccionar una variante del artículo entre las que fueron previamente codificadas en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) del registro del artículo. Si en la lista de precios se han ingresado precios y/o descuentos diferentes para cada variante, estos se actualizarán al seleccionar una variante diferente del artículo.   

- **Almacén y causa**: permite ingresar el almacén y la causa de referencia a utilizar para la carga de los artículos relacionados en el almacén. Si la línea de artículo ha sido recuperada de un pedido de compra, se propondrán el almacén y la causa ingresados en el pedido; de lo contrario, pueden ser ingresados manualmente para cada línea de artículo. Si los campos no están valorados, al momento de la carga de la recepción de mercancías se utilizarán los que se ingresaron en los parámetros de pedidos de proveedores, pestaña [Carga](/docs/configurations/parameters/purchase/purchase-orders-parameters#carico). 

- **Proyecto**: representa el proyecto a asociar al documento. Si en la cabecera del documento se ha ingresado un proyecto, este se reportará en todas las líneas de artículo; alternativamente, puede ser seleccionado a través de la ayuda de proyectos correspondiente.

- **Unidad de medida/Cantidad alternativa**: si en el [registro del artículo](/docs/erp-home/registers/items/create-new-item) se ha codificado una unidad de medida alternativa con el indicador *Predeterminado* y en los Parámetros de pedidos del proveedor se ha activado el indicador *Propuesta automática de U.M. alternativa*, estos valores se propondrán automáticamente al momento de la inserción del artículo.

### 2.3 Analítica

Puede contener información sobre los centros de costo/beneficios sobre los cuales se distribuyen los valores de los artículos.   

Estos datos pueden ser ingresados manualmente o automáticamente (en caso de que los centros de costo/beneficios hayan sido ingresados previamente en el *registro de contactos*, *registro de artículos* o en el *plan de cuentas*).   

#### Botones específicos

importar DeleteCostCenter from './../../import/buttons/delete-cc.md'
importar DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 2.4 Datos extra

importar DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />