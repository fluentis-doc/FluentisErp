---
title: Nuevo Empleado
sidebar_position: 2
ai_generated: true
---

Esta ventana permite ingresar los datos de un nuevo **Empleado<!-- Dipendente -->**. Los datos en la parte superior son:

**Código de empleado<!-- Codice dipendente -->**: contiene el código único del empleado<!-- dipendente -->;

**Nombre de usuario<!-- Nome utente -->**: contiene el usuario del empleado<!-- dipendente -->;

**Contraseña<!-- Password -->**: contiene la contraseña de acceso para el usuario;

**Operador<!-- Operatore -->**: es posible vincular un operador a la ficha del empleado<!-- anagrafica dipendente -->;

**Apellido<!-- Cognome -->**: contiene el apellido del empleado<!-- dipendente -->;

**Nombre<!-- Nome -->**: contiene el nombre del empleado<!-- dipendente -->.

**Código de empleado de nómina<!-- Codice dipendente paghe -->**: código que identifica al empleado<!-- dipendente --> en la gestión de nómina - fundamental, de lo contrario el empleado<!-- dipendente --> no será encontrado en la búsqueda para el cálculo de datos de nómina. El mismo código se utilizará en el archivo generado para la exportación de datos hacia sistemas externos a Fluentis.

Hay varias pestañas disponibles.

**Pestaña Generalidades<!-- Tab Generalità -->**  
Esta pestaña contiene datos generales del empleado<!-- dipendente -->, por ejemplo:  
**Código de cargo<!-- Codice Carica -->**: es una tabla predefinida en la que es posible asignar un código de cargo;  
**Agente**: contiene la ficha de Agente eventualmente vinculada al empleado<!-- anagrafica Agente collegata al dipendente -->;  
**IBAN**: contiene el IBAN del empleado<!-- dipendente -->;  
**D.I./Fecha de emisión<!-- C.I./Data di rilascio -->**: contiene las especificaciones del documento de identidad del empleado<!-- dipendente -->;  
**Deudas con/Empleado<!-- Debiti vs/Dipendente -->**: contiene la cuenta donde imputar las deudas hacia el empleado<!-- dipendente -->.

**Pestaña Asignación de Calificaciones<!-- Tab Allocazione Qualifiche -->**  
En esta pestaña es posible asignar las calificaciones del empleado<!-- dipendente -->, mediante campos como **Niveles contractuales<!-- Livelli contrattuali -->** y **Calificaciones<!-- Qualifiche -->**. Además, es posible asignar un **Centro de costos<!-- Centro di costo -->** y un **Concepto de costo<!-- Voce di costo -->**, datos que también se transferirán a la siguiente pestaña.

**Pestaña Turnos y vacaciones<!-- Tab Turni e ferie -->**  
En esta pestaña es posible ingresar:  
**Horario de trabajo<!-- Orario di lavoro -->**: contiene el horario típico de trabajo del empleado<!-- dipendente -->;  
**Motivo de declaración de actividad<!-- Causale dichiarazione attività -->**: contiene el motivo por defecto a proponer en la declaración de actividad;  
**Turno de trabajo<!-- Turno di lavoro -->**: indica el turno de trabajo típico del empleado<!-- dipendente -->;  
**Vacaciones<!-- Ferie -->**: contiene información sobre las vacaciones previas y actualizadas.

**Pestaña Indemnizaciones<!-- Tab Indennità -->**  
Esta pestaña contiene las posibles indemnizaciones del empleado<!-- dipendente -->, codificadas mediante:  
**Código<!-- Codice -->**: contiene el código de la indemnización;  
**Descripción<!-- Descrizione -->**: contiene la descripción;  
**Valor<!-- Valore -->**: contiene el valor de la indemnización a aplicar.  
Las indemnizaciones pueden codificarse en la tabla correspondiente, accesible con el botón Abrir formulario<!-- Apri form -->.

**Pestaña Funciones<!-- Tab Mansioni -->**  
Esta pestaña contiene las funciones del empleado<!-- dipendente -->, codificables en la tabla Funciones<!-- Mansioni --> y completadas por:  
**Fecha de inicio<!-- Data inizio -->**: contiene la fecha de inicio de la función;  
**Fecha de fin<!-- Data fine -->**: contiene la fecha de fin de la función;  
**Categoría<!-- Categoria -->**: contiene la categoría de la función, codificable en la tabla Categoría de Funciones<!-- Categoria Mansioni --> y su respectiva **Descripción<!-- Descrizione -->**.

**Pestaña Estudios e Idiomas<!-- Tab Studi e Lingue -->**  
En esta pestaña es posible indicar los estudios realizados por el empleado<!-- dipendente -->, codificados en la tabla [Títulos de estudio<!-- Titoli di studio -->], y los Idiomas conocidos, codificados en la tabla [Idiomas conocidos<!-- Lingue conosciute -->], ambas accesibles con el botón Abrir formulario<!-- Apri form -->.

**Pestaña Currículum y Cursos<!-- Tab Curriculum e Corsi -->**  
En esta pestaña es posible ingresar manualmente más datos del empleado<!-- dipendente -->, en las cuadrículas **Currículums** y **Cursos de actualización realizados**. Estos datos se completan con la **Fecha de inicio<!-- Data inizio -->**, la **Fecha de fin<!-- Data fine -->**, con un posible **Proveedor<!-- Fornitore -->** codificado, **Número de horas<!-- Numero di ore -->**, **Costo**, **Evaluación<!-- Valutazione -->**, etc.

**Pestaña Situaciones especiales<!-- Tab Situazioni speciali -->**  
Es posible ingresar en esta pestaña situaciones especiales no previstas en las demás pestañas. Estas situaciones pueden codificarse en la tabla Situaciones especiales.

**Pestaña Contratación<!-- Tab Assunzione -->**  
En esta pestaña es posible indicar la información relativa a la contratación del empleado<!-- dipendente -->:  
**Tipo de asociación<!-- Tipo associazione -->**: es posible indicar un tipo codificado en la tabla Tipos de contratación<!-- Tipi assunzioni -->;  
**Actualmente en prueba<!-- Attualmente in prova -->**: es posible señalar si el empleado<!-- dipendete --> está actualmente en período de prueba;  
**Fecha de inicio<!-- Data inizio -->**: contiene la fecha de inicio de la contratación;  
**Fecha de fin<!-- Data fine -->**: contiene la fecha de finalización de la contratación;  
**Duración días<!-- Durata gg. -->**: es un dato calculado en base a las fechas ingresadas e indica el total de días de contratación.  
Es posible indicar hasta un total de tres períodos de contratación.

**Pestaña Historial laboral<!-- Tab Storia lavorativa -->**  
Esta pestaña contiene el historial laboral del empleado<!-- dipendente --> asociado a los puestos específicos, de hecho los datos requeridos son:  
**Desde fecha/Hasta fecha<!-- Da data/A data -->**: intervalo de tiempo en el que el empleado<!-- dipendente --> permaneció en un determinado puesto;  
**Planta<!-- Impianto -->**: contiene la planta de referencia;  
**Puestos de trabajo<!-- Postazioni di lavoro -->**: contiene el puesto de trabajo;  
**Riesgo<!-- Rischio -->**: contiene el riesgo asociado.

**Pestaña Extra Data<!-- Tab Extra Data -->**  
Esta pestaña contiene posibles Extra Data para el empleado<!-- dipendente -->. Para mayor información, consulte la sección [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata/).