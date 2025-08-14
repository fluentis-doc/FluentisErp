---
title: Carga de facturas de compra de almacén
sidebar_position: 1
keywords:
- Factura de compra (Fattura di acquisto)
- Almacén (Magazzino)
---

El procedimiento se abre a través de la ruta **Compras > Facturas de compra > Procedimientos > Registro de facturas de compra en almacén**.

Este permite ejecutar/restaurar las operaciones de registro automático en el almacén de los artículos presentes en la factura.

### Filtro

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar las facturas de compra, seleccionarlas y luego registrarlas en el almacén.  
Es posible filtrar por: proveedor, tipo de factura de compra, de/a número de factura, de/a fecha.

- **Fecha de contabilización del almacén**: permite especificar la fecha relativa al registro en el almacén.

:::important Recuerda
Si en los [Parámetros de facturas de compra](/docs/configurations/parameters/purchase/purchase-invoices-parameters) > pestaña Carga el indicador **Crear grabación con fecha del documento** está activo, el registro del almacén se realizará siempre con la fecha del documento, ignorando la *Fecha de contabilización del almacén* ingresada en este formulario.  
Si el indicador en los parámetros no está activo, se utilizará la *Fecha de carga* ingresada manualmente en la cabecera de la factura.  
Si la *Fecha de carga* no está asignada, el registro del almacén se creará con la *Fecha de contabilización del almacén* ingresada en este formulario.
:::

*Botones específicos*:

> **Buscar**: permite buscar las facturas a registrar en el almacén.  
> **Registro**: permite realizar el registro de las facturas seleccionadas en el almacén, de acuerdo con los algoritmos de carga y los parámetros ingresados en la pestaña siguiente *Parámetros*.

### Parámetros 

Si algunas líneas de artículo de las facturas no tienen almacén y causa para la carga, a través de esta máscara el usuario tiene la posibilidad de especificar cómo tratar las excepciones.

Las opciones disponibles son:

- **No realizar el registro de la factura por completo**: no permite la carga parcial del documento;  
- **Ignorar artículo sin almacén y plantilla**: permite la carga parcial del documento;  
- **Aceptar como almacén y causa los siguientes datos**: asegura la carga completa del documento. Para todos los artículos encontrados sin almacén y causa en las facturas seleccionadas, establece los datos ingresados inmediatamente después, en los campos: *magazzino* y *causale*.

*Botón específico*

> **Guardar Parámetros**: permite guardar los parámetros configurados para el registro.

### Resumen 

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de registro realizadas, tanto las efectuadas mediante el uso de este procedimiento, como aquellas realizadas desde dentro del documento mediante el botón de *carico automatico nel magazzino*.

Los datos en las cuadrículas en la parte inferior, **facturas** y **registro**, corresponden al registro de carga seleccionado en la cuadrícula superior (después de filtrar los datos). Además, en estas dos últimas cuadrículas, hay la posibilidad de visualizar la factura y su registro en el almacén (doble clic en la fila).

*Botones específicos*:
> **Buscar**: para buscar las facturas cargadas. El resultado de este procedimiento se visualiza en las cuadrículas de resultados.  
> **Eliminar carga**: para eliminar el registro completo de carga seleccionado.  
> **Factura de reversión**: para eliminar la carga de un documento seleccionado en el registro de carga. Esta operación también implicará la anulación del registro en el almacén si corresponde a un solo documento o la actualización de sus datos si corresponde a más de una factura.