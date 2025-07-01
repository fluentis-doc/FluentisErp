---
title: Definición de matriz
sidebar_position: 3
---

Al abrir esta tabla se accede a la máscara de búsqueda de las definiciones de matriz previamente codificadas y es el punto de partida para crear nuevas.  
Al abrir una definición, están presentes los datos de encabezado y dos pestañas subyacentes.  

## Encabezado 

Los datos de encabezado son los siguientes:  
- **Tipo**: campo no activo en esta  
- **Código/Descripción**: identificadores únicos de la definición.  
- **Objeto de negocio**: contiene el objeto de negocio para el cual es válida esta definición.  

## Pestaña Dimensión de la matriz

En esta sección se seleccionan los [Datos adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata) que se utilizarán para crear la matriz, como por ejemplo *Tamaño* y *Color*. Para construir una matriz, se pueden usar datos adicionales de tipo tabular que proporcionan los valores necesarios para poblar la matriz. En la pestaña, dentro de la cuadrícula a la derecha, denominada *Valores de resultado*, se enumeran todos los datos adicionales válidos para el objeto de negocio especificado en el encabezado. Desde esta lista, se pueden elegir los datos adicionales que irán a poblar la matriz y arrastrarlos a la cuadrícula a la izquierda. De esta manera, se especifica que, por ejemplo, *Tamaño* y *Color* compondrán la matriz. Qué valores de tamaño y color serán válidos se especificará en la tabla [Matriz de instancias](/docs/configurations/tables/CPQ/instance-matrices).  
En esta cuadrícula también es posible asociar la posición en los ejes X e Y de los datos.

## Pestaña Definición de la Matriz de Ayuda

Cuando es necesario utilizar más de dos datos adicionales para componer la matriz, se debe recurrir a una matriz de soporte. Esta se divide en dos cuadrículas.  
La cuadrícula de la izquierda, llamada *matrices*, contiene las columnas **código** y **descripción**, que identifican las diferentes matrices de soporte. Se recomienda asignar un código y una descripción apropiados para distinguir claramente los datos adicionales utilizados y facilitar la identificación de la combinación de referencia.  
En la cuadrícula de la derecha, denominada *Detalle de la matriz*, se inserta los datos adicionales válidos para la matriz de soporte seleccionada en la cuadrícula de la izquierda. Solo se pueden elegir los datos adicionales válidos para esta definición, ya insertados en la pestaña anterior.