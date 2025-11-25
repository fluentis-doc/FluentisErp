---
title: Mover artículo
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de **movimiento de artículo<!-- spostamento articolo -->** permite transferir un producto de una ubicación específica a otra dentro del almacén<!-- magazzino -->. Los operadores pueden ingresar la ubicación de origen y de destino, y especificar la cantidad a mover<!-- movimentare -->. En el caso de artículos gestionados por lote, también es posible indicar el lote a trasladar. Este procedimiento genera automáticamente el movimiento de almacén<!-- movimento di magazzino --> necesario para registrar tanto la salida de la antigua ubicación como la entrada en la nueva.
:::

Este procedimiento se utiliza para crear un movimiento de traslado de un artículo<!-- articolo --> desde una ubicación específica a otra. 
La lectura de la primera ubicación en el formulario completará el campo relativo a la ubicación de origen, mientras que la segunda completará la ubicación de destino.     
Las siguientes lecturas de ubicaciones sobrescribirán solo la ubicación de destino.     
En este punto es posible ingresar la cantidad a mover<!-- movimentare --> usando los botones **+** y **-** o ingresándola directamente.  
Además, es posible imprimir también la etiqueta del código de artículo<!-- codice articolo --> mediante el botón **Imprimir<!-- Stampa -->** o visualizar la vista previa directamente en el terminal con el botón **Vista previa<!-- Anteprima -->**.     
El botón **Limpiar todo<!-- Pulisci tutto -->** permite vaciar el formulario de todos los datos ingresados.      
En caso de que el artículo<!-- articolo --> esté gestionado por lotes, también se mostrará el campo correspondiente en el que se deberá ingresar el lote a mover.

En la parte inferior del formulario hay una cuadrícula que permite ver el stock<!-- giacenza --> y la disponibilidad<!-- disponibilità --> del artículo<!-- articolo --> con la eventual indicación del lote, ubicación, unidad de medida alternativa y stock<!-- giacenza --> en cantidad alternativa.
En la cuadrícula se muestran las siguientes columnas:

> **Unidad de medida<!-- Unità di misura -->**: indica la unidad de medida administrativa (principal) del artículo<!-- articolo -->;      
> **Disponible<!-- Disponibile -->**: indica la cantidad disponible (no reservada) de ese artículo<!-- articolo -->;       
> **Stock (Gest.)<!-- Giacenza (Gest.) -->**: indica el stock<!-- giacenza --> en la unidad de medida administrativa del artículo<!-- articolo -->;        
> **Unidad de medida alternativa<!-- Unità di misura alternativa -->**: indica la unidad de medida alternativa del artículo<!-- articolo -->; solo está presente si la bandera *Default WMS* está habilitada en la pestaña [Unidades de medida alternativas de la ficha de artículo](/docs/erp-home/registers/items/create-new-item);                     
> **Stock<!-- Giacenza -->**: solo se muestra si la bandera *Default WMS* está habilitada en la pestaña [Unidades de medida alternativas de la ficha de artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica el stock<!-- giacenza --> expresado en la unidad de medida alternativa, calculado en base a los movimientos de almacén<!-- movimenti di magazzino -->;         
> **Stock (FC)<!-- Giacenza (FC) -->**: solo se muestra si la bandera *Default WMS* está habilitada en la pestaña [Unidades de medida alternativas de la ficha de artículo](/docs/erp-home/registers/items/create-new-item). Este valor indica el stock<!-- giacenza --> expresado en la unidad de medida alternativa, calculado usando el factor de conversión;    
> **Ubicación<!-- Ubicazione -->**: indica la ubicación de origen del artículo<!-- articolo -->;                      
> **Lote<!-- Lotto -->**: indica el lote del artículo<!-- articolo -->. Solo se muestra si el artículo<!-- articolo --> se gestiona por lotes;     
> **Número de serie<!-- Serial number -->**: indica el número de serie del artículo<!-- articolo -->. Solo se muestra si el artículo<!-- articolo --> se gestiona por número de serie.

Al seleccionar una fila de la cuadrícula, la información se traslada a los campos correspondientes del formulario. 

Al confirmar se genera el movimiento de almacén<!-- movimento di magazzino -->, que en este caso, además del registro principal de salida<!-- registrazione principale di scarico -->, presenta también el registro de contra partida que ha ingresado el artículo<!-- articolo --> en la nueva ubicación.

:::note Nota
La causa<!-- causale --> utilizada debe ser una causa<!-- causale --> de salida<!-- scarico --> con una causa<!-- causale --> de entrada<!-- carico --> como contrapartida.
:::

**Parámetros entrada/salida<!-- Parametri carico/scarico -->** que se deben ingresar en la tabla [Parámetros de Almacén Entrada/Salida<!-- Parametri Magazzino Carico/Scarico --> por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Nota
Si en los [Parámetros de Almacén Entrada/Salida<!-- Parametri Magazzino Carico/Scarico --> por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) solo hay un almacén<!-- magazzino --> asociado a ese usuario, se propone ese por defecto; de lo contrario, si hay más de uno, por defecto no se propone ninguno y el usuario solo puede elegir entre los que están asociados.
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barra<!-- Codice barcode -->**, consulte la página relativa al [Tokenizador de código de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).