---
title: Cálculo de Diferimiento Maxicanone
sidebar_position: 1
ai_generated: true
---

Desde este formulario es posible buscar los diferimientos<!-- risconti --> ya calculados y proceder al cálculo de nuevos diferimientos<!-- risconti --> anuales relativos al maxicanone<!-- maxicanone -->.

El procedimiento, de manera similar a los procedimientos para los asientos de ajuste del módulo de Contabilidad<!-- Contabilità -->, prevé ejecutar **primero** el **cálculo** del diferimiento<!-- risconto --> desde esta posición y **luego** proceder a su **contabilización** mediante el procedimiento contable específico del módulo.

Al presionar el botón "Nuevo", se inicializa el formulario de inserción de parámetros para el cálculo.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image01.png)

Es necesario especificar el **Año<!-- Anno -->** contable, la **Causal<!-- Causale -->** a utilizar para el asiento de ajuste, la **Fecha<!-- Data -->** de registro y de competencia contable que se insertará en el asiento.

A pesar de la inserción de la causal<!-- causale -->, el esquema del asiento contable será dirigido por la lógica del procedimiento.

Después de guardar, es posible presionar "Calcular" para obtener la propuesta de valores, los cuales podrán ser confirmados mediante la selección (seleccionar todo para confirmar los diferimientos<!-- risconti --> relativos a los distintos contratos de leasing<!-- leasing --> presentes) y luego proceder a su contabilización.

Los valores propuestos por el cálculo son editables y por tanto pueden ser forzados en caso de que el cálculo obtenido requiera ligeros ajustes, por ejemplo en el número de días de competencia calculados o en los valores resultantes.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image02.png)

Se muestran **Tipo Leasing**, **Fecha de firma**, **Número de Leasing**, **Descripción** y **Fecha de extinción**.

**Total días**: = diferencia en días entre **fecha de firma<!-- data stipula -->** y **fecha de extinción<!-- data estinzione -->**

**Costo diario**: = Valor total del contrato / Total días:  (donde Valor total del contrato = Maxicanone<!-- Maxicanone --> + Gastos de estudio y tramitación + Suma de (Cuota de capital + Cuota de intereses + Gastos por cada cuota individual)).

**Días de competencia**: = número de días comprendidos entre (la más reciente entre fecha de firma<!-- data stipula --> y fecha de inicio del ejercicio) y Fecha de registro establecida para el diferimiento<!-- risconto --> del maxicanone<!-- maxicanone -->.

**Costo de competencia**: = Costo diario * Días de competencia

**Pagado contab.**: cálculo de lo pagado en el ejercicio desde el punto de vista contable (cuotas contabilizadas + Maxicanone<!-- Maxicanone --> si se ha contabilizado) 

= Suma del Maxicanone<!-- Maxicanone --> contabilizado y de las cuotas (cuota de capital + cuota de intereses + gastos) con el flag "Contabilizado" activo (después de contabilizar o establecido manualmente) y la fecha de vencimiento esperada para la cuota, indicada en la línea de detalle del plan de amortización del leasing<!-- leasing -->, sea anterior a la fecha de registro del diferimiento<!-- risconto --> maxicanone<!-- maxicanone -->.

También se verifica que el año contenido en las fechas de las cuotas y en la cabecera del contrato de leasing<!-- leasing --> (fecha de firma<!-- data stipula -->) sean compatibles, respecto a la fecha de contabilización del diferimiento<!-- risconto -->, con la presencia de los parámetros contables para el año en cuestión.

**Diferimiento año anterior<!-- Risconto anno precedente -->**: en este campo se indica el valor del campo "Valor de diferimiento<!-- Valore risconto -->" relativo al año anterior, por tanto el primer año en que se carga el contrato de leasing<!-- leasing --> en el sistema será cero.

**Valor de diferimiento<!-- Valore risconto -->**: en este campo se calcula el valor del diferimiento<!-- risconto --> a aplicar:

= Pagado contab. + Diferimiento año anterior<!-- Risconto anno precedente --> - Costo de competencia

**Controlada<!-- Controllata -->**: marcar el flag en la línea correspondiente para habilitar la posibilidad de contabilizar el diferimiento<!-- risconto --> ya sea porque se ha aprobado el cálculo automático o tras editar los campos manualmente.

Es posible marcar el flag en "Seleccionar todo" (arriba de la cuadrícula) para aprobar masivamente todos los diferimientos<!-- risconti --> propuestos.

**Contabilizada<!-- Contabilizzata -->**: el flag se activa después de ejecutar la contabilización del diferimiento<!-- risconto --> propuesto y aprobado. Se inserta la referencia al asiento contable generado.

El procedimiento de contabilización puede ejecutarse desde este formulario mediante los botones de la barra de acciones o, indistintamente, utilizando el procedimiento accesible desde el menú de procedimientos contables del módulo.

También desde esta posición es posible ejecutar la restauración del procedimiento de contabilización.

El diferimiento<!-- risconto --> Maxicanone<!-- Maxicanone --> calculado y contabilizado como se ha ilustrado anteriormente puede gestionarse automáticamente también en la fase de reapertura automática de cuentas (activable desde el **[Cierre automático de cuentas](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)<!-- Chiusura automatica conti -->**) activando el flag "Contabilización automática de asientos de ajuste<!-- Giroconto scritture di assestamento -->".

En este caso se ejecutarán automáticamente los habituales asientos de reapertura de los diferimientos<!-- risconti --> de maxicanone<!-- maxicanone -->, añadiéndolos a los demás asientos automáticos de apertura de saldos y de traspaso de los demás devengos y diferimientos<!-- ratei e risconti --> activos y pasivos.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image03.png)