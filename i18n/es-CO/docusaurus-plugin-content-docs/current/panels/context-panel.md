---
title: context panel
sidebar_position: 4
---

Los paneles contextuales, conocidos como **context panel**, permiten una visualización inmediata de información resumida sobre un determinado objeto de negocio de Fluentis.  

La construcción de un panel contextual (panel contextual) implica algunos pasos de parametrización, más específicamente:
1.  posible creación del tablero (en caso de que el panel contextual se base en un tablero).
2.  creación del **context panel** desde el formulario correspondiente. 
3.  parametrización del **context panel** y definición de los vínculos relacionados.

Para abrir el formulario relacionado con los **context panel**, ir a **Arm** > **Platform** > **Context Panel**.

El formulario de los paneles contextuales está estructurado de la siguiente manera:  

### Menú Ribbon
El menú Ribbon contiene los controles para interactuar con el formulario:
* Buscar (Search): para buscar los paneles contextuales ya definidos en Fluentis. 
* Nuevo (New): para crear un nuevo panel contextual.
* Editar (Edit): para modificar un panel contextual ya existente.
* Ver (View): para visualizar en modo de solo lectura un panel contextual ya existente.
* Eliminar (Remove): para quitar datos extras ya presentes en Fluentis.  

### Cuerpo Central
El cuerpo central se compone de una cuadrícula con los siguientes campos:
* Objeto de negocio (Business Object): obligatorio - indica el objeto sobre el cual se basa el panel contextual.
* Código localizado (Localized Code): opcional - indica una descripción localizada.
* Nombre (Name): Nombre.
* Formulario (Form): opcional - indica el formulario sobre el cual se basa el panel contextual.
* Tablero (Dashboard): opcional - indica el tablero sobre el cual se basa el panel contextual.
* Informe (Report): opcional - indica el informe sobre el cual se basa el panel contextual.

## Formulario de detalle

El formulario de detalle se compone de 3 partes:

### Menú Ribbon
El menú Ribbon contiene exclusivamente el botón **save**, utilizado para guardar la configuración.  

### Encabezado (Testata)
La pestaña relativa al encabezado se compone de los siguientes campos:
* Objeto de negocio (Business Object): obligatorio - se trata del objeto de negocio sobre el cual se basa el panel contextual.
* Código localizado (Localized Code): opcional - descripción localizada.
* Nombre (Name): obligatorio - descripción.
* Derecho (Right): 
* Tipo (Type): 
* Tablero (Dashboard): 
* Definición (Definition): 
* Mostrar en el menú contextual (Shot in Context Menu): 
* Mostrar en el panel contextual (Show in Contextual Panel): 
* Imagen (Image): 
* Contexto del formulario de Arm (Arm Form Context): 
* Orden (Order): 
* Definición de enlace predeterminada (Default binding definition): 

### Pestaña de vínculos (Tab dei Bindings)

***por completar.***


# Ejemplo práctico (Esempio applicativo)
Queremos crear un **panel contextual (pannello contestuale)** que nos muestre el **percentuale d'ammortamento** del activo que seleccionemos.  
El **percentuale d'ammortamento** se calcula como la relación porcentual entre el fondo de depreciación y el costo histórico del activo.  

Para alcanzar este resultado debemos:
1. Crear, mediante **FluentisQueryStudio**, la consulta SQL que nos permitirá recuperar los datos de los activos desde la base de datos de Fluentis MSSQL.
2. Crear el origen de datos que se basará en la consulta mencionada en el punto anterior.
3. Definir un parámetro en el origen de datos que servirá como filtro de WHERE para la consulta según el activo seleccionado.
4. Crear el tablero que se basará en el origen de datos creado en el punto 2.
5. Crear la parametrización en Arm para el panel contextual.
6. Abrir el formulario de los activos fijos (Fixed Assets).
---
1. Para el uso de **FluentisQueryStudio**, se remite a la documentación dedicada.  

```SQL
SELECT * FROM Fluentis.FI_FixedAssets WHERE FIFA_Id = @ID
```
donde, ```@ID``` es un parámetro que definimos posteriormente a nivel de **DataSource**.  

2. Creamos el origen de datos basado en la consulta mencionada en el punto anterior; para la creación del origen de datos se remite a la documentación dedicada.   

Arrastramos en la pestaña ***Propiedad Visible (Visible property)*** las propiedades de nuestro interés, tales como: **Id**, **description**, **Código (Code)**, **Total Monto (TotalAmount)**, **Total Depreciación (TotalDepreciation)**, **Monto Neto (NetAmount)**.  

1. Definimos, a través de la pestaña **parámetros (parameters)**, un parámetro en el origen de datos recién creado.

1. Desde Fluentis, procedemos a crear el tablero; para todos los detalles relativos a los tableros, se remite a la documentación dedicada.  

2. Desde Arm, creamos la parametrización para el **context panel**.  

3. Procedemos a seleccionar un registro desde el formulario de los activos; entonces se mostrará en el panel contextual el porcentaje de depreciación del activo.