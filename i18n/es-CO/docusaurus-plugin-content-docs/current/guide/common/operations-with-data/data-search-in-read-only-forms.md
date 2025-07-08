---
title: Búsqueda de datos 
sidebar_position: 2
---

Los formularios permiten encontrar los registros introducidos anteriormente para *visualizarlos*, *modificarlos*, *eliminarlos*, etc., si el usuario tiene los **derechos necesarios** para estas operaciones.

Ciertos formularios de este tipo contienen el botón de inserción ![](/img/neutral/common/new.png) que, al ser presionado, abre el formulario de inserción para nuevos registros.

En los formularios de búsqueda es posible visualizar: un solo registro (filtro por número de documento), múltiples registros (filtro por fecha), los registros introducidos en un año (filtro por año), los registros introducidos para un cierto registro (filtro por cuenta/subcuenta), etc.

Un formulario se divide en tres secciones:

### 1. Barra de búsqueda avanzada

Esta barra multifunción permite buscar por palabra clave dentro de varios campos presentes en el documento objeto del formulario.

El criterio de búsqueda, si se ingresan más de una palabra clave, puede ser:

- OR si las palabras están separadas por DOS espacios (entonces buscará en los campos interesados cualquiera de las dos o más palabras ingresadas)  
- AND si las palabras están separadas por UN espacio (entonces buscará ambas palabras juntas como clave de búsqueda en los campos interesados)  

:::note Nota

Para conocer en qué campos del documento se realiza la búsqueda, es posible acceder al *Navegador de objetos* (a la derecha) y haciendo clic con el botón derecho presionar *detalles*.  

En la máscara que se abre, seleccionar nuevamente el objeto y haciendo clic con el botón derecho seleccionar *editar objeto estándar*. Luego, seleccionar la pestaña *patrones de búsqueda* en la cuadrícula inferior izquierda.

:::

### 2. Área de filtro

Los filtros están típicamente en condición 'AND', es decir, es posible ingresar varios filtros simultáneamente.

Haga clic en las flechas ![](/img/neutral/common/arrow.png) para abrir los [expansores](/docs/guide/common/glossary/glossary-intro#expander) y filtrar también en base a los datos contenidos en ellos.

Después de ingresar los filtros deseados, presione el botón **búsqueda** para obtener la lista de datos.

:::note Nota
El área de filtro puede visualizarse ya expandida al abrir la máscara si se mantiene "bloqueada" presionando el botón con el ícono de chincheta (*Pin*).
:::

![](/img/neutral/common/pin.png)

### 3. Cuadrícula de resultados

Representa la lista de datos que corresponden a los filtros ingresados en el área de filtro.

En la cuadrícula de resultados se pueden seleccionar una o más filas.

*Particularidades de la cuadrícula*

La primera fila de la cuadrícula es de filtro (el ícono en el campo de encabezado de fila tiene como imagen un embudo ![](/img/neutral/common/filter.png)): una vez que se abre la máscara, es suficiente realizar una búsqueda para visualizar los registros presentes en ella y activar la inserción (si está prevista) o la gestión de la cuadrícula misma.

El filtro en los campos de texto no distingue entre mayúsculas y minúsculas. Una vez que se comienza a filtrar los registros a través de los encabezados de columna, aparecerá en la base de la máscara un panel que muestra cómo se aplicará el filtro: en el extremo derecho de esta sección aparecerán tanto un botón de cierre/anulación del filtro como un útil botón ![](/img/neutral/common/pencil.png) de edición del filtro, donde se pueden agregar de manera guiada filtros más complejos.

*Profundizaciones*: [Filtrar y ordenar los registros en las cuadrículas](/docs/guide/common/operations-with-data/filter-sort-and-other-operations-with-records-in-grids).