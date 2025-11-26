---
title: Actualización del valor Net Flow Position (NFP)
sidebar_position: 5
ai_generated: true
---

Este procedimiento realiza el cálculo de la posición de flujo neto (NFP<!-- Net Flow Position -->) de un artículo con buffer<!-- articolo a buffer --> en una determinada unidad logística<!-- unità logistica -->.

Para el mismo artículo, el valor de NFP<!-- NFP --> cambia según la unidad logística<!-- unità logistica --> en la que está almacenado, por lo tanto, si por ejemplo está almacenado en 5 unidades logísticas<!-- unità logistiche -->, tendremos 5 valores de NFP<!-- NFP --> para el mismo artículo, uno por cada unidad logística<!-- unità logistica -->.

El cálculo realizado, según la teoría, es el siguiente:

NFP = Existencias actuales<!-- On-Hand --> + En pedido<!-- On Order --> - Demanda<!-- Demand --> - Picos de demanda<!-- Demand Spikes -->

Existencias actuales<!-- On-hand --> = es el stock relacionado al magazzino<!-- magazzino --> de la fila (valor vacío de magazzino<!-- magazzino --> para la fábrica).

En pedido<!-- On order --> = es la cantidad total restante de los pedidos confirmados (para los centros de distribución, se refiere a pedidos de compra y pedidos de suministro internos; para la fábrica, se refiere a pedidos de compra, producción y trabajo externo<!-- conto lavoro -->)

Demanda<!-- Demand --> = es la suma de todas las necesidades pendientes cuya fecha de compromiso no sea posterior a la fecha de hoy.

Para los centros de distribución y los hubs, la demanda proviene ya sea de pedidos de clientes o de pedidos de suministro internos confirmados (los planificados no se consideran); para la fábrica, a estos se suman las necesidades de los pedidos de producción y trabajo externo<!-- conto lavoro --> tanto confirmados como planificados, solicitudes de compra<!-- rda --> y facturas no descargadas.

Picos de demanda<!-- Demand Spikes --> = total de los posibles picos de demanda en el periodo desde mañana hasta mañana más el horizonte de picos de demanda<!-- orizzonte dei picchi di domanda (OSH) --> indicado en los parámetros DDMRP.

El resultado del cálculo también incluye la indicación de la posible cantidad a pedir, ya que si NFP<!-- NFP --> \<= zona roja + zona amarilla entonces es necesario emitir un pedido por una cantidad igual a zona roja + zona amarilla + zona verde - NFP<!-- NFP -->, teniendo en cuenta las posibles excepciones de zonas en la fecha de hoy.

Todos los elementos del cálculo se almacenan para facilitar el análisis y permitir revisiones de datos históricos.

Por cada día se almacena solo un cálculo (si ejecuto el procedimiento varias veces hoy, solo se guardará el resultado de la última ejecución) y los detalles pueden visualizarse en el formulario **Análisis NFP<!-- Analisi NFP -->**.