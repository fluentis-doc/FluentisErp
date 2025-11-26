---
title: Lista de materiales Ddmrp
sidebar_position: 8
ai_generated: true
---

Este formulario muestra la lista de materiales<!-- distinta base --> de un producto y difiere del formulario de gestión de listas de materiales<!-- form gestione distinte --> de Fluentis, ya que incluye información que solo tiene sentido en un entorno Ddmrp (a través de este formulario no es posible modificar una lista de materiales<!-- distinta base -->).

Los artículos gestionados como inventario Ddmrp<!-- scorta Ddmrp --> se destacan mediante el símbolo de un contenedor en tres colores y para ellos se visualizan informaciones específicas como ADU, DLT, Zona roja, Zona amarilla, Zona verde, Capital de trabajo<!-- capitale circolante -->.

Estos valores corresponden a los válidos hoy y pueden comprobarse en el formulario de **Parámetros Ddmrp<!-- Parametri Ddmrp -->**, mientras que para el capital de trabajo<!-- capitale circolante --> aquí solo se quiere resaltar que el valor se refiere al artículo y no al inventario<!-- scorta --> necesario para producir el producto cuya lista de materiales<!-- distinta base --> está visualizando; por lo tanto, el valor está determinado por la demanda de todos los artículos que requieren el producto en inventario<!-- prodotto a scorta -->. El valor del capital de trabajo<!-- capitale circolante --> mostrado corresponde al último cálculo realizado, por lo tanto si se quiere asegurar que esté actualizado basta con ejecutar el correspondiente procedimiento de cálculo.

Desde este formulario es posible ejecutar el procedimiento [**Cálculo de DLT (lead time desacoplado)**](/docs/ddmrp/procedures/dlt-calculation), el procedimiento [**Cálculo de zonas**](/docs/ddmrp/procedures/zones-calculation), el procedimiento [**Actualización de consumo medio diario (ADU)**](/docs/ddmrp/procedures/adu-update), y el procedimiento [**Cálculo de valores de inventario<!-- valori scorte -->**](/docs/ddmrp/procedures/inventory-value). 

La visualización DDMRP de la lista<!-- distinta --> resulta útil cuando se hacen simulaciones para verificar variaciones de DLT y de capital de trabajo<!-- capitale circolante --> (utilizar el informe de capital de trabajo<!-- stampa capitale circolante --> para un análisis más significativo).

Tenga en cuenta que para algunos artículos que no son inventario Ddmrp<!-- scorte Ddmrp --> igualmente se muestra el correspondiente DLT; esto ocurre para aquellos artículos que están destacados en rojo, es decir, los que se encuentran en el camino crítico de algún producto terminado.

La razón es que algunos de ellos están almacenados en los centros de distribución, por lo tanto, para calcular el DLT en los centros de distribución se debe sumar al tiempo de transporte desde la fábrica el tiempo necesario para la producción de los productos.

Para algunos artículos que no son productos terminados esto se debe a que, para calcular el DLT de un buffer Ddmrp, el procedimiento debe necesariamente calcular dicho valor también para los artículos que se encuentran en el "camino crítico" del buffer.

El procedimiento de cálculo de DLT identifica todos los artículos que se encuentran en los caminos críticos<!-- perorsi critici --> de todas las listas de materiales<!-- distinte base --> presentes en el sistema (por lo tanto, no solo aquellas de artículos en buffer Ddmrp).

En la visualización de listas de materiales Ddmrp<!-- distinte base Ddmrp -->, los artículos presentes en cualquier camino crítico<!-- percorso critico --> se destacan en rojo; por lo tanto, en la visualización de una lista de materiales<!-- distinta base -->, puede haber varias ramas de la lista destacadas en rojo, ya sea porque el producto cuya lista se visualiza puede tener múltiples caminos críticos<!-- percorsi critici --> (cuyos valores DLT serían por tanto iguales), o porque algunas ramas forman parte de caminos críticos de otros productos.

La reducción del tiempo de entrega desacoplado (DLT) del producto cuya lista de materiales<!-- distinta base --> se está visualizando sólo se puede obtener creando un inventario Ddmrp<!-- scorta Ddmrp --> para uno de los artículos destacados en rojo que se encuentra en el camino crítico<!-- percorso critico --> del mismo (esta precisión es necesaria porque en algunos casos puede haber varias ramas de la lista en rojo, algunas de las cuales corresponden a caminos críticos de otros productos); por lo tanto, este tipo de visualización hace sencillo entender qué artículos posicionados en inventario<!-- scorta --> pueden llevar a una disminución del tiempo de entrega<!-- tempo di consegna --> del producto terminado.

La visualización del capital de trabajo<!-- capitale circolante --> permite, además, entender qué elecciones sobre la colocación de inventario<!-- scorte --> permiten simultáneamente reducir el tiempo de entrega<!-- tempo di consegna --> y minimizar el capital de trabajo<!-- capitale circolante --> comprometido para alcanzar tal resultado (consulte el informe de capital de trabajo<!-- stampa del capitale circolante -->).

El costo unitario mostrado para todos los artículos es el utilizado en el último cálculo del Capital de trabajo<!-- Capitale circolante --> invertido en promedio en las existencias Ddmrp (medios, último, estándar), y solo tiene en cuenta los costos de materiales y de trabajos externos para el trabajo subcontratado<!-- conto lavoro -->, es decir, costos atribuibles solamente a proveedores externos (ver la sección correspondiente a dicho cálculo).

Tenga en cuenta que para los artículos de trabajo subcontratado<!-- conto lavoro --> el costo unitario de la operación se deduce restando al costo del artículo el de sus componentes en la lista de materiales<!-- figli di distinta base -->.

Multiplicando esto por la existencia media (zona roja + zona verde/2) se obtiene el valor del capital de trabajo<!-- capitale circolante --> invertido en promedio en el inventario<!-- scorta -->.

Por favor tenga en cuenta que el valor del capital de trabajo<!-- capitale circolante --> mostrado en la lista<!-- distinta --> podría no ser correcto ya que se refiere a los últimos valores encontrados.

De hecho, si después de ese cálculo han cambiado los valores de las zonas de los buffers, o el valor del costo unitario, lo que se visualiza no está actualizado.

Para asegurarse de visualizar el valor correcto y actualizado, ejecute el procedimiento de cálculo del costo del capital de trabajo<!-- calcolo costo capitale circolante --> (cálculo de valores de inventario<!-- calcolo valori scorte -->).