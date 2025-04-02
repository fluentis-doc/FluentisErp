---
title: definizione di matrice
sidebar_position: 3
---

Al abrir esta tabla se accede a la máscara de búsqueda de las definiciones de matriz previamente codificadas y es el punto de partida para crear nuevas.  
Al abrir una definición, están presentes los datos de encabezado y dos pestañas subyacentes.  

## Encabezado (Testata)

Los datos de encabezado son los siguientes:  
- **Tipo** (Tipo): campo no activo en esta  
- **codice/descrizione**: identificadores únicos de la definición.  
- **oggetto business**: contiene el objeto de negocio para el cual es válida esta definición.  

## Pestaña Tamaño de matriz (Tab Dimensione matrice)

En esta sección se seleccionan los [Datos Extras (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) que se utilizarán para crear la matriz, como por ejemplo *taglia* y *colore*. Para construir una matriz, se pueden usar Datos Extras de tipo tabular que proporcionan los valores necesarios para poblar la matriz. En la pestaña, dentro de la cuadrícula a la derecha, denominada *valori dei risultati*, se enumeran todos los Datos Extras válidos para el objeto de negocio especificado en el encabezado. Desde esta lista, se pueden elegir los Datos Extras que irán a poblar la matriz y arrastrarlos a la cuadrícula a la izquierda. De esta manera, se especifica que, por ejemplo, *taglia* y *colore* compondrán la matriz. Qué valores de tamaño y color serán válidos se especificará en la tabla [Matricias de instancia (Matrici di istanza)](/docs/configurations/tables/CPQ/instance-matrices).  
En esta cuadrícula también es posible asociar la posición en los ejes X e Y de los datos.

## Pestaña definizione di matrice soporte (Tab Definizione matrice supporto)

Cuando es necesario utilizar más de dos Datos Extras para componer la matriz, se debe recurrir a una matriz de soporte. Esta se divide en dos cuadrículas.  
La cuadrícula de la izquierda, llamada *matrici*, contiene las columnas **codice** y **descrizione**, que identifican las diferentes matrices de soporte. Se recomienda asignar un código y una descripción apropiados para distinguir claramente los Datos Extras utilizados y facilitar la identificación de la combinación de referencia.  
En la cuadrícula de la derecha, denominada *matrix dettaglio*, se inserta los Datos Extras válidos para la matriz de soporte seleccionada en la cuadrícula de la izquierda. Solo se pueden elegir los Datos Extras válidos para esta definición, ya insertados en la pestaña anterior.