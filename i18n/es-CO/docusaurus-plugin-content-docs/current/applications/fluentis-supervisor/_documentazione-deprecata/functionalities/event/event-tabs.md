---
title: Pestañas del Evento
sidebar_label: Pestañas del Evento
sidebar_position: 1
ai_generated: true
---

:::info Información<!-- Info -->
El formulario de detalle del *Evento*<!-- *Evento* --> se compone de:
* Un menú de cinta (ribbon) con el que es posible guardar, crear o ejecutar un evento, gestionar los perfiles y manejar los posibles parámetros.
* Información de encabezado, donde se configura el código, la tarea (task) a ejecutar y el grupo de referencia con información obligatoria.
* Tres pestañas para la gestión de los parámetros vinculados a la tarea (task), el log de ejecución y los parámetros de programación (schedulazione<!-- schedulazione -->).
:::

### Pestaña Parámetros<!-- Tab Parametri -->
La pestaña Parámetros<!-- Parametri --> permite gestionar los parámetros de entrada del evento<!-- evento -->.
A través de la columna Task Parameter se accede a la lista de parámetros de la tarea<!-- task --> seleccionada; se procede asociando un código y un nombre desde el Diccionario.

![alt text](/img/it-it/applications/supervisor/supervisor12.png)

### Pestaña Logs<!-- Tab Logs -->
La pestaña LOG permite visualizar el log de ejecución de la tarea<!-- task -->, tanto para las ejecuciones programadas como para las manuales.

![alt text](/img/it-it/applications/supervisor/supervisor13.png)

### Pestaña Programaciones<!-- Tab Schedulazioni -->
La pestaña PROGRAMACIONES permite programar la ejecución del evento<!-- evento --> mediante el botón dedicado.
El pop‑up permite definir el tipo de ocurrencia con los parámetros detallados, distinguiéndose entre:

**Una sola vez<!-- Una volta -->**
> Permite indicar la fecha/hora exacta para la ejecución.

**Diario<!-- Giornaliero -->**
> Permite indicar la hora de inicio, cada cuántos días repetir durante la jornada y en qué intervalo horario.

**Semanal<!-- Settimanale -->**
> Permite una planificación semanal, donde además de las configuraciones de ejecución diaria podemos definir por cuántas semanas repetir e indicar los días exactos de la semana.

**Mensual<!-- Mensile -->**
> Permite una planificación mensual indicando los meses en los que repetir, los días del mes, etc.

Finalmente, será posible indicar una eventual fecha de finalización de la ejecución con el indicador End date y decidir si activar o no la tarea<!-- task --> automáticamente.

![alt text](/img/it-it/applications/supervisor/supervisor14.png)