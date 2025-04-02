---
title: rilascio ordini pianificati
sidebar_position: 1
---

:::important ¿Para qué sirve? (A cosa serve)
La función de **rilascio ordini pianificati** en el sistema Fluentis está diseñada para facilitar el paso de los pedidos planificados a sus respectivos estados operativos. Una vez que se han generado los pedidos planificados, es posible proceder a su liberación utilizando botones específicos en la barra de herramientas. Este proceso varía según el tipo de orden: producción, compra o trabajo por encargo.

Cuando se libera un pedido planificado de producción, este se convierte en un pedido de producción operativo. Los pedidos planificados de compra generan solicitudes de compra (RDA), mientras que los pedidos planificados de trabajo por encargo se transforman en pedidos operativos de trabajo por encargo.
:::

El formulario permite la creación de:

- *solicitudes de compra*, posiblemente ya autorizadas mediante un parámetro adecuado, en el caso de órdenes planificadas de compra;  
- *pedidos de trabajo por encargo* en el caso de órdenes planificadas de trabajo por encargo, o si en la lista de fases de un pedido planificado de producción hay una fase externa;  
- *pedidos de producción*, *lanzados* o *ejecutivos* dependiendo de la activación de un parámetro específico, en el caso de órdenes planificadas de producción.

La liberación de los pedidos implica que estos ya no son visibles entre los [Pedidos planificados](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) y, por consiguiente, no se puede generar una nueva [Planificación](/docs/planning/ms-master-scheduling/general-schedule) de la orden de producción de la cual los pedidos planificados habían sido generados previamente mediante planificación general. Los pedidos planificados en la cuadrícula generados manualmente o mediante procesamiento MRP no tienen ningún vínculo con las órdenes de producción.

## Filtro

En esta pestaña es posible visualizar la lista de los pedidos planificados que aún deben ser liberados y se pueden filtrar a través de una serie de criterios de selección.

Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **Buscar** presente en la *barra de herramientas (ribbon bar)* para visualizar los resultados dentro de la cuadrícula de resultados.

*Botones específicos*: 

> **rilascio**: este botón se activa solamente si se selecciona al menos una fila en la cuadrícula de resultados para liberar; al hacer clic en esta funcionalidad, el sistema ejecutará la liberación de los *pedidos planificados de producción* en *pedidos de producción lanzados o ejecutivos*, dependiendo de cómo se hayan establecido los parámetros en los [Parámetros de Requerimientos de Materiales](/docs/configurations/parameters/production/resource-requirements-parameters); la liberación de las *órdenes planificadas de compra* en *Solicitudes de Compra* *autorizadas* o *no autorizadas*, dependiendo de cómo se haya elegido establecer el parámetro dentro de los [Parámetros de Requerimientos de Materiales](/docs/configurations/parameters/production/resource-requirements-parameters); la liberación de los *pedidos planificados de trabajo por encargo* en *pedidos de Trabajo por Encargo*.             
> **apri ricerca ordini di produzione**: mediante este botón será posible abrir la Búsqueda de Órdenes de Producción filtradas con los mismos criterios utilizados en la sección de filtro de esta ventana. Por ejemplo, si filtra los pedidos planificados en esta pantalla en función del número de orden 3 del año 2018, la ventana de búsqueda de órdenes de producción se abrirá ya filtrada por la orden 3 del año 2018.

*Campos específicos*:

**anno**: indica el año del pedido planificado;  
**ordine**: indica el número del pedido planificado;  
**livello**: indica el nivel del artículo objeto del pedido dentro de la lista de materiales;  
**Año/Número/Código/Descripción de la orden de producción**: los campos resultarán ser vacíos si el pedido planificado ha sido generado manualmente o mediante MRP;  
**Fecha de inicio prevista (Data di inizio prevista)**: si se trata de un pedido planificado de compra o de trabajo por encargo, esta fecha representa el momento en que debe enviarse al proveedor el pedido de compra que será generado posteriormente con la liberación del pedido mismo; si se trata de un pedido planificado de producción, esta fecha representa la fecha prevista de inicio de la primera fase de procesamiento del ciclo del artículo;  
**Fecha de finalización prevista (Data di fine prevista)**: si se trata de un pedido planificado de compra o de trabajo por encargo, esta fecha representa el momento en que debe recibirse el suministro y, por lo tanto, coincidirá con la fecha prevista de recepción de la línea del pedido del proveedor que será generada posteriormente con la liberación del pedido mismo; si se trata de un pedido planificado de producción, esta fecha representa la fecha prevista de finalización de la última fase de procesamiento del ciclo del artículo;  
**quantità confermata**: será diferente de cero solamente si el procesamiento se ha realizado mediante el MRP;  
**Cuenta cliente, subcuenta y descripción**: indica el cliente relacionado en el caso de los pedidos de producción;  
**Cuenta proveedor, subcuenta y descripción**: indica el proveedor relacionado en el caso de los pedidos de compra y de trabajo por encargo;  
**Año/Número/Tipo de orden de cliente**: representa el pedido de cliente del que se generó la orden de producción que programó el pedido planificado en cuestión.

Después de identificar los pedidos que se desean liberar, para proceder con la **Liberación**, será necesario utilizar uno de los botones presentes en la *barra de herramientas* (ribbon bar), dependiendo del tipo de orden que se debe liberar: **rilascio ordini pianificati de producción**, **Liberación de pedidos planificados de Compra** o **Liberación de pedidos planificados de Trabajo por Encargo**. Estos botones se habilitarán respectivamente de acuerdo con lo ingresado en el campo **Liberación de pedidos planificados a**.

También es posible ingresar en **Visualización de los detalles del pedido planificado** presente en la cuadrícula, haciendo simplemente doble clic con el mouse sobre la fila del pedido planificado que desea visualizar, antes de proceder a la liberación.

## Parámetros

En esta pestaña es posible establecer y guardar los parámetros que se requieren para la liberación de los pedidos planificados.

### Órdenes de Producción

En esta sección es posible:

- mediante la activación del indicador **Generación de órdenes de trabajo por encargo para operaciones externas**, decidir que, si en la lista de fases del pedido planificado de producción que se está liberando hay una fase externa, se genere en consecuencia un pedido de trabajo por encargo para la fase externa. Por lo general, este indicador se mantiene activo.

- **rilascio ordini di produzione esecutivi**; si está activo, permite que los *pedidos de producción* generados mediante la liberación de los *pedidos planificados de producción* sean creados ya en estado de *Ejecutivos* y, por lo tanto, no requieran un procedimiento adicional de liberación.

### Solicitudes de compra

En la sección es posible:

- establecer, mediante el cuadro combinado correspondiente, el **Tipo de solicitud de compra** que debe ser generada por la liberación de pedidos planificados de compra. En este cuadro combinado se propone automáticamente el tipo de solicitud de compra ya establecido en los [Parámetros de Requerimientos de Materiales](/docs/configurations/parameters/production/resource-requirements-parameters) en la sección Parámetros para la liberación de los pedidos planificados;  
- al activar el indicador **Propiedades de aprovisionamiento de Parámetros MRP del artículo**, la procedimiento creará las *solicitudes de compra* ingresando la prioridad indicada en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo en particular; mientras que si no está activo, las *solicitudes de compra* serán creadas con la prioridad indicada en la orden a la que están vinculadas;  
- **Liberación de solicitudes de compra autorizadas**: si está activo, permite que las solicitudes de compra generadas mediante la liberación de los pedidos planificados de compra sean creadas con el indicador de *Autorizado* activado automáticamente. De lo contrario, el usuario que debe generar pedidos a proveedores desde RDA se verá obligado a autorizar todas las líneas de la solicitud de compra antes de poder generar un pedido a partir de ella. No obstante, es posible autorizar solo algunas de las líneas de la RDA y, por lo tanto, proceder a la generación de pedidos a proveedores partiendo únicamente de las líneas autorizadas;  
- hacer que, al activar el indicador **Redondear solicitud de compra (Arrotonda richiesta di acquisto)**, la procedimiento de liberación del pedido planificado de compra redondee al entero superior la cantidad que se inserte en la línea de la solicitud de compra que se genera a partir de la liberación de los pedidos planificados de compra, en caso de que haya cantidades con decimales;  
- decidir el método de agrupamiento: al activar el indicador **raggruppa al più presto**, la procedimiento de liberación realiza un agrupamiento de los pedidos planificados de compra generados para el mismo artículo; en la casilla **Por un período de días de (Per un periodo in giorni di)** se establece el número de días del rango dentro del cual puede llevarse a cabo el agrupamiento, considerando las fechas de recepción previstas de los artículos, es decir, las fechas de finalización del pedido planificado de compra;  
- decidir, en caso de que no esté presente el proveedor en el pedido planificado de compra, si **Aceptar pedidos sin proveedor**, **Omitir pedidos sin proveedor** o **Aceptar como proveedor la siguiente cuenta especificada en las casillas adecuadas.**

### Órdenes de trabajo por encargo

En la sección es posible:

- establecer, mediante el cuadro combinado del **Tipo de Orden** y el campo **Año**, si el pedido de trabajo por encargo que se va a generar debe ser de tipo *Cerrado* o *Abierto* y de qué año debe ser;  
- decidir el método de agrupamiento: al activar el indicador **raggruppare gli ordini dello stesso terzista**, la procedimiento de liberación realiza un agrupamiento de los pedidos planificados de trabajo por encargo, insertando en el mismo pedido de trabajo por encargo los artículos que deben ser procesados por el mismo subcontratista;  
- decidir si activar el indicador **Considerar cantidad fija de la lista de materiales (Considera quantità fissa da distinta)**, que en el caso de que el artículo a producir tenga una cantidad fija en la lista de materiales, durante la liberación se creará un pedido de trabajo por encargo con tantas líneas según la cantidad fija, como ya ocurre para los pedidos de producción. Si no está activado, se generará un pedido de trabajo por encargo con una sola línea con la cantidad total.  
- decidir, en caso de que no esté presente el subcontratista en el pedido planificado de trabajo por encargo, si **Omitir pedidos sin el subcontratista** o **Aceptar como subcontratista la siguiente cuenta** especificada en las casillas adecuadas.

*Botón específico*:  
> **salva le modifiche**: permite guardar los parámetros tal como se han establecido.

### Restauración (Ripristino)

En esta pestaña es posible ejecutar el procedimiento de restauración del pedido planificado que permite anular la liberación previamente realizada, restableciendo la situación anterior a la liberación misma.

Se visualizan los pedidos planificados del mismo tipo especificado en el campo **Liberación de pedidos planificados a** de la pestaña **Filtro**.

Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **Buscar** presente en la *barra de herramientas* (ribbon bar) para visualizar los resultados dentro de la cuadrícula de resultados.  

Manteniendo seleccionada una de las filas presentes en la cuadrícula de resultados, se visualizará en una de las tres pestañas inferiores, **Órdenes de producción**, **Solicitudes de compra** o **Órdenes de trabajo por encargo**, el documento generado por la liberación del pedido planificado seleccionado.

Para iniciar la restauración, seleccione uno o más pedidos y haga clic en el botón **ripristino ordini**. 

*Condiciones para el procedimiento de restauración*:

Para el **pedido planificado de producción**: solamente si el pedido de producción generado se encuentra en el estado de *Lanzado*; en caso de que el pedido de producción sea *Ejecutivo*, es necesario ejecutar la restauración de la liberación del pedido de producción, mientras que si ya está *Entregado*, no es posible realizar la restauración del pedido planificado, a menos que se proceda hacia atrás comenzando desde el retroceso del registro de la declaración de producción;  
Para la **orden planificada de compra**: solo si la línea de solicitud de compra generada se encuentra en el estado de *No Entregado*; en caso de que la línea de solicitud de compra ya ha sido entregada con la creación de un pedido a proveedor, será necesario proceder a retroceder desde el documento de compra hasta el punto en que se ha llegado;  
Para el **pedido planificado de trabajo por encargo**: solo si la línea del pedido de trabajo por encargo generado no ha sido aún entregada, o no se ha generado un DDT de entrega para el material relacionado con esa línea del pedido de trabajo por encargo.

Al ejecutar este procedimiento, los pedidos restaurados serán nuevamente visibles en la pestaña de **Filtro** donde será posible volver a realizar la liberación.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).