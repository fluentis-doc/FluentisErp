---
title: carico fatture di acquisto in magazzino
sidebar_position: 1
keywords:
- Factura de compra (Fattura di acquisto)
- Almacén (Magazzino)
---

El procedimiento se abre a través de la ruta **Compras > Facturas de compra > Procedimientos > Registro de facturas de compra en almacén (Acquisti > Fatture di acquisto > Procedure > Registrazione fatture di acquisto in magazzino)**.

Este permite ejecutar/restaurar las operaciones de registro automático en el almacén de los artículos presentes en la factura.

### Filtro

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar las facturas de compra, seleccionarlas y luego registrarlas en el almacén.  
Es posible filtrar por: proveedor, tipo de factura de compra, de/a número de factura, de/a fecha.

- **data registrazione magazzino**: permite especificar la fecha relativa al registro en el almacén.

:::important Recuerda
Si en los [Parámetros de facturas de compra (Parametri fatture di acquisto)](/docs/configurations/parameters/purchase/purchase-invoices-parameters#carico) > pestaña Carga (tab Carico) el indicador **crea registrazione con la data del documento** está activo, el registro del almacén se realizará siempre con la fecha del documento, ignorando la *data registrazione magazzino* ingresada en este formulario.  
Si el indicador en los parámetros no está activo, se utilizará la *data carico* ingresada manualmente en la cabecera de la factura.  
Si la *data carico* no está asignada, el registro del almacén se creará con la *data registrazione magazzino* ingresada en este formulario.
:::

*Botones específicos*:

> **ricerca**: permite buscar las facturas a registrar en el almacén.  
> **registrazione**: permite realizar el registro de las facturas seleccionadas en el almacén, de acuerdo con los algoritmos de carga y los parámetros ingresados en la pestaña siguiente *Parámetros*.

### Parámetros (Parametri)

Si algunas líneas de artículo de las facturas no tienen almacén y causa para la carga, a través de esta máscara el usuario tiene la posibilidad de especificar cómo tratar las excepciones.

Las opciones disponibles son:

- **No realizar el registro de la factura por completo (Non effettuare la registrazione della fattura per intero)**: no permite la carga parcial del documento;  
- **tralasciare l'articolo senza magazzino e causale**: permite la carga parcial del documento;  
- **Aceptar como almacén y causa los siguientes datos (Accettare come magazzino e causale i seguenti dati)**: asegura la carga completa del documento. Para todos los artículos encontrados sin almacén y causa en las facturas seleccionadas, establece los datos ingresados inmediatamente después, en los campos: *magazzino* y *causale*.

*Botón específico*

> **salva parametri**: permite guardar los parámetros configurados para el registro.

### Resumen (Riepilogativo)

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de registro realizadas, tanto las efectuadas mediante el uso de este procedimiento, como aquellas realizadas desde dentro del documento mediante el botón de *carico automatico nel magazzino*.

Los datos en las cuadrículas en la parte inferior, **fatture** y **registrazione**, corresponden al registro de carga seleccionado en la cuadrícula superior (después de filtrar los datos). Además, en estas dos últimas cuadrículas, hay la posibilidad de visualizar la factura y su registro en el almacén (doble clic en la fila).

*Botones específicos*:
> **ricerca**: para buscar las facturas cargadas. El resultado de este procedimiento se visualiza en las cuadrículas de resultados.  
> **cancella carico**: para eliminar el registro completo de carga seleccionado.  
> **rollback fattura**: para eliminar la carga de un documento seleccionado en el registro de carga. Esta operación también implicará la anulación del registro en el almacén si corresponde a un solo documento o la actualización de sus datos si corresponde a más de una factura.