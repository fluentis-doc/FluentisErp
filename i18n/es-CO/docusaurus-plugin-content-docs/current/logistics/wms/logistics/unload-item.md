---
title: Descarga de artículo
sidebar_position: 2
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de **descarga de artículo<!-- scarico articolo -->** está diseñada para facilitar la retirada de los artículos de un almacén<!-- magazzino -->. Utilizando el código de barras, el operador puede seleccionar el artículo y la ubicación desde la cual efectuar la retirada, ingresar la cantidad a descargar y, si es necesario, el lote específico. Este procedimiento genera el movimiento de descarga de almacén<!-- scarico di magazzino -->, actualizando las existencias y garantizando el correcto registro de los flujos de mercancía.
:::

Este procedimiento se utiliza para crear un movimiento de descarga<!-- scarico --> de un artículo desde una determinada ubicación.  
En el campo **Código de barras<!-- Codice barcode -->**, el operador solo deberá leer el código de barras del artículo, luego el de la ubicación desde la que desea descargarlo.  
A continuación, bastará con ingresar la cantidad a mover y, una vez confirmado, se creará también el correspondiente movimiento de almacén<!-- movimento di magazzino -->.  
En caso de que el artículo se gestione por lotes, también aparecerá el campo correspondiente en el que ingresar el lote que se debe descargar.  
Además, es posible imprimir la etiqueta del código de artículo a través del botón **Imprimir<!-- Stampa -->** o visualizar la vista previa directamente en el terminal con el botón **Vista previa<!-- Anteprima -->**.  
El botón **Limpiar todo<!-- Pulisci tutto -->** permite vaciar el formulario de todos los datos ingresados.

:::note Nota
El *Código de Artículo<!-- Codice Articolo -->* y el *Lote<!-- Lotto -->* deben estar registrados en Fluentis.
:::

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** para ingresar en la tabla [Parámetros de almacén de carga/descarga por usuario<!-- Parametri Magazzino Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Nota
Si en los [Parámetros de almacén de carga/descarga por usuario<!-- Parametri Magazzino Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre los que están registrados.
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página correspondiente al [tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).