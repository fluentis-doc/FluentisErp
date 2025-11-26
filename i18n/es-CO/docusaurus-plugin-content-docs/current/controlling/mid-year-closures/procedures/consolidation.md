---
title: Consolidación
sidebar_position: 1
ai_generated: true
---

El procedimiento permite, en primer lugar, vincular los cierres intra-anuales de las distintas sociedades presentes en la base de datos, con el objetivo de crear un **balance consolidado de grupo<!-- bilancio consolidato di gruppo -->** para imprimir o valorizar en una re-clasificación de balance. Además, también creará un asiento de consolidación<!-- registrazione di consolidamento --> en el que **se eliminarán los movimientos<!-- movimenti -->** económicos **intercompany** y los créditos y deudas intercompany.

En el encabezado de la pantalla es posible filtrar el rango de fechas de los cierres a considerar, pero también configurar, opcionalmente, la sociedad matriz de interés: de este modo, en la cuadrícula de la pantalla se visualizarán las sociedades que no tienen establecida una sociedad matriz o las que dependen de la matriz seleccionada. Para cada sociedad, se mostrará el último cierre de cuentas creado dentro del rango de filtro configurado (es posible seleccionar un cierre intra-anual diferente al último propuesto). La casilla ‘Sel.' identificará sobre cuáles ejecutar la operación de consolidación<!-- consolidamento -->, mientras que en la columna 'Cambio' es posible establecer un tipo de cambio específico a utilizar para la conversión de los saldos procedentes de sociedades con moneda diferente a la de la matriz.

Debajo de la cuadrícula, se deben ingresar algunos parámetros a utilizar: la descripción que se asignará a la consolidación<!-- consolidamento -->, una causal de registro<!-- causale di registrazione -->, el usuario de la operación (propuesto ya como el usuario activo) y, finalmente, una casilla de conversión de los códigos de subcuenta<!-- sottoconto --> a los de la sociedad matriz<!-- capogruppo -->.

Dentro de la tabla de sociedades, fila por fila, es posible asociar un registro maestro (anagráfico): a partir de este registro, se identificarán las subcuentas<!-- sottoconti --> clientes/proveedores del grupo (por ejemplo, en la sociedad X se verá si el registro relacionado con la sociedad Y está codificado como cliente y/o proveedor). De los asientos asignados a estas subcuentas<!-- sottoconti --> valorizados en los cierres seleccionados, se ingresarán con signo contrario los costos/ingresos en el nuevo asiento; para las mismas subcuentas<!-- sottoconti --> se verificarán las partidas abiertas al momento de la consolidación y también se eliminarán los saldos correspondientes.

:::tip Nota<!-- Nota -->
En el plan de cuentas de las sociedades que tienen configurada una sociedad matriz en la tabla, son visibles los campos para asignar los códigos de cuenta/subcuenta<!-- conto/sottoconto --> de la sociedad matriz<!-- capogruppo -->.
:::

## Procedimiento<!-- Procedura -->

:::important[]
Procedimiento paso a paso para la activación y ejecución (supongamos dos empresas)

- En la tabla [**sociedades<!-- società -->**](/docs/configurations/tables/general-settings/company) de cada una de las empresas en cuestión, complete el campo ***Registro maestro asociado<!-- Anagrafica associata -->*** para vincular un Contacto que identifique la propia empresa en la consolidación, por ejemplo, si la empresa se llama Alfa, en su tabla de sociedades vinculamos un contacto (creado previamente) que se llama, por ejemplo, "Alfa Spa".
- En el plan de cuentas de cada una de las sociedades<!-- società --> se habrá creado la subcuenta<!-- sottoconto --> (a través de la gestión de **datos contables<!-- dati contabili -->** del registro maestro) de tipo cliente o proveedor de la otra empresa del grupo y se habrán registrado intercambios cruzados, por ejemplo, compra por parte de la empresa 1 y venta por parte de la empresa 2 (cada una desde su perspectiva).
- Cada una de las empresas ejecuta un cierre de cuentas intra-anual para el mismo periodo.
- En el procedimiento *Consolidación<!-- Consolidamento -->* se seleccionarán los dos cierres de las dos sociedades<!-- società --> de las cuales generar los asientos de ajuste por consolidación<!-- scritture di rettifica per consolidamento --> que neutralizarán costos e ingresos y créditos y deudas recíprocas, agregando en cambio los movimientos<!-- movimenti --> hacia el exterior.
:::

## Anteriores<!-- Precedenti -->

Desde la ficha de procedimientos anteriores es posible proceder a la eliminación de los procedimientos de consolidación<!-- consolidamento --> ejecutados.