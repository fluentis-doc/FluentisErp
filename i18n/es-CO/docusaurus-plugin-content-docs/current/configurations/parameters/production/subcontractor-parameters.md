---
title: Parámetros Subcontratista 
sidebar_position: 2
tags: [Subcontratista]
---

A través de esta ventana se configuran todos los parámetros que conciernen la gestión de subcontratista y, más específicamente, la manera en que deben ejecutarse las operaciones de almacén desencadenadas por los procedimientos del módulo mismo.

## General 

#### Datos propuestos en las órdenes

> **Regenerar materiales en la actualización del artículo**: si el indicador está activado, cada vez que se realice una modificación en la línea del artículo presente en la pestaña *Artículos a ser producidos* de la orden de subcontratista, el procedimiento regenerará la información relativa a los materiales a entregar y a utilizar que deben ser ingresados en la última pestaña de la misma orden.  
>  
> **Datos de materiales sugeridos**: muestra las 4 diferentes posibilidades que el usuario tiene para que la procedimiento proponga automáticamente los materiales en la pestaña Materiales a Entregar de la orden de subcontratista.  
> Las posibilidades son las siguientes:  
> 1. *Desde la última entrega realizada al mismo subcontratista*: se verifica la última orden de subcontratista generado para el mismo subcontratista y en el que está presente el mismo artículo a producir.    
> 2. *Expandir el nivel de la estructura de la lista de materiales (BOM)*: se verifica la lista de materiales del artículo ingresado en la pestaña Artículos a Producir.    
> 3. *Entrega del mismo artículo a producir*: se ingresa en la pestaña Materiales a Entregar el mismo artículo ingresado en la pestaña Artículos a Producir.    
> 4. *Sin materiales*: en la pestaña Materiales a Entregar no se propone ningún material.  
> 5. *Desde la orden de producción*: utilizado para las órdenes de subcontratista generados mediante la liberación de una orden planificado de subcontratista o de una orden de producción con fase externa.   
>
> **Versión**: permite seleccionar la versión de la lista de materiales.

#### Considere las disponibilidades desde

> Esta sección permite decidir si considerar o no las disponibilidades provenientes de **Subcontratista** / **Producción** / **Compras** / **Almacén** / **Ventas**; cada uno de estos indicadores indica la voluntad por parte del usuario de hacer que el procedimiento de creación de la orden de subcontratista considere la disponibilidad de los materiales en base a la información que proviene de las distintas áreas aplicativas del ERP. Por ejemplo, si el usuario elige activar el indicador solo en Compras y no en Ventas, significa que se considerará la disponibilidad proveniente de las órdenes de proveedores, de las notas de entrega y facturas de compra, y de las solicitudes de compra, pero no aquellas provenientes de órdenes de clientes, notas de entrega y facturas de venta.

#### Productos terminados  

> **Propuesta del último precio de trabajo realizado**: si está activado, permite que se proponga en la orden de subcontratista, en el cuadro del precio unitario de trabajo de la pestaña *Artículos a ser producidos*, el precio de la última orden de subcontratista emitido para ese artículo para el mismo subcontratista.  
>  
> **Considere las cantidades según el lote económico** y **Considere los múltiplos del lote económico**: permite elegir, al momento de ingresar un artículo en la pestaña *Artículos a ser producidos* de la orden de subcontratista, si considerar las cantidades de los artículos mismos según el lote económico, y/o eventualmente considerar también los múltiplos del lote.  

**Tipo de notas de entrega**: en esta sección se establece el [Tipo de notas de entrega](/docs/configurations/tables/sales/delivery-notes-type) que debe ser propuesto por defecto cuando se utiliza el procedimiento de creación del nota de entrega de subcontratista. Este tipo de notas de entrega utilizará automáticamente el almacén y la causal establecidos en las comboboxes de la opción "Entregas de materiales a subcontratistas" que se encuentra en la ventana de parámetros de subcontratista.

**Unidad de medida de volumen predeterminada**: permite indicar la unidad de medida que se utilizará por defecto para los volúmenes.  

**Unidad de medida de peso predeterminada**: permite indicar la unidad de medida que se utilizará por defecto para los pesos.  

**Valoración del trabajo. mat. al costo**: permite definir si la valorización del trabajo de los materiales debe hacerse a costo último o a costo medio. Entonces se trata de un método para decidir si los materiales utilizados por los subcontratistas deben ser imputados al trabajo usando el costo último o el costo medio entre los que están ingresados en la ficha del artículo. Además, es posible, al seleccionar los indicadores **Lotes** y/o **Orden de trabajo de producción**, proponer como costo del material el costo último/medio para el respectivo lote y/o orden de producción según los indicadores activados.    

#### Ejecución

> **Vista de la cuadrícula de ejecución**: si está activado, en los procedimientos de ejecución de orden en nota de entrega o en el retorno será visible la cuadrícula de ejecución.   
> 
> **Vista del árbol de ejecución**: si está activado, en los procedimientos de ejecución de orden en nota de entrega o en el retorno será visible la estructura jerárquica. Estos dos indicadores pueden ser activados simultáneamente.    

**Código de usuario obligatorio**: si está activado, permite decidir si es necesario ingresar el código del operador al momento de ingresar el nota de entrega de subcontratista.

**Propuesta automática de número de serie para el artículo devuelto si también está presente como material consumido**: en los retornos de subcontratista, este indicador activo permite que se proponga automáticamente el número de serie para el artículo.

**Control de disponibilidad**: si está activado, permite decidir si hacer que el procedimiento controle o no la disponibilidad proveniente de los indicadores establecidos en la sección *Considerar las disponibilidades desde*. 

**Disponibilidad obligatoria**: si está activado, impide la incorporación de materiales en órdenes de subcontratista en caso de falta de disponibilidad en la fecha de la posible entrega al subcontratista.

**No hay materiales en la entrega**: si está activado, asegura que en la pestaña *Materiales a ser entregados* no se ingrese ningún artículo para ningún artículo a producir.

**Carga/descarga automática**: si está activado, permite al usuario hacer que las operaciones de almacén salientes ocurran automáticamente tan pronto como se imprima la nota de entrega. Esto permite saltar el paso de descarga de las notas de entrega de subcontratista.

**Registrar con fecha del documento**: 
para el registro de las **notas de entrega**, si este indicador está activado, se utiliza la *Fecha de transporte* (presente en la pestaña *Resumen > Destinatario*), si está valorada; de lo contrario, se considera la fecha de creación del documento presente en la cabecera. Si el indicador no está activado, la descarga dentro del documento siempre se efectúa con la fecha actual.    
Para el registro de los **Retornos de subcontratista**: si el indicador está activado, se utiliza siempre la *Fecha de devolución* presente en la cabecera; si no está activado, el registro dentro del documento se hace con la *Fecha del documento def.* presente en la cabecera.

**Bloquear la inserción de documentos en días festivos**: si está activado, impide el ingreso de una orden, nota de entrega y retorno de subcontratista en fechas festivas.

**Verificar subcontratista de referencia para los ítems**: si está activado, permite al usuario hacer que el procedimiento de creación de las órdenes de subcontratista verifique si el artículo que se está ingresando en la pestaña *Artículos a ser producidos* tiene, como proveedor preferencial, al subcontratista ingresado en la cabecera de la misma orden.

**Lotes y números de serie obligatorios**: si se activa, obliga al usuario a ingresar en todos los documentos el lote del artículo ingresado en el documento, siempre que el artículo esté gestionado a lotes o a números de serie.

**ricalcola trasporto**: este indicador asegura que en la pestaña Transporte del nota de entrega se reporten los totales de peso, volumen y bultos de las líneas del documento; sin este indicador, los campos no se completarán.

**Verifique los artículos en agotamiento**: si se activa, el sistema realiza un control sobre la disponibilidad de los artículos en la línea de la orden y alerta si el artículo está agotado, es decir, si en la [Registro de artículos](/docs/erp-home/registers/items/create-new-item) se ha activado el indicador *En agotamiento*.

**Activar control de calidad**: trabajo en progreso.

**Gestión de unidad de medida doble**: solo si está activado, el sistema puede gestionar la unidad de medida alternativa en los documentos de subcontratista.

**Propuesta automática de UM alternativa**: si está activado, asegura que se proponga la cantidad relativa a la unidad de medida alternativa, siempre que en la ficha del artículo se haya establecido una por defecto. Este indicador solo se puede activar si el indicador anterior ha sido activado.

**Considere los almacenes según el tipo de nota de entrega de retorno**: permite elegir si considerar los almacenes según el tipo de notas de entrega de retorno o del tipo de notas de entrega, en lugar de utilizar las configuraciones establecidas en las respectivas comboboxes de las opciones *Entregas de materiales a subcontratistas* y *Devolver producto*.

## Almacenes 

#### Entregas de materiales a subcontratistas en progreso 
En esta sección se configuran el almacén y la causa correspondiente que deben ser considerados para la descarga de los materiales destinados a los subcontratistas en caso de que se utilice la gestión del almacén en progreso, que se puede activar en los [Parámetros de órdenes de producción](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro). En este caso, todos los órdenes de subcontratista creados desde el *Liberar Órdenes Planificadas* o directamente desde la orden de producción utilizarán este almacén y causal para la descarga de los materiales que se ingresan en la pestaña [Materiales a Entregar](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) de la orden de subcontratista.    

#### Entregas de materiales a subcontratistas   
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la descarga de los materiales destinados a los subcontratistas. Por lo tanto, el almacén configurado es el almacén desde el cual se descargarán los materiales ingresados en la pestaña [Materiales a Entregar](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) de la orden de subcontratista. Estos serán utilizados solo en las órdenes de subcontratista creados manualmente en caso de que la gestión del almacén en progresoesté activa, mientras que si la gestión del almacén en progresono está activa, se considerarán en todos los casos.     

#### Consumo de los materiales utilizados  
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la descarga de los materiales que los subcontratistas han utilizado. Por lo tanto, el almacén configurado es el almacén desde el cual se descargarán los materiales ingresados en la pestaña Materiales de la orden de Retorno de subcontratista. Se hará enlace cuando se cree el artículo.   

#### Cargas de materiales a subcontratistas 
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los materiales destinados a los subcontratistas. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los materiales ingresados en la pestaña Materiales a Entregar de la orden de subcontratista. Estos datos se toman de la causal de contrapartida ingresada en la tabla de causas en correspondencia de la causal que realiza la descarga de los materiales destinados a los subcontratistas (es decir, la causal configurada en la respectiva combobox de la sección *Entregas de materiales a subcontratistas*).

#### Entregas de materiales entre subcontratistas   
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para el movimiento de los materiales de un subcontratista a otro.     

#### Retorno de artículo en progreso  
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los productos no terminados que los subcontratistas han realizado; esto se utilizará en el caso de todas las fases externas que no sean la última fase del ciclo de trabajo. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los artículos ingresados en la pestaña Artículos de la orden de Retorno de subcontratista.

#### Retorno de artículo terminado 
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los productos terminados / productos no terminados que los subcontratistas han realizado; esto se utilizará en caso de que la fase externa sea la última fase del ciclo de trabajo. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los artículos ingresados en la pestaña Artículos de la orden de Retorno de subcontratista.

#### Material devuelto  
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los retornos. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los artículos ingresados en la pestaña Materiales Utilizados del Retorno de subcontratista y a los que se les ha asociado una cantidad devuelta.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).