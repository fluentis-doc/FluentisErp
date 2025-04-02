---
title: corso base
sidebar_position: 3
---

La gestión se encuentra en la ruta **Inicio > Empleados > Cursos de formación > Nuevo curso básico** o se puede realizar desde la **Búsqueda de Cursos básicos**.

:::important ¿Para qué sirve? (A cosa serve)
Los Cursos básicos son plantillas de cursos que se realizan de manera recurrente o no: al contratar nuevos empleados, cuando cambian de función, periódicamente para renovaciones previstas por leyes y normativas.   
:::

## Botones de comando (Pulsanti di comando)

### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón se almacenan toda la información modificada del *corso base* visualizado.

### ![](/img/neutral/common/duplicate.png) Duplicar (Duplica)

Para poder duplicar un *corso base* existente en un nuevo *corso base* es necesario presionar el botón **duplica**. Aparecerá una solicitud de:   
> **tipo corso base**: es el *Tipo de curso básico* del nuevo *corso base* (dato obligatorio), se propone el *Tipo de curso básico* del *corso base* de origen.  
> **codice**: es el *Código* del nuevo *corso base* (dato obligatorio).  
> **titolo**: es el *Título* del nuevo *corso base* (dato obligatorio).  
> **area**: es el *Área* del nuevo *corso base*, se propone el *Área* del *corso base* de origen.  
> **settore**: es el *Sector* del nuevo *corso base*, se propone el *Sector* del *corso base* de origen.  
> **categoria corso**: es la *Categoría de curso* del nuevo *corso base*, se propone la *Categoría de curso* del *corso base* de origen.

Presione a continuación el botón **OK** o el botón **cancel** si desea continuar con la actividad de duplicación o no. 
Al finalizar el procesamiento, se visualizará el nuevo *corso base*.


### Planificar próximo curso (Pianifica prossimo corso)

Para poder planificar un nuevo *Curso de formación* a partir de un *corso base* es necesario presionar el botón **pianifica prossimo corso**.  
El nuevo *Curso de formación* creado tendrá la siguiente información precargada:  
> **tipo corso di formazione**: especificado en la tabla de *Tipos de curso básico* presente en el *corso base* de origen.  
> **anno**, **numero** y **data**: según lo previsto por la *Numeración* asociada al *Tipo de curso de formación* y a la fecha actual.  
> **pianificato**: indicador de *Curso de formación planificado*.  
> Otras informaciones heredadas del *corso base* de origen: *Contenidos*, *Docente*, *Requisitos del docente*, *Presencia de extranjeros*, *Evaluación de la eficacia*, *Referencias normativas*, *Sector*, *Área*, *Categoría de curso*, *Horas previstas* y *Costo previsto*; el listado de *Funciones* implicadas.  
> En base a las *Funciones* implicadas, se proponen los *Empleados* que, a la fecha del curso, cubren esas *Funciones*.  

Al finalizar el procesamiento, se visualizará el nuevo *Curso de formación*.


### Planificar próximo renovado (Pianifica prossimo rinnovo)

El botón está habilitado solamente si, desde la cuadrícula de resultados, se selecciona un solo *corso base* donde se prevé un renovado (*Datos de renovación del curso* con *Periodicidad* diferente de *cero*).  
Para poder planificar un nuevo renovado a partir de un *corso base* es necesario hacer clic en la cuadrícula sobre el *corso base* desde el cual se desea planificar y presionar el botón **pianifica prossimo rinnovo**. Solo se puede planificar un *Curso de formación* a la vez.  
Se visualizará un mensaje de imposibilidad de creación de renovación si, para el *corso base*, nunca se ha realizado un *Curso de formación*. 
El nuevo *Curso de formación* creado tendrá la siguiente información precargada:  
> **tipo corso di formazione**: especificado en la tabla de *Tipos de curso básico* presente en el *corso base* de origen.  
> **anno**, **numero** y **data**: según lo previsto por la *Numeración* asociada al *Tipo de curso de formación* y a la fecha actual.  
> **pianificato**: indicador de *Curso de formación planificado*.  
> **rinnovo**: indicador de *Renovación de Curso de formación*.  
> Otras informaciones heredadas del *corso base* de origen: *Docente*, *Requisitos del docente*, *Referencias normativas*, *Sector*, *Área*, *Categoría de curso*, y el listado de *Funciones* implicadas; del *corso base - Renovado*: *Contenidos*, *Presencia de extranjeros*, *Evaluación de la eficacia*, *Horas previstas* y *Costo previsto*.  
> En base a las *Funciones* implicadas, se proponen los *Empleados* que, a la fecha del curso, cubren esas *Funciones*.  

Al finalizar el procesamiento, se visualizará el nuevo *Curso de formación*.


## Gestión de datos (Gestione dati)

### Datos de encabezado (Dati di testata)

Las informaciones gestionadas son:  
> **tipo corso base**: es el *Tipo de curso básico* del nuevo *corso base* (dato obligatorio), se propone el *Tipo de curso básico* indicado en los *Parámetros de gestión del personal*.  
> **codice**: es el *Código* del nuevo *corso base* (dato obligatorio).  
> **titolo**: es el *Título* del nuevo *corso base* (dato obligatorio).  
> **attivo**: indica que el *corso base* sigue siendo *activo*.  
> **data inizio validità**: es la fecha a partir de la cual el *corso base* es válido.  
> **data fine validità**: es la fecha a partir de la cual el *corso base* deja de ser válido.  
> **ore previste**: son las horas de formación previstas.  
> **costo**: es el costo previsto de formación.  
> **contenuti**: anotaciones libres sobre el tema.  
> **note**: anotaciones libres.  
>    
> **settore**: es el *Sector* empresarial al que está dirigido el *Curso*.  
> **area**: es el *Área* empresarial a la que está dirigido el *Curso*.  
> **categoria corso**: es la *Categoría de curso*.  
> **docente**: es el *Docente* previsto que impartirá el *Curso de formación*.  
> **requisiti docente**: anotaciones libres sobre el tema.  
> **riferimenti normativi**: anotaciones libres sobre el tema.  
> **attestato**: anotaciones libres sobre el tema.  
> **presenza stranieri**: anotaciones libres sobre el tema.  
> **valutazione efficacia**: anotaciones libres sobre el tema.  
>
> **rinnovo**: expansor donde es posible ingresar:  
>
>> **dati rinnovo**: anotaciones libres sobre el tema.  
>> **contenuti**: anotaciones libres sobre el tema.  
>> **note**: anotaciones libres.  
>>
>> **ore previste**: son las horas de formación previstas para cada renovación.  
>> **costo**: es el costo previsto de formación para cada renovación.  
>> **Periodicidad (en meses) (Periodicità in mesi)**: es el período (expresado en meses) que transcurre entre el primer *Curso* y la primera *Renovación* o entre *Renovación* y *Renovación*.  
>> **attestato**: anotaciones libres sobre el tema.  
>> **presenza stranieri**: anotaciones libres sobre el tema.  
>> **valutazione efficacia**: anotaciones libres sobre el tema.  

### Funciones implicadas (Mansioni interessate)

Son las *Funciones* que participan en el *Curso*.  
Con base en las *Funciones* listadas, en el *Curso de formación* creado a partir de este *corso base*, se proponen los *Empleados* que las cubren.  
El listado se compone de la siguiente información:  
> **mansione**: es el código de la *Función*.  
> **descrizione mansione**: es la descripción de la *Función*.  
> **note**: anotaciones libres.  

### Cursos planificados y completados (Corsi pianificati e completati)

En estas dos listas es posible visualizar el historial de los *Cursos de formación planificados* y de los *Cursos de formación completados*.  
A través de un doble clic del mouse sobre la fila deseada es posible gestionar el *Curso de formación* seleccionado.  
La lista de los *Cursos planificados* se compone de la siguiente información:  
> **argomenti da trattare**.  
> **data prevista dalle**.  
> **ore previste**.  
> **docente**.  

La lista de los *Cursos completados* se compone de la siguiente información:  
> **argomenti trattati**.  
> **data effettiva dalle**.  
> **Duración (horas) (Durata (ore))**.  
> **docente**.  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).