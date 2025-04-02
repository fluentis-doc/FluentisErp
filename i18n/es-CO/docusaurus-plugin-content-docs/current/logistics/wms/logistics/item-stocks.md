---
title: Inventario de artículo (Giacenza articolo)
sidebar_position: 5
---

:::important ¿Para qué sirve? (A cosa serve)
La función de **inventario de artículo (giacenza articolo)** permite a los operadores visualizar rápidamente los niveles de inventario para cada artículo registrado. A través de una cuadrícula interactiva, es posible extraer información detallada sobre el inventario de gestión, las unidades de medida y los lotes. Además, la función permite analizar los inventarios agrupados por artículo, ubicación o proyecto, ofreciendo así una visión completa de la disponibilidad de materiales. Este procedimiento facilita el seguimiento de las existencias y permite una gestión más precisa e informada de las operaciones de almacén, contribuyendo así a optimizar la eficiencia logística general.
:::

Este procedimiento se utiliza para visualizar el inventario de un artículo.  
El formulario presenta una cuadrícula que modifica sus columnas según los filtros ingresados para la búsqueda.

Por ejemplo, en el caso de que se lea solo el código de una ubicación, al presionar el botón **ricerca** se mostrarán en la cuadrícula inferior los resultados de la búsqueda con la valorización de las siguientes columnas:

> **articolo**: indica el código del artículo;  
> **Inventario (Gest.) (Giacenza (Gest.))**: indica el inventario en la unidad de medida de gestión (principal);  
> **unità di misura**: indica la unidad de medida del artículo;  
> **giacenza**: se valora solo si el indicador *default wms* está habilitado en la pestaña [Unidades de medida alternativas del registro del artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica el inventario expresado en la unidad de medida alternativa, calculado sobre la base de los movimientos de almacén;  
> **Inventario (FC) (Giacenza (FC))**: se valora solo si el indicador *default wms* está habilitado en la pestaña [Unidades de medida alternativas del registro del artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica el inventario expresado en la unidad de medida alternativa, calculado utilizando el factor de conversión;  
> **lotto**: indica el lote del artículo;  
> **descrizione articolo**: indica la descripción del artículo;  
> **variante**: indica el código de variante del artículo;  
> **descrizione variante**: indica la descripción de la variante del artículo.  

Mientras que, al leer el artículo a rectificar, al presionar el botón **ricerca** se mostrarán en la cuadrícula inferior los resultados de la búsqueda con la valorización de las siguientes columnas:

> **ubicazione**: indica la ubicación del artículo;  
> **articolo**: indica el código del artículo;  
> **Inventario (Gest.) (Giacenza (Gest.))**: indica el inventario en la unidad de medida de gestión (principal);  
> **unità di misura**: indica la unidad de medida del artículo;  
> **giacenza**: se valora solo si el indicador *default wms* está habilitado en la pestaña [Unidades de medida alternativas del registro del artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica el inventario expresado en la unidad de medida alternativa, calculado sobre la base de los movimientos de almacén;  
> **Inventario (FC) (Giacenza (FC))**: se valora solo si el indicador *default wms* está habilitado en la pestaña [Unidades de medida alternativas del registro del artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica el inventario expresado en la unidad de medida alternativa, calculado utilizando el factor de conversión;  
> **lotto**: indica el lote del artículo;  
> **variante**: indica el código de variante del artículo;  
> **descrizione variante**: indica la descripción de la variante del artículo.  

:::note Nota
Las columnas que hacen referencia al inventario son tres:
- *Inventario (Gest.) (Giacenza (Gest.))* - (gestional)
- *giacenza*  
- *Inventario (FC) (Giacenza (FC))* - (FC = Factor de conversión)

En caso de usar el indicador **default wms** presente en la pestaña [Unidades de medida alternativas del registro del artículo](/docs/erp-home/registers/items/create-new-item), la primera se valoriza con la unidad de medida principal del artículo, la segunda se pobló con el inventario expresado en la unidad de medida alternativa del artículo y dado por la suma de los movimientos, mientras que la tercera se expresa en la unidad de medida alternativa pero calculada con el factor de conversión.  
Si el indicador **default wms** no está habilitado, las columnas *giacenza* y *Inventario (FC) (Giacenza (FC))* no se valorizarán.
:::

**parametri carico/scarico** que deben ingresarse en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Este parámetro debe ingresarse solo si se desea filtrar los inventarios para un almacén específico (la causal puede dejarse vacía); de lo contrario, si no se ingresa, se mostrarán los inventarios de todos los almacenes.

:::note Nota
Si en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado para ese usuario un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre aquellos que ha ingresado.
:::

Para toda la información sobre cómo codificar los códigos de barras que se deben leer en el campo **codice barcode**, consultar la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).