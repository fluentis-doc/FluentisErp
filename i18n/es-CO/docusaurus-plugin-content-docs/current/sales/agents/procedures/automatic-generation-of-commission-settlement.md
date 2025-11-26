---
title: Creación automática de liquidación de comisiones
sidebar_position: 1
ai_generated: true
---

El formulario se abre a través de la ruta *Ventas > Agentes > Procedimientos > Creación automática de liquidación de comisiones<!-- Vendite > Agenti > Procedure > Creazione automatica liquidazione provvigioni -->*.

El procedimiento de creación automática de liquidación de comisiones ejecuta el cálculo definitivo de las liquidaciones de agente, según los parámetros configurados.

## Cálculo de liquidaciones<!-- Calcolo liquidazioni -->

Una vez realizada la búsqueda, en la sección **Lista de agentes<!-- Lista agenti -->** se visualizarán todos los agentes definidos en el sistema: en esta sección es necesario seleccionar (también utilizando los comandos *Ctrl* o *Shift* del teclado para seleccionar varias filas) la lista de sujetos para los cuales se realizará el cálculo.

Es visible el **tipo de devengo<!-- tipo di maturazione -->** de la comisión del agente, para así **configurar los filtros de la derecha de manera adecuada a las configuraciones del agente**.

A la derecha se presentan los siguientes filtros:

- Un filtro por moneda del documento, para crear una liquidación de agente diferenciada por moneda;
- Tres secciones de filtro dependiendo del documento de referencia (pedido/remito/facturas, para agentes con pedido confirmado, entrega realizada, factura emitida);
- Una sección de filtro sobre las **partidas**, para los agentes con vencimiento devengado o **pago realizado**: según la fecha configurada se devengarán las partidas con vencimiento anterior en el primer caso y, en el segundo caso, la cuota relacionada con los **cobros registrados** en contabilidad con **fecha anterior**.

En el caso de **efectos**, estos no serán considerados devengados hasta la **fecha de devengo** (es decir, fecha de vencimiento **más los días de riesgo de cliente<!-- rischio cliente -->** configurados en los parámetros del módulo homónimo).

:::note[Nota]
Con el método de *pago realizado* la selección de las comisiones<!-- provvigioni --> a liquidar siempre será "todo" *hasta la fecha*, no es posible seleccionar lo que se ha devengado en un rango específico de fechas y no está prevista una vinculación con el campo de periodicidad de la liquidación presente en la [ficha de agente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement).

Esto es necesario porque mientras para los documentos no hay forma de agregar nuevos/modificar documentos en periodos ya liquidados, el tema es diferente para los pagos: nada impide crear un pago con fecha de registro en un periodo ya cerrado en un cálculo de liquidación de agentes (quizás porque no se han conciliado los bancos o se ha cometido un error en un registro antiguo), por lo tanto el dato se "perdería" en los cálculos sucesivos.
:::

El indicador **Conversión de comisiones usando el cambio a la fecha del documento<!-- Conversione provvigioni usando il cambio alla data documento -->** indica que el importe de las comisiones se calculará según el tipo de cambio de la fecha del documento; de lo contrario, se utilizará por defecto el tipo de cambio de la fecha de la liquidación de agente tal y como está configurado en los campos de la base del formulario.

:::note **Más en detalle:**
- Si no se activa el indicador, Fluentis totalizará las comisiones devengadas por moneda del documento y luego convertirá estos totales en moneda a la moneda del agente al tipo de cambio de la fecha de liquidación (en un caso complejo, por ejemplo, factura en GPB y agente en USD, buscará en la tabla de cambios un cambio explícito gbp-usd o usd-gbp y lo aplicará, si no lo encuentra usará los cambios respecto al euro con todos los decimales que encuentre).
- Si se activa el indicador, en cambio, Fluentis aplicará a cada documento el tipo de cambio almacenado en el propio documento para obtener las comisiones en moneda de la empresa (redondeándolas a los decimales de la moneda de la empresa para cada documento), toma luego este total en moneda de la empresa y lo convierte a la moneda del agente.

Si, por ejemplo, solo hubiera 2 documentos a considerar y los tipos de cambio fueran iguales porque todo es en la misma fecha, entonces podrían surgir diferencias de centavos en el total obtenido, debidas al redondeo intermedio sobre la moneda de la empresa que se realiza al activar el indicador.  
La situación es claramente improbable y "teórica" para hacer entender mejor la lógica exacta del cálculo según el indicador.
:::

En la **sección inferior**, *Datos para la creación de liquidación de las comisiones<!-- Estremi per la creazione della liquidazione delle provvigioni -->*, se debe indicar la fecha de la liquidación, una descripción y el mes/año de referencia para el cálculo de Enasarco.

:::important[Importante]
Los campos de mes/año para Enasarco deben completarse con atención ya que de ellos depende el cálculo de los mínimos y máximos de Enasarco. Por lo tanto, al cálculo que se va a ejecutar se le atribuye una "competencia" para el cálculo de eventual mínimo, si para el trimestre en cuestión no se alcanza el mínimo, o máximo, ajustando las contribuciones a cargo del agente y/o empresa mandante.

Los tramos de las contribuciones Enasarco están definidos en la tabla [Categorías de agentes](/docs/configurations/tables/sales/agent-category)
:::

:::tip COMISIONES SOBRE LO COBRADO Y ASIENTOS CONTABLES PROVISORIOS
Para el cálculo de las comisiones devengadas se consideran SOLO los asientos en estado **definitivo**, por lo cual eventuales cobros (también anticipados) registrados en modalidad provisional serán ignorados
:::

:::tip COMISIONES SOBRE LO COBRADO Y RECIBOS BANCARIOS
El devengo de las comisiones tiene en cuenta en cualquier caso la fecha de vencimiento del efecto, aunque la partida del cliente se cierre por efecto de la contabilización de la emisión de Ri.Ba. y el efecto sea presentado al cobro sujeto a confirmación o acreditado.
:::

:::danger ATENCIÓN
Prestar particular atención en el caso de recibos bancarios también a la gestión de los **PARÁMETROS DE RIESGO DE CLIENTE<!-- PARAMETRI RISCHIO CLIENTE -->**

donde hay dos campos **N. días después del vencimiento para efectos presentados al cobro sujeto a confirmación** / **N. días después del vencimiento para efectos presentados al cobro después de la recaudación** los cuales, si están valorados, añaden también un retraso en el devengo de las comisiones.

Además, poner atención en la fase de inicialización de un nuevo entorno a que se haya guardado al menos una vez dentro del formulario Parámetro riesgo de cliente<!-- Parametro rischio cliente --> para que existan los parámetros por defecto (en particular los campos antes mencionados), de lo contrario no se leerá la fecha de vencimiento del efecto y la comisión siempre se devengará al cierre de la partida por emisión de Ri.Ba.
:::

*Botones*:
> **Buscar<!-- Ricerca -->**: ejecuta la búsqueda de los agentes presentes en la empresa activa.  
> **Cálculo de liquidaciones<!-- Calcolo liquidazioni -->**: ejecuta el cálculo de las liquidaciones para los agentes seleccionados, según la configuración de los filtros configurados.

## Restaurar<!-- Ripristina -->

La pestaña de restauración permite identificar en qué liquidación de agente se han valorado las comisiones de los documentos filtrados, o identificar una o más liquidaciones según los filtros presentes en el formulario. Mediante el botón de restauración es posible anular la creación de la liquidación del agente. No se permite la restauración de liquidaciones ya transferidas al módulo de perceptores.

*Botones*:
> **Buscar<!-- Ricerca -->**: ejecuta la búsqueda de las liquidaciones automáticas ya calculadas.  
> **Restaurar<!-- Ripristino -->**: anula la creación de las liquidaciones seleccionadas.