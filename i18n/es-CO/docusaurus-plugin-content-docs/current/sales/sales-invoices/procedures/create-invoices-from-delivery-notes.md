---
title: Creación de facturas desde DDT (Creazione fatture da DDT)
sidebar_position: 1
---

El procedimiento se abre a través de la ruta **Ventas > Facturas de venta > Procedimientos > Creación desde DDT**.  

Este procedimiento permite ejecutar/restaurar las operaciones de creación de facturas a partir de uno o más DDT.

### Valorización

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar los DDT con estado *Impreso*, que se van a facturar con la ayuda de los filtros (tipo DDT, fecha, número, cliente).  

**data creazione**: permite especificar la fecha de la factura que será creada.  

*Botones específicos*:  
> **Creación de facturas desde DDT (Creazione fatture da DDT)**: permite valorar los DDT seleccionados en la cuadrícula, según los parámetros ingresados en la siguiente pestaña *Parámetros*.  
> **apertura ddt**: permite visualizar y modificar el DDT seleccionado.  

:::note
No es posible crear una autofactura desde DDT (autofattura da DDT).
:::

### Parámetros (Parametri)

*inserimento in fattura*

Con la ayuda de estos parámetros, se pueden agrupar los DDT del mismo cliente en una sola factura:

**ddt di anni e periodi iva diversi**: el indicador activo permite la creación de la factura a partir de DDT de años y períodos IVA diferentes.  

**ddt di tipi diversi**: el indicador activo permite la creación de una factura a partir de diferentes tipos DDT.  

**ddt di cambio diversi**: el indicador activo permite la creación de una factura a partir de más DDT con tasas de cambio diferentes.  

**raggruppamento ddt per tipo e soluzione di pagamento**: los tipos de pago pueden tomarse del registro del cliente o mantenerse los de los DDT. En caso de no haber agrupamiento por tipo de pago, la factura podrá contener también más líneas de pago diferentes.

*trattamento pagamenti in fattura*

Si hay DDT con soluciones de pago diferentes y si no se ha establecido el indicador *Agrupar DDT (Raggruppa DDT)*:

**ripristina quelli di anagrafica**: la factura tomará las soluciones de pago del registro (y no considera la información ingresada en los DDT).  

**Mantener los de DDT (Mantiene quelli dei DDT)**: la factura tomará las soluciones de pago ingresadas en los DDT.

*inserimento in fattura*

**raggruppa scadenze in fattura**: el indicador activo permite agrupar en una solución única las fechas con la misma fecha pero provenientes de DDT diferentes.  

**Recalcular CDC/CDP (Ricalcola CdC/CdP)**: utilizado en la contabilidad analítica, sirve para recalcular los centros de costo o de beneficio.

*riferimenti ddt*

**metti riferimenti ddt**: si se establece este indicador, en la pestaña [Artículos (Articoli)](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la factura se visualizará un *Artículo nota* que tomará las referencias del DDT del cual se ha creado la factura. La composición de esta nota debe ingresarse en el campo 'Descripción' de acuerdo con los parámetros descritos en la etiqueta.

*Botón específico*:  

> **salva parametri**: permite guardar los parámetros establecidos para la valorización.

Después de haber seleccionado los DDT (desde la pestaña *Valorización*) y establecido los parámetros, se puede crear la factura con la ayuda del botón *Creación de factura desde DDT (Creazione fattura da DDT)*.

### Anteriores (Precedenti)

Como última pestaña, hay una pestaña de restauración: se puede utilizar para filtrar, visualizar y anular las operaciones.  

Los datos en las cuadrículas de abajo, **fatture** y **DDT**, corresponden a la valorización seleccionada en la cuadrícula superior (después de filtrar los datos). Además, en estas dos últimas cuadrículas, hay la posibilidad de visualizar la factura y el DDT correspondiente haciendo doble clic en la línea deseada.  

*Botones específicos*:  
> **ricerca fatture**: permite buscar los DDT valorados.  
> **ripristina creazione**: permite restaurar toda la operación, es decir, en el caso de la creación de varias facturas al mismo tiempo, cancela todas las facturas y restaura los DDT.  
> **ripristina fattura**: permite restaurar la factura seleccionada en la pestaña *fatture*.