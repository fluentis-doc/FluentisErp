---
title: Alarmas de consumo medio diario
sidebar_position: 7
ai_generated: true
---

Este informe permite verificar si el consumo medio diario (ADU<!-- ADU -->) de algún artículo ha variado excesivamente durante un determinado periodo de tiempo.

Existe un procedimiento cuya ejecución debe ser programada automáticamente, el cual analiza todos los buffer<!-- buffer --> Ddmrp<!-- Ddmrp --> en todas las unidades logísticas<!-- unità logistiche --> y almacena en una tabla específica solo aquellos cuya variación porcentual del ADU<!-- ADU --> supera el límite establecido.

En los parámetros generales de Ddmrp<!-- Ddmrp -->, se define el umbral máximo de variación porcentual que no genera alarma, y el número de días en el pasado en los que se debe ejecutar el análisis (que siempre termina el día anterior al cálculo).

A través de este formulario es posible realizar análisis con valores porcentuales distintos y por periodos de tiempo a elección del usuario.

El informe destacará solo los artículos cuyo consumo medio diario ha tenido una variación porcentual (ya sea a la baja o al alza) superior al límite establecido para el análisis, en el periodo de tiempo indicado por el usuario.

El análisis se ejecuta sobre los valores historizados de los parámetros Ddmrp<!-- Ddmrp -->, tanto para el procedimiento automatizado como para este formulario.