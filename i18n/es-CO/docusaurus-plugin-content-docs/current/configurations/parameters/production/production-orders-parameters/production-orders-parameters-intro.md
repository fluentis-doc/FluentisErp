---
title: Parámetros de Órdenes de Producción 
sidebar_position: 1
---

El formulario se abre a través de la ruta **Parámetros > Producción > Parámetros de Órdenes de Producción**. A través de esta ventana se establecen todos los parámetros que se relacionan con el movimiento de artículos mediante los procedimientos vinculados al área de producción, así como algunos parámetros que permiten decidir las modalidades de gestión de algunas partes del área de producción.

## 1. General 

**Gestión automática de los lotes y números de serie**: si está activo, propone automáticamente los lotes y/o los números de serie de los materiales que se utilizan durante la producción, directamente en las grillas correspondientes relacionadas con la grilla de materiales utilizados de la declaración de producción. De lo contrario, el usuario deberá establecer manualmente tanto los lotes como los números de serie de los artículos utilizados que tengan este tipo de gestión; recordemos que la gestión por lotes o números de serie se establece dentro del *Registro de artículos* en la pestaña [Lotes y Números de Serie](/docs/erp-home/registers/items/create-new-item) seleccionando el tipo de gestión deseada.

**Gestión de doble UM**: si está activo, permite al usuario gestionar la doble unidad de medida dentro de las declaraciones de producción, tanto para los artículos producidos como para los materiales utilizados;

**Utilice el mismo lote para artículos de desecho**: si está activo, permite al usuario decidir que los desperdicios producidos se carguen en el almacén con el mismo lote con el que se cargan los productos; de lo contrario, si el indicador no está activo, se cargarán con dos lotes diferentes;

**Divida el pedido si el lote de material no es suficiente**: si está activo, permite al usuario hacer que el procedimiento de *Liberación de Órdenes de Producción* verifique si las cantidades de material a descargar automáticamente (por lo tanto, solo en caso de tipo de extracción automática o manual pero con gestión en progreso) son suficientes en el almacén del cual deben ser extraídas; si no lo son, el procedimiento divide la orden de producción en 2 órdenes diferentes que tendrán el mismo número/año pero lote diferente (el primero tendrá el lote 0, el segundo tendrá el lote 1; el primero será aquel para el cual los materiales disponibles en el almacén son suficientes);

**Cambiar la fecha del orden de trabajo al modificar la fecha del orden de producción**: si está activo, permite al usuario hacer que al cambiar la fecha de finalización de la orden de producción, se modifique automáticamente también la fecha de finalización de la orden, siempre que el artículo objeto de la orden de producción sea el mismo objeto de la orden de producción; por lo tanto, la orden de producción debe ser de nivel 1;

**Imprimir hojas de trabajo para pedidos lanzados**: permite activar por defecto el indicador *Lanzado* en el formulario correspondiente de lanzamiento de impresión de la [Hoja de Trabajo](/docs/production/pp-production-in-progress/reports/worksheet).

**Determinación automática de tiempos en declaraciones**: si está activo, calcula automáticamente el tiempo de máquina y el tiempo de operador en función de los horarios de las declaraciones. De lo contrario, el usuario deberá establecer manualmente dichos tiempos en la línea de la declaración de producción;

**Propuesta automática de U.M. alternativa**: si está activo, propone automáticamente la unidad de medida alternativa configurada para el artículo dentro de la declaración de producción. Generalmente, si se activa el indicador **Gestión de doble UM**, se activa por conveniencia también este indicador, que se vuelve editable solo si se ha activado el indicador **Gestión de doble unidad de medida**;

**Utilice el mismo lote para los desechos de materiales**: si está habilitado, los materiales desechados mantienen el mismo lote de los materiales consumidos;

**Publicación automática de declaración de almacén**: es utilizado en el formulario de las declaraciones de producción presente en el WMS; si está activo, hace que tan pronto como inserte la declaración, también se registre automáticamente;

**Lote asociado para lista de selección**: si está activo, este indicador indica que cuando se crea una lista de selección a través del procedimiento correspondiente, para los materiales gestionados por lotes, el sistema seleccionará los lotes que deben ser extraídos para esos pedidos de producción que he seleccionado; si no está activado significa que el usuario deberá declarar manualmente en la extracción cuáles son los lotes que han sido extraídos;

**Actualizar materiales utilizados en las Órdenes de Producción**: si está activo, al variar la cantidad declarada en una declaración de producción, se mostrará un mensaje que pregunta si se debe o no recalcular las cantidades utilizadas de los materiales; si no está activo, el recálculo de los materiales se realiza automáticamente;

**Habilitar control en el MES**: si está activo, habilita el control de asistencia dentro de [Fluentis MES](/docs/production/mes/mes-intro). El control se basa en la tabla *Fluentis.HR_BadgeRecords*.  
En esta, los campos obligatorios para el control son: *HRBR_Resource_HRR_Id*, *HRBR_RecordDateTime*, *HRBR_BadgeRecordType_HRBRTY_Id*, que puede asumir los valores E = Entrada o U = Salida.  
Por cada línea puede haber solo la hora de entrada o la de salida, por lo tanto, en un día habrá 4 líneas por cada usuario, por ejemplo:  
- 2024-01-02 08:30:00.000 - tipo E  
- 2024-01-02 12:30:00.000 - Tipo U  
- 2024-01-02 14:00:00.000 - Tipo E  
- 2024-01-02 18:00:00.000 - Tipo U  
Los datos deben ser importados dentro de esta tabla a partir de los datos del registrador utilizado.  
Estos serán luego cruzados con los valores de inicio y fin de trabajo de cada operador ingresado dentro de la pestaña *Equipo* presente en [Fluentis MES](/docs/production/mes/mes-intro).

**Mostrar la versión del componente dentro del listado de materiales**: si está activo, habilita el campo de la versión presente en la pestaña de componentes de la lista de materiales.

**Habilitar el guardado automático en las declaraciones de producción**: si está activo, habilita el guardado automático dentro de las declaraciones de producción.

Finalmente, hay otras cuatro secciones: **Hojas de trabajo Gestionadas por**, **Periodo de Análisis**, **Valorización de materiales a costo**, **Propuesta de secuencia de fase**.

**Hojas de trabajo gestionadas por**: la sección permite, mediante la activación de uno de los botones de opción, elegir el tipo de agrupamiento a utilizar durante la impresión de la hoja de trabajo (que contiene los parámetros que indican cómo debe ser producido ese material). Se trata, sin embargo, de una propuesta que puede ser modificada dentro del formulario de impresión de la hoja de trabajo misma;

**Periodo de Análisis**: la sección permite, mediante la activación de uno de los botones de opción, elegir el periodo de filtrado de los pedidos de producción que deben ser visualizados en la ventana de impresión de la hoja de trabajo (semanal, diario o cada X días);

**Valoración de material a costo**: la sección permite definir parámetros que serán utilizados para el cálculo de los costos relacionados con las declaraciones de producción registradas. (Estos parámetros no son considerados por la [Costeo](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization), ya que esta toma los valores directamente de los registros de las declaraciones de producción).  

> **Último**: permite valorar los materiales a costo *último*;  
> **Medio**: permite valorar los materiales a costo *medio*;  
> **Estándar**: permite valorar los materiales a costo *estándar*;  
> **Desde el área de gestión**: permite valorar los materiales en función del costo relacionado con el *Área de gestión* seleccionada en la combo box correspondiente;  
> **Costo del lote**: al activar este indicador, el procedimiento valorizará el costo del material en función del tipo de costo seleccionado considerando solo los valores de ese lote específico;  
> **Costo para orden de trabajo de producción**: al activar este indicador, el procedimiento valorizará el costo del material en función del tipo de costo seleccionado considerando solo los valores de esa orden específica.  

:::note Nota
Si **Costo del lote** y **Costo para orden de trabajo de producción** están activados ambos, el procedimiento valorizará el costo del material en función del tipo de costo seleccionado considerando los valores de esa orden específica y por ese lote específico, obviamente entre los movimientos realizados con causas de carga con el indicador "actualizar costo último o medio" (dependiendo del valor indicado en el campo **Tipo de costo**) y el indicador de interés fiscal activos; si no encuentra ningún movimiento con estas características buscará entre los movimientos que han cargado ese lote; si tampoco encuentra estos buscará entre todos los movimientos de ese artículo. Si no tengo ningún movimiento de carga para ese artículo, revisará los respectivos campos de costo último, medio y estándar del registro del artículo.

**Propuesta de secuencia de fases**: la sección permite elegir, durante la creación de un ciclo de trabajo, el número de secuencia de la fase que se propone, que puede ser tomado del número de secuencia de la fase estándar o como progresivo del orden de inserción, indicando también el valor de paso.

## 2. Almacenes 

El formulario está dedicado a la inserción de almacenes y las correspondientes causas que regulan los movimientos de artículos mediante los procedimientos relacionados con la producción; la misma pantalla se repite en los *Parámetros de MRP* del artículo en la pestaña [Almacenes](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), con la diferencia de que los almacenes establecidos en los *Parámetros de producción* son considerados datos generales válidos por defecto para los artículos; si se establecen para un artículo en particular almacenes diferentes en los *Parámetros MRP* del artículo, el sistema dará <u>prioridad a los parámetros</u> que encuentra establecidos en esta última ventana para las cargas y descargas de materiales vinculados a la producción de este artículo.  
Además, es posible establecer los mismos parámetros también para un Sitio de producción específico.

Por lo tanto, la prioridad para la **carga** será tomada en el siguiente orden:
- Almacén y causa si están indicados en la cabecera de la orden de producción
- [Parámetros del sitio de producción](/docs/configurations/parameters/production/production-orders-parameters/production-site) indicado en la orden vinculada a la orden de producción
- [Parámetros MRP del artículo](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- Desde el sitio de producción vinculado a la máquina que está registrada en la declaración de producción; si la máquina no ha sido indicada en la declaración, los parámetros son tomados del sitio de producción vinculado a la máquina indicada en la fase de la orden de producción
- [Parámetros de órdenes de producción)](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)

La prioridad para el **descarga** será dada en el orden de:

- [Parámetros del sitio de producción](/docs/configurations/parameters/production/production-orders-parameters/production-site) indicado en la orden vinculada a la orden de producción
- [Parámetros MRP del artículo](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- Desde el sitio de producción vinculado a la máquina que está registrada en la declaración de producción; si la máquina no ha sido indicada en la declaración, los parámetros son tomados del sitio de producción vinculado a la máquina indicada en la fase de la orden de producción
- [Parámetros de órdenes de producción](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)

En esta pestaña, por lo tanto, se podrán establecer los almacenes relativos a las *materias primas*, a los *productos no terminados*, a los *productos terminados* y a eventuales *chatarra* con las respectivas causas de carga y descarga.

Para poder establecer uno de estos almacenes, será suficiente seleccionar mediante las respectivas combo boxes el almacén y las causas (predeterminadas en las respectivas tablas [Almacenes](/docs/configurations/tables/logistics/warehouses) y [Plantillas](/docs/configurations/tables/logistics/warehouse-templates)) que se quieren establecer.

Además de estos almacenes principales, hay almacenes en progreso que se activan seleccionando la opción en progreso y procediendo a la selección dentro de la combo box de los almacenes y plantillas como se hace para los otros almacenes.

Por almacenes *en progreso* se entienden almacenes de transición, en los cuales la mercancía transita en el momento en que se libera la orden de producción del producto terminado o del semilaborado. Cuando se establecen estos almacenes, el tipo de extracción de material debe ser *Manual*; de lo contrario, si fuera un tipo de extracción *Automático*, la descarga de materiales ocurriría automáticamente en el momento del lanzamiento de la orden de producción. En el caso de los almacenes en progreso, el material al momento del lanzamiento se mueve a estos almacenes (a través de la [Lista de Emisión de Materiales](/docs/production/pp-production-in-progress/picking-materials-list)) y se descarga durante la declaración de producción de la última fase de procesamiento (productiva y movilizable) del artículo de la orden de producción o durante la fase de procesamiento a la que el material está asociado.

Por el contrario, si el tipo de extracción de material es *Con Lista*, entonces mientras el movimiento del material al almacén en progreso ocurre de la misma manera que en el tipo de extracción manual, la descarga del en progreso ocurre mediante el procedimiento de la [Lista de Emisión de Materiales](/docs/production/pp-production-in-progress/picking-materials-list).

### Funcionamiento de Almacenes y Plantillas

Con respecto a la **carga** de productos terminados y productos no terminados:

- Si se considera la **última fase productiva y movilizable** del ciclo, se usan los almacenes y causas de la sección **productos terminados**, si la orden de producción es de **nivel 1** (por lo tanto, relacionada con el producto terminado); en cambio, se usan las de la sección **productos no terminados**, si la orden de producción **no es de nivel 1** (por lo tanto, es un producto no terminado). Si la sección **productos no terminados** no está valorizada, se usan las de la sección **productos terminados**.
- En caso de que **no sea la última fase productiva y movilizable** del ciclo y la **gestión en progreso** **no se haya activado (gestione en progreso non è stata attivata)**, se usan almacenes y causas de la sección **semilavorati en progreso**. En cambio, si **está activa la gestión en progreso (è attiva la gestione en progreso)**, se usan las de la **sección en progreso**, y las de la sección **semilavorati en progreso** no son más consideradas.

Para el **descarga** de los materiales en cambio:

- Si la **gestión en progreso** **no ha sido activada**, se usan almacenes y causas presentes en la sección **materias primas** si el artículo tiene **tipo de adquisiciones de compra** en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), mientras que si tiene **tipo de adquisiciones de producción subcontratista**, se usan para descargar los almacenes y causas presentes en la sección **productos no terminados**.  
- En cambio, si **está activa la gestión en progreso**, se usan almacenes y causas presentes en la **sección en progreso** (en el caso de que estos no estén valorizados se utilizan los de la sección Materias Primas). Por lo tanto, si el artículo tiene **tipo de adquisiciones de compra**, se usa la causa **Consumo de Materiales**. En cambio, si tiene **tipo de adquisiciones de producción o subcontratista**, se usa la causa consumo **productos no terminados**.

:::note Nota
Cuando se activa el indicador *en progreso* en los *Parámetros de órdenes de producción*, automáticamente en la creación de los pedidos de trabajo (desde el *Liberar Órdenes Planificadas* o directamente desde la orden de producción), se consideran para los materiales a enviar al subcontratista el almacén y la causa presentes en los [Parámetros Subcontratista](/docs/configurations/parameters/production/subcontractor-parameters) en la sección *Entregas de materiales a subcontratistas en progreso*; por lo tanto, en este caso, los materiales a enviar a los subcontratistas se extraerán directamente del almacén *en progreso*  
:::

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, por favor consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).