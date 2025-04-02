---
title: valori di controllo
sidebar_position: 3
---

Este formulario está destinado a alojar la reconciliación entre los valores contables y los valores de controlling y resulta muy útil para llevar un registro de las asignaciones y reasignaciones realizadas, así como de los ajustes calculados por el sistema en relación con los métodos previstos para esta operación.

Antes de lanzar la búsqueda de datos, será necesario establecer en la cabecera del formulario los siguientes campos:  
- el **area*** de los datos a buscar, obligatorio  
- la **dimensione*** de los datos a buscar, campo opcional  
- el **anno***, obligatorio  
- el rango del **periodo da*** y **periodo a***, opcional  

Los datos están organizados en cinco pestañas distintas:

***Valores fuente a atribuir (Valori sorgenti da attribuire):*** representa los movimientos contables asociados al centro empresarial caracterizado por el indicador *conti da riassegnare* (específico para costos que la contabilidad general no puede atribuir directamente). La última columna *importo* permite verificar que todas las asignaciones se hayan cerrado correctamente, sin dejar datos abiertos.

***Valores fuente atribuidos (Valori sorgenti attribuiti):*** similar en estructura al anterior, resalta los datos efectivamente atribuidos por el centro empresarial destinado a los costos a reasignar y los centros receptores. También aquí, la última columna *importo* permite verificar que todas las asignaciones se hayan cerrado correctamente, sin dejar datos abiertos.

**Valores revertidos (Valori revertiti):** destaca las reasignaciones entre centros gestionadas por los cost drivers. El dato se presenta agrupando por cada Cost driver que ha gestionado los centros empresariales y por cada centro el movimiento relacionado con la cuenta contable que ha sido reasignada. Nuevamente, la última columna *differenza* permite verificar que todas las reasignaciones se hayan cerrado correctamente, sin dejar datos abiertos a nivel de *Cost driver*.

**Valores de proyecto (Valori commessa):** En esta pestaña se destacan las reasignaciones de la dimensión Proyectos/Commissions, realizadas siempre a través de cost drivers.

**Valores de ajuste (Valori di conguaglio):** en la última pestaña se destacan las diferencias entre el dato contable y el dato de controlling, agrupando las cuentas según la configuración del *Grupo de ajuste (Gruppo di conguaglio)* al que pertenecen en el plan de cuentas. La presencia de valores en la columna *differenza* sobre grupos de cuentas que no prevén una gestión extracontable separada anticipada respecto al dato contable, será un indicativo de alguna asignación de valores a nivel de registros extracontables de área, que requerirá una profundización para entender su origen y, eventualmente, adaptar el modelo de análisis.

:::tip Ejemplo
Esta última pestaña es importante para verificar, en particular, aquellas cuentas (por ejemplo, los honorarios del colegio de auditores) que la contabilidad registra con posterioridad y que, por lo tanto, están sujetas a una recolección previsional extracontable en el controlling, con el fin de controlar su ajuste interanual/anual en el procedimiento de **elaborazione periodi** donde está presente, en la sección *elaborazione dati contabili*, el campo **tempi di bilanciamento**, que permite seleccionar la lógica *infrannuale* en lugar de *annuale*.
:::