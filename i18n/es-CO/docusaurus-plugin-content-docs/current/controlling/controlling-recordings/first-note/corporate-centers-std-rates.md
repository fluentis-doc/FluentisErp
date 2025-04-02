---
title: tariffe standard centri aziendali
sidebar_position: 3
---

En este formulario es posible ingresar (mediante el botón **nuovo**) tarifas estándar fijas, no calculadas mediante cocientes definidos entre el resultado de un modelo de reclasificación y el resultado de un centro empresarial.

Estas tarifas serán utilizadas por los costos controladores (cost drivers) (en particular por el criterio de distribución *Reversión sobre producción a tarifa estándar*) para valorar los movimientos y resultados de los centros típicamente movidos a magnitudes físicas y, por ende, no económicas.

Para codificar una tarifa fija, debemos ingresar:
- una [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de análisis (por ejemplo, *consuntivo*, en lugar de *budget*),  
- el [***Centro empresarial***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) de referencia (típicamente un centro valorado a magnitudes físicas),  
- un ***Código*** de la tarifa,  
- una ***Descripción*** de la tarifa.  

En la cuadrícula inferior, luego ingresaremos los detalles de la tarifa:
- El **anno*** de referencia,
- el rango **periodo da*** y **periodo a***,
- el **valore fisso*** de la tarifa,
- el **valore variabile*** de la tarifa.

La cuota fija y variable se refiere a la distribución de los datos del controlling en costos fijos y costos variables, que se configura desde el *piano dei conti* mediante el campo **Variabilidad** y la tabla **variabilità centri di costo**.

:::tip Información adicional (Approfondimento)
Conforme a la definición del porcentaje de variabilidad, cada movimiento económico que se retoma de un cierre interanual se divide en cuota fija y/o variable. Podría ser, por lo tanto, 100% fijo, o 100% variable, o, por ejemplo, 40% fijo y 60% variable. Las tarifas valorizarán, entonces, separadamente la componente fija y variable del costo.
:::