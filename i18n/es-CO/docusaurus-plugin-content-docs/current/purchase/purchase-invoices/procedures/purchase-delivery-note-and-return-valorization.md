---
title: DDT y valorización de retornos
sidebar_position: 5
---

El procedimiento se abre a través de la ruta **Compras > Facturas de compra > Procedimientos > DDT y valorización de retornos**. 

Esto permite ejecutar/restaurar la creación de facturas de compra a partir de DDT de compra y de DDT de retorno.

### Valorización

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar los DDT de compra y de retorno a valorar. Es posible filtrar por: proveedor, tipo de guía de compra, tipo de retorno, número, fecha, artículo y proyecto.

A diferencia de los dos procedimientos análogos [Valorización DDT de compra](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) y [Valorización DDT de Retorno](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization), en este formulario se visualiza una línea por cada línea de artículo contenida en el documento. En consecuencia, es posible valorar también una sola línea de artículo.

- **Número y fecha de la factura**: permite especificar el número y la fecha de la factura que se creará. 

*Botones específicos*: 

> **Valorización**: permite valorar los DDT seleccionados en la cuadrícula, según los parámetros ingresados en la siguiente pestaña *parámetros*.  
> **Mostrar solo documentos**: este botón activa o desactiva el indicador homónimo colocado en la sección de filtro, permitiendo elegir si visualizar una línea por cada artículo contenido en los documentos o solamente el encabezado del documento.

### Parámetros 

#### Parámetros DDT de Compra 

*inserimento in fattura*

- **Recalcular CGC/CGP**: utilizado en la contabilidad analítica, sirve para recalcular los centros de costo o de ingresos.  
- **Clasificar DDT por número de documento del proveedor**: si está configurado, permite insertar los DDT dentro de las facturas resumidas ordenándolos por *número de documento de proveedor* en lugar de *número interno*.  
- **Tipo de factura de compra**: indica el tipo de factura a crear.

*riferimenti ddt*

- **Inserte referencias D.N.**: si este indicador está activado, en la pestaña [Artículos](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la factura se mostrará un *Artículo nota* que recogerá las referencias del DDT del cual se ha creado la factura. El contenido de esta nota debe ser ingresado en el campo *descrizione*, de acuerdo con los parámetros descritos en la etiqueta. 
    
    *Ejemplo*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Si el DDT tiene el número 5 y la fecha 11.09.2024, el artículo nota en la factura será: 'DDT referencia no 5 del 11.09.2024'.

#### Parámetros de Retorno de Trabajo por Encargo

*Tipo de factura*

- **Tipo de factura**: indica el tipo de factura a crear.
- **Clasificar DDT por número de documento del proveedor**: si está configurado, permite insertar los retornos dentro de las facturas resumidas ordenándolos por *número de documento*. De lo contrario, los retornos serán ordenados por fecha de documento.  

*Devolver referencias*

- **Mantener referencias de retorno**: si este indicador está activado, en la pestaña [Artículos](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la factura se mostrará un *Artículo nota* que recogerá las referencias del retorno del cual se ha creado la factura. El contenido de esta nota debe ser ingresado en el campo *descripción*, de acuerdo con los parámetros descritos en la etiqueta. 

:::tip Recuerda 
Para la facturación resumida, es necesario establecer en los [Parámetros de agrupación de facturas](/docs/configurations/parameters/purchase/invoice-grouping/) las condiciones de agrupación a utilizar. 
:::

*Botones específicos*: 

> **Guardar parámetros de DDT**: permite guardar los parámetros establecidos para la valorización de los DDT de compra.   
> **Guardar parámetros de retornos**: permite guardar los parámetros establecidos para la valorización de los retornos de trabajo por encargo.

Después de haber seleccionado los DDT (desde la pestaña *Valorización*) y establecido los parámetros, se puede crear la factura con la ayuda del botón *valorizzazione*.

### Precedentes

La última pestaña es la de restauración: se puede utilizar para filtrar, visualizar y anular las operaciones.

En la cuadrícula superior se visualizan todas las facturas creadas. Al seleccionar una, se puede ver en las cuadrículas inferiores el **Nombre del operador** y la fecha de la valorización, la **Notas de entrega de compra.** o el **Retorno de trabajo por encargo** desde el cual se generó la factura, con la lista de los artículos valorados. También hay la posibilidad de abrir el DDT, el retorno o la factura generada haciendo doble clic en la línea deseada.

*Botones específicos*:
> **Buscar valorizaciones**: para buscar las facturas creadas y los DDT valorados en base a los filtros establecidos. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.  
> **Restaurar facturas**: para cancelar la factura seleccionada en la cuadrícula inferior.