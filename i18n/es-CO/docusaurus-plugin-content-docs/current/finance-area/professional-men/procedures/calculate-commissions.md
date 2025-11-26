---
title: Cálculo de comisiones
sidebar_position: 2
ai_generated: true
---

El presente procedimiento (relacionado con el área administrativa<!-- area amministrativa -->) se ha creado para la elaboración de los datos de las comisiones<!-- provvigioni --> de agentes ingresados directamente desde los asientos contables, previa configuración adecuada de las causales contables<!-- causali contabili --> involucradas.

En particular, la causal (o las causales) utilizadas para el registro de las facturas de venta deberán tener el flag **Comisiones<!-- Provvigioni -->** activo.

**NOTA**: es necesario habilitar los flags de Gestión de Comisiones<!-- Gestione Provvigioni --> también dentro de Configuración > Utilidades > Administración > Parámetros de contabilidad en correspondencia con el año deseado.

Al abrir el formulario, ejecutando el comando **Buscar<!-- Ricerca -->** ubicado en la ribbon bar, se carga la lista de los agentes activos (a través de un flag especial también se pueden cargar aquellos con fecha de fin de mandato vencida).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

En la parte derecha del formulario están presentes tanto elementos de filtro para los datos desde los cuales elaborar las comisiones<!-- provvigioni -->, como elementos a indicar para procesar correctamente las remuneraciones basadas en la liquidación que se está generando.

ATENCIÓN:

A diferencia de un procedimiento similar presente en el área de ventas, al finalizar el presente procedimiento no se procesan las Liquidaciones (consultables para luego transformarlas en compensaciones), sino que se generarán directamente las compensaciones<!-- compensi --> de agentes, consultables y posteriormente elaborables desde el área de Perceptores<!-- Percipienti -->.

**Filtro Divisa**: permite seleccionar y filtrar las partidas<!-- partite -->, a considerar para el cálculo de comisiones<!-- provvigioni -->, expresadas en una divisa particular.

**Filtro partidas<!-- partite -->**: los filtros de este grupo permiten establecer la fecha de referencia para la maduración de la comisión<!-- provvigione --> (por defecto la fecha actual al abrir el formulario) y filtrar adicionalmente por tipo y fecha del documento. Además, hay un flag que activa la conversión de partidas en moneda extranjera usando el cambio de la fecha del documento, imponiéndose sobre cualquier otro cambio de apertura de las partidas.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

**ATENCIÓN**: En caso de que el agente tenga el método de maduración de comisión<!-- metodo di maturazione provvigioni --> por **Pago total<!-- Pagamento totale -->** y la factura de venta tenga como tipo de pago **Recibo bancario<!-- Ricevuta bancaria -->**, la maduración de la comisión<!-- provvigione --> tendrá lugar en cualquier caso en la fecha de vencimiento del recibo bancario<!-- ricevuta bancaria -->, independientemente del cierre de la partida a raíz de la emisión de la RiBa y la presentación al "Salvo buen fin" y/o abono de las sumas.

Además, se añadirán días adicionales configurables en **Parámetros > Tesorería > Parámetros Riesgo Cliente** > **N.º de días posteriores al vencimiento para efectos presentados al cobro / después del cobro**.

**Datos para la creación de la liquidación**: Los campos de este grupo deben administrarse antes de ejecutar el cálculo a fin de ingresar la fecha de la liquidación (propuesta por defecto como la fecha actual), la descripción de la liquidación y el mes/año de competencia ENASARCO (si se omite este último dato, la compensación<!-- compenso --> será creada con dichos campos vacíos y será necesario integrarlos manualmente dentro de cada compensación<!-- compenso --> generada).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Después de configurar los filtros como se ha descrito previamente, ingresar los datos para la creación de la liquidación, seleccionar en la lista de agentes los sujetos a liquidar y pulsar el botón **Calcular<!-- Calcola -->** en la ribbon bar.

En este punto se puede cerrar el formulario en cuestión, ya que las compensaciones<!-- compensi --> de agentes ya han sido calculadas y están presentes automáticamente en el área de Perceptores<!-- Percipienti -->.