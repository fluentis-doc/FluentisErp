---
title: Creación automática de liquidación de comisiones (Creazione automatica liquidazione provvigioni)
sidebar_position: 1
---

El formulario se abre a través de la ruta *Ventas > Agentes > Procedimientos > Creación automática de liquidación de comisiones (Vendite > Agenti > Procedure > Creazione automatica liquidazione provvigioni)*.

El procedimiento de creación automática de liquidación de comisiones realiza el cálculo definitivo de las liquidaciones de agentes, según los parámetros establecidos. 

## Cálculo de liquidaciones (Calcolo liquidazioni)

Una vez que se haya ejecutado la búsqueda, en la sección **lista agenti** se mostrarán todos los agentes definidos en el sistema: en esta sección es necesario seleccionar (también utilizando los comandos *Ctrl* o *Shift* del teclado para seleccionar múltiples filas) la lista de sujetos para los cuales realizar el cálculo.

Es visible el **tipo de maduración (tipo di maturazione)** de la comisión del agente, para poder **configurar adecuadamente los filtros de la derecha según la configuración del agente**.

A la derecha se presentan los siguientes filtros:

- un filtro por moneda del documento, con el fin de crear una liquidación del agente diferenciada por moneda;

- tres secciones de filtro según el documento de referencia (pedido/guía/facturas, para agentes con pedido confirmado, entrega realizada, factura emitida);

- una sección de filtro sobre las **partidas**, para los agentes con vencimiento madurado o **pago realizado**: según la fecha establecida, se madurarán las partidas con vencimiento anterior en el primer caso, y en el segundo caso, la parte correspondiente en relación con los **cobros registrados** en contabilidad **con fecha anterior**.

En el caso de **efectos**, estos no se considerarán madurados hasta la **fecha de maduración** (es decir, fecha de vencimiento **más los días de riesgo del cliente** establecidos en los parámetros del módulo homónimo).

:::note[Nota]
Con el método de *pago realizado*, la selección de las comisiones a liquidar será siempre "todo" *hasta la fecha*, no es posible seleccionar lo que ha madurado en un rango de fechas específico y no está previsto un vínculo con el campo de periodicidad de la liquidación presente en [registro del agente (anagrafica agente)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement).

Esto es necesario porque, mientras que para los documentos no hay forma de agregar nuevos/modificar en períodos ya liquidados, la situación es diferente para los pagos: nada impide crear un pago con fecha de registro en un período ya cerrado en un cálculo de liquidación de agentes (quizás porque no se han reconciliado los bancos o se ha cometido un error en un registro antiguo), por lo que los datos serían "perdidos" en los cálculos posteriores.
:::

El indicador **conversione provvigioni usando il cambio alla data documento** prevé que el importe de las comisiones se efectúe según el tipo de cambio de la fecha del documento; de lo contrario, se utilizará por defecto el tipo de cambio de la fecha de la liquidación del agente, tal como se establece en los campos en la parte inferior de la máscara.

:::note **Más en detalle:**
- si no se activa el indicador, Fluentis totalizará las comisiones maduradas por moneda del documento y luego convertirá estos totales en la moneda del agente al tipo de cambio de la fecha de la liquidación (en un caso complejo, por ejemplo, factura en GBP y agente en USD, buscará si encuentra en la tabla de cambios un tipo de cambio explícito gbp-usd o usd-gbp y lo aplicará; si no lo encuentra, usará los cambios respecto al euro con todos los decimales que tiene).
- si se activa el indicador, en cambio, Fluentis aplicará a cada documento el tipo de cambio almacenado en el propio documento para obtener las comisiones en la moneda de la empresa (redondeándolas a los decimales de la moneda de la empresa para cada documento), luego toma este total en la moneda de la empresa y lo convierte a la moneda del agente.

Por ejemplo, si solo hay 2 documentos a considerar y los cambios son iguales porque todo es en la misma fecha, se podrían tener diferencias de centavos en el total que se obtiene, debido al redondeo intermedio en la moneda de la empresa que se hace al activar el indicador. La situación es claramente improbable y "teórica" para entender mejor la lógica exacta de cálculo según el indicador.

:::

En la **sección inferior (sezione inferiore)**, *estremi per la creazione della liquidazione delle provvigioni*, se debe indicar la fecha de la liquidación, una descripción y el mes/año de referencia para el cálculo del Enasarco.

:::important[Importante]
Los campos del mes/año para el Enasarco deben completarse con atención porque de ellos depende el cálculo del mínimo y máximo de Enasarco. Así, al cálculo que se va a realizar se le asigna una "competencia" a efectos del cálculo de un posible mínimo, si para el trimestre en cuestión no se alcanza el mínimo, o máximo, ajustando las contribuciones a cargo del agente y/o de la empresa mandante.

Los tramos para las contribuciones de Enasarco están definidos en la tabla [Categorías de agentes (Categorie agenti)](/docs/configurations/tables/sales/agent-category).
:::

:::tip COMISIONES SOBRE LO COBRADO Y ASIENTOS CONTABLES PROVISORIOS
Para el cálculo de las comisiones maduradas, se tendrán en cuenta SOLAMENTE los registros en estado **definitivo**, por lo que los posibles cobros (incluso anticipados) registrados en modo provisional serán ignorados.
:::

:::tip COMISIONES SOBRE LO COBRADO Y RECIBOS BANCARIOS
La maduración de las comisiones tiene en cuenta en todo caso la fecha de vencimiento del efecto, incluso si la partida del cliente se cierra debido a la contabilización de la emisión de Ri.Ba. y el efecto se presenta al salvo buen fin o es acreditado.
:::

:::danger ATENCIÓN
Prestar especial atención en el caso de Recibos Bancarios también a la gestión de los **PARÁMETROS DE RIESGO DEL CLIENTE**

donde están presentes dos campos **N. días después del vencimiento para efectos presentados al salvo buen fin** / **N. días después del vencimiento para efectos presentados después del cobro** que, si se valoran, añaden un retraso también en la maduración de las comisiones.

Además, tener cuidado en la fase de inicialización de un nuevo entorno que haya sido guardado al menos una vez dentro del formulario Parámetro de riesgo del cliente para que estén presentes los parámetros predeterminados (en particular referidos a los campos mencionados anteriormente); de lo contrario, la fecha de vencimiento del efecto no será leída y la comisión siempre madurará al cierre de la partida por emisión de Ri.Ba.
:::

*Botones*:
> **ricerca**: realiza la búsqueda de los agentes presentes en la empresa activa.  
> **calcolo liquidazioni**: realiza el cálculo de las liquidaciones para los agentes seleccionados, según las configuraciones de filtro establecidas.  

## Restaurar (Ripristina)

La pestaña de restauración permite identificar en qué liquidación de agente se han valorado las comisiones de los documentos filtrados, o identificar una o más liquidaciones según los filtros presentes en la máscara. A través del botón de restauración, es posible anular la creación de la liquidación del agente. No se permite la restauración de liquidaciones que ya han sido enviadas al módulo de perceptores.

*Botones*:
> **ricerca**: realiza la búsqueda de las liquidaciones automáticas ya calculadas.  
> **ripristino**: anula la creación de las liquidaciones seleccionadas.