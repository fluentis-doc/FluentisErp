---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo de pagos a proveedores se utiliza principalmente para crear **listas de pago (distinte di pagamento)**, típicamente para **transferencia bancaria (bonifico bancario)**: el módulo, de hecho, prevé la posibilidad del envío telemático del archivo **SEPA** (.xml) de los pagos por transferencia.

Además, es posible gestionar archivos para **listas SDD (Sepa Direct Debit)**, un formato que ha sustituido, a nivel europeo, las anteriores listas R.i.d. utilizadas para las autorizaciones de débito automático en cuenta corriente.

El módulo también permite importar telemáticamente los **avisos de pago para las recibos bancarias pasivas (ricevute bancarie passive)** y proceder con su autorización y pago, mediante el envío al banco del flujo de retorno con los recibos autorizados, completando así el procedimiento con la contabilización automática de los pagos realizados.

Se procede a la creación de una nueva lista de pago recuperando los datos de las partidas abiertas de proveedores presentes, interfacándose directamente con el módulo administrativo: será posible proceder con la contabilización de los movimientos relacionados, cerrando las partidas correspondientes incluidas en la lista de pago y cancelando el saldo relativo a nivel contable.

**Tablas Preliminares para utilizar el módulo (Tabelle Preliminari per utilizzare il modulo)**:

- **Registros asociados a tipo de cuenta bancaria (Anagrafiche associate a tipo conto Banca)**: necesarios para titular la lista, el tipo de cuenta bancaria se pobló durante el procedimiento de Fast Start.  
- Causales contables a utilizar para la contabilización: son las normales de pago a proveedores que se crean en el procedimiento de Fast Start.  
- Tabla Tipos de pago: a llamar en el encabezado de la lista, tabla ya poblada por el procedimiento de Fast Start.  
- Numeración de pagos a proveedores: para definir los numeradores asociados, tabla ya poblada por el Fast Start.  

**parametri**:  

[Parámetros de pagos a proveedores (Parametri pagamenti fornitore)](/docs/configurations/parameters/treasury/vendor-payments-parameters).

---

| Función (Funzione) | Significado (Significato) | Link Video Tutorial |
| --- | --- | --- |
| [Bloqueo de partidas pasivas (Blocco partite passive)](/docs/treasury/vendors-payments/procedures/block-passive-maturity-values) | Botón para proceder a la gestión masiva de los bloqueos de las partidas pasivas. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=05s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |
| **Creación automática de pago a proveedores (Creazione automatica pagamento fornitori)** | Botón para la creación automática de un pago a proveedor. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |
| [Gestión de apoyos de pagos (Gestione appoggi pagamenti)](/docs/treasury/vendors-payments/procedures/payments-support-management) | Botón para gestionar los apoyos bancarios de los pagos. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=5m37s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |
| [Contabilización (Contabilizzazione)](/docs/finance-area/professional-men/accounting/payments-accounting/filter) | Botón para proceder con la contabilización de los pagos a proveedores. | <a href="https://youtu.be/CDCVq0iC29s&amp;t=5m40s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DkxoWgTkvUg" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>