---
title: Carga/Mover UDC (Carico/Sposta UDC)
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
La función **Carga/Mover UDC (Carico/Sposta UDC)** del WMS de Fluentis está diseñada para simplificar el proceso de gestión de las unidades de carga. Permite a los operadores cargar una unidad de carga aún no registrada en el sistema o mover una unidad ya cargada de una ubicación a otra, todo mediante la escaneado del código de barras. Gracias a esta funcionalidad, el sistema facilita las operaciones de almacén en tiempo real.
:::

Este procedimiento se utiliza para la lectura de una unidad de carga para poder proceder a la *carico* si la unidad de carga está no cargada o al *spostamento* si, por el contrario, la unidad de carga ya está cargada.

De manera simple y rápida, el operador puede realizar estas operaciones leyendo directamente el código de barras de la unidad de carga; en caso de que no esté cargada, el procedimiento propone automáticamente la ubicación donde debe cargarse la UDC, que es la que aparece en la cabecera de la misma UDC, y se activa el botón **carico**, con el que se crea el movimiento de almacén en tiempo real.

Mientras que, en el caso de que ya esté cargada, el procedimiento solicitará ingresar la ubicación de destino del movimiento, activando el botón **sposta**, con el que se crearán los movimientos de descarga correspondientes con contrapartida de carga en la nueva ubicación.

El botón **pulisci tutto** permite vaciar el formulario de todos los datos ingresados.

**parametri carico/scarico** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área (Area) | Módulo (Modulo) | Formulario (Form) |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |

Los parámetros se ingresan dos veces porque el formulario utiliza tanto una causa de carga para las unidades de carga a cargar, como una de descarga para las unidades de carga ya cargadas y, por lo tanto, a descargar. La causa de descarga debe tener una causa de carga como contrapartida.

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).