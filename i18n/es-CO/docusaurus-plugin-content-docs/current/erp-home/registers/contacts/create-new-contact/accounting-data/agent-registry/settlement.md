---
title: Acuerdo
sidebar_position: 3
---

En esta ventana se configuran los elementos generales de cálculo de la comisión:

**Razón de retención**: el campo es **obligatorio** para valorizar automáticamente también la parte de la retención de impuestos aplicada sobre la compensación del agente. Sin este campo, no será posible valorizar automáticamente la compensación de la liquidación del agente; el campo está vinculado a la tabla [Tipos de Retención](/docs/configurations/tables/finance/withholding-tax-types).

**Período de liquidación**: indica la periodicidad de la liquidación de los agentes;

:::note[Nota]
Este campo tiene solo una función informativa, no se utiliza concretamente en los procedimientos de cálculo de liquidación de comisiones. 

En particular, con el método de *pago realizado*, la selección de las comisiones a liquidar será siempre "todo" *hasta la fecha*, no es posible seleccionar lo que ha madurado en un rango de fechas específico y no se prevé un vínculo con este campo de periodicidad.
Los rangos de filtro presentes en el procedimiento de [creación automática de liquidaciones](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) son, de hecho, referidos a las fechas de pedidos/bolsas/facturas, no a nivel de fechas de **pago**. 

Esto es necesario porque, mientras que para los documentos no hay forma de agregar nuevos/modificar en períodos ya liquidados, el asunto es diferente para los pagos: nada impide crear un pago con fecha de registro en un período ya cerrado en un cálculo de liquidación de agentes (quizás porque no se han conciliado los bancos o se ha cometido un error en un registro anterior), por lo tanto, el dato se "perdería" en los cálculos posteriores.
:::

**Tipo de documento considerado para la base imponible de la comisión**: criterio base para la maduración de la comisión. Es posible indicar que el agente madura la comisión sobre el *pedido confirmado*, sobre la *entrega de mercancía* (es decir, DDT emitido), sobre la *emisión de factura*, sobre la *vencimiento madurado* (independientemente de la cobranza o no), sobre el *pago realizado* (es decir, basado en la cuota cobrada: si el cliente paga la mitad de la factura, el agente madurará la mitad de la comisión de ese documento), sobre el *pago total* (es decir, solo cuando toda la factura esté pagada, el agente madurará toda la comisión).

:::danger[Atención]
Esta configuración NO puede cambiarse una vez que se comienzan a crear las liquidaciones para el agente en el área de ventas: será necesario crear un nuevo registro con la nueva configuración (y utilizar el procedimiento ‘Asignación de agentes' para actualizar masivamente los registros de clientes en Home>Contactos).
:::

:::note Nota
el modo **Pago Total** está disponible solo utilizando la [procedimiento de cálculo de liquidaciones de agentes gestionado por el módulo Administración](/docs/finance-area/professional-men/procedures/calculate-commissions) que no está disponible en el cálculo del módulo Agentes en ventas.
:::

:::note Nota
el procedimiento de gestión de 'Comisiones' en contabilidad permite una modificación 'al vuelo' de la lógica de maduración de los agentes: esto se debe a que la lógica de maduración se almacena a nivel de cada factura/documento.
:::