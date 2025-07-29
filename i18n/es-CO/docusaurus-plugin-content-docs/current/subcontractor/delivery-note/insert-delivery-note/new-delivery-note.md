---
title: Nuevo DDT de Entrega (Nuovo DDT di Consegna)
sidebar_position: 1
---

El formulario se abre a través de la ruta **Cuenta de Trabajo > Pedidos > Nuevo Pedido de Cuenta de Trabajo** o mediante el botón **Nuevo** que se encuentra en el formulario [Búsqueda de pedidos de C/L](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## **1. Datos obligatorios**

La aplicación requiere ingresar el **Proveedor (Terzista)** titular del DDT, utilizando la ayuda de cuentas correspondiente en la cabecera del DDT. Automáticamente se propondrán: **Año**, **Número**, **Fecha** actuales y el **Tipo de DDT de Entrega** (propuesto igual al ingresado en los *Parámetros de Cuenta de Trabajo*), que pueden ser modificados por el usuario.

## **2. Cabecera**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), o, según los datos ingresados en el registro del proveedor, la aplicación completará los campos *automáticamente*.

### 2.1 Datos del proveedor

Al ingresar el **Proveedor**, se *propondrán* automáticamente todos los datos específicos de la pestaña **Cabecera**, de acuerdo con los datos establecidos anteriormente en la [ficha del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las *secciones*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de divisa](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nación**: [Nación](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Envío**: [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [rango de validez](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Datos opcionales de la cabecera

**Estado del DDT**: con estos 2 indicadores se identifica el estado del DDT, que puede ser impreso (después de que se haya lanzado la impresión física del informe del DDT de entrega) y descargado (después de que se haya realizado la descarga del DDT del almacén). Si el DDT no ha sido impreso, no es posible descargarlo;  

**Nuestra/Su referencia**: cuando se completa el procedimiento [Cumplimiento de pedido](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), también se propone la información presente en el campo homónimo del pedido;  

**Proyecto**: utilizando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se puede vincular el documento a un proyecto.  

#### Botones específicos

> [Entregas previstas](/docs/subcontractor/delivery-note/insert-delivery-note/new-delivery-note): llama al procedimiento para crear un DDT a partir de un pedido. Se activa con la inserción del proveedor y del tipo de DDT. El pedido a cumplir debe tener activado el indicador *Impreso* y la *Fecha de confirmación del pedido* debe estar valorada;  
> **Descarga automática**: utilizado para descargar automáticamente el almacén con los artículos seleccionados. Este campo será editable solo una vez activado el campo *Impreso*.

### 2.3 Pagos

Las **Soluciones de pago** se reportan automáticamente desde la *Ficha del proveedor > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **Tipo de pago** se le asocia un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en las fechas de vencimiento del documento y no en el total del DDT.

Si el documento proviene de un pedido, los tipos de pago pueden ser tomados del primer documento o de la ficha del proveedor. 

#### Botón específico

> **Insertar/Eliminar pagos**: utilizados para insertar/eliminar las líneas de pago seleccionadas.

### 2.4 Descuentos

Se proponen solo los descuentos predefinidos tomados de la *Ficha del proveedor > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Agentes

Indica el código del agente y su comisión para cada línea de artículo. Se propone el código y el porcentaje definidos en la *Ficha del proveedor > pestaña Agentes*.

Si la comisión no está vinculada al proveedor en su ficha, el agente debe ser ingresado, pero con comisión NULL, porque si fuera con comisión 0, significaría que el agente está vinculado al proveedor pero no recibe comisión.

La misma sección se repetirá para cada línea de artículo en la pestaña correspondiente *Agentes*.

#### Botón específico

**Eliminar agentes**: permite eliminar los agentes seleccionados.

## **Procedimientos de cabecera:**

### *Cumplimiento DDT*

En la cabecera del DDT de entrega, al presionar el botón **Entregas Previstas**, se abrirá el formulario donde es posible filtrar los pedidos relacionados con el cliente del documento.

A través de este procedimiento es posible crear un DDT de entrega a partir del cumplimiento del pedido correspondiente. Por lo tanto, es posible ingresar los artículos dentro del DDT, cumpliendo total o parcialmente un pedido completo o una línea.

Para poder utilizar este procedimiento, hay ciertas condiciones iniciales que deben cumplirse:

 -  el proveedor de los pedidos debe ser el mismo que el del DDT;
 -  el pedido que se desea cumplir debe tener activado el indicador *Impreso*;
 -  los tipos de documento deben ser compatibles.

#### Procedimiento

Los filtros para proveedor y divisa se reportarán automáticamente según el proveedor seleccionado en el DDT.

Una vez configurados todos los *Filtros* deseados, al hacer clic en el botón de *Búsqueda*, se visualizará en la cuadrícula una línea por cada pedido impreso y no cumplido o cumplido parcialmente.

:::note AVISO
El procedimiento toma todos los datos presentes en el pedido y, como consecuencia, se aplicarán las condiciones presentes en el pedido, incluso si estas han cambiado actualmente.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

 1. seleccionar el *pedido completo*. Para hacerlo, basta con seleccionar el indicador presente al inicio de la línea del pedido.
 2. seleccionar solo *algunos* de los *artículos* propuestos. Para hacerlo, basta con seleccionar el indicador presente al inicio de la línea del artículo.
 3. seleccionar solo *algunos artículos* pero solo para una *cantidad determinada*. En este caso, deberá modificar la cantidad a cumplir.

Para completar el procedimiento, luego se debe hacer clic en el botón **Transferencia**, que tomará todos los datos presentes en el pedido y los llevará al DDT.

#### Botones específicos

> **Búsqueda** permite aplicar los filtros de búsqueda a toda la base de datos de pedidos ingresados y no aún cumplidos o solo parcialmente cumplidos.  
> **Transferencia** permite transferir a la cuadrícula de la pestaña Entregas del DDT de cuenta de trabajo los artículos seleccionados en la ventana inferior.  
> **Expandir** permite expandir todo el árbol de pedidos en la cuadrícula inferior, para visualizar los artículos contenidos en ellos.  
> **Comprimir** permite comprimir la visualización de las líneas de artículos y mostrar solo las líneas de pedidos.  
> **Seleccionar todos** permite seleccionar todos los artículos de la lista.  

## **3. Entrega**

En esta pestaña se ingresan los materiales que deben ser entregados al proveedor. Estos pueden ser ingresados automáticamente a través del procedimiento de *Cumplimiento de Pedido* o manualmente por el usuario.


#### Botones específicos
> **Insertar material**: llama al procedimiento para insertar un nuevo material en la cuadrícula de artículos de la pestaña 'Entregas'.  
> **Eliminar material**: llama al procedimiento para eliminar un material de la cuadrícula de artículos de la pestaña 'Entregas'. 

#### Campos específicos

**Pedido C/L número y año**: se visualizan el número y el año del pedido de cuenta de trabajo del cual se ha tomado la línea de artículo. Si la línea se ha insertado manualmente, esta columna estará vacía;

**Fecha prevista de entrega**: representa la fecha de entrega prevista del material, tomada de la pestaña *Materiales a entregar* del pedido de cuenta de trabajo del cual se generó la línea de artículo del DDT;

**Previsto regreso**: representa la fecha de regreso prevista del producto terminado que deberá ser realizado por el proveedor utilizando el material en entrega, tomada de la pestaña *Artículos a Producir* del pedido de cuenta de trabajo del cual se generó la línea de artículo del DDT;

**N. línea**: representa un simple número progresivo de la línea del documento, editable por el usuario;

**UM**: representa la unidad de medida de gestión del artículo en entrega;

**Fase/Subfase**: se visualizan el código de fase y el código de subfase de la fase de producción del pedido de producción al que el artículo está eventualmente vinculado; esto ocurre si el pedido de cuenta de trabajo del cual se ha creado esta línea de DDT se ha generado a partir de una fase externa de un pedido de producción;

**Cantidad**: representa la cantidad que se ha decidido entregar al proveedor, editable por el usuario;

**Almacén**: representa el código del almacén del cual se toma la mercancía a entregar al proveedor. El código del almacén se propone igual al que se estableció en la línea de la pestaña 'Materiales a entregar' del pedido de cuenta de trabajo del cual se generó la línea DDT, pero es editable por el usuario. Si, en cambio, está activo el indicador presente en los Parámetros de Cuenta de Trabajo, llamado 'Considerar almacenes según el tipo de DDT de entrega', el almacén propuesto será el que se estableció en la tabla de 'Tipos de Albarán de Venta', en la columna correspondiente 'Almacén';

**Causa**: representa el código de la causa de almacén que se utilizará para realizar el retiro del almacén del cual es necesario hacer salir la mercancía a entregar al proveedor. El código de la causa de almacén se propone igual al que se estableció en la línea de la pestaña 'Materiales a entregar' del pedido de cuenta de trabajo del cual se generó la línea DDT, pero es editable por el usuario. Si, en cambio, está activo el indicador presente en los Parámetros de Cuenta de Trabajo, llamado 'Considerar almacenes según el tipo de DDT de entrega', la causa propuesta será la que se estableció en la tabla de 'Tipos de Albarán de Venta', en la columna correspondiente 'Causa';

**Precio**: representa el precio unitario del artículo. Se trata de una columna editable por el usuario y no obligatoria. Se usa generalmente cuando el DDT de entrega debe pasar por una aduana;

**IVA**: representa el código IVA, o puede ser visto automáticamente propuesto por el procedimiento que lo toma de la ficha del proveedor o de la ficha del artículo presente en la línea, según los casos. La caja combinada toma de la tabla 'Tipos de IVA' que se encuentra en 'Configuraciones Generales';

**Tipo de facturación de compras**: representa el código del Tipo de Facturación, o puede ser visto automáticamente propuesto por el procedimiento que lo toma de la ficha del artículo presente en la línea. La caja combinada toma de la tabla 'Tipo de Facturación de Compras' que se encuentra en las 'Tablas del Área de Compras';     

**Pesos**: se reportan el Peso neto y el Peso bruto totales de las líneas de artículo. Se reportan los pesos de la ficha del artículo multiplicados por la cantidad de línea.

### 3.1 Descarga de lotes

En esta pestaña se da la posibilidad de establecer, para la línea seleccionada en la cuadrícula, los lotes a descargar del almacén con la cantidad de artículo retirada para el envío al proveedor, en caso de que se trate de varios lotes diferentes retirados con la misma línea de DDT.

La cuadrícula de lotes permite al usuario retirar el lote accediendo a la correspondiente 'Ayuda de Lotes', que filtra entre los lotes disponibles del artículo seleccionado en la cuadrícula superior. La información que se reporta en la cuadrícula de lotes incluye tipo de código de lote, código de lote, lote del proveedor, tipo de lote, fecha de inicio y fecha de caducidad, cantidad del lote, ubicación, datos del proveedor del lote (cuenta, subcuenta y razón social). Obviamente, la suma de las cantidades de los varios lotes deberá corresponder exactamente a la cantidad entregada de la línea de artículo.

### 3.2 Datos del material

En esta pestaña se visualizan las siguientes informaciones relacionadas con la línea seleccionada en la cuadrícula:

**Clase, código, descripción y variante del artículo, cantidad a entregar, unidad de medida, Almacén, Causa, Pedido C/L**: se trata de una serie de informaciones simplemente reportadas de la línea de DDT seleccionada;

**Proyecto**: representa la orden de venta vinculada a la línea del DDT. Generalmente se llama a la orden de venta ingresada en la línea del pedido de cuenta de trabajo del cual se generó la línea de DDT;

**Notas**: en este campo el usuario puede ingresar una nota relacionada con la línea seleccionada.

## **4. Resúmenes**

En los Resúmenes se presentan las informaciones principales del documento completo.

### 4.1 Descuentos finales

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos/Descuentos/Aumentos finales

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Otros campos

**Volumen**: se propone el volumen acumulativo, resultado de la suma de los volúmenes de los artículos (el valor se toma de la *Ficha del artículo > pestaña Pesos/Dimensiones*), cuando la unidad de medida del volumen de los artículos corresponde a la que se ingresó en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**Peso neto**: se propone el peso neto acumulativo, resultado de la suma de los pesos de los artículos (el valor se toma de la *Ficha del artículo > pestaña Pesos/Dimensiones*), cuando la unidad de medida del peso de los artículos corresponde a la que se ingresó en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**Peso bruto**: se propone el peso bruto acumulativo, resultado de la suma de los pesos de los artículos (el valor se toma de la *Ficha del artículo > pestaña Pesos/Dimensiones*), cuando la unidad de medida del peso de los artículos corresponde a la que se ingresó en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**Bultos**: se propone el número de bultos, basado en los datos ingresados en la *Ficha del artículo > pestaña Pesos/Dimensiones*, en los campos *Artículos presentes en un bulto* o *Bultos para formar el artículo*. Se consideran solo los artículos que tienen este campo completado.  

### 4.3 Transporte

Se propone automáticamente el *Transporte a cargo de* presente en la *Ficha del contacto > pestaña [Entrega](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (botón de opción: Remitente/Destinatario/Transportista), pero los datos pueden ser modificados.

### 4.4 Totales del documento

**Importe bruto de artículos**: representa la suma de los valores de todos los artículos;  
**Anticipo**: representa el valor del eventual anticipo recibido por el documento;  
**Importe de obsequio**: representa el importe de los artículos de tipo obsequio ingresados en la pestaña *Artículos*;  
**Total de descuentos aplicados**: representa el valor total de los descuentos aplicados a los artículos, pero sin los descuentos finales;  
**Importe neto de artículos**: *Importe bruto de artículos* – *Total de descuentos aplicados*;  
**Total de descuentos finales**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales**: *Importe neto de artículos* - *Total de descuentos finales*;  
**Gastos de cobro**: representa la suma de los gastos de cobro ingresados en la cuadrícula de *Gastos*;  
**Gastos de timbre**: representa la suma de los gastos de timbre ingresados en la cuadrícula de *Gastos*;   
**Base imponible**: *Importe neto de artículos* – *Descuentos finales* + *Total de gastos no documentados* + *Total de gastos documentados*;  
**Impuesto**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**Total**: *Base imponible* + *IVA*.