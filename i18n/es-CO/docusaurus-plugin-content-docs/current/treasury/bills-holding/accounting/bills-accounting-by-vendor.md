---
title: Contabilización de efectos endosados al proveedor
sidebar_position: 4
ai_generated: true
---

El formulario se encuentra en Tesorería > Portafolio de efectos > Contabilización > Contabilización de efectos a proveedor<!-- Contabilizzazione effetti a fornitore -->.

Desde esta pantalla se realiza la contabilización del endoso de efectos al proveedor<!-- giro effetti a fornitore -->: el procedimiento cerrará la cuenta<!-- conto --> asociada al tipo de efectos<!-- effetti --> ingresados en la remesa<!-- distinta --> y realizará el registro<!-- rilevazione --> de los pagos al proveedor<!-- pagamenti fornitore --> ingresados en la remesa<!-- distinta -->.

:::tip[Nota]
La contabilización de remesas<!-- contabilizzazione distinte --> solo puede realizarse para remesas de endoso<!-- distinte di giro --> impresas en las que la sección de los efectos<!-- effetti --> sea igual a la sección de pagos<!-- pagamenti -->.
:::

## Cómo contabilizar un efecto a proveedor<!-- Come contabilizzare un effetto a fornitore -->

1. Utiliza la parte superior de la pantalla para filtrar la búsqueda de las remesas<!-- distinte --> a contabilizar.
2. Selecciona desde la cuadrícula central las remesas<!-- distinte --> que deseas contabilizar.
3. Completa los parámetros para la contabilización como la **Causal contable<!-- Causale di contabilità -->**, la **fecha de registro<!-- data registrazione -->** y la **fecha de competencia<!-- data competenza -->**.

:::note[Nota]
Esta sección puede ser predefinida dentro de los [**parámetros**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Portafolio de Efectos<!-- Portafoglio effetti -->.
:::

4. Pulsa el botón en la barra de opciones **Contabilización de remesas<!-- Contabilizzazione distinte -->**.

**Botones específicos<!-- Pulsanti specifici -->**

**Buscar<!-- Ricerca -->**: Busca la lista de efectos<!-- effetti --> a contabilizar.

**Contabilización de remesas<!-- Contabilizzazione distinte -->**: Ejecuta la contabilización para las filas seleccionadas.

### Pestaña Anteriores<!-- Tab Precedenti -->

Desde la pestaña *anteriores<!-- precedenti -->* es posible proceder a la anulación de las contabilizaciones realizadas. 

La anulación será posible solo si el período aún es modificable (no se ha realizado la impresión del libro diario y el cierre de cuentas<!-- stampa libro giornale e chiusura conti -->). 

Un doble clic en la sección de registros<!-- registrazioni --> permitirá visualizar el asiento contable<!-- registrazione contabile --> correspondiente. 

Está disponible una pestaña de detalle para la visualización de los errores detectados durante el proceso de contabilización.

**Botones específicos<!-- Pulsanti specifici -->**

**Buscar<!-- Ricerca -->**: Busca la lista de contabilizaciones realizadas.

**Reversión contabilización<!-- Rollback contabilizzazione -->**: Realiza la reversión de las contabilizaciones seleccionadas.

**Reversión remesas<!-- Rollback distinte -->**: Realiza la reversión del asiento contable<!-- registrazione contabile --> seleccionado relacionado con la remesa<!-- distinta --> individual.