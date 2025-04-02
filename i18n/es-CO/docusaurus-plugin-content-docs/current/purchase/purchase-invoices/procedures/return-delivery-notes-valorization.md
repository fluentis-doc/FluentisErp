---
title: valorizzazione ddt di rientro
sidebar_position: 4
---

El procedimiento se abre a través de la ruta **Compras > Facturas de compra > Procedimientos > valorizzazione ddt di rientro (Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di rientro)**.

El procedimiento permite crear facturas a partir de los DDT de retorno.

### Filtro de retornos (Filtro rientri)

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar los DDT de retorno a valorar. Se puede filtrar por: proveedor, tipo de retorno, número de documento, fecha, artículo y proyecto.

- **Número y fecha de factura (Numero e data fattura)**: permite especificar el número y la fecha de la factura que se creará.

- **Total**: permite ver el importe total de los retornos seleccionados para la valoración.

*Botón específico*:

> **valorizzazione rientri di conto lavoro**: permite valorar los retornos seleccionados en la cuadrícula, según los parámetros ingresados en la siguiente pestaña *parametri*.


### Parámetros (Parametri)

*tipo fattura*

- **Tipo de factura**: indica el tipo de factura a crear.

- **ordina ddt per numero documento fornitore**: si está configurado, permite ingresar los retornos dentro de las facturas resumen ordenándolos por *número de documento*. De lo contrario, los retornos se ordenarán por fecha de documento.

*riferimenti rientro*

- **metti riferimenti rientri**: si esta opción está habilitada, en la pestaña [Artículos (Articoli)](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la factura se mostrará un *Artículo nota* que recogerá las referencias del retorno a partir del cual se creó la factura. El contenido de esta nota debe ser ingresado en el campo *Descripción*, de acuerdo con los parámetros descritos en la etiqueta.

:::tip Recuerda
Para la facturación resumida es necesario establecer en los [Parámetros de agrupamiento de facturas (Parametri raggruppamento fatture)](/docs/configurations/parameters/purchase/invoice-grouping/) las condiciones de agrupamiento a utilizar.
:::

*Botón específico*:

> **salva parametri valorizzazione**: permite guardar los parámetros establecidos para la valoración.

Después de seleccionar los DDT de retorno (desde la pestaña *Filtro de retornos*) y establecer los parámetros, la factura se puede crear con la ayuda del botón *valorizzazione rientri di conto lavoro*.

### Previos (Precedenti)

La última pestaña es la de restauración: se puede utilizar para filtrar, visualizar y cancelar operaciones.

Los datos en las cuadrículas inferiores, **fatture** y **rientri**, corresponden a la valoración seleccionada en la cuadrícula superior (después de haber filtrado los datos). Además, en estas dos últimas cuadrículas, hay la posibilidad de visualizar la factura y el retorno correspondiente mediante un doble clic en la fila.

*Botones específicos*:
> **ricerca valorizzazione rientri**: para buscar las facturas creadas y los retornos valorados. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.    
> **ripristino valorizzazione**: para cancelar toda la operación seleccionada, junto con todos sus detalles visualizados en las dos cuadrículas inferiores.