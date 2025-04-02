---
title: scarico picking
sidebar_position: 4
---

:::important ¿Para qué sirve? (A cosa serve)  
El procedimiento de Descarga de Picking en Fluentis está diseñado para facilitar la manipulación de los artículos extraídos del almacén durante el proceso de picking. Esta funcionalidad permite a los usuarios seleccionar uno o más pickings ya creados y, mediante una interfaz intuitiva, realizar los registros de almacén necesarios para la correcta descarga de los artículos.

Dentro del procedimiento, los usuarios pueden aplicar filtros para seleccionar los pickings deseados y especificar la fecha de registro en el almacén.  
Una vez seleccionados, es posible iniciar el proceso de descarga, asegurando que los movimientos se registren correctamente en el sistema.  

Además, el módulo ofrece funcionalidades para gestionar anomalías, como artículos sin almacén y motivo, o para visualizar artículos no descargados, mejorando así la eficiencia operativa y la trazabilidad de los inventarios.
:::

Al seleccionar uno o más pickings y presionar el botón **scarico** se abre una ventana que permite realizar la manipulación de los pickings.

**Filtro**

En esta pestaña es posible buscar los pickings deseados según los filtros ingresados. También se puede especificar la **Fecha de registro en el almacén (Data di registrazione di magazzino)**.

*Botón específico*:  
> **scarico**: crea los registros de almacén para los pickings seleccionados.  

**Parámetros**

En esta pestaña es posible especificar los parámetros necesarios para la creación de los movimientos en el almacén. En particular, para las líneas de picking que carecen de almacén y motivo, se puede elegir no realizar la descarga para todo el documento, omitir el artículo sin almacén ni motivo, visualizar los artículos que no han sido descargados, y utilizar como almacén y motivo aquellos establecidos por defecto.

**Resumen**

La pestaña de resumen permite visualizar las operaciones realizadas y, si es necesario, realizar el rollback de las operaciones.

Es posible ingresar filtros para visualizar solo las operaciones deseadas. Al seleccionar una fila en la cuadrícula de resultados, se podrá ver el detalle (es decir, los pickings de referencia y sus registros) en las pestañas en la parte inferior de la ventana.

Al seleccionar una o más filas en la cuadrícula de búsqueda y presionar el botón *cancella gli scarichi selezionati*, se eliminarán los registros de almacén realizados.

*Botones específicos*:  
> **cancella gli scarichi selezionati**: elimina los registros derivados de las filas seleccionadas en la cuadrícula de resultados.  
> **ripristina picking**: elimina los registros únicamente respecto a las filas de picking seleccionadas.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).