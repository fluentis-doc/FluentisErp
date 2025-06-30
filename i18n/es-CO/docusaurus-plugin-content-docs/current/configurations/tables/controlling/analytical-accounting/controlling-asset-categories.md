---
title: Categoría de activos fijos para control
sidebar_position: 2
---

El formulario se encuentra en la ruta: **Tablas > Control > Contabilidad analítica > Categoría de activos fijos para control**

:::tip Nota
Esta tabla está dedicada a las empresas que han activado la gestión del *control*, pero no es obligatoria en caso de que se deseen aplicar lógicas contables de valoración de los amortizaciones en el control de gestión.
:::

En esta tabla identificamos las diferentes tipologías de cálculo que queremos utilizar en las elaboraciones de los amortizaciones técnicos para el control: las lógicas del control de gestión, en lo que respecta a los activos, se desvían de las contables para utilizar lógicas relacionadas, por ejemplo, con las cantidades producidas por una determinada máquina, más que un valor de recompra. Al hacer esto, se evitan distorsiones relacionadas, por ejemplo, con los criterios de amortización contables que están fuertemente influenciados por las lógicas fiscales.

#### Campos específicos

- **Código** de la categoría

- **Descripción** de la categoría

- **CUENTA DETALLADA DE COSTO** y **CUENTA DETALLADA DEL FONDO** a utilizar: podrían ser las mismas cuentas detalladas asociadas a las categorías de activos contables, con el fin de operar a fin de año los ajustes entre las dos lógicas de cálculo, o cuentas detalladas específicas del control que no se utilizan en contabilidad. 

:::tip Nota
En caso de que se deseen utilizar en el control, en determinados casos, cuentas detalladas específicas separadas de las de contabilidad general, se recomienda definir un *tipo de cuenta* específico con el indicador *control* activado, ya que estas cuentas detalladas no podrán ser utilizadas ni siquiera erróneamente en los registros de contabilidad general.
:::

- **Base de cálculo** podemos elegir entre:  
    - *Valor del activo*, es decir, el mismo que el de contabilidad  
    - *Valor objetivo*, dato extracontable  
    - *Valor de recompra*, campo específico para el control  

- **TIPO DE CÁLCULO** puede ser de 5 tipos diferentes:  
    - *Porcentaje*: según el porcentaje para el control establecido en el activo individual  
    - *Porcentaje perpetuo*: como el anterior pero sin verificaciones sobre el remanente a amortizar  
    - *Cantidad*: para los activos que tienen una vida útil relacionada con una cantidad teórica producida (ej. un molde que puede hacer tantas impresiones)  
    - *Cantidad perpetúa*: como el anterior, pero sin verificar si se ha alcanzado la cantidad total teórica  
    - *Completamente en el año*: para amortizar el activo totalmente en el año de compra.

- **Porcentaje** podemos establecer el porcentaje de esta categoría, que será reportado en el activo individual, o dejar el campo en blanco para ingresarlo cada vez dentro del activo

- **Utilice el Porcentaje de Actualización** El indicador, que también aparece en la pestaña correspondiente *Depreciación para el control* presente en la ficha del activo, si está activado, hace que el valor del activo se incremente de año en año de acuerdo con el valor establecido en el campo *Porcentaje de Actualización* en los **[Parámetros contables](/docs/configurations/parameters/finance/accounting-parameters)**.

- **Recrear valores de control** sirve típicamente en caso de que no se esté seguro de los criterios extracontables que se deben aplicar al cálculo de los amortizaciones técnicos. Dado que la elaboración de los amortizaciones comenzará desde un año YYYY, **FluentisERP** deberá calcular primero los remanentes a fin de año YYYY-1. En caso de que se cambien porcentajes o lógicas, entonces puede ser necesario restablecer estos datos de partida para reiniciar los cálculos.

:::danger ATENCIÓN
Atención a las modificaciones realizadas en estas categorías: si por ejemplo activamos un indicador y guardamos la línea para confirmar, **FluentisERP** nos preguntará si deseamos actualizar los activos de esta categoría. Debemos tener cuidado de que si confirmamos la operación y estamos en una categoría con cálculo porcentual pero *sin el porcentaje establecido*, el sistema también irá a restablecer los porcentajes en los activos.
:::

:::tip Nota
Las categorías ingresadas en esta tabla, con los ajustes correspondientes, serán luego referenciadas dentro de las [**Hojas de Activos Fijos**](/docs/finance-area/fixed-assets/fixed-assets-management) en la pestaña *Depreciación para el control*, para asociar el activo individual a la categoría.
:::