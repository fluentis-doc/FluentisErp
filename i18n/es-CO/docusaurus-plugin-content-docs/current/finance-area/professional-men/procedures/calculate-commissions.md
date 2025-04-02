---
title: calcolo provvigioni
sidebar_position: 2
---

El presente procedimiento (perteneciente al área administrativa) ha sido creado para la elaboración de los datos de las comisiones de los agentes ingresados directamente desde los asientos contables, previa adecuada configuración de las causales contables involucradas.

En particular, la causal (o las causales) utilizadas para el registro de las facturas de venta deberán tener el indicador **provvigioni** activo.

**NOTA**: es necesario habilitar los indicadores de Gestión de Comisiones también dentro de Configuración > Utilidades > Administración > Parámetros de contabilidad en correspondencia con el año deseado.

Al abrir el formulario ejecutando el comando **ricerca**, ubicado en la barra de herramientas, se carga la lista de los agentes activos (mediante el indicador correspondiente, también se pueden cargar aquellos con fecha de finalización de mandato vencida).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

En la parte derecha del formulario hay elementos de filtro para los datos de los cuales elaborar las comisiones, así como elementos a indicar para elaborar correctamente los compensos basados en la liquidación que se está generando.

ATENCIÓN:

A diferencia de la elaboración análoga presente en el área de ventas, al finalizar este procedimiento no se elaboran las Liquidaciones (que pueden ser buscadas y consultadas y luego transformadas en compensos), sino que se generarán directamente los compensos de los agentes que pueden ser buscados y posteriormente elaborados desde el área de Beneficiarios (Percipienti).

**filtro divisa**: permite seleccionar y filtrar las partidas, que se considerarán para el cálculo de las comisiones, expresadas en una moneda particular.

**filtro partite**: los filtros de este grupo permiten establecer la fecha de referencia para la devengo de la comisión (establecida por defecto como la fecha actual al abrir el formulario) y filtrar aún más por tipo y fecha del documento. También hay un indicador que activa la conversión de las partidas en moneda utilizando el tipo de cambio de la fecha del documento, imponiéndose sobre el posible tipo de cambio diferente al abrir las partidas.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

**ATENCIÓN**: En caso de que el agente tenga el método de devengo de comisiones a **Pago total**, y la factura de venta tenga como tipo de pago **ricevuta bancaria**, el devengo de la comisión se realizará en cualquier caso a la fecha de vencimiento del recibo bancario, independientemente del cierre de la partida en virtud de la emisión de la RiBa y de la presentación al Salvo buen fin y/o acreditación de las sumas.

Además, se añadirán días adicionales que podrán establecerse en **Parámetros > Tesorería > Parámetros de Riesgo Cliente** > **N. días más allá de la fecha de vencimiento para efectos pres. al salvo buen fin / después de la cobranza.**

**Datos para la creación de liquidación (Estremi per la creazione liquidazione)**: Los campos de este grupo deben ser gestionados antes de lanzar la ejecución del cálculo para ingresar la fecha de la liquidación (propuesta por defecto como la fecha actual), la descripción de la liquidación y el mes/año de competencia ENASARCO (si se omite este último dato, el compenso se creará con los campos homónimos vacíos y será necesario integrarlos manualmente dentro de cada compenso generado).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Después de haber establecido los filtros como se ha descrito anteriormente, ingresado los datos para la creación de la liquidación, seleccionar de la lista de agentes los sujetos a liquidar y presionar el botón **calcola** ubicado en la barra de herramientas.

En este punto, se puede cerrar el formulario en comentario, ya que los compensos de los agentes ya están calculados y presentes automáticamente en el área de Beneficiarios (Percipienti).