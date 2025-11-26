---
title: Liberación de órdenes de producción
sidebar_position: 2
ai_generated: true
---

:::important ¿Para qué sirve?<!-- A cosa serve -->
El procedimiento de **Liberación de órdenes de producción<!-- Rilascio degli ordini di produzione -->** en Fluentis permite gestionar eficientemente el paso de las órdenes del estado *Lanzado<!-- Lanciato -->* a *Ejecutivo<!-- Esecutivo -->*. A través de una interfaz intuitiva, es posible filtrar y seleccionar las órdenes a liberar, generando al mismo tiempo los correspondientes movimientos de inventario<!-- movimenti di magazzino --> para la retirada automática de los materiales. Además, este procedimiento permite restaurar órdenes ya liberadas, garantizando una flexibilidad operativa significativa en el proceso productivo.
:::

Este formulario permite realizar el cambio de estado de las órdenes de producción y, al mismo tiempo, crear también los correspondientes movimientos de inventario<!-- movimenti di magazzino --> de descarga de todos los artículos que tienen, en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), como *Tipo de retirada* el valor **Automático<!-- Automatico -->**.

## Filtro

En esta pestaña es posible visualizar la lista de órdenes de producción en estado lanzado<!-- lanciato --> que aún deben ser liberadas y es posible filtrarlas mediante una serie de criterios de selección.

Una vez configurados todos los filtros deseados, solo hay que hacer clic en el botón **Buscar<!-- Ricerca -->** presente en la *ribbon bar* para visualizar los resultados dentro de la cuadrícula de resultados.

Después de identificar y seleccionar las órdenes que se desean liberar, para continuar será necesario usar el botón **Liberar órdenes<!-- Rilascio ordini -->** presente en la *ribbon bar*, esto permitirá cambiar el estado de las órdenes de *Lanzado<!-- Lanciato -->* a *Ejecutivo<!-- Esecutivo -->* y al mismo tiempo crear los movimientos de inventario<!-- movimenti di magazzino --> de descarga de todos los materiales que, en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo, tengan como *Tipo de retirada* el valor **Automático<!-- Automatico -->**.

## Restaurar<!-- Ripristino -->

En esta pestaña es posible ejecutar el procedimiento de restauración que permite anular la liberación de la orden de producción previamente efectuada, restaurando la situación anterior a la liberación, devolviendo el estado de la orden de producción a *Lanzado<!-- Lanciato -->* y eliminando el correspondiente movimiento de inventario<!-- movimento di magazzino -->.

Una vez configurados todos los filtros deseados, solo hay que hacer clic en el botón **Buscar<!-- Ricerca -->** presente en la *ribbon bar* para visualizar los resultados dentro de la cuadrícula de resultados.  

Manteniendo seleccionada una de las filas presentes en la cuadrícula de resultados, se muestran en la cuadrícula debajo los correspondientes movimientos de inventario<!-- movimenti di magazzino --> creados.

Para ejecutar la restauración, seleccione una o más órdenes y haga clic en el botón **Restaurar<!-- Ripristino -->**. 

La restauración de la orden de producción solo es posible si la orden de producción generada se encuentra en el estado de *Ejecutivo<!-- Esecutivo -->* y aún no se han iniciado las correspondientes declaraciones de producción. En el caso de que ya esté *Despachada<!-- Evaso -->*, ya no será posible ejecutar la restauración de la orden de producción, a menos que se proceda hacia atrás comenzando por el rollback del registro de la declaración de producción.

Al ejecutar este procedimiento, las órdenes restauradas serán nuevamente visibles en la pestaña de **Filtro** donde será posible volver a ejecutar la liberación.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidad, botones y campos comunes](/docs/guide/common).