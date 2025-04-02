---
title: Inventario unidad de carga (Inventario unità di carico)
sidebar_position: 9
---

:::important ¿Para qué sirve? (A cosa serve)  
La función de Inventario de Unidad de Carga del WMS de Fluentis permite realizar un inventario preciso de las unidades de carga presentes en el almacén.  
Los operadores pueden leer la ubicación para visualizar las UDC contenidas y proceder a registrar las cantidades, generando automáticamente movimientos de ajuste para alinear los saldos lógicos con los físicos.
:::  

Este procedimiento se utiliza para llevar a cabo un inventario de las UDC presentes en el almacén.

Al leer la ubicación, se muestran en la cuadrícula inferior todas las unidades de carga contenidas en su interior, con la indicación de los siguientes campos: 

> **unità di carico**: indica el número de la unidad de carga contenida en la ubicación;        
> **tipo**: indica el tipo de la unidad de carga contenida en la ubicación;     
> **data inventario**: indica la última fecha en que se inventarió la unidad de carga contenida en la ubicación.  

El siguiente paso es leer la unidad de carga a inventariar; si esta está presente entre las que se encuentran en la ubicación seleccionada, se actualizará la **data inventario** con la fecha actual. En caso de que, por el contrario, la unidad de carga leída no esté presente en la ubicación, se mostrará un mensaje de aviso al usuario.      
El botón **pulisci tutto** permite vaciar el formulario de todos los datos ingresados.     

Una vez finalizadas las lecturas de la unidad de carga, al presionar el botón **conferma**, solo en caso de que haya unidades de carga no inventariadas, el procedimiento creará movimientos de descarga de esas unidades de carga de la ubicación seleccionada y de carga de las mismas en la ubicación predeterminada indicada en la causa presente en los 
[Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

**parametri carico/scarico** que deben ingresarse en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |

Los parámetros están ingresados dos veces ya que el formulario utiliza una causa de descarga de la unidad de carga desde la ubicación de partida y una de carga de la unidad de carga en la ubicación de destino.

:::note ATENCIÓN (ATTENZIONE)  
La causa de carga asociada debe tener indicada una ubicación predeterminada dentro de la tabla de [Causas de almacén (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).  
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).