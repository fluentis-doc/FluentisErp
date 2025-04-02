---
title: Actualización del valor de zonas de artículos a buffer (Aggiornamento valore zone articoli a buffer)
sidebar_position: 3
---

Este procedimiento realiza el cálculo de las zonas verde, amarilla y roja de cada buffer en función de los parámetros DDMRP de los artículos.

La zona verde se determina considerando el mayor de los tres siguientes elementos:

1. cantidad mínima ordenable  
2. cantidad consumida en el período de reabastecimiento (si está definido) = ADU x DOC, es decir, consumo medio diario x ciclo de reabastecimiento en días  
3. ADU x DLT x LTF, que equivale a consumo medio diario x tiempo de entrega desacoplado x factor de tiempo de entrega  

La zona verde determina el tamaño mínimo de los pedidos (no se puede emitir un pedido por una cantidad menor que la zona verde) y la frecuencia media de emisión de pedidos (cuanto más grande es, menos frecuentemente se ordena).

La zona amarilla se determina como ADU x DLT, es decir, consumo medio diario x tiempo de entrega desacoplado.

La zona roja se calcula como ADU x DLT x LTF (1 + VAF), es decir, consumo medio diario x tiempo de entrega desacoplado x factor del tiempo de entrega, todo multiplicado por 1 sumado al factor de variabilidad.

Es por esta razón que al aumentar la variabilidad, aumenta la zona roja, es decir, el inventario de seguridad del artículo, que es aquella parte del inventario que sirve para enfrentar imprevistos.

Este procedimiento tiene en cuenta los posibles valores del **Factor de ajuste del consumo diario medio (Fattore di rettifica del consumo giornaliero medio)**, así como cualquier excepción de las zonas roja, amarilla y verde que sean válidas en el momento de la ejecución del mismo.

El resultado se utiliza para modificar los valores de las zonas en la tabla de parámetros DDMRP.