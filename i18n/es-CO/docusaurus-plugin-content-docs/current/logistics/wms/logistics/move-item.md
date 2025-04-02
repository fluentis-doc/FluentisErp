---
title: sposta articolo
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La función de **movimiento de artículo (spostamento articolo)** permite transferir un producto de una ubicación específica a otra dentro del almacén. Los operadores pueden ingresar la ubicación de origen y destino, y especificar la cantidad a mover. En el caso de artículos gestionados por lotes, también es posible indicar el lote a mover. Este procedimiento genera automáticamente el movimiento de almacén necesario para registrar tanto la salida de la antigua ubicación como la entrada en la nueva.
:::

Este procedimiento se utiliza para crear un movimiento de traslado de un artículo de una ubicación específica a otra. 
La lectura de la primera ubicación en el formulario llenará el campo relacionado con la ubicación de origen, mientras que la segunda llenará la ubicación de destino.    
Las lecturas posteriores de ubicaciones sobrescribirán solo la ubicación de destino.    
En este punto, es posible ingresar la cantidad a mover utilizando los botones **+** y **-** o ingresándola directamente.  
Además, también es posible imprimir la etiqueta del código del artículo mediante el botón **Imprimir** o visualizar la vista previa directamente en la terminal con el botón **Vista previa**.    
El botón **Limpiar todo** permite vaciar el formulario de todos los datos ingresados.      
En el caso de que el artículo esté gestionado por lotes, también se mostrará el campo correspondiente donde se deberá ingresar el lote que se debe mover.        
Al confirmar, se genera el movimiento de almacén, que en este caso, además del registro principal de salida, también presenta el registro de contrapartida que ha cargado el artículo en la nueva ubicación.

:::note Nota
La causa utilizada debe ser una causa de salida con una causa de entrada en contrapartida.
:::

**parametri carico/scarico** que se deben ingresar en la tabla [Parámetros de Almacén de Carga/Salida por usuario (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Nota
Si en los [Parámetros de Almacén de Carga/Salida por usuario (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado para ese usuario solo un almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre uno de los ingresados.
:::

Para obtener toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).