---
title: Generación de órdenes de producción
sidebar_position: 2
ai_generated: true
---

El procedimiento **Generación de órdenes de producción<!-- Generazione commesse di produzione -->** permite generar órdenes de producción<!-- commesse di produzione --> a partir de pedidos de cliente<!-- ordini clienti -->, del previsional y/o de la función de stock mínimo<!-- Sottoscorta -->.

### Pedidos de Cliente<!-- Ordini Clienti --> {#sales-orders}

En esta pestaña se pueden filtrar las líneas de pedido de cliente<!-- ordine cliente --> que se desean analizar mediante el procedimiento **Generación de órdenes de producción<!-- Generazione commesse di produzione -->**.

Para poder visualizarse dentro de esta pestaña, las líneas de pedido deben cumplir con los siguientes **requisitos**:

- El artículo de la línea de pedido de cliente debe tener activada la opción *Generación de órdenes de producción<!-- Generazione commesse di produzione -->* en sus [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);
- La línea no debe haber sido despachada por medio de *Picking list*, *Remisión de venta<!-- DDT di vendita -->* o *Factura de venta<!-- Fattura di vendita -->*;
- La línea no debe haber sido marcada como *Despachada forzadamente<!-- Forzatamente evasa -->*, por lo tanto debe estar en estado *No Despachada<!-- Non Evasa -->* o *Parcialmente despachada<!-- Parzialmente evasa -->*;
- Desde la línea aún no deben haberse generado *Órdenes de producción<!-- Commesse di produzione -->*;
- La línea debe tener la *Fecha de mercancía lista<!-- Data merce pronta -->* y *Fecha de entrega<!-- Data consegna -->* ingresadas en el *Pedido de cliente<!-- Ordine cliente -->* dentro de la pestaña *Artículos<!-- Articoli -->* de donde proviene;
- El pedido de cliente desde donde proviene la línea debe estar *Impreso<!-- Stampato -->* y *Confirmado<!-- Confermato -->*.

:::note Nota
La ausencia de UNA SOLA de estas condiciones provoca la imposibilidad de visualizar la línea del pedido de cliente en la cuadrícula.
:::

En el área de filtro es posible filtrar solamente las líneas de pedido que se quieren visualizar según los filtros presentes. Una vez establecidos los filtros necesarios, al hacer clic en el botón **Buscar<!-- Ricerca -->** se mostrarán en la cuadrícula de resultados todas las líneas de pedido correspondientes a los filtros indicados.

*Campos*

**Tipo**: representa el tipo de pedido de cliente;
**Número**: representa el número de pedido de cliente;
**Año**: representa el año del pedido de cliente;
**Fecha de pedido de cliente<!-- Data ordine cliente -->**: representa la fecha del pedido de cliente;
**Número de línea**: representa el número de línea del pedido de cliente;
**Cliente**: representa la cuenta<!-- conto --> y subcuenta<!-- sottoconto --> del cliente del pedido de cliente;
**Clase** y **Código de artículo**: representan la clase y el código del artículo;
**Variante**: representa la variante del artículo;
**Cantidad**: representa la cantidad aún por despachar de la línea de pedido;
**Disponibilidad**: representa la cantidad disponible del artículo en la fecha de mercancía lista de la línea de pedido;
**Unidad de medida**: representa la unidad de medida;
**Entrega**: representa la fecha de mercancía lista de la línea de pedido;
**Tipo de orden<!-- Tipo commessa -->** y **Descripción de la orden<!-- Descrizione commessa -->**: representan el código y la descripción del tipo de orden<!-- commessa --> asociada al *tipo de pedido cliente<!-- tipo ordine cliente -->*;
**Descripción del artículo**: representa la descripción del artículo;
**Descripción de la cuenta<!-- conto -->**: representa la razón social del cliente.

:::note Nota
La columna **Disponibilidad** es igual a cero para todas las líneas si la bandera *Considerar la disponibilidad del artículo* presente en la pestaña **Parámetros** está desactivada.
:::

*Botones específicos*

> **Considerar para órdenes<!-- Considera per commesse -->**: permite mover las líneas de pedido seleccionadas a la pestaña **Resumen de prototipos de órdenes<!-- Riepilogo prototipi commesse -->** donde podrán ser consideradas por el procedimiento de generación de la orden de producción.

> **Generar flujo<!-- Generazione flusso -->**: el botón se habilita solo en caso de que, en los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters/), se haya activado la opción *Generación automática de flujo de producción<!-- Generazione automatica flusso di produzione -->*. Con este botón es posible lanzar directamente la ejecución del flujo de producción completo, así como la *creación* de las *órdenes de producción<!-- Commesse di produzione -->* que se programarían directamente y, según las banderas posteriores establecidas también en los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters/), se podrían generar también los *Pedidos planificados de compra, subcontratación<!-- conto lavoro --> y producción*, con la posibilidad de definir cuáles liberar automáticamente.
Por lo tanto, a través de este botón se podría encontrar que todos los pedidos planificados ya están liberados y las órdenes de producción en estado ejecutivo, saltando así todas las fases intermedias.

### Stock mínimo<!-- Sottoscorta --> {#safety-stock}

A través de esta pestaña se pueden filtrar las líneas de artículos gestionados con Stock<!-- Scorta --> que se desean analizar mediante el procedimiento *Generación de órdenes de producción<!-- Generazione commesse di produzione -->*.
El único **requisito** que permite que el artículo sea visualizable en esta cuadrícula es que tenga, en sus [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), el *Tipo de gestión* como *Stock<!-- Scorta -->*.

En el área de filtro es posible filtrar solamente las líneas de pedido que se desean visualizar según los *filtros* aplicados.
**Ver variante**: la bandera activa permite visualizar la variante;
**Tipo de orden de producción<!-- Tipo commessa di produzione -->**: permite decidir el tipo de orden de producción<!-- commessa di produzione --> a generar;
**Por debajo del punto de reposición hasta el**: representa la fecha hasta la cual no se quiere que los artículos de la cuadrícula entren en stock mínimo<!-- sottoscorta -->.

Una vez definidos los filtros necesarios, haciendo clic en el botón **Buscar<!-- Ricerca -->** se mostrarán en la cuadrícula de resultados todas las líneas de artículos correspondientes a los filtros indicados.

Los datos que se pueden visualizar dentro de la cuadrícula son:
**Clase**, **Código** y **Descripción del artículo**;
**Variante**: se visualiza si se ha activado la bandera homónima; si se ha decidido en el área de filtro que se visualice;
**Punto de reposición**, **Stock mínimo<!-- Scorta minima -->** y **Días de reposición**: se toman de la *Ficha de artículo<!-- Anagrafica articolo -->* > pestaña *Abastecimiento<!-- Approvvigionamento -->*;
**Consumo medio diario**: se calcula restando el stock mínimo al punto de reposición y dividiendo el resultado por los días de reposición;
**Lote económico de producción** y sus **Múltiplos**: se toman de la pestaña de producción de los [parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo si es de *tipo abastecimiento de producción*, mientras que provienen del *proveedor predefinido* de la pestaña *proveedores preferenciales* de la *ficha de artículo<!-- anagrafica articolo -->* en caso de ser de *tipo abastecimiento de compra*;
**Existencia<!-- Giacenza -->**: muestra la existencia del artículo a la fecha actual;
**Disponibilidad inicial**: representa la disponibilidad del artículo al día en que se lanza el procesamiento;
**Disponibilidad final**: representa la disponibilidad del artículo al día indicado en la casilla **Por debajo del punto de reposición hasta la fecha** presente en el área de filtro;
**Disponibilidad mínima**: representa la disponibilidad mínima que el artículo presenta en el periodo que va desde la fecha de disponibilidad inicial hasta la fecha de disponibilidad final.

:::note Nota
Para los documentos sin Fecha de Entrega se considera el parámetro *Si no se especifica la fecha de entrega* presente en la pestaña Parámetros.
:::

La *cuadrícula inferior* muestra el detalle de la disponibilidad del artículo seleccionado en la cuadrícula principal.

:::note Nota
En la primera fila de la cuadrícula, la disponibilidad se calcula sumando la existencia<!-- giacenza --> y todos los documentos vencidos (con fecha anterior a hoy).
:::

*Botón específico*

> **Considerar para órdenes<!-- Considera per commesse -->**: permite mover las líneas seleccionadas a la pestaña **Resumen de prototipos de órdenes<!-- Riepilogo prototipi commesse -->** donde podrán ser tomadas en cuenta por el procedimiento de generación de la orden de producción.

Solo las líneas para las cuales el procedimiento determine que se puede generar una orden de producción serán transferidas a la pestaña *Resumen de prototipos de órdenes<!-- Riepilogo prototipi commesse -->*. El procedimiento propone para cada artículo una orden de producción y trata de que en el día en que el artículo corre el riesgo de caer por debajo del nivel de stock mínimo, sea repuesto mediante una orden de producción con fecha idéntica a la fecha de stock mínimo<!-- sottoscorta -->. La cantidad de esta orden debe permitir cubrir hasta la fecha de **Por debajo del punto de reposición** indicada en el área de filtro: obviamente, si el artículo tiene lotes económicos de producción o de compra y múltiplos, estos se respetan.

### Previsional<!-- Previsionale --> {#forecast}

En esta pestaña se pueden filtrar las líneas de *Previsiones de venta* o del *Plan maestro de producción* que se desean analizar mediante el procedimiento **Generación de órdenes de producción<!-- Generazione commesse di produzione -->**, utilizando los filtros por artículo y por variante.

Las líneas de *Previsiones de venta* que pueden visualizarse en esta pestaña deben cumplir con los siguientes **requisitos**:

- La previsión de venta anual debe estar en estado *Consolidada*;
- La previsión de venta anual debe haberse generado con una *Versión* válida;
- Desde la línea de previsión no deben haberse generado aún *Órdenes de producción<!-- Commesse di produzione -->*;
- De las líneas del *Plan maestro de producción* que pueden visualizarse en esta pestaña no deben haberse generado aún *Órdenes de producción<!-- Commesse di produzione -->*.

En el área de filtro es posible filtrar solo las líneas de pedido que se quieran visualizar según los *filtros* aplicados.
**Ver variante**: la bandera activa permite visualizar la variante;
**Mes de fin de programación**: sirve para visualizar en la cuadrícula solo las previsiones de venta que lleguen hasta la fecha indicada;
**Tipo de orden<!-- Tipo commessa -->**: representa el tipo de orden de producción<!-- commessa di produzione --> a generar;
**Tipos de pedido<!-- Tipi ordine -->**: la cuadrícula permite establecer los *Tipos de pedido cliente<!-- Tipi ordini cliente -->* que deben considerarse junto con las cantidades presentes en las previsiones de venta, de modo que el procedimiento de creación de órdenes genere la orden de producción con la cantidad correspondiente al mayor, menor o suma de las cantidades presentes, para el mismo artículo, en la línea de pedido cliente y/o en previsión de producción o plan maestro.

Una vez configurados los filtros necesarios, haciendo clic en el botón **Buscar<!-- Ricerca -->** se mostrarán en la cuadrícula de resultados todas las líneas de previsión correspondientes a los filtros indicados.

*Campos*

**Clase**, **Código** y **Descripción del artículo**;
**Variante**: se visualiza si se ha activado la bandera homónima; si se ha decidido en el área de filtro que se visualice;
**Año**: representa el año de la previsión de venta;
**Mes/Sem**: representa el número de mes o de semana de la previsión de venta;
**Fecha de generación de la orden<!-- Data gen. commessa -->**: representa la fecha de generación de la orden de producción;
**Fechas inicio / fin de previsión**: por ejemplo, si la previsión se programó para el mes de mayo, la fecha de inicio será el 01/05 y la de fin el 31/05;
**Cantidad**: representa la cantidad de la línea de previsión;
**Cuenta/Subcuenta/Descripción de la cuenta<!-- Conto/Sottoconto/Descrizione conto -->**: representa la cuenta<!-- conto --> del cliente relativa a la línea de previsión de venta (donde aplique).

*Botón específico*

> **Considerar para órdenes<!-- Considera per commesse -->**: permite mover las líneas seleccionadas a la pestaña **Resumen de prototipos de órdenes<!-- Riepilogo prototipi commesse -->** donde podrán ser tomadas en cuenta por el procedimiento de generación de la orden de producción.

### Resumen de prototipos de órdenes<!-- Riepilogo prototipi commesse -->

Esta pestaña presenta las líneas que se han movido desde las pestañas anteriores y que deben ser transformadas en órdenes de producción.

La pestaña contiene:
- la sección **Orden de producción propuesta<!-- Commessa di produzione proposta -->** donde el usuario puede establecer el **Tipo**, el **Año** y el **Número** de la orden de producción<!-- commessa di produzione --> a la que deben añadirse las líneas seleccionadas en la misma pestaña **Resumen de prototipos de órdenes<!-- Riepilogo prototipi commesse -->**.
- la cuadrícula de resultado donde se visualizarán las líneas de artículo que se han trasladado desde otras pestañas.

*Campos de cuadrícula*:

**Datos desde**: representa la pestaña de origen de la línea;
**Clase**, **Código de artículo** y **Descripción**: representan la clase, el código y la descripción del artículo;
**Variante**: representa la variante del artículo;
**Cantidad**: representa la cantidad de la orden<!-- commessa --> que propone el procedimiento;
**Disponibilidad**: representa la cantidad disponible del artículo en la *Fecha de entrega<!-- Data consegna -->*;
**Fecha de entrega**: representa la fecha de fin de la orden de producción<!-- commessa di produzione --> propuesta (que puede modificarse manualmente por el usuario);
**Fecha de inicio de previsión**: representa la fecha de inicio de previsión;
**Código de tipo**: representa el código del pedido de cliente<!-- ordine cliente -->;
**Número de pedido de cliente<!-- Numero ordine cliente -->**: representa el número del pedido de cliente<!-- ordine cliente -->;
**Cuenta / Subcuenta / Descripción de la cuenta<!-- Conto / Sottoconto / Descrizione conto -->**: representan la cuenta<!-- conto --> del cliente relativa a la línea de previsión de venta (donde aplique);
**Tipo de orden<!-- Tipo commessa -->** y **Descripción de la orden<!-- Descrizione commessa -->**: representan el código y la descripción del tipo de orden<!-- commessa -->.

Luego de seleccionar las líneas deseadas, el usuario tiene la posibilidad de crear las órdenes de producción<!-- commesse di produzione --> de acuerdo a los criterios configurados en la pestaña **Parámetros**, utilizando el botón **Creación automática de órdenes<!-- Formazione automatica commesse -->**. El procedimiento mostrará, al final del procesamiento, una ventana con los números de las órdenes generadas. El usuario solo debe hacer clic en Aceptar y cerrar.

*Botón específico*
> **Creación automática de órdenes<!-- Formazione automatica commesse -->**: llama al procedimiento que genera las órdenes de producción<!-- commesse di produzione --> de las líneas seleccionadas.

### Parámetros

En esta pestaña se configuran todos los parámetros que afectan la gestión de la creación de órdenes de producción<!-- commesse di produzione --> y la manera en que deben ser gestionadas las fases posteriores a la generación de las órdenes. Algunas configuraciones presentes en esta pestaña se retoman de la ventana [Parámetros MPS](/docs/configurations/parameters/production/mps-parameters).

**Método de generación de orden<!-- Metodo generazione commessa -->**:
- **Tipo de orden<!-- Tipo commessa -->** (Mono-producto/Multiproducto): se retoma el dato configurado en la pestaña [Parámetros MPS](/docs/configurations/parameters/production/mps-parameters). En el momento de la generación de la orden desde la *Generación de órdenes de producción<!-- Generazione commesse di produzione -->* es posible modificar esta configuración en esta ventana, al igual que la relativa al selector siguiente;
- **Agrupación de productos por**: selector mediante el cual es posible indicar cómo deben agruparse eventualmente los artículos dentro de la misma orden *Mono-producto* o *Multiproducto*.

> Si el tipo de orden<!-- commessa --> es *Mono-producto*, la única agrupación permitida es por *Artículo*; este tipo de gestión permite al usuario hacer que el sistema genere automáticamente una serie de órdenes *Mono-producto*, seleccionando una lista de líneas de *Pedidos de cliente<!-- Ordini clienti -->*, líneas provenientes de *Previsiones de venta* o del *Plan maestro de producción* o provenientes de *Stock mínimo<!-- Sottoscorta -->* de forma que cada orden generada presenta la suma de las cantidades requeridas para el mismo artículo. La fecha de finalización de una orden agrupada es siempre la del requerimiento más cercano a la fecha en que se lanza el procesamiento.
> Si el tipo de orden es *Multiproducto*, los agrupamientos pueden realizarse por cliente o proyecto y permiten al usuario incluir dentro de la misma orden *Multiproducto* varios artículos provenientes de líneas de pedido de cliente relacionadas al mismo cliente, a la misma orden de venta o a la misma orden de venta del mismo cliente.

**Prioridad de suministro<!-- Priorità approvvigionamento -->**: el selector presenta la prioridad de suministro configurada en los [Parámetros MPS](/docs/configurations/parameters/production/mps-parameters) seleccionando una prioridad entre las codificadas en la tabla *Prioridad de suministro* que se encuentra en la sección de *Ajustes Generales*.

**Actualización de órdenes existentes<!-- Aggiornamento commesse già esistenti -->**: las órdenes seleccionadas en la pestaña de resumen se agregan a una orden ya existente (indicada en el cuadro '*Orden de producción propuesta<!-- Commessa di produzione propost -->*' de la pestaña **Resumen<!-- Riepilogativo -->**), si y solo si está activada la bandera **Actualización de órdenes existentes<!-- Aggiornamento commesse già esistenti -->** en la pestaña de parámetros. Automáticamente se propondrá una orden ya guardada donde agregar las líneas, si ya existe una con ese tipo y fecha.

A continuación, mediante banderas específicas, se puede indicar si la orden debe generarse a partir de **Pedidos de cliente<!-- Ordini clienti -->** o de un **Previsional<!-- Previsionale -->** (y en el caso del previsional si desde **Previsiones de venta<!-- Previsioni di vendita -->** o del **Plan maestro de producción<!-- Piano principale di produzione -->**), o bien, como última instancia, desde **Stock mínimo<!-- Sottoscorta -->**. En este último caso se utiliza un algoritmo particular explicado en el párrafo dedicado a la pestaña [Stock mínimo](#safety-stock).

**Previsional**: si la bandera está activada, luego se puede decidir en qué modalidad temporal deben generarse las órdenes de producción, entre las siguientes opciones:
> **Mensual**: en este caso, la orden de producción se generará en el mes en el que caiga la fecha de finalización de la Previsión de Venta o en el mes en que se haya ingresado la cantidad en el Plan Maestro de Producción. El usuario también puede establecer el día del mes en que la fecha prevista de finalización de la orden debe establecerse mediante el procedimiento automático de creación de órdenes;
> **Semanal**: en este caso se generará una orden de producción por cada semana del mes en que caiga la fecha de finalización de la Previsión de Venta o del mes en que se ingresó la cantidad en el Plan Maestro de Producción. El usuario también puede establecer el día de la semana en que la fecha prevista de finalización de la orden debe establecerse mediante el procedimiento automático de creación de órdenes;
> **Reales**: en este caso se generará una orden de producción para cada semana del mes en que caiga la fecha de finalización de la *Previsión de Venta* o del mes en que se ingresó la cantidad en el *Plan Maestro de Producción*, pero considerando exactamente la fecha de finalización de la línea individual de la *Previsión de Venta*;
> **Semanal considerando días de producción de la zona de entrega**: en este caso se generará una orden de producción considerando los días de producción de la zona de entrega vinculada al cliente para el que se creó la *Previsión de Venta*;
> **Agrupamiento de previsiones por cliente**: la bandera sirve para que las órdenes de producción se generen agrupando las líneas de previsión de los mismos clientes.

**Si no se especifica la fecha de entrega** la sección se refiere exclusivamente a la pestaña *Pedidos de Cliente<!-- Ordini Clienti -->* y a la pestaña *Stock mínimo<!-- Sottoscorta -->* de la *Generación de órdenes de producción<!-- Generazione commesse di produzione -->*. Aquí, el usuario puede decidir si, en caso de que falte la *Fecha de mercancía lista<!-- Data merce pronta -->* en la línea del pedido de cliente que debe analizarse mediante el procedimiento, debe ignorarse la línea sin fecha, o bien debe aceptarse una determinada fecha como prevista de finalización de la orden que se generará, o debe aceptarse determinada fecha como prevista de inicio de la orden que se generará (en estos dos últimos casos las fechas se seleccionan en los dos selectores dedicados).

**Considerar la disponibilidad del artículo**: la bandera permite, si está activa, que en todas las pestañas de *Generación de órdenes de producción<!-- Generazione commesse di produzione -->* se muestre la disponibilidad del artículo a la *Fecha prevista de finalización* de la orden de producción a crear. Lo mismo sucede también en la pestaña *Resumen de prototipos de órdenes<!-- Riepilogo prototipi commesse -->*. La disponibilidad se considera en base a las banderas activadas en los *Parámetros MPS* (Subcontratación<!-- Conto Lavoro -->, Compras, Ventas, Producción, Almacén<!-- Magazzino -->). En este caso, al crear la orden, el procedimiento considerará la disponibilidad, generando la orden por la diferencia entre la demanda y la disponibilidad de ese artículo.

**Almacenes de planificación de órdenes<!-- Magazzini di pianificazione  commesse -->**: en la cuadrícula aparecen los almacenes<!-- magazzino --> que se han incluido en la ventana de [Cálculo de Disponibilidad](/docs/erp-home/registers/items/calculate-availability). Desde esta pestaña *Parámetros* solo se pueden visualizar y no modificar.

**Sitio productivo:** esta información, si se indica, se utiliza para que el procedimiento de generación de órdenes desde pedido de cliente tenga en cuenta solo las líneas de pedidos de cliente confirmadas cuyo almacén de retiro previsto está asociado a ese sitio productivo.

**Cálculo de cantidad según lote económico**: si está activo, esta bandera hace que el procedimiento genere la orden de producción considerando el lote económico de compra ingresado en la pestaña [Proveedores preferenciales](/docs/erp-home/registers/items/create-new-item) sobre el proveedor designado como predeterminado si el artículo analizado en *Generación de órdenes de producción<!-- Generazione commesse di produzione -->* tiene como *Tipo de abastecimiento*: *Compra* o *Subcontratación<!-- Conto Lavoro -->*, y el lote económico de producción ingresado en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) si el artículo objeto de la orden tiene como *Tipo de abastecimiento* *Producción*.

**Cálculo de cantidad según los múltiplos del artículo**: si está activo, esta bandera hace que el procedimiento genere la orden de producción considerando también los múltiplos del lote económico de compra ingresado en la pestaña de proveedores preferenciales para el proveedor designado como predeterminado de los artículos si el artículo objeto de la orden tiene como *Tipo de abastecimiento* *Compra* o *Subcontratación<!-- Conto Lavoro -->*, y los múltiplos del lote económico de producción ingresado en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) si el artículo analizado en *Generación de órdenes de producción<!-- Generazione commesse di produzione -->* tiene como *Tipo de abastecimiento*: *Producción*. Obviamente, esta bandera solo puede activarse si está activa la bandera del párrafo anterior.

**Reintegro del stock mínimo del artículo**: si está activo, esta bandera permite que para el artículo analizado en *Generación de órdenes de producción<!-- Generazione commesse di produzione -->* se reponga el stock mínimo<!-- scorta minima --> ingresado en la *Ficha de artículo > pestaña Abastecimiento*.

**Reintegro del punto de reposición del artículo**: si está activo, esta bandera permite que para el artículo analizado en *Generación de órdenes de producción<!-- Generazione commesse di produzione -->* se reponga el punto de reposición ingresado en la *Ficha de artículo > pestaña Abastecimiento*.

**Excluir pedidos atrasados**: si está activo, esta bandera permite que el procedimiento de generación de la orden de producción excluya del cálculo de la disponibilidad del artículo analizado las cantidades provenientes de líneas de pedido de cliente cuya *Fecha de mercancía lista<!-- Data merce pronta -->* sea anterior a la fecha actual.

Una vez configurados los parámetros, se podrá proceder con la creación de las órdenes en las respectivas pestañas de los [Pedidos de cliente](#sales-orders), el [Previsional](#forecast) y el [Stock mínimo<!-- Sottoscorta -->](#safety-stock).

*Botón específico*
> **Creación automática de órdenes<!-- Formazione automatica commesse -->**: llama al procedimiento que genera las órdenes de producción<!-- commesse di produzione --> de las líneas seleccionadas.

Para más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).