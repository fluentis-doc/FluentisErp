---
title: scarico articolo
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
La función de **scarico articolo** está diseñada para facilitar la extracción de artículos de un almacén. Utilizando el código de barras, el operador puede seleccionar el artículo y la ubicación de donde realizar la extracción, ingresar la cantidad a descargar y, si es necesario, el lote específico. Este procedimiento genera el movimiento de descarga de almacén, actualizando las existencias y garantizando la correcta registración de los flujos de mercancías.
:::

Este procedimiento se utiliza para crear un movimiento de descarga de un artículo desde una ubicación determinada.        
En el campo **codice barcode**, el operador solo deberá leer el código de barras del artículo, luego el de la ubicación de donde quiere descargarlo.        
A continuación, solo deberá ingresar la cantidad a movilizar, y una vez confirmado, se creará también el movimiento de almacén correspondiente.        
En el caso de que el artículo se gestione por lotes, también se visualizará el campo correspondiente para ingresar el lote que debe ser descargado.        
Además, es posible imprimir la etiqueta del código del artículo a través del botón **stampa** o visualizar la vista previa directamente en el terminal con el botón **anteprima**.        
El botón **pulisci tutto** permite vaciar el formulario de todos los datos ingresados.

:::note Nota
El *codice articolo* y el *lotto* deben tener el registro presente en Fluentis.
:::

**parametri carico/scarico** a ingresar en la tabla [Parámetros de Almacén Carga/Descarga por usuario (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Nota
Si en los [Parámetros de Almacén Carga/Descarga por usuario (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) se ha asociado un solo almacén para ese usuario, se propone por defecto ese; de lo contrario, si se han asociado más de uno, por defecto no se propone ninguno y el usuario solo puede elegir entre uno de los que ha ingresado.
:::

Para toda la información sobre cómo codificar los códigos de barras que se leen en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).