---
title: MRP
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función **MRP** (**Manufacturing Resource Planning**) de Fluentis permite a los usuarios analizar la disponibilidad de materiales<!-- materiali --> y de los recursos productivos según la planificación de la producción. A través de este procedimiento, el operador recibe sugerencias sobre cómo optimizar la gestión de materiales<!-- materiali -->, incluyendo indicaciones para anticipar suministros, integrar cantidades necesarias o anular pedidos superfluos. El MRP de Fluentis considera las restricciones de producción, las materias primas, los semielaborados disponibles o pedidos, permitiendo así un control eficiente de cada orden de trabajo<!-- commessa --> activa. Este sistema tiene como objetivo optimizar los inventarios de la empresa, reduciendo los niveles de stock<!-- magazzino --> y mejorando la eficiencia operativa.
:::

Este procedimiento permite al usuario analizar la correcta disponibilidad de materiales<!-- materiali --> y recursos productivos en función de la planificación de la producción. Mediante este procesamiento, el operador puede recibir una serie de sugerencias relativas a anticipar algunos suministros de materiales<!-- materiali -->, integrar cantidades necesarias, o bien proceder a anular pedidos de artículos innecesarios, facilitando al máximo el control y la gestión de las operaciones.
El MRP realiza una planificación de la producción considerando las diversas restricciones, las materias primas y los semielaborados disponibles y los que han sido pedidos.
Gracias a este procedimiento, el operador es capaz de analizar la cobertura productiva de cada orden de trabajo<!-- commessa --> activa, gestionando y coordinando todos los procesos relativos a la adquisición, la producción y la entrega del producto terminado.
El principio básico del sistema de requerimiento de materiales de producción es la optimización de los inventarios<!-- scorte --> según las necesidades de la empresa; esto se traduce en una disminución de los niveles de stock<!-- scorte --> y en un consecuente aumento de eficiencia.
En esencia, mediante los algoritmos de esta función, el MRP de Fluentis es capaz de conocer el compromiso de cada material presente en inventario<!-- magazzino --> y la disponibilidad en la fecha deseada.

### M.R.P.

En esta pestaña es posible consultar los resultados seleccionando el procesamiento entre los presentes en el historial.      
Se recuerda que los procesamientos se mantienen en el historial durante el número de días indicado en el campo **Días de historial MRP a mantener**, presente en los [Parámetros de requerimiento de materiales<!-- Parametri fabbisogno materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters).      
Este formulario se compone de un área de filtro donde es posible filtrar por artículo, tipo de abastecimiento o también por tipo de sugerencia dada por el procedimiento.   
En la parte derecha se encuentra una lista de todos los artículos procesados, para cada uno de los cuales también se informan las acciones propuestas.     
Una vez seleccionada una de estas filas, en la tabla central se muestran todas las informaciones relativas a las acciones a emprender, donde para cada una se indica la disponibilidad, el requerimiento y el posible requerimiento confirmado si el procedimiento se ha lanzado con el flag **Diferencia demanda de producción confirmada** activo; mientras que en la tabla inferior, encontramos toda la información relativa a todos los documentos ligados al artículo, con la indicación de demanda, oferta y disponibilidad en la fecha indicada.     
Si se selecciona una orden planificada creada por el procedimiento MRP, es posible liberarla presionando el botón **Liberar órdenes planificadas<!-- Rilascio ordini pianificati -->**.

### Orden de trabajo<!-- Commessa -->

En esta pestaña es posible filtrar y seleccionar las órdenes de trabajo<!-- commesse --> de producción que se desean procesar, para actuar parcialmente sobre algunas órdenes seleccionadas o globalmente sobre todo el conjunto de órdenes presentes en producción.

### Parámetros<!-- Parametri -->

A través de esta pestaña se configuran todos los parámetros generales relacionados con el procedimiento MRP. Algunas configuraciones presentes aquí se retoman de la ventana [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) y son relativas al artículo específico.

**Planificación<!-- Pianificazione -->**: 
> **Planificar hasta el<!-- Pianificare fino al -->**: indica la fecha hasta la cual el sistema deberá considerar los documentos ingresados. Esta fecha se propone como el último día del año si la fecha actual es antes del treinta de junio del año en curso; de lo contrario, después del primero de julio, se propone el último día del año siguiente.     
> **Flag Materiales<!-- Flag Materiali -->**: si está habilitado, dentro de las órdenes planificadas creadas se informan los materiales<!-- materiali --> a consumir. Si el flag no está activo, las órdenes planificadas se crearán igualmente pero sin los materiales dentro;       
> **Flag Recursos<!-- Flag Risorse -->**: si está habilitado, dentro de las órdenes planificadas creadas también se informan las fases de procesamiento. Si el flag no está activo, las órdenes planificadas se crearán igualmente pero sin las fases de procesamiento;            
> **Flag Órdenes planificadas de compra<!-- Flag Ordini pianificati di acquisto -->**: si está habilitado, se consideran las órdenes planificadas de compra en la planificación;    
> **Flag Órdenes planificadas de producción<!-- Flag Ordini pianificati di produzione -->**: si está habilitado, se consideran las órdenes planificadas de producción en la planificación;    
> **Flag Órdenes planificadas de subcontrato<!-- Flag Ordini pianificati di conto lavoro -->**: si está habilitado, se consideran las órdenes planificadas de subcontrato<!-- conto lavoro --> en la planificación;   

**Para los documentos sin fechas necesarias:**    
> **Órdenes a proveedores y solicitudes de compra**: es posible decidir no considerar los artículos sin fecha prevista de recepción, o considerar como fecha prevista de entrega la indicada manualmente en esta sección;    
> **Órdenes de cliente**: es posible decidir no considerar los artículos sin fecha prevista de recepción, o considerar como fecha prevista de entrega la indicada manualmente en esta sección;    

**Considera las disponibilidades provenientes de:**    
> **Compras**: si está activo, el flag permite que los documentos del área de gestión *Compras* sean tomados en cuenta durante la ejecución del procedimiento MRP;   
> **Ventas**: si está activo, el flag permite que los documentos del área de gestión *Ventas* sean tomados en cuenta durante la ejecución del procedimiento MRP;    
> **Inventario<!-- Magazzino -->**: si está activo, el flag permite que los documentos del área de gestión *Inventario<!-- Magazzino -->* sean tomados en cuenta durante la ejecución del procedimiento MRP;   
> **Subcontrato<!-- Conto Lavoro -->**: si está activo, el flag permite que los documentos del área de gestión *Subcontrato<!-- Conto Lavoro -->* sean tomados en cuenta durante la ejecución del procedimiento MRP;   
> **Planificación**: si está activo, el flag permite que los documentos del área de gestión *Planificación* (órdenes de producción<!-- commesse di produzione -->, órdenes planificadas de compra, subcontrato<!-- conto lavoro --> y/o producción) sean tomados en cuenta durante la ejecución del procedimiento MRP;
> **Producción**: si está activo, el flag permite que los documentos del área de gestión *Producción* liberada (órdenes de producción), sean tomados en cuenta durante la ejecución del procedimiento MRP;    

**Considera también las alternativas de materiales<!-- materiali -->**: *EN DESARROLLO*    
**Considera también las fases alternativas**: *EN DESARROLLO* 

**Lectura de listas/ciclos**:   
> **Versión**: indica la versión por defecto a tener en cuenta para la lista o ciclo;   

**Considera las cantidades según el lote económico**: si está activo, el flag permite que para el artículo se considere el lote económico (es decir, la cantidad mínima) de producción o de compra;   
**Considera los múltiplos del lote económico**: si está activo, el flag permite que para el artículo se consideren los múltiplos del lote económico de producción o de compra;   
**Reposición del stock<!-- scorta --> mínimo del artículo**: si está activo, el flag permite que para el artículo se reponga el stock<!-- scorta --> mínimo configurado en su ficha, pestaña *Abastecimiento*;   
**Considera el índice de cobertura**: si está activo, el flag permite que para el artículo se considere el índice de cobertura configurado en su ficha, pestaña *Abastecimiento*; el índice de cobertura se expresa en semanas y, cuando se indica, significa que se le dice al sistema cubrir el requerimiento durante las semanas indicadas en este campo;   
**Sin sugerencias**: si está activo, el MRP no realiza propuestas de aumento, disminución, cancelación, adelanto y atraso de las órdenes planificadas ya creadas;   
**Considera pasado**: si está activo, para esos documentos cuya fecha prevista de entrega esté en el pasado respecto a la fecha actual (hoy), se considera también la disponibilidad en el pasado; si no está activo, todos los documentos del pasado (respecto a hoy) serán considerados con fecha prevista de entrega hoy;       
**Diferenciar demanda de producción confirmada**: si está activo, el MRP se ejecuta dos veces; la primera ejecución considera únicamente los requerimientos provenientes de documentos ejecutivos (áreas: SCM - Compras, SCS - Subcontrato<!-- Conto Lavoro --> y MES - Producción), generando órdenes planificadas, si son necesarias, también completando el campo "cantidad confirmada" (presente en la orden planificada recién creada); esta primera ejecución genera los documentos estrictamente necesarios para satisfacer la demanda de los documentos más urgentes, es decir, los ejecutivos.
La segunda ejecución toma en consideración los requerimientos provenientes de todos los documentos incluyendo las órdenes de producción<!-- commesse di produzione -->; esta segunda ejecución genera los documentos faltantes, pero sin optimizarlos con los generados en la primera ejecución para permitir confirmarlos/liberarlos por separado;       
**Considerar artículos sin orden de trabajo<!-- commessa -->**: si está activo, durante la ejecución del procedimiento MRP se considerarán todos los artículos con política de gestión previsional y de requerimiento (a excepción de los archivados y/o ficticios) y con política de gestión por orden de trabajo<!-- commessa --> (solo si el flag *Considerar el artículo en el cálculo de MRP* está activo en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo), incluso si no tienen orden de trabajo<!-- commessa -->;     
**Control de requerimientos con generación de órdenes planificadas**: permite elegir si se deben generar las órdenes planificadas o no. Si no está activo, solo se proponen sugerencias para la creación de órdenes planificadas; cabe destacar que las órdenes planificadas creadas por el MRP no tienen referencia a órdenes de trabajo<!-- commesse -->;    
**Artículos de inventario<!-- a scorta -->**: selecciona todos los artículos que tienen política de gestión “En stock<!-- A scorta -->” en los parámetros MRP del artículo; además, entre los parámetros MRP, al menos uno de los parámetros de stock mínimo o punto de reorden debe estar configurado;    
**Tolerancia para la ocupación de los C.d.L.**: se utiliza en la generación de ocupación para las fases de las órdenes planificadas de producción para definir cuándo el MRP debe utilizar una fase de trabajo alternativa.     

### Historial<!-- Storico -->

En esta pestaña es posible filtrar y visualizar la lista de procedimientos MRP ejecutados, con la indicación del usuario y el momento en que se ejecutaron.