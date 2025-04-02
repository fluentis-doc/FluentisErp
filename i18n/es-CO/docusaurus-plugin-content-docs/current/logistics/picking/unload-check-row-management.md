---
title: Descarga de verificación (Scarico spunta)
sidebar_position: 5
---

:::important ¿Para qué sirve? (A cosa serve)
El procedimiento de Descarga de Verificación (Scarico Spunta) de Fluentis es un módulo especializado que permite gestionar el proceso de descarga solo para las líneas que han sido efectivamente verificadas durante las operaciones de picking. Esta funcionalidad garantiza una ola de eficiencia y precisión, permitiendo seleccionar y registrar solo los artículos que han sido confirmados como retirados del almacén.

Los usuarios pueden buscar los pickings deseados a través de filtros personalizados para identificar rápidamente los pertinentes. Una vez seleccionados, la interfaz permite crear los registros de almacén para las líneas verificadas, mientras que un resumen oportuno de las operaciones realizadas ofrece la posibilidad de visualizar detalles y gestionar posibles retrocesos.

El procedimiento de descarga de verificación no solo reduce el riesgo de errores, sino que también optimiza la productividad, asegurando que las operaciones de descarga se realicen de manera coherente y confiable.
:::

:::note Nota
A diferencia de la [Descarga de picking (Scarico picking)](/docs/logistics/picking/unload-picking), este procedimiento permite ejecutar las mismas funciones pero solamente para las líneas verificadas.
:::

Seleccionando uno o más pickings y presionando el botón **scarico** se abre una ventana que permite realizar la movimentación de los pickings para las líneas verificadas.

**Filtro**

En esta pestaña es posible buscar los pickings deseados según los filtros ingresados. También es posible especificar la **Fecha de registro de almacén (Data di registrazione di magazzino)**.

*Botón específico*:  
> **scarico**: crea los registros de almacén para los pickings seleccionados.  

**Parámetros**

En esta pestaña es posible especificar los parámetros necesarios para la creación de los movimientos en el almacén. En particular, para las líneas de picking que no cuentan con almacén y motivo, se puede elegir no realizar la descarga para todo el documento, omitir el artículo sin almacén y motivo, visualizar los artículos que no han sido descargados, o utilizar como almacén y motivo aquellos establecidos por defecto.

**Resumen**

La pestaña de resumen permite visualizar las operaciones realizadas y, en su caso, ejecutar el retroceso de las operaciones.

Es posible ingresar filtros para visualizar solo las operaciones deseadas. Al seleccionar una fila en la cuadrícula de resultados, será posible ver el detalle (es decir, los pickings de referencia y sus respectivos registros) en las pestañas en la parte inferior de la ventana.

Al seleccionar una o más filas en la cuadrícula de búsqueda y presionar el botón *cancella gli scarichi selezionati*, se eliminarán los registros de almacén realizados.

*Botones específicos*:  
> **cancella gli scarichi selezionati**: elimina los registros derivados de las líneas seleccionadas en la cuadrícula de resultados.  
> **ripristina picking**: elimina los registros limitados a las líneas de picking seleccionadas.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).