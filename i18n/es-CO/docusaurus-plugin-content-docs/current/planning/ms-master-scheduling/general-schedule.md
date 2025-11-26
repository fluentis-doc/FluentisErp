---
title: Planificación general
sidebar_position: 2
ai_generated: true
---

:::important ¿Para qué sirve?<!-- A cosa serve -->
La planificación general en Fluentis es un proceso que opera bajo el supuesto de capacidad infinita, lo que significa que la planificación no tiene en cuenta limitaciones físicas en los centros de trabajo o en los recursos disponibles. Esta metodología permite programar las operaciones productivas con cierta flexibilidad.

La planificación puede realizarse utilizando dos lógicas distintas: **lo antes posible** y **lo más tarde posible<!-- al più tardi -->**. La lógica ***lo antes posible<!-- al più presto -->*** busca iniciar las operaciones tan pronto como sea posible, mientras que la lógica **lo más tarde posible<!-- al più tardi -->** planifica las operaciones lo más tarde posible sin comprometer las fechas límite. Estos enfoques permiten un análisis optimizado de las necesidades productivas y la gestión de los tiempos de trabajo según prioridades empresariales y necesidades operativas
:::

El formulario se compone de cuatro pestañas: *Órdenes de producción<!-- Commesse -->*, *Parámetros generales*, *Monitor* e *Histórico*.         

## Órdenes de producción<!-- Commesse -->

La pestaña de órdenes de producción<!-- commesse --> cuenta con un área de filtro que permite filtrar las órdenes de producción<!-- commesse --> que luego se visualizarán en la cuadrícula de resultados inferior.       
Además de los filtros por artículo, año y número de orden de producción<!-- commessa -->, también hay un filtro por Tipo de orden<!-- Tipo commessa -->: que permite visualizar las órdenes de un solo producto, varios productos o ambas.

También está disponible el filtro para *Sitio de producción<!-- Sito produzione -->* de manera que se puedan planificar solo las órdenes<!-- commesse --> de un sitio productivo específico, y una serie de indicadores: *Retrasadas*, *Vencidas*, *Lanzadas* y *Ejecutivas*, que permiten elegir si se desean visualizar también las órdenes<!-- commesse --> atrasadas respecto a la fecha, o bien vencidas, y solo si en los **Parámetros generales de planificación<!-- Parametri generali della pianificazione -->** se ha activado el indicador *planificación de órdenes de producción lanzadas o ejecutivas<!-- pianificazione commesse lanciate o esecutive -->*, también se habilitarán los indicadores *Lanzadas* y *Ejecutivas*; de lo contrario, estos dos campos no estarán activos.          
Si el indicador *planificación de órdenes de producción lanzadas o ejecutivas<!-- pianificazione commesse lanciate o esecutive -->* no está activo, en la cuadrícula se visualizarán solo órdenes<!-- commesse --> en estado *no examinadas* o *planificadas*.       
Seleccionando una o más órdenes de producción<!-- commesse -->, según los parámetros de planificación establecidos en la pestaña correspondiente, mediante el botón de planificación general, el procedimiento creará las órdenes planificadas de los tres tipos previstos: producción, compra y cuenta de trabajo<!-- conto lavoro -->, partiendo de la información presente en las órdenes<!-- commesse --> y cruzando los datos con las respectivas listas de materiales y rutas de operación.

Una vez creados, las órdenes planificadas podrán visualizarse en el formulario [Buscar órdenes planificadas](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), o este formulario puede abrirse mediante el botón **Abrir búsqueda de órdenes planificadas<!-- Apri ricerca ordini pianificati -->**. 
En caso de que esté seleccionada una orden de producción<!-- commessa --> en la cuadrícula de resultados y se presione el botón **Abrir búsqueda de órdenes planificadas<!-- Apri ricerca ordini pianificati -->**, el formulario de órdenes planificadas se abrirá filtrando ya los resultados para esa orden de producción<!-- commessa -->.

*Botones específicos*:

> **Planificación general<!-- Pianificazione generale -->**: permite al sistema programar las órdenes de producción<!-- commesse --> seleccionadas;  
> **Abrir búsqueda de órdenes planificadas<!-- Apri ricerca ordini pianificati -->**: este botón permite abrir la pantalla de  [Buscar órdenes planificadas](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders); en caso de que, antes de presionar este botón, se seleccione una línea de orden de producción<!-- commessa -->, el formulario de órdenes planificadas se abrirá ya prefiltrado en esa orden de producción<!-- commessa -->;               
> **Cambiar fecha final prevista por fecha sugerida<!-- Cambia data fine prevista con data suggerita -->**: este botón permite actualizar la *fecha final prevista* con la *fecha sugerida* calculada por la planificación en caso de que se haya ejecutado con la opción **Controlar documentos retrasados con ATP<!-- Controlla documenti in ritardo con ATP -->** activada;     
> **Secuencia de órdenes de producción<!-- Sequenza commesse -->**: a través de esta funcionalidad se puede acceder a la secuencia de órdenes de producción<!-- commesse -->, dentro de la cual se podrán visualizar las órdenes<!-- commesse --> según la secuencia que se les haya asignado, incluso a través de un gráfico.

*Filtros específicos*:

**Tipo orden de producción<!-- Tipo commessa -->**: mediante este combo es posible seleccionar el tipo de orden de producción<!-- commessa --> que se desea visualizar, ya sea mono-producto, multi-producto o ambas;

**Sitio de producción<!-- Sito produzione -->**: se pueden visualizar las órdenes de producción<!-- commesse --> según el sitio de producción en el que se van a fabricar, seleccionándolo por medio del combo;

**Retrasadas/Vencidas/Lanzadas/Ejecutivas<!-- In ritardo/Scadute/Lanciate/Esecutive -->**: estos indicadores permiten elegir si se desean visualizar también las órdenes de producción<!-- commesse --> con retraso respecto a la fecha o vencidas y solo si en los  [Parámetros generales de planificación ](/docs/planning/ms-master-scheduling/general-schedule) está activada la opción *planificación de órdenes de producción lanzadas o ejecutivas<!-- pianificazione commesse lanciate o esecutive -->*, de lo contrario los dos campos no estarán activos; si no está activada, como se explica en el artículo sobre parámetros de planificación, en la pestaña de órdenes de producción<!-- commesse --> solo se podrán ver en estado de no examinadas o programadas, y estas asumirán el estado de lanzadas y/o ejecutivas si dicha opción no está marcada, no será posible visualizarlas dentro de esta pestaña.

*Campos específicos en la cuadrícula de resultados*

**Fecha sugerida<!-- Data suggerita -->**: como se explica en el artículo relativo a los parámetros generales de planificación, al activar un indicador específico llamado  [Controlar documentos retrasados con ATP](/docs/planning/ms-master-scheduling/general-schedule) el procedimiento de planificación realizará un razonamiento de modo que, si incluso solo una de las órdenes que se programan y generan resulta estar retrasada respecto a la fecha prevista, el sistema cancelará todas las órdenes creadas y volverá a calcularlas desde la **Fecha inicio MS** (que se define siempre en los parámetros y que se activa solo marcando la opción **Control de documentos retrasados con ATP**) con la lógica *lo antes posible<!-- al più presto -->* y propondrá la nueva fecha para las órdenes de producción<!-- commesse --> precisamente en el campo *Fecha sugerida<!-- Data suggerita -->* presente en la cuadrícula de resultados.

### Procedimiento de planificación general<!-- Procedura Pianificazione generale -->

Una vez seleccionadas las órdenes de producción<!-- commesse --> que se quieren programar, se activará el botón **Planificación general<!-- Pianificazione generale -->** presente en la barra de opciones del formulario, y al hacer clic en ese botón el sistema procederá con la planificación de las órdenes de producción<!-- commesse --> seleccionadas.

Para visualizar todas las programaciones efectuadas y las respectivas órdenes de producción creadas para cada orden de producción<!-- commessa -->, basta con ir a la pestaña **Histórico<!-- Storico -->**.

:::danger Nota    
Las órdenes de producción<!-- commesse --> creadas manualmente siempre son producidas independientemente de la disponibilidad del artículo a fabricar.    
:::   

## Parámetros de planificación general<!-- Parametri di Pianificazione generale -->

:::note Nota
Antes de proceder con la planificación, es importante configurar en esta pestaña los parámetros a seguir para ejecutar la planificación.
::: 

**Planificar hasta el<!-- Pianificare fino al -->**: indicar la fecha hasta la cual el sistema debe considerar los documentos ingresados. Esta fecha es calculada por el sistema como la fecha presente más el valor en meses introducido en el campo  **Número máximo de meses para la planificación<!-- Numero massimo di mesi per la pianificazione -->** presente en los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters);       

**Materiales / Recursos**: al activar la opción **Materiales**, dentro de las órdenes planificadas creadas se incluyen los materiales a consumir. Al activar la opción **Recursos**, dentro de las órdenes planificadas creadas se incluyen también las fases de trabajo<!-- fasi di lavorazione -->. En caso de no estar activas una o ambas opciones, las órdenes planificadas igualmente se crearán pero sin los materiales o fases de trabajo respectivos;

**Órdenes planificadas de<!-- Ordini pianificati di -->**: a través de los 3 indicadores se indica si se desea que el sistema genere los tres tipos de órdenes previstas, es decir, producción, compra y cuenta de trabajo<!-- conto lavoro -->; de este modo, estos tipos de orden tendrán el enlace directo con la orden de producción<!-- commessa -->; (por ejemplo, si no se marca la opción de Compra, pero se mantiene la de Ejecución MRP, el sistema igualmente creará también las órdenes de compra pero estarán desvinculadas de la orden de producción<!-- commessa -->);

**Generar solo órdenes planificadas por niveles**: en este caso se indicarán los niveles (1-2...) para los cuales se desean generar órdenes planificadas;

**Órdenes a proveedores o Solicitudes de compra y órdenes de cliente**: en este caso, si existen en el sistema documentos sin fecha de compromiso y disponibilidad, se puede indicar al sistema que considere como fecha aquella que se podrá ingresar en el campo correspondiente, o bien indicar que no los tome en cuenta en absoluto;

**Agrupamiento de órdenes planificadas por<!-- Raggruppamento ordini pianificati per -->**: en caso de trabajar por orden de producción<!-- commessa -->, en este campo debe configurarse la opción *Sin agrupamiento*; de lo contrario, puede seleccionarse mediante el combo correspondiente el tipo de agrupamiento que se desea aplicar, pero en este caso el enlace entre órdenes planificadas y orden de producción<!-- commessa --> se perdería;

**Agrupamiento lo más tarde posible o lo antes posible<!-- Raggruppamento al più tardi o al più presto -->**: en este caso se puede elegir si agrupar las órdenes lo más tarde posible<!-- al più tardi --> (basándose en la última) o lo antes posible<!-- al più presto --> (que es lo más recomendable) y en el campo siguiente denominado **Por un periodo en días** se indicará el número de días dentro de los cuales realizar el agrupamiento;

**Considerar las cantidades según el lote económico/Considerar los múltiplos del lote económico**: al marcar el primer parámetro se indica que durante la planificación también se debe tener en cuenta el lote económico del artículo, y en consecuencia se habilitará la opción que permitirá decidir si también deben considerarse los múltiplos del lote económico. 
Para el artículo analizado se considerarán los valores del lote económico y sus múltiplos, si y solo si están activos los respectivos indicadores dentro de los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo. En el caso de tratarse de un artículo con tipo de abastecimiento de producción, los valores del lote económico y los múltiplos se tomarán de la pestaña de producción de los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del propio artículo, y si se trata de un artículo de tipo abastecimiento de compra, serán tomados del proveedor por defecto presente en la pestaña [Proveedores preferidos](/docs/erp-home/registers/items/create-new-item) de su ficha.

**Compactar/separar órdenes**: en este caso se elige si se desea mantener o no un día de buffer entre el final de la producción de la orden de nivel 1 y la del siguiente nivel;

**Ejecución del MRP después de la planificación y Artículos a stock**: se indica que se desea que el sistema, después de una primera planificación, analice igualmente con el MRP todos los códigos de artículo de la lista de materiales<!-- Distinta Base --> del artículo que tienen una política de gestión diferente a la de orden de producción<!-- commessa -->, para verificar la cobertura y eventualmente generar órdenes planificadas pero sin relación con la orden de producción<!-- commessa -->. Al activar también Artículos a stock, el procedimiento MRP considerará también todos los artículos con política de gestión a stock en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters); 

**planificación por zona de entrega**: al marcar esta opción el sistema verifica cuándo debe entregarse la orden de acuerdo con su zona de entrega y programará la orden antes respecto del día de entrega;

**Controlar documentos retrasados con ATP<!-- Controlla documenti in ritardo con ATP -->**: si se habilita esta opción también se activa el campo siguiente denominado **Fecha inicio MS**; en este punto el procedimiento de planificación realizará un razonamiento tal que, si incluso solo una de las órdenes que se planifican y generan resulta estar retrasada respecto a la fecha prevista, el sistema cancelará todas las órdenes creadas y volverá a calcularlas desde la **Fecha inicio MS** con la lógica *lo antes posible<!-- al più presto -->* y propondrá la nueva fecha para las órdenes de producción<!-- commesse --> precisamente en el campo *Fecha sugerida<!-- Data suggerita -->* presente en la cuadrícula de resultados. A este punto, mediante el botón dedicado **Cambiar fecha final prevista por fecha sugerida<!-- Cambia data fine prevista con data suggerita -->** (presente en la pestaña de órdenes de producción<!-- commesse --> de la *Planificación general*), es posible sustituir la fecha final prevista con la fecha sugerida recién calculada para luego volver a lanzar la planificación y tener así todas las órdenes planificadas correctamente;

**Liberación automática de órdenes planificadas<!-- Rilascio automatico ordini pianificati -->**: si se decide habilitar este parámetro, la planificación además de generar las órdenes como planificadas, también procederá a liberarlas automáticamente y por tanto las órdenes planificadas de producción se convertirán en órdenes de producción, las de compra en solicitudes de compra y las órdenes planificadas de cuenta trabajo en órdenes de cuenta trabajo<!-- conto lavoro -->;

**planificación lo antes posible o lo más tarde posible<!-- pianificazione al più presto o al più tardi -->**: el usuario puede decidir con qué lógica debe realizarse la planificación general entre: lo antes posible<!-- al più presto --> y lo más tarde posible<!-- al più tardi -->. La lógica lo antes posible apunta a iniciar las operaciones cuanto antes, es decir, a partir de la fecha actual; mientras que la lógica lo más tarde posible planifica las operaciones tan tarde como sea posible sin comprometer los plazos, empezando por la fecha de entrega e yendo hacia atrás en el tiempo. 

**planificación de órdenes de producción lanzadas o ejecutivas<!-- pianificazione commesse lanciate o esecutive -->**: permite activar los indicadores: lanzados y ejecutivos presentes en la pestaña *órdenes de producción<!-- commesse -->*; al hacerlo será posible visualizar y seleccionar también las órdenes de producción<!-- commesse --> en estado lanzado y ejecutivo para luego volver a planificarlas. Es importante tener en cuenta que, para las órdenes<!-- commesse --> en estado lanzado o ejecutivo, solo se replanificarán aquellas órdenes planificadas que aún no hayan sido liberadas;

**Versión**: el procedimiento planificará las órdenes de producción<!-- commesse --> según la versión configurada en este campo, si en la orden de producción<!-- commessa di produzione --> no encuentra una versión ingresada. La versión ingresada en la orden de producción<!-- commessa di produzione --> tendrá prioridad sobre la versión de los parámetros de *Planificación general*. Este es un campo que debe ser llenado obligatoriamente, de lo contrario no será posible proceder con la planificación;

**Considerar la disponibilidad**: si este indicador está activo, indica al procedimiento que durante el proceso de planificación se debe tener en cuenta la disponibilidad proveniente de los almacenes<!-- magazzini --> indicados en la cuadrícula inferior, que son los definidos dentro del formulario [Cálculo de Disponibilidad](/docs/erp-home/registers/items/calculate-availability/); 

**Considerar disponibilidad en la fecha de necesidad o la mínima en el periodo**: estos indicadores solo se activan si está activo el indicador **Considerar la disponibilidad**; En la **fecha de necesidad** significa que el procedimiento deberá considerar la disponibilidad en el momento en que deba producir la orden, mientras que, en el caso de la fecha **mínima en el periodo**, el procedimiento considerará la disponibilidad mínima en el periodo hasta la fecha configurada en el parámetro *Planificar hasta el*.

**Considerar lotes en estado no disponible**: este indicador también se activa solo si está activo el indicador **Considerar la disponibilidad**; si se activa, el procedimiento deberá considerar los lotes en estado no disponible;      

**Considerar disponibilidad también para el primer nivel**: este indicador también se activa solo si está activo el indicador **Considerar la disponibilidad**; si está activo, el procedimiento deberá considerar la disponibilidad también para el primer nivel (es decir, para el artículo presente en la orden de producción<!-- commessa di produzione -->);

**Considerar también disponibilidad negativa**: si está activo, el procedimiento deberá considerar también las disponibilidades negativas durante la planificación para el artículo de primer nivel; de hecho, es posible activar este indicador solo si está activo el indicador **Considerar disponibilidad también para el primer nivel**;      

**Considerar disponibilidades provenientes de**: también estos indicadores solo pueden activarse si se activa el indicador **Considerar la disponibilidad** y permiten indicar si se quiere que el procedimiento considere las disponibilidades provenientes de compras, ventas, almacén<!-- magazzino -->, cuenta de trabajo<!-- conto lavoro --> y producción;

**Reintegro de stock mínimo del artículo y reintegro del punto de reorden del artículo**: el primer indicador solo se activa si se activa el segundo. Ambos indican que el procedimiento deberá realizar el reintegro del punto de reorden definido para ese artículo y, si se desea, también el reintegro del stock mínimo del artículo. Estos valores se ingresan en la pestaña [Abastecimiento<!-- Approvvigionamento -->](/docs/erp-home/registers/items/create-new-item) de la ficha del artículo;

**Considerar el índice de cobertura**: si el indicador está activo, el procedimiento deberá tener en cuenta el índice de cobertura que se establece siempre en la pestaña *Abastecimiento<!-- Approvvigionamento -->* del artículo;

**Considerar también las alternativas de materiales**: si está activo, en el momento de planificar la orden de producción<!-- commessa -->, el procedimiento deberá tener en cuenta también las alternativas de materiales, presentes en la pestaña *alternativas* de la [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management), en caso de no haber disponibilidad suficiente del material principal indicado en la lista;            

**Considerar solo materiales alternativos**: solo se activa cuando el indicador **Considerar también las alternativas de materiales** está activo; si está activo este indicador, primero se verifica la disponibilidad de los componentes alternativos según su prioridad, y si no es suficiente se verifica la del componente principal; solo se habilita si está activo el indicador **Considerar la disponibilidad**;    

:::note Nota
Los materiales alternativos se ingresan en la pestaña **Alternativas**, relacionada con el material principal, presente en la [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Considerar las fases alternativas**: si está activo, este indicador indica que en el momento de la planificación se deberán considerar también fases de trabajo<!-- fasi di lavoro --> alternativas; activando este indicador se activará el siguiente campo editable denominado **Tolerancia para la ocupación del C.d.T. %<!-- Tolleranza per l'occupazione del C.d.L. % -->**, en el cual se podrá indicar la tolerancia de ocupación del centro de trabajo como porcentaje, a partir de la cual el procedimiento deberá considerar fases alternativas a la fase predeterminada.

## Monitor

En esta pestaña, mediante la activación de los indicadores presentes, el usuario tiene la posibilidad de elegir la visualización de los resultados de la planificación en la pestaña **Histórico<!-- Storico -->**.

Se puede decidir si visualizar los **Calendarios** considerados (el Calendario de *Fábrica* y el calendario de *Capacidades productivas*); se puede decidir que se señale si en la planificación había **Artículos sin** *Parámetros MRP*, sin *Lista de materiales<!-- Distinta base -->* o *Ruta de trabajo<!-- Ciclo di lavoro -->*, sin *Proveedor preferente* (en caso de órdenes de compra), sin *Tercerista preferente* (para las órdenes de cuenta de trabajo<!-- conto lavoro -->) y sin la indicación del stock mínimo para todos aquellos artículos gestionados a stock. Para cada **Orden de producción<!-- Commessa di produzione -->** se puede elegir visualizar en el histórico, el *Número de líneas programadas* y el detalle de estas líneas, las órdenes en retraso y las vencidas.

En cuanto a las **Órdenes planificadas**, se puede elegir si visualizar en el histórico, el *Número de órdenes generadas* y su *Detalle*, las órdenes *Retrasadas* y *Vencidas*, las *Alternativas de materiales*; también se puede escoger recibir una notificación en caso de que existan **Órdenes planificadas sin** *Material*, *Fases de trabajo<!-- Fasi di lavorazione -->*, *Proveedor* (para compras) y *Tercerista* (para cuentas de trabajo<!-- conto lavoro -->).

**Leyenda**: los indicadores activos permiten recibir la notificación y los detalles relacionados con las opciones seleccionadas.

## Histórico<!-- Storico -->

En la cuadrícula de esta pestaña se visualizan todos los datos resumidos relativos a la planificación de las órdenes de producción<!-- commessa -->.

**Prog. plan.<!-- Progr. sched. -->**: visualiza una simple progresión de la operación de planificación ejecutada por el usuario;

**Operador**: muestra el usuario que ha ejecutado la planificación ;

**No. errores**: muestra el número de errores registrados durante el procedimiento de planificación ;

**Fecha inicio**: muestra la fecha y hora de inicio del proceso de planificación ;

**Fecha fin**: muestra la fecha y hora de finalización del proceso de planificación ;

**Datos programados procedentes de**: muestra el origen exacto de los datos programados;

**Previsional**: muestra si los datos provienen de previsiones de venta o del Plan Maestro de Producción;

**Periodo**: muestra el tipo de previsión, semanal o mensual;

**Día**: muestra el día de la semana designado como el día en que debe caer la fecha de finalización de la orden de producción<!-- commessa di produzione --> programada directamente desde la Definición del MPS.

Todas las demás columnas de la cuadrícula visualizan las configuraciones utilizadas en la pestaña **Parámetros** de la *Planificación general<!-- Pianificazione generale -->* relativa a la línea seleccionada.

**Resultado de la planificación <!-- Risultato pianificazione ** -->

En función de la línea seleccionada en la cuadrícula, en esta sección aparecerán los detalles requeridos por el usuario en la pestaña **Monitor**.

En el resultado de la planificación, se puede ver el número de la orden de producción<!-- commessa --> recién planificada, el número de órdenes planificadas que se han generado a partir de esa orden de producción<!-- commessa --> y el detalle de las órdenes planificadas que se han generado.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).