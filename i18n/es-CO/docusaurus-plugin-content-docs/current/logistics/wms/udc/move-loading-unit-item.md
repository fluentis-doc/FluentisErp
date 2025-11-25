---
title: Traslado de artículos entre dos unidades de carga
sidebar_position: 7
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función Traslado de Artículos entre Dos Unidades de Carga<!-- Spostamento Articoli tra Due Unità di Carico --> del WMS de Fluentis permite transferir fácilmente artículos<!-- articoli --> desde una unidad de carga<!-- unità di carico --> de origen a una de destino.  
A través de la lectura de los códigos de barras, el operario puede visualizar los artículos<!-- articoli --> contenidos en la primera UDC y, después de seleccionar la UDC de destino, podrá trasladar rápidamente las cantidades deseadas, haciendo el proceso de movimiento<!-- movimentazione --> más eficiente.
:::

Al leer la primera unidad de carga<!-- unità di carico -->, esta se inserta como unidad de carga de origen y se muestran en la cuadrícula inferior todos los artículos<!-- articoli --> contenidos en su interior, junto con la indicación de: *código de artículo*, *cantidad*, *lote* y *descripción del artículo*.  
La segunda lectura, en cambio, introduce la unidad de carga de destino y cada lectura posterior de unidad de carga será considerada como el nuevo destino.  
El siguiente paso es leer el artículo<!-- articolo --> a trasladar (que automáticamente se marca en la cuadrícula inferior) e ingresar la cantidad; también en este formulario, si el artículo<!-- articolo --> se gestiona por lotes, se mostrará el respectivo campo de ingreso.  
Luego será suficiente presionar el botón **Trasladar<!-- Sposta -->** para realizar el movimiento<!-- movimento --> de descarga desde la unidad de carga<!-- unità di carico --> de origen y de carga en la unidad de carga<!-- unità di carico --> de destino.  
El botón **Limpiar todo<!-- Pulisci tutto -->** permite vaciar el formulario de todos los datos ingresados.

:::note Reglas a tener en cuenta para el correcto uso del formulario:<!-- Regole da tenere presente per il corretto utilizzo della form: -->
- Las unidades de carga<!-- unità di carico --> de origen y destino deben ser válidas.
- La unidad de carga<!-- unità di carico --> de origen debe estar cargada.
- El artículo<!-- articolo --> escaneado debe encontrarse dentro de la unidad de carga<!-- unità di carico --> de origen (incluyendo posibles lotes).
- La unidad de carga de destino puede no estar cargada solamente si está vacía o si las cantidades de todos los artículos<!-- articoli --> en su interior son igual a cero; si las cantidades de los artículos<!-- articoli --> en su interior son mayores que cero, esa unidad de carga<!-- unità di carico --> debe estar cargada.
- No es posible superar la cantidad presente en la unidad de carga<!-- unità di carico --> de origen.
- Para la creación del movimiento de almacén<!-- movimento di magazzino --> se controla la disponibilidad<!-- disponibilità --> para el artículo<!-- articolo --> y el lote.
- Las unidades de carga<!-- unità di carico --> de origen y destino no deben estar contenidas en una **Lista de picking UDC / Packing list** o en una **Lista de traslado UDC**.
:::

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros Carga/Descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |

Los parámetros se ingresan dos veces porque el formulario utiliza una causale<!-- causale --> de descarga de la unidad de carga<!-- unità di carico --> de origen y una de carga en la unidad de carga<!-- unità di carico --> de destino.

Para toda la información sobre cómo codificar los códigos de barras que se deben leer en el campo **Código de barra<!-- Codice barcode -->**, consulte la página relativa al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).