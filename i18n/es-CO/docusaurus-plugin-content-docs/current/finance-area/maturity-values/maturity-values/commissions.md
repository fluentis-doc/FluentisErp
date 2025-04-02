---
title: commissioni
sidebar_position: 7
---

Este formulario permite visualizar las comisiones (proviciones de agentes) acumuladas y liquidadas.

Se refiere a la gestión de las comisiones de los agentes llevada a cabo por el módulo administrativo.

En la sección de cabecera se encuentran los filtros para Agente y algunos elementos contables, dado que las líneas relacionadas con las comisiones se ingresan ya en el momento en que la factura de venta que las determina es contabilizada.

:::note Nota
**Se recuerda que dentro de la causal contable con la que se contabiliza la factura debe estar activo el indicador de gestión de comisiones, que asegurará que los datos sean valorados en la pestaña correspondiente dedicada a las comisiones presente en el registro contable.**
:::

Otros elementos de filtrado son los cuatro indicadores que permiten buscar comisiones a liquidar, comisiones liquidadas o ambas, y comisiones no acumuladas o acumuladas.

**N.B.** más precisamente, la condición *ABIERTA (APERTA)* y *chiusa* se refiere al hecho de que aún haya un saldo por cobrar o si está todo cobrado (y, por lo tanto, la comisión *cerrada* no tendrá más movimientos).

En la cuadrícula de detalle, las líneas corresponden a las comisiones calculadas en la factura ingresadas al momento de la contabilización de la factura misma.

Dependiendo del criterio de acumulación definido en el registro del agente, (por ejemplo, a pago efectuado) se crearán líneas de "anulación" (por ejemplo, en caso de pago parcial o de una de las varias partidas abiertas, se creará una línea correspondiente al valor del pago). Para verlas, es necesario expandir el detalle de la línea principal con el botón + a la izquierda de la línea.

En el detalle (que luego se refleja en la línea principal) también se encuentra el indicador que se activa cuando la comisión se liquida al agente.

![](/img/it-it/finance-area/maturity-values/commissions.png)

:::tip ENLACE (LINK)
Para el procedimiento de liquidación de comisiones específico de la gestión del módulo administrativo, ver [**aquí**](/docs/finance-area/professional-men/procedures/calculate-commissions).
:::