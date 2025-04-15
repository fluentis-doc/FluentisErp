---
title: contabilizzazione accrediti
sidebar_position: 3
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Contabilización > Contabilización de acreditaciones (Contabilizzazione accrediti)

Desde esta máscara se procede a la última fase de la cartera de efectos: el procedimiento cerrará la cuenta transitoria del banco de presentación para acreditar la cuenta corriente real del registro bancario en la lista.

:::tip[Nota]
**Es necesario acceder específicamente a este formulario para esta contabilización, ya que no se prevé ningún botón dentro del efecto o la lista**.
:::

## Cómo contabilizar un crédito (Come contabilizzare un accredito)

1. Utiliza la parte superior de la máscara para filtrar la búsqueda de los efectos a acreditar: la contabilización de acreditaciones solo puede llevarse a cabo para efectos contabilizados. La selección se realiza en el detalle de los efectos para poder identificar los importes acreditados por cada fecha de vencimiento.

2. Selecciona en la cuadrícula central los efectos que deseas gestionar.

3. Completa los parámetros para la contabilización tales como la **causale di contabilità**, la **data registrazione** y la fecha de competencia (data competenza).

:::note[Nota]
Esta sección puede ser predefinida dentro de los [**parametri**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de Efectos.
:::

4. Completa también los otros campos para la gestión de la contabilización:

**spese commissioni**: el subcuenta donde se contabilizarán los gastos por comisiones, que se deberá indicar en el campo siguiente.

**commissioni**: valor de las comisiones sobre el crédito de los efectos que se contabilizará; puede ser propuesto, para cada efecto, en función de las *comisiones* establecidas en el [***registro bancario (anagrafica banca)***](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry).  

**oneri passivi**: cuenta donde se contabilizarán los intereses pasivos calculados para listas de descuentos.

:::note[Nota]
En esta sección también hay tres campos para la visualización de los totales de los efectos seleccionados en la cuadrícula central:

**totale selezione oneri passivi**: suma del valor de los Cargos pasivos para todos los efectos seleccionados;

**totale selezione commissioni**: suma del valor de las Comisiones para todos los efectos seleccionados;

**totale effetti selezionati**: suma del valor de los efectos seleccionados;
:::

5. Presiona el botón en la barra de ribbon **contabilizzazione accrediti**.

**Botones específicos**

**ricerca**: Busca la lista de los efectos de los cuales contabilizar el crédito.

**contabilizzazione**: Realiza la contabilización para las líneas seleccionadas.

### Pestaña Anteriores (Tab Precedenti)

Desde la pestaña *anteriores* es posible proceder a la anulación de las contabilizaciones realizadas.

La anulación solo será posible si el periodo aún es modificable (no se han realizado la impresión del libro diario y el cierre de cuentas).

Un doble clic en la sección de las registraciones permitirá visualizar la registración contable relacionada.

Hay una pestaña de detalle para visualizar los errores detectados durante la contabilización.

**Botones específicos**

**ricerca**: Busca la lista de las contabilizaciones realizadas.

**rollback contabilizzazione**: Realiza la restauración de las contabilizaciones seleccionadas para todos los documentos que contienen.

**rollback registrazioni**: Realiza la restauración de la única registración contable seleccionada.