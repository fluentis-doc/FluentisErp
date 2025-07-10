---
title: Estado de los buffers (Stato dei buffer)
sidebar_position: 1
---
Este informe muestra el estado del nivel de inventario de un buffer.

Dado un buffer (stock en un determinado almacén), se analiza la existencias actuales y futuras en un periodo de tiempo comparable al DLT del artículo.

Se muestran líneas en varias fechas a partir de hoy, y para cada una se indica el valor de la existencia (valor efectivo) y el valor porcentual de la existencia considerado en relación con la zona roja del artículo.

Se utiliza un sistema de colores para llamar la atención sobre el nivel de criticidad de las existencias.

Si la existencia es menor a 0, se usa el rojo oscuro (situación altamente crítica con ruptura de stock y demanda que no puede satisfacerse); si está entre 0 y el 50% de la zona roja, se usa el color rojo (situación crítica con riesgo de ruptura de stock); si está entre el 50% y el 100% de la zona roja, se usa el color amarillo (situación no crítica que debe monitorearse); si es superior al 100%, se usa el color verde (situación libre de criticidad).

Cabe destacar que una existencia negativa indica falta de stock en presencia de una demanda que no puede satisfacerse (por lo tanto, habrá retrasos e interrupción del flujo de materiales), una existencia nula indica falta de stock pero sin demanda que satisfacer, por lo tanto, es una condición que en este momento no genera retrasos ni interrupción del flujo de materiales, pero que potencialmente puede volverse crítica si se manifiesta una demanda antes de tener tiempo para reabastecer el buffer.

Este informe no solo destaca las posibles críticas inmediatas, sino que también se realiza un análisis sobre el periodo de tiempo futuro necesario para reabastecer el buffer; de hecho, las líneas con fechas en el futuro se refieren a pronósticos del valor de la existencia considerando la demanda ya conocida en ese momento, con el fin de resaltar por adelantado posibles situaciones críticas (aquellas con color rojo o rojo oscuro), permitiendo actuar antes de que la situación se vuelva crítica.