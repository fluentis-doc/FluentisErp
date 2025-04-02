---
title: contabilizzazione effetti
sidebar_position: 1
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Contabilización > Contabilización de efectos

Desde esta máscara se procede a la contabilización de efectos: el procedimiento, de acuerdo con la configuración de la causa contable establecida, cerrará las partidas de clientes asociadas a los efectos seleccionados.

:::tip[Nota]
Generalmente, se puede ejecutar este procedimiento directamente realizando ***la adquisición automática de efectos desde las partidas*** donde, habilitando el indicador correspondiente, se ejecuta simultáneamente también este procedimiento.

**En cambio, es necesario acceder específicamente a este formulario para restaurar la contabilización de efectos**.
:::

## Cómo contabilizar un efecto

1. Utiliza la parte superior de la máscara para filtrar la búsqueda de los efectos a contabilizar.

2. Selecciona desde la cuadrícula central los efectos que deseas contabilizar.

3. Completa los parámetros para la contabilización, como la **causale di contabilità**, la **data registrazione** y la fecha de competencia.

:::note[Nota]
Esta sección puede ser predefinida dentro de los [**parámetros**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de Efectos. 

El indicador de **agrupamiento por cuenta efecto** significa realizar un único registro donde habrá tantas líneas como efectos a contabilizar y, en contrapartida, la cuenta asociada al tipo de efecto (en la **tipi effetti**).

El indicador de **gestión provisional** generará registros contables de tipo provisional.

Si la causa contable prevé el indicador de apertura de partidas y el efecto ha sido creado manualmente sin asociar una partida (o su monto es superior al monto de las partidas vinculadas), entonces se creará una partida de cliente a favor que deberá compensarse posteriormente.

Se recuerda que no será posible contabilizar efectos creados a partir de facturas impresas cuando estas aún no han sido contabilizadas.
:::

4. Presiona el botón en la barra de ribbon **contabilizzazione effetti**

**Botones específicos**

**ricerca**: Busca la lista de efectos a contabilizar.

**contabilizzazione effetti**: Ejecuta la contabilización para las líneas seleccionadas.

### Pestaña Anteriores (Tab Precedenti)

Desde la pestaña *anteriores* es posible proceder a la anulación de las contabilizaciones realizadas.

La anulación será posible solo si el período aún es modificable (impresión del libro diario y cierre de cuentas no ejecutadas).

Un doble clic en la sección de los registros permitirá visualizar el registro contable relacionado.

Hay una pestaña de detalle de visualización de los errores detectados durante la contabilización.

:::tip[Nota]
La restauración de la contabilización del efecto debe **necesariamente** ser ejecutada desde este formulario.

En la fase de creación del efecto, es posible, de hecho, lanzar simultáneamente su contabilización, pero NO al contrario.

Por lo tanto, se deberá proceder primero a anular su contabilización desde aquí, y luego se podrá anular el procedimiento de creación, regresando a una situación anterior (partida de cliente abierta y saldo de cliente no aún anulado).
:::

**Botones específicos**

**ricerca**: Busca la lista de las contabilizaciones realizadas.

**rollback contabilizzazione**: Ejecuta la restauración de las contabilizaciones seleccionadas para todos los documentos en ellas contenidas.

**rollback effetti**: Ejecuta la restauración del registro contable seleccionado referido al efecto individual. ATENCIÓN: esta modalidad es posible solo si en la fase de contabilización no se activó la opción para agrupar por tipo de efecto (lo que genera registros únicos para cada tipo de efecto).