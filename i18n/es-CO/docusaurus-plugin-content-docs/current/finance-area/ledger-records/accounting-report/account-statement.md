---
title: Extracto de cuenta
sidebar_position: 3
ai_generated: true
---

Se trata del reporte base para obtener el detalle de los movimientos contables<!-- movimenti contabili --> de cada subcuenta<!-- sottoconto -->, sea cual sea el tipo (activo, pasivo, costo, ingreso, datos maestros): con el reporte estándar para cada subcuenta<!-- sottoconto --> habrá una nueva hoja de impresión.

Esta impresión corresponde a lo que, en terminología contable, se denomina "libro mayor"<!-- mastrino -->.

**PRINCIPALES FILTROS<!-- PRINCIPALI FILTRI -->**:

- Datos relativos al registro contable<!-- registrazione contabile -->

   - **Cuenta<!-- Conto -->**: Subcuenta<!-- Sottoconto --> de referencia (por ejemplo, para visualizar los movimientos y el saldo resultante de un determinado proveedor para un cierto rango de fechas, o bien para visualizar los ingresos referidos a una determinada subcuenta<!-- sottoconto --> del plan de cuentas);

   - Fecha de registro<!-- Data registrazione -->

   - Fecha de competencia **contable**<!-- Data competenza contabile -->

   - Número de registro<!-- Numero registrazione -->

   - Tipo / Fecha / número de documento en la cabecera del registro (si están presentes - puede que no estén presentes la fecha y el número de documento en los asientos manuales)

   - Tipo de cuenta<!-- Tipo conto -->

- Datos de IVA

   - Registro

   - Protocolo (abrir el expander)

- Tipo de registros (provisorios y/o definitivos)

 

**OTROS ELEMENTOS CARACTERÍSTICOS DEL REPORTE<!-- ALTRI ELEMENTI CARATTERISTICI DEL REPORT -->**:

- filtros **Agente** y **Banco**: es posible solicitar, por ejemplo, el extracto de cuenta<!-- estratto conto --> de todos los clientes en cuya ficha se haya incluido este agente, o de todos los proveedores pagados a través de una determinada cuenta bancaria<!-- conto bancario -->.

- filtro **Proyectos** (antes Proyectos de obra<!-- Commesse -->): es posible filtrar las subcuentas<!-- sottoconti --> vinculadas a un determinado proyecto<!-- commessa -->.

- **Mostrar importes en moneda extranjera<!-- Visualizza importi in valuta -->**: con la casilla activa, también se mostrarán los importes en moneda (junto a los importes en euros, sin ningún agrupamiento); sin esta opción, sólo se mostrarán los datos deudor/acreedor<!-- dare/avere --> en la moneda de la empresa,

- **Mostrar contrapartidas<!-- Visualizza contropartite -->**: al activar la casilla se muestran los movimientos de contrapartida relaciondos a los movimientos de la subcuenta<!-- sottoconto --> seleccionada (formato A4 horizontal)

- **N.º de líneas<!-- No. righe -->**: en este campo, activo si la función anterior está activada, se especifica cuántas líneas de contrapartida introducidas en la sección Diario general<!-- Libro giornale --> del **[registro contable<!-- registrazione contabile -->](/docs/finance-area/ledger-records/records/ledger-record)** serán visualizadas en el extracto de cuenta<!-- estratto conto -->. Por ejemplo, en presencia de varias cuentas de ingreso<!-- conti di ricavo --> relacionadas al registro de una factura emitida, el valor se puede aumentar si en la impresión no se muestran todas las contrapartidas tal como fueron ingresadas en el registro.

- **Anotaciones<!-- Annotazioni -->**: este campo permite insertar datos alfanuméricos que serán mostrados en la impresión. Puede ser útil para introducir una anotación rápida que sólo sea válida para la impresión en ese momento, ya que el campo se resetea al cerrar el formulario.

Posibilidad de visualizar los movimientos expresados en una divisa específica mediante:

- **Mostrar Extracto en moneda extranjera<!-- Visualizza E/C in valuta -->**: casilla que también habilita la caja de selección de moneda y desactiva las opciones Mostrar importes en moneda y Mostrar contrapartidas

además, permite agrupar los movimientos por cada moneda y totalizarlos.

- **Moneda<!-- Divisa -->**: permite seleccionar la moneda de referencia para filtrar la exposición de los valores. Entonces, sólo se mostrarán los valores denominados en la moneda seleccionada para la subcuenta<!-- sottoconto --> seleccionada.

Es posible ordenar los registros por fecha de registro o por fecha de competencia. La opción resulta particularmente relevante en el caso en que el cierre/reapertura de cuentas<!-- conti --> se realice con fechas de registro y de competencia diferentes, con el fin de obtener un saldo progresivo significativo;

**Fecha de última apertura de cuentas<!-- Data ultima apertura conti -->**: A diferencia de la **[Visualización de cuentas<!-- Visualizzazione conti -->](/docs/finance-area/ledger-records/records/view-accounts)**, donde siempre son visibles todos los movimientos de cada subcuenta<!-- sottoconto -->, el reporte es un proceso donde es importante limitar la cantidad de registros a mostrar para no afectar el rendimiento del sistema.

En este sentido, la aplicación propondrá en la impresión los movimientos considerando el saldo inicial a partir de la fecha de última apertura de cuentas<!-- ultima apertura conti -->, que se toma como la fecha más alta anterior a los filtros iniciales del reporte.

Ejemplo: si el usuario filtra los movimientos del 01/09/2017 al 31/12/2017 (tanto como fecha reg. como de competencia), el procedimiento propone como última apertura de cuentas<!-- ultima apertura conti --> la fecha 01/01/2017. El resultado será: saldo inicial calculado del 01/01/2017 al 31/08/2017, detalle de los movimientos relacionados a registros con fecha dentro del rango 01/09-31/12/2017 (por lo tanto, en el reporte solo se incluirán las subcuentas<!-- sottoconti --> que tengan al menos un movimiento entre la fecha de última apertura de cuentas<!-- data ultima apertura conti --> y la fecha final del filtro). Si el usuario, en cambio, elimina la fecha de última apertura de cuentas<!-- data ultima apertura conti --> el resultado será idéntico al presente en la visualización de cuentas<!-- visualizzazione conti -->.

**Mostrar sintético<!-- Visualizza sintetico -->**: se trata de un reporte sintético que presenta la lista de todas las subcuentas<!-- sottoconti --> sin saltos de página. Se aconseja el uso de este reporte para imprimir los libros mayores<!-- mastrini --> a adjuntar a los estados de cierre del ejercicio contable.

| Función | Significado |
| --- | --- |
| Vista previa<!-- Anteprima --> | Botón para ejecutar la vista previa de impresión del extracto de cuenta<!-- estratto conto -->. |
| Imprimir<!-- Stampa --> | Botón para imprimir físicamente el documento extracto de cuenta<!-- estratto conto -->. |


:::important Ver también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE IMPRESIONES CONTABLES**](/docs/video/finance/intro)
:::