---
title: Elementos duplicados
sidebar_position: 4
---

A la procedimiento para duplicar un artículo, se accede a través de la ruta **Inicio > Artículos > Elementos duplicados**.

En esta ventana se pueden crear nuevos artículos, duplicando a partir de artículos ya existentes. De este modo, se podrán duplicar las informaciones comunes a los dos artículos.

### Área de filtro

En el área de filtro, es posible configurar una serie de filtros que permiten buscar dentro de la base de datos, el artículo o artículos que poseen ciertas características, de modo que se pueda identificar más fácilmente un artículo que se asemeje al artículo o artículos que se quieren crear, siendo este la base de partida para el procedimiento de duplicación.

Con la ayuda de estos filtros se puede visualizar: un solo artículo (por ejemplo, buscando con el código del artículo) o varios artículos pertenecientes a la misma clase, ingresando la clase del artículo; artículos con las mismas características, o la misma categoría mercantil (por ejemplo, buscando con características y categoría mercantil); artículos con el mismo tipo de artículo, o la misma nomenclatura; todos los artículos que tengan un mismo proveedor preferencial, un mismo estado o versión; en el caso de materiales comprados, es posible buscar el artículo a través del código de artículo del proveedor; finalmente, también es posible buscar los artículos mediante su código de barras.

Al abrir los expandidos **búsqueda avanzada** y **Lotes y S/N**, se puede decidir filtrar también según el estado del artículo (ficticio, archivado/no archivado, en agotamiento/no en agotamiento) o según la gestión del artículo (si es gestionado por lotes, por número de serie, gestionado por Rfid o Rfid único).

Una vez configurados los parámetros de filtro deseados, haciendo clic en el botón de **búsqueda** presente en la barra de herramientas, el sistema buscará el artículo o la serie de artículos que correspondan a los parámetros seleccionados y los mostrará en la cuadrícula de resultados.

*Botones específicos*:

> **Generar prototipos de artículo**: botón que se activará al momento de seleccionar el artículo padre y codificar el artículo hijo en la primera pestaña de la ventana denominada *elemento a ser duplicado*; de este modo se generará el prototipo del artículo hijo que se definirá y confirmará posteriormente;  
> **Seleccionar/Deseleccionar todos**: botones que permiten seleccionar o deseleccionar todos los artículos resultantes de los filtros de búsqueda configurados;  
> **Eliminar prototipo de artículo**: botón que permite eliminar, una vez seleccionado, el prototipo de artículo que ha sido generado antes de que este sea creado oficialmente mediante el procedimiento de *Confirmar generación de prototipo*;  
> **Confirmar generación de prototipo**: botón que permite confirmar el prototipo previamente creado, generando oficialmente el artículo hijo dentro de la base de datos.  

A continuación, se detallarán los pasos que permiten la duplicación del artículo.

### Artículo a duplicar

Esta pestaña incluye la cuadrícula de resultados en la que se mostrarán el artículo y/o la lista de artículos que correspondan a los criterios de filtro establecidos previamente para la identificación del artículo de partida.

Una vez identificado el artículo padre a partir del cual se procederá con la duplicación, en la sección inferior se completarán automáticamente algunos datos: **empresa**, **división**, **clase de ítem** y **número de prototipos**.

Todos estos datos son modificables manualmente a través de las combinaciones (combo) o ingresando un número diferente de prototipos en el campo **número de prototipos**.

El **código de artículo**, en cambio, se generará en base a la composición del código del artículo que se ha decidido establecer en función de la clase del artículo en la tabla **clase de ítem**.

Como se puede notar, al seleccionar la clase del artículo, en la cuadrícula de la derecha se presentan las informaciones que indican cómo se ha determinado que se deben crear los códigos de los artículos pertenecientes a esa clase de artículo; en el ejemplo mencionado, el código está compuesto en orden por un dato adicional, es decir, el País (la sigla) que compondrá tanto el código como la descripción; por un segundo dato adicional que será el color, y también este compondrá tanto el código como la descripción; otro dato adicional que en este caso novamente es el país, y luego un código progresivo de longitud de 3 dígitos que se calculará a partir del valor 1, y finalmente un valor fijo que en este caso se ha establecido que es la letra F.

Esta tabla se resume también en la pestaña **Artículos a duplicar**, donde se completarán las informaciones relativas a los valores mencionados anteriormente (así que se indicará el país, el color, etc., en función del tipo de dato adicional que se haya elegido).

Una vez configurados los datos, en los campos **código** y **descripción** aparecerán automáticamente el código y la descripción del nuevo artículo.

Posteriormente, se pueden establecer los parámetros para proceder con la creación del **prototipo de artículo**, haciendo clic en el botón homónimo presente en la barra de herramientas del formulario.

El prototipo generado se visualizará en la siguiente pestaña, **prototipos de artículos**.

### Parámetros 

En esta pestaña, se pueden seleccionar los parámetros que deben regular la duplicación del artículo en cuestión.

La pantalla contiene una serie de indicadores (flag), que indicarán las características del artículo que se desean duplicar exactamente iguales a las del artículo padre y que podrán ser actualizadas y/o modificadas en el artículo hijo.

Las informaciones que se pueden duplicar son: costos, pesos y dimensiones, lotes y S/N, aprovisionamiento, variantes, proveedores preferenciales (en el caso de artículos de compra), clientes (en el caso de artículos de venta), U.M. alternativas, imágenes, notas, códigos de barras, las informaciones contenidas en la pestaña Administración, datos adicionales, empaquetado, etc. Estas son todas informaciones contenidas dentro de las pestañas que forman al artículo y que han sido detalladas en los respectivos artículos (ver [Creación de artículo](/docs/erp-home/registers/items/create-new-item) con los documentos relacionados).

También se puede decidir duplicar la [Lista de materiales](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) de producción del artículo, su [Ciclo de trabajo](/docs/erp-home/registers/production/routes/new-route) y los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo.

Dentro de esta pestaña, hay una sección adicional donde se puede definir un color de fondo de celda y color de texto para poder identificar, al momento de la generación de los prototipos, las filas que contienen un dato faltante (por ejemplo, si alguna de las informaciones que se desean duplicar resulta vacía en el artículo padre, en el artículo hijo se visualizará la fila correspondiente a esa entrada resaltada en el color elegido) y los artículos que ya han sido codificados previamente (en caso de que se esté procediendo con la creación de un artículo idéntico a un artículo ya existente en la base de datos).

Una vez configurados los parámetros, se puede proceder con la duplicación del artículo.

Para todo lo que no se ha detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).