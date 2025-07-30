---
title: Registro de nota de entrega de compra en el almacén
sidebar_position: 1
keywords:
- Nota de entrega 
- Almacén 
---

El procedimiento se abre a través del camino **Compras > Nota de entrega de compra > Procedimientos > Registro de Nota de entrega de compra en la bodega** y permite ejecutar/restaurar las operaciones de carga en el almacén de los artículos presentes en la Nota de entrega.

:::note NOTA
La nota de Compra también se puede registrar en el almacén mediante el botón de [*Carga automática en el almacén*](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) presente dentro del documento.
:::

### Filtro

Ofrece la posibilidad de insertar filtros para buscar las notas de compra, seleccionarlos y luego registrarlos en el almacén.

- **Fecha de contabilización del almacén**: permite especificar la fecha relacionada con el registro en el almacén.

:::important Recuerda
Si en los [Parámetros de notas de compra](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) > pestaña Carga el indicador **Crear grabación con fecha del documento** está activo, el registro en el almacén se realizará siempre con la fecha del documento, ignorando la *Fecha de registro en almacén* ingresada en este formulario.  
Si el indicador en los parámetros no está activo, se utilizará la *Fecha de carga* ingresada manualmente en el encabezado de la nota de entrega.  
Si la *Fecha de carga* no está valorada, el registro en el almacén se creará con la *Fecha de registro en almacén* ingresada en este formulario.
:::

*Botones específicos*:

> **Buscar**: permite buscar las notas de entrega para registrar en el almacén.  
> **Registro**: permite realizar la carga en el almacén de las notas de entrega seleccionados en la cuadrícula superior.


### Parámetros

Si algunas líneas del artículo de las notas de entrega no tienen almacén y causa para la carga, a través de esta máscara el usuario tiene la posibilidad de elegir cómo tratar las excepciones.

Las opciones disponibles son:

- **No realizar el registro de la Nota de entrega completa**: no permite la carga parcial del documento;  
- **Ignorar artículo sin almacén y plantilla**: permite la carga parcial del documento;  
- **Aceptar como almacén y causa los siguientes datos**: asegura la carga completa del documento. Para todos los artículos encontrados sin almacén y causa en las notas de entrega seleccionadas, establece los datos ingresados inmediatamente después, en los campos: *almacén* y *causal*.

:::important Recuerda
Si en los [Parámetros de Nota de entrega de compra](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) > pestaña Carga el indicador **Plantilla de carga y almacén prioritario** está activo, siempre se utilizarán el *Almacén* y la *Causa* ingresados en los parámetros, ignorando los presentes en la nota de entrega para cada línea de artículo.
:::

*Botón específico*

> **Guardar Parámetros**: permite guardar los parámetros establecidos para el registro.

### Resumen 

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de registro realizadas, tanto las efectuadas mediante esta procedimiento, como las realizadas desde el interior del documento mediante el botón de *Carga automática*.

Los datos en las cuadrículas inferiores, **Nota de entrega** y **Registro**, corresponden al registro de carga seleccionado en la cuadrícula superior (después de filtrar los datos). En estas dos cuadrículas se tiene la posibilidad de visualizar la nota de entrega y su registro en el almacén mediante un doble clic en la fila.

*Botones específicos*:
> **Buscar**: para buscar las notas de entrega cargadas. El resultado de este procedimiento se visualiza en las cuadrículas de resultados.  
> **Eliminar registros**: para restaurar todo el registro de carga seleccionado.  
> **Eliminar Nota de entrega**: para cancelar la carga de un documento seleccionado en el registro de carga. Esta operación también implicará la anulación del registro en el almacén si corresponde a una sola nota de entrega o la actualización de sus datos si corresponde a más notas de entrega.