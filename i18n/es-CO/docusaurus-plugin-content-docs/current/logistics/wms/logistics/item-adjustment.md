---
title: rettifica articolo
sidebar_position: 4
---

:::important ¿Para qué sirve? (A cosa serve)
La función de **rettifica articolo** se utiliza para corregir las existencias de los artículos en el almacén, permitiendo al operador realizar ajustes positivos o negativos. Gracias a una interfaz clara, el operador puede buscar el artículo a rectificar, visualizar la información relacionada y modificar la cantidad directamente en la cuadrícula. Al confirmar la modificación, el sistema genera automáticamente los movimientos de rectificación, asegurando una actualización precisa de las existencias.
:::

Este procedimiento se utiliza para crear ajustes positivos o negativos de un artículo.  
El formulario presenta una cuadrícula que cambia sus columnas según los filtros ingresados para la búsqueda.  
Por ejemplo, en el caso de que solo se lea el código de una ubicación, mediante el botón **ricerca** se visualizarán en la cuadrícula inferior los resultados de la búsqueda con la valoración de las siguientes columnas:

> **articolo**: indica el código del artículo;  
> **unità di misura**: indica la unidad de medida del artículo;  
> **quantità**: indica la cantidad que el operador puede variar manualmente o mediante los botones **+** y **-**;  
> **giacenza**: indica la existencia del artículo calculada en base a los movimientos de almacén;  
> **Existencia (FC) (Giacenza (FC))**: se activa solo si el indicador *default wms* está habilitado en la pestaña [Unidades de medida alternativas del registro de artículos (Unità di misura alternative dell'anagrafica articolo)](/docs/erp-home/registers/items/create-new-item). Este valor indica la existencia expresada en la unidad de medida alternativa, calculada utilizando el factor de conversión;  
> **lotto**: indica el lote del artículo;  
> **descrizione articolo**: indica la descripción del artículo.  

Mientras que, al buscar el artículo a rectificar, mediante el botón **ricerca** se visualizarán en la cuadrícula inferior los resultados de la búsqueda con la valoración de las siguientes columnas:

> **ubicazione**: indica la ubicación del artículo;  
> **unità di misura**: indica la unidad de medida del artículo;  
> **quantità**: indica la cantidad que el operador puede variar manualmente o mediante los botones **+** y **-**;  
> **giacenza**: indica la existencia del artículo calculada en base a los movimientos de almacén;  
> **Existencia (FC) (Giacenza (FC))**: se activa solo si el indicador *default wms* está habilitado en la pestaña [Unidades de medida alternativas del registro de artículos (Unità di misura alternative dell'anagrafica articolo)](/docs/erp-home/registers/items/create-new-item). Este valor indica la existencia expresada en la unidad de medida alternativa, calculada utilizando el factor de conversión;  
> **lotto**: indica el lote del artículo.  

:::note **giacenza** y **Existencia (FC) (Giacenza (FC))**
Es importante recordar que, si el indicador *default wms* está activo en la pestaña [Unidades de medida alternativas del registro de artículos (Unità di misura alternative dell'anagrafica articolo)](/docs/erp-home/registers/items/create-new-item), los valores en los campos **giacenza** y **Existencia (FC) (Giacenza (FC))** estarán expresados en la unidad de medida alternativa correspondiente. Sin embargo, si el artículo se gestiona por lotes, los valores en los campos **giacenza** y **Existencia (FC) (Giacenza (FC))** estarán expresados en la unidad de medida principal del artículo, incluso si el indicador "WMS por defecto (Default WMS)" está activo.
:::

Para poder proceder con la rectificación, es necesario que en la cuadrícula de resultados haya un solo registro.  
En este punto, el operador solo deberá variar la cantidad manualmente, modificando el valor directamente en la cuadrícula, o utilizando los botones **+** y **-**; después de esto, al presionar el botón **conferma** se crearán los respectivos movimientos de rectificación positivos o negativos.

Además, también es posible imprimir la etiqueta del código del artículo mediante el botón **stampa** o visualizar la vista previa directamente en el terminal con el botón **anteprima**.

**parametri carico/scarico** a insertar en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área (Area) | Módulo (Modulo) | Formulario (Form) |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

Los parámetros se insertan dos veces porque el formulario utiliza tanto un motivo de carga para las rectificaciones positivas, como un motivo de descarga para las rectificaciones negativas.  

:::note Nota
Si en los [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado para ese usuario un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir uno de los que están ingresados.
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizer de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).