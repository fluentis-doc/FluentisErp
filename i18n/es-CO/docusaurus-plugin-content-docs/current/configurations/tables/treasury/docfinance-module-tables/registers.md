---
title: Registros (Anagrafici)
sidebar_position: 1
---

La tabla ‘Registros (Anagrafici)' se compone de 4 secciones:

**[Plan de cuentas (Piano dei conti)](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**: en esta sección es necesario indicar, para los subcuentas de los registros bancarios, los campos ‘Banco (Banca)' y ‘RBN'. El primero indica la institución de crédito de referencia, mientras que el segundo indica el tipo de cuenta (cuenta corriente, sbf, …) asociado a la subcuenta: estos dos campos son visibles y modificables también dentro del registro bancario. En cuanto a las subcuentas de tipo cliente/proveedor, además, es posible gestionar desde esta máscara también el campo de la ‘Derogabilidad (Derogabilità)', campo que se puede gestionar también desde la máscara principal del registro de contactos, para la línea individual de subcuenta;

**Flujos de calendario (Flussi scadenziario)**: en esta sección se debe atribuir a cada flujo de cash flow (referirse a la documentación básica del módulo homónimo) el código correspondiente para DocFinance. Se permite la atribución del mismo código en varias líneas de flujo;

**[Tipos de pago (Tipi pagamento)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types)**: en esta sección se debe indicar, para cada tipo de pago, el código correspondiente en DocFinance (se permite la asignación del mismo código en varias líneas). Luego se puede indicar un código de derogabilidad del tipo de pago, que se utilizará en la exportación de datos para DocFinance;

**società**: para cada sociedad es obligatorio indicar el código correspondiente para DocFinance. Las sociedades que no tengan código serán excluidas de los procedimientos de exportación/importación de datos hacia/desde DocFinance.