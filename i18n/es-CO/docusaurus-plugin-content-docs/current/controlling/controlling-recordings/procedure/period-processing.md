---
title: elaborazione periodi
sidebar_position: 3
---

El procedimiento de **elaborazione periodi*** es el principal en los procesos de controlling. Esta máscara también se divide en 4 procedimientos diferentes: la elaboración de los movimientos físicos, el cálculo de las amortizaciones, la verdadera elaboración de períodos y, por último, la elaboración del informe final del proyecto.

## ELABORACIÓN DE MOVIMIENTOS FÍSICOS (ELABORAZIONE MOVIMENTI FISICI)
El primer procedimiento solo lee las **registrazioni movimenti fisici*** para crear la base de datos del ***Histórico de movimientos físicos (Storico movimenti fisici)***, leyendo las cantidades de las unidades de medida de estado (como, por ejemplo, los metros cuadrados de las oficinas) para replicarlas en los diversos períodos en lugar de tomar las de flujo para dividirlas según los criterios de los períodos de distribución asociados. Solo debemos establecer:
- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) 
- el **anno***

## HISTÓRICO DE AMORTIZACIONES (STORICO AMMORTAMENTI)
Desde esta sección se lleva a cabo la elaboración de las amortizaciones del controlling. Debemos configurar:  
- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) a la cual asignar los valores  
- el **anno*** a elaborar  
- el campo **fino a periodo***, es decir, el periodo final del año a elaborar, que típicamente corresponderá al periodo final de nuestro informe elaborado en el cierre interanual  
- por último, tenemos el **anno iniziale per ricalcolo storico***. Este campo es útil en caso de que se hayan modificado configuraciones del controlling en los activos ya elaborados.

:::tip Ejemplo
Supongamos que tenemos un activo adquirido en 2015, para amortizar en el controlling a una tasa del 15%, y por lo tanto en poco más de 6 años y medio, si nuestro primer cálculo de controlling es en 2022, ***FluentisERP***, en la primera elaboración, deberá calcular las amortizaciones desde 2015 en adelante para entender si en 2022 hay un remanente por elaborar, probablemente no, dado que 2022 es 7 años después (digo probablemente porque el cálculo del controlling se gestiona mes a mes, si el activo se compró en diciembre de 2015, entonces probablemente cerraremos la amortización en los primeros meses de 2022). Si por alguna razón, después de una primera elaboración, quisiese reducir la amortización al 10%, entonces ¿qué debe hacer ***FluentisERP*** cuando calcula 2022, mantener el dato de partida al 15% ya elaborado y, por lo tanto, continuar sin calcular nada, o debe reiniciar los valores históricos para reelaborarlos con las configuraciones actuales? Si establecemos el año de inicio a reconsiderar, significa que todos los activos que tienen el indicador de actualización de valores históricos, ***FluentisERP*** recalculará los datos históricos a partir de aquello establecido.
:::

Una vez completada la elaboración, ***FluentisERP*** habrá valorado los datos de dos máscaras: la primera es la del **storico ammortamenti***, donde tendremos visibilidad del detalle por área, activo, año y mes de los datos elaborados sobre cada activo. Como en las otras máscaras históricas, los datos de esta tabla no son modificables por el usuario. La segunda máscara que se ha valorado será la de **registrazioni extracontabili di area***, en la que Fluentis habrá eliminado y recreado un registro por año que contiene el detalle mensual de las amortizaciones aplicadas, totalizando los valores por subcuenta y centro.

## ELABORACIÓN DE DATOS CONTABLES (ELABORAZIONE DATI CONTABILI)
Es la elaboración que lee el informe final del **chiusura infrannuale*** que hemos preparado para mensibilizar los datos y luego aplicar los diversos drivers en el orden de ciclo. Los parámetros a ingresar son los habituales:
- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia 
- el ***Cierre interanual*** a utilizar 
- los eventuales **tempi di bilanciamento*** si se quieren crear los ajustes sobre las cuentas que no se utilizarán en el controlling 
- la **data*** 
- el **anno*** de los datos a elaborar 
- la **causale*** a utilizar

La elección del **chiusura infrannuale***, en realidad, no es obligatoria: imaginemos que hemos importado desde una hoja de cálculo que hemos preparado externamente los datos del área de presupuesto, donde, por lo tanto, tenemos las estimaciones de los saldos para subcuenta y centro del próximo año. Aún podremos calcular sobre estos registros extracontables de presupuesto nuestros drivers, que serán quizás específicos para el área de presupuesto, para mensibilizarlos adecuadamente y luego compararlos con los informes finales que nos llegan de la contabilidad: en este caso, por lo tanto, no configuraremos el cierre interanual porque serán los registros presupuestarios la fuente de datos a considerar.

Si, en cambio, estamos elaborando nuestros informes finales de un cierre, se activará la posibilidad de dejar que ***FluentisERP*** valore los registros automáticos de ajuste, configurando si gestionar los de las cuentas ***Interanuales (Infrannuali)*** o tanto de estas como de las ***Anuales (Annuali)***.

Se trata de reconducir, con registros apropiados, los datos de las subcuentas configuradas como no utilizables en el controlling, visibles en la cuadrícula en la parte inferior, en comparación con aquellos registrados anticipadamente con registros extracontables de área.

:::tip Nota
Como ya se mencionó en otro punto de la documentación, las lógicas de ajuste podrían ser solo a nivel de valores manteniendo las proporciones de los centros ya registrados, o bien eliminando el dato del controlling con registros de contrapartida para reflejar la valoración contable tanto de valor como de centro. Desde la cuadrícula en la parte inferior, será posible, eventualmente, forzar el tiempo y el tipo de compensación a ejecutar, sobrescribiendo la lógica memorizada en el momento de la creación del cierre interanual.
:::

Durante estas elaboraciones, ***FluentisERP*** también preparará una tabla mensualizada con los únicos datos de proyecto/orden, que será la base de partida para la elaboración del informe final. Si la elaboración de datos contables gestionará todos los drivers de los tipos de distribución de 01 a 12, de hecho, la elaboración del informe final del proyecto aplicará los drivers específicos de proyecto/orden.

## ELABORACIÓN DEL INFORME FINAL DEL PROYECTO (ELABORAZIONE CONSUNTIVO DI PROGETTO)
Este procedimiento leerá el histórico de los registros elaborados en el procedimiento anterior que están relacionados con proyectos, leerá los datos de producción (es decir, trabajos internos y externos), en esencia, todos los costos y ingresos directos del proyecto, para luego elaborar los drivers de los tipos de distribución de 13 a 18. Consulte las explicaciones disponibles en los ***Cost driver***. Los campos a configurar son:

- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) a elaborar
- el rango **da data*** y **a data***
- un **codice*** y una **descrizione*** de esta elaboración
- una **data*** para asignar a los registros creados
- el **anno*** de referencia del cálculo
- la **causale*** a utilizar para el registro