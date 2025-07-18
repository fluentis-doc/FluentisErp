---
title: Filtrar, ordenar y otras operaciones con los registros en las cuadrículas 
sidebar_position: 4
---

### Filtrar los registros 

Dentro de las cuadrículas, se pueden filtrar y/o ordenar los registros (ver el ejemplo en la imagen abajo).  

La primera fila de la cuadrícula es de filtro (el ícono en el campo de encabezado de fila tiene como imagen un embudo ![](/img/neutral/common/filter.png)): una vez que se abre la máscara, basta con realizar una búsqueda para visualizar los registros presentes en ella y activar la inserción (si está prevista) o la gestión de la cuadrícula misma. El carácter comodín de la búsqueda en todo el campo es ‘%', el carácter comodín individual es ‘_'.  

El filtro en los campos de texto no es ‘sensible a mayúsculas y minúsculas' (es decir, no distingue entre mayúsculas y minúsculas). Una vez que se comienza a filtrar los registros a través de los encabezados de columna, aparecerá en la parte inferior de la máscara un panel que muestra cómo se aplicará el mismo filtro: en el extremo derecho de esta sección aparecerá tanto un botón de cierre/anulación del filtro, como un útil botón ![](/img/neutral/common/pencil.png) de edición del filtro, donde se pueden añadir filtros más complejos de manera guiada. 

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image03.png)

En el encabezado de la columna, además, hay un botón activo (un ícono similar a un embudo) que muestra una lista de verificación con las varias ocurrencias de los registros presentes en la cuadrícula, con la posibilidad de marcar todo o solo los vacíos/no vacíos o los registros individuales. 

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image04.png)

### Ordenar los registros 

En las cuadrículas, además de la primera fila de filtro, es posible ordenar los registros (en orden ascendente o descendente) por una columna presionando en el encabezado de la columna misma: si se desea ordenar en cascada por otras columnas, es necesario mantener presionada la tecla ‘Shift' y hacer clic en ellas con el ratón.  

Es posible copiar los datos seleccionados en la cuadrícula: con CTRL+C se copian los valores, si se hace CTRL+SHIFT+C se copian también los encabezados de columna.  

En la parte inferior de la máscara hay un texto que indica el registro seleccionado y el total de registros presentes, con botones que permiten pasar de un registro a otro o saltar de página en página o ir al final o al principio. El desplazamiento de la cuadrícula muestra el número de registros actuales respecto al total de registros.  

Con el botón derecho en los encabezados de cuadrícula se permiten las siguientes operaciones:  

**Ordenar de forma ascendente**: establece el ordenamiento ascendente para el campo  

**Ordenar de manera descendente**: establece el ordenamiento descendente para el campo  

**Ordenar claro**: elimina el ordenamiento  

### Otras operaciones 

Con el botón derecho en los encabezados de cuadrícula se permiten las siguientes operaciones:  

**Agrupado por esta columna**: los registros de la cuadrícula estarán agrupados por el mismo campo y al presionar el + del grupo se abrirán sus detalles. Se permiten múltiples grupos uno dentro del otro.  

**Desagrupar**: (presente si se ha definido un agrupamiento) anula el agrupamiento establecido.  

**Mostrar panel de grupo**: muestra arriba de la cuadrícula la sección de gestión del agrupamiento.  

**Ocultar panel de grupo**: (si el panel de agrupamiento está presente) oculta la sección de gestión del agrupamiento.  

**Mostrar Selector de columnas**: permite añadir columnas previstas para la cuadrícula pero que han sido ocultadas.  

**Mejor ajuste**: ajusta el tamaño de la columna seleccionada a los valores presentes en el campo.  

**Ajustar (todas las columnas)**: ajusta el tamaño de todas las columnas respecto a los valores presentes en el campo.  

**Editor de Resumen de grupo**: (solo en caso de datos agrupados) abre un formulario donde se puede establecer un contador de ocurrencias por grupo, configurando la etiqueta correspondiente y su formato. (Las totales no deben gestionarse en esta opción sino estableciendo la cuadrícula a carga total y luego a través del panel de resumen de totales, como se explicó más abajo.)  

**Editor de filtro**: abre el panel de escritura manual del filtro en la cuadrícula.  

**Mostrar panel de búsqueda**: abre un campo de búsqueda sobre las ocurrencias de la cuadrícula, filtrando los registros mismos.  

**Estilo fijo**: permite establecer una columna como fija a la izquierda o derecha en la cuadrícula, haciendo que las otras se desplacen horizontalmente. Para establecer más columnas como fijas, mantenga presionada la tecla CTRL y luego haga clic derecho para añadir las siguientes.  

**Panel de resumen**: abre el panel de resumen de la cuadrícula, donde visualizar el número total de filas, por ejemplo.  

**Panel de resumen total**: permite visualizar el panel de totalización de los campos visualizados. Esta opción se gestiona solo en caso de que la cuadrícula ha sido configurada para cargar todos los datos (detalles más debajo).  

**Filtrar fila**: habilita/deshabilita la fila inicial de filtro.  

**Fin de grupo**: muestra una sección final para cada grupo, donde es posible visualizar totales y valores de las columnas para ese grupo (para cuadrículas de carga total, como se explicó más abajo).  

**Exportar**: permite exportar la cuadrícula en varios formatos (csv, html, imagen, mht, pdf, rtf, texto, xls, xlsx, xps).  

**Vista previa de impresión**: abre una vista previa de impresión de la tabla de la cuadrícula, desde la cual se puede a su vez exportar los datos, adjuntarlos a un correo electrónico, imprimirlos. Las configuraciones son las de la impresora predeterminada.  

**Imprimir**: ejecuta directamente la impresión de la tabla de la cuadrícula, en la impresora predeterminada.