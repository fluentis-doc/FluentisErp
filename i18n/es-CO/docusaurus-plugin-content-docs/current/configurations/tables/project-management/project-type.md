---
title: tipi progetto
sidebar_position: 12
---

La tabla es accesible desde **Tablas > Gestión de Proyectos > tipi progetto (Tabelle > Gestione Progetti > Tipi progetto)**.

La tabla contiene las posibles tipologías de **progetto**. Está compuesta por una parte de filtro en la que se puede buscar a través de la descripción del tipo, y por dos cuadrículas: una en la que se enumerarán todas las tipologías de proyecto ingresadas (solo será necesario hacer clic en el botón de ![](/img/neutral/common/search.png) búsqueda en la barra de cinta para visualizarlas) y una en la que se podrán indicar los costos/ingresos predeterminados para cada tipología de proyecto a utilizar en el cálculo de SAL.

![](/img/it-it/configurations/tables/projects/proj-type.png)

También dentro de este formulario es posible agregar nuevas tipologías de proyecto en la cuadrícula, haciendo clic en el botón ![](/img/neutral/common/new.png) Nuevo: de esta forma se añadirá una nueva fila dentro de la cuadrícula donde se podrán definir las siguientes informaciones:

**Tipo**: es el código del tipo de proyecto;  

**descrizione tipo progetto**: es la descripción del tipo de proyecto;  

**numerazione**: es la numeración asociada al proyecto configurada especialmente;  

**struttura gerarchica**: este indicador, si está habilitado, permite a los proyectos tener una estructura jerárquica, es decir, multinivel;  

**tipo ordine**: es posible indicar un tipo de orden asociado;  

**descrizione tipo ordine**: es la descripción del tipo de orden asociado; utilizado en caso de creación de proyectos a partir de un orden.  

**tipo fattura**: es posible indicar un tipo de factura asociado, necesario para la facturación de los proyectos;  

**Descripción Tipo Factura (Descrizione Tipo Fattura)**: es la descripción de la factura asociada;  

**template**: este indicador indica que el tipo de proyecto es una plantilla, por lo que no podrá ser utilizado en otros documentos, sino solamente como modelo para la generación de nuevos proyectos.  

**sicurezza del progetto abilitata**: si está marcado, habilita la posibilidad de elegir, en la pestaña Permisos de Usuario de la Cabecera del Proyecto, a los usuarios que tienen el derecho de Solo Lectura (Read Only) o Lectura y Escritura (Read Write) sobre el proyecto (los otros usuarios no podrán acceder); si no está marcado, permite la modificación del Proyecto a todos los usuarios;  

**Tipo de solicitud de compra (Tipo richiesta d’acquisto)**: es posible asociar un tipo de solicitud de compra; de esta forma, será posible generar solicitudes de compra directamente desde el proyecto.  

Luego, hay algunos indicadores en la cuadrícula que indican las distintas pestañas que se mostrarán para el tipo de proyecto.

**attività**: pestaña que contiene todos los datos principales y obligatorios para la línea de proyecto, como artículo, cantidad y precio, y el resumen de los costos;  

**pianificazione servizio**: pestaña relacionada con las fechas de inicio/final previstas, el % de avance, los tipos de intervención a utilizar y posibles vínculos con otras WBS;  

**risorse**: pestaña de planificación de recursos;  

**materiali**: pestaña que contiene la lista de materiales con su costo correspondiente;  

**fasi**:

**dati**: pestaña que contiene información genérica relacionada con los códigos para el cálculo de SAL del proyecto, referencia a tickets, órdenes de producción, contactos de CRM.  

**avanzamento**:  

**agenti**: pestaña para la inserción de Agentes relacionados con el proyecto.  

**fatturazione**: pestaña para completar la programación de las cuotas de facturación para la línea de proyecto;  

**extra data**: pestaña para gestionar los datos extra;  

**documenti allegati**: pestaña para gestionar los archivos adjuntos.  

**Gantt (Gannt)**: pestaña general que muestra el diagrama de Gantt relacionado con el proyecto.  

**fattura di anticipo**: pestaña para gestionar las facturas de anticipo relacionadas con los proyectos.  

**fatturato obbligatorio**: en caso de que la línea de proyecto sea facturable y tenga el indicador de facturación obligatoria, se bloqueará el guardado.  

**Recalculo de fecha de inicio-fin (Ricalcolo data inizio-fine)**: si está habilitado, permite la modificación automática de la fecha de inicio y fin de planificación en las líneas WBS del proyecto. Las fechas se actualizarán en función de la cantidad de la línea si la UM corresponde a la UM de los días configurada en los parámetros del proyecto, o al ingresar nuevos recursos en la pestaña de recursos de la línea del proyecto.  

En la cuadrícula inferior es posible construir la valorización del SAL dentro del estado de avance de trabajos. Para cada proyecto es posible indicar una serie de códigos que representarán documentos a incluir en el cálculo del estado de avance de trabajos. Estos códigos serán propuestos en las líneas individuales del proyecto.  
Después de seleccionar una línea de la primera cuadrícula, los campos a completar en la segunda son:

**tipo origine costo/ricavo**: contiene la lista de códigos de costos/ingresos previstos para el cálculo SAL de los proyectos de ese tipo específico;  

**descrizione**: es la descripción de los costos/ingresos;  

**tipo**: indica si es un costo o un ingreso.  

**espressione filtro**: si el campo no está valorizado, se consideran todos los documentos previstos para el código específico. En cambio, si se desea excluir ciertos documentos (por tipo, numeración, etc.), es posible configurar una expresión de filtrado.  

![](/img/it-it/configurations/tables/projects/revenue.png)