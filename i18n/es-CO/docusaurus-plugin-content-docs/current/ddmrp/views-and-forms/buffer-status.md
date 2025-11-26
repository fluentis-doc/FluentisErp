---
title: Estado de los buffers
sidebar_position: 1
ai_generated: true
---

Este informe muestra el estado del nivel de stock<!-- giacenza --> de un buffer<!-- buffer -->.

Dado un buffer<!-- buffer --> (existencia<!-- scorta --> en un determinado almacén<!-- magazzino -->), se analiza el stock<!-- giacenza --> actual y el futuro en un periodo de tiempo comparable al DLT del artículo.

Se muestran filas en varias fechas a partir de hoy, y para cada una se indica el valor del stock<!-- giacenza --> (valor efectivo) y el valor porcentual del stock<!-- giacenza --> considerado respecto a la zona roja del artículo.

Se utiliza un sistema de colores para llamar la atención sobre el nivel de criticidad del stock<!-- giacenza -->.

Si el stock<!-- giacenza --> es menor que 0 se usa el color rojo oscuro (situación altamente crítica con ruptura de stock<!-- rottura di stock --> y demanda que no puede ser atendida), si está entre 0 y el 50% de la zona roja se usa el color rojo (situación crítica con riesgo de ruptura de stock<!-- rottura di stock -->), si está entre el 50% y el 100% de la zona roja se usa el color amarillo (situación no crítica pero a monitorear), si es superior al 100% se usa el color verde (situación sin criticidad).

Note que un stock<!-- giacenza --> negativo indica falta de existencia<!-- scorta --> en presencia de demanda que no es posible satisfacer (por lo tanto habrá retrasos e interrupción del flujo de materiales), un stock<!-- giacenza --> nulo indica falta de existencia<!-- scorta --> pero sin demanda que satisfacer, por lo que es una condición que de momento no genera retrasos ni interrupción del flujo de materiales pero que potencialmente podría convertirse en crítica si surge una demanda antes de tener tiempo de reabastecer el buffer<!-- buffer -->.

Este informe no solo pone de manifiesto las posibles criticidades inmediatas, sino que también se realiza un análisis sobre el periodo de tiempo futuro necesario para reabastecer el buffer<!-- buffer -->; de hecho, las filas con fechas futuras se refieren a previsiones del valor del stock<!-- giacenza --> considerando la demanda ya conocida, para señalar anticipadamente posibles situaciones críticas (aquellas con color rojo o rojo oscuro), de modo que se pueda actuar por adelantado antes de que la situación se vuelva crítica.