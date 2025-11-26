---
title: Contabilización de Remesas
sidebar_position: 2
ai_generated: true
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Contabilización > Contabilización de remesas<!-- Tesoreria > Portafoglio Effetti > Contabilizzazione > Contabilizzazione distinte -->.

Desde esta máscara se procede a la contabilización de remesas<!-- distinte -->: el procedimiento cerrará la cuenta<!-- conto --> vinculada al [**tipo**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) de los efectos<!-- effetti --> incluidos en la remesa<!-- distinta --> y abrirá la cuenta transitoria del banco ingresado en la remesa<!-- distinta -->.

::tip[Nota]<!-- ::tip[Nota] -->
Generalmente, se puede ejecutar este procedimiento directamente **dentro de la remesa<!-- distinta -->** con el botón correspondiente para su **Contabilización**.

Desde esta máscara también es posible realizar una contabilización masiva de varias remesas<!-- distinte -->.
:::

## Cómo contabilizar una remesa<!-- Come contabilizzare una distinta -->

1. Utiliza la parte superior del formulario para filtrar la búsqueda de las remesas<!-- distinte --> a contabilizar. La contabilización de remesas<!-- distinte --> solo puede efectuarse para remesas<!-- distinte --> impresas.

2. Selecciona en la cuadrícula central las remesas<!-- distinte --> que deseas contabilizar.

3. Completa los parámetros para la contabilización como la **Causal de contabilidad<!-- Causale di contabilità -->**, la **fecha de registro<!-- data registrazione -->** y la fecha de competencia.

:::note[Nota]<!-- :::note[Nota] -->
Esta sección puede ser predefinida dentro de los [**parámetros**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de efectos<!-- Portafoglio effetti -->.  
:::

El indicador de **contabilización en la fecha de vencimiento<!-- contabilizzazione in data maturazione -->**: fragmentará el asiento<!-- registrazione --> de la remesa<!-- distinta --> en las diferentes fechas de vencimiento de los efectos<!-- effetti -->, agregando los días de banco establecidos en el maestro de bancos para la causal<!-- causale --> definida.

El indicador **fecha de vencimiento con fecha valor igual a fecha de vencimiento<!-- data scadenza con data valuta uguale a data maturazione -->**: registrará los diferentes efectos<!-- effetti --> en las diversas fechas de vencimiento, pero con la fecha valor del banco ajustada según los días de banco configurados en el maestro de bancos.

4. Presiona el botón en la barra de menú **Contabilización de remesas<!-- Contabilizzazione distinte -->**.


**Botones específicos<!-- Pulsanti specifici -->**

**Buscar<!-- Ricerca -->**: Busca la lista de remesas<!-- distinte --> a contabilizar.

**Contabilizar<!-- Contabilizzazione -->**: Realiza la contabilización para las filas seleccionadas.


### Pestaña Anteriores<!-- Tab Precedenti -->

Desde la pestaña de anteriores<!-- scheda precedenti --> es posible proceder a la anulación de las contabilizaciones realizadas.

La anulación sólo será posible si el periodo aún es modificable (libro diario impreso y cierre de cuentas no ejecutado).

Un doble clic en la sección de registros permitirá visualizar el asiento contable correspondiente.


**Botones específicos<!-- Pulsanti specifici -->**

**Buscar<!-- Ricerca -->**: Busca la lista de contabilizaciones realizadas.

**Revertir contabilización<!-- Rollback contabilizzazione -->**: Realiza la restauración de las contabilizaciones seleccionadas.

**Revertir remesas<!-- Rollback distinte -->**: Realiza la restauración del asiento<!-- registrazione --> contable seleccionado.

Se encuentra disponible una pestaña de detalle de visualización de los errores detectados durante la contabilización.