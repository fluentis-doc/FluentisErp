---
title: Detalle de órdenes de aprovisionamiento/necesidades
sidebar_position: 5
ai_generated: true
---

El formulario de detalle de órdenes de aprovisionamiento<!-- dettaglio ordini approvvigionamento --> permite filtrar y ver la lista de todas las órdenes de aprovisionamiento<!-- ordini di approvvigionamento --> pendientes, de cualquier naturaleza, tanto planificadas como confirmadas; el formulario de necesidades<!-- fabbisogni --> permite filtrar y visualizar la lista de los documentos pendientes que generan demanda y, con doble clic en una fila, se abre la orden correspondiente.

En el formulario de necesidades<!-- fabbisogni -->, el artículo visualizado es el que está comprometido, por lo tanto, en el caso de órdenes de producción y cuenta de trabajo<!-- conto lavoro --> no es el artículo de la orden.

La sección de filtro permite seleccionar según la naturaleza de la orden, el estado de la orden, el artículo, etc.

Resultan especialmente importantes cuando se quiere analizar en detalle la situación de las órdenes de un artículo, en particular desde el análisis NFP.

Cada fila está coloreada según el estado del buffer (buffer status) del artículo referido al almacén<!-- magazzino --> de depósito de la línea de la orden (almacén de destino para las órdenes internas Ddmrp) en el caso de órdenes de aprovisionamiento<!-- ordini di approvvigionamento --> y almacén de compromiso para las órdenes que generan necesidades<!-- fabbisogno -->.

Los colores son: rojo oscuro para stock negativo, rojo para stock inferior al 50% de la zona roja, amarillo si el stock está entre el 50% y el 100% de la zona roja, verde si el stock está por encima de la zona roja (límite mínimo normal del stock) y por debajo de la suma de la zona roja y zona verde (límite máximo normal del stock), azul si supera dicha suma (stock excesivo).

Si el artículo no es un buffer en el almacén<!-- magazzino --> de depósito de la línea de la orden, la columna buffer status estará vacía y la fila no estará coloreada.

Si el almacén<!-- magazzino --> de la línea de la orden no se ha especificado, se considerará como almacén<!-- magazzino --> Fábrica.