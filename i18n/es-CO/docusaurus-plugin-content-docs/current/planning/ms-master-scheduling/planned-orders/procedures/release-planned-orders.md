---
title: Liberación de Órdenes Planificadas
sidebar_position: 1
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de **Liberación de Órdenes Planificadas<!-- Rilascio Ordini Pianificati -->** en el sistema Fluentis está diseñada para facilitar el paso de las órdenes planificadas<!-- ordini pianificati --> a sus respectivos estados operativos. Una vez que las órdenes planificadas<!-- ordini pianificati --> han sido generadas, es posible proceder a su liberación utilizando botones específicos en la barra de opciones. Este proceso varía según el tipo de orden: producción, compra o cuenta de trabajo<!-- conto lavoro -->.

Cuando se libera una orden planificada de producción, esta se convierte en una orden de producción operativa. Las órdenes planificadas de compra generan solicitudes de compra (RDA), mientras que las órdenes planificadas de cuenta de trabajo<!-- conto lavoro --> se transforman en órdenes de cuenta de trabajo<!-- ordini di conto lavoro --> operativas. 
:::

El formulario permite la creación de:

- *solicitudes de compra*, posiblemente ya autorizadas mediante un parámetro específico, en el caso de órdenes planificadas de compra<!-- ordini pianificati di acquisto -->;  
- *órdenes de cuenta de trabajo<!-- ordini di conto lavoro -->* en el caso de órdenes planificadas de cuenta de trabajo<!-- ordini pianificati di conto lavoro -->, o si en la lista de fases de una orden planificada de producción hay una fase externa;  
- *órdenes de producción*, *lanzadas* o *ejecutivas* dependiendo de la activación de un parámetro específico, en el caso de órdenes planificadas de producción<!-- ordini pianificati di produzione -->.

La liberación de las órdenes implica que estas ya no serán visibles entre las [Órdenes planificadas<!-- Ordini pianificati -->](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) y, por lo tanto, no se podrá generar una nueva [Planificación<!-- Pianificazione -->](/docs/planning/ms-master-scheduling/general-schedule) de la orden de producción<!-- commessa di produzione --> de la cual las órdenes planificadas fueron eventualmente generadas mediante planificación general. Las órdenes planificadas presentes en la cuadrícula generadas manualmente o a través del procesamiento MRP no presentan ningún vínculo con las órdenes de producción<!-- commesse di produzione -->.

Activada en la cuadrícula de Órdenes planificadas y de Cuenta de trabajo<!-- Ordini pianificati e di Conto lavoro -->, con la visualización de una nueva columna.
La nueva columna contiene la indicación visual (por colores), si la Orden es factible en base a la disponibilidad de los Materiales.
Para obtener el resultado es necesario seleccionar desde la cuadrícula las órdenes deseadas y presionar el botón [Recalcular factibilidad<!-- Ricalcola fattibilità -->].
Con el botón [Detalle de factibilidad<!-- Dettaglio fattibilità -->] se obtiene el análisis detallado para cada material necesario.
Los colores a mostrar y la activación de la funcionalidad son parametrizables en los "Parámetros de Necesidades de Materiales<!-- Parametri Fabbisogno Materiali -->".

## Filtro

En esta pestaña es posible visualizar la lista de órdenes planificadas<!-- ordini pianificati --> que aún deben ser liberadas y es posible filtrarlas a través de una serie de criterios de selección.

Una vez configurados todos los filtros deseados, simplemente haga clic en el botón **Buscar<!-- Ricerca -->** presente en la *ribbon bar* para mostrar los resultados dentro de la cuadrícula de resultados.

*Botones específicos*:

> **Liberación<!-- Rilascio -->**: este botón se activa solo si se selecciona al menos una fila en la cuadrícula de resultados a liberar; al hacer clic en esta funcionalidad, el sistema ejecutará:
la liberación de *órdenes planificadas de producción<!-- ordini pianificati di produzione -->* en *órdenes de producción lanzadas o ejecutivas*, según cómo hayan sido configurados los parámetros dentro de los [Parámetros de Necesidades de Materiales<!-- Parametri Fabbisogno Materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters); la liberación de *órdenes planificadas de compra<!-- ordini pianificati di acquisto -->* en *Solicitudes de Compra<!-- Richieste d'Acquisto -->* *autorizadas* u *no autorizadas*, dependiendo de cómo se haya decidido configurar el parámetro dentro de los [Parámetros de Necesidades de Materiales<!-- Parametri Fabbisogno Materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters); la liberación de *órdenes planificadas de cuenta de trabajo<!-- ordini pianificati di conto lavoro -->* en *órdenes de cuenta de trabajo<!-- ordini di Conto Lavoro -->*.
> **Recalcular factibilidad<!-- Ricalcola fattibilità -->**: permite visualizar (por colores) la factibilidad de las órdenes planificadas de producción y de cuenta de trabajo<!-- ordini pianificati di conto lavoro --> seleccionadas. Los colores que se mostrarán y la activación de la funcionalidad son parametrizables en los [Parámetros de Necesidades de Materiales<!-- Parametri Fabbisogno Materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters).
> **Detalle de factibilidad<!-- Dettaglio fattibilità -->**: permite obtener el análisis detallado para cada material necesario de la orden planificada de producción o cuenta de trabajo seleccionada.
> **Abrir búsqueda de órdenes de producción<!-- Apri ricerca ordini di produzione -->**: mediante este botón será posible abrir la Búsqueda de Órdenes de Producción filtradas con los mismos criterios utilizados en la sección de filtro de esta ventana. Por ejemplo, si se filtran las órdenes planificadas en esta pantalla según el número de orden 3 del año 2018, la ventana de búsqueda de órdenes de producción se abrirá ya filtrada para la orden 3 del año 2018.

*Campos específicos*:

**Factibilidad de materiales<!-- Fattibilità materiali -->**: contiene la indicación visual (por colores), si la Orden es factible en base a la disponibilidad de los Materiales. Para el resultado es necesario seleccionar de la cuadrícula las órdenes deseadas y presionar el botón **Recalcular factibilidad<!-- Ricalcola fattibilità -->**. Con el botón **Detalle de factibilidad<!-- Dettaglio fattibilità -->** se obtiene el análisis detallado para cada material necesario. Los colores a mostrar y la activación de la funcionalidad son parametrizables en los [Parámetros de Necesidades de Materiales<!-- Parametri Fabbisogno Materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters).
**Año<!-- Anno -->**: indica el año de la orden planificada<!-- ordine pianificato -->;
**Orden<!-- Ordine -->**: indica el número de la orden planificada<!-- ordine pianificato -->;
**Nivel<!-- Livello -->**: indica el nivel del artículo objeto de la orden dentro de la lista de materiales;
**Año/Número/Código/Descripción de la orden de producción<!-- Anno/Numero/Codice/Descrizione commessa di produzione -->**: los campos estarán vacíos si la orden planificada<!-- ordine pianificato --> fue generada manualmente o mediante MRP;
**Fecha de inicio prevista<!-- Data di inizio prevista -->**: si se trata de una orden planificada de compra o de cuenta de trabajo<!-- ordine pianificato di conto lavoro -->, esta fecha representa la fecha en la que se debe enviar al proveedor la orden de compra que se generará posteriormente con la liberación de la orden; si se trata de una orden planificada de producción, esta fecha representa la fecha prevista de inicio de la primera fase de producción del ciclo del artículo;
**Fecha de finalización prevista<!-- Data di fine prevista -->**: si se trata de una orden planificada de compra o de cuenta de trabajo<!-- ordine pianificato di conto lavoro -->, esta fecha representa la fecha en la que debe recibirse el suministro y, por tanto, coincidirá con la fecha prevista de recepción de la línea de la orden de compra que se generará posteriormente con la liberación de la orden; si se trata de una orden planificada de producción, esta fecha representa la fecha prevista de finalización de la última fase de producción del ciclo del artículo;
**Cantidad confirmada<!-- Quantità confermata -->**: será diferente de cero solo si el procesamiento se realizó mediante MRP;
**Cliente cuenta, subcuenta y descripción<!-- Cliente conto, sottoconto e decsrizione -->**: indica el cliente relacionado en el caso de las órdenes de producción<!-- ordini di produzione -->;
**Proveedor cuenta, subcuenta y descripción<!-- Fornitore conto, sottoconto e decsrizione -->**: indica el proveedor relacionado en el caso de las órdenes de compra y de cuenta de trabajo<!-- ordini di acquisto e di conto lavoro -->;
**Año/Número/Tipo de orden de cliente<!-- Anno/Numero/Tipo ordine cliente -->**: representa la orden de cliente de la cual se generó la orden de producción<!-- commessa --> desde la cual se programó la orden planificada relevante.

Luego de identificar las órdenes que se desean liberar, para proceder con la **Liberación<!-- Rilascio -->** deberá utilizar uno de los botones presentes en la *ribbon bar*, según el tipo de orden que se deba liberar: **Liberación de Órdenes Planificadas de Producción<!-- Rilascio Ordini Pianificati di produzione -->**, **Liberación de Órdenes Planificadas de Compra<!-- Rilascio ordini pianificati di Acquisto -->** o **Liberación de Órdenes Planificadas de Cuenta de Trabajo<!-- Rilascio ordini pianificati di Conto Lavoro -->**. Estos botones se habilitarán respectivamente según lo ingresado en el campo **Liberación de órdenes planificadas a<!-- Rilascio ordini pianificati a -->**.

También es posible ver los **Detalles de la orden planificada<!-- Visualizzazione dei dettagli dell'ordine pianificato -->** presente en la cuadrícula, simplemente haciendo doble clic con el mouse sobre la fila de la orden planificada<!-- ordine pianificato --> que se desea visualizar, antes de proceder con la liberación.

## Parámetros<!-- Parametri -->

En esta pestaña es posible configurar y guardar los parámetros necesarios para la liberación de las órdenes planificadas<!-- ordini pianificati -->.

### Órdenes de Producción<!-- Ordini di Produzione -->

En esta sección es posible:

- activando la casilla **Generar órdenes de cuenta de trabajo para operaciones externas<!-- Generazione ordini di conto lavoro per operazioni esterne -->**, decidir que, si en la lista de fases de la orden planificada de producción que se está liberando existe una fase externa, se genere en consecuencia una orden de cuenta de trabajo<!-- ordine di conto lavoro --> para la fase externa. Por lo general, esta opción permanece activa.

- **Liberación de órdenes de producción ejecutivas<!-- Rilascio ordini di produzione esecutivi -->**; si está activa, permite que las *órdenes de producción<!-- ordini di produzione -->* generadas por la liberación de las *órdenes planificadas de producción<!-- ordini pianificati di produzione -->* se creen ya en el estado de *Ejecutivas* y no requieran un procedimiento adicional de liberación.

### Solicitudes de compra<!-- Richieste d'acquisto -->

En esta sección es posible:

- configurar, mediante la lista desplegable correspondiente, el **Tipo de solicitud de compra<!-- Tipo di richiesta di acquisto -->** que debe ser generada por la liberación de órdenes planificadas de compra<!-- rilascio ordine pianificati di acquisto -->. En esta lista se propone automáticamente el tipo de solicitud de compra ya configurado en los [Parámetros de Necesidades de Materiales<!-- Parametri Fabbisogno Materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters) en la sección de Parámetros para la liberación de órdenes planificadas;
- al activar la casilla **Propiedad de abastecimiento desde los Parámetros MRP del artículo<!-- Proprietà approvvigionamento da Parametri MRP articolo -->**, el procedimiento creará las *solicitudes de compra* insertando la prioridad indicada en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) de cada artículo; si no está activa, las *solicitudes de compra* se crearán con la prioridad indicada en la orden a la que están vinculadas;
- **Liberación de solicitudes de compra autorizadas<!-- Rilascio richieste d'acquisto autorizzate -->**: si está activa, permite que las solicitudes de compra generadas por la liberación de órdenes planificadas de compra<!-- rilascio degli ordini pianificati di acquisto --> se creen con la casilla de *Autorizado* activa automáticamente. De lo contrario, el usuario que deba generar órdenes proveedor desde la RDA deberá autorizar todas las líneas de la solicitud de compra antes de poder generar una orden a partir de ella. Sin embargo, es posible autorizar sólo algunas líneas de la RDA y luego proceder a la generación de órdenes proveedor solo desde las líneas autorizadas;
- haciendo posible, al activar la casilla **Redondear solicitud de compra<!-- Arrotonda richiesta di acquisto -->**, que el procedimiento de liberación de la orden planificada de compra<!-- rilascio ordine pianificato di acquisto --> redondee al entero superior la cantidad que se inserta en la línea de la solicitud de compra que se genera por la liberación de órdenes planificadas de compra<!-- rilascio degli ordini pianificati di acquisto -->, en caso de que existan cantidades decimales;
- decidir el método de agrupamiento: al activar la casilla **Agrupar lo antes posible<!-- Raggruppa al più presto -->**, el procedimiento de liberación realiza un agrupamiento de órdenes planificadas de compra<!-- ordini pianificati di acquisto --> generadas para el mismo artículo; en la casilla **Por un período de días de<!-- Per un periodo in giorni di -->** se configura el número de días de rango dentro del cual puede realizarse el agrupamiento, considerando las fechas de prevista recepción de los artículos, es decir, las fechas de fin de la orden planificada de compra<!-- ordine pianificato di acquisto -->;
- decidir, en caso de que no exista el proveedor en la orden planificada de compra<!-- ordine pianificato di acquisto -->, si **Aceptar las órdenes sin proveedor<!-- Accettare gli ordini senza il fornitore -->**, **Omitir las órdenes sin proveedor<!-- Tralasciare gli ordini senza il fornitore -->** o **Aceptar como proveedor la siguiente cuenta<!-- Accettare come fornitore il seguente conto -->** especificada en los campos correspondientes.

### Órdenes de cuenta de trabajo<!-- Ordini di conto lavoro -->

En la sección es posible:

- configurar, a través de la lista desplegable de **Tipo de Orden<!-- Tipo Ordine -->** y el campo **Año**, si la orden de cuenta de trabajo<!-- ordine di conto lavoro --> por generar debe ser de tipo *Cerrada* o *Abierta* y para qué año debe ser;
- decidir el método de agrupamiento: al activar la casilla **Agrupar órdenes del mismo subcontratista<!-- Raggruppare gli ordini dello stesso terzista -->**, el procedimiento de liberación realiza un agrupamiento de órdenes planificadas de cuenta de trabajo<!-- ordini pianificati di conto lavoro -->, insertando en la misma orden de cuenta de trabajo<!-- ordine di conto lavoro --> los artículos que deben ser trabajados por el mismo subcontratista;
- decidir si activar la casilla **Considerar cantidad fija desde la lista de materiales<!-- Considera quantità fissa da distinta -->**, que, si el artículo a producir tiene una cantidad fija en la lista de materiales, en la fase de liberación se creará una orden de cuenta de trabajo<!-- ordine di conto lavoro --> con tantas líneas como la cantidad fija, tal como ya ocurre con las órdenes de producción<!-- ordini di produzione -->. Si no está activa, se generará una orden de cuenta de trabajo<!-- ordine di conto lavoro --> con una sola línea con la cantidad total;
- decidir, en caso de que no exista el subcontratista en la orden planificada de cuenta de trabajo<!-- ordine pianificato di conto lavoro -->, si **Omitir las órdenes sin subcontratista<!-- Tralasciare gli ordini senza il terzista -->** o **Aceptar como subcontratista la siguiente cuenta<!-- Accettare come terzista il seguente conto -->** especificada en los campos correspondientes.

*Botón específico*:
> **Guardar los cambios<!-- Salva le modifiche -->**: permite guardar los parámetros tal como han sido configurados.

### Restauración<!-- Ripristino -->

En esta pestaña es posible ejecutar el procedimiento de restauración de la orden planificada<!-- ripristino ordine pianificato -->, que permite anular la liberación previamente realizada, restaurando la situación anterior a dicha liberación.

Se muestran las órdenes planificadas<!-- ordini pianificati --> del mismo tipo especificado en el campo **Liberación de órdenes planificadas a<!-- Rilascio ordini pianificati a -->** de la pestaña **Filtro<!-- Filtro -->**.

Una vez configurados todos los filtros deseados, simplemente haga clic en el botón **Buscar<!-- Ricerca -->** presente en la *ribbon bar* para mostrar los resultados dentro de la cuadrícula de resultados.

Manteniendo seleccionada una de las filas presentes en la cuadrícula de resultados, se visualiza en una de las tres pestañas inferiores, **Órdenes de producción<!-- Ordini di produzione -->**, **Solicitudes de compra<!-- Richieste d'acquisto -->** u **Órdenes de cuenta de trabajo<!-- Ordini di conto lavoro -->**, el documento generado por la liberación de la orden planificada<!-- rilascio dell'ordine pianificato --> seleccionada.

Para proceder con la restauración, seleccione una o más órdenes y haga clic en el botón **Restaurar órdenes<!-- Ripristino ordini -->**.

*Condiciones para el procedimiento de restauración*:

Para la **orden planificada de producción<!-- ordine pianificato di produzione -->**: sólo si la orden de producción<!-- ordine di produzione --> generada se encuentra en estado *Lanzada*; en caso de que la orden de producción<!-- ordine di produzione --> esté *Ejecutiva*, es necesario ejecutar la restauración de la liberación de la orden de producción<!-- rilascio dell'ordine di produzione -->, mientras que, si ya está *Completada<!-- Evaso -->*, no es posible ejecutar la restauración de la orden planificada<!-- ordine pianificato -->, a menos que se proceda en reversa comenzando por el rollback del registro de la declaración de producción;
Para la **orden planificada de compra<!-- ordine pianificato di acquisto -->**: solo si la línea de solicitud de compra<!-- richiesta di acquisto --> generada se encuentra en estado *No Completada<!-- Non Evasa -->*; en caso de que la línea de solicitud de compra<!-- richiesta di acquisto --> ya haya sido completada mediante la creación de una orden proveedor, será necesario retroceder comenzando desde el documento de compra hasta el punto ya alcanzado;
Para la **orden planificada de cuenta de trabajo<!-- ordine pianificato di conto lavoro -->**: solo si la línea de la orden de cuenta de trabajo<!-- ordine di conto lavoro --> generada aún no ha sido completada, o no se ha generado una remisión de entrega (DDT) para el material correspondiente a esa línea de orden de cuenta de trabajo<!-- ordine di conto lavoro -->.

Al ejecutar este procedimiento, las órdenes restauradas volverán a ser visibles en la pestaña **Filtro<!-- Filtro -->**, donde será posible realizar de nuevo la liberación.

Para detalles sobre el funcionamiento general de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).