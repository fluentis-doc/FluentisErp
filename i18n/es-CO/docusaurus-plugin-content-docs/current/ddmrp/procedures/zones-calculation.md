---
title: Actualización del valor de zonas de artículos en buffer
sidebar_position: 3
ai_generated: true
---

Este procedimiento realiza el cálculo de las zonas verde<!-- zone verde -->, amarilla<!-- gialla --> y roja<!-- rossa --> de cada buffer en función de los parámetros DDMRP de los artículos<!-- articoli -->.

La zona verde<!-- zona verde --> se determina considerando el mayor de los siguientes tres elementos:

1. cantidad mínima ordenable<!-- quantità minima ordinabile -->
2. cantidad consumida en el periodo de reposición (si está definido) = ADU x DOC, es decir, consumo medio diario x ciclo de reposición en días<!-- quantità consumata nel periodo di riordino (se definito) = ADU x DOC cioè consumo medio giornaliero x ciclo di riordino in giorni -->
3. ADU x DLT x LTF, o sea, consumo medio diario x lead time desacoplado x factor de lead time<!-- ADU x DLT x LTF ovvero consumo medio giornaliero x lead time disaccoppiato x fattore di lead time -->

La zona verde<!-- zona verde --> determina el tamaño mínimo de los pedidos (no se puede emitir un pedido por una cantidad menor a la zona verde<!-- zona verde -->) y la frecuencia media de emisión de los pedidos (mientras más grande sea, menos a menudo se realiza el pedido).

La zona amarilla<!-- zona gialla --> se determina como ADU x DLT, es decir, consumo medio diario x lead time desacoplado.

La zona roja<!-- zona rossa --> se calcula como ADU x DLT x LTF (1 + VAF), o sea, consumo medio diario x lead time desacoplado x factor del lead time, todo ello multiplicado por 1 más el factor de variabilidad.

Por este motivo, a medida que aumenta la variabilidad, aumenta la zona roja<!-- zona rossa -->, es decir, la reserva de seguridad del artículo<!-- scorta di sicurezza dell'articolo -->, o sea, esa parte del inventario que sirve para afrontar imprevistos.

Este procedimiento tiene en cuenta los valores del **Factor de ajuste del consumo diario medio<!-- Fattore di rettifica del consumo giornaliero medio -->**, así como eventuales excepciones de las zonas roja<!-- rossa -->, amarilla<!-- gialla -->, verde<!-- verde --> válidas al momento de la ejecución.

El resultado se utiliza para modificar los valores de las zonas en la tabla de parámetros Ddmrp<!-- tabella dei parametri Ddmrp -->.