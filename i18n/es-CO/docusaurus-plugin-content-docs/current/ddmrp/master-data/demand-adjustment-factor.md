---
title: Factor de ajuste del consumo diario medio (Fattore di rettifica del consumo giornaliero medio)
sidebar_position: 6
---

El consumo diario medio de un buffer (ADU) está especificado en la tabla de parámetros DDMRP para cada artículo y para cada unidad logística (centro de distribución o fábrica).

A través de esta tabla, es posible indicar un coeficiente multiplicativo del consumo medio diario que se aplicará en fechas específicas mediante valores mayores o iguales a cero. 

El procedimiento **Actualización del valor de zonas de artículos a buffer (Aggiornamento valore zone articoli a buffer)** en dichas fechas considerará un valor del consumo medio diario igual al que está presente en la tabla de parámetros DDMRP multiplicado por el coeficiente presente en esta tabla, y las zonas verde, amarilla y roja se calcularán teniendo en cuenta dicho producto (el procedimiento no modificará el valor ADU en los parámetros DDMRP).

Sirve para alterar el valor normal del consumo medio diario solo por un breve período, si se sabe de antemano que habrá variaciones significativas en la demanda, pero que no representan un cambio estructural y permanente en la misma, como por ejemplo en el caso de campañas promocionales, introducción de nuevos productos o eliminación de productos antiguos.