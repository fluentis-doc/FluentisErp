---
title: Factor de ajuste del consumo diario promedio
sidebar_position: 6
ai_generated: true
---

El consumo diario promedio de un buffer<!-- buffer --> (ADU) se especifica en la tabla de parámetros DDMRP para cada artículo y para cada unidad logística<!-- unià logistica --> (centro de distribución<!-- centro distribuzione --> hub o fábrica).

Por medio de esta tabla es posible indicar un coeficiente multiplicador del consumo medio diario<!-- consumo medio giornaliero --> a aplicar en fechas específicas mediante valores mayores o iguales a cero.

El procedimiento **Actualización de valor de zonas de artículos en buffer<!-- Aggiornamento valore zone articoli a buffer -->** en dichas fechas considerará un valor del consumo medio diario<!-- consumo medio giornaliero --> igual al presente en la tabla de parámetros DDMRP multiplicado por el coeficiente presente en esta tabla, y las zonas verde, amarilla y roja se calcularán teniendo en cuenta dicho producto (el procedimiento no modificará el valor ADU en los parámetros DDMRP<!-- parametri Ddmrp -->).

Sirve para alterar el valor normal del consumo medio diario<!-- consumo medio giornaliero --> solo por un breve período, si ya se sabe de antemano que habrá variaciones significativas en la demanda pero que no representan un cambio estructural y permanente, como por ejemplo en el caso de campañas promocionales, introducción de nuevos productos o eliminación de productos antiguos.