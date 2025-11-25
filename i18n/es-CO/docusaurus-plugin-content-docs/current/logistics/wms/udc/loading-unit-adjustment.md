---
title: Rectificación unidad de carga
sidebar_position: 8
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de Rectificación de Unidad de Carga del WMS de Fluentis permite realizar modificaciones en los artículos contenidos en una unidad de carga<!-- unità di carico -->, permitiendo rectificaciones tanto positivas como negativas.  
Los operadores pueden visualizar todos los artículos presentes, modificar las cantidades y agregar o eliminar artículos, haciendo que el proceso de actualización de las existencias sea más preciso y eficiente.
:::

Este procedimiento se utiliza para rectificar los artículos de una unidad de carga<!-- unità di carico -->, ya sea en positivo o negativo, así como para añadir un nuevo artículo o eliminar uno ya presente.  
Al leer la unidad de carga<!-- unità di carico --> se visualizan en la cuadrícula inferior todos los artículos contenidos en su interior, con la indicación de los siguientes campos:

> **Artículo<!-- Articolo -->**: indica la clase y el código del artículo<!-- articolo --> contenido en la unidad de carga<!-- unità di carico -->;  
> **Descripción<!-- Descrizione -->**: indica la descripción del artículo<!-- articolo --> contenido en la unidad de carga<!-- unità di carico -->;  
> **Cantidad<!-- Quantità -->**: indica la cantidad del artículo<!-- articolo --> contenido en la unidad de carga<!-- unità di carico -->;  
> **Lote<!-- Lotto -->**: indica el lote del artículo<!-- articolo --> contenido en la unidad de carga<!-- unità di carico --> (presente sólo si se gestiona por lotes);  
> **Variante**: indica la variante del artículo<!-- articolo --> contenido en la unidad de carga<!-- unità di carico --> (presente sólo si se gestiona por variantes).  

Seleccionando uno de los artículos, con los botones **+** y **-**, o mediante el teclado, es posible modificar respectivamente en positivo o negativo la cantidad reflejada en la cuadrícula.  
Una vez finalizadas las correcciones sobre todos los artículos implicados, a través del botón **Confirmar<!-- Conferma -->** se confirmarán y realizarán los respectivos movimientos de inventario<!-- movimenti di magazzino --> de rectificación positivos y negativos dentro de la unidad de carga<!-- unità di carico --> seleccionada.
El botón **Limpiar todo<!-- Pulisci tutto -->** permite vaciar el formulario de todos los datos ingresados.  

En caso de que se agregue un nuevo artículo que no esté presente en la unidad de carga<!-- unità di carico -->, aparecerá un mensaje que permite al usuario decidir si este nuevo artículo debe ser añadido o no a la unidad de carga<!-- unità di carico -->. En esta situación, es importante recordar que si el artículo (a añadir) es gestionado por lotes, también se debe ingresar obligatoriamente un lote válido.  
Para eliminar, en cambio, un artículo basta con poner la cantidad correspondiente a cero.

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** para ingresar en la tabla [Parámetros de Carga/Descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |

Los parámetros están ingresados dos veces ya que el formulario utiliza una causale<!-- causale --> de descarga para las rectificaciones negativas y una de carga para las rectificaciones positivas.

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [Tokenizador de código de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).