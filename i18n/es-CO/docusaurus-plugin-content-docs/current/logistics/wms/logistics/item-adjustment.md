---
title: Rectificación de artículo
sidebar_position: 4
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de **rectificación de artículo<!-- rettifica articolo -->** se utiliza para corregir las existencias<!-- giacenze --> de los artículos en el almacén<!-- magazzino -->, permitiendo al operador realizar rectificaciones positivas o negativas. Gracias a una interfaz clara, el operador puede buscar el artículo a rectificar, visualizar la información relacionada y modificar la cantidad directamente en la cuadrícula. Al confirmar la modificación, el sistema genera automáticamente los movimientos<!-- movimenti --> de rectificación, asegurando una actualización precisa de las existencias.
:::

Este procedimiento se utiliza para crear rectificaciones positivas o negativas de un artículo<!-- articolo -->.          
El formulario presenta una cuadrícula que varía sus columnas según los filtros ingresados para la búsqueda.        
Por ejemplo, si solo se lee el código de una ubicación, con el botón **Buscar<!-- Ricerca -->** se mostrarán en la cuadrícula inferior los resultados de la búsqueda con la valorización de las siguientes columnas:

> **Artículo<!-- Articolo -->**: indica el código del artículo;     
> **Unidad de medida<!-- Unità di misura -->**: indica la unidad de medida del artículo;     
> **Cantidad<!-- Quantità -->**: indica la cantidad que el operador puede variar manualmente o mediante los botones **+** y **-**;        
> **Existencias<!-- Giacenza -->**: indica las existencias del artículo calculadas en base a los movimientos de almacén<!-- movimenti di magazzino -->;       
> **Existencias (FC)<!-- Giacenza (FC) -->**: se activa solo si la casilla *Default WMS* está habilitada en la pestaña [Unidades de medida alternativas del registro maestro del artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica las existencias expresadas en la unidad de medida alternativa, calculadas utilizando el factor de conversión;               
> **Lote<!-- Lotto -->**: indica el lote del artículo;       
> **Descripción del artículo<!-- Descrizione articolo -->**: indica la descripción del artículo.    

Por otro lado, leyendo el artículo a rectificar, al pulsar el botón **Buscar<!-- Ricerca -->** se mostrarán en la cuadrícula inferior los resultados de la búsqueda con la valorización de las siguientes columnas:

> **Ubicación<!-- Ubicazione -->**: indica la ubicación del artículo;        
> **Unidad de medida<!-- Unità di misura -->**: indica la unidad de medida del artículo;     
> **Cantidad<!-- Quantità -->**: indica la cantidad que el operador puede variar manualmente o mediante los botones **+** y **-**;        
> **Existencias<!-- Giacenza -->**: indica las existencias del artículo calculadas en base a los movimientos de almacén<!-- movimenti di magazzino -->;       
> **Existencias (FC)<!-- Giacenza (FC) -->**: se activa solo si la casilla *Default WMS* está habilitada en la pestaña [Unidades de medida alternativas del registro maestro del artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica las existencias expresadas en la unidad de medida alternativa, calculadas utilizando el factor de conversión;                      
> **Lote<!-- Lotto -->**: indica el lote del artículo.       

:::note **Existencias** y **Existencias (FC)<!-- Giacenza e Giacenza (FC) -->**
Es importante recordar que, si la casilla *Default WMS* está activa en la pestaña [Unidades de medida alternativas del registro maestro del artículo](/docs/erp-home/registers/items/create-new-item), los valores en los campos **Existencias<!-- Giacenza -->** y **Existencias (FC)<!-- Giacenza (FC) -->** se expresarán en la correspondiente unidad de medida alternativa. Sin embargo, si el artículo<!-- articolo --> se gestiona por lotes, los valores en los campos **Existencias<!-- Giacenza -->** y **Existencias (FC)<!-- Giacenza (FC) -->** se expresarán en la unidad de medida principal del artículo, aunque la casilla "Default WMS" esté activa.
:::

Para poder proceder con la rectificación es necesario que en la cuadrícula de resultados haya solo un registro.     
En este punto el operador no tendrá más que modificar la cantidad manualmente, cambiando el valor directamente en la cuadrícula, o bien usando los botones **+** y **-**. Después, al pulsar el botón **Confirmar<!-- Conferma -->**, se crearán los movimientos<!-- movimenti --> de rectificación positivos o negativos correspondientes.

Además, es posible imprimir también la etiqueta del código del artículo<!-- codice articolo --> usando el botón **Imprimir<!-- Stampa -->** o visualizar la vista previa directamente en el terminal con el botón **Vista previa<!-- Anteprima -->**.

**Parámetros de entrada/salida<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de Entrada/Salida por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

Los parámetros se ingresan dos veces ya que el formulario utiliza tanto una causa de entrada para las rectificaciones positivas, como una causa de salida para las rectificaciones negativas.     

:::note Nota
Si en los [Parámetros de Entrada/Salida por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado a ese usuario un solo almacén<!-- magazzino -->, se propondrá por defecto ese. De lo contrario, si hay más de uno asociado, por defecto no se propondrá ninguno y el usuario podrá elegir solo uno de los que se hayan ingresado.
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).