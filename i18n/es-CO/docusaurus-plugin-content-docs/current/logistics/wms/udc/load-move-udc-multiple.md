---
title: Carga/Mover UDC Múltiple (Carico/Sposta UDC Multiplo)
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La función **Carga/Mover UDC (Carico/Sposta UDC)** del WMS de Fluentis está diseñada para simplificar el proceso de gestión de las unidades de carga. Permite a los operadores cargar una unidad de carga que aún no está registrada en el sistema o mover una unidad ya cargada de una ubicación a otra, todo mediante la escaneado del código de barras. Gracias a esta funcionalidad, el sistema facilita las operaciones de almacén en tiempo real.
:::

Este procedimiento se utiliza para leer una o más unidades de carga para poder proceder con la *Carga masiva (Carico massivo)*, si las unidades de carga no están cargadas, o con el *Movimiento masivo (Spostamento massivo)*, si las unidades de carga ya están cargadas.  

El operador puede realizar estas operaciones leyendo directamente el código de barras de una o más unidades de carga; en caso de que estas no estén cargadas, se añadirán directamente a la cuadrícula debajo del campo del código de barras.  
El procedimiento propone automáticamente como ubicación en la que debe ser cargada la UDC aquella presente en el encabezado de la UDC misma y habilita el botón **carico**, con el cual se crea el movimiento de almacén en tiempo real.  

Mientras que, en caso de que ya estén cargadas, el procedimiento solicitará que se ingrese la ubicación de destino del movimiento, activando el botón **sposta** con el cual se crearán los movimientos de descarga correspondientes con contrapartida de carga en la nueva ubicación.  

El botón **pulisci tutto** permite vaciar el formulario de todos los datos ingresados.  

**parametri carico/scarico** para insertar en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área (Area) | Módulo (Modulo) | Formulario (Form) |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

Los parámetros se ingresan dos veces ya que el formulario utiliza tanto un motivo de carga para las unidades de carga a cargar, como uno de descarga para las unidades de carga ya cargadas y que deben descargarse. El motivo de descarga debe tener un motivo de carga correspondiente.  

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).