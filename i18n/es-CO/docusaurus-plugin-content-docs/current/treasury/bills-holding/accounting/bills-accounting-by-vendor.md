---
title: contabilizzazione effetti girati al fornitore
sidebar_position: 4
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Contabilización > Contabilización de efectos a proveedor (Contabilizzazione effetti a fornitore)

Desde esta máscara se procede a la contabilización del giro de efectos a proveedor: el procedimiento cerrará la cuenta vinculada al tipo de efectos insertados en la lista y realizará el registro de los pagos a proveedor incluidos en la lista.

:::tip[Nota]
La contabilización de listas solo puede llevarse a cabo para listas de giro impresas en las cuales la sección de efectos sea igual a la sección de pagos.
:::

## Cómo contabilizar un efecto a proveedor (Come contabilizzare un effetto a fornitore)

1. Utiliza la parte superior de la máscara para filtrar la búsqueda de las listas a contabilizar.
2. Selecciona desde la cuadrícula central las listas que deseas contabilizar.
3. Completa los parámetros para la contabilización, como la **causale di contabilità**, la **data registrazione** y la **data competenza**.

:::note[Nota]
Esta sección puede ser predefinida dentro de los [**parametri**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de efectos.
:::

4. Presiona el botón en la barra de ribbon **contabilizzazione distinte**.

**Botones específicos**

**ricerca**: Busca la lista de los efectos a contabilizar.

**contabilizzazione distinte**: Realiza la contabilización para las líneas seleccionadas.

### Pestaña Anteriores (Tab Precedenti)

Desde la pestaña *anterior* es posible proceder a la anulación de las contabilizaciones realizadas.

La anulación será posible solo si el período aún es modificable (impresión del libro diario y cierre de cuentas no ejecutadas).

Un doble clic en la sección de registros permitirá visualizar el registro contable relacionado.

Hay una pestaña de detalle para visualizar los errores detectados durante la contabilización.

**Botones específicos**

**ricerca**: Busca la lista de las contabilizaciones realizadas.

**rollback contabilizzazione**: Ejecuta la restauración de las contabilizaciones seleccionadas.

**rollback distinte**: Realiza la restauración del registro contable seleccionado relacionado con la lista individual.