---
title: Tipos de nota de entrega de compra
sidebar_position: 5
---

Esta tabla es fundamental para definir los diferentes tipos de nota de entrega de compra disponibles, cada uno con sus propias características. Se puede acceder desde *Configuración > Tablas > Compras > Tipos de nota de entrega de compra*.

Los campos presentes son:

**Código/Descripción**: campos obligatorios para definir el tipo y la descripción de la nota de compra.

**Numeración/Descripción**: campo obligatorio para la [Numeración](/docs/configurations/tables/fluentis-numerations) que se asignará al tipo de nota de entrega.

**Tipo/Descripción de factura de compra**: en este campo debe definirse el [Tipo de factura](/docs/configurations/tables/purchase/purchase-invoices-type) que se creará al utilizar el procedimiento de [Valoración de nota de entrega de compra](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization). Solo es posible crear la factura a partir de nota de entrega si este campo ha sido completado.

**Naturaleza DN**: en este campo debe ingresarse la naturaleza de la nota de entrega: entrega, devolución, para visualización o devolución para visualización. Este valor debe seleccionarse de una lista.

**Almacén/Descripción de almacén**: es el almacén de llegada de la mercancía que se establece automáticamente en las líneas de artículo de las notas de entrega creados con este tipo.

**Plantilla/Descripción de Plantilla**: es la [Plantilla](/docs/configurations/tables/logistics/warehouse-templates) de movimiento de la mercancía en llegada que se establece automáticamente en las líneas de artículo de las notas de entrega creados con este tipo.

**Control de proveedor**: sirve para activar un control que, en el momento de seleccionar el sujeto titular de la nota, la procedura nos permitirá seleccionar solo cuentas de tipo proveedor y no de tipo cliente.

**Flujo de Caja**: si está configurado, el tipo de pedido contribuye al cálculo del flujo de caja.

**Cantidad de pedido no consumida**: si está activado, en el momento en que se vayan a cumplir líneas de pedido con cantidades parciales en la misma nota de entrega, este indicador permitirá mostrar las cantidades cumplidas del pedido divididas por línea de artículo sin sumar las cantidades.

**Agrícola compras IVA**: si está activo, en el momento de la creación de la nota, el sistema verifica si existe un código de IVA agrícola para el artículo utilizado; si no existe, se toma el código de IVA normal.

**Gestión de Matrices de Datos Adicionales**: si está activo, permite visualizar, en el caso de gestión de artículos con matriz, una pestaña adicional para la imputación de los valores de cantidad por cada celda de matriz.

**Imprimir Informe**: en este campo es posible elegir la impresión predeterminada que se utilizará (se recuerda que, para imprimir el informe predeterminado, en la fase de impresión será necesario seleccionar la opción *Impresiones múltiples*); en el campo siguiente es posible indicar un **Número de copias** a imprimir.

**Gestión de Reciclaje**: este indicador permite activar la gestión de Reciclaje para cada tipo de nota de entrega. Para más detalles sobre la gestión de gastos relacionados con el [Reciclaje](/docs/sales/sales-flow/conai), se remite a la página correspondiente de la documentación. 

**Control de calidad**: los tipos de nota de entrega que tienen este indicador activo son visibles en el formulario [Importar artículos a controlar](/docs/quality/item-control/items-control/item-control-import/) ubicado en el área de *Calidad*.

**Gestión de activos fijos**: este indicador permite habilitar la [Gestión de activos fijos](/docs/finance-area/fixed-assets/general-overview) para ese tipo de pedido y seleccionar el **Tipo de operación** que se desea realizar, que en el caso de las compras será un *Valor de compra*.