---
title: percentuali di variazione
sidebar_position: 7
---

El formulario se encuentra en la ruta: **Tablas > Control (Tabelle) > Contabilidad analítica (Controlling) > percentuali di variazione (Percentuali di variazione)**

:::tip Nota
Esta tabla es de uso exclusivo para las empresas que han configurado el *controlling*.
:::

En esta tabla es posible codificar categorías de variaciones porcentuales para ser utilizadas en diversos procedimientos de control, como por ejemplo la elaboración del presupuesto previsional a partir del resultado del año anterior, aplicando incrementos o decrementos, especialmente cuando se procede a una duplicación del **storico registrazioni gestionali***.

En el **[plan de cuentas (piano dei conti)](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)** se asignará, para cada subcuenta, la correspondiente entrada para la variación automática. Esto se utilizará en el procedimiento que copia de un área de análisis a otra (por ejemplo, de *consuntivo* a *budget*). Se podrá decir al sistema “aplica o no estas porcentajes”.

#### Campos específicos 
- **codice***  
- **descrizione***  
- ***CUOTA FIJA (QUOTA FISSA)*** es el porcentaje de variación, positivo o negativo, que se aplicará a la cuota fija.  
- ***CUOTA VARIABLE (QUOTA VARIABILE)*** es el porcentaje de variación, positivo o negativo, que se aplicará a la cuota variable.

:::tip Profundización
EJEMPLO: para los costos fijos, año tras año establezco incrementos del 5%; para los semi-variables, el incremento será del 3% para la cuota variable y del 3% para la cuota fija; y, finalmente, para los costos variables, el incremento será del 10%.  

La distribución entre costos variables y fijos en el control de gestión proviene de la metodología de "dividir" todos los costos y todos los ingresos registrados en contabilidad general en cuota fija y cuota variable. Luego se lleva a la contabilidad *de gestión (gestionale)* "mensualizada" y se divide en cuota fija y en cuota variable.
:::