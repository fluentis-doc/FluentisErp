---
title: Parámetros para el cálculo de intereses de demora
sidebar_position: 3
ai_generated: true
---

En el formulario se muestra una lista de banderas de selección para los tipos de partidas<!-- partite --> para los cuales proceder con el cálculo de las tasas de interés<!-- tassi di interesse -->, mientras que más arriba hay un campo de filtro para códigos de cuenta<!-- conto -->/subcuenta<!-- sottoconto -->. Debajo de este campo se debe configurar el tipo de tasa por defecto a aplicar y las banderas que guían la lógica de cálculo:

**Calcular para las partidas cerradas en el periodo<!-- Calcola per le partite chiuse nel periodo -->**: el procedimiento verificará las partidas<!-- partite --> que se hayan cerrado dentro del rango de fechas establecido y solo para estas calculará el valor de los intereses, por lo tanto, para los pagos parciales no se contará ningún interés;

**Calcular para los pagos del periodo<!-- Calcola per i pagamenti del periodo -->**: el procedimiento identificará los pagos registrados dentro del rango de fechas y sobre estos importes calculará el valor de los intereses correspondientes: esta es la configuración recomendada.

Si no se ha seleccionado ninguna bandera, el cálculo se realizará sobre los intereses correspondientes a los días de retraso presentes en el rango de fechas establecido.

**Tipo de documento<!-- Tipo documento -->** y **tipo de pago<!-- tipo pagamento -->**: son filtros adicionales para identificar las partidas<!-- partite --> sobre las cuales ejecutar el cálculo de intereses.

El radio button siguiente permite definir el tipo de tasa a utilizar en el cálculo de intereses:

- calcular los intereses solo para los clientes que tengan una fecha de acuerdo registrada en el maestro de clientes;

- calcular los intereses a los clientes con un acuerdo según las configuraciones del maestro de clientes, y la tasa por defecto definida arriba para todos los demás;

- calcular los intereses para todos los clientes de acuerdo con la tasa de interés<!-- tasso d'interesse --> por defecto definida arriba.

Una última bandera, **Excluir efectos emitidos<!-- Escludi effetti emessi -->**, ya marcada de forma predeterminada, prevé la exclusión de los intereses de las partidas<!-- partite --> pagadas con efectos del módulo cartera de efectos<!-- portafoglio effetti -->: este ajuste sirve, en particular, para los tipos de tasa en los que se ha configurado el cálculo también a descuento, ya que el cierre de la partida del cliente<!-- partita cliente --> generalmente se detecta directamente al emitir la letra de cambio/banco.

El procedimiento de cálculo se inicia con el botón **Cálculo de intereses<!-- Calcolo interessi -->**, en la barra de herramientas.