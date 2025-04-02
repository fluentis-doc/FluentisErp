---
title: pianificazione generale
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
La planificación general en Fluentis es un proceso que opera con el supuesto de capacidad infinita, lo que significa que la planificación no tiene en cuenta las limitaciones físicas en los centros de trabajo o en los recursos disponibles. Esta metodología permite programar las operaciones productivas con cierta flexibilidad.

La planificación puede realizarse utilizando dos lógicas distintas: **tan pronto como sea posible (al più presto)** y **tan tarde como sea posible (al più tardi)**. La lógica ***tan pronto como sea posible (al più presto)*** busca iniciar las operaciones lo antes posible, mientras que la lógica **tan tarde como sea posible (al più tardi)** programa las operaciones lo más tarde posible sin comprometer las fechas límite. Estos enfoques permiten un análisis optimizado de las necesidades productivas y la gestión de los tiempos de trabajo según las prioridades empresariales y las necesidades operativas.
:::

El formulario se compone de cuatro pestañas: *commesse*, *parametri generali*, *monitor* y *storico*.

## Órdenes (Commesse)

La pestaña de órdenes consta de un área de filtro que permite filtrar las órdenes que luego serán visualizadas en la cuadrícula de resultados a continuación.        
Además de los filtros por artículo, año y número de orden, también hay un filtro por tipo de orden que permite visualizar las órdenes de producto único, de múltiples productos o ambas.

También hay un filtro para *sito produzione*, de modo que se puedan planificar solo las órdenes de un determinado sitio productivo, y una serie de indicadores: *in ritardo*, *scadute*, *lanciate* y *esecutive*, que permiten optar por visualizar también las órdenes que están retrasadas respecto a la fecha, o vencidas, y solo si en los **Parámetros generales de planificación (Parametri generali della pianificazione)** se ha activado el indicador *planificación de órdenes lanzadas o ejecutivas (pianificazione commesse lanciate o esecutive)*, se activarán también los indicadores *lanciate* y *esecutive*; de lo contrario, estos dos campos siempre estarán inactivos.        
Si el indicador *planificación de órdenes lanzadas o ejecutivas* no está activo, en la cuadrícula solo se mostrarán órdenes en estado de *non esaminate* o *pianificate*.        
Al seleccionar una o más órdenes, basándose en los parámetros de planificación establecidos en la pestaña correspondiente, a través del botón de planificación general, el procedimiento generará las órdenes planificadas de los tres tipos previstos: producción, compra y trabajo por encargo, partiendo de la información presente en las órdenes y cruzando los datos con las respectivas listas de materiales y ciclos de trabajo.

Una vez creadas, las órdenes planificadas se podrán visualizar en el formulario [Búsqueda de órdenes planificadas](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), o este formulario puede abrirse a través del botón **apri ricerca ordini pianificati**. 
En caso de que se seleccione una orden en la cuadrícula de resultados y luego se presione el botón **Abrir búsqueda de órdenes planificadas**, el formulario de órdenes planificadas se abrirá filtrando ya los resultados para esa orden.

*Botones específicos*:

> **pianificazione generale**: permite al sistema programar las órdenes seleccionadas;  
> **apri ricerca ordini pianificati**: este botón permite abrir la pantalla de [Búsqueda de órdenes planificadas](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders); si antes de presionar este botón se selecciona una fila de orden, el formulario de órdenes planificadas se abrirá ya prefiltrado para esa orden;               
> **cambia data fine prevista con data suggerita**: este botón permite actualizar la *fecha de finalización proyectada* con la *fecha sugerida* calculada por la planificación en caso de que haya sido lanzada con el indicador **controlla documenti in ritardo con atp** activo;     
> **sequenza commesse**: mediante esta funcionalidad se puede acceder a la secuencia de órdenes, dentro de la cual se podrán visualizar las órdenes según la secuencia que se les haya asignado, incluso mediante un gráfico.

*Filtros específicos*:

**tipo commessa**: a través de esta combinación, es posible seleccionar el tipo de orden que se desea visualizar, ya sea órdenes de producto único, de múltiples productos o ambas;

**sito produzione**: se pueden visualizar las órdenes según el sitio de producción en el que deben ser producidas, seleccionándolo mediante la combinación correspondiente;

**Retrasados/Vencidos/Lanzados/Ejecutivos (In ritardo/Scadute/Lanciate/Esecutive)**: estos indicadores permiten elegir si se desean mostrar también las órdenes que están retrasadas o vencidas y solo si en los [Parámetros generales de planificación (Parametri generali di pianificazione)](/docs/planning/ms-master-scheduling/general-schedule) está configurado el indicador *planificación de órdenes lanzadas o ejecutivas*, de lo contrario, los dos campos estarán inactivos; de lo contrario, como se explicó en el artículo sobre los parámetros de planificación, en la pestaña de órdenes solo se podrán ver en estado de no examinadas o planificadas, pero estas asumen el estado de lanzadas y/o ejecutivas si este indicador no se establece, no se podrán visualizar las órdenes dentro de esta pestaña.

*Campos específicos en la cuadrícula de resultados*

**data suggerita**: como se explicó en el artículo relativo a los parámetros generales de planificación, al activar un indicador particular llamado [Verificar documentos retrasados con ATP (Controlla documenti in ritardo con ATP)](/docs/planning/ms-master-scheduling/general-schedule) el procedimiento de planificación realizará un razonamiento tal que si incluso una sola de las órdenes que se están programando y generando está retrasada respecto a la fecha prevista, el sistema anulará todas las órdenes creadas y volverá a calcularlas desde la **data inizio ms** (que se define siempre en los parámetros y que se activa solo configurando el indicador **Verificar documentos retrasados con ATP (Controllo documenti in ritardo con ATP)**) con la lógica de *tan pronto como sea posible* y propondrá la nueva fecha para las órdenes exactamente en el campo *Fecha sugerida* presente en la cuadrícula de resultados.

### Procedimiento de Planificación General

Una vez seleccionadas las órdenes que se desean programar, se activará el botón **pianificazione generale** presente en la barra de herramientas del formulario, y haciendo clic en ese botón, el sistema procederá con la planificación de las órdenes seleccionadas.

Para visualizar todas las programaciones realizadas y los respectivos órdenes de producción creados para cada orden, basta con desplazarse a la pestaña **storico**.

:::danger Nota    
Las órdenes creadas manualmente siempre se producen independientemente de la disponibilidad del artículo a producir.    
:::   

## Parámetros de Planificación General

:::note Nota
Antes de proceder con la planificación, es importante establecer dentro de esta pestaña los parámetros a seguir para llevar a cabo la planificación.
::: 

**pianificare fino al**: indicar la fecha hasta la cual el sistema deberá considerar los documentos ingresados. Esta fecha es calculada por el sistema como la fecha actual más el valor en meses ingresado en el campo **numero massimo di mesi per la pianificazione** presente en los [Parámetros de MS (Parametri MS)](/docs/configurations/parameters/production/mps-parameters);       

**Materiales / Recursos (Materiali / Risorse)**: al activar el indicador **materiali**, en las órdenes planificadas creadas se incluyen los materiales a consumir. Mientras que, al activar el indicador **risorse**, en las órdenes planificadas creadas se incluirán también las fases de trabajo. En caso de que uno o ambos indicadores no estén activos, las órdenes planificadas se crearán de todos modos, pero sin los materiales o las fases de trabajo; 

**Órdenes planificadas de (Ordini pianificati di)**: a través de los 3 indicadores se indica si se desea que el sistema genere todos los tres tipos de órdenes previstos, es decir, producción, compra y trabajo por encargo; de esta manera, estos tipos de órdenes tendrán el vínculo directo con la orden; (por ejemplo, si no se activa el indicador de compra, pero se mantiene el indicador de ejecución de MRP, el sistema aún creará los órdenes de compra, pero estos estarán desvinculados de la orden);

**Generar solo órdenes planificadas para niveles (Genera solo ordini pianificati per livelli)**: en este caso, se deben indicar los niveles (1-2...) para los cuales se desean generar las órdenes planificadas;

**Órdenes de proveedores o Solicitudes de compra y órdenes de cliente (Ordini fornitori o Richieste d'acquisto e ordini cliente)**: en este caso, si hay documentos en el sistema sin fecha de compromiso y disponibilidad, se puede indicar al sistema que considere como fecha la que se podrá indicar en el campo correspondiente, o decir al sistema que no los considere en absoluto;

**Agrupamiento de órdenes planificadas por (Raggruppamento ordini pianificati per)**: en caso de que se trabaje por orden, en este campo se debe establecer la opción *nessun raggruppamento*; de lo contrario, se puede seleccionar a través de la combinación correspondiente el tipo de agrupamiento que se desea aplicar, pero en este caso el vínculo entre las órdenes planificadas y la orden se perdería;

**Agrupamiento tan tarde como sea posible o tan pronto como sea posible (Raggruppamento al più tardi o al più presto)**: en este caso, se puede elegir agrupar las órdenes tan tarde como sea posible (es decir, según el último) o tan pronto como sea posible (la opción más recomendada) y en el campo siguiente llamado **Por un período en días (Per un periodo in giorni)** se debe indicar el número de días dentro del cual se realizará el agrupamiento;

**Considerar las cantidades en función del lote económico / Considerar los múltiplos del lote económico (Considera le quantità in base al lotto economico/Considera i multipli del lotto economico)**: al establecer el primer parámetro, se indica que durante la planificación se desea tener en cuenta también el lote económico del artículo, y en consecuencia se activará el indicador que permitirá decidir si se desean considerar también los múltiplos del lote económico. 
Para el artículo examinado se considerarán los valores del lote económico y sus múltiplos, si y solo si están activos los respectivos indicadores dentro de los [Parámetros de MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo. En caso de que se trate de un artículo con tipo de aprovisionamiento de producción, los valores del lote económico y los múltiplos se tomarán de la pestaña de producción de los [Parámetros de MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del mismo artículo, mientras que si se trata de un artículo de tipo de aprovisionamiento de compra, se tomarán del proveedor predeterminado presente en la pestaña [Proveedores preferenciales (Fornitori preferenziali)](/docs/erp-home/registers/items/create-new-item) de su registro.

**Compactar/separar órdenes (Compatta/separa ordini)**: en este caso se elige si se desea o no mantener un día de margen entre la finalización de la producción de la orden de un nivel y la del siguiente nivel;

**Ejecución del MRP después de la planificación y Artículos de stock (Esecuzione del MRP dopo pianificazione e Articoli a scorta)**: se indica que se desea que el sistema, después de una primera planificación, analice también con el MRP todos los códigos de artículo de la lista de materiales del artículo, que tienen una política de gestión diferente a la de órdenes, con el fin de verificar su cobertura y, si es necesario, generar órdenes planificadas pero sin vínculo con la orden. Al activar también Artículos de stock, el procedimiento MRP tomará en cuenta también todos los artículos con política de gestión de stock en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters); 

**pianificazione per zona consegna**: al activar este indicador, el sistema verifica cuándo se debe entregar la orden en función de su zona de entrega y programará la orden primero con respecto al día de entrega;

**controlla documenti in ritardo con atp**: si se habilita este indicador, se activará simultáneamente el campo siguiente llamado **data inizio ms**; en este punto, el procedimiento de planificación realizará un razonamiento tal que si incluso una sola de las órdenes que se están planificando y generando está retrasada respecto a la fecha prevista, el sistema anulará todas las órdenes creadas y volverá a calcularlas desde la **data inizio ms** con la lógica de *tan pronto como sea posible* y propondrá la nueva fecha para las órdenes exactamente en el campo *Fecha sugerida* presente en la cuadrícula de resultados. En este punto, a través del botón dedicado **cambia data fine prevista con data suggerita** (presente en la pestaña de órdenes de la *pianificazione generale*), es posible reemplazar la fecha de finalización proyectada con la fecha sugerida recién calculada para luego lanzar nuevamente la planificación y así tener todas las órdenes planificadas de la manera correcta;

**Liberación automática de órdenes planificadas (Rilascio automatico ordini pianificati)**: si se decide habilitar este parámetro, la planificación, además de generar las órdenes como se planificaron, las liberará automáticamente, de modo que las órdenes planificadas de producción se convertirán en órdenes de producción, las órdenes planificadas de compra se convertirán en RDA (solicitudes de compra) y las órdenes planificadas de trabajo por encargo se convertirán en órdenes de trabajo por encargo;

**Planificación tan pronto como sea posible o tan tarde como sea posible (pianificazione al più presto o al più tardi)**: el usuario puede decidir con qué lógica debe ejecutarse la planificación general: ya sea tan pronto como sea posible o tan tarde como sea posible. La lógica de tan pronto como sea posible tiene como objetivo comenzar las operaciones lo antes posible, por lo tanto, partir de la fecha actual; mientras que la lógica de tan tarde como sea posible programa las operaciones lo más tarde posible sin comprometer las fechas límite, por lo tanto, comenzando desde la fecha de entrega y retrocediendo en el tiempo. 

**Planificación de órdenes lanzadas o ejecutivas (pianificazione commesse lanciate o esecutive)**: permite habilitar los indicadores: lanzadas (lanciati) y ejecutivas (esecutivi) presentes en la pestaña *commesse*; al activarlos, será posible visualizar y seleccionar también las órdenes en estado lanzado y ejecutivo para luego planificarlas nuevamente. Es importante tener en cuenta que, para las órdenes en estado lanzado o ejecutivo, solo se volverán a planificar aquellos órdenes planificadas que aún no se han liberado;

**versione**: el procedimiento planificará las órdenes en la versión que se establece en este campo, si en la orden de producción no encuentra una versión ingresada. La versión ingresada en la orden de producción tendrá una mayor prioridad que la versión ingresada en los parámetros de la *pianificazione generale*; este es un campo que debe ser completado obligatoriamente, de lo contrario no será posible proceder con la planificación;

**considera la disponibilità**: si se activa este indicador, indica al procedimiento que en el proceso de planificación deberá tener en cuenta la disponibilidad proveniente de los almacenes indicados en la cuadrícula siguiente, que son los definidos dentro del formulario [Cálculo de Disponibilidad (Calcolo Disponibilità)](/docs/erp-home/registers/items/calculate-availability/); 

**Considerar disponibilidad a la fecha de necesidad o la mínima en el período (Considera disponibilità al data fabbisogno o la minima nel periodo)**: estos indicadores se activan solo si está activo el indicador **considera la disponibilità**; a **la fecha de necesidad (data fabbisogno)** significa que el procedimiento deberá considerar la disponibilidad en el momento en que se deba producir la orden, mientras que, en el caso de **minima nel periodo**, el procedimiento tomará en cuenta la disponibilidad mínima en el período hasta la fecha establecida en el parámetro *pianificare fino al*.

**considera lotti in stato non disponibile**: también este indicador se activa solo si está activo el flag **considera la disponibilità**; si se activa, el procedimiento deberá considerar los lotes en estado no disponible;      

**considera disponibilità anche per il primo livello**: también este indicador se activa solo si está activo el indicador **considera la disponibilità**; si se activa, el procedimiento deberá considerar la disponibilidad también para el primer nivel (es decir, para el artículo presente en la orden de producción);

**considera anche disponibilità negativa**: si se activa, el procedimiento deberá considerar también las disponibilidades negativas al momento de la planificación para el artículo de primer nivel; de hecho, es posible habilitar este indicador solo si está activo el indicador **considera disponibilità anche per il primo livello**;      

**Considerar disponibilidad proveniente de (Considera disponibilità provenienti da)**: también estos indicadores se activan solo si está activo el indicador **considera la disponibilità** y permiten indicar si se desea que el procedimiento considere las disponibilidades provenientes de compras, ventas, almacén, trabajo por encargo y producción;

**Reabastecimiento del stock mínimo del artículo y reabastecimiento del punto de reorden del artículo (Reintegro scorta minima dell'articolo e reintegro punto di riordino dell'articolo)**: el primer indicador se activa solo si se establece el segundo. Estos dos indicadores indican que el procedimiento deberá prever el reabastecimiento del punto de reorden establecido para ese artículo y si también se desea el reabastecimiento del stock mínimo del artículo; ambos estos datos se ingresan en la pestaña [Aprovisionamiento (Approvvigionamento)](/docs/erp-home/registers/items/create-new-item) de su registro; 

**considera l'indice di copertura**: si el indicador está activo, el procedimiento deberá tener en cuenta el índice de cobertura que se establece siempre en la pestaña *approvvigionamento* del artículo;

**Considerar también las alternativas de los materiales (Considera anche disponibilità negative)**: si se activa, al momento de la planificación de la orden el procedimiento deberá considerar también las alternativas de materiales presentes en la pestaña *alternativas* de la [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management), en caso de que no haya suficiente disponibilidad para el material principal indicado en la lista;            

**considera solo materiali alternativi**: se activa solo cuando el indicador **considera anche le alternative dei materiali** está activo; si se activa este indicador, se verifica primero la disponibilidad de los componentes alternativos según la prioridad de los mismos, si no es suficiente, luego se verifica la disponibilidad del componente principal; se activa solo si está activo el indicador **considera la disponibilità**;    

:::note Nota
Los materiales alternativos se ingresan en la pestaña **alternative**, relacionada con el material principal, presente en la [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**considera le fasi alternative**: si se activa, este indicador indica que al momento de la planificación también se deberán considerar las fases de trabajo alternativas; al activar this flag se activará el campo editable siguiente llamado **Tolerancia para la ocupación del C.d.L. % (Tolleranza per l'occupazione del C.d.L. %)**, en el que se podrá indicar la tolerancia de ocupación del centro de trabajo en %, más allá de la cual el procedimiento deberá considerar las fases alternativas a la fase predeterminada.

## Monitoreo (Monitor)

En esta pestaña, mediante la activación o desactivación de los indicadores presentes, el usuario tiene la posibilidad de elegir la visualización de los resultados de la planificación en la pestaña **storico**.

Se puede decidir si visualizar los **calendari** considerados (el calendario de *fabbrica* y el calendario de *Capacidades productivas (Capacità produttive)*); se puede decidir que se señale si en la planificación había **Artículos sin** *Parámetros de MRP*, sin *distinta base* o sin *Ciclo de trabajo*, sin *Proveedor preferencial* (en el caso de órdenes de compra), sin *Terciario preferencial* (para órdenes de trabajo por encargo) y sin la indicación de la reserva mínima para todos aquellos artículos que se gestionan a stock. Para cada **commessa di produzione** se puede elegir visualizar en el histórico, el *Número de líneas programadas (Numero di righe schedulate)* y el detalle de estas líneas, las órdenes retrasadas y las órdenes vencidas.

En cuanto a los **Órdenes planificadas**, se puede elegir visualizar en el histórico, el *Número de órdenes generadas (Numero di ordini generati)* y su *dettaglio*, los órdenes *in ritardo* y *scaduti*, las *alternative materiali*; también se puede elegir ser notificado en caso de que haya **Órdenes planificadas sin** *materiale*, sin *fasi di lavorazione*, sin *fornitore* (para la compra) y sin *terzista* (para trabajo por encargo).

**Leyenda**: los indicadores activos permiten recibir la advertencia y los detalles relacionados con los elementos seleccionados.

## Histórico (Storico)

En la cuadrícula de esta pestaña se visualiza toda la información resumida relacionada con la planificación de la orden.

**Progr. programada (Progr. sched.)**: visualiza un simple número progresivo de la operación de planificación lanzada por el usuario;

**operatore**: visualiza al usuario que lanzó la planificación;

**No. errores (No. errori)**: visualiza el número de errores registrados durante el procedimiento de planificación;

**data inizio**: visualiza la fecha y hora de inicio del proceso de planificación;

**data fine**: visualiza la fecha y hora de finalización del proceso de planificación;

**Datos programados provenientes de (Dati schedulati provenienti da)**: visualiza el origen preciso de los datos programados;

**previsionale**: visualiza si los datos provienen de las Previsiones de Venta o del Plan Principal de Producción;

**periodo**: visualiza el tipo de previsión, semanal o mensual;

**giorno**: visualiza el día de la semana designado como el día en que debe caer la fecha de finalización de la orden de producción programada directamente desde Definición MPS.

Todas las demás columnas de la cuadrícula visualizan las configuraciones utilizadas en la pestaña **parametri** de la *pianificazione generale* relativa a la fila seleccionada.

**Resultado de la planificación (Risultato pianificazione)**

En función de la fila seleccionada en la cuadrícula, en esta sección aparecerán los detalles solicitados por el usuario en la pestaña **monitor**.

En el resultado de la planificación, se pueden ver el número de la orden recién planificada, el número de las órdenes planificadas que se han generado a partir de esa orden y el detalle de las órdenes planificadas que se han generado.

Para obtener más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).