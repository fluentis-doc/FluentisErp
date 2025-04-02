---
title: Creación y Gestión de Efectos (Creazione e Gestione effetti)
sidebar_position: 5
---

El formulario se encuentra en la ruta **Tesorería > Efectos > Crear Efecto** y permite la creación *manual* y la gestión, modificación/visualización del efecto.

## Cómo crear un Nuevo efecto (Nuovo effetto)

:::tip[Atención]
Vamos a ilustrar los pasos para la creación ***manual*** de un efecto. Sin embargo, **este modo es poco utilizado. Se recomienda utilizar los procedimientos automáticos:**

[**Adquisición de efectos de las partidas**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)

[**Adquisición de efectos de las facturas**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)
:::

Desde este formulario:

1. Selecciona el **tipo effetto**: el programa procederá a asignar un **número** según el numerador asociado al tipo de efecto y al **anno** correspondiente, que se propone como el año de la fecha del sistema.

2. Completa los campos **debitore** (con la cuenta contable del sujeto titular del efecto) y **scadenza** (con la fecha de vencimiento del efecto).

3. Guarda el encabezado del efecto.

4. Completa los campos **importo valuta** y **importo effetto** manualmente o gestiona automáticamente en base a las partidas/vencimientos seleccionados en las pestañas de **referencias de vencimientos/partidas**. El importe del sello (importo bollo) está en un campo no utilizado. En las pestañas de referencias de partidas o vencimientos puedes utilizar los comandos **inserimento partite** o **inserimento scadenze** para buscar e insertar partidas/vencimientos en el efecto.

La **data valuta** es la fecha para el cambio en el caso de efectos en moneda. Se propone igual a la fecha del efecto.

Los elementos obligatorios a indicar son la fecha de vencimiento, dividendo y cambio, el cliente deudor y la plaza (completada en base al registro asociado al cliente).

El **agente** es un campo de referencia del agente principal de la factura de origen.

El **stato effetto** se propone como *emitido* y se actualizará automáticamente en base a las operaciones que se realicen para el efecto.

El indicador **stampato** no se gestiona, mientras que el *contabilizzato* y *accreditato* dependen de los procedimientos de contabilización de efectos y créditos ejecutados.

El campo **riferimenti** es un campo de notas libre, que se reporta en el archivo como referencia de la operación.

### La Pestaña Presentación (Tab Presentazione)

Presenta dos secciones:

**appoggio bancario**, donde se reportan los datos de la entidad bancaria de apoyo tales como **abi/cab** (obligatorios para poder ingresar el efecto en una lista de presentación) además de *conto corrente* (IBAN y SWIFT) y *CIN*, que son necesarios solo en caso de efectos RID.

**estremi presentazione** reporta los datos de la lista con la cual se presentó en el banco (por ejemplo, al salvo buen fin o al cobro).

### La Pestaña Referencias Vencimientos (Tab Riferimenti scadenze)

En esta sección se pueden visualizar las referencias de la factura de origen (en caso de utilizar el procedimiento *adquisición de efectos de los vencimientos*) o agregar vencimientos manualmente a través del botón *inserimento scadenze*. En este caso, también es posible ingresar vencimientos no vinculados a tipos de pago a gestionar con efectos (ejemplo *recibos bancarios*), así como vencimientos vinculados a notas de crédito.

### La Pestaña Referencias Partidas (Tab Riferimento partite)

En esta sección se pueden visualizar las referencias de las partidas de origen (en caso de adquisición de efectos de las partidas) o agregar partidas manualmente a través del botón *ingreso de partidas (inserimento partite)*.

En este caso, también es posible ingresar partidas no vinculadas a tipos de pago a gestionar con efectos (ejemplo *recibos bancarios*), así como partidas vinculadas a notas de crédito.

### La Pestaña Otro (Tab Altro)
En esta sección se pueden almacenar las referencias de los giradores y de los avalistas.