---
title: valorizzazione ddt di acquisto
sidebar_position: 3
---

El procedimiento se abre a través del recorrido **valorizzazione ddt di acquisto**. 

Permite ejecutar/restaurar la creación de la factura de compra a partir de uno o más DDT de compra.

### Valorización (Valorizzazione)

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar los DDT de compra a valorizar. Se puede filtrar por: proveedor, tipo de nota de compra, número, fecha, artículo y proyecto.

- **data creazione**: permite especificar la fecha de la factura que será creada. 

*Botón específico*:  

> **valorizzazione ddt di acquisto**: permite valorar los DDT seleccionados en la cuadrícula, según los parámetros ingresados en la pestaña siguiente *parametri*.

### Parámetros (Parametri)

*inserimento in fattura*

- **Recalcular CdC/CdR (Ricalcola CdC/CdR)**: utilizado en contabilidad analítica, sirve para recalcular los centros de costo o de ingresos.  

- **ordina ddt per numero documento fornitore**: si está configurado, permite insertar los DDT dentro de las facturas resumidas ordenándolos por *número de documento del proveedor (numero documento fornitore)* en lugar de por *numero interno*.  

- **tipo fattura acquisto**: indica el tipo de factura a crear.

*riferimenti ddt*

- **metti riferimenti ddt**: si este indicador está configurado, en la pestaña [Artículos (Articoli)](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la factura se mostrará un *Artículo nota* que recogerá las referencias del DDT del cual se creó la factura. El contenido de esta nota debe ser ingresado en el campo *descrizione*, de acuerdo con los parámetros descritos en la etiqueta. 

    *Ejemplo*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Si el DDT tiene el número 5 y la fecha 11.09.2024, el artículo nota en la factura será: 'DDT referencia no 5 del 11.09.2024'.

:::tip Recuerda (Ricorda)
Para la facturación resumida, es necesario establecer en los [Parámetros de agrupamiento de facturas (Parametri raggruppamento fatture)](/docs/configurations/parameters/purchase/invoice-grouping/) las condiciones de agrupamiento a utilizar. 
:::

*Botón específico*:  

> **salva parametri valorizzazione**: permite guardar los parámetros establecidos para la valorización.

Después de seleccionar los DDT (desde la pestaña *Valorización*) y establecer los parámetros, la factura puede ser creada con la ayuda del botón *valorizzazione ddt di acquisto*.

### Anteriores (Precedenti)

La última pestaña es la de restauración: se puede usar para filtrar, visualizar y anular las operaciones.

Los datos en las cuadrículas de abajo, **fatture** y **DDT**, corresponden a la valorización seleccionada en la cuadrícula superior (después de haber filtrado los datos). Además, en estas dos últimas cuadrículas, hay la opción de visualizar la factura y el DDT correspondiente haciendo doble clic en la fila deseada.

*Botones específicos*:
> **ricerca valorizzazione ddt**: para buscar las facturas creadas y los DDT valorizados según los filtros establecidos. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.  
> **Restauración de facturas (Rirpistino fatture)**: para eliminar la factura seleccionada en la cuadrícula inferior.  
> **ripristino valorizzazione**: para eliminar toda la operación seleccionada, con todos sus detalles visualizados en las dos cuadrículas inferiores.