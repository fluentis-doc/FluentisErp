---
title: Cálculo de costo
sidebar_position: 2
ai_generated: true
---

En la parte superior del formulario se encuentra el filtro, en el cual es posible realizar una búsqueda más específica de los artículos<!-- articoli --> a considerar en el procedimiento; en la cuadrícula con los resultados de búsqueda se pueden seleccionar los artículos<!-- articoli --> a considerar. El procedimiento se realiza con el botón de la ribbon bar **Calcular costo de artículos seleccionados<!-- Calcolo costi articoli selezionati -->** que se habilita solo después de seleccionar al menos un artículo<!-- articolo -->.        
Los resultados del procedimiento de cálculo se mostrarán directamente en la cuadrícula de artículos<!-- articoli -->. Con el botón de la ribbon bar **Valorización de lista de materiales<!-- Valorizzazione distinta base -->**, en cambio, se abre la correspondiente impresión, que a su vez contendrá las impresiones de *Valorización de lista de materiales<!-- Valorizzazione distinta base -->* para visualizar en detalle los diferentes componentes que contribuyen al costo total del artículo<!-- articolo -->.         

Los artículos<!-- articoli --> seleccionados en el procedimiento de **Cálculo de Costo<!-- Calcolo Costo -->** serán valorizados según la opción seleccionada en la sección **Valorización en<!-- Valorizzazione a -->**: 
- Último costo<!-- Costo ultimo -->     
- Costo medio        
- Costo estándar<!-- Costo standard -->        
- Costo estándar año próximo<!-- Costo standard anno prossimo -->   

Dependiendo del valor seleccionado, los materiales se calculan tomando el costo correspondiente presente en la pestaña [costos en la ficha del artículo<!-- costi in anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item); mientras que los semielaborados y productos terminados se calculan como suma de los costos de los materiales presentes en la [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) y de los costos de los procesos del [Ciclo<!-- Ciclo -->](/docs/erp-home/registers/production/routes/new-route).
-	**Desde área de gestión<!-- Da area gestionale -->**: si se selecciona esta opción, es necesario indicar junto a ella el Área de gestión<!-- Area gestionale --> de la cual tomar el costo. El área de gestión<!-- area gestionale --> es una tabla compuesta por dos cuadrículas: en la primera se insertan Código y Descripción; en la segunda es posible ingresar una serie de datos como el Tipo de costo<!-- Tipo costo --> a utilizar para el área. La tabla Tipo de costo<!-- Tipo costo --> puede contener a su vez varios tipos de costo<!-- costo -->; incluso puede basarse en los listados de ventas o compras.

La casilla **Actualizar costos de artículos<!-- Aggiorna costi articoli -->** permite actualizar los costos en la ficha de artículos<!-- anagrafica articolo -->. Sin esta casilla, el cálculo no modificará los valores. Es posible elegir Considerar los lotes económicos y además se puede ingresar una fecha desde la cual considerar válidos los nuevos costos.
La parte izquierda **Parámetros de estructura de Listas de materiales<!-- Parametri strutture Distinte base --> y Ciclos<!-- Cicli -->** sirve para indicar qué **Versión de Artículo<!-- Versione Articolo -->** considerar y qué **Ciclo<!-- Ciclo -->** considerar del artículo<!-- articolo -->, para el procedimiento de Cálculo de costos<!-- Calcolo costi -->. En este caso será suficiente seleccionar la casilla correspondiente y las respectivas *Versión<!-- Versione -->* y/o *Ciclo<!-- Ciclo -->*.

Los resultados del procedimiento son visibles haciendo clic en la ribbon bar **Calcular costo de artículos seleccionados<!-- Calcolo costi articoli selezionati -->**; según los parámetros ingresados, solo algunas columnas serán recalculadas.