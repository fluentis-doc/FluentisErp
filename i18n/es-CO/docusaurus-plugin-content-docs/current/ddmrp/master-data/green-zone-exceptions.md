---
title: Rectificación de zona verde (Rettifica zona verde)
sidebar_position: 8
---

El valor de la zona verde se calcula automáticamente por el procedimiento de actualización de zonas en función del valor de los parámetros DDMRP del artículo.

A través de esta tabla, es posible forzar un valor diferente en fechas específicas.

El sistema de planificación considera posibles valores de rectificación de las zonas en el cálculo de NFP, incluso si no se ha ejecutado el procedimiento de actualización de zonas.

Típicamente, se puede imponer un valor diferente al cálculo normal por un período de tiempo limitado, para alterar el tamaño de los pedidos emitidos.

Si el valor de la zona verde se incrementa, se emitirán pedidos más grandes y se ordenará con menos frecuencia; si se disminuye, ocurre exactamente lo contrario.

Un ejemplo típico se refiere a recursos productivos con tiempos de configuración que no son despreciables.

Si el ciclo productivo de un artículo en inventario implica un procesamiento en un recurso con tiempos de preparación no despreciables y si el propio recurso es un cuello de botella, es decir, un recurso con una carga de trabajo muy cercana a su capacidad de producción, se busca reducir el tiempo de inactividad del recurso debido a la preparación aumentando el tamaño de los lotes de producción, lo que se logra indicando una cantidad mínima ordenable en los parámetros DDMRP del artículo, que a su vez determina el tamaño de la zona verde del mismo.

Si esta necesidad solo se presenta en un período específico, en lugar de establecer una cantidad mínima ordenable, se introduce una excepción de la zona verde para dicho período de tiempo.

Esto, por ejemplo, sucede con productos de alta estacionalidad, donde en el período previo al pico de demanda estacional se crea un stock adecuado a través de un incremento temporal de la zona verde, incrementando así la productividad del recurso saturado; posteriormente, el recurso estará menos cargado, por lo que no estará saturado, es decir, con capacidad productiva excedente, por lo tanto, se realizarán más producciones de pedidos pequeños priorizando la flexibilidad del sistema de producción.

Los mayores tiempos totales de configuración en este período no son un problema porque el recurso no está completamente cargado y, por lo tanto, hay tiempo de recurso no utilizado disponible.