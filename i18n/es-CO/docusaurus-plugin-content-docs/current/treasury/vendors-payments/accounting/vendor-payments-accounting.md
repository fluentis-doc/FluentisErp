---
title: contabilizzazione pagamenti fornitore
sidebar_position: 1
---

El formulario se encuentra en Tesorería > Pagos a Proveedores > Contabilización > contabilizzazione pagamenti fornitore (Contabilizzazione Pagamenti Fornitore).

Desde esta máscara es posible contabilizar los pagos ingresados en los listados creados anteriormente.

Como alternativa, se puede utilizar el procedimiento integrado [*Creación Automática de Pagos a Proveedores*](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), que genera el listado y contabiliza los pagos al mismo tiempo.

## Cómo contabilizar los pagos

1. Utiliza la parte superior de la máscara con los filtros para buscar los pagos creados pero que aún no han sido contabilizados: presiona el botón *Buscar (Ricerca)*, en la cuadrícula se mostrarán todas las líneas de detalle de los pagos presentes en los diversos listados, que podrían ser contabilizados parcialmente. La situación normal, sin embargo, prevé filtrar con las referencias del listado y contabilizarlo en bloque.

2. Inserta en la parte inferior los datos de gestión de la operación: la **causale di contabilità** a utilizar para el registro, las **Fechas de registro y competencia (Date di registrazione e competenza)**. Si expandes la sección, puedes elegir un **criterio de agrupamiento (criterio di raggruppamento)** para la escritura contable. 

La opción por defecto, *agrupamiento por banco (raggruppamento banca)*, permite registrar una entrada por cada subcuenta bancaria de salida, que es la mejor gestión para simplificar la reconciliación de los movimientos bancarios a partir de las impresiones de los extractos. Alternativamente, está disponible un *agrupamiento por subcuenta de proveedor (raggruppamento per sottoconto fornitore)* y una opción de registro detallado pago por pago (*No agrupar (Non raggruppare)*).

El **sottoconto** para el registro de los **abonos activos y pasivos (abbuoni attivi e passivi)** ingresados en el listado se propone en función de la subcuenta de *sopravvenienze attive* presente en los parámetros de contabilidad. 

**Fecha y número de documento (Data e numero documento)** son opcionales para ingresar como referencias del encabezado del registro (podría ser el número/fecha del listado).

El indicador **cierre de partida (chiusura partita)** (propuesto por defecto, no eliminar) gestiona correctamente el pago en el calendario de vencimientos.

Si la causa contable prevé la gestión de la fecha de valor bancario y dentro del registro de bancos se ha definido un número de días para su cálculo en relación con la causa contable utilizada, el campo será gestionado automáticamente en el registro resultante.

3. Presiona el botón **contabilizza** para iniciar el procedimiento.

### La pestaña de recuperación

permite visualizar el registro contable mediante un doble clic en la sección relacionada con los registros, así como la anulación parcial/total de las operaciones de pago seleccionadas. La anulación será posible solo si el período aún es modificable (imprimir libro diario y cierre de cuentas no ejecutadas).

**Botones específicos**

**ricerca** Busca la lista de los registros contables realizados.

**rollback contabilizzazione** El botón realiza la restauración de toda la contabilización seleccionada.

**rollback registrazioni contabili** El botón realiza la restauración de los registros contables individuales seleccionados.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>