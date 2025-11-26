---
title: Creación de facturas a partir de DDT
sidebar_position: 1
ai_generated: true
---

El procedimiento se abre a través de la ruta **Ventas > Facturas de venta > Procedimientos > Creación desde DDT<!-- Vendite > Fatture di vendita > Procedure > Creazione da DDT -->**.

Este procedimiento permite ejecutar/restaurar las operaciones de creación de facturas a partir de uno o más DDT<!-- DDT -->.

### Valoración<!-- Valorizzazione -->

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar los DDT<!-- DDT -->, con el estado *Impresa<!-- Stampata -->*, para facturar usando los filtros (tipo de DDT<!-- DDT -->, fecha, número, cliente).

**Fecha de creación<!-- Data creazione -->**: permite especificar la fecha de la factura que será creada.

*Botones específicos*: 
> **Creación de facturas desde DDT<!-- Creazione fatture da DDT -->**: permite valorar los DDT<!-- DDT --> seleccionados en la cuadrícula, según los parámetros ingresados en la pestaña siguiente *Parámetros<!-- Parametri -->*.
> **Apertura DDT**: permite visualizar y modificar el DDT<!-- DDT --> seleccionado.

:::note
No es posible crear una autofactura a partir de un DDT<!-- autofattura da DDT -->.
:::

### Parámetros<!-- Parametri -->

*Inserción en factura<!-- Inserimento in fattura -->*

Con la ayuda de estos parámetros se pueden agrupar los DDT<!-- DDT --> del mismo cliente en una sola factura:

**DDT de años y periodos de IVA diferentes<!-- DDT di anni e periodi IVA diversi -->**: la marca activa permite la creación de la factura a partir de DDT<!-- DDT --> de años y periodos fiscales diferentes.

**DDT de tipos diferentes<!-- DDT di tipi diversi -->**: la marca activa permite la creación de una factura a partir de diferentes tipos de DDT<!-- DDT -->.

**DDT de cambios diferentes<!-- DDT di cambio diversi -->**: la marca activa permite la creación de una factura con varios DDT<!-- DDT --> con tipos de cambio diferentes.

**Agrupamiento DDT por tipo y solución de pago<!-- Raggruppamento DDT per tipo e soluzione di pagamento -->**: los tipos de pago pueden ser tomados del registro del cliente o se pueden mantener los de los DDT<!-- DDT -->. En caso de no agrupar por tipo de pago, la factura podrá contener incluso varias líneas de pago diferentes.

*Tratamiento de pagos en factura<!-- Trattamento pagamenti in fattura -->*

Si hay DDT<!-- DDT --> con diferentes soluciones de pago y no se ha activado la marca *Agrupa DDT<!-- Raggruppa DDT -->*:

**Restaura los del registro**: la factura tomará las soluciones de pago del registro maestro (y no considera la información ingresada en los DDT<!-- DDT -->).

**Mantiene los de los DDT** la factura tomará las soluciones de pago ingresadas en los DDT<!-- DDT -->.

*Inserción en factura<!-- Inserimento in fattura -->*

**Agrupar vencimientos en factura<!-- Raggruppa scadenze in fattura -->**: la marca activa permite agrupar en una única solución los vencimientos con la misma fecha pero provenientes de DDT<!-- DDT --> diferentes.

**Recalcula CdC/CdP<!-- Ricalcola CdC/CdP -->**: utilizado en la contabilidad analítica<!-- contabilità analitica -->, sirve para recalcular los centros de costo o de beneficio<!-- centri di costo o di profitto -->.

*Referencias DDT<!-- Riferimenti DDT -->*

**Colocar referencias de DDT<!-- Metti riferimenti DDT -->**: si esta marca está activada, en la pestaña [Artículos](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la factura se mostrará un *Artículo nota<!-- Articolo nota -->* que retomará las referencias del DDT<!-- DDT --> desde el cual se creó la factura. La composición de esta nota debe ser ingresada en el campo 'Descripción' según los parámetros descritos en la etiqueta.

*Botón específico*: 

> **Guardar parámetros<!-- Salva parametri -->**: permite guardar los parámetros establecidos para la valoración<!-- valorizzazione -->.

Después de seleccionar los DDT<!-- DDT --> (en la pestaña *Valoración<!-- Valorizzazione -->*) y establecer los parámetros, la factura puede crearse con el botón *Creación de factura desde DDT<!-- Creazione fattura da DDT -->*.

### Anteriores<!-- Precedenti -->

Como última pestaña está disponible una pestaña de restauración: se puede utilizar para filtrar, visualizar y anular operaciones.

Los datos en las cuadrículas inferiores, **Facturas** y **DDT**, corresponden a la valoración<!-- valorizzazione --> seleccionada en la cuadrícula superior (después de filtrar los datos). Además, en estas dos últimas cuadrículas, existe la posibilidad de visualizar la factura y el DDT<!-- DDT --> correspondiente haciendo doble clic en la fila deseada.

*Botones específicos*:
> **Buscar facturas<!-- Ricerca fatture -->**: permite buscar los DDT<!-- DDT --> valorados.
> **Restaurar creación<!-- Ripristina creazione -->**: permite restaurar toda la operación, es decir, en el caso de la creación de varias facturas al mismo tiempo, elimina todas las facturas y restaura los DDT<!-- DDT -->.
> **Restaurar factura<!-- Ripristina fattura -->**: permite restaurar la factura seleccionada en la pestaña *Facturas<!-- Fatture -->*.