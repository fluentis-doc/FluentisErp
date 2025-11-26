---
title: Tarifas estándar centros empresariales
sidebar_position: 3
ai_generated: true
---

En este formulario es posible ingresar (mediante el botón **Nuevo**) tarifas estándar fijas, no calculadas a través de cocientes definidos entre el resultado de un modelo de reclasificación y el resultado de un centro empresarial<!-- centro aziendale -->.

Estas tarifas luego serán utilizadas por los cost driver (en particular por el criterio de distribución *Reversión sobre producción a tarifa estándar*) para valorizar los movimientos<!-- movimenti --> y los resultados de los centros que normalmente se gestionan en magnitudes físicas y, por lo tanto, no económicas.

Para codificar una tarifa fija deberá ingresar:
- un área<!-- Area --> de análisis (por ejemplo, *Real<!-- Consuntivo -->*, o bien *Presupuesto<!-- Budget -->*) 
- el [***Centro empresarial***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)<!-- Centro aziendale --> de referencia (normalmente un centro valorizado en magnitudes físicas)
- un ***Código*** de la tarifa
- una ***Descripción*** de la tarifa.

En la cuadrícula inferior luego ingresaremos los detalles de la tarifa:
- El ***Año*** de referencia
- el rango ***Periodo desde*** y ***Periodo hasta***
- el ***Valor fijo*** de la tarifa
- el ***Valor variable*** de la tarifa

La cuota fija y variable se refiere a la distribución de los datos de controlling<!-- controlling --> en costos fijos y costos variables, lo cual se configura ya desde el *Plan de cuentas<!-- Piano dei conti -->* mediante el campo **Variabilidad** y la tabla **Variabilidad centros de costo<!-- Variabilità centri di costo -->**.


:::tip Ampliación<!-- Approfondimento -->
Según la definición del porcentaje de variabilidad, cada movimiento económico que se recupera de un cierre interanual se divide en cuota fija y/o variable. Por lo tanto, podría ser 100% fija, o 100% variable, o por ejemplo, 40% fija y 60% variable. Las tarifas, por lo tanto, valorizarán separadamente la componente fija y variable del costo.
:::