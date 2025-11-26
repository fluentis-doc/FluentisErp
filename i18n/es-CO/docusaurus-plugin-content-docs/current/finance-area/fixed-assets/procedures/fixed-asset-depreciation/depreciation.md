---
title: Amortización
sidebar_position: 2
ai_generated: true
---

Ante todo, es de importancia fundamental gestionar la marca **Operaciones incrementales<!-- Operazioni incrementali -->**: dado que el procedimiento de amortización<!-- ammortamento --> se gestiona con lógicas diferenciadas, si la empresa utiliza la opción incremental para sus categorías, será necesario importar este marcador<!-- flag --> a fin de identificar los datos.

Por lo tanto, si existen tanto categorías de activos fijos<!-- categorie cespiti --> con la opción incremental, como categorías sin esta opción, la amortización<!-- ammortamento --> de los activos fijos<!-- cespiti --> deberá realizarse en dos etapas, siguiendo la búsqueda con y sin la marca<!-- flag --> mencionada.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image01.png)

En la parte inferior de la pantalla, se debe configurar el año de referencia del cálculo: normalmente, será necesario modificarlo para insertar el año anterior al actual. No se permite el cálculo de las amortizaciones<!-- ammortamenti --> del año X si no se han contabilizado las amortizaciones<!-- ammortamenti --> del año X-1.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image02.png)

 Una vez realizada la búsqueda de datos, vemos que es posible, fila por fila, forzar el número de días de aplicación así como el porcentaje de amortización<!-- ammortamento -->: se recomienda, en realidad, realizar el cálculo de estos casos particulares directamente dentro de la ficha individual del activo fijo<!-- scheda cespite --> o modificar directamente la tabla de categorías de activos fijos<!-- tabella delle categorie cespiti --> para realizar un cálculo rápido seleccionando la totalidad de las filas.

Una opción alternativa a utilizar, si se desean utilizar porcentajes diferentes para los distintos activos fijos<!-- cespiti -->, puede ser la definición del **[parámetro del módulo de activos fijos<!-- parametro del modulo cespiti -->](/docs/configurations/parameters/finance/fixed-assets-parameters)** denominado **Porcentaje por activo fijo<!-- Percentuale su singolo cespite -->**, que permite definir en la cabecera de cada activo fijo<!-- testata di ogni cespite --> un porcentaje de amortización<!-- percentuale di ammortamento --> a utilizar.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image03.png)



| Función | Significado |
| --- | --- |
| Buscar<!-- Ricerca --> | Busca la lista de amortizaciones<!-- ammortamenti --> a calcular. |
| Amortización<!-- Ammortamento --> | Ejecuta el cálculo para las filas seleccionadas. |