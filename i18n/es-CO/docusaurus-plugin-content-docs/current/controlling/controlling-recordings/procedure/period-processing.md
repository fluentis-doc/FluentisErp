---
title: Elaboración de periodos
sidebar_position: 3
ai_generated: true
--- 

El procedimiento de ***Elaboración de periodos<!-- Elaborazione periodi -->*** es el principal dentro de las elaboraciones de controlling<!-- controlling -->. Esta pantalla también se divide en 4 procedimientos diferentes: la elaboración de los movimientos físicos, el cálculo de las amortizaciones<!-- ammortamenti -->, la propia elaboración de periodos y por último la elaboración del consolidado de proyecto<!-- consuntivo di progetto -->.

## ELABORACIÓN DE MOVIMIENTOS FÍSICOS<!-- ELABORAZIONE MOVIMENTI FISICI -->
El primer procedimiento simplemente lee las ***Registro de movimientos físicos<!-- Registrazioni movimenti fisici -->*** para crear la base de datos del ***Histórico de movimientos físicos<!-- Storico movimenti fisici -->***, leyendo las cantidades de las unidades de medida de estado (como por ejemplo los metros cuadrados de las oficinas) para replicarlas en los diferentes periodos, o tomando las de flujo para distribuirlas según los criterios de los periodos de distribución asociados. Solo tendremos que configurar
- el/la [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- el ***Año<!-- Anno -->***

## HISTÓRICO DE AMORTIZACIONES<!-- STORICO AMMORTAMENTI -->
Desde esta sección se lleva a cabo la elaboración de las amortizaciones<!-- ammortamenti --> del controlling<!-- controlling -->. Configuraremos 
- el/la [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) a la que asignar los valores
- el ***Año<!-- Anno -->*** a procesar
- el campo ***Hasta el periodo<!-- Fino a periodo -->***, es decir, el periodo final del año a procesar, que típicamente corresponderá con el periodo final de nuestro consolidado elaborado en el cierre interanual<!-- chiusura infrannuale -->
- por último, tenemos el ***Año inicial para recálculo histórico<!-- Anno iniziale per ricalcolo storico -->***. Este campo es útil en los casos en que se hayan modificado configuraciones de controlling<!-- controlling --> en los bienes de capital<!-- cespiti --> ya procesados

:::tip Ejemplo<!-- Esempio -->
Supongamos que tenemos un bien de capital<!-- cespite --> adquirido en 2015, para amortizar en controlling<!-- controlling --> al porcentaje del 15% y, por lo tanto, en poco más de 6 años y medio. Si nuestro primer cálculo de controlling<!-- controlling --> es en 2022, ***FluentisERP***, en la primera elaboración, tendrá que calcular las amortizaciones desde 2015 en adelante para ver si en 2022 hay algún remanente por procesar. Probablemente no, porque 2022 es 7 años después (digo probablemente porque el cálculo de controlling<!-- controlling --> se gestiona mes a mes; si el bien de capital<!-- cespite --> fue adquirido en diciembre de 2015, entonces probablemente tendremos el cierre de la amortización en los primeros meses de 2022). Si por algún motivo, después de una primera elaboración, quisiera cambiar la amortización al 10%, ¿qué debe hacer ***FluentisERP*** al calcular 2022? ¿Mantener el dato inicial al 15% ya procesado y, por lo tanto, no calcular nada más, o debe reiniciar los valores históricos para re-elaborarlos con las configuraciones actuales? Si configuramos el año de inicio a reconsiderar, significa que para todos los bienes de capital<!-- cespiti --> que tengan el flag de actualización de valores históricos, ***FluentisERP*** recalculará los datos históricos a partir del valor que se defina.
:::

Una vez completada la elaboración, ***FluentisERP*** habrá valorizado los datos en dos pantallas: la primera es la del ***Histórico de amortizaciones<!-- Storico ammortamenti -->***, donde visualizaremos el detalle por área, bien de capital<!-- cespite -->, año y mes de los datos elaborados sobre cada bien. Como ocurre en otras pantallas históricas, los datos en esta tabla no son modificables por parte del usuario. La segunda pantalla que ha sido actualizada será la de ***Registro extracontable de área<!-- Registrazioni extracontabili di area -->***, en la cual Fluentis habrá eliminado y recreado un registro por año que contiene el detalle mensual de las amortizaciones aplicadas, totalizando los valores por subcuenta<!-- sottoconto --> y centro.

## ELABORACIÓN DE DATOS CONTABLES<!-- ELABORAZIONE DATI CONTABILI -->
Es la elaboración que lee el consolidado<!-- consuntivo --> del ***Cierre interanual<!-- Chiusura infrannuale -->*** que hemos preparado, para mensualizar los datos y luego aplicar los diferentes drivers en el orden del ciclo. Los parámetros a ingresar son los habituales:

- el/la [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia
- el ***Cierre interanual<!-- Chiusura infrannuale -->*** a utilizar
- los eventuales ***Tiempos de balanceo<!-- Tempi di bilanciamento -->*** si se desean crear ajustes en las cuentas no utilizadas en controlling<!-- controlling -->
- la ***Fecha<!-- Data -->*** 
- el ***Año<!-- Anno -->*** de los datos a procesar
- la ***Causal<!-- Causale -->*** a utilizar

La selección del ***Cierre interanual<!-- Chiusura infrannuale -->***, en realidad, no es obligatoria: imagine que hemos importado desde una hoja de cálculo propia los datos del área presupuestaria<!-- area budget -->, donde, por tanto, tenemos las estimaciones de los saldos por subcuenta<!-- sottoconto --> y centro para el próximo año. Igualmente podremos calcular sobre estos registros extracontables de presupuesto<!-- budget --> nuestros drivers, que tal vez sean específicos para el área presupuestaria<!-- area budget -->, de modo que se mensualicen adecuadamente y luego comparar contra los resultados consolidados que provienen de contabilidad. En este caso, entonces, no se configurará el cierre interanual<!-- chiusura infrannuale --> porque serán los registros de presupuesto<!-- registrazioni di budget --> el origen de los datos a considerar.

Si, en cambio, estamos elaborando nuestros consolidados<!-- consuntivi --> de un cierre, se activará la posibilidad de que ***FluentisERP*** valore los registros automáticos de ajuste, indicando si gestionar los de las cuentas ***Interanuales<!-- Infrannuali -->*** o tanto estas como las ***Anuales<!-- Annuali -->***.

Se trata de reconciliar, con registros específicos, los datos de las subcuentas<!-- sottoconti --> configuradas para no ser utilizadas en controlling<!-- controlling -->, visibles en la cuadrícula inferior, respecto a los que se relevaron previamente con registros extracontables de área<!-- registrazioni extracontabili di area -->. 

:::tip Nota
Como ya se ha mencionado en otra parte de la documentación, las lógicas de ajuste pueden ser solo a nivel de valores manteniendo las proporciones de los centros ya registrados, o también la elisión del dato de controlling<!-- controlling --> con registros de anulación para llevar la valorización contable tanto de valor como de centro. Desde la cuadrícula inferior será posible, en caso necesario, forzar el tiempo y el tipo de balanceo a ejecutar, sobrescribiendo la lógica guardada al momento de la creación del cierre interanual<!-- chiusura infrannuale -->.
:::

Durante estas elaboraciones, ***FluentisERP*** también preparará una tabla mensualizada solo con los datos por proyecto/orden<!-- progetto/commessa -->, que será la base inicial para la elaboración del consolidado<!-- consuntivo -->. Si la elaboración de los datos contables gestiona todos los drivers de los tipos de distribución de 01 a 12, la elaboración del consolidado de proyecto aplicará los drivers específicos de proyecto/orden<!-- progetto/commessa -->.

## ELABORACIÓN DEL CONSOLIDADO DE PROYECTO<!-- ELABORAZIONE CONSUNTIVO DI PROGETTO -->
Este procedimiento leerá el histórico de los registros elaborados en el procedimiento anterior que están asociados a proyectos, leerá los datos de producción (es decir, trabajos internos y externos), en resumen, todos los costes e ingresos directos del proyecto<!-- progetto -->, para luego elaborar los drivers de los tipos de distribución de 13 a 18. Véanse las explicaciones disponibles en los ***Cost driver***. Los campos a configurar son:

- el/la [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) a elaborar
- el rango ***Desde fecha<!-- Da data -->*** y ***Hasta fecha<!-- A data -->***
- un ***Código<!-- Codice -->*** y una ***Descripción<!-- Descrizione -->*** de esta elaboración
- una ***Fecha<!-- Data -->*** a asignar a los registros creados
- el ***Año<!-- Anno -->*** de referencia para el cálculo
- la ***Causal<!-- Causale -->*** a utilizar para el registro