---
title: Existencias del artículo
sidebar_position: 5
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de **existencias del artículo<!-- giacenza articolo -->** permite a los operadores visualizar rápidamente las existencias de inventario<!-- giacenze di magazzino --> para cada artículo registrado. A través de una cuadrícula interactiva, es posible extraer información detallada relacionada con la existencia gestionada<!-- giacenza gestionale -->, unidades de medida y lotes<!-- lotti -->. Además, la función permite analizar las existencias agrupadas por artículo, ubicación<!-- ubicazione --> o proyecto, ofreciendo así una visión completa de la disponibilidad<!-- disponibilità --> de los materiales. Este procedimiento facilita el monitoreo del inventario<!-- scorte --> y permite una gestión más precisa e informada de las operaciones de almacén<!-- magazzino -->, contribuyendo así a optimizar la eficiencia logística global.
:::

Este procedimiento se utiliza para visualizar la existencia<!-- giacenza --> de un artículo.    
El formulario muestra una cuadrícula que modifica sus columnas en función de los filtros introducidos para la búsqueda.

Por ejemplo, en el caso de que solo se lea el código de una ubicación<!-- ubicazione -->, usando el botón **Buscar<!-- Ricerca -->** se visualizarán en la cuadrícula de abajo los resultados de la búsqueda con la información de las siguientes columnas:

> **Artículo<!-- Articolo -->**: indica el código del artículo;     
> **Existencia (Gest.)<!-- Giacenza (Gest.) -->**: indica la existencia<!-- giacenza --> en la unidad de medida principal de gestión<!-- unità di misura gestionale (principale) -->;      
> **Unidad de medida<!-- Unità di misura -->**: indica la unidad de medida del artículo;          
> **Existencia<!-- Giacenza -->**: se muestra solo si el flag *Default WMS* está habilitado en la solapa [Unidades de medida alternativas de la ficha del artículo<!-- Unità di misura alternative dell'anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item). Este valor indica la existencia<!-- giacenza --> expresada en la unidad de medida alternativa, calculada en base a los movimientos de inventario<!-- movimenti di magazzino -->;         
> **Existencia (FC)<!-- Giacenza (FC) -->**: se muestra solo si el flag *Default WMS* está habilitado en la solapa [Unidades de medida alternativas de la ficha del artículo<!-- Unità di misura alternative dell'anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item). Este valor indica la existencia<!-- giacenza --> expresada en la unidad de medida alternativa, calculada utilizando el factor de conversión;               
> **Lote<!-- Lotto -->**: indica el lote<!-- lotto --> del artículo;       
> **Descripción del artículo<!-- Descrizione articolo -->**: indica la descripción del artículo;      
> **Variante**: indica el código de variante del artículo;    
> **Descripción de la variante<!-- Descrizione variante -->**: indica la descripción de la variante del artículo.     

Mientras que, al leer el artículo a rectificar, a través del botón **Buscar<!-- Ricerca -->** se visualizarán en la cuadrícula de abajo los resultados de la búsqueda con la información de las siguientes columnas:

> **Ubicación<!-- Ubicazione -->**: indica la ubicación<!-- ubicazione --> del artículo;        
> **Artículo<!-- Articolo -->**: indica el código del artículo;     
> **Existencia (Gest.)<!-- Giacenza (Gest.) -->**: indica la existencia<!-- giacenza --> en la unidad de medida principal de gestión<!-- unità di misura gestionale (principale) -->;      
> **Unidad de medida<!-- Unità di misura -->**: indica la unidad de medida del artículo;          
> **Existencia<!-- Giacenza -->**: se muestra solo si el flag *Default WMS* está habilitado en la solapa [Unidades de medida alternativas de la ficha del artículo<!-- Unità di misura alternative dell'anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item). Este valor indica la existencia<!-- giacenza --> expresada en la unidad de medida alternativa, calculada en base a los movimientos de inventario<!-- movimenti di magazzino -->;         
> **Existencia (FC)<!-- Giacenza (FC) -->**: se muestra solo si el flag *Default WMS* está habilitado en la solapa [Unidades de medida alternativas de la ficha del artículo<!-- Unità di misura alternative dell'anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item). Este valor indica la existencia<!-- giacenza --> expresada en la unidad de medida alternativa, calculada utilizando el factor de conversión;               
> **Lote<!-- Lotto -->**: indica el lote<!-- lotto --> del artículo;       
> **Variante**: indica el código de variante del artículo;    
> **Descripción de la variante<!-- Descrizione variante -->**: indica la descripción de la variante del artículo.     

:::note Nota
Las columnas que hacen referencia a la existencia<!-- giacenza --> son tres: 
- *Existencia (Gest.)<!-- Giacenza (Gest.) -->* - (de gestión<!-- gestionale -->) 
- *Existencia<!-- Giacenza -->*  
- *Existencia(FC)<!-- Giacenza(FC) -->* - (FC = Factor de conversión<!-- Fattore di conversione -->)

En caso de usar el flag **Default WMS** presente en la solapa [Unidades de medida alternativas de la ficha del artículo<!-- Unità di misura alternative dell'anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item), la primera se completa con la unidad de medida principal del artículo, la segunda se llena con la existencia<!-- giacenza --> expresada en la unidad de medida alternativa del artículo y calculada por la suma de los movimientos, mientras que la tercera muestra la existencia<!-- giacenza --> expresada en la unidad de medida alternativa pero calculada utilizando el factor de conversión. Si el flag **Default WMS** no está habilitado, las columnas *Existencia<!-- Giacenza -->* y *Existencia(FC)<!-- Giacenza(FC) -->* no se mostrarán.
:::

**Parámetros de entrada/salida<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de Entrada/Salida por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Este parámetro debe ingresarse solo si se desea filtrar las existencias<!-- giacenze --> por un almacén<!-- magazzino --> específico (la causal puede dejarse vacía). De lo contrario, si no se ingresa, se mostrarán las existencias<!-- giacenze --> de todos los almacenes<!-- magazzini -->.

:::note Nota
Si en los [Parámetros de Entrada/Salida por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado para ese usuario solo un almacén<!-- magazzino -->, se proposará por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propondrá ninguno y el usuario podrá elegir sólo entre aquellos ingresados.
:::

Para toda la información sobre cómo codificar los códigos de barra a leer en el campo **Código de barra<!-- Codice barcode -->**, consulte la página referente al [Tokenizador de códigos de barra<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).