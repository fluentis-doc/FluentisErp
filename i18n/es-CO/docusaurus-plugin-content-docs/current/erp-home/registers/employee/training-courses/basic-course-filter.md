---
title: Búsqueda de Cursos Básicos
sidebar_position: 2
---

El filtro se encuentra en la ruta **Inicio > Empleados > Cursos de formación > Cursos básicos**.  

El filtro de datos permite ingresar nuevos *Cursos básicos* o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.  

### ![](/img/neutral/common/search.png) Búsqueda de Cursos Básicos

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.  

### ![](/img/neutral/common/new.png) Ingreso de Cursos Básicos

Para poder ingresar nuevos *Cursos básicos* es necesario presionar el botón **Nuevo**.  

### ![](/img/neutral/common/edit.png) Modificación o ![](/img/neutral/common/view.png) Visualización de Cursos Básicos

Para abrir la gestión de la cuadrícula de resultados, es necesario hacer doble clic en la fila de nuestro interés o, seleccionando una o más filas, presionar los botones **Modificar** o **Visualizar**.  

*Botones específicos*: 

### ![](/img/neutral/common/duplicate.png) Duplicar Cursos Básicos

El botón está habilitado solamente si, desde la cuadrícula de resultados, se selecciona un solo *Curso básico*.  
Para poder duplicar un *Curso básico* existente en un nuevo *Curso básico* es necesario hacer clic en la cuadrícula sobre el *Curso básico* del cual se desea duplicar y presionar el botón **Duplicar**. Se puede duplicar un solo *Curso básico* a la vez. Se muestra una solicitud de:  
> **Tipo de curso básico**: es el *Tipo de curso básico* del nuevo *Curso básico* (dato obligatorio), se propone el *Tipo de curso básico* del *Curso básico* de origen.  
> **Título**: es el *Título* del nuevo *Curso básico* (dato obligatorio).  
> **Área**: es el *Área* del nuevo *Curso básico*, se propone el *Área* del *Curso básico* de origen.  
> **Sector**: es el *Sector* del nuevo *Curso básico*, se propone el *Sector* del *Curso básico* de origen.  
> **Categoría de curso**: es la *Categoría de curso* del nuevo *Curso básico*, se propone la *Categoría de curso* del *Curso básico* de origen.  

Presione posteriormente el botón **OK** o el botón **Cancel** si desea continuar con la actividad de duplicación o no.  
Al finalizar el procesamiento, el nuevo *Curso básico* se visualizará.

### Planificar próximo curso

El botón está habilitado solamente si, desde la cuadrícula de resultados, se selecciona un solo *Curso básico*.  
Para poder planificar un nuevo *Curso de formación* a partir de un *Curso básico* es necesario hacer clic en la cuadrícula sobre el *Curso básico* desde el cual se desea planificar y presionar el botón **Planificar próximo curso**. Se puede planificar un solo *Curso de formación* a la vez.  
El nuevo *Curso de formación* creado tendrá la siguiente información precargada:  
> **tipo corso di formazione**: especificado en la tabla de *Tipos de curso básico* presente en el *Curso básico* de origen.  
> **Año**, **Número** y **Fecha**: basados en lo previsto por la *Numeración* asociada al *Tipo de curso de formación* y a la fecha actual.  
> **Planificado**: indicador de *Curso de formación planificado*.  
> Otras informaciones heredadas del *Curso básico* de origen: *Contenidos*, *Docente*, *Requisitos docente*, *Presencia de extranjeros*, *Evaluación de eficacia*, *Referencias normativas*, *Sector*, *Área*, *Categoría de curso*, *Horas previstas* y *Costo previsto*; la lista de *Tareas* involucradas.  
> Basado en las *Tareas* involucradas, se proponen los *Empleados* que, a la fecha del curso, ocupan esos *Tareas*.  

Al finalizar el procesamiento, el nuevo *Curso de formación* se visualizará.

### Planificar próximo renovación

El botón está habilitado solamente si, desde la cuadrícula de resultados, se selecciona un solo *Curso básico* donde se prevé una renovación (*Datos de renovación del curso* con *Periodicidad* diferente de *cero*).  
Para poder planificar una nueva renovación a partir de un *Curso básico* es necesario hacer clic en la cuadrícula sobre el *Curso básico* desde el cual se desea planificar y presionar el botón **Planificar próximo renovación**. Se puede planificar un solo *Curso de formación* a la vez.  
Se mostrará un mensaje de imposibilidad de creación de renovación si, para el *Curso básico*, nunca se ha realizado un *Curso de formación*.  
El nuevo *Curso de formación* creado tendrá la siguiente información precargada:  
> **Tipo de curso de capacitación**: especificado en la tabla de *Tipos de curso básico* presente en el *Curso básico* de origen.  
> **Año**, **Número** y **Fecha**: basados en lo previsto por la *Numeración* asociada al *Tipo de curso de formación* y a la fecha actual.  
> **Planificado**: indicador de *Curso de formación planificado*.  
> **Renovación**: indicador de *Renovación del Curso de formación*.  
> Otras informaciones heredadas del *Curso básico* de origen: *Docente*, *Requisitos docente*, *Referencias normativas*, *Sector*, *Área*, *Categoría de curso*, la lista de *Tareas* involucradas; del *Curso básico - Renovación*: *Contenidos*, *Presencia de extranjeros*, *Evaluación de eficacia*, *Horas previstas* y *Costo previsto*.  
> Basado en las *Tareas* involucradas, se proponen los *Empleados* que, a la fecha del curso, ocupan esos *Tareas*.  

Al finalizar el procesamiento, el nuevo *Curso de formación* se visualizará.

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).