---
title: Pestañas de la Actividad (Tabs dell'Attività)
#hide_title: true
sidebar_label: Pestañas de la Actividad (Tabs dell'Attività)
sidebar_position: 1
---

:::danger Nota (Nota)
Una vez abierta la forma de detalle de la actividad, en la parte superior se encuentran algunos parámetros estándar como *codice*, *nome*, *descrizione*, *Fecha de Creación (Data Crazione)*, *data ultima modifica*, *gruppo* y *tipo attività*. Para estos dos últimos, es necesario prestar mucha atención, porque determinan cómo se compondrá la actividad.
:::

### Pestañas de actividades (Tabs attività)

La forma de actividades está compuesta por un formulario de búsqueda dedicado, que incluye:
* un **menú ribbon** para la gestión de las principales operaciones estándar.  
* un **filtro estándar**.  
* una **cuadrícula de resultados**, que muestra la lista de actividades divididas en grupos y subgrupos.  

![alt text](/img/it-it/applications/supervisor/supervisor6.png)

### Parámetros Vinculables (Parametri Collegabili)

Todos los tipos de Actividades tienen *Parámetros Vinculables* (tanto de entrada como de salida); estos parámetros, a diferencia de los globales, tienen visibilidad local dentro de la actividad, tarea o evento.  
Estos permiten definir todos los parámetros que se vincularán a la actividad en entrada y en salida.  
Esta configuración luego se asociará al bloque accesible a través de Tareas, permitiendo gestionar los parámetros.  

Para crear un parámetro es necesario completar:
* **codice** > indica el código del parámetro.  
* **Nombre (Nome) / Descripción (Descrizione)** > para indicar nombre y descripción localizados según el diccionario.  
* **Parámetro de entrada (Input parameter)** > permite definir si el parámetro debe ser leído en entrada o salida.  
* **Requerido (Required)** > indica los parámetros obligatorios, que se expondrán automáticamente en el bloque.  
* **Tipo (Type)** > indica el tipo de dato a asociar con el parámetro.  
* **Parámetro Global (Global Parameter)** > permite usar un parámetro global para valorar el parámetro específico.  

### Configuración de Actividad (Configurazione Attività)

La pestaña **configurazione attività** permite configurar la actividad especificando los parámetros requeridos para su funcionamiento.  

Según el tipo de actividad, es decir, en qué tipo se basa (Script, Fuente de datos, Ejecutar Informe, Consulta SQL, Procedimiento Almacenado, Plantilla de Correo), estarán disponibles diferentes opciones de parametrización.  

En la página **Tipos de actividades (Tipi di attività)** se analizan todos los tipos.