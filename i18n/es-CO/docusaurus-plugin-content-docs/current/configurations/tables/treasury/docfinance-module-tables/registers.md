---
title: Maestros
sidebar_position: 1
ai_generated: true
---

La tabla gestiona una serie de **informaciones que deben asociarse para permitir el diálogo entre Fluentis y DocFinance** (en particular, consulte la documentación específica de DocFinance para conocer el significado de los campos a asociar y las codificaciones requeridas);

se compone de 4 secciones<!-- sezioni -->:

**[Plan de cuentas<!-- Piano dei conti -->](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**: en esta sección es necesario indicar, para los subcuentas<!-- sottoconti --> de los maestros de banco, los campos ‘Banco' y ‘RBN' (estableciendo los códigos válidos de DocFinance). El primero indica la entidad financiera de referencia, mientras que el segundo indica el tipo de cuenta (cuenta ordinaria, sbf, ...) asociada a la propia subcuenta<!-- sottoconto -->: estos dos campos son visibles y editables también dentro del maestro de banco. En cuanto a los subcuentas<!-- sottoconti --> de tipo cliente/proveedor, además, es posible gestionar desde esta pantalla también el campo de ‘Derogabilidad’, campo que también se puede gestionar desde la pantalla principal del maestro de contactos, para la fila individual de subcuenta<!-- sottoconto -->;

**Flujos de vencimientos<!-- Flussi scadenziario -->**: en esta sección se debe atribuir a cada flujo de cash flow (consulte la documentación básica del respectivo módulo) el código correspondiente para DocFinance. Se permite la asignación del mismo código a varias filas de flujo;

**[Tipos de pago<!-- Tipi pagamento -->](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types)**: en esta sección se debe indicar, para cada tipo de pago, el código de correspondencia respectivo en DocFinance (se permite la asignación del mismo código en varias filas). Luego, es posible indicar un código de derogabilidad del tipo de pago, que se utilizará en la exportación de datos para DocFinance;

**Sociedades<!-- Società -->**: para cada sociedad es obligatorio indicar el código correspondiente para DocFinance. Las sociedades que no tengan código serán excluidas de los procedimientos de exportación/importación de datos desde/hacia DocFinance.

:::note[Profundización<!-- Approfondimento -->]
Ejemplo de derogabilidad estándar DocFinance

1    >>         RATING 1

2    >>         RATING 2

3    >>         RATING 3

4    >>         RATING 4



- Lógica de exportación de cuentas de Fluentis hacia DocFinance: el tamaño del campo disponible en el archivo es de 16 caracteres (tamaño Fluentis 8+8 de los campos cuenta+sottoconto<!-- sottoconto -->), el campo se divide en 2 bloques, por ejemplo, la cuenta xyz-001 se inserta en el archivo como ‘xyz     001     ‘.


- Los códigos de las causales<!-- causali --> de Fluentis (máx 4 caracteres disponibles en el formato de DocFinance) serán mapeados en DocFinance, sobre los movimientos contables<!-- movimenti --> que se importan en Fluentis: se recomienda establecer en las causales<!-- causali --> en Fluentis tanto las banderas de cierre como de apertura de partidas (en caso de que la partida no esté identificada o sea un anticipo).

- Recordamos que sigue siendo gestionada en Fluentis la creación de la remesa Sbf<!-- distinta Sbf --> (y por lo tanto crearemos el archivo en Fluentis para importarlo en DocFinance) así como la creación del impago (para la reapertura de las partidas originales): en particular, es necesario mantener la gestión de la cartera de efectos en Fluentis para poder gestionar correctamente la generación de comisiones sobre el pago.

La contabilización de impagos debe prever en el haber una cuenta transitoria bancaria (que puede configurarse en los parámetros del módulo de impagos) porque DocFinance envía el débito en cuenta corriente con contrapartida de esta misma cuenta transitoria.

Todos los demás movimientos<!-- movimenti --> de cobro y pago que involucren bancos serán gestionados en DocFinance.

:::