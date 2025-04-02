---
title: Ajuste de unidad de carga (Rettifica unità di carico)
sidebar_position: 8
---

:::important ¿Para qué sirve? (A cosa serve)
La función Ajuste de Unidad de Carga del WMS de Fluentis permite realizar modificaciones a los artículos contenidos en una unidad de carga, permitiendo ajustes tanto positivos como negativos.  
Los operadores pueden visualizar todos los artículos presentes, variar las cantidades y agregar o quitar artículos, haciendo que el proceso de actualización de las existencias sea más preciso y eficiente.
:::  

Este procedimiento se utiliza para corregir los artículos de una unidad de carga, de manera positiva o negativa, o para agregar un nuevo artículo o quitar uno ya presente.  
Al leer la unidad de carga, se visualizan en la cuadrícula inferior todos los artículos que contiene, con la indicación de los siguientes campos:

> **articolo**: indica la clase y el código del artículo contenido en la unidad de carga;  
> **descrizione**: indica la descripción del artículo contenido en la unidad de carga;  
> **quantità**: indica la cantidad del artículo contenido en la unidad de carga;  
> **lotto**: indica el lote del artículo contenido en la unidad de carga (presente solo si se gestiona por lotes);  
> **variante**: indica la variante del artículo contenido en la unidad de carga (presente solo si se gestiona por variante).  

Seleccionando uno de los artículos, con los botones **+** y **-**, o mediante el teclado, es posible variar respectivamente en positivo o negativo la cantidad reflejada en la cuadrícula.  
Una vez finalizadas las correcciones en todos los artículos afectados, mediante el botón **conferma** se confirmarán y se llevarán a cabo los movimientos de almacén de ajuste positivos y negativos dentro de la unidad de carga seleccionada.  
El botón **pulisci tutto** permite vaciar el formulario de todos los datos ingresados.  

En caso de que se agregue un nuevo artículo no presente en la unidad de carga, aparecerá un mensaje que permite al usuario decidir si este nuevo artículo debe ser agregado o no a la unidad de carga. En esta situación, es importante recordar que si el artículo (a agregar), se gestiona por lotes, debe introducirse obligatoriamente un lote válido.  
Para eliminar un artículo, basta con llevar la cantidad correspondiente a cero.  

**parametri carico/scarico** que deben ingresarse en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área (Area) | Módulo (Modulo) | Formulario (Form) |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |

Los parámetros se ingresan dos veces ya que el formulario utiliza una causal de descarga para los ajustes negativos y una de carga para los ajustes positivos.

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).