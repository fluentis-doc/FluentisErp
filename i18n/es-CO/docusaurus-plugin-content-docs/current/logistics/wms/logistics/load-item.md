---
title: Carga de artículo
sidebar_position: 1
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de **carga de artículo<!-- carico articolo -->** permite registrar de manera precisa la llegada de los artículos<!-- articoli --> en los almacenes<!-- magazzini -->. A través de este procedimiento, los operarios pueden escanear el código de barras del artículo y de la ubicación, ingresar la cantidad a cargar y, en el caso de artículos gestionados por lotes, especificar también el lote correspondiente. Una vez confirmada la operación, el movimiento de almacén<!-- movimento di magazzino --> se crea automáticamente, asegurando una gestión eficaz de las existencias<!-- giacenze --> y una trazabilidad completa.
:::

Este procedimiento se utiliza para crear un movimiento de carga<!-- movimento di carico --> de un artículo<!-- articolo --> en una ubicación concreta.        
En el campo **Código de barras<!-- Codice barcode -->**, el operario solo tendrá que leer el código de barras del artículo<!-- articolo --> y luego el de la ubicación en la que desea cargarlo.           
Posteriormente, solo tendrá que ingresar la cantidad a mover, y una vez confirmada se creará también el correspondiente movimiento de almacén<!-- movimento di magazzino -->.       
En caso de que el artículo<!-- articolo --> se gestione por lotes, también aparecerá el campo correspondiente para insertar el lote que deberá ser cargado.        
Además, es posible imprimir la etiqueta del código de artículo<!-- codice articolo --> mediante el botón **Imprimir<!-- Stampa -->** o visualizar la vista previa directamente en el terminal con el botón **Vista previa<!-- Anteprima -->**.          
El botón **Limpiar todo<!-- Pulisci tutto -->** permite vaciar el formulario de todos los datos ingresados.

:::note Nota
El *Código de artículo<!-- Codice Articolo -->* y el *Lote<!-- Lotto -->* deben estar dados de alta en Fluentis.
:::

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de almacén carga/descarga por usuario<!-- Parametri Magazzino Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadItem |

:::note Nota
Si en los [Parámetros de almacén carga/descarga por usuario<!-- Parametri  MagazzinoCarico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado un solo almacén<!-- magazzino --> para ese usuario, se propone ese por defecto; de lo contrario, si hay varios asociados, por defecto no se propone ninguno y el usuario podrá elegir solo entre los listados.
:::

Para toda la información sobre cómo codificar los códigos de barras que se deben leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).