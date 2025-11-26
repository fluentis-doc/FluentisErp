---
title: Descripción general
sidebar_label: Descripción general
sidebar_position: 0
ai_generated: true
---

# Fuentes de datos / Consulta SQL / Fluentis Query Studio<!-- Datasources / SQL Query / Fluentis Query Studio -->

## Descripción general<!-- Overview -->
En esta página vemos una panorámica general de las herramientas que ofrece Fluentis para interactuar con la base de datos<!-- base dati -->.  
El nodo **base de datos<!-- database -->** permite al usuario de Fluentis ejecutar determinadas operaciones sobre la base de datos<!-- base dati --> de Fluentis.   
El nodo se compone de las siguientes opciones:
* Esquemas de base de datos<!-- Database Schemas -->
* Fluentis Query Studio
  * Nueva consulta SQL<!-- Nuova query SQL -->
  * Ejemplos<!-- Esempi -->
  * Exportación a Excel<!-- Esportazione in Excel -->
  * Exportación a una cuadrícula<!-- Esportazione in una grid -->
* Fuentes de datos<!-- Data Sources -->


### Esquemas de base de datos<!-- Database Schemas -->
La opción **esquemas de base de datos<!-- database schemas -->** abre un formulario de lectura-escritura que permite agregar esquemas de base de datos<!-- database --> además de los ya presentes por defecto.  

El formulario está compuesto por:
* un ribbon menú con las acciones habituales (buscar<!-- search -->, crear<!-- create -->, eliminar<!-- delete -->).
* un filtro estándar que permite filtrar los registros por Nombre y/o por Naturaleza.
* Una cuadrícula de resultados que permite visualizar en pantalla los esquemas de base de datos<!-- database schema --> presentes.

Para la creación de nuevas tablas en la base de datos<!-- database -->, también mediante asistentes automatizados (ver asistente para extensión), es **necesario** crear un esquema de base de datos<!-- database schema --> personalizado.

### Fluentis Query Studio
La herramienta Fluentis Query Studio permite una interacción con la base de datos<!-- base dati --> de Fluentis, previa asignación de los derechos correspondientes al usuario desde Arm.

![](/img/it-it/applications/database/20250520090348.png)

El formulario, como se muestra en la figura, se compone de:
* un ribbon, (Guardar<!-- Salva -->, Ejecutar<!-- Esegui -->).
* a la derecha un explorador de objetos que permite expandir los diferentes elementos de la base de datos<!-- base dati --> (Tablas, Vistas, Procedimientos almacenados, Funciones, Parámetros, Parámetros dinámicos).
* arriba a la izquierda un editor que permite la escritura de consultas SQL<!-- query SQL -->.
* abajo a la izquierda la cuadrícula de resultados de la consulta.

### Fuentes de datos<!-- Data Sources -->

![](/img/it-it/applications/database/20250520085246.png)

Las fuentes de datos<!-- datasource/datasources --> son orígenes de datos que permiten la exposición de datos estructurada y organizada, y pueden ser reutilizadas para poblar tableros<!-- dashboard --> y/o extradata.  
El formulario de fuentes de datos<!-- datasource/datasources --> se compone de la siguiente manera:  
* Un Ribbon menú: con las acciones habituales permitidas al usuario respecto a la creación, modificación, eliminación de registros nuevos.
* Un filtro estándar que permite la búsqueda de registros.
* Una cuadrícula de resultados que permite la visualización de los registros (fuentes de datos<!-- datasources -->).