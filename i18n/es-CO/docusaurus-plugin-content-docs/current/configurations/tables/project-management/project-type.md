---
title: Tipos de proyectos
sidebar_position: 12
---

La tabla es accesible desde **Tablas > Gestión de Proyectos > Tipos de proyectos**.

La tabla contiene las posibles tipologías de **Proyecto**. Está compuesta por una parte de filtro en la que se puede buscar a través de la descripción del tipo, y por dos cuadrículas: una en la que se enumerarán todas las tipologías de proyecto ingresadas (solo será necesario hacer clic en el botón de ![](/img/neutral/common/search.png) búsqueda en la barra de cinta para visualizarlas) y una en la que se podrán indicar los costos/ingresos predeterminados para cada tipología de proyecto a utilizar en el cálculo de SAL.

![](/img/it-it/configurations/tables/projects/proj-type.png)

También dentro de este formulario es posible agregar nuevas tipologías de proyecto en la cuadrícula, haciendo clic en el botón ![](/img/neutral/common/new.png) Nuevo: de esta forma se añadirá una nueva fila dentro de la cuadrícula donde se podrán definir las siguientes informaciones:

**Tipo**: es el código del tipo de proyecto;  

**Descripción del tipo de proyecto**: es la descripción del tipo de proyecto;  

**Numeración**: es la numeración asociada al proyecto configurada especialmente;  

**Estructura jerárquica**: este indicador, si está habilitado, permite a los proyectos tener una estructura jerárquica, es decir, multinivel;  

**Tipo de orden**: es posible indicar un tipo de orden asociado;  

**Descripción del tipo de pedido**: es la descripción del tipo de orden asociado; utilizado en caso de creación de proyectos a partir de un orden.  

**Tipo de factura**: es posible indicar un tipo de factura asociado, necesario para la facturación de los proyectos;  

**Descripción de Tipo de Factura**: es la descripción de la factura asociada;  

**Plantilla**: este indicador indica que el tipo de proyecto es una plantilla, por lo que no podrá ser utilizado en otros documentos, sino solamente como modelo para la generación de nuevos proyectos.  

**Seguridad del proyecto habilitada**: si está marcado, habilita la posibilidad de elegir, en la pestaña Permisos de Usuario de la Cabecera del Proyecto, a los usuarios que tienen el derecho de Solo Lectura o Leer Escribir sobre el proyecto (los otros usuarios no podrán acceder); si no está marcado, permite la modificación del Proyecto a todos los usuarios;  

**Tipo de solicitud de compra**: es posible asociar un tipo de solicitud de compra; de esta forma, será posible generar solicitudes de compra directamente desde el proyecto.  

Luego, hay algunos indicadores en la cuadrícula que indican las distintas pestañas que se mostrarán para el tipo de proyecto.

**Actividades**: pestaña que contiene todos los datos principales y obligatorios para la línea de proyecto, como artículo, cantidad y precio, y el resumen de los costos;  

**Planificación de Servicios**: pestaña relacionada con las fechas de inicio/final previstas, el % de avance, los tipos de intervención a utilizar y posibles vínculos con otras WBS;  

**Recursos**: pestaña de planificación de recursos;  

**Materiales**: pestaña que contiene la lista de materiales con su costo correspondiente;  

**Fases**:

**Datos**: pestaña que contiene información genérica relacionada con los códigos para el cálculo de SAL del proyecto, referencia a tickets, órdenes de producción, contactos de CRM.  

**Progreso**:  

**Agentes**: pestaña para la inserción de Agentes relacionados con el proyecto.  

**Facturación**: pestaña para completar la programación de las cuotas de facturación para la línea de proyecto;  

**Datos adicionales**: pestaña para gestionar los datos adicionales;  

**Documentos adjuntos**: pestaña para gestionar los archivos adjuntos.  

**Gantt**: pestaña general que muestra el diagrama de Gantt relacionado con el proyecto.  

**Factura anticipada**: pestaña para gestionar las facturas de anticipo relacionadas con los proyectos.  

**Rotación obligatoria**: en caso de que la línea de proyecto sea facturable y tenga el indicador de facturación obligatoria, se bloqueará el guardado.  

**Recalculo de fecha de inicio-fin**: si está habilitado, permite la modificación automática de la fecha de inicio y fin de planificación en las líneas WBS del proyecto. Las fechas se actualizarán en función de la cantidad de la línea si la UM corresponde a la UM de los días configurada en los parámetros del proyecto, o al ingresar nuevos recursos en la pestaña de recursos de la línea del proyecto.  

En la cuadrícula inferior es posible construir la valorización del SAL dentro del estado de avance de trabajos. Para cada proyecto es posible indicar una serie de códigos que representarán documentos a incluir en el cálculo del estado de avance de trabajos. Estos códigos serán propuestos en las líneas individuales del proyecto.  
Después de seleccionar una línea de la primera cuadrícula, los campos a completar en la segunda son:

**Tipo de origen Costo/Ingreso**: contiene la lista de códigos de costos/ingresos previstos para el cálculo SAL de los proyectos de ese tipo específico;  

**Descripción**: es la descripción de los costos/ingresos;  

**Tipo**: indica si es un costo o un ingreso.  

**Expresión de filtro**: si el campo no está valorizado, se consideran todos los documentos previstos para el código específico. En cambio, si se desea excluir ciertos documentos (por tipo, numeración, etc.), es posible configurar una expresión de filtrado.  

![](/img/it-it/configurations/tables/projects/revenue.png)