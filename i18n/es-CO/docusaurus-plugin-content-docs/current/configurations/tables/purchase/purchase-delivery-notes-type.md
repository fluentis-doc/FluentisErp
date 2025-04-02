---
title: tipi ddt acquisto
sidebar_position: 5
---

Esta tabla es fundamental para definir los diferentes tipos de DDT de compra disponibles, cada uno con sus propias características. Se puede acceder desde *Configuración > Tablas > Compras > tipi ddt acquisto*.

Los campos presentes son:

**Código/Descripción (Codice\Descrizione)**: campos obligatorios para definir el tipo y la descripción de la nota de compra.

**Numeración/Descripción (Numerazione\Descrizione)**: campo obligatorio para la [Numeración](/docs/configurations/tables/fluentis-numerations) que se asignará al tipo de DDT.

**Tipo/Descripción de factura de compra (Tipo/Descrizione fattura di acquisto)**: en este campo debe definirse el [Tipo de factura](/docs/configurations/tables/purchase/purchase-invoices-type) que se creará al utilizar el procedimiento de [Valoración de DDT de compra](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization). Solo es posible crear la factura a partir de DDT si este campo ha sido completado.

**natura ddt**: en este campo debe ingresarse la naturaleza del DDT: entrega, devolución, c/visualización (c/visione) o devolución c/visualización. Este valor debe seleccionarse de una lista.

**Almacén/Descripción de almacén (Magazzino/Descrizione magazzino)**: es el almacén de llegada de la mercancía que se establece automáticamente en las líneas de artículo de los DDT creados con este tipo.

**Causa/Descripción de causa (Causale/Descrizione causale)**: es la [Causa](/docs/configurations/tables/logistics/warehouse-templates) de movimiento de la mercancía en llegada que se establece automáticamente en las líneas de artículo de los DDT creados con este tipo.

**Control de proveedor (Controllo fornitore)**: sirve para activar un control que, en el momento de seleccionar el sujeto titular de la nota, la procedura nos permitirá seleccionar solo cuentas de tipo proveedor y no de tipo cliente.

**cash flow**: si está configurado, el tipo de pedido contribuye al cálculo del flujo de caja.

**evasione quantità articolo non sommata**: si está activado, en el momento en que se vayan a cumplir líneas de pedido con cantidades parciales en el mismo DDT, este indicador permitirá mostrar las cantidades cumplidas del pedido divididas por línea de artículo sin sumar las cantidades.

**Agrícola compras IVA (Agricola acquisti IVA)**: si está activo, en el momento de la creación de la nota, el sistema verifica si existe un código de IVA agrícola para el artículo utilizado; si no existe, se toma el código de IVA normal.

**gestione matrici extra data**: si está activo, permite visualizar, en el caso de gestión de artículos con matriz, una pestaña adicional para la imputación de los valores de cantidad por cada celda de matriz.

**stampa**: en este campo es posible elegir la impresión predeterminada que se utilizará (se recuerda que, para imprimir el informe predeterminado, en la fase de impresión será necesario seleccionar la opción *Impresiones múltiples*); en el campo siguiente es posible indicar un **Número de copias** a imprimir.

**gestione conai**: este indicador permite activar la gestión de Conai para cada tipo de DDT. Para más detalles sobre la gestión de gastos relacionados con el [Conai](/docs/sales/sales-flow/conai), se remite a la página correspondiente de la documentación.

**controllo qualità**: los tipos de DDT que tienen este indicador activo son visibles en el formulario [Importar artículos a controlar](/docs/quality/item-control/items-control/item-control-import/) ubicado en el área de *Calidad*.

**gestione cespiti**: este indicador permite habilitar la [Gestión de activos](/docs/finance-area/fixed-assets/general-overview) para ese tipo de pedido y seleccionar el **Tipo de operación** que se desea realizar, que en el caso de las compras será un *costo originario*.