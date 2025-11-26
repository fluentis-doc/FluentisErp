---
title: Tipos de anticipo
sidebar_position: 4
ai_generated: true
---

:::tip[FAst Start]<!-- FAst Start -->
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)<!-- procedura di [**Fast Start**](/docs/guide/fast-start) -->

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada<!-- check list della pagina linkata -->
:::

En esta tabla se definen los posibles tipos de [**documento de anticipo**](/docs/treasury/advance/advances-collections)<!-- distinta di anticipo --> de facturas y sus parámetros respectivos.

**Código / Descripción:** Asignables libremente por el usuario para calificar el tipo.

**Tipo de cálculo (código / descripción):** las opciones posibles son Imponible / Total Documento. Indica si el porcentaje anticipado por el banco debe calcularse con referencia al total de la factura o solo al imponible.

**Porcentaje de facturas anticipadas:** introduzca aquí el valor porcentual de la factura que será anticipado por el banco.

**Tipo de adquisición:** las operaciones posibles son Vencimientos / Facturas. Esta opción solo controla la forma en que se muestran los datos en la pantalla de búsqueda para la creación del nuevo documento de anticipo<!-- distinta -->, es decir, si se podrá seleccionar la factura completa o los vencimientos individuales de la factura. En todo caso, desde el punto de vista de la base de datos, de todas formas se gestionan los vencimientos (todos) incluso en el caso del modo Facturas.

**Numeración:** es necesario configurar una numeración desde la tabla respectiva de numeradores para este tipo de documento.

**Banco C/C:** (cuenta / subcuenta descripción<!-- conto / sottoconto descrizione -->): introduzca aquí la subcuenta<!-- sottoconto --> que se utilizará en los registros contables<!-- registrazioni contabili --> relativos a la cuenta corriente bancaria.

**Cuenta bancaria anticipos:** introduzca la cuenta auxiliar que se usa para contabilizar el anticipo bancario.

**Cuenta de intereses pasivos:** introduzca la cuenta que se usará para la contabilización de intereses

**Cuenta de comisiones:** introduzca la cuenta que se usará para la contabilización de las comisiones bancarias.