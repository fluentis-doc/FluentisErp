---
title: tipi flusso
sidebar_position: 2
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está interesada por el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se quiera configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

La tabla, previa al uso del módulo, contempla la codificación de los tipos de flujo de cash flow que la empresa desea habilitar para las simulaciones.  

Se recomienda codificar todas las tipologías previstas: el procedimiento de *generación automática de cash flow* permite definir, en cada caso, cuáles de estas considerar y cuáles no.  

La codificación del tipo de flujo es libre en código y descripción, a elección, y debe luego asociarse a través de los indicadores correspondientes, a los datos que pueden ser gestionados.

Se prevén las siguientes fuentes de datos:

**codice**: código de los tipos de flujo;

**descrizione**: descripción de los tipos de flujo;

**partite**: la fuente de datos son las partidas abiertas de contabilidad general;

**saldo contabile**: de este tipo de flujo se obtienen las disponibilidades financieras iniciales, respecto a los *tipos de cuentas financieras* codificados;

**Órdenes de clientes/órdenes de proveedores (Ordini clienti/ordini fornitori)**: órdenes de clientes, de las tipologías con indicador *cash flow*, impresas y confirmadas, no evadidas;

**Facturas de compra/venta (Fatture di acquisto/vendita)**: facturas impresas/controladas pero no contabilizadas (no de tipo proforma);

**Extracontable (Extracontabile)**: vencimientos manuales extracontables definidos en el módulo de cash flow mediante el formulario *Vencimientos extracontables*;

**percipienti**: compensaciones de profesionales no contabilizadas (si están contabilizadas, entran en las partidas abiertas);

**DDT de compra/venta (DDT di acquisto/vendita)**: DDT de las tipologías con indicador *cash flow*, impresas y confirmadas, no valorizadas (si son valorizadas, entran en las facturas);

**Órdenes y devoluciones de trabajo (Ordini e rientri di conto lavoro)**: órdenes de trabajo por evadir y devoluciones de trabajo no facturadas;

**rda**: solicitudes de compra;

**ordine pianificato**: órdenes de producción con fases externas planificadas o órdenes de producción que prevén una solicitud de compra.

**portafoglio effetti**: Efectos emitidos (y presentados, según la configuración del indicador *Usar en venc. en el castelletto* presente en la máscara de *Generación automática de cash flow*).

**anticipi**: Listas de anticipos de factura creadas. El procesamiento del cash flow, si para este tipo está activado el indicador 'Usar en venc. en el castelletto' (en la máscara *Generación automática de Cashflow*), va a registrar los importes de las listas contabilizadas por el importe anticipado en la cuenta bancaria, y en los flujos a las fechas de vencimiento. Cuando las facturas son cobradas (procesando un nuevo cash flow), los flujos vencidos se eliminan y el importe de la cuenta bancaria se actualiza con la parte restante no ya anticipada, menos cualquier comisión e interés.