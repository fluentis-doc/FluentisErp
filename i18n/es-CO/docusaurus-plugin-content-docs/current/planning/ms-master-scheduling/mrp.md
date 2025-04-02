---
title: MRP (MRP)
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La función **MRP** (**Planificación de Recursos de Manufactura**) de Fluentis permite a los usuarios analizar la disponibilidad de materiales y recursos productivos en función de la planificación de la producción. A través de este procedimiento, el operador recibe sugerencias sobre cómo optimizar la gestión de los materiales, incluidas las indicaciones para anticipar suministros, integrar cantidades necesarias o anular pedidos innecesarios. El MRP de Fluentis tiene en cuenta las restricciones de producción, las materias primas, los semiterminados disponibles o pedidos, permitiendo así un control eficiente de cada orden activa. Este sistema busca optimizar los inventarios de la empresa, reduciendo los niveles de almacén y mejorando la eficiencia operativa.
:::

Este procedimiento permite al usuario tener un análisis de la correcta disponibilidad de materiales y recursos productivos en función de la planificación de la producción. A través de este procesamiento, el operador puede recibir una serie de sugerencias relacionadas con la anticipación de ciertos suministros de materiales, la integración de cantidades necesarias, así como proceder a anular pedidos de artículos innecesarios para facilitar el control y la gestión de las operaciones.
El MRP realiza una planificación de producción teniendo en cuenta las diferentes restricciones de producción, las materias primas y semiterminados disponibles y aquellos que han sido pedidos.
Gracias a este procedimiento, el operador es capaz de analizar la cobertura productiva de cada orden activa, gestionando y coordinando todos los procesos relacionados con la adquisición, la producción y la entrega del producto terminado.
El principio básico del sistema de necesidades materiales de producción es la optimización de los inventarios basado en las necesidades empresariales, lo que se refleja en una disminución de los niveles de inventario y un consecuente aumento de la eficiencia.
En esencia, a través de los algoritmos de esta función, el MRP de Fluentis es capaz de conocer el compromiso de cada material presente en el almacén y la disponibilidad en la fecha requerida.

### M.R.P.

En esta pestaña es posible consultar los resultados seleccionando el procesamiento entre los que están presentes en el historial.  
Se recuerda que los procesos se mantienen en el historial por el número de días indicado en el campo **Días de historial MRP a mantener**, presente en los [Parámetros de requerimiento de materiales](/docs/configurations/parameters/production/resource-requirements-parameters).  
Este formulario se compone de un área de filtro donde es posible filtrar por artículo, tipo de aprovisionamiento o también por tipo de sugerencia dada por el procedimiento.  
En la parte derecha hay una lista de todos los artículos que el procedimiento ha procesado y para cada uno de ellos se indican también las acciones propuestas.  
Una vez seleccionada una de estas filas, en la tabla central se repiten toda la información relacionada con las acciones a tomar, donde para cada una se muestra la disponibilidad, la necesidad y la posible necesidad confirmada si el procedimiento fue activado con el indicador **Diferencia de demanda de producción confirmada** activo; mientras que en la tabla inferior, encontramos toda la información relacionada con todos los documentos vinculados al artículo, con la indicación de demanda, oferta y disponibilidad en la fecha indicada.  
Al seleccionar un pedido planificado creado por el procedimiento MRP es posible liberarlo presionando el botón **Liberación de pedidos planificados**.

### Orden (Commessa)

En esta pestaña es posible filtrar y seleccionar las órdenes de producción que se desea procesar, de modo que se opere de manera parcial sobre algunas órdenes seleccionadas o de manera global sobre todas las órdenes presentes en producción.

### Parámetros (Parametri)

A través de esta pestaña se configuran todos los parámetros generales que conciernen al procedimiento MRP. Algunas configuraciones presentes en esta pestaña son tomadas de la ventana [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) y son relativas al artículo específico.

**pianificazione**:  
> **pianificare fino al**: indica la fecha hasta la cual el sistema deberá considerar los documentos introducidos. Esta se propone como el último día del año si la fecha actual es antes del treinta de junio del año en curso, de lo contrario, después del primero de julio se propone el último día del año siguiente.  
> **Indicador Materiales (Flag Materiali)**: si está habilitado, en los pedidos planificados creados se incluirán los materiales a consumir. En caso de que el indicador no esté activo, los pedidos planificados aún se crearán pero sin los materiales dentro;  
> **Indicador Recursos (Flag Risorse)**: si está habilitado, en los pedidos planificados creados también se incluirán las fases de trabajo. En caso de que el indicador no esté activo, los pedidos planificados se crearán aún así, pero sin las fases de trabajo dentro;  
> **Indicador Pedidos planificados de compra (Flag Ordini pianificati di acquisto)**: si está habilitado, se considerarán los pedidos planificados de compra en la planificación;  
> **Indicador Pedidos planificados de producción (Flag Ordini pianificati di produzione)**: si está habilitado, se considerarán los pedidos planificados de producción en la planificación;  
> **Indicador Pedidos planificados de trabajo por encargo (Flag Ordini pianificati di conto lavoro)**: si está habilitado, se considerarán los pedidos planificados de trabajo por encargo en la planificación;  

**Para documentos sin fechas necesarias:**  
> **Pedidos de proveedores y solicitudes de compra (Ordini fornitori e richieste di acquisto)**: es posible decidir no considerar los artículos sin fecha de recepción prevista, o considerar como fecha de entrega prevista la que se indique manualmente en esta sección;  
> **ordini clienti**: es posible decidir no considerar los artículos sin fecha de recepción prevista, o considerar como fecha de entrega prevista la que se indique manualmente en esta sección;  

**considera le disponibilità provenienti da**:  
> **acquisti**: si está activado, el indicador permite que los documentos del área de gestión *Compras* se tengan en cuenta durante el procesamiento del procedimiento MRP;  
> **vendite**: si está activado, el indicador permite que los documentos del área de gestión *Ventas* se tengan en cuenta durante el procesamiento del procedimiento MRP;  
> **magazzino**: si está activado, el indicador permite que los documentos del área de gestión *Almacén* se tengan en cuenta durante el procesamiento del procedimiento MRP;  
> **conto lavoro**: si está activado, el indicador permite que los documentos del área de gestión *Trabajo por encargo* se tengan en cuenta durante el procesamiento del procedimiento MRP;  
> **pianificazione**: si está activado, el indicador permite que los documentos del área de gestión *Planificación*, (es decir, Órdenes de Producción, Órdenes Planificadas de Compra, Trabajo por encargo y/o Producción), se tengan en cuenta durante el procesamiento del procedimiento MRP;  
> **produzione**: si está activado, el indicador permite que los documentos del área de gestión *Producción* Liberada (es decir, Órdenes de Producción), se tengan en cuenta durante el procesamiento del procedimiento MRP;  

**considera anche le alternative dei materiali**: *EN DESARROLLO*  
**Considerar también las fases alternativas (Considera anche le fasi alternative)**: *EN DESARROLLO*  

**lettura distinte/cicli**:  
> **versione**: indica la versión predeterminada a tener en cuenta para la lista/ciclo;  

**considera le quantità in base al lotto economico**: si está activado, el indicador permite que para el artículo se considere el lote económico (es decir, la cantidad mínima) de producción o compra;  
**considera i multipli del lotto economico**: si está activado, el indicador permite que para el artículo se considere el múltiplo del lote económico de producción o compra;  
**Reabastecer el stock mínimo del artículo (Reintegro scorta minima dell’articolo)**: si está activado, el indicador permite que para el artículo se reabastezca el stock mínimo establecido en su registro, pestaña *Aprovisionamiento*;  
**Considerar índice de cobertura (Considera indice di copertura)**: si está activado, el indicador permite que para el artículo se considere el índice de cobertura establecido en su registro, pestaña *Aprovisionamiento*; el índice de cobertura se expresa en semanas y cuando se indica, significa que le estamos diciendo al sistema que cubra la necesidad para las semanas indicadas en este campo;  
**senza suggerimenti**: si está activo, el MRP no hace propuestas de acciones de aumento, disminución, cancelación, adelanto y postergación sobre los pedidos planificados ya creados;  
**considera passato**: si está activo, para aquellos documentos con fecha de entrega prevista anterior a la fecha actual (hoy), considera la disponibilidad también en el pasado; si no está activo, todos los documentos pasados (respecto a hoy) se considerarán con fecha de entrega prevista hoy;  
**differenzia domanda di produzione confermata**: si está activo, el MRP se ejecuta dos veces; la primera ejecución considera solamente las necesidades provenientes de documentos ejecutivos (áreas: SCM - Compras, SCS - Trabajo por encargo y MES - Producción), generando pedidos planificados, si es necesario, valorando también el campo "cantidad confirmada" (presente en el pedido planificado recién creado); esta primera ejecución genera los documentos estrictamente necesarios para satisfacer la demanda de documentos más urgentes, es decir, aquellos ejecutivos.
La segunda ejecución toma en cuenta las necesidades provenientes de todos los documentos, incluyendo las Órdenes de producción; esta segunda ejecución genera los documentos faltantes sin embargo optimizándolos con los generados en la primera ejecución para poder dar la posibilidad de confirmarlos/liberarlos por separado;  
**considera articoli privi di commessa**: si está activo, durante el procesamiento del procedimiento MRP se tendrán en cuenta todos los artículos con política de gestión previsional y necesidad (excluyendo los que están archivados y/o ficticios) y con política de gestión por orden (solo si con el indicador *Considerar el artículo en el cálculo MRP* activo en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo), incluso si son sin orden;  
**controllo fabbisogni con generazione ordini pianificati**: permite elegir si generar los pedidos planificados o no. Si no está activo, solo se proponen las sugerencias de creación de los pedidos planificados; cabe señalar que los pedidos planificados creados por el MRP no tienen referencias a órdenes;  
**articoli a scorta**: toma todos los artículos que tienen política de gestión "En stock" en los parámetros MRP del artículo; además, en los parámetros MRP al menos uno entre los parámetros de stock mínimo y punto de reorden debe estar establecido;  
**Tolerancia para la ocupación de C.d.L. (Tolleranza per l’occupazione dei C.d.L.)**: se utiliza en la generación de ocupación para las fases de los pedidos planificados de producción para definir cuándo el MRP debe utilizar una fase de trabajo alternativa.  

### Historial (Storico)

En esta pestaña es posible filtrar y visualizar la lista de los procedimientos MRP lanzados, con la indicación del usuario y del momento en que fueron ejecutados.