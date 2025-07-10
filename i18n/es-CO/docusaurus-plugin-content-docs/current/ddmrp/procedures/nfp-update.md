---
title: Actualización del valor de la Posición de Flujo Neto (NFP) (Aggiornamento valore Net Flow Position NFP)
sidebar_position: 5
---

Este procedimiento realiza el cálculo de la posición de flujo neto (NFP) de un artículo en stock en una determinada unidad logística.

Para el mismo artículo, el valor NFP cambia al cambiar la unidad logística en la que está almacenado, por lo que, por ejemplo, si está almacenado en 5 unidades logísticas, tendremos 5 valores NFP para el mismo artículo, uno por cada unidad logística.

El cálculo realizado, según la teoría, es el siguiente:

NFP = En mano (On-Hand) + En pedido (On Order) - Demanda (Demand) - Picos de demanda (Demand Spikes)

En mano (On-Hand) = es el inventario relativo al almacén de la línea (valor vacío del almacén para la fábrica).

En pedido (On Order) = es la cantidad total restante de los pedidos confirmados (para los centros de distribución proviene de órdenes de compra y órdenes de suministro internos; para la fábrica proviene de órdenes de compra, producción y trabajo por encargo).

Demanda (Demand) = es la suma de todas las necesidades no satisfechas cuya fecha de compromiso no es posterior a la fecha actual.

Para los centros de distribución y los hubs, la demanda proviene de órdenes de cliente u órdenes de suministro internas confirmadas (las planificadas no son consideradas); para la fábrica, a esto se suman las necesidades de órdenes de producción y trabajo por encargo, tanto confirmadas como planificadas, así como RDA y facturas no descargadas.

Picos de demanda (Demand Spikes) = total de posibles picos de demanda en el período a partir de mañana hasta mañana + el horizonte de picos de demanda (OSH) indicado en los parámetros de DDMRP.

El resultado del cálculo también incluye la indicación de la posible cantidad a ordenar; si resulta que NFP ≤ zona roja + zona amarilla, entonces es necesario emitir un pedido por una cantidad igual a zona roja + zona amarilla + zona verde - NFP, teniendo en cuenta posibles excepciones de las zonas en la fecha actual.

Todos los elementos del cálculo se almacenan para un fácil análisis y para permitir análisis de datos pasados.

Para cada día se almacena un solo cálculo (si ejecuto el procedimiento varias veces hoy, solo se almacenará el resultado de la última ejecución) y los detalles son visibles en el formulario **analisi nfp**.