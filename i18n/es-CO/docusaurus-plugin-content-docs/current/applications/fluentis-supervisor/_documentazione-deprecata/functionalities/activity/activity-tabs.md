---
title: Tabs de la Actividad
#hide_title: true
sidebar_label: Tabs de la Actividad
sidebar_position: 1
ai_generated: true
---

:::danger Nota<!-- Nota -->
Una vez que se abre el formulario de detalle de la actividad<!-- form di dettaglio dell'attività -->, en la parte superior están presentes algunos parámetros estándar como *Código*, *Nombre*, *Descripción*, *Fecha de Creación*, *Fecha de Última Modificación*, *Grupo* y *Tipo de Actividad*. Para estos dos últimos, se debe prestar mucha atención, porque determinan cómo se va a componer la actividad.
:::

### Tabs de la actividad<!-- Tabs attività -->

El formulario de las actividades<!-- form delle attività --> está compuesto por un formulario de búsqueda dedicado que contiene:
* un **menú ribbon<!-- ribbon menu -->** para la gestión de las principales operaciones estándar.
* un **filtro estándar**.
* una **cuadrícula de resultados<!-- griglia dei risultati -->**, que muestra la lista de las actividades<!-- attività --> divididas en grupos y subgrupos.

![alt text](/img/it-it/applications/supervisor/supervisor6.png)

### Parámetros Vinculables<!-- Parametri Collegabili -->

Todos los tipos de Actividad tienen *Parámetros Vinculables* (tanto de entrada como de salida), estos parámetros, a diferencia de los globales, tienen visibilidad local dentro de la actividad, tarea<!-- task --> o evento.
Esto permite definir todos los parámetros que serán vinculados a la actividad en entrada y en salida.  
Esta configuración se asociará luego al bloque que se puede usar a través de la tarea<!-- Task --> permitiendo gestionar los parámetros.

Para crear un parámetro es necesario completar:
* **Código<!-- Codice -->** > corresponde al código del parámetro.
* **Nombre** / **Descripción** > para indicar el nombre y la descripción localizados según el diccionario.
* **Parámetro de entrada<!-- Input parameter -->** > permite definir si el parámetro debe ser leído como entrada o salida.
* **Obligatorio<!-- Required -->** > indica los parámetros obligatorios, que por tanto se expondrán automáticamente en el bloque.
* **Tipo<!-- Type -->** > indica el tipo de dato a asociar al parámetro.
* **Parámetro Global<!-- Global Parameter -->** > permite usar un parámetro global para valorizar el parámetro específico.

### Configuración de la Actividad<!-- Configurazione Attività -->

La pestaña **Configuración de la Actividad<!-- Configurazione Attività -->** permite configurar la actividad especificando los parámetros requeridos para su funcionamiento.

Dependiendo del tipo de actividad<!-- tipologia d'attività -->, es decir, en qué se basa (Script, Datasource, Ejecutar Reporte<!-- Run Report -->, Consulta SQL<!-- SQL Query -->, Procedimiento Almacenado<!-- Stored Procedure -->, Plantilla de Correo<!-- Mail Template -->), estarán disponibles diferentes opciones de parametrización.

En la página **Tipos de actividad<!-- Tipi di attività -->** se analizan todos los tipos.