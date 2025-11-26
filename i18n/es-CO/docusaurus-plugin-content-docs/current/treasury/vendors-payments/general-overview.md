---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo de pagos a proveedores<!-- pagamenti fornitori --> se utiliza principalmente para crear **listas de pago<!-- distinte di pagamento -->**, típicamente para **transferencia bancaria<!-- bonifico bancario -->**: el módulo, de hecho, permite el envío telemático del archivo **SEPA** (.xml) de los pagos por transferencia bancaria<!-- bonifico -->.

También es posible gestionar archivos para **listas SDD** (Sepa Direct Debit), un formato que ha sustituido, a nivel europeo, las anteriores listas R.i.d. utilizadas para las autorizaciones de débito automático en cuenta corriente.

El módulo permite además importar de forma telemática los **avisos de pago para los recibos bancarios pasivos**, y proceder con su autorización y pago, enviando al banco el flujo de retorno con los recibos autorizados, completando así el procedimiento con la contabilización automática de los pagos realizados.

Se procede a la creación de una nueva lista de pago<!-- distinta di pagamento --> extrayendo los datos de las partidas abiertas de proveedores<!-- partite aperte fornitori --> presentes, directamente interfaciándose con el módulo administrativo: será posible proceder con la contabilización de los movimientos<!-- movimenti --> relativos, cerrando las partidas<!-- partite --> incluidas en la lista de pago<!-- distinta di pagamento --> y la anulación del saldo correspondiente a nivel contable.

**Tablas preliminares<!-- Tabelle Preliminari --> para utilizar el módulo**:

- **Datos principales asociados a tipo de cuenta bancaria<!-- Anagrafiche associate a tipo conto Banca -->**: necesarios para titular la lista<!-- distinta -->, el tipo de cuenta bancaria<!-- conto Banca --> se completa con el procedimiento Fast Start
- Causales contables<!-- Causali contabili --> a utilizar para la contabilización: son las normales de pago de proveedor<!-- pagamento fornitore --> que se crean mediante el procedimiento Fast Start
- Tabla de Tipos de pago<!-- Tabella Tipi pagamento -->: a utilizar en el encabezado de la lista<!-- testata distinta -->, tabla ya rellena por el procedimiento Fast Start
- Numeración de pagos a proveedores<!-- Numerazione pagamenti fornitori -->: para definir los numeradores asociados, tabla ya completada por el Fast Start

 

**Parámetros<!-- Parametri -->**:  

[Parámetros de pagos a proveedor<!-- Parametri pagamenti fornitore -->](/docs/configurations/parameters/treasury/vendor-payments-parameters).

---

| Función | Significado | Enlace Video Tutorial |
| --- | --- | --- |
|  [Bloqueo de partidas pasivas<!-- Blocco partite passive -->](/docs/treasury/vendors-payments/procedures/block-passive-maturity-values)  | Botón para gestionar masivamente el bloqueo de partidas pasivas<!-- partite passive -->. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=05s" target="_blank" rel="noopener noreferrer">Enlace YouTube </a> |
|  **Creación automática de pago a proveedores<!-- Creazione automatica pagamento fornitori -->** | Botón para la creación automática de un pago a proveedor<!-- pagamento fornitore -->. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Enlace YouTube </a> |
|  [Gestión de soportes de pago<!-- Gestione appoggi pagamenti -->](/docs/treasury/vendors-payments/procedures/payments-support-management)  | Botón para gestionar los soportes bancarios de los pagos. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=5m37s" target="_blank" rel="noopener noreferrer">Enlace YouTube </a> |
|  [Contabilización<!-- Contabilizzazione -->](/docs/finance-area/professional-men/accounting/payments-accounting/filter)  | Botón para realizar la contabilización de los pagos a proveedor<!-- pagamenti fornitore -->. | <a href="https://youtu.be/CDCVq0iC29s&amp;t=5m40s" target="_blank" rel="noopener noreferrer">Enlace YouTube </a> |

---
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DkxoWgTkvUg" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>