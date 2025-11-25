---
title: Carga/Traslado UDC
sidebar_position: 2
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función **Carga/Traslado UDC<!-- Carico/Sposta UDC -->** del WMS de Fluentis está diseñada para simplificar el proceso de gestión de unidades de carga<!-- unità di carico -->. Permite a los operadores cargar una unidad de carga<!-- unità di carico --> aún no registrada en el sistema o trasladar una unidad ya cargada desde una ubicación<!-- ubicazione --> a otra, todo mediante la lectura del código de barras. Gracias a esta funcionalidad, el sistema facilita las operaciones de almacén<!-- magazzino --> en tiempo real.
:::

Este procedimiento se utiliza para la lectura de una unidad de carga<!-- unità di carico -->, permitiendo proceder con la *Carga<!-- Carico -->* si la unidad de carga<!-- unità di carico --> aún no ha sido cargada o con el *Traslado<!-- Spostamento -->* si, en cambio, la unidad de carga<!-- unità di carico --> ya ha sido cargada.

De manera simple y rápida, el operador puede realizar estas operaciones leyendo directamente el código de barras de la unidad de carga<!-- unità di carico -->. En el caso de que esta no haya sido cargada, el procedimiento propone automáticamente como ubicación<!-- ubicazione --> en la que debe cargarse la UDC la que está presente en el encabezado de la propia UDC, y se habilita el botón **Carga<!-- Carico -->**, con el cual se crea el movimiento de almacén<!-- movimento di magazzino --> en tiempo real.      

Mientras que, en el caso de que ya haya sido cargada, el procedimiento solicitará ingresar la ubicación<!-- ubicazione --> de destino del traslado, activando el botón **Trasladar<!-- Sposta -->** con el cual se crearán los respectivos movimientos de descarga<!-- movimenti di scarico --> con contrapartida de carga<!-- contropartita di carico --> en la nueva ubicación<!-- ubicazione -->.     
  
El botón **Limpiar todo<!-- Pulisci tutto -->** permite vaciar el formulario de todos los datos ingresados.    

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** que deben ingresarse en la tabla [Parámetros de carga/descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |

Los parámetros están ingresados dos veces ya que el formulario utiliza tanto una causale<!-- causale --> de carga para las unidades de carga<!-- unità di carico --> a cargar, como una de descarga para las unidades que ya se encuentran cargadas y deben ser descargadas. La causale<!-- causale --> de descarga debe tener una causale de carga<!-- causale di carico --> como contrapartida<!-- contropartita -->.     

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página correspondiente al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).