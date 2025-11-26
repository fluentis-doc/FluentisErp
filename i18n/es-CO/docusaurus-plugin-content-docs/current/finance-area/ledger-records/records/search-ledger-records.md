---
title: Búsqueda de registros contables
sidebar_position: 7
ai_generated: true
---

El presente formulario permite buscar los registros contables<!-- registrazioni contabili --> previamente ingresados y, eventualmente, entrar en modo edición (o visualización) de los mismos seleccionando la fila correspondiente y haciendo doble clic.

#### Botones específicos en la Ribbon Bar

> **Buscar<!-- Ricerca -->**: permite iniciar la búsqueda de los registros contables<!-- registrazioni contabili --> ingresados según los filtros establecidos.  
> **Nuevo<!-- Nuovo -->**: permite ingresar un nuevo registro contable<!-- registrazione contabile -->.  
> **Modificar<!-- Modifica -->**: permite modificar un registro contable<!-- registrazione contabile --> previamente ingresado.  
> **Visualizar<!-- Visualizzazione -->**: permite visualizar un registro contable<!-- registrazione contabile --> previamente ingresado. En esta situación los datos NO son editables. 

> **Eliminar<!-- Elimina -->**: permite borrar un registro contable<!-- registrazione contabile --> previamente ingresado. En algunos casos, la operación será impedida (por ejemplo, si una factura fue contabilizada automáticamente), solicitando realizar la operación de Rollback (Restauración), conectada al procedimiento con el que fue creado el registro<!-- registrazione -->.

> **Documento origen<!-- Documento origine -->**: permite llamar el documento de origen del que se generó el registro contable<!-- registrazione contabile -->.  
> **Duplicar<!-- Duplica -->**: permite crear un duplicado del registro contable<!-- registrazione contabile --> para poder crear uno similar, modificando los elementos oportunos, sin necesidad de ingresarlo desde cero.  

### Filtros específicos

**Causal contable<!-- Causale contabile -->**: el combo box (como es habitual en Fluentis) permite seleccionar más de una causal a la vez manteniendo presionada la tecla Ctrl.

**Desde / Hasta fecha registro<!-- Da / A data registrazione --> + Desde / Hasta fecha de competencia<!-- Da / A data competenza -->**: son las fechas de referencia de los registros contables<!-- registrazioni contabili -->; atención, los filtros funcionan con una condición AND, por lo tanto, el refinamiento de la búsqueda se suma. En caso de desalineación involuntaria entre la fecha de registro<!-- data di registrazione --> y la fecha de competencia<!-- data di competenza --> (contable), para encontrar el registro<!-- registrazione --> deseado es conveniente quitar alternativamente el filtro de competencia o el de fecha de registro<!-- registrazione -->.

**Número de registro<!-- Numero registrazione -->**: es el número que aparece en el encabezado y se refiere al libro diario (generalmente la numeración es anual o diaria).

**Fecha / Número de documento<!-- Data / Numero documento -->**: se refiere al encabezado del registro<!-- registrazione -->, campo que contiene el número y la fecha de la factura, generalmente.

**Tipo de documento<!-- Tipo Documento -->**: campo presente en el encabezado del registro<!-- registrazione --> y que se refiere, por ejemplo, a Factura, Nota de crédito, o bien Genérico para registros en el libro diario<!-- registrazioni di prima nota -->.

**Cuenta del registro<!-- Conto Registrazione -->**: se trata del subcuenta<!-- sottoconto --> incluido en el encabezado del registro<!-- registrazione --> (Cliente o proveedor).

**Cuenta de detalle<!-- Conto Dettaglio -->**: se trata de los subcuentas<!-- sottoconti --> incluidos en la sección del libro diario<!-- libro giornale --> (movimientos contables<!-- movimenti contabili -->). Normalmente se utiliza en combinación con el filtro anterior para buscar, por ejemplo, respecto a un subcuenta<!-- sottoconto --> específico de cliente o proveedor, los registros<!-- registrazioni --> que contienen un subcuenta<!-- sottoconto --> específico de costo o ingreso.

**Tipo de cuenta<!-- Tipo conto -->**: permite seleccionar uno (o varios, manteniendo presionada la tecla Ctrl) de los tipos de cuenta<!-- tipi conto --> (Costos / Ingresos / activo / pasivo o cuentas maestras como Clientes, Proveedores, Bancos y Agentes). Además, abriendo **el expander** es posible **excluir las tipologías** de cuentas maestras.

**Registro IVA**: en esta sección (abriendo el expander) es posible filtrar los registros<!-- registrazioni --> referentes a un registro IVA específico y a un intervalo de protocolos de IVA.

### Sección expandible (expander) *Búsqueda Avanzada*

En esta sección también es posible buscar:

- los [registros en estado provisional<!-- registrazioni in stato provvisorio -->](/docs/finance-area/ledger-records/records/procedures/bridged-recording) (además de definitivos)
- por descripción del registro<!-- registrazione --> (en el libro diario<!-- giornale -->) y de cada movimiento de detalle<!-- movimento di dettaglio --> (descripción de la contrapartida)
- en un intervalo numérico de valores relativos a la sección Debe / Haber<!-- Dare / Avere -->
- registros automáticos de cierre / apertura de cuentas<!-- registrazioni automatiche di chiusura / apertura conti -->

### Campos específicos en la cuadrícula de resultados

**Estado SdI**: recoge la descripción del estado del documento, mostrando tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por SdI.