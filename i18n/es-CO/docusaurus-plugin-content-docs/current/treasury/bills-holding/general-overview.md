---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo Portafolio de Efectos<!-- Portafoglio Effetti --> de Fluentis ERP está diseñado para gestionar y monitorear los efectos comerciales, como letras de cambio, recibos bancarios y otros instrumentos de pago diferido.

Este módulo permite gestionar todas las operaciones relacionadas con los efectos<!-- effetti -->, desde su creación hasta la presentación en el banco a cobro condicional o al cobro, hasta el registro de los abonos finales de las sumas recaudadas, proporcionando un control completo sobre los flujos de caja derivados de los pagos diferidos.

## El flujo operativo:<!-- Il flusso operativo: -->

- inicia retomando los datos de las facturas de venta o de las partidas contables<!-- partite contabili -->.

- Ejecuta el cierre de la cuenta de clientes<!-- conto clienti -->, la generación de los listados de presentación y la eventual creación del impago final. 

Es posible definir libremente los distintos tipos de efecto<!-- effetto --> necesario.

Ya están presentes en el sistema (previa configuración inicial Fast Start) los **Recibos bancarios<!-- Ricevute bancarie -->**, el instrumento actualmente más usado en Italia.


## Listado de tablas necesarias para gestionar el módulo:<!-- Elenco tabelle necessarie per gestire il modulo: -->

[Numeración de efectos<!-- Numerazione effetti -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-numeration),  

[Numeración de listados de presentación<!-- Numerazione distinte di presentazione -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/presentation-lists-numeration),  

[Tipos de efectos<!-- Tipi effetti -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types),  

[Tipos de presentación de listados de efectos<!-- Tipi presentazione distinte effetti -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types),  

[Estados de los efectos<!-- Stati effetti -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-status),  

[Estados de impagos<!-- Stati insoluti -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/unpaid-status),  

[Tipos de pago<!-- Tipi pagamento -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types).


## Parámetros necesarios para gestionar el módulo:<!-- Parametri necessari per gestire il modulo: -->

[Parámetros del portafolio de efectos<!-- Parametri portafoglio effetti -->](/docs/configurations/parameters/treasury/bills-portfolio-parameters).

 

## Procedimientos presentes en el módulo<!-- Procedure presenti nel modulo -->

| Función | Significado | Detalle Video Tutorial |
| --- | --- | --- |
|  [Adquisición de efectos desde facturas<!-- Acquisizione effetti dalle fatture -->](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)  | Llama al procedimiento para crear automáticamente los efectos<!-- effetti --> desde los vencimientos de facturas. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |
|  [Adquisición de efectos desde partidas<!-- Acquisizione effetti dalle partite -->](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)  | Llama al procedimiento para crear automáticamente los efectos<!-- effetti --> desde las partidas abiertas. |<a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |
|  [Contabilización de efectos<!-- Contabilizzazione effetti -->](/docs/treasury/bills-holding/accounting/bills-accounting)  | Llama al procedimiento para contabilizar los efectos<!-- effetti --> y cerrar la cuenta de cliente<!-- conto cliente -->. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=02m55s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |
|  **Contabilización de efectos a proveedor<!-- Contabilizzazione effetti a fornitore -->**  | Llama al procedimiento para contabilizar los efectos<!-- effetti --> a proveedor y cerrar la cuenta del proveedor. | |
|  [Contabilización de listados<!-- Contabilizzazione distinte -->](/docs/treasury/bills-holding/accounting/lists-accounting)  | Llama al procedimiento para contabilizar el listado y valorizar la cuenta de presentación. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05m05s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |
|  Contabilización de abonos<!-- Contabilizzazione accrediti -->  | Llama al procedimiento para contabilizar el abono en cuenta. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=07m51s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |
|  [Importación de impagos<!-- Importazione insoluti -->](/docs/treasury/bills-holding/procedures/import-unpaids)  | Llama al procedimiento de importación del archivo telemático de impagos<!-- Insoluti -->. |
|  [Contabilización de impagos<!-- Contabilizzazione insoluti -->](/docs/treasury/bills-holding/accounting/unpaid-accounting)  | Llama al procedimiento de contabilización de impagos<!-- insoluti -->, con reapertura simultánea de la partida del cliente<!-- partita cliente --> según los parámetros del módulo. | |
|  Contabilización de impagos en cesión<!-- Contabilizzazione insoluti su cessione --> | Llama al procedimiento de contabilización de impagos<!-- insoluti -->, con reapertura simultánea de las partidas del cliente<!-- cliente --> y proveedor según los parámetros del módulo. | |

## Impresiones del módulo<!-- Stampe del modulo -->

| Función | Significado | Detalle Video Tutorial |
| --- | --- | --- |
|  [Impresión de listados de presentación<!-- Stampa distinte di presentazione -->](/docs/treasury/bills-holding/reports/print-presentation-lists)  | Llama al procedimiento para imprimir los listados de presentación en banco de los efectos<!-- effetti -->. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |
|  [Impresión Situación portafolio de efectos<!-- Stampa Situazione portafoglio effetti -->](/docs/treasury/bills-holding/reports/bill-holding-situation)  | Llama al procedimiento para imprimir la estadística de la Situación del portafolio de efectos<!-- effetti -->. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |
|  [Impresión Lista de impagos<!-- Stampa Lista insoluti -->](/docs/treasury/bills-holding/reports/print-unpaid-list)  | Llama al procedimiento para imprimir la lista de impagos<!-- insoluti --> presente. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Enlace al Video Tutorial</a> |



<iframe width="560" height="315" src="https://www.youtube.com/embed/pWgf3bowpMQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>