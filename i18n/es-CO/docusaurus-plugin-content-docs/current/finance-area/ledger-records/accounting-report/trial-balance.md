---
title: Balance de Comprobación
sidebar_position: 1
ai_generated: true
---

La impresión del Balance de comprobación<!-- Bilancio di verifica --> muestra una lista de las subcuentas<!-- sottoconti --> con sus respectivos totales debe/haber y los saldos.

Los principales parámetros de filtro que deben gestionarse antes de ejecutar la impresión son:

 - el rango de fechas de registro<!-- registrazione -->; por defecto se sugiere el periodo desde principios de año hasta la fecha actual.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image01.png)

- el rango de fechas de competencia **contable** (no confundir con el concepto de competencia económica).

 ![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image02.png)

Es posible filtrar solo algunas subcuentas<!-- sottoconti --> relacionadas con los registros de clientes (el par de widgets más arriba) y proveedores (segundo par de widgets)

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image03.png)

O es posible excluir algunos tipos de cuentas de registro para que no se muestren los detalles de cada subcuenta<!-- sottoconto --> correspondiente a la tipología para la que se activa la casilla.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image04.png)

  

Se pueden solicitar todas las subcuentas<!-- sottoconti -->, solo las que han tenido movimientos<!-- movimentati -->, o las que tienen movimientos con saldo diferente de cero.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image05.png)

  

Con la descripción estándar de la subcuenta<!-- sottoconto --> o utilizando la **[segunda descripción](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image06.png)

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image07.png)

 ![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image08.png)

Es posible incluir también los asientos provisionales<!-- registrazioni provvisorie --> (por defecto solo están activas las definitivas).

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image09.png)

**OPCIONES<!-- OPZIONI -->**:

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image10.png)

**División**: la lista desplegable permite seleccionar solo una de las divisiones presentes en la base de datos, con el fin de elaborar el balance solo para la seleccionada; de lo contrario, si no se selecciona ninguna (o más de una manteniendo presionada la tecla Ctrl) se obtendrá el balance de toda la empresa en uso. Se recuerda que el concepto de división se refiere a una unidad operativa específica (a la que se refieren los documentos y los movimientos contables<!-- movimenti contabili -->) pero vinculada a la misma empresa (por lo tanto, al mismo sujeto jurídico), que desde un punto de vista fiscal y legal presenta el balance y los datos contables y fiscales.

**Excluir causa**: mediante la lista desplegable es posible excluir los movimientos<!-- movimenti --> relacionados con la causa contable<!-- causale contabile --> seleccionada. Esta opción es especialmente útil cuando se desea reimprimir un balance relativo a un período para el cual ya se ha realizado el cierre de cuentas<!-- chiusura dei conti --> y, por lo tanto, los saldos son cero. Se debe ingresar entonces en el campo correspondiente la causa utilizada para el cierre de cuentas (por ejemplo, causa código BILCH) para visualizar nuevamente el balance con la situación de saldos antes del cierre.

**Apertura**: casilla que, si está activada, excluye del procesamiento del balance los movimientos de apertura de cuentas<!-- movimenti di apertura conti --> generados por el procedimiento de reapertura de cuentas relacionado con el **[cierre automático de cuentas<!-- chiusura automatica conti -->](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing).**

| Función | Significado |
| --- | --- |
| Vista previa | Botón para ejecutar la vista previa de impresión. |
| Imprimir | Botón para realizar la impresión física del documento. |


:::important Vea también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE IMPRESIONES CONTABLES**](/docs/video/finance/intro)
:::