---
title: Contabilización de Incobrables
sidebar_position: 4
ai_generated: true
---
El formulario se encuentra en Tesorería<!-- Tesoreria --> > Cartera de efectos<!-- Portafoglio Effetti --> > Contabilización<!-- Contabilizzazione --> > Contabilización de incobrables<!-- Contabilizzazione Insoluti -->.

Desde esta pantalla se procede a la contabilización de incobrables<!-- insoluti -->: el procedimiento reabre las partidas de clientes<!-- partite clienti --> asociadas a los efectos incobrables<!-- effetti insoluti --> y eventualmente genera una factura de cargo por gastos<!-- fattura di addebito spese -->.

**Botones específicos<!-- Pulsanti specifici -->**

**Buscar<!-- Ricerca -->**: Busca la lista de incobrables<!-- insoluti --> a contabilizar.

**Contabilizar<!-- Contabilizza -->**: Efectúa la contabilización para las filas seleccionadas.

## Cómo contabilizar un incobrable<!-- Come contabilizzare un insoluto -->

1. Utiliza la parte superior de la pantalla para filtrar la búsqueda de incobrables<!-- insoluti --> a contabilizar. ATENCIÓN: Primero es necesario proceder a su creación.

2. Selecciona desde la cuadrícula central los efectos<!-- effetti --> que deseas contabilizar.

3. Completa los parámetros para la contabilización tales como la **Causal contable<!-- Causale di contabilità -->** y la **fecha de registro<!-- data registrazione -->**.

:::note[Nota<!-- Nota -->]
Esta sección puede ser predefinida dentro de los [**parámetros**](/docs/configurations/parameters/treasury/unpaids-parameters) del módulo de Incobrables<!-- Insoluti -->. 

En particular:

- La causal contable<!-- causale contabile --> se propone con base en los parámetros del módulo,
- Las fechas de registro<!-- date di registrazione --> se proponen como la fecha actual;
- Los subcuentas<!-- sottoconti --> para los **Gastos de protesto<!-- Spese di protesto -->** y la cuenta **Transitoria<!-- Transitorio -->** se retoman desde los parámetros del módulo, pero pueden ser modificados o ingresados caso a caso.

El flag **Contabilización consolidada<!-- Contabilizzazione riepilogativa -->** detecta en un solo registro contable todos los incobrables<!-- insoluti --> presentados en el mismo banco<!-- istituto di credito (banca) -->: normalmente esta opción no se utiliza, en especial si se ha establecido la obligatoriedad de la fecha y número de factura en la causal contable a utilizar.

El flag **Gastos de recargo<!-- Spese di rivalsa -->** impone el registro del recargo de gastos al cliente: con esta opción se activará (en la parte inferior) la sección de gestión de la factura para estos gastos, en lugar de registrarlos directamente en contabilidad. En esta sección, todos los campos deberán ser configurados para poder crear la factura de venta.

Finalmente, queda por ingresar:
- el **tipo de pago<!-- tipo di pagamento -->** y
- la **fecha de vencimiento<!-- data scadenza -->** a asignar para la reapertura de la partida<!-- partita -->. Alternativamente, el flag **Fecha de vencimiento igual a la fecha de vencimiento del efecto<!-- Data scadenza uguale alla data scadenza effetto -->** (que ha resultado incobrable<!-- andato insoluto -->).

También en este caso se leen los parámetros del módulo para la propuesta de estos dos datos.
 
4. Pulsa el botón en la ribbon bar **Contabilización<!-- Contabilizzazione -->**

### Pestaña Anteriores<!-- Tab Precedenti -->

Desde la pestaña Anteriores<!-- scheda precedenti --> es posible proceder a la anulación de las contabilizaciones realizadas. 

La anulación sólo será posible si el periodo aún es modificable (impresión del libro diario y cierre de cuentas no ejecutados).

Un doble clic en la sección de los registros permitirá visualizar el registro contable relacionado. 

Está disponible un informe de visualización de los errores detectados durante la contabilización.

**Botones específicos<!-- Pulsanti specifici -->**

**Buscar<!-- Ricerca -->**: Busca la lista de contabilizaciones realizadas.

**Reversión contabilización<!-- Rollback contabilizzazione -->**: Realiza la restauración de las contabilizaciones seleccionadas.

**Reversión incobrables<!-- Rollback insoluti -->**: Realiza la restauración del registro contable seleccionado.

Está disponible una pestaña para visualizar los errores almacenados en la fase de contabilización.