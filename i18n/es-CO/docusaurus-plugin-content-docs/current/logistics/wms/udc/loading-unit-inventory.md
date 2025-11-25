---
title: Inventario unidad de carga
sidebar_position: 9
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función Inventario Unidad de Carga<!-- Inventario Unità di Carico --> del WMS de Fluentis permite realizar un inventario preciso de las unidades de carga<!-- unità di carico --> presentes en el almacén<!-- magazzino -->.        
Los operadores pueden leer la ubicación para visualizar las UDC contenidas y proceder con el registro de las cantidades, generando automáticamente movimientos<!-- movimenti --> de ajuste para alinear las existencias lógicas con las físicas.
:::

Este procedimiento se utiliza para realizar un inventario de las UDC presentes en el almacén<!-- magazzino -->.

Al leer la ubicación, se visualizan en la cuadrícula inferior todas las unidades de carga<!-- unità di carico --> contenidas en ella, mostrando los siguientes campos: 

> **Unidad de carga<!-- Unità di carico -->**: indica el número de la unidad de carga<!-- unità di carico --> contenida en la ubicación;        
> **Tipo**: indica el tipo de la unidad de carga<!-- unità di carico --> contenida en la ubicación;     
> **Fecha de inventario<!-- Data inventario -->**: indica la última fecha en la que se inventarió la unidad de carga<!-- unità di carico --> contenida en la ubicación.  

El siguiente paso es leer la unidad de carga<!-- unità di carico --> a inventariar; si está presente entre las contenidas en la ubicación seleccionada se actualiza la **Fecha de inventario<!-- Data inventario -->** con la fecha de hoy. En caso de que la unidad de carga<!-- unità di carico --> leída no esté presente en la ubicación, se muestra un mensaje de aviso al usuario.      
El botón **Limpiar todo<!-- Pulisci tutto -->** permite limpiar el formulario de todos los datos ingresados.     

Una vez finalizadas las lecturas de la unidad de carga<!-- unità di carico -->, al presionar el botón **Confirmar<!-- Conferma -->**, solo en el caso de que existan unidades de carga<!-- unità di carico --> no inventariadas, el procedimiento creará movimientos<!-- movimenti --> de salida de esas unidades de carga<!-- unità di carico --> desde la ubicación seleccionada y de entrada de las mismas en la ubicación por defecto indicada en la causale<!-- causale --> presente en los 
[Parámetros de Carga/Descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |

Los parámetros están ingresados dos veces porque el formulario utiliza una causale<!-- causale --> de salida de la unidad de carga<!-- unità di carico --> de la ubicación de origen y una de entrada de la unidad de carga<!-- unità di carico --> en la ubicación de destino.

:::note ATENCIÓN<!-- ATTENZIONE -->
La causale<!-- causale --> de entrada asociada debe tener indicada una ubicación por defecto dentro de la tabla de [Causales de almacén<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates/).
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->** consulte la página relativa al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).