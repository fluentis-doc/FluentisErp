---
title: Lista de materiales
sidebar_position: 2
---

**Introducción**: [Lista de materiales](/docs/erp-home/registers/production/bill-of-materials/bom-intro)

Como se mencionó anteriormente, desde el formulario [Conjuntos](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), al seleccionar la lista de materiales que se desea visualizar y haciendo doble clic, se accede al detalle de la misma para su modificación y se visualizará su representación gráfica en forma de árbol.

La lista de materiales es una estructura multinivel, en forma de árbol, en la que hay una relación de tipo padre-hijo. El [hijo](/docs/guide/common/glossary/glossary-intro#a) puede ser también padre y así sucesivamente por un número indeterminado de niveles hasta llegar al último nivel donde se encuentran los materiales.

La pantalla se presenta dividida en dos partes: en la parte izquierda se encuentra la representación en árbol de la lista de materiales, mientras que en la parte derecha se verán en detalle las informaciones relativas a los varios componentes del árbol.


## Estructura de la lista de materiales

Para visualizar el árbol, basta con hacer clic con el ratón en el **+** al lado del código del artículo o hacer clic en el botón **expandir** para verlo todo. De esta manera, se abrirán en cascada los varios niveles de la lista de materiales y cada nivel estará representado por íconos que identificarán la categoría de pertenencia de cada artículo o mejor dicho, el tipo de aprovisionamiento del artículo:

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image02.png) : representa los artículos de producción;  

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image03.png) : representa los artículos de compra;  

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image04.png) : representa los artículos de trabajo por encargo.

El tipo de aprovisionamiento del artículo se indica dentro de los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del propio artículo.

La lista puede ser construida y modificada muy fácilmente utilizando los botones correspondientes: **Insertar**, **eliminar este componente** o **copiar**, **cortar** y **pegar componente**.        
Por ejemplo, al posicionarse sobre un elemento del árbol y presionar el botón **insertar componente**, se tiene la posibilidad de insertar un artículo que se convertirá en hijo del artículo seleccionado inicialmente; mientras que, al presionar el botón eliminar componente, este será removido de la lista.            
Los botones **copiar**, **cortar** y **pegar componente** permiten copiar, cortar o pegar el artículo seleccionado dentro del árbol de la lista de materiales.            
Además, es posible mover el artículo al nivel y la posición deseada dentro del árbol utilizando la función *Arrastrar y soltar* de manera simple y rápida.       

Después de haber expandido el menú en cascada, se tiene la posibilidad, para el artículo seleccionado, de utilizar los siguientes **botones específicos**:

> **Insertar componente**: permite insertar un nuevo subnivel de la lista;  
> **Eliminar componentes**: permite eliminar el componente seleccionado;    
> **Expandir**: permite expandir completamente el árbol de la lista de materiales;     
> **Copiar componente**: permite copiar el componente seleccionado;     
> **Cortar componente**: permite cortar el componente seleccionado;     
> **Pegar componente**: permite pegar el componente seleccionado;     
> **Parámetros de MRP**: permite abrir los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del componente seleccionado;     
> **Ciclo de trabajo**: permite abrir el  [Ciclo de trabajo](/docs/erp-home/registers/production/routes/new-route) del componente seleccionado;       
> **Actualizar estructura**: permite actualizar toda la información de la lista de materiales (por ejemplo, si se ha modificado la descripción de un artículo de la lista, al usar esta función la aplicación mostrará la descripción actualizada de ese artículo). 

Al seleccionar uno de los componentes de la lista se visualiza en la parte derecha de la ventana la lista de informaciones relativas al nivel superior respecto al componente seleccionado (en la parte superior derecha de la ventana llamada **asamblea**) y al componente mismo (en la parte inferior derecha de la ventana denominada **componente**).

**Asamblea**: se visualizan la versión de la lista de materiales, clase, código, descripción y variante del nivel superior, la cantidad del nivel superior a la que se refiere la cantidad del componente y su unidad de medida; respecto a la cantidad, se puede definir si se trata de una cantidad fija o variable, es decir, si con esa lista se producirá siempre una cantidad determinada o si puede ser diferente de producción en producción; luego se puede definir si este conjunto es un **ensamble ficticio**, es decir, un conjunto que en el procesamiento de la programación o del MRP no se considerará; luego hay un campo **Notas** en el que se pueden ingresar notas relativas al padre y hay campos relativos a las fechas de validez del conjunto, a la fecha en que se insertó el conjunto y a la fecha en que fue modificado por última vez.

:::note Notas
**Fecha de validez**: la fecha de validez del conjunto permite verificar en la fecha ingresada la composición de la lista de materiales; esto permite mantener un historial de todos los cambios realizados en esa lista. Por ejemplo, al eliminar la fecha de validez, se mostrarán todos los componentes utilizados para esa lista desde el momento en que fue creada, resaltando en rojo los componentes que ya no son válidos hasta hoy. 
:::

**Componente**: se visualizarán la clase, código, descripción y variante del componente seleccionado en el árbol, la información respecto a si el componente es ficticio o no (heredada del registro del artículo), y la unidad de medida del componente.

Además, existe el indicador *livello fittizio*, que permite decidir si, exclusivamente para esa lista de materiales, el componente seleccionado debe ser considerado ficticio.

En caso de *artículo ficticio* o *nivel ficticio*, el procedimiento de *Programación General* y el *MRP* en el curso de la explosión de necesidades “saltarían” el componente designado como ficticio o como nivel ficticio, leyendo la necesidad de sus eventuales componentes.

Vinculados al componente también están todas las siguientes pestañas:

### Datos generales

**Cantidad**: representa la cantidad del componente prevista para producir la cantidad de referencia de su nivel superior;  
**Unidad de medida de uso**: podría ser diferente de la unidad de medida de gestión del propio componente;  
**Fija** indica que para producir el nivel superior se utilizará siempre la misma cantidad de componente;  
**Variable** indica que la cantidad de componente para producir el hijo cambiará de vez en cuando (por ejemplo, al variar la cantidad del padre, también podrá variar la cantidad del hijo utilizada);  
**Tasa de chatarra** preestablecido para el componente, que permite hacer que la explosión de necesidades aumente en ese porcentaje la cantidad a utilizar del componente mismo;  
**Porcentaje de desviación sobre la cantidad negativa y positiva**: indica el porcentaje para el uso del componente en más o menos que se puede utilizar respecto a la cantidad indicada para mantenerse dentro de la tolerancia establecida;  
**Inicio de validez** y **Fecha de vencimiento**: permiten decidir que un componente sea válido desde una cierta fecha o hasta una cierta fecha;  
**Prioridad**: indica el orden con el cual debe ser visualizado el componente en el árbol de la lista;  
**Móvil**: permite decidir si el componente debe o no ser movido a almacén. Este indicador influirá en todos los movimientos de almacén, porque en la creación de los movimientos solo se tendrán en cuenta los artículos que tienen el indicador activo, mientras que los demás no serán movilizados;  
**Crítico**: si el indicador está activo, sirve para indicar la criticidad de ese componente (por ahora se utiliza solo para la [Programación a capacidad finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling));  
**Nivel ficticio**: permite decidir si, limitadamente a esa lista de materiales, el componente seleccionado debe ser considerado ficticio o no; además, permite que el procedimiento de *Planificación General* y el *MRP* salten ese componente en el curso de la explosión de necesidades;  
**Referencia de esquema**: permite insertar una nota libre relativa al componente (por ejemplo, la referencia de esquema del dibujo técnico);  
**Notas**: permite insertar una nota libre relativa al componente.

### Alternativas

En esta pestaña se pueden establecer por orden de prioridad las alternativas al componente de la lista de materiales en caso de que el componente no esté disponible al momento de la producción de esa lista.

Estas alternativas son consideradas en los registros de almacén si se utiliza un motivo que tenga activos los indicadores **Alternativas** y **Alternativas mixtas**.  
Mientras que los procedimientos de Programación y MRP tomarán en consideración las alternativas en consecuencia de la activación o no de indicadores específicos: para la programación, el indicador que se debe activar será **Considere también las alternativas de los materiales** que deberá ser configurado en la pantalla de [Programación general](/docs/planning/ms-master-scheduling/general-schedule), en la pestaña *parametri*; para el procedimiento MRP, el indicador que se debe configurar será **Considere también las alternativas de los materiales** que deberá ser configurado en la ventana *Parámetros* del procedimiento [MRP](/docs/planning/ms-master-scheduling/mrp/).

En todos los casos anteriormente mencionados, también debe estar activado el indicador **Considere también las alternativas de los materiales** presente en la ventana [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo.

### Fases de descarga

En esta pestaña se puede establecer la fase durante la cual debe descargarse el componente.

Hay tres tipos de descarga de material, a saber: **automatico**, **con lista** y **manuale** que se configuran en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters).

En caso de optar por la descarga manual, **Fluentis** considera automáticamente que la descarga del material (no asignado a una fase) se realizará, en caso de tener más fases para ese producto, en correspondencia con la última fase que tiene activos los indicadores *movimentabile* y *productivo*.

### Ciclo 

En esta pestaña se visualiza la lista de [fases](/docs/configurations/tables/production/standard-phases) que componen el [ciclo de trabajo](/docs/erp-home/registers/production/routes/new-route) del artículo seleccionado.

### Componentes

En esta pestaña se visualizan los eventuales componentes del artículo seleccionado. También es posible insertar nuevos componentes y modificar los existentes desde esta pestaña, además de a través de los botones presentes en la barra de herramientas (Insertar/Copiar/Pegar/Cortar y Eliminar componentes).

### Notas 

En esta pestaña se pueden insertar notas y cargar archivos o imágenes que deben ser consideradas en fase de producción.

### Datos extras - Lista de materiales 

En esta pestaña es posible visualizar y, eventualmente, modificar los datos extras relativos a la lista de materiales del componente seleccionado. Esta pestaña está activa solo si el componente tiene una lista de materiales. 

### Datos extras - Componentes

En esta pestaña es posible visualizar y, eventualmente, modificar los datos extras relativos al componente seleccionado.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).