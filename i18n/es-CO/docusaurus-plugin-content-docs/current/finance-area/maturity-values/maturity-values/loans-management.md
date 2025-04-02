---
title: gestione mutui
sidebar_position: 2
---

### Introducción (Introduzione)

Desde este formulario es posible buscar e ingresar nuevos préstamos pasivos.

La gestión del préstamo pasivo permite, en detalle, ingresar todos los datos relacionados, en particular el plan de amortización del préstamo, con el fin de proceder posteriormente a la contabilización automática del pago de las cuotas en las fechas previstas.

Los campos principales expuestos en la máscara son los mismos que están presentes en el detalle.

Para ingresar un nuevo préstamo presione **nuovo**.

El primer dato obligatorio a ingresar es el tipo de préstamo, a través de una caja combinada que remite a la tabla correspondiente *tipi mutuo* (también accesible con el botón derecho y el comando Abrir formulario).

### Tabla de tipos de préstamo (Tabella tipi mutuo)

:::note Campos de la tabla Tipos de Préstamo (Campi della tabella Tipi Mutuo)
**tipo mutuo**: código para recuperar el dato

**Descripción del tipo de préstamo (Descrizione del tipo mutuo)**: descripción extensa del dato

**Tipo de flujo / Descripción (Tipo flusso / Descrizione)**: campo para recuperar (en la tabla *Tipos de flujo financiero*) qué tipo de flujo financiero relacionado con la elaboración del Cash Flow se asociará a las cuotas del préstamo, de manera que pueda representarse automáticamente en la elaboración de los cash flows.

**causale**: causa contable asociada para permitir la contabilización automática de las cuotas
:::

### Detalle del nuevo préstamo (Dettaglio nuovo mutuo)

Los otros campos obligatorios son la descripción del contrato y las cuentas principales para las subsecuentes operaciones de contabilización.

- Banco (Banca): para ingresar la cuenta corriente bancaria con la que se pagarán las cuotas.
- Deuda (Debito): para ingresar la cuenta de deuda de la cual se destinarán los pagos de las cuotas, **en línea capital (in linea capitale)** (por ejemplo, "Préstamos pasivos (Mutui passivi)").
- Intereses (Interessi): para ingresar la cuenta sobre la cual se contabilizará la porción de intereses de cada cuota.
- Costos (Costi): para ingresar la cuenta donde se contabilizará la comisión u otros costos de cada cuota.

Los otros campos importantes son el importe otorgado, la divisa (en particular, si es diferente de Euro, activa el tipo de cambio correspondiente).

**TAEG (TAEG):** tasa de interés aplicada al préstamo, este dato se utiliza en el procedimiento de cálculo automático del plan de amortización.

El campo Versión se relaciona con el botón **nuova versione** presente en el formulario de búsqueda que permite, incluso después de ingresar el plan de amortización y la contabilización de algunas cuotas, realizar modificaciones en el plan, historiando la situación anterior.

En la cuadrícula de detalle se ingresa el plan de amortización compuesto por todas las cuotas previstas, completando la fecha (que será utilizada en el procedimiento de contabilización), la porción de capital y la porción de intereses y las comisiones correspondientes (en la columna **costo**).

Las columnas sucesivas, resaltadas en azul, son gestionadas por Fluentis para destacar el total de la cuota, la contabilización realizada mediante el procedimiento correspondiente y la referencia a la registración contable generada.

### Procedimientos disponibles en la barra de herramientas (Procedure disponibili nella ribbon bar)

Los procedimientos disponibles, es decir, Calcular Plan de Amortización (Calcola Piano di ammortamento), Cambiar Fechas de Cuotas (Cambia date Rate) y Actualizar Gastos de Cuota (Aggiorna spese rata), son los mismos disponibles para la gestión de leasing, por lo tanto, se remite a la [**página correspondiente**](/docs/finance-area/leasing/new).

### Contabilización de cuotas del préstamo (Contabilizzazione rate mutuo)

Se realiza utilizando los comandos ubicados en la barra de herramientas **contabilizzazione** (y **ripristina contabilizzazione** para anular la operación).