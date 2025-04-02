---
title: carico articolo
sidebar_position: 1
---

:::important ¿Para qué sirve? (A cosa serve)  
La función de **carico articolo** permite registrar de manera precisa la llegada de artículos a los almacenes. A través de este procedimiento, los operadores pueden escanear el código de barras del artículo y de la ubicación, ingresar la cantidad a cargar y, en el caso de artículos gestionados por lotes, especificar también el lote correspondiente. Una vez confirmada la operación, se crea automáticamente el movimiento de almacén, asegurando una gestión efectiva de los inventarios y una trazabilidad completa.  
:::

Este procedimiento se utiliza para crear un movimiento de carga de un artículo en una ubicación determinada.  
En el campo **codice barcode**, el operador solo deberá leer el código de barras del artículo, luego el de la ubicación en la que desea cargarlo.  
A continuación, solo deberá ingresar la cantidad a mover, y una vez confirmado, también se creará el correspondiente movimiento de almacén.  
En caso de que el artículo se gestione por lotes, también se visualizará el campo correspondiente donde se debe ingresar el lote que debe ser cargado.  
Además, es posible imprimir la etiqueta del código de artículo a través del botón **stampa** o visualizar la vista previa directamente en la terminal con el botón **anteprima**.  
El botón **pulisci tutto** permite vaciar el formulario de todos los datos ingresados.

:::note Nota  
El *codice articolo* y el *lotto* deben tener el registro presente en Fluentis.  
:::

**parametri carico/scarico** que se deben ingresar en la tabla [Parámetros de Almacén de Carga/Descarga por usuario (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadItem |

:::note Nota  
Si en los [Parámetros de Almacén de Carga/Descarga por usuario (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado para ese usuario un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre uno de los que están insertados.  
:::

Para toda la información sobre cómo codificar los códigos de barra a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).