---
title: Movimiento de artículos entre dos unidades de carga (Spostamento articoli tra due unità di carico)
sidebar_position: 7
---

:::important ¿Para qué sirve? (A cosa serve)
La función de Movimiento de Artículos entre Dos Unidades de Carga del WMS de Fluentis permite transferir fácilmente artículos de una unidad de carga de partida a una de destino.  
A través de la escaneo de códigos de barras, el operador puede visualizar los artículos contenidos en la primera UDC y, después de seleccionar la UDC de destino, puede mover rápidamente las cantidades deseadas, haciendo que el proceso de movimiento sea más eficiente.
:::  

Al escanear la primera unidad de carga, esta se introduce como unidad de carga de partida y se visualizan en la cuadrícula inferior todos los artículos contenidos en su interior, con la indicación de: *código de artículo*, *cantidad*, *lote* y *descripción del artículo*.  
La segunda lectura, en cambio, introduce la unidad de carga de destino y cada lectura subsiguiente de unidad de carga se considerará como la nueva destino.  
El siguiente paso es leer el artículo a mover (que automáticamente se marca en la cuadrícula inferior) e ingresar la cantidad; también en este formulario, si el artículo se gestiona por lotes, se visualizará el campo correspondiente de entrada.  
Después de eso, basta con presionar el botón **sposta** para realizar el movimiento de descarga de la unidad de carga de partida y de carga en la unidad de carga de destino.  
El botón **pulisci tutto** permite vaciar el formulario de todos los datos ingresados.  

:::note Reglas a tener en cuenta para el correcto uso del formulario:
- Las unidades de carga de partida y llegada deben ser válidas.
- La unidad de carga de partida debe estar cargada.
- El artículo escaneado debe estar dentro de la unidad de carga de partida (incluidos los posibles lotes).
- La unidad de carga de destino puede no estar cargada solo si está vacía o si las cantidades de todos los artículos en su interior son iguales a cero; si las cantidades de los artículos en su interior son mayores que cero, esa unidad de carga debe estar cargada.
- No se puede superar la cantidad presente en la unidad de carga de partida.
- Para la creación del movimiento de almacén se verifica la disponibilidad del artículo y del lote.
- Las unidades de carga de partida y de destino no deben estar contenidas en una **Lista de extracción UDC / Packing list** o en una **Lista de transferencia UDC**. 
:::

**parametri carico/scarico** que deben ingresarse en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |

Los parámetros se ingresan dos veces porque el formulario utiliza una causal de descarga desde la unidad de carga de partida y una de carga en la unidad de carga de destino.

Para toda la información sobre cómo codificar los códigos de barra que deben leerse en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barra (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).