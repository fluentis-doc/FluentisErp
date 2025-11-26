---
title: Panel Contextual
sidebar_position: 4
ai_generated: true
---

Los paneles contextuales, denominados **Context Panel<!-- Context Panel -->**, permiten una visualización inmediata de información sintética sobre un determinado objeto de negocio de Fluentis.

La construcción de un panel contextual (context panel) implica algunos pasos de parametrización, específicamente:
1. posible creación del dashboard (en caso de que el context panel se base en un dashboard).
2. creación del **context panel** desde su respectivo formulario.
3. parametrización del **context panel** y definición de sus correspondientes vínculos.

Para abrir el formulario correspondiente a los **Context Panel**, ir a **Arm > Platform > Context Panel**

El formulario de los paneles contextuales se estructura de la siguiente manera:

### Menú Ribbon<!-- Ribbon menu -->
El menú Ribbon contiene los controles para interactuar con el formulario:
* Buscar<!-- Search -->: para buscar los context panel ya definidos en Fluentis.
* Nuevo<!-- New -->: para crear un nuevo context panel.
* Editar<!-- Edit -->: para modificar un context panel ya existente.
* Ver<!-- View -->: para visualizar en modo solo lectura un context panel ya existente.
* Eliminar<!-- Remove -->: para eliminar ExtraData ya presentes en Fluentis.

### Cuerpo Central<!-- Corpo Centrale -->
El cuerpo central se compone de una cuadrícula con los siguientes campos:
* Business Object: obligatorio - indica el objeto sobre el que se basa el panel contextual.
* Localized Code: opcional - indica una descripción localizada.
* Name: Nombre.
* Form: opcional - indica el formulario sobre el cual se basa el panel contextual.
* Dashboard: opcional - indica el dashboard sobre el que se basa el panel contextual.
* Report: opcional - indica el reporte en el que se basa el panel contextual.

## Formulario de detalle<!-- Form di dettaglio -->

El formulario de detalle se compone de 3 partes:

### Menú Ribbon<!-- Ribbon menu -->
El menú Ribbon contiene exclusivamente el botón **Guardar<!-- Save -->**, utilizado para guardar la configuración.

### Cabecera<!-- Testata -->
La pestaña relativa a la cabecera se compone de los siguientes inputs/campos:
* Business Object: obligatorio - es el objeto de negocio sobre el que se basa el panel contextual.
* Localized Code: opcional - descripción localizada.
* Name: obligatorio - descripción
* Right:
* Type:
* Dashboard:
* Definition:
* Shot in Context Menu:
* Show in Contextual Panel:
* Image:
* Arm Form Context:
* Order:
* Default binding definition:

### Pestaña de Bindings<!-- Tab dei Bindings -->

***por completar.***

# Ejemplo aplicativo<!-- Esempio applicativo -->
Queremos crear un **panel contextual** que nos muestre el **porcentaje de depreciación<!-- percentuale d'ammortamento -->** del activo fijo que seleccionemos.
El **porcentaje de depreciación<!-- percentuale d'ammortamento -->** se calcula como la relación porcentual entre el fondo de depreciación y el costo histórico del activo fijo.

Para lograr este resultado debemos:
1. Crear, mediante el **FluentisQueryStudio**, la consulta SQL que nos permitirá recuperar los datos de los activos fijos<!-- cespiti --> desde la base de datos de Fluentis MSSQL.
2. Crear el datasource que estará basado en la consulta del punto anterior.
3. Definir un parámetro en el datasource que servirá como filtro WHERE para la consulta según el activo fijo<!-- cespite --> seleccionado.
4. Crear el dashboard que estará basado en el datasource creado en el punto 2.
5. Crear la parametrización en Arm para el panel contextual.
6. Abrir el formulario de los activos fijos (Fixed Assets<!-- cespiti -->).

---
1. Para el uso de **FluentisQueryStudio** consulte la documentación dedicada.

```SQL
SELECT * FROM Fluentis.FI_FixedAssets WHERE FIFA_Id = @ID
```
donde, ```@ID``` es un parámetro que definiremos posteriormente a nivel de **DataSource**.

2. Creamos el datasource basado en la consulta del punto anterior; para la creación de DataSource consulte la documentación respectiva.

Arrastramos en la pestaña ***Visible property*** las propiedades de nuestro interés tales como: **Id**, **Description**, **Code**, **TotalAmount**, **TotalDepreciation**, **NetAmount**.

1. Definimos, a través de la pestaña **parameters**, un parámetro en el datasource recién creado.

)

1. Desde Fluentis, procedemos a crear el dashboard; para todos los detalles relativos a dashboards consulte la documentación dedicada.

2. Desde Arm, creamos la parametrización para el **context panel**.

3. Procedemos a seleccionar un registro desde el formulario de activos fijos<!-- cespiti -->; se mostrará entonces en el panel contextual el porcentaje de depreciación del activo fijo<!-- cespite -->.