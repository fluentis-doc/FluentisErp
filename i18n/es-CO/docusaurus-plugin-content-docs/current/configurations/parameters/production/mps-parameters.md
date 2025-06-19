---
title: Parámetros de MS
sidebar_position: 3
tags: [MS]
---

A través de esta ventana se configuran todos los parámetros que afectan la gestión de las órdenes de trabajo de producción y la manera en que deben manejarse las fases posteriores a la generación de las órdenes mismas.

## Método de generación de órdenes de trabajo

En esta sección debe establecerse el **Tipo de orden de trabajo** (Monoproducto / Multiproducto) que debe proponerse en el procedimiento de **Generación de órdenes de trabajo de producción**, pestaña [Parámetros](/docs/planning/mps-master-production-scheduling/job-order-creation).  
En el momento de la generación de la orden de trabajo desde la [Generación de órdenes de trabajo de producción](/docs/planning/mps-master-production-scheduling/job-order-creation), es posible modificar esta configuración, así como la relativa a la combinación siguiente llamada **Agrupamiento por**, mediante la cual se puede indicar cómo deben agruparse los artículos dentro de la misma orden de trabajo *Monoproducto* o *Multiproducto*.

Si el *Tipo de orden de trabajo* es:  
- *Monoproducto*, el único agrupamiento permitido es por Artículo: este tipo de gestión permite al usuario hacer que el sistema genere automáticamente una serie de órdenes monoproducto, seleccionando una lista de líneas de órdenes de venta, líneas provenientes de Pronósticos de Ventas o del Plan Maestro de Producción o provenientes del Stock Bajo, asegurando que cada orden de trabajo generada presente la suma de las cantidades solicitadas para el mismo artículo. La fecha de finalización de una orden de trabajo agrupada siempre es igual a la del requerimiento más cercano a la fecha en que se lanza la elaboración.  
- *Multiproducto*, los agrupamientos pueden realizarse por cliente, orden de trabajo de venta, cliente/orden de trabajo y permiten al usuario incluir en la misma orden de trabajo Multiproducto más artículos provenientes de líneas de pedido del cliente vinculadas al mismo cliente, a la misma orden de trabajo de venta o a la misma orden de trabajo de venta del mismo cliente.

El campo **Prioridad de Adquisiciones**, permite ingresar un valor predeterminado para la prioridad de las órdenes creadas; este será considerado por el procedimiento de [Programación de capacidad finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling/).

## Generación de orden de trabajo desde

En esta sección, el usuario puede establecer mediante los indicadores correspondientes si la orden de trabajo debe ser generada a partir de *órdenes de venta* o de un *Pronóstico* (específicamente puede seleccionar si desde *Pronósticos de ventas*, y/o desde *Plan maestro de producción*).  
Estos parámetros luego pueden ser modificados desde la ventana de [Generación de órdenes de trabajo de producción](/docs/planning/mps-master-production-scheduling/job-order-creation).  
En el caso de *Generación de orden de trabajo de producción desde el Pronóstico*, debe especificarse si se prefiere que la orden de trabajo de producción se genere con una caducidad semanal o mensual.

**Considere las disponibilidades desde**  
En esta sección, el usuario puede decidir establecer la consideración de la disponibilidad de los productos terminados al generar la orden de trabajo de producción de: *Subcontratista*, *Compras*, *Ventas*, *Producción*, *Almacén*.

Luego hay una serie de indicadores:  
**Calcule la cantidad de acuerdo con el tiempo de entrega del artículo**: se activa en caso de que no se deseen utilizar los ciclos de trabajo para calcular la duración de una orden de trabajo de producción; en este caso, para el cálculo de la duración de la orden de trabajo se hace referencia al campo Lead time de producción presente en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo. 

**Generación automática de órdenes de trabajo desde órdenes de venta**: si está activo, permite que el procedimiento cree automáticamente la orden de trabajo de producción tan pronto como se inserte una línea de pedido del cliente. La orden de trabajo en este caso se crea en estado de *No examinado*. Generalmente se activa cuando se utiliza el procedimiento *MRP* para programar en lugar de la *Programación General*.

**Actualizar la fecha de bienes listos**: si está activo, cuando se cambia la fecha de fin prevista de trabajo en una orden de trabajo (manualmente o a través de un procedimiento), la nueva fecha también se actualiza en el campo *Fecha de mercancías listas* de la propia orden de trabajo y también del pedido del cliente conectado. Además, se ha creado una tabla de registro llamada **MS_ProductionJobOrderItemReadyGoodsDateLogs** que rastrea todos los cambios realizados. Esta solo es consultable a través de SQL.

**Generación automática del flujo de producción.**: si está activo, el usuario puede decidir activar el indicador **Programación**, que permite al usuario definir el nivel de automatización que desea en la generación del flujo de producción; este flujo se iniciará directamente con el botón **Generación de flujo** presente en [Generación de órdenes de trabajo de producción](/docs/planning/mps-master-production-scheduling/job-order-creation).  
Por lo tanto, por ejemplo, el usuario puede activar el indicador **Programación**, que permite ver ya programadas las órdenes de trabajo de producción tan pronto como sean generadas desde la [Generación de órdenes de trabajo de producción](/docs/planning/mps-master-production-scheduling/job-order-creation). A su vez, la activación del indicador **Programación** permite luego activar el indicador **Liberar**, que permite decidir si después de la programación automática, los pedidos programados de compras, producción y/o trabajo por cuenta ajena también deben liberarse automáticamente. En este último caso, para las **órdenes programadas de producción**, también se puede activar el indicador **Libere las órdenes de producción ejecutiva**, que permite generar directamente órdenes de trabajo de producción ejecutivas, omitiendo así también el procedimiento de [Liberación de órdenes de trabajo de producción](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders). 

:::note Importante
Este automatismo también puede ser activado al confirmar el pedido del cliente solo si en la tabla de [Tipos de órdenes de venta](/docs/configurations/tables/sales/sales-order-types/) se ha insertado el **Tipo de orden de trabajo de producción** y se ha activado el indicador **Generación de orden de trabajo de producción**.  
Se recuerda que para activar el automatismo, el pedido del cliente debe estar *confirmado*, *impreso* y deben estar presentes las *fechas de entrega* y *mercancía lista* en todas las líneas de artículo.
:::

## Costo por orden de trabajo de producción

En esta sección es posible indicar parámetros que serán propuestos como predeterminados para el costo por orden de trabajo de producción.    

> **Tipo de costo**: permite indicar el tipo de costo a utilizar para la costificación de las materias primas entre costo *último*, *medio* y *estándar*;    
> **Tipo de recargo**: permite indicar el tipo de recargo entre *Costo* (a valor) y *Porcentaje*; en el campo al lado es posible ingresar el valor correspondiente;      
> **Costo del lote**: activando este indicador, el procedimiento valorizará el costo del material en función del tipo de costo seleccionado considerando solo los valores de ese lote específico;     
> **Costo para orden de trabajo**: activando este indicador, el procedimiento valorizará el costo del material en función del tipo de costo seleccionado considerando solo los valores de esa orden de trabajo específica.     

:::note Nota
Si **Costo del lote** y **Costo para orden de trabajo** están activados ambos, el procedimiento valorizará el costo del material en función del tipo de costo seleccionado considerando solo los valores de esa orden de trabajo específica y para ese lote específico, obviamente entre los movimientos realizados con causales de carga con el indicador actualizado a costo último o medio (dependiendo del valor indicado en el campo **Tipo de costo**) y el indicador de interés fiscal activos; si no encuentra ningún movimiento con estas características, buscará entre los movimientos que han cargado ese lote; si tampoco encuentra, buscará entre todos los movimientos de ese artículo. Si no hay ningún movimiento de carga para ese artículo, buscará en los respectivos campos de costo último, medio y estándar del registro del artículo.
::: 

## Almacenes para la planificación de órdenes de trabajo

Esta cuadrícula es la simple visualización de la lista de almacenes sobre los que debe controlarse la disponibilidad al generar la orden de trabajo de producción. Esta lista se configura en el formulario llamado *Calcular Disponibilidad* que se encuentra en *Inicio > Artículos > [Calcular Disponibilidad](/docs/erp-home/registers/items/calculate-availability)*.

**Parámetros propuestos para la planificación**: permite definir qué parámetros proponer para la planificación, puede repetir los parámetros de la última planificación realizada o proponer los parámetros utilizados para la planificación por el operador individual.

**Días para la próxima planificación**: indica el número de días que se utilizarán para incrementar la fecha de inicio de la programación a capacidad finita (campo *Desde la fecha*), en la pestaña *Parámetros de programación de capacidad finita* del formulario *Programación a capacidad finita*.

**Número máximo de meses para la planificación**: indica el número de meses para agregar a la fecha actual a fin de determinar la fecha de finalización de la planificación *Planificación hasta* que se encuentra en los parámetros de la *Planificación general*.        

**Número máximo de meses para el cálculo de la disponibilidad de materiales**: es posible definir el horizonte temporal para el cálculo de la disponibilidad; específicamente, se ingresa el número de meses en los que se considerarán los documentos; en cambio, los documentos con fecha posterior a los meses considerados no se tendrán en cuenta en la planificación.   

**Primer día de la semana visualizado en el calendario de la fábrica**: permite ingresar el día que se desea mostrar como primer día de la semana laboral en el [Calendario de Fábrica](/docs/configurations/tables/production/factory-calendar). Generalmente se establece el lunes.

## Colores de las órdenes de trabajo

En esta sección, es posible configurar los colores de fondo y de texto de las órdenes de trabajo de producción según su estado (no examinadas, lanzadas, etc.).

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).