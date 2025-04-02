---
title: parametri
sidebar_position: 3
---

En esta ficha se gestionan los parámetros contables principales del procedimiento:  

las **fechas de registro y competencia (date di registrazione e competenza)**, la **causal** de pago a utilizar, los **subcuentas del banco a debitar (sottoconti della banca da addebitare)** y la de **registro de la deuda de la retención (rilevazione del debito della ritenuta) (no obligatorio**, si no está presente se utilizará el subcuenta ingresado en el tipo de retención).  

El indicador de cierre de partidas, sugerido por defecto, nunca debe eliminarse (para gestionar el cierre de las partidas).

 

Las opciones de agrupamiento previstas son:

El predeterminado **singola registrazione** (sin el indicador **raggruppa conti**): en este caso, se creará un único registro con un solo movimiento bancario (para facilitar la conciliación de los movimientos con el extracto de cuenta bancaria), mientras que los otros subcuentas se detallarán compenso por compenso (para un mayor control de los movimientos en la cuenta de retenciones). En caso de que también se configure el indicador de agrupamiento de cuentas, se agruparán los datos de los otros subcuentas iguales movilizados;

**nessun raggruppamento**: en este caso, cada compenso tendrá un registro separado.

**raggruppa per sottoconto**: en este caso, la agrupación se realizará por perceptor.

 

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image01.png)

 

La sección siguiente, activada por el indicador de **creazione automatica pagamenti fornitori**, permite crear un listado de pago en el módulo **[Pagos a proveedores (Pagamenti fornitori)](/docs/treasury/vendors-payments/create-vendor-payments)**, con el fin de imprimirlo y enviar telemáticamente el archivo de transferencias bancarias vía homebanking. Los campos a configurar son: el tipo de pago del listado, el campo cuenta corriente (que se propone desde el registro conectado al subcuenta del banco ingresado arriba), la fecha de emisión del pago y una eventual fecha valor beneficiario (previa activación del indicador correspondiente) y una éventuale nota final para registrar en contabilidad en la línea del banco.

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image02.png)

 

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Contabilización de pagos (Contabilizzazione pagamenti) | Ejecuta la contabilización de los pagos seleccionados. |