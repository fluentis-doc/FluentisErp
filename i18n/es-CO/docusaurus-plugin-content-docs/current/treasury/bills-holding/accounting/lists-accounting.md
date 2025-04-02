---
title: contabilizzazione distinte
sidebar_position: 2
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Contabilización > Contabilización de listas (Contabilizzazione distinte).

Desde esta máscara se procede a la contabilización de listas: el procedimiento cerrará la cuenta vinculada al [**tipo**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) de los efectos ingresados en la lista y abrirá la cuenta transitoria del banco ingresado en la lista.

::tip[Nota (Nota)]
Generalmente se puede ejecutar este procedimiento directamente **dentro de la lista** con el botón correspondiente para su **Contabilización**.

Desde esta máscara, en cambio, es posible realizar una contabilización masiva de varias listas.
:::

## Cómo contabilizar una lista (Come contabilizzare una distinta)

1. Utiliza la parte superior de la máscara para filtrar la búsqueda de las listas a contabilizar. La contabilización de listas solo se puede realizar para listas impresas.

2. Selecciona desde la cuadrícula central las listas que deseas contabilizar.

3. Completa los parámetros para la contabilización, tales como la **causale di contabilità**, la **data registrazione** y la fecha de competencia (data competenza).

:::note[Nota (Nota)]
Esta sección puede predefinirse dentro de los [**parámetros**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de efectos (Portafoglio effetti).  
:::

El indicador de **contabilización en fecha de vencimiento**: dividirá el registro de la lista en las distintas fechas de vencimiento de los efectos con la adición de los días bancarios establecidos en el registro del banco para la causa establecida.

El indicador **fecha de vencimiento con fecha de valor igual a fecha de vencimiento**: registrará los diferentes efectos en las distintas fechas de vencimiento, pero con la fecha de valor bancaria ajustada de acuerdo con los días bancarios establecidos en el registro del banco.

4. Presiona el botón en la barra de ribbon **contabilizzazione distinte**.

**Botones específicos**

**ricerca**: Busca la lista de las listas a contabilizar.

**contabilizzazione**: Realiza la contabilización para las filas seleccionadas.


### Pestaña Anteriores (Tab Precedenti)

Desde la pestaña anteriores es posible proceder a la anulación de las contabilizaciones realizadas. 

La anulación solo será posible si el período aún es modificable (impresión del libro diario y cierre de cuentas no ejecutados).

Un doble clic en la sección de registros permitirá visualizar el registro contable relacionado.

**Botones específicos**

**ricerca**: Busca la lista de las contabilizaciones realizadas.

**rollback contabilizzazione**: Restaura las contabilizaciones seleccionadas.

**rollback distinte**: Restaura el registro contable seleccionado.

Hay una pestaña de detalle para visualizar los errores detectados durante la contabilización.