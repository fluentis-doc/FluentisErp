---
title: Contabilización Pagos Proveedor
sidebar_position: 1
ai_generated: true
---

El formulario se encuentra en Tesorería<!-- Tesoreria --> > Pagos Proveedores<!-- Pagamenti Fornitori --> > Contabilización<!-- Contabilizzazione --> > Contabilización Pagos Proveedor<!-- Contabilizzazione Pagamenti Fornitore -->.

Desde esta pantalla es posible contabilizar los pagos<!-- pagamenti --> ingresados en las remesas<!-- distinte --> previamente creadas.

De forma alternativa es posible usar el procedimiento integrado [*Creación Automática de Pagos a Proveedores*<!-- Creazione Automatica Pagamenti Fornitori -->](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), que genera la remesa<!-- distinta --> y contabiliza los pagos<!-- pagamenti --> al mismo tiempo.

## Cómo contabilizar los pagos<!-- Come contabilizzare i pagamenti -->

1. Utilice la parte superior de la pantalla con los filtros para buscar los pagos<!-- pagamenti --> creados pero aún no contabilizados: pulse el botón *Buscar<!-- Ricerca -->*, en la cuadrícula se visualizarán todas las filas de detalle de los pagos<!-- pagamenti --> presentes en las diferentes remesas<!-- distinte -->, que podrían ser contabilizadas parcialmente. Lo habitual, de todos modos, es filtrar con las referencias de la remesa<!-- distinta --> y contabilizarla en bloque.

2. Ingrese abajo los datos de gestión de la operación: la **Causal contable<!-- Causale di contabilità -->** a utilizar para el registro, las **Fechas de registro y competencia<!-- Date di registrazione e competenza -->**. Si expande la sección puede elegir un **criterio de agrupamiento<!-- criterio di raggruppamento -->** para el asiento contable. 

La opción predeterminada, *agrupamiento por banco<!-- raggruppamento banca -->*, permite generar un registro por cada subcuenta bancaria de egreso<!-- sottoconto banca di uscita -->, que es la mejor gestión para simplificar la conciliación de movimientos bancarios<!-- movimenti bancari --> a partir de los extractos bancarios. De forma alternativa se dispone de un *agrupamiento por subcuenta de proveedor<!-- raggruppamento per sottoconto fornitore -->* y una opción de contabilización detallada pago por pago (*No agrupar<!-- Non raggruppare -->*).

La **subcuenta<!-- sottoconto -->** para el reconocimiento de los **descuentos activos y pasivos<!-- abbuoni attivi e passivi -->** ingresados en la remesa<!-- distinta --> se propone en base a la subcuenta *ingresos extraordinarios<!-- sopravvenienze attive -->* presente en los parámetros de contabilidad. 

**Fecha y número de documento<!-- Data e numero documento -->** son opcionales para ingresar como referencias en el encabezado del registro (podría ser el número/fecha de la remesa<!-- distinta -->).

La casilla **cierre de partida<!-- chiusura partita -->** (propuesta por defecto, no quitar) gestiona correctamente el pago<!-- pagamento --> en el calendario de vencimientos<!-- scadenziario -->.


Si la causal contable<!-- causale contabile --> prevé la gestión de la fecha valor bancario<!-- data valuta banca --> y dentro del maestro de bancos<!-- anagrafica banche --> se ha definido un número de días para su cálculo en relación con la causal contable<!-- causale contabile --> utilizada, el campo se gestionará automáticamente en el registro resultante.

3. Pulse el botón **Contabilizar<!-- Contabilizza -->** para iniciar el procedimiento


### La pestaña de restauración<!-- La scheda di ripristino --> 

permite visualizar el registro contable<!-- registrazione contabile --> con doble clic en la sección relativa a los registros, así como la anulación parcial/total de las operaciones de pago<!-- operazioni di pagamento --> seleccionadas. La anulación solo será posible si el periodo sigue siendo modificable (no se han impreso el libro diario<!-- stampa libro giornale --> ni se han cerrado cuentas<!-- chiusura conti -->).

**Botones específicos<!-- Pulsanti specifici -->**

**Buscar<!-- Ricerca -->** Busca la lista de los registros contables<!-- registrazioni contabili --> realizados.

**Revertir contabilización<!-- Rollback Contabilizzazione -->** El botón revierte la contabilización<!-- contabilizzazione --> completa seleccionada.

**Revertir registros contables<!-- Rollback Registrazioni contabili -->** El botón revierte los registros contables<!-- registrazioni contabili --> seleccionados individualmente.


<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>