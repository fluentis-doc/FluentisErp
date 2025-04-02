---
title: estratto conto
sidebar_position: 3
---

Se trata del reporte base para obtener el detalle de los movimientos contables de cada subcuenta, independientemente del tipo (activo, pasivo, costo, ingreso, anagráficos): con el reporte estándar para cada subcuenta habrá una nueva hoja de impresión.

Esta impresión corresponde a lo que, en la terminología contable, se define como "mastrino".

**PRINCIPALES FILTROS**:

- Datos relacionados con la registración contable

   - **conto**: Subcuenta de referencia (por ejemplo, para visualizar los movimientos y el saldo resultante de un determinado proveedor para un cierto rango de fechas, o para visualizar los ingresos referidos a una determinada subcuenta del plan de cuentas);

   - Fecha de registración (Data registrazione)

   - Fecha de competencia **contabile**

   - Número de registración (Numero registrazione)

   - Tipo / Fecha / número de documento en cabecera de la registración (si están presentes - pueden no estar presentes la fecha y el número de documento para las registraciones de primera nota)

   - Tipo de cuenta (Tipo conto)

- Datos de IVA

   - Registro (Registro)

   - Protocolo (abrir el expander)

- Tipo de registraciones (provisionales y/o definitivas)

**OTROS ELEMENTOS CARACTERÍSTICOS DEL REPORT**:

- filtros **Agente** y **Banco**: es posible solicitar, por ejemplo, el extracto de cuenta de todos los clientes en cuya anagrafía se ha insertado este agente, o de todos los proveedores pagados a través de una cierta cuenta bancaria.

- filtro **Proyectos (ex Commesse)**: es posible filtrar los subcuentas conectados a un determinado proyecto (commessa).

- **visualizza importi in valuta**: con el indicador activo también se mostrarán los importes en moneda (junto a los importes en euros, sin ningún agrupamiento); sin este indicador, solo se visualizarán los datos de debe/haber en la divisa de la sociedad.

- **visualizza contropartite**: el indicador activo visualiza los movimientos de contrapartida referidos a los movimientos de la subcuenta seleccionada (formato A4 horizontal).

- **No. de líneas (No. righe)**: en este campo, activo si se activa el indicador anterior, se especifica cuántas líneas de contrapartida insertadas en la sección Libro diario de la **[registración contable](/docs/finance-area/ledger-records/records/ledger-record)** serán visualizadas en el extracto de cuenta. Por ejemplo, en presencia de varias cuentas de ingresos referidas a la registración de una factura emitida, el valor puede aumentar si en la impresión no se incluyen todas las cuentas de contrapartida así como fueron ingresadas en la registración.

- **annotazioni**: este campo permite insertar datos alfanuméricos que se reportarán en la impresión. Puede ser útil para insertar una anotación rápida que solo es válida para la impresión procesada en ese momento; el campo se reinicia al cerrar el formulario.

Posibilidad de visualizar los movimientos expresados en una divisa específica mediante: 

- **visualizza e/c in valuta**: indicador que activa también la caja combinada para la elección de la moneda y desactiva los indicadores Visualizar importes en moneda y Visualizar contrapartidas, además permite agrupar los movimientos por cada moneda individual y totalizarlos.

- **divisa**: permite seleccionar la divisa de referencia para filtrar la exposición de los valores. Se mostrarán solo los valores denominados en la moneda seleccionada para la subcuenta seleccionada.

Es posible ordenar las registraciones por fecha de registración o por fecha de competencia. La opción se vuelve de particular interés en el caso de que el cierre/reapertura de cuentas se realice con fecha de registración y competencia diferentes, a fin de tener un saldo progresivo significativo.

**data ultima apertura conti**: A diferencia de la **[Visualización de cuentas (Visualizzazione conti)](/docs/finance-area/ledger-records/records/view-accounts)**, en la cual siempre son visibles todos los movimientos de cada subcuenta, el reporte es un proceso donde es importante limitar la cantidad de registros a visualizar para no afectar el rendimiento de la máquina. 

En este sentido, la aplicación propondrá en la impresión los movimientos considerando el saldo inicial a partir de la fecha de última apertura de cuentas, que se propone como la fecha más alta que sea anterior a los filtros iniciales del reporte.

Ejemplo: si el usuario filtra los movimientos desde el 01/09/2017 hasta el 31/12/2017 (tanto como fecha de registración como fecha de competencia), el procedimiento propone última apertura de cuentas con fecha 01/01/2017; el resultado será: saldo inicial calculado desde el 01/01/2017 hasta el 31/08/2017, detalle de los movimientos conectados a registraciones con fecha dentro del rango 01/09-31/12/2017 (por lo tanto, en el reporte solo se incluirán las subcuentas que tengan al menos un movimiento entre la fecha de última apertura de cuentas y la fecha final de filtro). Si el usuario, en cambio, elimina la fecha de última apertura de cuentas, el resultado será idéntico al presente en la visualización de cuentas.

**visualizza sintetico**: se trata de un reporte sintético que presenta la lista de todas las subcuentas sin ningún salto de página. Se aconseja el uso de este reporte para imprimir los mastrini que se anexan a las impresiones de cierre del ejercicio contable.

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Vista previa (Anteprima) | Botón para ejecutar la vista previa de impresión del extracto de cuenta. |
| Imprimir (Stampa) | Botón para ejecutar la impresión física del documento extracto de cuenta. |


:::important Ver También
[**TUTORIALES EN VIDEO SOBRE IMPRESIONES CONTABLES**](/docs/video/finance/intro)
:::