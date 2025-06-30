---
title: Cambio de porcentaje
sidebar_position: 7
---

El formulario se encuentra en la ruta: **Tablas > Control > Contabilidad analítica > Cambio de porcentaje**

:::tip Nota
Esta tabla es de uso exclusivo para las empresas que han configurado el *control*.
:::

En esta tabla es posible codificar categorías de variaciones porcentuales para ser utilizadas en diversos procedimientos de control, como por ejemplo la elaboración del presupuesto previsional a partir del resultado del año anterior, aplicando incrementos o decrementos, especialmente cuando se procede a una duplicación del **gestión de registros históricos***.

En el **[plan de cuentas](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)** se asignará, para cada cuenta detallada, la correspondiente entrada para la variación automática. Esto se utilizará en el procedimiento que copia de un área de análisis a otra (por ejemplo, de *Final* a *Presupuesto*). Se podrá decir al sistema “aplica o no estas porcentajes”.

#### Campos específicos 
- ***CÓDIGO***  
- ***DESCRIPCIÓN*** 
- ***CUOTA FIJA*** es el porcentaje de variación, positivo o negativo, que se aplicará a la cuota fija.  
- ***CUOTA VARIABLE*** es el porcentaje de variación, positivo o negativo, que se aplicará a la cuota variable.

:::tip Profundización
EJEMPLO: para los costos fijos, año tras año establezco incrementos del 5%; para los semi-variables, el incremento será del 3% para la cuota variable y del 3% para la cuota fija; y, finalmente, para los costos variables, el incremento será del 10%.  

La distribución entre costos variables y fijos en el control de gestión proviene de la metodología de "dividir" todos los costos y todos los ingresos registrados en contabilidad general en cuota fija y cuota variable. Luego se lleva a la contabilidad *de gestión* "mensualizada" y se divide en cuota fija y en cuota variable.
:::