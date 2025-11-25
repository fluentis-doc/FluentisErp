---
title: Inventario
sidebar_position: 6
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de **inventario**<!-- inventario --> permite una gestión completa y detallada de las existencias<!-- giacenze --> de almacén<!-- magazzino -->. Los operadores pueden crear inventarios específicos ingresando el número, la fecha del inventario y otra información relevante, incluidas notas y detalles del operador. A través de la creación de listas de inventario<!-- liste inventariali -->, es posible asignar tareas a diferentes operadores para facilitar el proceso de conteo. Durante el inventario, el sistema admite la entrada de datos mediante lectores de códigos de barras, lo que permite registrar rápidamente las cantidades detectadas y gestionar posibles artículos por lote. Al finalizar el inventario, el sistema realiza automáticamente el ajuste de las cantidades lógicas respecto a las físicas, garantizando un alineamiento preciso y oportuno de las existencias<!-- giacenze -->.
:::

Este procedimiento se utiliza para poblar una lista de inventario<!-- lista inventariale --> creada en wpf con los artículos leídos mediante código de barras.  

El operador, a través de WMS, podrá buscar el inventario correspondiente y, al presionar el botón *buscar<!-- ricerca -->*, visualizará únicamente las listas de inventario<!-- liste inventariali --> asociadas a sí mismo.        
Seleccionando la lista y presionando el botón *modificar<!-- modifica -->*, se abre el formulario de ingreso donde, al leer el artículo y su ubicación, se cargarán los datos correspondientes y el operador deberá ingresar la cantidad.           
Al presionar el botón de confirmación, el procedimiento completará en tiempo real la lista de inventario<!-- lista inventariale --> con los datos recién ingresados.         
En caso de que el artículo leído se gestione por lotes, también se mostrará el campo correspondiente para ingresar el lote que debe ser inventariado.         
Si un artículo se lee por segunda vez (misma Clase/Código/Lote (si se gestiona por lotes)) y se indica en la misma ubicación que la primera vez, aparece un pop-up que pregunta si se debe **Agregar<!-- Aggiungere -->** o **Sustituir<!-- Sostituire -->** la cantidad leída previamente.

Una vez completadas las listas de inventario<!-- liste inventariali -->, desde Fluentis se crearán todos los movimientos de ajuste<!-- movimenti di rettifica --> a través del procedimiento de [Diferencias de inventario<!-- Differenze inventariali -->](/docs/logistics/physical-inventory/stock-difference).         

Para el uso de este formulario no es necesario ingresar ningún parámetro en la tabla de [Parámetros de Carga/Descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

:::note Nota
Es posible modificar el comportamiento de la lista de inventario<!-- lista inventariale --> con respecto a la ubicación mediante la marca **Mantener ubicación<!-- Mantieni ubicazione -->** en la tabla de los [Tipos de listas de inventario<!-- Tipi liste inventariali -->](/docs/configurations/tables/logistics/stock-lists-types). Si esta opción está activa, durante el inventario con el WMS la ubicación ingresada no se modificará hasta que se lea otra ubicación diferente; en caso contrario, la ubicación deberá ser ingresada cada vez antes de confirmar el artículo.
:::

Para toda la información sobre cómo codificar los códigos de barras a ser leídos en el campo **Código de barras<!-- Codice barcode -->**, consulte la página correspondiente al [Tokenizador de código de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).