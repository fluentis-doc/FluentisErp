---
title: Tipos de flujo
sidebar_position: 2
---

:::tip[FAst Start]
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada
:::

La tabla, que es preparatoria para el uso del módulo, prevé la codificación de las tipologías de flujos de cash flow<!-- flusso di cash flow --> que la empresa desea habilitar para las simulaciones.

Se recomienda codificar igualmente todos los tipos previstos: el procedimiento de *Generación Automática de Flujo de Efectivo* permite definir, cada vez, cuáles de estos considerar y cuáles no.

La codificación del tipo de flujo es libre tanto en el código como en la descripción, a elección, y luego debe vincularse mediante los indicadores correspondientes a los datos que pueden ser gestionados.

Se prevén los siguientes orígenes de datos:

**Código**: código del tipo de flujo;

**Descripción**: descripción del tipo de flujo;

**Valores mat.**: el origen de datos son los valores de madurez abiertos de contabilidad general;

**Saldo del libro mayor**: de este tipo de flujo se obtienen las disponibilidades financieras iniciales, respecto a los *tipos de cuentas financieras* codificados;

**Órdenes de venta/Órdenes de compra**: órdenes de venta, de las tipologías con indicador *Flujo de Caja*, impresos y confirmados, no despachados;

**Facturas de compra/venta**: facturas impresas/controladas pero aún no contabilizadas (no de tipo proforma);

**Extracontable**: vencimientos manuales extracontables definidos en el módulo de Flujo de Caja propio mediante el formulario *Fecha de vencimiento fuera de balance*;

**Hombres profesionales**: honorarios de profesionales aún no contabilizados (si están contabilizados, forman parte de los valores de madurez abiertos);

**Nota de Entrega de Compra/Venta**: DN de las tipologías con indicador *Flujo de Caja*, impresos y confirmados, no valorizados (si están valorizados, forman parte de las facturas);

**Órdenes y Retornos de Subcontratistas**: órdenes de subcontratistas por despachar y retornos de subcontratistas aún no facturadas;

**SDC**: solicitudes de compra;

**Orden planificada**: órdenes de producción con fases externas planificadas o órdenes de producción que prevén una solicitud de compra.

**Cartera de facturas**: Efectos emitidos (y presentados, según la configuración del indicador *Usar en vencimientos en la cartera* presente en la pantalla de *Generación Automática de Flujo de Efectivo)

**Anticipos**: Remesas de adelanto de factura creadas. El procesamiento de flujo de caja, si para este tipo está activado el indicador 'Usar en vencimientos en la cartera' (en la pantalla *Generación Automática de Flujo de Efectivo*), detecta los importes de las remesas contabilizadas por el monto anticipado en la cuenta bancaria, y en los flujos a las fechas de vencimiento. Cuando las facturas son cobradas (procesando un nuevo flujo de caja), los flujos pendientes se eliminan y el saldo de la cuenta bancaria se actualiza con la cuota residual no ya anticipada, neto de eventuales comisiones e intereses.