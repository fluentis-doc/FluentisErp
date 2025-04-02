---
title: visualizzazione giacenze
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
La introducción a la visualización de las existencias de Fluentis constituye un elemento fundamental para una gestión eficiente del almacén. Esta funcionalidad permite a los operadores extraer de manera sencilla y práctica las existencias de almacén, permitiendo monitorear y comparar la existencia física con la lógica.

La visualización de las existencias ofrece la posibilidad de agrupar los datos por artículo, proporcionando también un detalle por almacén. Esto significa que se puede visualizar más de una línea del mismo artículo, si este está presente en diferentes almacenes. Además, el operador puede filtrar los datos por ubicación, proyecto, cliente/proveedor o lote, proporcionando así una vista completa y detallada de las existencias en relación con los diferentes contextos de uso.

En la pestaña de detalle, se accede a información adicional sobre los movimientos de almacén, y desde esta misma pestaña es posible generar registros de almacén para uno o más artículos, cuando pertenecen al mismo almacén. Esta flexibilidad permite una operatividad efectiva, convirtiendo a Fluentis en una herramienta poderosa para la gestión de los recursos logísticos.
:::

El formulario permite al operador extraer fácilmente las existencias de almacén para controlar el almacén y la correspondencia entre la existencia física y lógica.

A través de los filtros, se puede realizar una búsqueda específica según los parámetros y visualizar el resultado de la consulta en las cuadrículas de resultados. Dichos resultados pueden agruparse por varios parámetros para facilitar la lectura de los datos. Desde la ventana también es posible ingresar rápidamente algunos registros de almacén.

Los resultados de la búsqueda se dividen en diferentes pestañas:

## Artículo (Articolo)

Los resultados se agrupan por artículo y se especifican los valores de clase, código de artículo, descripción, segunda descripción, variante (si aplica), descripción de variante (si aplica), cantidad y unidad de medida.

## Almacén (Magazzino)

Los resultados se agrupan por almacén y se especifican, además de los valores de la pestaña artículo, también los valores de almacén y descripción del almacén.

## Ubicación (Ubicazione)

Los resultados se agrupan por ubicación y se especifican, además de los valores de la pestaña artículo, también los valores de ubicación, descripción de ubicación y estado de ubicación.


## Proyectos (Progetti)

Los resultados se agrupan por proyecto y se especifican, además de los valores de la pestaña artículo, también los valores de número, año y descripción del artículo del proyecto.

## Cliente/Proveedor (Cliente/Fornitore)

Los resultados se agrupan por cliente/proveedor (presentes en los registros de almacén) y se especifican, además de los valores de la pestaña artículo, también los valores del cliente/proveedor.

## Lote (Lotto)

Si hay artículos gestionados por lotes, los resultados se agrupan por lote y se especifican, además de los valores de la pestaña artículo, también los valores de almacén, lote y cantidad disponible.

## Orden de producción (Commessa produzione)

Los resultados se agrupan por orden de producción y se especifican, además de los valores de la pestaña artículo, también los valores de almacén, descripción del almacén, ubicación, número de orden de producción y año de la orden de producción.

## Detalle (Dettaglio)

Es el detalle máximo de los resultados agrupados por todas las pestañas anteriores. Se especifican los valores de clase, código de artículo, descripción del artículo, segunda descripción del artículo, variante, descripción de variante, opción, descripción de opción, almacén, ubicación, número de orden, año de orden, descripción de cliente/proveedor, lote, cantidad disponible, cantidad de existencia, unidad de medida y estado de la ubicación.

### Generación de registros (Generazione registrazioni)

En la pestaña **dettaglio** de la existencia del artículo, es posible utilizar el botón **generazione registrazioni** para ingresar registros de almacén.

*Procedimiento*:

- seleccionar un *articolo* en la cuadrícula de resultados, 
- elegir un *magazzino* en los filtros, 
- configurar la visualización de existencias con el indicador en visualizar **giacenza** *Positiva* o *Negativa* dependiendo de si se desea crear un registro de *scarico* o de *carico*,
- presionar el botón *generazione registrazioni*, que abrirá el formulario *movimentazione* donde es necesario ingresar los valores de *causale*, *quantità*, *data registrazione* y, eventualmente, *ubicazione*. Las causas de almacén presentes en el combo son de tipo *carico* si está activo el indicador de visualización de existencias *Negativas (Negative)* y de *scarico* si está activo el indicador de visualización de existencias *Positivas (Positive)*.
- una vez finalizada la entrada de los campos en el formulario *movimentazione*, al presionar el botón *OK*, se abrirá el *Registro* recién creado para poder hacer cambios y la máscara de *visualizzazione giacenze* ya se habrá actualizado en función del registro ingresado.

Cuando se ingresa en el formulario *movimentazione* una causa con contrapartida, esta será propuesta en el campo **causale cpt** con su **ubicazione**, si está codificada en la tabla de la causa.    
Si se elimina la *ubicazione*, se insertará en el registro aquella codificada en la [Mapa de ubicaciones por artículo (Mappa ubicazioni per articolo)](/docs/logistics/warehouse/location/item-location-map), si está presente; de lo contrario, el campo quedará vacío.

### Anulación de existencias (Azzeramento giacenze)

En la pestaña **dettaglio** es posible anular masivamente las existencias de almacén. Normalmente, esta función se utiliza en caso de que haya datos inconsistentes de existencias negativas en el sistema que se desean anular.

*Procedimiento*:
- elegir un *magazzino* en los filtros
- configurar la visualización de existencias con el indicador en visualizar **giacenza** *Positiva* o *Negativa*. 
- en la pestaña *dettaglio* de existencia del artículo seleccionar todos los artículos a anular
- presionar el botón *generazione registrazioni*, el cual abrirá el formulario *movimentazioni* desde el cual elegir la causa y, sin especificar la cantidad, presionar el botón OK.  
De esta manera se notará la anulación de las existencias de los artículos deseados.