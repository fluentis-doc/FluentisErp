---
title: Gestión de préstamos
sidebar_position: 2
ai_generated: true
---

### Introducción<!-- Introduzione -->

Desde este formulario es posible buscar e ingresar nuevos préstamos pasivos<!-- mutui passivi -->.

La gestión del préstamo pasivo<!-- mutuo passivo --> permite, en detalle, ingresar todos los datos relacionados, en particular el plan de amortización del préstamo<!-- mutuo -->, con el fin de proceder posteriormente con la contabilización automática del pago de las cuotas en las fechas previstas.

Los campos principales expuestos en la pantalla son los presentes también en el detalle.

Para ingresar un nuevo préstamo<!-- mutuo --> presione **Nuevo<!-- Nuovo -->**.

El primer dato obligatorio a ingresar es el tipo de préstamo<!-- mutuo -->, mediante una lista desplegable que remite a la tabla correspondiente *Tipos de préstamo<!-- Tipi mutuo -->* (accesible también con el botón derecho y el comando Abrir formulario<!-- Apri form -->).

### Tabla tipos de préstamo<!-- Tabella tipi mutuo -->

:::note Campos de la tabla Tipos de Préstamo<!-- Campi della tabella Tipi Mutuo -->
**Tipo de Préstamo<!-- Tipo Mutuo -->**: código para llamar al dato

**Descripción del tipo de préstamo<!-- Descrizione del tipo mutuo -->**: descripción extendida del dato

**Tipo de flujo / Descripción<!-- Tipo flusso / Descrizione -->**: campo para llamar (en la tabla *Tipos de flujo financiero<!-- Tipi flusso finanziario -->*) qué tipo de flujo financiero relacionado con el procesamiento del Cash Flow será asociado a las cuotas del préstamo<!-- rate mutuo -->, de modo que puedan ser representadas automáticamente en el procesamiento de cash flow

**Causal<!-- Causale -->**: causal contable asociada para permitir la contabilización automática de las cuotas<!-- rate -->
:::

### Detalle de nuevo préstamo<!-- Dettaglio nuovo mutuo -->

Los otros campos obligatorios son la descripción del contrato y las cuentas principales para las posteriores operaciones de contabilización

- Banco: para ingresar la cuenta corriente bancaria con la que se pagarán las cuotas<!-- rate -->
- Deuda: para ingresar la cuenta de deuda desde la cual se descontarán los pagos de las cuotas<!-- rate -->, **en línea de capital** (por ejemplo, "Préstamos pasivos<!-- Mutui passivi -->")
- Intereses: para ingresar la cuenta en la que se contabilizará la parte de intereses de cada cuota<!-- rata -->
- Costos: para ingresar la cuenta donde se contabilizará la comisión u otros costos de cada cuota<!-- rata -->

Otros campos importantes son el importe desembolsado, la divisa (especialmente si es diferente de Euro, activa el tipo de cambio correspondiente)

**TAEG:** tasa de interés aplicada al préstamo<!-- mutuo -->, el dato se utiliza en el procedimiento de cálculo automático del plan de amortización.

El campo Versión se relaciona con el botón **Nueva Versión<!-- Nuova Versione -->** presente en el formulario de búsqueda, que permite, incluso después de ingresar el plan de amortización y la contabilización de algunas cuotas<!-- rate -->, realizar modificaciones en el plan, manteniendo un historial de la situación anterior.

En la cuadrícula de detalle se ingresa el plan de amortización compuesto por todas las cuotas<!-- rate --> previstas, completando la fecha (que será retomada en el procedimiento de contabilización), la parte de capital y la de intereses y las correspondientes comisiones (en la columna **Costo<!-- Costo -->**)

Las columnas siguientes, resaltadas en azul, son gestionadas por Fluentis para destacar el total de la cuota<!-- rata -->, la contabilización realizada mediante el procedimiento correspondiente y la referencia al asiento contable generado.

### Procedimientos disponibles en la ribbon bar<!-- Procedure disponibili nella ribbon bar -->

Los procedimientos disponibles, es decir, Calcular Plan de amortización, Cambiar fechas de cuotas<!-- Rate --> y Actualizar gastos de cuota<!-- rata -->, son los mismos disponibles para la gestión de leasing<!-- leasing -->, por lo tanto, se remite a la [**página correspondiente**](/docs/finance-area/leasing/new).

### Contabilización de cuotas del préstamo<!-- Contabilizzazione rate mutuo -->

Se realiza utilizando los comandos ubicados en la ribbon bar **Contabilización<!-- Contabilizzazione -->** (y **Restaurar contabilización<!-- Ripristina contabilizzazione -->** para anular la operación)