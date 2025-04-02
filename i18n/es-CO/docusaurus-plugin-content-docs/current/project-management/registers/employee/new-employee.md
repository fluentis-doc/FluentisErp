---
title: Nuevo Empleado (Nuovo Dipendente)
sidebar_position: 2
---

Esta ventana permite ingresar los datos de un nuevo **dipendente**. Los datos de la parte superior son:

**codice dipendente**: contiene el código único del empleado;  

**nome utente**: contiene el usuario del empleado;  

**password**: contiene la contraseña de acceso para el usuario;  

**operatore**: es posible vincular un operador al registro del empleado;  

**cognome**: contiene el apellido del empleado;  

**nome**: contiene el nombre del empleado.  

**codice dipendente paghe**: código que identifica al empleado en la gestión de nómina, fundamental; de lo contrario, el empleado no será encontrado en la búsqueda para el cálculo de datos de nómina. Este mismo código se utilizará en el registro del archivo generado para la exportación de datos hacia sistemas externos a Fluentis.  

Hay varias pestañas disponibles.

**Pestaña Generalidades (Tab Generalità)**     
Esta pestaña contiene datos generales del empleado, por ejemplo:  
**codice carica**: es una tabla predefinida donde se puede asignar un código de carga;  
**agente**: contiene el posible registro del Agente vinculado al empleado;  
**iban**: contiene el IBAN del empleado;  
**C.I./Fecha de emisión (C.I./Data di rilascio)**: contiene las especificaciones del documento de identidad del empleado;  
**debiti vs/dipendente**: contiene la cuenta en la cual imputar las deudas hacia el empleado.  

**Pestaña Asignación de Calificaciones (Tab Allocazione Qualifiche)**     
En esta pestaña es posible asignar las calificaciones del empleado, a través de campos como **livelli contrattuali** y **qualifiche**. También se puede asignar un **centro di costo** y una **voce di costo**, datos que serán transferidos también a la siguiente pestaña.  

**Pestaña Turnos y Vacaciones (Tab Turni e ferie)**     
En esta pestaña se pueden ingresar:  
**orario di lavoro**: contiene el horario de trabajo típico del empleado;  
**causale dichiarazione attività**: contiene la causa por defecto a proponer en la declaración de actividad;  
**turno di lavoro**: indica el turno de trabajo típico del empleado;  
**ferie**: contiene indicaciones sobre las vacaciones previas y actualizadas.  

**Pestaña Indemnidades (Tab Indennità)**     
Esta pestaña contiene las posibles indemnidades del empleado, codificadas a través de:  
**codice**: contiene el código de la indemnidad;  
**descrizione**: contiene la descripción;  
**valore**: contiene el valor de la indemnidad a aplicar.  
Las indemnidades se pueden codificar en la tabla correspondiente, accesible con el botón Abrir formulario (Apri form).  

**Pestaña Tareas (Tab Mansioni)**     
Esta pestaña contiene las tareas del empleado, codificables en la tabla Tareas y completadas por:  
**data inizio**: contiene la fecha de inicio de la realización de la tarea;  
**data fine**: contiene la fecha de fin de la realización de la tarea;  
**categoria**: contiene la categoría de la tarea, codificable en la tabla Categoría de Tareas y su respectiva **descrizione**.  

**Pestaña Estudios y Lenguas (Tab Studi e Lingue)**     
En esta pestaña es posible indicar los estudios obtenidos por el empleado, codificados en la tabla [Títulos de estudio (Titoli di studio)], y las Lenguas conocidas, codificadas en la tabla [Lenguas conocidas (Lingue conosciute)], ambas accesibles con el botón Abrir formulario (Apri form).  

**Pestaña Currículum y Cursos (Tab Curriculum e Corsi)**     
En esta pestaña es posible ingresar manualmente datos adicionales del empleado, en las cuadrículas **Currículums** y **corsi di aggiornamento frequentati**. Estos datos se completan con la **data inizio**, la **data fine**, un posible **fornitore** codificado, el **Número de horas**, el **Costo**, la **Evaluación**, etc.  

**Pestaña Situaciones especiales (Tab Situazioni speciali)**     
Es posible ingresar en esta pestaña situaciones especiales no previstas por las otras pestañas. Estas situaciones pueden codificarse en la tabla Situaciones especiales.  

**Pestaña Contratación (Tab Assunzione)**     
En esta pestaña es posible indicar la información relacionada con la contratación del empleado:  
**tipo associazione**: es posible indicar un tipo codificado en la tabla Tipos de contratación;  
**attualmente in prova**: se puede indicar si el empleado está actualmente en período de prueba;  
**data inizio**: contiene la fecha de inicio de la contratación;  
**data fine**: contiene la fecha de fin de la contratación;  
**durata gg.**: es un dato calculado en base a las fechas ingresadas e indica los días totales de contratación.  
Es posible indicar un total de tres períodos de contratación.  

**Pestaña Historia laboral (Tab Storia lavorativa)**     
Esta pestaña contiene la historia laboral del empleado asociada a los puestos específicos, de hecho, los datos requeridos son:  
**Desde fecha/Hasta fecha (Da data/A data)**: intervalo de tiempo en el cual el empleado ha permanecido en un puesto determinado;  
**impianto**: contiene la instalación de referencia;  
**postazioni di lavoro**: contiene el puesto de trabajo;  
**rischio**: contiene el riesgo asociado.  

**Pestaña Datos Extra (Tab Extra Data)**     
Esta pestaña contiene datos extra para el empleado. Para más información, consulte la sección [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata/).