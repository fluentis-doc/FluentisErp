---
title: Valores de control
sidebar_position: 3
ai_generated: true
---

Este formulario está destinado a albergar la conciliación entre los valores contables y los valores de controlling<!-- controlling -->, y resulta muy útil para llevar un registro de las atribuciones y reasignaciones realizadas, así como de los ajustes<!-- conguagli --> calculados por el sistema en relación con los métodos previstos para esta operación.

Antes de lanzar la búsqueda de datos será necesario configurar, en el encabezado de la pantalla, los siguientes campos:
- el ***Área*** de los datos a buscar, obligatoria
- la ***Dimensión*** de los datos a buscar, campo opcional
- el ***Año***, obligatorio
- el rango de ***Periodo desde*** y ***Periodo hasta***, opcional

Los datos están organizados en cinco pestañas distintas:

***Valores fuente a asignar:*** representa los movimientos contables<!-- movimenti contabili --> asociados al centro empresarial identificado por la marca *Cuentas a reasignar*<!-- Conti da riassegnare --> (específico para costos que la contabilidad general no puede atribuir directamente). La última columna *Importe* permite verificar que todas las asignaciones se hayan cerrado correctamente, sin dejar datos abiertos.

***Valores fuente asignados:*** similar en estructura al anterior, resalta los datos efectivamente asignados desde el centro empresarial destinado a los costos a reasignar y los centros receptores. También aquí, la última columna *Importe* permite verificar que todas las asignaciones se hayan cerrado correctamente, sin dejar datos abiertos.

**Valores revertidos<!-- Valori revertiti -->:** resalta las reasignaciones<!-- ribaltamenti --> entre centros gestionadas por los cost driver. El dato se representa agrupando para cada cost driver que ha gestionado los centros empresariales y para cada centro, el movimiento relacionado con la cuenta contable<!-- conto contabile --> que ha sido reasignada<!-- ribaltato -->. También aquí, la última columna *Diferencia* permite verificar que todas las reasignaciones<!-- ribaltamenti --> se hayan cerrado correctamente, sin dejar datos abiertos a nivel de *cost driver*.

**Valores por proyecto<!-- Valori commessa -->:** En esta pestaña se resaltan las reasignaciones<!-- ribaltamenti --> de la dimensión Proyectos/Comisiones<!-- Progetti/Commesse -->, realizadas siempre mediante cost driver.

**Valores de ajuste<!-- Valori di conguaglio -->:** en la última pestaña se evidencian las diferencias entre el dato contable y el dato de controlling<!-- controlling -->, agrupando las cuentas según la configuración del *Grupo de ajuste<!-- Gruppo di conguaglio -->* al que pertenecen, insertado en el plan de cuentas. La presencia de valores en la columna *Diferencia* sobre grupos de cuentas que no prevén una gestión extracontable separada y anticipada respecto al dato contable<!-- dato contabile --> será indicio de alguna asignación de valores a nivel de registros extracontables de área, lo cual requerirá un análisis adicional para entender su origen y, en su caso, adaptar el modelo de análisis.

:::tip Ejemplo<!-- Esempio -->
Esta última pestaña es importante para verificar, en particular, aquellas cuentas (por ejemplo, los emolumentos del consejo de vigilancia) que la contabilidad registra de manera posterior y que, por lo tanto, están sujetas a una contabilización provisional extracontable en controlling<!-- controlling -->, con el objetivo de controlar el ajuste<!-- conguaglio --> intraanual/anual en el procedimiento de **Procesamiento de periodos<!-- Elaborazione periodi -->** donde está disponible, en la sección *Procesamiento de datos contables<!-- Elaborazione dati contabili -->*, el campo **Tiempos de balanceo<!-- Tempi di bilanciamento -->** que permite seleccionar la lógica *Intraanual<!-- Infrannuale -->* o bien *Anual<!-- Annuale -->*.
:::