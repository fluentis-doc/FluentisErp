---
title: Tipos de documentos
sidebar_position: 25
---

:::tip[Inicio Rápido]
La tabla está relacionada con el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Esta tabla gestiona los tipos de documentos asociados a las causas de contabilidad general y, por lo tanto, a los registros contables o interanuales o de gestión que hacen referencia a estas causas.

:::tip Nota
el **Inicio Rápido** crea los tipos de documento asociándolos a la localización geográfica correspondiente, de modo que haya una lista de documentos para Italia, Rumania, etc. El objeto, de hecho, incluye el campo país, que se puede visualizar en la cuadrícula del object navigator: para retrocompatibilidad, también es posible tener tipi documento *sin* vínculo a un país, de modo que sean visibles en todas las empresas de la base de datos sin distinción. Cada nueva entrada, sin embargo, tomará el país de la empresa activa.
:::

Los campos disponibles son:
- *Tipo de código*: es el código del tipo.
- *Tipo de descripción*: la descripción.
- *Factura*
- *Recibo*
- *Paquete*
- *Liquidación de cuentas*
- *Transferencia*
- *General*
- *Nota de crédito*: para este tipo de documento, ***FluentisERP*** verificará que el registro contable tenga líneas negativas en la sección IVA.
- *Nota de débito*
- *Nota de variación*: para las notas de crédito de IVA ***simplificadas*** (TD08).
- *Summary*
- *Autofacturación*
- *Colección*
- *Pago*
- *Código para facturas electrónicas*: es el código que se utilizará para valorar el archivo ES (TD01, TD04, etc.).

:::tip Nota
En la cuadrícula a continuación, es posible vincular un numerador específico para el tipo de documento: se utilizará para un numerador interno, no oficial, de los registros contables, que no es directamente visible en la interfaz.
:::