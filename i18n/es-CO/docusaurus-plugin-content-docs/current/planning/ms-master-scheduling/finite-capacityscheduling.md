---
title: Programación a capacidad finita (Schedulazione a capacità finita)
sidebar_position: 4
---

:::important ¿Para qué sirve? (A cosa serve)
La función de programación a capacidad finita de Fluentis es una herramienta avanzada diseñada para optimizar la gestión de los recursos productivos dentro de una empresa manufacturera. Este módulo se integra dentro del sistema ERP de Fluentis y permite planificar y gestionar las actividades productivas considerando las reales capacidades de los recursos disponibles, como mano de obra, maquinarias y materiales. Gracias a esta funcionalidad, las empresas pueden minimizar los tiempos de inactividad, mejorar la eficiencia operativa y responder con mayor flexibilidad a las variaciones de la demanda.

La programación a capacidad finita tiene en cuenta las limitaciones físicas de los recursos, permitiendo crear planes de producción realistas y viables. Además, ofrece herramientas analíticas para prever posibles cuellos de botella y permite la optimización de la asignación de tareas, integrándose con otras funcionalidades del ERP para una visión holística de las operaciones empresariales. Este sistema ayuda a las empresas a equilibrar de manera efectiva la demanda de los clientes con las capacidades productivas, mejorando en última instancia la rentabilidad y la satisfacción del cliente.
:::

La programación de producción a capacidad finita permite entender cuánto trabajo puede ser realizado en un periodo de tiempo definido, considerando las limitaciones de algunos recursos. El objetivo final es garantizar la mayor eficiencia de los ritmos productivos a lo largo de toda la cadena interna de la planta, optimizando los tiempos y reduciendo los costos de los centros de trabajo.  
Con este modo de planificación, es posible crear secuencias óptimas de trabajo en cada Centro de trabajo, logrando su máxima saturación.

## Pedidos (Commesse)

La pestaña de pedidos muestra solamente los pedidos que se encuentran en estado no revisado.

*Botones específicos*:

> **Programación F.C.S. (Schedulazione F.C.S.)**: permite al sistema programar a capacidad finita las fases de procesamiento de los documentos previstos;  
> **modifica data commessa**: este botón permite modificar la fecha del pedido;  
> **cambia priorità**: mediante esta funcionalidad, se puede variar la prioridad de los pedidos seleccionados;    
> **Parámetros MRP**: permite abrir los parámetros MRP de los pedidos seleccionados;    
> **distinta base**: permite abrir las listas de materiales de los pedidos seleccionados;    
> **ciclo di lavoro**: permite abrir los ciclos de trabajo de los pedidos seleccionados.        

*Filtros específicos*:

**tipo commessa**: mediante esta combinación es posible seleccionar el tipo de pedido que se desea visualizar, si los pedidos monoproduto, los pedidos multiproduto o ambos;

**sito produzione**: se pueden visualizar los pedidos en función del sitio de producción en el que deben ser producidos, seleccionándolo mediante la combinación adecuada;

*Campos específicos en la cuadrícula de Resultados*

**data suggerita**: como se explicó en el artículo relacionado con los parámetros generales de programación, activando un indicador particular llamado [Controlar documentos tardíos con ATP (Controlla doc in ritardo con ATP)](/docs/planning/ms-master-scheduling/general-schedule), el programador realizará un razonamiento tal que si incluso uno solo de los pedidos que se programan y generan resulta estar tardío respecto a la fecha prevista, el sistema cancelará todos los pedidos creados y volverá a empezar desde la fecha MS que se define siempre en los parámetros y que se activa solo configurando el indicador de control de documentos tardíos con ATP, proponiendo la nueva fecha para los pedidos precisamente en el campo *Fecha sugerida* presente en la cuadrícula de resultados.

### Procedimiento de programación F.C.S. (Procedura schedulazione F.C.S.)    

Desde la pestaña **commesse** es posible seleccionar los pedidos no programados que se desean considerar. 
Al presionar el botón **Programación F.C.S.**, el procedimiento realizará una primera programación a capacidad infinita sobre los pedidos no programados seleccionados, utilizando los parámetros presentes en la pestaña **Parámetros generales** y posteriormente realizará una programación a capacidad finita sobre todos los documentos indicados en los **Parámetros de programación a capacidad finita**.

Como en el caso de la planificación general, los pedidos programados se podrán visualizar en el formulario [Búsqueda de pedidos programados (Ricerca ordini pianificati)](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

Para visualizar toda la programación realizada y los errores / advertencias relacionados creados para cada pedido, solo será necesario moverse a la pestaña **storico**.    

## Parámetros de programación general (Parametri di schedulazione generale)

Todos los parámetros relacionados con la fase de Programación general pueden ser consultados directamente en el artículo relacionado con la [Programación general (Pianificazione generale)](/docs/planning/ms-master-scheduling/general-schedule) en la sección **Parámetros de programación general**.        

## Parámetros de programación a capacidad finita (Parametri schedulazione a capacità finita)   

:::note Nota
Antes de proceder con la programación F.C.S., es importante establecer dentro de esta pestaña los parámetros a seguir para realizar la programación a capacidad finita.
::: 

**Programación lo antes posible o lo más tarde posible (Schedulazione al più presto o al più tardi)**: estos indicadores están deshabilitados y siempre está activo solo el indicador *Lo más pronto posible (Al più presto)*, ya que la programación a capacidad finita busca saturar lo antes posible los centros de trabajo;        

**dalla data**: permite definir la fecha desde la cual comenzar la programación a capacidad finita; por defecto se propone la fecha actual, pero puede incrementarse por un número de días igual al valor que se puede ingresar desde los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters) en el campo *giorni prossima schedulazione*;

**Operación en pedidos programados Recalcular tiempo (Operazione su ordini pianificati Ricalcolo tempo)**: el indicador está siempre activo y permite recalcular el tiempo en los pedidos programados;    

**ricalcolo ordini di produzione**: permite seleccionar cuáles pedidos de producción, entre *lanciati* y/o *esecutivi*, debe considerar la programación F.C.S.;    

**ricalcolo fasi**: permite seleccionar cuáles fases de producción, *non iniziate* y/o *già iniziate*, debe considerar la programación F.C.S.;    

**Modo de recalculo de fases ya iniciadas (Modalità di ricalcolo fasi già iniziate)**: permite elegir el modo en que el procedimiento de programación F.C.S. debe recalcular la parte restante a ejecutar de las fases ya iniciadas. Se trata de definir si dar prioridad al tiempo trabajado configurando *tempo già lavorato e poi quantità già prodotte*, o dar prioridad a la cantidad producida con el indicador *quantità già prodotte e poi tempo già lavorato*;     

**Bloquear pedidos obligatorios (Blocca gli ordini tassativi)**: permite seleccionar los tipos de pedidos entre *pianificati*, *lanciati* y *esecutivi*, que en caso de tener el indicador *tassativo* habilitado no serán modificados por el procedimiento de programación F.C.S.;    

**Iniciar trabajos en función de la disponibilidad de material (Inizia lavori su disponibilità materiale)**: si está activo, la programación F.C.S. también verificará la disponibilidad de material hasta la fecha indicada en el campo **controllo disponibilità fino al**; más allá de esa fecha, la programación continuará sin tener en cuenta la disponibilidad de material. Al activar el indicador **controllo disponibilità solo sui materiali critici**, el procedimiento verificará la disponibilidad solamente para los materiales que en la lista de materiales tienen habilitado el indicador *Crítico*;   

**considera disponibilità materiale**: permitirá seleccionar el modo en que considerar la disponibilidad del material entre *generale* (independientemente del pedido de producción que lo compromete) y *Por Pedido Prod. (Per Commessa Prod.)*; actualmente solo se prevé la regla *General*. Cabe notar que para los materiales vinculados a una cierta fase, la disponibilidad se verificará al inicio de la fase misma, mientras que para todos los materiales no vinculados a una fase, la disponibilidad se verificará al inicio de la primera fase del ciclo. 

En la parte inferior del formulario es posible indicar con qué criterios, en igualdad de documento, la programación a capacidad finita debe operar.

:::note Nota
De acuerdo con los indicadores habilitados o no, la programación F.C.S. programará los diversos documentos en el siguiente orden: Fases ya iniciadas, Fases no iniciadas, Pedidos de producción en estado ejecutivo y luego lanzados, y finalmente, Pedidos programados.
::: 

Desde la tabla **scelte priorità schedulazione**, es posible arrastrar con el drag & drop las distintas opciones dentro de la tabla **priorità schedulazione**, donde en esta última es posible variar su prioridad. En caso de seleccionar las opciones *clienti critici* o *C.d.L críticos (C.d.L critici)*, también se habilitará la tabla **dettaglio priorità schedulazione** donde será posible ingresar respectivamente los clientes o los centros de trabajo, pudiendo también en este caso variar la prioridad.   

:::note Atención
La prioridad para *sequenza fasi* y *CDL críticos (CDL critici)* no se utiliza en el estándar y se ha incluido para poder programar solo con procedimientos personalizados.
::: 

Si no se ingresa ninguna prioridad de programación, el ordenamiento se llevará a cabo de la siguiente manera:
*Nivel descendente > Fecha de inicio ascendente > Fecha de finalización ascendente > Id ascendente*

*Botones específicos*:

> **ripristina priorità**: permite restaurar las prioridades por defecto dentro de la tabla *priorità schedulazione*.    

## Monitor (Monitor)

En esta pestaña, mediante la activación o desactivación de los indicadores presentes, el usuario tiene la posibilidad de elegir la visualización de los resultados de la programación en la pestaña **storico**.

Se puede decidir si visualizar los **Calendarios** tomados en consideración (el calendario de *fabbrica* y el calendario de *Capacidades productivas (Capacità produttive)*); se puede decidir que se señale si en la programación estaban presentes **Artículos sin** *Parámetros MRP*, sin *distinta base* o sin *Ciclo de trabajo*, sin *Proveedor preferencial* (en caso de pedidos de compra), sin *Subcontratista preferencial* (para órdenes de trabajo) y sin la indicación de la reserva mínima para todos aquellos artículos que se gestionan a reserva. Para cada **commessa di produzione** se puede elegir visualizar en el histórico, el *Número de líneas programadas* y el detalle de estas líneas, los pedidos atrasados y los pedidos vencidos.

En cuanto a los **ordini pianificati**, se puede elegir si visualizar en el histórico, el *Número de pedidos generados* y su *Detalle*, los pedidos *in ritardo* y *scaduti*, las *alternative materiali*; también se puede elegir ser avisado en caso de que haya **Pedidos programados sin** *Material* y sin *Fases de trabajo*, sin *Proveedor* (para la compra) y sin *Subcontratista* (para el trabajo por cuenta).

**Leyenda**: los indicadores activos permiten recibir la alerta y los detalles relacionados con los elementos seleccionados.

## Histórico (Storico)

En la cuadrícula de esta pestaña se visualizan toda la información resumida relativa a la programación del pedido.

**Prog. sched.**: visualiza un simple progreso de la operación de programación lanzada por el usuario;

**operatore**: visualiza el usuario que ha lanzado la programación;

**No. errores (No. errori)**: visualiza el número de errores registrados durante el procedimiento de programación;

**data inizio**: visualiza fecha y hora de inicio del proceso de programación;

**data fine**: visualiza fecha y hora de finalización del proceso de programación;

**Datos programados provenientes de (Dati schedulati provenienti da)**: visualiza el origen preciso de los datos programados;

**previsionale**: visualiza si los datos provienen de las Previsiones de Venta o del Plan Principal de Producción;

**periodo**: visualiza el tipo de previsión, semanal o mensual;

**giorno**: visualiza el día de la semana designado como día en el cual debe caer la fecha de finalización del pedido de producción programado directamente desde la Definición MPS.

Todas las demás columnas de la cuadrícula visualizan las configuraciones utilizadas en la pestaña **parametri** de la programación relacionada con la fila seleccionada.

**Resultado de la programación (Risultato schedulazione)**

En función de la fila seleccionada en la cuadrícula, en esta sección aparecerán posibles errores y/o advertencias con los detalles solicitados por el usuario en la pestaña **monitor**.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).