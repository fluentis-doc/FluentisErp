---
title: "Visualización de existencias"
sidebar_position: 2
description: "Guía para la visualización de existencias de almacén en Fluentis ERP para una gestión eficaz de los recursos logísticos."
schema: "TechArticle"
tags: ["almacén", "existencias", "Fluentis"]
keywords: ["Fluentis ERP", "existencias", "almacén", "recursos logísticos"]
ai_generated: true
---

# Visualización de existencias<!-- Visualizzazione giacenze -->

:::important
¿Para qué sirve?  
La introducción a la visualización de existencias<!-- giacenze --> en Fluentis constituye un elemento fundamental para una gestión eficiente del almacén<!-- magazzino -->. Esta funcionalidad permite a los operadores extraer de manera sencilla y práctica las existencias<!-- giacenze --> de almacén<!-- magazzino -->, posibilitando así monitorizar y comparar la existencia física con la lógica.

La visualización de existencias<!-- giacenze --> ofrece la posibilidad de agrupar los datos por artículo, proporcionando además un detalle por almacén<!-- magazzino -->. Esto significa que es posible visualizar varias filas del mismo artículo si este se encuentra en diferentes almacenes<!-- magazzini -->. Adicionalmente, el operador puede filtrar los datos por ubicación, proyecto, cliente/proveedor o lote, proporcionando así una panorámica completa y detallada de las existencias<!-- giacenze --> en relación con los diferentes contextos de uso.

En la pestaña de detalle, se puede acceder a información adicional sobre los movimientos de almacén<!-- movimenti di magazzino -->, y desde esta misma pestaña es posible generar registros de almacén<!-- registrazioni di magazzino --> para uno o más artículos, siempre y cuando pertenezcan al mismo almacén<!-- magazzino -->. Esta flexibilidad permite una operatividad eficaz, haciendo de Fluentis una herramienta potente para la gestión de los recursos logísticos<!-- risorse logistiche -->.
:::

El formulario permite al operador extraer fácilmente las existencias<!-- giacenze --> de almacén<!-- magazzino --> para controlar el almacén<!-- magazzino --> y la correspondencia entre existencia física y lógica.

A través de los filtros es posible realizar una búsqueda enfocada según los parámetros y visualizar el resultado de la consulta en las rejillas de resultados. Dichos resultados pueden agruparse por varios parámetros para facilitar la lectura de los datos. Desde la ventana también es posible agregar rápidamente algunos registros de almacén<!-- registrazioni di magazzino -->.

Los resultados de la búsqueda se dividen en diferentes pestañas:

## Artículo<!-- Articolo -->

- Los resultados se agrupan por artículo y se especifican los valores de clase, código de artículo, descripción, segunda descripción, variante (si existe), descripción de la variante (si existe), cantidad y unidad de medida.

## Almacén<!-- Magazzino -->

- Los resultados se agrupan por almacén<!-- magazzino --> y se especifican, además de los valores de la pestaña de artículo, también los valores de almacén<!-- magazzino --> y descripción de almacén<!-- descrizione magazzino -->.

## Ubicación<!-- Ubicazione -->

- Los resultados se agrupan por ubicación y se especifican, además de los valores de la pestaña de artículo, también los valores de ubicación, descripción de la ubicación y estado de la ubicación.

## Proyectos<!-- Progetti -->

- Los resultados se agrupan por proyecto y se especifican, además de los valores de la pestaña de artículo, también los valores de número, año y descripción del artículo del proyecto.

## Cliente/Proveedor<!-- Cliente/Fornitore -->

- Los resultados se agrupan por cliente/proveedor (presentes en los registros de almacén<!-- registrazioni di magazzino -->) y se especifican, además de los valores de la pestaña de artículo, también los valores del cliente/proveedor.

## Lote<!-- Lotto -->

- Si hay artículos gestionados por lotes, los resultados se agrupan por lote y se especifican, además de los valores de la pestaña de artículo, también los valores de almacén<!-- magazzino -->, lote y cantidad disponible<!-- disponibilita -->.

## Orden de producción<!-- Commessa produzione -->

- Los resultados se agrupan por orden de producción<!-- commessa di produzione --> y se especifican, además de los valores de la pestaña de artículo, también los valores de almacén<!-- magazzino -->, descripción de almacén<!-- descrizione magazzino -->, ubicación, número de orden de producción<!-- commessa --> y año de la orden de producción<!-- anno commessa -->.

## Detalle<!-- Dettaglio -->

- Es el detalle máximo de los resultados agrupado por todas las pestañas anteriores. Se especifican los valores de clase, código de artículo, descripción de artículo, segunda descripción de artículo, variante, descripción de variante, opción, descripción de opción, almacén<!-- magazzino -->, ubicación, número de orden<!-- commessa -->, año de orden<!-- anno commessa -->, descripción de cliente/proveedor, lote, cantidad disponible<!-- disponibilita -->, cantidad de existencia<!-- giacenza -->, unidad de medida y estado de la ubicación.

### Generación de registros<!-- Generazione registrazioni -->

En la pestaña **Detalle<!-- Dettaglio -->** de la existencia de artículo es posible utilizar el botón **Generación de registros<!-- Generazione registrazioni -->** para ingresar registros de almacén<!-- registrazioni di magazzino -->.

**Procedimiento**:
1. Seleccionar un *Artículo* en la cuadrícula de resultados.
2. Elegir un *Almacén* en los filtros.
3. Configurar la visualización de existencias<!-- giacenze --> marcando **Existencia** *Positiva* o *Negativa* según si se desea crear un registro de *salida* o de *entrada*.
4. Presionar el botón *Generación de registros*, el cual abrirá el formulario *Movimientos* donde es necesario ingresar los valores de *Causal<!-- Causale -->*, *Cantidad*, *Fecha de registro* y eventualmente *Ubicación*. Las causales de almacén<!-- causali di magazzino --> presentes en el desplegable serán de tipo *Entrada<!-- Carico -->* si la visualización es de existencias<!-- giacenze --> *Negativas* y de *Salida<!-- Scarico -->* si es de existencias<!-- giacenze --> *Positivas*.
5. Una vez completada la introducción de los campos en el formulario *Movimientos*, al pulsar el botón *OK* se abrirá el *Registro* recién creado para poder efectuar eventuales modificaciones y la pantalla de *Visualización de existencias<!-- Visualizzazione giacenze -->* ya estará actualizada según el registro ingresado.

Cuando se ingresa en el formulario *Movimientos* una causal<!-- causale --> con contrapartida, esta será propuesta en el campo **Causal CPT** con su **Ubicación**, si está codificada en la tabla de la causal<!-- causale -->.  
Si se elimina la *Ubicación*, se insertará en el registro aquella codificada en la [Mapa de ubicaciones por artículo](/docs/logistics/warehouse/location/item-location-map) si existe, de lo contrario el campo quedará vacío.

### Saneamiento de existencias<!-- Azzeramento giacenze -->

En la pestaña **Detalle<!-- Dettaglio -->** es posible poner a cero de forma masiva las existencias<!-- giacenze --> de almacén<!-- magazzino -->. Generalmente, esta función se utiliza si existen datos incoherentes de existencias<!-- giacenze --> negativas en el sistema que se deseen poner a cero.

**Procedimiento**:
1. Elegir un *Almacén* en los filtros.
2. Configurar la visualización de existencias<!-- giacenze --> marcando **Existencia<!-- Giacenza -->** *Positiva* o *Negativa*.
3. En la pestaña *Detalle* de existencia de artículo, seleccionar todos los artículos a poner a cero.
4. Presionar el botón *Generación de registros*, el cual abrirá el formulario *Movimientos* desde donde elegir la causal<!-- causale --> y, sin especificar la cantidad, presionar el botón *OK*. De esta manera se observará el saneamiento de las existencias<!-- giacenze --> de los artículos deseados.

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

En este documento hemos explorado la funcionalidad de visualización de existencias<!-- giacenze --> en Fluentis, destacando la importancia de gestionar eficazmente los recursos del almacén<!-- magazzino -->. Se han descrito las diferentes formas de agrupación de los datos y los procedimientos para generar registros de almacén<!-- registrazioni di magazzino --> y poner a cero las existencias<!-- giacenze -->.

Para más información, consulta las secciones relativas a la [Mapa de ubicaciones por artículo](/docs/logistics/warehouse/location/item-location-map) y a la gestión de los registros de almacén<!-- registrazioni di magazzino -->.