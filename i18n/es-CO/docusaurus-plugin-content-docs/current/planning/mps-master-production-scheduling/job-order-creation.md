---
title: generazione commesse di produzione
sidebar_position: 2
---

El procedimiento **generazione commesse di produzione** permite generar órdenes de producción a partir de pedidos de clientes, pronósticos y/o de Surtido bajo (Sottoscorta).

### Pedidos de Clientes (Ordini Clienti) {#sales-orders}

En esta pestaña se pueden filtrar las líneas de pedidos de clientes que se quieran analizar mediante el procedimiento **generazione commesse di produzione**.

Para poder visualizarse dentro de esta pestaña, las líneas de pedidos deben cumplir con los siguientes **requisitos**:

- el artículo objeto de la línea del pedido del cliente debe tener el indicador *generazione commesse di produzione* habilitado en sus [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);  
- la línea no debe haber sido completada a través de *Lista de Picking (Picking list)*, o *DDT de venta*, o *Factura de venta*;  
- la línea no debe haber sido marcada como *forzatamente evasa* y, por lo tanto, debe estar en estado *No Completada (Non Evasa)* o *parzialmente evasa*;  
- no debe haberse generado aún *Órdenes de producción* desde la línea;  
- la línea debe tener la *Fecha de mercancía lista* y *Fecha de entrega* ingresadas en el *Pedido del cliente* dentro de la pestaña *Artículos* de donde proviene;  
- el pedido del cliente del que proviene la línea debe estar *Impreso* y *Confirmado*.

:::note Nota
La falta de UN SOLO requisito provoca la imposibilidad de visualizar la línea del pedido del cliente en la cuadrícula.
:::

En el área de filtro se pueden filtrar solamente las líneas de pedidos que se quieren visualizar en base a los filtros presentes. Una vez establecidos los filtros necesarios, al hacer clic en el botón **Buscar** se mostrarán en la cuadrícula de resultados todas las líneas de pedidos correspondientes a los filtros indicados.

*Campos*  

**tipo**: representa el tipo de pedido del cliente;  
**numero**: representa el número del pedido del cliente;  
**anno**: representa el año del pedido del cliente;  
**Fecha del pedido del cliente (Data ordine cliente)**: representa la fecha del pedido del cliente;  
**numero riga**: representa el número de línea del pedido del cliente;  
**cliente**: representa la cuenta y subcuenta del cliente del pedido del cliente;  
**classe** y **codice articolo**: representan la clase y el código del artículo;  
**variante**: representa la variante del artículo;  
**quantità**: representa la cantidad aún pendiente de completar de la línea de pedido;  
**disponibilità**: representa la cantidad disponible del artículo en la fecha de mercancía lista de la línea de pedido;  
**unità di misura**: representa la unidad de medida;  
**consegna**: representa la fecha de mercancía lista de la línea de pedido;  
**tipo commessa** y **descrizione commessa**: representan el código y la descripción del tipo de orden asociado al *tipo de pedido de cliente*;  
**descrizione articolo**: representa la descripción del artículo;  
**descrizione conto**: representa la razón social del cliente.  

:::note Nota
La columna **Disponibilidad** resulta igual a cero para todas las líneas en caso de que el indicador *considera la disponibilità dell'articolo* presente en la pestaña **Parámetros** esté desactivado.
:::

*Botones específicos*  

> **considera per commesse**: permite mover las líneas de pedido seleccionadas a la pestaña **riepilogo prototipi commesse** donde podrán ser consideradas por el procedimiento de generación de la orden de producción.  

> **generazione flusso**: el botón se habilita solo si en los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters/) se ha habilitado el indicador *generazione automatica flusso di produzione*. Con este botón es posible lanzar directamente la ejecución del flujo de producción completo y, por lo tanto, la *creación* de las *Órdenes de producción* que serían programadas directamente y, dependiendo de los indicadores posteriores establecidos también en los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters/), eventualmente también se generarían las *Órdenes planificadas de compra, trabajo y producción*, con la posibilidad de definir cuáles se liberen automáticamente.  
Por lo tanto, mediante el uso de este botón, podríamos encontrarnos ya con todas las órdenes planificadas liberadas y las órdenes de producción en estado ejecutivo, omitiendo así todas las fases intermedias.

### Surtido bajo (Sottoscorta) {#safety-stock}

A través de esta pestaña se pueden filtrar las líneas de artículos gestionados a Stock que se quieran analizar mediante el procedimiento de *generazione commesse di produzione*.  
El único **requisito** que permite visualizar el artículo en esta cuadrícula es que tenga, en sus [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), el *Tipo de gestión* en *Stock*.

En el área de filtro se pueden filtrar solamente las líneas de pedidos que se quieran visualizar en base a los *filtros* ingresados.  
**vedi variante**: el indicador activo permite visualizar la variante;  
**Tipo de orden de producción (Tipo commessa di produzione)**: permite decidir el tipo de orden de producción a generar;  
**Bajo punto de reorden hasta (Sotto punto di riordino al)**: representa la fecha hasta la cual no se quiere que los artículos de la cuadrícula queden en situación de surtido bajo.  

Una vez establecidos los filtros necesarios, al hacer clic en el botón **Buscar** se mostrarán en la cuadrícula de resultados todas las líneas de artículos correspondientes a los filtros indicados.

Los datos que se pueden visualizar en la cuadrícula son:  
**classe**, **codice** y **descrizione articolo**;  
**variante**: se visualiza si el indicador homónimo ha sido seleccionado; si se ha decidido en el área de filtro que se muestre;  
**punto di riordino**, **scorta minima** y **giorni di riordino**: se toman del *anagrafica articolo* > pestaña *approvvigionamento*;  
**Consumo medio diario (Consumo medio giornaliero)**: se calcula restando el stock mínimo del punto de reorden y dividiendo el resultado obtenido por los días de reorden;  
**Lote económico de producción (Lotto economico di produzione)** y sus **multipli**: se toman de la pestaña de producción de los [parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo si es de *tipo abastecimiento de producción*, mientras que se obtienen del *proveedor predeterminado* de la pestaña *proveedores preferenciales* del *registro del artículo* en caso de que sea *tipo abastecimiento de compra*;  
**giacenza**: representa el inventario del artículo a la fecha actual;  
**disponibilità iniziale**: representa la disponibilidad del artículo el día en que se lanza el procesamiento;  
**disponibilità finale**: representa la disponibilidad del artículo el día indicado en la casilla **sotto punto di riordino alla data** presente en el área de filtro;  
**disponibilità minima**: representa la disponibilidad mínima que el artículo presenta en el intervalo de tiempo que transcurre entre la fecha de disponibilidad inicial y la fecha de disponibilidad final.  

:::note Nota
Para los documentos sin la Fecha de Entrega, se considera el parámetro *Si no se especifica la fecha de entrega* presente en la pestaña Parámetros.
:::

La *cuadrícula inferior* muestra el detalle de la disponibilidad del artículo seleccionado en la cuadrícula principal.

:::note Nota
En la primera línea de la cuadrícula, la disponibilidad se da por la suma del inventario y de todos los documentos vencidos (con fecha anterior a hoy).
:::

*Botón específico*  

> **considera per commesse**: permite mover las líneas seleccionadas a la pestaña **riepilogo prototipi commesse** donde podrán ser examinadas por el procedimiento de generación de la orden de producción.

Solo las líneas para las cuales el procedimiento considera que se puede crear una orden de producción se transferirán a la pestaña *Resumen de prototipos de órdenes*. El procedimiento propone para cada artículo una orden de producción y trata de asegurar que en el día en que el artículo corra el riesgo de caer por debajo del nivel de stock mínimo, se reponga mediante una orden de producción con la misma fecha que la fecha de surtido bajo. La cantidad de esta orden deberá permitir sobrevivir hasta la fecha de **Bajo punto de reorden** indicada en el área de filtro: obviamente, si el artículo presenta lotes económicos de producción o de compra y múltiplos, estos serán respetados.

### Pronóstico (Previsionale) {#forecast}

En esta pestaña se pueden filtrar las líneas de *Pronósticos de ventas* o del *Plan maestro de producción* que se quieran analizar mediante el procedimiento **generazione commesse di produzione**, utilizando los filtros por artículo y variante.

Las líneas de los *Pronósticos de ventas* que pueden visualizarse en esta pestaña deben cumplir con los siguientes **requisitos**:

- el pronóstico de ventas anual debe estar en estado de *Consolidado*;  
- el pronóstico de ventas anual debe haber sido generado con una *Versión* válida;  
- desde la línea de pronóstico no deben haberse generado aún *Órdenes de producción*;  
- las líneas del *Plan maestro de producción* que pueden visualizarse en esta pestaña no deben haber generado aún *Órdenes de producción*.  

En el área de filtro se pueden filtrar solamente las líneas de pedidos que se quieran visualizar en base a los *filtros* ingresados.  
**vedi variante**: el indicador activo permite visualizar la variante;  
**Mes de finalización de la programación (Mese di fine schedulazione)**: sirve para visualizar en la cuadrícula solo los pronósticos de ventas que lleguen hasta la fecha indicada;  
**tipo commessa**: representa el tipo de orden de producción a generar;  
**tipi ordine**: la cuadrícula permite establecer los *Tipos de pedidos de cliente* que deben ser considerados simultáneamente con las cantidades presentes en los pronósticos de venta, de modo que el procedimiento de creación de la orden genere la orden de producción con una cantidad igual a la mayor, la menor o la suma de las cantidades presentes, para el mismo artículo, en línea de pedido de cliente y/o en pronóstico de producción o plan maestro.

Una vez establecidos los filtros necesarios, al hacer clic en el botón **Buscar** se mostrarán en la cuadrícula de resultados todas las líneas de pronóstico correspondientes a los filtros indicados.

*Campos*  

**classe**, **codice** y **descrizione articolo**;  
**variante**: se visualiza si el indicador homónimo ha sido seleccionado; si se ha decidido en el área de filtro que se muestre;  
**anno**: representa el año del pronóstico de ventas;  
**mese/sett**: representa el número del mes o semana del pronóstico de ventas;  
**Fecha de generación de orden (Data gen. commessa)**: representa la fecha de generación de la orden de producción;  
**Fechas de inicio / fin del pronóstico (Date inizio / fine previsione)**: por ejemplo, si el pronóstico se ha establecido para el mes de mayo, la fecha de inicio será el 01/05 y la fecha de fin será el 31/05;  
**quantità**: representa la cantidad relativa a la línea de pronóstico individual;  
**Cuenta/Subcuenta/Descripción de cuenta (Conto/Sottoconto/Descrizione conto)**: representa la cuenta del cliente relacionada con la línea de pronóstico de ventas (cuando esté presente).  

*Botón específico*  

> **considera per commesse**: permite mover las líneas seleccionadas a la pestaña **riepilogo prototipi commesse** donde podrán ser consideradas por el procedimiento de generación de la orden de producción.

### Resumen de prototipos de órdenes (Riepilogo prototipi commesse)

Esta pestaña presenta las líneas que han sido trasladadas desde las pestañas anteriores y que deben transformarse en órdenes de producción.

La pestaña contiene:  
- la sección **Orden de producción propuesta (Commessa di produzione proposta)** en la que el usuario puede establecer el **Tipo**, el **Año** y el **Número** de la orden de producción a la que se deben agregar las líneas seleccionadas en la misma pestaña **Resumen de prototipos de órdenes**.  
- la cuadrícula de resultados donde se visualizarán las líneas del artículo que han sido trasladadas desde las otras pestañas.

*Campos de la cuadrícula*:  

**dati da**: representa la pestaña de origen de la línea;  
**classe**, **codice articolo** y **descrizione**: representan la clase, el código y la descripción del artículo;  
**variante**: representa la variante del artículo;  
**quantità**: representa la cantidad de la orden que es propuesta por el procedimiento;  
**disponibilità**: representa la cantidad disponible del artículo a la *Fecha de entrega*;  
**Fecha de entrega (Data di consegna)**: representa la fecha de finalización de la orden de producción propuesta (que puede ser modificada manualmente por el usuario);  
**Fecha de inicio del pronóstico (Data inizio previsione)**: representa la fecha de inicio del pronóstico;  
**codice tipo**: representa el código del pedido del cliente;  
**numero ordine cliente**: representa el número del pedido del cliente;  
**Cuenta / Subcuenta / Descripción de cuenta (Conto / Sottoconto / Descrizione conto)**: representan la cuenta del cliente relacionada con la línea de pronóstico de ventas (cuando esté presente);  
**tipo commessa** y **descrizione commessa**: representan el código y la descripción del tipo de orden.  

Después de haber seleccionado las líneas deseadas, el usuario tiene la posibilidad de crear las órdenes de producción según los criterios establecidos en la pestaña **Parámetros**, utilizando el botón **formazione automatica commesse**. El procedimiento presenta, al final del procesamiento, una ventana en la que se especifican los números de las órdenes generadas, ventana en la que el usuario solo debe hacer clic en OK y cerrar.

*Botón específico*  
> **formazione automatica commesse**: llama al procedimiento que genera las órdenes de producción a partir de las líneas seleccionadas.  

### Parámetros

A través de esta pestaña se configuran todos los parámetros relacionados con la gestión de la creación de órdenes de producción y la manera en que deben gestionarse las fases posteriores a la generación de las órdenes mismas. Algunas configuraciones presentes en esta pestaña se toman de la ventana [Parámetros MPS](/docs/configurations/parameters/production/mps-parameters).

**metodo generazione commessa**:  
- **tipo commessa** (Monoproduto / Multiprodotto): se repite el dato que fue establecido en la pestaña [Parámetros MPS](/docs/configurations/parameters/production/mps-parameters). En el momento de la generación de la orden desde la *generazione commesse di produzione*, es posible modificar esta configuración dentro de esta ventana, así como la relacionada con el combo siguiente;  
- **raggruppamento prodotti per**: combo mediante el cual se puede indicar cómo deben agruparse eventualmente los artículos dentro de la misma orden *Monoprodotto* o *Multiprodotto*.  

> Si el tipo de orden es *Monoprodotto*, la única agrupación permitida es la por *Artículo*; este tipo de gestión permite al usuario hacer que el sistema genere automáticamente una serie de órdenes *Monoprodotto*, seleccionando una lista de líneas de *Pedidos de clientes*, líneas provenientes de *Pronósticos de ventas* o del *Plan maestro de producción* o provenientes del *Surtido bajo*, haciendo que cada orden que se generará presente la suma de las cantidades requeridas para el mismo artículo. La fecha de finalización de una orden agrupada es siempre igual a la del requerimiento más cercano a la fecha en que se lanza el procesamiento.  
> Si el tipo de orden es *Multiprodotto*, las agrupaciones pueden realizarse por cliente o proyecto y permiten al usuario incluir en la misma orden *Multiprodotto* múltiples artículos provenientes de líneas de pedido del cliente relacionadas con el mismo cliente, la misma orden de venta o la misma orden de venta del mismo cliente.

**priorità approvvigionamento**: el combo muestra la prioridad de abastecimiento que se había establecido en los [Parámetros MPS](/docs/configurations/parameters/production/mps-parameters) al seleccionar una prioridad entre las codificadas en la tabla *Prioridad de abastecimiento* que se encuentra entre las tablas de la sección *Configuraciones Generales*.

**aggiornamento commesse già esistenti**: las órdenes seleccionadas en la pestaña resumen se añaden a una orden ya existente (indicada en el cuadro *Orden de producción propuesta (Commessa di produzione propost)* de la pestaña **Resumen**), si y solo si está habilitado el indicador **Actualización de órdenes ya existentes** en la pestaña de parámetros. Automáticamente se propondrá una orden ya guardada donde añadir las líneas, si ya existe una con ese tipo y fecha.

A continuación, a través de indicadores específicos, se puede decidir si la orden debe generarse a partir de **Pedidos de clientes** o de un **Pronóstico** (y en el caso del pronóstico si de **Pronósticos de ventas** o del **Plan maestro de producción**), o bien, en última instancia, del **Surtido bajo**. En este último caso se utiliza un algoritmo particular explicado en el párrafo dedicado a la pestaña [Surtido bajo](#safety-stock).

**previsionale**: si el indicador está activo, luego se puede decidir con qué modalidad temporal deben generarse las órdenes de producción, entre las siguientes opciones:  
> **mensile**: en este caso, la orden de producción se generará en el mes en que caiga la fecha de finalización del Pronóstico de Ventas o en el mes en que se haya ingresado la cantidad en el Plan Maestro de Producción. El usuario también puede establecer el día del mes en que la fecha prevista de finalización de la orden debe ser establecida por el procedimiento automático de creación de la orden;  
> **settimanale**: en este caso, se generará una orden de producción para cada semana del mes en que caiga la fecha de finalización del Pronóstico de Ventas o del mes en que se haya ingresado la cantidad en el Plan Maestro de Producción. El usuario también puede establecer el día de la semana en que debe ser establecida la fecha prevista de finalización de la orden por el procedimiento automático de creación de la orden;  
> **reali**: en este caso se generará una orden de producción para cada semana del mes en que cae la fecha de finalización de la *Previsión de Ventas* o del mes en que se ha ingresado la cantidad en el *Plan Maestro de Producción*, pero considerando exactamente la fecha de finalización de cada línea de la *Previsión de Ventas*;  
> **Semanal considerando días de producción de la zona de entrega (Settimanale considerando gg di produzione della zona di consegna)**: en este caso, se generará una orden de producción teniendo en cuenta los días de producción de la zona de entrega asociada al cliente para el cual se ha creado la *Previsión de Ventas*;  
> **raggruppamento previsioni per clienti**: el indicador sirve para garantizar que las órdenes de producción se generen agrupando las líneas de pronóstico de los mismos clientes.

**Si no se especifica la fecha de entrega** la sección tiene que ver exclusivamente con la pestaña *ordini clienti* y la pestaña *sottoscorta* de la *generazione commesse di produzione*. Aquí el usuario puede decidir si, en caso de que falte la *Fecha de mercancía lista* en la línea del pedido del cliente que debe ser analizada por el procedimiento, se debe ignorar la línea sin fecha, o si debe aceptarse cierta fecha como fecha prevista de finalización de la orden que se generará, o si debe aceptarse cierta fecha como fecha prevista de inicio de la orden que se generará (en estos dos últimos casos las fechas deben seleccionarse en los dos combos dedicados).

**considera la disponibilità dell'articolo**: el indicador permite, si se activa, que en todas las pestañas de la *generazione commesse di produzione* se muestre la disponibilidad del artículo a la *Fecha prevista de finalización* de la orden de producción que debe ser creada. Lo mismo sucede también en la pestaña *Resumen de prototipos de órdenes*. La disponibilidad se considera en función de los indicadores activados en los *Parámetros MPS* (Trabajo, Compras, Ventas, Producción, Almacén). En este caso, cuando se va a crear la orden, el procedimiento tendrá en cuenta la disponibilidad creando la orden para la diferencia entre la demanda y la disponibilidad de ese artículo.

**magazzini di pianificazione commesse**: en la cuadrícula aparecen los almacenes que se han ingresado en la ventana del [Cálculo de Disponibilidad](/docs/erp-home/registers/items/calculate-availability). Desde esta pestaña **Parámetros** solo se pueden visualizar y no modificar.

**sito produttivo**: esta información, si se indica, se utiliza para que el procedimiento de generación de órdenes a partir del pedido del cliente considere únicamente las líneas de pedido de cliente confirmadas, donde el almacén de extracción previsto está asociado a ese sitio productivo.

**Cálculo de cantidad en base al lote económico (Calcolo quantità in base al lotto economico)**: si se activa, este indicador garantiza que el procedimiento genere la orden de producción considerando el lote económico de compra ingresado en la pestaña [Proveedores preferenciales](/docs/erp-home/registers/items/create-new-item) en el proveedor designado como predeterminado si el artículo analizado en *generazione commesse di produzione* tiene como *Tipo de abastecimiento*: *Compra* o *Trabajo*, y el lote económico de producción ingresado en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) si el artículo objeto de la orden tiene como *Tipo de abastecimiento*: *Producción*.  

**Cálculo de cantidad en función de los múltiplos del artículo (Calcolo quantità in base ai multipli dell'articolo)**: si se activa, este indicador asegura que el procedimiento genere la orden de producción considerando también los múltiplos del lote económico de compra ingresado en la pestaña de proveedores preferenciales sobre el proveedor designado como predeterminado de los artículos si el artículo objeto de la orden tiene como *Tipo de abastecimiento*: *Compra* o *Trabajo*, y los múltiplos del lote económico de producción ingresados en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) si el artículo analizado en *generazione commesse di produzione* tiene como *Tipo de abastecimiento*: *Producción*. Obviamente, este indicador solo puede activarse si está activo el indicador mencionado en el párrafo anterior.

**reintegro scorta minima dell'articolo**: si se activa, este indicador permite al usuario hacer que para el artículo analizado en *generazione commesse di produzione* se reponga el stock mínimo ingresado en la *Registro del artículo > pestaña Abastecimiento*.  

**reintegro punto di riordino dell'articolo**: si se activa, este indicador permite al usuario hacer que para el artículo analizado en *generazione commesse di produzione* se reponga el punto de reorden ingresado en la *Registro del artículo > pestaña Abastecimiento*.  

**escludi ordini in ritardo**: si se activa, este indicador permite al usuario hacer que el procedimiento de generación de órdenes de producción excluya del cálculo de la disponibilidad del artículo analizado las cantidades provenientes de las líneas de pedidos de cliente cuya *Fecha de mercancía lista* es anterior a la fecha actual.

Una vez establecidos los parámetros, se podrá proceder con la creación de etiquetas, en las respectivas pestañas de los [Pedidos de clientes](#sales-orders), del [Pronóstico](#forecast) y del [Surtido bajo](#safety-stock).

*Botón específico*  
> **formazione automatica commesse**: llama al procedimiento que genera las órdenes de producción a partir de las líneas seleccionadas.  

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).