---
title: categorie cespiti per il controllo
sidebar_position: 2
---

El formulario se encuentra en la ruta: **Tablas > Control (Tabelle) > Contabilidad analítica (Controlling) > categorie cespiti per il controllo (Categorie cespiti per il controllo)**

:::tip Nota
Esta tabla está dedicada a las empresas que han activado la gestión del *controlling*, pero no es obligatoria en caso de que se deseen aplicar lógicas contables de valoración de los amortizaciones en el control de gestión.
:::

En esta tabla identificamos las diferentes tipologías de cálculo que queremos utilizar en las elaboraciones de los amortizaciones técnicos para el control: las lógicas del control de gestión, en lo que respecta a los activos, se desvían de las contables para utilizar lógicas relacionadas, por ejemplo, con las cantidades producidas por una determinada máquina, más que un valor de recompra. Al hacer esto, se evitan distorsiones relacionadas, por ejemplo, con los criterios de amortización contables que están fuertemente influenciados por las lógicas fiscales.

#### Campos específicos

- **codice** de la categoría

- **descrizione** de la categoría

- **SUBCUENTA DE COSTO (SOTTOCONTO DI COSTO)** y **SUBCUENTA DEL FONDO (SOTTOCONTO DEL FONDO)** a utilizar: podrían ser las mismas subcuentas asociadas a las categorías de activos contables, con el fin de operar a fin de año los ajustes entre las dos lógicas de cálculo, o subcuentas específicas del control que no se utilizan en contabilidad.

:::tip Nota
En caso de que se deseen utilizar en el control, en determinados casos, subcuentas específicas separadas de las de contabilidad general, se recomienda definir un *tipo conto* específico con el indicador *controlling* activado, ya que estas subcuentas no podrán ser utilizadas ni siquiera erróneamente en los registros de contabilidad general.
:::

- **base di calcolo** podemos elegir entre:  
    - *valore patrimoniale*, es decir, el mismo que el de contabilidad  
    - *valore oggettivo*, dato extracontable  
    - *valore di riacquisto*, campo específico para el control  

- **TIPO DE CÁLCULO (TIPO DI CALCOLO)** puede ser de 5 tipos diferentes:  
    - *percentuale*: según el porcentaje para el control establecido en el activo individual  
    - *percentuale perpetua*: como el anterior pero sin verificaciones sobre el remanente a amortizar  
    - *quantità*: para los activos que tienen una vida útil relacionada con una cantidad teórica producida (ej. un molde que puede hacer tantas impresiones)  
    - *quantità perpetua*: como el anterior, pero sin verificar si se ha alcanzado la cantidad total teórica  
    - *totale nell’anno*: para amortizar el activo totalmente en el año de compra.

- **percentuale** podemos establecer el porcentaje de esta categoría, que será reportado en el activo individual, o dejar el campo en blanco para ingresarlo cada vez dentro del activo

- **usa attualizzazione percentuale** El indicador, que también aparece en la pestaña correspondiente *ammortamento per controlling* presente en la ficha del activo, si está activado, hace que el valor del activo se incremente de año en año de acuerdo con el valor establecido en el campo *fattore di attualizzazione* en los **[Parámetros de contabilidad (Parametri di contabilità)](/docs/configurations/parameters/finance/accounting-parameters)**.

- **ricreare i valori di controllo** sirve típicamente en caso de que no se esté seguro de los criterios extracontables que se deben aplicar al cálculo de los amortizaciones técnicos. Dado que la elaboración de los amortizaciones comenzará desde un año YYYY, **FluentisERP** deberá calcular primero los remanentes a fin de año YYYY-1. En caso de que se cambien porcentajes o lógicas, entonces puede ser necesario restablecer estos datos de partida para reiniciar los cálculos.

:::danger ATENCIÓN
Atención a las modificaciones realizadas en estas categorías: si por ejemplo activamos un indicador y guardamos la línea para confirmar, **FluentisERP** nos preguntará si deseamos actualizar los activos de esta categoría. Debemos tener cuidado de que si confirmamos la operación y estamos en una categoría con cálculo porcentual pero *sin el porcentaje establecido*, el sistema también irá a restablecer los porcentajes en los activos.
:::

:::tip Nota
Las categorías ingresadas en esta tabla, con los ajustes correspondientes, serán luego referenciadas dentro de las [**fichas de activos (schede cespite)**](/docs/finance-area/fixed-assets/fixed-assets-management) en la pestaña *ammortamento per controlling*, para asociar el activo individual a la categoría.
:::