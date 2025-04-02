---
title: Detalle de pedidos de aprovisionamiento/necesidades (Dettaglio ordini di approvvigionamento/fabbisogni)
sidebar_position: 5
---

El formulario de detalle de pedidos de aprovisionamiento permite filtrar y ver la lista de todos los pedidos de aprovisionamiento no cumplidos, de cualquier naturaleza, tanto planificados como confirmados; el de necesidades permite filtrar y visualizar la lista de documentos no cumplidos que generan demanda, y con un doble clic en una fila se abre el pedido correspondiente.

En el formulario de necesidades, el artículo visualizado es el comprometido, por lo tanto, en caso de órdenes de producción y trabajo por encargo, no es el artículo del pedido.

La sección de filtro permite seleccionar según la naturaleza del pedido, estado del pedido, artículo, etc.

Resultan particularmente importantes cuando se desea analizar en detalle la situación de los pedidos de un artículo, especialmente desde el análisis NFP.

Cada fila está coloreada según el estado del buffer del artículo (buffer status) referido al almacén de entrega de la línea del pedido (almacén de destino para los pedidos internos Ddmrp) en caso de pedidos de aprovisionamiento, y almacén de compromiso para los pedidos que crean necesidad.

Los colores son: rojo oscuro para saldo negativo, rojo para saldo inferior al 50% de la zona roja, amarillo si el saldo está entre el 50% y el 100% de la zona roja, verde si el saldo es superior a la zona roja (límite mínimo normal del saldo) e inferior a la suma de la zona roja y zona verde (límite máximo normal del saldo), y azul si es superior a dicha suma (saldo excesivo).

Si el artículo no es un buffer en el almacén de entrega de la línea del pedido, la columna de estado del buffer estará vacía y la fila no estará coloreada.

Si el almacén de la línea del pedido no ha sido especificado, se considerará como almacén de fábrica.