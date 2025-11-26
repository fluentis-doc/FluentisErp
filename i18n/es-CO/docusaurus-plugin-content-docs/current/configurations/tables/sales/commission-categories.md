---
title: Categorías de comisión
sidebar_position: 3
ai_generated: true
---

En este formulario se definen las categorías de comisión<!-- categorie provvigionali -->, es decir, una especie de "dato extra" para la definición de los criterios de consulta de los porcentajes de comisión<!-- percentuali di provvigione -->.

Es posible entonces definir el objeto del business layer y su propiedad, que sirve como parámetro de consulta, y en la cuadrícula inferior especificar una condición de filtro para la validez.

Ejemplo **Objeto<!-- Oggetto -->** -> FSSalesOrder  
**Ruta de la propiedad<!-- Percorso Proprietà -->** -> SalesOrderTypeCode (el código del tipo de orden de venta<!-- ordine di vendita -->)

En la cuadrícula inferior se debe especificar **Valor<!-- Valore -->** *OCIT* (ejemplo para limitar la validez al tipo de orden codificado *OCIT*, por ejemplo orden Italia)

Normalmente puede ocurrir que se configuren varios casos correspondientes a diferentes valores de la propiedad seleccionada, como *OCIT*, *OCUE*, etc., para diferenciar los porcentajes según el tipo de orden, ya sea Italia o Europa.

También puede suceder que existan casos aún más complejos con diferentes combinaciones de valores y propiedades del objeto.

:::note[Nota<!-- Nota -->]
Esta configuración dará lugar a una compilación particular de la cuadrícula de definición de prioridades y criterios de cálculo de la comisión<!-- provvigione --> presente en la pestaña *Comisiones directas<!-- Provvigioni Dirette -->* del maestro de agente<!-- anagrafica agente -->.

Se deberá ingresar varias veces el mismo criterio (por ejemplo, por artículo o por clase) asociando cada vez la categoría de comisión<!-- categoria provvigionale --> que en este sentido **funciona como filtro**.

Así, la fila con el criterio que lee la clase o el artículo, a su vez vinculada al detalle del propio criterio (a través del botón ***Detalle de porcentajes seleccionados<!-- Dettaglio percentuali selezionate -->*** presente en el mismo formulario) con las comisiones puntuales para cada artículo o clase, solo aplica cuando el tipo de orden es *OCIT*.
Se deberá definir todo el detalle en una nueva fila en combinación con la categoría de comisión<!-- categoria provvigionale --> *OCUE* y válido solo para esa combinación.
:::

:::danger[Atención<!-- Attenzione -->]
La cumplimentación de este formulario presenta algunas particularidades
- El formulario se compone de una cuadrícula *Master* (arriba) y una cuadrícula *Detail* abajo que depende de la primera. Después de completar la fila en la cuadrícula *Master*, la cuadrícula *Detail* queda en un estado provisional donde no se puede escribir o aparecen 4 columnas con la etiqueta *Valor<!-- Valore -->*. En realidad son 4 tipos de datos (texto, fecha, true / false, etc.) alternativos de los cuales **solo uno** puede utilizarse en relación con la propiedad seleccionada en la cuadrícula *Master*. Por lo tanto, **después de completar la fila en la cuadrícula Master es necesario volver a pulsar el botón Buscar<!-- Ricerca --> en la barra de ribbon y seleccionar nuevamente** con el mouse la fila para poder completar la cuadrícula *Detail*.
- Al completar la fila en la cuadrícula Master, luego de ingresar el código y descripción libre para la categoría de comisión<!-- categoria provvigionale -->, se recomienda utilizar el widget de búsqueda que sugiere el nombre del objeto Fluentis, por ejemplo, escribiendo FSSales... se propondrán objetos como FSSalesOrder, FSSalesInvoice, etc.
- Después de elegir el objeto de referencia de Fluentis, es necesario especificar la **propiedad** que determinará el valor de detalle (completando la cuadrícula de *Detail*), a buscar. **Se recomienda hacer doble clic para utilizar el popup de búsqueda** que propone las propiedades y todas las colecciones vinculadas al objeto que hayamos seleccionado. De este modo, resulta mucho más sencillo definir la propiedad de referencia.
:::