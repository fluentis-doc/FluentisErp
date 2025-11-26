---
title: Programación a capacidad finita
sidebar_position: 4
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de Programación a capacidad finita de Fluentis es una herramienta avanzada diseñada para optimizar la gestión de los recursos productivos dentro de una empresa manufacturera. Este módulo se integra dentro del sistema ERP de Fluentis y permite planificar y gestionar las actividades productivas considerando las capacidades reales de los recursos disponibles, como mano de obra, maquinaria y materiales. Gracias a esta funcionalidad, las empresas pueden minimizar los tiempos de inactividad, mejorar la eficiencia operativa y responder con mayor flexibilidad a las variaciones de la demanda.

La programación a capacidad finita tiene en cuenta las limitaciones físicas de los recursos, permitiendo crear planes de producción realistas y factibles. Además, ofrece herramientas analíticas para prever posibles cuellos de botella y permite optimizar la asignación de tareas, integrándose con otras funcionalidades del ERP para una visión holística de las operaciones empresariales. Este sistema ayuda a las empresas a equilibrar eficazmente la demanda de los clientes con las capacidades de producción, mejorando en última instancia la rentabilidad y la satisfacción del cliente.
:::

La programación de producción a capacidad finita permite entender cuánta carga de trabajo puede ser ejecutada en un período de tiempo definido, considerando las limitaciones de algunos recursos<!-- risorse -->. El objetivo final es garantizar la mayor eficiencia de los ritmos productivos a lo largo de toda la cadena interna de la planta, optimizando los tiempos y reduciendo los costos de los centros de trabajo<!-- centri di lavoro -->.  
Con este método de planificación es posible crear secuencias óptimas de procesamiento en cada *Centro de trabajo<!-- Centro di lavoro -->* logrando su máxima ocupación.

## Órdenes de trabajo<!-- Commesse -->

La pestaña de órdenes de trabajo<!-- commesse --> muestra únicamente aquellas que se encuentran en estado no examinado.

*Botones específicos*:

> **Programación F.C.S.**: permite que el sistema programe a capacidad finita las fases de procesamiento de los documentos previstos;  
> **Modificar fecha de la orden de trabajo<!-- Modifica data commessa -->**: este botón permite modificar la fecha de la orden de trabajo<!-- commessa -->;  
> **Cambiar prioridad<!-- Cambia priorità -->**: con esta funcionalidad se puede variar la prioridad de las órdenes de trabajo<!-- commesse --> seleccionadas;    
> **Parámetros MRP<!-- Parametri MRP -->**: permite abrir los parámetros MRP de las órdenes de trabajo<!-- commesse --> seleccionadas;    
> **Lista de materiales<!-- Distinta base -->**: permite abrir las listas de materiales de las órdenes de trabajo<!-- commesse --> seleccionadas;    
> **Ciclo de trabajo<!-- Ciclo di lavoro -->**: permite abrir los ciclos de trabajo de las órdenes de trabajo<!-- commesse --> seleccionadas.        

*Filtros específicos*:

**Tipo de orden de trabajo<!-- Tipo commessa -->**: con esta lista combinada es posible seleccionar el tipo de orden de trabajo que se desea visualizar, ya sea *monoproducto*, *multiproducto* o ambas;

**Sitio de producción<!-- Sito produzione -->**: se pueden visualizar las órdenes de trabajo<!-- commesse --> según el sitio de producción donde se vayan a producir, seleccionándolo a través de la lista combinada;

*Campos específicos en la cuadrícula de resultados*

**Fecha sugerida<!-- Data suggerita -->**: como se explica en el artículo relativo a los parámetros generales de programación, activando una marca específica llamada [Controla doc retrasados con ATP<!-- Controlla doc in ritardo con ATP -->](/docs/planning/ms-master-scheduling/general-schedule) el planificador ejecutará la lógica de manera que, si incluso uno solo de los pedidos que se están programando y generando resulta estar retrasado respecto a la fecha prevista, el sistema cancelará todos los pedidos creados y volverá a generarlos desde la fecha MS que siempre se define en los parámetros y que sólo se activa al establecer la marca de control de documentos en retraso con ATP y propondrá la nueva fecha para las órdenes de trabajo precisamente en el campo *Fecha sugerida<!-- Data suggerita -->* presente en la cuadrícula de resultados.

### Procedimiento de programación F.C.S.<!-- Procedura schedulazione F.C.S. -->

Desde la pestaña **Órdenes de trabajo<!-- Commesse -->** es posible seleccionar las órdenes de trabajo<!-- commesse --> no programadas que se quieren tener en cuenta. 
Al pulsar el botón **Programación F.C.S.<!-- Schedulazione F.C.S. -->** el procedimiento ejecutará una primera programación a capacidad infinita sobre las órdenes de trabajo<!-- commesse --> no programadas recién seleccionadas, usando los parámetros presentes en la pestaña **Parámetros generales<!-- Parametri generali -->**, y luego ejecutará una programación a capacidad finita sobre todos los documentos indicados en **Parámetros programación a capacidad finita<!-- Parametri schedulazione a capacità finita -->**.

Como en el caso de la planificación general, los pedidos planificados pueden visualizarse en el formulario de [Búsqueda de pedidos planificados<!-- Ricerca ordini pianificati -->](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

Para visualizar todas las planificaciones realizadas y los errores o advertencias generados por cada orden de trabajo<!-- commessa -->, basta con ir a la pestaña **Historial<!-- Storico -->**.    

## Parámetros de programación general<!-- Parametri di schedulazione generale -->

Todos los parámetros relativos a la fase de planificación general pueden consultarse directamente en el artículo relativo a la [Planificación general<!-- Pianificazione generale -->](/docs/planning/ms-master-scheduling/general-schedule) en la sección **Parámetros de planificación general<!-- Parametri di pianificazione generale -->**.        

## Parámetros de programación a capacidad finita<!-- Parametri schedulazione a capacità finita -->

:::note Nota
Antes de proceder con la programación F.C.S., es importante configurar en esta pestaña los parámetros a seguir para ejecutar la programación a capacidad finita.
::: 

**Programación lo antes posible o lo más tarde posible<!-- Schedulazione al più presto o al più tardi -->**: estas marcas están deshabilitadas y siempre está activa sólo la marca *Lo antes posible<!-- Al più presto -->*, ya que la programación a capacidad finita busca saturar los centros de trabajo<!-- centri di lavoro --> lo antes posible;        

**Desde la fecha<!-- Dalla data -->**: permite definir la fecha desde la cual iniciar la programación a capacidad finita; por defecto se propone la fecha actual, pero puede incrementarse en un número de días igual al valor que se puede ingresar en los [Parámetros MS<!-- Parametri MS -->](/docs/configurations/parameters/production/mps-parameters) en el campo *Días próxima programación<!-- Giorni prossima schedulazione -->*;

**Operación sobre pedidos planificados Recalcular tiempo<!-- Operazione su ordini pianificati Ricalcolo tempo -->**: la marca siempre está activa y permite recalcular el tiempo en los pedidos planificados;    

**Recalcular órdenes de producción<!-- Ricalcolo ordini di produzione -->**: permite seleccionar cuáles órdenes de producción, entre *Lanzadas<!-- Lanciati -->* y/o *Ejecutivas<!-- Esecutivi -->*, debe tener en cuenta la programación F.C.S.;    

**Recalcular fases<!-- Ricalcolo fasi -->**: permite seleccionar qué fases de producción, *No iniciadas<!-- Non iniziate -->* y/o *Ya iniciadas<!-- Già iniziate -->*, debe tener en cuenta la programación F.C.S.;    

**Modo de recálculo para fases ya iniciadas<!-- Modalità di ricalcolo fasi già iniziate -->**: permite elegir el modo en el que el procedimiento de programación F.C.S. debe recalcular la parte restante por ejecutar de las fases ya iniciadas. Se trata de definir si dar prioridad al tiempo trabajado marcando *Tiempo ya trabajado y luego Cantidad ya producida<!-- Tempo già lavorato e poi Quantità già prodotte -->*, o bien dar prioridad a la cantidad producida con la marca *Cantidad ya producida y luego Tiempo ya trabajado<!-- Quantità già prodotte e poi Tempo già lavorato -->*;     

**Bloquear los pedidos obligatorios<!-- Blocca gli ordini tassativi -->**: permite seleccionar los tipos de pedidos entre *Planificados<!-- Pianificati -->*, *Lanzados<!-- Lanciati -->* y *Ejecutivos<!-- Esecutivi -->*, que, en caso de tener la marca *Obligatorio<!-- Tassativo -->* habilitada, no serán modificados por el procedimiento de programación F.C.S.;    

**Iniciar trabajos con disponibilidad de material<!-- Inizia lavori su disponibilità materiale -->**: si está activada, la programación F.C.S. también verificará la disponibilidad de material hasta la fecha indicada en el campo **Control de disponibilidad hasta<!-- Controllo disponibilità fino al -->**, después de esa fecha la programación continuará sin considerar la disponibilidad de material. Al activar la marca **Control de disponibilidad sólo para materiales críticos<!-- Controllo disponibilità solo sui Materiali critici -->**, el procedimiento verificará la disponibilidad únicamente para los materiales que en la lista de materiales<!-- distinta base --> tengan activa la marca *Crítico<!-- Critico -->*;   

**Considerar disponibilidad de material<!-- Considera disponibilità Materiale -->**: permitirá seleccionar el modo de considerar la disponibilidad del material entre *General* (independientemente de la orden de trabajo<!-- commessa di produzione --> que lo use) y *Por orden de trabajo prod.*; actualmente sólo se admite la regla *General*. Cabe destacar que para los materiales asociados a una fase concreta, la disponibilidad se verificará al inicio de dicha fase, mientras que para el resto de materiales no ligados a una fase, la disponibilidad se verificará al inicio de la primera fase del ciclo. 

En la parte inferior del formulario es posible indicar con qué criterios, a igualdad de documento, debe operar la programación a capacidad finita.

:::note Nota
De acuerdo a las marcas activadas previamente, la programación F.C.S. programará los distintos documentos en el siguiente orden: Fases ya iniciadas, Fases no iniciadas, Órdenes de producción en estado ejecutivo, luego lanzado y finalmente Pedidos planificados. 
::: 

Desde la tabla **Opciones de prioridad de programación<!-- Scelte priorità schedulazione -->** se puede arrastrar con el drag & drop los elementos individuales dentro de la tabla **Prioridad de programación<!-- Priorità schedulazione -->**, donde es posible variar su prioridad. En caso de seleccionar los elementos *Clientes críticos<!-- Clienti critici -->* o *Centros de trabajo críticos<!-- C.d.L critici -->*, se habilitará también la tabla **Detalle de prioridad de programación<!-- Dettaglio priorità schedulazione -->**, donde se podrán ingresar respectivamente los clientes o los centros de trabajo, pudiendo variar aquí también la prioridad.   

:::note Atención<!-- Attenzione -->
La prioridad para *Secuencia de fases<!-- Sequenza fasi -->* y *CDL críticos<!-- CDL critici -->* no se utiliza en el estándar y ha sido incluida para permitir programar sólo con procedimientos personalizados.
::: 

Si no se inserta ninguna prioridad de programación, el ordenamiento se realizará como sigue:
*Level descending > StartDate ascending > EndDate ascending > Id ascending*

*Botones específicos*:

> **Restablecer prioridad<!-- Ripristina priorità -->**: permite restablecer las prioridades predeterminadas dentro de la tabla *Prioridad de programación<!-- Priorità schedulazione -->*.    

## Monitor

En esta pestaña, mediante la activación o no de los flags presentes, el usuario tiene la posibilidad de elegir la visualización de los resultados de la programación en la pestaña **Historial<!-- Storico -->**.

Se puede decidir si visualizar los **Calendarios** tenidos en cuenta (el Calendario de *Planta<!-- Fabbrica -->* y el calendario de *Capacidades productivas<!-- Capacità produttive -->*); se puede decidir que se señale si en la programación existían **Artículos sin** *Parámetros MRP*, sin *Lista de materiales<!-- Distinta base -->* o sin *Ciclo de trabajo<!-- Ciclo di lavoro -->*, sin *Proveedor preferente* (en el caso de pedidos de compra), sin *Subcontratista preferente* (para las órdenes de trabajo externo<!-- conto lavoro -->) y sin la indicación de inventario mínimo para todos aquellos artículos que se gestionan por inventario. Por cada **Orden de producción<!-- Commessa di produzione -->** se puede elegir visualizar en el historial, el *Número de filas programadas* y el detalle de estas filas, las órdenes de trabajo en retraso y las órdenes vencidas.

Respecto a los **Pedidos planificados**, se puede elegir visualizar en el historial, el *Número de pedidos generados* y su *Detalle*, los pedidos *En retraso* y *Vencidos*, y las *Alternativas de materiales*; también puede elegirse ser avisado en caso de que existan **Pedidos planificados sin** *Material*, *Fases de procesamiento*, *Proveedor* (para compra) y *Subcontratista* (para órdenes de trabajo externo<!-- conto lavoro -->).

**Leyenda**: las marcas activas permiten recibir avisos y detalles relativos a los elementos seleccionados.

## Historial<!-- Storico -->

En la cuadrícula de esta pestaña se visualiza toda la información resumida relativa a la programación de la orden de trabajo<!-- commessa -->.

**Progr. prog.<!-- Progr. sched. -->**: muestra un simple progresivo de la operación de programación lanzada por el usuario;

**Operador<!-- Operatore -->**: muestra el usuario que lanzó la programación;

**Nº de errores<!-- No. errori -->**: muestra el número de errores registrados durante el procedimiento de programación;

**Fecha inicio<!-- Data inizio -->**: muestra la fecha y hora de inicio del proceso de programación;

**Fecha fin<!-- Data fine -->**: muestra la fecha y hora de fin del proceso de programación;

**Datos programados proveniente de<!-- Dati schedulati provenienti da -->**: muestra el origen preciso de los datos programados;

**Previsional<!-- Previsionale -->**: muestra si los datos provienen de las Previsiones de Ventas o del Plan Maestro de Producción;

**Período<!-- Periodo -->**: muestra el tipo de previsión, semanal o mensual;

**Día<!-- Giorno -->**: muestra el día de la semana designado como día en que debe caer la fecha de finalización de la orden de producción<!-- commessa di produzione --> programada directamente desde la Definición MPS.

Todas las demás columnas de la cuadrícula muestran las configuraciones utilizadas en la pestaña **Parámetros<!-- Parametri -->** de la Programación relativa a la fila seleccionada.

**Resultado de la programación<!-- Risultato schedulazione -->**

Según la fila seleccionada en la cuadrícula, en esta sección aparecerán los posibles errores y/o advertencias con los detalles solicitados por el usuario en la pestaña **Monitor<!-- Monitor -->**.

Para detalles sobre el funcionamiento común de los formularios, refiérase al enlace [Funcionalidad, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).