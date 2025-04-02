---
title: ricerca registrazioni contabili
sidebar_position: 7
---

Este formulario permite buscar los registros contables ingresados anteriormente y eventualmente entrar en modificación (o en visualización) de los mismos seleccionando la línea correspondiente y realizando un doble clic.

#### Botones específicos en la Ribbon Bar

> **ricerca**: permite iniciar la búsqueda de los registros contables ingresados según los filtros establecidos.  
> **nuovo**: permite ingresar un nuevo registro contable.  
> **modifica**: permite modificar un registro contable previamente ingresado.  
> **visualizzazione**: permite visualizar un registro contable previamente ingresado. En esta situación, los datos NO son modificables.  

> **elimina**: permite cancelar un registro contable previamente ingresado. En algunos casos, la operación será impedida (por ejemplo, si una factura ha sido contabilizada automáticamente) solicitando realizar la operación de Rollback (Restauración) relacionada con el procedimiento mediante el cual se creó el registro.

> **Documento origen (Documento origine)**: permite recuperar el documento de origen del cual se originó el registro contable.  
> **duplica**: permite crear un duplicado del registro contable con el fin de crear uno similar, modificando los elementos pertinentes, sin tener que ingresarlo desde cero.  

### Filtros específicos

**causale contabile**: el cuadro combinado (como es habitual en Fluentis) permite seleccionar más de una causa a la vez manteniendo presionada la tecla Ctrl.

**Desde / Hasta fecha de registro + Desde / Hasta fecha de competencia (Da / A data registrazione + Da / A data competenza)**: son las fechas de referencia de los registros contables; atención, los filtros operan con una condición AND y, por lo tanto, el refinamiento de la búsqueda se acumula. En caso de desalineamiento involuntario de la fecha de registro y la fecha de competencia (contable), para encontrar el registro deseado, es recomendable quitar alternativamente el filtro de competencia o el de fecha de registro.

**numero registrazione**: se trata del número presente en el encabezado y referido al libro diario (normalmente la numeración es anual o diaria).

**Fecha / Número de documento (Data / Numero documento)**: referido al encabezado del registro, campo que alberga el número y la fecha de la factura, generalmente.

**tipo documento**: campo presente en el encabezado del registro y referido, por ejemplo, a Factura, Nota de crédito, o Genérico para registros de primera entrada.

**conto registrazione**: se trata del subcuenta ingresada en el encabezado del registro (Cliente o proveedor).

**conto dettaglio**: se trata de los subcuentas ingresadas en la sección del libro diario (movimientos contables). Normalmente se utiliza en combinación con el filtro anterior para buscar, por ejemplo, en relación con un subcuenta de cliente o proveedor particular, los registros que contienen un subcuenta de costo o ingreso particular.

**tipo conto**: permite seleccionar uno (o más de uno manteniendo presionada la tecla Ctrl) de los tipos de cuenta (Costos / Ingresos / activo / pasivo o cuentas de registro como Clientes, Proveedores, Bancos y Agentes). Además, al abrir el **expansor**, es posible **excluir tipos** de cuentas de registro.

**registro iva**: en esta sección (abriendo el expansor) es posible filtrar los registros referidos a un registro de IVA específico y a un intervalo de protocolos de IVA.

### Sección expansible (expander) *Búsqueda avanzada*

En esta sección es posible buscar también:

- los [registros en estado provisional](/docs/finance-area/ledger-records/records/procedures/bridged-recording) (además de definitivo)  
- por descripción del registro (en el diario) y del movimiento de detalle individual (descripción de contrapartida)  
- en un intervalo numérico de valores referidos a la sección de Debe / Haber  
- registros automáticos de cierre / apertura de cuentas  

### Campos específicos en la cuadrícula de resultados

**stato sdi**: alberga la descripción del estado del documento, reportando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente de SdI.