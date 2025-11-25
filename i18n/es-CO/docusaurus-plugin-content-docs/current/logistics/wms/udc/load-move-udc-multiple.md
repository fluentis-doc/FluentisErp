---
title: Carga/Mover UDC Múltiple
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función **Carga/Mover UDC** del WMS de Fluentis está diseñada para simplificar el proceso de gestión de las unidades de carga<!-- unità di carico -->. Permite a los operadores cargar una unidad de carga<!-- unità di carico --> aún no registrada en el sistema o mover una unidad ya cargada de una ubicación<!-- ubicazione --> a otra, todo a través de la lectura del código de barras. Gracias a esta funcionalidad, el sistema facilita las operaciones de almacén<!-- magazzino --> en tiempo real.
:::

Este procedimiento se utiliza para la lectura de una o varias unidades de carga<!-- unità di carico --> para poder proceder con la *Carga masiva<!-- Carico massivo -->*, si las unidades de carga<!-- unità di carico --> aún no están cargadas, o con el *Movimiento masivo<!-- Spostamento massivo -->* si las unidades de carga<!-- unità di carico --> ya se encuentran cargadas.   

El operador puede realizar estas operaciones leyendo directamente el código de barras de una o varias unidades de carga<!-- unità di carico -->. En caso de que estas no estén cargadas, se añadirán directamente a la cuadrícula situada debajo del campo código de barras.   
El procedimiento propone automáticamente como ubicación<!-- ubicazione --> en la cual debe ser cargada la UDC la que está presente en la cabecera de la propia UDC, habilitándose el botón **Cargar<!-- Carico -->**, con el cual se crea el movimiento de almacén<!-- movimento di magazzino --> en tiempo real.   

Por otro lado, en caso de que ya se encuentren cargadas, el procedimiento solicitará ingresar la ubicación<!-- ubicazione --> de destino del movimiento, activando el botón **Mover<!-- Sposta -->**, con el que se crearán los respectivos movimientos de descarga<!-- movimenti di scarico --> con contrapartida de carga<!-- carico --> en la nueva ubicación<!-- ubicazione -->.   

El botón **Limpiar todo<!-- Pulisci tutto -->** permite limpiar el formulario de todos los datos ingresados.   

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** que se deben ingresar en la tabla [Parámetros de Carga/Descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario<!-- Form --> |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

Los parámetros se insertan dos veces ya que el formulario utiliza tanto una causale<!-- causale --> de carga<!-- carico --> para las unidades de carga<!-- unità di carico --> a cargar, como una de descarga<!-- scarico --> para las unidades de carga<!-- unità di carico --> ya cargadas y por tanto a descargar. La causale<!-- causale --> de descarga<!-- scarico --> debe tener una causale<!-- causale --> de carga<!-- carico --> como contrapartida.   

Para toda la información sobre cómo codificar los códigos de barras para ser leídos en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).