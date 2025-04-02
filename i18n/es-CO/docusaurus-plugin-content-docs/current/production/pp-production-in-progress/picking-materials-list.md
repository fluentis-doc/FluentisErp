---
title: lista prelievo materiali
sidebar_position: 4
---

:::important ¿Para qué sirve? (A cosa serve)
La **lista prelievo materiali** de Fluentis es una herramienta fundamental para la gestión efectiva de los materiales destinados a los pedidos de producción. Permite crear y gestionar listas detalladas de materiales a recoger, vinculando directamente la operación a las necesidades específicas de producción. Esta función se utiliza comúnmente para crear un documento de picking para gestionar eficientemente la transferencia de materiales (por ejemplo, en el WIP), simplificando el proceso logístico y garantizando una trazabilidad precisa.
:::

La lista de recopilación de materiales permite crear y gestionar las listas de recopilación de materiales para los pedidos de producción que requieren su uso.

Es posible buscar entre los pedidos de producción, en estado lanzado y ejecutivo, el que sea de interés para luego realizar dos operaciones diferentes.

La primera, a través del botón **Buscar materiales (Cerca materiali)**, permite realizar el descargue de todos los materiales contenidos en el pedido de producción que tienen como **tipo prelievo**, en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo, el valor **con lista**. Estos materiales se consumen en el momento en que se presiona el botón crear movimientos, que en este caso crea el movimiento de descargue del almacén.

La segunda operación permite mover los materiales desde el almacén en el que están almacenados al almacén WIP, por ejemplo. Esto se lleva a cabo utilizando el botón **Buscar materiales de picking (Cerca materiali picking)**; el cual permite crear documentos de picking, por lo tanto, no son verdaderas registraciones, sino documentos de traslado de materiales que se podrán visualizar en la ventana [Picking](/docs/logistics/picking/search-picking) presente en el área logística. 
En este caso, el botón **crea movimenti** genera el documento de picking, en el cual para los materiales que tienen *Tipo de recopilación con lista* se establecerán la causante y el almacén que ya están presentes en la línea de materiales del pedido de producción para poder ser descargados definitivamente; mientras que, para los materiales con *Tipo de recopilación manual*, se establecerán la causante y el almacén configurados en el “Tipo de picking” utilizado. Los materiales trasladados al almacén WIP serán luego descargados dentro de las declaraciones de producción. 
La registración se realizará en un segundo momento a través del procedimiento dedicado al descargue del picking.

## Filtro

En esta pestaña es posible buscar los pickings deseados en función de los filtros introducidos.

*Botones específicos*:

> **Buscar materiales (Cerca materiali)**: al buscar materiales mediante este botón, será posible crear directamente las registraciones de almacén. Entre todos los datos reportados a continuación, sobre el detalle de cada material, es importante destacar la relevancia del indicador Mov. que, si está activo, indica que para ese material se ha elegido el tipo de recopilación con lista en los Parámetros MRP del artículo, mientras que si el indicador no está activo, significa que se ha optado por el tipo de recopilación manual. (Para más detalles sobre el significado de este tipo de recopilaciones, se remite al artículo relativo a los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo).  
> **Buscar materiales de picking (Cerca materiali picking)**: al buscar materiales mediante este botón, será posible crear documentos de picking, por lo tanto, no son verdaderas registraciones, sino documentos de traslado de materiales que se podrán visualizar en la ventana [Picking](/docs/logistics/picking/search-picking) presente en el área logística. En este caso, la registración se realizará en un segundo momento, después de un segundo control.  
> **crea movimenti**: permite, después de haber seleccionado los materiales en base al tipo de búsqueda realizada, crear los movimientos de almacén (el descargue) o el documento de picking.  
En caso de que se cree el picking, para los materiales que son con *Tipo de recopilación con lista* se establecerán la causante y el almacén que ya están presentes en la línea de materiales del pedido de producción; mientras que, para los materiales con *Tipo de recopilación manual*, se establecerán la causante y el almacén configurados en el *Tipo de picking* del *Tipo de picking* utilizado.

## Restauración de registración (Ripristino registrazione)

En esta pestaña se pueden restaurar las movimentaciones creadas anteriormente.  
Al seleccionar una línea, es posible visualizar las registraciones y los pickings creados, respectivamente en las pestañas **registrazioni di prelievo generate** y **picking generati da prelievo**.  
A través del botón **cancella lista prelievo**, es posible restaurar simultáneamente tanto los movimientos como los pickings creados.  
Mientras que, con los botones **cancella registrazioni** y **cancella picking**, el usuario puede elegir restaurar solamente la registración o el picking seleccionado.

*Botones específicos*:

> **cancella lista prelievo**: permite restaurar simultáneamente tanto los movimientos como los pickings creados.  
> **cancella registrazioni**: permite restaurar la registración de almacén seleccionada en la pestaña **registrazioni di prelievo generate**.  
> **cancella picking**: permite restaurar el picking seleccionado en la pestaña **picking generati da prelievo**.  

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).