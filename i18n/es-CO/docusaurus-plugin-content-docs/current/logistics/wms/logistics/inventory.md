---
title: inventario
sidebar_position: 6
---

:::important ¿Para qué sirve? (A cosa serve)
La función de **inventario** permite una gestión completa y detallada de las existencias en el almacén. Los operadores pueden crear inventarios específicos ingresando el número, la fecha del inventario y otra información relevante, incluidas notas y detalles sobre el operador. A través de la creación de listas inventariales, es posible asignar tareas a diferentes operadores para facilitar el proceso de conteo. Durante el inventario, el sistema admite la entrada de datos a través de lectores de códigos de barras, lo que permite registrar rápidamente las cantidades detectadas y gestionar artículos por lote si es necesario. Al final del inventario, el sistema ajusta automáticamente las cantidades lógicas en comparación con las físicas, garantizando una alineación precisa y oportuna de las existencias.
:::

Este procedimiento se utiliza para llenar una lista inventarial creada en WPF con los artículos leídos a través de códigos de barras.  

El operador, a través del WMS, podrá buscar el inventario correspondiente y al presionar el botón *ricerca*, visualizará solo las listas inventariales asociadas a él.        
Al seleccionar la lista y presionar el botón *modifica*, se abrirá el formulario de entrada donde: al leer el artículo y su ubicación, se cargarán los datos correspondientes y el operador deberá ingresar la cantidad.           
Al presionar el botón de confirmación, el procedimiento completará en tiempo real la lista inventarial con los datos recién ingresados.         
En caso de que el artículo leído esté gestionado por lotes, también se mostrará el campo correspondiente donde se deberá ingresar el lote que debe ser inventariado.         
Si un artículo se lee una segunda vez (misma Clase/Código/Lote (si está gestionado por lotes)) y se indica en la misma ubicación que la primera, aparecerá un pop-up que pregunta si **aggiungere** o **Reemplazar (Sostituire)** la cantidad leída anteriormente.

Una vez completadas las listas inventariales, desde Fluentis se crearán todos los movimientos de ajuste a través del procedimiento de [Diferencias inventariales (Differenze inventariali)](/docs/logistics/physical-inventory/stock-difference).         

Para utilizar este formulario, no es necesario ingresar ningún parámetro en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

:::note Nota
Es posible variar el comportamiento de la lista inventarial en relación con la ubicación mediante el indicador **mantieni ubicazione** en la tabla de [Tipos de listas inventariales (Tipi liste inventariali)](/docs/configurations/tables/logistics/stock-lists-types). Si está activo, asegurará que durante el inventario con el WMS, la ubicación ingresada no se modificará hasta que se lea otra ubicación; en caso de que esté desactivado, la ubicación deberá ingresarse cada vez antes de la confirmación del artículo.
:::

Para obtener información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).