---
title: Nuevo ciclo 
sidebar_position: 2
---

Después de crear las listas de materiales de los artículos, se debe proceder a la definición de los ciclos de trabajo, es decir, el conjunto de las diversas fases de producción de un producto.

La procedura de creación de un **Nuevo ciclo** se abre a través del recorrido:

**Producción > Ciclos de trabajo > Ciclos de trabajo**, haciendo clic en el botón **Nuevo**

o

**Producción > Ciclos de trabajo > Nuevo ciclo de trabajo**.

Con ambos procedimientos se abrirá el formulario **Gestión de ciclos de trabajo** compuesto por una sección en la que se definirán las características obligatorias del ciclo y por una sección compuesta de diferentes pestañas que agrupan las características específicas.

### Sección superior

Aquí se insertan las informaciones básicas relativas al ciclo:

**Ciclo:** se debe introducir el código y la descripción del ciclo de trabajo;

**Artículo y Variante**: a través de la ayuda se insertará el artículo relacionado con el ciclo y la variante en caso de que exista la variante del artículo seleccionado;

**Versión**: se seleccionará a través de la combo correspondiente la versión de la lista para la que se quiere insertar un nuevo ciclo de trabajo;

**Ciclo**: se define si se trata de un ciclo *Operativo* o *No operativo* y, por lo tanto, en este caso no utilizable;

**Tipo ciclo**: que puede ser *Estándar* para el ciclo principal y que se propondrá como default para ese artículo y tendrá como número ciclo 1, o en caso de que haya más ciclos para el mismo artículo, se marcará el indicador en *Alternativo* y también se habilitará la posibilidad de variar el número de ciclo. Por cada artículo, es posible tener solo un ciclo *estándar*;

**Fecha de inserción / Fecha de modificación**: las fechas *Fecha de inserción / Fecha de modificación* se completarán automáticamente respectivamente con la fecha de inserción del ciclo y si se realiza alguna modificación, también con la fecha de última modificación del ciclo;

### Fases

En la cuadrícula se insertan las fases de trabajo del ciclo; para cada ciclo se pueden tener múltiples fases de trabajo. Las fases se codifican dentro de la tabla [Fases Estándar](/docs/configurations/tables/production/standard-phases) que se encuentra entre las tablas de la sección *Producción*.  

Las informaciones importantes que conciernen a la fase y que servirán a nivel productivo son:

**Código**: indica el código de la fase estándar; una vez seleccionada la fase, la cuadrícula se completará con los datos establecidos dentro de la tabla;  

**Fase**: indica el número progresivo de fase; que se propone automáticamente en base al valor del parámetro *Propuesta de secuencia de fase*, presente en configuración; *Parámetros > Producción > Parámetros de pedidos de producción*. Este parámetro permite elegir, durante la creación de un ciclo de trabajo, el número de secuencia de la fase que se propone, que puede ser tomado del número de secuencia de la fase estándar o como progresivo del orden de inserción, indicando también el valor progresivo de inserción en el campo step.  

**Subfase**: indica el número de subfase para diferenciarlas a igualdad de número de fase;  

**Descripción fase / subfase**: indica la descripción de la fase / subfase;  

**Tipo**: permite definir si se trata de una fase interna y, por lo tanto, implicará solamente la creación de órdenes de producción internos, o si es una fase externa, generando también una orden de trabajo;  

**Centro de trabajo**: indica el centro de trabajo, es decir, la máquina en la que se realizará esa fase específica;  

**Tiempo fijo**: si está habilitado, indica que el tiempo de esa fase es fijo y, por lo tanto, no variable según la cantidad; esto se hereda del centro de trabajo ingresado;  

**Control de calidad**: si se activa, este indicador indica que esta fase está sujeta a control de calidad y en la pestaña específica se puede indicar el *Plan de control* que se utilizará para verificar el artículo a declaración de producción realizada;  

**Fase productiva**: si está activo, indica que la fase es productiva y se puede proceder a la inserción de las anotaciones de producción (activándolo se desea que la producción para esta fase sea registrada); si no está activo, no será posible declarar la fase misma;  

**Fase movilizable**: si está activo, indica que en el momento en que se registra la fase de producción, también se crean movimientos de almacén; esto significa que, al proceder con la anotación de producción, también se procederá a la carga del producto terminado en el almacén y al descargue de la materia prima utilizada para la producción en esa fase;  

:::note Nota
Todas las fases externas deben tener siempre los indicadores **Fase productiva** y **Fase movilizable** activos.
:::  

**Máquina / Grupo de mano de obra**: en estos campos se seleccionarán a través de la combo box, el código de la *máquina* en la que tiene lugar la fase y el código del *grupo de mano de obra* que se utiliza; estos dos códigos se toman de las respectivas tablas codificadas previamente: [Grupos de mano de obra](/docs/configurations/tables/production/labour-group) y [Máquinas](/docs/configurations/tables/production/machines) que se encuentran siempre entre las tablas de la sección *Producción*;  

**Unidad de medida tiempo**: permite especificar la unidad de medida de los tiempos de la fase, que puede expresarse en días, horas, minutos y segundos;  

**Inicio / Fin de validez**: permiten indicar la fecha de inicio y la fecha de fin de validez de una fase en caso de que se decida que esa fase específica será válida solo por un determinado periodo de tiempo;  

**Tipo de Superposición**: en este campo se establece por defecto el valor *Ninguna*. Si en cambio hay una fase que se superpone a otra, se indicará el tipo de superposición entre los propuestos en la combo: *Total*, *Por pieza* y *Por tiempo (A Tempo)*. Al ingresar el valor *Total*, significa que la fase y subfase seleccionada pueden comenzar al mismo tiempo que la fase indicada en los campos *Fase y subfase de Superposición (Fase e sottofase Sovrapposizione)*. Mientras que al elegir la opción *por cantidad (a quantità)* o *por tiempo (a tempo)*, la fase seleccionada podrá comenzar a ser procesada solo al alcanzar respectivamente el valor de cantidad producida o el tiempo de la fase indicada en los campos *Fase y subfase de Superposición (Fase e sottofase Sovrapposizione)* transcurrido según el valor indicado en el campo *valore*.  
El tipo **Superposición a porcentaje**, activo solo para la [Programación F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling), se utiliza cuando la cantidad a producir es muy pequeña (1 o pocas unidades) y las horas de trabajo no son pocas (si fueran pocas se podría evitar indicar la superposición). En ese caso, definir la superposición a través de la cantidad puede ser imposible (cantidad igual a 1) o muy impreciso. Si se utiliza el porcentaje de superposición, la fase puede ser programada solo si la que la precede ha alcanzado un porcentaje de avance igual al valor indicado como porcentaje de superposición, pero no se debe utilizar un valor igual a cero, ya que se entendería como ausencia de valor y, por lo tanto, superposición no admitida. Si, por ejemplo, se desea que la fase comience lo antes posible después del inicio de la que la precede, se debe indicar un valor muy pequeño mayor que cero.  

**Valor:** permite indicar el valor relativo al tipo de superposición y no tiene nada que ver con el valor económico (por ejemplo, si la superposición es *Por piezas*, entonces en el campo *Valor* es necesario indicar después de cuántas piezas es posible comenzar la fase, mientras que si la superposición es *Por tiempo*, en el campo *Valor* es necesario insertar el tiempo que debe transcurrir para poder comenzar con la fase);  

**Fase de superposición / subfase de superposición**: en estos dos campos, en caso de superposición, se indicará la fase que se pretende superponer a la fase seleccionada. En el caso de la [Programación F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling), la superposición solo es posible con la fase anterior.  

**Costo Unitario**: en este campo se inserta el costo de la fase cuando se decide no valorizar con la valorización de la máquina y el grupo de mano de obra;  

**Ubicación**: permite asociar también una ubicación de almacén a la fase; esto significa que todos los artículos utilizados en esa fase estarán presentes en esa ubicación.  

**Descripción del proveedor**: en caso de que la fase sea externa, se podrá indicar en este campo el proveedor que se encargará de la fase externa;  

**Descripción Centro de Trabajo**, **Descripción máquina**, **Descripción Grupo de Mano de Obra**: en estos campos se encontrarán las descripciones de los códigos referidos a las varias secciones enumeradas.  

**Sitio de producción**: indica el [Sitio de producción](/docs/configurations/parameters/production/production-orders-parameters/production-site) del centro de trabajo.  

**Descripción del sitio de producción**: indica la descripción del [Sitio de producción](/docs/configurations/parameters/production/production-orders-parameters/production-site) del centro de trabajo.  

<details>
<summary> Los siguientes campos son utilizados solamente en el procedimiento de [Programación F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Tipo de programación centro**:            
**Calificación de equipamiento**: indica la calificación de los trabajadores necesaria para realizar el equipamiento de las máquinas del centro;        
**Calificación de trabajo**: indica la calificación de los trabajadores necesaria para realizar el trabajo en el centro;       
**Número de operarios de equipamiento**: indica el número de trabajadores necesario para realizar el equipamiento de las máquinas del centro;          
**Código de agrupamiento**: las fases que tengan el mismo código de agrupamiento pueden ser agrupadas para ser trabajadas en una misma sesión de la máquina, según la regla de agrupamiento definida para ella. Todas las fases que tengan el mismo código de agrupamiento en el mismo centro de trabajo, deben tener los mismos datos (tiempo de trabajo, número de operadores, etc.). Si no fuera así, el programador marcaría el error en el momento de la importación.

</details>

Hay luego una tercera sección en la que se indicarán los datos más precisos en relación con la máquina, los operarios y los tiempos:

**Número de Máquinas**: indica el número de máquinas necesarias para el desarrollo de la fase;  

**Tiempos de máquina**: permite indicar los tiempos de la máquina expresados en la unidad de medida de referencia seleccionada previamente en la cuadrícula de fase, expresados en la unidad de medida indicada en el campo **Unidad de medida tiempo**;  

**Cantidad fase**: indica la cantidad de producto que se estima producir durante la fase seleccionada (en cada ejecución de esa fase);  

**Número de Operarios**: indica el número de operarios necesarios para el desarrollo de la fase;  

**Tiempo de Operarios**: el tiempo de uso necesario para el desarrollo de la fase, expresado en la unidad de medida indicada en el campo **Unidad de medida tiempo**;  

**Tiempo de espera en cola**: indica el tiempo de espera/cola que se sumará a la duración de la fase; es el tiempo de espera al final de cada ejecución de esa fase;  

**Tiempo de espera — Cola crea compromiso**: si está activo, indica que el tiempo de espera/cola crea compromiso, por lo que no es posible comenzar una nueva fase porque el centro de trabajo está ocupado hasta que expire el tiempo de espera/cola.  

### Las pestañas

**Equipamiento**: en esta pestaña se indicarán los tiempos de equipamiento de la máquina para poder iniciar la fase y los tiempos de reenvasado en caso de que sea necesario reacondicionar el centro de trabajo entre una ejecución y otra de la fase misma, respectivamente en los campos *Tiempo de equipamiento* y *Tiempo de reenvasado*. Se podrá indicar el número de máquinas y operarios necesarios para la fase de equipamiento en los campos *Número de máquinas* y *Número de operarios*. Además, si el equipamiento se realiza con *Centro de trabajo / Máquina / Grupo de mano de obra* diferente al de la fase, será posible especificar los nuevos datos mediante las respectivas combo;

**Materiales**: en esta pestaña se indicarán los materiales que se desea que se descarguen no al final de las fases de producción de ese producto terminado, sino al final de la fase específica. Cuando se asocia un material a una fase determinada, este ya no se visualiza en la ayuda entre los materiales que quedan por asociar a las distintas fases. Se recuerda que todos los materiales no asociados a una fase específica se descargarán en concomitancia con la última fase *productiva* y *movible* del ciclo;  

**Equipos**: en esta pestaña se insertarán los equipos que se utilizarán dentro de la fase; se seleccionará el equipo mediante la respectiva combo entre los equipos codificados dentro de la tabla [Equipos](/docs/configurations/tables/production/equipments) presente en la sección de tablas dedicadas a la *Producción*. Si está activo, el indicador *Programada* indicará que el equipo estará ocupado durante la producción; con este indicador, la programación tendrá en cuenta, no el artículo ingresado a través de la combo de los equipos, sino el artículo ingresado en los campos de clase y código, el cual debe tener como *Naturaleza de artículo* la tipología *Equipo* o *Utensilio*;  

**Utensilios**: en esta pestaña se insertarán los utensilios eventuales, seleccionándolos mediante combo entre aquellos codificados dentro de la tabla [Utensilios](/docs/configurations/tables/production/tools) presente en la sección de tablas dedicadas a la *Producción*;  

**Control de calidad**: si se ha activado el indicador **Control de calidad** relativo a la fase seleccionada, en esta pestaña se seleccionará el *Plan de control*. Se propondrán automáticamente las *Pruebas planificadas* que se llevarán a cabo para el control del artículo. Para la comprensión de las columnas de esta cuadrícula se remite a la documentación relativa a los Planes de control;  

**Diseños**: en esta pestaña se insertarán eventuales dibujos técnicos del artículo relativos a los trabajos específicos de la fase;  

**Notas**: en estos campos se pueden insertar eventuales anotaciones técnicas o de otro tipo relativas a la fase;  

**Instrucciones operativas**: permite cargar documentos de diversos tipos relacionados con la fase, los cuales luego serán visualizados también dentro de Fluentis MES;  

**Datos alternativos**: en esta pestaña se podrán insertar fases alternativas que se considerarán, según la prioridad asignada, por los procedimientos de la [Programación general](/docs/planning/ms-master-scheduling/general-schedule) o por el [M.R.P.](/docs/planning/ms-master-scheduling/mrp/), si los respectivos indicadores **Considera fases alternativas**, presentes en los parámetros de los procedimientos, están activos durante su ejecución;  

**Datos extra de fases / Datos extra**: en estas dos pestañas se insertarán, respectivamente, los datos extra para cada fase y los datos extra relacionados con el ciclo mismo, seleccionándolos a través de combo entre los precodificados en la tabla respectiva *Extradata*. Para insertar un dato extra se debe hacer clic en el botón derecho del ratón y seleccionar la opción agregar nuevo dato extra con la posibilidad de elegir si insertarlo en el primer nivel, o si ya hay datos extra insertados, elegir si se quiere insertar un dato extra hijo al dato extra ya existente; de esta forma aparecerá una nueva fila donde se podrá proceder con la inserción.

<details>
<summary> Los siguientes pestañas son utilizados solamente en el procedimiento de [Programación F.C.S (Schedulazione F.C.S)](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Máquinas alternativas**: si el trabajo debe realizarse en un centro con máquinas y ninguna de ellas está indicada en la fase, el programador podrá utilizar cualquier máquina del centro. Si se indica que la operación no puede realizarse en cualquier máquina del centro (porque no todas pueden realizar dicha operación), entonces a través de esta pestaña se puede proporcionar la lista de solo las máquinas permitidas (en unión con la que eventualmente se indique en la fase). Para cada máquina se puede indicar el respectivo tiempo de trabajo, de equipamiento, el número de operadores de trabajo y de equipamiento, si estos valores cambian al variar la máquina sobre la cual se realiza el trabajo.  

**Recursos**: los recursos comunes necesarios para realizar un trabajo son las máquinas y los trabajadores, que se gestionan a capacidad finita por el programador. A través de esta pestaña se pueden indicar otros tipos de recursos productivos necesarios y vinculantes para el trabajo, y la cantidad respectiva. Cada uno de estos recursos se gestiona a capacidad finita. Ejemplos típicos son los moldes, herramientas de trabajo, medios de elevación, etc. Si se especifica una máquina, significa que ese tipo de recurso es necesario solo si el programador decide utilizar esa máquina. Si el campo de la máquina se deja vacío, entonces ese tipo de recurso es necesario independientemente de la máquina elegida por el programador.  

**Valores de atributos de equipamiento**: a través de esta pestaña se asocian los [Atributos de equipamiento](/docs/configurations/tables/production/fcs-tables/setup-property) con el valor correspondiente a las fases que se trabajarán en máquinas con tiempos de equipamiento relevantes.  

</details>

*Botones específicos*:  

> **Insertar fases**: permite insertar nuevas fases en la cuadrícula relativa a las fases;  
> **Eliminar fase**: permite eliminar una o más fases seleccionadas;  
> **Actualizar de fase / Eliminar los datos de equipamiento**: aparecen en la barra de herramientas cuando nos posicionamos en la pestaña *Equipamiento*: a través del botón *Actualizar de fase* se actualizarán los datos de equipamiento tomándolos de la fase; a través del botón *Eliminar los datos de equipamiento* se eliminarán los datos relativos al equipamiento;  
> **Actualizar materiales de Lista de Materiales**: este botón aparece en la barra de herramientas cuando nos posicionamos en la pestaña *Materiales*: a través de este botón se agregarán en la pestaña los materiales tomándolos de la lista de materiales del artículo;  
> **Insertar / Eliminar equipamiento**: estos botones aparecen en la barra cuando nos posicionamos en la pestaña *Equipos*: a través de estos botones se pueden insertar los equipos o eliminar los equipos seleccionados;  
> **Insertar / Eliminar utensilios**: estos botones aparecen en la barra cuando nos posicionamos en la pestaña *Utensilios*: a través de estos botones se pueden insertar los utensilios o eliminar los utensilios seleccionados.  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).