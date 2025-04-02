---
title: bilancio di verifica
sidebar_position: 1
---

La impresión del Balance de comprobación muestra una lista de los subcuentas con sus respectivos totales de debe/haber y los saldos.

Los principales parámetros de filtro a gestionar antes de lanzar la impresión son:

 - el rango de fechas de registro; por defecto se propone el periodo desde el inicio del año hasta la fecha.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image01.png)

- el rango de fechas de competencia **contabile** (no confundir con el concepto de competencia económica).

 ![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image02.png)

Es posible filtrar solo algunos subcuentas referidos a los registros de clientes (pareja de widgets más arriba) y proveedores (segunda pareja de widgets).

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image03.png)

O es posible excluir algunos tipos de cuentas de registro para que no se visualicen los detalles de cada subcuenta relacionada con el tipo para el cual se activa el indicador.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image04.png)

 

Se pueden solicitar todos los subcuentas, solo aquellos que han tenido movimiento, o los que tienen movimiento con saldo diferente de cero.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image05.png)

 

Con la descripción estándar del subcuenta o utilizando la **[segunda descripción](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image06.png)

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image07.png)

 ![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image08.png)

Es posible incluir también los registros provisionales (por defecto solo están activos los definitivos).

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image09.png)

**opzioni**:

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image10.png)

**divisione**: la caja combinada permite seleccionar solo una de las divisiones presentes en la base de datos para elaborar el balance solo para la seleccionada; de lo contrario, si no se selecciona una (o más de una manteniendo presionada la tecla Ctrl), se obtendrá el balance de toda la empresa en uso. Se recuerda que el concepto de división se refiere a una unidad operativa específica (a la cual se refieren los documentos y los movimientos contables) correspondiente pero a la misma empresa (por lo tanto al mismo sujeto jurídico) la cual presenta fiscal y legalmente el balance y los datos contables y fiscales.

**escludi causale**: a través de la caja combinada es posible excluir los movimientos referidos a la causal contable seleccionada. Esta opción es particularmente útil cuando se desea reimprimir un balance correspondiente a un periodo en el cual ya se ha realizado el cierre de cuentas y, por tanto, los saldos resultan ser cero. Se debe ingresar en el campo correspondiente la causal utilizada para el cierre de cuentas (ejemplo: causal código BILCH) para visualizar nuevamente el balance con la situación de saldos antes del cierre.

**apertura**: indicador que, si está activado, excluye de la elaboración del balance los movimientos de apertura de cuentas generados por el procedimiento de reapertura de cuentas vinculado a la **[cierre automático de cuentas (chiusura automatica conti)](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing).**


| Función (Funzione) | Significado |
| --- | --- |
| Vista previa (Anteprima) | Botón para ejecutar la vista previa de impresión. |
| Imprimir (Stampa) | Botón para ejecutar la impresión física del documento. |


:::important Ver También (Vedi Anche)
[**TUTORIALS EN VIDEO SOBRE LAS IMPRESIONES CONTABLES**](/docs/video/finance/intro)
:::