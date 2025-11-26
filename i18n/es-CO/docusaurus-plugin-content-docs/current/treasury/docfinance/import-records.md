---
title: Importación de registros
sidebar_position: 3
ai_generated: true
---

A través de este procedimiento se realiza la importación del archivo de registros contables<!-- registrazioni contabili --> creado por DocFinance.

La importación se realiza mediante un flujo *Folder Monitor* de Bizlink.

Por lo tanto, el archivo con los registros<!-- registrazioni --> a importar deberá depositarse en la carpeta monitoreada por el servicio, el cual se encargará de importarlo automáticamente.

En este punto, el sistema procederá a crear los registros contables<!-- registrazioni contabili --> correspondientes, cerrando los movimientos abiertos<!-- partite --> indicados por DocFinance y contabilizando los movimientos<!-- movimenti --> en las cuentas<!-- conti --> mapeadas en el sistema (los tipos de transacción contable<!-- causali contabili --> deben tener el mismo código tanto en el ERP como en DocFinance).

El resultado de la importación será visible en la cuadrícula inferior (mientras que en la superior se visualizarán las importaciones realizadas) y con los comandos de la barra de herramientas se podrá eliminar la importación y visualizar el detalle de los errores encontrados durante la importación.

:::danger ATENCIÓN<!-- ATTENZIONE -->
La importación de pagos<!-- pagamenti --> prevé que en el archivo Docfinance se incluya el id del movimiento abierto<!-- partita aperta --> a cerrar, generando así por parte de Fluentis un pago asociado al mismo.

Si por cualquier motivo el id del movimiento<!-- partita --> no corresponde con el presente en el archivo (modificaciones manuales de cualquier tipo realizadas después de la exportación de movimientos que luego fueron gestionados en Docfinance), se generarán pagos<!-- pagamenti -->, pero estos no estarán correctamente asociados a los movimientos<!-- partite -->, los cuales permanecerán abiertos. Es posible proceder a compensar dichos movimientos<!-- partite --> o buscar los pagos<!-- pagamenti --> importados en esta situación, eliminarlos y recrearlos manualmente asociando correctamente el movimiento correspondiente. La operación se realiza, después de eliminar el pago<!-- pagamento -->, presionando el botón *Nuevo<!-- Nuovo -->* y luego *Crear desde movimientos / pagos<!-- Crea da partite / pagamenti -->* y seleccionando el movimiento a cerrar.
:::

:::note Información<!-- Info -->
[Enlace a las especificaciones técnicas de **Docfinance**](/pdf/it-IT/TRACCIATI_DocFinance_28_Luglio_2021.pdf)
:::