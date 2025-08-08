---
title: Nuevo rientro (Nuovo rientro)
sidebar_position: 1
---

A través de este formulario es posible crear manualmente un nuevo rientro de trabajo por encargo o modificar los ya existentes.

El formulario se abre a través de la ruta **Trabajo por encargo > Rientros > Nuevo Rientro** o mediante el botón **Nuevo** que se encuentra en el formulario [Buscar Rientros](/docs/subcontractor/subcontractor-returns/insert-returns/search-returns).

## **1. Datos obligatorios**

La aplicación requiere que se ingrese el **Proveedor (Terzista)** titular del pedido, utilizando la ayuda correspondiente, el **Tipo**, el **Número** y la **Fecha de rientro** efectiva (que generalmente corresponde a la fecha actual).

**Controlado**: el indicador se activa manualmente por el usuario;  
**Valorizado y Cargado**: se activan automáticamente en el momento en que se procede a realizar en el pedido la valorización y el registro en almacén del documento.

> **Rientros previstos**: el botón se activa después de guardar los datos obligatorios y abre el formulario *Cumplimiento de pedido*, dentro del cual el usuario visualiza todos los pedidos de trabajo por encargo que aún tienen líneas parcialmente o completamente no cumplidas y desde los cuales es posible generar rientros;  
> **Registro de rientros**:

## **2. Cabecera**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o, según los datos ingresados en el registro del proveedor, la aplicación completa los campos *automáticamente*.

Al ingresar el **Proveedor**, se *proponen* automáticamente todos los datos específicos de la pestaña **Cabecera**, según los datos establecidos anteriormente en la [anagrafica del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las *secciones*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de cambio](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nación**: [Nación](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Envío**: [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [rango de validez](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.1 Pagos

Las **Soluciones de pago** se reportan automáticamente desde la *Anagrafica del proveedor > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

#### Botón específico  
> **Eliminar pagos**: utilizado para eliminar las líneas de pago seleccionadas.

### 2.2 Descuentos

Se proponen solo los descuentos predefinidos tomados de la *Anagrafica del proveedor > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Procedimientos de cabecera:

### *Cumplimiento de pedido*

En esta ventana, que se abre utilizando el botón *Rientros Previsti* ubicado en la barra de ribbon, es posible filtrar los pedidos de trabajo por encargo.

En la cuadrícula inferior aparece una línea para cada pedido de trabajo por encargo que aún no ha sido cumplido o que ha sido cumplido parcialmente.  
El usuario, con un doble clic en la línea del pedido, tiene la posibilidad de desglosar las líneas que aún deben ser devueltas por el proveedor, puede seleccionarlas o ingresar la cantidad en cada una de ellas y presionar el botón *Adquisición* para transferir las cantidades de los artículos seleccionados dentro de la cuadrícula de la pestaña *Artículos* del rientro de trabajo por encargo.

#### Botones específicos  
> **Buscar pedidos**: permite aplicar los filtros de búsqueda a toda la base de datos de Pedidos de Trabajo por Encargo ingresados y que aún no han sido cumplidos o solo han sido cumplidos parcialmente;  
> **Adquisición**: llama al procedimiento que transfiere a la cuadrícula de la pestaña Artículos Devueltos del rientro de trabajo por encargo los artículos seleccionados en la ventana inferior;  
> **Cumplimiento forzado de pedido**: llama al procedimiento que permite marcar como cumplida forzosamente la línea del pedido de trabajo por encargo que el usuario está transfiriendo;  
> **Seleccionar todo**: permite seleccionar todas las líneas presentes en la sección derecha de la ventana donde aparecen los artículos a transferir;  

### *Registro de rientros*

Vea detalles sobre el tema en la [Registro de rientros](/docs/subcontractor/subcontractor-returns/procedure/returns-record).

## **3. Artículos**

El formulario consta de una cuadrícula, dentro de la cual el usuario puede ingresar manualmente los artículos devueltos.

### 3.1 Datos

En esta pestaña se visualizan las informaciones relacionadas con la línea seleccionada en la cuadrícula de artículos, entre las cuales:

**Orden prod.**: se trata del pedido de producción cuya fase externa ha generado la línea de pedido de trabajo por encargo que ha sido cumplida con la línea de rientro seleccionada;

**Proyecto**: en este campo se visualiza el proyecto relacionado con la línea del rientro. Generalmente se llama al proyecto ingresado en la línea del pedido de trabajo por encargo desde el cual se generó la línea de rientro;

**Pesos**: se reportan el Peso neto y el Peso bruto totales de las líneas de artículo. Se reportan los pesos del registro del artículo multiplicados por la cantidad de línea.

### 3.2 Lotes/Números de serie

En esta pestaña se da la posibilidad de establecer, para la línea seleccionada en la cuadrícula, los lotes o los números de serie que se cargarán en almacén con la cantidad de artículo devuelta, en caso de que se trate de varios lotes diferentes devueltos con la misma línea de rientro. Dependiendo de si el artículo se gestiona por lotes o por números de serie, se activará la cuadrícula correspondiente de esta pestaña.

:::note Nota
La suma de las cantidades de los varios lotes/números de serie deberá corresponder exactamente a la cantidad devuelta de la línea de artículo.
:::

## **4. Materiales**

En esta pestaña se visualizan los materiales que el proveedor debería haber utilizado para producir lo que se ha ingresado en la pestaña *Artículos*. La propuesta de materiales se define en los Parámetros de Trabajo por Encargo, en el campo **Datos materiales propuestos**.

La sección *Artículo* contiene la información de la línea seleccionada en la pestaña *Artículos*.

### 4.1 Materiales

Para cada artículo visualizado arriba se pueden ingresar los materiales y sus detalles, o estos datos serán propuestos.

### Detalle de material

En esta pestaña se ingresan los Materiales que no han sido utilizados por el proveedor, ya sea por exceso o porque han sido desechados.

#### Campos específicos

**Almacén**: en esta columna se visualiza el código del almacén de Devoluciones, tomado de los parámetros de trabajo por encargo, visualizado automáticamente solo si se ingresa la cantidad devuelta en la línea del material, editable por el usuario;

**Causa**: en esta columna se visualiza el código de la causa para la carga de las Devoluciones, tomado de los parámetros de trabajo por encargo, visualizado automáticamente solo si se ingresa la cantidad devuelta en la línea del material, editable por el usuario. Si los materiales no utilizados por el usuario han sido desechados, entonces la causa no debe tener contrapartida. Si, en cambio, los materiales han sido devueltos, entonces la causa debe tener una contrapartida de carga para indicar dónde colocar los materiales devueltos.

**Carga de Lote**
En la cuadrícula, el usuario puede indicar cuáles son los lotes de materiales que han sido utilizados por el proveedor. Las columnas visualizadas y las reglas de uso de la cuadrícula son las mismas que las de la cuadrícula de lotes de la pestaña Lotes\SN que se encuentra en la pestaña *Artículos*.

## **5. Resúmenes**

En los Resúmenes se presentan las informaciones principales de todo el documento.

### 5.1 Descuentos finales de artículos

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 5.2 Gastos

Se proponen los gastos ingresados en el registro del contacto, en la pestaña *Gastos/Descuentos*. En esta cuadrícula, los gastos deben ser ingresados en positivo, los descuentos en negativo.      

Estos elementos se aplican a la totalidad del documento y no se distribuyen entre las líneas de los artículos. Pueden incluir costos adicionales, descuentos globales o recargos aplicados a todo el documento. Si están establecidos en el registro del artículo, se proponen automáticamente al momento de la creación del documento.

- **Tipo/Descripción**: permite elegir los tipos de gasto (predefinidos en la tabla [Tipos de gastos](/docs/configurations/tables/general-settings/expenses-types)), atribuyendo a la tipología el porcentaje de gasto a aplicar.  
- **Importe del gasto**: indica el valor del gasto expresado en la divisa del documento.    
- **IVA**: indica la tasa de IVA a aplicar a los gastos ingresados.   
- **Porcentaje/Valor**: indica si calcular los gastos con un porcentaje o con un valor monetario predefinido. Al seleccionar *valor*, el importe del gasto debe ser ingresado bajo la misma denominación.      
- **Porcentaje**: valor numérico del porcentaje de gasto.  

:::note Nota
Si el *Tipo de gasto* ingresado tiene el indicador [repartido](/docs/configurations/tables/general-settings/expenses-types) activo, durante la carga del rientro en almacén, el gasto será repartido entre todos los artículos en función de los importes totales de cada línea de artículo. El resultado de la repartición del gasto es visible en la [registro de almacén](/docs/logistics/warehouse/stock-records/record).    
1. Si los artículos tienen un precio: el gasto total será repartido proporcionalmente sobre los importes netos de cada artículo; el resultado se añadirá al precio inicial del artículo en el campo *Importe total* del registro. Si para algunas líneas el importe es 0, se considerará como 1 para permitir una repartición del gasto sobre todos los artículos.   
2. Si todos los artículos tienen un precio igual a 0: el gasto se distribuirá equitativamente entre todas las líneas de artículo y, a partir de esta distribución, se calculará el *importe movimiento/importe gestionado* en el registro, teniendo en cuenta las cantidades de cada artículo.   
:::

### 5.3 Totales del documento

**Importe bruto de artículos**: representa la suma de los valores de todos los artículos;  
**Anticipo**: representa el valor del eventual anticipo recibido por el documento;  
**Importe de obsequio**: representa el importe de los artículos de tipo obsequio ingresados en la pestaña *Artículos*;  
**Total de descuentos aplicados**: representa el valor total de los descuentos aplicados sobre los artículos, pero sin los descuentos finales;  
**Importe neto de artículos**: *Importe bruto de artículos* – *Total de descuentos aplicados*;  
**Total de descuentos finales**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales**: *Importe neto de artículos* - *Total de descuentos finales*;  
**Gastos de cobro**: representa la suma de los gastos de cobro ingresados en la cuadrícula de *Gastos*;  
**Gastos de timbre**: representa la suma de los gastos de timbre ingresados en la cuadrícula de *Gastos*;   
**Imponible**: *Importe neto de artículos* – *Descuentos finales* + *Total de gastos no documentados* + *Total de gastos documentados*;  
**Impuesto**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**Total**: *Imponible* + *IVA*.