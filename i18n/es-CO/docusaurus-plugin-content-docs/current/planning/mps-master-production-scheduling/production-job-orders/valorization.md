---
title: costificazione
sidebar_position: 6
---

:::important ¿Para qué sirve? (A cosa serve)  
La **costificazione** de los pedidos de producción representa un elemento crucial en la gestión efectiva de los procesos productivos empresariales.  
Este sistema de gestión permite establecer, monitorear y comparar los costos previstos y reales asociados a un pedido, proporcionando un cuadro claro y detallado de los recursos empleados.  
A través de una interfaz estructurada, el sistema permite configurar parámetros preliminares, gestionar documentos e ingresar o modificar costos adicionales, tanto a nivel global como específico para cada pedido.  
La posibilidad de analizar los costos de manera sintética y analítica, y de realizar correcciones y ahorros, convierte la **costificazione** en una herramienta esencial para mantener la competitividad y la eficiencia productiva.
:::

**Parametrizaciones preliminares** (Parametrizzazioni preliminari)  

Antes de proceder, consulte lo indicado en las siguientes páginas respecto a la *costificazione de los pedidos de producción*:  

> [Parámetros MS -> pestaña costificación del pedido](/docs/configurations/parameters/production/mps-parameters)  
> [Tipo costificación del pedido](/docs/configurations/tables/production/production-job-order-cost-type)  
> [Tipos de documentos](/docs/configurations/tables/production/documents-types)  
> [Parámetros de trabajo por encargo -> Valorización. tratamiento de materiales a costo](/docs/configurations/parameters/production/subcontractor-parameters/)  

*Botones específicos* (Pulsanti specifici):

> **costi aggiuntivi**: permite ingresar costos adicionales que pueden ser propuestos por defecto en cada costificación futura (estos costos no están relacionados con un pedido específico, sino que son globales). Dichos costos se dividen en *Costos directos*, *Costos generales* y *Otros costos*. Estos se reportarán por defecto en las correspondientes secciones de costos previstos y consumidos en la pestaña *Costos totales*.  
> **Ejecutar costificación (Esegui costificazione)**: permite iniciar el procedimiento de costificación de pedidos;  
> **inserisci costificazione**: permite ingresar una nueva costificación; automáticamente se insertarán todos los datos por defecto ingresados en la fase de parametrización preliminar, los cuales pueden ser modificados manualmente para cada costificación;  
> **cancella costificazione**: permite eliminar una costificación ya creada;  
> **esplodi costificazione**: permite desglosar el árbol de documentos de una costificación ya creada.  

:::note Nota
La pestaña **costificazione** está presente tanto en la gestión de pedidos mono producto como en la de múltiples productos; en el caso de los múltiples productos, la costificación tendrá en cuenta todos los artículos presentes en ese pedido.
::: 

Esta pestaña se compone de una sección de encabezado que contiene la información relativa a la costificación seleccionada y una serie de pestañas subordinadas: **Detalles de costos**, **Costos totales** y **Análisis de costos**.  
En la sección de encabezado hay una cuadrícula que contiene la lista de todas las valorizaciones lanzadas para ese pedido, mientras que en la parte derecha se muestran las informaciones generales relativas a la costificación seleccionada.  
En la barra de herramientas, hay botones que permiten abrir los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo, la [Lista de materiales](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) y el [Ciclo de trabajo](/docs/erp-home/registers/production/routes/new-route).  
A través del botón **Ingresar costificación**, se creará automáticamente una nueva costificación y se insertarán todos los datos por defecto que se ingresaron en la fase de parametrización preliminar, los cuales pueden ser modificados manualmente para cada fila.  
Al seleccionar una fila de costificación, se puede desglosar el árbol de documentos a través del botón **Explosión de costificación**, o eliminarla con el botón **Eliminar costificación**.  
A través del botón **Costos adicionales**, se pueden ingresar costos adicionales que pueden ser propuestos por defecto en cada costificación futura (estos costos no están relacionados con un pedido específico, sino que son globales). Dichos costos se dividen en *Costos directos, Costos generales y Otros costos*. Estos se reportarán por defecto en las correspondientes secciones de costos previstos y consumidos en la pestaña **Costos totales**. De lo contrario, siempre será posible ingresarlos o modificarlos manualmente en la sección correspondiente de la pestaña de costos totales.  
Una vez determinados todos los parámetros, para ejecutar o volver a ejecutar una costificación, será suficiente seleccionarla y presionar el botón **Ejecutar costificación**.

## Detalle de costos (Dettaglio costi)

En la pestaña de detalle de costos se muestran las informaciones detalladas de los costos relativos a la costificación seleccionada en la parte superior del formulario.  
En la tabla de la izquierda, es posible visualizar el árbol de documentos que componen la costificación con la siguiente información:  
**Tipo de documento**: indica la tipología del documento;  
**Año**: indica el año del documento;  
**Número**: indica el número del documento;  
**Lote**: indica el número de lote del documento (si está presente);  
**Tipo**: indica el código de la tipología del documento;  
**Clase**: indica la clase del artículo presente en el documento;  
**Código de artículo**: indica el código del artículo presente en el documento;  
**Variante**: indica la variante del artículo presente en el documento;  
**U.M.**: indica la unidad de medida del artículo presente en el documento;  
**Cantidad**: indica la cantidad del artículo presente en el documento;  
**Cst. tot. previsto**: indica el costo total previsto (presupuestado) del artículo presente en el documento;  
**Cst. tot. efectivo**: indica el costo total efectivo (real) del artículo presente en el documento;  
**Descripción de artículo**: indica la descripción del artículo presente en el documento;  
**Descripción de variante**: indica la descripción de la variante del artículo presente en el documento.  

Una vez seleccionado un documento del árbol, en la parte derecha del formulario se visualizan todas las informaciones de detalle relativas al mismo, divididas por:

#### *Trabajos internos* (Lavorazioni interne)  

**C.D.L.**: indica el código del centro de trabajo;  
**Máquina**: indica el código de la máquina;  
**Grp MDO**: indica el código del grupo de mano de obra;  
**Ref. Documento**: indica el referente del documento;  
**U.M. Tiempos**: indica la unidad de medida de los tiempos;  
**T. Setup previsto**: indica el tiempo de configuración previsto;  
**T. Setup efectivo**: indica el tiempo de configuración efectivo;  
**T. Máquina previsto**: indica el tiempo de máquina previsto;  
**T. Máquina efectivo**: indica el tiempo de máquina efectivo;  
**T. MDO previsto**: indica el tiempo de mano de obra previsto;  
**T. MDO efectivo**: indica el tiempo de mano de obra efectivo;  
**Descripción C.D.L.**: indica la descripción del artículo del centro de trabajo;  
**Descripción máquina**: indica la descripción de la máquina;  
**Descripción Grp. MDO**: indica la descripción del grupo de mano de obra;  
**Cst. tot. previsto**: indica el costo total previsto;  
**Cst. tot. efectivo**: indica el costo total efectivo.  

:::note Nota
En caso de que el centro de trabajo efectivo sea diferente del previsto, en esta tabla se mostrarán dos filas: una con el centro de trabajo previsto con sus costos relacionados y otra con el centro de trabajo efectivo.
::: 

#### *Trabajos externos* (Lavorazioni esterne)

**terzista**: indica el tercero;  
**Ref. Documento**: indica el referente del documento;  
**U.M.**: indica la unidad de medida operativa;  
**Q.tà prevista**: indica la cantidad prevista a producir;  
**Q.tà efectiva**: indica la cantidad efectiva producida;  
**Prz. unit. previsto**: indica el precio unitario previsto;  
**Prz. Unit. efectivo**: indica el precio unitario efectivo;  
**Cst. tot. previsto**: indica el costo total previsto;  
**Cst. tot. efectivo**: indica el costo total efectivo.  

#### *Materiales* (Materiali) 

**Clase**: indica la clase del artículo;  
**Código de artículo**: indica el código del artículo;  
**Descripción de artículo**: indica la descripción del artículo;  
**Ref. Documento**: indica el referente del documento;  
**U.M.**: indica la unidad de medida operativa;  
**Q.tà prevista**: indica la cantidad prevista a adquirir;  
**Q.tà efectiva**: indica la cantidad efectiva adquirida;  
**Prz. unit. previsto**: indica el precio unitario previsto;  
**Prz. Unit. efectivo**: indica el precio unitario efectivo;  
**Variante**: indica la variante del artículo;  
**Descripción variante**: indica la descripción de la variante del artículo;  
**Cst. tot. previsto**: indica el costo total previsto;  
**Cst. tot. efectivo**: indica el costo total efectivo.  

En la parte inferior del formulario hay un expander denominado **Detalle de costo del documento** en el cual se reportan las siguientes informaciones:  

**Costo de materiales preventivo / efectivo unitario**: indica el costo unitario de los materiales preventivo / efectivo relacionado con el documento seleccionado;  
**Costo de trabajo preventivo / efectivo unitario**: indica el costo unitario de los trabajos (internos y externos) preventivo / efectivo relacionado con el documento seleccionado;  
**Total costo preventivo / efectivo unitario**: indica el total del costo unitario (materiales y trabajos) preventivo / efectivo relacionado con el documento seleccionado;  
**Costo de materiales preventivo / efectivo total**: indica el costo total de los materiales preventivo / efectivo relacionado con el documento seleccionado;  
**Costo de trabajo preventivo / efectivo total**: indica el costo total de los trabajos (internos y externos) preventivo / efectivo relacionado con el documento seleccionado;  
**Total costo preventivo / efectivo total**: indica el total del costo total (materiales y trabajos) preventivo / efectivo relacionado con el documento seleccionado;  

## Costos totales (Costi totali)

En esta pestaña se reportan de manera resumida los costos previstos y consumidos relacionados con la costificación seleccionada.  
En específico, para cada sección (previsto y consumido), se reportan los siguientes campos:  
**Costo industrial**: total de los costos de materiales y costos de trabajos (internos y externos);  
**Total costos directos**: total de los costos ingresados en la sección **Costos directos**;  
**Total costo directo del pedido**: total del *Costo industrial* y del *Total costos directos*;  
**Recargo**: permite indicar el tipo de recargo, ya sea en porcentaje o en valor, así como el valor mismo;  
**Total costo recargado**: total del *Total costo directo del pedido* y del *Recargo*;  
**Total costos generales**: total de los costos ingresados en la sección **Costos generales**;  
**Total otros costos**: total de los costos ingresados en la sección **Otros costos**;  
**Corrección**: permite ingresar un valor para corregir el *Total costo recargado*;  
**Redondeo**: permite decidir si redondear al alza o a la baja y el orden de magnitud;  
**Total costo del pedido**: total del *Total costo recargado*, *Total costos generales*, *Total otros costos*, *Corrección* y *Redondeo*. El *Total costo del pedido* se resalta en rojo en la sección de *Costos consumidos* cuando este es superior al presente en la sección de *Costos previstos*.  

:::note Nota
Los campos que se reportan y alinean automáticamente entre la sección de *Costos previstos* y la de *Costos consumidos* son: el *Recargo* (tipo de recargo y valor), *Corrección* y *Redondeo* (tipo de redondeo y valor). En cualquier caso, en la sección de *Costos consumidos* es posible variarlos manualmente para diferenciarlos de los valores ingresados en la sección de *Costos previstos*.
::: 

A través del botón **Costos adicionales** es posible ingresar *Costos directos*, *Costos generales* y *Otros costos* que pueden ser propuestos por defecto, tanto en costos previstos como en costos consumidos.  
Para cada uno de estos costos, es posible definir si son de tipo porcentual o a valor, indicando también el valor mismo.  

Para toda la información necesaria para la creación de estos costos, consulte la página relativa a [Elementos de costo](/docs/configurations/tables/general-settings/cost-elements).  

## Análisis de costos (Analisi costi)

En esta pestaña se destacan todos los componentes de costo en relación con los costos previstos y consumidos, utilizando dos tipos de análisis:  

> **sintetica**: en este tipo de análisis se reporta el *Costo industrial*, como suma de los costos de materiales y de los costos de trabajo; además, se reportan los *Costos directos*, *Costos generales* y *Otros costos* y, finalmente, el total de *Recargos* y *Correcciones*;  
> **analitica**: en este tipo, sin embargo, se reportan en el gráfico todas las partidas individualmente, por lo que el *Costo industrial* se desglosa en *Costo de materiales*, *Costo de trabajos internos* y *Costo de trabajos externos*; igualmente, las partidas relacionadas con *Recargos* y *Correcciones* se reportan separadamente; obviamente, también se reportan los *Costos directos*, *Costos generales* y *Otros costos*.  

Estos dos tipos de análisis pueden ser comparados mediante una *distribución de costos* con un diagrama de pastel, o con un *comparativo de costos* utilizando un diagrama de barras.

## Modo de cálculo de costos previstos y reales (consumidos)

Los documentos previstos que contribuyen al cálculo de los costos previstos son:  
- Pedido  
- Orden planificada  
- Solicitud de compra  
- Orden de proveedor  
- Orden de producción  
- Orden de trabajo por encargo  

Los documentos efectivos que contribuyen al cálculo de los costos efectivos son:  
- DDT de entrega de material  
- Devoluciones de trabajo por encargo  
- Declaraciones de producción  

### Trabajos internos (Lavorazioni interne)

Los costos de los trabajos internos se obtienen de la [Máquina](/docs/configurations/tables/production/machines) y del [Grupo de mano de obra](/docs/configurations/tables/production/labour-group) que se previó utilizar en el ciclo de trabajo para los costos previstos y de aquellos que se utilizaron efectivamente en las declaraciones de producción para los costos efectivos.  
A la [Máquina](/docs/configurations/tables/production/machines) y al [Grupo de mano de obra](/docs/configurations/tables/production/labour-group) se les asocia un [Centro de costo](/docs/configurations/tables/production/cost-center) en sus respectivas tablas, donde a este [Centro de costo](/docs/configurations/tables/production/cost-center) se le asocia una tarifa determinada.  
Obviamente, el costo indicado en el [Centro de costo](/docs/configurations/tables/production/cost-center) se multiplicará por el tiempo indicado en el ciclo de trabajo para los costos previstos, mientras que para los costos efectivos se multiplicará por el tiempo realmente empleado reportado en las declaraciones de producción.  
Además, es importante haber ingresado el número de máquinas y el número de operadores tanto en el ciclo como luego en la declaración de producción; haber generado el [Calendario de fábrica](/docs/configurations/tables/production/factory-calendar) y aquellos de [Capacidades productivas](/docs/configurations/tables/production/productive-capacity-calendar); y también haber indicado dentro de los [Centros de trabajo](/docs/erp-home/registers/production/routes/work-center) los respectivos horarios de inicio y fin (incluso el descanso).

### Trabajos externos (Lavorazioni esterne)

El costo previsto se basa en el precio de lista de trabajo por encargo (mientras no se haya creado la orden de trabajo por encargo); en el momento en que se crea la orden de trabajo por encargo, se basará en el precio indicado en la fila del artículo.  
En lo que respecta al costo efectivo, el costo se obtiene del valor indicado en el documento de devolución de trabajo por encargo.  

### Materiales (Materiali)

El costo de los materiales se basa en el **Tipo de costo** que seleccionamos en la costificación, ya sea último, promedio o estándar.  
Además, también se basa en los indicadores **Costo del lote** y **Costo del pedido**. Si ambos están activados, el procedimiento valorizará el costo del material según el tipo de costo seleccionado, considerando los valores solo de ese pedido específico y para ese lote específico, obviamente entre los movimientos realizados con causales de carga con el indicador *actualiza costo último o promedio* (dependiendo del valor indicado en el campo **Tipo de costo**) y el indicador de *interés fiscal* activos; si no se encuentra ningún movimiento con estas características, buscará entre los movimientos que han cargado ese lote; si tampoco encuentra estos, buscará entre todos los movimientos de ese artículo. Si no hay ningún movimiento de carga para ese artículo, consultará los respectivos campos de costo último, promedio y estándar de la base de datos del artículo.  
En el caso del costo previsto, los valores se obtendrán de la [Solicitud de compra](/docs/purchase/purchase-requests/general-overview) y de la [Orden de proveedor](/docs/purchase/purchase-orders/general-overview) y se multiplicarán por los consumos previstos en la [Lista de materiales](/docs/erp-home/registers/production/bill-of-materials/assemblies/new-assemble); mientras que para los costos efectivos se obtendrán de los [DDT de compra](/docs/purchase/purchase-delivery-note/general-overview) del material y se multiplicarán por las cantidades empleadas en las [Declaraciones de producción](/docs/production/pp-production-in-progress/signals/sisgnals).

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funciones, botones y campos comunes](/docs/guide/common).