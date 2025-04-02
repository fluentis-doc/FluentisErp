---
title: rilascio ordini di produzione
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
El procedimiento de **rilascio ordini di produzione (Rilascio degli ordini di produzione)** en Fluentis permite gestionar de manera eficiente el paso de las órdenes del estado *lanciato* a *esecutivo*. A través de una interfaz intuitiva, es posible filtrar y seleccionar las órdenes a liberar, generando al mismo tiempo los respectivos movimientos de almacén para la extracción automática de los materiales. Además, este procedimiento permite restaurar órdenes ya liberadas, garantizando una flexibilidad operativa significativa en el proceso productivo.
:::

Este formulario permite realizar el cambio de estado de las órdenes de producción y, al mismo tiempo, crear también los respectivos movimientos de almacén de descarga de todos los artículos que tienen, en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo, como *tipo di prelievo* el valor **automatico**.

## Filtro

En esta pestaña es posible visualizar la lista de órdenes de producción en estado lanzado que aún deben ser liberadas, y se pueden filtrar a través de una serie de criterios de selección. 

Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** presente en la *barra de herramientas (ribbon bar)* para visualizar los resultados dentro de la cuadrícula de resultados.

Después de haber identificado y seleccionado las órdenes que se desean liberar, para proceder se debe utilizar el botón **rilascio ordini** presente en la *barra de herramientas (ribbon bar)*; esto permitirá cambiar el estado de las órdenes de *lanciato* a *esecutivo* y al mismo tiempo crear los movimientos de almacén de descarga de todos los materiales que tienen, en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo, como *tipo di prelievo* el valor **automatico**.

## Restauración (Ripristino)

En esta pestaña es posible ejecutar el procedimiento de restauración que permite anular la liberación de la orden de producción previamente realizada, restaurando la situación anterior a la liberación misma, revirtiendo el estado de la orden de producción a *lanciato* y eliminando el respectivo movimiento de almacén.

Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** presente en la *barra de herramientas (ribbon bar)* para visualizar los resultados dentro de la cuadrícula de resultados.

Manteniendo seleccionada una de las filas presentes en la cuadrícula de resultados, se visualizan en la cuadrícula inferior los respectivos movimientos de almacén creados.

Para lanzar la restauración, seleccione una o más órdenes y haga clic en el botón **ripristino**.

La restauración de la orden de producción solo es posible si la orden de producción generada se encuentra en estado *esecutivo* y no se han iniciado aún las declaraciones de producción correspondientes; mientras que en caso de que ya esté *evaso*, no es posible ejecutar la restauración de la orden de producción, a menos que se proceda a retroceder comenzando desde la reversión del registro de la declaración de producción.

Al realizar este procedimiento, las órdenes restauradas serán nuevamente visibles en la pestaña de **filtro**, donde será posible volver a realizar la liberación.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).