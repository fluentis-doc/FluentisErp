---
title: Tipos de Actividad (Tipi di Attività)
sidebar_label: Tipos de Actividad (Tipi di Attività)
sidebar_position: 2
---

Los tipos de **attività** disponibles son:

**Generar Script (Generate Script)**  
> Permite crear un script genérico, utilizando la biblioteca **Blockly** o escribiendo directamente código **C#**.

**data source**  
> Permite seleccionar una Fuente de Datos - desde la pestaña **configurazione attività** - de una colección existente de Fuentes de Datos previamente creadas por el usuario (desde Fluentis).   
> Una actividad de tipo Fuente de Datos permite crear una actividad utilizable en una tarea que devuelve el conjunto de registros de una fuente de datos realizada en Fluentis gestionando posibles parámetros de entrada.

<!-- :::success Video Tutorial
A este link **[video](https://youtu.be/egDCFGZOu14)** encontrarás la explicación sobre este tipo de actividad.
::: -->

**Ejecutar Reporte (Run Report)**  
> La actividad de tipo Ejecutar Reporte permite crear y guardar una actividad que generará un reporte con un posible conjunto de parámetros de entrada.

**sql query**  
> La actividad de tipo Consulta SQL permite crear y guardar una actividad que ejecutará una consulta SQL y devolverá su conjunto de registros. Supervisor permitirá ejecutar dos tipos de actividades de Consulta SQL:  
> Basada en una Consulta Enlazada (Linked Query), es decir, una consulta creada en Fluentis a través del Fluentis Query Studio.  
> Basada en un script, es decir, una consulta SQL escrita manualmente en este contexto.

<!-- :::success Video Tutorial
A este link **[video](https://youtu.be/bzyelPIs9tk)** encontrarás la explicación sobre este tipo de actividad.
::: -->

**stored procedure**  
> La actividad de tipo Procedimiento Almacenado permite crear y guardar una actividad que ejecutará un Procedimiento Almacenado con un posible conjunto de parámetros de entrada y un posible conjunto de parámetros de salida.

**mail template**  
> La actividad de tipo Plantilla de Correo permite crear y guardar una actividad que generará una plantilla para el eventual correo electrónico a enviar basada en las plantillas de Word y para enviar correos electrónicos múltiples a través de los parámetros preconfigurados, incluyendo ToFieldFormula.