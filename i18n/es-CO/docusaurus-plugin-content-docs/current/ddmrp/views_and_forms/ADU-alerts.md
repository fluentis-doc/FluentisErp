---
title: Alarmas de consumo medio diario (Allarmi consumo medio giornaliero)
sidebar_position: 7
---

Este reporte permite verificar si el consumo medio diario (ADU) de algún artículo ha variado en exceso durante un determinado periodo de tiempo.

Existe un procedimiento cuya ejecución debe programarse automáticamente, que analiza todos los buffers Ddmrp en todas las unidades logísticas y almacena en una tabla específica solo aquellos cuya variación porcentual del ADU resulta ser superior al límite impuesto.

En los parámetros generales de Ddmrp se establece el umbral máximo de variación porcentual que no genera alarma, y el número de días en el pasado en los que se debe realizar el análisis (que siempre se concluye el día antes del cálculo).

A través de este formulario se pueden realizar análisis con valores porcentuales diferentes y por periodos de tiempo a elección del usuario.

El reporte destacará solo los artículos cuyo consumo medio diario ha sufrido una variación (tanto en defecto como en exceso) porcentual superior al límite establecido para el análisis, en el periodo de tiempo indicado por el usuario.

El análisis se lleva a cabo sobre los valores historizados de los parámetros Ddmrp, tanto para el procedimiento automatizado como para este formulario.