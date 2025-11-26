---
title: Perfiles de buffer
sidebar_position: 4
ai_generated: true
---

Un perfil de buffer<!-- profilo di buffer --> define características comunes a muchos artículos con buffer<!-- articoli a buffer -->.

De esta manera, se puede asociar a cada artículo con buffer su perfil y hacer más simple y rápida la modificación de los parámetros relacionados: de hecho, al realizar una modificación en un perfil, esta se aplicará automáticamente a todos los artículos que estén asociados a él.

Un perfil se identifica por la combinación de tres parámetros:

1. **tipo de parte<!-- tipo parte -->**

   - M = manufactura, es decir, parte producida en fábrica (producto terminado o semielaborado)
   - I = intermedia, es decir, parte semielaborada producida en fábrica (esta distinción respecto a la M es opcional)
   - P = compra, parte comprada
   - D = distribuida, parte almacenada en un centro de distribución (en este caso el registro no puede tener el campo magazzino<!-- magazzino --> vacío)

2. **categoría de lead time<!-- categoria di lead time -->**

   Comparando entre sí artículos con el mismo tipo de parte, se pueden definir un valor inferior y uno superior del lead time que permiten agrupar los artículos en tres grupos con un coeficiente asociado entre 0 y 1.

   - S = artículos de lead time corto<!-- short lead time items -->, artículos con tiempo de aprovisionamiento corto (coeficiente entre 0.61 y 1)
   - M = artículos de lead time medio<!-- mid lead time items -->, artículos con tiempo de aprovisionamiento medio (coeficiente entre 0.41 y 0.6)
   - L = artículos de lead time largo<!-- long lead time items -->, artículos con tiempo de aprovisionamiento largo (coeficiente entre 0 y 0.4)

   El valor del coeficiente es inversamente proporcional al tiempo de aprovisionamiento, ya que para artículos con un periodo largo es preferible tener más órdenes de menor tamaño que pocas órdenes de gran tamaño, para reducir el riesgo derivado de problemas en la entrega.

3. **categoría de variabilidad<!-- categoria di variabiltà -->**

   Comparando entre sí artículos con el mismo tipo de parte, y analizando la variabilidad tanto en la demanda como en la provisión, se decide si un buffer se caracteriza por baja, media o alta variabilidad.
   
   Se trata de un análisis más complejo que el del lead time porque tiene que considerar la variabilidad de la demanda (por ejemplo, verificando la dispersión estadística de los valores de demanda durante un periodo significativo), la variabilidad del lado de la provisión (por ejemplo, considerando la dispersión estadística de los retrasos en la provisión), y tener en cuenta si como hijos de la lista de materiales o como padres hay otros buffer<!-- buffer -->, que por su naturaleza reducen la variabilidad.

   Se consideran tres niveles de variabilidad asociados a un coeficiente entre 0 y 1 como sigue:

   - L = baja variabilidad<!-- low variability o bassa variabilità --> (coeficiente entre 0 y 0.4)
   - M = variabilidad media<!-- mid variability o media variabilità --> (coeficiente entre 0.41 y 0.6)
   - H = alta variabilidad<!-- high variability o alta variabilità --> (coeficiente entre 0.61 y 1)

   Cuanto mayor es la variabilidad, mayor debe ser el nivel de stock de seguridad del buffer (zona roja), que resulta ser proporcional al coeficiente de variabilidad.