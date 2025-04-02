---
title: Cálculo del valor del capital invertido en los buffers (Calcolo valore capitale investito nei buffer)
sidebar_position: 4
---

Este procedimiento calcula el capital promedio invertido en un artículo gestionado en inventario según la lógica Ddmrp (buffer).

Este cálculo se realiza multiplicando el valor del stock promedio del buffer (zona roja + zona verde/2) por el costo unitario del artículo en buffer.

Es muy importante tener en cuenta que el cálculo del costo unitario considera solo el costo de los materiales de compra o de trabajos externos (costos directos y variables), no otros costos indirectos (costo de mano de obra, de depreciación de maquinaria, etc.).

El objetivo principal de este procedimiento es verificar si la decisión de introducir o eliminar un buffer lleva a una disminución del valor total del capital invertido.

Si, tras una decisión, el valor total del capital invertido disminuye, esta debe considerarse una decisión válida; de lo contrario, probablemente debe evitarse.

Si un artículo en buffer tiene una lista de materiales, existe una rama que llega hasta los productos de compra, que representa la cadena de componentes críticos, es decir, aquella cadena que determina el valor del lead time desacoplado (DLT) del buffer padre.

Normalmente, hacer que un buffer sea uno de dichos artículos disminuye el valor DLT del buffer padre y, por lo tanto, disminuye el stock promedio del mismo, mientras que se introduce un nuevo stock para el nuevo buffer.

Dado que cuanto más se asciende en la lista de materiales, mayor es el costo unitario, normalmente esta acción lleva a una disminución de la suma del valor total del capital invertido del buffer padre y del buffer hijo.

Para tener confirmación o refutación de lo previamente afirmado, es necesario ejecutar este procedimiento.

Para este cálculo se utilizan solo los costos directos, ya que el cálculo tradicional del costo completo unitario con distribución de costos indirectos mediante drivers de costo se considera inadecuado y engañoso para tomar decisiones.

Este costo completo unitario tiene valor solo para las valorizaciones de inventario del ejercicio anterior para cumplir con obligaciones legales contables (según GAAP, es decir, Generally Accepted Accounting Principles, válidas en todo el mundo), de hecho, solo al cierre del ejercicio se conocen con exactitud los volúmenes producidos y, por lo tanto, se puede realizar un cálculo suficientemente confiable del costo unitario.

Para las mercancías compradas, se considerará lo presente en los campos del costo de la ficha del artículo (costo último, medio, estándar, según la elección del usuario al momento de iniciar el procedimiento).

En el caso de artículos de trabajo por encargo, el costo del procesamiento (costo último, medio, estándar, según la elección del usuario al momento de iniciar el procedimiento) se deduce restando del costo del artículo la suma de los costos de sus componentes de la lista de materiales.

Cabe mencionar que los valores calculados se basan en las dimensiones de las zonas roja y verde de cada buffer leídas de la tabla de parámetros de Ddmrp.

Si en el momento de iniciar el procedimiento existen excepciones en el *Demand Adjustment Factor* o en las zonas y se ha ejecutado el procedimiento de actualización de las zonas, los valores de las valorizaciones del capital circulante tendrán en cuenta esto, por lo tanto, para el mismo artículo se obtendrán valores diferentes en momentos diferentes de cálculo.