---
title: Costeo
sidebar_position: 6
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El **costeo<!-- Costificazione -->** de las órdenes de producción<!-- commesse di produzione --> representa un elemento crucial en la gestión eficaz de los procesos productivos empresariales.         
Este sistema de gestión permite establecer, monitorear y comparar los costos previstos y reales asociados a una orden<!-- commessa -->, proporcionando una visión clara y detallada de los recursos utilizados.         
A través de una interfaz estructurada, el sistema permite configurar parámetros preliminares, gestionar documentos e ingresar o modificar costos adicionales, tanto a nivel global como específico para cada orden<!-- commessa -->.          
La posibilidad de analizar los costos de manera sintética y analítica, y de realizar correcciones y ahorros, hace que el **costeo<!-- Costificazione -->** sea una herramienta esencial para mantener la competitividad y eficiencia productiva.
:::

**Parametrizaciones preliminares<!-- Parametrizzazioni preliminari -->**   

Antes de proceder, ver lo indicado en las siguientes páginas respecto al *costeo de órdenes de producción<!-- Costificazione delle commesse di produzione -->*:

> [Parámetros MS -> pestaña costeo de orden<!-- Parametri MS -> tab costificazione commessa -->](/docs/configurations/parameters/production/mps-parameters)  
> [Tipo de costeo de orden<!-- Tipo costificazione commessa -->](/docs/configurations/tables/production/production-job-order-cost-type)     
> [Tipos de documentos<!-- Tipi documenti -->](/docs/configurations/tables/production/documents-types)     
> [Parámetros de subcontratación -> Valoración procesamiento materiales a costo<!-- Parametri conto lavoro -> Valor. lavorazione materiali a costo -->](/docs/configurations/parameters/production/subcontractor-parameters/)       

*Botones específicos* <!-- Pulsanti specifici -->:
 
> **Costos adicionales<!-- Costi aggiuntivi -->**: permite ingresar costos adicionales que pueden proponerse por defecto en cada costeo posterior (estos costos no están ligados a la orden<!-- commessa --> individual, sino que son globales). Estos costos se dividen en *costos directos<!-- Costi diretti -->*, *costos generales<!-- Costi generali -->* y *otros costos<!-- Altri costi -->*. Estos serán reportados por defecto en las secciones correspondientes de costos previstos y reales en la pestaña *Costos totales<!-- Costi totali -->*;     
> **Ejecutar costeo<!-- Esegui costificazione -->**: permite lanzar el procedimiento de costeo de órdenes<!-- commesse -->;    
> **Insertar costeo<!-- Inserisci costificazione -->**: permite ingresar un nuevo costeo; automáticamente se ingresarán todos los datos por defecto introducidos en la fase de parametrización preliminar, los cuales por supuesto pueden ser modificados manualmente para el costeo individual;     
> **Eliminar costeo<!-- Cancella costificazione -->**: permite eliminar un costeo ya creado;     
> **Desglosar costeo<!-- Esplodi costificazione -->**: permite desglosar el árbol de documentos de un costeo ya creado.

:::note Nota
La pestaña **Costeo<!-- Costificazione -->** está presente tanto en la gestión de órdenes mono-producto como en la de multi-producto; en el caso de multi-producto el costeo tomará en examen todos los artículos presentes en esa orden<!-- commessa -->.
::: 

Esta pestaña consta de una sección principal que contiene la información relativa al costeo seleccionado y de una serie de pestañas inferiores: **Detalle de costos<!-- Dettaglio costi -->**, **Costos totales<!-- Costi totali -->** y **Análisis de costos<!-- Analisi costi -->**.          
En la sección de encabezado hay una cuadrícula que contiene la lista de todas las valoraciones lanzadas para esa orden<!-- commessa -->, mientras que en la parte derecha se muestran las informaciones generales relativas al costeo seleccionado.             
En la barra de herramientas están presentes los botones que permiten abrir los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo<!-- articolo -->, la [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) y la [Ruta de fabricación<!-- Ciclo di lavoro -->](/docs/erp-home/registers/production/routes/new-route). 
Con el botón **Insertar costeo<!-- Inserisci costificazione -->**, automáticamente se creará un nuevo costeo y se introducirán todos los datos por defecto incluidos en la fase de parametrización preliminar, que aún podrán modificarse manualmente para la fila individual.           
Al seleccionar una fila de costeo se puede desglosar el árbol de documentos con el botón **Desglosar costeo<!-- Esplodi costificazione -->**, o eliminarlo con el botón **Eliminar costeo<!-- Cancella costificaizone -->**.        
Con el botón **Costos adicionales<!-- Costi aggiuntivi -->**, por el contrario, se pueden ingresar costos adicionales que podrán proponerse por defecto en cada costeo posterior (estos costos no están ligados a la orden<!-- commessa --> individual, sino que son globales). Estos se dividen en *Costos directos<!-- Costi diretti -->*, *Costos generales<!-- Costi generali -->* y *Otros costos<!-- Altri costi -->*. Estos serán reportados por defecto en las respectivas secciones de costos previstos y reales en la pestaña **Costos totales<!-- Costi totali -->**. De otro modo, siempre será posible introducirlos o modificarlos manualmente en la respectiva sección de la pestaña de costos totales.           
Una vez definidos todos los parámetros, para ejecutar o volver a ejecutar un costeo, basta con seleccionarlo y presionar el botón **Ejecutar costeo<!-- Esegue costificazione -->**.

## Detalle de costos<!-- Dettaglio costi -->

En la pestaña de detalle de costos se muestran las informaciones detalladas de los costos vinculados al costeo seleccionado en la parte superior del formulario.
En la tabla de la izquierda se puede visualizar el árbol de documentos que componen el costeo con la siguiente información:
**Tipo de documento<!-- Tipo documento -->**: indica el tipo de documento;     
**Año<!-- Anno -->**: indica el año del documento;     
**Número<!-- Numero -->**: indica el número del documento;     
**Lote<!-- Lotto -->**: indica el número de lote del documento (si existe);     
**Tipo<!-- Tipo -->**: indica el código de la tipología del documento;    
**Clase<!-- Classe -->**: indica la clase del artículo presente en el documento;     
**Código de artículo<!-- Codice articolo -->**: indica el código del artículo presente en el documento;    
**Variante<!-- Variante -->**: indica la variante del artículo presente en el documento;      
**U.M.**: indica la unidad de medida del artículo presente en el documento;      
**Cantidad<!-- Quantità -->**: indica la cantidad del artículo presente en el documento;      
**Costo total previsto<!-- Cst. tot. previsto -->**: indica el costo total estimado (previsto) del artículo presente en el documento;      
**Costo total real<!-- Cst. tot. effettivo -->**: indica el costo total real del artículo presente en el documento;      
**Descripción del artículo<!-- Descrizione articolo -->**: indica la descripción del artículo presente en el documento;      
**Descripción de la variante<!-- Descrizione variante -->**: indica la descripción de la variante del artículo presente en el documento.      

Una vez seleccionado un documento del árbol, en la parte derecha del formulario se visualizan todas las informaciones detalladas relativas al mismo, subdivididas por:

#### *Procesos internos*<!-- Lavorazioni interne -->  

**C.D.L.**: indica el código del centro de trabajo;    
**Máquina<!-- Macchina -->**: indica el código de la máquina;     
**Grp MDO**: indica el código del grupo de mano de obra;     
**Ref. Documento<!-- Rif. Documento -->**: indica la referencia del documento;    
**U.M. Tiempos<!-- U.M. Tempi -->**: indica la unidad de medida de los tiempos;    
**T. Setup previsto<!-- T. Setup previsto -->**: indica el tiempo de setup previsto;     
**T. Setup efectivo<!-- T. Setup effettivo -->**: indica el tiempo de setup real;    
**T. Máquina previsto<!-- T. Macchina previsto -->**: indica el tiempo de máquina previsto;    
**T. Máquina efectivo<!-- T. Macchina effettivo -->**: indica el tiempo de máquina real;     
**T. Mano de obra prevista<!-- T. MDO previsto -->**: indica el tiempo de mano de obra previsto;    
**T. Mano de obra efectiva<!-- T. MDO effettivo -->**: indica el tiempo de mano de obra real;    
**Descripción C.D.L.<!-- Descrizione C.D.L. -->**: indica la descripción del centro de trabajo; 
**Descripción de máquina<!-- Descrizione macchina -->**: indica la descripción de la máquina;     
**Descripción Grp. MDO<!-- Descrizione Grp. MDO -->**: indica la descripción del grupo de mano de obra;        
**Costo total previsto<!-- Cst. tot. previsto -->**: indica el costo total previsto;    
**Costo total real<!-- Cst. tot. effettivo -->**: indica el costo total real. 

:::note Nota
En el caso de que el centro de trabajo real sea diferente al previsto, en esta tabla se mostrarán dos filas, una con el centro de trabajo previsto y sus respectivos costos y otra con el centro de trabajo real.
::: 

#### *Procesos externos*<!-- Lavorazioni esterne -->

**Tercero<!-- Terzista -->**: indica el tercero;     
**Ref. Documento<!-- Rif. Documento -->**: indica la referencia del documento;    
**U.M.**: indica la unidad de medida de gestión;    
**Cantidad prevista<!-- Q.tà prevista -->**: indica la cantidad prevista a producir;    
**Cantidad real<!-- Q.tà effettiva -->**: indica la cantidad efectivamente producida;    
**Precio unitario previsto<!-- Prz. unit. previsto -->**: indica el precio unitario previsto;    
**Precio unitario real<!-- Prz. Unit. effettivo -->**: indica el precio unitario real;    
**Costo total previsto<!-- Cst. tot. previsto -->**: indica el costo total previsto;    
**Costo total real<!-- Cst. tot. effettivo -->**: indica el costo total real.    

#### *Materiales*<!-- Materiali -->   

**Clase<!-- Classe -->**: indica la clase del artículo;     
**Código de artículo<!-- Codice articolo -->**: indica el código del artículo;    
**Descripción del artículo<!-- Descrizione articolo -->**: indica la descripción del artículo;      
**Ref. Documento<!-- Rif. Documento -->**: indica la referencia del documento;    
**U.M.**: indica la unidad de medida de gestión;    
**Cantidad prevista<!-- Q.tà prevista -->**: indica la cantidad prevista a comprar;    
**Cantidad real<!-- Q.tà effettiva -->**: indica la cantidad real comprada;    
**Precio unitario previsto<!-- Prz. unit. previsto -->**: indica el precio unitario previsto;    
**Precio unitario real<!-- Prz. Unit. effettivo -->**: indica el precio unitario real;     
**Variante<!-- Variante -->**: indica la variante del artículo;     
**Descripción de la variante<!-- Descrizione variante -->**: indica la descripción de la variante del artículo;   
**Costo total previsto<!-- Cst. tot. previsto -->**: indica el costo total previsto;    
**Costo total real<!-- Cst. tot. effettivo -->**: indica el costo total real.   

En la parte inferior del formulario existe un expander denominado **Detalle de costo de documento<!-- Dettaglio costo documento -->** en el que se reportan las siguientes informaciones:

**Costo unitario de materiales previsto / real<!-- Costo materiali preventivo / effettivo unitario -->**: indica el costo unitario de los materiales previsto / real relativo al documento seleccionado;    
**Costo unitario de procesamiento previsto / real<!-- Costo lavorazione preventivo / effettivo unitario -->**: indica el costo unitario de los procesos (internos y externos) previsto / real relativo al documento seleccionado;  
**Total costo unitario previsto / real<!-- Totale costo preventivo / effettivo unitario -->**: indica el coste unitario total (materiales y procesos) previsto / real relativo al documento seleccionado;    
**Costo total de materiales previsto / real<!-- Costo materiali preventivo / effettivo totale -->**: indica el coste total de los materiales previsto / real relativo al documento seleccionado;    
**Costo total de procesamiento previsto / real<!-- Costo lavorazione preventivo / effettivo totale -->**: indica el coste total de los procesos (internos y externos) previsto / real relativo al documento seleccionado;  
**Total costo total previsto / real<!-- Totale costo preventivo / effettivo totale -->**: indica el coste total (materiales y procesos) previsto / real relativo al documento seleccionado;  

## Costos totales<!-- Costi totali -->

En esta pestaña se reportan de manera resumida los costos previstos y reales referentes al costeo seleccionado.  
En particular, para cada sección (previsto y real), se reportan los siguientes campos:     
**Costo industrial<!-- Costo industriale -->**: total de los costos de materiales y costos de procesos (internos y externos);     
**Total de costos directos<!-- Totale costi diretti -->**: total de los costos introducidos en la sección **Costos directos<!-- Costi diretti -->**;    
**Total costo directo de la orden<!-- Totale costo diretto commessa -->**: total del *Costo industrial<!-- Costo industriale -->* y del *Total de costos directos<!-- Totale costi diretti -->*;     
**Recargo<!-- Ricarico -->**: permite indicar el tipo de recargo si es porcentaje o en valor, y también su propio valor;    
**Total costo recargado<!-- Totale costo ricaricato -->**: total del *Total costo directo de la orden<!-- Totale costo diretto commessa -->* y del *Recargo<!-- Ricarico -->*;     
**Total de costos generales<!-- Totale costi generali -->**: total de los costos introducidos en la sección **Costos generales<!-- Costi generali -->**;      
**Total de otros costos<!-- Totale altri costi -->**: total de los costos introducidos en la sección **Otros costos<!-- Altri costi -->**;     
**Corrección<!-- Correzione -->**: permite ingresar un valor para corregir el *Total costo recargado<!-- Totale costo ricaricato -->*;      
**Redondeo<!-- Arrotondamento -->**: permite decidir si redondear al alza o a la baja y el orden de magnitud;     
**Total costo de la orden<!-- Totale costo commessa -->**: total del *Total costo recargado<!-- Totale costo ricaricato -->*, *Total de costos generales<!-- Totale costi generali -->*, *Total de otros costos<!-- Totale altri costi -->*, *Corrección<!-- Correzione -->* y *Redondeo<!-- Arrotondamento -->*. El *Total costo de la orden<!-- Totale costo commessa -->* se muestra en rojo en la sección de *Costos reales<!-- Costi consuntivi -->* cuando este es superior al presente en la sección de *Costos previstos<!-- Costi preventivi -->*.           

:::note Nota
Los campos que se reportan y alinean automáticamente, entre la sección de *Costos previstos<!-- Costi preventivi -->* y la de *Costos reales<!-- Costi consuntivi -->*, son: el *Recargo<!-- Ricarico -->* (tipo de recargo y valor), *Corrección<!-- Correzione -->* y *Redondeo<!-- Arrotondamento -->* (tipo y valor de redondeo). En todo caso, en la sección de *Costos reales<!-- Costi consuntivi -->* es posible variarlos manualmente para diferenciarlos de los valores ingresados en la sección de *Costos previstos<!-- Costi preventivi -->*.
::: 

Con el botón **Costos adicionales<!-- Costi aggiuntivi -->** se pueden introducir *Costos directos<!-- Costi diretti -->*, *Costos generales<!-- Costi generali -->* y *Otros costos<!-- Altri costi -->* que pueden proponerse por defecto, tanto en los costos previstos como en los reales.  
Para cada uno de estos costos es posible definir si es de tipo porcentaje o valor, indicando también el propio valor.    

Para toda la información necesaria para la creación de estos costos, consultar la página relativa a [Elementos de costo<!-- Voci di costo -->](/docs/configurations/tables/general-settings/cost-elements).         

## Análisis de costos<!-- Analisi costi -->

En esta pestaña se ponen en evidencia todos los componentes de costo respecto a los costos previstos y reales, usando dos tipos de análisis:     

> **Sintética**: en este tipo de análisis se reporta el *Costo industrial<!-- Costo industriale -->*, por tanto como suma de los costos de materiales y los costos de procesamiento, además se reportan los *Costos directos<!-- Costi diretti -->*, *Costos generales<!-- Costi generali -->* y *Otros costos<!-- Altri costi -->* y finalmente el total de *Recargos<!-- Ricarichi -->* y *Correcciones<!-- Correzioni -->*;     
> **Analítica**: en este tipo, en cambio, se reportan en el gráfico todos los conceptos por separado, por lo tanto el *Costo industrial<!-- Costo industriale -->* se subdivide en *Costo de materiales<!-- Costo materiali -->*, *Costo de procesamiento interno<!-- Costo lavorazione interne -->* y *Costo de procesamiento externo<!-- Costo lavorazioni esterne -->*; también los conceptos relativos a *Recargos<!-- Ricarichi -->* y *Correcciones<!-- Correzioni -->* se reportan por separado; por supuesto también se reportan los *Costos directos<!-- Costi diretti -->*, *Costos generales<!-- Costi generali -->* y *Otros costos<!-- Altri costi -->*.

Estos dos tipos de análisis pueden compararse mediante una *distribución de costos<!-- ripartizione dei costi -->* con un gráfico de pastel, o bien con una *comparación de costos<!-- raffronto dei costi -->* usando un gráfico de barras.

## Modalidad de cálculo de los costos previstos y reales (consuntivos)

Los documentos previstos que participan en el cálculo de los costos previstos son: 
- Orden<!-- Commessa -->
- Orden planificada<!-- Ordine pianificato -->
- Solicitud de compra<!-- Richiesta di acquisto -->
- Orden de proveedor<!-- Ordine fornitore -->
- Orden de producción<!-- Ordine di produzione -->
- Orden de subcontratación<!-- Ordine di conto lavoro -->

Los documentos reales que participan en el cálculo de los costos reales son: 
- Nota de entrega de materiales<!-- DDT di consegna materiale -->
- Retornos de subcontratación<!-- Rientri di conto lavoro -->
- Declaraciones de producción<!-- Dichiarazioni di produzione -->

### Procesos internos<!-- Lavorazioni interne -->

Para el cálculo del costo de procesamiento de una fase prevista, la máxima prioridad se da al valor indicado en el campo **Costo unitario** presente en la [Ruta de fabricación](/docs/erp-home/registers/production/routes/new-route); por lo tanto, en este caso no se consideran los tiempos y costos asociados a la máquina<!-- macchina --> o al grupo de mano de obra<!-- gruppo manodopera -->.
En caso de que el **Costo unitario** presente en la [Ruta de fabricación](/docs/erp-home/registers/production/routes/new-route) sea nulo o cero, los costos de los procesos internos se toman de la [Máquina](/docs/configurations/tables/production/machines) y del [Grupo de mano de obra](/docs/configurations/tables/production/labour-group) que se planearon utilizar en la ruta para los costos previstos y de los que realmente se utilizaron en las declaraciones de producción para los costos reales.
A la [Máquina](/docs/configurations/tables/production/machines) y al [Grupo de mano de obra](/docs/configurations/tables/production/labour-group) se les asocia un [Centro de costo](/docs/configurations/tables/production/cost-center) en sus respectivas tablas, donde a este [Centro de costo](/docs/configurations/tables/production/cost-center) se le asocia una determinada tarifa.
Obviamente, el costo indicado en el [Centro de costo](/docs/configurations/tables/production/cost-center) será multiplicado por el tiempo indicado en la ruta para los costos previstos, mientras que para los costos reales será multiplicado por el tiempo efectivamente empleado reportado en las declaraciones de producción.
Además, es importante haber ingresado el número de máquinas y el número de operadores tanto en la ruta como en la declaración de producción; haber generado el [Calendario de fábrica](/docs/configurations/tables/production/factory-calendar) y los de [Capacidades productivas](/docs/configurations/tables/production/productive-capacity-calendar); y también haber indicado dentro de los [Centros de trabajo](/docs/erp-home/registers/production/routes/work-center) los respectivos horarios de inicio y fin (incluyendo la pausa).

### Procesos externos<!-- Lavorazioni esterne -->

Para el cálculo del costo de procesamiento de una fase prevista, la máxima prioridad se da al valor indicado en el campo **Costo unitario** presente en la [Ruta de fabricación](https://docs.fluentis.com/FluentisErp/docs/erp-home/registers/production/routes/new-route); por lo tanto, en este caso no se consideran los costes presentes en las listas de precios de subcontratación<!-- listini ci conto lavoro -->.       
En caso de que el **Costo unitario** presente en la [Ruta de fabricación](https://docs.fluentis.com/FluentisErp/docs/erp-home/registers/production/routes/new-route) sea nulo o cero, el costo previsto se basa en el precio de lista de subcontratación<!-- conto lavoro --> (mientras no se haya creado la orden de subcontratación<!-- Ordine di conto lavoro -->), en el momento en que se cree la orden de subcontratación<!-- Ordine di conto lavoro --> se basará en el precio indicado en la línea del artículo<!-- articolo -->.
En cuanto al costo real, el costo se toma del valor indicado en el documento de retorno de subcontratación<!-- rientro di conto lavoro -->.

### Materiales

El costo del material se basa en el **Tipo de costo<!-- Tipo costo -->** que hemos seleccionado en el costeo, así sea último, medio o estándar.
Además, también se basa en las opciones **Costo de lote<!-- Costo del lotto -->** y **Costo de la orden<!-- Costo della commessa -->**. Si ambas están activadas, el procedimiento valorará el costo del material según el tipo de costo seleccionado considerando los valores sólo de esa orden<!-- commessa --> específica y para ese lote<!-- lotto --> específico, obviamente entre los movimientos realizados con causales de carga con la opción *actualizar costo último o medio* (según el valor indicado en el campo **Tipo de costo<!-- Tipo di costo -->**) y la opción de *interés fiscal* activas; si no encuentra ningún movimiento con estas características va a buscar entre los movimientos que han cargado ese lote<!-- lotto -->, si tampoco encuentra esos busca entre todos los movimientos de ese artículo<!-- articolo -->. Si no hay ningún movimiento de carga para ese artículo<!-- articolo -->, revisa en los respectivos campos de costo último, medio y estándar de la ficha del artículo<!-- anagrafica dell'articolo -->.
En el caso del costo previsto, los valores se tomarán de la [Solicitud de compra](/docs/purchase/purchase-requests/general-overview) y la [Orden de proveedor](/docs/purchase/purchase-orders/general-overview) y se multiplicarán por los consumos previstos en la [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/new-assemble); mientras que para los costos reales se tomarán de las [Notas de entrega de compra<!-- DDT di acquisto -->](/docs/purchase/purchase-delivery-note/general-overview) del material y se multiplicarán por las cantidades utilizadas en las [Declaraciones de producción<!-- Dichiarazioni di produzione -->](/docs/production/pp-production-in-progress/signals/sisgnals).

Para los detalles sobre el funcionamiento común de los formularios hágase referencia al enlace [Funcionalidad, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).