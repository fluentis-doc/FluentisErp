---
title: Contabilización de impagos en cesión
sidebar_position: 6
ai_generated: true
---

El formulario se encuentra en Tesorería<!-- Tesoreria --> > Cartera de efectos<!-- Portafoglio Effetti --> > Contabilización<!-- Contabilizzazione --> > Contabilización de impagos en cesión<!-- Contabilizzazione insoluti su cessione -->.

Desde esta pantalla se procede a la contabilización de los impagos<!-- insoluti --> endosados en pago a proveedor<!-- fornitore -->: el procedimiento, según la configuración del motivo contable<!-- causale contabile --> establecido, reabrirá las partidas de clientes<!-- partite clienti --> asociadas a los títulos impagados<!-- titoli insoluti --> así como las partidas de proveedores<!-- partite fornitori --> cerradas con el endoso del título<!-- giro del titolo -->.

## Cómo contabilizar un impago en cesión<!-- Come contabilizzare un insoluto su cessione -->

1. Utiliza la parte superior de la pantalla para filtrar la búsqueda de los impagos<!-- insoluti --> a contabilizar.
2. Selecciona en la cuadrícula central los impagos<!-- insoluti --> que desees contabilizar.
3. Completa la pestaña de parámetros<!-- Tab parametri --> para la contabilización, ingresando los datos como la **Causal contable<!-- Causale di contabilità -->**, la **fecha de registro<!-- data registrazione -->** y la **fecha de competencia<!-- data competenza -->**.

:::note[Nota<!-- Nota -->]
Esta sección puede ser predefinida dentro de los [**parámetros**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de efectos<!-- Portafoglio effetti -->.
:::

El indicador **Gastos de repercusión<!-- Spese di Rivalsa -->** gestionará el cargo de los gastos en la cuenta de cliente<!-- conto cliente -->, generando el ingreso correspondiente según la subcuenta<!-- sottoconto --> indicada en la propia pantalla (**Cuenta / subcuenta para cargo de gastos al cliente<!-- Conto / sottoconto addebito spese al cliente -->**).

Las subcuentas<!-- sottoconti --> para **Gastos de protesto<!-- Spese di protesto -->** y la cuenta **Transitoria<!-- Transitorio -->** se recuperan de los parámetros del módulo, pero pueden ser modificadas o insertadas caso por caso.

4. Pulsa el botón en la cinta de opciones<!-- ribbon bar --> **Contabilización de impagos<!-- Contabilizzazione insoluti -->**.

**Botones específicos**

**Buscar<!-- Ricerca -->**: Busca la lista de los impagos<!-- insoluti --> a contabilizar.

**Contabilizar<!-- Contabilizza -->**: Realiza la contabilización de las filas seleccionadas.

### Pestaña Anteriores<!-- Tab Precedenti -->

Desde la pestaña *anteriores*<!-- precedenti --> es posible proceder a la anulación de las contabilizaciones realizadas.

La anulación solo será posible si el periodo aún es modificable (no se ha realizado la impresión del libro diario<!-- stampa libro giornale --> ni el cierre de cuentas<!-- chiusura conti -->).

Un doble clic en la sección de registros<!-- registrazioni --> permitirá visualizar el registro contable<!-- registrazione contabile --> correspondiente.

Hay una pestaña de detalle para visualizar los errores detectados durante la contabilización.

**Botones específicos**

**Buscar<!-- Ricerca -->**: Busca la lista de contabilizaciones realizadas.

**Restaurar contabilización<!-- Ripristina contabilizzazione -->**: Restaura las contabilizaciones seleccionadas.

**Restaurar impagos<!-- Ripristina insoluti -->**: Restaura el registro contable<!-- registrazione contabile --> seleccionado correspondiente al impago<!-- insoluto --> individual.