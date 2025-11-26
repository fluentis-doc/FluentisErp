---  
title: Cálculo del valor de capital invertido en los buffers  
sidebar_position: 4  
ai_generated: true  
---

Este procedimiento calcula el capital promedio invertido en un artículo gestionado en inventario<!-- a scorta --> según la lógica Ddmrp (buffer<!-- buffer -->).

Este cálculo se realiza multiplicando el valor del stock<!-- giacenza --> medio del buffer (zona roja + zona verde/2) por el costo unitario del artículo en buffer<!-- buffer -->.

Es muy importante tener en cuenta que el cálculo del costo unitario considera solo el costo de los materiales de compra o de los trabajos externos<!-- lavorazioni esterne --> (costos directos y variables), no otros costos indirectos (costo de la mano de obra, amortización de maquinaria, etc.).

El objetivo principal de este procedimiento es verificar si la decisión de introducir o eliminar un buffer<!-- buffer --> conduce a una disminución del valor total del capital invertido.

Si, como resultado de una elección, el valor total del capital invertido disminuye, dicha elección debe considerarse válida, de lo contrario probablemente deba evitarse.

Si un artículo en buffer<!-- articolo a buffer --> tiene un listado de materiales<!-- distinta base -->, en este existe una rama que llega hasta los productos de compra, que representa la cadena de componentes críticos, es decir, aquella cadena que determina el valor del lead time desacoplado (DLT) del buffer padre<!-- buffer padre -->.

Normalmente, al convertir en buffer uno de estos artículos, disminuye el valor DLT del buffer padre y, en consecuencia, disminuye su stock<!-- giacenza --> medio, mientras que se introduce un nuevo inventario<!-- giacenza --> para el nuevo buffer.

Puesto que cuanto más alto se va en el nivel del listado de materiales<!-- distinta base -->, mayor es el costo unitario, normalmente esta acción conduce a una reducción de la suma del valor del capital total invertido de buffer padre y buffer hijo.

Para confirmar o refutar lo mencionado, se debe ejecutar este procedimiento.

Para este cálculo se utilizan solo los costos directos, ya que el método tradicional de calcular el costo total unitario distribuyendo costes indirectos mediante drivers de costo se considera inadecuado y engañoso para la toma de decisiones.

Dicho costo total unitario sólo tiene valor para la valoración de inventario<!-- valorizzazioni di magazzino --> para el ejercicio anterior, para cumplir con las obligaciones legales contables (según los GAAP, Generally Accepted Accounting Principles, válidos en todo el mundo). De hecho, solo a posteriori se conocen exactamente los volúmenes producidos y por ello se puede realizar un cálculo suficientemente fiable del costo unitario.

Para las mercancías compradas se considerará lo presente en los campos de costo de la ficha del artículo<!-- anagrafica articolo --> (costo último, promedio, estándar, según la elección del usuario al momento de ejecutar el procedimiento).

En caso de artículos de subcontratación<!-- conto lavoro --> el costo de la producción (costo último, promedio, estándar, según la elección del usuario al lanzar el procedimiento) se calcula restando al costo del artículo la suma de los costos de sus componentes del listado de materiales<!-- distinta base -->.

Observar que los valores calculados se basan en las dimensiones de las zonas roja y verde de cada buffer, leídas de la tabla de parámetros Ddmrp.

Si al momento de ejecutar el procedimiento existen excepciones en el Demand Adjustment Factor o en las zonas y se ha realizado el procedimiento de actualización de zonas, los valores de la valorización del capital circulante los tendrán en cuenta, por lo que para el mismo artículo<!-- articolo --> se obtendrán valores diferentes en diferentes momentos de cálculo.