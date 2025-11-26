---
title: Tipos de Actividad
sidebar_label: Tipos de Actividad
sidebar_position: 2
ai_generated: true
---

Los tipos de **Actividad<!-- Attività -->** disponibles son:<!-- I tipi di Attività disponibili sono: -->

**Generar Script<!-- Generate Script -->**<!-- Generate Script -->
> Permite crear un script genérico utilizando la librería **Blockly** o escribiendo directamente código **C#**.

**Fuente de Datos<!-- Data Source -->**<!-- Data Source -->
> Permite seleccionar una Fuente de Datos<!-- Data Source --> - desde la pestaña **Configuración Actividad<!-- Configurazione Attività -->** - de una colección existente de Fuentes de Datos<!-- Data Sources --> creada previamente por el usuario (desde Fluentis).   
> Una actividad de tipo Fuente de Datos<!-- Data Source --> permite crear una actividad utilizable en una tarea que retorna el record set de un datasource<!-- datasource --> realizado en Fluentis gestionando posibles parámetros de entrada.

<!--
:::success Video Tutorial
A questo link **[video](https://youtu.be/egDCFGZOu14)** troverai la spiegazione su questo tipo di attività.
::: 
-->

**Ejecutar Reporte<!-- Run Report -->**<!-- Run Report -->
> La actividad de tipo Ejecutar Reporte<!-- Run Report --> permite crear y guardar una actividad que generará un reporte con un posible conjunto de parámetros de entrada.

**Consulta SQL<!-- SQL Query -->**<!-- SQL Query -->
> La actividad de tipo Consulta SQL<!-- SQL Query --> permite crear y guardar una actividad que ejecuta una consulta SQL y retorna el record set. Supervisor permitirá ejecutar dos tipos de actividades Consulta SQL<!-- SQL Query -->:
> Basada en una Linked Query, es decir, una consulta creada en Fluentis mediante el Fluentis Query Studio.
> Basada en un script, es decir, una consulta SQL escrita manualmente en este contexto.

<!--
:::success Video Tutorial
A questo link **[video](https://youtu.be/bzyelPIs9tk)** troverai la spiegazione su questo tipo di attività.
:::
-->

**Procedimiento Almacenado<!-- Stored Procedure -->**<!-- Stored Procedure -->
> La actividad de tipo Procedimiento Almacenado<!-- Stored Procedure --> permite crear y guardar una actividad que ejecutará un procedimiento almacenado con un posible conjunto de parámetros de entrada y un posible conjunto de parámetros de salida.

**Plantilla de Correo<!-- Mail Template -->**<!-- Mail Template -->
> La actividad de tipo Plantilla de Correo<!-- Mail Template --> permite crear y guardar una actividad que generará una plantilla para el eventual e-mail a enviar basada en plantillas de Word y para enviar múltiples correos electrónicos mediante los parámetros preconfigurados, entre ellos ToFieldFormula.