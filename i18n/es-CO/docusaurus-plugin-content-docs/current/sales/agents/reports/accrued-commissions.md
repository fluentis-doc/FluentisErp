---
title: Comisiones devengadas
sidebar_position: 2
ai_generated: true
---

El formulario se abre a través de la ruta *Ventas > Agentes > Liquidaciones de agentes > Impresiones*<!-- *Vendite > Agenti > Liquidazioni agenti > Stampe* -->.

La impresión es una simulación del cálculo de la comisión devengada por el agente<!-- provvigione maturata dall'agente -->, según la configuración de su ficha de datos y los filtros aplicados al reporte.

**En particular, en el caso de comisiones sobre lo cobrado<!-- provvigioni sull'incassato -->, este informe mostrará los datos devengados excluyendo los valores de las liquidaciones automáticas creadas en el sistema de gestión<!-- gestionale -->, por lo que estas se vuelven obligatorias para obtener un informe alineado;** en el caso de comisiones sobre facturado/entregado/pedido<!-- provvigioni sul fatturato/consegnato/ordinato -->, el uso correcto del rango de filtro por fechas ya permite de por sí un resultado correcto independientemente del uso del procedimiento automático de liquidación de comisiones.

**Imprimir comisiones devengadas al** indica la fecha de referencia para el cálculo de las comisiones sobre lo *cobrado*<!-- incassato -->.

El flag **Imprimir deuda vs/agente a la fecha** activa la fecha correspondiente: con esta opción es posible simular la impresión de las comisiones devengadas a esa fecha, incluyendo también aquellas liquidadas en fecha posterior (que normalmente se excluyen).

El flag **Considerar comisiones cero en imponible comisionable** permite considerar entre los valores imponibles para comisiones también aquellos que tienen un valor de comisión igual a cero.

:::tip COMISIONES SOBRE LO COBRADO Y COMPENSACIÓN DE PARTIDAS<!-- PROVVIGIONI SULL'INCASSATO E COMPENSAZIONE PARTITE -->
En caso de que las comisiones se calculen sobre lo cobrado<!-- provvigioni sull'incassato --> y se realice una compensación de partidas (por ejemplo, por anticipos antiguos recibidos), es importante tener en cuenta que la compensación asigna las líneas de cierre de partidas a efectos del cálculo de las comisiones devengadas <!-- calcolo provvigioni maturate --> en base a la **fecha de registro<!-- data registrazione -->** más reciente entre las dos que crearon las partidas que se están compensando entre sí.

En una situación de anticipos y extornos frecuente, donde quizás existen importes iguales, es fundamental asegurarse de compensar entre sí los anticipos y extornos referidos al mismo periodo; de lo contrario, la comisión resultará devengada en una fecha incorrecta.
:::

:::tip COMISIONES SOBRE LO COBRADO Y ASIENTOS CONTABLES PROVISIONALES<!-- PROVVIGIONI SULL'INCASSATO E SCRITTURE CONTABILI PROVVISORIE -->
Para el cálculo de las comisiones devengadas<!-- provvigioni maturate --> se consideran SOLO los registros en estado **definitivo**, por lo tanto, eventuales cobros (incluso anticipados) registrados de forma provisional serán ignorados.
:::

:::tip COMISIONES SOBRE LO COBRADO Y RECIBOS BANCARIOS<!-- PROVVIGIONI SULL'INCASSATO E RICEVUTE BANCARIE -->
El devengo de las comisiones siempre tiene en cuenta la fecha de vencimiento del efecto, incluso si la partida del cliente se cierra debido a la contabilización de la emisión de Ri.Ba. y el efecto se ha enviado al cobro o acreditado.
:::

:::danger ATENCIÓN<!-- ATTENZIONE -->
Prestar especial atención, en el caso de recibos bancarios, también a la gestión de los **PARÁMETROS DE RIESGO DEL CLIENTE**

donde existen dos campos **N° días tras el vencimiento para efectos presentados al cobro** / **N° días tras el vencimiento para efectos presentados tras el cobro** y que, si están completados, añaden también un retraso en el devengo de las comisiones.

Además, prestar atención en la fase de inicialización de un nuevo entorno a que se haya guardado al menos una vez dentro del formulario Parámetro de riesgo de cliente, para que existan los parámetros por defecto (en particular los campos mencionados arriba); de lo contrario, la fecha de vencimiento del efecto no será leída y la comisión siempre se devengará a la fecha de cierre de la partida por emisión de Ri.Ba.
:::