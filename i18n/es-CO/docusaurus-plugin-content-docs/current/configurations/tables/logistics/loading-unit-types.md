---
title: Tipos de Unidades de Carga
sidebar_position: 37
---

:::important ¿Para qué sirve? 
La tabla Tipos de Unidades de Carga de Fluentis permite codificar y definir las diversas categorías de Unidades de Carga, proporcionando un marco estructurado que facilita el movimiento y la trazabilidad de los materiales. Los usuarios pueden crear nuevos registros, modificar los existentes o eliminarlos, utilizando una interfaz intuitiva.

El procedimiento de búsqueda es simple y permite filtrar rápidamente los tipos de Unidades de Carga deseados, visualizando los resultados en una cuadrícula de fácil lectura. Cada registro puede contener detalles clave, como un código alfanumérico único y una descripción, que identifican claramente el tipo de unidad de carga. Esta gestión efectiva de las Unidades de Carga es esencial para garantizar una logística fluida y organizada, contribuyendo así a mejorar la eficiencia operativa dentro de la empresa.
:::

La tabla permite gestionar la codificación de las diferentes tipologías de *Tipos de Unidades de Carga*.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de tipos de Unidades de Carga**

El formulario consta de un área de filtro y otra de resultados. Una vez definidos todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados en la cuadrícula de resultados.

**Inserción de tipos de Unidades de Carga**

Para poder insertar nuevas codificaciones es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.

#### Campos específicos 

> **Tipo**: indica el código del tipo de unidad de carga;    
> **Descripción**: indica la descripción del tipo de unidad de carga;    
> **Tipo de grupo**: indica el tipo del grupo seleccionado en la tabla [Tipo de grupo](/docs/configurations/tables/logistics/loading-unit-group-type/), que permite definir cómo debe componerse una parte del código de la unidad de carga;      
> **Descripción del tipo de grupo**: indica la descripción del tipo de grupo;          
> **Unidad de medida dimensiones**: indica la unidad de medida en la que están definidas las dimensiones de altura, ancho y profundidad de la unidad de carga vacía; al momento de la inserción, se propone la unidad de medida con el indicador *Unidad de medida dimensiones* activo presente en la tabla [Unidad de medida](/docs/configurations/tables/general-settings/measurement-units/);     
> **Altura / Ancho / Profundidad**: indican respectivamente los valores de altura, ancho y profundidad de la unidad de carga vacía en la unidad de medida definida en el campo **Unidad de medida dimensiones**;         
> **Unidad de medida de peso**: indica la unidad de medida en la que está definido el peso de la unidad de carga vacía; al momento de la inserción, se propone la unidad de medida con el indicador *Unidad de medida peso* activo presente en la tabla [Unidad de medida](/docs/configurations/tables/general-settings/measurement-units/);   
> **Peso**: indica el valor del peso de la unidad de carga vacía en la unidad de medida definida en el campo **Unidad de medida de peso**;         
> **Unidad de medida de volumen**: indica la unidad de medida en la que está definido el volumen de la unidad de carga vacía; al momento de la inserción, se propone la unidad de medida con el indicador *Unidad de medida de volumen* activo presente en la tabla [Unidad de medida](/docs/configurations/tables/general-settings/measurement-units/);       
> **Volumen**: indica el valor del volumen de la unidad de carga vacía en la unidad de medida definida en el campo **Unidad de medida de peso**; esto se calculará automáticamente en función de los valores ingresados en los campos **Altura / Ancho / Profundidad**, pero será modificable manualmente;             
> **Volumen variable**: por defecto está activo y indica que el volumen de la unidad de carga es variable, por lo que el volumen total variará dependiendo de qué y cómo será cargado, por ejemplo, un pallet; mientras que, si no está activo, significa que el volumen de la unidad de carga no variará como en el caso de un contenedor;      
> **Tipo de empaque**: permite indicar el tipo de empaque utilizado entre los que están en la tabla [Tipos de empaque](/docs/configurations/tables/logistics/packing-type/);     
> **Descripción del tipo de empaque**: indica la descripción del tipo de empaque utilizado;      
> **Numeración**: indica la numeración del tipo de unidad de carga.         

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).