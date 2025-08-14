---
title: Valoración de notas de entrega de compra
sidebar_position: 3
---

El procedimiento se abre a través del recorrido **Valoración de notas de entrega de compra**. 

Permite ejecutar/restaurar la creación de la factura de compra a partir de uno o más DDT de compra.

### Valorización

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar los DDT de compra a valorizar. Se puede filtrar por: proveedor, tipo de nota de compra, número, fecha, artículo y proyecto.

- **Fecha de creación**: permite especificar la fecha de la factura que será creada. 

*Botón específico*:  

> **Valoración de notas de entrega de compra**: permite valorar los DDT seleccionados en la cuadrícula, según los parámetros ingresados en la pestaña siguiente *parametri*.

### Parámetros

*Inserción en la factura*

- **Recalcular CdC/CdR**: utilizado en contabilidad analítica, sirve para recalcular los centros de costo o de ingresos.  

- **Clasificar DDT por número de documento del proveedor**: si está configurado, permite insertar los DDT dentro de las facturas resumidas ordenándolos por *número de documento del proveedor* en lugar de por *numero interno*.  

- **Tipo de factura de compra**: indica el tipo de factura a crear.

*Referencias D.N.*

- **Inserte referencias D.N.**: si este indicador está configurado, en la pestaña [Artículos](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la factura se mostrará un *Artículo nota* que recogerá las referencias del DDT del cual se creó la factura. El contenido de esta nota debe ser ingresado en el campo *descripción*, de acuerdo con los parámetros descritos en la etiqueta. 

    *Ejemplo*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Si el DDT tiene el número 5 y la fecha 11.09.2024, el artículo nota en la factura será: 'DDT referencia no 5 del 11.09.2024'.

:::tip Recuerda 
Para la facturación resumida, es necesario establecer en los [Parámetros de agrupamiento de facturas](/docs/configurations/parameters/purchase/invoice-grouping/) las condiciones de agrupamiento a utilizar. 
:::

*Botón específico*:  

> **Guardar Parámetros de Valoración**: permite guardar los parámetros establecidos para la valorización.

Después de seleccionar los DDT (desde la pestaña *Valorización*) y establecer los parámetros, la factura puede ser creada con la ayuda del botón *Valoración de notas de entrega de compra*.

### Anteriores

La última pestaña es la de restauración: se puede usar para filtrar, visualizar y anular las operaciones.

Los datos en las cuadrículas de abajo, **facturas** y **Nota de entrega de compra**, corresponden a la valorización seleccionada en la cuadrícula superior (después de haber filtrado los datos). Además, en estas dos últimas cuadrículas, hay la opción de visualizar la factura y el DDT correspondiente haciendo doble clic en la fila deseada.

*Botones específicos*:
> **Búsqueda de valoración de notas de entrega**: para buscar las facturas creadas y los DDT valorizados según los filtros establecidos. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.  
> **Restauración de facturas**: para eliminar la factura seleccionada en la cuadrícula inferior.  
> **Restaurar la valorización**: para eliminar toda la operación seleccionada, con todos sus detalles visualizados en las dos cuadrículas inferiores.