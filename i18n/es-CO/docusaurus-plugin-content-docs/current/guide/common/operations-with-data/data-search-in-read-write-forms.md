---
title: Búsqueda e inserción de datos 
sidebar_position: 3
---

Los formularios permiten encontrar los registros insertados anteriormente para *visualizarlos*, *modificarlos*, *eliminarlos*, pero también para agregar registros **Nuevos**, si el usuario tiene los **derechos necesarios** para estas operaciones.

Un formulario se divide en varias secciones:

### 1. Barra de búsqueda avanzada

Esta barra multifuncional permite buscar por palabra clave dentro de varios campos presentes en el documento objeto del formulario.

El criterio de búsqueda, en caso de insertar más de una palabra clave, puede ser:

- OR si las palabras están separadas por DOS espacios (entonces buscará en los campos afectados cualquiera de las dos o más palabras insertadas)  
- AND si las palabras están separadas por UN espacio (entonces buscará ambas palabras juntas como clave de búsqueda en los campos afectados)  

:::note Nota

Para conocer en qué campos del documento se realiza la búsqueda, es posible acceder al *object navigator* (a la derecha) y haciendo clic con el botón derecho seleccionar *detalles*.

En la máscara que se abre, seleccione nuevamente el objeto y haciendo clic con el botón derecho seleccione *editar objeto estándar*. Luego seleccione la pestaña *patrones de búsqueda* en la cuadrícula en la parte inferior izquierda.

:::

### 2. Área de filtro

Los filtros suelen estar en condición 'AND' y es posible especificar varios criterios de filtro simultáneamente para visualizar: un único registro (filtro por número de documento), varios registros (filtro por fecha), los registros ingresados en un año (filtro por año), los registros ingresados por cierta entidad (filtro por cuenta/subcuenta), etc.

Haga clic en las flechas ![](/img/neutral/common/arrow.png) para abrir los [expansores](/docs/guide/common/glossary/glossary-intro#expander) y filtrar también en base a los datos contenidos en ellos.

Después de insertar los filtros deseados, presione el botón **búsqueda** para obtener la lista de datos.

:::note Nota
El área de filtro puede visualizarse ya expandida al abrir la máscara si se mantiene "bloqueada" presionando el botón con el ícono del sujetapapeles (*Pin*). 
:::

![](/img/neutral/common/pin.png)

### 3. Grilla de resultados

Representa la lista de datos que coinciden con los filtros insertados en el área de filtro.

### Inserción de nuevos registros

Los formularios de lectura/escritura también permiten la inserción de registros.

Para hacer esto, colóquese en la última fila de la primera cuadrícula o use el botón **nuevo**. El guardado se realiza haciendo clic en otra fila.

:::note Particularidad
Ciertos formularios tienen más cuadrículas conectadas entre sí. Para una fila de la cuadrícula superior, se pueden insertar nuevos detalles en la cuadrícula inferior.
:::