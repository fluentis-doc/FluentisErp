---
title: Contabilización de Acreditaciones
sidebar_position: 3
ai_generated: true
---

El formulario se encuentra en Tesorería > Cartera de Efectos<!-- Portafoglio Effetti --> > Contabilización > Contabilización de acreditaciones<!-- Contabilizzazione accrediti -->.

Desde esta pantalla se procede a la última fase de la cartera de efectos<!-- portafoglio effetti -->: el procedimiento cerrará la cuenta transitoria del banco de presentación para acreditar la cuenta corriente real del registro del banco<!-- anagrafica banca --> en la remesa<!-- distinta -->.

:::tip[Nota]
**Es necesario acceder específicamente a este formulario para esta contabilización, ya que no existe ningún botón dentro del efecto<!-- effetto --> o de la remesa<!-- distinta -->.**
:::

## Cómo contabilizar una acreditación<!-- Come contabilizzare un accredito -->

1. Utiliza la parte superior de la pantalla para filtrar la búsqueda de los efectos a acreditar: la contabilización de acreditaciones sólo puede realizarse para efectos ya contabilizados<!-- effetti contabilizzati -->. La selección se realiza en el detalle de los efectos para poder identificar los importes acreditados por cada fecha de vencimiento.

2. Selecciona desde la cuadrícula central los efectos que deseas gestionar

3. Completa los parámetros para la contabilización, como la **Causal contable<!-- Causale di contabilità -->**, la **fecha de registro<!-- data registrazione -->** y la fecha de competencia.

:::note[Nota]
Esta sección puede predefinirse dentro de los [**parámetros**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo de Cartera de Efectos<!-- Portafoglio effetti -->.
:::

4. Además, completa los demás campos para la gestión de la contabilización<!-- contabilizzazione -->:

**Gastos de comisiones**: el subcuenta<!-- sottconto --> donde serán contabilizados los gastos por comisiones, a indicar en el campo siguiente

**Comisiones**: valor de las comisiones por la acreditación de los efectos que se contabiliza; puede proponerse, para cada efecto, sobre la base de las *comisiones* configuradas en la [***ficha de banco***](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry)<!-- anagrafica banca -->.

**Cargos pasivos**: cuenta donde serán contabilizados los intereses pasivos calculados para remesas en descuento<!-- distinte allo sconto -->.

:::note[Nota]
En esta sección también se encuentran tres campos para visualizar los totales de los efectos seleccionados en la cuadrícula central:

**Total selección cargos pasivos**: suma del valor Cargos pasivos<!-- Oneri passivi --> para todos los efectos seleccionados;

**Total selección comisiones**: suma del valor Comisiones para todos los efectos seleccionados;

**Total de efectos seleccionados**: suma del valor de los efectos seleccionados;
:::

4. Pulsa el botón en la cinta de opciones **Contabilización de acreditaciones<!-- Contabilizzazione accrediti -->**



**Botones específicos**

**Buscar<!-- Ricerca -->**: Busca el listado de los efectos de los que contabilizar la acreditación.

**Contabilización<!-- Contabilizzazione -->**: Ejecuta la contabilización para las filas seleccionadas.



### Pestaña Anteriores<!-- Tab Precedenti -->

Desde la pestaña *anteriores<!-- precedenti -->* es posible anular las contabilizaciones realizadas.

La anulación será posible únicamente si el periodo aún es modificable (libro diario y cierre de cuentas no realizados).

Un doble clic en la sección de registros permitirá ver el correspondiente asiento contable<!-- registrazione contabile -->.

Hay una pestaña de detalle de visualización de los errores detectados durante la contabilización.



**Botones específicos**

**Buscar<!-- Ricerca -->**: Busca el listado de las contabilizaciones realizadas.

**Rollback contabilización<!-- Rollback contabilizzazione -->**: Restaura las contabilizaciones seleccionadas para todos los documentos que contienen.

**Rollback registros<!-- Rollback registrazioni -->**: Restaura el único asiento contable<!-- registrazione contabile --> seleccionado.