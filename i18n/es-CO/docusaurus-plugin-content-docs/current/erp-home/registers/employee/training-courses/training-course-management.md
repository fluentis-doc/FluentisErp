---
title: corso di formazione
sidebar_position: 5
---

La gestión se encuentra en la ruta **Inicio > Empleados > Cursos de formación > Nuevo curso de formación (Home > Dipendenti > Corsi di formazione > Nuovo corso di formazione)** o se puede realizar desde la **Búsqueda de Cursos de formación (Ricerca Corsi di formazione)**.

:::important ¿Para qué sirve? (A cosa serve)
Los Cursos de formación reportan la información relacionada con la realización de cursos de Información, Formación y Entrenamiento: al momento de la contratación de nuevos empleados, a sus cambios de puesto, periódicamente para renovaciones requeridas por leyes y normativas, para mejorar las competencias necesarias.
:::

## Botones de comando (Pulsanti di comando)

### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón se almacenan toda la información modificada del *corso di formazione* visualizado.

### ![](/img/neutral/common/duplicate.png) Duplicar (Duplica)

Para poder duplicar un *corso di formazione* existente en un nuevo *corso di formazione*, es necesario presionar el botón **duplica**. Se muestra una solicitud de:  
> **tipo corso di formazione**: es el *Tipo de curso de formación* del nuevo *corso di formazione* (dato obligatorio), se propone el *Tipo de curso de formación* del *corso di formazione* original.  
> **titolo**: es el *Título* del nuevo *corso di formazione* (dato obligatorio).  
> **area**: es el *Área* del nuevo *corso di formazione*, se propone el *Área* del *corso di formazione* original.  
> **settore**: es el *Sector* del nuevo *corso di formazione*, se propone el *Sector* del *corso di formazione* original.  
> **categoria corso**: es la *Categoría de curso* del nuevo *corso di formazione*, se propone la *Categoría de curso* del *corso di formazione* original.  

Presionar posteriormente el botón **OK** o el botón **cancel** si se desea continuar con la actividad de duplicación o no.  
Al finalizar el procesamiento el nuevo *corso di formazione* será visualizado.

### ![](/img/neutral/common/update.png) Actualizar empleados (Aggiorna dipendenti)

El botón está habilitado solamente si existen *Puestos involucrados (Mansioni coinvolte)*.  
Después de introducir un *Puesto* en la lista presente en la pestaña *Puestos involucrados*, para añadir los *Empleados* que ocupan el nuevo *Puesto* introducido, es necesario presionar el botón **aggiorna dipendenti**. Los *Empleados* que ya están en la lista de *Empleados involucrados* no serán modificados.

## Gestión de datos (Gestione dati)

### Datos de cabecera (Dati di testata)

La información gestionada es:  
> **tipo corso di formazione**: es el *Tipo de curso de formación* (dato obligatorio).  
> Al introducir manualmente un nuevo *Curso* se propone el *Tipo de curso de formación* indicado en los *parametri gestione del personale*.  
> 
> **anno/numero/data**: son el *Año* y *Número* de entrada del *corso di formazione* (datos obligatorios).  
> Al introducir un nuevo *corso di formazione*:  
> - la *Fecha* se propone igual a la fecha actual;  
> - el *Año* y el *Número* son propuestos según la *Fecha* y la *Numeración* asociada al *Tipo de curso de formación*.  
> 
> **titolo**: es el *Título* del nuevo *corso di formazione* (dato obligatorio).  
> 
> **tipo corso base/codice/titolo**: son los referencias del *Curso base* si el *corso di formazione* fue creado a partir de un *Curso base*.  
> Esta información es de solo lectura.  
> **note riferite al corso base**: información de solo lectura, son las notas del *Curso base* si el *corso di formazione* fue creado a partir de un *Curso base*.  
> 
> **pianificato**: información de solo lectura, indica que el *corso di formazione* ha sido planificado.  
> 
> **rinnovo**: información de solo lectura, indica que el *corso di formazione* es de renovación de formación.  
> 
> **confermato**: indica que el *corso di formazione* se lleva a cabo y, por lo tanto, está *Confirmado*.  
> Al momento de la confirmación, se propone automáticamente la *data conferma* igual a la fecha actual. La fecha puede ser modificada posteriormente.  
> 
> **data conferma**: es la fecha en la que el *corso di formazione* fue *Confirmado*.  
> Al ingresar la fecha, el *Curso* se confirma automáticamente.  
> 
> **contenuti**: anotaciones libres sobre el tema.  
> **coordinatore e responsabile**: anotaciones libres sobre el tema.  
> **docente**: es el *Docente* previsto o que ha llevado a cabo el *corso di formazione*.  
> **codocente**: es el *Codocente* previsto o que ha llevado a cabo el *corso di formazione*.  
> **requisiti docente**: anotaciones libres sobre el tema.  
> **presenza stranieri**: anotaciones libres sobre el tema.  
> **valutazione efficacia**: anotaciones libres sobre el tema.  
> **riferimenti normativi**: anotaciones libres sobre el tema.  
> 
> **settore**: es el *Sector* empresarial al que está dirigido el *Curso*.  
> **area**: es el *Área* empresarial a la que está dirigido el *Curso*.  
> **categoria corso**: es la *Categoría de curso*.  
> **informazione**: indica que el *Curso* es de *Información* y la indicación está acompañada de anotaciones libres sobre el tema.  
> **formazione**: indica que el *Curso* es de *Formación* y la indicación está acompañada de anotaciones libres sobre el tema.  
> **addestramento**: indica que el *Curso* es de *Entrenamiento* y la indicación está acompañada de anotaciones libres sobre el tema.  
> **sede svolgimento**: anotaciones libres sobre el tema.  
> 
> **completato/in data**: indica que el *corso di formazione* ha sido *Completado* y en qué fecha.  
> Al completar, se propondrá automáticamente la *Fecha* igual a la fecha actual. La fecha puede ser modificada posteriormente.  
> Al ingresar la fecha, el *Curso* se marca automáticamente como *Completado*.  
> 
> **ore previste/effettive**: son las horas previstas y efectivas de formación.  
> **costo previsto/effettivo**: es el costo que se prevé y el costo efectivamente asumido para la formación.  
> **punteggio massimo**: es la puntuación máxima atribuible.  
> **note relative al corso**: anotaciones libres sobre el tema.  
> **note su assenti**: anotaciones libres sobre el tema.  
> **note**: anotaciones libres.

### Fechas del curso (Date corso)

En esta lista se pueden definir fechas y horarios generales, de teoría y de práctica previstos y efectivos, los temas a tratar y tratados y los distintos docentes.  
La lista consta de la siguiente información:  
> Datos previstos (Dati previsti)  
>> **data**: es la fecha prevista del curso.  
>> **dalle**: es la hora prevista de inicio del curso en la fecha prevista (en formato hh:mm).  
>> **alle**: es la hora prevista de fin del curso en la fecha prevista (en formato hh:mm).  
>> **ore teoria**: son las horas de teoría previstas en la hora prevista y en la fecha prevista (en formato hh:mm).  
>> **ore pratica**: son las horas de práctica previstas en la hora prevista y en la fecha prevista (en formato hh:mm).  
>> **argomenti da trattare**: anotaciones libres sobre el tema.  
> La suma de las horas de teoría y de práctica a realizar debe ser igual a la diferencia entre las horas previstas de finalización y de inicio.  
> 
> Datos efectivos (Dati effettivi)  
>> **data**: es la fecha efectiva del curso.  
>> **dalle**: es la hora efectiva de inicio del curso en la fecha efectiva (en formato hh:mm).  
>> **alle**: es la hora efectiva de fin del curso en la fecha efectiva (en formato hh:mm).  
>> **ore teoria**: son las horas de teoría efectivas realizadas en la hora efectiva y en la fecha efectiva (en formato hh:mm).  
>> **ore pratica**: son las horas de práctica efectivas realizadas en la hora efectiva y en la fecha efectiva (en formato hh:mm).  
>> **argomenti trattati**: anotaciones libres sobre el tema.  
>> **docente**: es el *Docente* que ha llevado a cabo el *Curso*.  
>> **codocente**: es el *Codocente* que ha llevado a cabo el *Curso*.  
>> **note su assenti**: anotaciones libres sobre el tema.  
>> **note**: anotaciones libres.  
La suma de las horas de teoría y de práctica realizadas debe ser igual a la diferencia entre las horas efectivas de finalización y de inicio.

### Puestos implicados (Mansioni interessate)

Son los *Puestos* involucrados en la participación del *Curso*.  
Con base en los *Puestos* enumerados, mediante la presión del botón **aggiorna dipendenti**, se proponen los *Empleados* que los ocupan.  
La lista consta de la siguiente información:  
> **mansione**: es el código del *Puesto*.  
> **descrizione mansione**: es la descripción del *Puesto*.  
> **note**: anotaciones libres.

### Empleados involucrados (Dipendenti coinvolti)

En estas dos listas es posible indicar los *Empleados*, previstos que deberían asistir y efectivos que han participado en el *corso di formazione planificado*, su evaluación y el detalle de las fechas y horarios de participación.

La lista de *Empleados involucrados* consta de la siguiente información:  
> **codice**: es el código del *Empleado*.  
> **cognome**: es el apellido del *Empleado*.  
> **nome**: es el nombre del *Empleado*.  
> **ore teoria**: son las horas de teoría efectivas totales realizadas (en formato hh:mm).  
> **ore pratica**: son las horas de práctica efectivas totales realizadas (en formato hh:mm).  
> **valutato il**: es la fecha de evaluación del curso.  
> **valutazione**: anotaciones libres sobre el tema.  
> **punteggio**: es el valor de la puntuación obtenida.  
> **efficace**: indica si el *Curso* ha sido *eficaz*.  
> **note**: anotaciones libres.  

La lista de *Fechas del curso del empleado seleccionado* y relacionada con el *Empleado* seleccionado en la lista de *Empleados involucrados* consta de la siguiente información:  
> **data effettiva**: información de solo lectura, es la fecha efectiva de la participación en el curso.  
> **dalle**: es la hora efectiva de inicio del curso en la fecha efectiva (en formato hh:mm).  
> **alle**: es la hora efectiva de fin del curso en la fecha efectiva (en formato hh:mm).  
> **ore teoria**: son las horas de teoría efectivas realizadas en la hora efectiva y en la fecha efectiva (en formato hh:mm).  
> **ore pratica**: son las horas de práctica efectivas realizadas en la hora efectiva y en la fecha efectiva (en formato hh:mm).  
> **note**: anotaciones libres.  
La suma de las horas de teoría y de práctica realizadas debe ser igual a la diferencia entre las horas efectivas de finalización y de inicio.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).