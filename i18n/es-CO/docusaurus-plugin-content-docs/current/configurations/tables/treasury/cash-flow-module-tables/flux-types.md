---
title: Tipos de flujo
sidebar_position: 2
ai_generated: true
---

:::tip[FAst Start]
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada
:::

La tabla, que es preparatoria para el uso del módulo, prevé la codificación de las tipologías de flujos de cash flow<!-- flusso di cash flow --> que la empresa desea habilitar para las simulaciones.

Se recomienda codificar igualmente todos los tipos previstos: el procedimiento de *generación automática de cash flow<!-- generazione automatica cashflow -->* permite definir, cada vez, cuáles de estos considerar y cuáles no.

La codificación del tipo de flujo es libre tanto en el código como en la descripción, a elección, y luego debe vincularse mediante los indicadores correspondientes a los datos que pueden ser gestionados.

Se prevén los siguientes orígenes de datos:

**Código**: código del tipo de flujo<!-- tipi flusso -->;

**Descripción**: descripción del tipo de flujo<!-- tipi flusso -->;

**Partidas<!-- Partite -->**: el origen de datos son las partidas abiertas de contabilidad general;

**Saldo contable<!-- Saldo contabile -->**: de este tipo de flujo se obtienen las disponibilidades financieras iniciales, respecto a los *tipos de cuentas financieras<!-- tipi conti finanziari -->* codificados;

**Pedidos de clientes/pedidos de proveedores<!-- Ordini clienti/ordini fornitori -->**: pedidos de clientes, de las tipologías con indicador *cash flow*, impresos y confirmados, no despachados;

**Facturas de compra/venta<!-- Fatture di acquisto/vendita -->**: facturas impresas/controladas pero aún no contabilizadas (no de tipo proforma);

**Extracontable**: vencimientos manuales extracontables definidos en el módulo de cash flow<!-- cash flow --> propio mediante el formulario *Vencimientos extracontables<!-- Scadenze extracontabili -->*;

**Perceptores<!-- Percipienti -->**: honorarios de profesionales aún no contabilizados (si están contabilizados, forman parte de las partidas abiertas);

**DDT de compra/venta<!-- DDT di acquisto/vendita -->**: DDT de las tipologías con indicador *cash flow*, impresos y confirmados, no valorizados (si están valorizados, forman parte de las facturas);

**Pedidos y devoluciones de cuenta trabajo<!-- Ordini e rientri di conto lavoro -->**: pedidos de cuenta trabajo<!-- conto lavoro --> por despachar y devoluciones de cuenta trabajo<!-- conto lavoro --> aún no facturadas;

**RDA**: solicitudes de compra;

**Pedido planificado<!-- Ordine pianificato -->**: pedidos de producción con fases externas planificadas o pedidos de producción que prevén una solicitud de compra.

**Portafolio de efectos<!-- Portafoglio effetti -->**: Efectos emitidos (y presentados, según la configuración del indicador *Usar en vencimientos en la cartera* presente en la pantalla de *Generación automática de cash flow<!-- Generazione automatica cashflow -->*)

**Anticipos**: Remesas de adelanto de factura creadas. El procesamiento de cash flow<!-- cash flow -->, si para este tipo está activado el indicador 'Usar en vencimientos en la cartera' (en la pantalla *Generación automática de cash flow<!-- Generazione automatica Cashflow -->*), detecta los importes de las remesas contabilizadas por el monto anticipado en la cuenta bancaria, y en los flujos a las fechas de vencimiento. Cuando las facturas son cobradas (procesando un nuevo cash flow<!-- cashflow -->), los flujos pendientes se eliminan y el saldo de la cuenta bancaria se actualiza con la cuota residual no ya anticipada, neto de eventuales comisiones e intereses.