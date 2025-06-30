---
title: Fórmula
sidebar_position: 3
---

:::tip Nota 
Esta tabla es de uso exclusivo para las empresas que han configurado el *Control*.
:::

En las Fórmulas de cálculo podemos definir cómo crear automáticamente registros extracontables de área a partir de valores de origen. En general, la idea es intentar automatizar, tal vez aproximando, algunos registros que en contabilidad se registrarían posteriormente o que sería costoso ingresar en cada período como registros extracontables de área manuales.

:::tip Ejemplo 
Por ejemplo, podríamos valorar automáticamente los costos de los premios de resultados, que quizás registramos al final del año mediante la aplicación del 3% sobre el volumen de negocios de repuestos de Italia, a través de una fórmula que registra este porcentaje sobre el saldo de la cuenta de interés valorada en el centro de costos de los ingresos por ventas, asignando este costo al centro del Comercial.

O podríamos aplicar fórmulas sobre las cantidades registradas de una unidad de medida, si suponemos que ciertos costos son de un cierto monto por pieza.
:::

Para insertar una nueva *Fórmula*, desde la máscara de búsqueda se presionará el botón *Nuevo  * para abrir la máscara de gestión, que prevé los siguientes campos:  
- la **Fecha de inicio** y **Fecha de finalización** de validez de la regla

- el [**ÁREA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de aplicación de la regla misma

- el **Cuenta de destino**, es decir, el subcuenta a utilizar para registrar el movimiento automático en la analítica del registro extracontable de área

- el [**CENTRO DE DESTINO**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), es decir, el centro a utilizar en la misma línea

- el [**CENTRO DE ORIGEN UM**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), opcional, que sirve como centro de filtro de los movimientos físicos cuando la fórmula prevé cantidades gestionadas por una unidad de medida

- el **CENTRO DE ORIGEN CUENTAS**(/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), opcional, que sirve como centro de filtro de los valores de las subcuentas ingresadas en la fórmula

Debajo tendremos dos cuadrículas, a la izquierda la lista de cuentas del plan de cuentas, a la derecha las [*Unidades de medida*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) disponibles.  
En la base de la máscara hay una sección con la fórmula, que puede ser gestionada arrastrando con el mouse las entidades (*cuentas* y/o *UM*) que se deseen insertar en la fórmula misma.

:::tip Ejemplo 
Una fórmula podría ser, por ejemplo, "40001-004-Ricavi di Vendita ricambi ITA"*0.03.
:::

:::tip Nota 
En la máscara de búsqueda hay un botón para duplicar la fórmula seleccionada.
:::