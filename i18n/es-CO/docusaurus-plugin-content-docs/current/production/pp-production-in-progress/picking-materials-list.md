---
title: Lista de retiro de materiales
sidebar_position: 4
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La **lista de retiro de materiales<!-- lista prelievo materiali -->** de Fluentis es una herramienta fundamental para la gestión eficaz de los materiales destinados a las órdenes de producción. Permite crear y gestionar listas detalladas de materiales a retirar, vinculando directamente la operación a las necesidades específicas de producción. Esta función se utiliza mucho para crear un documento de picking para gestionar eficazmente la transferencia de materiales (por ejemplo, en el WIP<!-- WIP -->), simplificando el proceso logístico y garantizando una trazabilidad precisa.
:::

La lista de retiro de materiales<!-- lista prelievo materiali --> permite crear y gestionar las listas de retiro<!-- liste di prelievo --> de materiales para las órdenes de producción que lo requieran.

Es posible buscar entre las órdenes de producción en estado lanzado y ejecutivo, la de interés, para luego realizar dos operaciones distintas.

La primera, mediante el botón **Buscar materiales<!-- Cerca materiali -->**, permite realizar la descarga de todos los materiales contenidos en la orden de producción que tienen como **tipo de retiro<!-- tipo prelievo -->**, en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo, el valor **Con lista<!-- Con lista -->**. Estos materiales se consumen en el momento en que se pulsa el botón crear movimientos, que en este caso, crea el movimiento de descarga de almacén<!-- magazzino -->.            

La segunda operación permite trasladar los materiales desde el almacén<!-- magazzino --> donde están almacenados, al almacén WIP<!-- magazzino WIP -->, por ejemplo. Esto ocurre utilizando el botón **Buscar materiales picking<!-- Cerca materiali picking -->**; el cual permite crear documentos de picking, por lo tanto, no son registros reales, sino documentos de traslado de materiales que se podrán visualizar en la ventana Picking presente en el área logística.                
En este caso, el botón **Crear movimientos<!-- Crea movimenti -->** genera el documento de picking, en el cual para los materiales que son de *Tipo de retiro con lista<!-- Tipo prelievo con lista -->* se establecerán la causal<!-- causale --> y el almacén<!-- magazzino --> que ya están presentes en la línea de materiales de la orden de producción, para poder ser descargados definitivamente; mientras que, para los materiales con *Tipo de retiro manual<!-- Tipo prelievo Manuale -->* se establecerán la causal<!-- causale --> y el almacén<!-- magazzino --> configurados en el “Tipo picking” utilizado.  Los materiales trasladados al almacén WIP<!-- magazzino WIP --> luego se descargarán dentro de las declaraciones de producción.            
El registro<!-- registrazione --> se realizará posteriormente mediante el procedimiento dedicado a la descarga del picking.        

## Filtro

En esta pestaña es posible buscar los picking deseados según los filtros ingresados.

*Botones específicos*:

> **Buscar materiales<!-- Cerca materiali -->**: buscando los materiales mediante este botón, será posible crear directamente los registros de almacén<!-- registrazioni di magazzino -->. Entre todos los datos que se muestran a continuación sobre el detalle de cada material, cabe destacar la importancia de la marca Mov., que cuando está activa indica que para ese material se ha elegido el tipo de retiro con lista<!-- tipo di prelievo con lista --> en los Parámetros MRP del artículo, mientras que si la marca no está activa significa que para ese material se ha optado por el tipo de retiro manual<!-- prelievo manuale -->. (Para más detalles sobre el significado de este tipo de retiros consulte el artículo relativo a los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo).      
> **Buscar materiales picking<!-- Cerca materiali picking -->**: buscando los materiales mediante este botón, será posible crear documentos de picking; por lo tanto, no serán registros reales, sino documentos de traslado de materiales que se podrán visualizar en la ventana [Picking](/docs/logistics/picking/search-picking) presente en el área logística. En este caso el registro<!-- registrazione --> se realizará posteriormente, tras una segunda comprobación.             
> **Crear movimientos<!-- Crea movimenti -->**: permite, después de haber seleccionado los materiales en función del tipo de búsqueda realizada, crear los movimientos de almacén<!-- movimenti di magazzino --> (la descarga) o el documento de picking.      
En caso de que se cree el picking, para los materiales que son de *Tipo de retiro con lista<!-- Tipo prelievo Con lista -->* se establecerán la causal<!-- causale --> y el almacén<!-- magazzino --> que ya están presentes en la línea de materiales de la orden de producción; mientras que, para los materiales con *Tipo de retiro manual<!-- Tipo prelievo Manuale -->* se establecerán la causal<!-- causale --> y el almacén<!-- magazzino --> configurados en el *Tipo picking* del *Tipo picking* utilizado.

## Restaurar registro<!-- Ripristino registrazione -->

En esta pestaña es posible restaurar los movimientos creados previamente.           
Seleccionando una fila es posible visualizar los registros<!-- registrazioni --> y los picking generados, respectivamente en las pestañas **Registros de retiro generados<!-- Registrazioni di prelievo generate -->** y **Picking generados por retiro<!-- Picking generati da prelievo -->**.
Mediante el botón **Eliminar lista de retiro<!-- Cancella lista prelievo -->**, es posible restaurar simultáneamente tanto los movimientos como los picking creados.
Mientras que con los botones **Eliminar registros<!-- Cancella registrazioni -->** y **Eliminar picking<!-- Cancella picking -->**, el usuario puede elegir restaurar solo el registro<!-- registrazione --> o el picking seleccionado.

*Botones específicos*:

> **Eliminar lista de retiro<!-- Cancella lista prelievo -->**: permite restaurar simultáneamente tanto los movimientos como los picking creados.         
> **Eliminar registros<!-- Cancella registrazioni -->**: permite restaurar el registro<!-- registrazione di magazzino --> de almacén seleccionado en la pestaña **Registros de retiro generados<!-- Registrazioni di prelievo generate -->**.        
> **Eliminar picking<!-- Cancella picking -->**: permite restaurar el picking seleccionado en la pestaña **Picking generados por retiro<!-- Picking generati da prelievo -->**.      

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).