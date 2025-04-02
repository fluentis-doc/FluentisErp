---
title: tipi anticipo
sidebar_position: 4
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está sujeta al procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

En esta tabla se definen los posibles tipos de [**liquidación de anticipo (distinta di anticipo)**](/docs/treasury/advance/advances-collections) de facturas y sus parámetros correspondientes.


**Código / Descripción (Codice / Descrizione):** Libremente asignables por el usuario para calificar el tipo.

**Tipo de cálculo (Tipo calcolo) (código / descripción):** Las opciones posibles son Imponible / Total: Documento. Indica si el porcentaje anticipado por el banco debe calcularse con referencia al total de la factura o solo al imponible.

**Porcentaje de facturas anticipadas (Percentuale fatture anticipata):** Ingrese aquí el valor del porcentaje de la factura que será anticipado por el banco.

**Tipo de Adquisición (Tipo Acquisizione):** Las posibles operaciones son Vencimientos / Facturas. Esta opción solo controla la forma en que se visualizan los datos en la máscara de búsqueda para la creación de la nueva liquidación, es decir, si se podrá seleccionar toda la factura o solo los vencimientos individuales de la factura. En cualquier caso, desde el punto de vista de la base de datos, los vencimientos (todos) también se gestionan en el caso del modo Facturas.

**Numeración (Numerazione):** Es necesario establecer una numeración desde la tabla de numeradores correspondiente para este tipo de documento.

**Banco C/C (Banca C/C):** (cuenta / subcuenta descripción): Ingrese aquí la subcuenta que se utilizará en los registros contables relativos a la cuenta corriente bancaria.

**Cuenta bancaria de anticipos (Conto bancario anticipi):** Ingrese la cuenta de apoyo utilizada para contabilizar el anticipo bancario.

**Cuenta de intereses pasivos (Conto interessi passivi):** Ingrese la cuenta que se utilizará para la contabilización de intereses.

**Cuenta de comisiones (Conto commissioni):** Ingrese la cuenta que se utilizará para la contabilización de comisiones bancarias.