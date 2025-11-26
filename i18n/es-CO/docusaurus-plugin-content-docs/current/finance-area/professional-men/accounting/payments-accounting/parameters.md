---
title: Parámetros
sidebar_position: 3
ai_generated: true
---

En esta pestaña se gestionan los principales parámetros contables<!-- parametri contabili --> del procedimiento:

Las **fechas de registro y periodo de devengo<!-- date di registrazione e competenza -->**, la **causal<!-- causale -->** de pago a utilizar, los **subcuentas<!-- sottoconti --> bancarios a debitar** y el de **registro de la deuda de la retención (no obligatorio<!-- rilevazione del debito della ritenuta (non obbligatorio -->**, si no está presente se utilizará la subcuenta<!-- sottoconto --> insertada en el tipo de retención).<!-- tipo ritenuta -->

La opción de cierre de partidas, marcada por defecto, nunca debe desmarcarse (para poder gestionar el cierre de partidas<!-- chiusura partite -->).

 

Las opciones de agrupación previstas son:

Por defecto **Registro único<!-- Singola registrazione -->** (sin marcar **Agrupar cuentas<!-- Raggruppa conti -->**): en este caso se creará un único registro con un solo movimiento de banco<!-- movimento banca --> (para facilitar la conciliación de los movimientos<!-- movimenti --> con el extracto bancario), mientras que las otras subcuentas<!-- sottoconti --> estarán detalladas compensación por compensación (para un mayor control de los movimientos en la cuenta<!-- conto --> de las retenciones<!-- ritenute -->). Si también se marca la opción de agrupar cuentas<!-- raggruppamento conti -->, los datos de las otras subcuentas<!-- sottoconti --> iguales también serán agrupados;

**Sin agrupación<!-- Nessun raggruppamento -->**: en este caso, cada compensación tendrá un registro separado.

**Agrupar por subcuenta<!-- Raggruppa per sottoconto -->**: en este caso, la agrupación se realizará por cada percipiente;

 

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image01.png)

 

La sección siguiente, activada por la marca en **Creación automática de pagos a proveedores<!-- Creazione automatica pagamenti fornitori -->**, permite crear una orden de pago en el módulo ** [Pagos a proveedores<!-- Pagamenti fornitori -->](/docs/treasury/vendors-payments/create-vendor-payments) **, para luego imprimirla y enviar telemáticamente el archivo de transferencias bancarias vía homebanking. Los campos a configurar son: el tipo de pago de la orden, el campo de cuenta bancaria<!-- conto corrente --> (se propone el de la ficha maestra vinculada al subcuenta<!-- sottoconto banca --> ingresado más arriba), la fecha de emisión del pago y una eventual fecha valor beneficiario (previa activación de la casilla correspondiente), y una nota final opcional que se reflejará en la contabilidad en la fila correspondiente al banco.

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image02.png)

 

| Función | Significado |
| --- | --- |
| Contabilización de pagos<!-- Contabilizzazione pagamenti --> | Realiza la contabilización de los pagos seleccionados. |