---
title: Comisiones
sidebar_position: 7
ai_generated: true
---

Este formulario permite visualizar las comisiones<!-- commissioni --> (comisiones de agentes<!-- provvigioni agenti -->) devengadas y liquidadas.

Se refiere a la gestión de las comisiones de los agentes<!-- provvigioni agenti --> realizada desde el módulo administrativo.

En la sección superior están disponibles los filtros para Agente y para algunos elementos contables, ya que las filas relativas a las comisiones<!-- provvigioni --> se insertan en el momento en que la factura de venta que las determina es contabilizada.

:::note Nota
**Se recuerda que dentro de la causa contable<!-- causale contabile --> con la que se contabiliza la factura debe estar activo el flag de gestión de comisiones<!-- provvigioni -->, el cual hará que se valoricen los datos en la pestaña dedicada a las comisiones<!-- provvigioni --> presente dentro del asiento contable<!-- registrazione contabile -->.**
:::

Otros elementos de filtro son los cuatro indicadores que permiten buscar comisiones<!-- provvigioni --> por liquidar, ya liquidadas o ambas, y comisiones<!-- provvigioni --> no devengadas o devengadas.

**N.B.** Más precisamente, la condición *ABIERTA<!-- APERTA -->* y *CERRADA<!-- CHIUSA -->* hace referencia a si aún queda algún saldo por cobrar o si ya está todo cobrado (y, por lo tanto, la comisión<!-- provvigione --> *cerrada* no tendrá otros movimientos<!-- movimenti -->).

En la cuadrícula de detalle, las filas corresponden a las comisiones<!-- provvigioni --> calculadas en la factura, insertadas en el momento de la contabilización de la propia factura.

Según el criterio de devengo definido en la ficha del agente, (por ejemplo, al haberse realizado el pago) se crearán filas de "reverso" (por ejemplo en caso de pago parcial o de una de las varias partidas abiertas, se creará una fila correspondiente al valor del pago). Para verlas, es necesario expandir el detalle de la fila principal con el botón + presente a la izquierda de la fila.

En el detalle (que luego se reporta en la fila principal) también está el flag que se activa cuando la comisión<!-- provvigione --> es liquidada al agente.

![](/img/it-it/finance-area/maturity-values/commissions.png)

:::tip ENLACE<!-- LINK -->
Para el procedimiento de liquidación de comisiones<!-- liquidazione provvigioni --> específico de la gestión desde el módulo administrativo, consulte [**aquí**](/docs/finance-area/professional-men/procedures/calculate-commissions)
:::