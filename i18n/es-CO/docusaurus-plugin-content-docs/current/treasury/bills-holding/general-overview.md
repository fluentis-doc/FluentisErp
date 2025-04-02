---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo Cartera de Efectos de Fluentis ERP está diseñado para gestionar y monitorear los efectos comerciales, como letras, recibos bancarios y otros instrumentos de pago diferido.

Este módulo permite gestionar todas las operaciones relacionadas con los efectos, desde su creación hasta su presentación en el banco, ya sea para la aceptación o el cobro, hasta la registración de los abonos finales de las sumas recaudadas, proporcionando un control completo sobre los flujos de caja derivados de los pagos diferidos.

## El flujo operativo: 

- comienza recuperando los datos de las facturas de venta o de las partidas contables.

- Realiza el cierre de la cuenta de clientes, la generación de las listas de presentación y la eventual creación de la deuda final.

Es posible definir a voluntad los diversos tipos de efecto necesarios.

Ya están disponibles en el sistema (previa configuración inicial Fast Start) los **ricevute bancarie**, el instrumento actualmente más utilizado en Italia.


## Lista de tablas necesarias para gestionar el módulo:

[Numeración de efectos](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-numeration),  

[Numeración de listas de presentación](/docs/configurations/tables/treasury/bills-portfolio-module-tables/presentation-lists-numeration),  

[Tipos de efectos](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types),  

[Tipos de presentación de listas de efectos](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types),  

[Estados de efectos](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-status),  

[Estados de deudas](/docs/configurations/tables/treasury/bills-portfolio-module-tables/unpaid-status),  

[Tipos de pago](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types).


## Parámetros necesarios para gestionar el módulo:

[Parámetros de cartera de efectos](/docs/configurations/parameters/treasury/bills-portfolio-parameters).


## Procedimientos presentes en el módulo

| Función | Significado | Detalle Video Tutorial |
| --- | --- | --- |
|  [Adquisición de efectos desde facturas](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)  | Invoca el procedimiento para crear automáticamente los efectos a partir de las fechas de las facturas. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  [Adquisición de efectos desde partidas](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)  | Invoca el procedimiento para crear automáticamente los efectos a partir de las partidas abiertas. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  [Contabilización de efectos](/docs/treasury/bills-holding/accounting/bills-accounting)  | Invoca el procedimiento para realizar la contabilización de los efectos y cerrar la cuenta del cliente. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=02m55s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  **Contabilización de efectos a proveedor**  | Invoca el procedimiento para realizar la contabilización de efectos a proveedor y cerrar la cuenta del proveedor. | |
|  [Contabilización de listas](/docs/treasury/bills-holding/accounting/lists-accounting)  | Invoca el procedimiento para realizar la contabilización de la lista y valorar la cuenta de presentación. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05m05s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  Contabilización de abonos  | Invoca el procedimiento para realizar la contabilización del abono en cuenta. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=07m51s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  [Importación de deudas](/docs/treasury/bills-holding/procedures/import-unpaids)  | Invoca el procedimiento de importación de la trazabilidad telemática de deudas. |
|  [Contabilización de deudas](/docs/treasury/bills-holding/accounting/unpaid-accounting)  | Invoca el procedimiento de contabilización de deudas, con la correspondiente reapertura de la partida del cliente según los parámetros del módulo. | |
|  Contabilización de deudas por cesión | Invoca el procedimiento de contabilización de deudas, con la correspondiente reapertura de las partidas del cliente y proveedor según los parámetros del módulo. | |

## Impresiones del módulo

| Función | Significado | Detalle Video Tutorial |
| --- | --- | --- |
|  [Impresión de listas de presentación](/docs/treasury/bills-holding/reports/print-presentation-lists)  | Invoca el procedimiento para imprimir las listas de presentación en el banco de los efectos. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  [Impresión de la situación de cartera de efectos](/docs/treasury/bills-holding/reports/bill-holding-situation)  | Invoca el procedimiento para imprimir la estadística de la situación de la cartera de efectos. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  [Impresión de lista de deudas](/docs/treasury/bills-holding/reports/print-unpaid-list)  | Invoca el procedimiento para imprimir la lista de deudas existentes. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |


<iframe width="560" height="315" src="https://www.youtube.com/embed/pWgf3bowpMQ" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>