---
title: provvigioni maturate
sidebar_position: 2
---

El formulario se abre a través de la ruta *Ventas > Agentes > Liquidaciones de agentes > Impresiones (Liquidazioni agenti > Stampe)*.

La impresión es una simulación del cálculo de la comisión devengada por el agente, de acuerdo con la configuración de su registro y los filtros aplicados al informe.

**En particular, en el caso de comisiones sobre lo cobrado, este informe visualizará los datos devengados excluyendo los valores de las liquidaciones automáticas creadas en el sistema de gestión, que se vuelven por lo tanto obligatorias con el fin de obtener un informe alineado;** en el caso de comisiones sobre facturación / entregado / pedido, el uso correcto del rango de filtro por fechas ya permite obtener un resultado correcto independientemente del uso del procedimiento automático de liquidación de comisiones.

**stampa provvigioni maturate al** indica la fecha de referencia para el cálculo de las comisiones sobre lo *incassato*.

Indicador **stampa debito vs/agente alla data** con el cual se activa la fecha relativa: con esta opción es posible simular la impresión de las comisiones devengadas a esa fecha, incluyendo también aquellas liquidadas en una fecha posterior (que normalmente están excluidas).

Indicador **Considerar comisiones cero en imponible comisional (Considera provvigioni zero in imponibile provvigionale)** permite considerar entre los imponibles comisiones también aquellos que tienen un valor de comisión igual a cero.

:::tip COMISIONES SOBRE LO COBRADO Y COMPENSACIÓN DE PARTIDAS
En el caso de que las comisiones se calculen sobre lo cobrado y se produzca una compensación de partidas (por ejemplo, por anticipos previos recibidos), es necesario prestar atención al hecho de que la compensación asigna las líneas de cierre de partidas para el cálculo de las comisiones devengadas según la **fecha de registro** más reciente entre las dos que han creado las partidas que se compensan entre sí.

En una situación de anticipos y contracargos frecuentes, donde pueden existir montos iguales, se debe tener especial cuidado de compensar entre sí los anticipos y los contracargos correspondientes al mismo período; de lo contrario, la comisión se devengará en una fecha errónea.
:::

:::tip COMISIONES SOBRE LO COBRADO Y ASIENTOS CONTABLES PROVISORIOS
Para el cálculo de las comisiones devengadas, se consideran SOLAMENTE los registros en estado **definitivo**, por lo que los posibles cobros (incluso anticipados) registrados en modo provisional serán ignorados.
:::

:::tip COMISIONES SOBRE LO COBRADO Y RECIBOS BANCARIOS
La devengación de las comisiones tiene en cuenta en todo caso la fecha de vencimiento efecto, incluso si la partida del cliente se cierra por efecto de la contabilización de la emisión de Ri.Ba. y el efecto se presenta al salvo buen fin o se acredita.
:::

:::danger ATENCIÓN
Prestar especial atención en el caso de Recibos bancarios también a la gestión de los **PARÁMETROS DE RIESGO DEL CLIENTE**

donde hay dos campos **N. días sobre el vencimiento para efectos presentados al salvo buen fin** / **N. días sobre el vencimiento para efectos presentados al después del cobro** los cuales, si se valoran, añaden un retraso también en la devengación de las comisiones.

Además, tener cuidado en la fase de inicialización de un nuevo ambiente, que haya sido guardado al menos una vez dentro del formulario de Parámetro de riesgo del cliente, de modo que estén presentes los parámetros predeterminados (en particular, referidos a los campos mencionados anteriormente); de lo contrario, la fecha de vencimiento efecto no será leída y la comisión se devengará siempre al cierre de la partida por emisión de Ri.Ba.
:::