---
title: distinta base ddmrp
sidebar_position: 8
---

Este formulario muestra la lista de materiales de un producto y difiere del formulario de gestión de listas de Fluentis, ya que presenta información que solo tiene sentido en un entorno Ddmrp (a través de este formulario no es posible modificar una lista de materiales).

Los artículos que se gestionan con stock Ddmrp están destacados con el símbolo del bote de basura de tres colores y para ellos se visualizan información específica como ADU, DLT, Zona roja, Zona amarilla, Zona verde, Capital circulante.

Estos valores son los válidos hoy tal como se pueden encontrar en el formulario de **parametri ddmrp**, mientras que para el capital circulante aquí solo se quiere resaltar que el valor se refiere al artículo y no al stock necesario para fabricar el producto cuya lista de materiales se está visualizando, por lo tanto, el valor está determinado por la necesidad de todos los artículos que requieren el producto en stock. El valor del capital circulante mostrado es relativo al último cálculo realizado, por lo que si se desea asegurar que está actualizado, basta con ejecutar el procedimiento de cálculo correspondiente.

Desde este formulario es posible lanzar el procedimiento [**Cálculo DLT (lead time disacoplado)**](/docs/ddmrp/procedures/dlt-calculation), el procedimiento [**Cálculo de zonas**](/docs/ddmrp/procedures/zones-calculation), el procedimiento [**Actualización del consumo medio diario (ADU)**](/docs/ddmrp/procedures/adu-update), y el procedimiento [**Cálculo de valores de stock**](/docs/ddmrp/procedures/inventory-value).

La visualización DDMRP de la lista es útil cuando se realizan simulaciones para verificar las variaciones de DLT y de capital circulante (utilizar la impresión del capital circulante para un análisis más significativo).

Cabe señalar que para algunos artículos que no son stock Ddmrp, aún se muestra el respectivo DLT; esto ocurre para aquellos artículos que están destacados en rojo, es decir, aquellos que se encuentran en la ruta crítica de algún producto terminado.

La razón es que algunos de ellos están almacenados en los centros de distribución; por lo tanto, para calcular el DLT en los centros de distribución, se debe sumar al tiempo de transporte desde la fábrica el tiempo necesario para la realización de los productos.

Para algunos artículos que no son productos terminados, esto se debe a que para calcular el DLT de un buffer Ddmrp, el procedimiento debe necesariamente calcular este valor también para los artículos que se encuentran en el "camino crítico" del buffer.

El procedimiento de cálculo DLT identifica todos los artículos que están en los caminos críticos de todas las listas de materiales presentes en el sistema (por lo tanto, no solo aquellas de artículos con buffer Ddmrp).

En la visualización de listas de materiales Ddmrp, los artículos presentes en cualquier camino crítico se destacan en rojo, por lo tanto, en la visualización de una lista de materiales puede haber múltiples ramas de lista destacadas en rojo, ya sea porque el producto cuya lista se visualiza puede tener múltiples caminos críticos (cuyos valores DLT son así iguales), o porque algunas ramas son partes de caminos críticos de otros productos.

La disminución del tiempo de entrega disacoplado (DLT) del producto cuya lista de materiales se está visualizando solo puede lograrse creando un stock Ddmrp para uno de los artículos destacados en rojo que se encuentra en la ruta crítica del mismo (esta precisión es necesaria ya que en algunos casos puede haber múltiples ramas de lista rojas, algunas de las cuales destacan caminos críticos de otros productos); por lo tanto, este tipo de visualización facilita entender qué artículos en stock pueden llevar a una disminución del tiempo de entrega del producto terminado.

La visualización del capital circulante permite comprender qué decisiones de posicionamiento de stocks permiten simultáneamente reducir el tiempo de entrega y minimizar el capital circulante invertido para lograr ese resultado (ver impresión del capital circulante).

El costo unitario mostrado para todos los artículos es el utilizado en el último cálculo del Capital circulante promedio invertido en stocks Ddmrp (promedio, último, estándar) y solo tiene en cuenta los costos de materiales y de trabajos externos para el trabajo por encargo, es decir, costos atribuibles solo a proveedores externos (ver la sección relacionada con este cálculo).

Cabe señalar que para los artículos de trabajo por encargo, el costo unitario del trabajo se deduce sustrayendo al costo del artículo el de sus hijos de la lista de materiales.

Multiplicando esto por el stock promedio (zona roja + zona verde/2) se obtiene el valor del capital circulante promedio invertido en el stock.

Se ruega tener en cuenta que el valor del capital circulante mostrado en la lista podría no ser correcto, ya que se refiere a los últimos valores encontrados.

Si después de este cálculo se han modificado los valores de las zonas de los buffers, o ha cambiado el valor del costo unitario, lo que se visualiza no está actualizado.

Para asegurarse de visualizar el valor correcto y actualizado, ejecute el procedimiento de cálculo de costo de capital circulante (cálculo de valores de stock).