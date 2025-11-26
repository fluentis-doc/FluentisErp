---
title: Rectificación zona verde
sidebar_position: 8
ai_generated: true
---

El valor de la zona verde<!-- zona verde --> se calcula automáticamente mediante el procedimiento de actualización de zonas en base al valor de los parámetros DDMRP del artículo<!-- articolo -->.

A través de esta tabla es posible forzar un valor diferente en fechas especificadas.

El sistema de planificación tiene en cuenta los eventuales valores de rectificación de las zonas<!-- valori di rettifica delle zone --> en el cálculo NFP, incluso si el procedimiento de actualización de zonas<!-- procedura aggiornamento zone --> no se ha ejecutado.

Típicamente, se puede imponer un valor diferente al cálculo normal por un periodo de tiempo limitado, para alterar la dimensión de los pedidos emitidos.

Si el valor de la zona verde<!-- zona verde --> se incrementa, se emitirán pedidos más grandes y se ordenará con menos frecuencia; si se disminuye, ocurre exactamente lo contrario.

Un ejemplo típico se refiere a recursos productivos con tiempos de preparación no despreciables.

Si el ciclo productivo de un artículo en stock<!-- articolo a scorta --> prevé un procesamiento en un recurso con tiempos de preparación no despreciables y, si el propio recurso es un cuello de botella, es decir, un recurso con una carga de trabajo muy cercana a su capacidad productiva, se intenta reducir el tiempo de inactividad del recurso debido al setup aumentando el tamaño de los lotes de producción, lo cual se logra indicando una cantidad mínima ordenable en los parámetros DDMRP del artículo<!-- parametri Ddmrp dell'articolo --> que, en consecuencia, determina el tamaño de la zona verde<!-- zona verde --> del mismo.

Si esta necesidad se presenta solo en un período de tiempo determinado, entonces en lugar de establecer una cantidad mínima ordenable, se inserta una excepción para la zona verde<!-- eccezione della zona verde --> en ese período de tiempo.

Esto, por ejemplo, ocurre con productos de alta estacionalidad, donde en el período previo al pico de demanda estacional se crea un stock adecuado mediante un incremento temporal de la zona verde<!-- zona verde -->, incrementando en consecuencia la productividad del recurso saturado; posteriormente, el recurso tendrá menos carga, por lo tanto no estará saturado, es decir, con capacidad productiva excedente, así que se realizarán más producciones de pedidos pequeños, privilegiando la flexibilidad del sistema productivo<!-- sistema produttivo -->.

Los mayores tiempos totales de setup en este período no representan un problema porque el recurso no está completamente ocupado y, por lo tanto, hay tiempo del recurso sin utilizar disponible.