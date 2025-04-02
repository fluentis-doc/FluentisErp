---
title: Perfiles de buffer (Profili di buffer)
sidebar_position: 4
---

Un perfil de buffer define características comunes a muchos artículos de buffer.

De esta manera, se puede asociar a cada artículo de buffer su perfil y hacer que la modificación de los parámetros relacionados sea más sencilla y rápida; de hecho, al realizar un cambio en un perfil, este se aplicará automáticamente a todos los artículos que estén asociados a él.

Un perfil se identifica por la combinación de tres parámetros:

1. **tipo de parte (tipo parte)**

   - M = fabricación (manufacturing), es decir, parte producida en fábrica (producto terminado o semiterminado)
   - I = intermedio (intermediate), es decir, parte semiterminado producida en fábrica (esta distinción respecto a la M es opcional)
   - P = compra (purchase), parte comprada
   - D = distribuido (distributed), parte almacenada en un centro de distribución (en este caso, el registro no puede tener el campo de almacén vacío)

2. **categoría de tiempo de entrega (categoria di lead time)**

   Al comparar entre sí artículos con el mismo tipo de parte, se pueden definir un valor inferior y uno superior del tiempo de entrega que permiten agrupar los artículos en tres grupos con un coeficiente asociado comprendido entre 0 y 1.

   - S = artículos de tiempo de entrega corto (short lead time items), artículos con tiempo de aprovisionamiento corto (coeficiente entre 0.61 y 1)
   - M = artículos de tiempo de entrega medio (mid lead time items), artículos con tiempo de aprovisionamiento medio (coeficiente entre 0.41 y 0.6)
   - L = artículos de tiempo de entrega largo (long lead time items), artículos con tiempo de aprovisionamiento largo (coeficiente entre 0 y 0.4)

   El valor del coeficiente es inversamente proporcional al tiempo de aprovisionamiento, ya que para artículos con un período largo es preferible tener más pedidos de menor dimensión que pocos pedidos de gran tamaño, con el fin de reducir el riesgo derivado de problemas de entrega.

3. **categoría de variabilidad (categoria di variabiltà)**

   Al comparar entre sí artículos con el mismo tipo de parte, analizando la variabilidad del lado de la demanda y del lado del suministro, se decide si un buffer está caracterizado por baja, media o alta variabilidad.
   
   Se trata de un análisis más complejo que el del tiempo de entrega, ya que debe tener en cuenta la variabilidad de la demanda (por ejemplo, verificando la dispersión estadística de los valores de la demanda en un periodo de tiempo significativo), la variabilidad del lado del suministro (por ejemplo, considerando la dispersión estadística de los retrasos en el suministro), y teniendo en cuenta si como hijos de lista (distinta) o como padres están presentes otros buffers, que por su naturaleza reducen la variabilidad.

   Se consideran tres niveles de variabilidad asociados a un coeficiente comprendido entre 0 y 1 de la siguiente manera:

   - L = baja variabilidad (low variability) (coeficiente comprendido entre 0 y 0.4)
   - M = variabilidad media (mid variability) (coeficiente comprendido entre 0.41 y 0.6)
   - H = alta variabilidad (high variability) (coeficiente comprendido entre 0.61 y 1)

   Cuanto más alta es la variabilidad, mayor debe ser el nivel de inventario de seguridad del buffer (zona roja), que es proporcional al coeficiente de variabilidad.