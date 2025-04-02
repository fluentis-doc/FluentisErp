---
title: Cálculo de Risconto Maxicanone (Calcolo Risconto Maxicanone)
sidebar_position: 1
---

Desde este formulario, es posible buscar los risconti ya calculados y proceder al cálculo de nuevos riscontos anuales en lo que respecta al maxicanone.

El procedimiento, de manera similar a los procedimientos para las asientos de ajuste del módulo de Contabilidad, requiere ejecutar **primero** el **cálculo** del risconto desde esta posición y **luego** proceder a su **contabilización** a través del procedimiento contable apropiado del módulo.

Al presionar el botón nuevo, se inicializa el formulario de entrada de parámetros para el cálculo.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image01.png)

Es necesario especificar el **Año** contable, la **Causa** a utilizar para la escritura de ajuste, la **Fecha** de registro y de competencia contable que se insertará en la escritura.

A pesar de la inserción de la causa, el esquema de la escritura contable será guiado por la lógica del procedimiento.

Después de guardar, es posible presionar Calcular para obtener la propuesta de los valores, que podrán ser confirmados mediante la marca (marcar todo para confirmar los riscontos relacionados con los diversos leasing presentes) y luego proceder a contabilizarlos.

Los valores propuestos por el cálculo son editables y, por lo tanto, pueden ser forzados en caso de que el cálculo obtenido necesite ligeros ajustes, por ejemplo, en el número de días de competencia calculados o en los valores resultantes.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image02.png)

Se recuperan **Tipo de Leasing**, **Fecha de suscripción**, **Número de Leasing**, **Descripción** y **Fecha de extinción**.

**Total de días**: = diferencia en días entre **fecha de suscripción** y **fecha de extinción**.

**Costo diario**: = Valor total del contrato / Total de días: (donde el Valor total del contrato = Maxicanone + Gastos de instrucción y práctica + Suma de (Cuota de capital + Cuota de intereses + Gastos por cada canón)).

**Días de competencia**: = número de días transcurridos entre (la más reciente entre la fecha de suscripción y la fecha de inicio del ejercicio) y la Fecha de registro establecida para el risconto del maxicanone.

**Costo de competencia**: = Costo diario * Días de competencia.

**Pagado contable (Pagato contab.)**: cálculo de lo pagado en el ejercicio desde el punto de vista contable (canones contabilizados + Maxicanone si está contabilizado) 

= Suma del Maxicanone contabilizado y de los canones (cuota de capital + cuota de intereses + gastos) que tienen el indicador Contabilizado activo (a raíz de la maniobra de contabilización o ajustado manualmente) y cuya fecha prevista de vencimiento para el canón, indicada en la línea de detalle del plan de amortización del leasing, es menor que la fecha de registro del risconto del maxicanone.

También se verifica que el año contenido en las fechas de los canones y en el encabezado del leasing (fecha de suscripción) sean compatibles, con respecto a la fecha de contabilización del risconto, con la presencia de los parámetros contables para el año en cuestión.

**Risconto del año anterior**: en este campo se reporta el valor del campo Valor risconto correspondiente al año anterior, por lo que el primer año en el que se carga el contrato de leasing en el sistema resultará ser cero.

**Valor risconto**: en este campo se calcula el valor del risconto a aplicar:

= Pagado contab. + Risconto año anterior - Costo de competencia.

**controllata**: marcar el indicador en la línea para habilitar la posibilidad de contabilizar el risconto ya que se aprobó el cálculo automático o después de editar manualmente los campos.

Es posible marcar el indicador en Marcar todo (arriba de la cuadrícula) para aprobar masivamente todos los riscontos propuestos.

**contabilizzata**: el indicador se activa tras el lanzamiento de la contabilización del risconto propuesto y aprobado. Se insertan las referencias a la escritura contable generada.

El procedimiento de contabilización puede ejecutarse desde este formulario a través de los botones en la barra de herramientas o, de manera indiferente, utilizando el procedimiento accesible desde el menú de procedimientos contables del módulo.

Desde esta posición, también es posible ejecutar la restauración del procedimiento de contabilización.

El risconto Maxicanone calculado y contabilizado como se ha ilustrado anteriormente puede ser gestionado automáticamente también en la fase de reapertura automática de cuentas (activable desde la **[Cierre automático de cuentas](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**) activando el indicador Giroconto escrituras de ajuste.

En este caso, se ejecutarán automáticamente las habituales escrituras de reapertura de los riscontos para maxicanone, acumulándolos a las demás escrituras automáticas de apertura de saldos y girocontos de los otros devengos y riscontos activos y pasivos.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image03.png)